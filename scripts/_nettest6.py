import urllib.request, re, ssl, json
ctx = ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE
HDR = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36","Accept-Language":"en-US,en;q=0.9"}
d = urllib.request.urlopen(urllib.request.Request("https://www.greenmangaming.com/games/elden-ring-pc/", headers=HDR), timeout=30, context=ctx).read().decode("utf-8","ignore")

# All JSON-LD blocks
print("=== JSON-LD blocks ===")
for m in re.finditer(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', d, re.S):
    try:
        obj = json.loads(m.group(1))
    except Exception:
        continue
    print(" @type:", obj.get("@type"), "| name:", (obj.get("name") or "")[:40],
          "| price:", obj.get("price"), "| cur:", obj.get("priceCurrency"),
          "| offers:", (obj.get("offers") or {}).get("price") if isinstance(obj.get("offers"),dict) else None)

# The embedded offer objects: capture product name + current + rrp context
print("=== embedded offer objects (name / CurrentPrice / Rrp) ===")
for m in re.finditer(r'"Name"\s*:\s*"([^"]+)".*?"CurrentPrice"\s*:\s*([0-9.]+).*?"FormattedRrp"\s*:\s*"([^"]*)"', d):
    print(f"  {m.group(1)[:35]!r:37} current={m.group(2)} rrp={m.group(3)}")
