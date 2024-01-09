"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9951],
  {
    45572: function (e, t, n) {
      n.d(t, {
        y: function () {
          return y;
        },
      });
      var o = n(52322),
        r = n(8388),
        i = n.n(r),
        a = n(99333),
        s = n(62595),
        l = n(24862),
        c = n(98788),
        u = n(50853),
        d = n(24291),
        f = n(79710),
        p = n(90225),
        h = n(35590),
        m = (function () {
          var e = (0, c.Z)(function () {
            var e, t, n;
            return (0, u.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  (e = (0, f.C9)()), (o.label = 1);
                case 1:
                  return (
                    o.trys.push([1, 3, , 4]), [4, window.AppleID.auth.signIn()]
                  );
                case 2:
                  return (
                    (t = o.sent()),
                    (0, f.OP)({
                      token: t.authorization.id_token,
                      authorization_code: t.authorization.code,
                      type: "apple",
                      additionalData: t.user || null,
                    }),
                    (0, d.pr)({
                      action: t.user ? p.Jb.ACTION.SIGN_UP : p.Jb.ACTION.LOGIN,
                      category: e,
                      label: p.Jb.LABEL.APPLE,
                      value: p.Jb.VALUE.SUCCESS,
                    }),
                    [3, 4]
                  );
                case 3:
                  return (
                    (n = o.sent()),
                    h.r.log(n),
                    (0, d.pr)({
                      action: p.Jb.ACTION.ANY,
                      category: e,
                      label: p.Jb.LABEL.APPLE,
                      value: p.Jb.VALUE.FAILURE,
                    }),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        g = function (e) {
          return function () {
            !(function (e, t) {
              window.fbAsyncInit(),
                window.FB.login(
                  function (e) {
                    return e.authResponse
                      ? (0, f.OP)({
                          token: e.authResponse.accessToken,
                          type: "facebook",
                          nextRoute: t,
                        })
                      : h.r.log(e);
                  },
                  { scope: e.permissions, return_scopes: !0 }
                );
            })(
              {
                fbId: i().app.facebook_app_id,
                permissions: "email",
                fields: "email",
              },
              e
            );
          };
        },
        x = n(2784),
        b = function () {
          var e = (0, x.useRef)(),
            t = (0, l.h)().googleOneTapLoaded;
          return (
            (0, x.useEffect)(
              function () {
                t &&
                  e &&
                  e.current &&
                  (function (e) {
                    try {
                      var t, n;
                      e &&
                        google &&
                        (null === google ||
                          void 0 === google ||
                          null === (t = google.accounts) ||
                          void 0 === t ||
                          null === (n = t.id) ||
                          void 0 === n ||
                          n.renderButton(e, {
                            width: "".concat(e.clientWidth),
                            theme: "outline",
                          }));
                    } catch (i) {
                      try {
                        var o, r;
                        null === google ||
                          void 0 === google ||
                          null === (o = google.accounts) ||
                          void 0 === o ||
                          null === (r = o.id) ||
                          void 0 === r ||
                          r.renderButton(e, {
                            width: Number("".concat(e.clientWidth)),
                            theme: "outline",
                          });
                      } catch (a) {
                        h.r.log(a);
                      }
                      h.r.error(i);
                    }
                  })(e.current);
              },
              [t]
            ),
            (0, o.jsx)("div", {
              ref: e,
              className: "google-login-js",
              style: { height: 40 },
            })
          );
        },
        v = function (e) {
          var t = e.title,
            n = e.description,
            r = e.icon,
            i = e.onClick;
          return (0, o.jsx)(
            s.Button,
            {
              old: !0,
              leftIcon: (0, o.jsx)("img", {
                style: {
                  height: 18,
                  width: 18,
                  position: "absolute",
                  left: 12,
                },
                src: r,
                alt: "".concat(t, " icon"),
              }),
              sx: function (e) {
                return { color: e.colors.neutral[9] };
              },
              onClick: i,
              fz: 14,
              fw: 400,
              size: "md",
              w: "100%",
              variant: "outline",
              color: "neutral.3",
              children: n,
            },
            t
          );
        },
        y = function () {
          var e = (0, l.h)().nextRoute;
          return (0, o.jsxs)(s.Flex, {
            gap: 16,
            children: [
              i().global.isChinaApp
                ? (0, o.jsx)(v, {
                    title: "WeChat",
                    description: "Continue with WeChat",
                    icon: "https://prod-static-assets.amberstudent.com/images/wechat-filled.svg?auto=format",
                    onClick: function () {
                      return window.open(a.mx, "_blank");
                    },
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(b, {}),
                      (0, o.jsx)(v, {
                        title: "Facebook",
                        description: "Continue with Facebook",
                        icon: "https://prod-static-assets.amberstudent.com/images/icons8-facebook.svg?auto=format",
                        onClick: g(e),
                      }),
                    ],
                  }),
              (0, o.jsx)(v, {
                title: "Apple",
                description: "Continue with Apple",
                icon: "https://prod-static-assets.amberstudent.com/images/apple_logo.png?auto=format",
                onClick: m,
              }),
            ],
          });
        };
    },
    99951: function (e, t, n) {
      n.d(t, {
        s8: function () {
          return y;
        },
        Nd: function () {
          return d;
        },
        $_: function () {
          return p;
        },
        by: function () {
          return g;
        },
        dv: function () {
          return x;
        },
      });
      var o = n(70865),
        r = n(52322),
        i = n(2784),
        a = n(62595),
        s = n(24862),
        l = n(79710),
        c = (0, a.createStyles)(function (e) {
          return {
            root: {
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 6,
              cursor: "pointer",
              "&[data-disabled]": {
                opacity: 0.5,
                background: e.colors.secondary[5],
                color: "white",
                cursor: "not-allowed",
              },
            },
          };
        }),
        u = function (e) {
          var t = e.disabled,
            n = e.loading,
            o = c().classes;
          return (0, r.jsx)(a.Button, {
            size: "md",
            w: "100%",
            mt: 16,
            type: "submit",
            classNames: o,
            disabled: t,
            loading: n,
            old: !0,
            children: "Continue",
          });
        },
        d = function () {
          var e,
            t = (0, s.h)(),
            n = t.form,
            c = t.setStep,
            d = (0, i.useState)(!1),
            f = d[0],
            p = d[1];
          n.watch("email");
          var h = n.handleSubmit(function (e) {
            p(!0),
              (0, l.P)({
                user: e,
                onSuccess: function () {
                  return c(1);
                },
                onFailure: function () {
                  return (0, l.qw)();
                },
                onCompleted: function () {
                  return p(!1);
                },
              });
          });
          return (0, r.jsxs)("form", {
            onSubmit: h,
            children: [
              (0, r.jsx)(
                a.TextInput,
                (0, o.Z)(
                  {
                    label: "Email Address",
                    placeholder: "Enter your email address",
                    autoComplete: "email",
                    error:
                      null === (e = n.formState.errors.email) || void 0 === e
                        ? void 0
                        : e.message,
                    fz: 14,
                    fw: 400,
                  },
                  n.register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please provide a valid email address",
                    },
                  })
                )
              ),
              (0, r.jsx)(u, { disabled: !n.getValues("email"), loading: f }),
            ],
          });
        },
        f = (0, a.createStyles)(function () {
          return { footer: { justifyContent: "center" } };
        }),
        p = function () {
          var e = (0, s.h)().isMobile,
            t = f().classes;
          return (0, r.jsxs)(a.Text, {
            fz: 10,
            display: "flex",
            mt: e ? 30 : 24,
            className: t.footer,
            children: [
              "By signing in you agree to our\xa0",
              (0, r.jsx)(a.Text, {
                color: "primary.5",
                fw: 400,
                component: "a",
                href: "/privacy",
                target: "_blank",
                rel: "noreferrer",
                children: "Privacy Policy",
              }),
              "\xa0and\xa0",
              (0, r.jsx)(a.Text, {
                color: "primary.5",
                fw: 400,
                component: "a",
                href: "/terms",
                target: "_blank",
                rel: "noreferrer",
                children: "Terms & Conditions",
              }),
            ],
          });
        },
        h =
          (n(8388),
          n(35590),
          (0, a.createStyles)(function (e, t) {
            var n = t.disabled;
            return {
              text: (0, o.Z)(
                {
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  color: e.colors.primary[4],
                },
                n && { cursor: "not-allowed", color: e.colors.neutral[5] }
              ),
            };
          })),
        m = function (e) {
          var t = e.children,
            n = e.onClick,
            o = e.disabled,
            i = h({ disabled: o }).classes;
          return (0, r.jsx)(a.Text, {
            fz: 12,
            td: "underline",
            className: i.text,
            onClick: n,
            children: t,
          });
        },
        g = function () {
          var e,
            t = (0, s.h)(),
            n = t.form,
            c = t.setStep,
            d = t.nextRoute,
            f = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 15,
                t = (0, i.useState)(e),
                n = t[0],
                o = t[1],
                r = (0, i.useCallback)(function () {
                  return o(function (e) {
                    return e - 1;
                  });
                }, []);
              return (
                (0, i.useEffect)(
                  function () {
                    n > 0 && setTimeout(r, 1e3);
                  },
                  [n, r]
                ),
                {
                  timer: n,
                  resetTimer: function () {
                    n || o(e);
                  },
                }
              );
            })(15),
            p = f.timer,
            h = f.resetTimer,
            g = (0, i.useState)(!1),
            x = g[0],
            b = g[1];
          n.watch("otp");
          var v = n.handleSubmit(function (e) {
            b(!0),
              (0, l.gl)({
                user: e,
                onSuccess: function (e) {
                  return (0, l.he)(e.data, "email_otp", d);
                },
                onFailure: function (e) {
                  e && 400 === e.status ? (0, l.oz)() : (0, l.an)(),
                    n.setError("otp", {
                      message: "Please provide a valid OTP",
                    });
                },
                onCompleted: function () {
                  return b(!1);
                },
              });
          });
          return (
            (0, i.useEffect)(function () {
              return function () {
                n.setValue("otp", "");
              };
            }, []),
            (0, r.jsxs)("form", {
              onSubmit: v,
              children: [
                (0, r.jsxs)(a.Group, {
                  position: "apart",
                  align: "flex-end",
                  mb: 16,
                  noWrap: !0,
                  children: [
                    (0, r.jsxs)(a.Text, {
                      fz: 12,
                      display: "block",
                      children: [
                        (0, r.jsx)(a.Text, {
                          children: "Enter code sent on your email",
                        }),
                        (0, r.jsx)(a.Text, {
                          fw: 600,
                          children: n.getValues("email"),
                        }),
                      ],
                    }),
                    (0, r.jsx)(m, {
                      onClick: function () {
                        return c(0);
                      },
                      children: "Change",
                    }),
                  ],
                }),
                (0, r.jsx)(
                  a.TextInput,
                  (0, o.Z)(
                    {
                      inputMode: "numeric",
                      autoComplete: "one-time-code",
                      label: "OTP",
                      placeholder: "Enter OTP",
                      error:
                        null === (e = n.formState.errors.otp) || void 0 === e
                          ? void 0
                          : e.message,
                      fz: 14,
                      fw: 400,
                    },
                    n.register("otp", {
                      pattern: {
                        value: /\d{6}/,
                        message: "Please provide a valid OTP",
                      },
                    })
                  )
                ),
                (0, r.jsx)(u, { disabled: !n.getValues("otp"), loading: x }),
                (0, r.jsxs)(a.Group, {
                  position: "apart",
                  fz: 12,
                  mt: 16,
                  children: [
                    (0, r.jsx)(a.Text, {
                      children: "Haven\u2019t received the OTP",
                    }),
                    (0, r.jsxs)(m, {
                      onClick: function () {
                        (0, l.P)({
                          user: n.getValues(),
                          onSuccess: function () {
                            (0, l.gV)(), h();
                          },
                          onFailure: function () {
                            return (0, l.qw)();
                          },
                        });
                      },
                      disabled: p > 0,
                      children: [
                        "Resend ",
                        p > 0 &&
                          (0, r.jsxs)(r.Fragment, { children: ["(", p, "s)"] }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        x = function () {
          return (0, r.jsx)(a.Divider, {
            my: 24,
            label: (0, r.jsx)(a.Text, {
              fz: 14,
              px: 16,
              color: "neutral.4",
              children: "or",
            }),
          });
        },
        b = (n(45572), n(94589)),
        v = n(72789),
        y = function (e) {
          var t = e.children,
            n = e.animateKey;
          return (0, r.jsx)(b.M, {
            exitBeforeEnter: !0,
            children: (0, r.jsx)(
              v.E.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.3 } },
                exit: { opacity: 0 },
                children: t,
              },
              n
            ),
          });
        };
    },
    24862: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o.hq;
        },
      });
      var o = n(61772);
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/9951.db691780d9ff4c30.js.map
