"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8686, 477, 16],
  {
    88686: function (e, n, t) {
      t.r(n),
        t.d(n, {
          Button: function () {
            return i;
          },
          Header: function () {
            return o;
          },
          WeChatPopup: function () {
            return u;
          },
        });
      var c = t(52322),
        i = function () {
          return (0, c.jsx)("button", {
            onClick: function () {
              return alert("boop");
            },
            children: "Boop",
          });
        },
        o = function (e) {
          var n = e.text;
          return (0, c.jsx)("h1", { children: n });
        },
        r = t(2784),
        a = t(8388),
        l = t.n(a),
        s = t(62595),
        d = t(70016),
        _ = t(47842),
        p = (0, s.createStyles)(function (e) {
          return {
            qrWrapper: (0, _.Z)(
              {
                cursor: "pointer",
                transformOrigin: "right top",
                position: "fixed",
                right: 0,
                top: "50%",
                padding: "20px",
                paddingLeft: "8px",
                gap: 8,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "150%",
                background: "#07C160",
                color: "white",
                overflow: "hidden",
                zIndex: 1e3,
              },
              e.fn.smallerThan("md"),
              { display: "none" }
            ),
            btn: {
              transform: "rotate(-90deg) translateX(-50%)",
              width: "max-content",
            },
            leftContainer: {
              height: "220px",
              width: "24px",
              alignItems: "center",
            },
            qrContainer: {
              backgroundColor: "#ffff",
              padding: "10px",
              paddingTop: "13px",
              paddingBottom: "16px",
              width: "170px",
              height: "208px",
            },
            qrImg: { height: "147px", width: "147px" },
            wechatIcon: { width: "24px", fontSize: "24px" },
            closeIcon: {
              width: "24px",
              fontSize: "24px",
              position: "absolute",
              bottom: "22px",
              color: "#ffff",
            },
            closeBtnIcon: { bottom: "14px" },
            btnWrapper: (0, _.Z)(
              {
                cursor: "pointer",
                transformOrigin: "right top",
                position: "fixed",
                right: 0,
                top: "50%",
                padding: "8px",
                gap: 8,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "150%",
                background: "#07C160",
                color: "white",
                overflow: "hidden",
                zIndex: 1e3,
                display: "none !important",
              },
              e.fn.largerThan("md"),
              { display: "flex !important" }
            ),
          };
        }),
        u = function (e) {
          var n,
            t = e.onOpen,
            i = (0, r.useState)(!1),
            o = i[0],
            a = i[1],
            _ = p().classes,
            u = function () {
              !o && t && t(),
                a(function (e) {
                  return !e;
                });
            };
          return (0, c.jsx)(c.Fragment, {
            children:
              (null === l() ||
              void 0 === l() ||
              null === (n = l().global) ||
              void 0 === n
                ? void 0
                : n.isChinaApp) &&
              (0, c.jsx)(c.Fragment, {
                children: o
                  ? (0, c.jsx)(s.Flex, {
                      className: _.qrWrapper,
                      onClick: u,
                      children: (0, c.jsxs)(s.Group, {
                        spacing: "sm",
                        children: [
                          (0, c.jsxs)(s.Flex, {
                            className: _.leftContainer,
                            children: [
                              (0, c.jsx)("i", {
                                className: "icon-wechat-outline ".concat(
                                  _.wechatIcon
                                ),
                              }),
                              (0, c.jsx)(s.Flex, {
                                className: _.btn,
                                justify: "center",
                                children: "Connect on WeChat",
                              }),
                              (0, c.jsx)("i", {
                                className: "icon-arrow-right ".concat(
                                  _.closeIcon
                                ),
                              }),
                            ],
                          }),
                          (0, c.jsxs)(s.Flex, {
                            className: _.qrContainer,
                            children: [
                              (0, c.jsx)("img", {
                                src: d.t_,
                                className: _.qrImg,
                              }),
                              (0, c.jsx)(s.Text, {
                                color: "neutral.9",
                                mt: "16px",
                                align: "center",
                                td: "underline",
                                children: "Connect Now",
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  : (0, c.jsx)(s.Flex, {
                      justify: "center",
                      align: "center",
                      direction: "row",
                      className: "".concat(_.btnWrapper),
                      onClick: u,
                      children: (0, c.jsxs)(s.Flex, {
                        className: _.leftContainer,
                        children: [
                          (0, c.jsx)("i", {
                            className: "icon-wechat-outline ".concat(
                              _.wechatIcon
                            ),
                          }),
                          (0, c.jsx)(s.Flex, {
                            className: _.btn,
                            justify: "center",
                            children: "Connect on WeChat",
                          }),
                          (0, c.jsx)("i", {
                            className: "icon-arrow-left "
                              .concat(_.closeIcon, " ")
                              .concat(_.closeBtnIcon),
                          }),
                        ],
                      }),
                    }),
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
          return r;
        },
        Kc: function () {
          return a;
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
          return _;
        },
      });
      var c = t(8388),
        i = t.n(c),
        o = "e1affeb13de9140",
        r = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        a = {
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
          i().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        _ = "".concat(
          i().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/8686.70045e5a342ebfbb.js.map
