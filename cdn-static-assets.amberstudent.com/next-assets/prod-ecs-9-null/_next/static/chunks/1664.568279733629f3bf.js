"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1664, 1695, 7448, 16],
  {
    61695: function (n, e, t) {
      t.d(e, {
        J: function () {
          return d;
        },
      });
      var a = t(98788),
        c = t(50853),
        i = t(8388),
        l = t.n(i),
        o = t(35590),
        r = t(139),
        s = t.n(r),
        u = t(49705),
        h = t.n(u),
        d = (function () {
          var n = (0, a.Z)(function () {
            var n, e, t, a;
            return (0, c.__generator)(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    c.trys.push([0, 2, , 3]),
                    (e = h()(
                      l().urls.web_service_url,
                      "/places/getCountryData"
                    )),
                    [4, s().get(e)]
                  );
                case 1:
                  return (
                    (t = c.sent()),
                    [
                      2,
                      (null === t ||
                      void 0 === t ||
                      null === (n = t.body) ||
                      void 0 === n
                        ? void 0
                        : n.country) || "GB",
                    ]
                  );
                case 2:
                  return (
                    (a = c.sent()),
                    o.r.error("Error fetching country data:", a),
                    [2, "GB"]
                  );
                case 3:
                  return [2];
              }
            });
          });
          return function () {
            return n.apply(this, arguments);
          };
        })();
    },
    11664: function (n, e, t) {
      t.r(e),
        t.d(e, {
          ContactDetailsV2: function () {
            return T;
          },
        });
      var a = t(98788),
        c = t(50930),
        i = t(50853),
        l = t(52322),
        o = t(2784),
        r = t(8388),
        s = t(99333),
        u = t(24291),
        h = t(61695),
        d = t(62595),
        p = t(26793),
        f = t(70016),
        g = t(47842),
        _ = t(70865),
        C = t(1082),
        x = (0, C.kc)(function (n, e) {
          var t = e.highlight,
            a = e.color,
            c = e.isChinaApp;
          return {
            contactCard: (0, g.Z)(
              {
                border: "1px solid ".concat(t ? n.colors[a][2] : "#F3F4F6"),
                background: "#ffffff",
                borderRadius: "12px",
                height: 88,
                width: 165,
                position: "relative",
                padding: "20px 0",
                gap: 8,
              },
              n.fn.largerThan("md"),
              { height: 117, gap: 12, padding: "24px 0" }
            ),
            contactSubtitle: (0, g.Z)(
              { fontSize: "16px", lineHeight: "21px" },
              n.fn.largerThan("md"),
              { lineHeight: "30px", fontSize: "18px" }
            ),
            contactCardBadge: (0, g.Z)(
              {
                color: "#fff",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: 12,
                border: "1px solid",
                width: 104,
                padding: "4px",
                borderRadius: 4,
              },
              n.fn.largerThan("md"),
              { padding: "4px 8px", width: 114 }
            ),
            contactCardBadgeCircle: {
              display: "inline-block",
              borderRadius: "50%",
              height: "7px",
              width: "7px",
              background: "#fff",
            },
            anchorTag: {
              position: "relative",
              "&:hover": (0, _.Z)(
                { textDecoration: "none" },
                c &&
                  (0, g.Z)({}, n.fn.largerThan("md"), {
                    "& .weChat-qr": { display: "block" },
                  })
              ),
            },
            contactCardIcon: (0, g.Z)(
              { fontSize: "22px" },
              n.fn.largerThan("md"),
              { fontSize: "36px" }
            ),
            customTooltip: {
              display: "none",
              position: "absolute",
              backgroundColor: "#000",
              padding: 12,
              borderRadius: n.radius.sm,
              bottom: 130,
            },
          };
        }),
        m = function (n) {
          var e = n.link,
            t = n.icon,
            a = n.label,
            c = n.highlight,
            i = void 0 === c ? "" : c,
            o = n.onClick,
            s = n.color,
            u = void 0 === s ? "secondary" : s,
            h = n.showTooltip,
            p = void 0 !== h && h,
            g = r.global.isChinaApp,
            _ = x({ color: u, highlight: i, isChinaApp: g }).classes;
          return (0, l.jsxs)(d.Anchor, {
            className: _.anchorTag,
            target: "_blank",
            href: e,
            bg: "neutral.0",
            onClick: o,
            children: [
              (0, l.jsxs)(d.Flex, {
                className: _.contactCard,
                direction: "column",
                justify: "center",
                align: "center",
                children: [
                  (0, l.jsx)(d.ActionIcon, {
                    variant: "subtle",
                    color: "secondary.4",
                    className: _.contactCardIcon,
                    "aria-labelledby": "contact-card-label",
                    children: t,
                  }),
                  (0, l.jsx)(d.Text, {
                    id: "contact-card-label",
                    fz: 14,
                    color: "neutral.6",
                    children: a,
                  }),
                  i &&
                    (0, l.jsxs)(d.Text, {
                      span: !0,
                      className: _.contactCardBadge,
                      bg: "".concat(u, ".4"),
                      children: [
                        (0, l.jsx)(d.Text, {
                          span: !0,
                          className: _.contactCardBadgeCircle,
                        }),
                        " ",
                        i,
                      ],
                    }),
                ],
              }),
              g &&
                p &&
                (0, l.jsxs)(d.Box, {
                  className: "weChat-qr ".concat(_.customTooltip),
                  children: [
                    (0, l.jsx)(d.Text, {
                      mb: 10,
                      lh: "21px",
                      fw: 400,
                      fz: 14,
                      color: "#fff",
                      children: "Scan and connect with us on WeChat",
                    }),
                    (0, l.jsx)("img", { src: f.t_ }),
                  ],
                }),
            ],
          });
        },
        b = (0, C.kc)(function (n) {
          var e, t;
          return {
            sectionWrapper:
              ((e = { alignItems: "baseline" }),
              (0, g.Z)(e, n.fn.smallerThan("md"), {
                flexDirection: "column",
                gap: "28px",
              }),
              (0, g.Z)(e, n.fn.smallerThan(1370), { gap: "28px" }),
              e),
            contactSubtitle: (0, g.Z)(
              { fontSize: "14px", lineHeight: "21px" },
              n.fn.largerThan("md"),
              { lineHeight: "30px", fontSize: "20px" }
            ),
            cardWrapper:
              ((t = {
                flexGrow: 1,
                gap: 16,
                justifyContent: "flex-start",
                marginTop: 16,
              }),
              (0, g.Z)(t, n.fn.largerThan("md"), { gap: 24, marginTop: 0 }),
              (0, g.Z)(t, n.fn.largerThan(1370), {
                justifyContent: "flex-end",
              }),
              t),
            row: (0, g.Z)(
              { justifyContent: "center", gap: 12 },
              n.fn.largerThan("md"),
              { justifyContent: "flex-start", gap: 24 }
            ),
            titleText: (0, g.Z)({ fontSize: "18px" }, n.fn.largerThan("md"), {
              lineHeight: "30px",
              fontSize: "24px",
              fontWeight: 700,
            }),
            chatIcon: { color: "#EC6F7F" },
            emailIcon: { color: n.colors.warning[4] },
            phoneIcon: { color: n.colors.info[5] },
          };
        }),
        k = function (n) {
          var e = n.data,
            t = b().classes;
          return (0, l.jsx)(d.Flex, {
            direction: "row",
            wrap: "wrap",
            align: "center",
            className: t.row,
            children: e.map(function (n) {
              var e = n.label,
                t = n.icon,
                a = n.highlight,
                c = n.color,
                i = n.link,
                o = n.onClick,
                r = n.showTooltip;
              return (0,
              l.jsx)(m, { label: e, icon: t, link: i, highlight: a, color: c, onClick: o, showTooltip: r }, e);
            }),
          });
        },
        T = function () {
          var n = b().classes,
            e = function (n) {
              (0, u.pr)({
                action: "need_help_card_clicked",
                category: s.E0.HOME,
                label: n,
              });
            },
            t = [
              {
                label: "Live Chat",
                highlight: "2 Mins Reply",
                onClick: function () {
                  (0, u._4)(!0),
                    (0, u.pr)({
                      action: "need_help_card_clicked",
                      category: s.E0.HOME,
                      label: "Live Chat",
                    });
                },
                icon: (0, l.jsx)("i", {
                  className: "icon-message-smile-light ".concat(n.chatIcon),
                }),
                color: "primary",
              },
              r.global.isChinaApp
                ? {
                    label: "Chat on WeChat",
                    highlight: "2 Mins Reply",
                    onClick: function () {
                      e("Chat on WeChat");
                    },
                    link: s.mx,
                    icon: (0, l.jsx)("i", {
                      className: "icon-wechat-green-outline ".concat(
                        n.whatsappIcon
                      ),
                    }),
                    showTooltip: !0,
                  }
                : {
                    label: "Chat on Whatsapp",
                    highlight: "2 Mins Reply",
                    onClick: function () {
                      e("Chat on Whatsapp");
                    },
                    link: s.s7,
                    icon: (0, l.jsx)("i", {
                      className: "icon-whatsapp ".concat(n.whatsappIcon),
                    }),
                  },
            ],
            f = [
              {
                label: "Email Us",
                onClick: function () {
                  e("Email Us");
                },
                link: "mailto:".concat(s.rg),
                icon: (0, l.jsx)("i", {
                  className: "icon-envelope ".concat(n.emailIcon),
                }),
              },
            ],
            g = (0, o.useState)(f),
            _ = g[0],
            C = g[1];
          return (
            (0, o.useEffect)(function () {
              var t = (function () {
                var t = (0, a.Z)(function () {
                  var t, a, o, r, u, d, p;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, (0, h.J)()];
                      case 1:
                        switch (
                          ((t = i.sent()),
                          (a = {
                            label: s._8.full_number,
                            onClick: function () {
                              e(s._8.full_number);
                            },
                            link: "tel:".concat(s._8.full_number),
                            icon: (0, l.jsx)("i", {
                              className: "icon-phone ".concat(n.phoneIcon),
                            }),
                          }),
                          (o = {
                            label: s.jb.full_number,
                            onClick: function () {
                              e(s.jb.full_number);
                            },
                            link: "tel:".concat(s.jb.full_number),
                            icon: (0, l.jsx)("i", {
                              className: "icon-phone ".concat(n.phoneIcon),
                            }),
                          }),
                          (r = {
                            label: s.vt.full_number,
                            onClick: function () {
                              e(s.vt.full_number);
                            },
                            link: "tel:".concat(s.vt.full_number),
                            icon: (0, l.jsx)("i", {
                              className: "icon-phone ".concat(n.phoneIcon),
                            }),
                          }),
                          (u = {
                            label: s.g8.full_number,
                            onClick: function () {
                              e(s.g8.full_number);
                            },
                            link: "tel:".concat(s.g8.full_number),
                            icon: (0, l.jsx)("i", {
                              className: "icon-phone ".concat(n.phoneIcon),
                            }),
                          }),
                          t)
                        ) {
                          case "AU":
                            d = r;
                            break;
                          case "US":
                            d = o;
                            break;
                          case "IN":
                            d = u;
                            break;
                          default:
                            d = a;
                        }
                        return (p = (0, c.Z)(f).concat([d])), C(p), [2];
                    }
                  });
                });
                return function () {
                  return t.apply(this, arguments);
                };
              })();
              t();
            }, []),
            (0, l.jsx)(p.h, {
              children: (0, l.jsxs)(d.Flex, {
                direction: "row",
                w: "100%",
                wrap: "wrap",
                className: n.sectionWrapper,
                children: [
                  (0, l.jsxs)(d.Flex, {
                    className: n.leftContainer,
                    children: [
                      (0, l.jsx)(d.Title, {
                        order: 3,
                        className: n.titleText,
                        weight: 600,
                        color: "neutral.8",
                        children: "Need Help? Connect with us!",
                      }),
                      (0, l.jsx)(d.Text, {
                        fw: 400,
                        color: "neutral.5",
                        className: n.contactSubtitle,
                        children:
                          "Feel free to contact us in case you have any queries.",
                      }),
                    ],
                  }),
                  (0, l.jsxs)(d.Flex, {
                    className: n.cardWrapper,
                    direction: "row",
                    gap: "lg",
                    wrap: "wrap",
                    children: [
                      (0, l.jsx)(k, { data: t }),
                      (0, l.jsx)(k, { data: _ }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    26793: function (n, e, t) {
      t.d(e, {
        h: function () {
          return u;
        },
      });
      var a = t(52322),
        c = t(62595),
        i = t(47842),
        l = (0, c.createStyles)(function (n) {
          return {
            container: (0, i.Z)({ gap: 4 }, n.fn.largerThan("lg"), { gap: 8 }),
            title: (0, i.Z)(
              {
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "125%",
                letterSpacing: "0.027px",
                color: n.colors.neutral[8],
              },
              n.fn.largerThan("lg"),
              { fontSize: 24, fontWeight: 700 }
            ),
            subtitle: (0, i.Z)(
              {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.035px",
                color: n.colors.neutral[5],
              },
              n.fn.largerThan("lg"),
              { fontSize: 18 }
            ),
          };
        }),
        o = function (n) {
          var e = n.title,
            t = n.subtitle,
            i = l().classes;
          return (0, a.jsxs)(c.Flex, {
            className: i.container,
            children: [
              (0, a.jsx)(c.Title, {
                order: 2,
                className: i.title,
                children: e,
              }),
              t && (0, a.jsx)(c.Text, { className: i.subtitle, children: t }),
            ],
          });
        },
        r = t(70016),
        s = (0, c.createStyles)(function (n, e) {
          var t,
            a = e.background;
          return {
            container: {
              backgroundColor:
                null !== a && void 0 !== a ? a : n.colors.neutral[0],
            },
            innerContainer:
              ((t = { padding: "32px 16px" }),
              (0, i.Z)(t, n.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: n.breakpoints.xl,
              }),
              (0, i.Z)(t, n.fn.largerThan(r.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, i.Z)(t, n.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, i.Z)(t, n.fn.largerThan(1601), { padding: "56px 0" }),
              t),
          };
        }),
        u = function (n) {
          var e = n.title,
            t = n.subtitle,
            i = n.children,
            l = n.background,
            r = n.innerClassName,
            u = s({ background: l }).classes,
            h = e || t;
          return (0, a.jsx)(c.Flex, {
            className: u.container,
            children: (0, a.jsxs)(c.Flex, {
              className: "".concat(u.innerContainer, " ").concat(r),
              children: [h && (0, a.jsx)(o, { title: e, subtitle: t }), i],
            }),
          });
        };
    },
    70016: function (n, e, t) {
      t.d(e, {
        EG: function () {
          return i;
        },
        GH: function () {
          return l;
        },
        Kc: function () {
          return o;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return u;
        },
        tj: function () {
          return r;
        },
        wD: function () {
          return h;
        },
      });
      var a = t(8388),
        c = t.n(a),
        i = "e1affeb13de9140",
        l = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        o = {
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
        r = "https://m.me/amberstudent",
        s = 1441,
        u = "".concat(
          c().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        h = "".concat(
          c().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/1664.568279733629f3bf.js.map
