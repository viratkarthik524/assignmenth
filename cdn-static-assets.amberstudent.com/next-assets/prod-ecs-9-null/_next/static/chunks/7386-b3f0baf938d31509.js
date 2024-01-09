"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7386, 297, 7706],
  {
    40297: function (e, n, t) {
      t.d(n, {
        W1: function () {
          return p;
        },
        ah: function () {
          return m;
        },
        kS: function () {
          return h;
        },
        py: function () {
          return f;
        },
        x4: function () {
          return v;
        },
      });
      var i = t(98788),
        o = t(50853),
        r = t(8388),
        a = t.n(r),
        l = (t(24291), t(71406)),
        s = t(139),
        c = t.n(s),
        d = t(49705),
        u = t.n(d),
        h = function () {
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
            (e.url = u()(a().urls.base_service_url, e.url_path)),
            l.Z.post(e, n);
        },
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (e.params = e.params || {}),
            (e.url = u()(a().urls.base_service_url, e.url_path)),
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
            (e.url = u()(a().urls.base_service_url, e.url_path)),
            l.Z.post(e, n);
        },
        m = function (e) {
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
            (n.url = u()(a().urls.base_service_url, n.url_path, e)),
            l.Z.delete(n, t);
        },
        f = function () {
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
            (e.url = u()(a().urls.base_service_url, e.url_path)),
            l.Z.get(e, t);
        };
      !(function () {
        var e = (0, i.Z)(function (e, n) {
          var t, i;
          return (0, o.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (t = {
                    url_path: "/api/v0/auth/users/inventories_shortlists/",
                    data: { inventories_shortlist: { inventory_id: e } },
                  }),
                  (i = u()(a().urls.base_service_url, t.url_path)),
                  [
                    4,
                    c()
                      .post(i)
                      .set("Cookie", "user_auth_token=".concat(n))
                      .send(t.data),
                  ]
                );
              case 1:
                return [2, o.sent()];
            }
          });
        });
      })();
    },
    38615: function (e, n, t) {
      t.d(n, {
        h: function () {
          return v;
        },
      });
      var i = t(66383),
        o = t(52322),
        r = t(2784),
        a = t(63955),
        l = t(28879),
        s = t.n(l),
        c = t(24291),
        d = t(36886),
        u = t(62595),
        h = t(76101),
        v = function (e) {
          var n,
            t = e.title,
            l = e.url,
            v = e.rootInventoryId,
            p = e.typeofModal,
            m = e.from,
            f = e.onClose,
            g = (0, r.useState)({}),
            x = g[0],
            _ = g[1],
            b = (0, a.cI)(),
            j = b.control,
            w = b.handleSubmit,
            y = b.formState,
            N = b.watch,
            k = b.setValue,
            C = (0, i.Z)(
              N(["room_type", "duration", "inventory_id", "arrival_date"]),
              4
            ),
            S = C[0],
            T = C[1],
            B = C[2],
            R = C[3],
            I = Boolean(S || T || B || R),
            L = {
              Book: {
                filled: {
                  search_page: {
                    copy: "search_filled_copy",
                    open: "search_filled_open",
                  },
                  property_page: {
                    copy: "property_filled_copy",
                    open: "property_filled_open",
                  },
                },
                no_fill: {
                  search_page: {
                    copy: "search_no_fill_copy",
                    open: "search_no_fill_open",
                  },
                  property_page: {
                    copy: "property_no_fill_copy",
                    open: "property_no_fill_open",
                  },
                },
              },
              Payment: {
                filled: {
                  search_page: {
                    copy: "search_page_pre_filled_copy",
                    open: "search_page_pre_filled_open",
                  },
                  property_page: {
                    copy: "property_page_pre_filled_copy",
                    open: "property_page_pre_filled_open",
                  },
                },
                no_fill: {
                  search_page: {
                    copy: "search_page_no_pre_filled_copy",
                    open: "search_page_no_pre_filled_open",
                  },
                  property_page: {
                    copy: "property_page_no_pre_filled_copy",
                    open: "property_page_no_pre_filled_open",
                  },
                },
              },
            };
          (0, r.useEffect)(function () {
            Z(v);
          }, []),
            (0, r.useEffect)(
              function () {
                if (
                  (S
                    ? T
                      ? B || k("arrival_date", "")
                      : (k("inventory_id", ""), k("arrival_date", ""))
                    : (k("duration", ""),
                      k("inventory_id", ""),
                      k("arrival_date", "")),
                  S && B && T)
                ) {
                  var e = A.find(function (e) {
                    return e.id === S;
                  });
                  if (B === S) {
                    if (R) {
                      var n = s()(R)
                        .add(+T.split(" ")[0], T.split(" ")[1])
                        .format("DD MMM, YYYY");
                      k("move_out_date", new Date(n));
                    }
                  } else {
                    var t = e.children.find(function (e) {
                      return e.id === B;
                    });
                    k(
                      "move_out_date",
                      new Date(
                        null === t || void 0 === t
                          ? void 0
                          : t.meta.available_to_formatted
                      )
                    );
                  }
                }
              },
              [S, T, B, R]
            ),
            (0, r.useEffect)(
              function () {
                S &&
                  T &&
                  B &&
                  (k("duration", ""),
                  k("inventory_id", ""),
                  k("arrival_date", ""),
                  setTimeout(function () {
                    k("move_out_date", "");
                  }, 100));
              },
              [S]
            );
          var Z = function (e) {
              (0, d.$v)(
                e,
                {
                  url_path: "/inventories",
                  params: { methods: "active_children" },
                },
                {
                  success: function (e) {
                    _(e.data);
                  },
                }
              );
            },
            A =
              (null === x ||
              void 0 === x ||
              null === (n = x.children) ||
              void 0 === n
                ? void 0
                : n.filter(function (e) {
                    return (0, d._e)(e);
                  })) || [],
            D = A.map(function (e) {
              return { label: e.name, value: e.id };
            }),
            E = function (e) {
              return A.find(function (n) {
                return n.id === e;
              })
                .children.filter(function (e) {
                  return (0, d._e)(e);
                })
                .reduce(function (e, n) {
                  return (
                    e.some(function (e) {
                      return e.meta.lease_duration === n.meta.lease_duration;
                    }) || e.push(n),
                    e
                  );
                }, [])
                .map(function (e) {
                  return {
                    label: ""
                      .concat(e.meta.lease_duration, " ")
                      .concat(e.meta.lease_duration_unit),
                    value: ""
                      .concat(e.meta.lease_duration, " ")
                      .concat(e.meta.lease_duration_unit),
                  };
                });
            },
            M = function (e, n) {
              var t = A.find(function (n) {
                return n.id === e;
              })
                .children.filter(function (e) {
                  return (0, d._e)(e);
                })
                .filter(function (e) {
                  return (
                    ""
                      .concat(e.meta.lease_duration, " ")
                      .concat(e.meta.lease_duration_unit) === n
                  );
                })
                .map(function (e) {
                  return {
                    label: ""
                      .concat(e.meta.available_from_formatted, "  (")
                      .concat((0, h.jK)(e.pricing.currency))
                      .concat(e.pricing.price)
                      .concat(
                        "weekly" === e.pricing.duration ? "/week" : "/month",
                        ")"
                      ),
                    value: e.id,
                  };
                });
              return t.push({ label: "Other", value: e }), t;
            },
            P = function (e) {
              return A.find(function (n) {
                return e === n.id;
              })
                .children.filter(function (e) {
                  return (0, d._e)(e);
                })
                .map(function (e) {
                  return e.meta.available_from_timestamp;
                })
                .sort(function (e, n) {
                  return e - n;
                });
            },
            z = !S,
            G = !T,
            W = function (e) {
              return s().unix(P(e)[0]).subtract(3, "month").toDate();
            },
            q = function (e) {
              return s().unix(P(e).at(-1)).add(3, "month").toDate();
            },
            O = function () {
              var e,
                n =
                  null === x ||
                  void 0 === x ||
                  null === (e = x.children) ||
                  void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return e.id === S;
                      }),
                t = { inventory_id: B || v };
              return (
                (null === n || void 0 === n ? void 0 : n.name) &&
                  (t.config_name = n.name),
                (null === n || void 0 === n ? void 0 : n.id) === B &&
                  ((t.lease_duration = T),
                  R && (t.arrival_date = s()(R).format("YYYY-MM-DD"))),
                (0, c.co)(l, t)
              );
            };
          return (0, u.withAmberTheme)(
            (0, o.jsx)(u.Modal, {
              title: (0, o.jsxs)(u.Flex, {
                children: [
                  (0, o.jsx)(u.Title, {
                    order: 4,
                    color: "neutral.9",
                    children: t,
                  }),
                  (0, o.jsx)(u.Text, {
                    mb: 12,
                    fz: 12,
                    color: "neutral.5",
                    children:
                      "Tell us about student\u2019s ideal accommodation! Please fill in your details.",
                  }),
                ],
              }),
              onClose: f,
              size: "xl",
              opened: !0,
              children: (0, o.jsxs)("form", {
                onSubmit: w(function () {}),
                children: [
                  (0, o.jsxs)(u.Grid, {
                    children: [
                      (0, o.jsx)(u.GridCol, {
                        span: 6,
                        children: (0, o.jsx)(a.Qr, {
                          name: "room_type",
                          control: j,
                          rules: { required: "Required" },
                          render: function (e) {
                            var n,
                              t,
                              i = e.field;
                            return (0, o.jsx)(u.Select, {
                              value: i.value,
                              onChange: function (e) {
                                return i.onChange(e);
                              },
                              data: D,
                              label: "Room Type",
                              placeholder: "Click to Select",
                              withAsterisk: !0,
                              error:
                                null === (n = y.errors) ||
                                void 0 === n ||
                                null === (t = n.room_type) ||
                                void 0 === t
                                  ? void 0
                                  : t.message,
                            });
                          },
                        }),
                      }),
                      (0, o.jsx)(u.GridCol, {
                        span: 6,
                        children: (0, o.jsx)(a.Qr, {
                          name: "duration",
                          control: j,
                          rules: { required: "Required" },
                          render: function (e) {
                            var n,
                              t,
                              i = e.field;
                            return (0, o.jsx)(u.Select, {
                              value: i.value,
                              onChange: function (e) {
                                return i.onChange(e);
                              },
                              data: S ? E(S) : [],
                              label: "Tenancy",
                              placeholder: "Click to Select",
                              disabled: z,
                              withAsterisk: !0,
                              error:
                                null === (n = y.errors) ||
                                void 0 === n ||
                                null === (t = n.duration) ||
                                void 0 === t
                                  ? void 0
                                  : t.message,
                            });
                          },
                        }),
                      }),
                      (0, o.jsx)(u.GridCol, {
                        span: 6,
                        children: (0, o.jsx)(a.Qr, {
                          name: "inventory_id",
                          control: j,
                          rules: { required: "Required" },
                          render: function (e) {
                            var n,
                              t,
                              i = e.field;
                            return (0, o.jsx)(u.Select, {
                              value: i.value,
                              onChange: function (e) {
                                return i.onChange(e);
                              },
                              data: S && T ? M(S, T) : [],
                              label: "Move In Date",
                              placeholder: "Click to Select",
                              disabled: G,
                              withAsterisk: !0,
                              error:
                                null === (n = y.errors) ||
                                void 0 === n ||
                                null === (t = n.inventory_id) ||
                                void 0 === t
                                  ? void 0
                                  : t.message,
                            });
                          },
                        }),
                      }),
                      B &&
                        B === S &&
                        (0, o.jsx)(u.GridCol, {
                          span: 6,
                          children: (0, o.jsx)(a.Qr, {
                            name: "arrival_date",
                            control: j,
                            rules: { required: "Required" },
                            render: function (e) {
                              var n,
                                t,
                                i = e.field;
                              return (0, o.jsx)(u.DatePicker, {
                                label: "Other Date",
                                placeholder: "Click to Select",
                                dropdownPosition: "bottom",
                                zIndex: 300,
                                value: i.value || "",
                                onChange: function (e) {
                                  return i.onChange(e);
                                },
                                minDate: W(S),
                                maxDate: q(S),
                                withAsterisk: !0,
                                error:
                                  null === (n = y.errors) ||
                                  void 0 === n ||
                                  null === (t = n.arrival_date) ||
                                  void 0 === t
                                    ? void 0
                                    : t.message,
                              });
                            },
                          }),
                        }),
                      (0, o.jsx)(u.GridCol, {
                        span: 6,
                        children: (0, o.jsx)(a.Qr, {
                          name: "move_out_date",
                          control: j,
                          rules: { required: "Required" },
                          render: function (e) {
                            var n,
                              t,
                              i = e.field;
                            return (0, o.jsx)(u.DatePicker, {
                              label: "Move Out Date",
                              placeholder: "Click to Select",
                              dropdownPosition: "bottom",
                              zIndex: 300,
                              value: i.value || "",
                              onChange: function (e) {
                                return i.onChange(e);
                              },
                              disabled: !0,
                              withAsterisk: !0,
                              error:
                                null === (n = y.errors) ||
                                void 0 === n ||
                                null === (t = n.move_out_date) ||
                                void 0 === t
                                  ? void 0
                                  : t.message,
                            });
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)(u.Flex, {
                    direction: "row-reverse",
                    mt: 16,
                    children: [
                      (0, o.jsx)(u.Button, {
                        onClick: function () {
                          var e = O(),
                            n = I ? "filled" : "no_fill";
                          (e = ""
                            .concat(e, "&")
                            .concat(p.toLowerCase(), "form_source=")
                            .concat(L[p][n][m].copy)),
                            navigator.clipboard.writeText(e);
                        },
                        mx: 8,
                        size: "md",
                        variant: "filled",
                        old: !0,
                        children: "Copy Link",
                      }),
                      (0, o.jsx)(u.Button, {
                        onClick: function () {
                          var e = O(),
                            n = I ? "filled" : "no_fill";
                          (e = ""
                            .concat(e, "&")
                            .concat(p.toLowerCase(), "form_source=")
                            .concat(L[p][n][m].open)),
                            window.open(e, "_blank");
                        },
                        mx: 8,
                        size: "md",
                        variant: "outline",
                        old: !0,
                        children: "Open",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    99194: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(70865),
        o = t(96670),
        r = t(52322),
        a = t(2784),
        l = (0, a.forwardRef)(function (e, n) {
          var t = e.children,
            l = e.idSuffix,
            s = void 0 === l ? "" : l,
            c = e.onScroll,
            d = e.withPadding,
            u = void 0 === d || d,
            h = e.navBarTravelDirectionProp,
            v = e.withItemPadding,
            p = void 0 !== v && v,
            m = e.onBookingSteps,
            f = void 0 !== m && m;
          return (
            (0, a.useEffect)(function () {
              var e = function () {
                  r.setAttribute("data-overflowing", n(a, r));
                },
                n = function (e, n) {
                  var t =
                      null === n || void 0 === n
                        ? void 0
                        : n.getBoundingClientRect(),
                    i = Math.ceil(t.right),
                    o = Math.ceil(t.left),
                    r =
                      null === e || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    a = f ? Math.ceil(r.right) - 1 : Math.ceil(r.right),
                    l = Math.ceil(r.left);
                  return o > l && i < a
                    ? "both"
                    : l < o
                    ? "left"
                    : a > i
                    ? "right"
                    : "none";
                },
                t = {
                  navBarTravelling: !1,
                  navBarTravelDirection: "",
                  navBarTravelDistance: h || 560,
                };
              document.documentElement.classList.remove("no-js"),
                document.documentElement.classList.add("js");
              var i = document.getElementById("leftAdvancer" + s),
                o = document.getElementById("rightAdvancer" + s),
                r = document.getElementById("scrollbox" + s),
                a = document.getElementById("scrollboxContents" + s);
              e();
              var l = !1;
              r.addEventListener("scroll", function () {
                l ||
                  window.requestAnimationFrame(function () {
                    e(), (l = !1);
                  }),
                  (l = !0);
              }),
                i.addEventListener("click", function () {
                  if (!0 !== t.navBarTravelling) {
                    if ("left" === n(a, r) || "both" === n(a, r)) {
                      var i = r.scrollLeft;
                      i < 2 * t.navBarTravelDistance
                        ? (a.style.transform = "translateX(" + i + "px)")
                        : (a.style.transform =
                            "translateX(" + t.navBarTravelDistance + "px)"),
                        a.classList.remove("scroll-box-contents-no-transition"),
                        (t.navBarTravelDirection = "left"),
                        (t.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                o.addEventListener("click", function () {
                  if (!0 !== t.navBarTravelling) {
                    if ("right" === n(a, r) || "both" === n(a, r)) {
                      var i,
                        o,
                        l =
                          null ===
                            (i =
                              null === a || void 0 === a
                                ? void 0
                                : a.getBoundingClientRect()) || void 0 === i
                            ? void 0
                            : i.right,
                        s =
                          null ===
                            (o =
                              null === r || void 0 === r
                                ? void 0
                                : r.getBoundingClientRect()) || void 0 === o
                            ? void 0
                            : o.right,
                        c = Math.floor(l - s);
                      c < 2 * t.navBarTravelDistance
                        ? (a.style.transform = "translateX(-" + c + "px)")
                        : (a.style.transform =
                            "translateX(-" + t.navBarTravelDistance + "px)"),
                        a.classList.remove("scroll-box-contents-no-transition"),
                        (t.navBarTravelDirection = "right"),
                        (t.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                a.addEventListener(
                  "transitionend",
                  function () {
                    var e = window.getComputedStyle(a, null),
                      n =
                        e.getPropertyValue("-webkit-transform") ||
                        e.getPropertyValue("transform"),
                      i = Math.abs(parseInt(n.split(",")[4]) || 0);
                    (a.style.transform = "none"),
                      a.classList.add("scroll-box-contents-no-transition"),
                      "left" === t.navBarTravelDirection
                        ? (r.scrollLeft = r.scrollLeft - i)
                        : (r.scrollLeft = r.scrollLeft + i),
                      (t.navBarTravelling = !1);
                  },
                  !1
                );
            }, []),
            (0, r.jsxs)("div", {
              className: "scroll-box-wrapper",
              children: [
                (0, r.jsx)("nav", {
                  id: "scrollbox" + s,
                  className: "scroll-box",
                  ref: n,
                  onScroll: c,
                  children: (0, r.jsx)(
                    "div",
                    (0, o.Z)(
                      (0, i.Z)(
                        {
                          id: "scrollboxContents" + s,
                          className: "scroll-box-contents",
                          role: "list",
                        },
                        u && { style: { paddingLeft: "20px" } }
                      ),
                      {
                        children: t.map(function (e, n) {
                          var i = [];
                          return (
                            0 === n && i.push("scroll-box-item-first"),
                            n + 1 == t.length && i.push("scroll-box-item-last"),
                            (0, r.jsx)(
                              "div",
                              {
                                className: "scroll-box-item "
                                  .concat(p ? "with-padding-right" : "", " ")
                                  .concat(i.join(" ")),
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
                (0, r.jsx)("button", {
                  "aria-label": "left-advancer",
                  id: "leftAdvancer" + s,
                  className: "scroll-box-advancer scroll-box-advancer_Left",
                  type: "button",
                  children: (0, r.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, r.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, r.jsx)("path", {
                        d: "M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z",
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)("button", {
                  "aria-label": "right-advancer",
                  id: "rightAdvancer" + s,
                  className: "scroll-box-advancer scroll-box-advancer_Right",
                  type: "button",
                  children: (0, r.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, r.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, r.jsx)("path", {
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
    17386: function (e, n, t) {
      t.d(n, {
        s: function () {
          return C;
        },
      });
      var i = t(70865),
        o = t(96670),
        r = t(26297),
        a = t(52322),
        l = t(2784),
        s = t(62595),
        c = t(99194),
        d = t(50930),
        u = t(4454),
        h = t(36906),
        v = t(63186),
        p = t(24291),
        m = t(35590),
        f = t(36886),
        g = t(40297),
        x = t(55214),
        _ = t(92661),
        b = t(47842),
        j = (0, s.createStyles)(function (e) {
          return {
            container: {
              cursor: "pointer",
              background: "white",
              border: "1px solid ".concat(e.colors.neutral[3]),
              borderRadius: 8,
              overflow: "hidden",
              width: 300,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            },
            carouselContainer: {
              position: "relative",
              height: 215,
              display: "flex",
            },
            carouselIconsContainer: {
              position: "absolute",
              zIndex: 5,
              margin: 12,
              bottom: 0,
              display: "flex",
              gap: 4,
            },
            ratingContainer: {
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 12,
              zIndex: 1,
            },
            content: { color: e.colors.neutral[9] },
            title: {
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              color: "#111928",
            },
            tagsContainer: (0, b.Z)(
              { textTransform: "capitalize", color: e.colors.neutral[9] },
              e.fn.largerThan("md"),
              { flexWrap: "nowrap" }
            ),
            soldOutTag: {
              position: "absolute",
              zIndex: 5,
              top: 0,
              margin: 12,
              padding: "4px 8px",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "12.5px",
              letterSpacing: "0.25%",
              background: e.colors.neutral[2],
              border: "1px solid ".concat(e.colors.neutral[3]),
              color: e.colors.neutral[5],
              borderRadius: 4,
            },
          };
        }),
        w = function (e) {
          var n,
            t,
            i,
            o,
            r = e.item,
            c = e.auth,
            b = e.showLocation,
            w = void 0 === b || b,
            y = e.showPrice,
            N = void 0 === y || y,
            k = e.isRequestActive,
            C = void 0 !== k && k,
            S = e.enableLink,
            T = void 0 === S || S,
            B = e.gtagEventAction,
            R = e.gtagEventCategory,
            I = e.gtagEventLabel,
            L = e.hideRoomType,
            Z = void 0 !== L && L,
            A = (0, s.isMobileView)(),
            D = (
              (null === c ||
              void 0 === c ||
              null === (n = c.data) ||
              void 0 === n
                ? void 0
                : n.inventories_shortlists_ids) || []
            ).includes(r.id),
            E = (0, f.Rg)(r),
            M = (0, f.k$)(null === r || void 0 === r ? void 0 : r.location),
            P = (0, f.vq)(null === r || void 0 === r ? void 0 : r.pricing),
            z = (0, f.hA)(
              null === r ||
                void 0 === r ||
                null === (t = r.pricing) ||
                void 0 === t
                ? void 0
                : t.duration
            ),
            G = (0, f._y)(r.images),
            W = (0, f.Lj)(r),
            q = !(0, f._e)(r),
            O = Boolean(
              !q &&
                (null === r || void 0 === r ? void 0 : r.reviews_rating) &&
                (null === r || void 0 === r ? void 0 : r.reviews_count) &&
                Number(
                  null === r || void 0 === r ? void 0 : r.reviews_rating
                ) >= 4 &&
                Number(null === r || void 0 === r ? void 0 : r.reviews_count) >=
                  10
            ),
            F = (0, l.useState)(D),
            H = F[0],
            Y = F[1],
            V = j().classes;
          G && (G.path = (0, p.al)(G.path, "medium"));
          var Q = [G].concat(
              (0, d.Z)(
                r.images.filter(function (e) {
                  return e.base_path !== G.base_path;
                }) || []
              )
            ),
            X = function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                (0, p.pr)({
                  action: B,
                  category: R,
                  label: I || r.name,
                  canonical_name: r.canonical_name,
                }),
                T && (A ? window.open(E, "_self") : window.open(E, "_blank"));
            };
          return (0, a.jsxs)(s.Box, {
            className: V.container,
            onClick: X,
            children: [
              (0, a.jsx)(s.Skeleton, {
                visible: C,
                children: (0, a.jsxs)(s.Box, {
                  className: V.carouselContainer,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    q &&
                      (0, a.jsx)(s.Flex, {
                        className: V.soldOutTag,
                        onClick: X,
                        children: "Sold out",
                      }),
                    (0, a.jsx)(x.ShortlistButton, {
                      isActive: H,
                      onClick: H
                        ? function (e) {
                            if (
                              (e.preventDefault(),
                              e.stopPropagation(),
                              (0, v.j)(c))
                            ) {
                              var n = {
                                url_path:
                                  "/api/v0/auth/users/inventories_shortlists/",
                                data: {
                                  inventories_shortlist: { inventory_id: r.id },
                                },
                              };
                              u.Z.emit(h.mp),
                                (0, g.ah)(r.id, n, {
                                  success: function () {
                                    (0, p.pr)({
                                      action: "place_unshortlist",
                                      category: "",
                                      email_id: c.data.email,
                                      canonical_name: r.name,
                                    }),
                                      (0, s.showNotification)({
                                        title: "Removed from Shortlist!",
                                        message:
                                          "This inventory has been removed from your shortlist",
                                        color: "secondary.5",
                                      }),
                                      Y(!1),
                                      u.Z.emit(h.BD, r.id),
                                      u.Z.emit(h.p9, "Removed from Shortlist"),
                                      u.Z.emit(h.A6);
                                  },
                                  failure: function (e) {
                                    return m.r.log(e);
                                  },
                                  done: function () {
                                    return u.Z.emit(h.IQ);
                                  },
                                });
                            } else
                              u.Z.emit(h.p9, "Login to Continue"),
                                u.Z.emit(h.FD);
                          }
                        : function (e) {
                            if (
                              (e.preventDefault(),
                              e.stopPropagation(),
                              (0, v.j)(c))
                            ) {
                              "undefined" !== typeof fbq &&
                                null !== fbq &&
                                fbq("track", "place_shortlist", {
                                  inventory_id: r.id,
                                });
                              var n = {
                                url_path:
                                  "/api/v0/auth/users/inventories_shortlists/",
                                data: {
                                  inventories_shortlist: { inventory_id: r.id },
                                },
                              };
                              u.Z.emit(h.mp),
                                (0, g.W1)(n, {
                                  success: function () {
                                    Y(!0),
                                      (0, s.showNotification)({
                                        title: "Added to Shortlist!",
                                        message:
                                          "This inventory has been added to your shortlist",
                                        color: "secondary.5",
                                      }),
                                      u.Z.emit(h.ft, r.id),
                                      u.Z.emit(h.p9, "Added to Shortlist"),
                                      u.Z.emit(h._w);
                                  },
                                  failure: function (e) {
                                    return m.r.error(e);
                                  },
                                  done: function () {
                                    return u.Z.emit(h.IQ);
                                  },
                                });
                            } else
                              u.Z.emit(h.p9, "Login to Shortlist"),
                                u.Z.emit(h.FD),
                                (0, p.wz)(r.id);
                            (0, p.pr)({
                              action: "place_shortlist",
                              category: R,
                              label: "success",
                            }),
                              "undefined" !== typeof rudderanalytics &&
                                rudderanalytics.track(
                                  "search_page_inventory_list_shortlist_inventory",
                                  { inventory: r },
                                  {
                                    integrations: {
                                      All: !0,
                                      "Facebook Pixel": !1,
                                    },
                                  }
                                );
                          },
                    }),
                    O &&
                      (0, a.jsx)(s.Box, {
                        className: V.ratingContainer,
                        children: (0, a.jsx)(x.RatingBadge, {
                          rating: r.reviews_rating,
                          count: r.reviews_count,
                          isBadge: !0,
                        }),
                      }),
                    (0, a.jsxs)(s.Box, {
                      className: V.carouselIconsContainer,
                      children: [
                        (null === (i = r.virtual_views) || void 0 === i
                          ? void 0
                          : i.length) > 0 &&
                          (0, a.jsx)(
                            x.TranslucentIconTag,
                            { children: "3D" },
                            "virtual_views"
                          ),
                        (null === (o = r.videos) || void 0 === o
                          ? void 0
                          : o.length) > 0 &&
                          (0, a.jsx)(
                            x.TranslucentIconTag,
                            {
                              children: (0, a.jsx)("i", {
                                className: "icon-video",
                              }),
                            },
                            "videos"
                          ),
                      ],
                    }),
                    (0, a.jsx)(x.ImageCarousel, {
                      images: Q,
                      width: 300,
                      height: 215,
                      onClick: X,
                      isInCompactCard: !0,
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(s.Box, {
                className: V.content,
                p: 16,
                children: [
                  (0, a.jsxs)(s.Skeleton, {
                    visible: C,
                    children: [
                      (0, a.jsx)("a", {
                        href: E,
                        children: (0, a.jsx)(s.Title, {
                          order: 3,
                          fw: 600,
                          fz: 18,
                          lh: "22.27px",
                          className: V.title,
                          translate: "false",
                          children: r.name,
                        }),
                      }),
                      w &&
                        (0, a.jsx)(s.Text, {
                          fw: 400,
                          fz: 14,
                          lh: "17.32px",
                          mt: 8,
                          color: "neutral.5",
                          translate: "false",
                          children: M,
                        }),
                    ],
                  }),
                  !Z &&
                    (0, a.jsx)(s.Group, {
                      spacing: 8,
                      mt: W ? 16 : 34,
                      className: V.tagsContainer,
                      children:
                        W &&
                        (0, a.jsx)(s.Skeleton, {
                          visible: C,
                          w: "fit-content",
                          children: (0, a.jsx)(x.Tag, {
                            icon: "icon-single-occupancy",
                            value: (0, _.M0)({ noun: "Room Option", count: W }),
                            fitContent: !0,
                          }),
                        }),
                    }),
                  N &&
                    !C &&
                    (0, a.jsxs)(s.Group, {
                      align: "flex-end",
                      spacing: 5,
                      mt: 16,
                      children: [
                        (0, a.jsx)(s.Text, {
                          fw: 400,
                          fz: 10,
                          lh: "12.37px",
                          children: "From",
                        }),
                        (0, a.jsxs)(s.Text, {
                          fw: 600,
                          fz: 18,
                          lh: "17.14px",
                          children: [P, "/", z],
                        }),
                      ],
                    }),
                  C && (0, a.jsx)(s.Skeleton, { mt: 20, height: 20 }),
                ],
              }),
            ],
          });
        },
        y = (0, s.createStyles)(function (e, n) {
          var t = n.scrollPosition;
          return {
            scrollbarContainer: {
              height: 8,
              width: 80,
              background: e.colors.neutral[1],
              position: "relative",
              borderRadius: 30,
              overflow: "hidden",
            },
            scrollbar: {
              borderRadius: 30,
              height: 8,
              width: 20,
              background: e.colors.neutral[4],
              position: "absolute",
              left: t,
            },
          };
        }),
        N = function (e) {
          var n = e.scrollPosition,
            t = y({ scrollPosition: n }).classes;
          return (0, a.jsx)(s.Box, {
            className: t.scrollbarContainer,
            children: (0, a.jsx)(s.Box, { className: t.scrollbar }),
          });
        },
        k = (0, s.createStyles)(function (e, n) {
          var t = n.withLayoutAndHeader;
          return {
            container: (0, b.Z)(
              { background: "white", padding: t ? "12px 16px" : 0 },
              e.fn.largerThan("sm"),
              {
                border: t ? "1px solid ".concat(e.colors.neutral[2]) : "none",
                borderRadius: 8,
                padding: t ? "8px 24px 24px" : 0,
              }
            ),
            title: { padding: "16px 0" },
          };
        }),
        C = function (e) {
          var n = e.auth,
            t = e.withLayoutAndHeader,
            d = void 0 === t || t,
            u = e.listings,
            h = e.title,
            v = e.isRequestActive,
            p = void 0 !== v && v,
            m = e.gtagEventAction,
            f = e.gtagEventLabel,
            g = e.gtagEventCategory,
            x = e.idSuffix,
            _ = e.showCarouselIndicator,
            b = void 0 !== _ && _,
            j = (0, r.Z)(e, [
              "auth",
              "withLayoutAndHeader",
              "listings",
              "title",
              "isRequestActive",
              "gtagEventAction",
              "gtagEventLabel",
              "gtagEventCategory",
              "idSuffix",
              "showCarouselIndicator",
            ]),
            y = (0, l.useRef)(null),
            C = k({ withLayoutAndHeader: d }).classes,
            S = (0, l.useState)(0),
            T = S[0],
            B = S[1],
            R = (0, s.isMobileView)();
          return (
            u.length > 0 &&
            (0, a.jsxs)(
              s.Flex,
              (0, o.Z)((0, i.Z)({ className: C.container }, j), {
                children: [
                  d &&
                    (0, a.jsx)(s.Title, {
                      order: 2,
                      fz: 20,
                      fw: 600,
                      lh: "25px",
                      ta: "left",
                      color: "neutral.9",
                      className: C.title,
                      children: h,
                    }),
                  (0, a.jsx)(
                    c.C,
                    (0, o.Z)(
                      (0, i.Z)(
                        { ref: y, withPadding: !1 },
                        R && {
                          onScroll: function () {
                            if (y && y.current) {
                              var e =
                                (y.current.scrollLeft / y.current.scrollWidth) *
                                80;
                              B(e);
                            }
                          },
                        }
                      ),
                      {
                        idSuffix: x,
                        withItemPadding: !0,
                        children: u.map(function (e) {
                          return (0,
                          a.jsx)(w, { item: e, auth: n, gtagEventAction: m, gtagEventCategory: g, gtagEventLabel: f, isRequestActive: p }, e.id);
                        }),
                      }
                    )
                  ),
                  b &&
                    R &&
                    u.length > 1 &&
                    (0, a.jsx)(s.Group, {
                      position: "center",
                      mt: 16,
                      children: (0, a.jsx)(N, { scrollPosition: T }),
                    }),
                ],
              })
            )
          );
        };
    },
    55214: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ChildInfo: function () {
            return u;
          },
          DistanceStrip: function () {
            return h;
          },
          ImageCarousel: function () {
            return x;
          },
          RatingBadge: function () {
            return w;
          },
          ShortlistButton: function () {
            return N;
          },
          Tag: function () {
            return S;
          },
          TranslucentIconTag: function () {
            return B;
          },
        });
      var i = t(50930),
        o = t(52322),
        r = t(2784),
        a = t(4454),
        l = t(36906),
        s = t(36886),
        c = t(76101),
        d = t(38615),
        u = function (e) {
          var n,
            t,
            u,
            h,
            v,
            p,
            m,
            f,
            g,
            x,
            _,
            b,
            j = e.item,
            w = e.auth,
            y = e.onInternalSelect,
            N = e.googleMapsLink,
            k = e.internalSelectedListings,
            C = e.destinationCoordinates,
            S = (0, s.ob)(j),
            T = "";
          k
            .map(function (e) {
              return e.id;
            })
            .indexOf(j.id) > -1 && (T += "selected "),
            j.children && (T += "show ");
          var B = (0, s.$9)(j),
            R = (0, s.bJ)(j),
            I = "https://www.google.com/maps/dir/?api=1&origin="
              .concat(
                null === j ||
                  void 0 === j ||
                  null === (n = j.location) ||
                  void 0 === n ||
                  null === (t = n.location_coordinates) ||
                  void 0 === t
                  ? void 0
                  : t.lat,
                ","
              )
              .concat(
                null === j ||
                  void 0 === j ||
                  null === (u = j.location) ||
                  void 0 === u ||
                  null === (h = u.location_coordinates) ||
                  void 0 === h
                  ? void 0
                  : h.lng,
                "&destination="
              )
              .concat(null === C || void 0 === C ? void 0 : C.lat, ",")
              .concat(null === C || void 0 === C ? void 0 : C.lng),
            L = "https://citymapper.com/directions?startcoord="
              .concat(
                null === j ||
                  void 0 === j ||
                  null === (v = j.location) ||
                  void 0 === v ||
                  null === (p = v.location_coordinates) ||
                  void 0 === p
                  ? void 0
                  : p.lat,
                ","
              )
              .concat(
                null === j ||
                  void 0 === j ||
                  null === (m = j.location) ||
                  void 0 === m ||
                  null === (f = m.location_coordinates) ||
                  void 0 === f
                  ? void 0
                  : f.lng,
                "&endcoord="
              )
              .concat(null === C || void 0 === C ? void 0 : C.lat, ",")
              .concat(null === C || void 0 === C ? void 0 : C.lng),
            Z = (0, r.useState)(!1),
            A = Z[0],
            D = Z[1],
            E = (0, r.useState)(""),
            M = E[0],
            P = E[1],
            z = j.owner,
            G = z.emails || [];
          (null === (g = z.contact) || void 0 === g ? void 0 : g.email) &&
            !G.includes(z.contact.email) &&
            G.push(z.contact.email);
          var W = z.phones || [];
          (null === (x = z.contact) || void 0 === x ? void 0 : x.phone) &&
            !W.includes(z.contact.phone) &&
            W.push(z.contact.phone);
          var q = (0, s.mu)(G),
            O = { url: "", inventory_id: "" };
          (null === w || void 0 === w ? void 0 : w.status) &&
            (null === w || void 0 === w || null === (_ = w.data) || void 0 === _
              ? void 0
              : _.email) &&
            (O.url = w.data.email),
            (null === j || void 0 === j ? void 0 : j.id) &&
              (O.inventory_id = j.id);
          var F = (0, s.Et)(j, O),
            H = (0, i.Z)(j.children).sort(function (e, n) {
              return -1 == n.tags.indexOf("not_available")
                ? 1
                : n.tags.indexOf("not_available") > -1
                ? -1
                : void 0;
            });
          return (0, o.jsxs)("div", {
            className: "children-container",
            children: [
              (0, o.jsxs)("div", {
                className: "children-top-container",
                children: [
                  y &&
                    (0, o.jsx)("div", {
                      className: "internal__select-container is-pulled-left",
                      children: (0, o.jsx)("div", {
                        className: "internal__input-container " + T,
                        onClick: function () {
                          return y(j);
                        },
                        children: (0, o.jsxs)("button", {
                          className: "button is-small",
                          children: [
                            (0, o.jsx)("i", { className: "icon-tick-mark" }),
                            " \xa0\xa0Select",
                          ],
                        }),
                      }),
                    }),
                  !1 ===
                    (null === (b = j.meta) || void 0 === b
                      ? void 0
                      : b.is_partnered) &&
                    (0, o.jsx)("div", {
                      className:
                        "helper-link button is-small is-pulled-left is-danger",
                      children: (0, o.jsx)("strong", {
                        children: "PROPERTY NOT A PARTNER \xa0",
                      }),
                    }),
                  (null === N || void 0 === N ? void 0 : N.length) > 0 &&
                    (0, o.jsx)("a", {
                      href: N,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "google-map-link is-pulled-left",
                      children: "Show this on google map",
                    }),
                  j.source_link &&
                    (0, o.jsxs)("a", {
                      href: j.source_link,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "helper-link button is-small is-pulled-left",
                      children: [
                        "\u2197 \xa0Property Link ",
                        j.source &&
                          (0, o.jsxs)("span", {
                            children: ["\xa0(", j.source, ")"],
                          }),
                      ],
                    }),
                  B &&
                    (0, o.jsx)("a", {
                      href: B,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "helper-link button is-small is-pulled-left",
                      children: "\u2197 \xa0Dashboard Link",
                    }),
                  !(0, c.js)(j.meta) &&
                    (0, o.jsx)("button", {
                      className: "button is-small is-outlined is-info",
                      onClick: function () {
                        D(function (e) {
                          return !e;
                        }),
                          P("Book");
                      },
                      children: "Generate book form link",
                    }),
                  "\xa0 \xa0",
                  A &&
                    (0, o.jsx)(d.h, {
                      title: "Generate ".concat(M, " Form"),
                      url: ""
                        .concat(window.location.origin)
                        .concat("Book" === M ? F : R),
                      rootInventoryId:
                        null === j || void 0 === j ? void 0 : j.id,
                      typeofModal: M,
                      from: "search_page",
                      onClose: function () {
                        D(!1);
                      },
                    }),
                  R &&
                    S &&
                    (0, o.jsx)(o.Fragment, {
                      children:
                        !(0, c.js)(j.meta) &&
                        (0, o.jsx)("button", {
                          className: "button is-small is-outlined is-info",
                          onClick: function () {
                            D(function (e) {
                              return !e;
                            }),
                              P("Payment");
                          },
                          children: "Generate payment form link",
                        }),
                    }),
                  "\xa0 \xa0",
                  I &&
                    (0, o.jsxs)("a", {
                      href: I,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "helper-link button is-small is-pulled-left",
                      children: [
                        (0, o.jsx)("i", { className: "icon-regions" }),
                        " \xa0\xa0Google Map Route",
                      ],
                    }),
                  L &&
                    (0, o.jsxs)("a", {
                      href: L,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "helper-link button is-small is-pulled-left",
                      children: [
                        (0, o.jsx)("i", { className: "icon-regions" }),
                        " \xa0\xa0Citymapper Route",
                      ],
                    }),
                  j.meta.sort_priority &&
                    (0, o.jsxs)("button", {
                      className: "helper-link button is-small is-pulled-left",
                      children: ["Sort Priority: ", j.meta.sort_priority],
                    }),
                  G &&
                    G.map(function (e) {
                      return (0, o.jsxs)(
                        "div",
                        {
                          className:
                            "helper-link field has-addons is-pulled-left",
                          children: [
                            (0, o.jsxs)("div", {
                              className: "control button is-small",
                              children: [" ", e, " "],
                            }),
                            (0, o.jsxs)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              className: "control button is-small",
                              href: (0, s.r9)(e),
                              children: [
                                (0, o.jsx)("i", { className: "icon-envelope" }),
                                "\xa0\xa0Email",
                              ],
                            }),
                            (0, o.jsxs)("button", {
                              className: "button is-small",
                              onClick: function () {
                                a.Z.emit(l.p9, "Link Copied"),
                                  navigator.clipboard.writeText(e);
                              },
                              children: [
                                (0, o.jsx)("i", {
                                  className: "icon-documents",
                                }),
                                "\xa0Copy",
                              ],
                            }),
                          ],
                        },
                        e
                      );
                    }),
                  G &&
                    (0, o.jsxs)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      className: "helper-link button is-small is-pulled-left",
                      href: q,
                      children: [
                        (0, o.jsx)("i", { className: "icon-envelope" }),
                        "\xa0\xa0Email All",
                      ],
                    }),
                  W &&
                    W.map(function (e) {
                      return (0,
                      o.jsxs)("div", { className: "helper-link field has-addons is-pulled-left", children: [(0, o.jsxs)("div", { className: "control button is-small", children: [" ", e, " "] }), (0, o.jsxs)("a", { target: "_blank", rel: "noreferrer", className: "control button is-small", href: (0, s.TZ)(e), children: [(0, o.jsx)("i", { className: "icon-phone" }), "\xa0\xa0Call"] }), "\xa0\xa0"] }, e);
                    }),
                  (0, o.jsx)("div", { className: "is-clearfix" }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "children-bottom-container",
                children: [
                  j.message_1 &&
                    (0, o.jsxs)("div", {
                      className: "note-container",
                      children: [
                        (0, o.jsx)("span", {
                          className: "note-strong-container",
                          children: (0, o.jsx)("b", { children: "Note:" }),
                        }),
                        " ",
                        j.message_1,
                      ],
                    }),
                  H.map(function (e) {
                    var n = e.children,
                      t = (0, s._e)(e),
                      i = [];
                    return (
                      n.forEach(function (e) {
                        var n = (0, s.W_)(e.pricing),
                          t = (0, s._e)(e),
                          r = (0, s.Pz)(e.meta),
                          a = (0, s.yA)(e.meta),
                          l = (0, s.jL)({ leaseDuration: r, availableFrom: a });
                        i.push(
                          (0, o.jsxs)(
                            "div",
                            {
                              className:
                                (t ? "" : "sold-out") +
                                " tenancies-element-container",
                              children: [
                                (0, o.jsxs)("span", {
                                  className: "text",
                                  children: [
                                    (0, o.jsxs)("b", { children: [r, ":"] }),
                                    "\xa0",
                                  ],
                                }),
                                (0, o.jsxs)("span", {
                                  className: "text",
                                  children: [n, "\xa0"],
                                }),
                                a &&
                                  (0, o.jsxs)(o.Fragment, {
                                    children: [
                                      (0, o.jsxs)("span", {
                                        className: "text",
                                        children: [
                                          (0, o.jsx)("b", {
                                            children: "Move In:",
                                          }),
                                          " ",
                                          a,
                                          "\xa0",
                                        ],
                                      }),
                                      (0, o.jsxs)("span", {
                                        className: "text",
                                        children: [
                                          (0, o.jsx)("b", {
                                            children: "Move Out:",
                                          }),
                                          " ",
                                          l,
                                          "\xa0",
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            e.id
                          )
                        );
                      }),
                      (0, o.jsxs)(
                        "div",
                        {
                          className:
                            (t ? "" : "sold-out") + " children-tag-container",
                          children: [
                            (0, o.jsx)("span", {
                              className: "text child-name",
                              children: (0, o.jsxs)("b", {
                                children: [e.name, ":"],
                              }),
                            }),
                            (0, o.jsx)("span", {
                              className:
                                "text child-price tag-item-1 is-outlined",
                              children: (0, s.W_)(e.pricing),
                            }),
                            e.meta.lease_duration &&
                              e.meta.lease_duration_unit &&
                              (0, o.jsxs)("span", {
                                className:
                                  "text child-lease-duration tag-item-2 is-outlined",
                                children: [
                                  "(",
                                  e.meta.lease_duration +
                                    " " +
                                    e.meta.lease_duration_unit,
                                  ")",
                                ],
                              }),
                            i &&
                              (0, o.jsx)("div", {
                                className: "tenancies-container",
                                children: i,
                              }),
                          ],
                        },
                        e.id
                      )
                    );
                  }),
                ],
              }),
            ],
          });
        },
        h = function (e) {
          var n,
            t,
            i,
            r,
            a,
            l,
            s = e.item.distance_from_searched_item,
            c = [
              {
                name: "Driving",
                color: "blue",
                distance:
                  (null === (n = s.DRIVING) || void 0 === n
                    ? void 0
                    : n.distance) || "na",
                duration:
                  (null === (t = s.DRIVING) || void 0 === t
                    ? void 0
                    : t.duration) || "na",
              },
              {
                name: "Walk",
                color: "red",
                distance:
                  (null === (i = s.WALKING) || void 0 === i
                    ? void 0
                    : i.distance) || "na",
                duration:
                  (null === (r = s.WALKING) || void 0 === r
                    ? void 0
                    : r.duration) || "na",
              },
              {
                name: "Bus/Train",
                color: "green",
                distance:
                  (null === (a = s.TRANSIT) || void 0 === a
                    ? void 0
                    : a.distance) || "na",
                duration:
                  (null === (l = s.TRANSIT) || void 0 === l
                    ? void 0
                    : l.duration) || "na",
              },
            ];
          return (0, o.jsx)("div", {
            className: "distance-container-strip",
            children: c.map(function (e, n) {
              return (0,
              o.jsxs)("span", { className: "item " + e.color, children: [(0, o.jsxs)(o.Fragment, { children: [" ", e.name, " "] }), (0, o.jsxs)(o.Fragment, { children: [" ", e.distance, " "] }), (0, o.jsxs)(o.Fragment, { children: [" ", e.duration, " "] })] }, n);
            }),
          });
        },
        v = t(24291),
        p = t(62595),
        m = t(47842),
        f = t(70865),
        g = (0, p.createStyles)(function (e, n, t) {
          var i = n.height,
            o = n.width,
            r = n.isInCompactCard,
            a = void 0 !== r && r;
          return {
            indicator: {
              width: 6,
              height: 6,
              transition: "width 250ms ease",
              "&[data-active]": { width: 16 },
            },
            controls: {
              ref: t("controls"),
              transition: "opacity 150ms ease",
              opacity: 0,
            },
            viewport: { width: "100%" },
            root: (0, m.Z)(
              {
                flex: 1,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                overflow: "hidden",
                "&:hover": (0, m.Z)({}, "& .".concat(t("controls")), {
                  opacity: 1,
                }),
                height: null !== i && void 0 !== i ? i : 215,
                width: null !== o && void 0 !== o ? o : "100%",
                display: "flex",
              },
              e.fn.largerThan("md"),
              (0, f.Z)(
                {
                  height: null !== i && void 0 !== i ? i : 220,
                  width: null !== o && void 0 !== o ? o : 220,
                },
                a
                  ? { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }
                  : { borderTopRightRadius: 8, borderBottomRightRadius: 8 }
              )
            ),
            image: { height: "100%", width: "100%", objectFit: "cover" },
          };
        }),
        x = function (e) {
          var n = e.images,
            t = void 0 === n ? [] : n,
            i = e.height,
            a = void 0 === i ? null : i,
            l = e.width,
            s = void 0 === l ? null : l,
            c = e.onClick,
            d = e.isDisabled,
            u = void 0 !== d && d,
            h = e.isInCompactCard,
            m = void 0 !== h && h,
            f = (0, p.isMobileView)(),
            x = (0, r.useState)(null),
            _ = x[0],
            b = x[1],
            j = g({ height: a, width: s, isInCompactCard: m }).classes,
            w = t.length > 1 && !u;
          return (
            (0, r.useEffect)(
              function () {
                _ && _.reInit();
              },
              [_, t]
            ),
            (0, o.jsx)(p.Carousel, {
              height: "100%",
              getEmblaApi: b,
              classNames: j,
              withIndicators: w,
              withControls: w && !f,
              draggable: w,
              nextControlLabel: "next slide",
              previousControlLabel: "previous slide",
              loop: !0,
              children: t.slice(0, Math.min(t.length, 5)).map(function (e, n) {
                var t = e.path,
                  i = e.caption;
                return (0,
                o.jsx)(p.CarouselSlide, { children: (0, o.jsxs)("picture", { children: [(0, o.jsx)("source", { srcSet: (0, v.al)(t, "gallery-image-small"), media: "(min-width: 1080px)" }), (0, o.jsx)("source", { srcSet: (0, v.al)(t, "gallery-image-small"), media: "(min-width: 720px)" }), (0, o.jsx)("source", { srcSet: (0, v.al)(t, "gallery-image-small"), media: "(min-width: 480px)" }), (0, o.jsx)("img", { src: (0, v.al)(t, "gallery-image-small"), alt: i, className: j.image, onClick: c, width: 480, height: 360, loading: 0 === n ? "eager" : "lazy" })] }) }, "".concat(i, "-").concat(n));
              }),
            })
          );
        },
        _ = t(8388),
        b = t.n(_),
        j = (0, p.createStyles)(function (e, n) {
          var t = n.isBadge;
          return {
            container: (0, f.Z)(
              { display: "flex" },
              t && {
                zIndex: 1,
                padding: 4,
                borderRadius: 4,
                background: e.white,
              }
            ),
            icon: { height: 16, width: 16 },
            rating: {
              color: e.colors.neutral[9],
              fontSize: 12,
              fontWeight: 400,
              lineHeight: "125%",
              letterSpacing: "0.018px",
            },
            count: {
              color: e.colors.neutral[4],
              fontSize: 10,
              fontWeight: 400,
              lineHeight: "125%",
              letterSpacing: "0.015px",
            },
          };
        }),
        w = function (e) {
          var n = e.rating,
            t = e.count,
            i = e.isBadge,
            r = j({ isBadge: i }).classes;
          return (0, o.jsxs)(p.Group, {
            spacing: 4,
            align: "flex-end",
            className: r.container,
            noWrap: !0,
            children: [
              (0, o.jsx)("img", {
                src: "".concat(
                  b().app.image_static_assets_url,
                  "/images/star.svg"
                ),
                alt: "trustpilot-star",
                className: r.icon,
              }),
              (0, o.jsx)(p.Text, { className: r.rating, children: n }),
              (0, o.jsxs)(p.Text, {
                className: r.count,
                children: ["(", t, ")"],
              }),
            ],
          });
        },
        y = (0, p.createStyles)(function (e, n) {
          var t = n.isActive;
          return {
            button: {
              cursor: "pointer",
              position: "absolute",
              zIndex: 1,
              right: 0,
              borderRadius: "100%",
              background: "white",
              height: 32,
              width: 32,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 12,
              border: "1px solid ".concat(e.colors.neutral[3]),
              fontSize: 16,
              color: t ? "white" : e.colors.neutral[9],
              backgroundColor: t ? e.colors.primary[4] : "white",
            },
          };
        }),
        N = function (e) {
          var n = e.onClick,
            t = e.isActive,
            i = y({ isActive: t }).classes;
          return (0, o.jsx)(p.Box, {
            component: "button",
            className: i.button,
            onClick: n,
            role: "checkbox",
            "aria-checked": t,
            "aria-label": "shortlist",
            children: (0, o.jsx)("i", { className: "icon-shortlist" }),
          });
        },
        k = t(96670),
        C = (0, p.createStyles)(function (e, n) {
          var t = n.variant,
            i = n.color,
            o = n.fitContent,
            r = n.withTextOverflow,
            a = n.withMaxWidth;
          return {
            container: (0, k.Z)(
              (0, f.Z)(
                {
                  borderRadius: 2,
                  overflow: "hidden",
                  padding: "2px 8px",
                  background:
                    "primary" === t ? e.colors.neutral[1] : "transparent",
                  flexWrap: "nowrap",
                  flexBasis: o ? "fit-content" : "46%",
                },
                i && { color: e.colors[i][5] }
              ),
              (0, m.Z)(
                {},
                e.fn.largerThan("md"),
                (0, f.Z)(
                  (0, k.Z)((0, f.Z)({}, a && { maxWidth: "25%" }), {
                    flexBasis: "fit-content",
                  }),
                  "primary" !== t && { padding: 0 }
                )
              )
            ),
            icon: (0, f.Z)(
              {
                marginLeft: 0,
                color: e.colors[t][5],
                fontSize: 12,
                height: 14,
                width: 14,
              },
              i && { color: e.colors[i][5] }
            ),
            text: (0, f.Z)(
              {
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "12px",
                whiteSpace: "nowrap",
              },
              r && { overflow: "hidden", textOverflow: "ellipsis" }
            ),
          };
        }),
        S = function (e) {
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            i = e.color,
            r = e.value,
            a = e.icon,
            l = e.fitContent,
            s = void 0 === l || l,
            c = e.withTooltip,
            d = void 0 !== c && c,
            u = e.tooltipProps,
            h = e.withTextOverflow,
            v = void 0 !== h && h,
            m = e.withMaxWidth,
            g = C({
              variant: t,
              color: i,
              fitContent: s,
              withTextOverflow: v,
              withMaxWidth: void 0 !== m && m,
            }).classes;
          return d
            ? (0, o.jsx)(
                p.Tooltip,
                (0, k.Z)(
                  (0, f.Z)(
                    {
                      position: "top-end",
                      multiline: !0,
                      withArrow: !0,
                      tt: "none",
                    },
                    u
                  ),
                  {
                    children: (0, o.jsxs)(p.Group, {
                      title: r,
                      spacing: 4,
                      className: g.container,
                      children: [
                        (0, o.jsx)("i", {
                          className: "icon ".concat(a, " ").concat(g.icon),
                        }),
                        (0, o.jsx)(p.Text, { className: g.text, children: r }),
                      ],
                    }),
                  }
                )
              )
            : (0, o.jsxs)(p.Group, {
                title: r,
                spacing: 4,
                className: g.container,
                children: [
                  (0, o.jsx)("i", {
                    className: "icon ".concat(a, " ").concat(g.icon),
                  }),
                  (0, o.jsx)(p.Text, { className: g.text, children: r }),
                ],
              });
        },
        T = (0, p.createStyles)(function (e) {
          return {
            container: {
              height: 24,
              width: 24,
              borderRadius: 4,
              background: e.colors.neutral[9],
              color: "white",
              opacity: 0.6,
              display: "flex",
              fontWeight: 400,
              fontSize: 12,
              alignItems: "center",
              justifyContent: "center",
            },
          };
        }),
        B = function (e) {
          var n = e.children,
            t = T().classes;
          return (0, o.jsx)(p.Box, { className: t.container, children: n });
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/7386-b3f0baf938d31509.js.map
