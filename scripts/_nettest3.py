import urllib.request, re, ssl
ctx = ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE
HDR = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36","Accept-Language":"en-US,en;q=0.9"}

def fetch(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=HDR), timeout=30, context=ctx).read(400000).decode("utf-8","ignore")

for name,u in [("GMG","https://www.greenmangaming.com/games/elden-ring-pc/"),
               ("FAN","https://www.fanatical.com/en/game/hogwarts-legacy")]:
    d = fetch(u)
    print("="*30, name)
    # surrounding context for each $
    for m in list(re.finditer(r'\$[0-9][0-9,]*(?:\.[0-9]{2})?', d))[:12]:
        s=max(0,m.start()-50); e=min(len(d),m.end()+20)
        print("  …", re.sub(r'\s+',' ', d[s:e]), "…")
    # JSON-LD price blocks
    for m in re.finditer(r'"price"\s*:\s*("?[0-9.]+"?)', d):
        print("  JSONLD price:", m.group(1))
    for m in re.finditer(r'data-[a-z-]*price[a-z-]*="([0-9.]+)"', d):
        print("  data-price:", m.group(1))
