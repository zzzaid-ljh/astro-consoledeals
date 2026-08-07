import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy \u2014 ConsoleDeals", "description": "Privacy policy and cookie disclosure." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Privacy Policy</h1> <p><strong>Last updated:</strong> 2026-08-04</p> <p>
ConsoleDeals ("we", "us") respects your privacy. This site uses the
    following:
</p> <ul> <li> <strong>Affiliate links</strong> — clicking them may set a cookie on the
      retailer's domain so we can earn a commission. We do not receive your
      personal data from this.
</li> <li> <strong>Analytics / advertising cookies</strong> — if enabled (e.g.,
      Google AdSense), these help measure traffic and serve relevant ads. You can
      disable them in your browser settings.
</li> </ul> <p>
We do not sell personal information. For data requests, contact:
    privacy@gamedealshub.example
</p> ` })}`;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
