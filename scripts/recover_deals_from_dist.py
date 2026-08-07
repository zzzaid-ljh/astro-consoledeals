#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
紧急恢复脚本：从上次成功构建的 dist/ HTML 反向解析出 64 个游戏的 deals 数据。
（原因：rebuild_deals_from_excel 在 Excel 被重新生成、链接列变空时把 deals.json 清空了，
 用 dist 里仍带正确联盟链接的渲染结果还原，避免丢数据。）
"""
import json, re, os
from pathlib import Path

ROOT = Path(r"C:\Users\LJH\Desktop\GameDealsSite")
DIST = ROOT / "dist"
OUT = ROOT / "src/data/deals.json"

def slug(s: str) -> str:
    s = s.lower()
    s = s.replace("®", "").replace("™", "").replace(":", " ")
    s = s.replace("’", "").replace("'", "").replace("”", "").replace("“", "").replace('"', "")
    s = re.sub(r"[^a-z0-9 ]", " ", s)
    s = re.sub(r"\s+", "-", s.strip())
    return s

def msrp_for(platform):
    p = str(platform).lower()
    if "switch 2" in p: return 69.99
    if "switch" in p: return 59.99
    if "playstation 5" in p or "ps5" in p: return 69.99
    if "xbox" in p: return 69.99
    if "pc" in p or "steam" in p: return 59.99
    return 59.99

def net_of(href):
    h = href.lower()
    if "amzn.to" in h: return "amazon"
    if "greenmangaming" in h: return "gmg"
    if "humblebundle" in h: return "humble"
    if "fanatical" in h: return "fanatical"
    return "amazon"

# 优先解析首页（含全部 64 个），缺失则从另外两个页面补齐
pages = [DIST / "index.html", DIST / "weekly-deals/index.html", DIST / "new-releases/index.html"]
seen = {}
recovered = 0

for pg in pages:
    if not pg.exists():
        continue
    html = pg.read_text(encoding="utf-8")
    cards = re.findall(r'<article class="deal-card"(.*?)</article>', html, re.S)
    for blk in cards:
        title_m = re.search(r'data-title="([^"]*)"', blk)
        plat_m = re.search(r'data-platform="([^"]*)"', blk)
        tags_m = re.search(r'data-tags="([^"]*)"', blk)
        img_m = re.search(r'<img class="cover" src="([^"]*)"', blk)
        href_m = re.search(r'<a [^>]*href="([^"]*)"[^>]*class="aff-link"', blk)
        note_m = re.search(r'<p class="note"[^>]*>(.*?)</p>', blk, re.S)
        chk_m = re.search(r'Last checked: ([0-9-]+)', blk)
        if not (title_m and href_m):
            continue
        title = title_m.group(1).strip()
        if title in seen:
            continue
        platform = plat_m.group(1).strip() if plat_m else ""
        tags = tags_m.group(1).split() if tags_m and tags_m.group(1) else []
        image = img_m.group(1) if img_m else None
        href = href_m.group(1).strip()
        note = note_m.group(1).strip() if note_m else ""
        last = chk_m.group(1) if chk_m else "2026-08-07"
        net = net_of(href)
        did = slug(title)
        is_search = "search" in href.lower()
        d = {
            "id": did,
            "title": title,
            "network": net,
            "platform": platform,
            "tags": tags,
            "storeUrl": href,
            "note": note,
            "lastChecked": last,
            "urlStatus": "search" if is_search else "verified",
        }
        if image:
            d["image"] = image
        d["productUrl"] = href  # dist 里已是正确的真实链接
        d["originalPrice"] = msrp_for(platform)
        seen[title] = d
        recovered += 1

data = {"deals": list(seen.values())}
OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"已从 dist/ 恢复 {recovered} 个游戏 -> {OUT}")
from collections import Counter
print("网络分布:", dict(Counter(d["network"] for d in data["deals"])))
print("有 image:", sum(1 for d in data["deals"] if d.get("image")), "/", len(data["deals"]))
