"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8112, 9945, 3186],
  {
    63186: function (e, n, o) {
      o.d(n, {
        X: function () {
          return t;
        },
        j: function () {
          return r;
        },
      });
      var t = function (e) {
          return !!(
            e &&
            e.status &&
            e.data &&
            e.data.email &&
            e.data.email.includes("amberstudent.com")
          );
        },
        r = function (e) {
          return !(!e || !e.status);
        };
    },
    49945: function (e, n, o) {
      o.r(n),
        o.d(n, {
          AppPromotionNudge: function () {
            return p;
          },
        });
      var t = o(52322),
        r = o(2784),
        a = o(62595),
        i = o(47842),
        s = (0, a.createStyles)(function (e) {
          var n;
          return {
            nudge:
              ((n = {
                cursor: "pointer",
                transformOrigin: "left top",
                transform: "rotate(-90deg) translateX(-50%)",
                position: "fixed",
                left: 0,
                top: "50%",
                padding: "4px 28px",
                gap: 10,
                borderRadius: "0 0 8px 8px",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "150%",
                background: e.colors.neutral[9],
                color: "white",
                overflow: "hidden",
              }),
              (0, i.Z)(n, e.fn.smallerThan("md"), { display: "none" }),
              (0, i.Z)(n, e.fn.largerThan(1410), {
                padding: "8px 28px",
                fontSize: 16,
              }),
              (0, i.Z)(n, "&::before, &::after", {
                content: '""',
                position: "absolute",
                top: 0,
                width: "7px",
                height: "100%",
                opacity: 0.3,
                mixBlendMode: "scren",
                background: "white",
                animation: "shine 4s ease-in-out infinite",
                transform: "skewX(35deg)",
                "@keyframes shine": {
                  "0%": { left: "-40%" },
                  "100%": { left: "140%" },
                },
              }),
              (0, i.Z)(n, "&::after", { animationDelay: "0.05s" }),
              n),
            closeIcon: {
              background: e.colors.neutral[8],
              borderRadius: "50%",
              height: 24,
              width: 24,
            },
            amberColor: { color: e.colors.primary[4] },
            mobileIcon: {
              fontSize: 24,
              lineHeight: "150%",
              height: 24,
              width: 24,
            },
          };
        }),
        c = o(26168),
        l = o(24291),
        d = o(63186),
        p = function (e) {
          var n = e.auth,
            o = e.showNudge,
            i = void 0 === o || o,
            p = e.parentPage,
            u = (0, r.useState)(!1),
            g = u[0],
            f = u[1],
            h = s().classes,
            m = (0, r.useState)(i),
            x = m[0],
            b = m[1];
          return (
            !(0, d.X)(n) &&
            x &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(a.Flex, {
                  justify: "center",
                  align: "center",
                  direction: "row",
                  className: h.nudge,
                  onClick: function () {
                    f(!0),
                      (0, l.pr)({
                        action: "app_download_nudge_clicked",
                        category: "app_download_option",
                        label: p,
                      });
                  },
                  children: [
                    (0, t.jsx)(a.Flex, {
                      justify: "center",
                      align: "center",
                      className: h.mobileIcon,
                      children: (0, t.jsx)("i", { className: "icon-mobile" }),
                    }),
                    (0, t.jsxs)("span", {
                      children: [
                        "Download the ",
                        (0, t.jsx)("span", {
                          className: h.amberColor,
                          children: " amber ",
                        }),
                        " app",
                      ],
                    }),
                    (0, t.jsx)(a.Flex, {
                      justify: "center",
                      align: "center",
                      className: h.closeIcon,
                      onClick: function (e) {
                        e.stopPropagation(),
                          (0, l.pr)({
                            action: "app_download_nudge_dismissed",
                            category: "app_download_option",
                            label: p,
                          });
                        var n = new Date();
                        n.setTime(n.getTime() + 1728e5),
                          (window.document.cookie =
                            "showAppNudge=false;expires=".concat(
                              n.toGMTString(),
                              ";path=/;"
                            )),
                          b(!1);
                      },
                      children: (0, t.jsx)("i", { className: "icon-close" }),
                    }),
                  ],
                }),
                (0, t.jsx)(c.r, {
                  parentPage: p,
                  openAppBannerModal: g,
                  closeModal: function () {
                    f(!1);
                  },
                  fromNudge: !0,
                }),
              ],
            })
          );
        };
    },
    26168: function (e, n, o) {
      o.d(n, {
        r: function () {
          return l;
        },
      });
      var t = o(52322),
        r = o(99333),
        a = o(62595),
        i = (0, a.createStyles)(function (e) {
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
        s = [
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
        c = function () {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(a.Title, {
                fz: 20,
                fw: 700,
                lh: "125%",
                color: "neutral.9",
                children: "Start your journey from here!",
              }),
              (0, t.jsx)(a.Text, {
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
            o = e.openAppBannerModal,
            l = e.closeModal,
            d = e.fromNudge,
            p = void 0 !== d && d,
            u = i().classes,
            g = p ? r.Jp[n] : r.gZ[n];
          return (0, t.jsx)(a.Modal, {
            opened: o,
            onClose: l,
            title: (0, t.jsx)(c, {}),
            classNames: { modal: u.modal, title: u.title, header: u.header },
            size: "auto",
            radius: 12,
            children: (0, t.jsxs)(a.Flex, {
              direction: "row",
              mt: 12,
              noWrap: !0,
              gap: 24,
              children: [
                (0, t.jsxs)(a.Flex, {
                  align: "center",
                  className: u.qrContainer,
                  children: [
                    (0, t.jsx)(a.Text, {
                      fz: 12,
                      fw: 400,
                      lh: "150%",
                      mb: 8,
                      children: "Scan The QR to download the App",
                    }),
                    (0, t.jsx)(a.Group, {
                      p: 8,
                      className: u.qrbackground,
                      children: (0, t.jsx)("img", {
                        src: g,
                        alt: "app QR",
                        className: u.qrimg,
                      }),
                    }),
                    (0, t.jsx)(a.Text, {
                      fz: 12,
                      fw: 400,
                      lh: "150%",
                      color: "neutral.8",
                      mt: 12,
                      children: "You can directly download from",
                    }),
                    (0, t.jsxs)(a.Group, {
                      mt: 8,
                      justify: "center",
                      gap: 8,
                      className: u.storeContainer,
                      w: "100%",
                      noWrap: !0,
                      children: [
                        (0, t.jsx)(a.Anchor, {
                          component: "a",
                          target: "_blank",
                          href: r.ay,
                          underline: !1,
                          children: (0, t.jsx)("img", {
                            src: r.MK,
                            alt: "play store",
                            className: u.storeimg,
                          }),
                        }),
                        (0, t.jsx)(a.Anchor, {
                          component: "a",
                          target: "_blank",
                          href: r.Ed,
                          underline: !1,
                          children: (0, t.jsx)("img", {
                            src: r.R_,
                            alt: "app store",
                            className: u.storeimg,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(a.Flex, {
                  w: 278,
                  grow: !0,
                  gap: 24,
                  py: 22,
                  justify: "center",
                  children: s.map(function (e, n) {
                    return (0, t.jsxs)(
                      a.Group,
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
                          (0, t.jsx)("i", {
                            className: "".concat(e.icon, " ").concat(u.icon),
                          }),
                          (0, t.jsxs)(a.Text, {
                            fz: 14,
                            fw: 500,
                            lh: "150%",
                            color: "neutral.9",
                            children: [
                              (0, t.jsx)("b", { children: e.boldText }),
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
  },
]);
//# sourceMappingURL=buildstatic/chunks/8112.69d1ab3076913094.js.map
