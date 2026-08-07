import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About \u2014 ConsoleDeals", "description": "What ConsoleDeals is and how we make money." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About ConsoleDeals</h1> <p>
ConsoleDeals is an independent deals &amp; guides site for console gamers. We
    research prices across multiple retailers and publish weekly curated deal
    lists plus buying guides.
</p> <p>
We participate in affiliate programs including Amazon Associates, Green Man
    Gaming, Humble Bundle, and Fanatical. When you click a link and make a
    purchase, we may earn a commission at no extra cost to you. This does not
    affect our editorial independence.
</p> <p>
We do not manually set prices — always confirm the current price on the
    retailer's site before buying.
</p> ` })}`;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/about.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
