"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7448, 1695, 16],
  {
    61695: function (e, _, c) {
      c.d(_, {
        J: function () {
          return E;
        },
      });
      var t = c(98788),
        n = c(50853),
        r = c(8388),
        i = c.n(r),
        u = c(35590),
        a = c(139),
        C = c.n(a),
        o = c(49705),
        l = c.n(o),
        E = (function () {
          var e = (0, t.Z)(function () {
            var e, _, c, t;
            return (0, n.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    n.trys.push([0, 2, , 3]),
                    (_ = l()(
                      i().urls.web_service_url,
                      "/places/getCountryData"
                    )),
                    [4, C().get(_)]
                  );
                case 1:
                  return (
                    (c = n.sent()),
                    [
                      2,
                      (null === c ||
                      void 0 === c ||
                      null === (e = c.body) ||
                      void 0 === e
                        ? void 0
                        : e.country) || "GB",
                    ]
                  );
                case 2:
                  return (
                    (t = n.sent()),
                    u.r.error("Error fetching country data:", t),
                    [2, "GB"]
                  );
                case 3:
                  return [2];
              }
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    70016: function (e, _, c) {
      c.d(_, {
        EG: function () {
          return r;
        },
        GH: function () {
          return i;
        },
        Kc: function () {
          return u;
        },
        d: function () {
          return C;
        },
        t_: function () {
          return o;
        },
        tj: function () {
          return a;
        },
        wD: function () {
          return l;
        },
      });
      var t = c(8388),
        n = c.n(t),
        r = "e1affeb13de9140",
        i = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        u = {
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
        a = "https://m.me/amberstudent",
        C = 1441,
        o = "".concat(
          n().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        l = "".concat(
          n().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/7448.d909e98f978fa8bf.js.map
