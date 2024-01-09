"use strict";
(globalThis.webpackChunk_zendesk_web_widget_messenger =
  globalThis.webpackChunk_zendesk_web_widget_messenger || []).push([
  [5178],
  {
    69738: (e, r, n) => {
      n.d(r, { Z: () => a });
      var t = n(15826);
      const a = () => {
        const [e, r] = (0, t.useState)(
            Math.round(100 * window.devicePixelRatio)
          ),
          n = () => {
            r(Math.round(100 * window.devicePixelRatio));
          };
        return (
          (0, t.useEffect)(
            () => (
              window.addEventListener("resize", n),
              () => {
                window.removeEventListener("resize", n);
              }
            ),
            []
          ),
          { scale: e >= 400 ? 0.5 : 1, isZoomedIn: e >= 400 }
        );
      };
    },
    75006: (e, r, n) => {
      n.d(r, { Z: () => o });
      var t = n(29798),
        a = n(40707),
        s = n(36746);
      const o = () => ((0, t.v9)(s.Kd), a.Z.translate);
    },
    38769: (e, r, n) => {
      n.d(r, { Z: () => C });
      var t = n(98049),
        a = n.n(t),
        s = n(29798),
        o = n(21110),
        i = n(69738),
        l = n(39134),
        m = n(57957),
        d = n(17255);
      const c = d.ZP.div.withConfig({ componentId: "sc-1o8glcn-0" })(
          [
            "height:",
            "px;min-width:",
            "px;color:",
            ";background-color:",
            ";border-radius:",
            "px;display:flex;justify-content:center;align-items:center;font-size:14px;padding:0 6px;",
            "",
          ],
          20,
          20,
          (e) => e.theme.palette.white,
          (e) => e.theme.palette.red[500],
          20,
          (e) => {
            let { position: r, isZoomedIn: n } = e;
            return `margin-${n && "right" === r ? "right" : "left"}: auto`;
          }
        ),
        g = d.ZP.div.withConfig({ componentId: "sc-1o8glcn-1" })([
          "font-size:12px;",
        ]);
      var b = n(55786);
      const u = (e) => {
        let { unreadCount: r = 0 } = e;
        const n = (0, s.I0)(),
          t = Math.min(r, 99),
          a = (0, s.v9)(m.bt),
          { isZoomedIn: d } = (0, i.Z)();
        return (0, b.jsx)("div", {
          onClick: () => {
            n((0, l.Gx)());
          },
          "aria-hidden": "true",
          style: { cursor: "pointer", width: o.uL + 20, display: "flex" },
          children: (0, b.jsxs)(c, {
            position: a,
            isZoomedIn: d,
            "data-testid": "unread-indicator-container",
            children: [t, r > 99 && (0, b.jsx)(g, { children: "+" })],
          }),
        });
      };
      u.propTypes = { unreadCount: a().number };
      const f = u;
      var h = n(13672),
        _ = n(75006),
        p = n(40711),
        k = n(92795);
      const w = (0, d.vJ)(["html{background-color:transparent;}"]),
        v = (e) => {
          let { children: r } = e;
          const n = (0, s.v9)(p.Y4),
            t = (0, s.v9)(m.bt),
            a = (0, s.v9)(m.KK),
            l = (0, _.Z)(),
            { vertical: d, horizontal: c } = (0, s.v9)(m.Xf),
            { scale: g, isZoomedIn: u } = (0, i.Z)(),
            f = "right" === t ? o.jX.right(c) : o.jX.left(c),
            v = "right" === t ? o.jX.rightZoomedIn : o.jX.leftZoomedIn;
          return (0, b.jsx)(h.ZP, {
            tabIndex: "-1",
            title: l(
              "embeddable_framework.messenger.unread_indicator.frame.title"
            ),
            hidden: !n,
            style: {
              zIndex: a,
              height: o.uL,
              width: o.uL + 20,
              position: "fixed",
              bottom: u ? o.zz.bottom : o.jX.bottom(d),
              [t]: u ? v : f,
              transform: u
                ? `${
                    "right" === t
                      ? o.zz.positionRightTranslate
                      : o.zz.positionLeftTranslate
                  } scale(${g})`
                : "none",
              border: 0,
              marginTop: 0,
            },
            children: (0, b.jsx)(k.Z, {
              children: (0, b.jsxs)(b.Fragment, {
                children: [(0, b.jsx)(w, {}), r],
              }),
            }),
          });
        };
      v.propTypes = { children: a().node };
      const x = v,
        y = (e) => {
          let { unreadCount: r, isWidgetOpen: n } = e;
          return n || 0 === r
            ? null
            : (0, b.jsx)(x, { children: (0, b.jsx)(f, { unreadCount: r }) });
        };
      y.propTypes = { unreadCount: a().number, isWidgetOpen: a().bool };
      const C = y;
    },
    59563: (e, r, n) => {
      n.d(r, { Z: () => g });
      var t = n(29798),
        a = n(12682),
        s = n(21110),
        o = n(69738),
        i = n(40707),
        l = n(40711),
        m = n(65611),
        d = n(57957),
        c = n(55786);
      const g = (e) => {
        let { children: r, ariaLabel: n } = e;
        const g = (0, t.v9)(d.bt),
          b = (0, t.v9)(d.KK),
          u = (0, t.v9)(l.H0),
          { vertical: f, horizontal: h } = (0, t.v9)(d.Xf),
          _ = i.Z.isRTL() ? "rtl" : "ltr",
          { scale: p, isZoomedIn: k } = (0, o.Z)();
        return (0, c.jsx)("div", {
          "aria-label": n,
          style: {
            display: "flex",
            flexDirection: "column",
            zIndex: b,
            bottom: u === a._c.none ? f : (0, m.b)(Number(f)),
            position: "fixed",
            [g]: h,
            direction: _,
            alignItems: "end",
            gap: s.$i,
            ...(k && {
              [g]: 0,
              transform: `translateY(${s.Wd / 2}px) scale(0.5)`,
              transformOrigin: `bottom ${String(g)}`,
              bottom: "50%",
              marginBottom: (0, m.b)(0) * p,
            }),
          },
          children: r,
        });
      };
    },
    68566: (e, r, n) => {
      n.d(r, { Z: () => s });
      var t = n(21110),
        a = n(55786);
      const s = (e) => {
        let { children: r } = e;
        return (0, a.jsx)("div", {
          style: { display: "flex", gap: t.$i },
          children: r,
        });
      };
    },
    24489: (e, r, n) => {
      n.d(r, { Z: () => b });
      var t = n(15826),
        a = n(29798),
        s = n(13672),
        o = n(21110),
        i = n(65611),
        l = n(65083),
        m = n(92795),
        d = n(13297),
        c = n(57120),
        g = n(55786);
      const b = (0, t.forwardRef)((e, r) => {
        let { children: n, title: b } = e;
        const u = (0, a.v9)(l.l) ? o.lH : o.XE,
          { height: f, width: h } = (0, t.useMemo)(
            () => ({ height: (0, d.Z)(i.yx, u), width: (0, d.Z)(i.yx, u) }),
            [u]
          );
        return (0, g.jsx)(s.ZP, {
          title: b,
          style: {
            height: f,
            width: h,
            border: 0,
            backgroundColor: "transparent",
            boxShadow: i.N7,
            borderRadius: "100%",
            verticalAlign: "unset",
            opacity: 0,
            alignSelf: "end",
          },
          ref: r,
          children: (0, g.jsxs)(m.Z, { children: [(0, g.jsx)(c.n, {}), n] }),
        });
      });
    },
    5527: (e, r, n) => {
      n.d(r, { Z: () => u });
      var t = n(15826),
        a = n(29798),
        s = n(13672),
        o = n(21110),
        i = n(65611),
        l = n(65083),
        m = n(92795),
        d = n(57957),
        c = n(13297),
        g = n(57120),
        b = n(55786);
      const u = (0, t.forwardRef)((e, r) => {
        let {
          children: n,
          title: u,
          messageFrameWidth: f,
          maxWidth: h,
          messageFrameHeight: _,
        } = e;
        const p = (0, a.v9)(l.l) ? o.lH : o.XE,
          k = (0, a.v9)(d.bt),
          { borderRadius: w } = (0, t.useMemo)(
            () => ({ borderRadius: (0, c.Z)(i.wR, p) }),
            [p]
          );
        return (0, b.jsx)(s.ZP, {
          ref: r,
          title: u,
          style: {
            width: f,
            height: _,
            maxWidth: h,
            overflow: "auto",
            border: 0,
            backgroundColor: "transparent",
            boxShadow: i.N7,
            borderRadius: w,
            display: "inline-block",
            verticalAlign: "unset",
            transformOrigin: `bottom ${String(k)}`,
          },
          children: (0, b.jsxs)(m.Z, {
            children: [(0, b.jsx)(g.n, {}), (0, b.jsx)(g.z, {}), n],
          }),
        });
      });
    },
    57120: (e, r, n) => {
      n.d(r, { n: () => a, z: () => s });
      var t = n(17255);
      const a = (0, t.vJ)(["html{background-color:transparent;}"]),
        s = (0, t.vJ)(["body{opacity:0;}"]);
    },
    21062: (e, r, n) => {
      n.d(r, { E: () => t });
      const t = n(17255).ZP.div.withConfig({ componentId: "sc-9qme4p-0" })(
        ["text-align:center;overflow:auto;max-height:", "px;"],
        (e) => e.maxMessageContainerHeight
      );
    },
    66064: (e, r, n) => {
      n.d(r, { Z: () => m });
      var t = n(15826),
        a = n(29798),
        s = n(65611),
        o = n(99377),
        i = n(4755);
      const l = 1e3 * o.e + 50,
        m = (e) => {
          let { isLabelVisible: r, refs: n } = e;
          const o = (0, a.v9)(i.FB),
            m = (0, t.useRef)(0);
          (0, t.useLayoutEffect)(() => {
            m.current = Date.now();
          }, [o]);
          const d = (0, t.useCallback)(
            (e) => {
              const {
                closeFrame: r,
                messageFrame: t,
                avatarFrame: a,
              } = n.current;
              if (!t?.animate) return;
              (t.style.opacity = "0"),
                (t.style.transform = "scale(0)"),
                r && (r.style.opacity = "0"),
                a && (a.style.opacity = "0");
              t.animate(
                [
                  { transform: "scale(0)", opacity: 0 },
                  { transform: "scale(1)", opacity: 1 },
                ],
                { ...s.Vd, delay: e ? 750 : 0 }
              ).onfinish = () => {
                t &&
                  t.contentDocument &&
                  (t.contentDocument.body.animate(s.dS, s.Vd),
                  n.current.avatarFrame &&
                    ((n.current.avatarFrame.style.opacity = "1"),
                    n.current.avatarFrame.animate(s.dS, s.Vd)),
                  n.current.closeFrame &&
                    ((n.current.closeFrame.style.opacity = "1"),
                    n.current.closeFrame.animate(s.dS, s.Vd)),
                  (t.contentDocument.body.style.opacity = "1"));
              };
            },
            [n]
          );
          (0, t.useLayoutEffect)(() => {
            const { messageFrame: e } = n.current;
            if (r) {
              if (r) {
                const e = Date.now() - m.current < l;
                d(e);
              }
            } else
              e?.contentDocument &&
                (e.contentDocument.body.style.opacity = "0");
          }, [r]);
          return {
            onClickAnimate: (e) => {
              const { messageFrame: r, avatarFrame: t } = n.current;
              if (!r?.animate) return void e();
              t?.animate([{ opacity: 0 }], { delay: 100, fill: "forwards" });
              r.animate(
                [
                  { transform: "scale(1)" },
                  { transform: "scale(0.95)", opacity: 1 },
                  { transform: "scale(1)", opacity: 0 },
                ],
                200
              ).onfinish = e;
            },
            animateHide: (e) => {
              const {
                closeFrame: r,
                messageFrame: t,
                avatarFrame: a,
              } = n.current;
              if (!t?.animate) return void e();
              r?.animate([{ opacity: 0 }], 200),
                a?.animate([{ opacity: 0 }], 200);
              t.animate([{ opacity: 0 }], 200).onfinish = e;
            },
          };
        };
    },
    78005: (e, r, n) => {
      n.d(r, { Z: () => g });
      var t = n(15826),
        a = n(29798),
        s = n(21110),
        o = n(65611),
        i = n(57957),
        l = n(78473);
      const m = () => {
          const { innerWidth: e, innerHeight: r } = l.parentWindow;
          return { width: e, height: r };
        },
        d = () => {
          const [e, r] = (0, t.useState)(m());
          return (
            (0, t.useEffect)(() => {
              const e = (function (e, r) {
                let n = 0;
                return function () {
                  const t = new Date();
                  t.getTime() - n >= r && (e(...arguments), (n = t.getTime()));
                };
              })(() => {
                r(m());
              }, 200);
              return (
                l.parentWindow.addEventListener("resize", e),
                () => l.parentWindow.removeEventListener("resize", e)
              );
            }, []),
            e
          );
        };
      var c = n(69738);
      const g = (e) => {
        let { refs: r, isIconNextToMessage: n } = e;
        const [l, m] = (0, t.useState)(0),
          [g, b] = (0, t.useState)(0),
          u = (0, c.Z)(),
          { vertical: f, horizontal: h } = (0, a.v9)(i.Xf),
          _ = d(),
          p = _.width - (n ? o.$l + s.$i : 0) - s.uu - (u.isZoomedIn ? 0 : h),
          k = Math.min(o.Oz, p),
          w =
            _.height -
            (0, o.b)(u.isZoomedIn ? 0 : f) -
            s.$i -
            (r.current?.closeFrame?.clientHeight
              ? s.$i + r.current?.closeFrame?.clientHeight
              : 0);
        return {
          maxWidth: k,
          messageFrameWidth: Math.min(l, p),
          messageFrameHeight: Math.min(g, w),
          messageContainerHeight:
            _.height -
            (r.current?.closeFrame ? o.yx + s.$i : 0) -
            (0, o.b)(u.isZoomedIn ? 0 : f) -
            s.$i,
          setFrameDimensions: (e) => {
            if (e.current) {
              const r = e.current.getBoundingClientRect();
              m(r.width), b(r.height);
            }
          },
        };
      };
    },
    92795: (e, r, n) => {
      n.d(r, { Z: () => v });
      var t = n(98049),
        a = n.n(t),
        s = n(15826),
        o = n(29798),
        i = n(17255),
        l = n(39622),
        m = n.n(l),
        d = n(82729),
        c = n(12682),
        g = n(48829),
        b = n(21110),
        u = n(40707),
        f = n(75006),
        h = n(65083),
        _ = n(57957),
        p = n(55786);
      const k = (0, i.vJ)(
          ["", " html{overflow-y:hidden;font-size:initial;", ";}"],
          m(),
          (e) => e.backgroundColor && `background: ${e.backgroundColor}`
        ),
        w = (e) => {
          let { children: r, setBackgroundColor: n } = e;
          const t = (0, o.v9)(_.vb),
            a = (0, o.v9)(h.l),
            i = a ? b.lH : b.XE,
            l = (0, g.ND)(),
            m = (0, f.Z)();
          (0, s.useEffect)(() => {
            l.document.documentElement.setAttribute(
              "dir",
              u.Z.isRTL() ? "rtl" : "ltr"
            ),
              l.document.documentElement.setAttribute("lang", u.Z.getLocale());
          }, [u.Z.getLocale()]);
          return (0, p.jsx)(d.Z, {
            currentFrame: l,
            primaryColor: t.primary,
            messageColor: t.message,
            actionColor: t.action,
            baseFontSize: i,
            isFullScreen: a,
            rtl: u.Z.isRTL(),
            locale: u.Z.getLocale(),
            labels: {
              receipts: {
                receivedRecently: m(
                  "embeddable_framework.messenger.message.receipt.received_recently"
                ),
                status: {
                  [c.Gs.sending]: m(
                    "embeddable_framework.messenger.receipt.sending"
                  ),
                  [c.Gs.sent]: m("embeddable_framework.messenger.receipt.sent"),
                  [c.Gs.failed]: m(
                    "embeddable_framework.messenger.receipt.retry"
                  ),
                },
                errors: {
                  tooMany: m(
                    "embeddable_framework.messenger.file_upload.error.file_count_limit",
                    { fileUploadCountLimit: b._v }
                  ),
                  fileSize: m(
                    "embeddable_framework.messenger.file_upload.error.file_size_limit",
                    { fileUploadSizeLimitInMb: 50 }
                  ),
                  fileType: m(
                    "embeddable_framework.messenger.file_upload.error.file_type_limit"
                  ),
                  unknown: m(
                    "embeddable_framework.messenger.file_upload.tap_to_retry"
                  ),
                  retryButtonAriaLabel: (e) =>
                    m(
                      "embeddable_framework.messenger.file_upload.error.retry_button.aria_label",
                      { errorReason: e }
                    ),
                },
              },
              footer: {
                referrerLink: {
                  label: m(
                    "embeddable_framework.messenger.footer.referrer_link.label"
                  ),
                  text: m(
                    "embeddable_framework.messenger.footer.referrer_link.text"
                  ),
                },
              },
              carouselMessage: {
                previousButtonAriaLabel: m(
                  "embeddable_framework.messenger.carousel_message.button.previous"
                ),
                nextButtonAriaLabel: m(
                  "embeddable_framework.messenger.carousel_message.button.next"
                ),
                actionButtonFormat: (e, r) =>
                  m(
                    "embeddable_framework.messenger.carousel_message.action.accessible_text",
                    { action: e, title: r }
                  ),
              },
              composer: {
                placeholder: m(
                  "embeddable_framework.messenger.composer.placeholder"
                ),
                inputAriaLabel: m(
                  "embeddable_framework.messenger.composer.label"
                ),
                sendButtonTooltip: m(
                  "embeddable_framework.messenger.composer.send_button_tooltip"
                ),
                sendButtonAriaLabel: m(
                  "embeddable_framework.messenger.composer.send_button_label"
                ),
              },
              fileUpload: {
                uploadButtonAriaLabel: m(
                  "embeddable_framework.messenger.file_upload.upload_button"
                ),
                dragDropOverlayText: m(
                  "embeddable_framework.messenger.file_upload.drag_drop_overlay_text"
                ),
              },
              imageMessage: {
                openImage: m(
                  "embeddable_framework.messenger.file_upload.open_image_in_new_tab_v2"
                ),
                primaryParticipantAltText: m(
                  "embeddable_framework.messenger.image_message.alt_text.end_user"
                ),
                otherParticipantAltText: m(
                  "embeddable_framework.messenger.image_message.alt_text.agent"
                ),
              },
              fileMessage: {
                sizeInKB: (e) =>
                  m("embeddable_framework.messenger.message.file.size_in_kb", {
                    size: e,
                  }),
                sizeInMB: (e) =>
                  m("embeddable_framework.messenger.message.file.size_in_mb", {
                    size: e,
                  }),
                downloadAriaLabel: m(
                  "embeddable_framework.messenger.message.file.download"
                ),
                titleFormat: (e) =>
                  m("embeddable_framework.messenger.file_message.alt_text", {
                    filename: e,
                  }),
              },
              messengerHeader: {
                avatarAltTag: m(
                  "embeddable_framework.messenger.header.company_logo"
                ),
                closeButtonAriaLabel: m(
                  "embeddable_framework.messenger.header.close"
                ),
                channelLinkingMenuAriaLabel: m(
                  "embeddable_framework.messenger.channel_linking.menu"
                ),
                continueOnChannel: (e) =>
                  m(
                    `embeddable_framework.messenger.header.menu.continue_on_${e.toLowerCase()}`
                  ),
              },
              otherParticipantLayout: { avatarAltTag: "" },
              formMessage: {
                nextStep: m(
                  "embeddable_framework.messenger.message.form.next_step"
                ),
                send: m("embeddable_framework.messenger.message.form.submit"),
                submitting: m(
                  "embeddable_framework.messenger.message.form.submitting"
                ),
                submissionError: m(
                  "embeddable_framework.messenger.message.form.failed_to_submit"
                ),
                stepStatus: (e, r) =>
                  m("embeddable_framework.messenger.message.form.step_status", {
                    step: e,
                    totalSteps: r,
                  }),
                errors: {
                  requiredField: (e) =>
                    m(
                      "embeddable_framework.messenger.message.form.field_is_required_v3",
                      { fieldLabel: e }
                    ),
                  requiredName: m(
                    "embeddable_framework.messenger.message.form.incomplete_name"
                  ),
                  invalidEmail: m(
                    "embeddable_framework.messenger.message.form.invalid_email"
                  ),
                  requiredEmail: m(
                    "embeddable_framework.messenger.message.form.incomplete_email"
                  ),
                  errorIcon: m(
                    "embeddable_framework.messenger.message.form.error_icon"
                  ),
                  fieldMinSize: (e, r) =>
                    m(
                      "embeddable_framework.messenger.message.form.invalid_min_characters_v3",
                      { count: r, fieldLabel: e }
                    ),
                  fieldMaxSize: (e, r) =>
                    m(
                      1 === r
                        ? "embeddable_framework.messenger.message.form.invalid_max_characters.one_v3"
                        : "embeddable_framework.messenger.message.form.invalid_max_characters.other_v3",
                      { count: r, fieldLabel: e }
                    ),
                },
                selectSearchEmpty: m(
                  "embeddable_framework.messenger.message.form.select_search_empty"
                ),
              },
              launcher: {
                ariaLabel: m("embeddable_framework.messenger.launcher.button"),
              },
              launcherLabel: {
                ariaLabel: m(
                  "embeddable_framework.messenger.launcher_label.close_v2"
                ),
              },
              formatTimestamp: (e) => {
                const r = new Date(),
                  n = new Date(e),
                  t =
                    n.getDate() === r.getDate() &&
                    n.getMonth() === r.getMonth() &&
                    n.getFullYear() === r.getFullYear();
                return `${n.toLocaleString(u.Z.getLocale(), {
                  ...(t ? {} : { month: "long", day: "numeric" }),
                  hour: "numeric",
                  minute: "numeric",
                })}`;
              },
              messageLog: {
                initialConversationRequestFailed: m(
                  "embeddable_framework.messenger.initial_conversation_request_failed"
                ),
                initialConversationRetry: m(
                  "embeddable_framework.messenger.initial_conversation_retry"
                ),
                initialConversationSpinner: m(
                  "embeddable_framework.messenger.initial_conversation_spinner"
                ),
                messageHistoryRetry: m(
                  "embeddable_framework.messenger.previous_messages_retry"
                ),
                messageHistorySpinner: m(
                  "embeddable_framework.messenger.previous_messages_spinner"
                ),
                dividers: {
                  unreadMessagesDivider: m(
                    "embeddable_framework.messenger.unread_message_divider.new"
                  ),
                },
              },
              notification: {
                connectError: m(
                  "embeddable_framework.messenger.notification.channel_linking.link.failed"
                ),
                disconnectError: m(
                  "embeddable_framework.messenger.notification.channel_linking.unlink.fail"
                ),
              },
              channelLink: {
                linkError: {
                  qrError: m(
                    "embeddable_framework.messenger.channel_link.link_error.qr_code_error"
                  ),
                  buttonError: m(
                    "embeddable_framework.messenger.channel_link.link_error.button_error"
                  ),
                  retry: m(
                    "embeddable_framework.messenger.file_upload.tap_to_retry"
                  ),
                },
                generateNewQrCode: m(
                  "embeddable_framework.messenger.channel_linking.generate_new_qr_code"
                ),
                generateNewLink: m(
                  "embeddable_framework.messenger.channel_linking.generate_new_link"
                ),
                whatsapp: {
                  title: m(
                    "embeddable_framework.messenger.channel_linking.page.title.whatsapp"
                  ),
                  subtitle: m(
                    "embeddable_framework.messenger.channel_linking.page.subtitle.whatsapp"
                  ),
                  instructions: {
                    desktop: () =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_desktop.whatsapp"
                      ),
                    mobile: () =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_mobile.whatsapp"
                      ),
                  },
                  qrCodeAlt: m(
                    "embeddable_framework.messenger.channel_linking.page.qr_code.whatsapp"
                  ),
                  button: {
                    desktop: m(
                      "embeddable_framework.messenger.channel_linking.page.button_desktop.whatsapp"
                    ),
                    mobile: m(
                      "embeddable_framework.messenger.channel_linking.page.button_mobile.whatsapp"
                    ),
                  },
                  disconnectButtonText: m(
                    "embeddable_framework.messenger.channel_link.whatsapp.disconnect_button_text"
                  ),
                  disconnectLinkText: m(
                    "embeddable_framework.messenger.channel_link.whatsapp.disconnect_link_text"
                  ),
                },
                messenger: {
                  title: m(
                    "embeddable_framework.messenger.channel_linking.page.title.fb_messenger"
                  ),
                  subtitle: m(
                    "embeddable_framework.messenger.channel_linking.page.subtitle.fb_messenger"
                  ),
                  instructions: {
                    desktop: () =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_desktop.fb_messenger"
                      ),
                    mobile: () =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger"
                      ),
                  },
                  qrCodeAlt: m(
                    "embeddable_framework.messenger.channel_linking.page.qr_code.fb_messenger"
                  ),
                  button: {
                    desktop: m(
                      "embeddable_framework.messenger.channel_linking.page.button_desktop.fb_messenger"
                    ),
                    mobile: m(
                      "embeddable_framework.messenger.channel_linking.page.button_mobile.fb_messenger"
                    ),
                  },
                  disconnectButtonText: m(
                    "embeddable_framework.messenger.channel_link.messenger.disconnect_button_text"
                  ),
                  disconnectLinkText: m(
                    "embeddable_framework.messenger.channel_link.messenger.disconnect_link_text"
                  ),
                },
                instagram: {
                  title: m(
                    "embeddable_framework.messenger.channel_linking.page.title.instagram"
                  ),
                  subtitle: m(
                    "embeddable_framework.messenger.channel_linking.page.subtitle.instagram"
                  ),
                  instructions: {
                    desktop: (e) =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_desktop.instagram",
                        { instagramHandle: e }
                      ),
                    mobile: (e) =>
                      m(
                        "embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger",
                        { instagramHandle: e }
                      ),
                  },
                  qrCodeAlt: m(
                    "embeddable_framework.messenger.channel_linking.page.qr_code.instagram"
                  ),
                  button: {
                    desktop: m(
                      "embeddable_framework.messenger.channel_linking.page.button_desktop.instagram"
                    ),
                    mobile: m(
                      "embeddable_framework.messenger.channel_linking.page.button_mobile.instagram"
                    ),
                  },
                  disconnectButtonText: m(
                    "embeddable_framework.messenger.channel_link.instagram.disconnect_button_text"
                  ),
                  disconnectLinkText: m(
                    "embeddable_framework.messenger.channel_link.instagram.disconnect_link_text"
                  ),
                },
              },
              proactiveMessaging: {
                proactiveMessage: {
                  avatarAlt: (e) => {
                    let { name: r } = e;
                    return m(
                      "embeddable_framework.messenger.proactive_message.avatar_alt",
                      { name: r }
                    );
                  },
                },
              },
              soundNotifications: {
                toggleEnabled: m(
                  "embeddable_framework.messenger.sound_notification.toggle.enabled"
                ),
                toggleDisabled: m(
                  "embeddable_framework.messenger.sound_notification.toggle.disabled"
                ),
                hiddenField: m(
                  "embeddable_framework.messenger.sound_notification.toggle.hidden_label"
                ),
              },
              postbackAction: {
                fieldError: (e) => {
                  let { errorSource: r } = e;
                  return m(
                    "embeddable_framework.messenger.postback_button.error.global_error_message",
                    { errorSource: r }
                  );
                },
              },
            },
            children: (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(k, { backgroundColor: n ? t.primary : void 0 }),
                r,
              ],
            }),
          });
        };
      w.propTypes = { children: a().node, setBackgroundColor: a().bool };
      const v = w;
    },
    82729: (e, r, n) => {
      n.d(r, { Z: () => b, u: () => d });
      var t = n(98049),
        a = n.n(t),
        s = n(17255),
        o = n(94318),
        i = n(12682),
        l = n(68762),
        m = n(55786);
      const d = (0, l.Z)(),
        c = (0, s.vJ)(
          ["html{color:", ";}"],
          (e) => e.theme.messenger.colors.frameText
        ),
        g = (e) => {
          let {
            primaryColor: r,
            messageColor: n,
            actionColor: t,
            rtl: a,
            baseFontSize: s,
            currentFrame: i,
            labels: d,
            isFullScreen: g,
            children: b,
            locale: u,
          } = e;
          const f = (0, l.Z)({
            rtl: a,
            currentFrame: i,
            baseFontSize: s,
            primaryColor: r,
            messageColor: n,
            actionColor: t,
            labels: d,
            isFullScreen: g,
            locale: u,
          });
          return (0, m.jsxs)(o.ThemeProvider, {
            theme: f,
            children: [(0, m.jsx)(c, {}), b],
          });
        };
      g.propTypes = {
        children: a().node,
        primaryColor: a().string,
        messageColor: a().string,
        actionColor: a().string,
        rtl: a().bool,
        locale: a().string,
        baseFontSize: a().string,
        currentFrame: a().object,
        labels: a().shape({
          composer: a().shape({
            placeholder: a().string,
            inputAriaLabel: a().string,
            sendButtonTooltip: a().string,
            sendButtonAriaLabel: a().string,
          }),
          fileUpload: a().shape({
            uploadButtonAriaLabel: a().string,
            dragDropOverlayText: a().string,
            messageBubbleHover: a().string,
          }),
          fileMessage: a().shape({
            sizeInMB: a().func,
            sizeInKB: a().func,
            downloadAriaLabel: a().string,
          }),
          formMessage: a().shape({
            nextStep: a().string,
            send: a().string,
            submitting: a().string,
            submissionError: a().string,
            stepStatus: a().func,
            errors: a().shape({
              fieldMaxSize: a().func,
              fieldMinSize: a().func,
              invalidEmail: a().string,
              requiredEmail: a().string,
              requiredField: a().func,
              requiredName: a().string,
              errorIcon: a().string,
            }),
          }),
          messengerHeader: a().shape({
            avatarAltTag: a().string,
            closeButtonAriaLabel: a().string,
          }),
          receipts: a().shape({
            status: a().shape({
              [i.Gs.sending]: a().string,
              [i.Gs.sent]: a().string,
              [i.Gs.failed]: a().string,
            }),
            errors: a().shape({
              tooMany: a().string,
              fileSize: a().string,
              unknown: a().string,
            }),
            receivedRecently: a().string,
          }),
          postbackAction: a().shape({ fieldError: a().func }),
        }),
        launcher: a().shape({ ariaLabel: a().string }),
        isFullScreen: a().bool,
      };
      const b = g;
    },
    83839: (e, r, n) => {
      n.d(r, { Z: () => s });
      var t = n(15826),
        a = n(17255);
      const s = () => (0, t.useContext)(a.Ni).messenger.labels;
    },
    93074: (e, r, n) => {
      n.d(r, { Z: () => g });
      var t = n(98049),
        a = n.n(t),
        s = n(15826),
        o = n(17255);
      const i = o.ZP.button.withConfig({ componentId: "sc-1ee9gtf-0" })(
          [
            "padding:",
            ";border:0;width:max-content;max-width:",
            ";overflow-wrap:break-word;word-break:break-word;background:",
            ";color:",
            ";border-radius:",
            ";text-align:initial;&:focus,&:active,&:focus-visible,&[data-garden-focus-visible]{outline:0;}&:focus{outline:none;}&:focus-visible{box-shadow:inset ",
            ";}",
          ],
          (e) =>
            e.isTitleVisible
              ? `${e.theme.messenger.space.sixteen} ${e.theme.messenger.space.sm} ${e.theme.messenger.space.sm}`
              : e.theme.messenger.space.sm,
          (e) =>
            "" + ("number" == typeof e.maxWidth ? `${e.maxWidth}px` : "auto"),
          (e) => e.theme.palette.white,
          (e) => e.theme.messenger.colors.otherParticipantMessageText,
          (e) => e.theme.messenger.borderRadii.textMessage,
          (e) => e.theme.shadows.md(e.theme.messenger.colors.action)
        ),
        l = o.ZP.h1.withConfig({ componentId: "sc-1ee9gtf-1" })(
          [
            "margin-bottom:",
            ";color:",
            ";font-size:",
            ";line-height:",
            ";opacity:0.65;",
          ],
          (e) => e.theme.messenger.space.xs,
          (e) => e.theme.palette.black,
          (e) => e.theme.messenger.fontSizes.sm,
          (e) => e.theme.messenger.lineHeights.sm
        ),
        m = o.ZP.div.withConfig({ componentId: "sc-1ee9gtf-2" })(
          ["font-size:", ";line-height:", ";"],
          (e) => e.theme.messenger.fontSizes.md,
          (e) => e.theme.messenger.lineHeights.md
        );
      var d = n(55786);
      const c = (e) => {
        let {
          title: r,
          message: n,
          ariaLabel: t,
          maxWidth: a,
          onClick: o,
          onRender: c,
        } = e;
        const g = (0, s.useRef)();
        return (
          (0, s.useLayoutEffect)(() => {
            c?.(g);
          }),
          (0, d.jsxs)(i, {
            maxWidth: a,
            onClick: o,
            ref: g,
            "aria-label": t,
            isTitleVisible: Boolean(r),
            children: [
              r && (0, d.jsx)(l, { children: r }),
              (0, d.jsx)(m, { children: n }),
            ],
          })
        );
      };
      c.propTypes = {
        title: a().node,
        ariaLabel: a().string,
        message: a().node.isRequired,
        maxWidth: a().number,
        onClick: a().func.isRequired,
        onRender: a().func,
      };
      const g = (0, o.ZP)(c).withConfig({ componentId: "sc-15hwucc-0" })([""]);
    },
    39707: (e, r, n) => {
      n.d(r, { Z: () => g });
      var t = n(98049),
        a = n.n(t),
        s = n(17255),
        o = (n(15826), n(69947)),
        i = n(55786),
        l = function (e) {
          return (0, i.jsx)("svg", {
            ...e,
            children: (0, i.jsx)("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              d: "M3 13L13 3m0 10L3 3",
            }),
          });
        };
      l.defaultProps = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        focusable: "false",
        viewBox: "0 0 16 16",
      };
      const m = s.ZP.button.withConfig({ componentId: "sc-1uf0igr-0" })(
          [
            "border:0;background:",
            ";color:",
            ";border-radius:",
            ";display:flex;align-items:center;justify-content:center;opacity:0.8;width:",
            ";height:",
            ";transform-origin:bottom;&:focus,&:active,&:hover{opacity:1;}&:focus,&:focus-visible{box-shadow:inset ",
            ";outline:none;}",
          ],
          (e) => e.theme.palette.white,
          (e) => e.theme.messenger.colors.iconColor,
          (e) => e.theme.messenger.borderRadii.textMessage,
          (e) => e.theme.messenger.iconSizes.xxl,
          (e) => e.theme.messenger.iconSizes.xxl,
          (e) => e.theme.shadows.md(e.theme.messenger.colors.action)
        ),
        d = (0, s.ZP)(l).withConfig({ componentId: "sc-1uf0igr-1" })(
          ["width:", ";height:", ";"],
          (e) => (0, o.hO)(16, e.theme.messenger.baseFontSize),
          (e) => (0, o.hO)(16, e.theme.messenger.baseFontSize)
        ),
        c = (e) => {
          let { onClick: r, ariaLabel: n } = e;
          return (0, i.jsx)(m, {
            onClick: r,
            "aria-label": n,
            children: (0, i.jsx)(d, {}),
          });
        };
      c.propTypes = { onClick: a().func, ariaLabel: a().string };
      const g = (0, s.ZP)(c).withConfig({ componentId: "sc-1xsbl6q-0" })([""]);
    },
    48829: (e, r, n) => {
      n.d(r, { ND: () => s, ZP: () => o });
      var t = n(15826);
      const a = (0, t.createContext)({ document, window }),
        s = () => (0, t.useContext)(a),
        o = (a.Consumer, a.Provider);
    },
    13672: (e, r, n) => {
      n.d(r, { ZP: () => c });
      var t = n(98049),
        a = n.n(t),
        s = n(15826),
        o = n(744),
        i = n(17255),
        l = n(48829),
        m = n(55786);
      const d = s.forwardRef((e, r) => {
        let { children: n, rootElement: t, title: a, hidden: d, ...c } = e;
        const [g, b] = ((e) => {
            const r = (0, s.useRef)(null),
              n = (0, s.useCallback)(
                (n) => {
                  (r.current = n),
                    e &&
                      ("function" == typeof e
                        ? e(r.current)
                        : (e.current = r.current));
                },
                [r, e]
              );
            return [r, n];
          })(r),
          u = (0, s.useRef)(t),
          [f, h] = (0, s.useState)(!1),
          [_, p] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          const e = () => {
            h(!0);
          };
          if ("complete" === g.current.contentDocument.readyState)
            return void e();
          const r = g.current;
          return (
            r.addEventListener("load", e),
            () => r.removeEventListener("load", e)
          );
        }, [g]),
          (0, s.useEffect)(() => {
            if (!f) return;
            u.current || (u.current = document.createElement("div"));
            const e = u.current,
              r = g.current.contentDocument.body;
            return (
              r.appendChild(e),
              p(!0),
              () => {
                r.contains(e) && r.removeChild(e);
              }
            );
          }, [g, t, f]),
          (0, s.useEffect)(() => {
            if (!_) return;
            const e = g.current.contentDocument;
            let r = e.querySelector("title");
            r || (r = e.createElement("title")),
              (r.innerHTML = ""),
              r.appendChild(e.createTextNode(a)),
              e.querySelector("head").appendChild(r);
          }, [a, _, g]);
        const k = { colorScheme: "light", ...c.style };
        return (
          (f && _ && !d) || (k.display = "none"),
          (0, m.jsx)("iframe", {
            ref: b,
            title: a,
            ...c,
            style: k,
            children:
              f &&
              _ &&
              (0, m.jsx)(i.LC, {
                target: g.current.contentDocument.querySelector("head"),
                children: (0, m.jsx)(l.ZP, {
                  value: {
                    document: g.current.contentDocument,
                    window: g.current.contentWindow,
                  },
                  children: !d && o.createPortal(n, u.current),
                }),
              }),
          })
        );
      });
      d.propTypes = {
        children: a().node,
        rootElement: a().instanceOf(Element),
        title: a().string.isRequired,
        hidden: a().bool,
        style: a().object,
      };
      const c = d;
    },
  },
]);
