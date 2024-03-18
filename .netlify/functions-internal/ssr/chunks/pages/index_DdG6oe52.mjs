/* empty css                          */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, j as renderHead, i as renderSlot, A as AstroError, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML, m as maybeRenderHead, g as addAttribute } from '../astro_CYe8gDUp.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_B7bz27rh.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, c as $$FormattedDate } from './about_D_1NmIWi.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$4 = createAstro("https://blog.maquinariaspesadas.org");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="dark:bg-slate-900 "> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jeanpaul/Projects/maquinarias-pesadas/src/layouts/Layout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://blog.maquinariaspesadas.org", "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/aceite-motor.md": () => import('../aceite-motor_DtMjT1Ug.mjs'),"/src/content/blog/aceros-nitruracion.md": () => import('../aceros-nitruracion_6aa6Fz79.mjs'),"/src/content/blog/clasificacion-aceros.md": () => import('../clasificacion-aceros_C_AJuFlM.mjs'),"/src/content/blog/herramientas-sec-6v9413.md": () => import('../herramientas-sec-6v9413_DLRGQRBV.mjs'),"/src/content/blog/mecanizado-aceros.md": () => import('../mecanizado-aceros_B9wHRpLY.mjs'),"/src/content/blog/tratamiento-aceros.md": () => import('../tratamiento-aceros_CnwabZi4.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"aceite-motor":"/src/content/blog/aceite-motor.md","aceros-nitruracion":"/src/content/blog/aceros-nitruracion.md","herramientas-sec-6v9413":"/src/content/blog/herramientas-sec-6v9413.md","clasificacion-aceros":"/src/content/blog/clasificacion-aceros.md","mecanizado-aceros":"/src/content/blog/mecanizado-aceros.md","tratamiento-aceros":"/src/content/blog/tratamiento-aceros.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/aceite-motor.md": () => import('../aceite-motor_Hs23wNS0.mjs'),"/src/content/blog/aceros-nitruracion.md": () => import('../aceros-nitruracion_zEGolE6Q.mjs'),"/src/content/blog/clasificacion-aceros.md": () => import('../clasificacion-aceros_CRBQjTAp.mjs'),"/src/content/blog/herramientas-sec-6v9413.md": () => import('../herramientas-sec-6v9413_Bhf2Nqba.mjs'),"/src/content/blog/mecanizado-aceros.md": () => import('../mecanizado-aceros_DSFnen3k.mjs'),"/src/content/blog/tratamiento-aceros.md": () => import('../tratamiento-aceros_DIHTThSH.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro("https://blog.maquinariaspesadas.org");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  if (totalPages > 5) {
    if (currentPage === totalPages) {
      for (let i = currentPage - 2; i <= totalPages; i++) {
        pageList.push(i);
      }
    } else if (currentPage === 1) {
      for (let i = currentPage; i <= currentPage + 2; i++) {
        pageList.push(i);
      }
    } else if (currentPage > 1) {
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageList.push(i);
      }
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pageList.push(i);
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="mt-10"> ${totalPages > 1 && renderTemplate`<nav class="mb-4 flex justify-center space-x-2 text-center">  ${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/${currentPage - 1}`,
    "href"
  )} class="border border-gray-400 hover:bg-primary hover:text-amber-500 rounded-md h-10 w-10 leading-[36px]   flex items-center justify-center transition duration-200"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 dark:fill-slate-200" viewBox="0 0 320 512"> <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path> </svg> </a>` : renderTemplate`<span class="border  dark:text-slate-200 border-gray-400 opacity-40 rounded-md h-10 w-10   flex items-center justify-center pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3 dark:fill-slate-200" viewBox="0 0 320 512"> <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path> </svg> </span>`} ${currentPage > 2 && totalPages > 5 && renderTemplate`<div class="flex space-x-2"> <a${addAttribute(`${section ? "/" + section : ""}/${1}`, "href")} class="border dark:text-slate-200 border-gray-400 hover:bg-primary hover:text-amber-500 rounded-md h-10 w-10   flex items-center justify-center transition duration-200"> ${1} </a> <span class="opacity-40 dark:text-slate-200 rounded-md h-10 w-10  flex items-center justify-center pointer-events-none">
...
</span> </div>`}  ${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page" class="border border-amber-500 bg-primary rounded-md h-10 w-10  text-amber-500 flex items-center justify-center "> ${pagination} </span>` : renderTemplate`<a${addAttribute(
      pagination === 1 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/${pagination}`,
      "href"
    )} aria-current="page" class="border border-gray-400 dark:text-slate-50 hover:bg-primary hover:text-amber-500 rounded-md h-10 w-10  flex items-center justify-center transition duration-200"> ${pagination} </a>`
  )} ${currentPage < totalPages - 1 && totalPages > 5 && renderTemplate`<div class="flex space-x-2"> <span class=" dark:text-slate-200 opacity-40 rounded-md h-10 w-10  flex items-center justify-center pointer-events-none">
...
</span> <a${addAttribute(`${section ? "/" + section : ""}/${totalPages}`, "href")} class="border dark:text-slate-200  border-gray-400 hover:bg-primary hover:text-amber-500 rounded-md h-10 w-10   flex items-center justify-center transition duration-200"> ${totalPages} </a> </div>`}  ${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/${currentPage + 1}`, "href")} class="border border-gray-400 hover:bg-primary hover:text-amber-500 rounded-md h-10 w-10   flex items-center justify-center transition duration-200"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-3 dark:fill-slate-200"> <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path> </svg> </a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10  flex items-center justify-center pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-3 dark:fill-slate-200"> <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path> </svg> </span>`} </nav>`} </div>`;
}, "/Users/jeanpaul/Projects/maquinarias-pesadas/src/components/Pagination.astro", void 0);

// sort by date
const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) =>
      new Date(b.data.date && b.data.date) -
      new Date(a.data.date && a.data.date)
  );
  return sortedArray;
};

const $$Astro$2 = createAstro("https://blog.maquinariaspesadas.org");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getCollection("blog");
  const sortedPosts = sortByDate(posts);
  const fivePost = sortedPosts.slice(0, 5);
  const totalPosts = posts.length || 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "lista de blogs", "description": "Total las etiquetas", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${fivePost.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <div class="img-content h-[220px] w-[100%] bg-cover bg-center "${addAttribute(`
											background-image: url(${post.data.heroImage});
									`, "style")} data-astro-cid-5tznm7mj></div> <h4 class=" text-slate-800 dark:text-slate-50 hover:text-amber-500" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="text-slate-800 dark:text-slate-50" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "blog", "currentPage": 1, "totalPages": Math.ceil(totalPosts / 5), "data-astro-cid-5tznm7mj": true })} </main> ` })} `;
}, "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/blog/index.astro", void 0);

const $$file$2 = "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://blog.maquinariaspesadas.org");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/aceite-motor.md": () => import('../aceite-motor_C8zVinBU.mjs'),"../../content/blog/aceros-nitruracion.md": () => import('../aceros-nitruracion_CmHOUonV.mjs'),"../../content/blog/clasificacion-aceros.md": () => import('../clasificacion-aceros_5vkMCC8x.mjs'),"../../content/blog/herramientas-sec-6v9413.md": () => import('../herramientas-sec-6v9413_BkqOe-gl.mjs'),"../../content/blog/mecanizado-aceros.md": () => import('../mecanizado-aceros_CwvZfs1V.mjs'),"../../content/blog/tratamiento-aceros.md": () => import('../tratamiento-aceros_xMB4MFMX.mjs')}), () => "../../content/blog/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "\xCDndice de etiquetas";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": "Total las etiquetas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map((tag) => renderTemplate`<p><a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a></p>`)} </ul> ` })}`;
}, "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/tags/index.astro", void 0);

const $$file$1 = "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://blog.maquinariaspesadas.org");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Maquinarias pesadas", "description": "Cada art\xEDculo, cada historia, y cada consejo est\xE1n dise\xF1ados para empoderarte, inspirarte, y conectarte m\xE1s profundamente con esta industria vital", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <div class=" h-[520px] w-[100%] bg-cover bg-center rounded-xl mb-10  "${addAttribute(`
				background-image: url(/inicio.jpg);
		`, "style")} data-astro-cid-j7pv25f6></div> <h1 class="dark:text-slate-50 m-auto text-center font-semibold text-slate-800 mb-10" data-astro-cid-j7pv25f6>¡Bienvenidos a "Maquinarias pesadas"</h1> <p class="dark:text-slate-300 text-slate-700" data-astro-cid-j7pv25f6>
Este es tu destino definitivo para sumergirte en el fascinante mundo de las maquinarias pesadas. Aquí, los entusiastas, profesionales, y curiosos por igual, pueden explorar las últimas noticias, innovaciones, y conocimientos sobre excavadoras, grúas, bulldozers, y mucho más.
</p> <p class="dark:text-slate-300 text-slate-700" data-astro-cid-j7pv25f6>
Cada artículo, cada historia, y cada consejo están diseñados para empoderarte, inspirarte, y conectarte más profundamente con esta industria vital. Sumérgete en nuestras detalladas guías, disfruta de nuestros análisis en profundidad, y únete a nuestra comunidad apasionada. ¡Empecemos juntos este viaje de potencia, precisión y grandeza!
</p> <h3 class="dark:text-slate-50 mt-10 font-medium mb-6" data-astro-cid-j7pv25f6>Nuestros Blogs</h3> <p class=" text-slate-700 dark:text-slate-300" data-astro-cid-j7pv25f6>Explora las últimas tendencias, innovaciones, y mejores prácticas en el manejo de maquinarias pesadas. Estos artículos son fundamentales para aquellos que buscan profundizar su comprensión sobre los desafíos actuales y futuros de la industria, ofreciendo perspectivas sobre cómo mejorar la eficiencia, seguridad y sostenibilidad en el uso de estas impresionantes máquinas.</p> <a href="/blog" class=" dark:text-amber-500 text-amber-500 hover:text-amber-800" data-astro-cid-j7pv25f6>Comenzar</a> <h3 class="dark:text-slate-50 mt-10 font-medium mb-6" data-astro-cid-j7pv25f6>El Mundo Detrás de la Maquinaria Pesada</h3> <p class="dark:text-slate-300 text-slate-700" data-astro-cid-j7pv25f6> <a class="text-amber-500 hover:text-amber-800" href="https://www.maquinariaspesadas.org/" data-astro-cid-j7pv25f6>MaquinariasPesadas.org </a> es un sitio web esencial para quienes están involucrados o interesados en la industria de maquinaria pesada. Ofrece una amplia gama de recursos, como cursos, manuales, catálogos y videos, centrados en diferentes tipos de maquinarias, incluyendo pero no limitado a excavadoras, bulldozers y grúas. La plataforma se destaca por promover el aprendizaje continuo y la actualización profesional, proporcionando contenidos que cubren desde operaciones y mantenimiento hasta seguridad y avances tecnológicos.</p> </main> ` })} `;
}, "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/index.astro", void 0);

const $$file = "/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pagination as $, $$Layout as a, index$1 as b, index as c, getCollection as g, index$2 as i, sortByDate as s };
