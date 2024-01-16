import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/server.js';
import { y } from './components-86ea9901.mjs';
import 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/dist/server.js';

var a = ["<main", ' class="text-center mx-auto text-gray-700 p-4"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Not Found</h1><p class="mt-8">Visit <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">solidjs.com</a> to learn how to build Solid apps.</p><p class="my-4"><!--$-->', "<!--/--> - <!--$-->", "<!--/--></p></main>"];
function m() {
  return ssr(a, ssrHydrationKey(), escape(createComponent(y, { href: "/", class: "text-sky-600 hover:underline", children: "Home" })), escape(createComponent(y, { href: "/about", class: "text-sky-600 hover:underline", children: "About Page" })));
}

export { m as default };
//# sourceMappingURL=_...404_.mjs.map
