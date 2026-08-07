import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dbj86UOP.mjs';
import { $ as $$AffiliateLink } from '../../chunks/AffiliateLink_Csky0RjZ.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://consoledeals.cc.cd");
const $$AstroBot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AstroBot;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Astro Bot \u2014 PS5 Buying Guide", "description": "Astro Bot buying guide: the 2024 platformer darling, VR-free, and where to buy the digital PS5 version cheapest.", "data-astro-cid-5cwmlprt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post" data-astro-cid-5cwmlprt> <h1 data-astro-cid-5cwmlprt>Astro Bot — PS5 Buying Guide</h1> <p class="meta" data-astro-cid-5cwmlprt>PlayStation 5 · Updated 2026-08-05</p> <p data-astro-cid-5cwmlprt> <strong data-astro-cid-5cwmlprt>Astro Bot</strong> is the critically adored 2024 platformer that turned
      the little PS5 mascot into a must-play exclusive — a joyful, inventive 3D
      platformer with hundreds of cameos.
</p> <h2 data-astro-cid-5cwmlprt>What you get</h2> <ul data-astro-cid-5cwmlprt> <li data-astro-cid-5cwmlprt><strong data-astro-cid-5cwmlprt>80+ levels</strong> — tight, creative platforming using every DualSense feature</li> <li data-astro-cid-5cwmlprt><strong data-astro-cid-5cwmlprt>No VR required</strong> — unlike the original Astro's Playroom, this is a full flat-screen game</li> <li data-astro-cid-5cwmlprt><strong data-astro-cid-5cwmlprt>Family-friendly</strong> — easy to pick up, hard to master</li> </ul> <h2 data-astro-cid-5cwmlprt>Where to buy cheapest</h2> <p data-astro-cid-5cwmlprt>
As a newer release, Astro Bot holds list price at first, with the first real cuts
      landing later in the year. Green Man Gaming's PSN codes undercut the PlayStation
      Store when sales begin.
</p> <ul class="buy-list" data-astro-cid-5cwmlprt> <li data-astro-cid-5cwmlprt> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "gmg", "href": "https://www.greenmangaming.com/search/?q=astro+bot+ps5", "cta": "Check Green Man Gaming", "data-astro-cid-5cwmlprt": true })} </li> <li data-astro-cid-5cwmlprt> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "amazon", "href": "https://www.amazon.com/s?k=Astro+Bot+PS5", "cta": "Check on Amazon", "data-astro-cid-5cwmlprt": true })} </li> </ul> <p class="note" data-astro-cid-5cwmlprt>
Prices change frequently — always verify on the store before purchasing.
</p> </article> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/astro-bot.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/astro-bot.astro";
const $$url = "/games/astro-bot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AstroBot,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
