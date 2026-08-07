import urllib.request, re, sys

urls = {
  "gmg": "https://www.greenmangaming.com/games/elden-ring-pc/",
  "amazon": "https://amzn.to/4wNJW7Q",
  "humble": "https://www.humblebundle.com/store/baldurs-gate-ii-enhanced-edition?hmb_source=search_bar",
  "fanatical": "https://www.fanatical.com/en/game/hogwarts-legacy",
}
for k, u in urls.items():
    try:
        req = urllib.request.Request(u, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
        })
        r = urllib.request.urlopen(req, timeout=30)
        data = r.read(200000).decode("utf-8", "ignore")
        print(f"[{k}] status={r.status} final={r.geturl()[:90]}")
        # Check for region block
        if "UNAVAILABLE WHERE YOU LIVE" in data.upper() or "unavailable in your region" in data.lower():
            print("   >> REGION BLOCKED")
        hits = re.findall(r'(?:\$|USD\s?|US\$)\s?\d{1,3}(?:\.\d{2})?', data)
        print("   pricehits:", hits[:15])
    except Exception as e:
        print(f"[{k}] ERROR {type(e).__name__}: {str(e)[:160]}")
