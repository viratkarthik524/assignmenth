"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9133, 9618],
  {
    99618: function (n, e, i) {
      i.r(e);
      var a = i(52322),
        t = i(62595);
      e.default = function (n) {
        var e = n.isAppBannerDisplayed,
          i = (0, t.useBannerContext)() || {},
          r = i.showBanner,
          o = i.onClose,
          s = i.content,
          c = i.icon,
          l = i.link,
          p = i.withAnimation;
        return r
          ? (0, a.jsx)(t.Banner, {
              variant: "primary",
              actionText: "Click here",
              actionLink: l,
              icon: c,
              onClose: o,
              withAnimation: p,
              isAppBannerDisplayed: e,
              children: s,
            })
          : (0, a.jsx)(a.Fragment, {});
      };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/9133.b4ebf79a4053f377.js.map
