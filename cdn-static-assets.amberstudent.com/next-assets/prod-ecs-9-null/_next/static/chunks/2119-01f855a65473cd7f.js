"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2119],
  {
    72472: function (e, n, t) {
      t.d(n, {
        B7: function () {
          return b;
        },
        J$: function () {
          return f;
        },
        cp: function () {
          return m;
        },
        qW: function () {
          return v;
        },
        q_: function () {
          return x;
        },
      });
      var i = t(98788),
        a = t(70865),
        o = t(66383),
        r = t(50853),
        l = t(8388),
        s = t.n(l),
        c = t(71526),
        d = (t(71406), t(139)),
        u = t.n(d),
        p = t(49705),
        h = t.n(p),
        g = t(24291),
        m =
          ((function () {
            var e = (0, i.Z)(function () {
              var e,
                n,
                t,
                i = arguments;
              return (0, r.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}),
                      (n =
                        e.url_path ||
                        "/api/v0/regions/search_google_place_details"),
                      (t = h()(s().urls.base_service_url, n)),
                      (e.params = e.params || {}),
                      [
                        4,
                        (0, c.Z)(function () {
                          return u().get(t).query(e.params);
                        }),
                      ]
                    );
                  case 1:
                    return [2, a.sent()];
                }
              });
            });
          })(),
          (function () {
            var e = (0, i.Z)(function (e) {
              var n,
                t,
                i,
                l,
                d,
                p,
                g,
                m,
                x = arguments;
              return (0, r.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (n = x.length > 1 && void 0 !== x[1] ? x[1] : {}),
                      (l = h()(s().urls.base_service_url, "/api/v0/searches")),
                      (d = {
                        limit: 8,
                        sort_key: "name",
                        methods: "data",
                        name: e,
                      }),
                      [
                        4,
                        (0, c.Z)(function () {
                          return u()
                            .get(l)
                            .query((0, a.Z)({}, d, n));
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (p = o.Z.apply(void 0, [r.sent(), 2])),
                      (g = p[0]),
                      !(m = p[1]) &&
                      (null === (t = g.body) ||
                      void 0 === t ||
                      null === (i = t.data) ||
                      void 0 === i
                        ? void 0
                        : i.result)
                        ? [2, [g.body.data.result, null]]
                        : [2, [[], m]]
                    );
                }
              });
            });
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
        x = (function () {
          var e = (0, i.Z)(function (e) {
            var n,
              t,
              i,
              l,
              d,
              p,
              g,
              m = arguments;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                    (i = h()(
                      s().urls.base_service_url,
                      "/api/v0/homes/search"
                    )),
                    (l = {
                      limit: 10,
                      sort_key: "search_name",
                      sort_order: "desc",
                      states: "active",
                      search_name: e,
                    }),
                    [
                      4,
                      (0, c.Z)(function () {
                        return u()
                          .get(i)
                          .query((0, a.Z)({}, l, n));
                      }),
                    ]
                  );
                case 1:
                  return (
                    (d = o.Z.apply(void 0, [r.sent(), 2])),
                    (p = d[0]),
                    !(g = d[1]) &&
                    (null === (t = p.body) || void 0 === t ? void 0 : t.data)
                      ? [2, [p.body.data, null]]
                      : [2, [[], g]]
                  );
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = (0, i.Z)(function (e) {
            var n,
              t,
              i,
              l,
              d,
              p,
              g,
              m,
              x = arguments;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = x.length > 1 && void 0 !== x[1] ? x[1] : {}),
                    (l = h()(s().urls.base_service_url, "/api/v0/regions")),
                    (d = {
                      limit: 5,
                      region_types: "locality,sublocality,establishment",
                      sort_key: "search_name",
                      sort_order: "desc",
                      states: "active",
                      only: "id,name,canonical_name,meta,region_type,secondary_name",
                      search_name: e,
                    }),
                    [
                      4,
                      (0, c.Z)(function () {
                        return u()
                          .get(l)
                          .query((0, a.Z)({}, d, n));
                      }),
                    ]
                  );
                case 1:
                  return (
                    (p = o.Z.apply(void 0, [r.sent(), 2])),
                    (g = p[0]),
                    !(m = p[1]) &&
                    (null === (t = g.body) ||
                    void 0 === t ||
                    null === (i = t.data) ||
                    void 0 === i
                      ? void 0
                      : i.result)
                      ? [2, [g.body.data.result, null]]
                      : [2, [[], m]]
                  );
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = (0, i.Z)(function (e) {
            var n, t, i, a, l, d;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = h()(
                      s().urls.base_service_url,
                      "/api/v0/regions/search_google_autosuggest"
                    )),
                    (i = { types: "geocode|establishment", input: e }),
                    u().get(t).query(i),
                    [
                      4,
                      (0, c.Z)(function () {
                        return u().get(t).query(i);
                      }),
                    ]
                  );
                case 1:
                  return (
                    (a = o.Z.apply(void 0, [r.sent(), 2])),
                    (l = a[0]),
                    !(d = a[1]) &&
                    (null === (n = l.body) || void 0 === n ? void 0 : n.data)
                      ? [2, [l.body.data, null]]
                      : [2, [[], d]]
                  );
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = (0, i.Z)(function (e) {
            var n,
              t,
              i,
              l,
              d,
              p,
              m,
              x,
              v = arguments;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                    (l = h()(s().urls.base_service_url, "/api/v0/inventories")),
                    (d = {
                      limit: 10,
                      root: "true",
                      statuses: "active",
                      only: "id,name,location",
                      search_name: e,
                    }),
                    [
                      4,
                      (0, c.Z)(function () {
                        return u()
                          .get(l)
                          .query((0, a.Z)({}, d, n));
                      }),
                    ]
                  );
                case 1:
                  return (
                    (p = o.Z.apply(void 0, [r.sent(), 2])),
                    (m = p[0]),
                    !(x = p[1]) &&
                    (null === (t = m.body) ||
                    void 0 === t ||
                    null === (i = t.data) ||
                    void 0 === i
                      ? void 0
                      : i.result)
                      ? [2, [(0, g.ll)(m.body.data.result), null]]
                      : [2, [[], x]]
                  );
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
    },
    22119: function (e, n, t) {
      t.d(n, {
        o: function () {
          return L;
        },
      });
      var i = t(98788),
        a = t(70865),
        o = t(96670),
        r = t(50853),
        l = t(52322),
        s = t(2784),
        c = t(23577),
        d = t(24291),
        u = t(36886),
        p = t(62595),
        h = t(52138),
        g = t(99333),
        m = t(47842),
        x = (0, p.createStyles)(function (e, n) {
          var t = n.insideHeader,
            i = n.isNewHome;
          return {
            searchRegionInput: (0, m.Z)(
              {
                height: "100%",
                border: "none",
                outline: "none",
                background: "none",
                width: "100%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                paddingLeft: "12px",
                paddingRight: "18px",
                fontWeight: 400,
                color: e.colors.neutral[6],
                borderRadius: "99px",
                "&::placeholder": { color: e.colors.neutral[4] },
                fontSize: "14px",
              },
              e.fn.largerThan("md"),
              {
                fontSize: t ? "16px" : "".concat(i ? "18px" : "16px"),
                lineHeight: "20px",
              }
            ),
            searchButton: (0, m.Z)(
              {
                minHeight: t ? "28px" : "38px",
                minWidth: t ? "28px" : "38px",
                height: t ? "28px" : "38px",
                width: t ? "28px" : "38px",
                fontSize: t ? "12px" : "16px",
                borderRadius: "50%",
                backgroundColor: e.colors.primary[4],
                boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.05)",
                border: "none",
                cursor: "pointer",
                color: "white",
                margin: " 0 !important",
                "&:hover": { backgroundColor: e.colors.primary[4] },
              },
              e.fn.largerThan("md"),
              (0, a.Z)(
                { fontSize: t ? "12px" : i ? "24px" : "16px" },
                !t && {
                  minHeight: i ? 50 : 40,
                  minWidth: i ? 50 : 40,
                  height: i ? 50 : 40,
                  width: i ? 50 : 40,
                }
              )
            ),
            searchCrossButton: (0, m.Z)(
              {
                height: "20px",
                width: "20px",
                padding: "4px",
                borderRadius: "50%",
                border: "none",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                color: "white",
                backgroundColor: e.colors.neutral[4],
                marginRight: "4px",
                fontSize: "12px",
                "&:hover": { backgroundColor: e.colors.neutral[4] },
                iconClose: { margin: 0 },
              },
              e.fn.largerThan("md"),
              (0, a.Z)(
                {},
                !t && {
                  height: i ? "32px" : "24px",
                  width: i ? "32px" : "24px",
                  padding: "5px",
                  marginRight: "8px",
                }
              )
            ),
            searchRegionInputContainer: (0, o.Z)(
              (0, a.Z)(
                (0, o.Z)(
                  (0, a.Z)(
                    {
                      position: "relative",
                      minHeight: t ? "45px" : "54px",
                      cursor: "text",
                      backgroundColor: "white",
                      borderRadius: "90px",
                      padding: t ? "6px" : "8px",
                    },
                    !t && { paddingRight: i ? "14px" : "8px" }
                  ),
                  { display: "flex", alignItems: "center" }
                ),
                t
                  ? {
                      backgroundColor: e.colors.neutral[1],
                      border: "1px solid ".concat(e.colors.neutral[3]),
                    }
                  : { boxShadow: i ? e.shadows.lg : e.shadows.md }
              ),
              (0, m.Z)(
                {},
                e.fn.largerThan("md"),
                (0, a.Z)({}, !t && { minHeight: i ? "76px" : "56px" })
              )
            ),
            animateDiv: {
              cursor: "text",
              position: "absolute",
              backgroundColor: t ? e.colors.neutral[1] : "white",
              wordWrap: "nowrap",
              display: "flex",
              alignItems: "center",
              width: "calc(100% - 50px)",
              "& .animate-word:nth-of-type(5)": (0, o.Z)(
                (0, a.Z)(
                  {},
                  t
                    ? {
                        display: "inline-block",
                        paddingTop: "10px",
                        lineHeight: "23px",
                        width: "calc(100% - 80px)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : { display: "flex", paddingTop: 0 }
                ),
                (0, m.Z)({}, e.fn.largerThan("md"), {
                  display: "flex",
                  paddingTop: 0,
                })
              ),
            },
            hideAnimateDiv: { display: "none" },
          };
        }),
        v = (0, p.createStyles)(function (e) {
          return {
            tabsContainer: {
              position: "relative",
              height: "fit-content",
              maxHeight: 600,
            },
            tabList: (0, m.Z)(
              {
                position: "sticky",
                top: 0,
                padding: 24,
                paddingTop: 18,
                paddingBottom: 0,
                flexWrap: "nowrap",
                overflowX: "auto",
                overflowY: "hidden",
                gap: "12px",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                "& button": {
                  marginBottom: 0,
                  minWidth: "fit-content",
                  padding: "4px 8px",
                  "&[data-active]": { color: e.colors.primary[4] },
                },
              },
              e.fn.smallerThan("sm"),
              {
                padding: 0,
                paddingLeft: 16,
                height: 32,
                "& button": {
                  marginBottom: 0,
                  padding: "4px 8px",
                  "& > div": { width: "max-content", lineHeight: "21px" },
                },
              }
            ),
            tab: {
              color: e.colors.neutral[6],
              marginRight: 5,
              "& .amber-Tabs-tabIcon": { minWidth: "fit-content" },
            },
            panel: { overflow: "auto" },
            panelSectionList: (0, m.Z)(
              { padding: "8px 16px" },
              e.fn.smallerThan("md"),
              { padding: "8px 16px", minHeight: 30, margin: 0, gap: 12 }
            ),
            panelText: (0, m.Z)(
              {
                padding: "8px 12px",
                fontSize: 14,
                fontWeight: 500,
                color: e.colors.neutral[6],
                cursor: "pointer",
                "&:hover": { backgroundColor: e.colors.neutral[0] },
              },
              e.fn.smallerThan("md"),
              {
                borderRadius: 4,
                width: "max-content",
                maxWidth: "none",
                flexBasis: "unset",
                padding: "4px 12px",
                lineHeight: "21px",
                height: "max-content",
                backgroundColor: "none",
              }
            ),
            panelSectionTitle: (0, m.Z)(
              {
                padding: "12px 24px",
                background: e.colors.neutral[0],
                textTransform: "uppercase",
                color: e.colors.neutral[6],
                fontSize: 12,
                fontWeight: 500,
                lineHeight: "150%",
              },
              e.fn.smallerThan("md"),
              { fontWeight: 600, lineHeight: "18px", fontSize: 12 }
            ),
            flagImage: { height: 18, width: 18 },
            listItemSkeleton: (0, m.Z)({}, e.fn.smallerThan("md"), {
              padding: 0,
            }),
            outerResultContainer: (0, m.Z)(
              { padding: 0 },
              e.fn.largerThan("md"),
              { padding: "12px 2px 12px 0" }
            ),
            resultListContainer: (0, m.Z)(
              {
                padding: "8px 16px",
                ":last-child": {
                  paddingBottom: "calc(env(safe-area-inset-bottom) + 80px)",
                },
              },
              e.fn.largerThan("md"),
              {
                maxHeight: "40vh",
                overflow: "auto",
                borderRadius: 24,
                "&::-webkit-scrollbar": {
                  "-webkit-appearance": "none",
                  width: "7px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  boxShadow: " 0 0 1px rgba(255, 255, 255, .5)",
                  borderRadius: 24,
                },
              }
            ),
          };
        }),
        f = function (e) {
          var n = e.cities,
            t = e.title,
            i = e.handleGtagEvents,
            a = e.gtagEventAction,
            o = e.setIsRedirecting,
            r = v().classes;
          return (0, l.jsxs)(p.Box, {
            component: "section",
            children: [
              (0, l.jsxs)(p.Text, {
                className: r.panelSectionTitle,
                children: [
                  (0, l.jsx)("i", { className: "icon-distance" }),
                  " \xa0 ",
                  t,
                ],
              }),
              (0, l.jsx)(p.Flex, {
                className: r.panelSectionList,
                direction: "row",
                gap: 8,
                wrap: "wrap",
                children:
                  null === n || void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return (0, l.jsx)(
                          p.Text,
                          {
                            onClick: function () {
                              return (function (e, n, t) {
                                o && o(),
                                  i &&
                                    i({
                                      action: a,
                                      label: e,
                                      canonical_name: e,
                                    });
                                var r = {
                                  id: e,
                                  canonical_name: e,
                                  name: t,
                                  region_type: "inventory",
                                };
                                (0, d.SR)(r),
                                  (window.location.href = (0, u.s7)(e, {}, n));
                              })(
                                e.canonical_name,
                                e.region_type,
                                null === e || void 0 === e ? void 0 : e.name
                              );
                            },
                            className: r.panelText,
                            display: "inline-block",
                            children: e.name,
                          },
                          e.id
                        );
                      }),
              }),
            ],
          });
        },
        b = t(93797),
        y = function (e) {
          var n = e.gtagEventCategory,
            t = e.setIsRedirecting,
            i = v().classes,
            a = (0, s.useState)([]),
            o = a[0],
            r = a[1];
          (0, s.useEffect)(function () {
            r(JSON.parse(localStorage.getItem("recentlyVisited")) || []);
          }, []);
          var c = function (e) {
            var t = e.label,
              i = e.action,
              a = e.canonical_name;
            n &&
              (0, d.pr)({
                action: i,
                category: n,
                label: t,
                canonical_name: a,
              });
          };
          return (0, l.jsxs)(p.Tabs, {
            className: i.tabsContainer,
            defaultValue: "all",
            color: "primary.4",
            children: [
              (0, l.jsxs)(p.Tabs.List, {
                h: 50,
                className: i.tabList,
                children: [
                  (0, l.jsx)(p.Tabs.Tab, {
                    value: "all",
                    className: i.tab,
                    children: "ALL",
                  }),
                  b.jG.map(function (e) {
                    var t, a;
                    return (0, l.jsx)(
                      p.Tabs.Tab,
                      {
                        value:
                          null === e ||
                          void 0 === e ||
                          null === (t = e.shortName) ||
                          void 0 === t
                            ? void 0
                            : t.toLowerCase(),
                        className: i.tab,
                        onClick: function () {
                          var t;
                          (t = null === e || void 0 === e ? void 0 : e.name),
                            n &&
                              (0, d.pr)({
                                action: "clicked_country_select",
                                category: n,
                                label: "Search Bar, ".concat(t),
                              });
                        },
                        icon: (null === e || void 0 === e ? void 0 : e.icon)
                          ? (0, l.jsx)("img", {
                              className: i.flagImage,
                              src: e.icon,
                              alt: "flag-".concat(
                                null === e ||
                                  void 0 === e ||
                                  null === (a = e.shortName) ||
                                  void 0 === a
                                  ? void 0
                                  : a.toLowerCase()
                              ),
                            })
                          : (0, l.jsx)("i", { className: "icon-distance" }),
                        children:
                          null === e || void 0 === e ? void 0 : e.shortName,
                      },
                      null === e || void 0 === e ? void 0 : e.id
                    );
                  }),
                ],
              }),
              (0, l.jsxs)(p.Tabs.Panel, {
                value: "all",
                className: i.panel,
                children: [
                  (null === o || void 0 === o ? void 0 : o.length) > 0 &&
                    (0, l.jsx)(f, {
                      cities: o,
                      title: "Recently Searched",
                      handleGtagEvents: c,
                      gtagEventAction: "clicked_recently_searched_result",
                      setIsRedirecting: t,
                    }),
                  (0, l.jsx)(f, {
                    cities: b.Sj,
                    title: "Popular Cities",
                    handleGtagEvents: c,
                    gtagEventAction: "clicked_popular_locations_result",
                    setIsRedirecting: t,
                  }),
                ],
              }),
              b.jG.map(function (e) {
                var n;
                return (0,
                l.jsx)(p.Tabs.Panel, { className: i.panel, value: null === e || void 0 === e || null === (n = e.shortName) || void 0 === n ? void 0 : n.toLowerCase(), children: (0, l.jsx)(f, { cities: (null === e || void 0 === e ? void 0 : e.popular_cities) || [], title: "Popular Cities", handleGtagEvents: c, gtagEventAction: "clicked_popular_location_results_country", setIsRedirecting: t }) }, null === e || void 0 === e ? void 0 : e.id);
              }),
            ],
          });
        },
        w = (0, p.createStyles)(function (e) {
          return {
            listItem: {
              padding: "8px 20px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: e.colors.neutral[0],
                borderRadius: e.radius.xl,
              },
            },
            selectedListItem: {
              backgroundColor: e.colors.neutral[0],
              borderRadius: e.radius.xl,
            },
            icon: {
              border: "1px solid ".concat(e.colors.neutral[2]),
              height: 40,
              width: 40,
              "& .icon-search-university": { fontSize: 18 },
              "& .icon-search-inventory": { fontSize: 18 },
            },
            listIcon: {
              fontSize: 16,
              height: 16,
              width: 16,
              color: e.colors.neutral[6],
            },
            textContainer: { marginLeft: 12 },
            primaryName: {
              color: e.colors.neutral[9],
              fontWeight: 500,
              fontSize: 14,
            },
            secondaryName: { color: e.colors.neutral[6], fontSize: 12 },
          };
        }),
        _ = (0, p.createStyles)(function (e, n) {
          var t = n.insideHeader,
            i = n.isNewHome;
          return {
            container: { position: "relative" },
            dropdown: (0, a.Z)(
              {
                zIndex: 1,
                marginTop: 8,
                borderRadius: e.radius.xl,
                backgroundColor: "white",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                position: "absolute",
                width: i ? "100%" : "98%",
              },
              t && { width: "550px" }
            ),
          };
        }),
        j = (0, p.createStyles)(function () {
          return { root: { minHeight: "100vh" } };
        }),
        C = function (e) {
          var n,
            t = e.data,
            i = e.index,
            r = e.getItemProps,
            s = e.selectedIndex,
            c = t.name,
            u =
              (null === (n = t.location) || void 0 === n ? void 0 : n.name) ||
              t.address,
            h = w().classes,
            g = r({ data: t, index: i });
          return (0, l.jsx)(
            "li",
            (0, o.Z)((0, a.Z)({}, g), {
              onClick: function (e) {
                var n = {
                  id: null === t || void 0 === t ? void 0 : t.canonical_name,
                  canonical_name:
                    null === t || void 0 === t ? void 0 : t.canonical_name,
                  name: null === t || void 0 === t ? void 0 : t.name,
                  region_type: null === t || void 0 === t ? void 0 : t.type,
                };
                (0, d.SR)(n), null === g || void 0 === g || g.onClick(e);
              },
              children: (0, l.jsxs)(p.Flex, {
                className: ""
                  .concat(h.listItem, " ")
                  .concat(i === s ? h.selectedListItem : ""),
                direction: "row",
                align: "center",
                children: [
                  (0, l.jsx)(p.Avatar, {
                    className: h.icon,
                    children: (0, l.jsx)("i", {
                      className: "".concat(t.icon, " ").concat(h.listIcon),
                    }),
                  }),
                  (0, l.jsxs)(p.Flex, {
                    direction: "column",
                    className: h.textContainer,
                    children: [
                      (0, l.jsx)(p.Text, {
                        className: h.primaryName,
                        children: c,
                      }),
                      u &&
                        (0, l.jsx)(p.Text, {
                          className: h.secondaryName,
                          children: u,
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        k = function () {
          return (0, l.jsxs)(p.Flex, {
            direction: "row",
            align: "center",
            p: 8,
            children: [
              (0, l.jsx)(p.Skeleton, { height: 40, circle: !0, radius: "sm" }),
              (0, l.jsxs)(p.Flex, {
                direction: "column",
                ml: 12,
                children: [
                  (0, l.jsx)(p.Skeleton, {
                    height: 8,
                    width: 100,
                    radius: "xl",
                  }),
                  (0, l.jsx)(p.Skeleton, {
                    height: 8,
                    width: 100,
                    radius: "xl",
                    mt: 6,
                  }),
                ],
              }),
            ],
          });
        },
        S = function () {
          var e = v().classes.listItemSkeleton;
          return (0, l.jsx)(p.Box, {
            p: 12,
            className: e,
            children: [1, 2, 3, 4, 5].map(function (e) {
              return (0, l.jsx)(k, {}, e);
            }),
          });
        },
        N = function (e) {
          var n = e.isMobile,
            t = void 0 !== n && n,
            i = e.handleAnimateDivFocus,
            r = e.isSearchFocused,
            c = e.isNewHome,
            d = e.idValue,
            u = e.getInputProps,
            h = e.handleOnFocus,
            g = e.highlightedIndex,
            m = e.handleSearchButtonClick,
            v = e.isOpen,
            f = e.trimmedInputLength,
            b = e.handleOnClickCross,
            y = e.insideHeader,
            w = e.searchElementRef,
            _ = e.disabled,
            j = e.isLoading,
            C = x({ insideHeader: y, isNewHome: c }),
            k = C.classes,
            S = C.cx,
            N = (0, s.useRef)(null),
            I = function () {
              var e;
              "" !==
                (null === N ||
                void 0 === N ||
                null === (e = N.current) ||
                void 0 === e
                  ? void 0
                  : e.value) && m();
            };
          return (0, l.jsxs)(p.Box, {
            onClick: function () {
              var e;
              i(),
                null === N ||
                  void 0 === N ||
                  null === (e = N.current) ||
                  void 0 === e ||
                  e.focus(),
                t && h();
            },
            className: k.searchRegionInputContainer,
            ref: w,
            "data-testid": "search-input-section",
            children: [
              (0, l.jsxs)("div", {
                className: S(
                  k.searchRegionInput,
                  k.animateDiv,
                  r ? k.hideAnimateDiv : ""
                ),
                children: [
                  (0, l.jsx)("span", {
                    className: "static-word",
                    children: "Search by ",
                  }),
                  [
                    "City",
                    "University",
                    "Property",
                    "City, University or Property",
                  ].map(function (e, n) {
                    return (0,
                    l.jsx)("span", { className: "animate-word ".concat(c ? "animate-new" : "animate-old"), children: e }, n);
                  }),
                ],
              }),
              t && (0, l.jsx)("div", { className: k.searchRegionInput }),
              !t &&
                (0, l.jsx)(
                  "input",
                  (0, o.Z)(
                    (0, a.Z)(
                      {
                        id: d,
                        className: k.searchRegionInput,
                        placeholder: _
                          ? ""
                          : "Search by City, University or Property",
                      },
                      u({
                        ref: N,
                        autoComplete: "one-time-code",
                        onFocus: h,
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        onKeyDown: function (e) {
                          "Enter" === e.key && g < 0 && I();
                        },
                        id: d,
                        "aria-label": "property-search",
                        "aria-labelledby": void 0,
                      })
                    ),
                    { disabled: _ }
                  )
                ),
              v &&
                f > 0 &&
                (0, l.jsx)(p.Button, {
                  "aria-label": "close",
                  className: k.searchCrossButton,
                  onClick: function () {
                    (null === N || void 0 === N ? void 0 : N.current) &&
                      (N.current.value = ""),
                      b();
                  },
                  children: (0, l.jsx)("i", { className: "icon-close" }),
                }),
              j &&
                (0, l.jsx)(p.Loader, {
                  color: "primary.4",
                  size: y ? "sm" : "md",
                  mr: 12,
                }),
              f < 1 &&
                !j &&
                (0, l.jsx)(p.ActionIcon, {
                  "aria-label": "search",
                  size: "xl",
                  component: "button",
                  className: k.searchButton,
                  onClick: I,
                  children: (0, l.jsx)("i", {
                    className: "icon-search-button",
                  }),
                }),
            ],
          });
        },
        I = t(72472),
        Z = function (e) {
          var n = e.selectedIndex,
            t = e.getItemProps,
            i = e.items,
            r = v().classes,
            s =
              null === i || void 0 === i
                ? void 0
                : i.map(function (e) {
                    var n = null === e || void 0 === e ? void 0 : e.type,
                      t = "icon-distance";
                    return (
                      "establishment" === n
                        ? (t = "icon-search-university")
                        : "inventory" === n && (t = "icon-search-inventory"),
                      (0, o.Z)((0, a.Z)({}, e), { icon: t })
                    );
                  });
          return (
            s.length > 0 &&
            (0, l.jsx)(p.Box, {
              className: r.outerResultContainer,
              children: (0, l.jsx)(p.Box, {
                className: r.resultListContainer,
                children: s.map(function (e, i) {
                  return (0,
                  l.jsx)(C, { index: i, selectedIndex: n, data: e, getItemProps: t }, i);
                }),
              }),
            })
          );
        },
        T = t(66383),
        R = (function () {
          var e = (0, i.Z)(function (e) {
            var n, t, i, a, o;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (n = e.urlParams),
                    (t = void 0 === n ? {} : n),
                    (i = e.value),
                    [4, (0, I.q_)(i, t)]
                  );
                case 1:
                  return (
                    (a = T.Z.apply(void 0, [r.sent(), 1])),
                    [2, null !== (o = a[0]) && void 0 !== o ? o : []]
                  );
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        E = (0, p.createStyles)(function () {
          return {
            closeIcon: {
              borderRadius: "100%",
              background: "#9CA3AF",
              height: 16,
              width: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 6,
              fontSize: 8,
              color: "#fff",
              "& i": { fontWeight: "bold" },
            },
            searchListContainer: {
              display: "flex",
              flexDirection: "column",
              height: "90vh",
              overflowY: "auto",
              "& li": { listStyle: "none", "& > div": { padding: "8px 0" } },
            },
            keyboardIcon: {
              fontSize: 20,
              height: 20,
              width: 23,
              margin: 0,
              display: "block",
            },
          };
        }),
        H = function (e) {
          var n = e.urlType,
            t = void 0 === n ? "region" : n,
            a = e.onBack,
            o = (0, s.useState)(!1),
            c = o[0],
            h = o[1],
            m = (0, s.useState)([]),
            x = m[0],
            v = m[1],
            f = (0, s.useState)(""),
            b = f[0],
            w = f[1],
            _ = E().classes,
            j = (0, s.useRef)(),
            C = b.length,
            k = g.E0.HOME,
            N = g.E0.SEARCH,
            I = g.E0.PROFILE,
            T = g.E0.INVENTORY,
            H = k,
            L = function () {
              w(""), v([]);
            },
            B = function () {
              return (0, l.jsx)("span", {
                onClick: L,
                className: _.closeIcon,
                children: (0, l.jsx)("i", { className: "icon-close" }),
              });
            };
          (0, s.useEffect)(function () {
            !(function () {
              var e,
                n =
                  null === window ||
                  void 0 === window ||
                  null === (e = window.document) ||
                  void 0 === e
                    ? void 0
                    : e.referrer;
              n.includes("profile")
                ? (H = I)
                : n.includes("places/search")
                ? (H = N)
                : n.includes("places") && (H = T);
            })();
          }, []);
          var z = 0 === C;
          return (0, p.withAmberTheme)(
            (0, p.withNotifications)(
              (0, l.jsxs)("div", {
                "data-testid": "mobile-search-section",
                children: [
                  (0, l.jsxs)(p.Flex, {
                    direction: "row",
                    gap: 8,
                    align: "center",
                    justify: "space-between",
                    className: "searchContainer",
                    children: [
                      (0, l.jsx)("div", {
                        className: "back-btn",
                        onClick: function () {
                          "function" === typeof a ? a() : window.history.back();
                        },
                        children: (0, l.jsx)("i", {
                          className: "icon-arrow-left",
                          color: "neutral.6",
                        }),
                      }),
                      (0, l.jsx)(p.TextInput, {
                        className: "searchInput",
                        size: "md",
                        placeholder: "Search by University, City and Property",
                        radius: "xl",
                        c: "neutral.2",
                        value: b,
                        autoFocus: !0,
                        py: 8,
                        pr: 16,
                        onKeyDown: function (e) {
                          if ("Enter" === e.key && x.length > 0) {
                            var n = x[0],
                              t =
                                (null === n || void 0 === n
                                  ? void 0
                                  : n.region_type) ||
                                (null === n || void 0 === n ? void 0 : n.type),
                              i = n.href || (0, u.s7)(n.canonical_name, {}, t);
                            H &&
                              (0, d.pr)({
                                action: "clicked_searched_result",
                                category: H,
                                label: "".concat(i, ", 1, ").concat(b),
                              }),
                              (window.location = i);
                          }
                        },
                        onChange: function (e) {
                          j.current && clearTimeout(j.current);
                          var n = e.target.value.trim().toLowerCase();
                          w(e.target.value),
                            n.length > 2
                              ? (h(!0),
                                (j.current = setTimeout(function () {
                                  (0, i.Z)(function () {
                                    var e;
                                    return (0,
                                    r.__generator)(this, function (i) {
                                      switch (i.label) {
                                        case 0:
                                          return [
                                            4,
                                            R({ urlType: t, value: n }),
                                          ];
                                        case 1:
                                          return (e = i.sent()), v(e), [2];
                                      }
                                    });
                                  })(),
                                    h(!1);
                                }, 100)))
                              : v([]);
                        },
                        rightSection: C > 0 && (0, l.jsx)(B, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(p.Divider, {}),
                  (0, l.jsxs)(p.Flex, {
                    py: 8,
                    className: _.searchListContainer,
                    children: [
                      C < 3 &&
                        C > 0 &&
                        0 === x.length &&
                        (0, l.jsxs)(p.Flex, {
                          direction: "row",
                          gap: 13,
                          px: 16,
                          py: 8,
                          align: "center",
                          children: [
                            (0, l.jsx)("i", {
                              className: "icon-keyboard ".concat(
                                _.keyboardIcon
                              ),
                            }),
                            (0, l.jsxs)(p.Text, {
                              color: "neutral.7",
                              fz: 14,
                              fw: 500,
                              children: [
                                "You can find your accommodation more easily if you add ",
                                3 - C,
                                " more alphabet",
                                3 - C > 1 ? "s" : "",
                              ],
                            }),
                          ],
                        }),
                      z &&
                        (0, l.jsx)(p.Flex, {
                          direction: "column",
                          py: 16,
                          children: (0, l.jsx)(y, { gtagEventCategory: H }),
                        }),
                      !z && c
                        ? (0, l.jsx)(S, {})
                        : (0, l.jsx)(Z, {
                            selectedIndex: -1,
                            urlType: t,
                            items: x,
                            getItemProps: function (e) {
                              var n = e.data,
                                t = e.index;
                              return {
                                onClick: function () {
                                  var e = (0, u.s7)(
                                    n.canonical_name,
                                    {},
                                    null === n || void 0 === n ? void 0 : n.type
                                  );
                                  (0, d.pr)({
                                    action: "clicked_searched_result",
                                    category: H,
                                    label: ""
                                      .concat(e, ", ")
                                      .concat(t + 1, ", ")
                                      .concat(b),
                                  }),
                                    (window.location.href = e);
                                },
                              };
                            },
                          }),
                    ],
                  }),
                ],
              })
            )
          );
        },
        L = function (e) {
          var n = e.handleElementChange,
            t = e.onSearchFocus,
            g = e.isNewHome,
            m = e.onSearchBlur,
            x = e.urlType,
            v = void 0 === x ? "region" : x,
            f = e.showSuggestions,
            b = void 0 !== f && f,
            w = e.urlParams,
            C = e.finalAction,
            k = void 0 === C ? "set_data" : C,
            I = e.idValue,
            T = e.gtagEventCategory,
            E = e.value,
            L = e.insideHeader,
            B = void 0 !== L && L,
            z = e.searchElementRef,
            P = e.setOverlay,
            F = (0, s.useState)(!1),
            A = F[0],
            O = F[1],
            W = (0, s.useState)(!1),
            V = W[0],
            q = W[1],
            D = (0, s.useState)([]),
            M = D[0],
            G = D[1],
            Y = (0, s.useRef)(null),
            U = (0, s.useState)(!1),
            K = U[0],
            J = U[1],
            X = (0, s.useState)(!1),
            $ = X[0],
            Q = X[1],
            ee = _({ insideHeader: B, isNewHome: g }).classes,
            ne = j().classes,
            te = (0, p.isMobileView)(),
            ie = function (e) {
              if (
                ("set_data" == k &&
                  (n({ region: { elementValue: e, inValidCheck: "" } }),
                  setTimeout(function () {
                    se(), P && P(!1);
                  }, 0)),
                "set_link" == k)
              ) {
                q(!0), se(), P && P(!1);
                var t =
                  e.href ||
                  (0, u.s7)(
                    e.canonical_name,
                    {},
                    null === e || void 0 === e ? void 0 : e.type
                  );
                T &&
                  (0, d.pr)({
                    action: "clicked_searched_result",
                    category: T,
                    label: ""
                      .concat(t, ", ")
                      .concat(pe + 1, ", ")
                      .concat(ge),
                  }),
                  (window.location = t);
              }
            };
          (0, h._E)(function () {
            q(!1), me("");
          });
          var ae = function () {
            te &&
              (Q(!0),
              T &&
                (0, d.pr)({
                  action: "clicked_search_bar",
                  category: T,
                  label: "search_bar",
                }));
          };
          (0, c.xb)();
          var oe = (0, c.Kb)({
              items: M,
              itemToString: function (e) {
                return e ? e.name : "";
              },
              onInputValueChange: function (e) {
                var n = e.inputValue;
                Y.current && clearTimeout(Y.current);
                var t = n.trim().toLowerCase();
                t.length > 2 &&
                  (O(!0),
                  (Y.current = setTimeout(function () {
                    (0, i.Z)(function () {
                      var e;
                      return (0, r.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, R({ urlParams: w, value: t })];
                          case 1:
                            return (e = n.sent()), G(e), [2];
                        }
                      });
                    })(),
                      O(!1);
                  }, 100)));
              },
              onSelectedItemChange: function (e) {
                var n = e.selectedItem;
                return ie(n);
              },
              onIsOpenChange: function (e) {
                e.isOpen || (m && m(), P && P(!1));
              },
              defaultSelectedItem:
                null === E || void 0 === E ? void 0 : E.elementValue,
            }),
            re = oe.isOpen,
            le = oe.openMenu,
            se = oe.closeMenu,
            ce = oe.getMenuProps,
            de = oe.getInputProps,
            ue = oe.getComboboxProps,
            pe = oe.highlightedIndex,
            he = oe.getItemProps,
            ge = oe.inputValue,
            me = oe.setInputValue,
            xe = ge.trim().length;
          return (0, l.jsx)(
            p.Box,
            (0, o.Z)((0, a.Z)({ className: ee.container }, ue()), {
              children: (0, l.jsxs)(p.Box, {
                onClick: ae,
                translate: "false",
                children: [
                  (0, l.jsx)(N, {
                    isMobile: te,
                    handleAnimateDivFocus: function () {
                      te || J(!0);
                    },
                    isNewHome: g,
                    isSearchFocused: K,
                    idValue: I,
                    getInputProps: de,
                    handleOnFocus: function () {
                      P && P(!0),
                        le(),
                        T &&
                          !K &&
                          (0, d.pr)({
                            action: "clicked_search_bar",
                            category: T,
                            label: "search_bar",
                          }),
                        t && t();
                    },
                    highlightedIndex: pe,
                    handleSearchButtonClick: function () {
                      window.innerWidth < d.ZC
                        ? ae()
                        : M.length > 0
                        ? (ie(M[0]),
                          T &&
                            (0, d.pr)({
                              action: "clicked_search_cta",
                              category: T,
                              label: ge,
                            }))
                        : le();
                    },
                    isOpen: re,
                    trimmedInputLength: xe,
                    handleOnClickCross: function () {
                      me(""), se(), P && P(!1);
                    },
                    insideHeader: B,
                    searchElementRef: z,
                    disabled: te,
                    isLoading: V,
                  }),
                  !te &&
                    (0, l.jsxs)(
                      "ul",
                      (0, o.Z)(
                        (0, a.Z)(
                          { className: ee.dropdown },
                          ce({
                            "aria-labelledby": void 0,
                            "aria-label": "property-suggestions",
                          })
                        ),
                        {
                          children: [
                            re &&
                              xe > 1 &&
                              M &&
                              M.length > 0 &&
                              (A
                                ? (0, l.jsx)(S, {})
                                : (0, l.jsx)(Z, {
                                    selectedIndex: pe,
                                    urlType: v,
                                    items: M,
                                    getItemProps: he,
                                  })),
                            re &&
                              M &&
                              0 == M.length &&
                              xe >= 3 &&
                              (0, l.jsxs)(p.Text, {
                                fz: 14,
                                fw: 500,
                                color: "neutral.7",
                                py: 12,
                                px: 10,
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon-keyboard",
                                  }),
                                  " \xa0\xa0 No suggestions found. Please try other location",
                                ],
                              }),
                            re &&
                              xe > 0 &&
                              xe <= 2 &&
                              (0, l.jsxs)(p.Text, {
                                fz: 14,
                                fw: 500,
                                color: "neutral.7",
                                py: 12,
                                px: 10,
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon-keyboard",
                                  }),
                                  " \xa0\xa0 You can find your accommodation more easily if you add",
                                  " ",
                                  3 - xe,
                                  " more alphabet",
                                  3 - xe > 1 ? "s" : "",
                                ],
                              }),
                            b &&
                              re &&
                              !ge &&
                              (0, l.jsx)(y, {
                                gtagEventCategory: T,
                                setIsRedirecting: function () {
                                  return q(!0);
                                },
                              }),
                          ],
                        }
                      )
                    ),
                  (0, l.jsx)(p.Modal, {
                    classNames: ne,
                    fullScreen: !0,
                    lockScroll: !0,
                    trapFocus: !0,
                    withCloseButton: !1,
                    opened: $,
                    padding: 0,
                    margin: 0,
                    zIndex: 400,
                    children:
                      $ &&
                      (0, l.jsx)(H, {
                        onBack: function () {
                          return Q(!1);
                        },
                      }),
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/2119-01f855a65473cd7f.js.map
