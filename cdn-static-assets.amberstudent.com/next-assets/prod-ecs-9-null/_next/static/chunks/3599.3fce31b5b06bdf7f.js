"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3599],
  {
    41412: function (t, e, n) {
      n.d(e, {
        CR: function () {
          return u;
        },
        XA: function () {
          return s;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return a;
        },
        ev: function () {
          return l;
        },
        pi: function () {
          return o;
        },
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      function s(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function u(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function l(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
    },
    94589: function (t, e, n) {
      n.d(e, {
        M: function () {
          return y;
        },
      });
      var r = n(41412),
        i = n(2784),
        o = n(28723),
        a = n(76432),
        s = n(23617);
      function u() {
        var t = (0, i.useRef)(!1);
        return (
          (0, s.L)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var l = n(97967),
        c = n(3105),
        d = n(6481),
        p = function (t) {
          var e = t.children,
            n = t.initial,
            o = t.isPresent,
            a = t.onExitComplete,
            s = t.custom,
            u = t.presenceAffectsLayout,
            p = (0, c.h)(f),
            v = (0, d.M)(),
            h = (0, i.useMemo)(
              function () {
                return {
                  id: v,
                  initial: n,
                  isPresent: o,
                  custom: s,
                  onExitComplete: function (t) {
                    var e, n;
                    p.set(t, !0);
                    try {
                      for (
                        var i = (0, r.XA)(p.values()), o = i.next();
                        !o.done;
                        o = i.next()
                      ) {
                        if (!o.value) return;
                      }
                    } catch (s) {
                      e = { error: s };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    null === a || void 0 === a || a();
                  },
                  register: function (t) {
                    return (
                      p.set(t, !1),
                      function () {
                        return p.delete(t);
                      }
                    );
                  },
                };
              },
              u ? void 0 : [o]
            );
          return (
            (0, i.useMemo)(
              function () {
                p.forEach(function (t, e) {
                  return p.set(e, !1);
                });
              },
              [o]
            ),
            i.useEffect(
              function () {
                !o && !p.size && (null === a || void 0 === a || a());
              },
              [o]
            ),
            i.createElement(l.O.Provider, { value: h }, e)
          );
        };
      function f() {
        return new Map();
      }
      var v = n(3422),
        h = n(96073),
        m = function (t) {
          return t.key || "";
        };
      var y = function (t) {
        var e = t.children,
          n = t.custom,
          l = t.initial,
          c = void 0 === l || l,
          d = t.onExitComplete,
          f = t.exitBeforeEnter,
          y = t.presenceAffectsLayout,
          g = void 0 === y || y,
          x = (0, r.CR)(
            (function () {
              var t = u(),
                e = (0, r.CR)((0, i.useState)(0), 2),
                n = e[0],
                o = e[1],
                s = (0, i.useCallback)(
                  function () {
                    t.current && o(n + 1);
                  },
                  [n]
                );
              return [
                (0, i.useCallback)(
                  function () {
                    return a.ZP.postRender(s);
                  },
                  [s]
                ),
                n,
              ];
            })(),
            1
          ),
          b = x[0],
          w = (0, i.useContext)(v.p).forceRender;
        w && (b = w);
        var E = u(),
          P = (function (t) {
            var e = [];
            return (
              i.Children.forEach(t, function (t) {
                (0, i.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(e),
          S = P,
          T = new Set(),
          A = (0, i.useRef)(S),
          C = (0, i.useRef)(new Map()).current,
          V = (0, i.useRef)(!0);
        if (
          ((0, s.L)(function () {
            (V.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var n = m(t);
                  e.set(n, t);
                });
              })(P, C),
              (A.current = S);
          }),
          (0, h.z)(function () {
            (V.current = !0), C.clear(), T.clear();
          }),
          V.current)
        )
          return i.createElement(
            i.Fragment,
            null,
            S.map(function (t) {
              return i.createElement(
                p,
                {
                  key: m(t),
                  isPresent: !0,
                  initial: !!c && void 0,
                  presenceAffectsLayout: g,
                },
                t
              );
            })
          );
        S = (0, r.ev)([], (0, r.CR)(S), !1);
        for (
          var R = A.current.map(m), M = P.map(m), O = R.length, L = 0;
          L < O;
          L++
        ) {
          var k = R[L];
          -1 === M.indexOf(k) && T.add(k);
        }
        return (
          f && T.size && (S = []),
          T.forEach(function (t) {
            if (-1 === M.indexOf(t)) {
              var e = C.get(t);
              if (e) {
                var r = R.indexOf(t);
                S.splice(
                  r,
                  0,
                  i.createElement(
                    p,
                    {
                      key: m(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        C.delete(t), T.delete(t);
                        var e = A.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        if ((A.current.splice(e, 1), !T.size)) {
                          if (((A.current = P), !1 === E.current)) return;
                          b(), d && d();
                        }
                      },
                      custom: n,
                      presenceAffectsLayout: g,
                    },
                    e
                  )
                );
              }
            }
          }),
          (S = S.map(function (t) {
            var e = t.key;
            return T.has(e)
              ? t
              : i.createElement(
                  p,
                  { key: m(t), isPresent: !0, presenceAffectsLayout: g },
                  t
                );
          })),
          "production" !== o.O &&
            f &&
            S.length > 1 &&
            console.warn(
              "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
            ),
          i.createElement(
            i.Fragment,
            null,
            T.size
              ? S
              : S.map(function (t) {
                  return (0, i.cloneElement)(t);
                })
          )
        );
      };
    },
    3422: function (t, e, n) {
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var r = (0, n(2784).createContext)({});
    },
    97967: function (t, e, n) {
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(2784).createContext)(null);
    },
    72789: function (t, e, n) {
      n.d(e, {
        E: function () {
          return sa;
        },
      });
      var r = n(41412),
        i = n(2784),
        o = n(28723),
        a = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        s = {
          measureLayout: a(["layout", "layoutId", "drag"]),
          animation: a([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: a(["exit"]),
          drag: a(["drag", "dragControls"]),
          focus: a(["whileFocus"]),
          hover: a(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: a(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: a(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: a(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var u = (0, i.createContext)({ strict: !1 }),
        l = Object.keys(s),
        c = l.length;
      var d = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        p = (0, i.createContext)({});
      var f = n(97967),
        v = n(23617),
        h = n(33791),
        m = { current: null },
        y = !1;
      function g() {
        return (
          !y &&
            (function () {
              if (((y = !0), h.j))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (m.current = t.matches);
                    };
                  t.addListener(e), e();
                } else m.current = !1;
            })(),
          (0, r.CR)((0, i.useState)(m.current), 1)[0]
        );
      }
      function x(t, e, n, r) {
        var o = (0, i.useContext)(u),
          a = (0, i.useContext)(p).visualElement,
          s = (0, i.useContext)(f.O),
          l = (function () {
            var t = g(),
              e = (0, i.useContext)(d).reducedMotion;
            return "never" !== e && ("always" === e || t);
          })(),
          c = (0, i.useRef)(void 0);
        r || (r = o.renderer),
          !c.current &&
            r &&
            (c.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === s || void 0 === s ? void 0 : s.id,
              blockInitialAnimation:
                !1 === (null === s || void 0 === s ? void 0 : s.initial),
              shouldReduceMotion: l,
            }));
        var h = c.current;
        return (
          (0, v.L)(function () {
            null === h || void 0 === h || h.syncRender();
          }),
          (0, i.useEffect)(function () {
            var t;
            null ===
              (t = null === h || void 0 === h ? void 0 : h.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          (0, v.L)(function () {
            return function () {
              return null === h || void 0 === h ? void 0 : h.notifyUnmount();
            };
          }, []),
          h
        );
      }
      function b(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function w(t) {
        return Array.isArray(t);
      }
      function E(t) {
        return "string" === typeof t || w(t);
      }
      function P(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function S(t, e, n) {
        var r = t.getProps();
        return P(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function T(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          E(t.initial) ||
          E(t.animate) ||
          E(t.whileHover) ||
          E(t.whileDrag) ||
          E(t.whileTap) ||
          E(t.whileFocus) ||
          E(t.exit)
        );
      }
      function A(t) {
        return Boolean(T(t) || t.variants);
      }
      function C(t) {
        var e = (function (t, e) {
            if (T(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || E(n) ? n : void 0,
                animate: E(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, i.useContext)(p)),
          n = e.initial,
          r = e.animate;
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [V(n), V(r)]
        );
      }
      function V(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var R = n(3105),
        M = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        O = 1;
      var L = n(3422),
        k = (0, i.createContext)({});
      var j = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, r.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(i.Component);
      function D(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          a = t.projectionNodeConstructor,
          f = t.useRender,
          v = t.useVisualState,
          m = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (s.projectionNodeConstructor = t[e])
                    : (s[e].Component = t[e]));
            })(e),
          (0, i.forwardRef)(function (t, y) {
            var g = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, i.useContext)(L.p)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = (0, r.pi)((0, r.pi)({}, t), { layoutId: g });
            var w = (0, i.useContext)(d),
              E = null,
              P = C(t),
              S = w.isStatic
                ? void 0
                : (0, R.h)(function () {
                    if (M.hasEverUpdated) return O++;
                  }),
              T = v(t, w.isStatic);
            return (
              !w.isStatic &&
                h.j &&
                ((P.visualElement = x(m, T, (0, r.pi)((0, r.pi)({}, w), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, i.useContext)(k);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && b(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(S, t, P.visualElement, a || s.projectionNodeConstructor),
                (E = (function (t, e, n) {
                  var a = [],
                    d = (0, i.useContext)(u);
                  if (!e) return null;
                  "production" !== o.O && n && d.strict;
                  for (var p = 0; p < c; p++) {
                    var f = l[p],
                      v = s[f],
                      h = v.isEnabled,
                      m = v.Component;
                    h(t) &&
                      m &&
                      a.push(
                        i.createElement(
                          m,
                          (0, r.pi)({ key: f }, t, { visualElement: e })
                        )
                      );
                  }
                  return a;
                })(t, P.visualElement, e))),
              i.createElement(
                j,
                {
                  visualElement: P.visualElement,
                  props: (0, r.pi)((0, r.pi)({}, w), t),
                },
                E,
                i.createElement(
                  p.Provider,
                  { value: P },
                  f(
                    m,
                    t,
                    S,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : b(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(T, P.visualElement, y),
                    T,
                    w.isStatic,
                    P.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function F(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), D(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var B = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function I(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(B.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var U = {};
      var N = ["", "X", "Y", "Z"],
        z = ["transformPerspective", "x", "y", "z"];
      function Y(t, e) {
        return z.indexOf(t) - z.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return N.forEach(function (e) {
          return z.push(t + e);
        });
      });
      var H = new Set(z);
      function W(t) {
        return H.has(t);
      }
      var X = new Set(["originX", "originY", "originZ"]);
      function Z(t) {
        return X.has(t);
      }
      function _(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          W(t) || Z(t) || ((n || void 0 !== r) && (!!U[t] || "opacity" === t))
        );
      }
      var q = function (t) {
          return Boolean(null !== t && "object" === typeof t && t.getVelocity);
        },
        G = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function $(t) {
        return t.startsWith("--");
      }
      var K = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      const J = (t, e) => (n) => Math.max(Math.min(n, e), t),
        Q = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        tt = /(-)?([\d]*\.?[\d])+/g,
        et =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        nt =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function rt(t) {
        return "string" === typeof t;
      }
      const it = (t) => ({
          test: (e) => rt(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ot = it("deg"),
        at = it("%"),
        st = it("px"),
        ut = it("vh"),
        lt = it("vw"),
        ct = Object.assign(Object.assign({}, at), {
          parse: (t) => at.parse(t) / 100,
          transform: (t) => at.transform(100 * t),
        }),
        dt = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        pt = Object.assign(Object.assign({}, dt), { transform: J(0, 1) }),
        ft = Object.assign(Object.assign({}, dt), { default: 1 });
      var vt = (0, r.pi)((0, r.pi)({}, dt), { transform: Math.round }),
        ht = {
          borderWidth: st,
          borderTopWidth: st,
          borderRightWidth: st,
          borderBottomWidth: st,
          borderLeftWidth: st,
          borderRadius: st,
          radius: st,
          borderTopLeftRadius: st,
          borderTopRightRadius: st,
          borderBottomRightRadius: st,
          borderBottomLeftRadius: st,
          width: st,
          maxWidth: st,
          height: st,
          maxHeight: st,
          size: st,
          top: st,
          right: st,
          bottom: st,
          left: st,
          padding: st,
          paddingTop: st,
          paddingRight: st,
          paddingBottom: st,
          paddingLeft: st,
          margin: st,
          marginTop: st,
          marginRight: st,
          marginBottom: st,
          marginLeft: st,
          rotate: ot,
          rotateX: ot,
          rotateY: ot,
          rotateZ: ot,
          scale: ft,
          scaleX: ft,
          scaleY: ft,
          scaleZ: ft,
          skew: ot,
          skewX: ot,
          skewY: ot,
          distance: st,
          translateX: st,
          translateY: st,
          translateZ: st,
          x: st,
          y: st,
          z: st,
          perspective: st,
          transformPerspective: st,
          opacity: pt,
          originX: ct,
          originY: ct,
          originZ: st,
          zIndex: vt,
          fillOpacity: pt,
          strokeOpacity: pt,
          numOctaves: vt,
        };
      function mt(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          p = !0;
        for (var f in e) {
          var v = e[f];
          if ($(f)) a[f] = v;
          else {
            var h = ht[f],
              m = K(v, h);
            if (W(f)) {
              if (((c = !0), (s[f] = m), u.push(f), !p)) continue;
              v !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (p = !1);
            } else Z(f) ? ((l[f] = m), (d = !0)) : (o[f] = m);
          }
        }
        c
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              o.sort(Y);
              for (var d = !1, p = o.length, f = 0; f < p; f++) {
                var v = o[f];
                (c += "".concat(G[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0);
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : l && n && (c = "none"),
                c
              );
            })(t, n, p, r))
          : r
          ? (o.transform = r({}, ""))
          : !e.transform && o.transform && (o.transform = "none"),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(l));
      }
      var yt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function gt(t, e, n) {
        for (var r in e) q(e[r]) || _(r, n) || (t[r] = e[r]);
      }
      function xt(t, e, n) {
        var o = {};
        return (
          gt(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate;
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  mt(t, e, { enableHardwareAcceleration: !n }, o);
                  var i = t.vars,
                    a = t.style;
                  return (0, r.pi)((0, r.pi)({}, i), a);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        );
      }
      function bt(t, e, n) {
        var r = {},
          i = xt(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var wt = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Et(t) {
        return wt.has(t);
      }
      var Pt,
        St = function (t) {
          return !Et(t);
        };
      try {
        (Pt = require("@emotion/is-prop-valid").default) &&
          (St = function (t) {
            return t.startsWith("on") ? !Et(t) : Pt(t);
          });
      } catch (ua) {}
      function Tt(t, e, n) {
        return "string" === typeof t ? t : st.transform(e + n * t);
      }
      var At = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Ct = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Vt(t, e, n, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          d = void 0 === c ? 1 : c,
          p = e.pathOffset,
          f = void 0 === p ? 0 : p;
        mt(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          i
        ),
          (t.attrs = t.style),
          (t.style = {});
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform),
          m &&
            (void 0 !== s || void 0 !== u || h.transform) &&
            (h.transformOrigin = (function (t, e, n) {
              var r = Tt(e, t.x, t.width),
                i = Tt(n, t.y, t.height);
              return "".concat(r, " ").concat(i);
            })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== o && (v.x = o),
          void 0 !== a && (v.y = a),
          void 0 !== l &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1);
              var o = i ? At : Ct;
              t[o.offset] = st.transform(-r);
              var a = st.transform(e),
                s = st.transform(n);
              t[o.array] = "".concat(a, " ").concat(s);
            })(v, l, d, f, !1);
      }
      var Rt = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Mt(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = Rt();
            return (
              Vt(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var o = {};
          gt(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style));
        }
        return n;
      }
      function Ot(t) {
        void 0 === t && (t = !1);
        return function (e, n, o, a, s, u) {
          var l = s.latestValues,
            c = (I(e) ? Mt : bt)(n, l, u),
            d = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (St(i) ||
                  (!0 === n && Et(i)) ||
                  (!e && !Et(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            p = (0, r.pi)((0, r.pi)((0, r.pi)({}, d), c), { ref: a });
          return o && (p["data-projection-id"] = o), (0, i.createElement)(e, p);
        };
      }
      var Lt = /([a-z])([A-Z])/g,
        kt = function (t) {
          return t.replace(Lt, "$1-$2").toLowerCase();
        };
      function jt(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var Dt = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function Ft(t, e, n, r) {
        for (var i in (jt(t, e, void 0, r), e.attrs))
          t.setAttribute(Dt.has(i) ? i : kt(i), e.attrs[i]);
      }
      function Bt(t) {
        var e = t.style,
          n = {};
        for (var r in e) (q(e[r]) || _(r, t)) && (n[r] = e[r]);
        return n;
      }
      function It(t) {
        var e = Bt(t);
        for (var n in t) {
          if (q(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function Ut(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      var Nt = function (t) {
          return Array.isArray(t);
        },
        zt = function (t) {
          return Nt(t) ? t[t.length - 1] || 0 : t;
        };
      function Yt(t) {
        var e,
          n = q(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      function Ht(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: Xt(e, n, r, i), renderState: o() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var Wt = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(p),
            o = (0, i.useContext)(f.O);
          return n
            ? Ht(t, e, r, o)
            : (0, R.h)(function () {
                return Ht(t, e, r, o);
              });
        };
      };
      function Xt(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = i(t);
        for (var u in s) o[u] = Yt(s[u]);
        var l = t.initial,
          c = t.animate,
          d = T(t),
          p = A(t);
        e &&
          p &&
          !d &&
          !1 !== t.inherit &&
          ((null !== l && void 0 !== l) || (l = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate));
        var f = a || !1 === l,
          v = f ? c : l;
        v &&
          "boolean" !== typeof v &&
          !Ut(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = P(t, e);
            if (n) {
              var i = n.transitionEnd;
              n.transition;
              var a = (0, r._T)(n, ["transitionEnd", "transition"]);
              for (var s in a) {
                var u = a[s];
                if (Array.isArray(u)) u = u[f ? u.length - 1 : 0];
                null !== u && (o[s] = u);
              }
              for (var s in i) o[s] = i[s];
            }
          });
        return o;
      }
      var Zt,
        _t = {
          useVisualState: Wt({
            scrapeMotionValuesFromProps: It,
            createRenderState: Rt,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Vt(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                Ft(e, r);
            },
          }),
        },
        qt = {
          useVisualState: Wt({
            scrapeMotionValuesFromProps: Bt,
            createRenderState: yt,
          }),
        };
      function Gt(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function $t(t, e, n, r) {
        (0, i.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return Gt(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function Kt(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Jt(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(Zt || (Zt = {}));
      var Qt = { pageX: 0, pageY: 0 };
      function te(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || Qt;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function ee(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ne(t, e) {
        return (
          void 0 === e && (e = "page"), { point: Jt(t) ? te(t, e) : ee(t, e) }
        );
      }
      var re = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ne(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        ie = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        oe = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ae(t) {
        return h.j && null === window.onpointerdown
          ? t
          : h.j && null === window.ontouchstart
          ? oe[t]
          : h.j && null === window.onmousedown
          ? ie[t]
          : t;
      }
      function se(t, e, n, r) {
        return Gt(t, ae(e), re(n, "pointerdown" === e), r);
      }
      function ue(t, e, n, r) {
        return $t(t, ae(e), n && re(n, "pointerdown" === e), r);
      }
      function le(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var ce = le("dragHorizontal"),
        de = le("dragVertical");
      function pe(t) {
        var e = !1;
        if ("y" === t) e = de();
        else if ("x" === t) e = ce();
        else {
          var n = ce(),
            r = de();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function fe() {
        var t = pe(!0);
        return !t || (t(), !1);
      }
      function ve(t, e, n) {
        return function (r, i) {
          var o;
          Kt(r) &&
            !fe() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(Zt.Hover, e),
            null === n || void 0 === n || n(r, i));
        };
      }
      var he = function (t, e) {
          return !!e && (t === e || he(t, e.parentElement));
        },
        me = n(96073);
      const ye = (t, e) => (n) => e(t(n)),
        ge = (...t) => t.reduce(ye);
      var xe = new Set();
      var be = new WeakMap(),
        we = new WeakMap(),
        Ee = function (t) {
          var e;
          null === (e = be.get(t.target)) || void 0 === e || e(t);
        },
        Pe = function (t) {
          t.forEach(Ee);
        };
      function Se(t, e, n) {
        var i = (function (t) {
          var e = t.root,
            n = (0, r._T)(t, ["root"]),
            i = e || document;
          we.has(i) || we.set(i, {});
          var o = we.get(i),
            a = JSON.stringify(n);
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(Pe, (0, r.pi)({ root: e }, n))),
            o[a]
          );
        })(e);
        return (
          be.set(t, n),
          i.observe(t),
          function () {
            be.delete(t), i.unobserve(t);
          }
        );
      }
      var Te = { some: 0, all: 1 };
      function Ae(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once;
        (0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : Te[u],
              };
              return Se(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !l || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(Zt.InView, i);
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, a, u]
        );
      }
      function Ce(t, e, n, r) {
        var a = r.fallback,
          s = void 0 === a || a;
        (0, i.useEffect)(
          function () {
            var r, i;
            t &&
              s &&
              ("production" !== o.O &&
                ((r =
                  "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                !1 ||
                  xe.has(r) ||
                  (console.warn(r), i && console.warn(i), xe.add(r))),
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(Zt.InView, !0);
              }));
          },
          [t]
        );
      }
      var Ve = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Re = {
          inView: Ve(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? Ce : Ae)(
                l,
                u.current,
                e,
                s
              );
          }),
          tap: Ve(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              c = { passive: !(n || e || r || h) };
            function d() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function p() {
              var t;
              return (
                d(),
                (u.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(Zt.Tap, !1),
                !fe()
              );
            }
            function f(t, n) {
              p() &&
                (he(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              p() && (null === r || void 0 === r || r(t, e));
            }
            function h(t, e) {
              var r;
              d(),
                u.current ||
                  ((u.current = !0),
                  (l.current = ge(
                    se(window, "pointerup", f, c),
                    se(window, "pointercancel", v, c)
                  )),
                  null === (r = a.animationState) ||
                    void 0 === r ||
                    r.setActive(Zt.Tap, !0),
                  null === n || void 0 === n || n(t, e));
            }
            ue(a, "pointerdown", s ? h : void 0, c), (0, me.z)(d);
          }),
          focus: Ve(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            $t(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(Zt.Focus, !0);
                  }
                : void 0
            ),
              $t(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(Zt.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Ve(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            ue(i, "pointerenter", e || r ? ve(i, !0, e) : void 0, {
              passive: !e,
            }),
              ue(i, "pointerleave", n || r ? ve(i, !1, n) : void 0, {
                passive: !n,
              });
          }),
        },
        Me = n(6481);
      function Oe() {
        var t = (0, i.useContext)(f.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = (0, Me.M)();
        (0, i.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      function Le(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function ke(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      const je = (t, e, n) => Math.min(Math.max(n, t), e),
        De = 0.001;
      function Fe({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let i,
          o,
          a = 1 - e;
        (a = je(0.05, 1, a)),
          (t = je(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = (e) => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = Be(e, a),
                  u = Math.exp(-i);
                return De - (o / s) * u;
              }),
              (o = (e) => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = Be(Math.pow(e, 2), a);
                return ((-i(e) + De > 0 ? -1 : 1) * ((o - s) * u)) / l;
              }))
            : ((i = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(i, o, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function Be(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const Ie = ["duration", "bounce"],
        Ue = ["stiffness", "damping", "mass"];
      function Ne(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ze(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
          o = ke(t, ["from", "to", "restSpeed", "restDelta"]);
        const a = { done: !1, value: e };
        let {
            stiffness: s,
            damping: u,
            mass: l,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Ne(t, Ue) && Ne(t, Ie)) {
              const n = Fe(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(o),
          f = Ye,
          v = Ye;
        function h() {
          const t = c ? -c / 1e3 : 0,
            r = n - e,
            o = u / (2 * Math.sqrt(s * l)),
            a = Math.sqrt(s / l) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            const e = Be(a, o);
            (f = (i) => {
              const s = Math.exp(-o * a * i);
              return (
                n -
                s *
                  (((t + o * a * r) / e) * Math.sin(e * i) +
                    r * Math.cos(e * i))
              );
            }),
              (v = (n) => {
                const i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            f = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            f = (i) => {
              const s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return (
                n -
                (s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          h(),
          {
            next: (t) => {
              const e = f(t);
              if (p) a.done = t >= d;
              else {
                const o = 1e3 * v(t),
                  s = Math.abs(o) <= r,
                  u = Math.abs(n - e) <= i;
                a.done = s && u;
              }
              return (a.value = a.done ? n : e), a;
            },
            flipTarget: () => {
              (c = -c), ([e, n] = [n, e]), h();
            },
          }
        );
      }
      ze.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const Ye = (t) => 0,
        He = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        We = (t, e, n) => -n * t + n * e + t,
        Xe = (t, e) => (n) =>
          Boolean(
            (rt(n) && nt.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        Ze = (t, e, n) => (r) => {
          if (!rt(r)) return r;
          const [i, o, a, s] = r.match(tt);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        _e = J(0, 255),
        qe = Object.assign(Object.assign({}, dt), {
          transform: (t) => Math.round(_e(t)),
        }),
        Ge = {
          test: Xe("rgb", "red"),
          parse: Ze("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            qe.transform(t) +
            ", " +
            qe.transform(e) +
            ", " +
            qe.transform(n) +
            ", " +
            Q(pt.transform(r)) +
            ")",
        };
      const $e = {
          test: Xe("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: Ge.transform,
        },
        Ke = {
          test: Xe("hsl", "hue"),
          parse: Ze("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            at.transform(Q(e)) +
            ", " +
            at.transform(Q(n)) +
            ", " +
            Q(pt.transform(r)) +
            ")",
        };
      function Je(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function Qe({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = Je(s, r, t + 1 / 3)),
            (o = Je(s, r, t)),
            (a = Je(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const tn = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        en = [$e, Ge, Ke],
        nn = (t) => en.find((e) => e.test(t)),
        rn = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        on = (t, e) => {
          let n = nn(t),
            r = nn(e);
          rn(t), rn(e);
          let i = n.parse(t),
            o = r.parse(e);
          n === Ke && ((i = Qe(i)), (n = Ge)),
            r === Ke && ((o = Qe(o)), (r = Ge));
          const a = Object.assign({}, i);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = tn(i[e], o[e], t));
            return (a.alpha = We(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        an = {
          test: (t) => Ge.test(t) || $e.test(t) || Ke.test(t),
          parse: (t) =>
            Ge.test(t) ? Ge.parse(t) : Ke.test(t) ? Ke.parse(t) : $e.parse(t),
          transform: (t) =>
            rt(t)
              ? t
              : t.hasOwnProperty("red")
              ? Ge.transform(t)
              : Ke.transform(t),
        },
        sn = "${c}",
        un = "${n}";
      function ln(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(et);
        r &&
          ((n = r.length), (t = t.replace(et, sn)), e.push(...r.map(an.parse)));
        const i = t.match(tt);
        return (
          i && ((t = t.replace(tt, un)), e.push(...i.map(dt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function cn(t) {
        return ln(t).values;
      }
      function dn(t) {
        const { values: e, numColors: n, tokenised: r } = ln(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? sn : un,
              r < n ? an.transform(t[r]) : Q(t[r])
            );
          return e;
        };
      }
      const pn = (t) => ("number" === typeof t ? 0 : t);
      const fn = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              rt(t) &&
              (null !==
                (n =
                  null === (e = t.match(tt)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(et)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: cn,
          createTransformer: dn,
          getAnimatableNone: function (t) {
            const e = cn(t);
            return dn(t)(e.map(pn));
          },
        },
        vn = (t) => "number" === typeof t;
      function hn(t, e) {
        return vn(t) ? (n) => We(t, e, n) : an.test(t) ? on(t, e) : xn(t, e);
      }
      const mn = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => hn(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        yn = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = hn(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function gn(t) {
        const e = fn.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const xn = (t, e) => {
          const n = fn.createTransformer(e),
            r = gn(t),
            i = gn(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? ge(mn(r.parsed, i.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        bn = (t, e) => (n) => We(t, e, n);
      function wn(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? bn
              : "string" === typeof o
              ? an.test(o)
                ? on
                : xn
              : Array.isArray(o)
              ? mn
              : "object" === typeof o
              ? yn
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = ge(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function En(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = wn(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(He(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1;
                    }
                    const s = He(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(je(t[0], t[o - 1], e)) : s;
      }
      const Pn = (t) => (e) => 1 - t(1 - e),
        Sn = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Tn = (t) => (e) => e * e * ((t + 1) * e - t),
        An = (t) => t,
        Cn = ((Vn = 2), (t) => Math.pow(t, Vn));
      var Vn;
      const Rn = Pn(Cn),
        Mn = Sn(Cn),
        On = (t) => 1 - Math.sin(Math.acos(t)),
        Ln = Pn(On),
        kn = Sn(Ln),
        jn = Tn(1.525),
        Dn = Pn(jn),
        Fn = Sn(jn),
        Bn = ((t) => {
          const e = Tn(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        In = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        Un = Pn(In);
      function Nn(t, e) {
        return t.map(() => e || Mn).splice(0, t.length - 1);
      }
      function zn({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function u() {
          return En(s, a, { ease: Array.isArray(n) ? n : Nn(a, n) });
        }
        let l = u();
        return {
          next: (t) => ((o.value = l(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      const Yn = {
        keyframes: zn,
        spring: ze,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const u = e + s,
            l = void 0 === o ? u : o(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var Hn = n(76432);
      function Wn(t, e, n = 0) {
        return t - e - n;
      }
      const Xn = (t) => {
        const e = ({ delta: e }) => t(e);
        return {
          start: () => Hn.ZP.update(e, !0),
          stop: () => Hn.qY.update(e),
        };
      };
      function Zn(t) {
        var e,
          n,
          {
            from: r,
            autoplay: i = !0,
            driver: o = Xn,
            elapsed: a = 0,
            repeat: s = 0,
            repeatType: u = "loop",
            repeatDelay: l = 0,
            onPlay: c,
            onStop: d,
            onComplete: p,
            onRepeat: f,
            onUpdate: v,
          } = t,
          h = ke(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let m,
          y,
          g,
          { to: x } = h,
          b = 0,
          w = h.duration,
          E = !1,
          P = !0;
        const S = (function (t) {
          if (Array.isArray(t.to)) return zn;
          if (Yn[t.type]) return Yn[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? zn
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? ze
            : zn;
        })(h);
        (null === (n = (e = S).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, r, x)) &&
          ((g = En([0, 100], [r, x], { clamp: !1 })), (r = 0), (x = 100));
        const T = S(Object.assign(Object.assign({}, h), { from: r, to: x }));
        function A() {
          b++,
            "reverse" === u
              ? ((P = b % 2 === 0),
                (a = (function (t, e, n = 0, r = !0) {
                  return r ? Wn(e + -t, e, n) : e - (t - e) + n;
                })(a, w, l, P)))
              : ((a = Wn(a, w, l)), "mirror" === u && T.flipTarget()),
            (E = !1),
            f && f();
        }
        function C(t) {
          if ((P || (t = -t), (a += t), !E)) {
            const t = T.next(Math.max(0, a));
            (y = t.value), g && (y = g(y)), (E = P ? t.done : a <= 0);
          }
          null === v || void 0 === v || v(y),
            E &&
              (0 === b && ((null !== w && void 0 !== w) || (w = a)),
              b < s
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(a, w, l, P) && A()
                : (m.stop(), p && p()));
        }
        return (
          i && (null === c || void 0 === c || c(), (m = o(C)), m.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), m.stop();
            },
          }
        );
      }
      function _n(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var qn = function (t) {
        return 1e3 * t;
      };
      const Gn = (t, e) => 1 - 3 * e + 3 * t,
        $n = (t, e) => 3 * e - 6 * t,
        Kn = (t) => 3 * t,
        Jn = (t, e, n) => ((Gn(e, n) * t + $n(e, n)) * t + Kn(e)) * t,
        Qn = (t, e, n) => 3 * Gn(e, n) * t * t + 2 * $n(e, n) * t + Kn(e);
      const tr = 0.1;
      function er(t, e, n, r) {
        if (t === e && n === r) return An;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = Jn(a * tr, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += tr;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * tr,
            s = Qn(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = Qn(e, n, r);
                  if (0 === i) return e;
                  e -= (Jn(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = Jn(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + tr, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : Jn(o(t), e, r));
      }
      var nr = {
          linear: An,
          easeIn: Cn,
          easeInOut: Mn,
          easeOut: Rn,
          circIn: On,
          circInOut: kn,
          circOut: Ln,
          backIn: jn,
          backInOut: Fn,
          backOut: Dn,
          anticipate: Bn,
          bounceIn: Un,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - In(1 - 2 * t)) : 0.5 * In(2 * t - 1) + 0.5,
          bounceOut: In,
        },
        rr = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = (0, r.CR)(t, 4);
            return er(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), nr[t])
            : t;
        },
        ir = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !fn.test(e) || e.startsWith("url(")))
          );
        },
        or = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        ar = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        sr = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        ur = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        lr = {
          x: or,
          y: or,
          z: or,
          rotate: or,
          rotateX: or,
          rotateY: or,
          rotateZ: or,
          scaleX: ar,
          scaleY: ar,
          scale: ar,
          opacity: sr,
          backgroundColor: sr,
          color: sr,
          default: ar,
        };
      const cr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function dr(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(tt) || [];
        if (!r) return t;
        const i = n.replace(r, "");
        let o = cr.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      const pr = /([a-z-]*)\(.*?\)/g,
        fr = Object.assign(Object.assign({}, fn), {
          getAnimatableNone: (t) => {
            const e = t.match(pr);
            return e ? e.map(dr).join(" ") : t;
          },
        });
      var vr = (0, r.pi)((0, r.pi)({}, ht), {
          color: an,
          backgroundColor: an,
          outlineColor: an,
          fill: an,
          stroke: an,
          borderColor: an,
          borderTopColor: an,
          borderRightColor: an,
          borderBottomColor: an,
          borderLeftColor: an,
          filter: fr,
          WebkitFilter: fr,
        }),
        hr = function (t) {
          return vr[t];
        };
      function mr(t, e) {
        var n,
          r = hr(t);
        return (
          r !== fr && (r = fn),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var yr = !1;
      function gr(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          u = (0, r.pi)({}, s);
        return (
          n && (u.offset = n),
          s.duration && (u.duration = qn(s.duration)),
          s.repeatDelay && (u.repeatDelay = qn(s.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(rr)
              : rr(e)),
          "tween" === s.type && (u.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (u.repeatType = "reverse")
              : a
              ? (u.repeatType = "loop")
              : o && (u.repeatType = "mirror"),
            (u.repeat = a || i || o || s.repeat)),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        );
      }
      function xr(t, e, n) {
        var i;
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Nt(e) ? ur : lr[t] || lr.default),
                  (0, r.pi)({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), gr(t))
        );
      }
      function br(t, e, n, i, o) {
        var a,
          s = Pr(i, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = ir(t, n);
        "none" === u && l && "string" === typeof n
          ? (u = mr(t, n))
          : wr(u) && "string" === typeof n
          ? (u = Er(n))
          : !Array.isArray(n) && wr(n) && "string" === typeof u && (n = Er(u));
        var c = ir(t, u);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(u, '" to "')
            .concat(n, '". ')
            .concat(
              u,
              " is not an animatable value - to enable this animation set "
            )
            .concat(u, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          c && l && !1 !== s.type
            ? function () {
                var i = {
                  from: u,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === s.type || "decay" === s.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: i = 0.8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: p,
                      onStop: f,
                    }) {
                      let v;
                      function h(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function m(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function y(t) {
                        null === v || void 0 === v || v.stop(),
                          (v = Zn(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: p,
                              onStop: f,
                            })
                          ));
                      }
                      function g(t) {
                        y(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        );
                      }
                      if (h(t)) g({ from: t, velocity: e, to: m(t) });
                      else {
                        let r = i * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = m(r),
                          s = a === n ? -1 : 1;
                        let c, d;
                        const p = (t) => {
                          (c = d),
                            (d = t),
                            (e = _n(t - c, (0, Hn.$B)().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              g({ from: t, to: a, velocity: e });
                        };
                        y({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: o,
                          power: i,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: h(r) ? p : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === v || void 0 === v ? void 0 : v.stop(),
                      };
                    })((0, r.pi)((0, r.pi)({}, i), s))
                  : Zn(
                      (0, r.pi)((0, r.pi)({}, xr(s, i, t)), {
                        onUpdate: function (t) {
                          var e;
                          i.onUpdate(t),
                            null === (e = s.onUpdate) ||
                              void 0 === e ||
                              e.call(s, t);
                        },
                        onComplete: function () {
                          var t;
                          i.onComplete(),
                            null === (t = s.onComplete) ||
                              void 0 === t ||
                              t.call(s);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = zt(n);
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === s || void 0 === s ? void 0 : s.onUpdate) ||
                    void 0 === t ||
                    t.call(s, i),
                  null ===
                    (r = null === s || void 0 === s ? void 0 : s.onComplete) ||
                    void 0 === r ||
                    r.call(s),
                  { stop: function () {} }
                );
              }
        );
      }
      function wr(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function Er(t) {
        return "number" === typeof t ? 0 : mr("", t);
      }
      function Pr(t, e) {
        return t[e] || t.default || t;
      }
      function Sr(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          yr && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              s = br(t, e, n, r, i),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Pr(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (o = window.setTimeout(l, qn(u))) : l(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var Tr = function (t) {
        return /^0[^.\s]+$/.test(t);
      };
      function Ar(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Cr(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var Vr = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                Ar(this.subscriptions, t),
                function () {
                  return Cr(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Rr = (function () {
          function t(t) {
            var e,
              n = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new Vr()),
              (this.velocityUpdateSubscribers = new Vr()),
              (this.renderSubscribers = new Vr()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = (0, Hn.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  Hn.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Hn.ZP.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? _n(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function Mr(t) {
        return new Rr(t);
      }
      var Or = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Lr = [
          dt,
          st,
          at,
          ot,
          lt,
          ut,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        kr = function (t) {
          return Lr.find(Or(t));
        },
        jr = (0, r.ev)((0, r.ev)([], (0, r.CR)(Lr), !1), [an, fn], !1),
        Dr = function (t) {
          return jr.find(Or(t));
        };
      function Fr(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Mr(n));
      }
      function Br(t, e) {
        var n = S(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o;
        i.transition;
        var s = (0, r._T)(i, ["transitionEnd", "transition"]);
        for (var u in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          Fr(t, u, zt(s[u]));
        }
      }
      function Ir(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function Ur(t, e, n) {
        var i;
        void 0 === n && (n = {});
        var o = S(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (s = n.transitionOverride);
        var u = o
            ? function () {
                return Nr(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0);
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  l = s.staggerDirection;
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0);
                  void 0 === i && (i = 0);
                  void 0 === o && (o = 1);
                  var s = [],
                    u = (t.variantChildren.size - 1) * i,
                    l =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(zr)
                      .forEach(function (t, i) {
                        s.push(
                          Ur(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + l(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e);
                          })
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, a + i, u, l, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = s.when;
        if (c) {
          var d = (0, r.CR)("beforeChildren" === c ? [u, l] : [l, u], 2),
            p = d[0],
            f = d[1];
          return p().then(f);
        }
        return Promise.all([u(), l(n.delay)]);
      }
      function Nr(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(e),
          d = c.transition,
          p = void 0 === d ? t.getDefaultTransition() : d,
          f = c.transitionEnd,
          v = (0, r._T)(c, ["transition", "transitionEnd"]);
        u && (p = u);
        var h = [],
          m =
            l &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[l]);
        for (var y in v) {
          var g = t.getValue(y),
            x = v[y];
          if (!(!g || void 0 === x || (m && Yr(m, y)))) {
            var b = (0, r.pi)({ delay: s }, p);
            t.shouldReduceMotion &&
              W(y) &&
              (b = (0, r.pi)((0, r.pi)({}, b), { type: !1, delay: 0 }));
            var w = Sr(y, g, x, b);
            h.push(w);
          }
        }
        return Promise.all(h).then(function () {
          f && Br(t, f);
        });
      }
      function zr(t, e) {
        return t.sortNodePosition(e);
      }
      function Yr(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var Hr = [
          Zt.Animate,
          Zt.InView,
          Zt.Focus,
          Zt.Hover,
          Zt.Tap,
          Zt.Drag,
          Zt.Exit,
        ],
        Wr = (0, r.ev)([], (0, r.CR)(Hr), !1).reverse(),
        Xr = Hr.length;
      function Zr(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return Ur(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = Ur(t, e, n);
                else {
                  var o = "function" === typeof e ? S(t, e, n.custom) : e;
                  r = Nr(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function _r(t) {
        var e = Zr(t),
          n = (function () {
            var t;
            return (
              ((t = {})[Zt.Animate] = qr(!0)),
              (t[Zt.InView] = qr()),
              (t[Zt.Hover] = qr()),
              (t[Zt.Tap] = qr()),
              (t[Zt.Drag] = qr()),
              (t[Zt.Focus] = qr()),
              (t[Zt.Exit] = qr()),
              t
            );
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = S(t, n);
            if (i) {
              i.transition;
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"]);
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o);
            }
            return e;
          };
        function s(s, u) {
          for (
            var l,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              p = [],
              f = new Set(),
              v = {},
              h = 1 / 0,
              m = function (e) {
                var i = Wr[e],
                  m = n[i],
                  y = null !== (l = c[i]) && void 0 !== l ? l : d[i],
                  g = E(y),
                  x = i === u ? m.isActive : null;
                !1 === x && (h = e);
                var b = y === d[i] && y !== c[i] && g;
                if (
                  (b && o && t.manuallyAnimateOnMount && (b = !1),
                  (m.protectedKeys = (0, r.pi)({}, v)),
                  (!m.isActive && null === x) ||
                    (!y && !m.prevProp) ||
                    Ut(y) ||
                    "boolean" === typeof y)
                )
                  return "continue";
                var P = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (w(e)) return !Le(e, t);
                    return !1;
                  })(m.prevProp, y),
                  S = P || (i === u && m.isActive && !b && g) || (e > h && g),
                  T = Array.isArray(y) ? y : [y],
                  A = T.reduce(a, {});
                !1 === x && (A = {});
                var C = m.prevResolvedValues,
                  V = void 0 === C ? {} : C,
                  R = (0, r.pi)((0, r.pi)({}, V), A),
                  M = function (t) {
                    (S = !0), f.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var O in R) {
                  var L = A[O],
                    k = V[O];
                  v.hasOwnProperty(O) ||
                    (L !== k
                      ? Nt(L) && Nt(k)
                        ? !Le(L, k) || P
                          ? M(O)
                          : (m.protectedKeys[O] = !0)
                        : void 0 !== L
                        ? M(O)
                        : f.add(O)
                      : void 0 !== L && f.has(O)
                      ? M(O)
                      : (m.protectedKeys[O] = !0));
                }
                (m.prevProp = y),
                  (m.prevResolvedValues = A),
                  m.isActive && (v = (0, r.pi)((0, r.pi)({}, v), A)),
                  o && t.blockInitialAnimation && (S = !1),
                  S &&
                    !b &&
                    p.push.apply(
                      p,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          T.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, s),
                            };
                          })
                        ),
                        !1
                      )
                    );
              },
              y = 0;
            y < Xr;
            y++
          )
            m(y);
          if (((i = (0, r.pi)({}, v)), f.size)) {
            var g = {};
            f.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (g[e] = n);
            }),
              p.push({ animation: g });
          }
          var x = Boolean(p.length);
          return (
            o && !1 === c.initial && !t.manuallyAnimateOnMount && (x = !1),
            (o = !1),
            x ? e(p) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t];
          },
          animateChanges: s,
          setActive: function (e, r, i) {
            var o;
            if (n[e].isActive === r) return Promise.resolve();
            null === (o = t.variantChildren) ||
              void 0 === o ||
              o.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var a = s(i, e);
            for (var u in n) n[u].protectedKeys = {};
            return a;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function qr(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Gr = {
        animation: Ve(function (t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = _r(e)),
            Ut(n) &&
              (0, i.useEffect)(
                function () {
                  return n.subscribe(e);
                },
                [n]
              );
        }),
        exit: Ve(function (t) {
          var e = t.custom,
            n = t.visualElement,
            o = (0, r.CR)(Oe(), 2),
            a = o[0],
            s = o[1],
            u = (0, i.useContext)(f.O);
          (0, i.useEffect)(
            function () {
              var t, r;
              n.isPresent = a;
              var i =
                null === (t = n.animationState) || void 0 === t
                  ? void 0
                  : t.setActive(Zt.Exit, !a, {
                      custom:
                        null !==
                          (r =
                            null === u || void 0 === u ? void 0 : u.custom) &&
                        void 0 !== r
                          ? r
                          : e,
                    });
              !a && (null === i || void 0 === i || i.then(s));
            },
            [a]
          );
        }),
      };
      const $r = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        Kr = (t) => $r(t) && t.hasOwnProperty("z"),
        Jr = (t, e) => Math.abs(t - e);
      function Qr(t, e) {
        if (vn(t) && vn(e)) return Jr(t, e);
        if ($r(t) && $r(e)) {
          const n = Jr(t.x, e.x),
            r = Jr(t.y, e.y),
            i = Kr(t) && Kr(e) ? Jr(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      var ti = (function () {
        function t(t, e, n) {
          var i = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (i.lastMoveEvent && i.lastMoveEventInfo) {
                var t = ri(i.lastMoveEventInfo, i.history),
                  e = null !== i.startEvent,
                  n = Qr(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var o = t.point,
                    a = (0, Hn.$B)().timestamp;
                  i.history.push((0, r.pi)((0, r.pi)({}, o), { timestamp: a }));
                  var s = i.handlers,
                    u = s.onStart,
                    l = s.onMove;
                  e ||
                    (u && u(i.lastMoveEvent, t),
                    (i.startEvent = i.lastMoveEvent)),
                    l && l(i.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (i.lastMoveEvent = t),
                (i.lastMoveEventInfo = ei(e, i.transformPagePoint)),
                Kt(t) && 0 === t.buttons
                  ? i.handlePointerUp(t, e)
                  : Hn.ZP.update(i.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              i.end();
              var n = i.handlers,
                r = n.onEnd,
                o = n.onSessionEnd,
                a = ri(ei(e, i.transformPagePoint), i.history);
              i.startEvent && r && r(t, a), o && o(t, a);
            }),
            !(Jt(t) && t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = o);
            var a = ei(ne(t), this.transformPagePoint),
              s = a.point,
              u = (0, Hn.$B)().timestamp;
            this.history = [(0, r.pi)((0, r.pi)({}, s), { timestamp: u })];
            var l = e.onSessionStart;
            l && l(t, ri(a, this.history)),
              (this.removeListeners = ge(
                se(window, "pointermove", this.handlePointerMove),
                se(window, "pointerup", this.handlePointerUp),
                se(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              Hn.qY.update(this.updatePoint);
          }),
          t
        );
      })();
      function ei(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ni(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ri(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: ni(n, oi(e)),
          offset: ni(n, ii(e)),
          velocity: ai(e, 0.1),
        };
      }
      function ii(t) {
        return t[0];
      }
      function oi(t) {
        return t[t.length - 1];
      }
      function ai(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = oi(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > qn(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function si(t) {
        return t.max - t.min;
      }
      function ui(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), Qr(t, e) < n
        );
      }
      function li(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = We(e.min, e.max, t.origin)),
          (t.scale = si(n) / si(e)),
          (ui(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = We(n.min, n.max, t.origin) - t.originPoint),
          (ui(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function ci(t, e, n, r) {
        li(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          li(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function di(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + si(e));
      }
      function pi(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + si(e));
      }
      function fi(t, e, n) {
        pi(t.x, e.x, n.x), pi(t.y, e.y, n.y);
      }
      function vi(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function hi(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: i, max: o }
        );
      }
      var mi = 0.35;
      function yi(t, e, n) {
        return { min: gi(t, e), max: gi(t, n) };
      }
      function gi(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function xi(t) {
        return [t("x"), t("y")];
      }
      function bi(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function wi(t) {
        return void 0 === t || 1 === t;
      }
      function Ei(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !wi(e) || !wi(n) || !wi(r);
      }
      function Pi(t) {
        return (
          Ei(t) ||
          Si(t.x) ||
          Si(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function Si(t) {
        return t && "0%" !== t;
      }
      function Ti(t, e, n) {
        return n + e * (t - n);
      }
      function Ai(t, e, n, r, i) {
        return void 0 !== i && (t = Ti(t, i, r)), Ti(t, n, r) + e;
      }
      function Ci(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = Ai(t.min, e, n, r, i)),
          (t.max = Ai(t.max, e, n, r, i));
      }
      function Vi(t, e) {
        var n = e.x,
          r = e.y;
        Ci(t.x, n.translate, n.scale, n.originPoint),
          Ci(t.y, r.translate, r.scale, r.originPoint);
      }
      function Ri(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function Mi(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = We(t.min, t.max, u);
        Ci(t, e[o], e[a], l, e.scale);
      }
      var Oi = ["x", "scaleX", "originX"],
        Li = ["y", "scaleY", "originY"];
      function ki(t, e) {
        Mi(t.x, e, Oi), Mi(t.y, e, Li);
      }
      function ji(t, e) {
        return bi(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var Di = new WeakMap(),
        Fi = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new ti(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(ne(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = pe(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        xi(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (at.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) i = si(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[t] = i;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(Zt.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u = e.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(Zt.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && Bi(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? We(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? We(i, t, n.max) : Math.min(t, i)),
                      t
                    );
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && b(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: vi(t.x, r, o), y: vi(t.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = mi),
                    !1 === t ? (t = 0) : !0 === t && (t = mi),
                    { x: yi(t, "left", "right"), y: yi(t, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  xi(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !b(e)) return !1;
              var r = e.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (t, e, n) {
                  var r = ji(t, n),
                    i = e.scroll;
                  return i && (Ri(r.x, i.x), Ri(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: hi(t.x, e.x), y: hi(t.y, e.y) };
                })(i.layout.actual, o);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = bi(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = xi(function (n) {
                  var l;
                  if (Bi(n, i, e.currentDirection)) {
                    var d =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    u && (d = { min: 0, max: 0 });
                    var p = a ? 200 : 1e6,
                      f = a ? 40 : 1e7,
                      v = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: p,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, v);
                  }
                });
              return Promise.all(d).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Sr(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              xi(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              xi(function (n) {
                if (Bi(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - We(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (b(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                xi(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = si(t),
                        i = si(e);
                      return (
                        i > r
                          ? (n = He(e.min, e.max - r, t.min))
                          : r > i && (n = He(t.min, t.max - i, e.min)),
                        je(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  xi(function (t) {
                    if (Bi(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(We(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              Di.set(this.visualElement, this);
              var n = se(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  b(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = Gt(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (xi(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? mi : c,
                p = t.dragMomentum,
                f = void 0 === p || p;
              return (0, r.pi)((0, r.pi)({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: f,
              });
            }),
            t
          );
        })();
      function Bi(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Ii = {
          pan: Ve(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(d).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                },
              };
            (0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              ue(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new ti(t, c, { transformPagePoint: l });
                  }
              ),
              (0, me.z)(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Ve(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, R.h)(function () {
                return new Fi(n);
              });
            (0, i.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        Ui = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var Ni = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            i = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            p = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var f = t.parent,
              v = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              y = t.visualState,
              g = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var x,
              b,
              w = !1,
              P = y.latestValues,
              S = y.renderState,
              C = (function () {
                var t = Ui.map(function () {
                    return new Vr();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      Ui.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + Ui[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + Ui[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        return t.notify.apply(
                          t,
                          (0, r.ev)([], (0, r.CR)(e), !1)
                        );
                      });
                  }),
                  n
                );
              })(),
              V = new Map(),
              R = new Map(),
              M = {},
              O = (0, r.pi)({}, P);
            function L() {
              x && w && (k(), u(x, S, v.style, z.projection));
            }
            function k() {
              i(z, S, P, e, v);
            }
            function j() {
              C.notifyUpdate(P);
            }
            function D(t, e) {
              var n = e.onChange(function (e) {
                  (P[t] = e), v.onUpdate && Hn.ZP.update(j, !1, !0);
                }),
                r = e.onRenderRequest(z.scheduleRender);
              R.set(t, function () {
                n(), r();
              });
            }
            var F = p(v);
            for (var B in F) {
              var I = F[B];
              void 0 !== P[B] && q(I) && I.set(P[B], !1);
            }
            var U = T(v),
              N = A(v),
              z = (0, r.pi)(
                (0, r.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: f ? f.depth + 1 : 0,
                    parent: f,
                    children: new Set(),
                    presenceId: h,
                    shouldReduceMotion: g,
                    variantChildren: N ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === f || void 0 === f ? void 0 : f.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(x);
                    },
                    mount: function (t) {
                      (w = !0),
                        (x = z.current = t),
                        z.projection && z.projection.mount(t),
                        N &&
                          f &&
                          !U &&
                          (b =
                            null === f || void 0 === f
                              ? void 0
                              : f.addVariantChild(z)),
                        V.forEach(function (t, e) {
                          return D(e, t);
                        }),
                        null === f || void 0 === f || f.children.add(z),
                        z.setProps(v);
                    },
                    unmount: function () {
                      var t;
                      null === (t = z.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        Hn.qY.update(j),
                        Hn.qY.render(L),
                        R.forEach(function (t) {
                          return t();
                        }),
                        null === b || void 0 === b || b(),
                        null === f || void 0 === f || f.children.delete(z),
                        C.clearAllListeners(),
                        (x = void 0),
                        (w = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = z.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(z.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return N
                        ? z
                        : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return v.layoutId;
                    },
                    getInstance: function () {
                      return x;
                    },
                    getStaticValue: function (t) {
                      return P[t];
                    },
                    setStaticValue: function (t, e) {
                      return (P[t] = e);
                    },
                    getLatestValues: function () {
                      return P;
                    },
                    setVisibility: function (t) {
                      z.isVisible !== t &&
                        ((z.isVisible = t), z.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(z, t, v, e);
                    },
                    measureViewportBox: function () {
                      return s(x, v);
                    },
                    addValue: function (t, e) {
                      z.hasValue(t) && z.removeValue(t),
                        V.set(t, e),
                        (P[t] = e.get()),
                        D(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      V.delete(t),
                        null === (e = R.get(t)) || void 0 === e || e(),
                        R.delete(t),
                        delete P[t],
                        c(t, S);
                    },
                    hasValue: function (t) {
                      return V.has(t);
                    },
                    getValue: function (t, e) {
                      var n = V.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = Mr(e)), z.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return V.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = P[t]) && void 0 !== n
                        ? n
                        : l(x, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      O[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(v, t);
                        if (void 0 !== e && !q(e)) return e;
                      }
                      return O[t];
                    },
                  },
                  C
                ),
                {
                  build: function () {
                    return k(), S;
                  },
                  scheduleRender: function () {
                    Hn.ZP.render(L, !1, !0);
                  },
                  syncRender: L,
                  setProps: function (t) {
                    (t.transformTemplate || v.transformTemplate) &&
                      z.scheduleRender(),
                      (v = t),
                      C.updatePropListeners(t),
                      (M = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (q(o)) t.addValue(i, o);
                          else if (q(a)) t.addValue(i, Mr(o));
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              !s.hasAnimated && s.set(o);
                            } else
                              t.addValue(
                                i,
                                Mr(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(z, p(v), M));
                  },
                  getProps: function () {
                    return v;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = v.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return v.transition;
                  },
                  getTransformPagePoint: function () {
                    return v.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext();
                    if (!U) {
                      var e =
                        (null === f || void 0 === f
                          ? void 0
                          : f.getVariantContext()) || {};
                      return void 0 !== v.initial && (e.initial = v.initial), e;
                    }
                    for (var n = {}, r = 0; r < Yi; r++) {
                      var i = zi[r],
                        o = v[i];
                      (E(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return z;
          };
        },
        zi = (0, r.ev)(["initial"], (0, r.CR)(Hr), !1),
        Yi = zi.length;
      function Hi(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Wi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Xi(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var e = Wi.exec(t);
              if (!e) return [,];
              var n = (0, r.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = i[0],
          a = i[1];
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o);
          return s ? s.trim() : Hi(a) ? Xi(a, e, n + 1) : a;
        }
      }
      var Zi,
        _i = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        qi = function (t) {
          return _i.has(t);
        },
        Gi = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        $i = function (t) {
          return t === dt || t === st;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Zi || (Zi = {}));
      var Ki = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Ji = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return Ki(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? Ki(a[1], t) : 0;
          };
        },
        Qi = new Set(["x", "y", "z"]),
        to = z.filter(function (t) {
          return !Qi.has(t);
        });
      var eo = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Ji(4, 13),
          y: Ji(5, 14),
        },
        no = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(e).filter(qi),
            a = [],
            s = !1,
            u = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var l,
                  c = n[r],
                  d = kr(c),
                  p = e[r];
                if (Nt(p)) {
                  var f = p.length,
                    v = null === p[0] ? 1 : 0;
                  (c = p[v]), (d = kr(c));
                  for (var h = v; h < f; h++)
                    l ? kr(p[h]) : (l = kr(p[h])) === d || ($i(d) && $i(l));
                } else l = kr(p);
                if (d !== l)
                  if ($i(d) && $i(l)) {
                    var m = o.get();
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof p
                        ? (e[r] = parseFloat(p))
                        : Array.isArray(p) &&
                          l === st &&
                          (e[r] = p.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === p)
                      ? 0 === c
                        ? o.set(l.transform(c))
                        : (e[r] = d.transform(p))
                      : (s ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              to.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (s = !0)),
                        u.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Gi(o, p));
              }
            }),
            u.length)
          ) {
            var l = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              c = (function (t, e, n) {
                var r = e.measureViewportBox(),
                  i = e.getInstance(),
                  o = getComputedStyle(i),
                  a = o.display,
                  s = {};
                "none" === a &&
                  e.setStaticValue("display", t.display || "block"),
                  n.forEach(function (t) {
                    s[t] = eo[t](r, o);
                  }),
                  e.syncRender();
                var u = e.measureViewportBox();
                return (
                  n.forEach(function (n) {
                    var r = e.getValue(n);
                    Gi(r, s[n]), (t[n] = eo[n](u, o));
                  }),
                  t
                );
              })(e, t, u);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1];
                  t.getValue(i).set(o);
                }),
              t.syncRender(),
              null !== l && window.scrollTo({ top: l }),
              { target: c, transitionEnd: i }
            );
          }
          return { target: e, transitionEnd: i };
        };
      function ro(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(qi);
        })(e)
          ? no(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var io = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance();
          if (!(a instanceof Element)) return { target: o, transitionEnd: n };
          for (var s in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Hi(e)) {
              var n = Xi(e, a);
              n && t.set(n);
            }
          }),
          o)) {
            var u = o[s];
            if (Hi(u)) {
              var l = Xi(u, a);
              l &&
                ((o[s] = l),
                n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, i);
        return ro(t, (e = o.target), n, (i = o.transitionEnd));
      };
      var oo = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (W(e)) {
              var n = hr(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return ($(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return ji(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues;
            void 0 === i && (i = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r._T)(e, ["transition", "transitionEnd"]),
              l = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = Ir(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(u, a || {}, t);
            if ((o && (s && (s = o(s)), u && (u = o(u)), l && (l = o(l))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      p = null;
                    Array.isArray(d) && (p = d[0]),
                      null === p &&
                        (p =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== i
                            ? i
                            : e[c]),
                      void 0 !== p &&
                        null !== p &&
                        ("string" === typeof p &&
                        (/^\-?\d*\.?\d+$/.test(p) || Tr(p))
                          ? (p = parseFloat(p))
                          : !Dr(p) && fn.test(d) && (p = mr(c, d)),
                        t.addValue(c, Mr(p)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = p),
                        t.setBaseTarget(c, p));
                  }
              })(t, u, l);
              var c = io(t, u, l, s);
              (s = c.transitionEnd), (u = c.target);
            }
            return (0, r.pi)({ transition: a, transitionEnd: s }, u);
          },
          scrapeMotionValuesFromProps: Bt,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              mt(e, n, r, i.transformTemplate);
          },
          render: jt,
        },
        ao = Ni(oo),
        so = Ni(
          (0, r.pi)((0, r.pi)({}, oo), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return W(e)
                ? (null === (n = hr(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Dt.has(e) ? e : kt(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: It,
            build: function (t, e, n, r, i) {
              Vt(e, n, r, i.transformTemplate);
            },
            render: Ft,
          })
        ),
        uo = function (t, e) {
          return I(t)
            ? so(e, { enableHardwareAcceleration: !1 })
            : ao(e, { enableHardwareAcceleration: !0 });
        };
      function lo(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var co = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!st.test(t)) return t;
              t = parseFloat(t);
            }
            var n = lo(t, e.target.x),
              r = lo(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        po = "_$css",
        fo = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(Wi, function (t) {
                return a.push(t), po;
              }));
            var s = fn.parse(t);
            if (s.length > 5) return i;
            var u = fn.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var p = We(c, d, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= p),
              "number" === typeof s[3 + l] && (s[3 + l] /= p);
            var f = u(s);
            if (o) {
              var v = 0;
              f = f.replace(po, function () {
                var t = a[v];
                return v++, t;
              });
            }
            return f;
          },
        },
        vo = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                i = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                u = i.projection;
              (t = ho),
                Object.assign(U, t),
                u &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(u),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(u),
                  u.root.didUpdate(),
                  u.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  u.setOptions(
                    (0, r.pi)((0, r.pi)({}, u.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                (M.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        Hn.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(i.Component);
      var ho = {
          borderRadius: (0, r.pi)((0, r.pi)({}, co), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: co,
          borderTopRightRadius: co,
          borderBottomLeftRadius: co,
          borderBottomRightRadius: co,
          boxShadow: fo,
        },
        mo = {
          measureLayout: function (t) {
            var e = (0, r.CR)(Oe(), 2),
              n = e[0],
              o = e[1],
              a = (0, i.useContext)(L.p);
            return i.createElement(
              vo,
              (0, r.pi)({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, i.useContext)(k),
                isPresent: n,
                safeToRemove: o,
              })
            );
          },
        };
      var yo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        go = yo.length,
        xo = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        bo = function (t) {
          return "number" === typeof t || st.test(t);
        };
      function wo(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var Eo = So(0, 0.5, Ln),
        Po = So(0.5, 0.95, An);
      function So(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(He(t, e, r));
        };
      }
      function To(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Ao(t, e) {
        To(t.x, e.x), To(t.y, e.y);
      }
      function Co(t, e, n, r, i) {
        return (
          (t = Ti((t -= e), 1 / n, r)), void 0 !== i && (t = Ti(t, 1 / i, r)), t
        );
      }
      function Vo(t, e, n, i, o) {
        var a = (0, r.CR)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            at.test(e) &&
              ((e = parseFloat(e)), (e = We(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = We(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = Co(t.min, e, n, s, i)),
              (t.max = Co(t.max, e, n, s, i));
          }
        })(t, e[s], e[u], e[l], e.scale, i, o);
      }
      var Ro = ["x", "scaleX", "originX"],
        Mo = ["y", "scaleY", "originY"];
      function Oo(t, e, n, r) {
        Vo(
          t.x,
          e,
          Ro,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Vo(
            t.y,
            e,
            Mo,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function Lo(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ko(t) {
        return Lo(t.x) && Lo(t.y);
      }
      function jo(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var Do = (function () {
        function t() {
          this.members = [];
        }
        return (
          (t.prototype.add = function (t) {
            Ar(this.members, t), t.scheduleRender();
          }),
          (t.prototype.remove = function (t) {
            if (
              (Cr(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              var e = this.members[this.members.length - 1];
              e && this.promote(e);
            }
          }),
          (t.prototype.relegate = function (t) {
            var e,
              n = this.members.findIndex(function (e) {
                return t === e;
              });
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var i = this.members[r];
              if (!1 !== i.isPresent) {
                e = i;
                break;
              }
            }
            return !!e && (this.promote(e), !0);
          }),
          (t.prototype.promote = function (t, e) {
            var n,
              r = this.lead;
            t !== r &&
              ((this.prevLead = r),
              (this.lead = t),
              t.show(),
              r &&
                (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                e && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                  ((t.snapshot = r.snapshot),
                  (t.snapshot.latestValues =
                    r.animationValues || r.latestValues),
                  (t.snapshot.isShared = !0)),
                (null === (n = t.root) || void 0 === n
                  ? void 0
                  : n.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()));
          }),
          (t.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (t) {
              var e, n, r, i, o;
              null === (n = (e = t.options).onExitComplete) ||
                void 0 === n ||
                n.call(e),
                null ===
                  (o =
                    null === (r = t.resumingFrom) || void 0 === r
                      ? void 0
                      : (i = r.options).onExitComplete) ||
                  void 0 === o ||
                  o.call(i);
            });
          }),
          (t.prototype.scheduleRender = function () {
            this.members.forEach(function (t) {
              t.instance && t.scheduleRender(!1);
            });
          }),
          (t.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          t
        );
      })();
      function Fo(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (((o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(l, ", ").concat(c, ")"))
          ? "none"
          : o;
      }
      var Bo = function (t, e) {
          return t.depth - e.depth;
        },
        Io = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              Ar(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              Cr(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(Bo),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function Uo(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          i = t.measureScroll,
          o = t.checkIsScrollRoot,
          a = t.resetTransform;
        return (function () {
          function t(t, e, i) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === i && (i = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(Zo), o.nodes.forEach(_o);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i
                ? (0, r.ev)((0, r.ev)([], (0, r.CR)(i.path), !1), [i], !1)
                : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Io());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new Vr()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var i = this.eventHandlers.get(t);
              null === i ||
                void 0 === i ||
                i.notify.apply(i, (0, r.ev)([], (0, r.CR)(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var i,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (i = this.parent) ||
                    void 0 === i ||
                    i.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      M.hasAnimatedSinceResize &&
                        ((M.hasAnimatedSinceResize = !1), o.nodes.forEach(Xo));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        p = t.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var f =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : Qo,
                        v = l.getProps(),
                        h = v.onLayoutAnimationStart,
                        m = v.onLayoutAnimationComplete,
                        y = !o.targetLayout || !jo(o.targetLayout, p) || d,
                        g = !c && d;
                      if (
                        (null === (i = o.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        g ||
                        (c && (y || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(u, g);
                        var x = (0, r.pi)((0, r.pi)({}, Pr(f, "layout")), {
                          onPlay: h,
                          onComplete: m,
                        });
                        l.shouldReduceMotion && ((x.delay = 0), (x.type = !1)),
                          o.startAnimation(x);
                      } else c || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a));
                      o.targetLayout = p;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                Hn.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(qo));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(Ho)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(ta),
                  this.potentialNodes.clear()),
                this.nodes.forEach(Wo),
                this.nodes.forEach(No),
                this.nodes.forEach(zo),
                this.clearAllSnapshots(),
                Hn.iW.update(),
                Hn.iW.preRender(),
                Hn.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(Yo), this.sharedNodes.forEach(Go);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              Hn.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              Hn.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                na(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                na(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = o(this.instance)),
                (this.scroll = i(this.instance)));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (a) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !ko(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  o = i !== this.prevTransformTemplateValue;
                e &&
                  (n || Pi(this.latestValues) || o) &&
                  (a(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (Ri(e.x, n.x), Ri(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ao(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options,
                  a = r.isScrollRoot;
                if (r !== this.root && i && o.layoutScroll) {
                  if (a) {
                    Ao(e, t);
                    var s = this.root.scroll;
                    s && (Ri(e.x, -s.x), Ri(e.y, -s.y));
                  }
                  Ri(e.x, i.x), Ri(e.y, i.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ao(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  ki(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  Pi(i.latestValues) && ki(n, i.latestValues);
              }
              return Pi(this.latestValues) && ki(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ao(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && Pi(i.latestValues)) {
                  Ei(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Ao(o, i.measure()),
                    Oo(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return Pi(this.latestValues) && Oo(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    fi(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    Ao(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      di(e.x, n.x, r.x),
                      di(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : Ao(this.target, this.layout.actual),
                      Vi(this.target, this.targetDelta))
                    : Ao(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      fi(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      Ao(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Pi(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                Ao(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              ki(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              Vi(t, u)),
                            r && Pi(s.latestValues) && ki(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  ci(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = Fo(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                i = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                s = (0, r.pi)({}, this.latestValues),
                u = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === o || void 0 === o ? void 0 : o.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                p = Boolean(
                  c &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(Jo)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    r,
                    o,
                    f,
                    v,
                    h = e / 1e3;
                  $o(u.x, t.x, h),
                    $o(u.y, t.y, h),
                    i.setTargetDelta(u),
                    i.relativeTarget &&
                      i.relativeTargetOrigin &&
                      i.layout &&
                      (null === (n = i.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (fi(l, i.layout.actual, i.relativeParent.layout.actual),
                      (r = i.relativeTarget),
                      (o = i.relativeTargetOrigin),
                      (f = l),
                      (v = h),
                      Ko(r.x, o.x, f.x, v),
                      Ko(r.y, o.y, f.y, v)),
                    c &&
                      ((i.animationValues = s),
                      (function (t, e, n, r, i, o) {
                        var a, s, u, l;
                        i
                          ? ((t.opacity = We(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              Eo(r)
                            )),
                            (t.opacityExit = We(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              Po(r)
                            )))
                          : o &&
                            (t.opacity = We(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ));
                        for (var c = 0; c < go; c++) {
                          var d = "border".concat(yo[c], "Radius"),
                            p = wo(e, d),
                            f = wo(n, d);
                          (void 0 === p && void 0 === f) ||
                            (p || (p = 0),
                            f || (f = 0),
                            0 === p || 0 === f || bo(p) === bo(f)
                              ? ((t[d] = Math.max(We(xo(p), xo(f), r), 0)),
                                (at.test(f) || at.test(p)) && (t[d] += "%"))
                              : (t[d] = f));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = We(e.rotate || 0, n.rotate || 0, r));
                      })(s, a, i.latestValues, h, p, d)),
                    i.root.scheduleUpdateProjection(),
                    i.scheduleRender(),
                    (i.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (Hn.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Hn.ZP.update(function () {
                  (M.hasAnimatedSinceResize = !0),
                    (i.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = q(t) ? t : Mr(t);
                      return (
                        Sr("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      (0, r.pi)((0, r.pi)({}, t), {
                        onUpdate: function (e) {
                          var n;
                          i.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            i.completeAnimation();
                        },
                      })
                    )),
                    i.resumingFrom &&
                      (i.resumingFrom.currentAnimation = i.currentAnimation),
                    (i.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (Ao(e, n),
                ki(e, i),
                ci(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Do()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < N.length; r++) {
                  var i = "rotate" + N[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = Yt(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = Yt(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !Pi(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Fo(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var p = this.projectionDelta,
                f = p.x,
                v = p.y;
              for (var h in ((s.transformOrigin = ""
                .concat(100 * f.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              U))
                if (void 0 !== d[h]) {
                  var m = U[h],
                    y = m.correct,
                    g = m.applyTo,
                    x = y(d[h], l);
                  if (g) for (var b = g.length, w = 0; w < b; w++) s[g[w]] = x;
                  else s[h] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? Yt(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(Ho),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function No(t) {
        t.updateLayout();
      }
      function zo(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? xi(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = si(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              xi(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = si(s[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          ci(l, s, o.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? ci(c, t.applyTransform(u, !0), o.measured)
            : ci(c, s, o.layout);
          var d = !ko(l),
            p = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var f = t.relativeParent,
              v = f.snapshot,
              h = f.layout;
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              fi(m, o.layout, v.layout);
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              fi(y, s, h.actual), jo(m, y) || (p = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function Yo(t) {
        t.clearSnapshot();
      }
      function Ho(t) {
        t.clearMeasurements();
      }
      function Wo(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function Xo(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function Zo(t) {
        t.resolveTargetDelta();
      }
      function _o(t) {
        t.calcProjection();
      }
      function qo(t) {
        t.resetRotation();
      }
      function Go(t) {
        t.removeLeadSnapshot();
      }
      function $o(t, e, n) {
        (t.translate = We(e.translate, 0, n)),
          (t.scale = We(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function Ko(t, e, n, r) {
        (t.min = We(e.min, n.min, r)), (t.max = We(e.max, n.max, r));
      }
      function Jo(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var Qo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ta(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function ea(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function na(t) {
        ea(t.x), ea(t.y);
      }
      var ra = Uo({
          attachResizeListener: function (t, e) {
            return Gt(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        ia = { current: void 0 },
        oa = Uo({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!ia.current) {
              var t = new ra(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ia.current = t);
            }
            return ia.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return Boolean("fixed" === window.getComputedStyle(t).position);
          },
        }),
        aa = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, Gr), Re), Ii), mo),
        sa = F(function (t, e) {
          return (function (t, e, n, i, o) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              u = I(t) ? _t : qt;
            return (0,
            r.pi)((0, r.pi)({}, u), { preloadedFeatures: n, useRender: Ot(s), createVisualElement: i, projectionNodeConstructor: o, Component: t });
          })(t, e, aa, uo, oa);
        });
    },
    33791: function (t, e, n) {
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var r = "undefined" !== typeof document;
    },
    28723: function (t, e, n) {
      n.d(e, {
        O: function () {
          return i;
        },
      });
      var r = n(34406),
        i = ("undefined" === typeof r || r.env, "production");
    },
    3105: function (t, e, n) {
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(2784);
      function i(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    6481: function (t, e, n) {
      n.d(e, {
        M: function () {
          return a;
        },
      });
      var r = n(3105),
        i = 0,
        o = function () {
          return i++;
        },
        a = function () {
          return (0, r.h)(o);
        };
    },
    23617: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(2784),
        i = n(33791).j ? r.useLayoutEffect : r.useEffect;
    },
    96073: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(2784);
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    76432: function (t, e, n) {
      n.d(e, {
        qY: function () {
          return f;
        },
        ZP: function () {
          return x;
        },
        iW: function () {
          return v;
        },
        $B: function () {
          return g;
        },
      });
      const r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r);
      let a = !0,
        s = !1,
        u = !1;
      const l = { delta: 0, timestamp: 0 },
        c = ["read", "update", "preRender", "render", "postRender"],
        d = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const u = s && i,
                      l = u ? e : n;
                    return (
                      o && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (i) o = !0;
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(u), a.has(r) && (s.schedule(r), t());
                        }
                      (i = !1), o && ((o = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        p = c.reduce((t, e) => {
          const n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (s || y(), n.schedule(t, e, r))), t
          );
        }, {}),
        f = c.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        v = c.reduce((t, e) => ((t[e] = () => d[e].process(l)), t), {}),
        h = (t) => d[t].process(l),
        m = (t) => {
          (s = !1),
            (l.delta = a ? r : Math.max(Math.min(t - l.timestamp, 40), 1)),
            (l.timestamp = t),
            (u = !0),
            c.forEach(h),
            (u = !1),
            s && ((a = !1), o(m));
        },
        y = () => {
          (s = !0), (a = !0), u || o(m);
        },
        g = () => l;
      var x = p;
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/3599.3fce31b5b06bdf7f.js.map
