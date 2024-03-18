import { renderers } from './renderers.mjs';
import { manifest } from './manifest_JyqleTTZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BlD5BlsI.mjs');
const _page1 = () => import('./chunks/about_CSCWAPE0.mjs');
const _page2 = () => import('./chunks/_page__CTbCrTX0.mjs');
const _page3 = () => import('./chunks/index_DhV7jyDF.mjs');
const _page4 = () => import('./chunks/_.._CVvkEX9B.mjs');
const _page5 = () => import('./chunks/rss_DbMrjkkf.mjs');
const _page6 = () => import('./chunks/_tag__CUA1Y-wZ.mjs');
const _page7 = () => import('./chunks/index_CXUYv9EV.mjs');
const _page8 = () => import('./chunks/index_Cpnwi_UX.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.12/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[page].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/tags/[tag].astro", _page6],
    ["src/pages/tags/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a2d37d81-5fdb-4993-83eb-9d5870a7a674"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
