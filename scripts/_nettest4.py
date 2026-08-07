import urllib.request, re, ssl, json
ctx = ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE
HDR = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36","Accept-Language":"en-US,en;q=0.9"}
def fetch(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=HDR), timeout=30, context=ctx).read(600000).decode("utf-8","ignore")

def show(name, d):
    print("="*30, name, "len", len(d))
    for m in re.finditer(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', d, re.S):
        try:
            obj = json.loads(m.group(1))
            print("  LD+JSON @type:", obj.get("@type"), "price:", obj.get("price"), "cur:", obj.get("priceCurrency"),
                  "offers:", (obj.get("offers") or {}).get("price") if isinstance(obj.get("offers"),dict) else None)
        except Exception as ex:
            print("  LD+JSON parse-fail", str(ex)[:60])
    # generic price token near 'price'
    for m in list(re.finditer(r'"(?:price|current_price|amount|priceInCents)"\s*:\s*("?[\d.]+"?)', d))[:8]:
        print("  price-token:", m.group(0)[:60])

show("HUMBLE", fetch("https://www.humblebundle.com/store/baldurs-gate-ii-enhanced-edition?hmb_source=search_bar"))
show("FAN", fetch("https://www.fanatical.com/en/game/hogwarts-legacy"))
