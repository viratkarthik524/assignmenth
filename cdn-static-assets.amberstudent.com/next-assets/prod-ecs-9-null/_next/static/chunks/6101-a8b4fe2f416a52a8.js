"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6101],
  {
    54478: function (e, t, n) {
      n.d(t, {
        Of: function () {
          return v;
        },
        Xp: function () {
          return _;
        },
      });
      var r = n(98788),
        a = n(50853),
        o = n(8388),
        i = n.n(o),
        u = (n(71406), n(139)),
        l = n.n(u),
        s = n(49705),
        c = n.n(s),
        d = n(71526),
        _ = (function () {
          var e = (0, r.Z)(function (e, t) {
            var n;
            return (0, a.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e.url_path = e.url_path || "/api/v0/forms"),
                    (n = c()(i().urls.base_service_url, e.url_path)),
                    (t.source = "internal"),
                    [
                      4,
                      (0, d.Z)(
                        (0, r.Z)(function () {
                          return (0, a.__generator)(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [
                                  4,
                                  l()
                                    .post(n)
                                    .withCredentials()
                                    .query(e.params)
                                    .send({ form: t }),
                                ];
                              case 1:
                                return [2, r.sent()];
                            }
                          });
                        })
                      ),
                    ]
                  );
                case 1:
                  return [2, o.sent()];
              }
            });
          });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = (0, r.Z)(function () {
            var e,
              t,
              n = arguments;
            return (0, a.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                    (t = c()(i().urls.base_service_url, "/api/v0/forms/refer")),
                    [
                      4,
                      (0, d.Z)(
                        (0, r.Z)(function () {
                          return (0, a.__generator)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [
                                  4,
                                  l()
                                    .post(t)
                                    .withCredentials()
                                    .send({ form: e }),
                                ];
                              case 1:
                                return [2, n.sent()];
                            }
                          });
                        })
                      ),
                    ]
                  );
                case 1:
                  return [2, o.sent()];
              }
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    89424: function (e, t, n) {
      n.d(t, {
        $D: function () {
          return p;
        },
        Hn: function () {
          return f;
        },
        V4: function () {
          return h;
        },
      });
      var r = n(98788),
        a = n(70865),
        o = n(50853),
        i = n(8388),
        u = n.n(i),
        l = n(71406),
        s = n(139),
        c = n.n(s),
        d = n(49705),
        _ = n.n(d),
        v = n(71526),
        f = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (t.url_path = t.url_path || "leads"),
            (t.url = _()(u().urls.base_service_url, t.url_path, e)),
            (t.params = t.params || {}),
            l.Z.get(t, n);
        },
        p = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (e.url_path = e.url_path || "api/v0/leads"),
            (e.url = _()(u().urls.base_service_url, e.url_path)),
            l.Z.post(e, t);
        },
        h = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          (t.url_path = t.url_path || "api/v0/leads"),
            (t.url = _()(u().urls.base_service_url, t.url_path, e)),
            l.Z.put(t, n);
        };
      (function () {
        var e = (0, r.Z)(function (e, t) {
          return (0, o.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  c()
                    .put(_()(u().urls.base_service_url, "/leads", e))
                    .send(t)
                    .withCredentials(),
                ];
              case 1:
                return [2, n.sent()];
            }
          });
        });
      })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            return (0, o.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    c()
                      .post(
                        _()(u().urls.base_service_url, "/leads/update_bulk")
                      )
                      .send(e)
                      .withCredentials(),
                  ];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e, t, n) {
            var r;
            return (0, o.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (r = n ? "create" : "update"),
                    [
                      4,
                      c()
                        .post(
                          _()(
                            u().urls.base_service_url,
                            "/".concat(t, "/").concat(r, "_bulk_async")
                          )
                        )
                        .send(e)
                        .withCredentials(),
                    ]
                  );
                case 1:
                  return [2, a.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function () {
            var e,
              t,
              n,
              r,
              i,
              l = arguments;
            return (0, o.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = l.length > 0 && void 0 !== l[0] ? l[0] : 1),
                    (t = l.length > 1 && void 0 !== l[1] ? l[1] : {}),
                    (n = "api/v0/auth/users/bookings"),
                    (r = (0, a.Z)(
                      {
                        p: e,
                        limit: 10,
                        only: "id,inventory_id,root_inventory_id",
                        methods:
                          "is_payment_present_for_inventory,is_form_present_for_inventory,booking_status,booking_inventory,first_created_at_for_inventory,root_inventory_payment_info",
                        sort_key: "updated",
                        sort_order: "desc",
                        cache: "false",
                      },
                      t
                    )),
                    (i = _()(u().urls.base_service_url, n)),
                    [4, c().get(i).query(r).withCredentials()]
                  );
                case 1:
                  return [2, o.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n,
              a = arguments;
            return (0, o.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                    (n = _()(
                      u().urls.base_service_url,
                      "/leads/".concat(e, "/video_calls")
                    )),
                    [
                      4,
                      (0, v.Z)(
                        (0, r.Z)(function () {
                          return (0, o.__generator)(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return [
                                  4,
                                  c().get(n).query(t).withCredentials(),
                                ];
                              case 1:
                                return [2, e.sent()];
                            }
                          });
                        })
                      ),
                    ]
                  );
                case 1:
                  return [2, i.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n = arguments;
            return (0, o.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    ((t =
                      n.length > 1 && void 0 !== n[1] ? n[1] : {}).url_path =
                      t.url_path || "leads"),
                    (t.url = _()(
                      u().urls.base_service_url,
                      t.url_path,
                      e,
                      "referrer"
                    )),
                    (t.params = t.params || {}),
                    [4, c().get(t.url).withCredentials().query(t.params)]
                  );
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n = arguments;
            return (0, o.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    ((t =
                      n.length > 1 && void 0 !== n[1] ? n[1] : {}).url_path =
                      t.url_path || "users"),
                    (t.url = _()(
                      u().urls.base_service_url,
                      t.url_path,
                      e,
                      "referrals"
                    )),
                    (t.params = t.params || {}),
                    [4, c().get(t.url).withCredentials().query(t.params)]
                  );
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n = arguments;
            return (0, o.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    ((t =
                      n.length > 1 && void 0 !== n[1] ? n[1] : {}).url_path =
                      t.url_path || "leads"),
                    (t.url = _()(
                      u().urls.base_service_url,
                      t.url_path,
                      e,
                      "feedback_email"
                    )),
                    (t.params = t.params || {}),
                    [4, c().post(t.url).withCredentials().query(t.params)]
                  );
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        })(),
        (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n = arguments;
            return (0, o.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    ((t =
                      n.length > 1 && void 0 !== n[1] ? n[1] : {}).url_path =
                      t.url_path || "leads"),
                    (t.url = _()(
                      u().urls.base_service_url,
                      t.url_path,
                      e,
                      "sleekflow_chat_link"
                    )),
                    (t.params = t.params || {}),
                    [4, c().get(t.url).withCredentials().query(t.params)]
                  );
                case 1:
                  return [2, r.sent()];
              }
            });
          });
        })();
    },
    71526: function (e, t, n) {
      var r = n(98788),
        a = n(50853);
      function o() {
        return (o = (0, r.Z)(function (e) {
          return (0, a.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return t.trys.push([0, 2, , 3]), [4, e()];
              case 1:
                return [2, [t.sent(), null]];
              case 2:
                return [2, [null, t.sent()]];
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      t.Z = function (e) {
        return o.apply(this, arguments);
      };
    },
    76101: function (e, t, n) {
      n.d(t, {
        LJ: function () {
          return O;
        },
        Pd: function () {
          return T;
        },
        Qr: function () {
          return M;
        },
        T8: function () {
          return R;
        },
        WS: function () {
          return L;
        },
        a2: function () {
          return x;
        },
        jK: function () {
          return Y;
        },
        js: function () {
          return G;
        },
        mB: function () {
          return C;
        },
        qS: function () {
          return K;
        },
        v4: function () {
          return A;
        },
        vl: function () {
          return W;
        },
      });
      var r = n(98788),
        a = n(70865),
        o = n(96670),
        i = n(26297),
        u = n(66383),
        l = n(50853),
        s = n(8388),
        c = n.n(s),
        d = n(4454),
        _ = n(36906),
        v = n(28879),
        f = n.n(v),
        p = n(89945),
        h = n.n(p),
        m = n(24291),
        g = n(54478),
        b = n(89424),
        y = n(35590),
        w = n(36886),
        Z = n(71526),
        k = n(139),
        N = n.n(k),
        q = n(62595),
        D = n(49705),
        I = n.n(D),
        S = n(38468);
      f().extend(h());
      var C = function (e) {
          var t, n;
          return (
            (null === (t = e.virtual_views) || void 0 === t
              ? void 0
              : t.length) > 0 ||
            (null === (n = e.children) || void 0 === n
              ? void 0
              : n.some(function (e) {
                  var t;
                  return (
                    (null === (t = e.virtual_views) || void 0 === t
                      ? void 0
                      : t.length) > 0
                  );
                }))
          );
        },
        O = function (e) {
          var t, n;
          return (
            (null === (t = e.videos) || void 0 === t ? void 0 : t.length) > 0 ||
            (null === (n = e.children) || void 0 === n
              ? void 0
              : n.some(function (e) {
                  var t;
                  return (
                    (null === (t = e.videos) || void 0 === t
                      ? void 0
                      : t.length) > 0
                  );
                }))
          );
        },
        Y = function (e) {
          var t, n;
          return (
            (null ===
              (t = S.Z.find(function (t) {
                return (
                  (null === t || void 0 === t ? void 0 : t.short_name) === e
                );
              })) || void 0 === t
              ? void 0
              : t.symbol) ||
            (null ===
              (n = S.Z.find(function (t) {
                return (
                  (null === t || void 0 === t ? void 0 : t.standard_name) === e
                );
              })) || void 0 === n
              ? void 0
              : n.symbol) ||
            ""
          );
        },
        x = function () {
          (0, m._4)();
        },
        M = function (e) {
          return !(
            !e ||
            0 !== Object.keys(e).length ||
            Object.getPrototypeOf(e) !== Object.prototype
          );
        },
        E = function (e) {
          return f()(e, "DD-MM-YYYY").format("YYYY-MM-DD");
        },
        K = function (e) {
          var t,
            n = "Invalid Date",
            r =
              null !== (t = new Date().getFullYear()) && void 0 !== t
                ? t
                : 2030;
          if (f()(e, "DD-MM-YYYY").isValid()) {
            var a = (0, u.Z)(e.split("-"), 3),
              o = a[0],
              i = void 0 === o ? 0 : o,
              l = a[1],
              s = void 0 === l ? 0 : l,
              c = a[2],
              d = void 0 === c ? 0 : c,
              _ = Number(i) >= 1 && Number(i) <= 31,
              v = Number(s) >= 1 && Number(s) <= 12,
              p = Number(d) >= Number(r - 80) && Number(d) <= Number(r) - 15;
            return !!(_ && v && p) || n;
          }
          return n;
        },
        R = (function () {
          var e = (0, r.Z)(function (e, t) {
            var n,
              a,
              o,
              i,
              s,
              d,
              _,
              v,
              f,
              p,
              h,
              m,
              g,
              b,
              y,
              w,
              k,
              q,
              D,
              S,
              C,
              O,
              Y,
              x,
              M;
            return (0, l.__generator)(this, function (E) {
              switch (E.label) {
                case 0:
                  return (
                    (n = e.map(function (e) {
                      return e.id;
                    })),
                    (a = (function () {
                      var n = (0, r.Z)(function () {
                        var n, r, a, o, i, u, s, d;
                        return (0, l.__generator)(this, function (l) {
                          switch (l.label) {
                            case 0:
                              (n = []), (r = !0), (a = !1), (o = void 0);
                              try {
                                for (
                                  i = e[Symbol.iterator]();
                                  !(r = (u = i.next()).done);
                                  r = !0
                                )
                                  (s = u.value),
                                    n.push({
                                      request: {
                                        destinations: ""
                                          .concat(t.lat, ",")
                                          .concat(t.lng),
                                        origins: ""
                                          .concat(
                                            s.location.location_coordinates.lat,
                                            ","
                                          )
                                          .concat(
                                            s.location.location_coordinates.lng
                                          ),
                                        mode: "walking",
                                        units: "imperial",
                                      },
                                    }),
                                    n.push({
                                      request: {
                                        destinations: ""
                                          .concat(t.lat, ",")
                                          .concat(t.lng),
                                        origins: ""
                                          .concat(
                                            s.location.location_coordinates.lat,
                                            ","
                                          )
                                          .concat(
                                            s.location.location_coordinates.lng
                                          ),
                                        mode: "driving",
                                        units: "imperial",
                                      },
                                    }),
                                    n.push({
                                      request: {
                                        destinations: ""
                                          .concat(t.lat, ",")
                                          .concat(t.lng),
                                        origins: ""
                                          .concat(
                                            s.location.location_coordinates.lat,
                                            ","
                                          )
                                          .concat(
                                            s.location.location_coordinates.lng
                                          ),
                                        mode: "transit",
                                        units: "imperial",
                                      },
                                    });
                              } catch (_) {
                                (a = !0), (o = _);
                              } finally {
                                try {
                                  r || null == i.return || i.return();
                                } finally {
                                  if (a) throw o;
                                }
                              }
                              return (
                                (d = I()(
                                  c().urls.base_service_url,
                                  "/api/v0/regions/distances/fetch_bulk"
                                )),
                                [
                                  4,
                                  N()
                                    .post(d)
                                    .withCredentials()
                                    .send({ request: n }),
                                ]
                              );
                            case 1:
                              return [2, l.sent()];
                          }
                        });
                      });
                      return function () {
                        return n.apply(this, arguments);
                      };
                    })()),
                    [4, (0, Z.Z)(a)]
                  );
                case 1:
                  if (
                    ((o = u.Z.apply(void 0, [E.sent(), 2])), (i = o[0]), !o[1])
                  ) {
                    (s = i.body.data),
                      (d = {}),
                      (_ = 0),
                      (v = !0),
                      (f = !1),
                      (p = void 0);
                    try {
                      for (
                        h = n[Symbol.iterator]();
                        !(v = (m = h.next()).done);
                        v = !0
                      )
                        (g = m.value),
                          (d[g] = {}),
                          (S = s[_][3]),
                          (C = s[_ + 1][3]),
                          (O = s[_ + 2][3]),
                          S && "OK" === S.data.status
                            ? (d[g].WALKING = {
                                distance:
                                  null === (Y = S.data.distance) || void 0 === Y
                                    ? void 0
                                    : Y.text,
                                duration:
                                  null === (x = S.data) ||
                                  void 0 === x ||
                                  null === (M = x.duration) ||
                                  void 0 === M
                                    ? void 0
                                    : M.text,
                              })
                            : (d[g].WALKING = {
                                distance: "0 ft",
                                duration: "0 min",
                              }),
                          C && "OK" === C.data.status
                            ? (d[g].DRIVING = {
                                distance:
                                  null === (b = C.data.distance) || void 0 === b
                                    ? void 0
                                    : b.text,
                                duration:
                                  null === (y = C.data) ||
                                  void 0 === y ||
                                  null === (w = y.duration) ||
                                  void 0 === w
                                    ? void 0
                                    : w.text,
                              })
                            : (d[g].DRIVING = {
                                distance: "0 ft",
                                duration: "0 min",
                              }),
                          O && "OK" === O.data.status
                            ? (d[g].TRANSIT = {
                                distance:
                                  null === (k = O.data.distance) || void 0 === k
                                    ? void 0
                                    : k.text,
                                duration:
                                  null === (q = O.data) ||
                                  void 0 === q ||
                                  null === (D = q.duration) ||
                                  void 0 === D
                                    ? void 0
                                    : D.text,
                              })
                            : (d[g].TRANSIT = {
                                distance: "0 ft",
                                duration: "0 min",
                              }),
                          (_ += 3);
                    } catch (K) {
                      (f = !0), (p = K);
                    } finally {
                      try {
                        v || null == h.return || h.return();
                      } finally {
                        if (f) throw p;
                      }
                    }
                    return [2, d];
                  }
                  return [2, []];
              }
            });
          });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        T = (function () {
          var e = (0, r.Z)(function (e, t) {
            var n, r, a, o, i;
            return (0, l.__generator)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (n = {}),
                    (r = ["DRIVING", "WALKING", "TRANSIT"]),
                    d.Z.emit(_.mp),
                    (a = function (n) {
                      var r = {
                          destinations: "".concat(e.lat, ",").concat(e.lng),
                          origins: "".concat(t.lat, ",").concat(t.lng),
                          mode: n.toLowerCase(),
                          units: "imperial",
                        },
                        a = I()(
                          c().urls.base_service_url,
                          "/api/v0/regions/distances/fetch"
                        );
                      return N().get(a).withCredentials().query(r);
                    }),
                    (o = []),
                    r.forEach(function (e) {
                      return o.push(a(e));
                    }),
                    [4, Promise.allSettled(o)]
                  );
                case 1:
                  return (
                    (i = u.sent()),
                    r.forEach(function (e, t) {
                      var r, a, o;
                      "fulfilled" === i[t].status &&
                      "OK" ===
                        (null === (r = i[t].value.body) || void 0 === r
                          ? void 0
                          : r.data.data.status)
                        ? (n[e] = {
                            distance:
                              null === (a = i[t].value.body.data) ||
                              void 0 === a
                                ? void 0
                                : a.data.distance.text,
                            duration:
                              null === (o = i[t].value.body.data) ||
                              void 0 === o
                                ? void 0
                                : o.data.duration.text,
                          })
                        : (n[e] = { distance: "0 ft", duration: "0 min" });
                    }),
                    d.Z.emit(_.IQ),
                    [2, n]
                  );
              }
            });
          });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        A = (function () {
          var e = (0, r.Z)(function (e) {
            var t,
              n,
              r,
              o,
              i,
              s,
              c,
              d,
              _,
              v,
              p,
              h,
              b,
              w,
              Z,
              k,
              N,
              D,
              I,
              S,
              C,
              O,
              Y,
              x,
              M,
              K,
              R,
              T,
              A,
              G,
              L,
              j;
            return (0, l.__generator)(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (t = e.data),
                    (n = e.queryUrl),
                    (r = e.moveToStep),
                    (o = e.countryName),
                    (i = e.roommateDetails),
                    (s = e.commissionValue),
                    (c = e.skipGuarantorDetails),
                    (d = e.callBack),
                    (_ = e.inv),
                    (v = e.token),
                    (p = {
                      email: t["user_details/email"],
                      phone: t["user_details/phone"],
                      country_code: t["user_details/phone_code"].split("+")[1],
                    }),
                    (t["user_details/phone"] = "+"
                      .concat(t["user_details/phone_code"].split("+")[1])
                      .concat(t["user_details/phone"])),
                    (t["data/emergency_details/phone"] = "+"
                      .concat(
                        t["data/emergency_details/phone_code"].split("+")[1]
                      )
                      .concat(t["data/emergency_details/phone"])),
                    (t["data/dob"] = E(t["data/dob"])),
                    (t["data/emergency_details/dob"] = E(
                      t["data/emergency_details/dob"]
                    )),
                    t.arrival_date &&
                      (t.arrival_date =
                        ((B = t.arrival_date), f()(B).format("YYYY-MM-DD"))),
                    t["data/guarantor_details/dob"] &&
                      (t["data/guarantor_details/dob"] = E(
                        t["data/guarantor_details/dob"]
                      )),
                    delete t["user_details/phone_code"],
                    delete t["data/emergency_details/phone_code"],
                    t["data/guarantor_details/phone"] &&
                      ((t["data/guarantor_details/phone"] = "+"
                        .concat(
                          t["data/guarantor_details/phone_code"].split("+")[1]
                        )
                        .concat(t["data/guarantor_details/phone"])),
                      delete t["data/guarantor_details/phone_code"]),
                    c &&
                      Object.keys(t).forEach(function (e) {
                        e.includes("data/guarantor_details") && delete t[e];
                      }),
                    n && (t.url = n),
                    (h = t["user_details/email"]),
                    i && (t = (0, a.Z)({}, t, i)),
                    (b = {
                      url_path: "/api/v0/forms",
                      params: {
                        recaptcha_token: v,
                        recaptcha_action: "bookFormOne",
                      },
                    }),
                    [4, (0, g.Xp)(b, t)]
                  );
                case 1:
                  return (
                    (w = u.Z.apply(void 0, [l.sent(), 2])),
                    (Z = w[0]),
                    (k = w[1])
                      ? ((0, m.pr)({
                          action: "submit",
                          category: "book_form",
                          value: 0,
                          label: o,
                        }),
                        (0, m.d3)("book_form >> ".concat(h, " >> failed"), {
                          message: "failed with reason ".concat(
                            null === k ||
                              void 0 === k ||
                              null === (M = k.response) ||
                              void 0 === M ||
                              null === (K = M.body) ||
                              void 0 === K
                              ? void 0
                              : K.message
                          ),
                          response: k,
                          data: t,
                        }),
                        d && d(),
                        (A =
                          null === k ||
                          void 0 === k ||
                          null === (R = k.response) ||
                          void 0 === R ||
                          null === (T = R.body) ||
                          void 0 === T
                            ? void 0
                            : T.message),
                        (j = (L = A === (G = "Error phone-not-valid"))
                          ? "Invalid phone number"
                          : "Something went wrong, please contact us"),
                        A === G && r && r(2),
                        L ||
                          "undefined" === typeof Sentry ||
                          Sentry.captureException(
                            new Error("book form submission error"),
                            {
                              extra: {
                                request: JSON.stringify(t),
                                response: k,
                              },
                            }
                          ),
                        (0, q.showNotification)({
                          id: "1",
                          title: "Error while submitting",
                          message: j,
                          type: "error",
                        }))
                      : ((0, m.pr)(
                          (0, a.Z)(
                            {
                              action: "submit",
                              category: "book_form",
                              value: 1,
                              label: o,
                            },
                            p
                          )
                        ),
                        (N = Z.body.data),
                        (D = N.inventory_id),
                        (I = N.uuid),
                        (S = N.data_formatted.lead_uuid),
                        (C = W()),
                        (O = document.location.origin),
                        (Y = ""
                          .concat(O, "/forms/submit?lead_uuid=")
                          .concat(S, "&inventory_id=")
                          .concat(D, "&form_uuid=")
                          .concat(I, "&form_page_url=")
                          .concat(O)),
                        C.bookform_source &&
                          (Y += "&bookform_source=".concat(C.bookform_source)),
                        "function" == typeof gtag_report_conversion_3 &&
                          ((
                            null === s ||
                            void 0 === s ||
                            null === (x = s.current) ||
                            void 0 === x
                              ? void 0
                              : x.currency
                          )
                            ? gtag_report_conversion_3(
                                void 0,
                                s.current.currency,
                                s.current.amount
                              )
                            : y.r.error(
                                "error in getting currency in inventory id ".concat(
                                  D,
                                  " "
                                )
                              )),
                        d && d(),
                        S
                          ? J(S, function (e) {
                              return V(e, _, I, Y, C);
                            })
                          : (window.location.href = Y)),
                    [2]
                  );
              }
              var B;
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        G = function (e) {
          var t = e || {},
            n = t.unit_type,
            r = t.inventory_type;
          return "independent_house" === n && "entire_place" === r;
        };
      function L(e, t, n, r, a) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = (0, r.Z)(function (e, t, n, r, u) {
          var s, c, d, _, v, f, p, h, m;
          return (0, l.__generator)(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  l.trys.push([0, 6, , 7]),
                  [
                    4,
                    e.getData().then(function (e) {
                      return e.flat();
                    }),
                  ]
                );
              case 1:
                return (
                  (s = l.sent()),
                  (c = s.findIndex(function (e) {
                    return (
                      (null === e || void 0 === e
                        ? void 0
                        : e.canonicalName) === r
                    );
                  })),
                  t.p,
                  t.region,
                  t.region_canonical_name,
                  (d = (0, i.Z)(t, ["p", "region", "region_canonical_name"])),
                  c > -1
                    ? ((_ = s[c]),
                      (v = _.id),
                      (f = (0, i.Z)(_, ["id"])),
                      (p = (0, o.Z)((0, a.Z)({}, f), {
                        url: u || window.location.href,
                        filters: d,
                      })),
                      [4, e.updateData(v, p)])
                    : [3, 3]
                );
              case 2:
                return l.sent(), [3, 5];
              case 3:
                return (
                  (h = {
                    url: u || window.location.href,
                    canonicalName: r,
                    name: n,
                    filters: d,
                  }),
                  [4, e.addDataWithLimit(h)]
                );
              case 4:
                l.sent(), (l.label = 5);
              case 5:
                return [3, 7];
              case 6:
                return (
                  (m = l.sent()),
                  console.error("Error adding new data to IndexedDB:", m),
                  [3, 7]
                );
              case 7:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      var V = (function () {
          var e = (0, r.Z)(function (e, t, n, r, a) {
            var o, i, u, s, c;
            return (0, l.__generator)(this, function (l) {
              switch (l.label) {
                case 0:
                  return (0, w.ob)(t) &&
                    !(null === e || void 0 === e
                      ? void 0
                      : e.payments_success_present)
                    ? ((s = {}),
                      (null === e || void 0 === e ? void 0 : e.uuid) &&
                        (s.lead_uuid = e.uuid),
                      (null === e ||
                      void 0 === e ||
                      null === (o = e.user_details) ||
                      void 0 === o
                        ? void 0
                        : o.name) && (s.name = e.user_details.name),
                      (null === e ||
                      void 0 === e ||
                      null === (i = e.user_details) ||
                      void 0 === i
                        ? void 0
                        : i.email) && (s.email = e.user_details.email),
                      (null === e ||
                      void 0 === e ||
                      null === (u = e.user_details) ||
                      void 0 === u
                        ? void 0
                        : u.phone_details) &&
                        (s.phone = JSON.stringify({
                          country_code:
                            e.user_details.phone_details.country_code,
                          international:
                            e.user_details.phone_details.international,
                        })),
                      (c = (0, w.bJ)(t, s)),
                      ["enquire_property", "book_tenancy"].includes(
                        null === a || void 0 === a ? void 0 : a.bookform_source
                      ) &&
                        (c += "&payment_source=".concat(
                          {
                            enquire_property:
                              "clicked_book_enquire_now_property",
                            book_tenancy: "clicked_book_tenancy_room",
                          }[a.bookform_source]
                        )),
                      (function (e, t) {
                        var n = JSON.parse(
                          localStorage.getItem("BOOK_FORM") || {}
                        );
                        if (
                          (null === e || void 0 === e
                            ? void 0
                            : e.user_details) &&
                          n
                        ) {
                          var r,
                            a,
                            o,
                            i,
                            u,
                            l,
                            s =
                              (null === e ||
                              void 0 === e ||
                              null === (r = e.user_details) ||
                              void 0 === r
                                ? void 0
                                : r.email) ||
                              n["user_details/email"] ||
                              "",
                            c =
                              (null === e ||
                              void 0 === e ||
                              null === (a = e.user_details) ||
                              void 0 === a ||
                              null === (o = a.phone_details) ||
                              void 0 === o
                                ? void 0
                                : o.country_code) ||
                              (null === (i = n["user_details/phone_code"]) ||
                              void 0 === i
                                ? void 0
                                : i.split("+")[1]) ||
                              "",
                            d =
                              (null === e ||
                              void 0 === e ||
                              null === (u = e.user_details) ||
                              void 0 === u ||
                              null === (l = u.phone_details) ||
                              void 0 === l
                                ? void 0
                                : l.national) ||
                              n["user_details/phone"] ||
                              "";
                          (0, m.pr)({
                            phone: d,
                            email: s,
                            country_code: c,
                            action: "success",
                            form_id: t,
                            category: "book_form",
                          });
                        }
                        (0, m.cQ)({
                          action: "book_form_submit",
                          category: "book_form",
                        }),
                          "undefined" !== typeof fbq &&
                            null !== fbq &&
                            (fbq(
                              "trackCustom",
                              "conversion_book_form",
                              {},
                              { eventID: t }
                            ),
                            fbq("track", "SubmitApplication")),
                          "undefined" !== typeof Moengage &&
                            null !== Moengage &&
                            Moengage.track_event("book_form_complete");
                      })(e, n),
                      [4, (0, m._v)(1e3)])
                    : [3, 2];
                case 1:
                  return l.sent(), (window.location.href = c), [3, 3];
                case 2:
                  (window.location.href = r), (l.label = 3);
                case 3:
                  return [2];
              }
            });
          });
          return function (t, n, r, a, o) {
            return e.apply(this, arguments);
          };
        })(),
        J = function (e, t) {
          var n = { url_path: "/api/v0/leads/", params: {} };
          (n.params.methods = "payments_success_present,inventory_root"),
            (n.params.cache = "false"),
            d.Z.emit(_.mp),
            (0, b.Hn)(e, n, {
              success: function (e) {
                t(e.data);
              },
              failure: function (e) {
                y.r.log(e);
              },
              done: function () {
                d.Z.emit(_.IQ);
              },
            });
        },
        W = function () {
          var e = {},
            t = new URL(window.location.href),
            n = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, i = t.searchParams.entries()[Symbol.iterator]();
              !(n = (o = i.next()).done);
              n = !0
            ) {
              var l = (0, u.Z)(o.value, 2),
                s = l[0],
                c = l[1];
              e[s] = c;
            }
          } catch (d) {
            (r = !0), (a = d);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (r) throw a;
            }
          }
          return e;
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/6101-a8b4fe2f416a52a8.js.map
