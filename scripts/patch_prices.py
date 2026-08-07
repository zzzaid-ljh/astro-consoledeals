#!/usr/bin/env python3
"""Patch pass: (1) price the 2 Humble product pages wrongly skipped; (2) self-correct
originalPrice when the fetched price exceeds the guessed MSRP (avoids broken strikethrough)."""
import json, re, ssl, time, os, urllib.request as ureq

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEALS = os.path.join(ROOT, "src", "data", "deals.json")
REPORT = os.path.join(ROOT, "scripts", "price_fetch_report.csv")

ctx = ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE
HDR = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36","Accept-Language":"en-US,en;q=0.9"}
TODAY="2026-08-07"

def fetch(u):
    try:
        r = ureq.urlopen(ureq.Request(u, headers=HDR), timeout=30, context=ctx)
        return r.read(800000).decode("utf-8","ignore"), None
    except Exception as e:
        return None, f"{type(e).__name__}: {str(e)[:80]}"

def extract_humble(html):
    for blk in re.finditer(r'application/ld\+json">(.*?)</script>', html, re.S):
        try: obj=json.loads(blk.group(1))
        except Exception: continue
        if obj.get("priceCurrency") and obj["priceCurrency"]!="USD": continue
        off=obj.get("offers")
        if isinstance(off,dict) and off.get("price"): return float(off["price"])
        if obj.get("price"): return float(obj["price"])
    return None

with open(DEALS, encoding="utf-8") as f:
    db=json.load(f)

# 1) price the 2 Humble product pages
target_ids={"baldurs-gate-ii-enhanced-edition","ea-sports-fc-25"}
for deal in db["deals"]:
    if deal.get("id") in target_ids and deal.get("price") is None:
        url=deal.get("productUrl") or deal.get("storeUrl")
        html,err=fetch(url)
        if html:
            p=extract_humble(html)
            if p:
                deal["price"]=round(p,2); deal["lastChecked"]=TODAY
                print(f"  priced Humble {deal['title'][:30]}: ${p:.2f}")
            else:
                print(f"  Humble {deal['id']}: price-not-found")
        else:
            print(f"  Humble {deal['id']}: fetch-failed {err}")
        time.sleep(1)

# 2) self-correct originalPrice where price > originalPrice
fixed=0
for deal in db["deals"]:
    p=deal.get("price"); o=deal.get("originalPrice")
    if p is not None and (o is None or o < p - 0.001):
        deal["originalPrice"]=round(p,2); fixed+=1

with open(DEALS,"w",encoding="utf-8") as f:
    json.dump(db,f,indent=2,ensure_ascii=False); f.write("\n")

# append corrected Humble rows to report
with open(REPORT,"a",encoding="utf-8") as f:
    for deal in db["deals"]:
        if deal.get("id") in target_ids:
            f.write(f'"{"Humble "+deal["title"]}","humble","${deal.get("price",0):.2f}","MSRP ${deal.get("originalPrice",0):.2f}","OK(patched)"\n')

print(f"originalPrice self-corrected for {fixed} deals.")
print("Report updated:", REPORT)
