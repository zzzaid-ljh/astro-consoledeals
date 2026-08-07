import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>🎮 ConsoleDeals</a> <div class="search-box" data-astro-cid-3ef6ksr2> <input id="site-search" type="search" placeholder="Search games, platforms…" aria-label="Search deals" data-astro-cid-3ef6ksr2> </div> <nav data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Deals</a> <a href="/new-releases/" data-astro-cid-3ef6ksr2>New Releases</a> <a href="/weekly-deals/" data-astro-cid-3ef6ksr2>Weekly Deals</a> <a href="/games/" data-astro-cid-3ef6ksr2>Guides</a> <a href="/about/" data-astro-cid-3ef6ksr2>About</a> <a href="/privacy/" data-astro-cid-3ef6ksr2>Privacy</a> </nav> </div> </header>  `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <p class="disclaimer" data-astro-cid-sz7xmlte>
ConsoleDeals is a participant in the Amazon Associates Program and other
      affiliate advertising programs. As an affiliate, we earn from qualifying
      purchases at no extra cost to you. Prices and availability are subject to
      change — please verify on the retailer's site before purchasing.
</p> <p class="copy" data-astro-cid-sz7xmlte>
© 2026 ConsoleDeals. All game titles and trademarks are the property of
      their respective owners.
</p> </div> </footer> `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://consoledeals.cc.cd");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "ConsoleDeals \u2014 Console & Game Deals",
    description = "Curated console game deals across Amazon, Green Man Gaming, Humble Bundle, and Fanatical."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><meta name="impact-site-verification" content="9bc3966e-e398-4fd4-bb88-0091d2d8a4d7"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="container main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
