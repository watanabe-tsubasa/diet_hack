import { ssr, ssrHydrationKey, escape } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/server.js';
import { createSignal } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/dist/server.js';

var n = ["<button", ' class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]">Clicks: <!--$-->', "<!--/--></button>"];
function p() {
  const [r, s] = createSignal(0);
  return ssr(n, ssrHydrationKey(), escape(r()));
}

export { p };
//# sourceMappingURL=Counter-9be41ab3.mjs.map
