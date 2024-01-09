"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger =
  globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
  [9535],
  {
    58371: (e, t, n) => {
      n.r(t), n.d(t, { default: () => ge });
      var s = n(744),
        r = n(29798),
        i = n(15826),
        a = n(98049),
        o = n.n(a),
        l = n(12682),
        d = n(83839),
        c = n(14824),
        p = n(17255),
        u = n(7606);
      const h = p.ZP.div.withConfig({ componentId: "sc-1q9fwvy-0" })(
        [
          "position:absolute;left:0px;display:flex;align-items:center;justify-content:center;height:100%;width:100%;transition:top ",
          "s ",
          ";",
          "",
        ],
        0.5,
        u.dF,
        (e) =>
          "entering" === e.state || "entered" === e.state
            ? (0, p.iv)(["top:0;"])
            : (0, p.iv)(["top:", ";"], e.hiddenPosition)
      );
      var m = n(55786);
      const f = (e) => {
        let { isVisible: t, hiddenPosition: n, children: s } = e;
        return (0, m.jsx)(c.ZP, {
          in: t,
          timeout: 500,
          children: (e) =>
            (0, m.jsx)(h, {
              state: e,
              hiddenPosition: n,
              "aria-hidden": "exited" === e,
              children: s,
            }),
        });
      };
      f.propTypes = {
        isVisible: o().bool,
        hiddenPosition: o().string,
        children: o().node,
      };
      const x = f;
      var g = function (e) {
        return (0, m.jsx)("svg", {
          ...e,
          children: (0, m.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
            d: "M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z",
          }),
        });
      };
      g.defaultProps = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "13",
        viewBox: "0 0 21 13",
        focusable: "false",
        role: "presentation",
      };
      var b = function (e) {
        return (0, m.jsx)("svg", {
          ...e,
          children: (0, m.jsx)("path", {
            d: "M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z",
            transform:
              "translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) ",
          }),
        });
      };
      b.defaultProps = {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
      };
      const v = (0, p.ZP)(g).withConfig({ componentId: "sc-1k07fow-0" })(
          ["path{fill:", ";}"],
          (e) => e.theme.messenger.colors.primaryText
        ),
        E = (0, p.ZP)(b).withConfig({ componentId: "sc-1k07fow-1" })(
          ["width:60% !important;height:60% !important;path{fill:", ";}", ""],
          (e) => e.theme.messenger.colors.primaryText,
          (e) => "left" === e.position && "\n    transform: scaleX(-1);\n  "
        ),
        w = (e) => {
          let { isOpen: t, position: n } = e;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(x, {
                isVisible: !t,
                hiddenPosition: "-100%",
                children: (0, m.jsx)(E, { position: n }),
              }),
              (0, m.jsx)(x, {
                isVisible: t,
                hiddenPosition: "100%",
                children: (0, m.jsx)(v, {}),
              }),
            ],
          });
        };
      w.propTypes = {
        isOpen: o().bool,
        position: o().oneOf(["left", "right"]),
      };
      const k = w;
      var y = n(77058);
      const C = p.ZP.div.withConfig({ componentId: "sc-1w3tvxe-0" })(
          [
            "width:",
            ";height:",
            ";border-radius:",
            ";box-shadow:rgb(36,36,36,0.15) 0px 20px 30px 0px;display:flex;align-items:center;justify-content:center;background-color:",
            " !important;",
          ],
          (e) => e.size ?? "100%",
          (e) => e.size ?? "100%",
          (e) => S(e.shape, e.shapeSettings),
          (e) => e.theme.messenger.colors.primary
        ),
        j = (0, p.ZP)(y.hU).withConfig({ componentId: "sc-1w3tvxe-1" })(
          [
            "&&&{position:relative;overflow:hidden;border-radius:",
            ";width:100%;height:100%;background-color:",
            ";&:active{box-shadow:none;}&:focus{box-shadow:none;}&[data-garden-focus-visible]{box-shadow:inset ",
            ";}}",
          ],
          (e) => S(e.shape, e.shapeSettings),
          (e) => e.theme.messenger.colors.primary,
          (e) => e.theme.shadows.md(e.theme.messenger.colors.primaryText)
        ),
        S = (e, t) => {
          switch (e) {
            case l._c.circle:
              return l.UW.circle;
            case l._c.square:
              return t?.borderRadius ? `${t.borderRadius}px` : l.UW.square;
            default:
              return "0";
          }
        },
        Z = (0, i.forwardRef)((e, t) => {
          let {
            shape: n,
            shapeSettings: s,
            isOpen: r,
            onClick: i,
            position: a,
            size: o,
          } = e;
          const { launcher: l } = (0, d.Z)();
          return (0, m.jsx)(C, {
            ref: t,
            size: o,
            shape: n,
            shapeSettings: s,
            children: (0, m.jsx)(j, {
              shape: n,
              shapeSettings: s,
              onClick: i,
              "aria-label": l.ariaLabel,
              isPill: !1,
              onKeyDown: () => {},
              children: (0, m.jsx)(k, { isOpen: r, position: a }),
            }),
          });
        });
      (Z.propTypes = {
        shape: o().oneOf(Object.keys(l._c)),
        shapeSettings: o().shape({ borderRadius: o().string }),
        isOpen: o().bool,
        onClick: o().func,
        position: o().oneOf(Object.keys(l.Wo)),
        size: o().string,
      }),
        (Z.defaultProps = { size: "64px" });
      const O = Z;
      var _ = n(21110),
        T = n(40711),
        L = n(77588),
        R = n(4755),
        I = n(39134),
        P = n(57957),
        Y = n(47139),
        $ = n(92265),
        F = n(67016),
        N = n(13672),
        z = n(69738),
        D = n(75006),
        M = n(65083),
        W = n(99377),
        B = n(66772),
        H = n(92795),
        U = n(73483);
      const V = `ww-${(0, n(25474).Z)()}`,
        X = `${V}-launcherOnOpen`,
        q = `${V}-widgetOnLoad`,
        K = `\n        @-webkit-keyframes ${X} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n        @keyframes ${X} {\n          0% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n          30% {\n            -webkit-transform: translateY(-5px) rotate(2deg);\n                    transform: translateY(-5px) rotate(2deg);\n          }\n\n          60% {\n            -webkit-transform: translateY(0px) rotate(0deg);\n                    transform: translateY(0px) rotate(0deg);\n          }\n\n\n          90% {\n            -webkit-transform: translateY(-1px) rotate(0deg);\n                    transform: translateY(-1px) rotate(0deg);\n\n          }\n\n          100% {\n            -webkit-transform: translateY(-0px) rotate(0deg);\n                    transform: translateY(-0px) rotate(0deg);\n          }\n        }\n\n        @keyframes ${q} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n\n        @-webkit-keyframes ${q} {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n      `,
        A = (e) => {
          let { children: t } = e;
          const n = (0, r.v9)(R.FB),
            s = (0, r.v9)(M.l),
            a = (0, r.v9)(M.V),
            o = (0, r.v9)(P.bt),
            d = (0, r.v9)(T.Y4),
            c = (0, r.v9)(P.KK),
            p = (0, r.v9)(T.H0),
            u = (0, r.v9)(T.nx),
            { horizontal: h, vertical: f } = (0, r.v9)(P.Xf),
            x = (0, r.v9)(U.k9),
            g = (0, r.v9)(B.uC),
            b = (0, D.Z)(),
            { isZoomedIn: v } = (0, z.Z)(),
            E = !s && !a,
            w = S(p, u),
            k = (0, r.oR)(),
            y = (0, i.useCallback)(() => {
              let e = b("embeddable_framework.messenger.launcher.frame.title");
              return (
                g === B.uN.successful &&
                  (e =
                    0 === x
                      ? b(
                          "embeddable_framework.messenger.launcher.frame.no_new_messages_title"
                        )
                      : 1 === x
                      ? b(
                          "embeddable_framework.messenger.launcher.frame.one_new_message_title"
                        )
                      : b(
                          "embeddable_framework.messenger.launcher.frame.new_messages_title",
                          { count: x }
                        )),
                e
              );
            }, [g, x]);
          let C = [];
          return (
            d && C.push(`${q} 0.2s ease-in ${W.e}s forwards`),
            n && E && C.push(`${X} ${l.Aq}s ${_.dF}`),
            (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)("style", { dangerouslySetInnerHTML: { __html: K } }),
                (0, m.jsx)(N.ZP, {
                  title: y(),
                  hidden: !d,
                  id: "launcher",
                  style: {
                    height: _.Wd,
                    width: _.Wd,
                    position: "fixed",
                    bottom: v ? _.Ts.bottom : f,
                    [o]: v ? _.Ts.positionMargin : h,
                    transform: v ? _.Ts.transform : "none",
                    transformOrigin: `bottom ${o}`,
                    border: 0,
                    marginTop: 0,
                    opacity: 0,
                    boxShadow: _.rP,
                    animation: C.join(", "),
                    zIndex: c,
                    borderRadius: w,
                  },
                  onKeyDown: (e) => {
                    (0, $.uZ)(e, k);
                  },
                  children: (0, m.jsx)(H.Z, {
                    setBackgroundColor: !0,
                    children: t,
                  }),
                }),
              ],
            })
          );
        };
      A.propTypes = { children: o().node };
      const G = A,
        Q = () => {
          const e = (0, r.I0)(),
            t = (0, r.v9)(R.FB),
            n = (0, r.v9)(P.bt),
            s = (0, r.v9)(T.H0),
            a = (0, r.v9)(T.nx),
            o = (0, r.v9)(Y.SD),
            l = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              F.Z.markOnce("launcher_rendered");
            }, []),
            (0, i.useEffect)(
              () => (
                (0, $.ui)("refLauncher", l),
                L.I(l.current),
                () => {
                  L.O(l.current);
                }
              ),
              [l]
            ),
            o
              ? (0, m.jsx)(G, {
                  children: (0, m.jsx)(O, {
                    ref: l,
                    isOpen: t,
                    onClick: () => {
                      F.Z.markOnce("launcher_clicked"), e((0, I.Gx)());
                    },
                    position: n,
                    shape: s,
                    shapeSettings: a,
                    size: `${_.Wd}px`,
                  }),
                })
              : null
          );
        };
      var J = n(39707),
        ee = n(93074),
        te = n(26364),
        ne = n(52696),
        se = n(59563),
        re = n(68566),
        ie = n(24489),
        ae = n(5527),
        oe = n(21062),
        le = n(66064),
        de = n(78005),
        ce = n(51383);
      const pe = () => {
        const e = (0, r.I0)(),
          t = (0, r.v9)(R.FB),
          n = (0, r.v9)(ne.Rr),
          s = (0, r.v9)(te.pd),
          a = (0, r.v9)(Y.SD),
          o = (0, i.useRef)(n),
          l = (0, r.v9)(ce.uY),
          [d, c] = (0, i.useState)(!1),
          { isZoomedIn: p } = (0, z.Z)();
        n && (o.current = !0),
          (0, i.useLayoutEffect)(() => {
            t && o.current && e((0, ne.rh)());
          }, [t]),
          (0, i.useEffect)(() => {
            l && !d && c(!0);
          }, [l]);
        const u = (0, D.Z)(),
          h = n && a && !d && !p,
          f = (0, i.useRef)({}),
          { onClickAnimate: x, animateHide: g } = (0, le.Z)({
            isLabelVisible: h,
            refs: f,
          }),
          {
            maxWidth: b,
            messageContainerHeight: v,
            messageFrameHeight: E,
            messageFrameWidth: w,
            setFrameDimensions: k,
          } = (0, de.Z)({ refs: f, isIconNextToMessage: !0 });
        return h
          ? (0, m.jsx)(se.Z, {
              children: (0, m.jsxs)(re.Z, {
                children: [
                  (0, m.jsx)(ie.Z, {
                    title: u(
                      "embeddable_framework.messenger.launcher_label.close_v2"
                    ),
                    ref: (e) => (f.current.closeFrame = e),
                    children: (0, m.jsx)(J.Z, {
                      ariaLabel: u(
                        "embeddable_framework.messenger.launcher_label.close_v2"
                      ),
                      onClick: () => {
                        g(() => {
                          e((0, ne.rh)());
                        });
                      },
                    }),
                  }),
                  (0, m.jsx)(ae.Z, {
                    ref: (e) => (f.current.messageFrame = e),
                    title: u(
                      "embeddable_framework.messenger.launcher_label.frame.title"
                    ),
                    maxWidth: b,
                    messageFrameWidth: w,
                    messageFrameHeight: E,
                    children: (0, m.jsx)(oe.E, {
                      maxMessageContainerHeight: v,
                      children: (0, m.jsx)(ee.Z, {
                        message: s,
                        maxWidth: b,
                        onClick: () => {
                          x(() => {
                            e((0, I.lF)());
                          });
                        },
                        onRender: k,
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      };
      var ue = n(21659);
      const he = (0, i.lazy)(() => n.e(3290).then(n.bind(n, 83290))),
        me = () => {
          const [e, t] = (0, i.useState)(!1),
            n = (0, r.v9)(ue.u5);
          return (
            (0, i.useEffect)(() => {
              n && t(!0);
            }, [n]),
            (0, m.jsx)(i.Suspense, {
              fallback: null,
              children: e && (0, m.jsx)(he, {}),
            })
          );
        };
      var fe = n(38769);
      const xe = () => {
          const e = (0, r.v9)(U.k9),
            t = (0, r.v9)(R.FB);
          return (0, m.jsx)(fe.Z, { unreadCount: e, isWidgetOpen: t });
        },
        ge = (e) => {
          let { store: t, container: n, callback: i = null } = e;
          s.render(
            (0, m.jsxs)(r.zt, {
              store: t,
              children: [
                (0, m.jsx)(me, {}),
                (0, m.jsx)(pe, {}),
                (0, m.jsx)(Q, {}),
                (0, m.jsx)(xe, {}),
              ],
            }),
            n,
            i
          );
        };
    },
    65611: (e, t, n) => {
      n.d(t, {
        dS: () => c,
        Vd: () => p,
        $l: () => o,
        hQ: () => i,
        yx: () => l,
        Oz: () => a,
        wR: () => d,
        N7: () => r,
        b: () => u,
      });
      var s = n(21110);
      const r = "0px 20px 30px rgba(23, 73, 77, 0.15)",
        i = "ZD-campaigns",
        a = 280,
        o = 40,
        l = 40,
        d = "20px",
        c = [{ opacity: 0 }, { opacity: 1 }],
        p = { duration: 300, fill: "forwards", easing: "ease-in-out" },
        u = (e) => s.$i + s.Wd + e;
    },
    77588: (e, t, n) => {
      n.d(t, { I: () => r, O: () => i });
      var s = n(24430);
      const r = (e) => {
          try {
            e.addEventListener(
              "click",
              () => {
                (0, s.Il)();
              },
              { once: !0 }
            ),
              e.addEventListener(
                "input",
                () => {
                  (0, s.Il)();
                },
                { once: !0 }
              );
          } catch {}
        },
        i = (e) => {
          try {
            e.removeEventListener("click", () => {
              (0, s.Il)();
            }),
              e.removeEventListener("input", () => {
                (0, s.Il)();
              });
          } catch {}
        };
    },
    14824: (e, t, n) => {
      n.d(t, { ZP: () => x });
      var s = n(76681),
        r = n(69314),
        i = (n(98049), n(15826)),
        a = n(744);
      const o = !1,
        l = i.createContext(null);
      var d = "unmounted",
        c = "exited",
        p = "entering",
        u = "entered",
        h = "exiting",
        m = (function (e) {
          function t(t, n) {
            var s;
            s = e.call(this, t, n) || this;
            var r,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (s.appearStatus = null),
              t.in
                ? i
                  ? ((r = c), (s.appearStatus = p))
                  : (r = u)
                : (r = t.unmountOnExit || t.mountOnEnter ? d : c),
              (s.state = { status: r }),
              (s.nextCallback = null),
              s
            );
          }
          (0, r.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === d ? { status: c } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== p && n !== u && (t = p)
                  : (n !== p && n !== u) || (t = h);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                s = this.props.timeout;
              return (
                (e = t = n = s),
                null != s &&
                  "number" != typeof s &&
                  ((e = s.exit),
                  (t = s.enter),
                  (n = void 0 !== s.appear ? s.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    t === p ? this.performEnter(e) : this.performExit())
                  : this.props.unmountOnExit &&
                    this.state.status === c &&
                    this.setState({ status: d });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                s = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef ? [s] : [a.findDOMNode(this), s],
                i = r[0],
                l = r[1],
                d = this.getTimeouts(),
                c = s ? d.appear : d.enter;
              (!e && !n) || o
                ? this.safeSetState({ status: u }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, l),
                  this.safeSetState({ status: p }, function () {
                    t.props.onEntering(i, l),
                      t.onTransitionEnd(c, function () {
                        t.safeSetState({ status: u }, function () {
                          t.props.onEntered(i, l);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                s = this.props.nodeRef ? void 0 : a.findDOMNode(this);
              t && !o
                ? (this.props.onExit(s),
                  this.safeSetState({ status: h }, function () {
                    e.props.onExiting(s),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: c }, function () {
                          e.props.onExited(s);
                        });
                      });
                  }))
                : this.safeSetState({ status: c }, function () {
                    e.props.onExited(s);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (s) {
                  n && ((n = !1), (t.nextCallback = null), e(s));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : a.findDOMNode(this),
                s = null == e && !this.props.addEndListener;
              if (n && !s) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = r[0],
                    o = r[1];
                  this.props.addEndListener(i, o);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === d) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, s.Z)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return i.createElement(
                l.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : i.cloneElement(i.Children.only(n), r)
              );
            }),
            t
          );
        })(i.Component);
      function f() {}
      (m.contextType = l),
        (m.propTypes = {}),
        (m.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: f,
          onEntering: f,
          onEntered: f,
          onExit: f,
          onExiting: f,
          onExited: f,
        }),
        (m.UNMOUNTED = d),
        (m.EXITED = c),
        (m.ENTERING = p),
        (m.ENTERED = u),
        (m.EXITING = h);
      const x = m;
    },
    7606: (e, t, n) => {
      n.d(t, { ZP: () => C, dF: () => r, eR: () => k, oQ: () => y });
      var s = n(17255);
      const r = "cubic-bezier(0.66, 0, 0.12, 1)",
        i = function () {
          return {
            duration: 0.3,
            delay: 0,
            timing: "linear",
            ...(arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {}),
          };
        };
      let a = 0;
      const o = i({ delay: a, timing: r, duration: 0.15 }),
        l = i({ delay: a, timing: "ease" }),
        d = i({ delay: a, duration: 0 }),
        c = i({ delay: a, duration: 0 }),
        p = i({ delay: a, duration: 0 }),
        u = i({ delay: a }),
        h = i({ delay: a, duration: 0.2, timing: "linear" });
      a = 0.15;
      const m = i({ delay: a, duration: 0.15 });
      a = 0.3;
      const f = i({ delay: a, duration: 0.5, fill: "both" }),
        x = i({ delay: a, duration: 0.3 }),
        g = i({ delay: a, duration: 0.3 }),
        b = i({ delay: a, duration: 0 });
      a = 0.6;
      const v = i({ delay: a, timing: r });
      a = 0.7;
      const E = i({ delay: a, duration: 0 });
      a = 0.9;
      const w = i({ delay: a, timing: "ease" }),
        k = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
            s < t;
            s++
          )
            n[s - 1] = arguments[s];
          return n
            .map((t) => `${t} ${e.duration}s ${e.timing} ${e.delay}s`)
            .join(", ");
        },
        y = (e, t) =>
          (0, s.iv)(
            ["", " ", "s ", " ", "s ", ""],
            t,
            e.duration,
            e.timing,
            e.delay,
            e.fill
          ),
        C = {
          tailEnter: v,
          tailExit: o,
          textEnter: w,
          textExit: l,
          messageBorder: m,
          messageEnter: f,
          messageStatusOpacity: u,
          messageColor: h,
          existingRepliesEnter: d,
          freshRepliesEnter: E,
          repliesExit: c,
          repliesFadeIn: x,
          receiptEnter: p,
          receiptReenter: g,
          receiptExit: b,
        };
    },
  },
]);
