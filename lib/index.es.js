import { defineComponent as l, ref as r, createVNode as s, createTextVNode as c } from "vue";
const u = /* @__PURE__ */ l({
  name: "dssDemoFor",
  setup() {
    const o = r(0), e = () => {
      o.value++;
    };
    return () => s("div", null, [s("p", null, [c("Count: "), o.value]), s("button", {
      onClick: e
    }, [c("Increment")])]);
  }
}), m = (o, e) => {
  if (o.install = (t) => {
    for (const n of [o, ...Object.values(e ?? {})])
      t.component(n.name, n);
  }, e)
    for (const [t, n] of Object.entries(e))
      o[t] = n;
  return o;
}, a = m(u), f = [
  a
], d = (o) => {
  Object.values(f).forEach((e) => {
    console.log(e), o.component(e.name, e);
  });
}, p = {
  install: d,
  version: "1.1.1"
};
export {
  p as default
};
