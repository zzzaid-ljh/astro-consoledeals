#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""给 deals.json 每个游戏注入 productUrl（具体商品页）与 urlStatus（verified/predicted）。
- Amazon / Fanatical: 已逐个 WebSearch 核实，urlStatus=verified
- Humble / GMG: 无法稳定核实（Humble 404、GMG Distil 反爬），用最佳猜测 slug，urlStatus=predicted
这样 Excel「当前商品链接」列就是具体商品页；用户回填联盟链接时以此定位商品。
"""
import json
from pathlib import Path

ROOT = Path(r"C:\Users\LJH\Desktop\GameDealsSite")
SRC = ROOT / "src/data/deals.json"
data = json.loads(SRC.read_text(encoding="utf-8"))
deals = data["deals"]

# Amazon: 已核实 ASIN（干净 /dp/ 形式，带 tracking 的链接已剥离）
AMAZON_ASIN = {
    "mario-kart-8-deluxe": "B01N1037CV",
    "zelda-tears-of-the-kingdom": "B097B2YWFX",
    "super-mario-bros-wonder": "B0C8VHZR14",
    "animal-crossing-new-horizons": "B07SR1BRN5",
    "super-mario-odyssey": "B01MY7GHKJ",
    "pokemon-scarlet-violet": "B0B324SSTJ",
    "mario-kart-world": "B0FDMVPVW9",
    "donkey-kong-bananza": "B0F66KLYVH",
    "metroid-prime-4-beyond": "B0FQXR2NPH",
    "zelda-breath-of-the-wild": "B01MS6MO77",
    "super-smash-bros-ultimate": "B07BHGGHX1",
    "mario-party-superstars": "B097B2HQ5R",
    "pokemon-legends-arceus": "B0914YGQSH",
    "nintendo-switch-sports": "B09KRK6C82",
    "ring-fit-adventure": "B07XV4NHHN",
}

# Fanatical: 已核实 en/game/ 商品页
FANATICAL_URL = {
    "hogwarts-legacy": "https://www.fanatical.com/en/game/hogwarts-legacy",
    "dying-light-2": "https://www.fanatical.com/en/game/dying-light-2-stay-human",
}

# Humble: 最佳猜测 slug（WebFetch 实测 /store/baldurs-gate-3 与 /store/ea-sports-fc-25 均 404，
# 搜索也搜不到官方商品页，故标记 predicted，用户需在 Humble 里确认）
HUMBLE_URL = {
    "baldurs-gate-3": "https://www.humblebundle.com/store/baldurs-gate-3",
    "ea-sports-fc-25": "https://www.humblebundle.com/store/ea-sports-fc-25",
}

# GMG 个别 slug 与 deal id 不一致，单独指定；其余直接用 id
GMG_SLUG_OVERRIDE = {
    "gta-vi": "grand-theft-auto-6",
}

updated = 0
for d in deals:
    net = d["network"]
    did = d["id"]
    new = {}
    for k, v in d.items():
        new[k] = v
        if k == "storeUrl":
            if net == "amazon" and did in AMAZON_ASIN:
                new["productUrl"] = f"https://www.amazon.com/dp/{AMAZON_ASIN[did]}"
                new["urlStatus"] = "verified"
            elif net == "fanatical" and did in FANATICAL_URL:
                new["productUrl"] = FANATICAL_URL[did]
                new["urlStatus"] = "verified"
            elif net == "humble" and did in HUMBLE_URL:
                new["productUrl"] = HUMBLE_URL[did]
                new["urlStatus"] = "predicted"
            elif net == "gmg":
                slug = GMG_SLUG_OVERRIDE.get(did, did)
                new["productUrl"] = f"https://www.greenmangaming.com/games/{slug}"
                new["urlStatus"] = "predicted"
            else:
                new["productUrl"] = v
                new["urlStatus"] = "unknown"
    d.clear()
    d.update(new)
    updated += 1

SRC.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
print("updated deals:", updated)
# 统计
from collections import Counter
c = Counter(d["urlStatus"] for d in deals)
print("urlStatus 分布:", dict(c))
# 抽查
for did in ["mario-kart-8-deluxe", "zelda-breath-of-the-wild", "dying-light-2", "baldurs-gate-3", "luigis-mansion-3", "gta-vi"]:
    dd = next(x for x in deals if x["id"] == did)
    print(did, "->", dd["urlStatus"], dd["productUrl"])
