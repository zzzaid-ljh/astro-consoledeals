import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
import { d as dealsData, $ as $$DealCard } from '../chunks/deals_hhbygG7Z.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$WeeklyDeals = createComponent(($$result, $$props, $$slots) => {
  const deals = dealsData.deals.filter((d) => (d.tags || []).includes("weekly"));
  const lastUpdated = dealsData.lastUpdated;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Weekly Deals \u2014 ConsoleDeals", "description": "Our hand-picked weekly deals on popular console games across Switch, PlayStation, Xbox, and PC.", "data-astro-cid-e5sfithw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-e5sfithw> <h1 data-astro-cid-e5sfithw>Weekly Deals</h1> <p data-astro-cid-e5sfithw>
Our hand-picked selection of the week — the games worth buying right now
      across Switch, PlayStation, Xbox, and PC. Curated ${lastUpdated}. Prices
      change constantly; always verify the live price on the store.
</p> </section> <section class="deals-grid" aria-label="Weekly deals" data-astro-cid-e5sfithw> ${deals.map((d) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": d, "data-astro-cid-e5sfithw": true })}`)} </section> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/weekly-deals.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/weekly-deals.astro";
const $$url = "/weekly-deals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WeeklyDeals,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
