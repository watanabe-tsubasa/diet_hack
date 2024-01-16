import { ssrElement, mergeProps as mergeProps$1 } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/web/dist/server.js';
import { createContext, mergeProps, splitProps, createMemo, useContext } from 'file:///workspaces/diet_hack/my-app/node_modules/solid-js/dist/server.js';

const P = /^\/+|(\/)\/+$/g;
function u(t, n = false) {
  const e = t.replace(P, "$1");
  return e ? n || /^[?#]/.test(e) ? e : "/" + e : "";
}
function R(t, n) {
  if (t == null)
    throw new Error(n);
  return t;
}
const x = createContext(), w = createContext(), o = () => R(useContext(x), "Make sure your app is wrapped in a <Router />"), L = () => useContext(w) || o().base, b = (t) => {
  const n = L();
  return createMemo(() => n.resolvePath(t()));
}, O = (t) => {
  const n = o();
  return createMemo(() => {
    const e = t();
    return e !== void 0 ? n.renderPath(e) : e;
  });
}, $ = () => o().location;
function y(t) {
  t = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, t);
  const [, n] = splitProps(t, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), e = b(() => t.href), h = O(e), d = $(), s = createMemo(() => {
    const a = e();
    if (a === void 0)
      return false;
    const c = u(a.split(/[?#]/, 1)[0]).toLowerCase(), i = u(d.pathname).toLowerCase();
    return t.end ? c === i : i.startsWith(c);
  });
  return ssrElement("a", mergeProps$1(n, { get href() {
    return h() || t.href;
  }, get state() {
    return JSON.stringify(t.state);
  }, get classList() {
    return { ...t.class && { [t.class]: true }, [t.inactiveClass]: !s(), [t.activeClass]: s(), ...n.classList };
  }, link: true, get "aria-current"() {
    return s() ? "page" : void 0;
  } }), void 0, true);
}

export { y };
//# sourceMappingURL=components-86ea9901.mjs.map
