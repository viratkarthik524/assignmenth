"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5912, 16],
  {
    65912: function (e, i, n) {
      n.r(i),
        n.d(i, {
          FeaturesSection: function () {
            return j;
          },
        });
      var t,
        r,
        o,
        a,
        l,
        s,
        c = n(52322),
        d = n(2784),
        u = n(62595),
        h = n(26793),
        g = n(47842),
        f = n(70865),
        m = n(96670),
        p = {
          primary:
            "radial-gradient(50% 50.00% at 50.00% 50.00%, rgba(237, 58, 86, 0.08) 0%, rgba(237, 58, 86, 0.00) 100%)",
          secondary:
            "radial-gradient(50% 50.00% at 50.00% 50.00%, rgba(132, 225, 188, 0.10) 0%, rgba(132, 225, 188, 0.00) 100%)",
        },
        x = (0, u.createStyles)(function (e, i) {
          var n = i.gradient,
            c = i.isCompact,
            d = i.icon,
            u = i.isLink,
            h = void 0 !== u && u;
          return {
            container: (0, m.Z)(
              (0, f.Z)(
                {
                  padding: "0px 12px",
                  minWidth: 234,
                  maxWidth: 234,
                  background: p[n],
                  "&:first-of-type": (0, g.Z)(
                    { marginLeft: 16 },
                    e.fn.largerThan("lg"),
                    { marginLeft: 0 }
                  ),
                  "&:last-of-type": (0, g.Z)(
                    { marginRight: 16 },
                    e.fn.largerThan("lg"),
                    { marginRight: 0 }
                  ),
                },
                h && { cursor: "pointer" },
                c && {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 0,
                }
              ),
              (0, g.Z)({}, e.fn.largerThan("lg"), {
                minWidth: 252,
                maxWidth: 252,
                fontSize: 18,
              })
            ),
            icon: (0, m.Z)(
              (0, f.Z)(
                {
                  height:
                    null !==
                      (t = null === d || void 0 === d ? void 0 : d.height) &&
                    void 0 !== t
                      ? t
                      : 42,
                  width:
                    null !==
                      (r = null === d || void 0 === d ? void 0 : d.width) &&
                    void 0 !== r
                      ? r
                      : 42,
                },
                c && {
                  height:
                    null !==
                      (o = null === d || void 0 === d ? void 0 : d.height) &&
                    void 0 !== o
                      ? o
                      : 32,
                  width:
                    null !==
                      (a = null === d || void 0 === d ? void 0 : d.width) &&
                    void 0 !== a
                      ? a
                      : 32,
                }
              ),
              (0, g.Z)({}, e.fn.largerThan("lg"), {
                height:
                  null !==
                    (l = null === d || void 0 === d ? void 0 : d.height) &&
                  void 0 !== l
                    ? l
                    : 46,
                width:
                  null !==
                    (s = null === d || void 0 === d ? void 0 : d.width) &&
                  void 0 !== s
                    ? s
                    : 46,
              })
            ),
            title: (0, g.Z)(
              {
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "150%",
                color: e.colors.neutral[7],
                marginTop: c ? 8 : 16,
              },
              e.fn.largerThan("lg"),
              { fontSize: 20, fontWeight: 700, lineHeight: "25px" }
            ),
            description: (0, m.Z)(
              (0, f.Z)(
                {
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: "150%",
                  letterSpacing: "0.048px",
                  color: e.colors.neutral[5],
                  marginTop: c ? 2 : 4,
                },
                c && { textWrap: "nowrap" }
              ),
              (0, g.Z)({}, e.fn.largerThan("lg"), {
                lineHeight: "25px",
                fontSize: 14,
                marginTop: 8,
              })
            ),
          };
        }),
        C = function (e) {
          var i = e.title,
            n = e.description,
            t = e.icon,
            r = e.gradient,
            o = void 0 === r ? "primary" : r,
            a = e.isCompact,
            l = void 0 !== a && a,
            s = e.link,
            d = x({ gradient: o, isCompact: l, icon: t, isLink: s }).classes;
          return (0, c.jsxs)(u.Flex, {
            className: d.container,
            onClick: function () {
              s &&
                window &&
                (null === window ||
                  void 0 === window ||
                  window.open(s, "_blank"));
            },
            children: [
              (0, c.jsx)("img", { src: t.src, alt: i, className: d.icon }),
              (0, c.jsx)(u.Title, {
                className: d.title,
                order: 6,
                children: i,
              }),
              (0, c.jsx)(u.Text, { className: d.description, children: n }),
            ],
          });
        },
        _ = n(2128),
        v = n(14322),
        b = function (e) {
          var i = e.title,
            n = e.icon,
            t = e.description,
            r = e.gradient,
            o = e.isCompact,
            a = (0, d.useState)(!1),
            l = a[0],
            s = a[1],
            h = function () {
              s(!1);
            };
          return (0, c.jsxs)(c.Fragment, {
            children: [
              l &&
                (0, c.jsx)(_.L, {
                  title: "Price Match Guarantee",
                  opened: !0,
                  onClose: h,
                  centered: !0,
                  actions: [{ description: "Okay, got it", action: h }],
                  children: (0, c.jsx)(v.t, {}),
                }),
              (0, c.jsx)(C, {
                title: i,
                description: (0, c.jsxs)(c.Fragment, {
                  children: [
                    t,
                    "\xa0",
                    (0, c.jsx)(u.Anchor, {
                      onClick: function (e) {
                        e.preventDefault(), s(!0);
                      },
                      underline: !0,
                      size: "xs",
                      fw: 700,
                      color: "neutral.7",
                      display: "inline-block",
                      children: "Learn More",
                    }),
                  ],
                }),
                icon: n,
                gradient: r,
                isCompact: o,
              }),
            ],
          });
        },
        k = (0, u.createStyles)(function (e, i) {
          var n = i.withHeader;
          return {
            cardsContainer: (0, m.Z)(
              (0, f.Z)({}, n && { marginTop: 28 }),
              (0, g.Z)(
                {
                  gap: 12,
                  flexWrap: "nowrap",
                  overflow: "auto",
                  marginLeft: -16,
                  marginRight: -16,
                  alignItems: "flex-start",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                },
                e.fn.largerThan("lg"),
                (0, m.Z)((0, f.Z)({}, n && { marginTop: 48 }), {
                  justifyContent: "space-between",
                  marginLeft: 0,
                  marginRight: 0,
                })
              )
            ),
          };
        }),
        j = function (e) {
          var i = e.title,
            n = e.subtitle,
            t = e.list,
            r = e.isCompact,
            o = void 0 !== r && r,
            a = k({ withHeader: i && n, isCompact: o }).classes;
          return (0, c.jsx)(h.h, {
            background: "#fff",
            title: i,
            subtitle: n,
            children: (0, c.jsx)(u.Group, {
              className: a.cardsContainer,
              children: t.map(function (e) {
                var i = e.title,
                  n = e.description,
                  t = e.icon,
                  r = e.gradient,
                  a = e.link,
                  l = e.isPriceMatchSection;
                return (0,
                c.jsx)(d.Fragment, { children: l ? (0, c.jsx)(b, { title: i, description: n, icon: t, gradient: r, isCompact: o }) : (0, c.jsx)(C, { title: i, description: n, icon: t, gradient: r, isCompact: o, link: a }) }, i);
              }),
            }),
          });
        };
    },
    2128: function (e, i, n) {
      n.d(i, {
        L: function () {
          return m;
        },
      });
      var t = n(70865),
        r = n(96670),
        o = n(26297),
        a = n(52322),
        l = n(62595),
        s = function (e) {
          var i = e.children,
            n = e.variant,
            t = e.onClick,
            r = e.color;
          return (0, a.jsx)(l.Button, {
            old: !("primary" === n),
            color: r,
            variant: n,
            size: "md",
            m: 0,
            fz: 16,
            lh: "100%",
            onClick: t,
            fullWidth: !0,
            sx: function (e) {
              return {
                ":focus-visible": { outlineColor: e.colors.secondary[6] },
              };
            },
            children: i,
          });
        },
        c = (0, l.createStyles)(function (e) {
          return {
            root: { ":focus-visible": { outlineColor: e.colors.secondary[6] } },
            inner: { height: 48, width: 48 },
          };
        }),
        d = function (e) {
          var i = e.actions,
            n = void 0 === i ? [] : i,
            t = e.color,
            r = e.variant,
            o = c().classes;
          return (0, a.jsxs)(l.Flex, {
            gap: 12,
            children: [
              (0, a.jsx)(l.Divider, { color: "neutral.2", mx: "-24px" }),
              n[2] &&
                (0, a.jsx)(l.Button, {
                  old: !0,
                  color: "neutral.6",
                  variant: "outline",
                  size: "md",
                  p: 0,
                  lh: "100%",
                  onClick: n[2].action,
                  classNames: { root: o.root, inner: o.inner },
                  children: n[2].description,
                }),
              n[1] &&
                (0, a.jsx)(s, {
                  variant: "outline",
                  color: t,
                  onClick: n[1].action,
                  children: n[1].description,
                }),
              n[0] &&
                (0, a.jsx)(s, {
                  color: t,
                  onClick: n[0].action,
                  variant: r,
                  children: n[0].description,
                }),
            ],
          });
        },
        u = n(22783),
        h = function (e) {
          var i = e.heading,
            n = e.subheading,
            t = (0, l.isMobileView)();
          return (0, a.jsxs)(l.Box, {
            pb: 20,
            children: [
              t && (0, a.jsx)(u.O, {}),
              (0, a.jsx)(l.Title, {
                order: 5,
                fw: 600,
                lts: "0.0015em",
                lh: "125%",
                children: i,
              }),
              (0, a.jsx)(l.Text, {
                size: 12,
                fw: 600,
                color: "neutral.5",
                lh: "150%",
                children: n,
              }),
            ],
          });
        },
        g = n(47842),
        f = (0, l.createStyles)(function (e) {
          var i;
          return {
            close: {
              position: "absolute",
              right: 0,
              top: 0,
              margin: e.spacing.lg,
              borderRadius: "100%",
              backgroundColor: e.colors.neutral[1],
              outlineColor: e.colors.secondary[6],
              outline: "none",
              border: "none",
              ":focus-visible": { outlineColor: e.colors.secondary[6] },
            },
            header: { margin: 0 },
            modal: {
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderRadius: "8px 8px 0 0",
            },
            panel:
              ((i = {
                paddingBottom: 20,
                maxHeight: 400,
                overflowY: "auto",
                paddingRight: 16,
              }),
              (0, g.Z)(i, e.fn.smallerThan("md"), { maxHeight: "70vh" }),
              (0, g.Z)(i, "ul li", { listStyle: "disc", marginLeft: 20 }),
              (0, g.Z)(i, "ol li", { listStyle: "decimal", marginLeft: 20 }),
              i),
          };
        }),
        m = function (e) {
          var i = e.title,
            n = e.subtitle,
            s = e.actions,
            c = e.children,
            u = e.color,
            g = void 0 === u ? "secondary.5" : u,
            m = e.opened,
            p = e.onClose,
            x = e.size,
            C = void 0 === x ? 487 : x,
            _ = e.withCloseButton,
            v = void 0 === _ || _,
            b = e.variant,
            k = (0, o.Z)(e, [
              "title",
              "subtitle",
              "actions",
              "children",
              "color",
              "opened",
              "onClose",
              "size",
              "withCloseButton",
              "variant",
            ]),
            j = f().classes,
            L = (0, l.isMobileView)();
          return (0, a.jsxs)(
            l.Modal,
            (0, r.Z)(
              (0, t.Z)(
                {
                  title: (0, a.jsx)(h, { heading: i, subheading: n }),
                  size: C,
                  opened: m,
                  onClose: p,
                  withCloseButton: !L && v,
                  padding: 24,
                  classNames: (0, t.Z)(
                    { close: j.close, header: j.header },
                    L && { modal: j.modal }
                  ),
                  zIndex: 550,
                },
                k
              ),
              {
                children: [
                  (0, a.jsx)(l.Box, {
                    fz: 14,
                    fw: 400,
                    lh: "150%",
                    className: j.panel,
                    children: c,
                  }),
                  (0, a.jsx)(d, { actions: s, color: g, variant: b }),
                ],
              }
            )
          );
        };
    },
    22783: function (e, i, n) {
      n.d(i, {
        O: function () {
          return o;
        },
      });
      var t = n(52322),
        r = n(62595),
        o = function () {
          return (0, t.jsx)(r.Divider, {
            size: "lg",
            sx: function () {
              return {
                position: "absolute",
                width: 36,
                borderRadius: 100,
                top: 4,
                left: "50%",
                transform: "translate(-50%)",
              };
            },
          });
        };
    },
    14322: function (e, i, n) {
      n.d(i, {
        t: function () {
          return l;
        },
      });
      var t = n(52322),
        r = n(2784),
        o = n(62595),
        a = (0, o.createStyles)(function () {
          return {
            readMoreButton: {
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
              ":focus-visible": { outlineColor: "transparent" },
            },
          };
        }),
        l = function () {
          var e = (0, r.useState)(!1),
            i = e[0],
            n = e[1],
            l = a().classes;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.Box, {
                my: 10,
                children: (0, t.jsxs)(o.List, {
                  mb: 50,
                  size: "sm",
                  children: [
                    (0, t.jsx)(o.List.Item, {
                      children:
                        "If you find your choice of accommodation available at a lower price on any other website, we will match that price.",
                    }),
                    (0, t.jsx)(o.List.Item, {
                      children:
                        "This includes group booking discounts, incentives and 'Refer a Friend' offers.",
                    }),
                  ],
                }),
              }),
              i &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(o.Box, {
                      m: 10,
                      children: [
                        (0, t.jsx)(o.Text, {
                          children:
                            "We will match other website\u2019s prices provided:",
                        }),
                        (0, t.jsxs)(o.List, {
                          mb: 30,
                          size: "sm",
                          children: [
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "The property and accommodation type on offer is the same.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children: "The tenancy length is the same.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "For group booking discounts, the group size is the same.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "For refer a friend offers, the number of friends makes a booking is the same.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "The other website\u2019s price is a genuine offer (as determined solely by http://amberstudent.com).",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(o.Box, {
                      m: 10,
                      mt: 10,
                      children: [
                        (0, t.jsx)(o.Text, {
                          children:
                            "In order to claim your price match you will need to do the following:",
                        }),
                        (0, t.jsxs)(o.List, {
                          mb: 30,
                          size: "sm",
                          children: [
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "Provide us with a link to the competing offer.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "We will check to make sure that it is online, available at the time of booking, and meets the above requirements.",
                            }),
                            (0, t.jsx)(o.List.Item, {
                              children:
                                "Upon confirmation, we will add the offer to your account.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)(o.Button, {
                old: !0,
                variant: "subtle",
                color: "primary.5",
                onClick: function () {
                  return n(function (e) {
                    return !e;
                  });
                },
                className: l.readMoreButton,
                children: i ? "Read Less" : "Read More",
              }),
            ],
          });
        };
    },
    26793: function (e, i, n) {
      n.d(i, {
        h: function () {
          return d;
        },
      });
      var t = n(52322),
        r = n(62595),
        o = n(47842),
        a = (0, r.createStyles)(function (e) {
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
          var i = e.title,
            n = e.subtitle,
            o = a().classes;
          return (0, t.jsxs)(r.Flex, {
            className: o.container,
            children: [
              (0, t.jsx)(r.Title, {
                order: 2,
                className: o.title,
                children: i,
              }),
              n && (0, t.jsx)(r.Text, { className: o.subtitle, children: n }),
            ],
          });
        },
        s = n(70016),
        c = (0, r.createStyles)(function (e, i) {
          var n,
            t = i.background;
          return {
            container: {
              backgroundColor:
                null !== t && void 0 !== t ? t : e.colors.neutral[0],
            },
            innerContainer:
              ((n = { padding: "32px 16px" }),
              (0, o.Z)(n, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, o.Z)(n, e.fn.largerThan(s.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, o.Z)(n, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, o.Z)(n, e.fn.largerThan(1601), { padding: "56px 0" }),
              n),
          };
        }),
        d = function (e) {
          var i = e.title,
            n = e.subtitle,
            o = e.children,
            a = e.background,
            s = e.innerClassName,
            d = c({ background: a }).classes,
            u = i || n;
          return (0, t.jsx)(r.Flex, {
            className: d.container,
            children: (0, t.jsxs)(r.Flex, {
              className: "".concat(d.innerContainer, " ").concat(s),
              children: [u && (0, t.jsx)(l, { title: i, subtitle: n }), o],
            }),
          });
        };
    },
    70016: function (e, i, n) {
      n.d(i, {
        EG: function () {
          return o;
        },
        GH: function () {
          return a;
        },
        Kc: function () {
          return l;
        },
        d: function () {
          return c;
        },
        t_: function () {
          return d;
        },
        tj: function () {
          return s;
        },
        wD: function () {
          return u;
        },
      });
      var t = n(8388),
        r = n.n(t),
        o = "e1affeb13de9140",
        a = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        s = "https://m.me/amberstudent",
        c = 1441,
        d = "".concat(
          r().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        u = "".concat(
          r().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/5912.1cc2eb1f462d3c05.js.map
