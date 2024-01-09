"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [648],
  {
    90648: function (n, e, t) {
      t.r(e),
        t.d(e, {
          FooterV2: function () {
            return L;
          },
          useFooterV2Styles: function () {
            return H;
          },
        });
      var a = t(98788),
        r = t(50853),
        i = t(52322),
        o = t(2784),
        s = t(99333),
        l = t(8388),
        c = t.n(l),
        d = t(24291),
        m = t(62595),
        p = t(70016),
        u = t(47842),
        h = (0, m.createStyles)(function (n) {
          return {
            container: (0, u.Z)({}, n.fn.largerThan("md"), {
              marginTop: "20px",
            }),
            img: (0, u.Z)(
              { width: "100%", height: 48 },
              n.fn.largerThan("md"),
              { width: 161 }
            ),
          };
        }),
        x = function () {
          var n = h().classes;
          return (0, i.jsxs)("div", {
            className: n.container,
            children: [
              (0, i.jsx)(m.Text, {
                fz: 14,
                fw: 400,
                lh: "150%",
                children: "Get the app.",
              }),
              (0, i.jsxs)(m.Group, {
                gap: 14,
                mt: 8,
                noWrap: !0,
                children: [
                  (0, i.jsx)(m.Anchor, {
                    component: "a",
                    target: "_blank",
                    href: s.ay,
                    underline: !1,
                    children: (0, i.jsx)("img", {
                      src: "".concat(
                        c().app.image_static_assets_url,
                        "/images/playStoreAppQR-hd.png"
                      ),
                      alt: "play store",
                      className: n.img,
                    }),
                  }),
                  (0, i.jsx)(m.Anchor, {
                    component: "a",
                    target: "_blank",
                    href: s.Ed,
                    underline: !1,
                    children: (0, i.jsx)("img", {
                      src: "".concat(
                        c().app.image_static_assets_url,
                        "/images/appStoreAppQR-hd.png"
                      ),
                      alt: "app store",
                      className: n.img,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        g = (0, m.createStyles)(function (n) {
          var e;
          return {
            outerDiv:
              ((e = {
                border: "1px solid ".concat(n.colors.neutral[2]),
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                borderRadius: "8px",
                marginTop: 16,
                color: "#0E9F6E",
                textDecoration: "none",
              }),
              (0, u.Z)(e, n.fn.largerThan("md"), { padding: "12px 10px" }),
              (0, u.Z)(e, "&:hover,&:focus", {
                textDecoration: "none",
                color: "#0E9F6E",
              }),
              (0, u.Z)(e, "i", { margin: 0, fontSize: 20 }),
              e),
            label: (0, u.Z)(
              {
                fontSize: 12,
                fontWeight: "400",
                wordWrap: "break-word",
                textOverflow: "ellipsis",
                overflow: "hidden",
                color: n.colors.neutral[9],
                marginLeft: 6,
              },
              n.fn.largerThan("md"),
              { fontSize: 14 }
            ),
            bottomLine: (0, u.Z)(
              {
                color: n.colors.neutral[7],
                fontSize: 10,
                alignItems: "center",
              },
              n.fn.largerThan("md"),
              { fontSize: 12 }
            ),
            paymentMethods: (0, u.Z)(
              { fontSize: 14, fontWeight: "600", color: n.colors.neutral[6] },
              n.fn.largerThan("md"),
              { fontSize: 12, fontWeight: "400", color: n.colors.neutral[6] }
            ),
            growDiv: { flexGrow: "1" },
          };
        }),
        f = function (n) {
          var e = n.icon,
            t = n.label,
            a = n.link,
            r = g().classes;
          return (0, i.jsxs)(m.Anchor, {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            className: r.outerDiv,
            onClick: function () {
              (0, d.pr)({
                action: "bottom_button_clicked",
                category: "",
                button_name: t,
              });
            },
            children: [
              e,
              (0, i.jsx)(m.Text, { className: r.label, children: t }),
            ],
          });
        },
        j = function (n, e) {
          var t = {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: n,
            url: e,
          };
          return JSON.stringify(t);
        },
        b = (0, m.createStyles)(function (n) {
          return {
            outerDiv: (0, u.Z)({ marginTop: 26 }, n.fn.largerThan("md"), {
              marginTop: 32,
            }),
            label: (0, u.Z)(
              { fontWeight: "700", fontSize: 14 },
              n.fn.largerThan("md"),
              { fontSize: 16 }
            ),
            innerDiv: {
              flexDirection: "row",
              i: { fontSize: 20, cursor: "pointer" },
            },
            linkedIn: { i: { color: "#0066C8" } },
            instagram: { i: { color: "#cd486b" } },
            facebook: { i: { color: " #1877F2" } },
            twitter: { i: { color: " #3FA9F5" } },
            youtube: { i: { color: " #FF0000" } },
          };
        }),
        k = function (n) {
          window.open(n, "_blank");
        },
        w = function () {
          var n = b().classes;
          return (0, i.jsxs)(m.Box, {
            className: n.outerDiv,
            children: [
              (0, i.jsx)(m.Text, {
                className: n.label,
                children: "Follow us on",
              }),
              (0, i.jsxs)(m.Flex, {
                className: n.innerDiv,
                direction: "row",
                gap: 5,
                mt: 17,
                children: [
                  (0, i.jsxs)(m.Text, {
                    className: n.linkedIn,
                    children: [
                      (0, i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                          __html: j("LinkedIn", s.Hk),
                        },
                      }),
                      (0, i.jsx)("i", {
                        onClick: function () {
                          return k(s.Hk);
                        },
                        className: "icon-linkedin-in",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(m.Text, {
                    className: n.facebook,
                    children: [
                      (0, i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                          __html: j("Facebook", s.kI),
                        },
                      }),
                      (0, i.jsx)("i", {
                        onClick: function () {
                          return k(s.kI);
                        },
                        className: "icon-facebook",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(m.Text, {
                    className: n.instagram,
                    children: [
                      (0, i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                          __html: j("Instagram", s._v),
                        },
                      }),
                      (0, i.jsx)("i", {
                        onClick: function () {
                          return k(s._v);
                        },
                        className: "icon-instagram",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(m.Text, {
                    className: n.youtube,
                    children: [
                      (0, i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: { __html: j("Youtube", s.g5) },
                      }),
                      (0, i.jsx)("i", {
                        onClick: function () {
                          return k(s.g5);
                        },
                        className: "icon-youtube",
                      }),
                    ],
                  }),
                  (0, i.jsxs)(m.Text, {
                    className: n.twitter,
                    children: [
                      (0, i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: { __html: j("Twitter", s.N$) },
                      }),
                      (0, i.jsx)("i", {
                        onClick: function () {
                          return k(s.N$);
                        },
                        className: "icon-twitter",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        T = new Date().getFullYear(),
        _ = [
          { name: "\xa9 ".concat(T, " All Rights Reserved.") },
          { name: "Privacy Policy", link: s.Sb },
          { name: "Terms and Conditions", link: s.qy },
          { name: "Sitemap", link: s.ai },
        ],
        v = function () {
          var n = g().classes;
          return (0, i.jsxs)(m.Flex, {
            direction: "row",
            className: n.bottomLine,
            gap: 10,
            wrap: "wrap-reverse",
            children: [
              _.map(function (n, e) {
                return (0, i.jsxs)(
                  m.Text,
                  {
                    style: { cursor: "pointer" },
                    onClick: function () {
                      n.link && (window.location.href = n.link);
                    },
                    children: [
                      n.link &&
                        (0, i.jsx)("script", {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: {
                            __html: j(n.name, n.link),
                          },
                        }),
                      n.name,
                    ],
                  },
                  e
                );
              }),
              (0, i.jsx)("div", { className: n.growDiv }),
              (0, i.jsxs)(m.Flex, {
                direction: "row",
                align: "center",
                children: [
                  (0, i.jsx)(m.Text, {
                    className: n.paymentMethods,
                    children: "Payment methods",
                  }),
                  (0, i.jsx)("img", {
                    width: 240,
                    height: 40,
                    src: "".concat(
                      c().app.image_static_assets_url,
                      "/images/cards.png"
                    ),
                    alt: "amber-cards",
                    loading: "lazy",
                  }),
                ],
              }),
            ],
          });
        },
        y = t(7309),
        S = (0, m.createStyles)(function (n) {
          return {
            outsideDiv: (0, u.Z)(
              {
                background: n.colors.neutral[0],
                padding: "12px 24px",
                borderRadius: 8,
                marginTop: 40,
                display: "none",
                cursor: "pointer",
              },
              n.fn.largerThan("lg"),
              { display: "block" }
            ),
            logo: (0, u.Z)(
              { fontSize: 14, fontWeight: "600" },
              n.fn.largerThan("md"),
              { fontSize: 16 }
            ),
            mainText: (0, u.Z)(
              {
                fontSize: 12,
                color: n.colors.neutral[6],
                span: { color: "black", fontWeight: "500" },
              },
              n.fn.largerThan("md"),
              { fontSize: 14 }
            ),
          };
        }),
        N = function () {
          var n = S().classes;
          return (0, i.jsxs)(m.Box, {
            className: n.outsideDiv,
            onClick: function () {
              window.open(s.S4, "_blank");
            },
            children: [
              (0, i.jsxs)(m.Flex, {
                direction: "row",
                align: "flex-start",
                gap: 2,
                children: [
                  (0, i.jsx)("img", {
                    src: "".concat(
                      c().app.image_static_assets_url,
                      "/images/star.svg"
                    ),
                    alt: "trsutpilot-star",
                    height: 20,
                    width: 20,
                  }),
                  (0, i.jsx)(m.Text, {
                    className: n.logo,
                    children: " Trustpilot",
                  }),
                ],
              }),
              (0, i.jsx)("img", {
                src: "".concat(
                  c().app.image_static_assets_url,
                  "/images/trustpilot-rating.svg"
                ),
                alt: "amber-trustpilot",
                width: "124px",
                height: "24px",
              }),
              (0, i.jsxs)(m.Text, {
                className: n.mainText,
                children: [
                  "Trustscore ",
                  (0, i.jsxs)("span", { children: [y.H, "/5"] }),
                ],
              }),
              (0, i.jsxs)(m.Text, {
                className: n.mainText,
                children: [
                  (0, i.jsxs)("span", { children: [y.S.ROUNDED, " "] }),
                  "Student reviews",
                ],
              }),
            ],
          });
        },
        C = (0, m.createStyles)(function (n) {
          return {
            outsideDiv: (0, u.Z)(
              {
                background: n.colors.neutral[0],
                padding: "12px",
                borderRadius: 6,
                marginTop: 16,
                cursor: "pointer",
              },
              n.fn.largerThan("lg"),
              { display: "none" }
            ),
            logo: (0, u.Z)(
              { fontSize: 14, fontWeight: "600" },
              n.fn.largerThan("md"),
              { fontSize: 16 }
            ),
            mainText: (0, u.Z)(
              {
                fontSize: 12,
                color: n.colors.neutral[6],
                span: { color: "black", fontWeight: "500" },
              },
              n.fn.largerThan("md"),
              { fontSize: 14 }
            ),
            trustPilot: { height: 24, width: 124, objectFit: "contain" },
          };
        }),
        z = function () {
          var n = C().classes;
          return (0, i.jsxs)(m.Box, {
            className: n.outsideDiv,
            onClick: function () {
              window.open(s.S4, "_blank");
            },
            children: [
              (0, i.jsxs)(m.Flex, {
                direction: "row",
                align: "flex-start",
                gap: 9,
                children: [
                  (0, i.jsx)("img", {
                    src: "".concat(
                      c().app.image_static_assets_url,
                      "/images/star.svg"
                    ),
                    alt: "trustpilot-star",
                    height: 20,
                    width: 20,
                  }),
                  (0, i.jsx)(m.Text, {
                    className: n.logo,
                    children: " Trustpilot",
                  }),
                  (0, i.jsx)("img", {
                    height: 18,
                    src: "".concat(
                      c().app.image_static_assets_url,
                      "/images/trustpilotFooterV2.png"
                    ),
                    className: n.trustPilot,
                    alt: "amber-trustpilot",
                  }),
                ],
              }),
              (0, i.jsxs)(m.Text, {
                className: n.mainText,
                children: [y.H, " OUT OF 5 BASED ON ", y.S.ROUNDED, " REVIEWS"],
              }),
            ],
          });
        },
        Z = (0, m.createStyles)(function (n) {
          return {
            wrapper: (0, u.Z)({ display: "none" }, n.fn.smallerThan("md"), {
              display: "flex",
            }),
            qr: { height: "124px", width: "124px" },
          };
        }),
        I = function () {
          var n = Z().classes;
          return (0, i.jsxs)(m.Flex, {
            direction: "row",
            gap: 20,
            children: [
              (0, i.jsxs)(m.Flex, {
                pt: "20px",
                className: n.wrapper,
                children: [
                  (0, i.jsx)(m.Text, {
                    fw: 700,
                    pb: 8,
                    children: "Chat on WeChat",
                  }),
                  (0, i.jsx)("img", { src: p.t_, className: n.qr }),
                  (0, i.jsx)(m.Text, {
                    fw: 400,
                    fz: "md",
                    className: "no-translate",
                    children: "ID:Amber_student",
                  }),
                ],
              }),
              (0, i.jsxs)(m.Flex, {
                pt: "20px",
                className: n.wrapper,
                children: [
                  (0, i.jsx)(m.Text, {
                    fw: 700,
                    pb: 8,
                    children: "\u5c0f\u7ea2\u4e66",
                  }),
                  (0, i.jsx)("img", { src: p.wD, className: n.qr }),
                ],
              }),
            ],
          });
        },
        F = t(50930),
        D = t(61695),
        E = [
          { name: "About", link: s.WD },
          { name: "Blog", link: s.Ql },
          { name: "How it works", link: s.Ok },
          { name: "Podcast", link: s.$n },
          { name: "Refer a Friend", link: s.$N },
          { name: "Group Bookings", link: s.LO },
          { name: "Newsroom", link: s.Qu },
          { name: "Amber Plus", link: s.UA },
          { name: "List with us", link: s.Yc, extraText: "New" },
          { name: "Media Mention", link: s.jX },
          { name: "Partner with us", extraText: "New", link: s.n },
          { name: "Ambassador", link: s._L },
          { name: "Careers", extraText: "We are hiring!", link: s.PH },
          { name: "Scholarships", link: s.kg },
        ],
        A = [
          { icon: "icon-envelope", label: s.rg, link: "mailto:".concat(s.rg) },
          {
            icon: c().global.isChinaApp
              ? "icon-wechat-green-outline"
              : "icon-whatsapp",
            label: c().global.isChinaApp ? "WeChat" : "WhatsApp",
            link: c().global.isChinaApp ? s.mx : s.s7,
          },
          {
            icon: "icon-all-regions",
            label: s.XM,
            link: "https://www.google.com/search?q=".concat(
              encodeURIComponent(s.XM)
            ),
          },
        ],
        W = (function () {
          var n = (0, a.Z)(function () {
            var n, e, t, a, i, o;
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, (0, D.J)()];
                case 1:
                  switch (
                    ((n = r.sent()),
                    (e = {
                      icon: "icon-phone",
                      label: ""
                        .concat(s._8.country_code, " ")
                        .concat(s._8.number),
                      link: "tel: ".concat(s._8.full_number),
                    }),
                    (t = {
                      icon: "icon-phone",
                      label: ""
                        .concat(s.vt.country_code, " ")
                        .concat(s.vt.number),
                      link: "tel: ".concat(s.vt.full_number),
                    }),
                    (a = {
                      icon: "icon-phone",
                      label: ""
                        .concat(s.jb.country_code, " ")
                        .concat(s.jb.number),
                      link: "tel: ".concat(s.jb.full_number),
                    }),
                    (i = {
                      icon: "icon-phone",
                      label: ""
                        .concat(s.g8.country_code, " ")
                        .concat(s.g8.number),
                      link: "tel: ".concat(s.g8.full_number),
                    }),
                    (o = {}),
                    n)
                  ) {
                    case "AU":
                      o = t;
                      break;
                    case "US":
                      o = a;
                      break;
                    case "IN":
                      o = i;
                      break;
                    default:
                      o = e;
                  }
                  return [2, [o].concat((0, F.Z)(A))];
              }
            });
          });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        H = (0, m.createStyles)(function (n, e) {
          var t,
            a = e.maxWidth;
          return {
            container:
              ((t = { margin: "32px 16px 72px 16px" }),
              (0, u.Z)(t, n.fn.largerThan("md"), { margin: "56px 80px" }),
              (0, u.Z)(t, n.fn.largerThan(a), {
                margin: "56px auto",
                maxWidth: 1440,
              }),
              (0, u.Z)(t, n.fn.largerThan("1601"), { maxWidth: 1640 }),
              t),
            mainContainer: (0, u.Z)(
              {
                borderBottom: "1px solid ".concat(n.colors.neutral[2]),
                paddingBottom: 33,
              },
              n.fn.largerThan("md"),
              { paddingBottom: 56 }
            ),
            leftContainer: (0, u.Z)({}, n.fn.largerThan("md"), {
              paddingRight: "5%",
            }),
            subHeading: {
              fontSize: 12,
              fontWeight: "400",
              color: n.colors.neutral[5],
            },
            amberImg: (0, u.Z)(
              { marginLeft: "-7px", width: "78px" },
              n.fn.largerThan("md"),
              { width: "104px" }
            ),
            sectionHeading: (0, u.Z)(
              {
                fontSize: 14,
                fontWeight: "700",
                color: "black",
                cursor: "default",
              },
              n.fn.largerThan("md"),
              { fontSize: 16 }
            ),
            supportItem: (0, u.Z)(
              { fontSize: 12, color: n.colors.neutral[5], padding: 6 },
              n.fn.largerThan("md"),
              { fontSize: 14 }
            ),
            listItem: (0, u.Z)(
              {
                fontSize: 12,
                display: "flex",
                whiteSpace: "nowrap",
                overflow: "hidden",
                color: n.colors.neutral[5],
                marginBottom: 17,
                span: {
                  color: n.colors.primary[4],
                  marginLeft: "8px",
                  padding: "2px 6px",
                  borderRadius: "999px",
                  background: "#FEE9EF",
                },
                a: {
                  color: "inherit",
                  fontWeight: "inherit",
                  "&:hover,&:focus": {
                    textDecoration: "none",
                    color: n.colors.primary[4],
                  },
                },
              },
              n.fn.largerThan("md"),
              { fontSize: 14, span: { fontSize: 12 } }
            ),
            appDownload: (0, u.Z)(
              { order: 1, marginTop: 8 },
              n.fn.largerThan("md"),
              { order: 0, marginTop: 0 }
            ),
          };
        }),
        L = function () {
          var n,
            e = H({ maxWidth: p.d }).classes,
            t = function (n) {
              (0, d.pr)({
                action: "bottom_button_clicked",
                category: "",
                button_name: n,
              });
            },
            l = (0, o.useState)([]),
            u = l[0],
            h = l[1],
            g = (0, o.useState)(!1),
            b = g[0],
            k = g[1];
          return (
            (0, o.useEffect)(function () {
              var n;
              c().zendesk.isVisible &&
                !c().global.isChinaApp &&
                (function () {
                  var n = document.createElement("script");
                  (n.id = "ze-snippet"),
                    (n.src = c().zendesk.url),
                    (n.defer = !0),
                    (n.onload = function () {
                      if ("undefined" !== typeof zE) {
                        var n = (0, d.A$)();
                        zE(function () {
                          zE("messenger:set", "conversationFields", [
                            { id: "19799472549777", value: JSON.stringify(n) },
                          ]);
                        });
                      }
                    }),
                    document && document.body.appendChild(n);
                })();
              var e = function () {
                  "function" === typeof zE && zE("messenger", "close");
                },
                t = (function () {
                  var n = (0, a.Z)(function () {
                    var n;
                    return (0, r.__generator)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, W()];
                        case 1:
                          return (n = e.sent()), h(n), [2];
                      }
                    });
                  });
                  return function () {
                    return n.apply(this, arguments);
                  };
                })();
              return (
                t(),
                window.addEventListener("beforeunload", e),
                "amberstudent.cn" ===
                  (null === window ||
                  void 0 === window ||
                  null === (n = window.location) ||
                  void 0 === n
                    ? void 0
                    : n.host) && k(!0),
                function () {
                  window.removeEventListener("beforeunload", e);
                }
              );
            }, []),
            (0, i.jsxs)(m.Box, {
              className: e.container,
              "data-testid": "footer-section",
              children: [
                (0, i.jsx)(m.Box, {
                  className: e.mainContainer,
                  children: (0, i.jsxs)(m.Grid, {
                    columns: 20,
                    children: [
                      (0, i.jsxs)(m.GridCol, {
                        xl: 6,
                        lg: 6,
                        md: 20,
                        xs: 20,
                        className: e.leftContainer,
                        children: [
                          (0, i.jsx)("img", {
                            src: "".concat(
                              c().app.image_static_assets_url,
                              "/images/logo/amber-logo-text-black.png?auto=format"
                            ),
                            className: e.amberImg,
                            loading: "lazy",
                            alt: "amber-text",
                            height: "40px",
                            width: "104px",
                          }),
                          (0, i.jsx)(m.Text, {
                            className: e.subHeading,
                            children:
                              "Book your student accommodation near top universities across the globe",
                          }),
                          (0, i.jsxs)(m.Box, {
                            className: e.ratingContainer,
                            children: [(0, i.jsx)(N, {}), (0, i.jsx)(z, {})],
                          }),
                        ],
                      }),
                      (0, i.jsx)(m.GridCol, {
                        xl: 6,
                        lg: 7,
                        md: 10,
                        xs: 20,
                        children: (0, i.jsx)(m.Grid, {
                          gutter: 0,
                          children: E.map(function (n, a) {
                            return (0, i.jsxs)(
                              m.GridCol,
                              {
                                className: e.listItem,
                                span: 6,
                                children: [
                                  (0, i.jsx)("script", {
                                    type: "application/ld+json",
                                    dangerouslySetInnerHTML: {
                                      __html: j(n.name, n.link),
                                    },
                                  }),
                                  (0, i.jsx)(m.Anchor, {
                                    href: n.link,
                                    target: "_blank",
                                    onClick: function () {
                                      return t(n.name);
                                    },
                                    children: n.name,
                                  }),
                                  n.extraText &&
                                    (0, i.jsx)("span", {
                                      children: n.extraText,
                                    }),
                                ],
                              },
                              a
                            );
                          }),
                        }),
                      }),
                      (0, i.jsx)(m.GridCol, {
                        xl: 3,
                        lg: 3,
                        md: 5,
                        xs: 20,
                        children: (0, i.jsxs)(m.Grid, {
                          gutter: 0,
                          children: [
                            (0, i.jsx)(m.GridCol, {
                              mb: 14,
                              span: 12,
                              style: { cursor: "default" },
                              children: (0, i.jsx)(m.Text, {
                                className: e.sectionHeading,
                                children: "Support",
                              }),
                            }),
                            (0, i.jsx)(m.GridCol, {
                              className: e.listItem,
                              span: 12,
                              children: (0, i.jsx)(m.Anchor, {
                                href: "/help/en",
                                target: "_blank",
                                onClick: function () {
                                  return t("Help Center");
                                },
                                children: "Help Center",
                              }),
                            }),
                            (0, i.jsxs)(m.GridCol, {
                              className: e.listItem,
                              span: 12,
                              children: [
                                (0, i.jsx)("script", {
                                  type: "application/ld+json",
                                  dangerouslySetInnerHTML: {
                                    __html: j("Contact", s.mu),
                                  },
                                }),
                                (0, i.jsx)(m.Anchor, {
                                  href: "/contact",
                                  target: "_blank",
                                  onClick: function () {
                                    return t("Contact");
                                  },
                                  children: "Contact",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)(m.GridCol, {
                        xl: 5,
                        lg: 4,
                        md: 5,
                        xs: 20,
                        children: [
                          (0, i.jsx)(m.Text, {
                            className: e.sectionHeading,
                            children: " Contact us",
                          }),
                          u.map(function (n) {
                            return (0,
                            i.jsx)(f, { icon: (0, i.jsx)("i", { className: n.icon }), label: n.label, link: n.link }, n.label);
                          }),
                        ],
                      }),
                      (
                        null === c() ||
                        void 0 === c() ||
                        null === (n = c().global) ||
                        void 0 === n
                          ? void 0
                          : n.isChinaApp
                      )
                        ? (0, i.jsxs)(m.Group, {
                            w: "100%",
                            position: "apart",
                            children: [(0, i.jsx)(x, {}), (0, i.jsx)(I, {})],
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(m.GridCol, {
                                xl: 15,
                                lg: 16,
                                md: 15,
                                xs: 20,
                                className: e.appDownload,
                                children: (0, i.jsx)(x, {}),
                              }),
                              (0, i.jsx)(m.GridCol, {
                                xl: 5,
                                lg: 4,
                                md: 5,
                                xs: 20,
                                children: (0, i.jsx)(w, {}),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
                (0, i.jsx)(v, {}),
                b &&
                  (0, i.jsx)(m.Text, {
                    fz: "10px",
                    color: "neutral.7",
                    children:
                      "Shanghai ICP No. 2023031604-1 | Shanghai Hande Zhenling Information Technology Co., Ltd.",
                  }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/648-eb820659958864c7.js.map
