"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1216, 16],
  {
    21216: function (e, t, n) {
      n.d(t, {
        f: function () {
          return f;
        },
      });
      var r = n(52322),
        a = n(62595),
        i = n(70016),
        l = n(99194),
        o = n(26793),
        c = n(47842),
        s = (0, a.createStyles)(function (e) {
          var t;
          return {
            wrapper:
              ((t = {
                padding: "24px 32px 24px 40px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                position: "relative",
                width: 270,
                height: "100%",
                border: "1px solid ".concat(e.colors.neutral[2]),
                flexGrow: 1,
              }),
              (0, c.Z)(t, e.fn.largerThan("md"), {
                width: 350,
                borderRadius: "12px",
              }),
              (0, c.Z)(t, "&:first-of-type", { marginLeft: 5 }),
              t),
            indexWrapper: {
              position: "absolute",
              left: "-24px",
              top: "calc(50% - 24px)",
              width: 48,
              height: 48,
              borderRadius: "50%",
              boxShadow:
                " 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.05)",
              border: "1px solid ".concat(e.colors.neutral[2]),
              backgroundColor: "#ffffff",
            },
            indexWrapperText: { textAlign: "center" },
            icon: (0, c.Z)(
              { width: 38, objectFit: "contain", aspectRatio: 1 },
              e.fn.largerThan("md"),
              { width: 46 }
            ),
            title: (0, c.Z)(
              {
                fontSize: 14,
                marginTop: 16,
                lineHeight: "150%",
                textWrap: "wrap",
                whiteSpace: "normal",
              },
              e.fn.largerThan("md"),
              { fontSize: 18 }
            ),
            text: (0, c.Z)(
              {
                fontSize: 12,
                textWrap: "wrap",
                whiteSpace: "normal",
                lineHeight: "150%",
                marginTop: 4,
              },
              e.fn.largerThan("md"),
              { fontSize: 14, marginTop: 8 }
            ),
          };
        }),
        d = function (e) {
          var t = e.cardData,
            n = e.index,
            i = s().classes;
          return (0, r.jsxs)(a.Flex, {
            className: i.wrapper,
            children: [
              (0, r.jsx)(a.Flex, {
                className: i.indexWrapper,
                justify: "center",
                align: "center",
                children: (0, r.jsx)(a.Text, {
                  fz: 20,
                  fw: 700,
                  color: "neutral.6",
                  className: i.indexWrapperText,
                  children: n + 1,
                }),
              }),
              (0, r.jsx)("img", {
                src: t.iconImage,
                className: i.icon,
                alt: t.altText,
              }),
              (0, r.jsx)(a.Title, {
                order: 3,
                className: i.title,
                color: "neutral.9",
                children: t.title,
              }),
              (0, r.jsx)(a.Text, {
                className: i.text,
                color: "neutral.5",
                children: t.text,
              }),
            ],
          });
        },
        g = (0, a.createStyles)(function (e) {
          var t;
          return {
            outerWrapper: { backgroundColor: e.colors.neutral[0] },
            horizontalScrollWrapper:
              ((t = { maxWidth: e.breakpoints.xl, marginTop: 28 }),
              (0, c.Z)(t, e.fn.largerThan("md"), { marginTop: 48 }),
              (0, c.Z)(t, "& #scrollboxContentsbooking.scroll-box-contents", {
                display: "flex",
                width: "100%",
              }),
              (0, c.Z)(t, "& .scroll-box-item ", { flexGrow: 1 }),
              t),
            title: (0, c.Z)(
              { fontSize: 18, lineHeight: "125%", fontWeight: 600 },
              e.fn.largerThan("md"),
              { fontSize: 24, lineHeight: "30px", fontWeight: 700 }
            ),
            text: (0, c.Z)(
              { fontSize: 14, marginBottom: 28, marginTop: 4 },
              e.fn.largerThan("md"),
              {
                fontSize: 18,
                lineHeight: "27px",
                marginTop: 8,
                marginBottom: 48,
              }
            ),
            bookingStepCardWrapper: (0, c.Z)(
              {
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: 8,
                height: "100%",
                flexGrow: 1,
              },
              e.fn.largerThan("md"),
              { gap: 12, marginRight: 24, "&:last-of-type": { marginRight: 0 } }
            ),
            rightArrow: (0, c.Z)(
              {
                alginSelf: "center",
                width: "fit-content",
                fontSize: "6px",
                marginRight: 16,
              },
              e.fn.largerThan("md"),
              { fontSize: "8px" }
            ),
          };
        }),
        f = function (e) {
          var t = e.stepData,
            n = e.title,
            c = e.description,
            s = e.sectionBackground,
            f = g({ maxWidth: i.d }).classes;
          return (0, r.jsx)(o.h, {
            title: n,
            subtitle: c,
            background: s,
            children: (0, r.jsx)(a.Flex, {
              className: f.horizontalScrollWrapper,
              children: (0, r.jsx)(l.Z, {
                idSuffix: "booking",
                navBarTravelDirectionProp: 1e3,
                onBookingSteps: !0,
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e, n) {
                        return (0,
                        r.jsxs)(a.Group, { className: f.bookingStepCardWrapper, children: [(0, r.jsx)(d, { cardData: e, index: n }), n !== t.length - 1 && (0, r.jsx)("i", { className: "icon-step-arrow-right ".concat(f.rightArrow) })] }, "BookingStepCard_".concat(n));
                      }),
              }),
            }),
          });
        };
    },
    99194: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(70865),
        a = n(96670),
        i = n(52322),
        l = n(2784),
        o = (0, l.forwardRef)(function (e, t) {
          var n = e.children,
            o = e.idSuffix,
            c = void 0 === o ? "" : o,
            s = e.onScroll,
            d = e.withPadding,
            g = void 0 === d || d,
            f = e.navBarTravelDirectionProp,
            p = e.withItemPadding,
            u = void 0 !== p && p,
            h = e.onBookingSteps,
            x = void 0 !== h && h;
          return (
            (0, l.useEffect)(function () {
              var e = function () {
                  i.setAttribute("data-overflowing", t(l, i));
                },
                t = function (e, t) {
                  var n =
                      null === t || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect(),
                    r = Math.ceil(n.right),
                    a = Math.ceil(n.left),
                    i =
                      null === e || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    l = x ? Math.ceil(i.right) - 1 : Math.ceil(i.right),
                    o = Math.ceil(i.left);
                  return a > o && r < l
                    ? "both"
                    : o < a
                    ? "left"
                    : l > r
                    ? "right"
                    : "none";
                },
                n = {
                  navBarTravelling: !1,
                  navBarTravelDirection: "",
                  navBarTravelDistance: f || 560,
                };
              document.documentElement.classList.remove("no-js"),
                document.documentElement.classList.add("js");
              var r = document.getElementById("leftAdvancer" + c),
                a = document.getElementById("rightAdvancer" + c),
                i = document.getElementById("scrollbox" + c),
                l = document.getElementById("scrollboxContents" + c);
              e();
              var o = !1;
              i.addEventListener("scroll", function () {
                o ||
                  window.requestAnimationFrame(function () {
                    e(), (o = !1);
                  }),
                  (o = !0);
              }),
                r.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("left" === t(l, i) || "both" === t(l, i)) {
                      var r = i.scrollLeft;
                      r < 2 * n.navBarTravelDistance
                        ? (l.style.transform = "translateX(" + r + "px)")
                        : (l.style.transform =
                            "translateX(" + n.navBarTravelDistance + "px)"),
                        l.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "left"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                a.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("right" === t(l, i) || "both" === t(l, i)) {
                      var r,
                        a,
                        o =
                          null ===
                            (r =
                              null === l || void 0 === l
                                ? void 0
                                : l.getBoundingClientRect()) || void 0 === r
                            ? void 0
                            : r.right,
                        c =
                          null ===
                            (a =
                              null === i || void 0 === i
                                ? void 0
                                : i.getBoundingClientRect()) || void 0 === a
                            ? void 0
                            : a.right,
                        s = Math.floor(o - c);
                      s < 2 * n.navBarTravelDistance
                        ? (l.style.transform = "translateX(-" + s + "px)")
                        : (l.style.transform =
                            "translateX(-" + n.navBarTravelDistance + "px)"),
                        l.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "right"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                l.addEventListener(
                  "transitionend",
                  function () {
                    var e = window.getComputedStyle(l, null),
                      t =
                        e.getPropertyValue("-webkit-transform") ||
                        e.getPropertyValue("transform"),
                      r = Math.abs(parseInt(t.split(",")[4]) || 0);
                    (l.style.transform = "none"),
                      l.classList.add("scroll-box-contents-no-transition"),
                      "left" === n.navBarTravelDirection
                        ? (i.scrollLeft = i.scrollLeft - r)
                        : (i.scrollLeft = i.scrollLeft + r),
                      (n.navBarTravelling = !1);
                  },
                  !1
                );
            }, []),
            (0, i.jsxs)("div", {
              className: "scroll-box-wrapper",
              children: [
                (0, i.jsx)("nav", {
                  id: "scrollbox" + c,
                  className: "scroll-box",
                  ref: t,
                  onScroll: s,
                  children: (0, i.jsx)(
                    "div",
                    (0, a.Z)(
                      (0, r.Z)(
                        {
                          id: "scrollboxContents" + c,
                          className: "scroll-box-contents",
                          role: "list",
                        },
                        g && { style: { paddingLeft: "20px" } }
                      ),
                      {
                        children: n.map(function (e, t) {
                          var r = [];
                          return (
                            0 === t && r.push("scroll-box-item-first"),
                            t + 1 == n.length && r.push("scroll-box-item-last"),
                            (0, i.jsx)(
                              "div",
                              {
                                className: "scroll-box-item "
                                  .concat(u ? "with-padding-right" : "", " ")
                                  .concat(r.join(" ")),
                                role: "listitem",
                                children: e,
                              },
                              "scroll-box-item-".concat(t)
                            )
                          );
                        }),
                      }
                    )
                  ),
                }),
                (0, i.jsx)("button", {
                  "aria-label": "left-advancer",
                  id: "leftAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Left",
                  type: "button",
                  children: (0, i.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, i.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, i.jsx)("path", {
                        d: "M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z",
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)("button", {
                  "aria-label": "right-advancer",
                  id: "rightAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Right",
                  type: "button",
                  children: (0, i.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, i.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, i.jsx)("path", {
                        d: "M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z",
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        });
      (o.displayName = "Horizontal Scroll"), (t.C = o);
    },
    26793: function (e, t, n) {
      n.d(t, {
        h: function () {
          return d;
        },
      });
      var r = n(52322),
        a = n(62595),
        i = n(47842),
        l = (0, a.createStyles)(function (e) {
          return {
            container: (0, i.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, i.Z)(
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
            subtitle: (0, i.Z)(
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
        o = function (e) {
          var t = e.title,
            n = e.subtitle,
            i = l().classes;
          return (0, r.jsxs)(a.Flex, {
            className: i.container,
            children: [
              (0, r.jsx)(a.Title, {
                order: 2,
                className: i.title,
                children: t,
              }),
              n && (0, r.jsx)(a.Text, { className: i.subtitle, children: n }),
            ],
          });
        },
        c = n(70016),
        s = (0, a.createStyles)(function (e, t) {
          var n,
            r = t.background;
          return {
            container: {
              backgroundColor:
                null !== r && void 0 !== r ? r : e.colors.neutral[0],
            },
            innerContainer:
              ((n = { padding: "32px 16px" }),
              (0, i.Z)(n, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, i.Z)(n, e.fn.largerThan(c.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, i.Z)(n, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, i.Z)(n, e.fn.largerThan(1601), { padding: "56px 0" }),
              n),
          };
        }),
        d = function (e) {
          var t = e.title,
            n = e.subtitle,
            i = e.children,
            l = e.background,
            c = e.innerClassName,
            d = s({ background: l }).classes,
            g = t || n;
          return (0, r.jsx)(a.Flex, {
            className: d.container,
            children: (0, r.jsxs)(a.Flex, {
              className: "".concat(d.innerContainer, " ").concat(c),
              children: [g && (0, r.jsx)(o, { title: t, subtitle: n }), i],
            }),
          });
        };
    },
    70016: function (e, t, n) {
      n.d(t, {
        EG: function () {
          return i;
        },
        GH: function () {
          return l;
        },
        Kc: function () {
          return o;
        },
        d: function () {
          return s;
        },
        t_: function () {
          return d;
        },
        tj: function () {
          return c;
        },
        wD: function () {
          return g;
        },
      });
      var r = n(8388),
        a = n.n(r),
        i = "e1affeb13de9140",
        l = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        o = {
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
        c = "https://m.me/amberstudent",
        s = 1441,
        d = "".concat(
          a().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        g = "".concat(
          a().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/1216-b41096cf3c22ff45.js.map
