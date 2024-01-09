"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2804],
  {
    71526: function (e, a, n) {
      var t = n(98788),
        i = n(50853);
      function r() {
        return (r = (0, t.Z)(function (e) {
          return (0, i.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return a.trys.push([0, 2, , 3]), [4, e()];
              case 1:
                return [2, [a.sent(), null]];
              case 2:
                return [2, [null, a.sent()]];
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      a.Z = function (e) {
        return r.apply(this, arguments);
      };
    },
    35954: function (e, a, n) {
      n.d(a, {
        o: function () {
          return t.o;
        },
      });
      var t = n(22119);
    },
    91059: function (e, a, n) {
      n.r(a),
        n.d(a, {
          SectionFeatured: function () {
            return f;
          },
        });
      var t = n(52322),
        i = n(62595),
        r = n(35954);
      function s(e) {
        var a = e.features || [];
        return (
          0 == a.length &&
            (a.push("Verified Property"),
            a.push("Price-Match Guarantee"),
            a.push("24x7 Personal Assistance")),
          (0, t.jsxs)("div", {
            className: "featured-features",
            children: [
              a.map(function (e, a) {
                return (0,
                t.jsxs)("div", { className: "tag-element", children: [(0, t.jsx)("span", { className: "icon", children: (0, t.jsx)("i", { className: "icon-tick-mark" }) }), (0, t.jsx)("span", { className: "text", children: e })] }, a);
              }),
              (0, t.jsx)("div", { className: "is-clearfix" }),
            ],
          })
        );
      }
      var o = [
          { id: 1, name: "Verified Properties", icon: "tick-mark" },
          { id: 2, name: "24x7 Assistance", icon: "support" },
          { id: 3, name: "Price Match Guarantee", icon: "money-bill" },
        ],
        c = n(47842),
        l = (0, i.createStyles)(function (e) {
          return {
            featuresContainer: (0, c.Z)(
              { gap: 4, marginTop: 4 },
              e.fn.largerThan("md"),
              { gap: 16, marginTop: 8 }
            ),
            tag: (0, c.Z)(
              {
                width: "fit-content",
                color: "#fff",
                padding: "4px 8px",
                background: "rgba(0, 0, 0, 0.50)",
                backdropFilter: "blur(4px)",
                borderRadius: 20,
                fontSize: 10,
                fontWeight: 400,
                "&:nth-of-type(2)": { marginLeft: 4 },
              },
              e.fn.largerThan("md"),
              { fontSize: 14, padding: "8px 16px" }
            ),
            tagIcon: (0, c.Z)(
              {
                color: e.colors.primary[4],
                marginRight: "calc(4px - 0.2em)",
                "& .icon-money-bill": (0, c.Z)(
                  { marginRight: 6, fontSize: 8 },
                  e.fn.largerThan("md"),
                  { marginRight: 8, fontSize: 12 }
                ),
              },
              e.fn.largerThan("md"),
              { marginRight: "calc(8px - 0.2em)" }
            ),
          };
        }),
        d = function () {
          var e = l().classes;
          return (0, t.jsx)(i.Flex, {
            direction: "row",
            wrap: "wrap",
            align: "center",
            justify: "center",
            className: e.featuresContainer,
            children: o.map(function (a) {
              var n = a.id,
                i = a.name,
                r = a.icon;
              return (0,
              t.jsxs)("div", { className: e.tag, children: [(0, t.jsx)("span", { className: e.tagIcon, children: (0, t.jsx)("i", { className: "icon-".concat(r) }) }), (0, t.jsx)("span", { className: e.tagText, children: i })] }, n);
            }),
          });
        },
        g = n(8388),
        h = n.n(g),
        m = "https://static-assets-amberstudent.imgix.net/images/",
        u =
          ("".concat(m, "website-mobile-banner.jpg?auto=format&width=500&q=10"),
          "".concat(m, "website-banner.jpg?auto=format&width=1600&q=10"),
          {
            mobile: h().global.isChinaApp
              ? "".concat(m, "hero-china-mobile.jpg?auto=format")
              : "".concat(m, "website-mobile-banner.jpg?auto=format"),
            tab: h().global.isChinaApp
              ? "".concat(m, "hero-china-tab.jpg?auto=format")
              : "".concat(m, "website-tab-banner.jpg?auto=format"),
            desktop: h().global.isChinaApp
              ? "".concat(m, "hero-china-laptop.jpg?auto=format")
              : "".concat(m, "website-banner.jpg?auto=format&q=10"),
          }),
        p = (0, i.createStyles)(function (e, a) {
          var n,
            t,
            i = a.isAppBannerDisplayed;
          return {
            sectionFeaturedContainer:
              ((n = {
                maxWidth: e.breakpoints.xl,
                margin: "0 auto",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 65.1%), url(".concat(
                    u.mobile,
                    ")"
                  ),
                backgroundSize: "auto 100%",
                color: "#fff",
                position: "relative",
                padding: "0 16px",
                backgroundRepeat: "no-repeat",
                aspectRatio: "15/17",
                marginTop: i ? "69px" : 0,
              }),
              (0, c.Z)(n, e.fn.largerThan("sm"), {
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 65.1%), url(".concat(
                    u.tab,
                    ")"
                  ),
                backgroundSize: "100%",
                aspectRatio: "18/11",
              }),
              (0, c.Z)(n, e.fn.largerThan("md"), { margin: "0 auto" }),
              (0, c.Z)(n, e.fn.largerThan("lg"), {
                padding: "0 36px",
                backgroundSize: "100% 100% !important",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 65.1%), url(".concat(
                    u.desktop,
                    ")"
                  ),
                aspectRatio: "36/13",
              }),
              (0, c.Z)(n, e.fn.largerThan("xl"), {
                maxWidth: "100%",
                width: "100%",
              }),
              n),
            headingsContainer:
              ((t = {}),
              (0, c.Z)(t, e.fn.smallerThan("sm"), {
                marginTop: "-12px",
                minWidth: "100%",
              }),
              (0, c.Z)(t, e.fn.largerThan("lg"), { minWidth: "697px" }),
              t),
            heading: (0, c.Z)(
              {
                fontSize: 24,
                fontWeight: 600,
                marginBlockStart: "0",
                marginBlockEnd: "0",
                lineHeight: "125%",
                textAlign: "center",
              },
              e.fn.largerThan("md"),
              { fontSize: 56, lineHeight: "110%" }
            ),
            subHeading: (0, c.Z)(
              {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                textAlign: "center",
              },
              e.fn.largerThan("md"),
              { fontSize: 20 }
            ),
            searchContainer: (0, c.Z)(
              {
                position: "absolute",
                zIndex: 2,
                width: "calc(100% - 32px)",
                bottom: "11%",
              },
              e.fn.largerThan("md"),
              { width: "100%", maxWidth: "720px" }
            ),
          };
        }),
        f = function (e) {
          var a,
            n = p({ isAppBannerDisplayed: e.isAppBannerDisplayed }).classes;
          return e.isNewHome
            ? (0, t.jsx)(i.Flex, {
                justify: "end",
                align: "center",
                id: "section-featured",
                h: "100%",
                className: n.sectionFeaturedContainer,
                children: (0, t.jsx)(i.Flex, {
                  justify: "end",
                  h: "100%",
                  className: n.headingsContainer,
                  children: (0, t.jsxs)(i.Flex, {
                    h: "70%",
                    justify: "space-evenly",
                    children: [
                      (0, t.jsxs)(i.Box, {
                        children: [
                          (0, t.jsx)(i.Title, {
                            order: 2,
                            className: n.heading,
                            children: "Home away from home!",
                          }),
                          (0, t.jsx)(i.Title, {
                            order: 1,
                            className: n.subHeading,
                            children:
                              "Book student accommodations near top universities and cities across the globe.",
                          }),
                          (0, t.jsx)(d, {}),
                        ],
                      }),
                      (0, t.jsx)(r.o, {
                        showSuggestions: !0,
                        finalAction: "set_link",
                        isNewHome: e.isNewHome,
                        idValue: "main-search",
                        gtagEventCategory:
                          null === e || void 0 === e
                            ? void 0
                            : e.gtagEventCategory,
                        searchElementRef: e.searchElementRef,
                      }),
                    ],
                  }),
                }),
              })
            : (0, t.jsx)("div", {
                id: "section-featured",
                className: "section-featured header-home-new",
                children: (0, t.jsxs)("div", {
                  className: "section-featured-inner-container",
                  children: [
                    (0, t.jsx)("div", {
                      className: "header-text-container",
                      children: (0, t.jsxs)("div", {
                        className: "header-text",
                        children: [
                          (0, t.jsx)("h1", {
                            className: "featured-heading has-text-centered",
                            children: "Home away from Home",
                          }),
                          (0, t.jsx)("h2", {
                            className: "featured-subheading has-text-centered",
                            children:
                              "Book your student accommodation near top universities across the globe",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "search-container-new ".concat(
                        (null === (a = e.deviceInfo) || void 0 === a
                          ? void 0
                          : a.mobile) && "is-mobile"
                      ),
                      children: (0, t.jsx)(r.o, {
                        showSuggestions: !0,
                        finalAction: "set_link",
                        idValue: "main-search",
                        isNewHome: e.isNewHome,
                        gtagEventCategory:
                          null === e || void 0 === e
                            ? void 0
                            : e.gtagEventCategory,
                        searchElementRef: e.searchElementRef,
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "features-container",
                      children: (0, t.jsx)("div", {
                        children: (0, t.jsx)(s, {
                          features: [
                            "Verified Listings",
                            "Price-Match Guarantee",
                            "24x7 Assistance",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              });
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/2804.cb86aa899038cd17.js.map
