"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [744, 16],
  {
    50744: function (n, e, i) {
      i.r(e),
        i.d(e, {
          SectionCitiesV2: function () {
            return d;
          },
        });
      var a = i(52322),
        t = i(99333),
        r = i(24291),
        l = i(62595),
        c = i(26793),
        o = [
          { name: "London", link: "london-1811028205760" },
          { name: "Glasgow", link: "glasgow-1811024356803" },
          { name: "Coventry", link: "coventry-1811022688464" },
          { name: "Birmingham", link: "birmingham-1811028953945" },
          { name: "Nottingham", link: "nottingham-1811025104223" },
          { name: "Sheffield", link: "sheffield-1811027902898" },
          { name: "Manchester", link: "manchester-1811021510595" },
          { name: "Edinburgh", link: "edinburgh-1811029850773" },
          { name: "Leicester", link: "leicester-1811027154774" },
          { name: "Cardiff", link: "cardiff-1811021315133" },
          { name: "Leeds", link: "leeds-1811025399073" },
          { name: "Newcastle", link: "newcastle-upon-tyne-1811022588361" },
          { name: "Aberdeen", link: "aberdeen-1811021824528" },
          { name: "Portsmouth", link: "portsmouth-1811020065723" },
          { name: "Cambridge", link: "cambridge-1811025371107" },
          { name: "Oxford", link: "oxford-1811023030854" },
          { name: "Southampton", link: "southampton-1811022771524" },
          { name: "Exeter", link: "exeter-1811027484452" },
          { name: "Bournemouth", link: "bournemouth-1811027075639" },
          { name: "Belfast", link: "belfast-1811021897138" },
          { name: "Bristol", link: "bristol-1811028541951" },
          { name: "Canterbury", link: "canterbury-1811026296205" },
          { name: "Dublin", link: "dublin-1811234255126" },
          { name: "Swansea", link: "swansea-1811021718098" },
          { name: "Loughborough", link: "loughborough-1811023994102" },
          { name: "Brighton", link: "brighton-and-hove-1811029325591" },
          { name: "Derby", link: "derby-1811027042281" },
          { name: "Hatfield", link: "hatfield-1811227320022" },
          { name: "Lincoln", link: "lincoln-1811026319691" },
          { name: "Luton", link: "luton-1811021378066" },
          { name: "Plymouth", link: "plymouth-1811024617468" },
          { name: "Dallas", link: "dallas-1811050789451" },
          { name: "Cork", link: "cork-1905110396319" },
          { name: "Melbourne", link: "melbourne-1811011846366" },
          { name: "Sydney", link: "sydney-1811019193619" },
        ],
        s = i(47842),
        u = (0, i(1082).kc)(function (n) {
          return {
            cityListWrapper: (0, s.Z)(
              { marginTop: 28, gap: "12px" },
              n.fn.largerThan("md"),
              { marginTop: 48, gap: "16px" }
            ),
            cityAnchor: (0, s.Z)(
              { width: "calc(50% - 6px)", fontWeight: 400 },
              n.fn.largerThan("md"),
              { width: "calc(20% - 13px)", padding: "7px 0px", fontWeight: 500 }
            ),
            leftContainer: (0, s.Z)({ gap: 4 }, n.fn.largerThan("md"), {
              gap: 8,
            }),
          };
        }),
        d = function () {
          var n = u().classes;
          return (0, a.jsx)(c.h, {
            background: "#fff",
            title: "Hundreds of cities around the world",
            subtitle:
              "Secure student apartments near esteemed universities and vibrant cities",
            dataTestId: "cities-list-section",
            children: (0, a.jsx)(l.Flex, {
              className: n.cityListWrapper,
              wrap: "wrap",
              direction: "row",
              children: o.map(function (e) {
                var i = e.name,
                  c = e.link;
                return (0, a.jsx)(
                  l.Anchor,
                  {
                    href: "/places/search/".concat(c),
                    className: n.cityAnchor,
                    px: "12px",
                    py: "8px",
                    size: "14px",
                    color: "primary.4",
                    onClick: function () {
                      return (function (n) {
                        (0, r.pr)({
                          action: "clicked_city_of_hundred_cities",
                          category: t.E0.HOME,
                          canonical_name: n,
                        });
                      })(c);
                    },
                    children: i,
                  },
                  c
                );
              }),
            }),
          });
        };
    },
    26793: function (n, e, i) {
      i.d(e, {
        h: function () {
          return u;
        },
      });
      var a = i(52322),
        t = i(62595),
        r = i(47842),
        l = (0, t.createStyles)(function (n) {
          return {
            container: (0, r.Z)({ gap: 4 }, n.fn.largerThan("lg"), { gap: 8 }),
            title: (0, r.Z)(
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
            subtitle: (0, r.Z)(
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
        c = function (n) {
          var e = n.title,
            i = n.subtitle,
            r = l().classes;
          return (0, a.jsxs)(t.Flex, {
            className: r.container,
            children: [
              (0, a.jsx)(t.Title, {
                order: 2,
                className: r.title,
                children: e,
              }),
              i && (0, a.jsx)(t.Text, { className: r.subtitle, children: i }),
            ],
          });
        },
        o = i(70016),
        s = (0, t.createStyles)(function (n, e) {
          var i,
            a = e.background;
          return {
            container: {
              backgroundColor:
                null !== a && void 0 !== a ? a : n.colors.neutral[0],
            },
            innerContainer:
              ((i = { padding: "32px 16px" }),
              (0, r.Z)(i, n.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: n.breakpoints.xl,
              }),
              (0, r.Z)(i, n.fn.largerThan(o.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, r.Z)(i, n.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, r.Z)(i, n.fn.largerThan(1601), { padding: "56px 0" }),
              i),
          };
        }),
        u = function (n) {
          var e = n.title,
            i = n.subtitle,
            r = n.children,
            l = n.background,
            o = n.innerClassName,
            u = s({ background: l }).classes,
            d = e || i;
          return (0, a.jsx)(t.Flex, {
            className: u.container,
            children: (0, a.jsxs)(t.Flex, {
              className: "".concat(u.innerContainer, " ").concat(o),
              children: [d && (0, a.jsx)(c, { title: e, subtitle: i }), r],
            }),
          });
        };
    },
    70016: function (n, e, i) {
      i.d(e, {
        EG: function () {
          return r;
        },
        GH: function () {
          return l;
        },
        Kc: function () {
          return c;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return u;
        },
        tj: function () {
          return o;
        },
        wD: function () {
          return d;
        },
      });
      var a = i(8388),
        t = i.n(a),
        r = "e1affeb13de9140",
        l = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        o = "https://m.me/amberstudent",
        s = 1441,
        u = "".concat(
          t().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        d = "".concat(
          t().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/744.6fd2ae2853eb77fd.js.map
