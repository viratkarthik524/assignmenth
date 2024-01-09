"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8185, 16],
  {
    48185: function (e, i, c) {
      c.r(i),
        c.d(i, {
          BottomNavBar: function () {
            return C;
          },
        });
      var t = c(66383),
        o = c(52322),
        n = c(2784),
        a = c(24291),
        l = c(62595),
        r = c(52138),
        s = c(1082),
        _ = c(70016),
        p = c(47842),
        d = (0, s.kc)(function (e) {
          var i;
          return {
            stickyBar:
              ((i = {
                position: "fixed",
                bottom: 0,
                boxShadow: "0px -1px 3px 0px #0000001A",
                zIndex: 180,
                display: "block",
              }),
              (0, p.Z)(i, e.fn.largerThan("md"), { display: "none" }),
              (0, p.Z)(i, "height", "calc(55px + env(safe-area-inset-bottom))"),
              (0, p.Z)(i, "transition", "height 200ms linear"),
              i),
            hide: { height: "0px" },
            navIcon: {
              height: "18px",
              width: "18px",
              fontSize: "18px",
              "&.active": { color: "red" },
            },
            highlight: {
              height: 6,
              width: 6,
              borderRadius: "50%",
              position: "absolute",
              marginLeft: "30px",
            },
            notActiveIcon: { color: e.colors.neutral[5] },
            wrapper: { paddingBottom: "env(safe-area-inset-bottom)" },
          };
        }),
        h = "bottom-navbar-prev",
        C = function (e) {
          var i,
            c,
            p = e.active,
            C = e.data,
            u = void 0 === C ? {} : C,
            E = (e.showAppBanner, d().classes),
            m = (0, t.Z)((0, r.b)(), 1)[0],
            f = (0, n.useState)(!0),
            g = f[0],
            x = f[1],
            I = (0, n.useRef)((null === m || void 0 === m ? void 0 : m.y) || 0),
            L = _.Kc.EXPLORE_CLICKED,
            v = _.Kc.CHAT_CLICKED,
            k = _.Kc.SHORTLIST_CLICKED,
            K = _.Kc.PROFILE_CLICKED,
            b = function (e, i) {
              return function () {
                var c;
                (0, a.pr)({ action: i, category: _.GH.BOTTOM_NAV });
                var t =
                  (null === (c = window.location) || void 0 === c
                    ? void 0
                    : c.pathname) || "";
                t.startsWith("/places/search/") && localStorage.setItem(h, t),
                  window.open(e, "_self");
              };
            },
            w = [
              {
                label: "Explore",
                icon: (0, o.jsx)("i", { className: "icon-bnav-home" }),
                iconActive: (0, o.jsx)("i", {
                  className: "icon-bnav-home-filled",
                }),
                onClick:
                  ((c = L),
                  function () {
                    (0, a.pr)({ action: c, category: _.GH.BOTTOM_NAV });
                    var e = localStorage.getItem(h);
                    e
                      ? (localStorage.removeItem(h), window.open(e, "_self"))
                      : window.open("/", "_self");
                  }),
              },
              {
                label: "Shortlist",
                icon: (0, o.jsx)("i", { className: "icon-shortlist" }),
                iconActive: (0, o.jsx)("i", {
                  className: "icon-shortlist-filled",
                }),
                onClick: b("/profile/shortlist", k),
                highlight: Boolean(
                  "Shortlist" !== p &&
                    (null === u ||
                    void 0 === u ||
                    null === (i = u.inventories_shortlists_ids) ||
                    void 0 === i
                      ? void 0
                      : i.length)
                ),
              },
              {
                label: "Chat",
                icon: (0, o.jsx)("i", { className: "icon-support" }),
                iconActive: (0, o.jsx)("i", {
                  className: "icon-support-filled",
                }),
                onClick: b("/profile/support", v),
              },
              {
                label: "Profile",
                icon: (0, o.jsx)("i", { className: "icon-leads" }),
                iconActive: (0, o.jsx)("i", {
                  className: "icon-profile-filled",
                }),
                onClick: b("/profile", K),
              },
            ];
          return (
            (0, n.useEffect)(
              (0, s.P2)(function () {
                var e = I.current - m.y;
                e > 0 && Math.abs(e) > 30 && x(!0),
                  e < 0 && Math.abs(e) > 30 && x(!1),
                  (I.current = m.y),
                  m.y < 20 && x(!0);
              }, 500),
              [m.y]
            ),
            (0, o.jsx)(o.Fragment, {
              children: (0, o.jsx)(l.Box, {
                w: "100%",
                className: "".concat(E.stickyBar, " ").concat(g ? "" : E.hide),
                "data-testid": "bottom-nav-section",
                children: (0, o.jsx)(l.Flex, {
                  direction: "row",
                  gap: "8px",
                  mx: "auto",
                  bg: "white",
                  w: "100%",
                  px: "lg",
                  mih: 57,
                  py: "10px",
                  children: w.map(function (e) {
                    var i = e.label,
                      c = e.icon,
                      t = e.iconActive,
                      n = e.onClick,
                      a = e.highlight;
                    return (0,
                    o.jsxs)(l.Flex, { onClick: n, className: E.wrapper, px: "18px", align: "center", w: "25%", gap: "4px", children: [(0, o.jsxs)(l.Flex, { className: "".concat(E.navIcon, " ").concat(i === p ? "active" : ""), align: "center", children: [a && (0, o.jsx)(l.Box, { className: E.highlight, bg: "primary.5" }), i === p ? t : (0, o.jsx)(l.Flex, { className: E.notActiveIcon, children: c })] }), (0, o.jsx)(l.Text, { color: i === p ? "primary.5" : "neutral.5", size: "11px", lh: "13.61px", fw: i === p ? 600 : 500, children: i })] }, i);
                  }),
                }),
              }),
            })
          );
        };
    },
    70016: function (e, i, c) {
      c.d(i, {
        EG: function () {
          return n;
        },
        GH: function () {
          return a;
        },
        Kc: function () {
          return l;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return _;
        },
        tj: function () {
          return r;
        },
        wD: function () {
          return p;
        },
      });
      var t = c(8388),
        o = c.n(t),
        n = "e1affeb13de9140",
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
        r = "https://m.me/amberstudent",
        s = 1441,
        _ = "".concat(
          o().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        p = "".concat(
          o().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/8185.d48c270cfab62781.js.map
