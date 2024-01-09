"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3868],
  {
    90225: function (n, e, o) {
      o.d(e, {
        Jb: function () {
          return t;
        },
        p9: function () {
          return i;
        },
        up: function () {
          return a;
        },
      });
      var t = {
          ACTION: { LOGIN: "login", SIGN_UP: "sign_up", ANY: "login/sign_up" },
          LABEL: {
            APPLE: "apple",
            GOOGLE_AUTH: "google_auth",
            GOOGLE_ONE_TAP: "google_one_tap",
            FACEBOOK: "facebook_auth",
            EMAIL_OTP: "email_OTP_Login",
          },
          VALUE: { SUCCESS: "success", FAILURE: "failure" },
          CATEGORY: o(99333).E0,
        },
        i = "loggedIn",
        a = "loggedOut";
    },
    61772: function (n, e, o) {
      o.d(e, {
        JY: function () {
          return c;
        },
        hq: function () {
          return s;
        },
      });
      var t = o(52322),
        i = o(2784),
        a = o(63955),
        u = o(62595),
        r = (0, i.createContext)({}),
        c = function (n) {
          var e = n.children,
            o = n.auth,
            c = n.nextRoute,
            s = (0, i.useState)(0),
            l = s[0],
            d = s[1],
            f = (0, i.useState)(o || { status: !1, data: {} }),
            p = f[0],
            g = f[1],
            m = (0, i.useState)(!1),
            h = m[0],
            _ = m[1],
            w = (0, a.cI)({
              defaultValues: { email: "", otp: "" },
              reValidateMode: "onSubmit",
            }),
            v = (0, u.isMobileView)();
          return (0, u.withAmberTheme)(
            (0, t.jsx)(r.Provider, {
              value: {
                auth: p,
                setAuth: g,
                step: l,
                setStep: d,
                form: w,
                isMobile: v,
                nextRoute: c,
                googleOneTapLoaded: h,
                setGoogleOneTapLoaded: _,
              },
              children: e,
            }),
            "secondary"
          );
        },
        s = function () {
          return (0, i.useContext)(r);
        };
    },
    23868: function (n, e, o) {
      o.r(e),
        o.d(e, {
          SectionNanobar: function () {
            return k;
          },
          SectionSnackbar: function () {
            return x;
          },
        });
      var t = o(70865),
        i = o(26297),
        a = o(52322),
        u = o(2784),
        r = o(29617),
        c = o(18859),
        s = o(8388),
        l = o.n(s),
        d = o(4454),
        f = o(36906),
        p = o(35590),
        g = o(40297),
        m = o(25237),
        h = o.n(m),
        _ = o(61772),
        w = o(23749),
        v = o(90225),
        b = o(79710),
        E = h()(
          function () {
            return Promise.all([o.e(3599), o.e(9951), o.e(4528)])
              .then(o.bind(o, 64528))
              .then(function (n) {
                return n.LoginModal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [64528];
              },
            },
            ssr: !1,
          }
        ),
        O = l().app.sentry_dsn,
        y = l().global.global_env,
        S = l().global.release_version,
        x = function () {
          var n = (0, u.useState)(!1),
            e = n[0],
            o = n[1],
            t = (0, u.useState)(""),
            i = t[0],
            r = t[1];
          (0, u.useEffect)(function () {
            d.Z.on(f.p9, function (n) {
              r(n), c();
            });
          }, []);
          var c = function () {
              o(!0), setTimeout(s, 8e3);
            },
            s = function () {
              return o(!1);
            };
          return (0, a.jsx)(a.Fragment, {
            children:
              e &&
              (null === i || void 0 === i ? void 0 : i.length) > 0 &&
              (0, a.jsxs)("div", {
                className: "snackbar-container ".concat(e && "show"),
                children: [
                  (0, a.jsx)("span", { className: "left-text", children: i }),
                  (0, a.jsx)("span", {
                    className: "right-control",
                    onClick: s,
                    children: "DISMISS",
                  }),
                ],
              }),
          });
        },
        k = function () {
          var n = (0, u.useState)(!1),
            e = n[0],
            o = n[1];
          return (
            (0, u.useEffect)(function () {
              d.Z.on(f.mp, function () {
                return o(!0);
              }),
                d.Z.on(f.IQ, function () {
                  return o(!1);
                });
            }, []),
            (0, a.jsx)(a.Fragment, {
              children:
                e &&
                (0, a.jsx)("div", {
                  className: "nanobar-container ".concat(e && "show"),
                }),
            })
          );
        },
        Z = function (n) {
          var e = n.openLoginModal,
            o = n.handleCloseLoginModal,
            t = n.hideGoogleOneTap,
            i = void 0 !== t && t,
            r = (0, _.hq)(),
            c = r.auth,
            s = r.setAuth,
            l = r.nextRoute,
            m = r.googleOneTapLoaded,
            h = r.setGoogleOneTapLoaded,
            O = (0, u.useState)(!1),
            y = O[0],
            S = O[1],
            x = function () {
              o && o(), S(!1);
            },
            Z = function () {
              S(!0);
            },
            A = function (n) {
              return s({ status: !0, data: n });
            },
            N = function () {
              d.Z.emit(f.mp),
                (0, g.kS)(
                  {},
                  {
                    success: function (n) {
                      return C(n.data);
                    },
                    failure: function (n) {
                      p.r.log(n), I(n);
                    },
                    done: function () {
                      return d.Z.emit(f.IQ);
                    },
                  }
                );
            },
            C = function (n) {
              d.Z.emit(f.oZ, n),
                (window.location.hash = v.up),
                window.location.reload();
            },
            I = function (n) {
              p.r.log(n), d.Z.emit(f.Gx);
            };
          return (
            (0, u.useEffect)(
              function () {
                (null === c || void 0 === c ? void 0 : c.status) ||
                  m ||
                  i ||
                  (0, w.YG)(l, function () {
                    return h(!0);
                  });
              },
              [null === c || void 0 === c ? void 0 : c.status]
            ),
            (0, u.useEffect)(function () {
              return (
                d.Z.on(f.FD, Z),
                d.Z.on(f.ez, Z),
                d.Z.on(f.tV, x),
                d.Z.on(f.tV, A),
                d.Z.on(f.zX, N),
                function () {
                  d.Z.off(f.FD, Z),
                    d.Z.off(f.ez, Z),
                    d.Z.off(f.tV, x),
                    d.Z.off(f.zX, N);
                }
              );
            }, []),
            (0, u.useEffect)(function () {
              window &&
                window.location.hash === "#".concat(v.p9) &&
                (0, b.tm)(),
                window &&
                  window.location.hash === "#".concat(v.up) &&
                  (0, b.om)(),
                (window.location.hash = "");
            }, []),
            (0, u.useEffect)(
              function () {
                e && Z();
              },
              [e]
            ),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(k, {}),
                y && (0, a.jsx)(E, { open: y, onClose: x, googleLoaded: null }),
              ],
            })
          );
        };
      e.default = function (n) {
        var e = n.auth,
          o = n.nextRoute,
          s = (0, i.Z)(n, ["auth", "nextRoute"]);
        return (
          (0, u.useEffect)(function () {
            r.S({
              dsn: O,
              integrations: [new c.gE()],
              tracesSampleRate: 0.05,
              environment: y,
              release: S,
            });
          }, []),
          (0, a.jsx)(_.JY, {
            auth: e,
            nextRoute: o,
            children: (0, a.jsx)(Z, (0, t.Z)({}, s)),
          })
        );
      };
    },
    79710: function (n, e, o) {
      o.d(e, {
        gV: function () {
          return m;
        },
        P: function () {
          return r;
        },
        qw: function () {
          return g;
        },
        C9: function () {
          return l;
        },
        an: function () {
          return w;
        },
        he: function () {
          return d.h;
        },
        tm: function () {
          return _;
        },
        om: function () {
          return v;
        },
        OP: function () {
          return f.O;
        },
        gl: function () {
          return c;
        },
        oz: function () {
          return h;
        },
      });
      var t = o(4454),
        i = o(36906),
        a = o(35590),
        u = o(40297),
        r = function (n) {
          var e = n.user,
            o = n.onSuccess,
            r = n.onFailure,
            c = n.onCompleted,
            s = {
              url_path: "/api/v0/users/generate_email_otp",
              data: { user: e },
            };
          t.Z.emit(i.mp),
            (0, u.x4)(s, {
              success: o,
              failure: function (n) {
                a.r.log(n), r && r(n);
              },
              done: function () {
                t.Z.emit(i.IQ), c && c();
              },
            });
        },
        c = function (n) {
          var e = n.user,
            o = n.onSuccess,
            a = n.onFailure,
            r = n.onCompleted,
            c = {
              url_path: "/api/v0/users/login_email_otp",
              data: { user: e },
            };
          t.Z.emit(i.mp),
            (0, u.x4)(c, {
              success: o,
              failure: function (n) {
                return a && a(n);
              },
              done: function () {
                t.Z.emit(i.IQ), r && r();
              },
            });
        },
        s = o(90225),
        l = function () {
          if (window) {
            var n = window.location.pathname;
            if (n.includes("/places/search")) return s.Jb.CATEGORY.SEARCH;
            if (n.includes("/places")) return s.Jb.CATEGORY.INVENTORY;
            if (n.includes("/profile")) return s.Jb.CATEGORY.PROFILE;
            if ("/" === n) return s.Jb.CATEGORY.HOME;
          }
        },
        d = (o(45475), o(38805)),
        f = o(92628),
        p = o(62595),
        g = function () {
          return (0, p.showNotification)({
            title: "Some error occurred",
            message: "Please try again",
            color: "danger.5",
          });
        },
        m = function () {
          return (0, p.showNotification)({
            title: "OTP Generated",
            message: "Your one time password has been sent to your email",
            color: "secondary.5",
          });
        },
        h = function () {
          return (0, p.showNotification)({
            title: "Wrong OTP",
            message: "You have entered wrong OTP. Please verify and try again",
            color: "danger.5",
          });
        },
        _ = function () {
          return (0, p.showNotification)({
            title: "Welcome to Amber!",
            message: "You are now successfully logged in",
            color: "secondary.5",
          });
        },
        w = function () {
          return (0, p.showNotification)({
            title: "Oops! Login unsuccessful",
            message: "You are unable to log in successfully. Please try again",
            color: "danger.5",
          });
        },
        v = function () {
          return (0, p.showNotification)({
            title: "Logout success",
            message: "You are successfully logged out",
            color: "secondary.5",
          });
        };
    },
    45475: function (n, e, o) {
      o.d(e, {
        U: function () {
          return i;
        },
      });
      var t = o(35590),
        i = function (n) {
          return t.r.log(n);
        };
    },
    38805: function (n, e, o) {
      o.d(e, {
        h: function () {
          return r;
        },
      });
      var t = o(4454),
        i = o(36906),
        a = o(24291),
        u = o(90225),
        r = function (n, e, o) {
          t.Z.emit(i.tV, n),
            (0, a.pr)({
              action: "success",
              category: "login",
              label: e,
              email_id: n.email,
            }),
            window.location.href.includes("partners")
              ? (0, a.pr)({
                  action: "demand_dashboard_logged_in",
                  category: "demand_dashboard",
                  label: e,
                })
              : window.location.href.includes("connect") &&
                (0, a.pr)({
                  action: "supply_dashboard_login",
                  category: "supply_platform",
                  label: e,
                }),
            "undefined" !== typeof Moengage &&
              null !== Moengage &&
              ((null === n || void 0 === n ? void 0 : n.email) &&
                (Moengage.add_unique_user_id(n.email),
                Moengage.add_email(n.email)),
              (null === n || void 0 === n ? void 0 : n.name) &&
                Moengage.add_user_name(n.name),
              (null === n || void 0 === n ? void 0 : n.phone) &&
                Moengage.add_mobile(n.phone),
              (n.login_type = e),
              Moengage.track_event("user_login", n)),
            (window.location.hash = u.p9),
            o
              ? (window.location.href = "".concat(o))
              : window.location.reload();
        };
    },
    23749: function (n, e, o) {
      o.d(e, {
        YG: function () {
          return s;
        },
        Dw: function () {
          return a;
        },
        AB: function () {
          return u;
        },
      });
      var t = o(8388),
        i = o.n(t),
        a = function () {
          var n = document.createElement("script");
          (n.type = "text/javascript"),
            (n.src =
              "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"),
            (n.onload = function () {
              window &&
                window.AppleID &&
                window.AppleID.auth.init({
                  clientId: i().app.apple_client_id,
                  scope: "name email",
                  redirectURI: "https://".concat(window.location.hostname),
                  state: "amber-apple-sign-in",
                  usePopup: !0,
                });
            }),
            document.body.appendChild(n);
        },
        u = function () {
          var n, e, o;
          (n = window),
            (e = document),
            (o = i()),
            (n.fbAsyncInit = function () {
              FB.init({
                appId: o.app.facebook_app_id,
                cookie: !0,
                xfbml: !0,
                version: "v2.7",
              });
            }),
            (function (n, e, o) {
              var t,
                i = n.getElementsByTagName(e)[0];
              n.getElementById(o) ||
                (((t = n.createElement(e)).id = o),
                (t.src = "//connect.facebook.net/en_US/sdk.js"),
                i.parentNode.insertBefore(t, i));
            })(e, "script", "facebook-jssdk");
        },
        r = o(35590),
        c = o(92628),
        s = function (n, e) {
          if (!i().global.isChinaApp) {
            var o = document.createElement("script");
            (o.type = "application/javascript"),
              (o.async = !0),
              (o.defer = !0),
              (o.src = "https://accounts.google.com/gsi/client"),
              (o.onload = function () {
                !(function (n) {
                  google.accounts &&
                    (google.accounts.id.initialize({
                      client_id: i().app.google_client_id,
                      cancel_on_tap_outside: !1,
                      callback: function (e) {
                        return (0, c.O)({
                          token: e.credential,
                          type: "google_one_tap",
                          nextRoute: n,
                        });
                      },
                    }),
                    google.accounts.id.prompt(function (n) {
                      n.isNotDisplayed()
                        ? r.r.log(n.getNotDisplayedReason())
                        : n.isSkippedMoment()
                        ? r.r.log(n.getSkippedReason())
                        : n.isDismissedMoment() &&
                          r.r.log(n.getDismissedReason());
                    }));
                })(n),
                  e && e();
              }),
              document.body.appendChild(o);
          }
        };
    },
    92628: function (n, e, o) {
      o.d(e, {
        O: function () {
          return s;
        },
      });
      var t = o(4454),
        i = o(38805),
        a = o(45475),
        u = o(35590),
        r = o(40297),
        c = o(36906),
        s = function (n) {
          var e = n.token,
            o = n.type,
            s = n.nextRoute,
            l = n.additionalData,
            d = n.authorization_code,
            f = {};
          t.Z.emit(c.mp),
            "facebook" === o &&
              ((f.url_path = "/api/v0/users/connect_facebook"),
              (f.data = { access_token: e })),
            ("google" !== o && "google_one_tap" !== o) ||
              ((f.url_path = "/api/v0/users/connect_google_id"),
              (f.data = { id_token: e })),
            "apple" === o &&
              ((f.url_path = "/api/v0/users/connect_apple"),
              (f.data = { id_token: e, authorization_code: d, user: l })),
            (0, r.x4)(f, {
              success: function (n) {
                return (0, i.h)(n.data, o, s);
              },
              failure: function (n) {
                u.r.log(n), (0, a.U)(n);
              },
              done: function () {
                return t.Z.emit(c.IQ);
              },
            });
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/3868-42a2e184ca087606.js.map
