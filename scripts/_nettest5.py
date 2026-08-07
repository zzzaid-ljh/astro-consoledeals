import urllib.request, re, ssl
ctx = ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE
HDR = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36","Accept-Language":"en-US,en;q=0.9"}
d = urllib.request.urlopen(urllib.request.Request("https://www.fanatical.com/en/game/hogwarts-legacy", headers=HDR), timeout=30, context=ctx).read().decode("utf-8","ignore")
print("len", len(d))
# meta tags
for m in re.finditer(r'<meta[^>]+(?:price|og:price|product)[^>]*>', d, re.I):
    print("META:", m.group(0)[:160])
# any next_data / preloaded
for key in ["__NEXT_DATA__","__PRELOADED_STATE__","__NUXT__","window.__"]:
    i=d.find(key)
    if i!=-1: print(f"FOUND {key} @ {i}")
# price-like patterns with currency symbols or 'price'
for m in list(re.finditer(r'(?:price|amount|cost)[^a-z]{0,15}["\':=]\s*["\']?\$?(\d{1,3}(?:\.\d{2})?)', d, re.I))[:10]:
    print("tok:", m.group(0)[:70])
# look for any 'Hogwarts' nearby number
for m in re.finditer(r'Hogwarts.{0,400}?(\$\d{1,3}(?:\.\d{2})?|£\d{1,3}(?:\.\d{2})?)', d, re.S):
    print("near-title:", m.group(1))
# British price? list GBP amounts
print("GBP amounts:", re.findall(r'£\s?\d{1,3}(?:\.\d{2})?', d)[:10])
print("USD amounts:", re.findall(r'\$\s?\d{1,3}(?:\.\d{2})?', d)[:10])
