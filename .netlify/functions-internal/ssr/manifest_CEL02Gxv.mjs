import './chunks/astro_CYe8gDUp.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.4.12/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DQkJqmSU.js"}],"styles":[{"type":"external","src":"/_astro/about.ebrz94QH.css"},{"type":"inline","content":"main{width:calc(100% - 2em);max-width:100%;margin:0}.hero-image{width:100%}.hero-image .img-content{display:block;margin:0 auto;border-radius:12px}.prose{width:800px;max-width:calc(100% - 2em);margin:auto;padding:1em}.title{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title h1{margin:0 0 .5em}.date{margin-bottom:.5em}.last-updated-on{font-style:italic}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DQkJqmSU.js"}],"styles":[{"type":"external","src":"/_astro/about.ebrz94QH.css"},{"type":"inline","content":"main[data-astro-cid-5tznm7mj]{width:960px}ul[data-astro-cid-5tznm7mj]{display:flex;flex-wrap:wrap;gap:2rem;list-style-type:none;margin:0;padding:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:calc(50% - 1rem)}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] [data-astro-cid-5tznm7mj]{text-decoration:none;transition:.2s ease}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{width:100%;margin-bottom:1rem;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .img-content[data-astro-cid-5tznm7mj]{width:100%;height:440px}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:2.369rem}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] .img-content[data-astro-cid-5tznm7mj]{margin-bottom:.5rem;border-radius:12px}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]{display:block}ul[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover .img-content[data-astro-cid-5tznm7mj]{box-shadow:var(--box-shadow)}@media (max-width: 720px){ul[data-astro-cid-5tznm7mj]{gap:.5em}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:100%;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{margin-bottom:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:1.563em}}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DQkJqmSU.js"}],"styles":[{"type":"external","src":"/_astro/about.ebrz94QH.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DQkJqmSU.js"}],"styles":[{"type":"external","src":"/_astro/about.ebrz94QH.css"},{"type":"inline","content":"main[data-astro-cid-j7pv25f6]{width:820px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://blog.maquinariaspesadas.org","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/blog/[page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/jeanpaul/Projects/maquinarias-pesadas/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.4.12/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DZB9ZhvB.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_DdrV2GW0.mjs","\u0000@astrojs-manifest":"manifest_CEL02Gxv.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/node_modules/.pnpm/@astrojs+react@3.1.0_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0_vite@5.1.5/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.4.12/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BlD5BlsI.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CSCWAPE0.mjs","\u0000@astro-page:src/pages/blog/[page]@_@astro":"chunks/_page__BI_KMlyy.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_0tAAgd7s.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._BSsc2HmE.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_Djuh22uQ.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__DaDlAlqX.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_SeFJneYW.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_gBJ8TIWt.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceite-motor.md?astroContentCollectionEntry=true":"chunks/aceite-motor_DtMjT1Ug.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceros-nitruracion.md?astroContentCollectionEntry=true":"chunks/aceros-nitruracion_6aa6Fz79.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/clasificacion-aceros.md?astroContentCollectionEntry=true":"chunks/clasificacion-aceros_C_AJuFlM.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/herramientas-sec-6v9413.md?astroContentCollectionEntry=true":"chunks/herramientas-sec-6v9413_DLRGQRBV.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/mecanizado-aceros.md?astroContentCollectionEntry=true":"chunks/mecanizado-aceros_B9wHRpLY.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/tratamiento-aceros.md?astroContentCollectionEntry=true":"chunks/tratamiento-aceros_CnwabZi4.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceite-motor.md?astroPropagatedAssets":"chunks/aceite-motor_Hs23wNS0.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceros-nitruracion.md?astroPropagatedAssets":"chunks/aceros-nitruracion_zEGolE6Q.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/clasificacion-aceros.md?astroPropagatedAssets":"chunks/clasificacion-aceros_CRBQjTAp.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/herramientas-sec-6v9413.md?astroPropagatedAssets":"chunks/herramientas-sec-6v9413_Bhf2Nqba.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/mecanizado-aceros.md?astroPropagatedAssets":"chunks/mecanizado-aceros_DSFnen3k.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/tratamiento-aceros.md?astroPropagatedAssets":"chunks/tratamiento-aceros_DIHTThSH.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceite-motor.md":"chunks/aceite-motor_C8zVinBU.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/aceros-nitruracion.md":"chunks/aceros-nitruracion_CmHOUonV.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/clasificacion-aceros.md":"chunks/clasificacion-aceros_5vkMCC8x.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/herramientas-sec-6v9413.md":"chunks/herramientas-sec-6v9413_BkqOe-gl.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/mecanizado-aceros.md":"chunks/mecanizado-aceros_CwvZfs1V.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/content/blog/tratamiento-aceros.md":"chunks/tratamiento-aceros_xMB4MFMX.mjs","/Users/jeanpaul/Projects/maquinarias-pesadas/src/components/react/theme.jsx":"_astro/theme.BreNaB12.js","/astro/hoisted.js?q=0":"_astro/hoisted.DQkJqmSU.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/logo.LdohMlo1.png","/_astro/about.ebrz94QH.css","/aceite-motor-02.jpg","/aceite-motor.jpg","/aceros-nitruracion.jpg","/aceros.jpg","/blog-about.webp","/favicon.png","/inicio.jpg","/inicio.webp","/juego-herramientas-sec-6v9413.jpg","/mecanizado-acero.jpg","/tratamiento-aceros.jpg","/_astro/client.DbokQZWz.js","/_astro/hoisted.DQkJqmSU.js","/_astro/index.NEDEFKed.js","/_astro/theme.BreNaB12.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"buildFormat":"directory"});

export { manifest };
