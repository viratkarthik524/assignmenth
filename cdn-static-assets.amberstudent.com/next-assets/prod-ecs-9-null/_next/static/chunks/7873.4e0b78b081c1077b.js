"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7873, 16],
  {
    99194: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(70865),
        i = n(96670),
        r = n(52322),
        o = n(2784),
        l = (0, o.forwardRef)(function (e, t) {
          var n = e.children,
            l = e.idSuffix,
            s = void 0 === l ? "" : l,
            c = e.onScroll,
            d = e.withPadding,
            h = void 0 === d || d,
            g = e.navBarTravelDirectionProp,
            u = e.withItemPadding,
            m = void 0 !== u && u,
            p = e.onBookingSteps,
            f = void 0 !== p && p;
          return (
            (0, o.useEffect)(function () {
              var e = function () {
                  r.setAttribute("data-overflowing", t(o, r));
                },
                t = function (e, t) {
                  var n =
                      null === t || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect(),
                    a = Math.ceil(n.right),
                    i = Math.ceil(n.left),
                    r =
                      null === e || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    o = f ? Math.ceil(r.right) - 1 : Math.ceil(r.right),
                    l = Math.ceil(r.left);
                  return i > l && a < o
                    ? "both"
                    : l < i
                    ? "left"
                    : o > a
                    ? "right"
                    : "none";
                },
                n = {
                  navBarTravelling: !1,
                  navBarTravelDirection: "",
                  navBarTravelDistance: g || 560,
                };
              document.documentElement.classList.remove("no-js"),
                document.documentElement.classList.add("js");
              var a = document.getElementById("leftAdvancer" + s),
                i = document.getElementById("rightAdvancer" + s),
                r = document.getElementById("scrollbox" + s),
                o = document.getElementById("scrollboxContents" + s);
              e();
              var l = !1;
              r.addEventListener("scroll", function () {
                l ||
                  window.requestAnimationFrame(function () {
                    e(), (l = !1);
                  }),
                  (l = !0);
              }),
                a.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("left" === t(o, r) || "both" === t(o, r)) {
                      var a = r.scrollLeft;
                      a < 2 * n.navBarTravelDistance
                        ? (o.style.transform = "translateX(" + a + "px)")
                        : (o.style.transform =
                            "translateX(" + n.navBarTravelDistance + "px)"),
                        o.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "left"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                i.addEventListener("click", function () {
                  if (!0 !== n.navBarTravelling) {
                    if ("right" === t(o, r) || "both" === t(o, r)) {
                      var a,
                        i,
                        l =
                          null ===
                            (a =
                              null === o || void 0 === o
                                ? void 0
                                : o.getBoundingClientRect()) || void 0 === a
                            ? void 0
                            : a.right,
                        s =
                          null ===
                            (i =
                              null === r || void 0 === r
                                ? void 0
                                : r.getBoundingClientRect()) || void 0 === i
                            ? void 0
                            : i.right,
                        c = Math.floor(l - s);
                      c < 2 * n.navBarTravelDistance
                        ? (o.style.transform = "translateX(-" + c + "px)")
                        : (o.style.transform =
                            "translateX(-" + n.navBarTravelDistance + "px)"),
                        o.classList.remove("scroll-box-contents-no-transition"),
                        (n.navBarTravelDirection = "right"),
                        (n.navBarTravelling = !0);
                    }
                    e();
                  }
                }),
                o.addEventListener(
                  "transitionend",
                  function () {
                    var e = window.getComputedStyle(o, null),
                      t =
                        e.getPropertyValue("-webkit-transform") ||
                        e.getPropertyValue("transform"),
                      a = Math.abs(parseInt(t.split(",")[4]) || 0);
                    (o.style.transform = "none"),
                      o.classList.add("scroll-box-contents-no-transition"),
                      "left" === n.navBarTravelDirection
                        ? (r.scrollLeft = r.scrollLeft - a)
                        : (r.scrollLeft = r.scrollLeft + a),
                      (n.navBarTravelling = !1);
                  },
                  !1
                );
            }, []),
            (0, r.jsxs)("div", {
              className: "scroll-box-wrapper",
              children: [
                (0, r.jsx)("nav", {
                  id: "scrollbox" + s,
                  className: "scroll-box",
                  ref: t,
                  onScroll: c,
                  children: (0, r.jsx)(
                    "div",
                    (0, i.Z)(
                      (0, a.Z)(
                        {
                          id: "scrollboxContents" + s,
                          className: "scroll-box-contents",
                          role: "list",
                        },
                        h && { style: { paddingLeft: "20px" } }
                      ),
                      {
                        children: n.map(function (e, t) {
                          var a = [];
                          return (
                            0 === t && a.push("scroll-box-item-first"),
                            t + 1 == n.length && a.push("scroll-box-item-last"),
                            (0, r.jsx)(
                              "div",
                              {
                                className: "scroll-box-item "
                                  .concat(m ? "with-padding-right" : "", " ")
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
                (0, r.jsx)("button", {
                  "aria-label": "left-advancer",
                  id: "leftAdvancer" + s,
                  className: "scroll-box-advancer scroll-box-advancer_Left",
                  type: "button",
                  children: (0, r.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, r.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, r.jsx)("path", {
                        d: "M445.44 38.183L-2.53 512l447.97 473.817 85.857-81.173-409.6-433.23v81.172l409.6-433.23L445.44 38.18z",
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)("button", {
                  "aria-label": "right-advancer",
                  id: "rightAdvancer" + s,
                  className: "scroll-box-advancer scroll-box-advancer_Right",
                  type: "button",
                  children: (0, r.jsx)("div", {
                    className: "scroll-box-advancer-inner-container",
                    children: (0, r.jsx)("svg", {
                      className: "scroll-box-advancer_Icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 551 1024",
                      children: (0, r.jsx)("path", {
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
    26793: function (e, t, n) {
      n.d(t, {
        h: function () {
          return d;
        },
      });
      var a = n(52322),
        i = n(62595),
        r = n(47842),
        o = (0, i.createStyles)(function (e) {
          return {
            container: (0, r.Z)({ gap: 4 }, e.fn.largerThan("lg"), { gap: 8 }),
            title: (0, r.Z)(
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
            subtitle: (0, r.Z)(
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
            r = o().classes;
          return (0, a.jsxs)(i.Flex, {
            className: r.container,
            children: [
              (0, a.jsx)(i.Title, {
                order: 2,
                className: r.title,
                children: t,
              }),
              n && (0, a.jsx)(i.Text, { className: r.subtitle, children: n }),
            ],
          });
        },
        s = n(70016),
        c = (0, i.createStyles)(function (e, t) {
          var n,
            a = t.background;
          return {
            container: {
              backgroundColor:
                null !== a && void 0 !== a ? a : e.colors.neutral[0],
            },
            innerContainer:
              ((n = { padding: "32px 16px" }),
              (0, r.Z)(n, e.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: e.breakpoints.xl,
              }),
              (0, r.Z)(n, e.fn.largerThan(s.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, r.Z)(n, e.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, r.Z)(n, e.fn.largerThan(1601), { padding: "56px 0" }),
              n),
          };
        }),
        d = function (e) {
          var t = e.title,
            n = e.subtitle,
            r = e.children,
            o = e.background,
            s = e.innerClassName,
            d = c({ background: o }).classes,
            h = t || n;
          return (0, a.jsx)(i.Flex, {
            className: d.container,
            children: (0, a.jsxs)(i.Flex, {
              className: "".concat(d.innerContainer, " ").concat(s),
              children: [h && (0, a.jsx)(l, { title: t, subtitle: n }), r],
            }),
          });
        };
    },
    23911: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SectionTestimonialsV2: function () {
            return T;
          },
        });
      var a = n(52322),
        i = n(99333),
        r = n(24291),
        o = n(62595),
        l = n(99194),
        s = n(26793),
        c = n(2784),
        d = n(47842),
        h = (0, o.createStyles)(function (e) {
          return {
            testimonialHeader: (0, d.Z)({ gap: 4 }, e.fn.largerThan("md"), {
              gap: 8,
            }),
            testimonialHeaderTitle: (0, d.Z)(
              { fontSize: 18, fontWeight: 600, lineHeight: "22.5px" },
              e.fn.largerThan("md"),
              { fontSize: 24, fontWeight: 700, lineHeight: "30px" }
            ),
            testimonialHeaderText: (0, d.Z)(
              { fontSize: 14, lineHeight: "21px" },
              e.fn.largerThan("md"),
              { fontSize: 18, lineHeight: "27px" }
            ),
            badgeSection: (0, d.Z)(
              {
                cursor: "pointer",
                border: "1px solid ".concat(e.colors.neutral[2]),
                borderRadius: 22,
                color: "#4A4A4A",
                marginTop: 16,
                marginBottom: 16,
                padding: "6px 8px",
                width: "175px !important",
                height: 38,
              },
              e.fn.largerThan("md"),
              {
                marginTop: 32,
                marginBottom: 24,
                padding: "8px 12px",
                width: "195px !important",
                height: 42,
              }
            ),
            badgeInner: { textOverflow: "unset" },
            trustpilotText: (0, d.Z)(
              { fontSize: 14, fontWeight: 500, lineHeight: "21px" },
              e.fn.largerThan("md"),
              { fontSize: 16, fontWeight: 700, lineHeight: "20px" }
            ),
            testimonialCard: (0, d.Z)(
              {
                width: 315,
                height: 178,
                padding: "16px 20px",
                border: "1px solid ".concat(e.colors.neutral[2]),
                borderRadius: e.radius.md,
                background: "#fff",
              },
              e.fn.largerThan("md"),
              { width: 492, height: 236, padding: 24 }
            ),
            personSection: (0, d.Z)({ gap: 12 }, e.fn.largerThan("md"), {
              gap: 18,
            }),
            personDetails: (0, d.Z)({ gap: 4 }, e.fn.largerThan("md"), {
              gap: 8,
            }),
            personName: (0, d.Z)({ fontSize: 12 }, e.fn.largerThan("md"), {
              fontSize: 20,
            }),
            personSubtext: (0, d.Z)({ fontSize: 12 }, e.fn.largerThan("md"), {
              fontSize: 16,
            }),
            personImage: (0, d.Z)(
              { borderRadius: e.spacing.xl, height: 32, width: 32 },
              e.fn.largerThan("md"),
              { height: 66, width: 66, borderRadius: "50%" }
            ),
            avatar: (0, d.Z)(
              {
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: e.colors.neutral[1],
                color: e.colors.neutral[5],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              },
              e.fn.largerThan("md"),
              { height: 66, width: 66, fontSize: 22, borderRadius: "50%" }
            ),
            amberTrustpilotLogo: (0, d.Z)(
              { width: 66, height: 12, marginTop: 10 },
              e.fn.largerThan("md"),
              { width: 126, height: 24 }
            ),
            testimonialContent: (0, d.Z)(
              {
                marginTop: 8,
                fontSize: 12,
                whiteSpace: "break-spaces",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
              },
              e.fn.largerThan("md"),
              { fontSize: 16, marginTop: 24 }
            ),
            readMore: (0, d.Z)(
              { fontSize: 12, lineHeight: "18px" },
              e.fn.largerThan("md"),
              { cursor: "pointer", fontSize: 16, lineHeight: "24px" }
            ),
            readMoreContent: (0, d.Z)(
              {
                maxHeight: 147,
                overflowY: "auto",
                fontSize: 12,
                paddingRight: 12,
              },
              e.fn.largerThan("md"),
              { fontSize: 14 }
            ),
            modalRoot: { padding: "24px !important" },
            modalHeader: { marginBottom: 20 },
            modalTitle: { fontSize: 18, fontWeight: 600, lineHeight: "22.5px" },
            root: (0, d.Z)(
              {
                alignSelf: "center",
                width: "100%",
                padding: "12px 16px",
                height: 38,
                marginTop: 24,
              },
              e.fn.largerThan("md"),
              {
                width: "max-content",
                marginTop: 32,
                padding: "16px 24px",
                height: 48,
              }
            ),
            label: (0, d.Z)(
              { fontSize: 14, fontWeight: 500, lineHeight: "14px" },
              e.fn.largerThan("md"),
              { fontSize: 16, fontWeight: 400, lineHeight: "16px" }
            ),
          };
        }),
        g = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if ("" === e) return e;
          var t = e.split(" ");
          return 1 === t.length
            ? t[0].charAt(0).toUpperCase()
            : t[0].charAt(0).toUpperCase() +
                t[t.length - 1].charAt(0).toUpperCase();
        },
        u = n(8388),
        m = n.n(u),
        p = function (e) {
          var t = e.name,
            n = e.subtext,
            i = e.personImage,
            r = h().classes;
          return (0, a.jsxs)(o.Flex, {
            direction: "row",
            align: "flex-start",
            justify: "space-between",
            children: [
              (0, a.jsxs)(o.Flex, {
                direction: "row",
                align: "center",
                className: r.personSection,
                children: [
                  i
                    ? (0, a.jsx)("img", {
                        src: i,
                        alt: "person-avatar",
                        className: r.personImage,
                      })
                    : (0, a.jsx)(o.Text, {
                        className: r.avatar,
                        children: g(t),
                      }),
                  (0, a.jsxs)(o.Flex, {
                    direction: "column",
                    className: r.personDetails,
                    children: [
                      (0, a.jsx)(o.Text, {
                        fw: 600,
                        lh: "18px",
                        className: r.personName,
                        children: t,
                      }),
                      (0, a.jsx)(o.Text, {
                        fw: 400,
                        lh: "18px",
                        color: "neutral.6",
                        className: r.personSubtext,
                        children: n,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("img", {
                alt: "amber-trustpilot",
                src: "".concat(
                  m().app.image_static_assets_url,
                  "/images/trustpilot-rating.svg"
                ),
                className: r.amberTrustpilotLogo,
              }),
            ],
          });
        },
        f = function (e) {
          var t = e.open,
            n = e.onClose,
            i = e.name,
            r = e.subtext,
            l = e.personImage,
            s = e.testimonial,
            c = h().classes;
          return (0, a.jsx)(o.Modal, {
            title: "Trustpilot",
            opened: t,
            onClose: n,
            size: 487,
            centered: !0,
            classNames: {
              modal: c.modalRoot,
              header: c.modalHeader,
              title: c.modalTitle,
            },
            children: (0, a.jsxs)(o.Flex, {
              gap: 12,
              children: [
                (0, a.jsx)(p, { name: i, subtext: r, personImage: l }),
                (0, a.jsx)(o.Divider, {}),
                (0, a.jsx)(o.Text, {
                  fw: 400,
                  lh: "21px",
                  color: "neutral.8",
                  className: c.readMoreContent,
                  children: s,
                }),
                (0, a.jsx)(o.Divider, {}),
                (0, a.jsx)(o.Button, {
                  w: "100%",
                  mt: 8,
                  color: "secondary.5",
                  size: "lg",
                  onClick: n,
                  children: "Okay, got it",
                }),
              ],
            }),
          });
        },
        x = function (e) {
          var t = e.name,
            n = e.subtext,
            i = e.testimonial,
            r = e.personImage,
            l = (0, c.useState)(!1),
            s = l[0],
            d = l[1],
            g = (0, c.useRef)(),
            u = h().classes,
            x = (0, c.useState)(!1),
            v = x[0],
            b = x[1],
            w = function (e) {
              return ""
                .concat(
                  m().app.image_static_assets_url,
                  "/images/testimonials/"
                )
                .concat(e, "?fm=pjpg&auto=format");
            };
          return (
            (0, c.useEffect)(function () {
              if (g.current) {
                var e;
                (null === g ||
                void 0 === g ||
                null === (e = g.current) ||
                void 0 === e
                  ? void 0
                  : e.scrollHeight) > 90 && d(!0);
              }
            }, []),
            (0, a.jsxs)(o.Flex, {
              className: u.testimonialCard,
              children: [
                (0, a.jsx)(p, {
                  name: t,
                  subtext: n,
                  personImage: r ? w(r) : null,
                }),
                (0, a.jsx)(o.Text, {
                  fw: 400,
                  lh: "18px",
                  color: "neutral.5",
                  className: u.testimonialContent,
                  ref: g,
                  children: i,
                }),
                s &&
                  (0, a.jsx)(o.Text, {
                    fw: 500,
                    color: "neutral.7",
                    className: u.readMore,
                    onClick: function () {
                      return b(!0);
                    },
                    children: "Read More",
                  }),
                v &&
                  (0, a.jsx)(f, {
                    open: v,
                    name: t,
                    subtext: n,
                    testimonial: i,
                    onClose: function () {
                      return b(!1);
                    },
                    personImage: r ? w(r) : null,
                  }),
              ],
            })
          );
        },
        v = n(7309),
        b = function () {
          var e = h().classes;
          return (0, a.jsxs)(o.Flex, {
            direction: "row",
            align: "center",
            gap: 6,
            w: "max-content",
            className: e.badgeSection,
            onClick: function () {
              return (
                window &&
                (null === window || void 0 === window
                  ? void 0
                  : window.open(i.S4, "_blank"))
              );
            },
            children: [
              (0, a.jsxs)(o.Flex, {
                direction: "row",
                gap: 4,
                children: [
                  (0, a.jsx)("img", {
                    src: "".concat(
                      m().app.image_static_assets_url,
                      "/images/star.svg"
                    ),
                    alt: "trsutpilot-star",
                    height: 20,
                    width: 20,
                  }),
                  (0, a.jsx)(o.Text, {
                    className: e.trustpilotText,
                    children: "Trustpilot",
                  }),
                ],
              }),
              (0, a.jsxs)(o.Badge, {
                py: 4,
                fz: 16,
                px: 10,
                fw: 700,
                size: "lg",
                lh: "20px",
                color: "secondary.4",
                variant: "filled",
                classNames: { inner: e.badgeInner },
                children: [v.H, "/5"],
              }),
            ],
          });
        },
        w = [
          {
            name: "Paveneech Stritagul",
            subtext: "Imperial college business school",
            testimonial:
              "The best service I could ask for an international student. Awesome, great follow-up services that helped me throughout the process from start to the end. Thanks to Amber for a great facility!",
            personImage: "pavneech.png",
          },
          {
            name: "Heramb Uttarwar",
            subtext: "Illinois Institute of Technology",
            testimonial:
              "It was an amazing experience with amberstudent. The work they do is really appreciable. The only thing we need to do is to provide details. The people at amberstudent provide great support.",
            personImage: "heramb.jpg",
          },
          {
            name: "Simon Langer",
            subtext: "Plymouth College of Art",
            testimonial:
              "Experience was amazing!! I\u2019m going to Plymouth College of Art. Great prices & the rent durations are negotiable. Also as an art student I do appreciate the website design \u2014 its clear, visible & well placed.",
            personImage: "simon.png",
          },
        ],
        _ = [
          {
            name: "Simon Langer",
            subtext: "Plymouth College of Art",
            testimonial:
              "Experience was amazing!! I\u2019m going to Plymouth College of Art. Great prices & the rent durations are negotiable. Also as an art student I do appreciate the website design \u2014 its clear, visible & well placed.",
            personImage: "simon.png",
          },
          {
            name: "Paveneech Stritagul",
            subtext: "Imperial College Business School",
            testimonial:
              "The best service I could ask for an international student. Awesome, great follow-up services that helped me throughout the process from start to the end. Thanks to Amber for a great facility!",
            personImage: "pavneech.png",
          },
          {
            name: "Roberto Antonia",
            subtext: "University College London",
            testimonial:
              "I am going to study at UCL and Supreet from Amber did an excellent job in helping me. I do not have doubt to recommend Supreet as a student helper. I hope to receive his help in future. The room is in an excellent location.",
            personImage: "Robert.png",
          },
          {
            name: "Quezia Jones",
            subtext: "Lancaster University",
            testimonial:
              "Great assistance! They can find the perfect location for you, under the specifications you have given them. They have 24/7 support for you, they reply quickly and explain everything (more than 1 time if needed) about any of your queries. I surely recommend it.",
          },
          {
            name: "Bambee",
            subtext: "The University of Queensland",
            testimonial:
              "I was desperately finding a room here in brisbane, it was so hard even with the student accomodation. I was having this problem for like 3 months, but with Amber assistance.. oh wow only one day I already has a room for myself for another year. Thank you so much!!\u2764\ufe0f",
          },
          {
            name: "Satya",
            subtext: "Illinois Institute of Technology",
            testimonial:
              "I was on a tight deadline and under many constraints. AmberStudent really helped in what would otherwise have been a very stressful housing hunt! Thank you!",
          },
        ],
        T = function (e) {
          var t = e.country,
            n = e.deviceInfo,
            c = e.background,
            d = e.title,
            g = e.description,
            u = h().classes,
            m =
              "GB" === (null === t || void 0 === t ? void 0 : t.short_name)
                ? w
                : _;
          return (0, a.jsxs)(s.h, {
            title: d || "What do students have to say about us?",
            subtitle:
              g ||
              "Over 1M students trust amber for their student housing needs ;)",
            background: c,
            dataTestId: "testimonials-section",
            children: [
              (0, a.jsx)(b, {}),
              (0, a.jsx)(l.C, {
                idSuffix: "testimonial",
                withPadding: !1,
                withItemPadding: !0,
                children: m.map(function (e, t) {
                  var n = e.name,
                    i = e.subtext,
                    r = e.testimonial,
                    o = e.personImage;
                  return (0,
                  a.jsx)(x, { name: n, subtext: i, testimonial: r, personImage: o }, "".concat(n, "-").concat(t));
                }),
              }),
              (0, a.jsx)(o.Button, {
                component: "a",
                target: "_blank",
                color: "primary.4",
                variant: "secondary",
                size: (null === n || void 0 === n ? void 0 : n.mobile)
                  ? "md"
                  : "lg",
                href: i.S4,
                classNames: { root: u.root, label: u.label },
                rightIcon: (0, a.jsx)("i", { className: "icon-arrow-right" }),
                onClick: function () {
                  (0, r.pr)({
                    action: "clicked_read_all_reviews",
                    category: i.E0.HOME,
                  });
                },
                children: "Read All Reviews",
              }),
            ],
          });
        };
    },
    70016: function (e, t, n) {
      n.d(t, {
        EG: function () {
          return r;
        },
        GH: function () {
          return o;
        },
        Kc: function () {
          return l;
        },
        d: function () {
          return c;
        },
        t_: function () {
          return d;
        },
        tj: function () {
          return s;
        },
        wD: function () {
          return h;
        },
      });
      var a = n(8388),
        i = n.n(a),
        r = "e1affeb13de9140",
        o = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
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
        s = "https://m.me/amberstudent",
        c = 1441,
        d = "".concat(
          i().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        h = "".concat(
          i().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/7873.4e0b78b081c1077b.js.map
