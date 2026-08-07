import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://consoledeals.cc.cd");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const guides = [
    // ── Nintendo Switch / Switch 2 ──
    { slug: "mario-kart-8-deluxe", title: "Mario Kart 8 Deluxe \u2014 Is It Worth It in 2026?", platform: "Nintendo Switch" },
    { slug: "mario-kart-world", title: "Mario Kart World \u2014 Switch 2 Buying Guide", platform: "Nintendo Switch 2" },
    { slug: "zelda-tears-of-the-kingdom", title: "Zelda: Tears of the Kingdom \u2014 Digital or Physical?", platform: "Nintendo Switch" },
    { slug: "zelda-breath-of-the-wild", title: "Zelda: Breath of the Wild \u2014 Still Worth Buying in 2026?", platform: "Nintendo Switch" },
    { slug: "super-mario-bros-wonder", title: "Super Mario Bros. Wonder \u2014 Buying Guide", platform: "Nintendo Switch" },
    { slug: "super-mario-odyssey", title: "Super Mario Odyssey \u2014 Is It Still the Best 3D Mario?", platform: "Nintendo Switch" },
    { slug: "animal-crossing-new-horizons", title: "Animal Crossing: New Horizons \u2014 Still Worth Buying?", platform: "Nintendo Switch" },
    { slug: "pokemon-scarlet-violet", title: "Pok\xE9mon Scarlet & Violet \u2014 Which Version to Buy", platform: "Nintendo Switch" },
    { slug: "metroid-prime-4-beyond", title: "Metroid Prime 4: Beyond \u2014 Should You Pre-order?", platform: "Nintendo Switch" },
    { slug: "super-smash-bros-ultimate", title: "Super Smash Bros. Ultimate \u2014 The Party Game That Never Leaves the Shelf", platform: "Nintendo Switch" },
    { slug: "splatoon-3", title: "Splatoon 3 \u2014 Is the Digital Version Worth It?", platform: "Nintendo Switch" },
    { slug: "donkey-kong-bananza", title: "Donkey Kong Bananza \u2014 Switch 2 Exclusive Buying Guide", platform: "Nintendo Switch 2" },
    // ── PlayStation 5 ──
    { slug: "marvels-spider-man-2", title: "Marvel's Spider-Man 2 \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "god-of-war-ragnarok", title: "God of War Ragnar\xF6k \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "horizon-forbidden-west", title: "Horizon Forbidden West \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "the-last-of-us-part-ii-remastered", title: "The Last of Us Part II Remastered \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "ghost-of-tsushima", title: "Ghost of Tsushima \u2014 PS5 Director's Cut Buying Guide", platform: "PlayStation 5" },
    { slug: "ratchet-and-clank-rift-apart", title: "Ratchet & Clank: Rift Apart \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "final-fantasy-vii-rebirth", title: "Final Fantasy VII Rebirth \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "final-fantasy-xvi", title: "Final Fantasy XVI \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "astro-bot", title: "Astro Bot \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "helldivers-2", title: "Helldivers 2 \u2014 Cross-Platform Buying Guide", platform: "PlayStation 5 / PC" },
    { slug: "stellar-blade", title: "Stellar Blade \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "black-myth-wukong", title: "Black Myth: Wukong \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    { slug: "silent-hill-2-remake", title: "Silent Hill 2 Remake \u2014 PS5 Buying Guide", platform: "PlayStation 5" },
    // ── Xbox ──
    { slug: "forza-horizon-5", title: "Forza Horizon 5 \u2014 Xbox Buying Guide", platform: "Xbox" },
    { slug: "halo-infinite", title: "Halo Infinite \u2014 Xbox Buying Guide", platform: "Xbox" },
    { slug: "starfield", title: "Starfield \u2014 Xbox Buying Guide", platform: "Xbox" },
    // ── Cross-platform ──
    { slug: "call-of-duty-black-ops-6", title: "Call of Duty: Black Ops 6 \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "ea-sports-fc-25", title: "EA Sports FC 25 \u2014 Where to Buy Digital Cheapest", platform: "PlayStation / Xbox" },
    { slug: "hogwarts-legacy", title: "Hogwarts Legacy \u2014 Edition & Platform Guide", platform: "PS5 / Xbox / Switch" },
    { slug: "elden-ring", title: "Elden Ring \u2014 Base Game vs GOTY vs DLC", platform: "Cross-platform" },
    { slug: "baldurs-gate-3", title: "Baldur's Gate 3 \u2014 Which Edition Should You Buy?", platform: "Cross-platform" },
    { slug: "red-dead-redemption-2", title: "Red Dead Redemption 2 \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "cyberpunk-2077", title: "Cyberpunk 2077 \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "monster-hunter-wilds", title: "Monster Hunter Wilds \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "assassins-creed-shadows", title: "Assassin's Creed Shadows \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "kingdom-come-deliverance-2", title: "Kingdom Come: Deliverance II \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "gta-vi", title: "Grand Theft Auto VI \u2014 Pre-order & Buying Guide", platform: "Xbox / PS5 / PC" },
    { slug: "star-wars-outlaws", title: "Star Wars Outlaws \u2014 Cross-Platform Buying Guide", platform: "Xbox / PS5 / PC" },
    // ── 合集 / 长尾文 ──
    { slug: "best-coop-switch-games-2026", title: "Best Co-Op Games on Switch (2026)", platform: "Roundup" },
    { slug: "best-cheap-console-games-under-30", title: "Best Cheap Console Games Under $30", platform: "Roundup" },
    { slug: "ps5-vs-xbox-where-to-buy-digital", title: "PS5 vs Xbox: Where to Buy Digital Games Cheaper", platform: "Roundup" },
    { slug: "where-to-buy-switch-games-cheapest-2026", title: "Where to Buy Nintendo Switch Games Cheapest in 2026", platform: "Roundup" },
    { slug: "best-switch-games-for-kids-2026", title: "Best Nintendo Switch Games for Kids & Families (2026)", platform: "Roundup" },
    { slug: "switch-games-digital-vs-physical-2026", title: "Switch Games Digital vs Physical: Which to Buy in 2026?", platform: "Roundup" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Game Guides \u2014 ConsoleDeals", "description": "Buying guides and deal analysis for popular console games across Switch, PlayStation, and Xbox.", "data-astro-cid-snf5vnxa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-snf5vnxa>Game Guides</h1> <p class="sub" data-astro-cid-snf5vnxa>
Long-tail buying guides. Each one ends with the cheapest verified place to
    buy right now.
</p> <ul class="guide-list" data-astro-cid-snf5vnxa> ${guides.map((g) => renderTemplate`<li data-astro-cid-snf5vnxa> <a${addAttribute(`/games/${g.slug}/`, "href")} data-astro-cid-snf5vnxa>${g.title}</a> <span class="tag" data-astro-cid-snf5vnxa>${g.platform}</span> </li>`)} </ul> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/index.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/index.astro";
const $$url = "/games";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
