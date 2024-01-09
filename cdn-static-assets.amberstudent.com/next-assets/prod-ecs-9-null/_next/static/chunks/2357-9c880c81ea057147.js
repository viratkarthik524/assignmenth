"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2357],
  {
    67490: function (n, e, o) {
      o.d(e, {
        Q: function () {
          return d;
        },
      });
      var i = o(52322),
        c = o(2784),
        a = o(99333),
        t = o(24291),
        r = o(62595),
        l = o(47842),
        s = (0, o(1082).kc)(function (n, e) {
          var o = e.onProfilePage;
          return {
            appWrapper: (0, l.Z)(
              {
                background: n.colors.neutral[1],
                position: o ? "relative" : "fixed",
                justifyItems: "center",
                alignItems: "center",
                top: 0,
                zIndex: o ? 0 : 11,
                width: "100%",
              },
              n.fn.largerThan("md"),
              { display: "none" }
            ),
            wrapper: (0, l.Z)(
              {
                padding: o ? "12px 16px" : "16px 16px 16px 0px",
                height: "100%",
                width: "100%",
              },
              n.fn.largerThan("md"),
              { display: "none" }
            ),
            amberImg: { width: 42, height: 42 },
            app_rating: {
              fontSize: 12,
              color: n.colors.neutral[9],
              fontWeight: 400,
            },
            img: { width: 32, height: 32 },
            span: { color: n.colors.primary[4] },
            cta: {
              border: "2px solid ".concat(n.colors.primary[4]),
              background: "rgba(237, 58, 86, 0.10) !important",
              color: n.colors.primary[4],
              padding: "8px 12px",
            },
            iconWrapper: {
              display: "flex",
              padding: 4,
              alignItems: "center",
              gap: 10,
            },
            iconClose: { fontSize: "16px" },
          };
        }),
        d = function (n) {
          var e = n.from,
            o = n.showAppBanner,
            l = void 0 !== o && o,
            d = n.onClose,
            u = e === a.Rh,
            p = s({ onProfilePage: u }).classes,
            x = (0, r.isMobileView)();
          (0, c.useEffect)(
            function () {
              var n;
              return (
                x &&
                  (e !== a.E0.SEARCH &&
                  "function" === typeof d &&
                  "false" === (0, t.ej)("showAppBanner")
                    ? d()
                    : l &&
                      (n = setTimeout(function () {
                        "undefined" !== typeof gtag &&
                          gtag("event", "app_download_option_shown", {
                            event_category: "app_download_option",
                            value: e,
                          });
                      }, 2e3))),
                function () {
                  return clearInterval(n);
                }
              );
            },
            [x]
          );
          return (0, i.jsx)(i.Fragment, {
            children:
              l &&
              (0, i.jsxs)(r.Flex, {
                className: p.appWrapper,
                direction: "row",
                columnGap: 4,
                children: [
                  !u &&
                    (0, i.jsx)("div", {
                      onClick: function () {
                        (0, t.pr)({
                          action: "app_download_banner_dismissed",
                          category: "app_download_option",
                          value: e,
                        });
                        var n = new Date();
                        n.setTime(n.getTime() + 1728e5),
                          (window.document.cookie =
                            "showAppBanner=false;expires=".concat(
                              n.toGMTString(),
                              ";path=/;"
                            )),
                          d();
                      },
                      className: p.iconWrapper,
                      children: (0, i.jsx)("i", {
                        className: "icon-close ".concat(p.iconClose),
                      }),
                    }),
                  (0, i.jsxs)(r.Group, {
                    className: p.wrapper,
                    position: "apart",
                    children: [
                      (0, i.jsxs)(r.Group, {
                        spacing: 8,
                        children: [
                          (0, i.jsx)("img", {
                            src: "".concat(a.YQ, "amber-app-logo.svg"),
                            alt: "amber-app",
                            className: p.amberImg,
                          }),
                          (0, i.jsxs)(r.Flex, {
                            h: "100%",
                            py: 4,
                            children: [
                              (0, i.jsx)(r.Text, {
                                fz: 12,
                                fw: 600,
                                color: "neutral.9",
                                lh: "150%",
                                children: "amber is better on the app",
                              }),
                              (0, i.jsxs)(r.Text, {
                                fz: 10,
                                fw: 400,
                                lh: "150%",
                                color: "neutral.4",
                                mt: 4,
                                children: [
                                  (0, i.jsx)("i", {
                                    className: "icon-gold-star",
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: p.app_rating,
                                    children: [" ", a.ku],
                                  }),
                                  " | 25K+ Downloads",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Anchor, {
                        component: "a",
                        target: "_blank",
                        href: "".concat(a.mb, "?parent_page=").concat(e),
                        onClick: function () {
                          (0, t.pr)({
                            action: "app_download_click",
                            category: "app_download_option",
                            value: e,
                          });
                        },
                        underline: !1,
                        children: (0, i.jsx)(r.Button, {
                          fz: 10,
                          radius: "6px",
                          className: p.cta,
                          fw: 600,
                          children: "Download App",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        };
    },
    80964: function (n, e, o) {
      o.d(e, {
        s: function () {
          return t;
        },
      });
      var i = o(52322),
        c = o(62595),
        a = o(88299),
        t = function (n) {
          var e = n.icon,
            o = n.label,
            t = n.rightSection,
            r = n.redirectTo,
            l = n.children,
            s = n.color,
            d = n.defaultOpened,
            u = void 0 !== d && d,
            p = n.active,
            x = void 0 !== p && p,
            m = n.clickHandler,
            g = (0, a.W)(),
            f = g.classes,
            h = g.cx;
          return r
            ? (0, i.jsx)(c.NavLink, {
                label: o,
                icon: e,
                rightSection: t,
                component: "a",
                target: "_blank",
                href: r,
                active: x,
                onClick: m,
                color: s,
                classNames: { root: f.menuItem, icon: f.icon, label: f.label },
              })
            : (0, i.jsx)(c.NavLink, {
                label: o,
                icon: e,
                rightSection: t,
                classNames: {
                  root: h(f.menuItem, f.dropdownHeader),
                  icon: f.icon,
                  label: f.label,
                },
                disableRightSectionRotation: !0,
                defaultOpened: u,
                active: x,
                onClick: m,
                color: s,
                children: l,
              });
        };
    },
    80726: function (n, e, o) {
      o.d(e, {
        H: function () {
          return t;
        },
      });
      var i = o(52322),
        c = o(62595),
        a = o(88299),
        t = function (n) {
          var e = n.opened,
            o = n.close,
            t = n.title,
            r = n.children,
            l = (0, a.Xd)().classes;
          return (0, i.jsx)(c.Modal, {
            opened: e,
            onClose: o,
            title: t,
            fullScreen: !0,
            classNames: l,
            zIndex: 190,
            "data-testid": "mobile-menu-section",
            children: r,
          });
        };
    },
    50696: function (n, e, o) {
      o.d(e, {
        h: function () {
          return _;
        },
      });
      var i = o(98788),
        c = o(50853),
        a = o(52322),
        t = o(2784),
        r = o(8388),
        l = o.n(r),
        s = o(99333),
        d = o(4454),
        u = o(36906),
        p = o(63186),
        x = o(24291),
        m = o(61695),
        g = o(62595),
        f = o(70016),
        h = o(32248),
        b = o(67490),
        j = o(80964),
        v = o(88299),
        _ = function (n) {
          var e = n.auth,
            o = n.regionOrPropertyName,
            r = n.handleEventEmitter,
            _ = (n.showAppBanner, (0, v.tB)()),
            C = _.classes,
            N = _.cx,
            w = f.Kc.SUPPORT_CLICKED,
            k = f.Kc.QUICK_CHAT_CLICKED,
            I = f.Kc.HELP_CENTRE_CLICKED,
            E = f.Kc.HOW_IT_WORKS_CLICKED,
            L = f.Kc.WHATSAPP_CLICKED,
            S = f.Kc.FACEBOOK_CLICKED,
            T = f.Kc.PHONE_CLICKED,
            K = f.Kc.EMAIL_CLICKED,
            B = f.Kc.SHORTLIST_CLICKED,
            H = f.Kc.PROFILE_CLICKED,
            D = f.Kc.BOOKINGS_CLICKED,
            y = f.Kc.GROUP_BOOKINGS_CLICKED,
            A = f.Kc.REFER_CLICKED,
            O = f.Kc.PARTNER_WITH_US_CLICKED,
            G = f.Kc.LIST_WITH_US_CLICKED,
            R = f.Kc.LOGOUT_CLICKED,
            P = f.Kc.LOGIN_CLICKED,
            z = f.Kc.WECHAT_CLICKED,
            W = function (n) {
              r && r(n);
            },
            U = (0, h.$)({ handleEventEmitter: W }),
            F = U.language,
            M = U.handleLanguageChange,
            Z = (0, t.useState)("GB"),
            Q = Z[0],
            X = Z[1],
            Y = { AU: "AU", US: "US", GB: "GB", IN: "IN" };
          return (
            (0, t.useEffect)(function () {
              var n = (function () {
                var n = (0, i.Z)(function () {
                  var n;
                  return (0, c.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, (0, m.J)()];
                      case 1:
                        return (
                          null !== (n = e.sent() || "GB") &&
                            void 0 !== n &&
                            Y[n] &&
                            X(n),
                          [2]
                        );
                    }
                  });
                });
                return function () {
                  return n.apply(this, arguments);
                };
              })();
              n();
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                l().global.is_smartcat_enabled &&
                  l().global.isChinaApp &&
                  (0, a.jsx)(j.s, {
                    label: "Language",
                    icon: (0, a.jsx)("i", { className: "icon-globe" }),
                    rightSection: (0, a.jsx)("i", {
                      className: "icon-arrow-down",
                    }),
                    defaultOpened: !0,
                    children: (0, a.jsx)(g.Box, {
                      className: C.subMenu,
                      children: s.f1.map(function (n) {
                        var e = n.label,
                          o = n.value;
                        return (0, a.jsx)(
                          j.s,
                          {
                            label: e,
                            clickHandler: function () {
                              return M(o);
                            },
                            active: e === F,
                            color: "danger.6",
                          },
                          o
                        );
                      }),
                    }),
                  }),
                (0, a.jsx)(j.s, {
                  label: "Support",
                  clickHandler: function () {
                    return W({ action: w });
                  },
                  icon: (0, a.jsx)("i", { className: "icon-support" }),
                  rightSection: (0, a.jsx)("i", {
                    className: "icon-arrow-down",
                  }),
                  children: (0, a.jsxs)(g.Box, {
                    className: C.subMenu,
                    children: [
                      (0, a.jsx)(g.Text, {
                        className: C.sectionSubtitle,
                        children: "Quick Links",
                      }),
                      (0, a.jsxs)(g.Flex, {
                        direction: "row",
                        children: [
                          (0, a.jsx)(j.s, {
                            label: "Help Center",
                            icon: (0, a.jsx)("i", { className: "icon-help" }),
                            redirectTo: s.gO,
                            clickHandler: function () {
                              return W({
                                action: I,
                                click_location: "support",
                              });
                            },
                          }),
                          (0, a.jsx)(j.s, {
                            label: "How It Works",
                            icon: (0, a.jsx)("i", {
                              className: "icon-how-it-works",
                            }),
                            redirectTo: s.Ok,
                            clickHandler: function () {
                              return W({ action: E });
                            },
                          }),
                        ],
                      }),
                      (0, a.jsx)(g.Divider, {
                        className: N(C.divider, C.subDivider),
                      }),
                      (0, a.jsx)(g.Text, {
                        className: C.sectionSubtitle,
                        children: "Support Now",
                      }),
                      (0, a.jsx)(j.s, {
                        label: "Quick Chat",
                        icon: (0, a.jsx)("i", { className: "icon-chat-color" }),
                        rightSection: (0, a.jsx)(g.Button, {
                          component: "span",
                          old: !0,
                          compact: !0,
                          radius: "xl",
                          color: "secondary.5",
                          size: "xs",
                          children: "Online",
                        }),
                        clickHandler: function () {
                          (0, x._4)(!0), W({ action: k });
                        },
                      }),
                      l().global.isChinaApp
                        ? (0, a.jsx)(j.s, {
                            label: "WeChat",
                            icon: (0, a.jsx)("i", {
                              className: "icon-wechat-filled",
                            }),
                            redirectTo: s.mx,
                            clickHandler: function () {
                              return W({ action: z });
                            },
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(j.s, {
                                label: "Whatsapp",
                                icon: (0, a.jsx)("i", {
                                  className: "icon-whatsapp-color",
                                }),
                                redirectTo: s.s7,
                                clickHandler: function () {
                                  return W({ action: L });
                                },
                              }),
                              (0, a.jsx)(j.s, {
                                label: "Facebook Messenger",
                                icon: (0, a.jsx)("i", {
                                  className: "icon-messenger-color",
                                }),
                                redirectTo: s.tj,
                                clickHandler: function () {
                                  return W({ action: S });
                                },
                              }),
                            ],
                          }),
                      (0, a.jsx)(g.Divider, {
                        className: N(C.divider, C.subDivider),
                      }),
                      Q === Y.GB &&
                        (0, a.jsx)(j.s, {
                          label: s._8.full_number,
                          redirectTo: "tel:".concat(s._8.full_number),
                          icon: (0, a.jsx)("i", { className: "icon-phone" }),
                          clickHandler: function () {
                            return W(T, "".concat(s._8.full_number));
                          },
                        }),
                      Q === Y.IN &&
                        (0, a.jsx)(j.s, {
                          label: s.g8.full_number,
                          redirectTo: "tel:".concat(s.g8.full_number),
                          icon: (0, a.jsx)("i", { className: "icon-phone" }),
                          clickHandler: function () {
                            return W(T, "".concat(s.g8.full_number));
                          },
                        }),
                      Q === Y.US &&
                        (0, a.jsx)(j.s, {
                          label: s.jb.full_number,
                          redirectTo: "tel:".concat(s.jb.full_number),
                          icon: (0, a.jsx)("i", { className: "icon-phone" }),
                          clickHandler: function () {
                            return W(T, "".concat(s.jb.full_number));
                          },
                        }),
                      Q === Y.AU &&
                        (0, a.jsx)(j.s, {
                          label: s.vt.full_number,
                          redirectTo: "tel:".concat(s.vt.full_number),
                          icon: (0, a.jsx)("i", { className: "icon-phone" }),
                          clickHandler: function () {
                            return W(T, "".concat(s.vt.full_number));
                          },
                        }),
                      (0, a.jsx)(g.Divider, {
                        className: N(C.divider, C.subDivider),
                      }),
                      (0, a.jsx)(j.s, {
                        label: s.rg,
                        redirectTo: "mailto:".concat(s.rg),
                        icon: (0, a.jsx)("i", { className: "icon-envelope" }),
                        clickHandler: function () {
                          return W({ action: K });
                        },
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(j.s, {
                  label: "Shortlist",
                  icon: (0, a.jsx)("i", { className: "icon-shortlist" }),
                  redirectTo: s.Pp,
                  clickHandler: function () {
                    return W({ action: B, label: o });
                  },
                }),
                (0, p.X)(e) &&
                  (0, a.jsx)(j.s, {
                    label: "Dashboard",
                    icon: (0, a.jsx)("i", { className: "icon-dashboard" }),
                    redirectTo: s.m7,
                  }),
                (0, a.jsx)(g.Divider, { className: C.divider }),
                !e.status &&
                  (0, a.jsx)(g.Box, {
                    className: C.highlight,
                    children: "Login to Continue",
                  }),
                (0, a.jsx)(j.s, {
                  label: "My Profile",
                  icon: (0, a.jsx)("i", { className: "icon-account" }),
                  redirectTo: s.bo,
                  clickHandler: function () {
                    return W({ action: H });
                  },
                }),
                (0, a.jsx)(j.s, {
                  label: "Bookings",
                  icon: (0, a.jsx)("i", { className: "icon-booking" }),
                  redirectTo: s.Yi,
                  clickHandler: function () {
                    return W({ action: D });
                  },
                }),
                (0, a.jsx)(g.Divider, { className: C.divider }),
                (0, a.jsx)(j.s, {
                  label: "Group Booking",
                  icon: (0, a.jsx)("img", {
                    src: "https://prod-static-assets.amberstudent.com/images/user-group-simple.svg",
                  }),
                  rightSection: (0, a.jsx)(g.Button, {
                    old: !0,
                    compact: !0,
                    radius: "xl",
                    color: "primary.5",
                    size: "xs",
                    children: "New",
                  }),
                  redirectTo: s.LO,
                  clickHandler: function () {
                    return W({ action: y });
                  },
                }),
                (0, a.jsx)(j.s, {
                  label: "Refer a Friend",
                  icon: (0, a.jsx)("i", { className: "icon-refer-1" }),
                  rightSection: (0, a.jsx)(g.Button, {
                    old: !0,
                    compact: !0,
                    radius: "xl",
                    color: "secondary.5",
                    size: "xs",
                    children: "Get 50 GBP",
                  }),
                  redirectTo: s.$N,
                  clickHandler: function () {
                    return W({ action: A });
                  },
                }),
                (0, a.jsx)(j.s, {
                  label: "Partner with Us",
                  icon: (0, a.jsx)("i", {
                    className: "".concat(
                      C.partnerIcon,
                      " icon-partner-with-us"
                    ),
                  }),
                  redirectTo: s.n,
                  clickHandler: function () {
                    return W({ action: O });
                  },
                }),
                (0, a.jsx)(j.s, {
                  label: "List with Us",
                  icon: (0, a.jsx)("i", { className: "icon-list-with-us" }),
                  redirectTo: s.Yc,
                  clickHandler: function () {
                    return W({ action: G });
                  },
                }),
                (0, a.jsx)(g.Divider, { className: C.divider }),
                !l().global.isChinaApp &&
                  (0, a.jsx)(g.Flex, {
                    className: C.appBanner,
                    children: (0, a.jsx)(b.Q, {
                      from: s.Rh,
                      showAppBanner: !0,
                    }),
                  }),
                e.status
                  ? (0, a.jsx)(j.s, {
                      icon: (0, a.jsx)("i", { className: "icon-logout" }),
                      label: "Logout",
                      clickHandler: function () {
                        d.Z.emit(u.zX), W({ action: R });
                      },
                    })
                  : (0, a.jsx)(g.Box, {
                      className: C.loginButtonContainer,
                      children: (0, a.jsx)(g.Button, {
                        old: !0,
                        variant: "outline",
                        color: "neutral.3",
                        className: C.loginButton,
                        leftIcon: (0, a.jsx)("i", { className: "icon-login" }),
                        onClick: function () {
                          d.Z.emit(u.ez), W({ action: P });
                        },
                        children: (0, a.jsx)(g.Text, {
                          c: "neutral.9",
                          children: "Login",
                        }),
                      }),
                    }),
              ],
            })
          );
        };
    },
    88299: function (n, e, o) {
      o.d(e, {
        W: function () {
          return a;
        },
        Xd: function () {
          return r;
        },
        tB: function () {
          return t;
        },
      });
      var i = o(47842),
        c = o(62595),
        a = (0, c.createStyles)(function (n) {
          var e;
          return {
            menuItem:
              ((e = {
                color: n.colors.neutral[8],
                margin: "4px 0",
                padding: 0,
                height: 38,
              }),
              (0, i.Z)(e, n.fn.largerThan("md"), { padding: "12px 16px" }),
              (0, i.Z)(e, "&:active, &:visited, &:focus", {
                color: n.colors.neutral[8],
              }),
              e),
            dropdownHeader: { color: n.colors.neutral[9] },
            icon: { height: 18, width: 18, margin: 0 },
            label: { marginLeft: 8 },
          };
        }),
        t = (0, c.createStyles)(function (n) {
          return {
            divider: {
              color: n.colors.neutral[2],
              margin: 8,
              marginLeft: -12,
              marginRight: -12,
            },
            sectionSubtitle: {
              color: n.colors.neutral[7],
              fontSize: 12,
              padding: 5,
              marginLeft: 0,
            },
            subDivider: { marginLeft: -22, marginRight: -2 },
            loginButtonContainer: {
              position: "fixed",
              bottom: 0,
              right: 0,
              left: 0,
              height: 62,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 16px",
              borderTop: "1px solid ".concat(n.colors.neutral[3]),
              background: "#fff",
            },
            loginButton: {
              alignSelf: "stretch",
              flex: "1 0 0",
              color: n.colors.neutral[9],
              fontSize: 14,
              fontWeight: 500,
            },
            partnerIcon: { width: "20px", fontSize: 14 },
            highlight: {
              padding: "4px 8px",
              background: n.colors.neutral[2],
              color: n.colors.neutral[5],
              width: "100%",
              marginBottom: "4px",
              marginTop: "8px",
              fontSize: 12,
            },
            appBanner: {
              height: 59,
              borderRadius: 8,
              boxShadow:
                "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
              marginBottom: 16,
            },
          };
        }),
        r = (0, c.createStyles)(function (n) {
          return {
            inner: { "& > div": { padding: "0 !important" } },
            root: { padding: "0 !important" },
            header: {
              padding: 16,
              color: n.colors.neutral[9],
              position: "sticky",
              top: "0",
              background: "white",
              borderBottom: "1px solid ".concat(n.colors.neutral[2]),
              marginBottom: "0",
              width: "100%",
              zIndex: 10,
            },
            body: { padding: "0 16px 60px" },
            content: {
              padding: "10px -10px",
              borderTop: "1px solid ".concat(n.colors.neutral[2]),
            },
          };
        });
    },
    32248: function (n, e, o) {
      o.d(e, {
        $: function () {
          return d;
        },
      });
      var i = o(2784),
        c = o(99333),
        a = o(24291),
        t = o(70016),
        r = o(8388),
        l = o.n(r),
        s = t.Kc.LANGUAGE_SELECTED,
        d = function (n) {
          var e = n.handleEventEmitter,
            o = t.Kc.LANGUAGE_MODAL_CLICKED,
            r = (0, i.useState)(""),
            d = r[0],
            u = r[1];
          (0, i.useEffect)(function () {
            !(function () {
              var n,
                e = localStorage.getItem("wglang") || "en",
                o =
                  null ===
                    (n = c.f1.find(function (n) {
                      return n.value === e;
                    })) || void 0 === n
                    ? void 0
                    : n.label;
              o && u(o);
            })();
          }, []);
          return {
            onCLickLanguageSelector: function () {
              e({ action: o });
            },
            language: d,
            handleLanguageChange: function (n) {
              var o,
                i = c.f1.find(function (e) {
                  return e.value === n;
                }).label;
              u(i);
              var t = window.location.pathname,
                r = n || "en",
                d = (0, a.Y4)(t, { params: { scLang: r } }),
                p =
                  ".".concat(
                    null === l() ||
                      void 0 === l() ||
                      null === (o = l().urls) ||
                      void 0 === o
                      ? void 0
                      : o.web_service_hostname
                  ) || 0;
              (window.document.cookie = "wglang="
                .concat(r, ";domain=")
                .concat(p, ";path=/;")),
                localStorage.setItem("wglang", n),
                e(s, r),
                (window.location.href = d);
            },
          };
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/2357-9c880c81ea057147.js.map
