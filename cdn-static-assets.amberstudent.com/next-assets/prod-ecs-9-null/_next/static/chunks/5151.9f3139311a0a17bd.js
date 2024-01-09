"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5151, 3186, 16],
  {
    63186: function (e, n, t) {
      t.d(n, {
        X: function () {
          return o;
        },
        j: function () {
          return i;
        },
      });
      var o = function (e) {
          return !!(
            e &&
            e.status &&
            e.data &&
            e.data.email &&
            e.data.email.includes("amberstudent.com")
          );
        },
        i = function (e) {
          return !(!e || !e.status);
        };
    },
    90225: function (e, n, t) {
      t.d(n, {
        Jb: function () {
          return o;
        },
        p9: function () {
          return i;
        },
        up: function () {
          return a;
        },
      });
      var o = {
          ACTION: { LOGIN: "login", SIGN_UP: "sign_up", ANY: "login/sign_up" },
          LABEL: {
            APPLE: "apple",
            GOOGLE_AUTH: "google_auth",
            GOOGLE_ONE_TAP: "google_one_tap",
            FACEBOOK: "facebook_auth",
            EMAIL_OTP: "email_OTP_Login",
          },
          VALUE: { SUCCESS: "success", FAILURE: "failure" },
          CATEGORY: t(99333).E0,
        },
        i = "loggedIn",
        a = "loggedOut";
    },
    61772: function (e, n, t) {
      t.d(n, {
        JY: function () {
          return u;
        },
        hq: function () {
          return l;
        },
      });
      var o = t(52322),
        i = t(2784),
        a = t(63955),
        r = t(62595),
        c = (0, i.createContext)({}),
        u = function (e) {
          var n = e.children,
            t = e.auth,
            u = e.nextRoute,
            l = (0, i.useState)(0),
            s = l[0],
            d = l[1],
            f = (0, i.useState)(t || { status: !1, data: {} }),
            g = f[0],
            _ = f[1],
            p = (0, i.useState)(!1),
            h = p[0],
            m = p[1],
            C = (0, a.cI)({
              defaultValues: { email: "", otp: "" },
              reValidateMode: "onSubmit",
            }),
            E = (0, r.isMobileView)();
          return (0, r.withAmberTheme)(
            (0, o.jsx)(c.Provider, {
              value: {
                auth: g,
                setAuth: _,
                step: s,
                setStep: d,
                form: C,
                isMobile: E,
                nextRoute: u,
                googleOneTapLoaded: h,
                setGoogleOneTapLoaded: m,
              },
              children: n,
            }),
            "secondary"
          );
        },
        l = function () {
          return (0, i.useContext)(c);
        };
    },
    79710: function (e, n, t) {
      t.d(n, {
        gV: function () {
          return p;
        },
        P: function () {
          return c;
        },
        qw: function () {
          return _;
        },
        C9: function () {
          return s;
        },
        an: function () {
          return C;
        },
        he: function () {
          return d.h;
        },
        tm: function () {
          return m;
        },
        om: function () {
          return E;
        },
        OP: function () {
          return f.O;
        },
        gl: function () {
          return u;
        },
        oz: function () {
          return h;
        },
      });
      var o = t(4454),
        i = t(36906),
        a = t(35590),
        r = t(40297),
        c = function (e) {
          var n = e.user,
            t = e.onSuccess,
            c = e.onFailure,
            u = e.onCompleted,
            l = {
              url_path: "/api/v0/users/generate_email_otp",
              data: { user: n },
            };
          o.Z.emit(i.mp),
            (0, r.x4)(l, {
              success: t,
              failure: function (e) {
                a.r.log(e), c && c(e);
              },
              done: function () {
                o.Z.emit(i.IQ), u && u();
              },
            });
        },
        u = function (e) {
          var n = e.user,
            t = e.onSuccess,
            a = e.onFailure,
            c = e.onCompleted,
            u = {
              url_path: "/api/v0/users/login_email_otp",
              data: { user: n },
            };
          o.Z.emit(i.mp),
            (0, r.x4)(u, {
              success: t,
              failure: function (e) {
                return a && a(e);
              },
              done: function () {
                o.Z.emit(i.IQ), c && c();
              },
            });
        },
        l = t(90225),
        s = function () {
          if (window) {
            var e = window.location.pathname;
            if (e.includes("/places/search")) return l.Jb.CATEGORY.SEARCH;
            if (e.includes("/places")) return l.Jb.CATEGORY.INVENTORY;
            if (e.includes("/profile")) return l.Jb.CATEGORY.PROFILE;
            if ("/" === e) return l.Jb.CATEGORY.HOME;
          }
        },
        d = (t(45475), t(38805)),
        f = t(92628),
        g = t(62595),
        _ = function () {
          return (0, g.showNotification)({
            title: "Some error occurred",
            message: "Please try again",
            color: "danger.5",
          });
        },
        p = function () {
          return (0, g.showNotification)({
            title: "OTP Generated",
            message: "Your one time password has been sent to your email",
            color: "secondary.5",
          });
        },
        h = function () {
          return (0, g.showNotification)({
            title: "Wrong OTP",
            message: "You have entered wrong OTP. Please verify and try again",
            color: "danger.5",
          });
        },
        m = function () {
          return (0, g.showNotification)({
            title: "Welcome to Amber!",
            message: "You are now successfully logged in",
            color: "secondary.5",
          });
        },
        C = function () {
          return (0, g.showNotification)({
            title: "Oops! Login unsuccessful",
            message: "You are unable to log in successfully. Please try again",
            color: "danger.5",
          });
        },
        E = function () {
          return (0, g.showNotification)({
            title: "Logout success",
            message: "You are successfully logged out",
            color: "secondary.5",
          });
        };
    },
    45475: function (e, n, t) {
      t.d(n, {
        U: function () {
          return i;
        },
      });
      var o = t(35590),
        i = function (e) {
          return o.r.log(e);
        };
    },
    38805: function (e, n, t) {
      t.d(n, {
        h: function () {
          return c;
        },
      });
      var o = t(4454),
        i = t(36906),
        a = t(24291),
        r = t(90225),
        c = function (e, n, t) {
          o.Z.emit(i.tV, e),
            (0, a.pr)({
              action: "success",
              category: "login",
              label: n,
              email_id: e.email,
            }),
            window.location.href.includes("partners")
              ? (0, a.pr)({
                  action: "demand_dashboard_logged_in",
                  category: "demand_dashboard",
                  label: n,
                })
              : window.location.href.includes("connect") &&
                (0, a.pr)({
                  action: "supply_dashboard_login",
                  category: "supply_platform",
                  label: n,
                }),
            "undefined" !== typeof Moengage &&
              null !== Moengage &&
              ((null === e || void 0 === e ? void 0 : e.email) &&
                (Moengage.add_unique_user_id(e.email),
                Moengage.add_email(e.email)),
              (null === e || void 0 === e ? void 0 : e.name) &&
                Moengage.add_user_name(e.name),
              (null === e || void 0 === e ? void 0 : e.phone) &&
                Moengage.add_mobile(e.phone),
              (e.login_type = n),
              Moengage.track_event("user_login", e)),
            (window.location.hash = r.p9),
            t
              ? (window.location.href = "".concat(t))
              : window.location.reload();
        };
    },
    92628: function (e, n, t) {
      t.d(n, {
        O: function () {
          return l;
        },
      });
      var o = t(4454),
        i = t(38805),
        a = t(45475),
        r = t(35590),
        c = t(40297),
        u = t(36906),
        l = function (e) {
          var n = e.token,
            t = e.type,
            l = e.nextRoute,
            s = e.additionalData,
            d = e.authorization_code,
            f = {};
          o.Z.emit(u.mp),
            "facebook" === t &&
              ((f.url_path = "/api/v0/users/connect_facebook"),
              (f.data = { access_token: n })),
            ("google" !== t && "google_one_tap" !== t) ||
              ((f.url_path = "/api/v0/users/connect_google_id"),
              (f.data = { id_token: n })),
            "apple" === t &&
              ((f.url_path = "/api/v0/users/connect_apple"),
              (f.data = { id_token: n, authorization_code: d, user: s })),
            (0, c.x4)(f, {
              success: function (e) {
                return (0, i.h)(e.data, t, l);
              },
              failure: function (e) {
                r.r.log(e), (0, a.U)(e);
              },
              done: function () {
                return o.Z.emit(u.IQ);
              },
            });
        };
    },
    88830: function (e, n, t) {
      t.r(n),
        t.d(n, {
          RecentlyViewedSectionHomePage: function () {
            return f;
          },
        });
      var o = t(52322),
        i = t(2784),
        a = t(36886),
        r = t(62595),
        c = t(99951),
        u = t(26793),
        l = t(83961),
        s = t(47842),
        d = (0, r.createStyles)(function (e) {
          return {
            innerContainer: (0, s.Z)({ marginTop: 28 }, e.fn.largerThan("md"), {
              marginTop: 48,
            }),
          };
        }),
        f = function (e) {
          var n = e.auth,
            t = e.idSuffix,
            s = e.gtagEventAction,
            f = e.gtagEventCategory,
            g = d().classes,
            _ = (0, i.useState)(!1),
            p = _[0],
            h = _[1];
          return (
            (0, i.useEffect)(function () {
              (0, a.Vj)(1, 10).length > 0 && h(!0);
            }, []),
            (0, o.jsx)(c.s8, {
              animateKey: p,
              children:
                p &&
                (0, o.jsx)(u.h, {
                  background: "#fff",
                  title: "Recently Viewed",
                  subtitle:
                    "Your recently explored accommodations across the globe",
                  dataTestId: "recently-viewed-section",
                  children: (0, o.jsx)(r.Box, {
                    className: g.innerContainer,
                    children: (0, o.jsx)(l.z, {
                      auth: n,
                      idSuffix: t,
                      withLayoutAndHeader: !1,
                      gtagEventAction: s,
                      gtagEventCategory: f,
                    }),
                  }),
                }),
            })
          );
        };
    },
    26793: function (e, n, t) {
      t.d(n, {
        h: function () {
          return s;
        },
      });
      var o = t(52322),
        i = t(62595),
        a = t(47842),
        r = (0, i.createStyles)(function (e) {
          return {
            container: (0, a.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, a.Z)(
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
            subtitle: (0, a.Z)(
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
            t = e.subtitle,
            a = r().classes;
          return (0, o.jsxs)(i.Flex, {
            className: a.container,
            children: [
              (0, o.jsx)(i.Title, {
                order: 2,
                className: a.title,
                children: n,
              }),
              t && (0, o.jsx)(i.Text, { className: a.subtitle, children: t }),
            ],
          });
        },
        u = t(70016),
        l = (0, i.createStyles)(function (e, n) {
          var t,
            o = n.background;
          return {
            container: {
              backgroundColor:
                null !== o && void 0 !== o ? o : e.colors.neutral[0],
            },
            innerContainer:
              ((t = { padding: "32px 16px" }),
              (0, a.Z)(t, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, a.Z)(t, e.fn.largerThan(u.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, a.Z)(t, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, a.Z)(t, e.fn.largerThan(1601), { padding: "56px 0" }),
              t),
          };
        }),
        s = function (e) {
          var n = e.title,
            t = e.subtitle,
            a = e.children,
            r = e.background,
            u = e.innerClassName,
            s = l({ background: r }).classes,
            d = n || t;
          return (0, o.jsx)(i.Flex, {
            className: s.container,
            children: (0, o.jsxs)(i.Flex, {
              className: "".concat(s.innerContainer, " ").concat(u),
              children: [d && (0, o.jsx)(c, { title: n, subtitle: t }), a],
            }),
          });
        };
    },
    70016: function (e, n, t) {
      t.d(n, {
        EG: function () {
          return a;
        },
        GH: function () {
          return r;
        },
        Kc: function () {
          return c;
        },
        d: function () {
          return l;
        },
        t_: function () {
          return s;
        },
        tj: function () {
          return u;
        },
        wD: function () {
          return d;
        },
      });
      var o = t(8388),
        i = t.n(o),
        a = "e1affeb13de9140",
        r = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        u = "https://m.me/amberstudent",
        l = 1441,
        s = "".concat(
          i().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        d = "".concat(
          i().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
    92661: function (e, n, t) {
      t.d(n, {
        n5: function () {
          return o;
        },
        _6: function () {
          return a;
        },
        M0: function () {
          return r;
        },
        qq: function () {
          return c;
        },
      });
      t(36886);
      var o = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.isTopRated,
            t = void 0 !== n && n,
            o = e.isFillingFast,
            i = void 0 !== o && o,
            a = e.isCashbackOrDiscount,
            r = void 0 !== a && a,
            c = e.cashbackValue,
            u = void 0 === c ? null : c;
          return t
            ? "Top Rated"
            : i
            ? "Filling Fast"
            : r && u
            ? "Upto ".concat(u, " Cashback")
            : null;
        },
        i = {
          "Top Rated": "secondary",
          "Filling Fast": "primary",
          "Cashback/Discount": "tertiary",
        },
        a = function (e) {
          return i[e];
        },
        r =
          (t(62595),
          function (e) {
            var n = e.noun,
              t = e.count,
              o = void 0 === t ? 0 : t,
              i = e.suffix,
              a = void 0 === i ? "s" : i;
            return "".concat(o, " ").concat(
              (function (e) {
                var n = e.noun,
                  t = e.count,
                  o = void 0 === t ? 0 : t,
                  i = e.suffix,
                  a = void 0 === i ? "s" : i;
                return o > 1 ? "".concat(n).concat(a) : n;
              })({ noun: n, count: o, suffix: a })
            );
          }),
        c = function (e) {
          return e.replace(/\b hours?\b/g, "h").replace(/\b mins?\b/g, "m");
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/5151.9f3139311a0a17bd.js.map
