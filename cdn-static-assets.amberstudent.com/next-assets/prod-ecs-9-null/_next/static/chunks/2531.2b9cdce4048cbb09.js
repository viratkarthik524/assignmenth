"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2531, 16],
  {
    640: function (e, n, a) {
      a.d(n, {
        ah: function () {
          return t;
        },
      });
      var i =
          "https://prod-static-assets.amberstudent.com/images/popular-cities",
        t = [
          {
            name: "London",
            link: "/places/search/london-1811028205760",
            image: "".concat(i, "/London/London_2.jpg"),
          },
          {
            name: "Glasgow",
            link: "/places/search/glasgow-1811024356803",
            image:
              "https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/glasgow-1.jpg",
          },
          {
            name: "Liverpool",
            link: "/places/search/liverpool-1811029039831",
            image: "".concat(i, "/Liverpool/Liverpool_1.jpg"),
          },
          {
            name: "Edinburgh",
            link: "/places/search/edinburgh-1811029850773",
            image: "".concat(i, "/Edinburgh/Edinburgh_1.png"),
          },
          {
            name: "Sheffield",
            link: "/places/search/sheffield-1811027902898",
            image: "".concat(i, "/Sheffield/Sheffield_1.jpg"),
          },
          {
            name: "Melbourne",
            link: "/places/search/melbourne-1811011846366",
            image: "".concat(i, "/MELBOURNE/MELBOURNE_2.png"),
          },
          {
            name: "Dallas",
            link: "/places/search/dallas-1811050789451",
            image: "".concat(i, "/DALLAS/DALLAS_2.png"),
          },
          {
            name: "Chicago",
            link: "/places/search/chicago-1811055213730",
            image: "".concat(i, "/CHICAGO/CHICAGO_2.png"),
          },
          {
            name: "Sydney",
            link: "/places/search/sydney-1811019193619",
            image: "".concat(i, "/SYDNEY/SYDNEY_2.png"),
          },
          {
            name: "New York",
            link: "/places/search/new-york-city-1811153579499",
            image: "".concat(i, "/NewYork/NewYork_1.jpg"),
          },
          {
            name: "Manchester",
            link: "/places/search/manchester-1811021510595",
            image: "".concat(i, "/Manchester/Manchester_1.jpg"),
          },
          {
            name: "Nottingham",
            link: "/places/search/nottingham-1811025104223",
            image:
              "https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/nottingham-1.jpg",
          },
          {
            name: "Birmingham",
            link: "/places/search/birmingham-1811028953945",
            image: "".concat(i, "/Birmingham/Birmingham_2.png"),
          },
          {
            name: "Brisbane",
            link: "/places/search/brisbane-1811022382320",
            image: "".concat(i, "/BRISBANE/BRISBANE_1.png"),
          },
          {
            name: "Coventry",
            link: "/places/search/coventry-1811022688464",
            image:
              "https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/london-1.jpg",
          },
          {
            name: "Leeds",
            link: "/places/search/leeds-1811025399073",
            image: "".concat(i, "/Leeds/Leeds_1.jpg"),
          },
        ];
    },
    32531: function (e, n, a) {
      a.r(n),
        a.d(n, {
          PopularCitiesSection: function () {
            return b;
          },
        });
      var i = a(70865),
        t = a(96670),
        r = a(52322),
        o = a(2784),
        c = a(99333),
        l = a(93797),
        s = a(640),
        d = a(24291),
        g = a(36886),
        p = a(62595),
        u = a(26793),
        h = a(47842),
        m = (0, p.createStyles)(function (e, n) {
          var a,
            i = n.isActive;
          return {
            btn: (0, h.Z)(
              {
                display: "flex",
                height: 37,
                padding: "8px 12px",
                alignItems: "center",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                marginBottom: 4,
                letterSpacing: "0.08px",
                color: i ? e.colors.neutral[8] : e.colors.neutral[6],
                borderColor: i ? e.colors.neutral[8] : e.colors.neutral[2],
                borderRadius: 4,
                "&:hover": { background: e.colors.neutral[0] },
              },
              e.fn.largerThan("lg"),
              { height: 40, padding: "8px 16px", fontSize: 16 }
            ),
            btnIcon: (0, h.Z)({ marginRight: 6 }, e.fn.largerThan("lg"), {
              marginRight: 8,
            }),
            btnLabel:
              ((a = { paddingRight: 20 }),
              (0, h.Z)(a, e.fn.largerThan("lg"), { paddingRight: 16 }),
              (0, h.Z)(a, e.fn.largerThan("xl"), { paddingRight: 0 }),
              a),
            icon: (0, h.Z)({ fontSize: 14 }, e.fn.largerThan("lg"), {
              fontSize: 20,
              height: 20,
              width: 20,
            }),
          };
        }),
        f = function (e) {
          var n = e.name,
            a = e.icon,
            i = e.onClick,
            t = e.isActive,
            c = m({ isActive: void 0 !== t && t }).classes,
            l = (0, o.useRef)(null);
          return (0, r.jsx)(p.Button, {
            ref: l,
            variant: "outline",
            color: "neutral.2",
            className: c.btn,
            classNames: {
              label: c.btnLabel,
              inner: c.btnInner,
              leftIcon: c.btnIcon,
            },
            leftIcon: (0, r.jsx)("img", {
              src: a,
              alt: "".concat(n, " flag"),
              className: c.icon,
              width: "22px",
              height: "22px",
            }),
            onClick: function () {
              var e;
              (i(n), l && l.current) &&
                (null === (e = l.current) ||
                  void 0 === e ||
                  e.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  }));
            },
            old: !0,
            children: n,
          });
        },
        _ = (0, p.createStyles)(function (e) {
          return {
            container: (0, h.Z)(
              {
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: 165,
                width: 165,
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 4,
                padding: 8,
                justifyContent: "flex-end",
                textDecoration: "none !important",
                "&:active, &:visited, &:focus": {
                  color: "white",
                  textDecoration: "none !important",
                },
              },
              e.fn.largerThan("md"),
              { aspectRatio: "1", height: "auto", width: "auto" }
            ),
            image: {
              position: "absolute",
              margin: -8,
              height: "100%",
              width: "100%",
              transition: "all .3s ease-in-out",
              background: e.colors.neutral[2],
              "&:hover,&:focus": { transform: "scale(1.2)" },
            },
            title: (0, h.Z)(
              {
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                padding: "4px 0px",
                alignItems: "flex-start",
                gap: 10,
                borderRadius: 4,
                background: "rgba(0, 0, 0, 0.60)",
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "150%",
                textAlign: "center",
                textWrap: "nowrap",
              },
              e.fn.largerThan("md"),
              { fontSize: 14, fontWeight: 500, padding: "8px 52px" }
            ),
          };
        }),
        x = function (e) {
          var n = e.name,
            a = e.imageSrc,
            i = e.link,
            t = e.country,
            o = _().classes;
          return (0, r.jsxs)(p.Anchor, {
            onClick: function () {
              (0, d.pr)({
                action: "clicked_city_across_globe",
                category: c.E0.HOME,
                canonical_name: n,
              }),
                (0, d.pr)({
                  action: "clicked_popular_city_card",
                  category: c.E0.HOME,
                  label: "".concat(t, " - ").concat(n),
                });
            },
            className: o.container,
            href: i,
            target: "_blank",
            children: [
              (0, r.jsx)("img", {
                src: a,
                alt: "".concat(n, " background"),
                className: o.image,
                loading: "lazy",
              }),
              (0, r.jsx)(p.Text, { className: o.title, children: n }),
            ],
          });
        },
        k = {
          overflowX: "auto",
          overflowY: "hidden",
          padding: "0 16px",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
        C = (0, p.createStyles)(function (e, n) {
          var a = n.withCompactGrid;
          return {
            main: (0, h.Z)(
              { overflow: "hidden", margin: "28px -16px 0 -16px" },
              e.fn.largerThan("md"),
              { margin: "32px 0px 0 0px", overflow: "visible" }
            ),
            gridMobile: (0, t.Z)(
              (0, i.Z)({}, k),
              (0, h.Z)({ marginTop: 12 }, e.fn.largerThan("md"), {
                display: "none",
              })
            ),
            gridDesktop: (0, t.Z)(
              (0, i.Z)({}, k),
              (0, h.Z)({ display: "none" }, e.fn.largerThan("md"), {
                display: "block",
                padding: 0,
                overflow: "visible",
              })
            ),
            countriesContainer: (0, h.Z)(
              {
                flexWrap: "nowrap",
                overflow: "auto",
                overflowY: "hidden",
                padding: "0 16px",
                gap: 8,
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              },
              e.fn.largerThan("md"),
              { padding: 0 }
            ),
            cardsContainer: (0, t.Z)(
              (0, i.Z)({ minWidth: a ? 0 : 1030 }, a && { flexBasis: 346 }),
              (0, h.Z)(
                { marginTop: 20, position: "relative" },
                e.fn.largerThan("md"),
                {
                  height: "100%",
                  width: "100%",
                  marginTop: 20,
                  minWidth: 0,
                  flexBasis: "auto",
                }
              )
            ),
            viewAllCitiesBtn: (0, h.Z)(
              { margin: "24px 16px 0 16px", fontWeight: 500 },
              e.fn.largerThan("md"),
              {
                marginTop: 0,
                margin: "32px auto 0 auto",
                width: 176,
                height: 52,
                padding: 16,
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "125%",
                letterSpacing: "0.024px",
                textAlign: "center",
              }
            ),
            arrowIcon: { fontSize: 14.2, transform: "rotate(45deg)" },
            carouselArrow: (0, h.Z)(
              { display: "none" },
              e.fn.largerThan("md"),
              {
                padding: 4,
                background: "white",
                height: 36,
                width: 36,
                position: "absolute",
                borderRadius: "100%",
                top: "50%",
                zIndex: 1,
                border: "1px solid ".concat(e.colors.neutral[3]),
                boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 0.12)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                i: {
                  fontSize: 14,
                  fontWeight: 900,
                  color: e.colors.neutral[9],
                },
              }
            ),
            carouselArrowLeft: { transform: "translate(-50%, -50%)" },
            carouselArrowRight: { right: 0, transform: "translate(50%, -50%)" },
          };
        }),
        b = function (e) {
          var n,
            a,
            h,
            m = e.isMobile,
            _ = (0, o.useState)(0),
            k = _[0],
            b = _[1],
            v = (0, o.useState)("United Kingdom"),
            E = v[0],
            w = v[1],
            L = (0, o.useRef)(null),
            I = m ? void 0 : 12,
            S = function (e) {
              return function () {
                "next" === e
                  ? k + I >= s.ah.length
                    ? b(0)
                    : b(function (e) {
                        return e + I;
                      })
                  : "prev" === e &&
                    b(
                      k <= 0
                        ? j.length - (j.length % I)
                        : function (e) {
                            return e - I;
                          }
                    );
              };
            },
            j =
              null ===
                (n = l.jG.find(function (e) {
                  return e.name === E;
                })) || void 0 === n
                ? void 0
                : n.popular_cities,
            T =
              (null ===
                (h =
                  null ===
                    (a = j.map(function (e) {
                      return (0,
                      t.Z)((0, i.Z)({}, e), { link: (0, g.s7)((null === e || void 0 === e ? void 0 : e.canonical_name) || ""), image: ((n = (null === e || void 0 === e ? void 0 : e.image) || "https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/london-2.jpg"), "".concat(n, "?w=250&h=250&fit=crop&auto=format&trim=auto&q=10&fm=pjpg") || 0) });
                      var n;
                    })) || void 0 === a
                    ? void 0
                    : a.slice(k)) || void 0 === h
                ? void 0
                : h.slice(0, I)) || [],
            N = j.length >= I,
            A = function (e) {
              var n;
              ((0, d.pr)({
                action: "clicked_country_across_globe",
                category: c.E0.HOME,
                country_name: e,
              }),
              L && L.current) &&
                (null === (n = L.current) ||
                  void 0 === n ||
                  n.scrollTo({ left: 0, behavior: "smooth" }));
              b(0), w(e);
            },
            y = T.length <= 4,
            D = C({ withCompactGrid: y }),
            K = D.classes,
            O = D.cx;
          return (0, r.jsx)(u.h, {
            title: "Popular Cities Across the Globe",
            subtitle:
              "Book student accommodations near top cities and universities around the world",
            background: "#fff",
            dataTestId: "popular-cities-section",
            children: (0, r.jsxs)(p.Flex, {
              className: K.main,
              children: [
                (0, r.jsx)(p.Group, {
                  className: K.countriesContainer,
                  children: l.jG.map(function (e) {
                    return (0,
                    r.jsx)(f, { name: null === e || void 0 === e ? void 0 : e.name, icon: null === e || void 0 === e ? void 0 : e.icon, onClick: A, isActive: (null === e || void 0 === e ? void 0 : e.name) === E }, null === e || void 0 === e ? void 0 : e.name);
                  }),
                }),
                m
                  ? (0, r.jsxs)(p.Group, {
                      spacing: 8,
                      className: K.gridMobile,
                      ref: L,
                      children: [
                        (0, r.jsx)(p.Group, {
                          spacing: 8,
                          noWrap: !0,
                          children: T.slice(0, Math.ceil(T.length / 2)).map(
                            function (e) {
                              return (0, r.jsx)(
                                x,
                                {
                                  name: e.name,
                                  imageSrc: e.image,
                                  link: e.link,
                                  country: E,
                                },
                                e.name
                              );
                            }
                          ),
                        }),
                        (0, r.jsx)(p.Group, {
                          spacing: 8,
                          noWrap: !0,
                          children: T.slice(Math.ceil(T.length / 2)).map(
                            function (e) {
                              return (0, r.jsx)(
                                x,
                                {
                                  name: e.name,
                                  imageSrc: e.image,
                                  link: e.link,
                                  country: E,
                                },
                                e.name
                              );
                            }
                          ),
                        }),
                      ],
                    })
                  : (0, r.jsx)(p.Group, {
                      className: K.gridDesktop,
                      ref: L,
                      children: (0, r.jsxs)(p.Grid, {
                        gutter: 8,
                        gutterLg: 16,
                        className: K.cardsContainer,
                        children: [
                          N &&
                            (0, r.jsx)("span", {
                              role: "navigation",
                              className: O(
                                K.carouselArrow,
                                K.carouselArrowLeft
                              ),
                              onClick: S("prev"),
                              children: (0, r.jsx)("i", {
                                className: "icon-arrow-left",
                              }),
                            }),
                          T.map(function (e) {
                            return (0,
                            r.jsx)(p.GridCol, { span: y ? "auto" : 2, md: 2, children: (0, r.jsx)(x, { name: e.name, imageSrc: e.image, link: e.link, country: E }) }, e.name);
                          }),
                          N &&
                            (0, r.jsx)("span", {
                              role: "navigation",
                              className: O(
                                K.carouselArrow,
                                K.carouselArrowRight
                              ),
                              onClick: S("next"),
                              children: (0, r.jsx)("i", {
                                className: "icon-arrow-right",
                              }),
                            }),
                        ],
                      }),
                    }),
                (0, r.jsx)(p.Button, {
                  component: "a",
                  target: "_blank",
                  color: "primary.4",
                  variant: "secondary",
                  href: "/places/search",
                  rightIcon: (0, r.jsx)("i", {
                    className: "icon-arrow-diagonal-red ".concat(K.arrowIcon),
                  }),
                  className: K.viewAllCitiesBtn,
                  onClick: function () {
                    (0, d.pr)({
                      action: "clicked_view_all_cities",
                      category: c.E0.HOME,
                    });
                  },
                  children: "View All Cities",
                }),
              ],
            }),
          });
        };
    },
    26793: function (e, n, a) {
      a.d(n, {
        h: function () {
          return d;
        },
      });
      var i = a(52322),
        t = a(62595),
        r = a(47842),
        o = (0, t.createStyles)(function (e) {
          return {
            container: (0, r.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, r.Z)(
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
            subtitle: (0, r.Z)(
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
        c = function (e) {
          var n = e.title,
            a = e.subtitle,
            r = o().classes;
          return (0, i.jsxs)(t.Flex, {
            className: r.container,
            children: [
              (0, i.jsx)(t.Title, {
                order: 2,
                className: r.title,
                children: n,
              }),
              a && (0, i.jsx)(t.Text, { className: r.subtitle, children: a }),
            ],
          });
        },
        l = a(70016),
        s = (0, t.createStyles)(function (e, n) {
          var a,
            i = n.background;
          return {
            container: {
              backgroundColor:
                null !== i && void 0 !== i ? i : e.colors.neutral[0],
            },
            innerContainer:
              ((a = { padding: "32px 16px" }),
              (0, r.Z)(a, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, r.Z)(a, e.fn.largerThan(l.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, r.Z)(a, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, r.Z)(a, e.fn.largerThan(1601), { padding: "56px 0" }),
              a),
          };
        }),
        d = function (e) {
          var n = e.title,
            a = e.subtitle,
            r = e.children,
            o = e.background,
            l = e.innerClassName,
            d = s({ background: o }).classes,
            g = n || a;
          return (0, i.jsx)(t.Flex, {
            className: d.container,
            children: (0, i.jsxs)(t.Flex, {
              className: "".concat(d.innerContainer, " ").concat(l),
              children: [g && (0, i.jsx)(c, { title: n, subtitle: a }), r],
            }),
          });
        };
    },
    70016: function (e, n, a) {
      a.d(n, {
        EG: function () {
          return r;
        },
        GH: function () {
          return o;
        },
        Kc: function () {
          return c;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return d;
        },
        tj: function () {
          return l;
        },
        wD: function () {
          return g;
        },
      });
      var i = a(8388),
        t = a.n(i),
        r = "e1affeb13de9140",
        o = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        c = {
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
        l = "https://m.me/amberstudent",
        s = 1441,
        d = "".concat(
          t().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        g = "".concat(
          t().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/2531.2b9cdce4048cbb09.js.map
