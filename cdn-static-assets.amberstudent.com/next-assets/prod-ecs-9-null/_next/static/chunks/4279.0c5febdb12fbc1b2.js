"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4279, 16],
  {
    26793: function (t, e, n) {
      n.d(e, {
        h: function () {
          return _;
        },
      });
      var r = n(52322),
        a = n(62595),
        i = n(47842),
        c = (0, a.createStyles)(function (t) {
          return {
            container: (0, i.Z)({ gap: 4 }, t.fn.largerThan("lg"), { gap: 8 }),
            title: (0, i.Z)(
              {
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "125%",
                letterSpacing: "0.027px",
                color: t.colors.neutral[8],
              },
              t.fn.largerThan("lg"),
              { fontSize: 24, fontWeight: 700 }
            ),
            subtitle: (0, i.Z)(
              {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.035px",
                color: t.colors.neutral[5],
              },
              t.fn.largerThan("lg"),
              { fontSize: 18 }
            ),
          };
        }),
        o = function (t) {
          var e = t.title,
            n = t.subtitle,
            i = c().classes;
          return (0, r.jsxs)(a.Flex, {
            className: i.container,
            children: [
              (0, r.jsx)(a.Title, {
                order: 2,
                className: i.title,
                children: e,
              }),
              n && (0, r.jsx)(a.Text, { className: i.subtitle, children: n }),
            ],
          });
        },
        s = n(70016),
        l = (0, a.createStyles)(function (t, e) {
          var n,
            r = e.background;
          return {
            container: {
              backgroundColor:
                null !== r && void 0 !== r ? r : t.colors.neutral[0],
            },
            innerContainer:
              ((n = { padding: "32px 16px" }),
              (0, i.Z)(n, t.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: t.breakpoints.xl,
              }),
              (0, i.Z)(n, t.fn.largerThan(s.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, i.Z)(n, t.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, i.Z)(n, t.fn.largerThan(1601), { padding: "56px 0" }),
              n),
          };
        }),
        _ = function (t) {
          var e = t.title,
            n = t.subtitle,
            i = t.children,
            c = t.background,
            s = t.innerClassName,
            _ = l({ background: c }).classes,
            u = e || n;
          return (0, r.jsx)(a.Flex, {
            className: _.container,
            children: (0, r.jsxs)(a.Flex, {
              className: "".concat(_.innerContainer, " ").concat(s),
              children: [u && (0, r.jsx)(o, { title: e, subtitle: n }), i],
            }),
          });
        };
    },
    34279: function (t, e, n) {
      n.r(e),
        n.d(e, {
          SectionOtherProducts: function () {
            return h;
          },
        });
      var r = n(52322),
        a = n(62595),
        i = n(26793),
        c = n(99333),
        o = n(24291),
        s = n(47842),
        l = (0, a.createStyles)(function (t, e) {
          var n = e.src;
          return {
            card: (0, s.Z)(
              {
                height: 198,
                padding: 16,
                justifyContent: "end",
                backgroundImage: "url(".concat(n.mobile, ")"),
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 8,
              },
              t.fn.largerThan("md"),
              {
                backgroundImage: "url(".concat(n.desktop, ")"),
                backgroundSize: "100% 100%",
                height: 285,
                width: "50%",
                padding: 24,
                transition: "all .3s ease-in-out",
                "&:hover": { cursor: "pointer", backgroundSize: "104% 104%" },
              }
            ),
            title: (0, s.Z)(
              { color: "white", fontSize: 16, marginBottom: 4 },
              t.fn.largerThan("md"),
              { fontSize: 24, marginBottom: 8 }
            ),
            content: (0, s.Z)(
              { color: t.colors.neutral[1], fontSize: 12, marginBottom: 18 },
              t.fn.largerThan("md"),
              { fontSize: 16, marginBottom: 24, maxWidth: "80%" }
            ),
            button: (0, s.Z)({ padding: "8px 12px" }, t.fn.largerThan("md"), {
              padding: "10px 16px",
            }),
          };
        }),
        _ = function (t) {
          var e = t.src,
            n = t.title,
            i = t.content,
            s = t.redirectTo,
            _ = t.ctaText,
            u = l({ src: e }).classes;
          return (0, r.jsxs)(a.Flex, {
            onClick: function () {
              (0, o.pr)({
                action: "".concat(
                  (0, o.PO)(n.toLowerCase(), " ", "_"),
                  "_card_clicked"
                ),
                category: c.E0.HOME,
              }),
                window.open(
                  "".concat(window.location.origin).concat(s),
                  "_blank"
                );
            },
            className: u.card,
            children: [
              (0, r.jsx)(a.Text, { fw: 700, className: u.title, children: n }),
              (0, r.jsx)(a.Text, {
                fw: 500,
                className: u.content,
                children: i,
              }),
              (0, r.jsx)(a.Button, {
                size: "sm",
                weight: 500,
                className: u.button,
                rightIcon: (0, r.jsx)("i", { className: "icon-arrow-right" }),
                w: "fit-content",
                variant: "info",
                color: "info.5",
                children: _,
              }),
            ],
          });
        },
        u = n(8388),
        d = n.n(u),
        g = [
          {
            id: 1,
            title: "Partner With Us",
            content:
              "At amber, we offer seamless booking process and a robust sales support.",
            src: {
              desktop: "".concat(
                d().app.image_static_assets_url,
                "/images/home_parter_with_us.png?auto=format&q=10"
              ),
              mobile: "".concat(
                d().app.image_static_assets_url,
                "/images/home_mobile_partner_with_us.png?auto=format&q=10"
              ),
            },
            redirectTo: "/partner",
            ctaText: "Partner With Us",
          },
          {
            id: 2,
            title: "List With Us",
            content: "List your properties efficiently with amber.",
            src: {
              desktop: "".concat(
                d().app.image_static_assets_url,
                "/images/home_list_with_us.png?auto=format&q=10"
              ),
              mobile: "".concat(
                d().app.image_static_assets_url,
                "/images/home_mobile_list_with_us.png?auto=format&q=10"
              ),
            },
            redirectTo: "/list",
            ctaText: "List Properties",
          },
        ],
        p = (0, a.createStyles)(function (t) {
          return {
            container: (0, s.Z)(
              { flexDirection: "column", gap: 16 },
              t.fn.largerThan("md"),
              { flexDirection: "row", gap: 40 }
            ),
          };
        }),
        h = function () {
          var t = p().classes;
          return (0, r.jsx)(i.h, {
            background: "#fff",
            children: (0, r.jsx)(a.Flex, {
              className: t.container,
              children: g.map(function (t) {
                var e = t.src,
                  n = t.title,
                  a = t.content,
                  i = t.ctaText,
                  c = t.redirectTo,
                  o = t.id;
                return (0,
                r.jsx)(_, { src: e, title: n, content: a, ctaText: i, redirectTo: c }, o);
              }),
            }),
          });
        };
    },
    70016: function (t, e, n) {
      n.d(e, {
        EG: function () {
          return i;
        },
        GH: function () {
          return c;
        },
        Kc: function () {
          return o;
        },
        d: function () {
          return l;
        },
        t_: function () {
          return _;
        },
        tj: function () {
          return s;
        },
        wD: function () {
          return u;
        },
      });
      var r = n(8388),
        a = n.n(r),
        i = "e1affeb13de9140",
        c = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        s = "https://m.me/amberstudent",
        l = 1441,
        _ = "".concat(
          a().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        u = "".concat(
          a().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/4279.0c5febdb12fbc1b2.js.map
