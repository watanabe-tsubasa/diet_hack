globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///workspaces/diet_hack/my-app/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, setHeader, getRequestURL, getRequestIP, getRequestWebStream, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///workspaces/diet_hack/my-app/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///workspaces/diet_hack/my-app/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///workspaces/diet_hack/my-app/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///workspaces/diet_hack/my-app/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///workspaces/diet_hack/my-app/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///workspaces/diet_hack/my-app/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///workspaces/diet_hack/my-app/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///workspaces/diet_hack/my-app/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///workspaces/diet_hack/my-app/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///workspaces/diet_hack/my-app/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///workspaces/diet_hack/my-app/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///workspaces/diet_hack/my-app/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///workspaces/diet_hack/my-app/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///workspaces/diet_hack/my-app/node_modules/radix3/dist/index.mjs';
import _866AP8hmiB from 'file:///workspaces/diet_hack/my-app/node_modules/vinxi/lib/app-fetch.js';
import _E2dbksVAca from 'file:///workspaces/diet_hack/my-app/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///workspaces/diet_hack/my-app/node_modules/pathe/dist/index.mjs';
import { fromJSON, crossSerializeStream, getCrossReferenceHeader } from 'file:///workspaces/diet_hack/my-app/node_modules/seroval/dist/esm/production/index.mjs';
import { CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file:///workspaces/diet_hack/my-app/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import { sharedConfig, lazy, createComponent as createComponent$1 } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/dist/server.js';
import { provideRequestEvent } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/storage.js';
import { ssr, createComponent, ssrHydrationKey, NoHydration, escape, renderToStream, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/workspaces/diet_hack/my-app/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/workspaces/diet_hack/my-app/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspaces/diet_hack/my-app","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/workspaces/diet_hack/my-app","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspaces/diet_hack/my-app/.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/workspaces/diet_hack/my-app/.vinxi/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"/workspaces/diet_hack/my-app","order":0,"outDir":"/workspaces/diet_hack/my-app/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/workspaces/diet_hack/my-app","base":"/","outDir":"/workspaces/diet_hack/my-app/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"/workspaces/diet_hack/my-app","outDir":"/workspaces/diet_hack/my-app/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"/workspaces/diet_hack/my-app","outDir":"/workspaces/diet_hack/my-app/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"prerender":{}},"root":"/workspaces/diet_hack/my-app"};
				const buildManifest = {"ssr":{"_Counter-9be41ab3.js":{"file":"assets/Counter-9be41ab3.js"},"_components-86ea9901.js":{"file":"assets/components-86ea9901.js"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","imports":["_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.js","imports":["_Counter-9be41ab3.js","_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","imports":["_Counter-9be41ab3.js","_components-86ea9901.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/ssr":{"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"file":"ssr.js","isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-e3c16358.css","src":"\u0000virtual:#vinxi/handler/client.css"},"_Counter-9ac90a7b.js":{"file":"assets/Counter-9ac90a7b.js","imports":["_routing-3bc1c28f.js"]},"_components-f8cce11b.js":{"file":"assets/components-f8cce11b.js","imports":["_routing-3bc1c28f.js"]},"_routing-3bc1c28f.js":{"file":"assets/routing-3bc1c28f.js"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-051db270.js","imports":["_routing-3bc1c28f.js","_components-f8cce11b.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"assets/about-c06ece52.js","imports":["_routing-3bc1c28f.js","_Counter-9ac90a7b.js","_components-f8cce11b.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-12469ed3.js","imports":["_routing-3bc1c28f.js","_Counter-9ac90a7b.js","_components-f8cce11b.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/client":{"css":["assets/client-e3c16358.css"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css"],"file":"assets/client-c4f9038b.js","imports":["_routing-3bc1c28f.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_866AP8hmiB,
_E2dbksVAca,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-01-16T08:57:34.461Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/_build/manifest.json": {
    "type": "application/json",
    "etag": "\"747-jrbhj60csV42FjB9vN1s9kbp2Gs\"",
    "mtime": "2024-01-16T08:57:34.477Z",
    "size": 1863,
    "path": "../../.output/public/_build/manifest.json"
  },
  "/_build/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"157-wV0UCA6yT97hK6WDU5hSaiu3zgs\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 343,
    "path": "../../.output/public/_build/manifest.json.br"
  },
  "/_build/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"18c-gJwfA4l40aaH7klRjZyuhY2Zl48\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 396,
    "path": "../../.output/public/_build/manifest.json.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-01-16T08:57:34.481Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/assets/Counter-9be41ab3.js": {
    "type": "application/javascript",
    "etag": "\"16f-UEF/JWlPQ3dUpbIDwJGhjRLS/Ss\"",
    "mtime": "2024-01-16T08:57:34.465Z",
    "size": 367,
    "path": "../../.output/public/assets/Counter-9be41ab3.js"
  },
  "/assets/components-86ea9901.js": {
    "type": "application/javascript",
    "etag": "\"4af-qXVx/EU750ZRllfZ9ZNxEkMKrpU\"",
    "mtime": "2024-01-16T08:57:34.465Z",
    "size": 1199,
    "path": "../../.output/public/assets/components-86ea9901.js"
  },
  "/assets/components-86ea9901.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"25a-AI/pjiL2CPUG4VwVHrLmExPQyOU\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 602,
    "path": "../../.output/public/assets/components-86ea9901.js.br"
  },
  "/assets/components-86ea9901.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2a8-A2Cei1DuY7aIw4iwpk08LIMtUGk\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 680,
    "path": "../../.output/public/assets/components-86ea9901.js.gz"
  },
  "/_build/assets/Counter-9ac90a7b.js": {
    "type": "application/javascript",
    "etag": "\"16d-gnMyZjKyUDLaPxyuj4pGpIfKFXE\"",
    "mtime": "2024-01-16T08:57:34.477Z",
    "size": 365,
    "path": "../../.output/public/_build/assets/Counter-9ac90a7b.js"
  },
  "/_build/assets/_...404_-051db270.js": {
    "type": "application/javascript",
    "etag": "\"2cb-uRUXpnV5inAD9nEDiSaBvb6/T6c\"",
    "mtime": "2024-01-16T08:57:34.481Z",
    "size": 715,
    "path": "../../.output/public/_build/assets/_...404_-051db270.js"
  },
  "/_build/assets/about-c06ece52.js": {
    "type": "application/javascript",
    "etag": "\"2bb-2D+UUuRJWJtynASIT5BqsA0CaNg\"",
    "mtime": "2024-01-16T08:57:34.485Z",
    "size": 699,
    "path": "../../.output/public/_build/assets/about-c06ece52.js"
  },
  "/_build/assets/client-c4f9038b.js": {
    "type": "application/javascript",
    "etag": "\"2fd7-G8morU7XjMDX5tAgZYTvU9b5aDM\"",
    "mtime": "2024-01-16T08:57:34.489Z",
    "size": 12247,
    "path": "../../.output/public/_build/assets/client-c4f9038b.js"
  },
  "/_build/assets/client-c4f9038b.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1160-XV7VK8b78Uz6E67yqKXx6zdfvOk\"",
    "mtime": "2024-01-16T08:57:34.597Z",
    "size": 4448,
    "path": "../../.output/public/_build/assets/client-c4f9038b.js.br"
  },
  "/_build/assets/client-c4f9038b.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"1378-XdvN8gYoMwiFzHfaF65yYazMSgs\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 4984,
    "path": "../../.output/public/_build/assets/client-c4f9038b.js.gz"
  },
  "/_build/assets/client-e3c16358.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a22-502LGKwQ8UX/ivoWcDaVTFaXNHc\"",
    "mtime": "2024-01-16T08:57:34.489Z",
    "size": 6690,
    "path": "../../.output/public/_build/assets/client-e3c16358.css"
  },
  "/_build/assets/client-e3c16358.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"660-KMC4fD2vA/59IY820LZ4Y1oKnXQ\"",
    "mtime": "2024-01-16T08:57:34.561Z",
    "size": 1632,
    "path": "../../.output/public/_build/assets/client-e3c16358.css.br"
  },
  "/_build/assets/client-e3c16358.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"78c-zHkhS7cTgCwH6IfeLzxDvU8a/mA\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 1932,
    "path": "../../.output/public/_build/assets/client-e3c16358.css.gz"
  },
  "/_build/assets/components-f8cce11b.js": {
    "type": "application/javascript",
    "etag": "\"2eb-hv5o/AHriqPv8d3v4iO1RdkWcjc\"",
    "mtime": "2024-01-16T08:57:34.493Z",
    "size": 747,
    "path": "../../.output/public/_build/assets/components-f8cce11b.js"
  },
  "/_build/assets/index-12469ed3.js": {
    "type": "application/javascript",
    "etag": "\"2fb-UgxygMG3PztZDXA7MI2F4jfGfIk\"",
    "mtime": "2024-01-16T08:57:34.493Z",
    "size": 763,
    "path": "../../.output/public/_build/assets/index-12469ed3.js"
  },
  "/_build/assets/routing-3bc1c28f.js": {
    "type": "application/javascript",
    "etag": "\"6c8a-4+Gu4qDTd9nM2l3ndwZv1PfzBmc\"",
    "mtime": "2024-01-16T08:57:34.493Z",
    "size": 27786,
    "path": "../../.output/public/_build/assets/routing-3bc1c28f.js"
  },
  "/_build/assets/routing-3bc1c28f.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"26fe-3XuQ2F24EhxjqWjIlxDz3MeJfXs\"",
    "mtime": "2024-01-16T08:57:34.625Z",
    "size": 9982,
    "path": "../../.output/public/_build/assets/routing-3bc1c28f.js.br"
  },
  "/_build/assets/routing-3bc1c28f.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"2ade-PIzh5K5B0duh5Oc7mBYFrXmbcng\"",
    "mtime": "2024-01-16T08:57:34.557Z",
    "size": 10974,
    "path": "../../.output/public/_build/assets/routing-3bc1c28f.js.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const d = "Invariant Violation", { setPrototypeOf: k$1 = function(e, t) {
  return e.__proto__ = t, e;
} } = Object;
class m extends Error {
  constructor(t = d) {
    super(typeof t == "number" ? `${d}: ${t} (see https://github.com/apollographql/invariant-packages)` : t);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", d);
    k$1(this, m.prototype);
  }
}
function g(e, t) {
  if (!e)
    throw new m(t);
}
function z(e) {
  let t;
  const n = getRequestURL(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...s, body: e.node.req.body }) : new Request(n, { ...s, get body() {
    return t || (t = getRequestWebStream(e), t);
  } });
}
function A(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: z(e), url: getRequestURL(e) }, e.web.request;
}
const T$1 = Symbol("h3Event"), f$1 = Symbol("fetchEvent"), J = { get(e, t) {
  var _a;
  return t === f$1 ? e : (_a = e[t]) != null ? _a : e[T$1][t];
} };
function M(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: A(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [T$1]: e }, J);
}
function _(e) {
  if (!e[f$1]) {
    const t = M(e);
    e[f$1] = t;
  }
  return e[f$1];
}
function j(e, t) {
  return new ReadableStream({ start(n) {
    crossSerializeStream(t, { scopeId: e, plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], onSerialize(s, i) {
      const o = i ? `(${getCrossReferenceHeader(e)},${s})` : s;
      n.enqueue(new TextEncoder().encode(`${o};
`));
    }, onDone() {
      n.close();
    }, onError(s) {
      n.error(s);
    } });
  } });
}
async function B(e) {
  g(e.method === "POST", `Invalid method ${e.method}. Expected POST.`);
  const t = _(e), n = t.request, s = n.headers.get("x-server-id"), i = n.headers.get("x-server-instance"), o = new URL(n.url);
  let u, c;
  if (s)
    g(typeof s == "string", "Invalid server function"), [u, c] = s.split("#");
  else if (u = o.searchParams.get("id"), c = o.searchParams.get("name"), !u || !c)
    throw new Error("Invalid request");
  const I = (await globalThis.MANIFEST["server-fns"].chunks[u].import())[c];
  let a = [];
  if (!i) {
    const r = o.searchParams.get("args");
    r && JSON.parse(r).forEach((l) => a.push(l));
  }
  const h = n.headers.get("content-type");
  h.startsWith("multipart/form-data") || h.startsWith("application/x-www-form-urlencoded") ? a.push(await n.formData()) : a = fromJSON(await n.json(), { plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin] });
  try {
    const r = await provideRequestEvent(t, () => (sharedConfig.context = { event: t }, I(...a)));
    if (!i) {
      const l = r instanceof Error, L = new URL(n.headers.get("referer"));
      return new Response(null, { status: 302, headers: { Location: L.toString(), ...r ? { "Set-Cookie": `flash=${JSON.stringify({ url: o.pathname + encodeURIComponent(o.search), result: l ? r.message : r, error: l, input: [...a.slice(0, -1), [...a[a.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
    }
    return typeof r == "string" ? new Response(r) : (setHeader(e, "content-type", "text/javascript"), j(i, r));
  } catch (r) {
    return r instanceof Response && r.status === 302 ? new Response(null, { status: i ? 204 : 302, headers: { Location: r.headers.get("Location") } }) : r;
  }
}
const Y$1 = eventHandler(B);

function D(e) {
  let t;
  const n = getRequestURL(e), s = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...s, body: e.node.req.body }) : new Request(n, { ...s, get body() {
    return t || (t = getRequestWebStream(e), t);
  } });
}
function K(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: D(e), url: getRequestURL(e) }, e.web.request;
}
const T = Symbol("h3Event"), f = Symbol("fetchEvent"), Y = { get(e, t) {
  var _a;
  return t === f ? e : (_a = e[t]) != null ? _a : e[T][t];
} };
function G(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: K(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [T]: e }, Y);
}
function Q(e) {
  if (!e[f]) {
    const t = G(e);
    e[f] = t;
  }
  return e[f];
}
var V = " ";
const X = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(V), true) : null };
function k(e) {
  let { tag: t, attrs: { key: n, ...s } = { key: void 0 }, children: r } = e;
  return X[t]({ attrs: s, key: n, children: r });
}
function Z(e, t, n, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[s], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...i.map((u) => k(u)), createComponent$1(a, c)] };
    }
  });
}
const v = [{ type: "page", $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('./chunks/build/_...404_.mjs'), import: () => import('./chunks/build/_...404_.mjs') }, path: "/*404", filePath: "/workspaces/diet_hack/my-app/src/routes/[...404].tsx" }, { type: "page", $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => import('./chunks/build/about.mjs'), import: () => import('./chunks/build/about.mjs') }, path: "/about", filePath: "/workspaces/diet_hack/my-app/src/routes/about.tsx" }, { type: "page", $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('./chunks/build/index.mjs'), import: () => import('./chunks/build/index.mjs') }, path: "/", filePath: "/workspaces/diet_hack/my-app/src/routes/index.tsx" }], ee = se(v.filter((e) => e.type === "page")), te = re(v.filter((e) => e.type === "api"));
function ne(e, t) {
  const n = e.replace("", "").split("/").filter(Boolean);
  e:
    for (const s of te) {
      const r = s.matchSegments;
      if (n.length < r.length || !s.wildcard && n.length > r.length)
        continue;
      for (let i = 0; i < r.length; i++) {
        const l = r[i];
        if (l && n[i] !== l)
          continue e;
      }
      const a = s[`$${t}`];
      if (a === "skip" || a === void 0)
        return;
      const o = {};
      for (const { type: i, name: l, index: c } of s.params)
        i === ":" ? o[l] = n[c] : o[l] = n.slice(c).join("/");
      return { handler: a, params: o };
    }
}
function se(e) {
  function t(n, s, r, a) {
    const o = Object.values(n).find((i) => r.startsWith(i.id + "/"));
    return o ? (t(o.children || (o.children = []), s, r.slice(o.id.length)), n) : (n.push({ ...s, id: r, path: r.replace(/\/\([^)/]+\)/g, "") }), n);
  }
  return e.sort((n, s) => n.path.length - s.path.length).reduce((n, s) => t(n, s, s.path, s.path), []);
}
function re(e) {
  return e.flatMap((t) => C(t.path).map((s) => ({ ...t, path: s }))).map(oe).sort((t, n) => n.score - t.score);
}
function C(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t)
    return [e];
  let n = e.slice(0, t.index), s = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(s); )
    r.push(n += t[1]), s = s.slice(t[0].length);
  return C(s).reduce((a, o) => [...a, ...r.map((i) => i + o)], []);
}
function oe(e) {
  const t = e.path.split("/").filter(Boolean), n = [], s = [];
  let r = 0, a = false;
  for (const [o, i] of t.entries())
    if (i[0] === ":") {
      const l = i.slice(1);
      r += 3, n.push({ type: ":", name: l, index: o }), s.push(null);
    } else
      i[0] === "*" ? (r -= 1, n.push({ type: "*", name: i.slice(1), index: o }), a = true) : (r += 4, i.match(/^\(.+\)$/) || s.push(i));
  return { ...e, score: r, params: n, matchSegments: s, wildcard: a };
}
function ae() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, metadata: { ...n.$$route ? n.$$route.require().route.metadata : {}, filesystem: true }, component: Z(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return ee.map(e);
}
function ie(e) {
  const t = getCookie(e, "flash");
  if (!t)
    return;
  let n = JSON.parse(t);
  if (!n || !n.result)
    return [];
  const s = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])];
  return setCookie(e, "flash", "", { maxAge: 0 }), { url: n.url, result: n.error ? new Error(n.result) : n.result, input: s };
}
async function le(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, setResponseHeader(e, "Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], initialSubmission: ie(e), routes: ae(), components: { status: (s) => (setResponseStatus(e, s.code, s.text), () => setResponseStatus(e, 200)), header: (s) => (s.append ? appendResponseHeader(e, s.name, s.value) : setResponseHeader(e, s.name, s.value), () => {
    const r = getResponseHeader(e, s.name);
    if (r && typeof r == "string") {
      const a = r.split(", "), o = a.indexOf(s.value);
      o !== -1 && a.splice(o, 1), a.length ? setResponseHeader(e, s.name, a.join(", ")) : removeResponseHeader(e, s.name);
    }
  }) }, $islands: /* @__PURE__ */ new Set() });
}
function ce(e, t = {}) {
  return eventHandler({ onRequest: t.onRequest, onBeforeResponse: t.onBeforeResponse, handler: (n) => {
    const s = Q(n);
    return provideRequestEvent(s, async () => {
      const r = ne(new URL(s.request.url).pathname, s.request.method);
      if (r) {
        const p = (await r.handler.import())[s.request.method];
        return s.params = r.params, sharedConfig.context = { event: s }, await p(s);
      }
      const a = await le(s);
      let o = { ...t };
      if (o.onCompleteAll) {
        const u = o.onCompleteAll;
        o.onCompleteAll = (p) => {
          q(a)(p), u(p);
        };
      } else
        o.onCompleteAll = q(a);
      if (o.onCompleteShell) {
        const u = o.onCompleteShell;
        o.onCompleteShell = (p) => {
          S(a, n)(), u(p);
        };
      } else
        o.onCompleteShell = S(a, n);
      const i = renderToStream(() => (sharedConfig.context.event = a, e(a)), o);
      if (a.response && a.response.headers.get("Location"))
        return sendRedirect(s, a.response.headers.get("Location"));
      const { writable: l, readable: c } = new TransformStream();
      return i.pipeTo(l), c;
    });
  } });
}
function S(e, t) {
  return () => {
    e.response && e.response.headers.get("Location") && (setResponseStatus(t, 302), setHeader(t, "Location", e.response.headers.get("Location")));
  };
}
function q(e) {
  return ({ write: t }) => {
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function ue(e, t) {
  return ce(e, { ...t, createPageEvent: pe });
}
async function pe(e) {
  const t = globalThis.MANIFEST.client;
  return Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], routes: [], $islands: /* @__PURE__ */ new Set() });
}
var de = ["<script", ">", "<\/script>"], me = ["<script", ' type="module"', "><\/script>"];
const fe = ssr("<!DOCTYPE html>");
function he(e) {
  const t = getRequestEvent();
  return createComponent(NoHydration, { get children() {
    return [fe, createComponent(e.document, { get assets() {
      return t.assets.map((n) => k(n));
    }, get scripts() {
      return [ssr(de, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(me, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    } })];
  } });
}
var ge = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], ye = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Se = ue(() => createComponent(he, { document: ({ assets: e, children: t, scripts: n }) => ssr(ye, ssrHydrationKey(), createComponent(NoHydration, { get children() {
  return ssr(ge, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Y$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Se, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map
