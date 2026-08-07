#!/usr/bin/env python3
"""
fetch_prices.py —— 根据 deals.json 里的商品链接，抓取各商店的「当前售价」并写回 deals.json。

规则：
- 只写 deal.price（当前售价）；originalPrice（MSRP）保留不动，用作「Save X%」的对照基准。
- 抓取失败的（Fanatical 的 JS 渲染页 / GMG 的 search 搜索页 / 网络错误）保持原样，仅记录原因。
- 货币只接受 USD（价格串须含 "$"；Humble 须 priceCurrency==USD）。
- 顺序请求 + 随机延时，失败重试，礼貌抓取。
"""
import json, re, ssl, time, random, sys, os, urllib.request as urllib_request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEALS = os.path.join(ROOT, "src", "data", "deals.json")
REPORT = os.path.join(ROOT, "scripts", "price_fetch_report.csv")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HDR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}
TODAY = "2026-08-07"

def fetch(url, tries=3):
    last = None
    for i in range(tries):
        try:
            req = urllib_request.Request(url, headers=HDR)
            r = urllib_request.urlopen(req, timeout=30, context=ctx)
            data = r.read(800000).decode("utf-8", "ignore")
            return data, None
        except Exception as e:
            last = f"{type(e).__name__}: {str(e)[:80]}"
            time.sleep(1.5 + i * 2)
    return None, last

def num(s):
    m = re.search(r'([\d,]+(?:\.\d{2})?)', s)
    return float(m.group(1).replace(",", "")) if m else None

def extract_amazon(html):
    # 主购买框价格通常在第一个 a-offscreen
    for m in re.finditer(r'a-offscreen">\$?\s*([\d,]+(?:\.\d{2})?)', html):
        v = num(m.group(1))
        if v and 1 <= v <= 999:
            return v
    return None

def extract_gmg(html):
    if "UNAVAILABLE WHERE YOU LIVE" in html.upper():
        return None
    m = re.search(r'"FormattedCurrentPrice"\s*:\s*"([^"]*)"', html)
    if m:
        v = num(m.group(1))
        if v:
            return v
    for blk in re.finditer(r'application/ld\+json">(.*?)</script>', html, re.S):
        try:
            obj = json.loads(blk.group(1))
        except Exception:
            continue
        off = obj.get("offers")
        if isinstance(off, dict) and off.get("price"):
            return float(off["price"])
        if obj.get("price"):
            return float(obj["price"])
    return None

def extract_humble(html):
    for blk in re.finditer(r'application/ld\+json">(.*?)</script>', html, re.S):
        try:
            obj = json.loads(blk.group(1))
        except Exception:
            continue
        if obj.get("priceCurrency") and obj["priceCurrency"] != "USD":
            continue
        off = obj.get("offers")
        if isinstance(off, dict) and off.get("price"):
            return float(off["price"])
        if obj.get("price"):
            return float(obj["price"])
    return None

EXTRACTORS = {"amazon": extract_amazon, "gmg": extract_gmg, "humble": extract_humble}

def main():
    with open(DEALS, encoding="utf-8") as f:
        db = json.load(f)

    rows = []
    ok = skip = fail = 0
    for deal in db["deals"]:
        title = deal.get("title", "")
        net = deal.get("network", "")
        url = deal.get("productUrl") or deal.get("storeUrl") or ""
        reason = ""

        if deal.get("urlStatus") == "search":
            reason = "search-link(no single product price)"
            skip += 1
        elif net == "fanatical":
            reason = "JS-rendered page, no static price"
            skip += 1
        elif net not in EXTRACTORS:
            reason = f"no extractor for network={net}"
            skip += 1
        else:
            html, err = fetch(url)
            if html is None:
                reason = f"fetch-failed: {err}"
                fail += 1
            else:
                price = EXTRACTORS[net](html)
                if price is None:
                    reason = "price-not-found-in-html"
                    fail += 1
                else:
                    deal["price"] = round(price, 2)
                    deal["lastChecked"] = TODAY
                    ok += 1
                    rows.append((title, net, f"${deal['price']:.2f}",
                                 f"MSRP ${deal.get('originalPrice',0):.2f}",
                                 "OK"))
                    time.sleep(random.uniform(0.3, 0.7))
                    continue

        rows.append((title, net, "—", f"MSRP ${deal.get('originalPrice',0):.2f}", reason))
        time.sleep(random.uniform(0.2, 0.5))

    with open(DEALS, "w", encoding="utf-8") as f:
        json.dump(db, f, indent=2, ensure_ascii=False)
        f.write("\n")

    with open(REPORT, "w", encoding="utf-8") as f:
        f.write("title,network,current_price,msrp,status\n")
        for r in rows:
            f.write(",".join('"' + c.replace('"', "'") + '"' for c in r) + "\n")

    print(f"DONE.  priced={ok}  skipped={skip}  failed={fail}  total={len(db['deals'])}")
    print(f"Report: {REPORT}\n")
    for r in rows:
        flag = "" if r[4] == "OK" else f"   << {r[4]}"
        print(f"  [{r[1]:8}] {r[2]:>9}  {r[0][:42]}{flag}")

if __name__ == "__main__":
    main()
