"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7699, 1695, 7448, 3186, 7073, 7729, 16],
  {
    63186: function (e, n, t) {
      t.d(n, {
        X: function () {
          return r;
        },
        j: function () {
          return a;
        },
      });
      var r = function (e) {
          return !!(
            e &&
            e.status &&
            e.data &&
            e.data.email &&
            e.data.email.includes("amberstudent.com")
          );
        },
        a = function (e) {
          return !(!e || !e.status);
        };
    },
    61695: function (e, n, t) {
      t.d(n, {
        J: function () {
          return h;
        },
      });
      var r = t(98788),
        a = t(50853),
        o = t(8388),
        i = t.n(o),
        c = t(35590),
        s = t(139),
        l = t.n(s),
        d = t(49705),
        u = t.n(d),
        h = (function () {
          var e = (0, r.Z)(function () {
            var e, n, t, r;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    a.trys.push([0, 2, , 3]),
                    (n = u()(
                      i().urls.web_service_url,
                      "/places/getCountryData"
                    )),
                    [4, l().get(n)]
                  );
                case 1:
                  return (
                    (t = a.sent()),
                    [
                      2,
                      (null === t ||
                      void 0 === t ||
                      null === (e = t.body) ||
                      void 0 === e
                        ? void 0
                        : e.country) || "GB",
                    ]
                  );
                case 2:
                  return (
                    (r = a.sent()),
                    c.r.error("Error fetching country data:", r),
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
    71526: function (e, n, t) {
      var r = t(98788),
        a = t(50853);
      function o() {
        return (o = (0, r.Z)(function (e) {
          return (0, a.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, e()];
              case 1:
                return [2, [n.sent(), null]];
              case 2:
                return [2, [null, n.sent()]];
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      n.Z = function (e) {
        return o.apply(this, arguments);
      };
    },
    49423: function (e, n, t) {
      t.d(n, {
        h: function () {
          return b;
        },
      });
      var r = t(70865),
        a = t(26297),
        o = t(66383),
        i = t(52322),
        c = t(99333),
        s = t(24291),
        l = t(62595),
        d = t(52138),
        u = t(70016),
        h = t(75344),
        p = t(35954),
        g = t(80726),
        f = t(50696),
        x = t(47842),
        m = (0, l.createStyles)(function (e, n) {
          var t,
            r = n.hasSearch,
            a = n.hasHeader,
            o = n.isSearchPage,
            i = n.showBanner,
            c = n.isSolid,
            s = n.NAVBAR_TOP,
            l = n.bannerHeight;
          return {
            navbar:
              ((t = {
                backgroundColor: "transparent",
                position: r ? "fixed" : "absolute",
                top: s,
                zIndex: 10,
                border: !i && r && "1px solid ".concat(e.colors.neutral[2]),
                boxShadow: !c || o ? "none" : e.shadows.md,
                width: "100%",
              }),
              (0, x.Z)(t, e.fn.largerThan("md"), { top: l || 0 }),
              (0, x.Z)(t, e.fn.largerThan("lg"), { display: "none" }),
              t),
            header: {
              height: 60,
              padding: a ? "8px 10px" : "8px 16px",
              backgroundColor: r || a ? "white" : "transparent",
            },
            imageContainer: {
              height: 20,
              display: "flex",
              alignItems: "center",
            },
            image: { height: 40, width: 80, filter: "invert(1) brightness(1)" },
            menuButton: {
              padding: 8,
              width: "fit-content",
              height: "fit-content",
              color: r || a ? e.colors.neutral[9] : "white",
              "&:focus": { backgroundColor: "transparent" },
              i: { fontSize: 20 },
            },
            searchContainer: { flexGrow: 1 },
            leftContainer: { flexGrow: 1, flexWrap: "nowrap" },
            backButton: {
              minWidth: 24,
              minHeight: 24,
              display: "flex",
              alignItems: "center",
              height: 24,
              width: 24,
              fontSize: 16,
            },
            backIcon: { margin: 0 },
          };
        }),
        b = function (e) {
          var n = e.auth,
            t = e.withSearch,
            x = e.withNavigation,
            b = e.navigateBackLink,
            _ = e.headerText,
            w = e.withHeader,
            v = e.isSolid,
            C = void 0 === v || v,
            k = e.gtagEventCategory,
            j = e.regionOrPropertyName,
            E = e.showAppBanner,
            S = void 0 !== E && E,
            y = (0, o.Z)((0, d.qY)(!1), 2),
            I = y[0],
            L = y[1],
            N = L.open,
            A = L.close,
            T = (0, l.useBannerContext)() || { showBanner: !1 },
            B = T.showBanner,
            D = T.bannerHeight,
            K = S ? D + c.D$ : D || 0,
            R = m({
              hasSearch: t,
              hasHeader: w,
              isSearchPage: k === c.E0.SEARCH,
              showBanner: B,
              isSolid: C,
              NAVBAR_TOP: K,
              bannerHeight: D,
            }).classes;
          (0, h.Z)();
          var H = function (e) {
            var n = e.action,
              t = e.label,
              o = void 0 === t ? "" : t,
              i = (0, a.Z)(e, ["action", "label"]);
            (0, s.pr)(
              (0, r.Z)(
                {
                  action: n,
                  category: u.GH.TOP_NAV,
                  label: "".concat(k, " ").concat(o),
                },
                i
              )
            );
          };
          return (0, i.jsx)("nav", {
            className: R.navbar,
            "data-testid": "mobile-header-section",
            children: (0, i.jsxs)(l.Flex, {
              w: "100vw",
              justify: "space-between",
              align: "center",
              direction: "row",
              gap: 12,
              className: R.header,
              children: [
                (0, i.jsxs)(l.Group, {
                  className: R.leftContainer,
                  children: [
                    (x || w) &&
                      (0, i.jsxs)(l.Group, {
                        gap: 12,
                        children: [
                          x &&
                            (0, i.jsx)(l.ActionIcon, {
                              onClick: function () {
                                var e;
                                "_back" == (e = b)
                                  ? history.back()
                                  : (window.location.href = e);
                              },
                              variant: "transparent",
                              className: ""
                                .concat(R.menuButton, " ")
                                .concat(R.backButton),
                              "aria-label": "back button",
                              children: (0, i.jsx)("i", {
                                className: "icon-arrow-left ".concat(
                                  R.backIcon
                                ),
                              }),
                            }),
                          w &&
                            (0, i.jsx)(l.Text, {
                              color: "neutral.9",
                              fz: 16,
                              fw: 500,
                              pl: x ? 0 : 6,
                              lh: "24px",
                              children: _,
                            }),
                        ],
                      }),
                    !t &&
                      (0, i.jsx)(l.Box, {
                        component: "a",
                        href: "/",
                        className: R.imageContainer,
                        h: 40,
                        onClick: function () {
                          (0, s.pr)({ action: "clicked_amber", category: "" });
                        },
                        children: (0, i.jsx)("img", {
                          src: "https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format",
                          alt: "Amber",
                          className: R.image,
                        }),
                      }),
                    t &&
                      !w &&
                      (0, i.jsx)(l.Box, {
                        className: R.searchContainer,
                        children: (0, i.jsx)(p.o, {
                          showSuggestions: !0,
                          finalAction: "set_link",
                          idValue: "header-search",
                          gtagEventCategory: k,
                          insideHeader: !0,
                        }),
                      }),
                  ],
                }),
                (0, i.jsx)(l.Button, {
                  onClick: function () {
                    N(), H({ action: u.Kc.MENU_CLICKED });
                  },
                  variant: "tertiary",
                  className: R.menuButton,
                  "aria-label": "hamburger menu",
                  children: (0, i.jsx)("i", { className: "icon-menu" }),
                }),
                I &&
                  (0, i.jsx)(g.H, {
                    opened: I,
                    close: A,
                    title: (0, i.jsx)(l.Text, {
                      order: 2,
                      fz: 16,
                      fw: 500,
                      c: "neutral.9",
                      children: "Menu",
                    }),
                    children: (0, i.jsx)(f.h, {
                      auth: n,
                      regionOrPropertyName: j,
                      handleEventEmitter: H,
                      showAppBanner: S,
                    }),
                  }),
              ],
            }),
          });
        };
    },
    77073: function (e, n, t) {
      t.r(n),
        t.d(n, {
          AppDownload: function () {
            return u;
          },
        });
      var r = t(52322),
        a = t(2784),
        o = t(8388),
        i = t.n(o),
        c = t(63186),
        s = t(62595),
        l = t(26168),
        d = t(87055),
        u = function (e) {
          var n,
            t = e.isSolid,
            o = void 0 !== t && t,
            u = e.auth,
            h = e.parentPage,
            p = (0, d.aL)({ isSolid: o }).classes,
            g = (0, a.useState)(!1),
            f = g[0],
            x = g[1];
          return (
            !(0, c.X)(u) &&
            !(null === i() ||
            void 0 === i() ||
            null === (n = i().global) ||
            void 0 === n
              ? void 0
              : n.isChinaApp) &&
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(s.Button, {
                  mx: 4,
                  px: 8,
                  classNames: { root: p.button, leftIcon: p.leftIcon },
                  leftIcon: (0, r.jsx)("img", {
                    src: ""
                      .concat(i().app.image_static_assets_url, "/images/")
                      .concat(
                        o
                          ? "App_Download_Black_Nav_bar.gif"
                          : "App_Download_White_Nav_bar_2.gif"
                      ),
                    alt: "app-icon",
                    className: p.appIcon,
                  }),
                  old: !0,
                  variant: "subtle",
                  onClick: function () {
                    return x(!0);
                  },
                  children: "Download App",
                }),
                (0, r.jsx)(l.r, {
                  parentPage: h,
                  openAppBannerModal: f,
                  closeModal: function () {
                    x(!1);
                  },
                }),
              ],
            })
          );
        };
    },
    26168: function (e, n, t) {
      t.d(n, {
        r: function () {
          return l;
        },
      });
      var r = t(52322),
        a = t(99333),
        o = t(62595),
        i = (0, o.createStyles)(function (e) {
          return {
            header: {
              alignItems: "flex-start",
              borderBottom: "1px solid ".concat(e.colors.neutral[2]),
              paddingBottom: 12,
            },
            modal: { padding: "24px !important" },
            qrContainer: {
              borderRadius: 12,
              border: "1px solid ".concat(e.colors.neutral[2]),
              background:
                "url(https://prod-static-assets.amberstudent.com/images/qrBackground.png)",
              padding: "16px 40px",
              backgroundSize: "cover",
            },
            qrbackground: { background: "#ffffff" },
            qrimg: { height: 180, width: 180 },
            storeimg: { width: 131, height: 39 },
            storeContainer: { justifyContent: "center" },
            icon: {
              fontSize: 20,
              marginLeft: 0,
              "&:before": { color: e.colors.secondary[5] },
            },
            appIcon: { height: 20, width: 20 },
          };
        }),
        c = [
          {
            icon: "icon-verified",
            boldText: "100%",
            text: "Verified Listings",
          },
          {
            icon: "icon-easy-booking",
            boldText: "Quick and Easy",
            text: "Bookings",
          },
          {
            icon: "icon-bookings-supply",
            boldText: "Price Match",
            text: "Guarantee",
          },
          {
            icon: "icon-message-smile",
            boldText: "24x7",
            text: "Personal Assistance",
          },
        ],
        s = function () {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(o.Title, {
                fz: 20,
                fw: 700,
                lh: "125%",
                color: "neutral.9",
                children: "Start your journey from here!",
              }),
              (0, r.jsx)(o.Text, {
                fz: 14,
                fw: 400,
                lh: "150%",
                color: "neutral.5",
                children: "More than 1.25 million beds available in 600 cities",
              }),
            ],
          });
        },
        l = function (e) {
          var n = e.parentPage,
            t = e.openAppBannerModal,
            l = e.closeModal,
            d = e.fromNudge,
            u = void 0 !== d && d,
            h = i().classes,
            p = u ? a.Jp[n] : a.gZ[n];
          return (0, r.jsx)(o.Modal, {
            opened: t,
            onClose: l,
            title: (0, r.jsx)(s, {}),
            classNames: { modal: h.modal, title: h.title, header: h.header },
            size: "auto",
            radius: 12,
            children: (0, r.jsxs)(o.Flex, {
              direction: "row",
              mt: 12,
              noWrap: !0,
              gap: 24,
              children: [
                (0, r.jsxs)(o.Flex, {
                  align: "center",
                  className: h.qrContainer,
                  children: [
                    (0, r.jsx)(o.Text, {
                      fz: 12,
                      fw: 400,
                      lh: "150%",
                      mb: 8,
                      children: "Scan The QR to download the App",
                    }),
                    (0, r.jsx)(o.Group, {
                      p: 8,
                      className: h.qrbackground,
                      children: (0, r.jsx)("img", {
                        src: p,
                        alt: "app QR",
                        className: h.qrimg,
                      }),
                    }),
                    (0, r.jsx)(o.Text, {
                      fz: 12,
                      fw: 400,
                      lh: "150%",
                      color: "neutral.8",
                      mt: 12,
                      children: "You can directly download from",
                    }),
                    (0, r.jsxs)(o.Group, {
                      mt: 8,
                      justify: "center",
                      gap: 8,
                      className: h.storeContainer,
                      w: "100%",
                      noWrap: !0,
                      children: [
                        (0, r.jsx)(o.Anchor, {
                          component: "a",
                          target: "_blank",
                          href: a.ay,
                          underline: !1,
                          children: (0, r.jsx)("img", {
                            src: a.MK,
                            alt: "play store",
                            className: h.storeimg,
                          }),
                        }),
                        (0, r.jsx)(o.Anchor, {
                          component: "a",
                          target: "_blank",
                          href: a.Ed,
                          underline: !1,
                          children: (0, r.jsx)("img", {
                            src: a.R_,
                            alt: "app store",
                            className: h.storeimg,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(o.Flex, {
                  w: 278,
                  grow: !0,
                  gap: 24,
                  py: 22,
                  justify: "center",
                  children: c.map(function (e, n) {
                    return (0, r.jsxs)(
                      o.Group,
                      {
                        py: 8,
                        px: 20,
                        gap: 12,
                        border: "1px solid neutral.2",
                        noWrap: !0,
                        sx: function (e) {
                          return {
                            border: "1px solid ".concat(e.colors.neutral[2]),
                            borderRadius: 8,
                          };
                        },
                        children: [
                          (0, r.jsx)("i", {
                            className: "".concat(e.icon, " ").concat(h.icon),
                          }),
                          (0, r.jsxs)(o.Text, {
                            fz: 14,
                            fw: 500,
                            lh: "150%",
                            color: "neutral.9",
                            children: [
                              (0, r.jsx)("b", { children: e.boldText }),
                              " ",
                              e.text,
                            ],
                          }),
                        ],
                      },
                      "app_advantage_".concat(n)
                    );
                  }),
                }),
              ],
            }),
          });
        };
    },
    77729: function (e, n, t) {
      t.r(n),
        t.d(n, {
          LanguageSelector: function () {
            return d;
          },
        });
      var r = t(52322),
        a = t(8388),
        o = t.n(a),
        i = t(99333),
        c = t(62595),
        s = t(32248),
        l = t(87055),
        d = function (e) {
          var n = e.isSolid,
            t = e.handleEventEmitter,
            a = (0, l.aL)({ isSolid: n }).classes,
            d = (0, s.$)({ handleEventEmitter: t }),
            u = d.onCLickLanguageSelector,
            h = d.language,
            p = d.handleLanguageChange;
          return (0, r.jsx)(r.Fragment, {
            children:
              o().global.is_smartcat_enabled &&
              o().global.isChinaApp &&
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)(c.NewMenu, {
                  shadow: "sm",
                  radius: "xs",
                  width: 170,
                  position: "bottom-end",
                  ml: 4,
                  children: [
                    (0, r.jsx)(c.NewMenu.Target, {
                      children: (0, r.jsx)("div", {
                        translate: "false",
                        children: (0, r.jsxs)(c.Button, {
                          mx: 4,
                          px: 8,
                          classNames: {
                            root: a.button,
                            leftIcon: a.leftIcon,
                            rightIcon: a.rightIcon,
                          },
                          old: !0,
                          variant: "subtle",
                          onClick: u,
                          children: [
                            (0, r.jsx)("i", { className: "icon-globe" }),
                            h,
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)(c.NewMenu.Dropdown, {
                      p: 8,
                      children: i.f1.map(function (e) {
                        var n = e.label,
                          t = e.value;
                        return (0, r.jsx)(
                          c.NewMenu.Item,
                          {
                            p: 0,
                            mt: 4,
                            onClick: function () {
                              return p(t);
                            },
                            children: (0, r.jsx)(c.Flex, {
                              bg: n === h ? "neutral.1" : "",
                              px: 16,
                              py: 12,
                              direction: "row",
                              gap: 8,
                              align: "center",
                              children: (0, r.jsx)(c.Text, {
                                fw: 500,
                                fz: 14,
                                lh: "18px",
                                color: "neutral.9",
                                translate: "false",
                                children: n,
                              }),
                            }),
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              }),
          });
        };
    },
    87055: function (e, n, t) {
      t.d(n, {
        TV: function () {
          return o;
        },
        aL: function () {
          return i;
        },
        dy: function () {
          return c;
        },
        jR: function () {
          return s;
        },
        jq: function () {
          return l;
        },
      });
      var r = t(47842),
        a = t(62595),
        o = (0, a.createStyles)(function (e) {
          return { label: { color: e.colors.neutral[5] } };
        }),
        i = (0, a.createStyles)(function (e, n) {
          var t = n.isSolid;
          return {
            navIcon: {
              margin: 0,
              marginTop: 1,
              fontSize: 18,
              color: e.colors.neutral[9],
            },
            userCircleIcon: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 26,
              width: 26,
              borderRadius: "50%",
              backgroundColor: e.colors.neutral[1],
            },
            button: {
              fontWeight: 500,
              fontSize: 16,
              background: t ? "white" : "transparent",
              color: t ? e.colors.neutral[9] : "white",
              "&:hover": {
                color: t ? e.colors.neutral[9] : "white",
                background: t
                  ? "rgba(0, 0, 0, 0.05)"
                  : "rgba(255, 255, 255, 0.1)",
              },
              "&:active, &:visited, &:focus": {
                color: t ? e.colors.neutral[9] : "white",
              },
            },
            loginButton: {
              fontSize: 16,
              fontWeight: 500,
              background: t ? "white" : "transparent",
              color: t ? e.colors.neutral[9] : "white",
              border: "1px solid ".concat(e.colors.neutral[3]),
              "&:hover": {
                color: "black",
                background: t ? "rgba(0, 0, 0, 0.05)" : "rgb(255, 255, 255)",
              },
            },
            wishlistCount: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "99px",
              height: "18px",
              width: "26px",
              padding: "6px 9px",
              marginLeft: "4px",
              fontSize: "12px",
              lineHeight: "12px",
              textAlign: "center",
              background: e.colors.primary[4],
              color: "white",
            },
            leftIcon: { marginRight: "8px !important" },
            rightIcon: { marginLeft: "8px !important" },
            appIcon: { height: 20, width: 20 },
            buttonSkeleton: {
              display: "flex",
              width: "max-content",
              minHeight: 36,
              paddingLeft: 8,
              paddingRight: 8,
              marginLeft: 4,
              marginRight: 4,
            },
          };
        }),
        c = (0, a.createStyles)(function (e) {
          return {
            modalMobile: {
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderRadius: "8px 8px 0 0",
            },
            subTitle: { padding: "8px 16px", gap: "8px" },
            submitButton: (0, r.Z)(
              { alignSelf: "flex-end" },
              e.fn.smallerThan("md"),
              {
                width: "100% !important",
                height: "38px !important",
                fontSize: "14px !important",
              }
            ),
            saveButtonText: { padding: "16px 24px" },
          };
        }),
        s = (0, a.createStyles)(function (e) {
          return {
            root: {
              width: "100%",
              padding: "16px",
              marginTop: "auto",
              background: "white",
              borderTop: "1px solid ".concat(e.colors.neutral[1]),
              boxShadow: "0px -1px 3px 0px #0000001A",
            },
          };
        }),
        l = (0, a.createStyles)(function (e) {
          return {
            root: { display: "block", height: "100%" },
            body: { position: "relative", height: "100%" },
            radio: { cursor: "pointer" },
            labelWrapper: { display: "inline-block", width: "100%" },
            label: {
              cursor: "pointer",
              display: "inline-block",
              width: "100%",
              padding: "8px 8px 8px 40px",
              borderRadius: e.radius.sm,
              "&:hover": { backgroundColor: e.colors.neutral[1] },
              color: e.colors.neutral[9],
              height: "100%",
              p: { color: e.colors.neutral[6], fontSize: 12 },
            },
            inner: { position: "absolute", top: 8, left: 8 },
          };
        });
    },
    46084: function (e, n, t) {
      t.r(n),
        t.d(n, {
          HeaderV2: function () {
            return _;
          },
        });
      var r = t(70865),
        a = t(26297),
        o = t(52322),
        i = t(2784),
        c = t(99333),
        s = t(24291),
        l = t(62595),
        d = t(70016),
        u = t(75344),
        h = t(67490),
        p = function () {
          var e = (0, i.useState)(!1),
            n = e[0],
            t = e[1];
          (0, i.useEffect)(function () {
            window.localStorage.hasReadCookie || t(!0);
          }, []);
          return n
            ? (0, o.jsx)("div", {
                className: "cookie-index-container",
                children: (0, o.jsxs)("div", {
                  className: "inner-container",
                  children: [
                    "We use cookies to improve your experience. By continuing, you agree to our use of cookies. See our",
                    " ",
                    (0, o.jsxs)("a", {
                      href: "/privacy",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "privacy-link",
                      children: [" ", "Cookie and Privacy Policy"],
                    }),
                    " ",
                    (0, o.jsx)("span", {
                      className: "cross-btn",
                      onClick: function () {
                        (window.localStorage.hasReadCookie = !0), t(!1);
                      },
                      children: (0, o.jsx)("i", { className: "icon-close" }),
                    }),
                  ],
                }),
              })
            : null;
        },
        g = t(49423),
        f = t(77729),
        x = t(77073),
        m = t(89843),
        b = t(53192),
        _ = function (e) {
          var n = e.auth,
            t = e.gtagEventCategory,
            _ = e.parentPage,
            w = e.showAppBanner,
            v = void 0 !== w && w,
            C = e.setShowAppBanner,
            k = e.isMobile,
            j = void 0 === k || k,
            E = (0, i.useState)(!1),
            S = E[0],
            y = E[1],
            I = (0, l.useBannerContext)({ showAppBanner: v }) || {
              showBanner: !1,
            },
            L = I.bannerHeight,
            N = I.showBanner,
            A = (0, b.$)({
              isSolid: S,
              showBanner: N,
              bannerHeight: L,
            }).classes;
          (0, u.Z)();
          var T = function (e) {
            var n = e.action,
              o = e.label,
              i = void 0 === o ? "" : o,
              c = (0, a.Z)(e, ["action", "label"]);
            (0, s.pr)(
              (0, r.Z)(
                {
                  action: n,
                  category: d.GH.TOP_NAV,
                  label: "".concat(t, " ").concat(i),
                },
                c
              )
            );
          };
          return (
            (0, i.useEffect)(function () {
              window.scrollY >= 145 ? y(!0) : y(!1);
              var e = function () {
                window.scrollY >= 145 ? y(!0) : y(!1);
              };
              return (
                window.addEventListener("scroll", e),
                function () {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                j &&
                  (0, o.jsx)(h.Q, {
                    from: c.E0.HOME,
                    showAppBanner: v,
                    onClose: C,
                  }),
                (0, o.jsx)(g.h, {
                  auth: n,
                  isSolid: !1,
                  withSearch: !1,
                  gtagEventCategory: c.E0.HOME,
                  showAppBanner: v,
                }),
                (0, o.jsxs)("nav", {
                  className: A.navbar,
                  "data-testid": "header-section",
                  children: [
                    (0, o.jsx)(p, {}),
                    (0, o.jsx)(o.Fragment, {
                      children: (0, o.jsxs)(l.Group, {
                        w: "100%",
                        position: "apart",
                        align: "center",
                        px: 40,
                        py: 8,
                        className: A.container,
                        children: [
                          (0, o.jsx)("div", {
                            onClick: function () {
                              (0, s.pr)({
                                action: "clicked_amber",
                                category: "",
                              });
                            },
                            children: (0, o.jsx)("a", {
                              href: "/",
                              children: (0, o.jsx)("img", {
                                className: A.logo,
                                src: "https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format",
                                alt: "Amber",
                              }),
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            className: A.rightSection,
                            children: [
                              c.X8.includes(_) &&
                                (0, o.jsx)(x.AppDownload, {
                                  isSolid: S,
                                  auth: n,
                                  parentPage: _,
                                }),
                              (0, o.jsx)(m.Support, {
                                isSolid: S,
                                handleEventEmitter: T,
                              }),
                              (0, o.jsx)(m.Wishlist, {
                                isSolid: S,
                                auth: n,
                                handleEventEmitter: function () {
                                  return T({ action: d.Kc.SHORTLIST_CLICKED });
                                },
                              }),
                              (0, o.jsx)(m.Dashboard, { isSolid: S, auth: n }),
                              (0, o.jsx)(f.LanguageSelector, {
                                isSolid: S,
                                auth: n,
                                handleEventEmitter: T,
                              }),
                              (0, o.jsx)(m.Login, {
                                isSolid: S,
                                auth: n,
                                handleEventEmitter: T,
                              }),
                              (0, o.jsx)(m.Profile, {
                                isSolid: S,
                                auth: n,
                                handleEventEmitter: T,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    53192: function (e, n, t) {
      t.d(n, {
        $: function () {
          return o;
        },
      });
      var r = t(47842),
        a = t(70865),
        o = (0, t(62595).createStyles)(function (e, n) {
          var t,
            o = n.isSolid,
            i = n.bannerHeight;
          return {
            navbar: (0, a.Z)(
              {
                position: "fixed",
                top: i || 0,
                zIndex: 15,
                width: "100%",
                background: o ? "white" : "transparent",
              },
              o && { boxShadow: e.shadows.sm }
            ),
            container: (0, a.Z)(
              ((t = {
                maxWidth: "1440px",
                marginLeft: "auto",
                marginRight: "auto",
                height: "62px",
              }),
              (0, r.Z)(t, "@media (min-width: 1600px)", {
                paddingLeft: 0,
                paddingRight: 0,
                maxWidth: "1520px",
              }),
              (0, r.Z)(t, "@media (min-width: 1700px)", {
                paddingLeft: 0,
                paddingRight: 0,
                maxWidth: "1620px",
              }),
              (0, r.Z)(t, e.fn.smallerThan("lg"), { display: "none" }),
              t),
              o && { borderBottom: "1px solid ".concat(e.colors.neutral[2]) }
            ),
            logo: (0, a.Z)(
              { transform: "scale(.85)" },
              !o && { filter: "invert(1) brightness(1)" }
            ),
            partnerLogo: { height: "20px" },
            rightSection: { display: "flex", alignItems: "center" },
          };
        });
    },
    35954: function (e, n, t) {
      t.d(n, {
        o: function () {
          return r.o;
        },
      });
      var r = t(22119);
    },
    70016: function (e, n, t) {
      t.d(n, {
        EG: function () {
          return o;
        },
        GH: function () {
          return i;
        },
        Kc: function () {
          return c;
        },
        d: function () {
          return l;
        },
        t_: function () {
          return d;
        },
        tj: function () {
          return s;
        },
        wD: function () {
          return u;
        },
      });
      var r = t(8388),
        a = t.n(r),
        o = "e1affeb13de9140",
        i = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        s = "https://m.me/amberstudent",
        l = 1441,
        d = "".concat(
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
//# sourceMappingURL=buildstatic/chunks/7699.97d51053c327133e.js.map
