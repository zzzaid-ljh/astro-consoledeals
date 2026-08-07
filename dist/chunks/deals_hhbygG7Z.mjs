import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AffiliateLink } from './AffiliateLink_Csky0RjZ.mjs';
/* empty css                         */

const $$Astro = createAstro("https://consoledeals.cc.cd");
const $$DealCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DealCard;
  const { deal } = Astro2.props;
  const storeName = deal.network === "amazon" ? "Amazon" : deal.network === "gmg" ? "Green Man Gaming" : deal.network === "humble" ? "Humble Bundle" : "Fanatical";
  const cover = deal.image ? deal.image : `/covers/${deal.id}.svg`;
  const tags = (deal.tags || []).join(" ");
  return renderTemplate`${maybeRenderHead()}<article class="deal-card"${addAttribute(deal.title, "data-title")}${addAttribute(deal.platform, "data-platform")}${addAttribute(tags, "data-tags")} data-astro-cid-icvw3xsl> <img class="cover"${addAttribute(cover, "src")}${addAttribute(deal.title, "alt")} width="140" height="187" loading="lazy" data-astro-cid-icvw3xsl> <div class="deal-head" data-astro-cid-icvw3xsl> <h3 data-astro-cid-icvw3xsl>${deal.title}</h3> <span class="platform" data-astro-cid-icvw3xsl>${deal.platform}</span> </div> <p class="note" data-astro-cid-icvw3xsl>${deal.note}</p> ${renderComponent($$result, "AffiliateLink", $$AffiliateLink, { "network": deal.network, "href": deal.storeUrl, "cta": `View on ${storeName}`, "data-astro-cid-icvw3xsl": true })} <p class="checked" data-astro-cid-icvw3xsl>Last checked: ${deal.lastChecked} — verify price on store.</p> </article> `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/components/DealCard.astro", void 0);

const lastUpdated = "2026-08-05";
const deals = [
	{
		id: "mario-kart-8-deluxe",
		title: "Mario Kart 8 Deluxe",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/3RRsVdI",
		productUrl: "https://www.amazon.com/dp/B01N1037CV",
		urlStatus: "verified",
		note: "Nintendo first-party rarely dips below MSRP. Best discounts show up in eShop seasonal sales and bundle offers.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		],
		image: "/covers/mario-kart-8-deluxe.jpg"
	},
	{
		id: "zelda-tears-of-the-kingdom",
		title: "The Legend of Zelda: Tears of the Kingdom",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4xrrkud",
		productUrl: "https://www.amazon.com/dp/B097B2YWFX",
		urlStatus: "verified",
		note: "A 2023 GOTY contender. Digital editions occasionally drop during Nintendo eShop holiday sales.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		],
		image: "/covers/zelda-tears-of-the-kingdom.jpg"
	},
	{
		id: "super-mario-bros-wonder",
		title: "Super Mario Bros. Wonder",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/45Plnv6",
		productUrl: "https://www.amazon.com/dp/B0C8VHZR14",
		urlStatus: "verified",
		note: "The definitive 2D Mario. Full price most of the year; watch for holiday and Black Friday dips.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		],
		image: "/covers/super-mario-bros-wonder.jpg"
	},
	{
		id: "animal-crossing-new-horizons",
		title: "Animal Crossing: New Horizons",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4wNJW7Q",
		productUrl: "https://www.amazon.com/dp/B07SR1BRN5",
		urlStatus: "verified",
		note: "The cozy-life sim evergreen. Often bundled with consoles; standalone dips appear in big seasonal sales.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		],
		image: "/covers/animal-crossing-new-horizons.jpg"
	},
	{
		id: "super-mario-odyssey",
		title: "Super Mario Odyssey",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/45QLG45",
		productUrl: "https://www.amazon.com/dp/B01MY7GHKJ",
		urlStatus: "verified",
		note: "Still the best 3D Mario. Frequently discounted in Nintendo's budget 'Selects' range.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		],
		image: "/covers/super-mario-odyssey.jpg"
	},
	{
		id: "pokemon-scarlet-violet",
		title: "Pokémon Scarlet & Violet",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4q4oucf",
		productUrl: "https://www.amazon.com/dp/B0B324SSTJ",
		urlStatus: "verified",
		note: "The open-world Pokémon duo. Dual-pack and eShop sales appear a few times a year.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		],
		image: "/covers/pokemon-scarlet-violet.jpg"
	},
	{
		id: "mario-kart-world",
		title: "Mario Kart World",
		platform: "Nintendo Switch 2",
		network: "amazon",
		storeUrl: "https://amzn.to/4pZh1et",
		productUrl: "https://www.amazon.com/dp/B0FDMVPVW9",
		urlStatus: "verified",
		note: "The Switch 2 launch racer. New entry, so expect list price; bundle-with-console deals are the first to appear.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"new-release"
		],
		image: "/covers/mario-kart-world.jpg"
	},
	{
		id: "donkey-kong-bananza",
		title: "Donkey Kong Bananza",
		platform: "Nintendo Switch 2",
		network: "amazon",
		storeUrl: "https://amzn.to/4q2cHLd",
		productUrl: "https://www.amazon.com/dp/B0F66KLYVH",
		urlStatus: "verified",
		note: "A fresh 3D platformer exclusive to Switch 2. New release — watch for holiday bundles later in the year.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		],
		image: "/covers/donkey-kong-bananza.jpg"
	},
	{
		id: "metroid-prime-4-beyond",
		title: "Metroid Prime 4: Beyond",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4fRrp33",
		productUrl: "https://www.amazon.com/dp/B0FQXR2NPH",
		urlStatus: "verified",
		note: "The long-awaited return of Samus. Pre-orders and launch-week stock are the first buying windows.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		],
		image: "/covers/metroid-prime-4-beyond.jpg"
	},
	{
		id: "zelda-breath-of-the-wild",
		title: "The Legend of Zelda: Breath of the Wild",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4fUg8zb",
		productUrl: "https://www.amazon.com/dp/B01MS6MO77",
		urlStatus: "verified",
		note: "The open-world classic. Continuously discounted in Nintendo Selects; a safe cheap pickup.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		],
		image: "/covers/zelda-breath-of-the-wild.jpg"
	},
	{
		id: "luigis-mansion-3",
		title: "Luigi's Mansion 3",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=luigis+mansion+3",
		productUrl: "https://www.greenmangaming.com/games/luigis-mansion-3",
		urlStatus: "predicted",
		note: "Charming solo/co-op haunted-house action. GMG digital keys often sit below Nintendo eShop pricing.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "super-smash-bros-ultimate",
		title: "Super Smash Bros. Ultimate",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4xqwYwK",
		productUrl: "https://www.amazon.com/dp/B07BHGGHX1",
		urlStatus: "verified",
		note: "The ultimate party fighter. Staple gift title; dips show up every major sale period.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		],
		image: "/covers/super-smash-bros-ultimate.jpg"
	},
	{
		id: "splatoon-3",
		title: "Splatoon 3",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=splatoon+3",
		productUrl: "https://www.greenmangaming.com/games/splatoon-3",
		urlStatus: "predicted",
		note: "Nintendo's ink-splatting shooter. Digital keys through GMG routinely beat eShop direct.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "kirby-and-the-forgotten-land",
		title: "Kirby and the Forgotten Land",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=kirby+and+the+forgotten+land",
		productUrl: "https://www.greenmangaming.com/games/kirby-and-the-forgotten-land",
		urlStatus: "predicted",
		note: "The pink puffball's first 3D adventure. Quietly discounted several times a year.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "pikmin-4",
		title: "Pikmin 4",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=pikmin+4",
		productUrl: "https://www.greenmangaming.com/games/pikmin-4",
		urlStatus: "predicted",
		note: "Accessible strategy-adventure. GMG keys typically undercut the eShop list price.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "xenoblade-chronicles-3",
		title: "Xenoblade Chronicles 3",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=xenoblade+chronicles+3",
		productUrl: "https://www.greenmangaming.com/games/xenoblade-chronicles-3",
		urlStatus: "predicted",
		note: "A massive JRPG. Long RPGs like this see steady digital-key discounts on GMG.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "bayonetta-3",
		title: "Bayonetta 3",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=bayonetta+3",
		productUrl: "https://www.greenmangaming.com/games/bayonetta-3",
		urlStatus: "predicted",
		note: "PlatinumGames' stylish action title. Niche but frequently price-cut on key stores.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "fire-emblem-engage",
		title: "Fire Emblem Engage",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=fire+emblem+engage",
		productUrl: "https://www.greenmangaming.com/games/fire-emblem-engage",
		urlStatus: "predicted",
		note: "Tactical RPG with a loyal fanbase. Discounts appear a few months after release.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "mario-party-superstars",
		title: "Mario Party Superstars",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4hjNmdI",
		productUrl: "https://www.amazon.com/dp/B097B2HQ5R",
		urlStatus: "verified",
		note: "The go-to local multiplayer party game. Bundle and holiday dips are common.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		],
		image: "/covers/mario-party-superstars.jpg"
	},
	{
		id: "pokemon-legends-arceus",
		title: "Pokémon Legends: Arceus",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4wUHyft",
		productUrl: "https://www.amazon.com/dp/B0914YGQSH",
		urlStatus: "verified",
		note: "The open-world Pokémon prequel. Well past launch — steady Selects-range pricing.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		],
		image: "/covers/pokemon-legends-arceus.jpg"
	},
	{
		id: "hyrule-warriors-age-of-calamity",
		title: "Hyrule Warriors: Age of Calamity",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=hyrule+warriors+age+of+calamity",
		productUrl: "https://www.greenmangaming.com/games/hyrule-warriors-age-of-calamity",
		urlStatus: "predicted",
		note: "Musou-style Zelda spin-off. GMG keys usually cheaper than eShop direct.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "nintendo-switch-sports",
		title: "Nintendo Switch Sports",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4bxrRCl",
		productUrl: "https://www.amazon.com/dp/B09KRK6C82",
		urlStatus: "verified",
		note: "Family-friendly motion sports. Often bundled with the Switch Lite or OLED.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		],
		image: "/covers/nintendo-switch-sports.jpg"
	},
	{
		id: "ring-fit-adventure",
		title: "Ring Fit Adventure",
		platform: "Nintendo Switch",
		network: "amazon",
		storeUrl: "https://amzn.to/4z1cmfZ",
		productUrl: "https://www.amazon.com/dp/B07XV4NHHN",
		urlStatus: "verified",
		note: "Fitness-RPG hybrid. Supply-driven pricing; watch for restocks and sale events.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		],
		image: "/covers/ring-fit-adventure.jpg"
	},
	{
		id: "mario-rabbids-sparks-of-hope",
		title: "Mario + Rabbids Sparks of Hope",
		platform: "Nintendo Switch",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=mario+rabbids+sparks+of+hope",
		productUrl: "https://www.greenmangaming.com/games/mario-rabbids-sparks-of-hope",
		urlStatus: "predicted",
		note: "Turn-based tactical spin on Mario. Deeply discounted on key stores post-launch.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "marvels-spider-man-2",
		title: "Marvel's Spider-Man 2",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=marvel+spiderman+2+ps5",
		productUrl: "https://www.greenmangaming.com/games/marvels-spider-man-2",
		urlStatus: "predicted",
		note: "PS5 console exclusive. GMG key sometimes beats PS Store credit pricing.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "god-of-war-ragnarok",
		title: "God of War Ragnarök",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=god+of+war+ragnarok+ps5",
		productUrl: "https://www.greenmangaming.com/games/god-of-war-ragnarok",
		urlStatus: "predicted",
		note: "The Norse saga finale. A perennial best-seller that dips during PlayStation sales.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "horizon-forbidden-west",
		title: "Horizon Forbidden West",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=horizon+forbidden+west+ps5",
		productUrl: "https://www.greenmangaming.com/games/horizon-forbidden-west",
		urlStatus: "predicted",
		note: "Guerrilla's open-world sequel. PSN digital codes on GMG undercut the store.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "the-last-of-us-part-ii-remastered",
		title: "The Last of Us Part II Remastered",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=last+of+us+part+2+remastered+ps5",
		productUrl: "https://www.greenmangaming.com/games/the-last-of-us-part-ii-remastered",
		urlStatus: "predicted",
		note: "The remastered PS5 edition. Steady discounts track the HBO show's seasons.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "ghost-of-tsushima",
		title: "Ghost of Tsushima",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=ghost+of+tsushima+ps5",
		productUrl: "https://www.greenmangaming.com/games/ghost-of-tsushima",
		urlStatus: "predicted",
		note: "Sucker Punch's samurai epic. Director's Cut on PS5 sees regular key-store cuts.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "demons-souls",
		title: "Demon's Souls",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=demons+souls+ps5",
		productUrl: "https://www.greenmangaming.com/games/demons-souls",
		urlStatus: "predicted",
		note: "Bluepoint's gorgeous PS5 remake. Launched at $69.99; key stores undercut over time.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "ratchet-and-clank-rift-apart",
		title: "Ratchet & Clank: Rift Apart",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=ratchet+and+clank+rift+apart+ps5",
		productUrl: "https://www.greenmangaming.com/games/ratchet-and-clank-rift-apart",
		urlStatus: "predicted",
		note: "The dimension-hopping showcase platformer. Frequent GMG price drops.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "returnal",
		title: "Returnal",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=returnal+ps5",
		productUrl: "https://www.greenmangaming.com/games/returnal",
		urlStatus: "predicted",
		note: "Housemarque's roguelike shooter. Deep cuts appear well after launch.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "final-fantasy-vii-rebirth",
		title: "Final Fantasy VII Rebirth",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=final+fantasy+7+rebirth+ps5",
		productUrl: "https://www.greenmangaming.com/games/final-fantasy-vii-rebirth",
		urlStatus: "predicted",
		note: "The middle chapter of the FFVII remake. New release — first real discounts land months in.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release",
			"weekly"
		]
	},
	{
		id: "final-fantasy-xvi",
		title: "Final Fantasy XVI",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=final+fantasy+16+ps5",
		productUrl: "https://www.greenmangaming.com/games/final-fantasy-xvi",
		urlStatus: "predicted",
		note: "Square's action-Fantasy epic. Steady key-store discounts post-launch.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "spider-man-miles-morales",
		title: "Marvel's Spider-Man: Miles Morales",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=spider-man+miles+morales+ps5",
		productUrl: "https://www.greenmangaming.com/games/spider-man-miles-morales",
		urlStatus: "predicted",
		note: "The shorter standalone Spidey entry. Often bundled with the full sequel.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "gran-turismo-7",
		title: "Gran Turismo 7",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=gran+turismo+7+ps5",
		productUrl: "https://www.greenmangaming.com/games/gran-turismo-7",
		urlStatus: "predicted",
		note: "Polyphony's racing sim. Steady discounts; a good pick for racing fans.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "astro-bot",
		title: "Astro Bot",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=astro+bot+ps5",
		productUrl: "https://www.greenmangaming.com/games/astro-bot",
		urlStatus: "predicted",
		note: "The critically adored 2024 platformer. New release — first price cuts land later in the year.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "rise-of-the-ronin",
		title: "Rise of the Ronin",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=rise+of+the+ronin+ps5",
		productUrl: "https://www.greenmangaming.com/games/rise-of-the-ronin",
		urlStatus: "predicted",
		note: "Team Ninja's open-world action RPG. 2024 release with deepening key-store discounts.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "helldivers-2",
		title: "Helldivers 2",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=helldivers+2+ps5",
		productUrl: "https://www.greenmangaming.com/games/helldivers-2",
		urlStatus: "predicted",
		note: "The surprise 2024 co-op hit. Demand-driven pricing; key stores occasionally undercut.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"new-release",
			"weekly"
		]
	},
	{
		id: "stellar-blade",
		title: "Stellar Blade",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=stellar+blade+ps5",
		productUrl: "https://www.greenmangaming.com/games/stellar-blade",
		urlStatus: "predicted",
		note: "Shift Up's stylish action game. 2024 release; first real cuts appear months in.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "black-myth-wukong",
		title: "Black Myth: Wukong",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=black+myth+wukong+ps5",
		productUrl: "https://www.greenmangaming.com/games/black-myth-wukong",
		urlStatus: "predicted",
		note: "The 2024 action blockbuster. High demand keeps pricing firm; watch for seasonal drops.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"new-release",
			"weekly"
		]
	},
	{
		id: "silent-hill-2-remake",
		title: "Silent Hill 2 Remake",
		platform: "PlayStation 5",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=silent+hill+2+remake+ps5",
		productUrl: "https://www.greenmangaming.com/games/silent-hill-2-remake",
		urlStatus: "predicted",
		note: "Bloober's acclaimed survival-horror remake. 2024 release; cuts follow after the buzz.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "forza-horizon-5",
		title: "Forza Horizon 5",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=forza+horizon+5+xbox",
		productUrl: "https://www.greenmangaming.com/games/forza-horizon-5",
		urlStatus: "predicted",
		note: "The墨西哥 open-world racer. Xbox digital codes on GMG routinely beat the MS Store.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "halo-infinite",
		title: "Halo Infinite",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=halo+infinite+xbox",
		productUrl: "https://www.greenmangaming.com/games/halo-infinite",
		urlStatus: "predicted",
		note: "343's flagship shooter. Campaign + multiplayer; deep key-store discounts.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail"
		]
	},
	{
		id: "gears-5",
		title: "Gears 5",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=gears+5+xbox",
		productUrl: "https://www.greenmangaming.com/games/gears-5",
		urlStatus: "predicted",
		note: "The cover-shooter revival. Long on the market; steady heavy cuts.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "microsoft-flight-simulator",
		title: "Microsoft Flight Simulator",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=microsoft+flight+simulator+xbox",
		productUrl: "https://www.greenmangaming.com/games/microsoft-flight-simulator",
		urlStatus: "predicted",
		note: "The realistic flight sim. Premium Deluxe add-ons sell separately; base dips often.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "starfield",
		title: "Starfield",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=starfield+xbox",
		productUrl: "https://www.greenmangaming.com/games/starfield",
		urlStatus: "predicted",
		note: "Bethesda's space RPG. 2023 launch; key stores now sit well below launch price.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release",
			"longtail"
		]
	},
	{
		id: "indiana-jones-great-circle",
		title: "Indiana Jones and the Great Circle",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=indiana+jones+great+circle+xbox",
		productUrl: "https://www.greenmangaming.com/games/indiana-jones-great-circle",
		urlStatus: "predicted",
		note: "MachineGames' 2024 adventure. New release — first discounts appear months after launch.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "sea-of-thieves",
		title: "Sea of Thieves",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=sea+of+thieves+xbox",
		productUrl: "https://www.greenmangaming.com/games/sea-of-thieves",
		urlStatus: "predicted",
		note: "Rare's shared-world pirate sim. Now on more platforms; frequent key-store cuts.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "hi-fi-rush",
		title: "Hi-Fi Rush",
		platform: "Xbox",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=hi+fi+rush+xbox",
		productUrl: "https://www.greenmangaming.com/games/hi-fi-rush",
		urlStatus: "predicted",
		note: "Tango's rhythm-action gem. Quietly discounted; a cheap, cheerful pickup.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "call-of-duty-black-ops-6",
		title: "Call of Duty: Black Ops 6",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=call+of+duty+black+ops+6",
		productUrl: "https://www.greenmangaming.com/games/call-of-duty-black-ops-6",
		urlStatus: "predicted",
		note: "GMG digital keys usually undercut console disc prices and work across Xbox, PS, and PC.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "ea-sports-fc-25",
		title: "EA Sports FC 25",
		platform: "Cross-platform",
		network: "humble",
		storeUrl: "https://www.humblebundle.com/store?search=ea+sports+fc+25",
		productUrl: "https://www.humblebundle.com/store/ea-sports-fc-25",
		urlStatus: "predicted",
		note: "Humble's digital store runs frequent promos; previous FC entries hit half-price within months.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "hogwarts-legacy",
		title: "Hogwarts Legacy",
		platform: "Cross-platform",
		network: "fanatical",
		storeUrl: "https://www.fanatical.com/en/game/hogwarts-legacy",
		productUrl: "https://www.fanatical.com/en/game/hogwarts-legacy",
		urlStatus: "verified",
		note: "Fanatical clears older hits hard — often 50%+ off during site-wide events.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "elden-ring",
		title: "Elden Ring",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=elden+ring",
		productUrl: "https://www.greenmangaming.com/games/elden-ring",
		urlStatus: "predicted",
		note: "FromSoftware's open-world epic. Key stores undercut physical; DLC 'Shadow of the Erdtree' sold separately.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "baldurs-gate-3",
		title: "Baldur's Gate 3",
		platform: "Cross-platform",
		network: "humble",
		storeUrl: "https://www.humblebundle.com/store?search=baldurs+gate+3",
		productUrl: "https://www.humblebundle.com/store/baldurs-gate-3",
		urlStatus: "predicted",
		note: "GOTY 2023 RPG. Humble frequently bundles the DLC or discounts the base game.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"weekly"
		]
	},
	{
		id: "red-dead-redemption-2",
		title: "Red Dead Redemption 2",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=red+dead+redemption+2",
		productUrl: "https://www.greenmangaming.com/games/red-dead-redemption-2",
		urlStatus: "predicted",
		note: "Rockstar's western masterpiece. Six years on, it sits at its lowest-ever key price.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail",
			"weekly"
		]
	},
	{
		id: "cyberpunk-2077",
		title: "Cyberpunk 2077",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=cyberpunk+2077",
		productUrl: "https://www.greenmangaming.com/games/cyberpunk-2077",
		urlStatus: "predicted",
		note: "The 'Ultimate Edition' bundles the acclaimed Phantom Liberty. Deep, steady discounts.",
		lastChecked: "2026-08-05",
		tags: [
			"popular",
			"longtail",
			"weekly"
		]
	},
	{
		id: "monster-hunter-wilds",
		title: "Monster Hunter Wilds",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=monster+hunter+wilds",
		productUrl: "https://www.greenmangaming.com/games/monster-hunter-wilds",
		urlStatus: "predicted",
		note: "Capcom's 2025 hunting epic. New release — first real cuts appear ahead of seasonal events.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release",
			"weekly"
		]
	},
	{
		id: "assassins-creed-shadows",
		title: "Assassin's Creed Shadows",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=assassins+creed+shadows",
		productUrl: "https://www.greenmangaming.com/games/assassins-creed-shadows",
		urlStatus: "predicted",
		note: "Ubisoft's feudal-Japan entry. 2025 release; key stores undercut the Ubisoft Store.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "kingdom-come-deliverance-2",
		title: "Kingdom Come: Deliverance II",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=kingdom+come+deliverance+2",
		productUrl: "https://www.greenmangaming.com/games/kingdom-come-deliverance-2",
		urlStatus: "predicted",
		note: "Warhorse's 2025 medieval RPG. New release — first discounts land a few months in.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "gta-vi",
		title: "Grand Theft Auto VI",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=grand+theft+auto+6",
		productUrl: "https://www.greenmangaming.com/games/grand-theft-auto-6",
		urlStatus: "predicted",
		note: "The most-anticipated release of the cycle. Pre-orders at list price; the first real deals follow launch.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release",
			"weekly"
		]
	},
	{
		id: "star-wars-outlaws",
		title: "Star Wars Outlaws",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=star+wars+outlaws",
		productUrl: "https://www.greenmangaming.com/games/star-wars-outlaws",
		urlStatus: "predicted",
		note: "Ubisoft's open-world Star Wars game. 2024 release with deepening key-store discounts.",
		lastChecked: "2026-08-05",
		tags: [
			"new-release"
		]
	},
	{
		id: "avatar-frontiers-of-pandora",
		title: "Avatar: Frontiers of Pandora",
		platform: "Cross-platform",
		network: "gmg",
		storeUrl: "https://www.greenmangaming.com/search/?q=avatar+frontiers+of+pandora",
		productUrl: "https://www.greenmangaming.com/games/avatar-frontiers-of-pandora",
		urlStatus: "predicted",
		note: "Massive's open-world Avatar. Heavily discounted post-launch on key stores.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	},
	{
		id: "dying-light-2",
		title: "Dying Light 2",
		platform: "Cross-platform",
		network: "fanatical",
		storeUrl: "https://www.fanatical.com/en/game/dying-light-2-stay-human",
		productUrl: "https://www.fanatical.com/en/game/dying-light-2-stay-human",
		urlStatus: "verified",
		note: "Techland's zombie parkour sequel. Stay Human edition bundles DLC; frequent Fanatical cuts.",
		lastChecked: "2026-08-05",
		tags: [
			"longtail"
		]
	}
];
const dealsData = {
	lastUpdated: lastUpdated,
	deals: deals
};

export { $$DealCard as $, dealsData as d };
