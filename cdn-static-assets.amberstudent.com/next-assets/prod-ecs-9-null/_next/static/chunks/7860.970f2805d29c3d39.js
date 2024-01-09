"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7860, 297, 7706, 16],
  {
    44082: function (e) {
      e.exports = function e(n, t) {
        if (n === t) return !0;
        if (n && t && "object" == typeof n && "object" == typeof t) {
          if (n.constructor !== t.constructor) return !1;
          var r, a, o;
          if (Array.isArray(n)) {
            if ((r = n.length) != t.length) return !1;
            for (a = r; 0 !== a--; ) if (!e(n[a], t[a])) return !1;
            return !0;
          }
          if (n.constructor === RegExp)
            return n.source === t.source && n.flags === t.flags;
          if (n.valueOf !== Object.prototype.valueOf)
            return n.valueOf() === t.valueOf();
          if (n.toString !== Object.prototype.toString)
            return n.toString() === t.toString();
          if ((r = (o = Object.keys(n)).length) !== Object.keys(t).length)
            return !1;
          for (a = r; 0 !== a--; )
            if (!Object.prototype.hasOwnProperty.call(t, o[a])) return !1;
          for (a = r; 0 !== a--; ) {
            var i = o[a];
            if (("_owner" !== i || !n.$$typeof) && !e(n[i], t[i])) return !1;
          }
          return !0;
        }
        return n !== n && t !== t;
      };
    },
    40297: function (e, n, t) {
      t.d(n, {
        W1: function () {
          return p;
        },
        ah: function () {
          return v;
        },
        kS: function () {
          return f;
        },
        py: function () {
          return h;
        },
        x4: function () {
          return g;
        },
      });
      var r = t(98788),
        a = t(50853),
        o = t(8388),
        i = t.n(o),
        l = (t(24291), t(71406)),
        c = t(139),
        s = t.n(c),
        u = t(49705),
        d = t.n(u),
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (e.params = e.params || {}),
            (e.url_path = e.url_path || "api/v0/users/logout"),
            (e.url = d()(i().urls.base_service_url, e.url_path)),
            l.Z.post(e, n);
        },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (e.params = e.params || {}),
            (e.url = d()(i().urls.base_service_url, e.url_path)),
            l.Z.post(e, n);
        },
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (e.url_path =
            e.url_path || "/api/v0/auth/users/inventories_shortlists"),
            (e.url = d()(i().urls.base_service_url, e.url_path)),
            l.Z.post(e, n);
        },
        v = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (n.url_path =
            n.url_path || "/api/v0/auth/users/inventories_shortlists"),
            (n.url = d()(i().urls.base_service_url, n.url_path, e)),
            l.Z.delete(n, t);
        },
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0,
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (e.params = e.params || {}),
            (e.url_path =
              e.url_path || "api/v0/auth/users/".concat(n, "/referral_link")),
            (e.url = d()(i().urls.base_service_url, e.url_path)),
            l.Z.get(e, t);
        };
      !(function () {
        var e = (0, r.Z)(function (e, n) {
          var t, r;
          return (0, a.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (t = {
                    url_path: "/api/v0/auth/users/inventories_shortlists/",
                    data: { inventories_shortlist: { inventory_id: e } },
                  }),
                  (r = d()(i().urls.base_service_url, t.url_path)),
                  [
                    4,
                    s()
                      .post(r)
                      .set("Cookie", "user_auth_token=".concat(n))
                      .send(t.data),
                  ]
                );
              case 1:
                return [2, a.sent()];
            }
          });
        });
      })();
    },
    88206: function (e, n, t) {
      t.d(n, {
        d: function () {
          return i;
        },
        f: function () {
          return l;
        },
      });
      var r = t(44082),
        a = t.n(r),
        o = t(99333),
        i = function (e) {
          var n = [
            "move_in_month",
            "range_available_price",
            "meta_max_lease_duration",
            "meta_types",
            "meta_unit_types",
            "tags",
            "available",
          ];
          return Object.keys(e)
            .filter(function (n) {
              return (
                "" !== e[n] &&
                void 0 !== e[n] &&
                "," !== e[n] &&
                !a()(e.region_center, ["", "", o.HJ]) &&
                !["p", "region_canonical_name", "region"].includes(n)
              );
            })
            .sort(function (e, t) {
              var r = n.indexOf(e),
                a = n.indexOf(t);
              return -1 === r ? 1 : -1 === a ? -1 : r - a;
            })
            .reduce(function (n, t) {
              return (n[t] = e[t]), n;
            }, {});
        },
        l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e.charAt(0).toUpperCase() + e.slice(1);
        };
    },
    17093: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ContinueUserActivitySection: function () {
            return m;
          },
        });
      var r = t(98788),
        a = t(50853),
        o = t(52322),
        i = t(2784),
        l = t(24291),
        c = t(62595),
        s = t(84834),
        u = t(99194),
        d = t(99951),
        f = t(26793),
        g = t(47842),
        p = (0, c.createStyles)(function (e) {
          return {
            parentContainer: (0, g.Z)(
              {
                border: "1px solid ".concat(e.colors.neutral[2]),
                width: "200px",
                borderRadius: "100px",
                padding: "8px 8px",
                cursor: "pointer",
              },
              e.fn.largerThan("md"),
              { width: "380px" }
            ),
            journeyContainer: { alignItems: "center" },
            subText: (0, g.Z)(
              {
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "100px",
                color: e.colors.neutral[6],
              },
              e.fn.largerThan("md"),
              { fontSize: "12px", lineHeight: "15px" }
            ),
            subTextWithSpacing: (0, g.Z)(
              {
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "120px",
                color: e.colors.neutral[6],
              },
              e.fn.largerThan("md"),
              { fontSize: "12px", lineHeight: "15px", maxWidth: "240px" }
            ),
            allAccomodationsText: (0, g.Z)(
              {
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "12px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: e.colors.neutral[6],
              },
              e.fn.largerThan("md"),
              { fontSize: "12px", lineHeight: "15px" }
            ),
            info: (0, g.Z)({ marginLeft: "8px" }, e.fn.largerThan("md"), {
              marginLeft: "16px",
            }),
            cityName: (0, g.Z)(
              {
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "15px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "150px",
                color: e.colors.neutral[9],
              },
              e.fn.largerThan("md"),
              {
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                maxWidth: "280px",
              }
            ),
            boldSubText: (0, g.Z)(
              {
                fontSize: "10px",
                fontWeight: 600,
                lineHeight: "12px",
                color: e.colors.neutral[9],
              },
              e.fn.largerThan("md"),
              { fontSize: "12px", lineHeight: "15px", maxWidth: "100px" }
            ),
            pipeSubText: (0, g.Z)(
              { fontSize: "12px", lineHeight: "15px", margin: "-2px 4px" },
              e.fn.largerThan("md"),
              { margin: "0px 4px" }
            ),
            plusPipeSubText: {
              fontSize: "12px",
              lineHeight: "15px",
              margin: "0px 4px",
            },
            iconContainer: (0, g.Z)(
              {
                backgroundColor: e.colors.primary[0],
                padding: 6,
                borderRadius: "99px",
                height: "30px",
                width: "30px",
                justifyContent: "center",
                alignItems: "center",
              },
              e.fn.largerThan("md"),
              { height: "45px", width: "45px" }
            ),
            iconClass: (0, g.Z)(
              { fontSize: "14px", color: e.colors.primary[4] },
              e.fn.largerThan("md"),
              { fontSize: "16px" }
            ),
            parentSubText: (0, g.Z)(
              { display: "flex", alignItems: "center", maxWidth: "160px" },
              e.fn.largerThan("md"),
              { minWidth: "300px" }
            ),
          };
        }),
        v = t(88206),
        h = function (e) {
          var n = e.filters,
            t = e.handleActivityClick,
            r = p().classes,
            a = (0, c.isMobileView)(),
            i =
              Object.keys(
                (0, v.d)(null === n || void 0 === n ? void 0 : n.filters)
              ) || [],
            l = function (e, t) {
              var r;
              return !e ||
                ("meta_min_lease_duration" === t &&
                  (null === n ||
                  void 0 === n ||
                  null === (r = n.filters) ||
                  void 0 === r
                    ? void 0
                    : r.meta_max_lease_duration))
                ? ""
                : "|";
            },
            s = a ? 1 : 2,
            u = function (e, t) {
              if ("meta_min_lease_duration" === e) {
                var r;
                if (
                  null === n ||
                  void 0 === n ||
                  null === (r = n.filters) ||
                  void 0 === r
                    ? void 0
                    : r.meta_max_lease_duration
                )
                  return "";
                var a,
                  o = "".concat(
                    null === n ||
                      void 0 === n ||
                      null === (a = n.filters) ||
                      void 0 === a
                      ? void 0
                      : a.meta_min_lease_duration,
                    " and above"
                  );
                return (0, v.f)(o);
              }
              if ("available" === e) return e;
              if ("meta_max_lease_duration" === e) {
                var i,
                  l,
                  c = ""
                    .concat(
                      null === n ||
                        void 0 === n ||
                        null === (i = n.filters) ||
                        void 0 === i
                        ? void 0
                        : i.meta_min_lease_duration,
                      " - "
                    )
                    .concat(
                      null === n ||
                        void 0 === n ||
                        null === (l = n.filters) ||
                        void 0 === l
                        ? void 0
                        : l[e],
                      " "
                    );
                return (0, v.f)(c);
              }
              var s = "".concat(t).replace(/_/g, " ");
              return (0, v.f)(s);
            },
            d = 1 === i.length ? r.subTextWithSpacing : r.subText,
            f =
              i.includes("meta_max_lease_duration") &&
              i.includes("meta_min_lease_duration")
                ? i.length - 1
                : i.length;
          return (0, o.jsx)(c.Box, {
            className: r.parentContainer,
            onClick: t(
              null === n || void 0 === n ? void 0 : n.url,
              null === n || void 0 === n ? void 0 : n.name
            ),
            children: (0, o.jsxs)(c.Flex, {
              direction: "row",
              className: r.journeyContainer,
              children: [
                (0, o.jsx)(c.Flex, {
                  className: r.iconContainer,
                  children: (0, o.jsx)("i", {
                    className: "icon-magnifying-glass ".concat(r.iconClass),
                  }),
                }),
                (0, o.jsxs)(c.Flex, {
                  className: r.info,
                  children: [
                    (0, o.jsx)(c.Text, {
                      className: r.cityName,
                      children: null === n || void 0 === n ? void 0 : n.name,
                    }),
                    (0, o.jsxs)(c.Flex, {
                      direction: "row",
                      className: r.parentSubText,
                      children: [
                        i.length
                          ? i.slice(0, s).map(function (e, t) {
                              var a;
                              return (
                                !!(null === n ||
                                void 0 === n ||
                                null === (a = n.filters) ||
                                void 0 === a
                                  ? void 0
                                  : a[e]) &&
                                (0, o.jsxs)(
                                  c.Flex,
                                  {
                                    direction: "row",
                                    children: [
                                      t > 0 &&
                                        (0, o.jsx)(c.Text, {
                                          className: r.pipeSubText,
                                          children: l(t, e),
                                        }),
                                      (0, o.jsx)(c.Text, {
                                        className: d,
                                        children: u(
                                          e,
                                          null === n || void 0 === n
                                            ? void 0
                                            : n.filters[e]
                                        ),
                                      }),
                                    ],
                                  },
                                  e
                                )
                              );
                            })
                          : (0, o.jsx)(c.Text, {
                              className: r.allAccomodationsText,
                              children: "All accommodations",
                            }),
                        f > s &&
                          (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(c.Text, {
                                className: r.plusPipeSubText,
                                children: "|",
                              }),
                              (0, o.jsx)(c.Text, {
                                className: r.boldSubText,
                                children: "+".concat(i.length - s),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _ = (0, c.createStyles)(function (e) {
          return {
            container: (0, g.Z)(
              { padding: "0px 80px" },
              e.fn.largerThan("sm"),
              { padding: "20px 0px 0px 0px" }
            ),
            heading: { fontSize: "24px", fontWeight: 700, lineHeight: "30px" },
            spacing: { marginTop: "24px" },
            wrapper: { marginBottom: "-32px" },
          };
        }),
        m = function () {
          var e,
            n = _().classes,
            t = (0, i.useState)([]),
            g = t[0],
            p = t[1],
            v = (0, s.Z)("amber", 1, "USER-JOURNEY");
          (0, i.useEffect)(
            function () {
              var e;
              function n() {
                return (n = (0, r.Z)(function () {
                  var e;
                  return (0, a.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          v.getData().then(function (e) {
                            return e.flat();
                          }),
                        ];
                      case 1:
                        return (e = n.sent()), p(e.reverse()), [2];
                    }
                  });
                })).apply(this, arguments);
              }
              (null === v || void 0 === v || null === (e = v.db) || void 0 === e
                ? void 0
                : e.name) &&
                (function () {
                  n.apply(this, arguments);
                })();
            },
            [
              null === v || void 0 === v || null === (e = v.db) || void 0 === e
                ? void 0
                : e.name,
            ]
          );
          var m = (0, i.useRef)(null),
            x = function (e, n) {
              return function () {
                (window.location.href = e),
                  (0, l.pr)({
                    action: "continue_search_clicked",
                    category: "home_page",
                    label: n,
                  });
              };
            };
          return (0, o.jsx)(d.s8, {
            animateKey: g.length,
            children:
              g.length > 0 &&
              (0, o.jsxs)(f.h, {
                background: "#fff",
                title: "Continue your search journey",
                dataTestId: "continue-user-activity",
                children: [
                  (0, o.jsx)(c.Flex, { className: n.spacing }),
                  (0, o.jsx)(u.C, {
                    ref: m,
                    withPadding: !1,
                    idSuffix: "continue-user-journey",
                    withItemPadding: !0,
                    className: n.container,
                    children: g.map(function (e) {
                      return (0,
                      o.jsx)(h, { filters: e, handleActivityClick: x });
                    }),
                  }),
                ],
              }),
          });
        };
    },
    99194: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(70865),
        a = t(96670),
        o = t(52322),
        i = t(2784),
        l = (0, i.forwardRef)(function (e, n) {
          var t = e.children,
            l = e.idSuffix,
            c = void 0 === l ? "" : l,
            s = e.onScroll,
            u = e.withPadding,
            d = void 0 === u || u,
            f = e.navBarTravelDirectionProp,
            g = e.withItemPadding,
            p = void 0 !== g && g,
            v = e.onBookingSteps,
            h = void 0 !== v && v;
          return (
            (0, i.useEffect)(function () {
              var e = function () {
                  o.setAttribute("data-overflowing", n(i, o));
                },
                n = function (e, n) {
                  var t =
                      null === n || void 0 === n
                        ? void 0
                        : n.getBoundingClientRect(),
                    r = Math.ceil(t.right),
                    a = Math.ceil(t.left),
                    o =
                      null === e || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    i = h ? Math.ceil(o.right) - 1 : Math.ceil(o.right),
                    l = Math.ceil(o.left);
                  return a > l && r < i
                    ? "both"
                    : l < a
                    ? "left"
                    : i > r
                    ? "right"
                    : "none";
                },
                t = {
                  navBarTravelling: !1,
                  navBarTravelDirection: "",
                  navBarTravelDistance: f || 560,
                };
              document.documentElement.classList.remove("no-js"),
                document.documentElement.classList.add("js");
              var r = document.getElementById("leftAdvancer" + c),
                a = document.getElementById("rightAdvancer" + c),
                o = document.getElementById("scrollbox" + c),
                i = document.getElementById("scrollboxContents" + c);
              e();
              var l = !1;
              o.addEventListener("scroll", function () {
                l ||
                  window.requestAnimationFrame(function () {
                    e(), (l = !1);
                  }),
                  (l = !0);
              }),
                r.addEventListener("click", function () {
                  if (!0 !== t.navBarTravelling) {
                    if ("left" === n(i, o) || "both" === n(i, o)) {
                      var r = o.scrollLeft;
                      r < 2 * t.navBarTravelDistance
                        ? (i.style.transform = "translateX(" + r + "px)")
                        : (i.style.transform =
                            "translateX(" + t.navBarTravelDistance + "px)"),
                        i.classList.remove("scroll-box-contents-no-transition"),
                        (t.navBarTravelDirection = "left"),
                        (t.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                a.addEventListener("click", function () {
                  if (!0 !== t.navBarTravelling) {
                    if ("right" === n(i, o) || "both" === n(i, o)) {
                      var r,
                        a,
                        l =
                          null ===
                            (r =
                              null === i || void 0 === i
                                ? void 0
                                : i.getBoundingClientRect()) || void 0 === r
                            ? void 0
                            : r.right,
                        c =
                          null ===
                            (a =
                              null === o || void 0 === o
                                ? void 0
                                : o.getBoundingClientRect()) || void 0 === a
                            ? void 0
                            : a.right,
                        s = Math.floor(l - c);
                      s < 2 * t.navBarTravelDistance
                        ? (i.style.transform = "translateX(-" + s + "px)")
                        : (i.style.transform =
                            "translateX(-" + t.navBarTravelDistance + "px)"),
                        i.classList.remove("scroll-box-contents-no-transition"),
                        (t.navBarTravelDirection = "right"),
                        (t.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                i.addEventListener(
                  "transitionend",
                  function () {
                    var e = window.getComputedStyle(i, null),
                      n =
                        e.getPropertyValue("-webkit-transform") ||
                        e.getPropertyValue("transform"),
                      r = Math.abs(parseInt(n.split(",")[4]) || 0);
                    (i.style.transform = "none"),
                      i.classList.add("scroll-box-contents-no-transition"),
                      "left" === t.navBarTravelDirection
                        ? (o.scrollLeft = o.scrollLeft - r)
                        : (o.scrollLeft = o.scrollLeft + r),
                      (t.navBarTravelling = !1);
                  },
                  !1
                );
            }, []),
            (0, o.jsxs)("div", {
              className: "scroll-box-wrapper",
              children: [
                (0, o.jsx)("nav", {
                  id: "scrollbox" + c,
                  className: "scroll-box",
                  ref: n,
                  onScroll: s,
                  children: (0, o.jsx)(
                    "div",
                    (0, a.Z)(
                      (0, r.Z)(
                        {
                          id: "scrollboxContents" + c,
                          className: "scroll-box-contents",
                          role: "list",
                        },
                        d && { style: { paddingLeft: "20px" } }
                      ),
                      {
                        children: t.map(function (e, n) {
                          var r = [];
                          return (
                            0 === n && r.push("scroll-box-item-first"),
                            n + 1 == t.length && r.push("scroll-box-item-last"),
                            (0, o.jsx)(
                              "div",
                              {
                                className: "scroll-box-item "
                                  .concat(p ? "with-padding-right" : "", " ")
                                  .concat(r.join(" ")),
                                role: "listitem",
                                children: e,
                              },
                              "scroll-box-item-".concat(n)
                            )
                          );
                        }),
                      }
                    )
                  ),
                }),
                (0, o.jsx)("button", {
                  "aria-label": "left-advancer",
                  id: "leftAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Left",
                  type: "button",
                  children: (0, o.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, o.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, o.jsx)("path", {
                        d: "M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z",
                      }),
                    }),
                  }),
                }),
                (0, o.jsx)("button", {
                  "aria-label": "right-advancer",
                  id: "rightAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Right",
                  type: "button",
                  children: (0, o.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, o.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, o.jsx)("path", {
                        d: "M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z",
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        });
      (l.displayName = "Horizontal Scroll"), (n.C = l);
    },
    90225: function (e, n, t) {
      t.d(n, {
        Jb: function () {
          return r;
        },
        p9: function () {
          return a;
        },
        up: function () {
          return o;
        },
      });
      var r = {
          ACTION: { LOGIN: "login", SIGN_UP: "sign_up", ANY: "login/sign_up" },
          LABEL: {
            APPLE: "apple",
            GOOGLE_AUTH: "google_auth",
            GOOGLE_ONE_TAP: "google_one_tap",
            FACEBOOK: "facebook_auth",
            EMAIL_OTP: "email_OTP_Login",
          },
          VALUE: { SUCCESS: "success", FAILURE: "failure" },
          CATEGORY: t(99333).E0,
        },
        a = "loggedIn",
        o = "loggedOut";
    },
    61772: function (e, n, t) {
      t.d(n, {
        JY: function () {
          return c;
        },
        hq: function () {
          return s;
        },
      });
      var r = t(52322),
        a = t(2784),
        o = t(63955),
        i = t(62595),
        l = (0, a.createContext)({}),
        c = function (e) {
          var n = e.children,
            t = e.auth,
            c = e.nextRoute,
            s = (0, a.useState)(0),
            u = s[0],
            d = s[1],
            f = (0, a.useState)(t || { status: !1, data: {} }),
            g = f[0],
            p = f[1],
            v = (0, a.useState)(!1),
            h = v[0],
            _ = v[1],
            m = (0, o.cI)({
              defaultValues: { email: "", otp: "" },
              reValidateMode: "onSubmit",
            }),
            x = (0, i.isMobileView)();
          return (0, i.withAmberTheme)(
            (0, r.jsx)(l.Provider, {
              value: {
                auth: g,
                setAuth: p,
                step: u,
                setStep: d,
                form: m,
                isMobile: x,
                nextRoute: c,
                googleOneTapLoaded: h,
                setGoogleOneTapLoaded: _,
              },
              children: n,
            }),
            "secondary"
          );
        },
        s = function () {
          return (0, a.useContext)(l);
        };
    },
    79710: function (e, n, t) {
      t.d(n, {
        gV: function () {
          return v;
        },
        P: function () {
          return l;
        },
        qw: function () {
          return p;
        },
        C9: function () {
          return u;
        },
        an: function () {
          return m;
        },
        he: function () {
          return d.h;
        },
        tm: function () {
          return _;
        },
        om: function () {
          return x;
        },
        OP: function () {
          return f.O;
        },
        gl: function () {
          return c;
        },
        oz: function () {
          return h;
        },
      });
      var r = t(4454),
        a = t(36906),
        o = t(35590),
        i = t(40297),
        l = function (e) {
          var n = e.user,
            t = e.onSuccess,
            l = e.onFailure,
            c = e.onCompleted,
            s = {
              url_path: "/api/v0/users/generate_email_otp",
              data: { user: n },
            };
          r.Z.emit(a.mp),
            (0, i.x4)(s, {
              success: t,
              failure: function (e) {
                o.r.log(e), l && l(e);
              },
              done: function () {
                r.Z.emit(a.IQ), c && c();
              },
            });
        },
        c = function (e) {
          var n = e.user,
            t = e.onSuccess,
            o = e.onFailure,
            l = e.onCompleted,
            c = {
              url_path: "/api/v0/users/login_email_otp",
              data: { user: n },
            };
          r.Z.emit(a.mp),
            (0, i.x4)(c, {
              success: t,
              failure: function (e) {
                return o && o(e);
              },
              done: function () {
                r.Z.emit(a.IQ), l && l();
              },
            });
        },
        s = t(90225),
        u = function () {
          if (window) {
            var e = window.location.pathname;
            if (e.includes("/places/search")) return s.Jb.CATEGORY.SEARCH;
            if (e.includes("/places")) return s.Jb.CATEGORY.INVENTORY;
            if (e.includes("/profile")) return s.Jb.CATEGORY.PROFILE;
            if ("/" === e) return s.Jb.CATEGORY.HOME;
          }
        },
        d = (t(45475), t(38805)),
        f = t(92628),
        g = t(62595),
        p = function () {
          return (0, g.showNotification)({
            title: "Some error occurred",
            message: "Please try again",
            color: "danger.5",
          });
        },
        v = function () {
          return (0, g.showNotification)({
            title: "OTP Generated",
            message: "Your one time password has been sent to your email",
            color: "secondary.5",
          });
        },
        h = function () {
          return (0, g.showNotification)({
            title: "Wrong OTP",
            message: "You have entered wrong OTP. Please verify and try again",
            color: "danger.5",
          });
        },
        _ = function () {
          return (0, g.showNotification)({
            title: "Welcome to Amber!",
            message: "You are now successfully logged in",
            color: "secondary.5",
          });
        },
        m = function () {
          return (0, g.showNotification)({
            title: "Oops! Login unsuccessful",
            message: "You are unable to log in successfully. Please try again",
            color: "danger.5",
          });
        },
        x = function () {
          return (0, g.showNotification)({
            title: "Logout success",
            message: "You are successfully logged out",
            color: "secondary.5",
          });
        };
    },
    45475: function (e, n, t) {
      t.d(n, {
        U: function () {
          return a;
        },
      });
      var r = t(35590),
        a = function (e) {
          return r.r.log(e);
        };
    },
    38805: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
      });
      var r = t(4454),
        a = t(36906),
        o = t(24291),
        i = t(90225),
        l = function (e, n, t) {
          r.Z.emit(a.tV, e),
            (0, o.pr)({
              action: "success",
              category: "login",
              label: n,
              email_id: e.email,
            }),
            window.location.href.includes("partners")
              ? (0, o.pr)({
                  action: "demand_dashboard_logged_in",
                  category: "demand_dashboard",
                  label: n,
                })
              : window.location.href.includes("connect") &&
                (0, o.pr)({
                  action: "supply_dashboard_login",
                  category: "supply_platform",
                  label: n,
                }),
            "undefined" !== typeof Moengage &&
              null !== Moengage &&
              ((null === e || void 0 === e ? void 0 : e.email) &&
                (Moengage.add_unique_user_id(e.email),
                Moengage.add_email(e.email)),
              (null === e || void 0 === e ? void 0 : e.name) &&
                Moengage.add_user_name(e.name),
              (null === e || void 0 === e ? void 0 : e.phone) &&
                Moengage.add_mobile(e.phone),
              (e.login_type = n),
              Moengage.track_event("user_login", e)),
            (window.location.hash = i.p9),
            t
              ? (window.location.href = "".concat(t))
              : window.location.reload();
        };
    },
    92628: function (e, n, t) {
      t.d(n, {
        O: function () {
          return s;
        },
      });
      var r = t(4454),
        a = t(38805),
        o = t(45475),
        i = t(35590),
        l = t(40297),
        c = t(36906),
        s = function (e) {
          var n = e.token,
            t = e.type,
            s = e.nextRoute,
            u = e.additionalData,
            d = e.authorization_code,
            f = {};
          r.Z.emit(c.mp),
            "facebook" === t &&
              ((f.url_path = "/api/v0/users/connect_facebook"),
              (f.data = { access_token: n })),
            ("google" !== t && "google_one_tap" !== t) ||
              ((f.url_path = "/api/v0/users/connect_google_id"),
              (f.data = { id_token: n })),
            "apple" === t &&
              ((f.url_path = "/api/v0/users/connect_apple"),
              (f.data = { id_token: n, authorization_code: d, user: u })),
            (0, l.x4)(f, {
              success: function (e) {
                return (0, a.h)(e.data, t, s);
              },
              failure: function (e) {
                i.r.log(e), (0, o.U)(e);
              },
              done: function () {
                return r.Z.emit(c.IQ);
              },
            });
        };
    },
    26793: function (e, n, t) {
      t.d(n, {
        h: function () {
          return u;
        },
      });
      var r = t(52322),
        a = t(62595),
        o = t(47842),
        i = (0, a.createStyles)(function (e) {
          return {
            container: (0, o.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, o.Z)(
              {
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "125%",
                letterSpacing: "0.027px",
                color: e.colors.neutral[8],
              },
              e.fn.largerThan("lg"),
              { fontSize: 24, fontWeight: 700 }
            ),
            subtitle: (0, o.Z)(
              {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.035px",
                color: e.colors.neutral[5],
              },
              e.fn.largerThan("lg"),
              { fontSize: 18 }
            ),
          };
        }),
        l = function (e) {
          var n = e.title,
            t = e.subtitle,
            o = i().classes;
          return (0, r.jsxs)(a.Flex, {
            className: o.container,
            children: [
              (0, r.jsx)(a.Title, {
                order: 2,
                className: o.title,
                children: n,
              }),
              t && (0, r.jsx)(a.Text, { className: o.subtitle, children: t }),
            ],
          });
        },
        c = t(70016),
        s = (0, a.createStyles)(function (e, n) {
          var t,
            r = n.background;
          return {
            container: {
              backgroundColor:
                null !== r && void 0 !== r ? r : e.colors.neutral[0],
            },
            innerContainer:
              ((t = { padding: "32px 16px" }),
              (0, o.Z)(t, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, o.Z)(t, e.fn.largerThan(c.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, o.Z)(t, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, o.Z)(t, e.fn.largerThan(1601), { padding: "56px 0" }),
              t),
          };
        }),
        u = function (e) {
          var n = e.title,
            t = e.subtitle,
            o = e.children,
            i = e.background,
            c = e.innerClassName,
            u = s({ background: i }).classes,
            d = n || t;
          return (0, r.jsx)(a.Flex, {
            className: u.container,
            children: (0, r.jsxs)(a.Flex, {
              className: "".concat(u.innerContainer, " ").concat(c),
              children: [d && (0, r.jsx)(l, { title: n, subtitle: t }), o],
            }),
          });
        };
    },
    70016: function (e, n, t) {
      t.d(n, {
        EG: function () {
          return o;
        },
        GH: function () {
          return i;
        },
        Kc: function () {
          return l;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return u;
        },
        tj: function () {
          return c;
        },
        wD: function () {
          return d;
        },
      });
      var r = t(8388),
        a = t.n(r),
        o = "e1affeb13de9140",
        i = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        l = {
          SUPPORT_CLICKED: "support_clicked",
          QUICK_CHAT_CLICKED: "quick_chat_clicked",
          WHATSAPP_CLICKED: "whatsapp_clicked",
          FACEBOOK_CLICKED: "facebook_clicked",
          WECHAT_CLICKED: "weChat_clicked",
          PHONE_CLICKED: "phone_clicked",
          EMAIL_CLICKED: "email_clicked",
          HELP_CENTRE_CLICKED: "help_centre_clicked",
          HOW_IT_WORKS_CLICKED: "how_it_works_clicked",
          SHORTLIST_CLICKED: "shortlist_clicked",
          LOGIN_CLICKED: "login_clicked",
          LOGOUT_CLICKED: "logout_clicked",
          MENU_CLICKED: "menu_clicked",
          PROFILE_CLICKED: "profile_clicked",
          BOOKINGS_CLICKED: "bookings_clicked",
          REFER_CLICKED: "refer_clicked",
          PARTNER_WITH_US_CLICKED: "partner_with_us_clicked",
          LIST_WITH_US_CLICKED: "list_with_us_clicked",
          EXPLORE_CLICKED: "explore_clicked",
          CHAT_CLICKED: "chat_clicked",
          GROUP_BOOKINGS_CLICKED: "group_bookings_clicked",
          LANGUAGE_MODAL_CLICKED: "language_modal_clicked",
          LANGUAGE_SELECTED: "language_selected",
          LANGAUE_SAVED: "language_saved",
        },
        c = "https://m.me/amberstudent",
        s = 1441,
        u = "".concat(
          a().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        d = "".concat(
          a().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
    84834: function (e, n, t) {
      var r = t(2784);
      n.Z = function (e, n, t) {
        var a = (0, r.useState)(null),
          o = a[0],
          i = a[1],
          l = (0, r.useState)(null),
          c = l[0],
          s = l[1];
        (0, r.useEffect)(
          function () {
            var r = indexedDB.open(e, n);
            (r.onerror = function (e) {
              var n;
              s(
                "IndexedDB error: ".concat(
                  null === e ||
                    void 0 === e ||
                    null === (n = e.target) ||
                    void 0 === n
                    ? void 0
                    : n.error
                )
              );
            }),
              (r.onsuccess = function (e) {
                var n,
                  t =
                    null === e ||
                    void 0 === e ||
                    null === (n = e.target) ||
                    void 0 === n
                      ? void 0
                      : n.result;
                i(t);
              }),
              (r.onupgradeneeded = function (e) {
                var n,
                  r =
                    null === e ||
                    void 0 === e ||
                    null === (n = e.target) ||
                    void 0 === n
                      ? void 0
                      : n.result;
                r.objectStoreNames.contains(t) ||
                  r.createObjectStore(t, { keyPath: "id", autoIncrement: !0 });
              });
          },
          [e, n, t]
        );
        var u = (0, r.useCallback)(
            function (e) {
              return new Promise(function (n, r) {
                if (o) {
                  var a = o.transaction([t], "readwrite").objectStore(t).add(e);
                  (a.onsuccess = function () {
                    n("Data added successfully");
                  }),
                    (a.onerror = function (e) {
                      r("Error adding data: ".concat(e.target.error));
                    });
                } else r("Database not available");
              });
            },
            [o, t]
          ),
          d = (0, r.useCallback)(
            function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6;
              return new Promise(function (r, a) {
                if (o) {
                  var i = o.transaction([t], "readwrite").objectStore(t),
                    l = i.getAll();
                  (l.onsuccess = function () {
                    var t = l.result || [];
                    if (t.length >= n) {
                      var o = i.delete(t[0].id);
                      (o.onsuccess = function () {
                        var n = i.add(e);
                        (n.onsuccess = function () {
                          r("Data added successfully");
                        }),
                          (n.onerror = function (e) {
                            a("Error adding data: ".concat(e.target.error));
                          });
                      }),
                        (o.onerror = function (e) {
                          a("Error deleting data: ".concat(e.target.error));
                        });
                    } else {
                      var c = i.add(e);
                      (c.onsuccess = function () {
                        r("Data added successfully");
                      }),
                        (c.onerror = function (e) {
                          a("Error adding data: ".concat(e.target.error));
                        });
                    }
                  }),
                    (l.onerror = function (e) {
                      a("Error getting data: ".concat(e.target.error));
                    });
                } else a("Database not available");
              });
            },
            [o, t]
          ),
          f = (0, r.useCallback)(
            function () {
              return new Promise(function (e, n) {
                if (o) {
                  var r = o
                    .transaction([t], "readonly")
                    .objectStore(t)
                    .getAll();
                  (r.onsuccess = function () {
                    e(r.result);
                  }),
                    (r.onerror = function (e) {
                      n("Error getting data: ".concat(e.target.error));
                    });
                } else n("Database not available");
              });
            },
            [o, t]
          ),
          g = (0, r.useCallback)(
            function (e) {
              return new Promise(function (n, r) {
                if (o) {
                  var a = o
                    .transaction([t], "readwrite")
                    .objectStore(t)
                    .delete(e);
                  (a.onsuccess = function () {
                    n("Data deleted successfully");
                  }),
                    (a.onerror = function (e) {
                      r("Error deleting data: ".concat(e.target.error));
                    });
                } else r("Database not available");
              });
            },
            [o, t]
          ),
          p = (0, r.useCallback)(
            function (e, n) {
              return new Promise(function (r, a) {
                if (o) {
                  var i = o.transaction([t], "readwrite").objectStore(t);
                  i.delete(e).onsuccess = function () {
                    var r = i.getAll();
                    r.onsuccess = function () {
                      var l = r.result || [];
                      l
                        ? (i.clear().onsuccess = function () {
                            var e = o.transaction([t], "readwrite"),
                              r = e.objectStore(t);
                            l.forEach(function (e) {
                              r.add(e);
                            }),
                              r.add(n),
                              (e.oncomplete = function () {
                                console.log("Data added at the end");
                              });
                          })
                        : a("Data with ID ".concat(e, " not found"));
                    };
                  };
                } else a("Database not available");
              });
            },
            [o, t]
          );
        return {
          db: o,
          error: c,
          addData: u,
          getData: f,
          updateData: p,
          deleteData: g,
          addDataWithLimit: d,
        };
      };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/7860.970f2805d29c3d39.js.map
