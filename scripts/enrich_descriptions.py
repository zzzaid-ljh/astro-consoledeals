# -*- coding: utf-8 -*-
"""
enrich_descriptions.py
为 deals.json 的 64 个游戏补全 E-E-A-T 文案：
  - description : 45~75 词的主文案（是什么 / 为什么值得玩 / 适合谁 / 价格价值）
  - highlights  : 3 条具体卖点
  - note        : 一句精简的“购买提示”（替换原先的占位 boilerplate）
保留 deals.json 中已有的所有字段（price / originalPrice / storeUrl / image 等）。
"""
import json, os

DEALS = "src/data/deals.json"

# 每个条目：description / highlights(3) / note
KB = {
"animal-crossing-new-horizons": {
  "description": "Animal Crossing: New Horizons is the cozy life-sim that turns a deserted island into your own slow, creative canvas. You build, decorate, fish, and trade at your own pace — no fail states, no timers. It is the comfort-game default for families and anyone who wants a low-pressure world to return to daily.",
  "highlights": ["Relaxing, goal-light life-sim with deep customization", "Terraforming, gardening, and museum collecting", "Local and online visits with friends"],
  "note": "Nintendo first-party rarely drops below MSRP; best value shows up in holiday console bundles."},
"donkey-kong-bananza": {
  "description": "Donkey Kong Bananza is the Switch 2's playful 3D platformer, where DK can smash and reshape the terrain itself with punchy voxel destruction. A young Pauline joins as a sidekick, and the whole thing is built for two-player co-op chaos. It is the system's flagship family platformer.",
  "highlights": ["Terrain-destroying voxel sandbox combat", "Pauline sidekick + drop-in 2-player co-op", "Built as a Switch 2 showcase platformer"],
  "note": "Brand-new release — expect list price; bundle-with-console deals appear first."},
"mario-kart-8-deluxe": {
  "description": "Mario Kart 8 Deluxe is still the definitive Nintendo racer: 48 courses, all DLC included, and a battle mode that rivals the Grand Prix. Tight controls, smart assist for newcomers, and endless local multiplayer make it the safe default party cartridge on any Switch.",
  "highlights": ["48 courses with all DLC included", "Smart Steering assists new players", "Couch and online multiplayer up to 12"],
  "note": "Nintendo kart racers almost never discount; watch eShop seasonal sales only."},
"mario-kart-world": {
  "description": "Mario Kart World is the Switch 2 launch racer with an interconnected open world you can drive across between events. Up to 24 racers share the track, and a Free Roam mode turns the map into a playground. It is the most ambitious Mario Kart yet.",
  "highlights": ["Interconnected open world with Free Roam", "Up to 24 racers per event", "Switch 2 launch-title showcase"],
  "note": "New entry at list price; first discounts usually arrive as console bundles."},
"mario-party-superstars": {
  "description": "Mario Party Superstars bundles 100 minigames and five classic boards from the series' best eras, with clean online play. It is the easiest sell for a game night: pick-up-and-play chaos that works for kids and adults in the same room.",
  "highlights": ["100 minigames from the series' classics", "Five beloved boards, all online-ready", "Perfect pick-up-and-play party game"],
  "note": "A staple gift title; bundle and holiday dips are the common discounts."},
"metroid-prime-4-beyond": {
  "description": "Metroid Prime 4: Beyond returns Samus to first-person Metroidvania exploration after years in waiting. Expect atmospheric planet-hopping, ability-gated backtracking, and precise combat. For series fans it is one of the most anticipated Switch shooters of the generation.",
  "highlights": ["First-person Metroidvania exploration returns", "New abilities and interconnected worlds", "A long-awaited series continuation"],
  "note": "Upcoming release — pre-orders and launch-week stock are the first buying windows."},
"nintendo-switch-sports": {
  "description": "Nintendo Switch Sports packages six motion-control sports — volleyball, soccer, bowling, tennis, badminton, and chambara — into one approachable family package. It is the spiritual successor to Wii Sports and the easiest way to get a room moving.",
  "highlights": ["Six motion-control sports in one package", "Local and online family play", "Spiritual heir to Wii Sports"],
  "note": "Family-friendly and often bundled with Switch Lite or OLED kits."},
"pok-mon-legends-arceus": {
  "description": "Pokemon Legends: Arceus reimagined the formula as an open, real-time catching adventure in the ancient Hisui region. You throw balls mid-action, fill the first Pokedex, and explore a softer, wilder world than the mainline games. A great entry point before Scarlet and Violet.",
  "highlights": ["Open-region, real-time Pokemon catching", "Set in the historical Hisui region", "Softer on-rails pacing than mainline entries"],
  "note": "Check current price and editions on the store before buying."},
"pok-mon-scarlet-38-violet": {
  "description": "Pokemon Scarlet and Violet brought the series fully open-world, with three interwoven storylines and seamless co-op catching. The Paldea region is built for exploration, and the Terastal mechanic adds a new battle layer. It remains the best-selling modern Pokemon pairing.",
  "highlights": ["True open-world Paldea region", "Three storylines plus co-op catching", "Terastal battle mechanic"],
  "note": "Compare editions and current price on the store before buying."},
"ring-fit-adventure": {
  "description": "Ring Fit Adventure hides a full workout inside an RPG: jog, squat, and press your way through a campaign using the included Ring-Con and leg strap. It is the rare fitness game that feels like play, and a genuine option for at-home exercise without a gym.",
  "highlights": ["Exercise minigames wrapped in an RPG", "Includes Ring-Con and leg strap", "Low-impact at-home fitness"],
  "note": "Supply-driven pricing; watch for restocks and sale events."},
"super-mario-bros-wonder": {
  "description": "Super Mario Bros. Wonder is the definitive modern 2D Mario, with the reality-bending Wonder Flower that reshapes each level on the fly. Tight platforming, shared-screen co-op, and collectible badges make it the most inventive side-scroller in years.",
  "highlights": ["Wonder Flower changes levels dynamically", "Up to 4-player shared co-op", "Equippable badges tweak your playstyle"],
  "note": "Full price most of the year; watch holiday and Black Friday dips."},
"super-mario-odyssey": {
  "description": "Super Mario Odyssey is still the best 3D Mario: a globe-trotting sandbox where Cappy lets you capture and control almost anything. Its kingdoms reward curiosity, and the post-game is packed with hidden moons. The standard against which other 3D platformers are measured.",
  "highlights": ["Cappy 'capture' mechanic controls dozens of objects", "Sandbox kingdoms built for exploration", "Huge post-game moon hunt"],
  "note": "Frequently discounted in Nintendo's budget 'Selects' range."},
"super-smash-bros-ultimate": {
  "description": "Super Smash Bros. Ultimate is the ultimate party fighter, stacking more than 80 fighters from across gaming history onto one roster with hundreds of stages. Easy to pick up, brutally deep at high level, and the canonical local-multiplayer brawler on Switch.",
  "highlights": ["80+ fighters from across gaming history", "Hundreds of stages and music tracks", "Local and online competitive play"],
  "note": "A staple gift title; dips show up every major sale period."},
"the-legend-of-zelda-breath-of-the-wild": {
  "description": "The Legend of Zelda: Breath of the Wild rebuilt the open-world formula around a physics sandbox where almost anything can be attempted. Its shrines, towers, and quiet exploration defined a generation of game design and remains essential playing on Switch.",
  "highlights": ["Physics-driven open-world sandbox", "Shrines and towers reward exploration", "A genre-defining Zelda entry"],
  "note": "Compare editions and current price on the store before buying."},
"the-legend-of-zelda-tears-of-the-kingdom": {
  "description": "Tears of the Kingdom expands BotW with Ultrahand building, sky islands, and a vast underground — turning the same map into a fresh creative playground. The fuse and build systems let you invent solutions rather than follow them. The premier Switch adventure.",
  "highlights": ["Ultrahand building and Fuse crafting", "Sky islands plus an underground layer", "Same map, far deeper systems"],
  "note": "Compare editions and current price on the store before buying."},
"007-first-light": {
  "description": "007 First Light is IO Interactive's origin-story take on James Bond, built on the studio's Hitman immersive-sim DNA. Expect gadget-driven stealth, social infiltration, and improvisational takedowns as a young Bond earns his license to kill. A fresh, authored Bond experience.",
  "highlights": ["IO Interactive's immersive-sim Bond origin", "Gadget-driven stealth and social infiltration", "Improvisational, emergent takedowns"],
  "note": "Upcoming title — watch for pre-order and launch pricing."},
"assassins-creed-shadows": {
  "description": "Assassin's Creed Shadows sets the series in feudal Japan with two playable leads — shinobi Naoe and samurai Yasuke — whose styles contrast sharply. Dynamic seasons, a reactive world, and RPG depth make it the franchise's biggest swing in years.",
  "highlights": ["Feudal Japan with dual protagonists", "Naoe stealth vs Yasuke brute force", "Dynamic seasons change the world"],
  "note": "New release — first real discounts land months after launch."},
"astor-blade-of-the-monolith": {
  "description": "Astor: Blade of the Monolith is a colorful action-RPG from C2 Game Studio where you wield runic weapons and summon constructs in fast, combo-driven combat. Across 20+ hours you explore the planet Gliese, shift into the spirit realm to solve puzzles, and face 10 bosses.",
  "highlights": ["Runic weapons and summonable constructs", "Four weapon types swap mid-combo", "20+ hours with a New Game+ mode"],
  "note": "A budget-priced indie ARPG; key stores undercut physical."},
"avatar-frontiers-of-pandora": {
  "description": "Avatar: Frontiers of Pandora is a first-person open-world adventure on the Western Frontier of Pandora, letting you play as a Na'vi defending your home. Massive's Snowdrop engine delivers lush biodiversity, and two-player co-op extends the wild.",
  "highlights": ["First-person open world on Pandora", "Play as a Na'vi with Na'vi skills", "Two-player co-op campaign"],
  "note": "Heavily discounted post-launch on key stores."},
"bayonetta": {
  "description": "Bayonetta is PlatinumGames' stylish action masterclass, where chaining melee and gunplay into Witch Time slow-mo is pure adrenaline. The witch's over-the-top combos and soundtrack make it a benchmark for character action on Switch.",
  "highlights": ["PlatinumGames stylish character action", "Witch Time slow-mo combo system", "Signature over-the-top spectacle"],
  "note": "Compare editions and current price on the store before buying."},
"black-myth-wukong": {
  "description": "Black Myth: Wukong is the 2024 action-RPG retelling Journey to the West, mixing Soulslike challenge with spectacle built on Chinese mythology. Its combat, boss design, and production values made it a global breakout hit.",
  "highlights": ["Soulslike action rooted in Chinese myth", "Dozens of memorable boss fights", "A 2024 global breakout hit"],
  "note": "High demand keeps pricing firm; watch for seasonal drops."},
"call-of-duty-modern-warfare": {
  "description": "Call of Duty: Modern Warfare delivers the series' signature detonation of campaign, tight 6v6 multiplayer, and co-op Spec Ops. The gunplay and weapon customization remain the gold standard for console shooters, and it is the safe pick for competitive play.",
  "highlights": ["Cinematic single-player campaign", "Tight 6v6 multiplayer with deep gunsmith", "Co-op Spec Ops missions"],
  "note": "Compare editions and current price on the store before buying."},
"cyberpunk-2077": {
  "description": "Cyberpunk 2077 is CD Projekt Red's neon-drenched open-world RPG in Night City, where choice drives the story. The Ultimate Edition bundles the acclaimed Phantom Liberty expansion, and steady key-store discounts make it the cheapest it has ever been.",
  "highlights": ["Choice-driven open-world RPG in Night City", "Ultimate Edition includes Phantom Liberty", "Deep build and cyberware customization"],
  "note": "The 'Ultimate Edition' bundles Phantom Liberty; deep, steady discounts."},
"demon-slayer-kimetsu-no-yaiba": {
  "description": "Demon Slayer: Kimetsu no Yaiba brings the hit anime to consoles as an action game built around its signature breathing-style swordplay. A story mode retells key arcs while versus and training modes let fans step into the corps. For anime fans, it is fanservice done right.",
  "highlights": ["Action built on the anime's swordplay", "Story mode retells key arcs", "Versus and training modes"],
  "note": "Compare editions and current price on the store before buying."},
"destiny-2-renegades": {
  "description": "Destiny 2: Renegades is a major expansion for Bungie's loot-and-shoot shooter, layering in a new campaign, destination, raid, and seasonal gear on top of the free core game. It is the headline way to experience the year's story and endgame.",
  "highlights": ["New campaign, destination, and raid", "Builds on the free Destiny 2 core", "Seasonal gear and endgame loops"],
  "note": "An expansion, not the base game; check what it includes."},
"destiny-2-the-collection": {
  "description": "Destiny 2: The Collection bundles the base game with its yearly expansions into one entry package — the most cost-effective way for a newcomer to catch up on story and content without buying each season separately.",
  "highlights": ["Base game plus yearly expansions", "Best-value entry for new players", "Unlocks the bulk of story content"],
  "note": "The value bundle for starting Destiny 2 fresh."},
"destiny-2-the-edge-of-fate": {
  "description": "Destiny 2: The Edge of Fate is the 2025 summer expansion, sending Guardians to the new destination Kepler and overhauling the gear and progression systems. It is the jumping-on point for the game's next multi-year saga.",
  "highlights": ["New destination: Kepler", "Gear and progression system revamp", "Start of a new multi-year saga"],
  "note": "A 2025 expansion — check edition contents before buying."},
"disney-dreamlight-valley": {
  "description": "Disney Dreamlight Valley is a life-sim where Disney and Pixar characters move into your village and you rebuild the world through quests, farming, and decorating. Cozy and collectible, it is the Disney answer to Animal Crossing.",
  "highlights": ["Disney and Pixar characters as villagers", "Farming, fishing, and decorating loops", "Story quests across franchises"],
  "note": "Compare editions and current price on the store before buying."},
"elden-ring": {
  "description": "Elden Ring is FromSoftware's open-world action-RPG co-directed with George R. R. Martin, blending punishing combat with total freedom to explore the Lands Between. Its boss design and sense of discovery made it a multi-Game-of-the-Year winner.",
  "highlights": ["Vast open world with free exploration", "FromSoftware's signature boss design", "Solo or seamless co-op play"],
  "note": "Key stores undercut physical; DLC 'Shadow of the Erdtree' sold separately."},
"final-fantasy-vii-rebirth": {
  "description": "Final Fantasy VII Rebirth is the middle chapter of the FFVII remake trilogy, opening into massive open regions with real-time-synergy combat and a sweeping story. It is a lavish, ambitious JRPG that rewards series fans and newcomers alike.",
  "highlights": ["Open regions with free exploration", "Synergy real-time combat system", "Middle chapter of the remake trilogy"],
  "note": "New release — first real discounts land months in."},
"final-fantasy-xvi": {
  "description": "Final Fantasy XVI is a mature, action-led mainline entry built around cinematic Eikon-versus-Eikon battles and a politically charged story. Its real-time combat and spectacle mark a bold reinvention of the series' tone.",
  "highlights": ["Cinematic Eikon-versus-Eikon battles", "Real-time action combat", "A mature, politically charged story"],
  "note": "Steady key-store discounts post-launch."},
"forza-horizon-5": {
  "description": "Forza Horizon 5 is the open-world racing festival set across a vibrant Mexico, with 500+ cars, seasonally shifting events, and effortless online co-op. Its handling model is approachable yet deep, making it the default Xbox racing game.",
  "highlights": ["500+ cars across open-world Mexico", "Seasonal events and online co-op", "Approachable yet deep driving model"],
  "note": "Xbox digital codes on GMG routinely beat the MS Store."},
"ghost-of-tsushima": {
  "description": "Ghost of Tsushima is Sucker Punch's samurai epic about Jin Sakai defending Tsushima from invasion, with sword combat that rewards patience and a Director's Cut that adds the Iki Island expansion on PS5.",
  "highlights": ["Methodical, stance-based sword combat", "Striking Kurosawa-inspired presentation", "Director's Cut adds Iki Island (PS5)"],
  "note": "Director's Cut on PS5 sees regular key-store cuts."},
"god-of-war-ragnar-k": {
  "description": "God of War Ragnarok is the Norse saga's finale, pairing Kratos and Atreus across the nine realms with brutal, weighty combat and a surprising emotional core. The PS5 version adds dual-character play and refined pacing.",
  "highlights": ["Norse saga finale with Kratos and Atreus", "Weighty, satisfying combat", "PS5 adds dual-character play"],
  "note": "Compare editions and current price on the store before buying."},
"grand-theft-auto-v-enhanced-38-great-white-shark-card-bundle": {
  "description": "This bundle pairs the Enhanced Edition of Grand Theft Auto V with a Great White Shark Card — GTA$ and cooldown-reducing cash for GTA Online. For a fresh Online start it skips the early grind; for story-mode players the base game alone is the draw.",
  "highlights": ["Enhanced Edition of GTA V", "Great White Shark Card = GTA$ + cash bonuses", "Speeds up a GTA Online start"],
  "note": "A game-plus-currency bundle, not a standalone title."},
"halo-infinite": {
  "description": "Halo Infinite重回the series' open-ring sandbox for its campaign and pairs it with a free-to-play multiplayer that remains the console shooter's benchmark for feel. Forge and co-op extend its life well beyond the story.",
  "highlights": ["Open-ring sandbox campaign", "Free-to-play multiplayer with classic feel", "Forge and co-op post-launch"],
  "note": "Campaign + multiplayer; deep key-store discounts."},
"helldivers-2": {
  "description": "Helldivers 2 is the surprise 2024 co-op hit: a satirical PvE shooter where friendly fire is always on and stratagem drops define the chaos. Its skill ceiling and shared panic make every mission a story worth retelling.",
  "highlights": ["Co-op PvE with always-on friendly fire", "Stratagem-driven, skill-based combat", "Satirical galactic war meta-campaign"],
  "note": "Demand-driven pricing; key stores occasionally undercut."},
"horizon-forbidden-west": {
  "description": "Horizon Forbidden West is Guerrilla's open-world sequel following Aloy across a post-machine America, with richer combat, deeper machine hunting, and a PS5 Director's Cut that adds Burning Shores. A technical showcase for the console.",
  "highlights": ["Vast machine-hunting open world", "Deeper combat and traversal tools", "PS5 Director's Cut adds Burning Shores"],
  "note": "PSN digital codes on GMG undercut the PlayStation Store."},
"indiana-jones-and-the-great-circle": {
  "description": "Indiana Jones and the Great Circle is MachineGames' first-person adventure that captures the films' tomb-raiding tension: brawling, puzzles, and globe-trotting set pieces. It is the most authentically 'Indy' game yet made.",
  "highlights": ["First-person Indy adventuring", "Brawling, stealth, and puzzle tombs", "Globe-trotting film-style set pieces"],
  "note": "Compare editions and current price on the store before buying."},
"kingdom-come-deliverance-ii": {
  "description": "Kingdom Come: Deliverance II is the 2025 historical RPG sequel set in 15th-century Bohemia, doubling down on grounded, first-person medieval combat and branching RPG storytelling. No magic, no fantasy — just politics, swords, and consequence.",
  "highlights": ["Grounded 15th-century Bohemia", "First-person medieval combat", "Deeply branching RPG consequences"],
  "note": "New release — first real cuts appear ahead of seasonal events."},
"lego-batman-legacy-of-the-dark-knight": {
  "description": "LEGO Batman: Legacy of the Dark Knight is TT Games' open-world Gotham outing, stitching together eras of the Dark Knight into one family-friendly sandbox of brick-based brawling and puzzles. The safest co-op pick for younger players.",
  "highlights": ["Open-world LEGO Gotham", "Family-friendly co-op brawling", "Spans eras of the Batman mythos"],
  "note": "Compare editions and current price on the store before buying."},
"marvel-t-kon-fighting-souls-ultimate-edition": {
  "description": "MARVEL Tōkon: Fighting Souls is Arc System Works' bold 4-vs-4 team fighter — the Guilty Gear Strive studio building a Marvel brawler for PS5 and PC. Command one lead plus three assists, swap on the fly, and enjoy anime-grade production. A 2026 arrival.",
  "highlights": ["Innovative 4-vs-4 team fighting", "From the Guilty Gear Strive devs", "Marquee Marvel roster, 2026 release"],
  "note": "Upcoming 2026 release — watch for pre-order pricing."},
"marvels-spider-man-2": {
  "description": "Marvel's Spider-Man 2 is Insomniac's bigger, faster NYC swing, letting you play as both Peter Parker and Miles Morales with the symbiote suit raising the stakes. Web-swinging and combat both feel best-in-class on PS5.",
  "highlights": ["Play as Peter and Miles in one story", "Symbiote suit raises the stakes", "Best-in-class web-swinging on PS5"],
  "note": "Compare editions and current price on the store before buying."},
"marvels-spider-man-miles-morales": {
  "description": "Marvel's Spider-Man: Miles Morales is a tighter, self-contained spin-off with its own venom-blast powers and a heartfelt story set during Harlem's winter. The ideal shorter entry point into Insomniac's Spider-Man world.",
  "highlights": ["Miles' unique venom-blast powers", "Self-contained, shorter story", "A gentle entry to the series"],
  "note": "Compare editions and current price on the store before buying."},
"metal-gear-solid-v-the-definitive-experience": {
  "description": "Metal Gear Solid V: The Definitive Experience bundles Ground Zeroes and The Phantom Pain — Kojima's open-ended stealth sandbox where every infiltration is yours to plan. Still the high-water mark for emergent stealth design.",
  "highlights": ["Two games: Ground Zeroes + Phantom Pain", "Emergent open-ended stealth sandbox", "Kojima's stealth design peak"],
  "note": "Compare editions and current price on the store before buying."},
"monster-hunter-wilds": {
  "description": "Monster Hunter Wilds is Capcom's 2025 entry with a seamless, living world and smoother onboarding than ever, while keeping the loop of tracking, carving, and upgrading that defines the series. Co-op hunts remain the core joy.",
  "highlights": ["Seamless, weather-driven living world", "Smoother onboarding for newcomers", "Co-op monster hunting and crafting"],
  "note": "New release — first real cuts appear ahead of seasonal events."},
"ratchet-38-clank-rift-apart": {
  "description": "Ratchet & Clank: Rift Apart is Insomniac's dimension-hopping platformer that uses the SSD for instant world-jumping, with newcomer Rivet joining the duo. Its weapon variety and polish make it a PS5 showcase.",
  "highlights": ["Instant dimension-rift loading (PS5)", "New playable heroine Rivet", "Inventive, varied weapon lineup"],
  "note": "Compare editions and current price on the store before buying."},
"red-dead-redemption-2": {
  "description": "Red Dead Redemption 2 is Rockstar's sprawling western, a prequel whose lived-in world, story, and detail remain unmatched years on. The story mode is a masterpiece, and Red Dead Online extends the frontier. It sits at its lowest-ever key price.",
  "highlights": ["Unmatched open-world detail and story", "Deep protagonist-driven campaign", "Red Dead Online extends the world"],
  "note": "Six years on, it sits at its lowest-ever key price."},
"returnal": {
  "description": "Returnal is Housemarque's roguelike third-person shooter where a time loop traps Selene on a hostile planet — every run reshapes the build and the mystery. Its dual action-horror identity and PS5 haptics make it a standout exclusive.",
  "highlights": ["Roguelike run-based structure", "Blends bullet-hell action and horror", "Showcases PS5 haptics and 3D audio"],
  "note": "Deep cuts appear well after launch."},
"rise-of-the-ronin": {
  "description": "Rise of the Ronin is Team Ninja's open-world action RPG set in late-Edo Japan, where your blade work and faction choices steer a turbulent history. Deep combat and a somber tone mark it as a 2024 standout.",
  "highlights": ["Open-world late-Edo Japan", "Team Ninja's deep melee combat", "Choices reshape the historical story"],
  "note": "2024 release with deepening key-store discounts."},
"silent-hill-townfall": {
  "description": "Silent Hill: Townfall is a new entry in Konami's revived Silent Hill line from a partnered studio, leaning into the franchise's psychological horror. Details are still emerging, so check the store page for the latest feature set and price.",
  "highlights": ["New chapter in the Silent Hill revival", "Psychological horror lineage", "From a Konami-partnered studio"],
  "note": "Announced title — verify features and price on the store."},
"star-wars-outlaws-gold-edition": {
  "description": "Star Wars Outlaws is the first open-world Star Wars game, following scoundrel Kay Vess across syndicate-controlled planets. The Gold Edition bundles the season pass and extras for the most complete launch experience.",
  "highlights": ["First open-world Star Wars game", "Play as scoundrel Kay Vess", "Gold Edition adds season pass + extras"],
  "note": "Gold Edition bundles the season pass; compare before buying."},
"sea-of-thieves-castaways-ancient-coin-pack-550-coins": {
  "description": "This is a 550-coin Ancient Coins top-up for Sea of Thieves, Rare's shared-world pirate adventure — premium currency used for cosmetic outfits, emotes, and ship liveries rather than gameplay progression. Buy it to style your pirate, not to advance the story.",
  "highlights": ["550 Ancient Coins of premium currency", "Unlocks cosmetics, not progression", "For existing Sea of Thieves players"],
  "note": "A currency top-up, not the base game — own Sea of Thieves first."},
"sovereign-tower": {
  "description": "Sovereign Tower is a newer GMG listing whose exact genre and scope are still best confirmed on the store page. If you are curious, check the store for the latest description, system requirements, and current price before you commit.",
  "highlights": ["A recent addition to the GMG catalog", "Check the store for genre and features", "Price varies by region and promo"],
  "note": "Newer title — verify details and price on the store."},
"star-fire-eternal-cycle": {
  "description": "Star Fire: Eternal Cycle is a recent GMG release; the most reliable facts on its genre, modes, and current discount live on the store page. Confirm the description and system requirements there before purchase.",
  "highlights": ["A recent addition to the GMG catalog", "Verify genre and modes on the store", "Price varies by region and promo"],
  "note": "Newer title — verify details and price on the store."},
"starfield": {
  "description": "Starfield is Bethesda's space RPG, a Settled Systems sandbox of 1,000 planets, shipbuilding, and faction quests wrapped in a main story about humanity's place among the stars. Its freedom is the draw; mods and updates keep deepening it.",
  "highlights": ["1,000 explorable planets", "Deep shipbuilding and customization", "Faction-driven RPG quests"],
  "note": "2023 launch; key stores now sit well below launch price."},
"stellar-blade": {
  "description": "Stellar Blade is Shift Up's stylish post-apocalyptic action game, pairing precise parry-focused combat with striking presentation. Its boss encounters and movement make it a 2024 standout for fans of character action.",
  "highlights": ["Precise parry-focused combat", "Striking post-apocalyptic world", "Memorable boss encounters"],
  "note": "2024 release; first real cuts appear months in."},
"the-last-of-us-part-ii-remastered": {
  "description": "The Last of Us Part II Remastered is the definitive PS5 version of Naughty Dog's divisive, devastating sequel, adding the roguelike No Return mode and DualSense feel. A technical and narrative high point for the console.",
  "highlights": ["Definitive PS5 remaster", "Adds the No Return roguelike mode", "DualSense haptics and faster load"],
  "note": "Steady discounts track the HBO show's seasons."},
"witchspire": {
  "description": "Witchspire is a newer GMG listing; the surest details on its genre, platforms, and current discount are on the store page. Check there for the latest description and system requirements before you buy.",
  "highlights": ["A recent addition to the GMG catalog", "Verify genre and platforms on the store", "Price varies by region and promo"],
  "note": "Newer title — verify details and price on the store."},
"he-adventures-of-elliot-the-millennium-tales": {
  "description": "The Adventures of Elliot: The Millennium Tales is a retro-styled action-RPG on Switch, pairing pixel-art presentation with modern action-adventure pacing. A charming pick for players who like classic Zelda-like framing with a fresh coat of paint.",
  "highlights": ["Retro pixel-art action-RPG", "Classic adventure framing", "Nintendo Switch exclusive"],
  "note": "Compare editions and current price on the store before buying."},
"baldurs-gate-ii-enhanced-edition": {
  "description": "Baldur's Gate II: Enhanced Edition is Beamdog's polished rebuild of the CRPG masterpiece, with widescreen support, the bundled expansions, and quality-of-life updates. Decades on, its writing and scope still anchor the genre.",
  "highlights": ["A CRPG masterpiece, enhanced", "Includes all expansions and content", "Widescreen and QoL updates"],
  "note": "Compare editions and current price on Humble before buying."},
"ea-sports-fc-25": {
  "description": "EA Sports FC 25 is the flagship football sim, with 5-vs-5 Rush, refined Career Mode, and the ever-evolving Ultimate Team. The licensed clubs and pitch feel keep it the default for football fans on console.",
  "highlights": ["5-vs-5 Rush and refined Career", "Full licensed clubs and leagues", "Ultimate Team meta progression"],
  "note": "Humble runs frequent promos; prior FC entries hit half-price within months."},
"dying-light-2-stay-human-reloaded-edition": {
  "description": "Dying Light 2 Stay Human: Reloaded Edition is the complete zombie parkour-action package, bundling the base game with post-launch story content and quality updates. Its day-night loop and co-op traversal remain the series' signature.",
  "highlights": ["Parkour-action zombie survival", "Reloaded Edition adds story content", "Co-op traversal and day-night loop"],
  "note": "Compare editions and current price on Fanatical before buying."},
"hogwarts-legacy": {
  "description": "Hogwarts Legacy is the open-world Harry Potter game set in the 1800s, letting you attend Hogwarts, learn spells, and shape your witch or wizard. Its castle and exploration captured a massive audience and regularly clears hard in site-wide sales.",
  "highlights": ["Open-world 1800s Hogwarts", "Learn spells and choose your house", "Massive, well-loved Wizarding World"],
  "note": "Fanatical clears older hits hard — often 50%+ off in events."},
}

def main():
    db = json.load(open(DEALS, encoding="utf-8"))
    deals = db["deals"]
    missing = []
    for d in deals:
        k = d["id"]
        if k not in KB:
            missing.append(k)
            continue
        entry = KB[k]
        d["description"] = entry["description"]
        d["highlights"] = entry["highlights"]
        d["note"] = entry["note"]
    json.dump(db, open(DEALS, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"Enriched {len(deals)-len(missing)}/{len(deals)} deals.")
    if missing:
        print("MISSING from KB:", missing)

if __name__ == "__main__":
    main()
