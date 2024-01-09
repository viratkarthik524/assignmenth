"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9843],
  {
    89843: function (n, e, t) {
      t.r(e),
        t.d(e, {
          Dashboard: function () {
            return l;
          },
          Login: function () {
            return d;
          },
          Profile: function () {
            return f;
          },
          Support: function () {
            return b;
          },
          Wishlist: function () {
            return _;
          },
        });
      var c = t(52322),
        o = t(63186),
        r = t(62595),
        i = t(87055),
        l = function (n) {
          var e = n.auth,
            t = n.isSolid,
            l = (0, i.aL)({ isSolid: t }).classes;
          return (
            (0, o.X)(e) &&
            (0, c.jsx)(r.Button, {
              px: 8,
              mx: 4,
              className: l.button,
              old: !0,
              variant: "subtle",
              component: "a",
              href: "/dashboard",
              children: "Dashboard",
            })
          );
        },
        s = t(2784),
        a = t(4454),
        x = t(36906),
        u = t(35590),
        p = t(70016),
        d = function (n) {
          var e = n.auth,
            t = n.isSolid,
            o = n.handleEventEmitter,
            l = (0, i.aL)({ isSolid: t }).classes,
            d = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(function () {
              setTimeout(function () {
                try {
                  if (d && d.current) {
                    var n = (d.current.getBoundingClientRect().y || 120) + 50;
                    document
                      .querySelector(":root")
                      .style.setProperty("--onetaptop", "".concat(n, "px"));
                  }
                } catch (e) {
                  u.r.error(e);
                }
              }, 100);
            }, []),
            !e.status &&
              (0, c.jsx)(r.Button, {
                mx: 4,
                px: 8,
                leftIcon: (0, c.jsx)("i", { className: "icon-login" }),
                old: !0,
                variant: "subtle",
                onClick: function (n) {
                  n.preventDefault(), a.Z.emit(x.ez), o(p.Kc.LOGIN_CLICKED);
                },
                className: l.loginButton,
                ref: d,
                children: "Login",
              })
          );
        },
        h = t(99333),
        f = function (n) {
          var e = n.auth,
            t = n.isSolid,
            o = n.handleEventEmitter,
            l = (0, i.aL)({ isSolid: t }).classes,
            s = p.Kc.PROFILE_CLICKED,
            u = p.Kc.BOOKINGS_CLICKED,
            d = p.Kc.GROUP_BOOKINGS_CLICKED,
            f = p.Kc.REFER_CLICKED,
            m = p.Kc.PARTNER_WITH_US_CLICKED,
            j = p.Kc.LIST_WITH_US_CLICKED,
            w = p.Kc.LOGOUT_CLICKED,
            g = p.Kc.MENU_CLICKED;
          return (0, c.jsxs)(r.NewMenu, {
            shadow: "sm",
            radius: "xs",
            width: 270,
            position: "bottom-end",
            ml: 4,
            children: [
              (0, c.jsx)(r.NewMenu.Target, {
                children: (0, c.jsx)(r.Button, {
                  rightIcon: (0, c.jsx)("i", { className: "icon-menu" }),
                  px: 8,
                  py: 4,
                  old: !0,
                  variant: "subtle",
                  "aria-label": "my profile",
                  classNames: { root: l.loginButton, rightIcon: l.rightIcon },
                  onClick: function () {
                    return o(g);
                  },
                  children: (0, c.jsx)("div", {
                    className: l.userCircleIcon,
                    children: (0, c.jsx)("i", { className: "icon-user-18" }),
                  }),
                }),
              }),
              (0, c.jsxs)(r.NewMenu.Dropdown, {
                p: 8,
                children: [
                  !e.status &&
                    (0, c.jsx)(r.NewMenu.Label, {
                      children: "Login to continue",
                    }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.bo,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      gap: 8,
                      align: "center",
                      onClick: function () {
                        return o(s);
                      },
                      children: [
                        (0, c.jsx)("i", {
                          className: "icon-account ".concat(l.navIcon),
                        }),
                        (0, c.jsx)(r.Text, {
                          fw: 500,
                          fz: 14,
                          lh: "18px",
                          color: "neutral.9",
                          children: "My Profile",
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.Yi,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      gap: 8,
                      align: "center",
                      onClick: function () {
                        return o(u);
                      },
                      children: [
                        (0, c.jsx)("i", {
                          className: "icon-booking ".concat(l.navIcon),
                        }),
                        (0, c.jsx)(r.Text, {
                          fw: 500,
                          fz: 14,
                          lh: "18px",
                          color: "neutral.9",
                          children: "Bookings",
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(r.NewMenu.Divider, { px: 16 }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.LO,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      justify: "space-between",
                      gap: 8,
                      align: "center",
                      onClick: function () {
                        return o(d);
                      },
                      children: [
                        (0, c.jsxs)(r.Flex, {
                          direction: "row",
                          gap: 8,
                          children: [
                            (0, c.jsx)("img", {
                              src: "https://prod-static-assets.amberstudent.com/images/user-group-simple.svg",
                            }),
                            (0, c.jsx)(r.Text, {
                              fw: 500,
                              fz: 14,
                              lh: "18px",
                              color: "neutral.9",
                              children: "Group Bookings",
                            }),
                          ],
                        }),
                        (0, c.jsx)(r.Button, {
                          old: !0,
                          compact: !0,
                          radius: "xl",
                          color: "primary.5",
                          size: "xs",
                          justify: "flex-end",
                          children: "New",
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.$N,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      gap: 8,
                      justify: "space-between",
                      align: "center",
                      onClick: function () {
                        return o(f);
                      },
                      children: [
                        (0, c.jsxs)(r.Flex, {
                          direction: "row",
                          gap: 8,
                          children: [
                            (0, c.jsx)("i", {
                              className: "icon-refer-1 ".concat(l.navIcon),
                            }),
                            (0, c.jsx)(r.Text, {
                              fw: 500,
                              fz: 14,
                              lh: "18px",
                              color: "neutral.9",
                              children: "Refer a friend",
                            }),
                          ],
                        }),
                        (0, c.jsx)(r.Button, {
                          old: !0,
                          compact: !0,
                          radius: "xl",
                          color: "secondary.5",
                          size: "xs",
                          justify: "flex-end",
                          children: "Get 50 GBP",
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.n,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      gap: 8,
                      align: "center",
                      onClick: function () {
                        return o(m);
                      },
                      children: [
                        (0, c.jsx)("i", {
                          className: "icon-partner-with-us ".concat(l.navIcon),
                        }),
                        (0, c.jsx)(r.Text, {
                          fw: 500,
                          fz: 14,
                          lh: "18px",
                          color: "neutral.9",
                          children: "Partner With Us",
                        }),
                      ],
                    }),
                  }),
                  (0, c.jsx)(r.NewMenu.Item, {
                    p: 0,
                    mt: 4,
                    component: "a",
                    target: "_blank",
                    href: h.Yc,
                    children: (0, c.jsxs)(r.Flex, {
                      px: 16,
                      py: 12,
                      direction: "row",
                      gap: 8,
                      align: "center",
                      onClick: function () {
                        return o(j);
                      },
                      children: [
                        (0, c.jsx)("i", {
                          className: "icon-list-with-us ".concat(l.navIcon),
                        }),
                        (0, c.jsx)(r.Text, {
                          fw: 500,
                          fz: 14,
                          lh: "18px",
                          color: "neutral.9",
                          children: "List With Us",
                        }),
                      ],
                    }),
                  }),
                  e.status &&
                    (0, c.jsxs)(c.Fragment, {
                      children: [
                        (0, c.jsx)(r.NewMenu.Divider, { px: 16 }),
                        (0, c.jsx)(r.NewMenu.Item, {
                          p: 0,
                          mt: 4,
                          component: "button",
                          onClick: function (n) {
                            n.preventDefault(), a.Z.emit(x.zX), o(w);
                          },
                          children: (0, c.jsxs)(r.Flex, {
                            px: 16,
                            py: 12,
                            direction: "row",
                            gap: 8,
                            align: "center",
                            children: [
                              (0, c.jsx)("i", { className: "icon-login" }),
                              (0, c.jsx)(r.Text, {
                                fw: 500,
                                fz: 14,
                                lh: "18px",
                                color: "neutral.9",
                                children: "Logout",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        m = t(98788),
        j = t(50853),
        w = t(8388),
        g = t.n(w),
        I = t(24291),
        N = t(61695),
        C = (0, r.createStyles)(function () {
          return {
            qr: { height: "124px", width: "124px" },
            wrapper: { borderRadius: "8px" },
          };
        }),
        v = function () {
          var n = C().classes;
          return (0, c.jsxs)(r.Flex, {
            px: 16,
            py: 12,
            direction: "row",
            gap: 8,
            align: "center",
            bg: "secondary.0",
            className: n.wrapper,
            children: [
              (0, c.jsx)("img", { src: p.t_, className: n.qr }),
              (0, c.jsxs)(r.Flex, {
                children: [
                  (0, c.jsx)(r.Text, {
                    color: "neutral.9",
                    fz: "16px",
                    fw: 700,
                    children: "Chat on WeChat",
                  }),
                  (0, c.jsx)(r.Text, {
                    color: "neutral.9",
                    fz: "16px",
                    fw: 400,
                    children: "ID:Amber_student",
                  }),
                ],
              }),
            ],
          });
        },
        b = function (n) {
          var e = n.isSolid,
            t = n.handleEventEmitter,
            o = (0, i.aL)({ isSolid: e }).classes,
            l = (0, i.TV)().classes,
            a = p.Kc.SUPPORT_CLICKED,
            x = p.Kc.QUICK_CHAT_CLICKED,
            u = p.Kc.HELP_CENTRE_CLICKED,
            d = p.Kc.HOW_IT_WORKS_CLICKED,
            f = p.Kc.WHATSAPP_CLICKED,
            w = p.Kc.FACEBOOK_CLICKED,
            C = p.Kc.PHONE_CLICKED,
            b = p.Kc.EMAIL_CLICKED,
            _ = p.Kc.WECHAT_CLICKED,
            k = (0, r.isMobileView)(),
            E = (0, s.useState)("GB"),
            K = E[0],
            y = E[1];
          return (
            (0, s.useEffect)(function () {
              var n = ["AU", "US", "GB", "IN"],
                e = (function () {
                  var e = (0, m.Z)(function () {
                    var e;
                    return (0, j.__generator)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, (0, N.J)()];
                        case 1:
                          return (
                            null !== (e = t.sent() || "GB") &&
                              void 0 !== e &&
                              n.includes(e) &&
                              y(e),
                            [2]
                          );
                      }
                    });
                  });
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
              e();
            }, []),
            (0, c.jsxs)(r.NewMenu, {
              classNames: l,
              shadow: "sm",
              radius: "xs",
              position: "bottom-end",
              mx: 4,
              children: [
                (0, c.jsx)(r.NewMenu.Target, {
                  children: (0, c.jsx)(r.Button, {
                    px: 8,
                    leftIcon: (0, c.jsx)("i", { className: "icon-support" }),
                    classNames: { root: o.button, leftIcon: o.leftIcon },
                    old: !0,
                    variant: "subtle",
                    onClick: function () {
                      return t({ action: a });
                    },
                    children: "Support",
                  }),
                }),
                (0, c.jsx)(r.NewMenu.Dropdown, {
                  p: 8,
                  children: (0, c.jsxs)(r.Group, {
                    w: "100%",
                    align: "start",
                    spacing: 0,
                    children: [
                      (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)(r.NewMenu.Label, {
                            children: "Support Now",
                          }),
                          (0, c.jsx)(r.NewMenu.Item, {
                            p: 0,
                            mt: 4,
                            component: "button",
                            onClick: function () {
                              (0, I._4)(k), t({ action: x });
                            },
                            children: (0, c.jsxs)(r.Group, {
                              position: "apart",
                              children: [
                                (0, c.jsxs)(r.Flex, {
                                  px: 16,
                                  py: 12,
                                  direction: "row",
                                  gap: 8,
                                  align: "center",
                                  children: [
                                    (0, c.jsx)("i", {
                                      className: "icon-chat-color ".concat(
                                        o.navIcon
                                      ),
                                    }),
                                    (0, c.jsx)(r.Text, {
                                      fw: 500,
                                      fz: 14,
                                      lh: "18px",
                                      color: "neutral.9",
                                      children: "Quick Chat",
                                    }),
                                  ],
                                }),
                                (0, c.jsx)(r.Button, {
                                  px: 8,
                                  py: 2,
                                  fw: 400,
                                  fz: 12,
                                  component: "span",
                                  old: !0,
                                  compact: !0,
                                  radius: "xl",
                                  color: "secondary.5",
                                  size: "xs",
                                  children: "Online",
                                }),
                              ],
                            }),
                          }),
                          g().global.isChinaApp
                            ? (0, c.jsxs)(c.Fragment, {
                                children: [
                                  (0, c.jsx)(r.NewMenu.Item, {
                                    p: 0,
                                    mt: 4,
                                    component: "a",
                                    target: "_blank",
                                    href: h.mx,
                                    children: (0, c.jsxs)(r.Flex, {
                                      px: 16,
                                      py: 12,
                                      direction: "row",
                                      gap: 8,
                                      align: "center",
                                      onClick: function () {
                                        return t({ action: _ });
                                      },
                                      children: [
                                        (0, c.jsx)("i", {
                                          className:
                                            "icon-wechat-filled ".concat(
                                              o.navIcon
                                            ),
                                        }),
                                        (0, c.jsx)(r.Text, {
                                          fw: 500,
                                          fz: 14,
                                          lh: "18px",
                                          mt: 1,
                                          color: "neutral.9",
                                          children: "WeChat",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)(r.NewMenu.Item, {
                                    p: 0,
                                    mt: 4,
                                    component: "a",
                                    target: "_blank",
                                    href: h.mx,
                                    children: (0, c.jsx)(v, {}),
                                  }),
                                ],
                              })
                            : (0, c.jsxs)(c.Fragment, {
                                children: [
                                  (0, c.jsx)(r.NewMenu.Item, {
                                    p: 0,
                                    mt: 4,
                                    component: "a",
                                    target: "_blank",
                                    href: "https://wa.me/447888863490",
                                    children: (0, c.jsxs)(r.Flex, {
                                      px: 16,
                                      py: 12,
                                      direction: "row",
                                      gap: 8,
                                      align: "center",
                                      onClick: function () {
                                        return t({ action: f });
                                      },
                                      children: [
                                        (0, c.jsx)("i", {
                                          className:
                                            "icon-whatsapp-color ".concat(
                                              o.navIcon
                                            ),
                                        }),
                                        (0, c.jsx)(r.Text, {
                                          fw: 500,
                                          fz: 14,
                                          lh: "18px",
                                          mt: 1,
                                          color: "neutral.9",
                                          children: "Whatsapp",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, c.jsx)(r.NewMenu.Item, {
                                    p: 0,
                                    mt: 4,
                                    component: "a",
                                    target: "_blank",
                                    href: p.tj,
                                    children: (0, c.jsxs)(r.Flex, {
                                      px: 16,
                                      py: 12,
                                      direction: "row",
                                      gap: 8,
                                      align: "center",
                                      onClick: function () {
                                        return t({ action: w });
                                      },
                                      children: [
                                        (0, c.jsx)("i", {
                                          className:
                                            "icon-messenger-color ".concat(
                                              o.navIcon
                                            ),
                                        }),
                                        (0, c.jsx)(r.Text, {
                                          fw: 500,
                                          fz: 14,
                                          lh: "18px",
                                          color: "neutral.9",
                                          children: "Facebook Messenger",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          (0, c.jsx)(r.NewMenu.Divider, { px: 16 }),
                          "GB" === K &&
                            (0, c.jsx)(r.NewMenu.Item, {
                              p: 0,
                              mt: 4,
                              component: "a",
                              href: "tel:+447400314942",
                              children: (0, c.jsxs)(r.Flex, {
                                px: 16,
                                py: 12,
                                direction: "row",
                                gap: 8,
                                align: "center",
                                onClick: function () {
                                  return t({
                                    action: C,
                                    label: "+44 7400314942",
                                  });
                                },
                                children: [
                                  (0, c.jsx)("i", {
                                    className: "icon-phone ".concat(o.navIcon),
                                  }),
                                  (0, c.jsx)(r.Text, {
                                    fw: 500,
                                    fz: 14,
                                    lh: "18px",
                                    color: "neutral.9",
                                    children: "+44 7400314942",
                                  }),
                                ],
                              }),
                            }),
                          "IN" === K &&
                            (0, c.jsx)(r.NewMenu.Item, {
                              p: 0,
                              mt: 4,
                              component: "a",
                              href: "tel:+919513884849",
                              children: (0, c.jsxs)(r.Flex, {
                                px: 16,
                                py: 12,
                                direction: "row",
                                gap: 8,
                                align: "center",
                                onClick: function () {
                                  return t({
                                    action: C,
                                    label: "+919513884849",
                                  });
                                },
                                children: [
                                  (0, c.jsx)("i", {
                                    className: "icon-phone ".concat(o.navIcon),
                                  }),
                                  (0, c.jsx)(r.Text, {
                                    fw: 500,
                                    fz: 14,
                                    lh: "18px",
                                    color: "neutral.9",
                                    children: "+91 9513884849",
                                  }),
                                ],
                              }),
                            }),
                          "US" === K &&
                            (0, c.jsx)(r.NewMenu.Item, {
                              p: 0,
                              mt: 4,
                              component: "a",
                              href: "tel:+17076838203",
                              children: (0, c.jsxs)(r.Flex, {
                                px: 16,
                                py: 12,
                                direction: "row",
                                gap: 8,
                                align: "center",
                                onClick: function () {
                                  return t({
                                    action: C,
                                    label: "+17076838203",
                                  });
                                },
                                children: [
                                  (0, c.jsx)("i", {
                                    className: "icon-phone ".concat(o.navIcon),
                                  }),
                                  (0, c.jsx)(r.Text, {
                                    fw: 500,
                                    fz: 14,
                                    lh: "18px",
                                    color: "neutral.9",
                                    children: "+1 7076838203",
                                  }),
                                ],
                              }),
                            }),
                          "AU" === K &&
                            (0, c.jsx)(r.NewMenu.Item, {
                              p: 0,
                              mt: 4,
                              component: "a",
                              href: "tel:+61868457597",
                              children: (0, c.jsxs)(r.Flex, {
                                px: 16,
                                py: 12,
                                direction: "row",
                                gap: 8,
                                align: "center",
                                onClick: function () {
                                  return t({
                                    action: C,
                                    label: "+61868457597",
                                  });
                                },
                                children: [
                                  (0, c.jsx)("i", {
                                    className: "icon-phone ".concat(o.navIcon),
                                  }),
                                  (0, c.jsx)(r.Text, {
                                    fw: 500,
                                    fz: 14,
                                    lh: "18px",
                                    color: "neutral.9",
                                    children: "+61 868457597",
                                  }),
                                ],
                              }),
                            }),
                          (0, c.jsx)(r.NewMenu.Divider, { px: 16 }),
                          (0, c.jsx)(r.NewMenu.Item, {
                            p: 0,
                            mt: 4,
                            component: "a",
                            href: "mailto:contact@amberstudent.com",
                            onClick: function () {
                              return t({ action: b });
                            },
                            children: (0, c.jsxs)(r.Flex, {
                              px: 16,
                              py: 12,
                              direction: "row",
                              gap: 8,
                              align: "center",
                              children: [
                                (0, c.jsx)("i", {
                                  className: "icon-envelope ".concat(o.navIcon),
                                }),
                                (0, c.jsx)(r.Text, {
                                  fw: 500,
                                  fz: 14,
                                  lh: "18px",
                                  color: "neutral.9",
                                  children: "contact@amberstudent.com",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, c.jsx)(r.Divider, {
                        orientation: "vertical",
                        mx: 8,
                        size: "sm",
                        color: "neutral.2",
                      }),
                      (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)(r.NewMenu.Label, {
                            children: "Quick Links",
                          }),
                          (0, c.jsx)(r.NewMenu.Item, {
                            p: 0,
                            mt: 4,
                            component: "a",
                            target: "_blank",
                            href: "/help",
                            children: (0, c.jsxs)(r.Flex, {
                              px: 16,
                              py: 12,
                              direction: "row",
                              gap: 8,
                              align: "center",
                              onClick: function () {
                                return t({
                                  action: u,
                                  click_location: "support",
                                });
                              },
                              children: [
                                (0, c.jsx)("i", {
                                  className: "icon-how-it-works ".concat(
                                    o.navIcon
                                  ),
                                }),
                                (0, c.jsx)(r.Text, {
                                  fw: 500,
                                  fz: 14,
                                  lh: "18px",
                                  color: "neutral.9",
                                  children: "Help Center",
                                }),
                              ],
                            }),
                          }),
                          (0, c.jsx)(r.NewMenu.Item, {
                            p: 0,
                            mt: 4,
                            component: "a",
                            target: "_blank",
                            href: "/how-it-works",
                            children: (0, c.jsxs)(r.Flex, {
                              px: 16,
                              py: 12,
                              direction: "row",
                              gap: 8,
                              align: "center",
                              onClick: function () {
                                return t({ action: d });
                              },
                              children: [
                                (0, c.jsx)("i", {
                                  className: "icon-info ".concat(o.navIcon),
                                }),
                                (0, c.jsx)(r.Text, {
                                  fw: 500,
                                  fz: 14,
                                  lh: "18px",
                                  color: "neutral.9",
                                  children: "How It Works",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        _ = function (n) {
          var e,
            t,
            o = n.auth,
            l = n.isSolid,
            u = n.handleEventEmitter,
            p = (0, i.aL)({ isSolid: l }).classes,
            d = (0, s.useState)(
              null === o ||
                void 0 === o ||
                null === (e = o.data) ||
                void 0 === e ||
                null === (t = e.inventories_shortlists_ids) ||
                void 0 === t
                ? void 0
                : t.length
            ),
            h = d[0],
            f = d[1];
          return (
            (0, s.useEffect)(function () {
              a.Z.on(x._w, function () {
                return f(function (n) {
                  return n + 1;
                });
              }),
                a.Z.on(x.A6, function () {
                  return f(function (n) {
                    return n - 1;
                  });
                });
            }, []),
            (0, c.jsxs)(r.Button, {
              mx: 4,
              px: 8,
              classNames: { root: p.button, leftIcon: p.leftIcon },
              leftIcon: (0, c.jsx)("i", { className: "icon-shortlist" }),
              old: !0,
              variant: "subtle",
              component: "a",
              target: "_blank",
              href: "/profile/shortlist",
              onClick: u,
              children: [
                "Shortlist\xa0",
                "number" === typeof h &&
                  h > 0 &&
                  (0, c.jsx)("span", {
                    className: p.wishlistCount,
                    children: h > 99 ? "99+" : h,
                  }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/9843-822fa92f45e25e11.js.map
