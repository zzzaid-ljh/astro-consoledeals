import urllib.request, re, ssl, json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HDR = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
       "Accept-Language": "en-US,en;q=0.9"}

def fetch(u, n=300000):
    req = urllib.request.Request(u, headers=HDR)
    r = urllib.request.urlopen(req, timeout=30, context=ctx)
    return r.read(n).decode("utf-8", "ignore")

# GMG
try:
    d = fetch("https://www.greenmangaming.com/games/elden-ring-pc/")
    print("[gmg] len", len(d), "REGION_BLOCK" if "UNAVAILABLE WHERE YOU LIVE" in d.upper() else "OK")
    # GMG embeds price in JSON-LD or data attributes
    m = re.findall(r'"price"\s*:\s*"?\$?(\d+(?:\.\d{2})?)"?', d)
    print("   gmg price-ish:", m[:8])
    m2 = re.findall(r'data-price="(\d+\.\d{2})"', d)
    print("   data-price:", m2[:5])
except Exception as e:
    print("[gmg] ERR", e)

# Fanatical
try:
    d = fetch("https://www.fanatical.com/en/game/hogwarts-legacy")
    print("[fanatical] len", len(d))
    m = re.findall(r'(?:data-|")(?:price|currentPrice|amount)"\s*[:=]\s*"?\$?(\d+(?:\.\d{2})?)"?', d)
    print("   fan price-ish:", m[:8])
    # currency?
    print("   hasGBP:", "£" in d[:200000], "hasUSD:", "$" in d[:200000])
except Exception as e:
    print("[fanatical] ERR", e)

# Amazon - dump price area
try:
    d = fetch("https://amzn.to/4wNJW7Q", n=1500000)
    for tok in ["a-offscreen", "a-price-whole", "priceblock_ourprice", "corePriceToPay"]:
        i = d.find(tok)
        if i != -1:
            print(f"[amazon] found {tok} @ {i}:", d[i:i+120].replace("\n"," "))
except Exception as e:
    print("[amazon] ERR", e)
