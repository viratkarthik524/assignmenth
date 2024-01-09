"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1542, 16],
  {
    99194: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(70865),
        r = n(96670),
        o = n(52322),
        i = n(2784),
        l = (0, i.forwardRef)(function (e, t) {
          var n = e.children,
            l = e.idSuffix,
            c = void 0 === l ? "" : l,
            s = e.onScroll,
            d = e.withPadding,
            u = void 0 === d || d,
            f = e.navBarTravelDirectionProp,
            m = e.withItemPadding,
            g = void 0 !== m && m,
            p = e.onBookingSteps,
            h = void 0 !== p && p;
          return (
            (0, i.useEffect)(function () {
              var e = function () {
                  o.setAttribute("data-overflowing", t(i, o));
                },
                t = function (e, t) {
                  var n =
                      null === t || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect(),
                    a = Math.ceil(n.right),
                    r = Math.ceil(n.left),
                    o =
                      null === e || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    i = h ? Math.ceil(o.right) - 1 : Math.ceil(o.right),
                    l = Math.ceil(o.left);
                  return r > l && a < i
                    ? "both"
                    : l < r
                    ? "left"
                    : i > a
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
              var a = document.getElementById("leftAdvancer" + c),
                r = document.getElementById("rightAdvancer" + c),
                o = document.getElementById("scrollbox" + c),
                i = document.getElementById("scrollboxContents" + c);
              e();
              var l = !1;
              o.addEventListener("scroll", function () {
                l ||
                  window.requestAnimationFrame(function () {
                    e(), (l = !1);
                  }),
                  (l = !0);
              }),
                a.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("left" === t(i, o) || "both" === t(i, o)) {
                      var a = o.scrollLeft;
                      a < 2 * n.navBarTravelDistance
                        ? (i.style.transform = "translateX(" + a + "px)")
                        : (i.style.transform =
                            "translateX(" + n.navBarTravelDistance + "px)"),
                        i.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "left"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                r.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("right" === t(i, o) || "both" === t(i, o)) {
                      var a,
                        r,
                        l =
                          null ===
                            (a =
                              null === i || void 0 === i
                                ? void 0
                                : i.getBoundingClientRect()) || void 0 === a
                            ? void 0
                            : a.right,
                        c =
                          null ===
                            (r =
                              null === o || void 0 === o
                                ? void 0
                                : o.getBoundingClientRect()) || void 0 === r
                            ? void 0
                            : r.right,
                        s = Math.floor(l - c);
                      s < 2 * n.navBarTravelDistance
                        ? (i.style.transform = "translateX(-" + s + "px)")
                        : (i.style.transform =
                            "translateX(-" + n.navBarTravelDistance + "px)"),
                        i.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "right"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                i.addEventListener(
                  "transitionend",
                  function () {
                    var e = window.getComputedStyle(i, null),
                      t =
                        e.getPropertyValue("-webkit-transform") ||
                        e.getPropertyValue("transform"),
                      a = Math.abs(parseInt(t.split(",")[4]) || 0);
                    (i.style.transform = "none"),
                      i.classList.add("scroll-box-contents-no-transition"),
                      "left" === n.navBarTravelDirection
                        ? (o.scrollLeft = o.scrollLeft - a)
                        : (o.scrollLeft = o.scrollLeft + a),
                      (n.navBarTravelling = !1);
                  },
                  !1
                );
            }, []),
            (0, o.jsxs)("div", {
              className: "scroll-box-wrapper",
              children: [
                (0, o.jsx)("nav", {
                  id: "scrollbox" + c,
                  className: "scroll-box",
                  ref: t,
                  onScroll: s,
                  children: (0, o.jsx)(
                    "div",
                    (0, r.Z)(
                      (0, a.Z)(
                        {
                          id: "scrollboxContents" + c,
                          className: "scroll-box-contents",
                          role: "list",
                        },
                        u && { style: { paddingLeft: "20px" } }
                      ),
                      {
                        children: n.map(function (e, t) {
                          var a = [];
                          return (
                            0 === t && a.push("scroll-box-item-first"),
                            t + 1 == n.length && a.push("scroll-box-item-last"),
                            (0, o.jsx)(
                              "div",
                              {
                                className: "scroll-box-item "
                                  .concat(g ? "with-padding-right" : "", " ")
                                  .concat(a.join(" ")),
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
                (0, o.jsx)("button", {
                  "aria-label": "left-advancer",
                  id: "leftAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Left",
                  type: "button",
                  children: (0, o.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, o.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, o.jsx)("path", {
                        d: "M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z",
                      }),
                    }),
                  }),
                }),
                (0, o.jsx)("button", {
                  "aria-label": "right-advancer",
                  id: "rightAdvancer" + c,
                  className: "scroll-box-advancer scroll-box-advancer_Right",
                  type: "button",
                  children: (0, o.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, o.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, o.jsx)("path", {
                        d: "M105.56 985.817L553.53 512 105.56 38.183l-85.857 81.173 409.6 433.23v-81.172l-409.6 433.23 85.856 81.174z",
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        });
      (l.displayName = "Horizontal Scroll"), (t.C = l);
    },
    51542: function (e, t, n) {
      n.r(t),
        n.d(t, {
          OffersSection: function () {
            return d;
          },
        });
      var a = n(52322),
        r = n(62595),
        o = n(2969),
        i = n(99194),
        l = n(26793),
        c = n(47842),
        s = (0, r.createStyles)(function (e) {
          return {
            innerContainer: (0, c.Z)({ marginTop: 28 }, e.fn.largerThan("md"), {
              marginTop: 48,
            }),
          };
        }),
        d = function (e) {
          var t = e.title,
            n = e.subtitle,
            c = e.background,
            d = e.navBarTravelDirectionProp,
            u = e.utmSource,
            f = s().classes;
          return (0, a.jsx)(l.h, {
            background: null !== c && void 0 !== c ? c : "#fff",
            title:
              null !== t && void 0 !== t
                ? t
                : "Amber Referral Program and Offers",
            subtitle:
              null !== n && void 0 !== n
                ? n
                : "Several promotions, deals and special offers crafted just for you.",
            children: (0, a.jsx)(r.Box, {
              className: f.innerContainer,
              children: (0, a.jsx)(i.C, {
                withPadding: !1,
                navBarTravelDirectionProp: d,
                withItemPadding: !0,
                idSuffix: "offer",
                children: o.jn.map(function (e, t) {
                  return (0,
                  a.jsx)(o.fm, { title: e.title, cta: e.cta, isCompact: !0, lastElement: !0, color1: e.color1, color2: e.color2, content: e.content, imageWeb: e.imageWeb, imageMobile: e.imageMobile, imageTablet: e.imageTablet, imageAlt: e.imageAlt, redirect: e.redirect, utmSource: u, lastIndexElement: t === o.jn.length - 1 }, t);
                }),
              }),
            }),
          });
        };
    },
    26793: function (e, t, n) {
      n.d(t, {
        h: function () {
          return d;
        },
      });
      var a = n(52322),
        r = n(62595),
        o = n(47842),
        i = (0, r.createStyles)(function (e) {
          return {
            container: (0, o.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, o.Z)(
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
            subtitle: (0, o.Z)(
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
        l = function (e) {
          var t = e.title,
            n = e.subtitle,
            o = i().classes;
          return (0, a.jsxs)(r.Flex, {
            className: o.container,
            children: [
              (0, a.jsx)(r.Title, {
                order: 2,
                className: o.title,
                children: t,
              }),
              n && (0, a.jsx)(r.Text, { className: o.subtitle, children: n }),
            ],
          });
        },
        c = n(70016),
        s = (0, r.createStyles)(function (e, t) {
          var n,
            a = t.background;
          return {
            container: {
              backgroundColor:
                null !== a && void 0 !== a ? a : e.colors.neutral[0],
            },
            innerContainer:
              ((n = { padding: "32px 16px" }),
              (0, o.Z)(n, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, o.Z)(n, e.fn.largerThan(c.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, o.Z)(n, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, o.Z)(n, e.fn.largerThan(1601), { padding: "56px 0" }),
              n),
          };
        }),
        d = function (e) {
          var t = e.title,
            n = e.subtitle,
            o = e.children,
            i = e.background,
            c = e.innerClassName,
            d = s({ background: i }).classes,
            u = t || n;
          return (0, a.jsx)(r.Flex, {
            className: d.container,
            children: (0, a.jsxs)(r.Flex, {
              className: "".concat(d.innerContainer, " ").concat(c),
              children: [u && (0, a.jsx)(l, { title: t, subtitle: n }), o],
            }),
          });
        };
    },
    70016: function (e, t, n) {
      n.d(t, {
        EG: function () {
          return o;
        },
        GH: function () {
          return i;
        },
        Kc: function () {
          return l;
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
          return u;
        },
      });
      var a = n(8388),
        r = n.n(a),
        o = "e1affeb13de9140",
        i = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        l = {
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
          r().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        u = "".concat(
          r().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
    2969: function (e, t, n) {
      n.d(t, {
        jn: function () {
          return f;
        },
        fm: function () {
          return v;
        },
      });
      var a = n(52322),
        r = n(99333),
        o = n(8388),
        i = n.n(o),
        l = n(47842),
        c = n(62595),
        s = (0, c.createStyles)(function (e) {
          return {
            sectionHeading: (0, l.Z)(
              {
                marginBottom: 12,
                fontWeight: "500",
                color: e.colors.neutral[9],
                fontSize: 14,
              },
              e.fn.largerThan("md"),
              { marginBottom: 20, fontSize: 16 }
            ),
            amberPlusTitle: { color: e.colors.primary[4] },
          };
        }),
        d = function () {
          var e = s().classes;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              "Save up to ",
              (0, a.jsx)("span", {
                className: e.amberPlusTitle,
                children: "\xa3300",
              }),
              " with amber",
              (0, a.jsx)("span", {
                className: e.amberPlusTitle,
                children: "+",
              }),
            ],
          });
        },
        u = "".concat(i().app.image_static_assets_url, "/images/"),
        f = [
          {
            title:
              "Win \xa350 in just a few steps! Refer a friend and earn your reward",
            content:
              "Turn connections into rewards. Get credited after successful booking.",
            cta: "Refer Now",
            imageWeb: "".concat(
              u,
              "refer-payment-flow-new.png?auto=format&q=10"
            ),
            imageMobile: "".concat(u, "refer+offer.png?auto=format&q=10"),
            imageTablet: "".concat(u, "refer+8.png?auto=format&q=10"),
            redirect: "".concat(r.$N),
            imageAlt: "refer-a-friend",
            color1: "#F8D67C",
            color2: "#FFEFDD",
          },
          {
            title:
              "Unlock your academic dreams in the UK with amber scholarship!",
            content:
              "Save \xa35,000 and turn your education dreams into a reality.",
            cta: "Apply Now",
            imageWeb: "".concat(u, "scholarship.jpg?auto=format&q=10"),
            imageTablet: "".concat(
              u,
              "scholarshoip-offer+1.png?auto=format&q=10"
            ),
            imageMobile: "".concat(
              u,
              "scholarship-offer-mobile+2.png?auto=format&q=10"
            ),
            redirect: "/scholarship",
            imageAlt: "scholarship-offer",
            color1: "#B2FFD3",
            color2: "#FFEFDD",
          },
          {
            title: (0, a.jsx)(d, {}),
            content:
              "Get exclusive discounts from 150+ trusted partners at this one-stop student platform",
            cta: "Claim Now",
            imageWeb: "".concat(u, "refer-3-web-hd1.png?auto=format&q=10"),
            imageTablet: "".concat(u, "refer-3-hd1.png?auto=format&q=10"),
            imageMobile: "".concat(u, "refer-3-mob-hd1.png?auto=format&q=10"),
            redirect: "/plus",
            imageAlt: "plus-offer",
            color1: "#FF8B9C",
            color2: "#FFE8E8",
          },
        ],
        m = n(24291),
        g = n(70865),
        p = n(96670),
        h = (0, c.createStyles)(function (e, t) {
          var n,
            a = t.imageWeb,
            r = t.imageMobile,
            o = t.imageTablet,
            i = t.lastElement,
            c = t.color1,
            s = t.color2,
            d = t.isCompact,
            u = t.cta,
            f = t.lastIndexElement,
            m = t.maintainAspectRatio;
          return {
            ctaButton: (0, l.Z)(
              {
                marginTop: 18,
                position: d ? "absolute" : "inherit",
                bottom: 24,
              },
              e.fn.largerThan("md"),
              { marginTop: 28, position: "inherit" }
            ),
            referWrapper: (0, l.Z)(
              {
                width: "100vw",
                overflow: "hidden",
                margin: "12px -6px 12px -6px",
                padding: "20px 16px",
                backgroundColor: "#FFFFFF",
              },
              e.fn.largerThan("md"),
              {
                height: 154,
                padding: 0,
                borderRadius: 8,
                margin: 0,
                width: "100%",
              }
            ),
            offerCardWrapper: (0, p.Z)(
              (0, g.Z)(
                {
                  height: d ? 310 : "fit-content",
                  width: d ? 340 : "100%",
                  backgroundRepeat: "no-repeat",
                  cursor: u ? "pointer" : "default",
                  backgroundSize: "cover",
                  padding: "24px 20px",
                  backgroundImage: "url('".concat(r, "')"),
                  borderRadius: 8,
                  marginBottom: i ? 0 : 12,
                  position: "relative",
                  aspectRatio: m ? "1" : "auto",
                },
                f && {
                  display: "flex !important",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }
              ),
              ((n = {}),
              (0, l.Z)(n, e.fn.largerThan("md"), {
                display: "block",
                padding: u ? 28 : "48px 28px",
                height: f ? "100%" : "fit-content",
                borderRadius: 8,
                backgroundImage: "url('".concat(o, "')"),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "118% 100%",
                width: d ? "550px" : "100%",
                aspectRatio: "auto",
                transition: "all .3s ease-in-out",
                "&:hover": { backgroundSize: "122% 104%" },
              }),
              (0, l.Z)(n, e.fn.largerThan("lg"), {
                backgroundImage: "url('".concat(d ? o : a, "')"),
              }),
              n)
            ),
            offerCardContentSectionWrapperMobile: (0, l.Z)(
              {
                height: 275,
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "24px 20px",
                borderRadius: 8,
              },
              e.fn.largerThan("md"),
              { display: "none" }
            ),
            offerCardContentSectionWrapper: { height: "100%" },
            offerCardContentSection: (0, l.Z)(
              { maxWidth: "69%" },
              e.fn.largerThan("md"),
              { maxWidth: "75%" }
            ),
            offerTitle: (0, l.Z)(
              {
                fontWeight: "700 !important",
                fontSize: "24px !important",
                maxWidth: "85%",
                whiteSpace: "break-spaces",
                lineHeight: "25.5px",
              },
              e.fn.largerThan("md"),
              { maxWidth: "65%" }
            ),
            offerText: (0, l.Z)(
              {
                whiteSpace: "break-spaces",
                lineHeight: "15px",
                maxWidth: "60%",
              },
              e.fn.largerThan("md"),
              { marginTop: 8, fontSize: "12px !important", maxWidth: "65%" }
            ),
            titleUnderline: (0, l.Z)(
              {
                maxWidth: "65%",
                height: 8,
                background: "linear-gradient(90deg, "
                  .concat(c, " 0%, ")
                  .concat(s, " 101.95%)"),
                marginTop: 12,
              },
              e.fn.largerThan("md"),
              { display: d ? "block" : "none" }
            ),
          };
        }),
        v = function (e) {
          var t = e.title,
            n = e.isCompact,
            o = void 0 !== n && n,
            i = e.imageWeb,
            l = e.imageTablet,
            s = e.redirect,
            d = e.content,
            u = e.imageMobile,
            f = e.cta,
            g = e.lastElement,
            p = e.color1,
            v = e.color2,
            x = e.utmSource,
            b = e.lastIndexElement,
            _ = void 0 !== b && b,
            C = e.maintainAspectRatio,
            T = h({
              imageWeb: i,
              imageMobile: u,
              imageTablet: l,
              lastElement: g,
              color1: p,
              color2: v,
              isCompact: o,
              cta: f,
              lastIndexElement: _,
              maintainAspectRatio: void 0 !== C && C,
            }).classes;
          return (0, a.jsxs)(c.Box, {
            className: T.offerCardWrapper,
            onClick: function () {
              return (function (e, t) {
                (0, m.pr)({
                  action: "clicked_refer_and_offer_card",
                  category: r.E0.HOME,
                  refer_title: e,
                }),
                  t &&
                    window.open(
                      (function (e, t, n) {
                        var a = "".concat(e).concat(t);
                        return (
                          n && (a = "".concat(a, "?utm_source=").concat(n)), a
                        );
                      })(window.location.origin, s, x),
                      "_blank"
                    );
              })(t, f);
            },
            children: [
              (0, a.jsxs)(c.Box, {
                children: [
                  (0, a.jsx)(c.Text, {
                    c: "#000000",
                    fw: 700,
                    fz: 24,
                    className: T.offerTitle,
                    children: t,
                  }),
                  (0, a.jsx)("div", { className: T.titleUnderline }),
                  (0, a.jsx)(c.Text, {
                    c: "#000000",
                    mt: 12,
                    fw: 500,
                    fz: 12,
                    className: T.offerText,
                    children: d,
                  }),
                ],
              }),
              f &&
                (0, a.jsx)(c.Button, {
                  size: "sm",
                  weight: 500,
                  className: T.ctaButton,
                  w: "fit-content",
                  variant: "primary",
                  color: "primary.5",
                  px: 14,
                  py: 0,
                  children: f,
                }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/1542.cba3ad382cecbd14.js.map
