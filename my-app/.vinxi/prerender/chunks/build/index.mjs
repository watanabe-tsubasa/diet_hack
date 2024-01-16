import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/server.js';
import { p } from './Counter-9be41ab3.mjs';
import { y } from './components-86ea9901.mjs';
import 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/dist/server.js';

var l = ["<main", ' class="text-center mx-auto text-gray-700 p-4"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1><!--$-->', '<!--/--><p class="mt-8">Visit <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">solidjs.com</a> to learn how to build Solid apps.</p><p class="my-4"><span>Home</span> - <!--$-->', "<!--/--> </p></main>"];
function c() {
  return ssr(l, ssrHydrationKey(), escape(createComponent(p, {})), escape(createComponent(y, { href: "/about", class: "text-sky-600 hover:underline", children: "About Page" })));
}

export { c as default };
//# sourceMappingURL=index.mjs.map
