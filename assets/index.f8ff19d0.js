import {
  e as h,
  v as l,
  r as c,
  j as n,
  F as d,
  a as u,
  V as m,
  H as p,
  I as b,
  B as f,
  T as y,
  R as v,
  b as x,
  C as S,
} from "./vendor.c2cbadba.js"
const w = function () {
  const o = document.createElement("link").relList

  if (o && o.supports && o.supports("modulepreload")) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r)
  }).observe(document, {childList: !0, subtree: !0})
  function a(e) {
    const t = {}

    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    )
  }
  function i(e) {
    if (e.ep) return
    e.ep = !0
    const t = a(e)

    fetch(e.href, t)
  }
}

w()
var R = "./assets/bg.6808d548.jpg",
  j = h({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${R})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          fontSize: "16px",
          w: "100%",
          minH: "100vh",
        },
      },
    },
  })
const k = [
  {id: l(), name: "Medias "},
  {id: l(), name: "caramelos"},
  {id: l(), name: "Vitel Tone"},
]

function C() {
  const [s, o] = c.exports.useState(void 0),
    [a, i] = c.exports.useState("")

  c.exports.useEffect(() => {
    o(k)
  }, [])
  const e = (r) => {
      r.preventDefault(), a.trim() !== "" && o([...s, {id: l(), name: a}]), i("")
    },
    t = (r) => {
      o(s.filter((g) => g.id !== r))
    }

  return n(d, {
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
    w: "100%",
    children: u(m, {
      alignItems: "flex-start",
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "30%",
      children: [
        n(p, {
          fontFamily: "'Mountains of Christmas'",
          textAlign: "center",
          w: "100%",
          children: "Regalos:",
        }),
        u(d, {
          as: "form",
          gap: 2,
          onSubmit: e,
          children: [
            n(b, {placeholder: "Regalos", value: a, onChange: (r) => i(r.target.value)}),
            n(f, {colorScheme: "red", type: "submit", children: "Agregar"}),
          ],
        }),
        s &&
          n(m, {
            w: "100%",
            children: s.map((r) =>
              u(
                d,
                {
                  justifyContent: "space-between",
                  w: "100%",
                  children: [
                    n(y, {children: r.name}),
                    n(f, {colorScheme: "red", size: "xs", onClick: () => t(r.id), children: "x"}),
                  ],
                },
                r.id,
              ),
            ),
          }),
      ],
    }),
  })
}
v.render(
  n(x.StrictMode, {children: n(S, {theme: j, children: n(C, {})})}),
  document.getElementById("root"),
)
