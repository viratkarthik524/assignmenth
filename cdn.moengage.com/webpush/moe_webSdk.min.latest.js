/*! For license information please see sdk.js.LICENSE.txt */
(() => {
  var e = {
      483: (e, t, n) => {
        e.exports = (function e(t, n, i) {
          function a(s, o) {
            if (!n[s]) {
              if (!t[s]) {
                if (r) return r(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
              }
              (l = n[s] = { exports: {} }),
                t[s][0].call(
                  l.exports,
                  function (e) {
                    return a(t[s][1][e] || e);
                  },
                  l,
                  l.exports,
                  e,
                  t,
                  n,
                  i
                );
            }
            return n[s].exports;
          }
          for (var r = void 0, s = 0; s < i.length; s++) a(i[s]);
          return a;
        })(
          {
            1: [
              function (e, t, i) {
                (function (e) {
                  "use strict";
                  var n,
                    i,
                    a,
                    r,
                    s = e.MutationObserver || e.WebKitMutationObserver,
                    o = s
                      ? ((n = 0),
                        (s = new s(c)),
                        (i = e.document.createTextNode("")),
                        s.observe(i, { characterData: !0 }),
                        function () {
                          i.data = n = ++n % 2;
                        })
                      : e.setImmediate || void 0 === e.MessageChannel
                      ? "document" in e &&
                        "onreadystatechange" in
                          e.document.createElement("script")
                        ? function () {
                            var t = e.document.createElement("script");
                            (t.onreadystatechange = function () {
                              c(),
                                (t.onreadystatechange = null),
                                t.parentNode.removeChild(t),
                                (t = null);
                            }),
                              e.document.documentElement.appendChild(t);
                          }
                        : function () {
                            setTimeout(c, 0);
                          }
                      : (((a = new e.MessageChannel()).port1.onmessage = c),
                        function () {
                          a.port2.postMessage(0);
                        }),
                    l = [];
                  function c() {
                    var e, t;
                    r = !0;
                    for (var n = l.length; n; ) {
                      for (t = l, l = [], e = -1; ++e < n; ) t[e]();
                      n = l.length;
                    }
                    r = !1;
                  }
                  t.exports = function (e) {
                    1 !== l.push(e) || r || o();
                  };
                }.call(
                  this,
                  void 0 !== n.g
                    ? n.g
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              {},
            ],
            2: [
              function (e, t, n) {
                "use strict";
                var i = e(1);
                function a() {}
                var r = {},
                  s = ["REJECTED"],
                  o = ["FULFILLED"],
                  l = ["PENDING"];
                function c(e) {
                  if ("function" != typeof e)
                    throw new TypeError("resolver must be a function");
                  (this.state = l),
                    (this.queue = []),
                    (this.outcome = void 0),
                    e !== a && h(this, e);
                }
                function d(e, t, n) {
                  (this.promise = e),
                    "function" == typeof t &&
                      ((this.onFulfilled = t),
                      (this.callFulfilled = this.otherCallFulfilled)),
                    "function" == typeof n &&
                      ((this.onRejected = n),
                      (this.callRejected = this.otherCallRejected));
                }
                function u(e, t, n) {
                  i(function () {
                    var i;
                    try {
                      i = t(n);
                    } catch (i) {
                      return r.reject(e, i);
                    }
                    i === e
                      ? r.reject(
                          e,
                          new TypeError("Cannot resolve promise with itself")
                        )
                      : r.resolve(e, i);
                  });
                }
                function g(e) {
                  var t = e && e.then;
                  if (
                    e &&
                    ("object" == typeof e || "function" == typeof e) &&
                    "function" == typeof t
                  )
                    return function () {
                      t.apply(e, arguments);
                    };
                }
                function h(e, t) {
                  var n = !1;
                  function i(t) {
                    n || ((n = !0), r.reject(e, t));
                  }
                  function a(t) {
                    n || ((n = !0), r.resolve(e, t));
                  }
                  var s = p(function () {
                    t(a, i);
                  });
                  "error" === s.status && i(s.value);
                }
                function p(e, t) {
                  var n = {};
                  try {
                    (n.value = e(t)), (n.status = "success");
                  } catch (e) {
                    (n.status = "error"), (n.value = e);
                  }
                  return n;
                }
                ((t.exports = c).prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                  (c.prototype.then = function (e, t) {
                    if (
                      ("function" != typeof e && this.state === o) ||
                      ("function" != typeof t && this.state === s)
                    )
                      return this;
                    var n = new this.constructor(a);
                    return (
                      this.state !== l
                        ? u(n, this.state === o ? e : t, this.outcome)
                        : this.queue.push(new d(n, e, t)),
                      n
                    );
                  }),
                  (d.prototype.callFulfilled = function (e) {
                    r.resolve(this.promise, e);
                  }),
                  (d.prototype.otherCallFulfilled = function (e) {
                    u(this.promise, this.onFulfilled, e);
                  }),
                  (d.prototype.callRejected = function (e) {
                    r.reject(this.promise, e);
                  }),
                  (d.prototype.otherCallRejected = function (e) {
                    u(this.promise, this.onRejected, e);
                  }),
                  (r.resolve = function (e, t) {
                    var n = p(g, t);
                    if ("error" === n.status) return r.reject(e, n.value);
                    if ((n = n.value)) h(e, n);
                    else {
                      (e.state = o), (e.outcome = t);
                      for (var i = -1, a = e.queue.length; ++i < a; )
                        e.queue[i].callFulfilled(t);
                    }
                    return e;
                  }),
                  (r.reject = function (e, t) {
                    (e.state = s), (e.outcome = t);
                    for (var n = -1, i = e.queue.length; ++n < i; )
                      e.queue[n].callRejected(t);
                    return e;
                  }),
                  (c.resolve = function (e) {
                    return e instanceof this ? e : r.resolve(new this(a), e);
                  }),
                  (c.reject = function (e) {
                    var t = new this(a);
                    return r.reject(t, e);
                  }),
                  (c.all = function (e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError("must be an array"));
                    var n = e.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (
                      var s = new Array(n), o = 0, l = -1, c = new this(a);
                      ++l < n;

                    )
                      !(function (e, a) {
                        t.resolve(e).then(
                          function (e) {
                            (s[a] = e),
                              ++o !== n || i || ((i = !0), r.resolve(c, s));
                          },
                          function (e) {
                            i || ((i = !0), r.reject(c, e));
                          }
                        );
                      })(e[l], l);
                    return c;
                  }),
                  (c.race = function (e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e))
                      return this.reject(new TypeError("must be an array"));
                    var n = e.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (var s = -1, o = new this(a); ++s < n; )
                      !(function (e) {
                        t.resolve(e).then(
                          function (e) {
                            i || ((i = !0), r.resolve(o, e));
                          },
                          function (e) {
                            i || ((i = !0), r.reject(o, e));
                          }
                        );
                      })(e[s]);
                    return o;
                  });
              },
              { 1: 1 },
            ],
            3: [
              function (e, t, i) {
                (function (t) {
                  "use strict";
                  "function" != typeof t.Promise && (t.Promise = e(2));
                }.call(
                  this,
                  void 0 !== n.g
                    ? n.g
                    : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : {}
                ));
              },
              { 2: 2 },
            ],
            4: [
              function (e, t, n) {
                "use strict";
                var i =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  a = (function () {
                    try {
                      if ("undefined" != typeof indexedDB) return indexedDB;
                      if ("undefined" != typeof webkitIndexedDB)
                        return webkitIndexedDB;
                      if ("undefined" != typeof mozIndexedDB)
                        return mozIndexedDB;
                      if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                      if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                    } catch (e) {
                      return;
                    }
                  })();
                function r(e, t) {
                  (e = e || []), (t = t || {});
                  try {
                    return new Blob(e, t);
                  } catch (a) {
                    if ("TypeError" !== a.name) throw a;
                    for (
                      var n = new (
                          "undefined" != typeof BlobBuilder
                            ? BlobBuilder
                            : "undefined" != typeof MSBlobBuilder
                            ? MSBlobBuilder
                            : "undefined" != typeof MozBlobBuilder
                            ? MozBlobBuilder
                            : WebKitBlobBuilder
                        )(),
                        i = 0;
                      i < e.length;
                      i += 1
                    )
                      n.append(e[i]);
                    return n.getBlob(t.type);
                  }
                }
                "undefined" == typeof Promise && e(3);
                var s = Promise;
                function o(e, t) {
                  t &&
                    e.then(
                      function (e) {
                        t(null, e);
                      },
                      function (e) {
                        t(e);
                      }
                    );
                }
                function l(e, t, n) {
                  "function" == typeof t && e.then(t),
                    "function" == typeof n && e.catch(n);
                }
                function c(e) {
                  return (
                    "string" != typeof e &&
                      (console.warn(
                        e + " used as a key, but it is not a string."
                      ),
                      (e = String(e))),
                    e
                  );
                }
                function d() {
                  if (
                    arguments.length &&
                    "function" == typeof arguments[arguments.length - 1]
                  )
                    return arguments[arguments.length - 1];
                }
                var u = "local-forage-detect-blob-support",
                  g = void 0,
                  h = {},
                  p = Object.prototype.toString,
                  m = "readonly",
                  f = "readwrite";
                function v(e) {
                  return "boolean" == typeof g
                    ? s.resolve(g)
                    : ((t = e),
                      new s(function (e) {
                        var n = t.transaction(u, f),
                          i = r([""]);
                        n.objectStore(u).put(i, "key"),
                          (n.onabort = function (t) {
                            t.preventDefault(), t.stopPropagation(), e(!1);
                          }),
                          (n.oncomplete = function () {
                            var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                              n = navigator.userAgent.match(/Edge\//);
                            e(n || !t || 43 <= parseInt(t[1], 10));
                          });
                      })
                        .catch(function () {
                          return !1;
                        })
                        .then(function (e) {
                          return (g = e);
                        }));
                  var t;
                }
                function S(e) {
                  e = h[e.name];
                  var t = {};
                  (t.promise = new s(function (e, n) {
                    (t.resolve = e), (t.reject = n);
                  })),
                    e.deferredOperations.push(t),
                    e.dbReady
                      ? (e.dbReady = e.dbReady.then(function () {
                          return t.promise;
                        }))
                      : (e.dbReady = t.promise);
                }
                function E(e) {
                  return (
                    (e = h[e.name].deferredOperations.pop()) &&
                    (e.resolve(), e.promise)
                  );
                }
                function _(e, t) {
                  if ((e = h[e.name].deferredOperations.pop()))
                    return e.reject(t), e.promise;
                }
                function b(e, t) {
                  return new s(function (n, i) {
                    if (
                      ((h[e.name] = h[e.name] || {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: [],
                      }),
                      e.db)
                    ) {
                      if (!t) return n(e.db);
                      S(e), e.db.close();
                    }
                    var r = [e.name];
                    t && r.push(e.version);
                    var s = a.open.apply(a, r);
                    t &&
                      (s.onupgradeneeded = function (t) {
                        var n = s.result;
                        try {
                          n.createObjectStore(e.storeName),
                            t.oldVersion <= 1 && n.createObjectStore(u);
                        } catch (n) {
                          if ("ConstraintError" !== n.name) throw n;
                          console.warn(
                            'The database "' +
                              e.name +
                              '" has been upgraded from version ' +
                              t.oldVersion +
                              " to version " +
                              t.newVersion +
                              ', but the storage "' +
                              e.storeName +
                              '" already exists.'
                          );
                        }
                      }),
                      (s.onerror = function (e) {
                        e.preventDefault(), i(s.error);
                      }),
                      (s.onsuccess = function () {
                        n(s.result), E(e);
                      });
                  });
                }
                function y(e) {
                  return b(e, !1);
                }
                function T(e) {
                  return b(e, !0);
                }
                function I(e, t) {
                  if (!e.db) return 1;
                  var n = !e.db.objectStoreNames.contains(e.storeName),
                    i = e.version < e.db.version,
                    a = e.version > e.db.version;
                  return (
                    i &&
                      (e.version !== t &&
                        console.warn(
                          'The database "' +
                            e.name +
                            "\" can't be downgraded from version " +
                            e.db.version +
                            " to version " +
                            e.version +
                            "."
                        ),
                      (e.version = e.db.version)),
                    (a || n) &&
                      (!n ||
                        ((n = e.db.version + 1) > e.version && (e.version = n)),
                      1)
                  );
                }
                function A(e) {
                  return r(
                    [
                      (function (e) {
                        for (
                          var t = e.length,
                            n = new ArrayBuffer(t),
                            i = new Uint8Array(n),
                            a = 0;
                          a < t;
                          a++
                        )
                          i[a] = e.charCodeAt(a);
                        return n;
                      })(atob(e.data)),
                    ],
                    { type: e.type }
                  );
                }
                function w(e) {
                  return e && e.__local_forage_encoded_blob;
                }
                function O(e) {
                  var t = this,
                    n = t._initReady().then(function () {
                      var e = h[t._dbInfo.name];
                      if (e && e.dbReady) return e.dbReady;
                    });
                  return l(n, e, e), n;
                }
                function D(e, t, n, i) {
                  void 0 === i && (i = 1);
                  try {
                    var a = e.db.transaction(e.storeName, t);
                    n(null, a);
                  } catch (a) {
                    if (
                      0 < i &&
                      (!e.db ||
                        "InvalidStateError" === a.name ||
                        "NotFoundError" === a.name)
                    )
                      return s
                        .resolve()
                        .then(function () {
                          if (
                            !e.db ||
                            ("NotFoundError" === a.name &&
                              !e.db.objectStoreNames.contains(e.storeName) &&
                              e.version <= e.db.version)
                          )
                            return e.db && (e.version = e.db.version + 1), T(e);
                        })
                        .then(function () {
                          return (function (e) {
                            S(e);
                            for (
                              var t = h[e.name], n = t.forages, i = 0;
                              i < n.length;
                              i++
                            ) {
                              var a = n[i];
                              a._dbInfo.db &&
                                (a._dbInfo.db.close(), (a._dbInfo.db = null));
                            }
                            return (
                              (e.db = null),
                              y(e)
                                .then(function (t) {
                                  return (e.db = t), I(e) ? T(e) : t;
                                })
                                .then(function (i) {
                                  e.db = t.db = i;
                                  for (var a = 0; a < n.length; a++)
                                    n[a]._dbInfo.db = i;
                                })
                                .catch(function (t) {
                                  throw (_(e, t), t);
                                })
                            );
                          })(e).then(function () {
                            D(e, t, n, i - 1);
                          });
                        })
                        .catch(n);
                    n(a);
                  }
                }
                var C = {
                    _driver: "asyncStorage",
                    _initStorage: function (e) {
                      var t = this,
                        n = { db: null };
                      if (e) for (var i in e) n[i] = e[i];
                      var a = h[n.name];
                      a ||
                        ((a = {
                          forages: [],
                          db: null,
                          dbReady: null,
                          deferredOperations: [],
                        }),
                        (h[n.name] = a)),
                        a.forages.push(t),
                        t._initReady ||
                          ((t._initReady = t.ready), (t.ready = O));
                      var r = [];
                      function o() {
                        return s.resolve();
                      }
                      for (var l = 0; l < a.forages.length; l++) {
                        var c = a.forages[l];
                        c !== t && r.push(c._initReady().catch(o));
                      }
                      var d = a.forages.slice(0);
                      return s
                        .all(r)
                        .then(function () {
                          return (n.db = a.db), y(n);
                        })
                        .then(function (e) {
                          return (
                            (n.db = e),
                            I(n, t._defaultConfig.version) ? T(n) : e
                          );
                        })
                        .then(function (e) {
                          (n.db = a.db = e), (t._dbInfo = n);
                          for (var i = 0; i < d.length; i++) {
                            var r = d[i];
                            r !== t &&
                              ((r._dbInfo.db = n.db),
                              (r._dbInfo.version = n.version));
                          }
                        });
                    },
                    _support: (function () {
                      try {
                        if (!a) return !1;
                        var e =
                            "undefined" != typeof openDatabase &&
                            /(Safari|iPhone|iPad|iPod)/.test(
                              navigator.userAgent
                            ) &&
                            !/Chrome/.test(navigator.userAgent) &&
                            !/BlackBerry/.test(navigator.platform),
                          t =
                            "function" == typeof fetch &&
                            -1 !== fetch.toString().indexOf("[native code");
                        return (
                          (!e || t) &&
                          "undefined" != typeof indexedDB &&
                          "undefined" != typeof IDBKeyRange
                        );
                      } catch (e) {
                        return !1;
                      }
                    })(),
                    iterate: function (e, t) {
                      var n = this,
                        i = new s(function (t, i) {
                          n.ready()
                            .then(function () {
                              D(n._dbInfo, m, function (a, r) {
                                if (a) return i(a);
                                try {
                                  var s = r
                                      .objectStore(n._dbInfo.storeName)
                                      .openCursor(),
                                    o = 1;
                                  (s.onsuccess = function () {
                                    var n,
                                      i = s.result;
                                    i
                                      ? (w((n = i.value)) && (n = A(n)),
                                        void 0 !== (n = e(n, i.key, o++))
                                          ? t(n)
                                          : i.continue())
                                      : t();
                                  }),
                                    (s.onerror = function () {
                                      i(s.error);
                                    });
                                } catch (a) {
                                  i(a);
                                }
                              });
                            })
                            .catch(i);
                        });
                      return o(i, t), i;
                    },
                    getItem: function (e, t) {
                      var n = this;
                      e = c(e);
                      var i = new s(function (t, i) {
                        n.ready()
                          .then(function () {
                            D(n._dbInfo, m, function (a, r) {
                              if (a) return i(a);
                              try {
                                var s = r
                                  .objectStore(n._dbInfo.storeName)
                                  .get(e);
                                (s.onsuccess = function () {
                                  var e = s.result;
                                  w((e = void 0 === e ? null : e)) &&
                                    (e = A(e)),
                                    t(e);
                                }),
                                  (s.onerror = function () {
                                    i(s.error);
                                  });
                              } catch (a) {
                                i(a);
                              }
                            });
                          })
                          .catch(i);
                      });
                      return o(i, t), i;
                    },
                    setItem: function (e, t, n) {
                      var i = this;
                      e = c(e);
                      var a = new s(function (n, a) {
                        var r;
                        i.ready()
                          .then(function () {
                            return (
                              (r = i._dbInfo),
                              "[object Blob]" === p.call(t)
                                ? v(r.db).then(function (e) {
                                    return e
                                      ? t
                                      : ((n = t),
                                        new s(function (e, t) {
                                          var i = new FileReader();
                                          (i.onerror = t),
                                            (i.onloadend = function (t) {
                                              (t = btoa(t.target.result || "")),
                                                e({
                                                  __local_forage_encoded_blob:
                                                    !0,
                                                  data: t,
                                                  type: n.type,
                                                });
                                            }),
                                            i.readAsBinaryString(n);
                                        }));
                                    var n;
                                  })
                                : t
                            );
                          })
                          .then(function (t) {
                            D(i._dbInfo, f, function (r, s) {
                              if (r) return a(r);
                              try {
                                var o = s.objectStore(i._dbInfo.storeName);
                                null === t && (t = void 0);
                                var l = o.put(t, e);
                                (s.oncomplete = function () {
                                  n((t = void 0 === t ? null : t));
                                }),
                                  (s.onabort = s.onerror =
                                    function () {
                                      var e = l.error || l.transaction.error;
                                      a(e);
                                    });
                              } catch (r) {
                                a(r);
                              }
                            });
                          })
                          .catch(a);
                      });
                      return o(a, n), a;
                    },
                    removeItem: function (e, t) {
                      var n = this;
                      e = c(e);
                      var i = new s(function (t, i) {
                        n.ready()
                          .then(function () {
                            D(n._dbInfo, f, function (a, r) {
                              if (a) return i(a);
                              try {
                                var s = r
                                  .objectStore(n._dbInfo.storeName)
                                  .delete(e);
                                (r.oncomplete = function () {
                                  t();
                                }),
                                  (r.onerror = function () {
                                    i(s.error);
                                  }),
                                  (r.onabort = function () {
                                    var e = s.error || s.transaction.error;
                                    i(e);
                                  });
                              } catch (a) {
                                i(a);
                              }
                            });
                          })
                          .catch(i);
                      });
                      return o(i, t), i;
                    },
                    clear: function (e) {
                      var t = this,
                        n = new s(function (e, n) {
                          t.ready()
                            .then(function () {
                              D(t._dbInfo, f, function (i, a) {
                                if (i) return n(i);
                                try {
                                  var r = a
                                    .objectStore(t._dbInfo.storeName)
                                    .clear();
                                  (a.oncomplete = function () {
                                    e();
                                  }),
                                    (a.onabort = a.onerror =
                                      function () {
                                        var e = r.error || r.transaction.error;
                                        n(e);
                                      });
                                } catch (i) {
                                  n(i);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return o(n, e), n;
                    },
                    length: function (e) {
                      var t = this,
                        n = new s(function (e, n) {
                          t.ready()
                            .then(function () {
                              D(t._dbInfo, m, function (i, a) {
                                if (i) return n(i);
                                try {
                                  var r = a
                                    .objectStore(t._dbInfo.storeName)
                                    .count();
                                  (r.onsuccess = function () {
                                    e(r.result);
                                  }),
                                    (r.onerror = function () {
                                      n(r.error);
                                    });
                                } catch (i) {
                                  n(i);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return o(n, e), n;
                    },
                    key: function (e, t) {
                      var n = this,
                        i = new s(function (t, i) {
                          e < 0
                            ? t(null)
                            : n
                                .ready()
                                .then(function () {
                                  D(n._dbInfo, m, function (a, r) {
                                    if (a) return i(a);
                                    try {
                                      var s = r.objectStore(
                                          n._dbInfo.storeName
                                        ),
                                        o = !1,
                                        l = s.openCursor();
                                      (l.onsuccess = function () {
                                        var n = l.result;
                                        n
                                          ? 0 === e || o
                                            ? t(n.key)
                                            : ((o = !0), n.advance(e))
                                          : t(null);
                                      }),
                                        (l.onerror = function () {
                                          i(l.error);
                                        });
                                    } catch (a) {
                                      i(a);
                                    }
                                  });
                                })
                                .catch(i);
                        });
                      return o(i, t), i;
                    },
                    keys: function (e) {
                      var t = this,
                        n = new s(function (e, n) {
                          t.ready()
                            .then(function () {
                              D(t._dbInfo, m, function (i, a) {
                                if (i) return n(i);
                                try {
                                  var r = a
                                      .objectStore(t._dbInfo.storeName)
                                      .openCursor(),
                                    s = [];
                                  (r.onsuccess = function () {
                                    var t = r.result;
                                    t ? (s.push(t.key), t.continue()) : e(s);
                                  }),
                                    (r.onerror = function () {
                                      n(r.error);
                                    });
                                } catch (i) {
                                  n(i);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return o(n, e), n;
                    },
                    dropInstance: function (e, t) {
                      t = d.apply(this, arguments);
                      var n,
                        i = this.config();
                      return (
                        (e = ("function" != typeof e && e) || {}).name ||
                          ((e.name = e.name || i.name),
                          (e.storeName = e.storeName || i.storeName)),
                        o(
                          (n = e.name
                            ? ((n =
                                e.name === i.name && this._dbInfo.db
                                  ? s.resolve(this._dbInfo.db)
                                  : y(e).then(function (t) {
                                      var n = h[e.name],
                                        i = n.forages;
                                      n.db = t;
                                      for (var a = 0; a < i.length; a++)
                                        i[a]._dbInfo.db = t;
                                      return t;
                                    })),
                              e.storeName
                                ? n.then(function (t) {
                                    if (
                                      t.objectStoreNames.contains(e.storeName)
                                    ) {
                                      var n = t.version + 1;
                                      S(e);
                                      var i = h[e.name],
                                        r = i.forages;
                                      t.close();
                                      for (var o = 0; o < r.length; o++) {
                                        var l = r[o];
                                        (l._dbInfo.db = null),
                                          (l._dbInfo.version = n);
                                      }
                                      return new s(function (t, i) {
                                        var r = a.open(e.name, n);
                                        (r.onerror = function (e) {
                                          r.result.close(), i(e);
                                        }),
                                          (r.onupgradeneeded = function () {
                                            r.result.deleteObjectStore(
                                              e.storeName
                                            );
                                          }),
                                          (r.onsuccess = function () {
                                            var e = r.result;
                                            e.close(), t(e);
                                          });
                                      })
                                        .then(function (e) {
                                          i.db = e;
                                          for (var t = 0; t < r.length; t++) {
                                            var n = r[t];
                                            (n._dbInfo.db = e), E(n._dbInfo);
                                          }
                                        })
                                        .catch(function (t) {
                                          throw (
                                            ((_(e, t) || s.resolve()).catch(
                                              function () {}
                                            ),
                                            t)
                                          );
                                        });
                                    }
                                  })
                                : n.then(function (t) {
                                    S(e);
                                    var n = h[e.name],
                                      i = n.forages;
                                    t.close();
                                    for (var r = 0; r < i.length; r++)
                                      i[r]._dbInfo.db = null;
                                    return new s(function (t, n) {
                                      var i = a.deleteDatabase(e.name);
                                      (i.onerror = i.onblocked =
                                        function (e) {
                                          var t = i.result;
                                          t && t.close(), n(e);
                                        }),
                                        (i.onsuccess = function () {
                                          var e = i.result;
                                          e && e.close(), t(e);
                                        });
                                    })
                                      .then(function (e) {
                                        n.db = e;
                                        for (var t = 0; t < i.length; t++)
                                          E(i[t]._dbInfo);
                                      })
                                      .catch(function (t) {
                                        throw (
                                          ((_(e, t) || s.resolve()).catch(
                                            function () {}
                                          ),
                                          t)
                                        );
                                      });
                                  }))
                            : s.reject("Invalid arguments")),
                          t
                        ),
                        n
                      );
                    },
                  },
                  P =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  R = /^~~local_forage_type~([^~]+)~/,
                  N = "__lfsc__:",
                  M = N.length,
                  k = "arbf",
                  L = "blob",
                  x = M + k.length,
                  B = Object.prototype.toString;
                function W(e) {
                  var t,
                    n,
                    i,
                    a,
                    r = 0.75 * e.length,
                    s = e.length,
                    o = 0;
                  "=" === e[e.length - 1] &&
                    (r--, "=" === e[e.length - 2] && r--),
                    (r = new ArrayBuffer(r));
                  for (var l = new Uint8Array(r), c = 0; c < s; c += 4)
                    (t = P.indexOf(e[c])),
                      (n = P.indexOf(e[c + 1])),
                      (i = P.indexOf(e[c + 2])),
                      (a = P.indexOf(e[c + 3])),
                      (l[o++] = (t << 2) | (n >> 4)),
                      (l[o++] = ((15 & n) << 4) | (i >> 2)),
                      (l[o++] = ((3 & i) << 6) | (63 & a));
                  return r;
                }
                function U(e) {
                  for (
                    var t = new Uint8Array(e), n = "", i = 0;
                    i < t.length;
                    i += 3
                  )
                    (n += P[t[i] >> 2]),
                      (n += P[((3 & t[i]) << 4) | (t[i + 1] >> 4)]),
                      (n += P[((15 & t[i + 1]) << 2) | (t[i + 2] >> 6)]),
                      (n += P[63 & t[i + 2]]);
                  return (
                    t.length % 3 == 2
                      ? (n = n.substring(0, n.length - 1) + "=")
                      : t.length % 3 == 1 &&
                        (n = n.substring(0, n.length - 2) + "=="),
                    n
                  );
                }
                var H = {
                  serialize: function (e, t) {
                    var n = "";
                    if (
                      (e && (n = B.call(e)),
                      e &&
                        ("[object ArrayBuffer]" === n ||
                          (e.buffer &&
                            "[object ArrayBuffer]" === B.call(e.buffer))))
                    ) {
                      var i,
                        a = N;
                      e instanceof ArrayBuffer
                        ? ((i = e), (a += k))
                        : ((i = e.buffer),
                          "[object Int8Array]" === n
                            ? (a += "si08")
                            : "[object Uint8Array]" === n
                            ? (a += "ui08")
                            : "[object Uint8ClampedArray]" === n
                            ? (a += "uic8")
                            : "[object Int16Array]" === n
                            ? (a += "si16")
                            : "[object Uint16Array]" === n
                            ? (a += "ur16")
                            : "[object Int32Array]" === n
                            ? (a += "si32")
                            : "[object Uint32Array]" === n
                            ? (a += "ui32")
                            : "[object Float32Array]" === n
                            ? (a += "fl32")
                            : "[object Float64Array]" === n
                            ? (a += "fl64")
                            : t(
                                new Error("Failed to get type for BinaryArray")
                              )),
                        t(a + U(i));
                    } else if ("[object Blob]" === n)
                      ((n = new FileReader()).onload = function () {
                        var n =
                          "~~local_forage_type~" +
                          e.type +
                          "~" +
                          U(this.result);
                        t(N + L + n);
                      }),
                        n.readAsArrayBuffer(e);
                    else
                      try {
                        t(JSON.stringify(e));
                      } catch (n) {
                        console.error(
                          "Couldn't convert value into a JSON string: ",
                          e
                        ),
                          t(null, n);
                      }
                  },
                  deserialize: function (e) {
                    if (e.substring(0, M) !== N) return JSON.parse(e);
                    var t,
                      n = e.substring(x),
                      i = e.substring(M, x);
                    i === L &&
                      R.test(n) &&
                      ((t = (e = n.match(R))[1]),
                      (n = n.substring(e[0].length)));
                    var a = W(n);
                    switch (i) {
                      case k:
                        return a;
                      case L:
                        return r([a], { type: t });
                      case "si08":
                        return new Int8Array(a);
                      case "ui08":
                        return new Uint8Array(a);
                      case "uic8":
                        return new Uint8ClampedArray(a);
                      case "si16":
                        return new Int16Array(a);
                      case "ur16":
                        return new Uint16Array(a);
                      case "si32":
                        return new Int32Array(a);
                      case "ui32":
                        return new Uint32Array(a);
                      case "fl32":
                        return new Float32Array(a);
                      case "fl64":
                        return new Float64Array(a);
                      default:
                        throw new Error("Unkown type: " + i);
                    }
                  },
                  stringToBuffer: W,
                  bufferToString: U,
                };
                function F(e, t, n, i) {
                  e.executeSql(
                    "CREATE TABLE IF NOT EXISTS " +
                      t.storeName +
                      " (id INTEGER PRIMARY KEY, key unique, value)",
                    [],
                    n,
                    i
                  );
                }
                function K(e, t, n, i, a, r) {
                  e.executeSql(
                    n,
                    i,
                    a,
                    function (e, s) {
                      s.code === s.SYNTAX_ERR
                        ? e.executeSql(
                            "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                            [t.storeName],
                            function (e, o) {
                              o.rows.length
                                ? r(e, s)
                                : F(
                                    e,
                                    t,
                                    function () {
                                      e.executeSql(n, i, a, r);
                                    },
                                    r
                                  );
                            },
                            r
                          )
                        : r(e, s);
                    },
                    r
                  );
                }
                function G(e, t, n, i) {
                  var a = this;
                  e = c(e);
                  var r = new s(function (r, s) {
                    a.ready()
                      .then(function () {
                        var o = (t = void 0 === t ? null : t),
                          l = a._dbInfo;
                        l.serializer.serialize(t, function (t, c) {
                          c
                            ? s(c)
                            : l.db.transaction(
                                function (n) {
                                  K(
                                    n,
                                    l,
                                    "INSERT OR REPLACE INTO " +
                                      l.storeName +
                                      " (key, value) VALUES (?, ?)",
                                    [e, t],
                                    function () {
                                      r(o);
                                    },
                                    function (e, t) {
                                      s(t);
                                    }
                                  );
                                },
                                function (t) {
                                  t.code === t.QUOTA_ERR &&
                                    (0 < i
                                      ? r(G.apply(a, [e, o, n, i - 1]))
                                      : s(t));
                                }
                              );
                        });
                      })
                      .catch(s);
                  });
                  return o(r, n), r;
                }
                var j = {
                  _driver: "webSQLStorage",
                  _initStorage: function (e) {
                    var t = this,
                      n = { db: null };
                    if (e)
                      for (var i in e)
                        n[i] = "string" != typeof e[i] ? e[i].toString() : e[i];
                    var a = new s(function (e, i) {
                      try {
                        n.db = openDatabase(
                          n.name,
                          String(n.version),
                          n.description,
                          n.size
                        );
                      } catch (e) {
                        return i(e);
                      }
                      n.db.transaction(function (a) {
                        F(
                          a,
                          n,
                          function () {
                            (t._dbInfo = n), e();
                          },
                          function (e, t) {
                            i(t);
                          }
                        );
                      }, i);
                    });
                    return (n.serializer = H), a;
                  },
                  _support: "function" == typeof openDatabase,
                  iterate: function (e, t) {
                    var n = this,
                      i = new s(function (t, i) {
                        n.ready()
                          .then(function () {
                            var a = n._dbInfo;
                            a.db.transaction(function (n) {
                              K(
                                n,
                                a,
                                "SELECT * FROM " + a.storeName,
                                [],
                                function (n, i) {
                                  for (
                                    var r = i.rows, s = r.length, o = 0;
                                    o < s;
                                    o++
                                  ) {
                                    var l = r.item(o),
                                      c =
                                        (c = l.value) &&
                                        a.serializer.deserialize(c);
                                    if (void 0 !== (c = e(c, l.key, o + 1)))
                                      return void t(c);
                                  }
                                  t();
                                },
                                function (e, t) {
                                  i(t);
                                }
                              );
                            });
                          })
                          .catch(i);
                      });
                    return o(i, t), i;
                  },
                  getItem: function (e, t) {
                    var n = this;
                    e = c(e);
                    var i = new s(function (t, i) {
                      n.ready()
                        .then(function () {
                          var a = n._dbInfo;
                          a.db.transaction(function (n) {
                            K(
                              n,
                              a,
                              "SELECT * FROM " +
                                a.storeName +
                                " WHERE key = ? LIMIT 1",
                              [e],
                              function (e, n) {
                                (n =
                                  (n = n.rows.length
                                    ? n.rows.item(0).value
                                    : null) && a.serializer.deserialize(n)),
                                  t(n);
                              },
                              function (e, t) {
                                i(t);
                              }
                            );
                          });
                        })
                        .catch(i);
                    });
                    return o(i, t), i;
                  },
                  setItem: function (e, t, n) {
                    return G.apply(this, [e, t, n, 1]);
                  },
                  removeItem: function (e, t) {
                    var n = this;
                    e = c(e);
                    var i = new s(function (t, i) {
                      n.ready()
                        .then(function () {
                          var a = n._dbInfo;
                          a.db.transaction(function (n) {
                            K(
                              n,
                              a,
                              "DELETE FROM " + a.storeName + " WHERE key = ?",
                              [e],
                              function () {
                                t();
                              },
                              function (e, t) {
                                i(t);
                              }
                            );
                          });
                        })
                        .catch(i);
                    });
                    return o(i, t), i;
                  },
                  clear: function (e) {
                    var t = this,
                      n = new s(function (e, n) {
                        t.ready()
                          .then(function () {
                            var i = t._dbInfo;
                            i.db.transaction(function (t) {
                              K(
                                t,
                                i,
                                "DELETE FROM " + i.storeName,
                                [],
                                function () {
                                  e();
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return o(n, e), n;
                  },
                  length: function (e) {
                    var t = this,
                      n = new s(function (e, n) {
                        t.ready()
                          .then(function () {
                            var i = t._dbInfo;
                            i.db.transaction(function (t) {
                              K(
                                t,
                                i,
                                "SELECT COUNT(key) as c FROM " + i.storeName,
                                [],
                                function (t, n) {
                                  (n = n.rows.item(0).c), e(n);
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return o(n, e), n;
                  },
                  key: function (e, t) {
                    var n = this,
                      i = new s(function (t, i) {
                        n.ready()
                          .then(function () {
                            var a = n._dbInfo;
                            a.db.transaction(function (n) {
                              K(
                                n,
                                a,
                                "SELECT key FROM " +
                                  a.storeName +
                                  " WHERE id = ? LIMIT 1",
                                [e + 1],
                                function (e, n) {
                                  (n = n.rows.length
                                    ? n.rows.item(0).key
                                    : null),
                                    t(n);
                                },
                                function (e, t) {
                                  i(t);
                                }
                              );
                            });
                          })
                          .catch(i);
                      });
                    return o(i, t), i;
                  },
                  keys: function (e) {
                    var t = this,
                      n = new s(function (e, n) {
                        t.ready()
                          .then(function () {
                            var i = t._dbInfo;
                            i.db.transaction(function (t) {
                              K(
                                t,
                                i,
                                "SELECT key FROM " + i.storeName,
                                [],
                                function (t, n) {
                                  for (
                                    var i = [], a = 0;
                                    a < n.rows.length;
                                    a++
                                  )
                                    i.push(n.rows.item(a).key);
                                  e(i);
                                },
                                function (e, t) {
                                  n(t);
                                }
                              );
                            });
                          })
                          .catch(n);
                      });
                    return o(n, e), n;
                  },
                  dropInstance: function (e, t) {
                    t = d.apply(this, arguments);
                    var n = this.config();
                    (e = ("function" != typeof e && e) || {}).name ||
                      ((e.name = e.name || n.name),
                      (e.storeName = e.storeName || n.storeName));
                    var i = this,
                      a = e.name
                        ? new s(function (t) {
                            var a,
                              r =
                                e.name === n.name
                                  ? i._dbInfo.db
                                  : openDatabase(e.name, "", "", 0);
                            e.storeName
                              ? t({ db: r, storeNames: [e.storeName] })
                              : t(
                                  ((a = r),
                                  new s(function (e, t) {
                                    a.transaction(
                                      function (n) {
                                        n.executeSql(
                                          "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                          [],
                                          function (t, n) {
                                            for (
                                              var i = [], r = 0;
                                              r < n.rows.length;
                                              r++
                                            )
                                              i.push(n.rows.item(r).name);
                                            e({ db: a, storeNames: i });
                                          },
                                          function (e, n) {
                                            t(n);
                                          }
                                        );
                                      },
                                      function (e) {
                                        t(e);
                                      }
                                    );
                                  }))
                                );
                          }).then(function (e) {
                            return new s(function (t, n) {
                              e.db.transaction(
                                function (i) {
                                  for (
                                    var a = [], r = 0, o = e.storeNames.length;
                                    r < o;
                                    r++
                                  )
                                    a.push(
                                      (function (e) {
                                        return new s(function (t, n) {
                                          i.executeSql(
                                            "DROP TABLE IF EXISTS " + e,
                                            [],
                                            function () {
                                              t();
                                            },
                                            function (e, t) {
                                              n(t);
                                            }
                                          );
                                        });
                                      })(e.storeNames[r])
                                    );
                                  s.all(a)
                                    .then(function () {
                                      t();
                                    })
                                    .catch(function (e) {
                                      n(e);
                                    });
                                },
                                function (e) {
                                  n(e);
                                }
                              );
                            });
                          })
                        : s.reject("Invalid arguments");
                    return o(a, t), a;
                  },
                };
                function V(e, t) {
                  var n = e.name + "/";
                  return (
                    e.storeName !== t.storeName && (n += e.storeName + "/"), n
                  );
                }
                function Y(e, t) {
                  for (var n, i, a = e.length, r = 0; r < a; ) {
                    if (
                      (n = e[r]) === (i = t) ||
                      ("number" == typeof n &&
                        "number" == typeof i &&
                        isNaN(n) &&
                        isNaN(i))
                    )
                      return 1;
                    r++;
                  }
                }
                e = {
                  _driver: "localStorageWrapper",
                  _initStorage: function (e) {
                    var t = {};
                    if (e) for (var n in e) t[n] = e[n];
                    return (
                      (t.keyPrefix = V(e, this._defaultConfig)),
                      !(function () {
                        var e = "_localforage_support_test";
                        try {
                          return (
                            localStorage.setItem(e, !0),
                            void localStorage.removeItem(e)
                          );
                        } catch (e) {
                          return 1;
                        }
                      })() || 0 < localStorage.length
                        ? (((this._dbInfo = t).serializer = H), s.resolve())
                        : s.reject()
                    );
                  },
                  _support: (function () {
                    try {
                      return (
                        "undefined" != typeof localStorage &&
                        "setItem" in localStorage &&
                        !!localStorage.setItem
                      );
                    } catch (e) {
                      return !1;
                    }
                  })(),
                  iterate: function (e, t) {
                    var n = this,
                      i = n.ready().then(function () {
                        for (
                          var t = n._dbInfo,
                            i = t.keyPrefix,
                            a = i.length,
                            r = localStorage.length,
                            s = 1,
                            o = 0;
                          o < r;
                          o++
                        ) {
                          var l = localStorage.key(o);
                          if (0 === l.indexOf(i)) {
                            var c =
                              (c = localStorage.getItem(l)) &&
                              t.serializer.deserialize(c);
                            if (void 0 !== (c = e(c, l.substring(a), s++)))
                              return c;
                          }
                        }
                      });
                    return o(i, t), i;
                  },
                  getItem: function (e, t) {
                    var n = this;
                    e = c(e);
                    var i = n.ready().then(function () {
                      var t = n._dbInfo,
                        i = localStorage.getItem(t.keyPrefix + e);
                      return i && t.serializer.deserialize(i);
                    });
                    return o(i, t), i;
                  },
                  setItem: function (e, t, n) {
                    var i = this;
                    e = c(e);
                    var a = i.ready().then(function () {
                      var n = (t = void 0 === t ? null : t);
                      return new s(function (a, r) {
                        var s = i._dbInfo;
                        s.serializer.serialize(t, function (t, i) {
                          if (i) r(i);
                          else
                            try {
                              localStorage.setItem(s.keyPrefix + e, t), a(n);
                            } catch (t) {
                              ("QuotaExceededError" !== t.name &&
                                "NS_ERROR_DOM_QUOTA_REACHED" !== t.name) ||
                                r(t),
                                r(t);
                            }
                        });
                      });
                    });
                    return o(a, n), a;
                  },
                  removeItem: function (e, t) {
                    var n = this;
                    e = c(e);
                    var i = n.ready().then(function () {
                      var t = n._dbInfo;
                      localStorage.removeItem(t.keyPrefix + e);
                    });
                    return o(i, t), i;
                  },
                  clear: function (e) {
                    var t = this,
                      n = t.ready().then(function () {
                        for (
                          var e = t._dbInfo.keyPrefix,
                            n = localStorage.length - 1;
                          0 <= n;
                          n--
                        ) {
                          var i = localStorage.key(n);
                          0 === i.indexOf(e) && localStorage.removeItem(i);
                        }
                      });
                    return o(n, e), n;
                  },
                  length: function (e) {
                    var t = this.keys().then(function (e) {
                      return e.length;
                    });
                    return o(t, e), t;
                  },
                  key: function (e, t) {
                    var n = this,
                      i = n.ready().then(function () {
                        var t,
                          i = n._dbInfo;
                        try {
                          t = localStorage.key(e);
                        } catch (i) {
                          t = null;
                        }
                        return t && t.substring(i.keyPrefix.length);
                      });
                    return o(i, t), i;
                  },
                  keys: function (e) {
                    var t = this,
                      n = t.ready().then(function () {
                        for (
                          var e = t._dbInfo,
                            n = localStorage.length,
                            i = [],
                            a = 0;
                          a < n;
                          a++
                        ) {
                          var r = localStorage.key(a);
                          0 === r.indexOf(e.keyPrefix) &&
                            i.push(r.substring(e.keyPrefix.length));
                        }
                        return i;
                      });
                    return o(n, e), n;
                  },
                  dropInstance: function (e, t) {
                    (t = d.apply(this, arguments)),
                      (e = ("function" != typeof e && e) || {}).name ||
                        ((i = this.config()),
                        (e.name = e.name || i.name),
                        (e.storeName = e.storeName || i.storeName));
                    var n = this,
                      i = e.name
                        ? new s(function (t) {
                            e.storeName
                              ? t(V(e, n._defaultConfig))
                              : t(e.name + "/");
                          }).then(function (e) {
                            for (var t = localStorage.length - 1; 0 <= t; t--) {
                              var n = localStorage.key(t);
                              0 === n.indexOf(e) && localStorage.removeItem(n);
                            }
                          })
                        : s.reject("Invalid arguments");
                    return o(i, t), i;
                  },
                };
                var q =
                    Array.isArray ||
                    function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    },
                  z = {},
                  J = {},
                  X = { INDEXEDDB: C, WEBSQL: j, LOCALSTORAGE: e },
                  Q =
                    ((e = [
                      X.INDEXEDDB._driver,
                      X.WEBSQL._driver,
                      X.LOCALSTORAGE._driver,
                    ]),
                    ["dropInstance"]),
                  $ = [
                    "clear",
                    "getItem",
                    "iterate",
                    "key",
                    "keys",
                    "length",
                    "removeItem",
                    "setItem",
                  ].concat(Q),
                  Z = {
                    description: "",
                    driver: e.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1,
                  };
                function ee(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n)
                      for (var i in n)
                        n.hasOwnProperty(i) &&
                          (q(n[i]) ? (e[i] = n[i].slice()) : (e[i] = n[i]));
                  }
                  return e;
                }
                function te(e) {
                  for (var t in ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, te),
                  X)) {
                    var n, i;
                    X.hasOwnProperty(t) &&
                      ((i = (n = X[t])._driver),
                      (this[t] = i),
                      z[i] || this.defineDriver(n));
                  }
                  (this._defaultConfig = ee({}, Z)),
                    (this._config = ee({}, this._defaultConfig, e)),
                    (this._driverSet = null),
                    (this._initDriver = null),
                    (this._ready = !1),
                    (this._dbInfo = null),
                    this._wrapLibraryMethodsWithReady(),
                    this.setDriver(this._config.driver).catch(function () {});
                }
                (e = new ((te.prototype.config = function (e) {
                  if ("object" !== (void 0 === e ? "undefined" : i(e)))
                    return "string" == typeof e
                      ? this._config[e]
                      : this._config;
                  if (this._ready)
                    return new Error(
                      "Can't call config() after localforage has been used."
                    );
                  for (var t in e) {
                    if (
                      ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")),
                      "version" === t && "number" != typeof e[t])
                    )
                      return new Error("Database version must be a number.");
                    this._config[t] = e[t];
                  }
                  return (
                    !("driver" in e && e.driver) ||
                    this.setDriver(this._config.driver)
                  );
                }),
                (te.prototype.defineDriver = function (e, t, n) {
                  var i = new s(function (t, n) {
                    try {
                      var i = e._driver,
                        a = new Error(
                          "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                        );
                      if (!e._driver) return void n(a);
                      for (
                        var r = $.concat("_initStorage"), l = 0, c = r.length;
                        l < c;
                        l++
                      ) {
                        var d = r[l];
                        if ((!Y(Q, d) || e[d]) && "function" != typeof e[d])
                          return void n(a);
                      }
                      !(function () {
                        for (var t = 0, n = Q.length; t < n; t++) {
                          var i = Q[t];
                          e[i] ||
                            (e[i] = (function (e) {
                              return function () {
                                var t = new Error(
                                  "Method " +
                                    e +
                                    " is not implemented by the current driver"
                                );
                                return (
                                  o(
                                    (t = s.reject(t)),
                                    arguments[arguments.length - 1]
                                  ),
                                  t
                                );
                              };
                            })(i));
                        }
                      })();
                      var u = function (n) {
                        z[i] &&
                          console.info("Redefining LocalForage driver: " + i),
                          (z[i] = e),
                          (J[i] = n),
                          t();
                      };
                      "_support" in e
                        ? e._support && "function" == typeof e._support
                          ? e._support().then(u, n)
                          : u(!!e._support)
                        : u(!0);
                    } catch (a) {
                      n(a);
                    }
                  });
                  return l(i, t, n), i;
                }),
                (te.prototype.driver = function () {
                  return this._driver || null;
                }),
                (te.prototype.getDriver = function (e, t, n) {
                  return (
                    l(
                      (e = z[e]
                        ? s.resolve(z[e])
                        : s.reject(new Error("Driver not found."))),
                      t,
                      n
                    ),
                    e
                  );
                }),
                (te.prototype.getSerializer = function (e) {
                  var t = s.resolve(H);
                  return l(t, e), t;
                }),
                (te.prototype.ready = function (e) {
                  var t = this,
                    n = t._driverSet.then(function () {
                      return (
                        null === t._ready && (t._ready = t._initDriver()),
                        t._ready
                      );
                    });
                  return l(n, e, e), n;
                }),
                (te.prototype.setDriver = function (e, t, n) {
                  var i = this;
                  q(e) || (e = [e]);
                  var a = this._getSupportedDrivers(e);
                  function r() {
                    i._config.driver = i.driver();
                  }
                  function o(e) {
                    return (
                      i._extend(e),
                      r(),
                      (i._ready = i._initStorage(i._config)),
                      i._ready
                    );
                  }
                  return (
                    (e =
                      null !== this._driverSet
                        ? this._driverSet.catch(function () {
                            return s.resolve();
                          })
                        : s.resolve()),
                    (this._driverSet = e
                      .then(function () {
                        var e = a[0];
                        return (
                          (i._dbInfo = null),
                          (i._ready = null),
                          i.getDriver(e).then(function (e) {
                            (i._driver = e._driver),
                              r(),
                              i._wrapLibraryMethodsWithReady(),
                              (i._initDriver = (function (e) {
                                return function () {
                                  var t = 0;
                                  return (function n() {
                                    for (; t < e.length; ) {
                                      var a = e[t];
                                      return (
                                        t++,
                                        (i._dbInfo = null),
                                        (i._ready = null),
                                        i.getDriver(a).then(o).catch(n)
                                      );
                                    }
                                    r();
                                    var l = new Error(
                                      "No available storage method found."
                                    );
                                    return (
                                      (i._driverSet = s.reject(l)), i._driverSet
                                    );
                                  })();
                                };
                              })(a));
                          })
                        );
                      })
                      .catch(function () {
                        r();
                        var e = new Error("No available storage method found.");
                        return (i._driverSet = s.reject(e)), i._driverSet;
                      })),
                    l(this._driverSet, t, n),
                    this._driverSet
                  );
                }),
                (te.prototype.supports = function (e) {
                  return !!J[e];
                }),
                (te.prototype._extend = function (e) {
                  ee(this, e);
                }),
                (te.prototype._getSupportedDrivers = function (e) {
                  for (var t = [], n = 0, i = e.length; n < i; n++) {
                    var a = e[n];
                    this.supports(a) && t.push(a);
                  }
                  return t;
                }),
                (te.prototype._wrapLibraryMethodsWithReady = function () {
                  for (var e = 0, t = $.length; e < t; e++)
                    !(function (e, t) {
                      e[t] = function () {
                        var n = arguments;
                        return e.ready().then(function () {
                          return e[t].apply(e, n);
                        });
                      };
                    })(this, $[e]);
                }),
                (te.prototype.createInstance = function (e) {
                  return new te(e);
                }),
                te)()),
                  (t.exports = e);
              },
              { 3: 3 },
            ],
          },
          {},
          [4]
        )(4);
      },
      375: (e, t, n) => {
        let i;
        e.exports =
          "function" == typeof queueMicrotask
            ? queueMicrotask.bind("undefined" != typeof window ? window : n.g)
            : (e) =>
                (i = i || Promise.resolve()).then(e).catch((e) =>
                  setTimeout(() => {
                    throw e;
                  }, 0)
                );
      },
      967: (e, t, n) => {
        e.exports = function (e, t, n) {
          if ("number" != typeof t)
            throw new Error("second argument must be a Number");
          let a,
            r,
            s,
            o,
            l,
            c,
            d = !0;
          function u(e) {
            function t() {
              n && n(e, a), (n = null);
            }
            d ? i(t) : t();
          }
          function g(t, n, i) {
            if (((a[t] = i), n && (l = !0), 0 == --s || n)) u(n);
            else if (!l && c < r) {
              let t;
              o
                ? ((t = o[c]),
                  (c += 1),
                  e[t](function (e, n) {
                    g(t, e, n);
                  }))
                : ((t = c),
                  (c += 1),
                  e[t](function (e, n) {
                    g(t, e, n);
                  }));
            }
          }
          (s = r =
            Array.isArray(e)
              ? ((a = []), e.length)
              : ((o = Object.keys(e)), (a = {}), o.length)),
            (c = t),
            s
              ? o
                ? o.some(function (n, i) {
                    return (
                      e[n](function (e, t) {
                        g(n, e, t);
                      }),
                      i === t - 1
                    );
                  })
                : e.some(function (e, n) {
                    return (
                      e(function (e, t) {
                        g(n, e, t);
                      }),
                      n === t - 1
                    );
                  })
              : u(null),
            (d = !1);
        };
        const i = n(375);
      },
      877: (e, t, n) => {
        var i = n(570),
          a = n(171);
        ((n = a).v1 = i), (n.v4 = a), (e.exports = n);
      },
      327: (e) => {
        for (var t = [], n = 0; n < 256; ++n)
          t[n] = (n + 256).toString(16).substr(1);
        e.exports = function (e, n) {
          var i = n || 0;
          return [
            (n = t)[e[i++]],
            n[e[i++]],
            n[e[i++]],
            n[e[i++]],
            "-",
            n[e[i++]],
            n[e[i++]],
            "-",
            n[e[i++]],
            n[e[i++]],
            "-",
            n[e[i++]],
            n[e[i++]],
            "-",
            n[e[i++]],
            n[e[i++]],
            n[e[i++]],
            n[e[i++]],
            n[e[i++]],
            n[e[+i]],
          ].join("");
        };
      },
      217: (e) => {
        var t,
          n,
          i =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof window.msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto));
        i
          ? ((t = new Uint8Array(16)),
            (e.exports = function () {
              return i(t), t;
            }))
          : ((n = new Array(16)),
            (e.exports = function () {
              for (var e, t = 0; t < 16; t++)
                0 == (3 & t) && (e = 4294967296 * Math.random()),
                  (n[t] = (e >>> ((3 & t) << 3)) & 255);
              return n;
            }));
      },
      570: (e, t, n) => {
        var i,
          a,
          r = n(217),
          s = n(327),
          o = 0,
          l = 0;
        e.exports = function (e, t, n) {
          var c = (t && n) || 0,
            d = t || [],
            u = (e = e || {}).node || i,
            g = void 0 !== e.clockseq ? e.clockseq : a;
          (null != u && null != g) ||
            ((p = r()),
            null == u && (u = i = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
            null == g && (g = a = 16383 & ((p[6] << 8) | p[7])));
          var h = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
            p =
              ((n = void 0 !== e.nsecs ? e.nsecs : l + 1),
              h - o + (n - l) / 1e4);
          if (
            (p < 0 && void 0 === e.clockseq && (g = (g + 1) & 16383),
            1e4 <= (n = (p < 0 || o < h) && void 0 === e.nsecs ? 0 : n))
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (o = h),
            (a = g),
            (n =
              (1e4 * (268435455 & (h += 122192928e5)) + (l = n)) % 4294967296),
            (d[c++] = (n >>> 24) & 255),
            (d[c++] = (n >>> 16) & 255),
            (d[c++] = (n >>> 8) & 255),
            (d[c++] = 255 & n),
            (h = ((h / 4294967296) * 1e4) & 268435455),
            (d[c++] = (h >>> 8) & 255),
            (d[c++] = 255 & h),
            (d[c++] = ((h >>> 24) & 15) | 16),
            (d[c++] = (h >>> 16) & 255),
            (d[c++] = (g >>> 8) | 128),
            (d[c++] = 255 & g);
          for (var m = 0; m < 6; ++m) d[c + m] = u[m];
          return t || s(d);
        };
      },
      171: (e, t, n) => {
        var i = n(217),
          a = n(327);
        e.exports = function (e, t, n) {
          var r = (t && n) || 0;
          "string" == typeof e &&
            ((t = "binary" === e ? new Array(16) : null), (e = null));
          var s = (e = e || {}).random || (e.rng || i)();
          if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t))
            for (var o = 0; o < 16; ++o) t[r + o] = s[o];
          return t || a(s);
        };
      },
    },
    t = {};
  function n(i) {
    var a = t[i];
    return (
      void 0 !== a || ((a = t[i] = { exports: {} }), e[i](a, a.exports, n)),
      a.exports
    );
  }
  (n.d = (e, t) => {
    for (var i in t)
      n.o(t, i) &&
        !n.o(e, i) &&
        Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
  }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var i = {};
  (() => {
    "use strict";
    n.r(i),
      n.d(i, {
        exportForTesting: () => xi,
        initializeLaunchSequence: () => Mi,
      });
    const e = "initData",
      t = "browserDetails",
      a = "unifiedLogs",
      r = {
        USER_DATA: "USER_DATA",
        PUSH_TOKEN: "PUSH_TOKEN",
        SUBSCRIPTION_DETAILS: "SUBSCRIPTION_DETAILS",
        SETUP_TIME: "SETUP_TIME",
        OPT_IN_SHOWN_TIME: "OPT_IN_SHOWN_TIME",
        SOFT_ASK_STATUS: "SOFT_ASK_STATUS",
        HARD_ASK_STATUS: "HARD_ASK_STATUS",
        WEB_SETTINGS: "WEB_SETTINGS",
        GRACEFUL_DATA: "GRACEFUL_DATA",
        Q: { PREFIX: "Q", REPORT: "REPORT", DEVICE: "DEVICE" },
        INIT_DATA: "INIT_DATA",
        OLD_SDK: {
          USER_DATA: "moengage_data",
          SUBSCRIPTION_DETAILS: "MOE_PUSH_ENDPOINT",
          PUSH_TOKEN: "MOE_PUSH_TOKEN",
        },
        BROWSER_DETAILS: "browserDetails",
        SESSION: "SESSION",
      },
      s = 2,
      o = "MOE_WEB_UNSUBSCRIBED",
      l = "EVENT_ACTION_WEB_SESSION_START",
      c = "MOE_PAGE_VIEWED",
      d = "MOE_WEB_OPTIN_BANNER_LOAD",
      u = "MOE_WEB_OPTIN_CLOSED",
      g = "MOE_WEB_OPTIN_ACCEPTED",
      h = "MOE_USER_SUBSCRIBED",
      p = "MOE_OPT_IN_SHOWN",
      m = "MOE_OPT_IN_ALLOWED",
      f = "MOE_OPT_IN_DISMISSED",
      v = "MOE_OPT_IN_BLOCKED",
      S = "MOE_OPT_IN_ATTEMPT",
      E = "MOE_LOGOUT",
      _ = "EVENT_ACTION_DEVICE_ATTRIBUTE",
      b = "MOE_PAGE_EXIT",
      y = "MOE_PAGE_SCROLL",
      T = "MOE_PAGE_URL_EVENT",
      I = "USER_ATTRIBUTE_UNIQUE_ID",
      A = "USER_ATTRIBUTE_USER_EMAIL",
      w = "USER_ATTRIBUTE_USER_NAME",
      O = "USER_ATTRIBUTE_USER_FIRST_NAME",
      D = "USER_ATTRIBUTE_USER_LAST_NAME",
      C = "USER_ATTRIBUTE_USER_MOBILE",
      P = "USER_ATTRIBUTE_USER_GENDER",
      R = "USER_ATTRIBUTE_USER_BDAY",
      N = "USER_ID_MODIFIED_FROM",
      M = "MOE_LIFECYCLE",
      k = {
        MOE_INIT: "SDK_INITIALIZED",
        SETTINGS_FETCHED: "SETTINGS_FETCHED",
        EVENT_TRACKED: "EVENT_TRACKED",
      },
      L = {
        HARD_ASK_SHOWN: "HARD_ASK_SHOWN",
        HARD_ASK_DISMISSED: "HARD_ASK_DISMISSED",
        HARD_ASK_ATTEMPTED: "HARD_ASK_ATTEMPTED",
        HARD_ASK_ALLOWED: "HARD_ASK_ALLOWED",
        HARD_ASK_DENIED: "HARD_ASK_DENIED",
        SOFT_ASK_SHOWN: "SOFT_ASK_SHOWN",
        SOFT_ASK_DISMISSED: "SOFT_ASK_DISMISSED",
        SOFT_ASK_ALLOWED: "SOFT_ASK_ALLOWED",
      },
      x = {
        code: 1e3,
        reason: "Web push not supported in current browser environment",
      },
      B = { code: 1001, reason: "Registering the service worker failed" },
      W = { code: 1002, reason: "Web push settings not configured" },
      U = { code: 1004, reason: "Hard ask was dismissed to many times" },
      H = {
        code: 1005,
        reason:
          "Service worker can not be registered on this page due to scope issues",
      },
      F = "https://media.giphy.com/media/KDRv3QggAjyo/giphy.gif";
    var K;
    const G = {
        DC_1: "sdk-01.moengage.com",
        DC_2: "sdk-02.moengage.com",
        DC_3: "sdk-03.moengage.com",
        DC_4: "sdk-04.moengage.com",
        DC_5: "sdk-05.moengage.com",
        DC_100: "sdk-100.moengage.com",
        eu: "sdk-02.moengage.com",
        in: "sdk-03.moengage.com",
      },
      j = {
        MOE_DASHBOARD: "https://app.moengage.com",
        MIGRATION_DOCS: "https://docs.moengage.com/docs/web-sdk-integration",
        WEBSDK_DOCS: "https://docs.moengage.com/docs/web-sdk-integration",
        SELF_HANDLED_DOCS:
          "https://docs.moengage.com/docs/self-handled-opt-ins",
      },
      V = "Dashboard --\x3e Settings --\x3e Channel --\x3e Push",
      Y = "SESSION",
      q = "v3/sdkconfig/",
      z = "moe_tracking",
      J = "events",
      X = "batched_events",
      Q = "moe_uuid",
      $ = "MoengagePageEventHistoryManager",
      Z = {
        HOST_1: "https://sdk-01.moengage.com/",
        HOST_2: "https://sdk-02.moengage.com/",
        HOST_3: "https://sdk-03.moengage.com/",
        HOST_4: "https://sdk-04.moengage.com/",
        HOST_5: "https://sdk-05.moengage.com/",
        HOST_100: "https://sdk-100.moengage.com/",
        API: {
          META: "v3/campaigns/inapp/live",
          CAMPAIGN_PAYLOAD: "v3/campaigns/inapp/live/",
          DRAFT_CAMPAIGN_PAYLOAD: "v3/campaigns/inapp/test/",
          STATS: "v3/campaigns/inapp/live/stats",
          CAMPAIGNS_PAYLOAD: "v3/campaigns/inapp/live/campaigns",
        },
        DRAFT_CAMPAIGN_TPYES: {
          WEB_PERSONALIZATON: "web_personalization",
          ONSITE_MESSAGING: "onsite_messaging",
        },
        META_REFRESH_TIME: 9e5,
        DATABASE_NAME: "moe_onsite",
        OSM_MODULE: "moeOnsite",
        STORES: {
          CAMPAIGNS_META: { NAME: "campaigns_meta" },
          CAMPAIGNS_TAGS: { NAME: "campaigns_tags" },
          CAMPAIGNS_STATS: { NAME: "campaigns_stats" },
          TEST_CAMPAIGN_STORE: { NAME: "test_campaign" },
          EXIT_INTENT_CAMPAIGN_STORE: { NAME: "exit_intent" },
          SERVICE_META: {
            NAME: "service_meta",
            KEYS: {
              LAST_META_CALL_TIME: "last_meta_call_time",
              GLOBAL_DELAY: "global_delay_between_inapps",
              LAST_INAPP_SHOWN_TIME: "last_inapp_shown",
              LAST_FETCH_SDK_VERSION: "last_fetch_sdk_version",
              UNIQUE_ID: "unique_id",
            },
          },
        },
        EVENT_NAMES: {
          OSM: {
            CLICK: "MOE_ONSITE_MESSAGE_CLICKED",
            IMPRESSION: "MOE_ONSITE_MESSAGE_SHOWN",
            DISMISS: "MOE_ONSITE_MESSAGE_DISMISSED",
            AUTO_DISMIS: "MOE_ONSITE_MESSAGE_AUTO_DISMISS",
            TYPE: "onsite",
          },
          WP: {
            CLICK: "MOE_WEBP_MESSAGE_CLICKED",
            IMPRESSION: "MOE_WEBP_MESSAGE_SHOWN",
            DISMISS: "MOE_WEBP_MESSAGE_DISMISSED",
            DELIVERED: "MOE_WEBP_MESSAGE_DELIVERED",
            TYPE: "webp",
          },
        },
        WEB_HELPER_IFRAME_URL:
          "https://cdn.moengage.com/webpush/beta/webpushhelper.html",
        IFRAME_CHANNEL: "inapp_helper",
        IFRAME_TOPICS: { COOKIE_STORAGE: "COOKIE_STORAGE" },
        COOKIE_STORAGE: {
          TEST_DRAFT_TYPE: "moe_inapp_draft_type",
          TEST_DRAFT_ID: "moe_inapp_draft_id",
          TEST_DRAFT_TAG: "moe_inapp_draft_tag",
          TEST_CAMPAIGN_META: "test_campaign_meta",
          TEST_TEMPLATE_TYPE: "test_template_type",
          TEST_VARIATION: "moe_inapp_draft_variation",
          TEST_LOCALE: "moe_inapp_draft_locale",
        },
        CSS_SELECTORS: {
          CLICK_INAPP: "moe-inapp-click",
          DISMISS_INAPP: "moe-inapp-close",
        },
        EXIT_INTENT: {
          CONFIG: {
            SCROLL_DOWN_THRESHOLD: 50,
            SCROLL_UP_THRESHOLD: 5,
            SCROLL_INTERVAL: 1e3,
          },
        },
        POSITIONED_TEMPLATE: 'data-editor-type="MOE_EDITOR"',
        SIDE_BANNER: 'data-template-type="SIDE_BANNER"',
        PUSH_BANNER: "moe-osm-pusher",
        GCG_ERROR_CODE: "E001",
        SCROLL_CAMPAIGN_THROTTLING_TIME: 1500,
      },
      ee = {
        CARDS: {
          name: "CARDS",
          src: "https://cdn.moengage.com/webpush/moe_webSdk_cards.min.latest.js",
          windowLocation: "moeCards",
        },
      };
    ((bi = K = K || {}).BLOCKED = "blocked"), (bi.ALLOWED = "allowed");
    const te = { NAME: "offline_data" },
      ne = "v2/sdk/report/",
      ie = 15e3,
      ae = "number",
      re = {
        TOPIC: "MOE_AUTOMATED_EVENTS",
        NAMES: [
          o,
          l,
          c,
          d,
          u,
          g,
          h,
          S,
          p,
          m,
          f,
          v,
          E,
          Z.EVENT_NAMES.OSM.CLICK,
          Z.EVENT_NAMES.OSM.IMPRESSION,
          Z.EVENT_NAMES.OSM.DISMISS,
          Z.EVENT_NAMES.OSM.AUTO_DISMIS,
        ],
      },
      se = [S],
      oe = "moe_cards",
      le = { STORE_NAME: "campaigns" },
      ce = {
        STORE_NAME: "meta",
        LAST_FETCH_SDK_VERSION: "last_fetch_sdk_version",
        LAST_META_CALL_TIME: "last_meta_call_time",
        UNIQUE_ID: "unique_id",
        LAST_SYNC_CARDS: "last_sync_cards",
        SYNC_INTERVALS: "sync_intervals",
        SHOW_ALL_TAB: "show_all_tab",
      },
      de = "appOpen",
      ue = "IOS_PERMISSION_DENIED";
    var ge = n(483);
    function he(e, t, n) {
      return null != e && t
        ? (e = e[(t = Array.isArray(t) ? t : t.split("."))[0]]) && 1 < t.length
          ? he(e, t.slice(1), n)
          : void 0 === e
          ? n || null
          : e
        : null;
    }
    class pe {
      static set(e, t) {
        pe.baseLogTag,
          window &&
            (window.moeInternals
              ? window.moeInternals.ephemeral ||
                (window.moeInternals.ephemeral = {})
              : ((window.moeInternals = {}),
                (window.moeInternals.ephemeral = {})),
            (window.moeInternals.ephemeral[e] = t));
      }
      static get(e) {
        return he(window, "moeInternals.ephemeral." + e, null);
      }
    }
    pe.baseLogTag = "EphemeralStorage";
    let me = "color: white; background: #41AE55; border-radius: 5px;";
    class fe {
      static setLogLevel(e, t) {
        var n = fe.baseLogTag + ".setLogLevel";
        null == pe.get(a) && pe.set(a, []),
          null == e
            ? (fe.logLevel = 0)
            : e in [0, 1, 2]
            ? 0 < (fe.logLevel = e) && t && fe.releaseAllLogs()
            : fe.warn(
                0,
                n,
                "Value",
                e,
                "not supported for setDebugLevel(). Current log level is",
                fe.logLevel,
                ". Debug level can only be [0, 1, 2]"
              );
      }
      static setLogTabStyle(e) {
        fe.tagLogStyle = fe.tagLogStyle.replace("#48beab", e);
      }
      static log(e, t, n, ...i) {
        e <= fe.logLevel
          ? console.log(
              "%c " + fe.logBrand + " %c %c info %c %c " + t + " ",
              me,
              "",
              "color: white; background: #18a0bf; border-radius: 5px;",
              "",
              fe.tagLogStyle,
              n,
              ...i
            )
          : fe.cacheLog(() => {
              fe.log(e, t, n, ...i);
            });
      }
      static error(e, t, n, ...i) {
        e <= fe.logLevel
          ? console.error(
              "%c " + fe.logBrand + " %c %c error %c %c " + t + " ",
              me,
              "",
              "color: white; background: #cc0a0a; border-radius: 5px;",
              "",
              fe.tagLogStyle,
              n,
              ...i
            )
          : fe.cacheLog(() => {
              fe.error(e, t, n, ...i);
            });
      }
      static warn(e, t, n, ...i) {
        e <= fe.logLevel
          ? console.warn(
              "%c " + fe.logBrand + " %c %c warn %c %c " + t + " ",
              me,
              "",
              "color: white; background: #e8ab51; border-radius: 5px;",
              "",
              fe.tagLogStyle,
              n,
              ...i
            )
          : fe.cacheLog(() => {
              fe.warn(e, t, n, ...i);
            });
      }
      static customLabel(e, t, n, ...i) {
        e <= fe.logLevel
          ? console.log(
              "%c " + fe.logBrand + " %c %c " + t + " %c %c " + n + " %c ",
              me,
              "",
              fe.tagLogStyle,
              "",
              "color: white; background: #a400ff; border-radius: 5px;",
              "",
              ...i
            )
          : fe.cacheLog(() => {
              fe.customLabel(e, t, n, ...i);
            });
      }
      static image(e, t) {
        e <= fe.logLevel
          ? console.log(
              "%c+",
              "font-size: 1px; padding: 20px 80px; line-height: 45px; background: url(" +
                t +
                "); background-size: 160px 90px; color: transparent;"
            )
          : fe.cacheLog(() => {
              fe.image(e, t);
            });
      }
      static releaseAllLogs() {
        var e = pe.get(a),
          t = e.length;
        const n = e;
        if ((pe.set(a, []), 0 < t)) {
          fe.log(
            0,
            "Logger.releaseAllLogs",
            "<---- HISTORICAL LOGS BEGIN ----\x3e"
          );
          for (let e = 0; e < t; e++) n[e]();
          fe.log(
            0,
            "Logger.releaseAllLogs",
            "<---- HISTORICAL LOGS END ----\x3e"
          );
        }
      }
      static setLogBrand(e) {
        fe.logBrand = e;
      }
      static setBrandColor(e) {
        me = "color: white; background: " + e + "; border-radius: 5px;";
      }
      static cacheLog(e) {
        let t = pe.get(a);
        null == t && (t = []), t.push(e), pe.set(a, t);
      }
    }
    (fe.baseLogTag = "Logger"),
      (fe.logBrand = "MoEngage"),
      (fe.logLevel = 0),
      (fe.tagLogStyle =
        "color: white; background: #48beab; border-radius: 5px;");
    class ve {
      static set(e, t) {
        var n = ve.baseTag + ".set";
        null == t
          ? ve.remove(e)
          : ((t =
              "boolean" == typeof t
                ? JSON.stringify({ actualValue: t, MOE_DATA_TYPE: "boolean" })
                : "string" == typeof t
                ? JSON.stringify({ actualValue: t, MOE_DATA_TYPE: "string" })
                : JSON.stringify(t)),
            fe.log(3, n, "Setting ", e, ":", t),
            (n = Date.now()),
            (n = ";expires=" + new Date(n + 31536e6 * s).toUTCString()),
            (document.cookie =
              e +
              "=" +
              encodeURIComponent(t) +
              n +
              ";domain=" +
              ve.getOrigin() +
              ";path=/;SameSite=None; Secure"));
      }
      static get(e) {
        var t = ve.baseTag + ".get",
          n = e + "=",
          i = decodeURIComponent(document.cookie).split(";");
        for (let a = i.length - 1; 0 <= a; a--) {
          let r = i[a];
          for (; " " === r.charAt(0); ) r = r.substring(1);
          if (0 === r.indexOf(n)) {
            let i = r.substring(n.length, r.length);
            try {
              (i = JSON.parse(i)),
                "string" === he(i, "MOE_DATA_TYPE", null)
                  ? ((i = he(i, "actualValue", null)),
                    (i = i ? String(i) : null))
                  : "boolean" === he(i, "MOE_DATA_TYPE", null) &&
                    (i = he(i, "actualValue", null));
            } catch (e) {}
            return fe.log(3, t, "Got ", e, ":", i), i;
          }
        }
        return null;
      }
      static remove(e) {
        var t = ve.baseTag + ".remove";
        (document.cookie =
          e +
          "=;domain=" +
          ve.getOrigin() +
          ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
          fe.log(3, t, "Removed ", e);
      }
      static setRaw(e, t, n) {
        var i = ve.baseTag + ".setRaw";
        if (null == t) ve.remove(e);
        else {
          fe.log(3, i, "Setting ", e, ":", t);
          let a = "";
          null != n && (a = ";expires=" + n.toISOString()),
            (document.cookie =
              e +
              "=" +
              encodeURIComponent(t) +
              a +
              ";domain=" +
              ve.getOrigin() +
              ";path=/;");
        }
      }
      static getOrigin() {
        var e = ve.baseTag + ".getOrigin";
        let t = window.location.origin;
        return (
          (t =
            t.indexOf(".") !== t.lastIndexOf(".")
              ? t.substring(t.indexOf("."))
              : "." + t.substring(t.lastIndexOf("/") + 1)),
          "localhost" === window.location.hostname &&
            (fe.warn(
              1,
              e,
              "Cross domain user persitence will not work with localhost. \n\nWe will save the key-value pairs in the localhost cookie store for reference. You'll be able to test this functionality in a hosted staging/test environment."
            ),
            (t = "")),
          t
        );
      }
    }
    ve.baseTag = "CookieStorage";
    const Se = "MOE_DATA";
    class Ee {
      static setPrefix(e) {
        Ee.prefix = e + "_";
      }
      static set(e, t) {
        if ((Ee.baseLogTag, (e = Ee.prefix + e), localStorage)) {
          const n = Ee.getMoeData();
          (n[e] = t), localStorage.setItem(Se, JSON.stringify(n));
        }
        var n = Ee.KEYS_SHARED_WITH_COOKIE.indexOf(e);
        if (Ee.isSharedWithCookie && 0 <= n) {
          const i =
            "object" != typeof t || Array.isArray(t) ? t : Object.assign({}, t);
          0 === n &&
            Array.isArray(i.attributes) &&
            (i.attributes = i.attributes.filter((e) => {
              switch (e.key) {
                case I:
                case N:
                case A:
                case C:
                  return !0;
                default:
                  return !1;
              }
            })),
            e === r.SUBSCRIPTION_DETAILS &&
              ((i.domain = t.domain),
              (i.token = t.token),
              (i.endpoint = t.endpoint),
              (i.keys = t.keys)),
            ve.set(e, i);
        }
      }
      static get(e) {
        return (
          Ee.baseLogTag,
          (e = Ee.prefix + e),
          localStorage ? he(Ee.getMoeData(), e, null) : null
        );
      }
      static remove(e) {
        var t = Ee.baseLogTag + ".remove",
          n = Ee.prefix + e;
        if (localStorage && null != Ee.get(e)) {
          const i = Ee.getMoeData();
          delete i[n],
            localStorage.setItem(Se, JSON.stringify(i)),
            fe.log(2, t, "Key", e, "removed.");
        }
        Ee.isSharedWithCookie &&
          0 <= Ee.KEYS_SHARED_WITH_COOKIE.indexOf(e) &&
          ve.remove(e);
      }
      static logout() {
        const e = [
          "INIT_DATA",
          "Q",
          "WEB_SETTINGS",
          "SUBSCRIPTION_DETAILS",
          "PUSH_TOKEN",
          "GRACEFUL_DATA",
        ];
        for (const t in r) e.indexOf(t) < 0 && Ee.remove(r[t]);
        for (const e in r.Q) _e.purge(e);
      }
      static getString(e) {
        if (((e = Ee.prefix + e), localStorage))
          return "string" == typeof (e = Ee.get(e)) || e instanceof String
            ? e
            : JSON.stringify(e);
      }
      static removePrefix() {
        Ee.prefix = "";
      }
      static copyKeysFromCookie() {
        for (let n = 0; n < Ee.KEYS_SHARED_WITH_COOKIE.length; n++) {
          var e = Ee.KEYS_SHARED_WITH_COOKIE[n],
            t = ve.get(e);
          if (null != t) {
            const n =
              "object" != typeof t || Array.isArray(t)
                ? t
                : Object.assign({}, t);
            if (
              e === r.USER_DATA &&
              ((t = Ee.get(e) && Ee.get(e).attributes),
              Array.isArray(n.attributes) && Array.isArray(t) && 0 < t.length)
            ) {
              const e = [...t];
              n.attributes.forEach((t) => {
                var n = e.findIndex((e) => e.key === t.key);
                0 <= n && (e[n] = t);
              }),
                (n.attributes = e);
            }
            Ee.set(e, n);
          }
        }
      }
      static getMoeData() {
        var e = Ee.baseLogTag + ".getMoeData",
          t = localStorage.getItem(Se);
        if (null == t) return {};
        try {
          return JSON.parse(t);
        } catch (t) {
          return fe.error(1, e, t), {};
        }
      }
    }
    (Ee.baseLogTag = "PersistentStorage"),
      (Ee.prefix = ""),
      (Ee.isSharedWithCookie = !1),
      (Ee.KEYS_SHARED_WITH_COOKIE = [
        r.USER_DATA,
        r.SUBSCRIPTION_DETAILS,
        r.SOFT_ASK_STATUS,
        r.SETUP_TIME,
        r.PUSH_TOKEN,
        r.OPT_IN_SHOWN_TIME,
        r.HARD_ASK_STATUS,
      ]);
    class _e {
      constructor() {
        this.items = [];
      }
      static enqueue(e, t) {
        e = _e.getLocalStorageQName(e);
        let n = new _e();
        Ee.get(e) && (n = Ee.get(e)),
          n.items.push(t),
          (n.items = n.items.slice(Math.max(n.items.length - 50, 0))),
          Ee.set(e, n);
      }
      static dequeue(e) {
        e = _e.getLocalStorageQName(e);
        const t = Ee.get(e);
        let n = null;
        return (
          t &&
            0 < t.items.length &&
            ((n = t.items[0]), t.items.splice(0, 1), Ee.set(e, t)),
          n
        );
      }
      static isEmpty(e) {
        return (
          (e = _e.getLocalStorageQName(e)),
          !(Ee.get(e) && 0 < Ee.get(e).items.length)
        );
      }
      static purge(e) {
        var t = _e.getLocalStorageQName(e);
        _e.isEmpty(e) || Ee.remove(t);
      }
      static getLocalStorageQName(e) {
        return r.Q.PREFIX + "_" + e;
      }
    }
    var be;
    class ye {
      constructor(e, t, n) {
        (this.os = "web"),
          (this.osPlatform = e.userAgent),
          (this.isMobile = Ke()),
          (this.os = Ke() ? "mweb" : "web"),
          (this.name = ye.getBrowserName(e.userAgent, t)),
          (this.isIncognito = n);
      }
      static getInstance() {
        return (
          (e = this),
          (i = function* () {
            if (null != pe.get(t)) return pe.get(t);
            var e = yield ye.isIncognito(window),
              n = new ye(navigator, document, e);
            return (
              pe.set(t, n),
              ((e = Ee.get(r.BROWSER_DETAILS)) && ye.isBrowserUpdated(e, n)) ||
                Ee.set(t, n),
              n
            );
          }),
          new (n = (n = void 0) || Promise)(function (t, a) {
            function r(e) {
              try {
                o(i.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                o(i.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              var i;
              e.done
                ? t(e.value)
                : ((i = e.value) instanceof n
                    ? i
                    : new n(function (e) {
                        e(i);
                      })
                  ).then(r, s);
            }
            o((i = i.apply(e, [])).next());
          })
        );
        var e, n, i;
      }
      static isIncognito(e) {
        const t = e.RequestFileSystem || e.webkitRequestFileSystem;
        return new Promise((n) => {
          t
            ? t(
                e.TEMPORARY,
                100,
                () => {
                  n(!1);
                },
                () => {
                  n(!0);
                }
              )
            : n(!1);
        });
      }
      static getBrowserName(e, t) {
        return -1 !== e.indexOf("MSIE") || 1 == t.documentMode
          ? ye.BROWSER_NAMES.INTERNET_EXPLORER
          : -1 < e.indexOf("Edg")
          ? ye.BROWSER_NAMES.EDGE
          : -1 < e.indexOf("OPR") || -1 < e.indexOf("Opera")
          ? ye.BROWSER_NAMES.OPERA
          : -1 < e.indexOf("Chrome") || e.match(/\b(?:crmo|crios)\/([\w\.]+)/i)
          ? -1 < e.indexOf("MMS")
            ? ye.BROWSER_NAMES.OPERA_NEON
            : ye.BROWSER_NAMES.CHROME
          : -1 < e.indexOf("Safari")
          ? ye.BROWSER_NAMES.SAFARI
          : -1 < e.indexOf("Firefox")
          ? ye.BROWSER_NAMES.FIREFOX
          : ye.BROWSER_NAMES.OTHERS;
      }
      static isBrowserUpdated(e, t) {
        return Xe(e, t);
      }
      isWebPushCompatible() {
        return (
          this.isChrome() ||
          this.isFirefox() ||
          this.isOpera() ||
          this.isSafari() ||
          this.isEdge()
        );
      }
      isChrome() {
        return this.name === ye.BROWSER_NAMES.CHROME;
      }
      isFirefox() {
        return this.name === ye.BROWSER_NAMES.FIREFOX;
      }
      isOpera() {
        return (
          this.name === ye.BROWSER_NAMES.OPERA ||
          this.name === ye.BROWSER_NAMES.OPERA_NEON
        );
      }
      isSafari() {
        return this.name === ye.BROWSER_NAMES.SAFARI;
      }
      isEdge() {
        return this.name === ye.BROWSER_NAMES.EDGE;
      }
      static isIOS() {
        return !(
          !navigator.userAgent.match(/iPad/i) &&
          !navigator.userAgent.match(/iPhone/i)
        );
      }
    }
    ((at =
      (at = ye = ye || {}).BROWSER_NAMES || (at.BROWSER_NAMES = {})).CHROME =
      "Google Chrome"),
      (at.FIREFOX = "Mozilla Firefox"),
      (at.OPERA = "Opera"),
      (at.OPERA_NEON = "Opera Neon"),
      (at.SAFARI = "Apple Safari"),
      (at.INTERNET_EXPLORER = "Internet Explorer"),
      (at.EDGE = "Edge"),
      (at.OTHERS = "Others");
    const Te = ye;
    class Ie {
      constructor(e) {
        var t = Ie.baseLogTag + ".constructor";
        e.placeholder ||
          fe.warn(
            1,
            t,
            "Placeholder for cards inbox not passed in cardsConfig: ",
            e
          ),
          (this.placeholder = he(e, "placeholder", "")),
          (this.overLayColor = he(e, "overLayColor", "rgba(0, 0, 0, 0.8)")),
          (this.backgroundColor = he(e, "backgroundColor", "#F6FBFC")),
          (this.navigationBar = new Ae(he(e, "navigationBar", {}))),
          (this.closeButton = new De(he(e, "closeButton", {}))),
          (this.tab = new Ce(he(e, "tab", {}))),
          (this.cardDismiss = new Pe(he(e, "cardDismiss", {}))),
          (this.optionButtonColor = he(e, "optionButtonColor", "#C4C4C4")),
          (this.dateTimeColor = he(e, "dateTimeColor", "#8E8E8E")),
          (this.unclickedCardIndicatorColor = he(
            e,
            "unclickedIndicatorColor",
            "blue"
          )),
          (this.pinIcon = he(
            e,
            "pinIcon",
            "https://app-cdn.moengage.com/sdk/pin-icon.svg"
          )),
          (this.refreshIcon = he(
            e,
            "refreshIcon",
            "https://app-cdn.moengage.com/sdk/refresh-icon.svg"
          )),
          (this.webFloating = new Me(he(e, "webFloating", {}))),
          (this.mWebFloating = new Me(
            he(e, "mWebFloating", {
              countBackgroundColor: "#FF5A5F",
              enable: !1,
              icon: "https://app-cdn.moengage.com/sdk/bell-icon.svg",
              countColor: "#fff",
              postion: "0px 10px 40px 0",
              iconBackgroundColor: "#D9DFED",
            })
          )),
          (this.card = new Oe(he(e, "card", {}))),
          (this.errorContent = new we(he(e, "errorContent", {}))),
          (this.noDataContent = new ke(he(e, "noDataContent", {}))),
          (this.openInbox = he(e, "openInbox", () => {})),
          (this.zIndex = he(e, "zIndex", "999999")),
          (this.fontFaces =
            (null === (e = e.fontFaces) || void 0 === e
              ? void 0
              : e.map((e) => new Re(e))) || []);
      }
    }
    Ie.baseLogTag = "CardsConfigModel";
    class Ae {
      constructor(e) {
        (this.backgroundColor = he(e, "backgroundColor", "#00237C")),
          (this.text = he(e, "text", "Notification")),
          (this.color = he(e, "color", "#fff")),
          (this.fontSize = he(e, "fontSize", "16px")),
          (this.fontFamily = he(e, "fontFamily", "inherit"));
      }
    }
    class we {
      constructor(e = {}) {
        (this.img = he(
          e,
          "img",
          "https://app-cdn.moengage.com/sdk/cards-error.svg"
        )),
          (this.text = he(
            e,
            "text",
            'Error something went wrong <button onclick="window.location.reload();" style="color: #06A6B7; display: contents;" class="btn-icon pointer-cursor" >Refresh</button>'
          ));
      }
    }
    class Oe {
      constructor(e) {
        (this.headerFontSize = he(e, "headerFontSize", "16px")),
          (this.descriptionFontSize = he(e, "descriptionFontSize", "14px")),
          (this.ctaFontSize = he(e, "ctaFontSize", "12px")),
          (this.fontFamily = he(e, "fontFamily", "inherit")),
          (this.horizontalRowColor = he(e, "horizontalRowColor", "#D9DFED"));
      }
    }
    class De {
      constructor(e) {
        (this.mWebIcon = he(
          e,
          "mWebIcon",
          "https://app-cdn.moengage.com/sdk/back-icon.svg"
        )),
          (this.webIcon = he(
            e,
            "webIcon",
            "https://app-cdn.moengage.com/sdk/cross-icon.svg"
          )),
          (this.callBack = he(e, "callBack", () => {}));
      }
    }
    class Ce {
      constructor(e) {
        (this.inactiveTabFontColor = he(e, "inactiveTabFontColor", "#7C7C7C")),
          (this.fontSize = he(e, "fontSize", "14px")),
          (this.fontFamily = he(e, "fontFamily", "inherit")),
          (this.backgroundColor = he(e, "backgroundColor", "#F6FBFC")),
          (this.active = new Ne(he(e, "active", {})));
      }
    }
    class Pe {
      constructor(e) {
        (this.color = he(e, "color", "red")),
          (this.enable = he(e, "enable", !1));
      }
    }
    class Re {
      constructor(e) {
        (this.family = he(e, "family", "")), (this.url = he(e, "url", ""));
      }
    }
    class Ne {
      constructor(e) {
        (this.color = he(e, "color", "#06A6B7")),
          (this.underlineColor = he(e, "underlineColor", "#06A6B7")),
          (this.backgroundColor = he(e, "backgroundColor", "transparent"));
      }
    }
    class Me {
      constructor(e) {
        (this.enable = he(e, "enable", !1)),
          (this.icon = he(
            e,
            "icon",
            "https://app-cdn.moengage.com/sdk/bell-icon.svg"
          )),
          (this.postion = he(e, "postion", "0px 10px 40px 0")),
          (this.countBackgroundColor = he(
            e,
            "countBackgroundColor",
            "#FF5A5F"
          )),
          (this.countColor = he(e, "countColor", "#fff")),
          (this.zIndex = he(e, "zIndex", "999998")),
          (this.iconBackgroundColor = he(e, "iconBackgroundColor", "#D9DFED")),
          (this.fontFamily = he(e, "fontFamily", "inherit"));
      }
    }
    class ke {
      constructor(e) {
        (this.img = he(
          e,
          "img",
          "https://app-cdn.moengage.com/sdk/cards-no-result.svg"
        )),
          (this.text = he(
            e,
            "text",
            "No notifications to show, check again later."
          ));
      }
    }
    class Le {
      constructor(e) {
        (this.debugLevel = 0),
          (this.cluster = null),
          (this.environment = null),
          (this.baseDomainName = "https://sdk-01.moengage.com/"),
          (this.inapp = null),
          (this.customSoftAsk = null);
        var t = Le.baseLogTag + ".constructor";
        null != he(e, "app_id", null)
          ? ((this.appId = he(e, "app_id", null)),
            (this.integrationType = be.OLD_SDK))
          : null != he(e, "appId", null)
          ? ((this.appId = he(e, "appId", null)),
            (this.integrationType = be.NEW_SDK))
          : (fe.error(
              1,
              t,
              "App Id not specified. Please check docs page to complete the integration - ",
              j.WEBSDK_DOCS
            ),
            (this.integrationType = null)),
          null != he(e, "debug_logs", null)
            ? (this.debugLevel = he(e, "debug_logs", 0))
            : null != he(e, "debugLevel", null)
            ? (this.debugLevel = he(e, "debugLevel", 0))
            : (fe.log(
                2,
                t,
                "No log level config found. Using default value of",
                0
              ),
              (this.debugLevel = 0)),
          this.appId &&
            ((this.baseDomainName = "https://sdk-01.moengage.com/"),
            (this.forceSwUpdate = he(e, "forceSwUpdate", !1)),
            (this.cluster = he(e, "cluster", this.cluster)),
            this.cluster &&
              null != G[this.cluster] &&
              (this.environment = G[this.cluster]),
            he(e, "environment", null) && (this.environment = e.environment),
            this.environment &&
              (this.baseDomainName = "https://" + this.environment + "/"),
            0 < this.debugLevel && this.appId.indexOf("_DEBUG") < 0
              ? (this.appId = this.appId + "_DEBUG")
              : 0 === this.debugLevel &&
                0 <= this.appId.indexOf("_DEBUG") &&
                (this.appId = this.appId.substr(
                  0,
                  this.appId.indexOf("_DEBUG")
                )),
            (this.swPath = he(e, "swPath", null)),
            null != e.customSoftAsk
              ? (this.customSoftAsk = {
                  mainClass: he(e, "customSoftAsk.mainClass", null),
                  allowClass: he(e, "customSoftAsk.allowClass", null),
                  dismissClass: he(e, "customSoftAsk.dismissClass", null),
                })
              : (this.customSoftAsk = {
                  mainClass: he(e, "main_class", null),
                  allowClass: he(e, "allow_class", null),
                  dismissClass: he(e, "block_class", null),
                }),
            null != he(e, "inapp.host", null) &&
              (this.inapp = { host: he(e, "inapp.host", null) }),
            null != he(e, "swScope", null) &&
              (this.swScope = he(e, "swScope", null)),
            null != he(e, "disable_onsite", null) &&
              (this.disableOnsite = he(e, "disable_onsite", !1)),
            null != he(e, "enableSPA", null) &&
              (this.enableSPA = he(e, "enableSPA", !1)),
            null != he(e, "cards", null) &&
              (this.cards = new Ie(he(e, "cards", {}))),
            null != he(e, "api_proxy_domain", null) &&
              ((this.apiProxyDomain = he(e, "api_proxy_domain", null)),
              (this.baseDomainName = "https://" + this.apiProxyDomain + "/"),
              (this.environment = this.apiProxyDomain)),
            null != he(e, "disable_web_push", null) &&
              (this.disableWebPush = he(e, "disable_web_push", !1)));
      }
      static save(t) {
        pe.set(e, new Le(t)), Ee.set(r.INIT_DATA, new Le(t));
      }
      static get() {
        return pe.get(e);
      }
      static setSoftAskConfig(e) {
        var t = Le.get();
        (e = {
          appId: t.appId,
          debugLevel: t.debugLevel,
          cluster: t.cluster,
          environment: t.environment,
          swPath: t.swPath,
          enableSPA: t.enableSPA,
          cards: t.cards,
          apiProxyDomain: t.apiProxyDomain,
          customSoftAsk: {
            mainClass: he(e, "main_class", he(e, "mainClass", null)),
            allowClass: he(e, "allow_class", he(e, "allowClass", null)),
            dismissClass: he(e, "block_class", he(e, "dismissClass", null)),
          },
        }),
          Le.save(e);
      }
    }
    function xe(e) {
      return 0 === Object.keys(e).length && e.constructor === Object;
    }
    function Be(e) {
      e = (e + "=".repeat((4 - (e.length % 4)) % 4))
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
      const t = atob(e),
        n = new Uint8Array(t.length);
      for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
      return n;
    }
    function We(e) {
      let t = "";
      var n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = new Uint8Array(e),
        a = i.byteLength,
        r = a - (e = a % 3);
      let s, o, l, c, d;
      for (let e = 0; e < r; e += 3)
        (d = (i[e] << 16) | (i[e + 1] << 8) | i[e + 2]),
          (s = (16515072 & d) >> 18),
          (o = (258048 & d) >> 12),
          (l = (4032 & d) >> 6),
          (c = 63 & d),
          (t += n[s] + n[o] + n[l] + n[c]);
      return (
        1 == e
          ? ((d = i[r]),
            (s = (252 & d) >> 2),
            (o = (3 & d) << 4),
            (t += n[s] + n[o] + "=="))
          : 2 == e &&
            ((d = (i[r] << 8) | i[1 + r]),
            (s = (64512 & d) >> 10),
            (o = (1008 & d) >> 4),
            (l = (15 & d) << 2),
            (t += n[s] + n[o] + n[l] + "=")),
        t
      );
    }
    function Ue(e, t) {
      return t.isChrome() || t.isOpera() || t.isEdge() || t.isSafari()
        ? "vapid" === e.chrome.subscriptionMode && e.chrome.vapidPublicKey
        : t.isFirefox() &&
            "vapid" === e.firefox.subscriptionMode &&
            e.firefox.vapidPublicKey;
    }
    function He(e, t) {
      return t.isChrome() || t.isOpera() || t.isEdge() || t.isSafari()
        ? e.chrome.vapidPublicKey
        : t.isFirefox()
        ? e.firefox.vapidPublicKey
        : "";
    }
    function Fe() {
      const e = Le.get().swPath;
      return !(!e || !e.includes("tools/moengage"));
    }
    function Ke() {
      const e = navigator.userAgent;
      return !(
        !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          e
        ) &&
        !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          e.substr(0, 4)
        )
      );
    }
    function Ge() {
      var e = navigator.userAgent.toLowerCase(),
        t =
          /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
            e
          );
      return /nexus player|neo-x5|adt-2|tsbnettv|roku|tizen|smart-tv.+(samsung)|hbbtv.+maple;(\d+)|(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))|(apple) ?tv|crkey|droid.+aft(\w)( bui|\))|\(dtv[\);].+(aquos)|(aquos-tv[\w ]+)\)|(bravia[\w ]+)( bui|\))|(mitv-\w{5}) bui|Hbbtv.*(technisat) (.*);|\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)|hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)|\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i.test(
        e
      )
        ? "tv"
        : t
        ? "tablet"
        : Ke()
        ? "mobile"
        : "web";
    }
    function je(e, t) {
      try {
        var n = Ge();
        return !(
          "allowed" !== (null == e ? void 0 : e.s_e_b_e) ||
          (("web" !== n ||
            (t.name !== Te.BROWSER_NAMES.CHROME &&
              t.name !== Te.BROWSER_NAMES.EDGE &&
              t.name !== Te.BROWSER_NAMES.OPERA)) &&
            ("mobile" !== n ||
              Te.isIOS() ||
              (t.name !== Te.BROWSER_NAMES.CHROME &&
                t.name !== Te.BROWSER_NAMES.OPERA))) ||
          !navigator.sendBeacon
        );
      } catch (e) {
        fe.error(1, "Utils.isBatchingSupported", e);
      }
    }
    function Ve(e) {
      return new Date(Date.parse(e));
    }
    function Ye() {
      return window[window.moengage_object || "Moengage"];
    }
    (Le.baseLogTag = "InitData"),
      ((bi = be = be || {}).OLD_SDK = "OLD_SDK"),
      (bi.NEW_SDK = "NEW_SDK");
    class qe {
      constructor() {
        (this.p = null), (this.res = null), (this.rej = null);
        try {
          this.p = new Promise((e, t) => {
            (this.res = e), (this.rej = t);
          });
        } catch (e) {
          fe.error(1, "Utils.PromiseObject", "Promises not supported");
        }
      }
    }
    const ze = (e) => "string" == typeof e,
      Je = (e) => "[object Date]" === Object.prototype.toString.call(e);
    function Xe(e, t) {
      if (null == e || null == t) return e === t;
      if (e instanceof Function) return e === t;
      if (e instanceof RegExp) return e === t;
      if (e === t || e.valueOf() === t.valueOf()) return !0;
      if (Array.isArray(e) && e.length !== t.length) return !1;
      if (e instanceof Date) return !1;
      if (!(e instanceof Object)) return !1;
      if (!(t instanceof Object)) return !1;
      const n = Object.keys(e);
      return (
        Object.keys(t).every((e) => -1 !== n.indexOf(e)) &&
        n.every((n) => Xe(e[n], t[n]))
      );
    }
    function Qe() {
      const e = new Date();
      return (
        `${e.getDate()}:${
          e.getMonth() + 1
        }:${e.getFullYear()}:${e.getHours()}:${e.getMinutes()}:` +
        e.getSeconds()
      );
    }
    const $e = (e) => {
        if (e) {
          const t = e.replace("?", "").split("&"),
            n = {};
          return (
            t.forEach((e) => {
              e = (t = e.split("="))[0];
              var t = decodeURIComponent(t[1] || "");
              n[e]
                ? "[object Array]" === Object.prototype.toString.call(n[e])
                  ? n[e].push(t)
                  : (n[e] = [n[e], t])
                : (n[e] = t);
            }),
            JSON.parse(JSON.stringify(n))
          );
        }
        return {};
      },
      Ze = () => window.location.search.includes("moe_migration=true"),
      et = () => {
        var e,
          t = Ee.get(r.WEB_SETTINGS);
        "allowed" === (null == t ? void 0 : t.c_w_p_e) &&
          null !== (e = window.MoeWebP) &&
          void 0 !== e &&
          e.clearLastFetchedTime();
      },
      tt = (e, t) => {
        e += "?";
        for (const n in t)
          t.hasOwnProperty(n) &&
            null != t[n] &&
            (e += n + "=" + encodeURIComponent(t[n]) + "&");
        return e;
      };
    class nt {
      static get(e, t) {
        return nt.makeNetworkCall(nt.METHODS.GET, e, t);
      }
      static post(e, t) {
        return nt.makeNetworkCall(nt.METHODS.POST, e, t);
      }
      static makeNetworkCall(e, t, n = {}) {
        return new Promise((i, a) => {
          var r = JSON.stringify(he(n, "postData", null));
          t = tt(t, he(n, "queryParams", null));
          const s = new XMLHttpRequest();
          s.open(e, t, !0),
            nt.addRequestHeaders(s, he(n, "headers", {})),
            (s.onreadystatechange = () => {
              (4 === s.readyState && 200 === s.status) ||
              (4 === s.readyState && 410 === s.status)
                ? i({ status: s.status, responseText: s.responseText })
                : 4 === s.readyState &&
                  200 !== s.status &&
                  a({ code: s.status, reason: s.responseText });
            }),
            s.send(r);
        });
      }
      static addRequestHeaders(e, t) {
        for (const n in t) t.hasOwnProperty(n) && e.setRequestHeader(n, t[n]);
        return e;
      }
    }
    ((at = (at = nt = nt || {}).METHODS || (at.METHODS = {})).GET = "GET"),
      (at.POST = "POST");
    const it = nt;
    var at,
      rt = n(877);
    class st {
      initiateSessionAndSource(e) {
        return new Promise((t, n) => {
          var i = () => {
            (this.isSessionRunning() &&
              this.isCurrentSourceSameAsPreviousSource()) ||
              this.startNewSession(),
              t(!0);
          };
          e ? i() : setTimeout(i, 250);
        });
      }
      isSessionRunning() {
        return this.getSessionKey() && !this.isSessionExpired();
      }
      isSessionExpired() {
        var e = this.getSessionExpiryTime(),
          t = pe.get("wasBrowserInactive");
        return (
          !(!t && null !== t) &&
          (this.isWindowActive() && pe.set("wasBrowserInactive", !1),
          new Date().getTime() > e)
        );
      }
      isNonEventInteractive(e) {
        return (
          st.NON_INTERACTIVE_EVENTS.includes(e.name) ||
          0 <
            e.attributes.filter(
              (e) => "moe_non_interactive" === e.key && 1 === e.value
            ).length
        );
      }
      getCurrentSource() {
        const e = $e(window.location.search);
        let t = "";
        const n = {};
        if (Object.keys(e).includes("utm_source")) {
          (t = "utm_"),
            this.geCustomIdentifiersToTrack().forEach((t) => {
              e[t] && (n[t] = e[t]);
            });
          const i = { source_url: window.location.href };
          return (
            e[t + "source"] && (i.source = e[t + "source"]),
            e[t + "medium"] && (i.medium = e[t + "medium"]),
            e[t + "term"] && (i.term = e[t + "term"]),
            e[t + "campaign"] && (i.campaign_name = e[t + "campaign"]),
            e[t + "content"] && (i.content = e[t + "content"]),
            e.utm_id && (i.campaign_id = e.utm_id),
            Object.keys(n).length && (i.extra = n),
            i
          );
        }
      }
      getActiveSource() {
        return this.getSavedSource() || this.getCurrentSource();
      }
      isSourceOrganic() {
        const e = $e(window.location.search),
          t = Object.keys(e);
        let n = !1;
        return (
          this.geCustomIdentifiersToTrack().forEach((t) => {
            e[t] && (n = !0);
          }),
          !t.includes("utm_source") && !t.includes("source") && !n
        );
      }
      setCurrentSource(e) {
        const t = this.getSession();
        (t.currentSource = e), Ee.set(Y, t);
      }
      removeCurrentSource() {
        const e = this.getSession();
        e && ((e.currentSource = void 0), Ee.set(Y, e));
      }
      getSavedSource() {
        var e = he(this.getSession(), "currentSource", void 0);
        if (e) return e;
      }
      isCurrentSourceSameAsPreviousSource() {
        if (this.isSourceOrganic()) return !0;
        const e = Object.assign({}, this.getCurrentSource());
        delete e.source_url;
        const t = Object.assign({}, this.getSavedSource());
        return delete t.source_url, Xe(e, t);
      }
      getSessionKey() {
        return he(this.getSession(), "sessionKey", null);
      }
      getSessionStartTime() {
        return he(this.getSession(), "sessionStartTime", null);
      }
      getSessionExpiryTime() {
        return he(this.getSession(), "sessionExpiryTime", null);
      }
      getSessionMaxTime() {
        return he(this.getSession(), "sessionMaxTime", null);
      }
      getSession() {
        return Ee.get(Y);
      }
      geCustomIdentifiersToTrack() {
        return he(this.getSession(), "customIdentifiersToTrack", []) || [];
      }
      generateSessionKey() {
        return (0, rt.v4)();
      }
      startNewSession() {
        this.removeCurrentSource(),
          Bt.getWebSDKSettings()
            .then((e) => {
              var t = this.getNumberOfSessions();
              (t = {
                sessionKey: this.generateSessionKey(),
                sessionStartTime: new Date().toISOString(),
                sessionMaxTime: e.s_i_d,
                sessionEnabled: e.s_s_s,
                customIdentifiersToTrack: e.src_ext,
                sessionExpiryTime: new Date().getTime() + 1e3 * e.s_i_d,
                numberOfSessions: ++t,
              }),
                Ee.set(Y, t);
            })
            .catch((e) => {});
      }
      extendSession() {
        const e = this.getSession();
        e &&
          ((e.sessionExpiryTime =
            new Date().getTime() + 1e3 * e.sessionMaxTime),
          Ee.set(Y, e));
      }
      handleBrowserInactivity(e) {
        "hidden" === e && pe.set("wasBrowserInactive", !0);
      }
      isWindowActive() {
        return !!pe.get("isWindowActive");
      }
      getNumberOfSessions() {
        return he(Ee.get(Y), "numberOfSessions") || 0;
      }
    }
    st.NON_INTERACTIVE_EVENTS = [d, p, d, E];
    class ot {
      constructor(e, t) {
        (this.key = e), (this.value = t);
      }
      static equal(e, t) {
        return (
          e.key === t.key && JSON.stringify(e.value) === JSON.stringify(t.value)
        );
      }
    }
    let lt = null;
    class ct {
      constructor(e) {
        (this.attributes = []),
          (this.subscribedToOldSdk = !1),
          null == e
            ? ((this.deviceUuid = (0, rt.v4)()),
              (this.attributes = []),
              (this.deviceAdded = !1))
            : ((this.deviceUuid = he(e, "deviceUuid", (0, rt.v4)())),
              (this.attributes = he(e, "attributes", [])),
              (this.deviceAdded = he(e, "deviceAdded", !1)));
      }
      addAttribute(e) {
        const t = ct.baseLogTag + ".addAttribute";
        return new Promise((n) => {
          e.key = ct.getMorphedKey(e.key);
          let i = -1;
          for (let t = this.attributes.length - 1; 0 <= t; t--)
            e.key === this.attributes[t].key && (i = t);
          fe.log(2, t, "Adding attribute:", e),
            0 <= i
              ? (this.attributes[i].value,
                e.value,
                (this.attributes[i].value = e.value))
              : this.attributes.push(e),
            this.save().then(() => {
              n(!0);
            });
        });
      }
      static getLocalUser() {
        const e = ct.baseLogTag + ".getLocalUser";
        return new Promise((t) => {
          var n;
          Ee.get(r.USER_DATA)
            ? (fe.log(2, e, "Found user in localstorage"),
              (n = Ee.get(r.USER_DATA)),
              t(new ct(n)))
            : t(null);
        });
      }
      static getCookieUser() {
        return new Promise((e) => {
          var t = ct.baseLogTag + ".getLocalUser";
          ve.get(r.USER_DATA)
            ? (fe.log(2, t, "Found user in cookie"),
              (t = ve.get(r.USER_DATA)),
              e(new ct(t)))
            : e(null);
        });
      }
      static getMigrationUser() {
        const e = ct.baseLogTag + ".getLocalUser";
        return new Promise((t) => {
          var n = localStorage.getItem(r.OLD_SDK.USER_DATA);
          if (n)
            try {
              var i = JSON.parse(n);
              if (i.is_new_sdk_migrated) t(null);
              else {
                const e = new ct({
                    deviceAdded: he(i, "device_add", !1),
                    deviceUuid: he(i, "uuid", (0, rt.v4)()),
                  }),
                  n = he(i, "user_attrs", {});
                for (const t in n)
                  n.hasOwnProperty(t) && e.attributes.push(new ot(t, n[t]));
                var a = localStorage.getItem(r.OLD_SDK.PUSH_TOKEN);
                null != a &&
                  "NA" !== a &&
                  "null" !== a &&
                  (e.subscribedToOldSdk = !0),
                  t(e);
              }
            } catch (n) {
              fe.error(
                1,
                e,
                "Error getting the migration user. Resolving as a new user."
              ),
                fe.error(1, e, n),
                t(null);
            }
          else t(null);
        });
      }
      static getSync() {
        return ct.instance;
      }
      static get() {
        const e = ct.baseLogTag + ".get";
        return (
          null != lt ||
            (lt = new Promise((t) => {
              Te.getInstance().then((n) => {
                Bt.getWebSDKSettings()
                  .then((n) => {
                    var i = ct.getLocalUser(),
                      a = n.isDomainLevelStorage
                        ? ct.getCookieUser()
                        : "resolved";
                    (n = ct.getMigrationUser()),
                      Promise.all([i, a, n])
                        .then((n) => {
                          const i = n[0],
                            a = n[1],
                            s = n[2];
                          s
                            ? s.save().then((n) => {
                                var i = localStorage.getItem(
                                  r.OLD_SDK.USER_DATA
                                );
                                if (i) {
                                  const e = JSON.parse(i);
                                  (e.is_new_sdk_migrated = !0),
                                    localStorage.setItem(
                                      r.OLD_SDK.USER_DATA,
                                      JSON.stringify(e)
                                    );
                                }
                                fe.log(
                                  1,
                                  e,
                                  "User resolved from older SDK: ",
                                  n
                                ),
                                  t(n);
                              })
                            : a && "resolved" !== a
                            ? (fe.log(1, e, "User resolved from cookie: ", a),
                              a.save().then((e) => {
                                t(e);
                              }))
                            : (fe.log(1, e, "Local user: ", i),
                              new ct(i).save().then((e) => {
                                t(e);
                              }));
                        })
                        .catch((t) => {
                          fe.log(1, e, "Error in fetching/creating user", t);
                        });
                  })
                  .catch((t) => {
                    fe.error(
                      1,
                      e,
                      "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                    );
                  });
              });
            })),
          lt
        );
      }
      static logout() {
        return new Promise((e) => {
          (lt = null), e(!(this.instance = null));
        });
      }
      save() {
        ct.baseLogTag,
          ct.isAmpEnabled() && (this.deviceUuid = ve.get("moe_uuid")),
          Ee.get("WEB_SETTINGS");
        var e = Ee.get(r.WEB_SETTINGS);
        return (
          "allowed" === (null == e ? void 0 : e.c_w_p_e) &&
            (this.deviceUuid = this.deviceUuid || window.MoeWebP.deviceUuid),
          (ct.instance = this),
          new Promise((e) => {
            Ee.set(r.USER_DATA, this),
              ve.setRaw(Q, ct.instance.deviceUuid),
              e(this);
          })
        );
      }
      static isAmpEnabled() {
        const e = ve.get(Q);
        return e && e.includes("amp");
      }
      getAttribute(e) {
        let t = null;
        return (
          (e = ct.getMorphedKey(e)),
          this.attributes.map((n) => {
            n.key === e && (t = n.value);
          }),
          t
        );
      }
      indexOfAttribute(e) {
        let t = -1;
        return (
          (e = ct.getMorphedKey(e)),
          this.attributes.map((n, i) => {
            n.key === e && (t = i);
          }),
          t
        );
      }
      static getMorphedKey(e) {
        switch (e) {
          case "id":
            e = I;
            break;
          case "email":
            e = A;
            break;
          case "name":
            e = w;
            break;
          case "first_name":
            e = O;
            break;
          case "last_name":
            e = D;
            break;
          case "mobile":
            e = C;
            break;
          case "gender":
            e = P;
            break;
          case "birthday":
            e = R;
        }
        return e;
      }
    }
    (ct.baseLogTag = "UserModel"), (ct.isResolved = !1), (ct.instance = null);
    class dt {
      constructor() {
        var e = dt.baseLogTag + ".constructor";
        const t = void 0;
        let n = ct.getSync().getAttribute("id");
        n = n ? n.toString() : void 0;
        const i = window.analytics;
        let a, r;
        if (i) {
          r = i._VERSIONS;
          try {
            a = i.user().anonymousId();
          } catch (t) {
            fe.error(1, e, "Error getting anonymous id from segment api", t);
          }
        }
        (this.c = void 0),
          (this.h = ""),
          (this.identifiers = void 0),
          (n || a) && (this.identifiers = { moe_user_id: n, segment_id: a }),
          (this.meta = { bid: (0, rt.v4)(), segmentSdkData: i ? r : void 0 });
      }
    }
    dt.baseLogTag = "ReportPostData";
    class ut {
      constructor(e, t, n) {
        ut.baseLogTag,
          (this.type = e),
          (this.getParams = t),
          (this.event = n),
          (this.postData = new dt());
        const i = {},
          a = {};
        for (const e of n.attributes)
          if (
            e &&
            null != e.key &&
            ((this.status = ut.STATUS.VALID), null != e.value)
          )
            if ("function" == typeof e.value.getMonth) {
              const t = {};
              (t[e.key] = Math.round(
                e.value.getTime() - 6e4 * e.value.getTimezoneOffset()
              )),
                null == a.timestamp && (a.timestamp = []),
                a.timestamp.push(t);
            } else i[e.key] = e.value;
        (this.postData.e = n.name),
          (this.postData.a = i),
          (this.postData.c = xe(a) ? void 0 : a),
          window &&
            window.location &&
            null != window.location.href &&
            (this.postData.url = window.location.href);
      }
    }
    (ut.baseLogTag = "ReportClass"),
      ((at = (bi = ut = ut || {}).STATUS || (bi.STATUS = {}))[
        (at.INVALID = 0)
      ] = "INVALID"),
      (at[(at.VALID = 1)] = "VALID"),
      ((bi = bi.REPORT_ADD_TYPE || (bi.REPORT_ADD_TYPE = {}))[
        (bi.USER_ATTRIBUTE = 0)
      ] = "USER_ATTRIBUTE"),
      (bi[(bi.EVENT = 1)] = "EVENT");
    const gt = ut;
    class ht {
      constructor() {
        (this.isDomainLevelStorage = !1),
          (this.isConfigured = !1),
          (this.isPushSubBilling = !1),
          (this.platformSettings = new St()),
          (this.optInConfig = new pt()),
          (this.s_i_d = 1800),
          (this.c_s = !1),
          (this.a_s = "allowed"),
          (this.i_b_e = !1),
          (this.s_s_d = !1);
      }
      static parseOldSettings(e) {
        const t = new ht();
        if ((t.oldWebData = e).webData && !xe(e.webData)) {
          t.isConfigured = !0;
          var n = e.webData;
          "false" === he(n, "domain_level_storage", !1)
            ? (t.isDomainLevelStorage = !1)
            : (t.isDomainLevelStorage = !(
                !he(n, "domain_level_storage", !1) &&
                "true" !== he(n, "domain_level_storage", !1)
              )),
            ("allowed" !== (e = he(n, "c_s", !1)) &&
              !0 !== e &&
              "true" !== e) ||
              (t.c_s = !0),
            ("blocked" !== (e = he(n, "a_s", "allowed")) &&
              !1 !== e &&
              "false" !== e) ||
              (t.a_s = "blocked"),
            ("allowed" !== (e = he(n, "i_b_e", !1)) &&
              !0 !== e &&
              "true" !== e) ||
              (t.i_b_e = !0),
            ("allowed" !== (e = he(n, "s_s_d", !1)) &&
              !0 !== e &&
              "true" !== e) ||
              (t.s_s_d = !0);
          let i = he(n, "PushSubBilling", !1);
          "false" === i ? (i = !1) : "true" === i && (i = !0),
            ((e) => "boolean" == typeof e)(i) || (i = !1),
            (t.isPushSubBilling = i),
            (t.platformSettings.chrome.domainType = he(
              n,
              "webPushPlatformData.chrome.domain_type",
              ""
            )),
            (t.platformSettings.chrome.enabled = !0),
            (t.platformSettings.chrome.apiKey = he(
              n,
              "webPushPlatformData.chrome.api_key",
              ""
            )),
            (t.platformSettings.chrome.projectNumber = he(
              n,
              "webPushPlatformData.chrome.project_number",
              null
            )),
            (t.platformSettings.chrome.subscriptionMode = he(
              n,
              "webPushPlatformData.chrome.subscriptionMode",
              "normal"
            )),
            (t.platformSettings.chrome.vapidPublicKey = he(
              n,
              "webPushPlatformData.chrome.vapidPublicKey",
              null
            )),
            (t.platformSettings.firefox.enabled = !0),
            (t.platformSettings.firefox.apiKey = he(
              n,
              "webPushPlatformData.chrome.api_key",
              ""
            )),
            (t.platformSettings.firefox.projectNumber = he(
              n,
              "webPushPlatformData.chrome.project_number",
              null
            )),
            (t.platformSettings.firefox.subscriptionMode = he(
              n,
              "webPushPlatformData.firefox.subscriptionMode",
              "normal"
            )),
            (t.platformSettings.firefox.vapidPublicKey = he(
              n,
              "webPushPlatformData.firefox.vapidPublicKey",
              null
            )),
            (t.platformSettings.safari.websitePushId = he(
              n,
              "webPushPlatformData.safari.websitePushId",
              null
            )),
            null == t.platformSettings.safari.websitePushId
              ? (t.platformSettings.safari.enabled = !1)
              : (t.platformSettings.safari.enabled = !0),
            (t.optInConfig.reappearTime = parseInt(he(n, "promptAgain", 24))),
            he(n, "call_push_moengage", !0)
              ? he(n, "banner.banner_flag", null)
                ? (t.optInConfig.type = pt.TYPE.TWO_STEP)
                : (t.optInConfig.type = pt.TYPE.ONE_CLICK)
              : ((t.optInConfig.type = pt.TYPE.SELF_HANDLED),
                (t.optInConfig.reappearTime = 0)),
            (t.optInConfig.showOverlay = he(n, "show_overlay", !1)),
            (t.optInConfig.loadTime = he(n, "load_time", 0)),
            (t.optInConfig.softAskConfig.desktop.customHTML = he(
              n,
              "bannerHtml.web",
              null
            )),
            (t.optInConfig.softAskConfig.mobile.customHTML = he(
              n,
              "bannerHtml.mweb",
              null
            )),
            (t.platformSettings.chrome.isServiceWorkerRoot = !he(
              n,
              "is_service_worker_not_root",
              !1
            )),
            (t.platformSettings.chrome.serviceWorkerFilename = he(
              n,
              "serviceworker_file",
              "serviceworker.js"
            )),
            "" === t.platformSettings.chrome.serviceWorkerFilename &&
              (t.platformSettings.chrome.serviceWorkerFilename =
                "serviceworker.js"),
            (t.s_i_d = he(n, "s_i_d", 1800)),
            (t.s_s_s = he(n, "s_s_s", "allowed")),
            (t.src_ext = he(n, "src_ext", [])),
            (t.s_e_b_e = he(n, "s_e_b_e", "blocked")),
            (t.e_b_c = he(n, "e_b_c", 10)),
            (t.p_f_t = he(n, "p_f_t", 60)),
            (t.b_e = he(n, "b_e", [])),
            (t.w_e = he(n, "w_e", [])),
            (t.c_w_p_e = he(n, "c_w_p_e", "blocked")),
            (t.o_u_e = he(n, "o_u_e", "blocked"));
        } else t.isConfigured = !1;
        return t;
      }
    }
    ht.baseLogTag = "SdkSettings";
    class pt {
      constructor() {
        (this.type = pt.TYPE.NA),
          (this.reappearTime = 24),
          (this.softAskConfig = { desktop: new mt(), mobile: new mt() });
      }
    }
    class mt {
      constructor() {
        this.customHTML = null;
      }
    }
    ((bi = (bi = pt = pt || {}).TYPE || (bi.TYPE = {})).NA = "NA"),
      (bi.ONE_CLICK = "ONE_CLICK"),
      (bi.TWO_STEP = "TWO_STEP"),
      (bi.SELF_HANDLED = "SELF_HANDLED");
    class ft {
      constructor() {
        (this.enabled = !1), (this.websitePushId = null);
      }
    }
    class vt {
      constructor() {
        (this.enabled = !1),
          (this.isServiceWorkerRoot = !0),
          (this.serviceWorkerFilename = "serviceworker.js"),
          (this.apiKey = ""),
          (this.subscriptionMode = "normal"),
          (this.vapidPublicKey = null),
          (this.domainType = "");
      }
    }
    ((bi = (bi = vt = vt || {}).DOMAIN_TYPE || (bi.DOMAIN_TYPE = {})).NA =
      "NA"),
      (bi.HTTPS = "https"),
      (bi.MUTLI = "multi");
    class St {
      constructor() {
        (this.safari = new ft()),
          (this.chrome = new vt()),
          (this.firefox = new vt());
      }
    }
    const Et = ht;
    var _t = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class bt {
      static initStore() {
        return _t(this, void 0, void 0, function* () {
          return (
            null == bt.ready &&
              ((bt.offlineDataStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: "moe_database",
                storeName: te.NAME,
              })),
              (bt.ready = Promise.resolve(bt.offlineDataStore.ready()))),
            yield bt.ready
          );
        });
      }
      static initialize() {
        return _t(this, void 0, void 0, function* () {
          yield bt.initStore();
        });
      }
    }
    class yt {
      constructor(e) {
        (this.EVENT_ACTION = e.event.name),
          (this.EVENT_ATTRS = Tt(e.event.attributes)),
          (this.EVENT_G_TIME = new Date().getTime().toString()),
          (this.EVENT_L_TIME = Qe()),
          (this.EVENT_ATTRS_CUST = e.postData.c),
          (this.N_I_E = e.postData.nie);
      }
    }
    yt.baseLogTag = "ReportAddViewEvent";
    const Tt = (e) => {
      const t = {};
      return (
        e.forEach((e) => {
          t[e.key] = e.value;
        }),
        t
      );
    };
    class It {
      static visibilityChange() {
        "hidden" === document.visibilityState &&
          (It.windowClosed || Dt.reactToTriggerEvents());
      }
      static beforeUnload() {
        (It.windowClosed = !0), Dt.sendBeacon();
      }
      static removeEventListeners() {
        document.removeEventListener(
          "visibilitychange",
          It.visibilityChange,
          !1
        ),
          window.removeEventListener("beforeunload", It.beforeUnload, !1);
      }
      static addListeners() {
        document.addEventListener("visibilitychange", It.visibilityChange, !1),
          window.addEventListener("beforeunload", It.beforeUnload, !1);
      }
    }
    It.windowClosed = !1;
    const At = It;
    var wt = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class Ot {
      static updateEventStore() {
        Ot.batchedEvents.setItem(X, Ot.reports);
      }
      static spliceReports(e = Ot.reports.length) {
        return (e = Ot.reports.splice(0, e)), Ot.updateEventStore(), e;
      }
      static shouldCreateNewBatch() {
        return (
          !Ot.lastbatchCreatedAt ||
          new Date().getTime() - Ot.lastbatchCreatedAt >= ie
        );
      }
      static reactToTriggerEvents() {
        var e = Ot.baseLogTag + ".reactToTriggerEvents";
        0 < Ot.reports.length && Ot.shouldCreateNewBatch()
          ? (fe.log(
              1,
              e,
              `Trigger Events: Created Batch of ${Ot.reports.length} reports`,
              Qe()
            ),
            Ot.createBatch())
          : fe.log(2, e, Qe() + ": No report's to sync for this event.");
      }
      static periodicSync(e) {
        var t = Ot.baseLogTag + ".periodicSync";
        0 < Ot.reports.length && Ot.shouldCreateNewBatch()
          ? (fe.log(
              1,
              t,
              `Periodic sync: Created Batch of ${Ot.reports.length} reports`,
              Qe()
            ),
            Ot.createBatch())
          : fe.log(
              2,
              t,
              Qe() +
                `: No report's to sync at this interval. The next sync will attempt in ${e} seconds`
            );
      }
      static clearInterval() {
        clearInterval(Ot.periodicSyncInterval), (Ot.lastbatchCreatedAt = null);
      }
      static init(e) {
        Te.getInstance().then((t) => {
          Ot.isOfflineBatchingSupported(t, e) &&
            (Ot.periodicSyncInterval && Ot.clearInterval(),
            (Ot.periodicSyncInterval = window.setInterval(
              Ot.periodicSync.bind(this, e.p_f_t),
              1e3 * e.p_f_t
            )),
            At.addListeners());
        });
      }
      static sendBatch(e) {
        return wt(this, void 0, void 0, function* () {
          var t = Ot.baseLogTag + ".sendBatch";
          try {
            yield Bt.sendBatchOfReports(e).then(() => {
              Ot.lastbatchCreatedAt = new Date().getTime();
            });
          } catch (e) {
            fe.error(1, t, "Error in sending batch", e);
          }
        });
      }
      static createBatch(e) {
        0 < Ot.reports.length && ((e = Ot.spliceReports(e)), Ot.sendBatch(e));
      }
      static addReport(e, t) {
        var n = Ot.baseLogTag + ".addReport";
        (e = new yt(e)),
          Ot.reports.push(e),
          Ot.updateEventStore(),
          Ot.reports.length === t &&
            (fe.log(1, n, `Created Batch of ${t} reports`, Qe()),
            Ot.createBatch(t));
      }
      static sendBeacon() {
        var e = Ot.baseLogTag + ".sendBeacon";
        0 < Ot.reports.length &&
          (Bt.sendBeacon(Ot.reports),
          fe.log(
            1,
            e,
            `Window Unload: Created batch of ${Ot.reports.length} reports`,
            Qe()
          ));
      }
      static flushReports() {
        return wt(this, void 0, void 0, function* () {
          var e = Ot.baseLogTag + ".flushReports";
          try {
            At.removeEventListeners(),
              0 < Ot.reports.length &&
                (fe.log(1, e, `Flushed ${Ot.reports.length} reports`, Qe()),
                yield Ot.sendBatch(Ot.spliceReports()));
          } catch (t) {
            fe.error(1, e, "Error in flushing reports", t);
          }
        });
      }
      static isOfflineBatchingSupported(e, t) {
        return je((t = t || Ee.get(r.WEB_SETTINGS)), e);
      }
    }
    (Ot.baseLogTag = "BatchManager"),
      (Ot.reports = []),
      (Ot.lastbatchCreatedAt = null),
      (Ot.batchedEvents = ge.createInstance({
        driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
        name: "moe_tracking",
        storeName: X,
      }));
    const Dt = Ot;
    class Ct {
      static getListeners() {
        return this.listeners;
      }
      static getTopicListeners(e) {
        return he(Ct.topicListeners, e, []);
      }
      static addListener(e) {
        Ct.listeners.push(e);
      }
      static addTopicListener(e, t) {
        (Ct.topicListeners[e] = Ct.getTopicListeners(e)),
          Ct.topicListeners[e].push(t);
      }
      static broadcast(e) {
        Ct.listeners.map((t) => {
          t(e);
        }),
          he(Ct.topicListeners, e.topic, []).map((t) => {
            t(e);
          });
      }
      static broadcastToWindow(e) {
        window &&
          window.dispatchEvent(
            new CustomEvent(e.topic, {
              detail: { name: e.name, data: e.data || null },
            })
          );
      }
      static deprecatedSdkCallback(e) {
        window.dispatchEvent(new CustomEvent("MOE_OPT_IN", { detail: e }));
      }
      static resetAllListeners() {
        (Ct.listeners = []), (Ct.topicListeners = {});
      }
    }
    (Ct.listeners = []), (Ct.topicListeners = {});
    const Pt = Ct;
    class Rt {
      constructor(e, t, n = !0) {
        (this.name = e),
          (this.attributes = t),
          n && this.attributes.push(new ot("URL", location.href));
      }
      static createUserAttributeEvent(e) {
        return new Promise((t, n) => {
          const i = [],
            a = e.key;
          switch (e.key) {
            case "id":
              e.key = I;
              break;
            case "email":
              e.key = A;
              break;
            case "name":
              e.key = w;
              break;
            case "first_name":
              e.key = O;
              break;
            case "last_name":
              e.key = D;
              break;
            case "mobile":
              e.key = C;
              break;
            case "gender":
              e.key = P;
              break;
            case "birthday":
              e.key = R;
          }
          i.push(e),
            ct.get().then((n) => {
              var r = n.indexOfAttribute("oldUniqueIds");
              e.key === I &&
                -1 < r &&
                null != n.attributes[r].value &&
                0 < n.attributes[r].value.length &&
                i.push(
                  new ot(
                    N,
                    n.attributes[r].value[n.attributes[r].value.length - 1]
                  )
                ),
                e.key !== a &&
                  fe.log(
                    2,
                    "Event.createUserAttributeEvent",
                    "Key changed to MoE reserved keyname: ",
                    e.key
                  ),
                t(new Rt("EVENT_ACTION_USER_ATTRIBUTE", i, !1));
            });
        });
      }
      static createEvent(e, t, n) {
        return new Promise((i, a) => {
          ct.get().then((a) =>
            (function (e, t, n, i) {
              return new (n = n || Promise)(function (t, a) {
                function r(e) {
                  try {
                    o(i.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    o(i.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function o(e) {
                  var i;
                  e.done
                    ? t(e.value)
                    : ((i = e.value) instanceof n
                        ? i
                        : new n(function (e) {
                            e(i);
                          })
                      ).then(r, s);
                }
                o((i = i.apply(e, [])).next());
              });
            })(this, 0, void 0, function* () {
              try {
                var r = new ot("moe_logged_in_status", !!a.getAttribute("id"));
                const o = new st();
                var s = new ot("moe_first_visit", o.getNumberOfSessions() <= 1);
                t.push(r, s), i(new Rt(e, t, n));
              } catch (r) {
                fe.error(
                  1,
                  "Event.createEvent",
                  "Error occurred in create events ",
                  r
                );
              }
            })
          );
        });
      }
    }
    class Nt {
      static addEvent(e) {
        Nt.history.push(e),
          Nt.listeners.forEach((t) => {
            t(e);
          });
      }
      static getHistory() {
        return Nt.history;
      }
      static addEventListener(e) {
        Nt.listeners.push(e);
      }
      static clear() {
        Nt.history = [];
      }
    }
    (Nt.history = []), (Nt.listeners = []);
    class Mt {
      static track(e, t, n) {
        const i = "MoEngage.event.trackEvent";
        return new Promise((a, r) =>
          (function (e, t, n, i) {
            return new (n = n || Promise)(function (t, a) {
              function r(e) {
                try {
                  o(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  o(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                var i;
                e.done
                  ? t(e.value)
                  : ((i = e.value) instanceof n
                      ? i
                      : new n(function (e) {
                          e(i);
                        })
                    ).then(r, s);
              }
              o((i = i.apply(e, [])).next());
            });
          })(this, 0, void 0, function* () {
            var r;
            let s;
            n = !!n;
            try {
              s = yield Bt.getWebSDKSettings();
            } catch (r) {
              return void fe.error(
                1,
                i,
                "Error in getting Web SDK Settings. This might indicate that the App is blocked."
              );
            }
            if ("string" == typeof e && e)
              if (s.b_e && s.b_e.includes(e))
                fe.log(
                  1,
                  i,
                  `This event "${e}" is blacklisted. Please contact Moengage team to whitelist it.`
                ),
                  a({ error: 5001, message: `Event "${e}" is blacklisted.` });
              else if (!se.includes(e) || (s.w_e && s.w_e.includes(e)))
                try {
                  const l = [];
                  if (
                    null == t ||
                    (null !== t &&
                      t === Object(t) &&
                      "[object Object]" === Object.prototype.toString.call(t))
                  ) {
                    for (const e in (t = null == t ? {} : t))
                      t.hasOwnProperty(e) && l.push(new ot(e, t[e]));
                    const i = new st();
                    yield i.initiateSessionAndSource(s.s_s_d);
                    const c = yield Rt.createEvent(e, l);
                    Nt.addEvent(c),
                      "allowed" === (null == s ? void 0 : s.c_w_p_e) &&
                        null !== (r = window.MoeWebP) &&
                        void 0 !== r &&
                        r.handleInSessionEvent(c),
                      Bt.collectGetParams().then((t) => {
                        e === o && delete t.push_id;
                        const r = new gt(gt.REPORT_ADD_TYPE.EVENT, t, c);
                        var l = {
                          session_id: i.getSessionKey(),
                          start_time: i.getSessionStartTime(),
                          background_initiated: 0,
                        };
                        const d = [];
                        (t = i.getActiveSource()) &&
                          (i.setCurrentSource(t), d.push(t)),
                          (r.postData.meta.session = l),
                          d.length && (r.postData.meta.source = d),
                          i.isNonEventInteractive(c) && (r.postData.nie = 1),
                          Bt.reportAdd(r, n).then(() => {
                            s.s_s_s !== K.ALLOWED ||
                              i.isNonEventInteractive(c) ||
                              i.extendSession(),
                              a(!0);
                          });
                      });
                  } else
                    fe.error(
                      1,
                      i,
                      "Event attributes were not passed a key-value pair object for event: ",
                      e
                    ),
                      a({
                        error: 5002,
                        message:
                          "Event value needs to be a key-value pair object",
                      });
                } catch (r) {
                  fe.error(1, i, "Error occurred in tracking events ", r);
                }
              else
                fe.log(
                  1,
                  i,
                  `This event "${e}" has not been whitelisted. Please contact Moengage team to whitelist it.`
                ),
                  a({
                    error: 5001,
                    message: `Event "${e}" is not whitelisted.`,
                  });
            else
              fe.log(
                1,
                i,
                "Event name not a string or null or empty string:",
                e
              ),
                a({ error: 5001, message: "Event name can not be null" });
          })
        );
      }
    }
    var kt,
      Lt,
      xt = function (e, t, n, i) {
        return new (n = n || Promise)(function (a, r) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(s, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
    class Bt {
      static deviceAdd() {
        return new Promise((e, t) => {
          const n = Le.get();
          return Bt.collectGetParams().then((i) => {
            (i = { queryParams: i }),
              it
                .post(n.baseDomainName + "v2/device/add", i)
                .then(() => {
                  let t = Ge().toUpperCase();
                  (t = "WEB" === t ? "DESKTOP" : t),
                    Mt.track(_, { deviceType: t }),
                    ct.get().then((t) => {
                      (t.deviceAdded = !0),
                        t.save().then(() => {
                          Ht.startPeriodicClear(r.Q.REPORT),
                            Bt.onDeviceAdd.res(),
                            e(!0);
                        });
                    });
                })
                .catch((e) => {
                  _e.enqueue(r.Q.DEVICE, !0), t(!1);
                });
          });
        });
      }
      static reportAdd(e, t) {
        const n = Bt.baseLogTag + ".reportAdd";
        return new Promise(
          (i, a) => (
            (t = !!t),
            Bt.getWebSDKSettings()
              .then((s) => {
                s.isPushSubBilling
                  ? ct.get().then((s) => {
                      s.deviceAdded
                        ? Bt.reportAddInternal(e, t)
                            .then(() => {
                              this.sendBroadcast(e), i(!0);
                            })
                            .catch(() => {
                              a(!1);
                            })
                        : (_e.enqueue(r.Q.REPORT, e),
                          fe.log(
                            1,
                            n,
                            "Report added to queue as device not added yet:",
                            e.event.name
                          ),
                          fe.log(2, n, "Event Queued:", e.event.name),
                          e.type === gt.REPORT_ADD_TYPE.USER_ATTRIBUTE &&
                            (Bt.isPushSubAttributeAccepted(
                              e.event.attributes[0].key
                            )
                              ? (fe.log(
                                  1,
                                  n,
                                  "Attribute accepted for push sub billing."
                                ),
                                Bt.deviceAdd())
                              : fe.log(
                                  2,
                                  n,
                                  "Attribute NOT accepted for push sub billing."
                                )),
                          i(!0));
                    })
                  : Bt.reportAddInternal(e, t)
                      .then(() => {
                        this.sendBroadcast(e), i(!0);
                      })
                      .catch(() => {
                        a(!1);
                      });
              })
              .catch((e) => {
                fe.error(
                  1,
                  n,
                  "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                ),
                  a(!1);
              })
          )
        );
      }
      static sendBroadcast(e) {
        re.NAMES.includes(e.event.name) &&
          Pt.broadcastToWindow({
            topic: re.TOPIC,
            name: e.event.name,
            data: e.event.attributes,
          });
      }
      static getSegmentId() {
        const e = window.analytics;
        if (e && e.user) return e.user().anonymousId();
      }
      static getBatchRequestOptions(e) {
        return new Promise((t) => {
          Bt.collectGetParams().then((n) => {
            var i = Bt.getSegmentId() || "";
            const a = ct.getSync(),
              r = new st();
            var s = {
              session_id: r.getSessionKey(),
              start_time: r.getSessionStartTime(),
              background_initiated: 0,
            };
            const o = [];
            var l = r.getActiveSource();
            l && (r.setCurrentSource(l), o.push(l)),
              (s = {
                query_params: n,
                identifiers: {
                  moe_user_id: a.getAttribute("id") || void 0,
                  segment_id: i || void 0,
                },
                meta: {
                  bid: (0, rt.v4)(),
                  request_time: new Date().toISOString(),
                  session: s,
                  source: o.length ? o : void 0,
                },
                viewsCount: e.length,
                viewsInfo: [...e],
              }),
              t(s);
          });
        });
      }
      static addReportsToOfflineDB(e, t) {
        return xt(this, void 0, void 0, function* () {
          const n = Bt.baseLogTag + ".addReportsToOfflineDB";
          var i = yield Bt.getBatchRequestOptions([]);
          yield bt.offlineDataStore.setItem(
            t || "report_add_" + new Date().getTime(),
            e
          ),
            yield bt.offlineDataStore.setItem("requestMetaData", i),
            navigator.serviceWorker &&
              navigator.serviceWorker.ready.then((e) => {
                e.sync
                  ? e.sync
                      .register("moe_offline_data_sync")
                      .then(() => {
                        fe.log(2, n, "offline sync event registered");
                      })
                      .catch((e) => {
                        fe.error(1, n, "Service worker sync error", e);
                      })
                  : fe.log(2, n, "Service worker sync unavailable");
              });
        });
      }
      static sendReportBeacon(e, t, n) {
        return !!(
          e &&
          navigator.sendBeacon &&
          navigator.sendBeacon(
            t,
            new Blob([JSON.stringify(n)], { type: "text/plain;charset=UTF-8" })
          )
        );
      }
      static sendBatchOfReports(e) {
        const t = Bt.baseLogTag + ".sendBatchOfReports";
        return new Promise((n, i) => {
          Bt.getBatchRequestOptions(e).then((a) => {
            var r = Le.get();
            const s = r.baseDomainName + ne + r.appId;
            Bt.getWebSDKSettings()
              .then((r) =>
                Bt.sendReportBeacon(r.i_b_e, s, a)
                  ? (fe.log(
                      1,
                      t,
                      "[sendBatchOfReports] batch payload: " + JSON.stringify(e)
                    ),
                    fe.log(
                      1,
                      t,
                      "Batch sent to MoEngage successfully through beacon"
                    ),
                    void n(!0))
                  : void it
                      .post(s, { postData: a })
                      .then(() => {
                        fe.log(
                          1,
                          t,
                          "[sendBatchOfReports] batch payload: " +
                            JSON.stringify(e)
                        ),
                          fe.log(1, t, "Batch sent to MoEngage successfully"),
                          n(!0);
                      })
                      .catch((a) => {
                        fe.error(1, t, "Batch Report add API failed", a),
                          Te.getInstance()
                            .then((s) => {
                              Dt.isOfflineBatchingSupported(s, r)
                                ? (Bt.addReportsToOfflineDB(e).then(() => {
                                    fe.log(
                                      2,
                                      t,
                                      "Network offline: Batch added to offline db"
                                    );
                                  }),
                                  n(!0))
                                : i(a);
                            })
                            .catch(() => {
                              i(a);
                            });
                      })
              )
              .catch((e) => {
                fe.error(
                  1,
                  t,
                  "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                ),
                  i(e);
              });
          });
        });
      }
      static reportAddInternal(e, t) {
        const n = Bt.baseLogTag + ".reportAddInternal";
        return new Promise((i, a) => {
          Bt.getWebSDKSettings()
            .then((a) => {
              Te.getInstance().then((s) => {
                if ("allowed" !== a.s_e_b_e || t) {
                  const l = Bt.getUpdatedPushDetails();
                  for (const t in l)
                    !l.hasOwnProperty(t) ||
                      (e.event.name === o && "push_id" === t) ||
                      (e.getParams[t] = l[t]);
                  const c = { queryParams: e.getParams };
                  if (e.postData.nie) {
                    const t = Object.assign({}, e);
                    delete t.postData.meta.source,
                      delete t.postData.meta.session,
                      (c.postData = t.postData);
                  } else c.postData = e.postData;
                  let d = Le.get().baseDomainName;
                  if (
                    ((d += t ? "v2/device/add" : "v2/report/add"),
                    !d.includes("v2/device/add") &&
                      Bt.sendReportBeacon(
                        a.i_b_e,
                        tt(d, he(c, "queryParams", null)),
                        c.postData
                      ))
                  )
                    return (
                      fe.log(1, n, "Event tracked through beacon:", e.event),
                      void i(Bt.handleReportAddSuccess(e))
                    );
                  it.post(d, c)
                    .then(() => {
                      if (d.includes("v2/device/add")) {
                        let e = Ge().toUpperCase();
                        (e = "WEB" === e ? "DESKTOP" : e),
                          Mt.track(_, { deviceType: e });
                      }
                      i(Bt.handleReportAddSuccess(e));
                    })
                    .catch((i) => {
                      var o;
                      je(a, s)
                        ? (fe.error(
                            1,
                            n,
                            "Add Report API failed, adding reports to offline db",
                            i
                          ),
                          t
                            ? _e.enqueue(r.Q.DEVICE, e)
                            : ((o = new yt(e)),
                              Bt.offlineEvents.push(o),
                              Bt.addReportsToOfflineDB(
                                Bt.offlineEvents,
                                "report_add"
                              ).then(() => {
                                fe.log(
                                  2,
                                  n,
                                  "Network offline: Batch added to offline db"
                                );
                              })))
                        : Bt.handleReportAddFailure(e, i);
                    });
                } else {
                  var l;
                  je(a, s)
                    ? (Dt.addReport(e, a.e_b_c),
                      fe.log(1, n, "Event batched successfully:", e.event),
                      Bt.eventStore.setItem(e.event.name, e.event),
                      i(!0))
                    : ((l = new yt(e)),
                      Bt.sendBatchOfReports([l])
                        .then(() => {
                          i(Bt.handleReportAddSuccess(e));
                        })
                        .catch((t) => {
                          Bt.handleReportAddFailure(e, t);
                        }));
                }
              });
            })
            .catch((e) => {
              fe.error(
                1,
                n,
                "Error in getting Web SDK Settings. This might indicate that the App is blocked."
              ),
                a(!1);
            });
        });
      }
      static handleReportAddSuccess(e) {
        var t = Bt.baseLogTag + ".handleReportAddSuccess";
        return (
          e.type === gt.REPORT_ADD_TYPE.EVENT
            ? (fe.log(1, t, "Event tracked successfully:", e.event),
              Bt.eventStore.setItem(e.event.name, e.event))
            : e.type === gt.REPORT_ADD_TYPE.USER_ATTRIBUTE &&
              fe.log(
                1,
                t,
                "User attribute added successfully:",
                e.event.attributes
              ),
          (Bt.addReportApiRetries = 1),
          !0
        );
      }
      static handleReportAddFailure(e, t) {
        var n = Bt.baseLogTag + ".handleReportAddFailure";
        fe.error(1, n, "Add Report API failed", t),
          e.type === gt.REPORT_ADD_TYPE.EVENT
            ? fe.log(1, n, "Queueing unsuccessful event tracking:", e.event)
            : e.type === gt.REPORT_ADD_TYPE.USER_ATTRIBUTE &&
              fe.log(
                1,
                n,
                "Queueing unsuccessful user attribute add:",
                e.event.attributes
              ),
          Bt.addReportApiRetries < 3 &&
            setTimeout(() => {
              Bt.addReportApiRetries++,
                _e.enqueue(r.Q.REPORT, e),
                Ht.startPeriodicClear(r.Q.REPORT);
            }, 3e3 * Bt.addReportApiRetries);
      }
      static checkIfTokenValid(e) {
        const t = Le.get().baseDomainName + "v2/device/token-check",
          n = Le.get();
        return new Promise((i) => {
          e
            ? ct.get().then((a) => {
                (a = {
                  queryParams: {
                    app_id: n.appId,
                    unique_id: a.deviceUuid,
                    push_id: e,
                  },
                }),
                  it
                    .post(t, a)
                    .then((e) => {
                      200 === e.status ? i(!0) : i(!1);
                    })
                    .catch((e) => {
                      i(!1);
                    });
              })
            : i(!1);
        });
      }
      static isAppBlocked(e) {
        return !(!e || "blocked" !== e.a_s);
      }
      static getWebSDKSettings() {
        return new Promise((e, t) => {
          let n = Le.get();
          var i, a;
          (null != n && null != n.appId) || (n = new Le(Ee.get(r.INIT_DATA))),
            Bt.sdkSettings
              ? Bt.isAppBlocked(Bt.sdkSettings)
                ? t(!1)
                : e(Bt.sdkSettings)
              : ((i = new Date().getTime()),
                null == (a = Ee.get(r.SETUP_TIME)) ||
                0 < n.debugLevel ||
                864e5 < i - a
                  ? Bt.getAndPersistWebSettings(n)
                      .then((t) => {
                        e(t);
                      })
                      .catch((e) => {
                        t(!1);
                      })
                  : Ee.get(r.WEB_SETTINGS)
                  ? ((Bt.sdkSettings = Ee.get(r.WEB_SETTINGS)),
                    Bt.isAppBlocked(Bt.sdkSettings) ? t(!1) : e(Bt.sdkSettings))
                  : Bt.getAndPersistWebSettings(n)
                      .then((t) => {
                        e(t);
                      })
                      .catch((e) => {
                        t(!1);
                      }));
        });
      }
      static getAndPersistWebSettings(e) {
        const t = Bt.baseLogTag + ".getAndPersistWebSettings";
        return new Promise((n, i) =>
          xt(this, void 0, void 0, function* () {
            try {
              var a = {
                queryParams: {
                  app_id: (e =
                    null == e.appId ? new Le(Ee.get(r.INIT_DATA)) : e).appId,
                },
              };
              fe.log(1, t, "Fetching latest web sdk settings for", e.appId);
              var s = yield it.get(e.baseDomainName + "websdksettings", a);
              fe.log(1, t, "Fetching config settings for", e.appId);
              let g = s.responseText;
              "string" == typeof g && (g = JSON.parse(g));
              var o = Ke() ? "mweb" : "web",
                l = e.baseDomainName + q + o + "/" + e.appId;
              try {
                var c,
                  d = yield it.get(l);
                fe.log(1, t, "Fetched latest web and config settings"),
                  200 === d.status &&
                    ((c = d.responseText),
                    (c = JSON.parse(c)),
                    (g.webData = Object.assign(
                      Object.assign({}, g.webData),
                      c
                    )));
              } catch (e) {
                fe.error(1, t, "Config API failed");
              }
              var u = new Date().getTime();
              if (
                ((g = Et.parseOldSettings(g)),
                Ee.set(r.WEB_SETTINGS, g),
                Ee.set(r.SETUP_TIME, u),
                Bt.isAppBlocked(g))
              )
                return void i(!1);
              (Bt.sdkSettings = g), n(g);
            } catch (a) {
              fe.error(1, t, "Settings APi Failed: ", a),
                Bt.webSdkApiRetries < 3
                  ? setTimeout(() => {
                      Bt.webSdkApiRetries++, n(Bt.getAndPersistWebSettings(e));
                    }, 3e3 * Bt.webSdkApiRetries)
                  : i(!1);
            }
          })
        );
      }
      static collectGetParams() {
        return new Promise((e, t) => {
          ct.get().then((t) => {
            let n = Le.get();
            (null != n && null != n.appId) || (n = new Le(Ee.get(r.INIT_DATA)));
            const i = new Date(),
              a = Date.UTC(
                i.getUTCFullYear(),
                i.getUTCMonth(),
                i.getUTCDate(),
                i.getUTCHours(),
                i.getUTCMinutes(),
                i.getUTCSeconds(),
                i.getUTCMilliseconds()
              );
            Te.getInstance().then((i) => {
              const s = {
                os: i.os,
                os_platform: i.osPlatform,
                is_incognito: i.isIncognito,
                app_id: n.appId,
                os_ver: i.name,
                sdk_ver: "2.19.20",
                model: i.name,
                app_ver: "1.0",
                device_ts: Number(a),
                device_tz_offset: (
                  -6e4 * new Date().getTimezoneOffset()
                ).toString(),
                unique_id: t.deviceUuid,
                device_tz: new Date().getTimezoneOffset().toString(),
              };
              var o = Ee.get(r.PUSH_TOKEN);
              null != o &&
                "NA" !== o &&
                "" !== o &&
                "null" !== o &&
                (s.push_id = o),
                i.isWebPushCompatible() &&
                  (Ue(this.sdkSettings.platformSettings, i)
                    ? ((s.subscription_type = "vapid"),
                      (s.vapid_public = He(
                        this.sdkSettings.platformSettings,
                        i
                      )))
                    : (s.subscription_type = "normal"),
                  (s.sender_id =
                    this.sdkSettings.platformSettings.chrome.projectNumber)),
                null != n.environment && (s.environment = n.environment),
                i.name === Te.BROWSER_NAMES.SAFARI &&
                  (s.websitePushId =
                    this.sdkSettings.platformSettings.safari.websitePushId);
              var l = Ee.get(r.SUBSCRIPTION_DETAILS);
              if (null != l && null != l.keys) {
                for (const e in l.keys) s["keys_" + e] = encodeURI(l.keys[e]);
                null != l.endpoint && (s.endpoint = encodeURI(l.endpoint)),
                  (s.expirationTime = l.expirationTime);
              }
              e(s);
            });
          });
        });
      }
      static getUpdatedPushDetails() {
        const e = {};
        var t = Ee.get(r.SUBSCRIPTION_DETAILS);
        if (null != t) {
          var n = Ee.get(r.PUSH_TOKEN);
          if (
            (null != n &&
              "NA" !== n &&
              "" !== n &&
              "null" !== n &&
              (e.push_id = n),
            t.keys)
          ) {
            for (const n in t.keys) e["keys_" + n] = encodeURI(t.keys[n]);
            null != t.endpoint && (e.endpoint = encodeURI(t.endpoint)),
              (e.expirationTime = t.expirationTime);
          }
        }
        return e;
      }
      static isPushSubAttributeAccepted(e) {
        return e === A || e === C;
      }
      static sendBeacon(e) {
        Bt.getBatchRequestOptions(e).then((e) => {
          var t =
            (t = Le.get()).baseDomainName +
            ne +
            t.appId +
            "?" +
            new Date().getTime();
          fe.log(
            1,
            "MoeApi.sendBeacon",
            "[sendBeacon] batch payload: " + JSON.stringify(e)
          ),
            navigator.sendBeacon(t, JSON.stringify(e));
        });
      }
    }
    (Bt.baseLogTag = "MoeApi"),
      (Bt.onDeviceAdd = new qe()),
      (Bt.webSdkApiRetries = 1),
      (Bt.offlineEvents = []),
      (Bt.addReportApiRetries = 1),
      (Bt.eventStore = ge.createInstance({
        driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
        name: z,
        storeName: J,
      }));
    const Wt = n(967),
      Ut = r.Q;
    class Ht {
      static clear(e) {
        var t = Ht.baseLogTag + ".clear";
        const n = [];
        for (; !_e.isEmpty(e); )
          switch (e) {
            case Ut.REPORT:
              const i = _e.dequeue(Ut.REPORT);
              n.push((e) => {
                Bt.reportAdd(i).then(() => {
                  e();
                });
              });
              break;
            case Ut.DEVICE:
              _e.dequeue(Ut.DEVICE) &&
                n.push((e) => {
                  Bt.deviceAdd().then(() => {
                    e();
                  });
                });
              break;
            default:
              fe.error(1, t, "Do not know how to handle queue with name:", e);
          }
        setTimeout(() => {
          (Ht.processing[e] = !0),
            Wt(n, 5, (t, n) => {
              Ht.processing[e] = !1;
            });
        }, 0);
      }
      static startPeriodicClear(e) {
        const t = Ht.baseLogTag + ".startPeriodicCleanQ";
        Ht.clearInterval(e);
        var n = () => {
          _e.isEmpty(e)
            ? (fe.log(
                1,
                t,
                "If you see multiple event tracks with same, they were captured over multiple visits or page refreshes."
              ),
              he(Ht.processing, e, !1) || Ht.clearInterval(e))
            : (Ht.clear(e),
              fe.log(1, t, "Starting periodic queue clear for", e));
        };
        n(), (Ht.intervals[e] = setInterval(n, 6e3));
      }
      static clearInterval(e) {
        null != Ht.intervals[e] &&
          (clearInterval(Ht.intervals[e]), (Ht.intervals[e] = null));
      }
    }
    (Ht.baseLogTag = "QManager"), (Ht.intervals = {}), (Ht.processing = {});
    class Ft {
      static isTokenValid(e, t) {
        return new Promise((n, i) => {
          var a, r;
          null != e && null != t
            ? ((a =
                "https://iid.googleapis.com/iid/info/" + e + "?details=true"),
              (r = { headers: { authorization: "key=" + t } }),
              it
                .get(a, r)
                .then((e) => {
                  200 === e.status ? n(!0) : n(!1);
                })
                .catch((i) => {
                  0 === i.code
                    ? setTimeout(() => {
                        n(Ft.isTokenValid(e, t));
                      }, 3e3)
                    : n(!1);
                }))
            : n(!1);
        });
      }
    }
    ((bi = kt = kt || {}).PROMPT = "prompt"),
      (bi.GRANTED = "granted"),
      (bi.DENIED = "denied"),
      (bi.DISMISSED = "dismissed");
    class Kt {
      static addCallback(e, t) {
        null != e &&
          null != t &&
          (null == Kt.callbacks[e] && (Kt.callbacks[e] = []),
          Kt.callbacks[e].push(t));
      }
      static getCallbacks(e) {
        return Kt.callbacks[e] || [];
      }
      static runCallbacks(e) {
        Kt.getCallbacks(e).forEach((e) => {
          e();
        });
      }
    }
    Kt.callbacks = {};
    class Gt {
      constructor(e) {
        (this.swRegisterPromise = null), (this.swActiveRetries = 1);
        const t = Gt.baseLogTag + ".constructor";
        (this.sdkSettings = e),
          this.registerServiceWorker()
            .then((e) => {
              this.sendDataToServiceWorker();
            })
            .catch((e) => {
              fe.error(1, t, "Error registering serviceworker:", e);
            });
      }
      showHardAsk() {
        const e = Gt.baseLogTag + ".showHardAsk";
        return new Promise((t, n) => {
          Gt.isWebPushSupported().then((i) => {
            i
              ? this.getCurrentPermissionState()
                  .then((i) => {
                    this.registerServiceWorker()
                      .then((a) => {
                        i !== kt.DENIED
                          ? (fe.log(1, e, "Attempting to open hard ask"),
                            Mt.track(S),
                            Pt.broadcastToWindow({
                              topic: M,
                              name: L.HARD_ASK_ATTEMPTED,
                            }),
                            this.showOverlay(),
                            this.askPermission()
                              .then((n) => {
                                this.hideOverlay(),
                                  fe.log(
                                    2,
                                    e,
                                    "Permission state after hard ask:",
                                    n
                                  ),
                                  n === kt.GRANTED
                                    ? this.getPushTokenDetails().then((e) => {
                                        this.sendDataToServiceWorker(e.token),
                                          t({
                                            state: n,
                                            subscriptionDetails: e,
                                          });
                                      })
                                    : (this.sendDataToServiceWorker(),
                                      t({
                                        state: n,
                                        subscriptionDetails: null,
                                      }));
                              })
                              .catch((t) => {
                                fe.error(1, e, t), n(B);
                              }))
                          : (fe.log(
                              1,
                              e,
                              "Hard ask not shown as permission state is",
                              i
                            ),
                            t({ state: i, subscriptionDetails: null }));
                      })
                      .catch((t) => {
                        fe.error(1, e, "Error registering serviceworker:", t),
                          n(t);
                      });
                  })
                  .catch((t) => {
                    fe.error(1, e, "Registering service worker failed:", t),
                      n(B);
                  })
              : (fe.warn(
                  1,
                  e,
                  "Web push not supported in current browser environment"
                ),
                n(x));
          });
        });
      }
      sendDataToServiceWorker(e) {
        return new Promise((t) => {
          Bt.collectGetParams().then((t) => {
            var n;
            e && (t.push_id = e || Ee.get(r.PUSH_TOKEN) || void 0),
              (t.isBatchingEnabled = Ee.get(r.WEB_SETTINGS).s_e_b_e),
              Fe() || (null !== (n = Le.get()) && void 0 !== n && n.swScope)
                ? ge
                    .createInstance({
                      driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                      name: "moe_database",
                      storeName: "moe_data",
                    })
                    .setItem("reportParams", { data: t })
                : navigator.serviceWorker.ready.then(() => {
                    this.sendDataToServiceWorkerOnControllerReady(t);
                  });
          });
        });
      }
      sendDataToServiceWorkerOnControllerReady(e) {
        navigator.serviceWorker.controller
          ? navigator.serviceWorker.controller.postMessage({ data: e })
          : this.swActiveRetries < 3 &&
            setTimeout(() => {
              this.swActiveRetries++,
                this.sendDataToServiceWorkerOnControllerReady(e);
            }, 500);
      }
      getCurrentPermissionState() {
        return Te.getInstance().then((e) =>
          navigator.permissions && !e.isSafari()
            ? navigator.permissions
                .query({ name: "notifications" })
                .then((e) => Gt.parsePermissionState(e.state))
                .catch((e) => {})
            : new Promise((t) => {
                let n = Notification.permission;
                e.isSafari() &&
                  "default" === n &&
                  ((n = "prompt"), Ee.get(ue) && (n = "denied")),
                  t(Gt.parsePermissionState(n));
              })
        );
      }
      getPushTokenDetails() {
        const e = Gt.baseLogTag + ".getPushTokenDetails";
        return new Promise((t, n) => {
          this.getCurrentPermissionState().then((n) => {
            Te.getInstance().then((i) => {
              n !== kt.GRANTED
                ? t({ token: null, raw: null })
                : this.registerServiceWorker()
                    .then((n) => {
                      let a = null;
                      const r = { userVisibleOnly: !0 };
                      Ue(this.sdkSettings.platformSettings, i) &&
                        ((a = He(this.sdkSettings.platformSettings, i)),
                        (r.applicationServerKey = Be(a)));
                      const s = () => {
                        n.pushManager
                          .subscribe(r)
                          .then((e) => {
                            ((e) => {
                              const n = e.toJSON();
                              var a = e.endpoint.substring(
                                0,
                                n.endpoint.lastIndexOf("/") + 1
                              );
                              e = n.expirationTime;
                              let r =
                                n.endpoint.split("/")[
                                  n.endpoint.split("/").length - 1
                                ];
                              i.isEdge() && (r = r.replace("?token=", ""));
                              const s = {};
                              if (n.keys)
                                for (const e in n.keys)
                                  n.keys.hasOwnProperty(e) &&
                                    (s[e] = n.keys[e]);
                              t({
                                token: r,
                                endpoint: a,
                                keys: s,
                                expirationTime: e,
                                raw: n,
                              });
                            })(e);
                          })
                          .catch((n) => {
                            fe.error(1, e, "Error in subscribtion: ", n),
                              t({ token: null, raw: null });
                          });
                      };
                      n.pushManager.getSubscription().then((e) => {
                        if (e)
                          if (
                            "vapid" ===
                              this.sdkSettings.platformSettings.chrome
                                .subscriptionMode &&
                            e.options &&
                            e.options.applicationServerKey
                          ) {
                            var t = We(e.options.applicationServerKey);
                            [a, a + "=", a + "==", We(Be(a))].indexOf(t) < 0
                              ? e.unsubscribe().then(() => {
                                  s();
                                })
                              : s();
                          } else s();
                        else s();
                      });
                    })
                    .catch((n) => {
                      fe.error(1, e, "Error in getting push token: ", n),
                        t({ token: null, raw: null });
                    });
            });
          });
        });
      }
      isTokenValid() {
        return this.getPushTokenDetails().then((e) =>
          Ft.isTokenValid(
            e.token,
            this.sdkSettings.platformSettings.chrome.apiKey
          )
        );
      }
      removeToken() {
        return Ee.remove(r.PUSH_TOKEN), Promise.resolve();
      }
      askPermission() {
        return new Promise((e, t) => {
          Notification.requestPermission()
            .then((t) => {
              Ee.set(r.OPT_IN_SHOWN_TIME, Date.now()),
                Mt.track(p),
                Pt.broadcastToWindow({ topic: M, name: L.HARD_ASK_SHOWN }),
                Pt.deprecatedSdkCallback("opt_in_shown"),
                Kt.runCallbacks(L.HARD_ASK_SHOWN),
                e(Gt.parsePermissionState(t));
            })
            .catch((e) => {
              t(U);
            });
        });
      }
      registerServiceWorker() {
        const e = Gt.baseLogTag + ".registerServiceWorker";
        return (
          null != this.swRegisterPromise ||
            (this.swRegisterPromise = new Promise((t, n) => {
              if (Gt.registeredServiceWorker) t(Gt.registeredServiceWorker);
              else if ("serviceWorker" in navigator) {
                let i,
                  a = !1;
                if (
                  ((a =
                    Le.get() && null != Le.get().swPath
                      ? ((i = Le.get().swPath), !0)
                      : ((i =
                          this.sdkSettings.platformSettings.chrome
                            .serviceWorkerFilename),
                        !1)),
                  "/" === i[0] || i.startsWith("http") || (i = "/" + i),
                  Fe())
                )
                  fe.log(1, e, "Removing scope in case of shopify."),
                    this.registerScopedSW(i, /moengage/, t, n);
                else {
                  let r = "/";
                  if (Le.get() && null != Le.get().swScope)
                    (r = Le.get().swScope), this.registerScopedSW(i, r, t, n);
                  else {
                    if (
                      this.sdkSettings.platformSettings.chrome
                        .isServiceWorkerRoot
                    )
                      a &&
                        (fe.log(
                          1,
                          e,
                          "Using user defined path to serviceworker:",
                          i
                        ),
                        (r = i.substr(0, i.lastIndexOf("/") + 1)),
                        Gt.canSwBeRegisteredWithScope(r) ||
                          (fe.error(
                            1,
                            e,
                            "Service worker can only be registered from same directory or child directory."
                          ),
                          n(H)));
                    else {
                      const e = window.location.pathname;
                      r = e.substring(0, e.lastIndexOf("/") + 1);
                    }
                    navigator.serviceWorker
                      .register(i, { scope: r })
                      .then((i) => {
                        fe.log(2, e, "Serviceworker registered"),
                          navigator.serviceWorker.ready
                            .then((n) => {
                              fe.log(2, e, "Serviceworker ready"),
                                (Gt.registeredServiceWorker = n),
                                Le.get() &&
                                  Le.get().forceSwUpdate &&
                                  n.update(),
                                t(n);
                            })
                            .catch((t) => {
                              fe.error(
                                1,
                                e,
                                "Service worker register failed:",
                                t
                              ),
                                n(B);
                            });
                      })
                      .catch((t) => {
                        fe.error(1, e, "Service worker register failed:", t),
                          n(B);
                      });
                  }
                  fe.log(1, e, "Scope for serviceworker:", r);
                }
              } else
                fe.error(1, e, "Service worker not supported"),
                  n("Service worker not supported");
            })),
          this.swRegisterPromise
        );
      }
      registerScopedSW(e, t, n, i) {
        const a = Gt.baseLogTag + ".registerScopedSW";
        navigator.serviceWorker
          .register(e)
          .then((e) => {
            fe.log(2, a, "Serviceworker registered"),
              navigator.serviceWorker
                .getRegistrations()
                .then((e) => {
                  e.forEach((e) => {
                    setTimeout(() => {
                      e.active &&
                        e.active.scriptURL.match(t) &&
                        (fe.log(2, a, "Serviceworker ready"),
                        (Gt.registeredServiceWorker = e),
                        Le.get() && Le.get().forceSwUpdate && e.update(),
                        n(e));
                    }, 100);
                  });
                })
                .catch((e) => {
                  fe.error(1, a, "Service worker register failed:", e), i(B);
                });
          })
          .catch((e) => {
            fe.error(1, a, "Service worker register failed:", e), i(B);
          });
      }
      static canSwBeRegisteredWithScope(e) {
        var t = window.location.pathname;
        return (
          (e = e),
          !((t = t).indexOf(e) < 0) && 0 <= t.substring(t.indexOf(e)).length
        );
      }
      static isWebPushSupported() {
        return new Promise((e) => {
          Te.getInstance().then((t) => {
            !t.isIncognito &&
            "serviceWorker" in navigator &&
            "PushManager" in window &&
            t.isWebPushCompatible()
              ? e(!0)
              : e(!1);
          });
        });
      }
      static parsePermissionState(e) {
        return "prompt" === e
          ? kt.PROMPT
          : "granted" === e
          ? kt.GRANTED
          : "denied" === e
          ? kt.DENIED
          : "default" === e
          ? kt.DISMISSED
          : null;
      }
      showNotification(e) {
        const t = Gt.baseLogTag + ".showNotification";
        this.registerServiceWorker()
          .then((n) => {
            e
              ? e.title
                ? e.body
                  ? (null == e.requireInteraction &&
                      (e.requireInteraction = !0),
                    n.showNotification(e.title, e))
                  : fe.error(1, t, "Notification body can not be blank")
                : fe.error(1, t, "Notification title can not be blank")
              : fe.error(1, t, "Notification object can not be blank");
          })
          .catch((e) => {
            fe.error(1, t, "Error registering serviceworker:", e);
          });
      }
      showOverlay() {
        if (this.sdkSettings.optInConfig.showOverlay) {
          const e = document.createElement("div");
          (e.id = "moe-push-div"),
            (e.style.display = "none"),
            (e.className = "moe-push-class"),
            Te.getInstance().then((t) => {
              t.isMobile
                ? (e.innerHTML =
                    this.sdkSettings.optInConfig.softAskConfig.mobile.customHTML)
                : (e.innerHTML =
                    this.sdkSettings.optInConfig.softAskConfig.desktop.customHTML);
              const n = document.body.firstChild;
              let i;
              if (
                (n.parentNode.insertBefore(e, n),
                (t = t.name) === Te.BROWSER_NAMES.CHROME ||
                t === Te.BROWSER_NAMES.OPERA_NEON
                  ? (i = document.getElementsByClassName("moe_chrome"))
                  : t === Te.BROWSER_NAMES.FIREFOX
                  ? (i = document.getElementsByClassName("moe_firefox"))
                  : (t !== Te.BROWSER_NAMES.OPERA &&
                      t !== Te.BROWSER_NAMES.SAFARI) ||
                    (i = document.getElementsByClassName("moe_opera")),
                0 === i.length)
              )
                document.getElementById("moe-push-div").style.display = "none";
              else
                for (let e = i.length - 1; 0 <= e; e--)
                  i[e].style.display = "block";
              (this.overlayTimer = window.setTimeout(() => {
                "" === e.style.opacity && (e.style.display = "block");
              }, 1500)),
                (e.onclick = () => {
                  this.hideOverlay();
                });
            });
        }
      }
      hideOverlay() {
        clearTimeout(this.overlayTimer);
        const e = document.getElementById("moe-push-div");
        null != e &&
          ((e.style.visibility = "none"),
          (e.style.opacity = "0"),
          e.parentNode.removeChild(e));
      }
    }
    Gt.baseLogTag = "HTTPS-NotificationManager";
    const jt = "Web push settings not configured on MoEngage dashboard: " + V;
    class Vt {
      constructor(e, t) {
        this.currentManager = null;
        var n = Vt.baseLogTag + ".constructor";
        (this.config = e),
          (this.browser = t),
          this.browser.isWebPushCompatible()
            ? e.platformSettings.chrome &&
              ("https" === e.platformSettings.chrome.domainType
                ? "https" ===
                  (function () {
                    if (window)
                      return "localhost" === window.location.hostname
                        ? "https"
                        : "http:" === window.location.protocol
                        ? "http"
                        : "https:" === window.location.protocol
                        ? "https"
                        : void 0;
                  })()
                  ? (this.currentManager = new Gt(e))
                  : fe.error(1, n, "Web Push does not work in http mode")
                : (Fe() && new Gt(e),
                  fe.warn(
                    1,
                    n,
                    "Web push settings not configured. Please configure at ",
                    V
                  )))
            : this.browser.name === Te.BROWSER_NAMES.SAFARI &&
              e.platformSettings.safari &&
              "safari" in window &&
              "pushNotification" in window.safari &&
              ((this.currentManager = null),
              fe.warn(
                1,
                n,
                "Web push is only supported on Safari 16 and above."
              ));
      }
      showHardAsk() {
        const e = Vt.baseLogTag + ".showHardAsk";
        return new Promise((t, n) => {
          this.getCurrentPermissionState()
            .then((i) => {
              null != this.currentManager
                ? i === kt.PROMPT
                  ? this.currentManager
                      .showHardAsk()
                      .then((n) => {
                        n.state === kt.DISMISSED
                          ? (Mt.track(f),
                            Pt.broadcastToWindow({
                              topic: M,
                              name: L.HARD_ASK_DISMISSED,
                            }),
                            Pt.deprecatedSdkCallback("opt_in_dismissed"),
                            Kt.runCallbacks(L.HARD_ASK_DISMISSED),
                            fe.log(1, e, "Hard ask was dismissed"))
                          : n.state === kt.GRANTED
                          ? (Mt.track(m),
                            Pt.broadcastToWindow({
                              topic: M,
                              name: L.HARD_ASK_ALLOWED,
                              data: n.subscriptionDetails,
                            }),
                            Pt.deprecatedSdkCallback("opt_in_allowed"),
                            Kt.runCallbacks(L.HARD_ASK_ALLOWED),
                            fe.log(1, e, "Push permission was granted"),
                            fe.customLabel(
                              1,
                              e,
                              "token",
                              n.subscriptionDetails.token
                            ))
                          : n.state === kt.DENIED &&
                            (Mt.track(v),
                            Mt.track("Web Push Opt-in Denied"),
                            Pt.broadcastToWindow({
                              topic: M,
                              name: L.HARD_ASK_DENIED,
                            }),
                            Pt.deprecatedSdkCallback("opt_in_blocked"),
                            Kt.runCallbacks(L.HARD_ASK_DENIED),
                            fe.log(1, e, "Notification permission was denied")),
                          t(n);
                      })
                      .catch((n) => {
                        fe.error(1, e, "Error showing hard ask:", n),
                          t({ state: i, subscriptionDetails: null });
                      })
                  : (fe.log(
                      1,
                      e,
                      "Not showing Hard Ask as current permission state is",
                      i
                    ),
                    this.getPushTokenDetails()
                      .then((n) => {
                        fe.customLabel(1, e, "token", n.token),
                          t({ state: i, subscriptionDetails: n });
                      })
                      .catch((n) => {
                        fe.warn(1, e, "Could not get push token details"),
                          t({ state: i, subscriptionDetails: null });
                      }))
                : (fe.log(
                    1,
                    e,
                    "MoEngage web push settings not configured. Please configure at",
                    V
                  ),
                  n(W));
            })
            .catch((e) => {
              n(e);
            });
        });
      }
      getCurrentPermissionState() {
        return null != this.currentManager
          ? this.currentManager.getCurrentPermissionState()
          : Promise.reject(jt);
      }
      getPushTokenDetails() {
        return null != this.currentManager
          ? this.currentManager.getPushTokenDetails()
          : Promise.reject(jt);
      }
      isTokenValid() {
        return null != this.currentManager
          ? this.currentManager.isTokenValid()
          : Promise.reject(jt);
      }
      removeToken() {
        return null != this.currentManager
          ? this.currentManager.removeToken()
          : Promise.reject(jt);
      }
      showNotification(e) {
        var t = Vt.baseLogTag + ".showNotification";
        if (null != this.currentManager)
          return this.currentManager.showNotification(e);
        fe.warn(1, t, jt);
      }
    }
    Vt.baseLogTag = "NotificationManager";
    class Yt {
      constructor(e) {
        (this.mainDivs = []), (this.config = e);
      }
      showSoftAsk() {
        const e = Yt.baseLogTag + ".showSoftAsk";
        return new Promise((t, n) => {
          let i = this.config.optInConfig.loadTime;
          Te.getInstance().then((n) => {
            (this.config.optInConfig.type === pt.TYPE.SELF_HANDLED ||
              (n.isSafari() &&
                this.config.optInConfig.type === pt.TYPE.ONE_CLICK)) &&
              (i = 0),
              i &&
                fe.log(
                  1,
                  e,
                  "Delay of",
                  i,
                  " second(s) requested before opt-in flow"
                ),
              setTimeout(() => {
                !n.isWebPushCompatible() ||
                (this.config.optInConfig.type !== pt.TYPE.TWO_STEP &&
                  this.config.optInConfig.type !== pt.TYPE.SELF_HANDLED)
                  ? (Ee.set(r.SOFT_ASK_STATUS, Lt.NOT_SHOWN),
                    t({ showHardAsk: !0, softAskState: Lt.NOT_SHOWN }))
                  : this.showOptIn(
                      () => {
                        fe.log(1, e, "Soft ask was shown"),
                          Ee.set(r.OPT_IN_SHOWN_TIME, Date.now()),
                          Ee.set(r.SOFT_ASK_STATUS, Lt.SHOWN),
                          Pt.broadcastToWindow({
                            topic: M,
                            name: L.SOFT_ASK_SHOWN,
                          }),
                          Pt.deprecatedSdkCallback("soft_ask_shown"),
                          Kt.runCallbacks(L.SOFT_ASK_SHOWN);
                      },
                      () => {
                        Mt.track(g),
                          this.hideOptIn(),
                          fe.log(1, e, "Soft ask was allowed"),
                          Ee.set(r.SOFT_ASK_STATUS, Lt.ALLOWED),
                          t({ showHardAsk: !0, softAskState: Lt.ALLOWED }),
                          Pt.broadcastToWindow({
                            topic: M,
                            name: L.SOFT_ASK_ALLOWED,
                          }),
                          Pt.deprecatedSdkCallback("soft_ask_allowed"),
                          Kt.runCallbacks(L.SOFT_ASK_ALLOWED);
                      },
                      () => {
                        this.hideOptIn(),
                          Mt.track(u),
                          fe.log(1, e, "Soft ask was dismissed"),
                          Ee.set(r.SOFT_ASK_STATUS, Lt.DISMISSED),
                          t({ showHardAsk: !1, softAskState: Lt.DISMISSED }),
                          Pt.broadcastToWindow({
                            topic: M,
                            name: L.SOFT_ASK_DISMISSED,
                          }),
                          Pt.deprecatedSdkCallback("soft_ask_closed"),
                          Kt.runCallbacks(L.SOFT_ASK_DISMISSED);
                      },
                      (e) => {
                        (e = !!e),
                          this.hideOptIn(),
                          t({ showHardAsk: e, softAskState: Lt.NOT_SHOWN });
                      }
                    );
              }, 1e3 * i);
          });
        });
      }
      showOptIn(e, t, n, i) {
        const a = Yt.baseLogTag + ".showOptIn";
        if (this.config.optInConfig.type === pt.TYPE.TWO_STEP) {
          let r = document.getElementById("moe-push-div");
          null == r &&
            ((r = document.createElement("div")),
            (r.id = "moe-push-div"),
            (r.className = "moe-push-class")),
            Te.getInstance().then((s) => {
              let o = null;
              if (
                ((o = (
                  s.isMobile
                    ? this.config.optInConfig.softAskConfig.mobile
                    : this.config.optInConfig.softAskConfig.desktop
                ).customHTML),
                null != o)
              ) {
                r.innerHTML = o;
                const s = document.body.firstChild;
                s.parentNode.insertBefore(r, s), (this.moeDiv = r);
                const l =
                    document.getElementById("optInText") ||
                    document.getElementById("optInTextConventional"),
                  c = document.getElementById("moe-dontallow_button");
                null == l
                  ? (fe.error(
                      1,
                      a,
                      "Error showing soft ask. Allow button id is missing"
                    ),
                    i())
                  : (e(),
                    Mt.track(d),
                    (l.onclick = () => {
                      t();
                    }),
                    c
                      ? (c.onclick = () => {
                          n();
                        })
                      : (window.moeRemoveBanner = () => {
                          n();
                        }));
              } else fe.error(1, a, "Error displaying soft ask"), i();
            });
        } else if (this.config.optInConfig.type === pt.TYPE.SELF_HANDLED) {
          var r = Le.get();
          if (r.customSoftAsk) {
            var s = document.getElementsByClassName(r.customSoftAsk.mainClass),
              o = document.getElementsByClassName(r.customSoftAsk.allowClass),
              l = document.getElementsByClassName(r.customSoftAsk.dismissClass);
            if (s.length < 1)
              fe.error(
                1,
                a,
                "Could not find main class for the soft ask. Class name given:",
                r.customSoftAsk.mainClass
              ),
                Te.getInstance().then((e) => {
                  e.isWebPushCompatible() &&
                    (fe.warn(1, a, "Proceeding to hard ask directly"), i(!0));
                });
            else {
              e(),
                o.length < 1 &&
                  (fe.warn(
                    1,
                    a,
                    "Could not find any element for allow button. Class name given:",
                    r.customSoftAsk.allowClass
                  ),
                  fe.warn(
                    1,
                    a,
                    "Docs for self-handled opt in available here - ",
                    j.SELF_HANDLED_DOCS
                  )),
                l.length < 1 &&
                  fe.warn(
                    1,
                    a,
                    "Could not find any element for dismiss button. Class name given:",
                    r.customSoftAsk.dismissClass
                  );
              for (let e = s.length - 1; 0 <= e; e--) {
                const t = s[e];
                this.mainDivs.push(t), (t.style.display = "block");
              }
              for (let e = o.length - 1; 0 <= e; e--)
                o[e].onclick = () => {
                  t();
                };
              for (let e = l.length - 1; 0 <= e; e--)
                l[e].onclick = () => {
                  n();
                };
            }
          } else
            Te.getInstance().then((e) => {
              e.isWebPushCompatible()
                ? (fe.warn(
                    1,
                    a,
                    "No soft ask configured. Proceeding to hard ask directly. \n\nYou can ignore this message if you do not want any soft ask."
                  ),
                  i(!0))
                : (fe.error(
                    1,
                    a,
                    "Soft ask needs to be present in case of http implementation. Can not show hard ask otherwise."
                  ),
                  i());
            });
        }
      }
      hideOptIn() {
        null != this.moeDiv && (this.moeDiv.style.display = "none"),
          0 < this.mainDivs.length &&
            this.mainDivs.map((e) => {
              e.style.display = "none";
            });
      }
    }
    (Yt.baseLogTag = "SoftAskManager"),
      ((bi = Lt = Lt || {}).SHOWN = "shown"),
      (bi.NOT_SHOWN = "not shown"),
      (bi.ALLOWED = "allowed"),
      (bi.DISMISSED = "dismissed");
    class qt {
      constructor(e) {
        this.deviceToLogout = he(e, "deviceToLogout", null);
      }
      static get() {
        return new qt(Ee.get(r.GRACEFUL_DATA));
      }
      save() {
        Ee.set(r.GRACEFUL_DATA, this);
      }
    }
    var zt = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    const Jt = "MoEngage.user";
    class Xt {
      static addAttribute(e, t) {
        const n = Jt + ".addUserAttribute";
        return new Promise((i, a) => {
          let r = !1;
          if ("string" != typeof e || null == e)
            fe.error(1, n, "Attribute name needs to be a string"),
              i({
                error: 5e3,
                message:
                  "Attribute name needs to be a string. Type provided was " +
                  typeof e,
              });
          else if ("" === e)
            fe.error(1, n, "Attribute name can not be an empty string"),
              i({
                error: 5001,
                message: "Attribute name can not be an empty string",
              });
          else if (null == t)
            fe.error(1, n, "Attribute value null"),
              i({ error: 5003, message: "Attribute value was empty" });
          else if ("string" == typeof t && "" === t)
            i({
              error: 5004,
              message:
                "Attribute value needs to be non-empty string, non-empty array or date object",
            });
          else if (
            "object" != typeof t ||
            Array.isArray(t) ||
            "function" == typeof t.getMonth
          )
            if ("object" == typeof t && Array.isArray(t) && 0 === t.length)
              fe.error(
                1,
                n,
                "Value cannot be empty, non-string, non-array or non-date object"
              ),
                i({
                  error: 5006,
                  message:
                    "Attribute value needs to be non-empty string, non-empty array or date object",
                });
            else if (
              "object" == typeof t &&
              Array.isArray(t) &&
              void 0 !==
                t.find(
                  (e) => "object" == typeof e && "function" != typeof e.getMonth
                )
            )
              fe.error(
                1,
                n,
                "Elements of the attribute value-array cannot be non-Date objects"
              ),
                i({
                  error: 5007,
                  message:
                    "Attribute value-array cannot have non-Date objects as its elements",
                });
            else {
              const a = new ot(e, t),
                s = () => {
                  ct.get().then((e) => {
                    e.addAttribute(a).then((e) => {
                      e
                        ? ("id" === a.key &&
                            fe.log(
                              1,
                              n,
                              "Logging in the user with id: ",
                              a.value
                            ),
                          Rt.createUserAttributeEvent(a).then((e) => {
                            fe.log(2, n, "Event to be converted to report:", e),
                              Nt.addEvent(e),
                              Bt.collectGetParams().then((t) => {
                                (t = new gt(
                                  gt.REPORT_ADD_TYPE.USER_ATTRIBUTE,
                                  t,
                                  e
                                )),
                                  Bt.reportAdd(t).then(() => {
                                    r &&
                                      _i.onsite.refresh &&
                                      _i.onsite.refresh(),
                                      i(!0);
                                  });
                              });
                          }))
                        : (fe.log(
                            1,
                            n,
                            "Attribute already present/queued. Not adding again."
                          ),
                          i({
                            error: 5005,
                            message:
                              "Attribute already present/queued. Not adding again.",
                          }));
                    });
                  });
                };
              "id" === e
                ? ((r = !0),
                  ct.get().then((e) => {
                    var a = e.indexOfAttribute("id");
                    -1 < a
                      ? ((r = !1),
                        t === e.attributes[a].value
                          ? (fe.log(1, n, "User already logged in with id:", t),
                            i(!0))
                          : (fe.log(
                              1,
                              n,
                              "Logging out previous user with id:",
                              e.attributes[a].value
                            ),
                            Xt.logout(!0, t).then(() => {
                              s();
                            })))
                      : s();
                  }))
                : s();
            }
          else
            fe.error(
              1,
              n,
              "Value cannot be empty, non-string, non-array or non-date object"
            ),
              i({
                error: 5005,
                message:
                  "Attribute value needs to be non-empty string, non-empty array or date object",
              });
        });
      }
      static login(e) {
        return et(), Xt.addAttribute("id", e);
      }
      static logout(e, t) {
        const n = Jt + ".logout",
          i = e ? { type: "forced", new_uid: t } : null;
        return (
          (function () {
            const e = qt.get();
            null != ct.getSync() &&
              ((e.deviceToLogout = ct.getSync().deviceUuid), e.save());
          })(),
          new Promise((e) => {
            Mt.track(E, i).then(() =>
              zt(this, void 0, void 0, function* () {
                fe.log(1, n, "Logging out now!"),
                  yield Dt.flushReports(),
                  Bt.getWebSDKSettings()
                    .then((t) =>
                      zt(this, void 0, void 0, function* () {
                        t.isDomainLevelStorage && ve.remove(r.USER_DATA),
                          Nt.clear(),
                          yield Ii(),
                          yield (function () {
                            return mi(this, void 0, void 0, function* () {
                              const e = "Moengage.disableCards";
                              Le.get();
                              try {
                                Bt.getWebSDKSettings()
                                  .then((e) =>
                                    mi(this, void 0, void 0, function* () {
                                      if (null != e && e.c_s) {
                                        const e = yield $t.loadModule(ee.CARDS);
                                        yield e.logout(), (Si = new qe());
                                      }
                                    })
                                  )
                                  .catch((t) => {
                                    fe.error(
                                      1,
                                      e,
                                      "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                                    );
                                  });
                              } catch (t) {
                                fe.error(
                                  1,
                                  e,
                                  "Error logging out from cards module:",
                                  t
                                );
                              }
                            });
                          })(),
                          et(),
                          Ee.logout(),
                          yield ct.logout(),
                          Ee.remove(r.GRACEFUL_DATA),
                          (Bt.onDeviceAdd = new qe()),
                          yield Mi(),
                          e(!0);
                      })
                    )
                    .catch((t) => {
                      fe.error(
                        1,
                        n,
                        "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                      ),
                        e(!1);
                    });
              })
            );
          })
        );
      }
      static updateUniqueId(e) {
        const t = Jt + ".updateUniqueId";
        return new Promise((n) => {
          ct.get().then((i) => {
            var a = i.indexOfAttribute(I),
              r = i.indexOfAttribute("oldUniqueIds");
            if (!(-1 < a))
              return fe.log(2, t, "Logging in as no id found"), Xt.login(e);
            var s = i.attributes[a].value;
            e !== s
              ? (fe.log(2, t, "Different ids found"),
                -1 < r
                  ? (i.attributes[r].value.push(s), i.attributes.splice(a, 1))
                  : (i.attributes.splice(a, 1),
                    i.addAttribute(new ot("oldUniqueIds", [s]))),
                i.save().then(() => {
                  Xt.login(e).then(() => {
                    n(!0);
                  });
                }))
              : (fe.warn(
                  1,
                  t,
                  "New id and old id are the same. Not updating the id."
                ),
                n(!0));
          });
        });
      }
      static getAttributes() {
        const e = ct.getSync().attributes,
          t = {};
        return (
          e.map((e) => {
            t[e.key] = e.value;
          }),
          t
        );
      }
    }
    class Qt {
      constructor(e, t) {
        (this.notificationManager = null),
          (this.softAskManager = null),
          Qt.baseLogTag,
          (this.sdkSettings = e),
          (this.browser = t),
          (this.softAskManager = new Yt(this.sdkSettings)),
          (this.notificationManager = new Vt(this.sdkSettings, t));
      }
      callWebPush() {
        const e = Qt.baseLogTag + ".callWebPush";
        this.isWebPushEnabled() &&
          this.notificationManager
            .getCurrentPermissionState()
            .then((t) => {
              return (
                (n = this),
                (a = function* () {
                  const n = (n = t) => {
                      ct.get().then((t) => {
                        let i = !1;
                        var a = t.getAttribute("email"),
                          s = t.getAttribute("mobile");
                        (null === a && null === s) || (i = !0),
                          (t.deviceAdded = i),
                          t.save().then(() => {
                            this.notificationManager.removeToken().then(() => {
                              n === kt.DENIED
                                ? fe.log(
                                    1,
                                    e,
                                    "Not asking for permission as current state is denied."
                                  )
                                : (Ee.remove(r.OPT_IN_SHOWN_TIME),
                                  this.startPushSubscription());
                            });
                          });
                      });
                    },
                    i = yield Te.getInstance();
                  var a = Ee.get(r.PUSH_TOKEN);
                  null == a && t !== kt.DENIED
                    ? this.startPushSubscription()
                    : null != a &&
                      (t === kt.DENIED || (i.isSafari() && t === kt.PROMPT))
                    ? (fe.log(1, e, "User has removed the permission"),
                      fe.image(1, F),
                      i.isSafari() &&
                        t === kt.PROMPT &&
                        (Ee.set(ue, !0), (t = kt.DENIED)),
                      Mt.track(o, { Source: "Website" }).then(() => {
                        n(t);
                      }))
                    : t === kt.DENIED
                    ? fe.warn(
                        1,
                        e,
                        "Not proceeding with push subscription as current state is denied"
                      )
                    : null != a && t === kt.GRANTED
                    ? this.browser.name === Te.BROWSER_NAMES.CHROME
                      ? Ue(this.sdkSettings.platformSettings, this.browser)
                        ? this.startPushSubscription()
                        : fe.warn(
                            1,
                            e,
                            "Subscription mode is not VAPID type. Cannot subscribe to web push."
                          )
                      : (this.startPushSubscription(),
                        this.notificationManager
                          .getPushTokenDetails()
                          .then((t) => {
                            fe.customLabel(1, e, "token", t.token);
                          }))
                    : this.sdkSettings.isDomainLevelStorage
                    ? "granted" === ve.get(r.HARD_ASK_STATUS)
                      ? (a = ve.get(r.SUBSCRIPTION_DETAILS).domain) &&
                        a === window.location.origin
                        ? (fe.log(
                            1,
                            e,
                            "It seems that the user has unsubscribed manually. Starting push subscription.."
                          ),
                          n())
                        : fe.log(
                            1,
                            e,
                            "Not showing opt-in as user subscribed to sub-domain"
                          )
                      : this.startPushSubscription()
                    : n();
                }),
                new (i = (i = void 0) || Promise)(function (e, t) {
                  function r(e) {
                    try {
                      o(a.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function s(e) {
                    try {
                      o(a.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function o(t) {
                    var n;
                    t.done
                      ? e(t.value)
                      : ((n = t.value) instanceof i
                          ? n
                          : new i(function (e) {
                              e(n);
                            })
                        ).then(r, s);
                  }
                  o((a = a.apply(n, [])).next());
                })
              );
              var n, i, a;
            })
            .catch((t) => {
              fe.error(1, e, "Error in getting current state:", t);
            });
      }
      startPushSubscription() {
        const e = Qt.baseLogTag + ".startPushSubscription",
          t = () => {
            Ee.set(r.HARD_ASK_STATUS, kt.PROMPT);
            const t = Ee.get(r.PUSH_TOKEN);
            this.notificationManager
              .showHardAsk()
              .then((n) => {
                Ee.set(r.HARD_ASK_STATUS, n.state),
                  n.state === kt.GRANTED
                    ? null != n.subscriptionDetails.token
                      ? (Ee.set(r.PUSH_TOKEN, n.subscriptionDetails.token),
                        (n.subscriptionDetails.domain = window.location.origin),
                        Ee.set(r.SUBSCRIPTION_DETAILS, n.subscriptionDetails),
                        n.subscriptionDetails.token &&
                          t !== n.subscriptionDetails.token &&
                          Bt.deviceAdd().then(() => {
                            fe.image(
                              1,
                              "https://media.giphy.com/media/90F8aUepslB84/giphy.gif"
                            ),
                              ct.getSync().subscribedToOldSdk
                                ? fe.log(
                                    1,
                                    e,
                                    "User subscribed from older sdk, hence not sending subscription event"
                                  )
                                : (null != t
                                    ? Xt.addAttribute(
                                        "Web Migrated User",
                                        "true"
                                      )
                                    : (Xt.addAttribute(
                                        "Web Push Preference",
                                        "granted"
                                      ),
                                      Xt.addAttribute(
                                        "Web Subscription URL",
                                        location.href
                                      )),
                                  Ze(),
                                  Mt.track(h, {
                                    MOE_WEB_PUSH_TOKEN:
                                      n.subscriptionDetails.token,
                                    migrated_user: !!Ze() || void 0,
                                  }));
                          }),
                        this.sdkSettings.isDomainLevelStorage &&
                          (ve.set(r.SUBSCRIPTION_DETAILS, {
                            domain: n.subscriptionDetails.domain,
                            token: n.subscriptionDetails.token,
                            endpoint: n.subscriptionDetails.endpoint,
                            keys: n.subscriptionDetails.keys,
                          }),
                          ve.set(r.PUSH_TOKEN, n.subscriptionDetails.token)))
                      : (fe.error(1, e, "Push token was received as null."),
                        fe.error(
                          1,
                          e,
                          "Please contact MoEngage support if this troubleshooting does not solve the issue."
                        ))
                    : n.state === kt.DENIED && fe.image(1, F);
              })
              .catch((t) => {
                fe.warn(1, e, t);
              });
          },
          n = () => {
            this.softAskManager
              ? this.softAskManager.showSoftAsk().then((e) => {
                  e.showHardAsk && t();
                })
              : fe.log(1, e, "SoftAskManager not set.");
          };
        this.notificationManager.getCurrentPermissionState().then((i) => {
          if (i === kt.GRANTED)
            this.sdkSettings.optInConfig.type !== pt.TYPE.ONE_CLICK &&
              fe.log(
                1,
                e,
                "Skipping soft ask as browser permission is set to allow all notifications"
              ),
              t();
          else {
            var a = parseInt(Ee.get(r.OPT_IN_SHOWN_TIME));
            if (
              (Ee.get(r.SOFT_ASK_STATUS),
              Ee.get(r.HARD_ASK_STATUS),
              (i = (Date.now() - a) / 36e5),
              !a || i > this.sdkSettings.optInConfig.reappearTime)
            )
              if (
                this.browser.name === Te.BROWSER_NAMES.SAFARI &&
                this.sdkSettings.optInConfig.type === pt.TYPE.ONE_CLICK
              ) {
                fe.log(
                  1,
                  e,
                  "1 step optin configured. In Safari 16+ and macOS 13+, the web push optin will be shown after a user click. Any delay will be ignored."
                );
                const t = () => {
                  window.removeEventListener("click", t), n();
                };
                window.addEventListener("click", t);
              } else n();
            else {
              let t, n;
              (n =
                i < 1
                  ? ((t = Math.floor(60 * i)), "minute(s)")
                  : ((t = Math.floor(100 * i) / 100), "hour(s)")),
                fe.log(
                  1,
                  e,
                  "Not showing opt in as last it was shown",
                  t,
                  n,
                  "back on",
                  new Date(a),
                  ". Reappear time is set to",
                  this.sdkSettings.optInConfig.reappearTime,
                  "hours."
                ),
                fe.log(1, e, "You can clear localstorage to get opt-in again.");
            }
          }
        });
      }
      isWebPushEnabled() {
        return (
          !this.browser.isIncognito &&
          0 <= Qt.SUPPORTED_BROWSERS.indexOf(this.browser.name) &&
          navigator.serviceWorker &&
          "PushManager" in window
        );
      }
      getPermissionState() {
        return this.notificationManager.getCurrentPermissionState();
      }
      showNotification(e) {
        this.notificationManager &&
          this.notificationManager.showNotification(e);
      }
    }
    (Qt.baseLogTag = "WebPushManager"),
      (Qt.SUPPORTED_BROWSERS = [
        Te.BROWSER_NAMES.CHROME,
        Te.BROWSER_NAMES.FIREFOX,
        Te.BROWSER_NAMES.OPERA,
        Te.BROWSER_NAMES.SAFARI,
        Te.BROWSER_NAMES.EDGE,
      ]);
    class $t {
      static loadModule(e) {
        var t = $t.baseLogTag + ".loadModule";
        return (
          null != $t.loadPromises[e.name] ||
            (fe.log(1, t, "Starting to fetch module: ", e.name),
            ($t.loadPromises[e.name] = new Promise((t, n) => {
              $t.addScript(e.src, () => {
                var n = new (0, window[ee[e.name].windowLocation])(
                  (n = Le.get())
                );
                t(n);
              });
            }))),
          $t.loadPromises[e.name]
        );
      }
      static addScript(e, t) {
        const n = document.createElement("script");
        n.setAttribute("src", e),
          (n.onload = t),
          (n.async = !0),
          document.body.appendChild(n);
      }
    }
    ($t.baseLogTag = "ModuleManager"), ($t.loadPromises = {});
    var Zt = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class en {
      static initialize() {
        return Zt(this, void 0, void 0, function* () {
          var e;
          return (
            null == en.ready &&
              ((en.serviceMetaStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.SERVICE_META.NAME,
              })),
              (en.campaingsMetaStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.CAMPAIGNS_META.NAME,
              })),
              (en.campaingsTagsStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.CAMPAIGNS_TAGS.NAME,
              })),
              (en.campaingsStatsStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.CAMPAIGNS_STATS.NAME,
              })),
              (en.testCampaignStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.CAMPAIGNS_STATS.NAME,
              })),
              (en.exitIntentCampaignStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: Z.DATABASE_NAME,
                storeName: Z.STORES.EXIT_INTENT_CAMPAIGN_STORE.NAME,
              })),
              (e = [
                en.serviceMetaStore.ready(),
                en.campaingsMetaStore.ready(),
                en.campaingsTagsStore.ready(),
                en.campaingsStatsStore.ready(),
                en.testCampaignStore.ready(),
                en.exitIntentCampaignStore.ready(),
              ]),
              (en.ready = Promise.all(e))),
            en.ready
          );
        });
      }
      static clear() {
        return Zt(this, void 0, void 0, function* () {
          var e = en.baseLogTag + ".clear";
          try {
            yield en.initialize(),
              yield Promise.all([
                en.serviceMetaStore.clear(),
                en.campaingsMetaStore.clear(),
                en.campaingsTagsStore.clear(),
                en.campaingsStatsStore.clear(),
                en.testCampaignStore.clear(),
                en.exitIntentCampaignStore.clear(),
              ]);
            var t = [
              en.serviceMetaStore.ready(),
              en.campaingsMetaStore.ready(),
              en.campaingsTagsStore.ready(),
              en.campaingsStatsStore.ready(),
              en.testCampaignStore.ready(),
              en.exitIntentCampaignStore.ready(),
            ];
            en.ready = Promise.all(t);
          } catch (t) {
            fe.error(1, e, "Error clearing onsite stores:", t);
          }
          return en.ready;
        });
      }
    }
    en.baseLogTag = "MOE_ONSITE_STORES";
    var tn,
      nn,
      an,
      rn,
      sn,
      on = function (e, t, n, i) {
        return new (n = n || Promise)(function (a, r) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(s, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
    const ln = (e, t, n) =>
        null == e.campaignId
          ? () => {}
          : () => (
              en.campaingsStatsStore.getItem(e.campaignId).then((t) => {
                (t =
                  null != t
                    ? Object.assign(Object.assign({}, t), {
                        clicks: he(t, "clicks", 0) + 1,
                      })
                    : { clicks: 1 }),
                  en.campaingsStatsStore.setItem(e.campaignId, t);
              }),
              null == n && (n = {}),
              gn().track_event(
                Z.EVENT_NAMES[t].CLICK,
                Object.assign(
                  Object.assign(
                    {
                      campaign_id: e.campaignId,
                      campaign_name: e.campaignName,
                      type: Z.EVENT_NAMES[t].TYPE,
                    },
                    n
                  ),
                  e.campaignContext
                )
              )
            ),
      cn = (e, t, n = !1) =>
        null == e.campaignId
          ? () => {}
          : () => {
              if (
                (en.initialize().then(() => {
                  en.campaingsStatsStore.getItem(e.campaignId).then((t) => {
                    (t =
                      null != t
                        ? Object.assign(Object.assign({}, t), {
                            impressions: he(t, "impressions", 0) + 1,
                            lastImpression: new Date(),
                          })
                        : { impressions: 1, lastImpression: new Date() }),
                      en.campaingsStatsStore.setItem(e.campaignId, t);
                  });
                }),
                !n)
              )
                return gn().track_event(
                  Z.EVENT_NAMES[t].IMPRESSION,
                  Object.assign(
                    {
                      campaign_id: e.campaignId,
                      campaign_name: e.campaignName,
                      type: Z.EVENT_NAMES[t].TYPE,
                      templateType: e.templateType,
                    },
                    e.campaignContext
                  )
                );
            },
      dn = (e, t, n) => {
        (n = n ? Z.EVENT_NAMES[t].AUTO_DISMIS : Z.EVENT_NAMES[t].DISMISS),
          gn().track_event(
            n,
            Object.assign(
              {
                campaign_id: e.campaignId,
                campaign_name: e.campaignName,
                type: Z.EVENT_NAMES[t].TYPE,
              },
              e.campaignContext
            )
          );
      },
      un = (e, t) => {
        gn().track_event(
          Z.EVENT_NAMES[t].DELIVERED,
          Object.assign(
            {
              campaign_id: e.campaignId,
              campaign_name: e.campaignName,
              type: Z.EVENT_NAMES[t].TYPE,
            },
            e.campaignContext
          )
        );
      },
      gn = () => {
        var e = window.moengage_object || "Moengage";
        return window[e];
      };
    class hn {
      static isValid(e, t) {
        return (
          !hn.isCampaignExpired(e) &&
          hn.isCampaignActive(e) &&
          hn.isUserInCampaignSegment(e) &&
          hn.isCampaignWithinFC(e, t)
        );
      }
      static isCampaignExpired(e) {
        return new Date().getTime() > new Date(e.expiryTime).getTime();
      }
      static isValidMessagingCampaign(e, t, n, i, a) {
        return (
          hn.canCampaignBeRenderedOverExisting(e, a.length) &&
          hn.hasCampaignClearedSelfDelay(e, t) &&
          hn.hasCampaignClearedGlobalDelay(e, n, i)
        );
      }
      static isCampaignActive(e) {
        var t = hn.baseLogTag + ".isValid";
        return (
          e.status === an.ACTIVE ||
          (fe.warn(1, t, `Campaign ${e.campaignId} : Status is ` + e.status),
          !1)
        );
      }
      static isUserInCampaignSegment(e) {
        var t = hn.baseLogTag + ".isValid";
        return (
          !!e.userInSegment ||
          (fe.warn(1, t, `Campaign ${e.campaignId} : User is not in segment`),
          !1)
        );
      }
      static isCampaignWithinFC(e, t) {
        var n = hn.baseLogTag + ".isValid";
        if ([sn.SELF_HANDLED].indexOf(e.templateType) < 0) {
          var i = he(e, "delivery.fc_meta.count", 0);
          if (0 < i) {
            var a = he(t, "impressions", 0);
            if (null != t)
              return !(
                i <= a &&
                (fe.warn(
                  1,
                  n,
                  `Campaign ${e.campaignId} : FC reached. ${t.impressions} times shown`
                ),
                1)
              );
          }
        }
        return !0;
      }
      static hasCampaignClearedGlobalDelay(e, t, n) {
        var i = hn.baseLogTag + ".isValid",
          a = he(e, "delivery.fc_meta.ignore_global_delay", !1);
        try {
          if (!a) {
            const a = new Date();
            if (n) {
              var r = (a.getTime() - n.getTime()) / 1e3;
              if (t && r <= t)
                return (
                  fe.log(
                    1,
                    i,
                    `Can't render ${e.campaignId} as last global campaign was rendered ${r} seconds ago.`
                  ),
                  !1
                );
            }
          }
        } catch (e) {
          return fe.error(1, i, "Error checking global delay:", e), !1;
        }
        return !0;
      }
      static hasCampaignClearedSelfDelay(e, t) {
        var n = hn.baseLogTag + ".hasCampaignClearedSelfDelay",
          i = he(e, "delivery.fc_meta.delay", 0);
        try {
          if (0 < i && null != t && t.lastImpression) {
            const i = t.lastImpression;
            var a = (new Date().getTime() - i.getTime()) / 1e3;
            if (a <= he(e, "delivery.fc_meta.delay", 0))
              return (
                fe.warn(
                  1,
                  n,
                  `Can't render ${e.campaignId} as it was rendered ${a} seconds ago.`
                ),
                !1
              );
          }
        } catch (t) {
          return (
            fe.error(1, n, "Can't check self delay for " + e.campaignId, t), !1
          );
        }
        return !0;
      }
      static doCampaignPayloadHasMandatoryParams(e) {
        var { payload: t, payloadType: n, htmlJsonPayload: e } = e;
        return !((!t && !e) || !n);
      }
      static canCampaignBeRenderedOverExisting(e, t) {
        var n = hn.baseLogTag + ".canCampaignBeRenderedOverExisting";
        return !(
          0 < t &&
          !e.display.config.showOverOtherCampaigns &&
          (fe.warn(
            1,
            n,
            `Can not show ${e.campaignId} over other existing campaigns`
          ),
          1)
        );
      }
      static isCampaignMatchURLFilter(e) {
        var t =
            null ==
            (n =
              null ===
                (t =
                  null ===
                    (n =
                      null ===
                        (t = he(
                          e,
                          "triggerData.url_condition.included_filters",
                          null
                        )) || void 0 === t
                        ? void 0
                        : t.filters) || void 0 === n
                    ? void 0
                    : n[0]) || void 0 === t
                ? void 0
                : t.attributes)
              ? void 0
              : n.filterOperator,
          n = null == n ? void 0 : n.filters;
        return (
          !t ||
          null == n ||
          !n.length ||
          window.location.href === e.triggeredStateURL
        );
      }
      static comparator(e, t) {
        return t.delivery.priority > e.delivery.priority ||
          (!(t.delivery.priority < e.delivery.priority) &&
            t.updatedTime > e.updatedTime)
          ? 1
          : -1;
      }
    }
    hn.baseLogTag = "CampaignUtils";
    const pn = (e) =>
      on(void 0, void 0, void 0, function* () {
        var t = e.map((e) => en.campaingsStatsStore.getItem(e.campaignId));
        let n;
        try {
          n = yield Promise.all(t);
          const i = e.filter((e, t) => hn.isValid(e, n[t]));
          return i.sort(hn.comparator);
        } catch (t) {
          return (
            fe.error(
              1,
              "filterAndSortCampaigns",
              "Error filtering and sorting campaigns: ",
              t
            ),
            []
          );
        }
      });
    class mn {}
    mn.REMOVE_TRAIL_CHARS = /[^\w\s]+$/gi;
    const fn = (e, t) => {
        const n = he(e, "triggerData.primary_condition.included_filters", null);
        return (
          (null == n ? void 0 : n.filter_operator) === rn.OR &&
          -1 <
            (null == n
              ? void 0
              : n.filters.findIndex((e) => e.action_name === t))
        );
      },
      vn = (e) =>
        on(void 0, void 0, void 0, function* () {
          var t = yield en.exitIntentCampaignStore.getItem(e.campaignId);
          return (
            (e.onsitePayload = t),
            fe.log(
              1,
              "getPrefetchedCampaign",
              "Prefetched exit intent campaign found: " + e.campaignId
            ),
            e
          );
        }),
      Sn = (e) => "moe-onsite-campaign-" + e;
    class En {
      constructor(e, t, n, i) {
        (this.dataType = e),
          (this.availableOperations = t),
          (this.event = n),
          (this.filter = i);
      }
      validate() {
        return !(this.availableOperations.indexOf(this.filter.operator) < 0);
      }
      checkEq() {
        let e = !1;
        return (
          this.event.attributes.forEach((t) => {
            let n = t.value,
              i = this.filter.value;
            this.dataType === tn.STRING &&
              typeof n === tn.STRING &&
              ((n = this.removeSpecialChars(n)),
              (i = this.removeSpecialChars(i))),
              t.key === this.filter.name &&
                (this.dataType !== tn.STRING || this.filter.case_sensitive
                  ? n === i && (e = !0)
                  : n.toLowerCase() === i.toLowerCase() && (e = !0));
          }),
          e
        );
      }
      checkExists() {
        let e = !1;
        return (
          this.event.attributes.forEach((t) => {
            t.key === this.filter.name && (e = !0);
          }),
          e
        );
      }
      removeSpecialChars(e) {
        return e.replace(mn.REMOVE_TRAIL_CHARS, "");
      }
    }
    ((bi = tn = tn || {}).BOOL = "bool"),
      (bi.STRING = "string"),
      (bi.DATE = "datetime"),
      (bi.NUMBER = "double"),
      (bi.LONG = "long"),
      (bi.ARRAY_BOOL = "array_bool"),
      (bi.ARRAY_NUMBER = "array_double"),
      (bi.ARRAY_STRING = "array_string"),
      (bi.ARRAY_DATETIME = "array_datetime"),
      ((bi = nn = nn || {}).ALLOF = "all_of"),
      (bi.ANYOFF = "any_of");
    const _n = ["is", "exists", "contains", "startsWith", "endsWith", "in"];
    class bn extends En {
      constructor(e, t) {
        super(tn.STRING, _n, e, t);
      }
      evaluate() {
        bn.baseLogTag;
        let e = !1;
        var t = this.event.attributes.filter((e) => e.key === this.filter.name),
          n = 0 < t.length ? t[0] : null;
        if (null != n && ze(n.value))
          switch (this.filter.operator) {
            case "is":
              e = this.checkEq();
              break;
            case "exists":
              e = this.checkExists();
              break;
            case "contains":
              e = this.checkContains(n);
              break;
            case "startsWith":
              e = this.checkStartsWith(n);
              break;
            case "endsWith":
              e = this.checkEndsWith(n);
              break;
            case "in":
              e = this.checkIn(n);
          }
        return this.filter.negate ? !e : e;
      }
      checkContains(e) {
        return this.filter.case_sensitive
          ? 0 <= e.value.indexOf(this.filter.value)
          : 0 <= e.value.toLowerCase().indexOf(this.filter.value.toLowerCase());
      }
      checkStartsWith(e) {
        var t = (e, t) => e.substr(0, t.length) === t;
        return this.filter.case_sensitive
          ? t(e.value, this.filter.value)
          : t(e.value.toLowerCase(), this.filter.value.toLowerCase());
      }
      checkEndsWith(e) {
        var t = (e, t, n) => (
          (void 0 === n || n > e.length) && (n = e.length),
          e.substring(n - t.length, n) === t
        );
        if (this.filter.case_sensitive) return t(e.value, this.filter.value);
        const n = this.removeSpecialChars(e.value),
          i = this.removeSpecialChars(this.filter.value);
        return t(n.toLowerCase(), i.toLowerCase());
      }
      checkIn(e) {
        let t = !1;
        if (Array.isArray(this.filter.value))
          for (let n = this.filter.value.length - 1; 0 <= n; n--)
            if (this.filter.case_sensitive) {
              if (this.filter.value[n] === e.value) {
                t = !0;
                break;
              }
            } else if (
              this.filter.value[n].toLowerCase() === e.value.toLowerCase()
            ) {
              t = !0;
              break;
            }
        return t;
      }
    }
    bn.baseLogTag = "StringDataType";
    const yn = ["is", "exists"];
    class Tn extends En {
      constructor(e, t) {
        super(tn.BOOL, yn, e, t);
      }
      evaluate() {
        let e = !1;
        switch (this.filter.operator) {
          case "is":
            e = this.checkEq();
            break;
          case "exists":
            e = this.checkExists();
        }
        return this.filter.negate ? !e : e;
      }
    }
    Tn.baseLogTag = "BooleanDataType";
    const In = ["is", "exists", "greaterThan", "lessThan", "between", "in"];
    class An extends En {
      constructor(e, t) {
        super(tn.NUMBER, In, e, t);
      }
      evaluate() {
        An.baseLogTag;
        let e = !1;
        var t = this.event.attributes.filter((e) => e.key === this.filter.name),
          n = 0 < t.length ? t[0] : null;
        if (null != n && "number" == typeof n.value)
          switch (this.filter.operator) {
            case "is":
              e = this.checkEq();
              break;
            case "exists":
              e = this.checkExists();
              break;
            case "greaterThan":
              e = this.checkGreaterThan(n);
              break;
            case "lessThan":
              e = this.checkLessThan(n);
              break;
            case "between":
              e = this.checkBetween(n);
              break;
            case "in":
              e = this.checkIn(n);
          }
        return this.filter.negate ? !e : e;
      }
      checkGreaterThan(e) {
        return e.value > this.filter.value;
      }
      checkLessThan(e) {
        return e.value < this.filter.value;
      }
      checkBetween(e) {
        return this.filter.value2
          ? this.filter.value &&
              this.filter.value2 &&
              this.filter.value <= e.value &&
              e.value < this.filter.value2
          : this.filter.value &&
              this.filter.value1 &&
              this.filter.value <= e.value &&
              e.value < this.filter.value1;
      }
      checkIn(e) {
        return (
          Array.isArray(this.filter.value) &&
          0 <= this.filter.value.indexOf(e.value)
        );
      }
    }
    An.baseLogTag = "NumberDataType";
    const wn = [
      "exists",
      "on",
      "between",
      "before",
      "after",
      "inTheLast",
      "inTheNext",
      "today",
    ];
    class On extends En {
      constructor(e, t) {
        !Je(t.value) &&
          ze(t.value) &&
          (t.value = new Date(t.value.split("Z").join(""))),
          !Je(t.value2) &&
            ze(t.value2) &&
            null != t.value2 &&
            (t.value2 = new Date(t.value2.split("Z").join(""))),
          !Je(t.value1) &&
            ze(t.value1) &&
            null != t.value1 &&
            (t.value1 = new Date(t.value1.split("Z").join(""))),
          super(tn.DATE, wn, e, t);
      }
      evaluate() {
        On.baseLogTag;
        let e = !1;
        var t = this.event.attributes.filter((e) => e.key === this.filter.name);
        const n = 0 < t.length ? t[0] : null;
        if (null != n)
          switch ((n.value.setHours(0, 0, 0, 0), this.filter.operator)) {
            case "is":
              e = this.checkEq();
              break;
            case "exists":
              e = this.checkExists();
              break;
            case "on":
              e = this.checkOn(n);
              break;
            case "between":
              e = this.checkBetween(n);
              break;
            case "before":
              e = this.checkBefore(n);
              break;
            case "after":
              e = this.checkAfter(n);
              break;
            case "inTheLast":
              e = this.checkLastX(n);
              break;
            case "inTheNext":
              e = this.checkNextX(n);
              break;
            case "today":
              e = this.checkToday(n);
          }
        return this.filter.negate ? !e : e;
      }
      checkOn(e) {
        return (
          e.value.setHours(0, 0, 0, 0) ===
          this.filter.value.setHours(0, 0, 0, 0)
        );
      }
      checkBetween(e) {
        return this.filter.value2
          ? this.filter.value.getTime() <= e.value.getTime() &&
              e.value.getTime() < this.filter.value2.getTime()
          : this.filter.value.getTime() <= e.value.getTime() &&
              e.value.getTime() < this.filter.value1.getTime();
      }
      checkBefore(e) {
        const { value: t } = this.filter;
        return typeof t === ae
          ? (new Date().setHours(0, 0, 0, 0) - e.value.setHours(0, 0, 0, 0)) /
              864e5 >
              t
          : e.value.setHours(0, 0, 0, 0) < t.setHours(0, 0, 0, 0);
      }
      checkAfter(e) {
        const { value: t } = this.filter;
        return typeof t === ae
          ? (e.value.setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) /
              864e5 >
              t
          : e.value.setHours(0, 0, 0, 0) > t.setHours(0, 0, 0, 0);
      }
      checkLastX(e) {
        var t = new Date().setHours(0, 0, 0, 0);
        return (
          0 < t - (e = e.value.setHours(0, 0, 0, 0)) &&
          (t - e) / 864e5 <= this.filter.value
        );
      }
      checkNextX(e) {
        var t = new Date().setHours(0, 0, 0, 0);
        return (
          0 < (e = e.value.setHours(0, 0, 0, 0)) - t &&
          (e - t) / 864e5 <= this.filter.value
        );
      }
      checkToday(e) {
        return e.value.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
      }
    }
    On.baseLogTag = "DateTimeDataType";
    const Dn = [
      "is",
      "exists",
      "contains",
      "startsWith",
      "endsWith",
      "in",
      "lessThan",
      "greaterThan",
      "between",
      "inTheLast",
      "inTheNext",
      "after",
      "before",
      "on",
      "today",
    ];
    class Cn extends En {
      constructor(e, t) {
        super(t.data_type, Dn, e, t);
      }
      evaluate() {
        let e = !1;
        var t = this.event.attributes.filter((e) => e.key === this.filter.name);
        return (
          null != (t = 0 < t.length ? t[0] : null) &&
            ((e) => Array.isArray(e))(t.value) &&
            (e =
              this.filter.array_filter_type &&
              this.filter.array_filter_type === nn.ANYOFF
                ? this.checkAnyOf(t)
                : this.checkAllOf(t)),
          e
        );
      }
      checkAllOf(e) {
        return e.value.every((t) => this.getFilterResult(t, e));
      }
      checkAnyOf(e) {
        return e.value.some((t) => this.getFilterResult(t, e));
      }
      getFilterResult(e, t) {
        let n = !1;
        e = this.createCustomEvent(t.key, e);
        const i = this.getDataType(e);
        return i.validate() && (n = i.evaluate()), n;
      }
      createCustomEvent(e, t) {
        return (t = new ot(e, t)), new Rt(this.event.name, [t]);
      }
      getDataType(e) {
        let t;
        switch (this.filter.data_type) {
          case tn.ARRAY_BOOL:
            t = new Tn(e, this.filter);
            break;
          case tn.ARRAY_DATETIME:
            t = new On(e, this.filter);
            break;
          case tn.ARRAY_NUMBER:
            t = new An(e, this.filter);
            break;
          case tn.ARRAY_STRING:
            t = new bn(e, this.filter);
        }
        return t;
      }
    }
    class Pn {
      static doesEventMatchFilters(e, t) {
        Pn.baseLogTag;
        let n = !1,
          i = null;
        switch (t.data_type) {
          case tn.BOOL:
            (i = new Tn(e, t)), i.validate() && (n = i.evaluate());
            break;
          case tn.STRING:
            (i = new bn(e, t)), i.validate() && (n = i.evaluate());
            break;
          case tn.NUMBER:
          case tn.LONG:
            (i = new An(e, t)), i.validate() && (n = i.evaluate());
            break;
          case tn.DATE:
            (i = new On(e, t)), i.validate() && (n = i.evaluate());
            break;
          case tn.ARRAY_STRING:
          case tn.ARRAY_DATETIME:
          case tn.ARRAY_BOOL:
          case tn.ARRAY_NUMBER:
            (i = new Cn(e, t)), i.validate() && (n = i.evaluate());
        }
        return n;
      }
      static doesValueMatchFilter(e, t) {
        return (
          (e = new ot(t.name, e)),
          (e = new Rt("sample event", [e])),
          Pn.doesEventMatchFilters(e, t)
        );
      }
    }
    Pn.baseLogTag = "TriggerEvaluator";
    class Rn {
      constructor(e) {
        var t = Rn.baseLogTag + ".constructor";
        (this.campaignId = he(e, "campaign_id", null)),
          (this.campaignName = he(e, "campaign_name", null)),
          (this.templateType = he(e, "template_type", null)),
          (this.campaignContext = he(e, "campaign_context", null));
        var n = he(e, "status", null);
        const i = [an.ACTIVE, an.EXPIRED, an.PAUSED];
        i.indexOf(n) < 0
          ? (this.status = an.ACTIVE)
          : (this.status = i[i.indexOf(n)]),
          (this.tag = he(e, "tag", null)),
          (this.triggerData = null),
          Nn.validate(he(e, "trigger"))
            ? (this.triggerData = new Nn(he(e, "trigger")))
            : fe.log(2, t, "Rejecting trigger data for :", e),
          (this.expiryTime = Ve(he(e, "expiry_time") + "Z")),
          (this.updatedTime = Ve(he(e, "updated_time") + "Z")),
          (this.delivery = new Wn(he(e, "delivery"))),
          (this.userInSegment = he(e, "user_in_segment", !0)),
          (n = he(e, "display", (this.display = null))),
          (t = he(e, "display_filter", null)),
          this.templateType !== sn.SELF_HANDLED &&
            (null != t
              ? (this.display = new Fn(
                  { rules: { uri_filters: t } },
                  this.templateType
                ))
              : null != n && (this.display = new Fn(n, this.templateType))),
          (this.stats = {}),
          (this.onsitePayload = null),
          (this.editorVersion = he(e, "editor_version", null));
      }
      static isValidMetaJSON(e) {
        Rn.baseLogTag;
        let t = !0;
        var n = [
          "campaign_id",
          "campaign_name",
          "template_type",
          "status",
          "expiry_time",
          "updated_time",
          "delivery",
          "user_in_segment",
        ];
        for (let i = 0; i < n.length; i++)
          if (null == e[n[i]]) {
            t = !1;
            break;
          }
        return t;
      }
      static getTriggerEvent(e, t, n) {
        const i = he(t, `triggerData.${n}_condition.included_filters`, null);
        return null == i
          ? void 0
          : i.filters.filter(
              (t) =>
                t.action_name === e || (t.action_name === b && "MOE_EXIT" === e)
            );
      }
      static areFiltersAbsent(e) {
        return !(
          null == e ||
          !e.action_name ||
          (null !== (e = null == e ? void 0 : e.attributes) &&
            void 0 !== e &&
            e.filters)
        );
      }
      static getFilters(e) {
        return (
          ((null == e ? void 0 : e.action_name) &&
            (null === (e = null == e ? void 0 : e.attributes) || void 0 === e
              ? void 0
              : e.filters)) ||
          null
        );
      }
      static getFilterOperator(e) {
        return (
          ((null == e ? void 0 : e.action_name) &&
            (null === (e = null == e ? void 0 : e.attributes) || void 0 === e
              ? void 0
              : e.filterOperator)) ||
          rn.AND
        );
      }
      static isTriggered(e, t, n) {
        let i = !0;
        if (0 < (null == t ? void 0 : t.length)) {
          var a = Rn.getFilterOperator(n),
            r = t.map((t) => Pn.doesEventMatchFilters(e, t));
          i = r[0] || !1;
          for (let e = 1; e < r.length; e++)
            if (a === rn.AND) {
              if (((i = i && r[e]), !1 === i)) break;
            } else if (a === rn.OR && ((i = i || r[e]), !0 === i)) break;
        }
        return i;
      }
      static getFilterResult(e, t) {
        let n = !1;
        var i = this.getTriggerEvent(e.name, t, "primary"),
          a = this.getTriggerEvent(T, t, "url");
        for (let d = 0; d < i.length; d++) {
          var r = i[d],
            s = (null == a ? void 0 : a[d]) || null,
            o = Rn.getFilters(r),
            l = new Rt(T, []),
            c = Rn.getFilters(s);
          if (
            (Rn.areFiltersAbsent(r) || Rn.isTriggered(e, o, r)) &&
            ((n = s = Rn.isTriggered(l, c, s)), n)
          ) {
            t.triggeredStateURL = window.location.href;
            break;
          }
        }
        return n;
      }
      static getURLFilterResult(e) {
        var t = new Rt(T, []);
        const n = Rn.getTriggerEvent(t.name, e, "url");
        if (n) {
          var i = n.find((e) => e.action_name === T);
          return (e = Rn.getFilters(i)), Rn.isTriggered(t, e, i);
        }
        return !0;
      }
    }
    Rn.baseLogTag = "OnsiteCampaignMeta";
    class Nn {
      constructor(e) {
        (this.cs_id = e.cs_id),
          (this._id = e._id),
          (this.references = e.references),
          (this.trigger_wait_time = e.trigger_wait_time || null),
          kn.validate(e.primary_condition)
            ? (this.primary_condition = new kn(e.primary_condition))
            : (this.primary_condition = null),
          kn.validate(e.secondary_condition)
            ? (this.secondary_condition = new kn(e.secondary_condition))
            : (this.secondary_condition = null),
          kn.validate(e.url_condition)
            ? (this.url_condition = new kn(e.url_condition))
            : (this.url_condition = null),
          (this.description = e.description),
          null != e.trigger_delay
            ? (this.trigger_delay = new Mn(e.trigger_delay))
            : (this.trigger_delay = null);
      }
      static validate(e) {
        let t = !1;
        return (
          ["primary_condition"].forEach((n) => {
            null != he(e, n, null) && (t = !0);
          }),
          t
        );
      }
    }
    class Mn {
      constructor(e) {
        if (
          ((this.delay = he(e, "delay", 0)),
          (this.unit = he(e, "unit", "seconds")),
          (this.delay_type = he(e, "delay_type", "")),
          (this.attribute = he(e, "attribute", "")),
          he(e, "delay", null) && he(e, "unit", null))
        ) {
          let e = this.delay;
          ("minutes" !== this.unit &&
            "hours" !== this.unit &&
            "days" !== this.unit) ||
            (e *= 60),
            ("hours" !== this.unit && "days" !== this.unit) || (e *= 60),
            "days" === this.unit && (e *= 24),
            (this.delayInSeconds = e);
        } else this.delayInSeconds = 0;
      }
    }
    class kn {
      constructor(e) {
        (this.included_filters = new Ln(he(e, "included_filters", null))),
          (this.excluded_filters = new Ln(he(e, "excluded_filters", null)));
      }
      static validate(e) {
        return !(
          !(
            e &&
            (e = e.included_filters) &&
            Array.isArray(e.filters) &&
            e.filters.length &&
            null != e.filters[0].action_name
          ) ||
          (e.filter_operator !== rn.OR && e.filters[0].action_name !== T)
        );
      }
    }
    class Ln {
      constructor(e) {
        (this.filter_operator = he(e, "filter_operator", rn.AND)),
          (this.filter_type = he(e, "filter_type", "actions")),
          (this.executed = he(e, "executed", !0)),
          (this.execution = he(e, "execution", null)),
          (this.filters =
            null === (e = he(e, "filters", [])) || void 0 === e
              ? void 0
              : e.map((e) => new xn(e)));
      }
    }
    class xn {
      constructor(e) {
        (this.action_name = he(e, "action_name", null)),
          (e = he(e, "attributes", null)),
          Bn.validateJson(e) && (this.attributes = new Bn(e));
      }
    }
    class Bn {
      constructor(e) {
        (this.filters = []),
          (this.filterOperator = he(e, "filter_operator", rn.AND)),
          (this.filters = he(e, "filters", []));
      }
      static validateJson(e) {
        if (null == e) return !1;
        var t = ["filters"];
        for (let n = 0; n < t.length; n++) if (null == e[t[n]]) return !1;
        return !0;
      }
    }
    ((bi = an = an || {}).ACTIVE = "ACTIVE"),
      (bi.PAUSED = "PAUSED"),
      (bi.EXPIRED = "EXPIRED"),
      ((bi = rn = rn || {}).AND = "and"),
      (bi.OR = "or");
    class Wn {
      constructor(e) {
        (this.priority = he(e, "priority", 0)),
          (this.dismiss_interval = he(e, "dismiss_interval", 0)),
          (this.fc_meta = new Un(he(e, "fc_meta", null)));
      }
    }
    class Un {
      constructor(e) {
        (this.count = 0),
          (this.delay = 0),
          (this.ignore_global_delay = !1),
          null != e &&
            ((this.count = he(e, "count", 0)),
            (this.delay = he(e, "delay", 0)),
            (this.ignore_global_delay = he(e, "ignore_global_delay", !1)));
      }
    }
    class Hn {
      constructor(e) {
        (this.aggregations = []),
          (this.filters = []),
          (this.aggregations = he(e, "aggregations", [])),
          (this.filter_operator = he(e, "filter_operator", rn.AND)),
          (this.filters = he(e, "filters", []));
      }
    }
    class Fn {
      constructor(e, t) {
        (this.config = {
          blocking: he(e, "config.blocking", Fn.getDefaultValue("blocking", t)),
          pushPage: he(
            e,
            "config.push_page",
            Fn.getDefaultValue("push_page", t)
          ),
          sticky: he(e, "config.sticky", Fn.getDefaultValue("sticky", t)),
          scrollable: he(
            e,
            "config.scrollable",
            Fn.getDefaultValue("scrollable", t)
          ),
          showOverOtherCampaigns: he(
            e,
            "config.show_over_campaigns",
            Fn.getDefaultValue("show_over_campaigns", t)
          ),
        }),
          (this.rules = { uriFilters: new Hn(he(e, "rules.uri_filters", {})) });
      }
      static getDefaultValue(e, t) {
        return {
          blocking: { POP_UP: !0, BANNER: !1 },
          push_page: { POP_UP: !1, BANNER: !0 },
          sticky: { POP_UP: !1, BANNER: !0 },
          scrollable: { POP_UP: !1, BANNER: !0 },
          show_over_campaigns: { POP_UP: !1, BANNER: !1 },
        }[e][t];
      }
    }
    ((bi = sn = sn || {}).SELF_HANDLED = "SELF_HANDLED"),
      (bi.POP_UP = "POP_UP"),
      (bi.BANNER = "BANNER");
    class Kn {
      constructor(e, t) {
        (this.channel = e), (this.target = t);
      }
      sendMessage(e, t) {
        return new Promise((n, i) => {
          var a = {
            id: (0, rt.v4)(),
            channel: this.channel,
            topic: e,
            message: t,
          };
          this.addToListener(a, n, i),
            this.target instanceof HTMLIFrameElement
              ? this.target.contentWindow.postMessage(a, this.target.src)
              : this.target.postMessage(a, "*");
        });
      }
      static listenToChannel(e, t, n) {
        window.addEventListener("message", (i) => {
          i.data &&
            i.data.channel &&
            i.data.topic &&
            i.data.channel === e &&
            i.data.topic === t &&
            n(i.data, (n) => {
              (n = { id: i.data.id, channel: e, topic: t, message: n }),
                i.source.postMessage(n, i.origin);
            });
        });
      }
      addToListener(e, t, n) {
        (Kn.pendingPromises[e.id] = { resolve: t, reject: n }),
          window.addEventListener("message", (e) => {
            e.data &&
              he(e.data, "channel", null) === this.channel &&
              null != Kn.pendingPromises[e.data.id] &&
              (Kn.pendingPromises[e.data.id].resolve(e.data),
              delete Kn.pendingPromises[e.data.id]);
          });
      }
    }
    Kn.pendingPromises = {};
    class Gn {
      constructor(e) {
        (this.draftId = he(e, "draft_id", null)),
          (this.draftType = he(e, "draft_type", null)),
          (this.templateType = he(e, "template_type", null)),
          (this.action = he(e, "action", null));
        var t = he(e, "campaign_meta", {});
        (this.locale = he(e, "locale", null)),
          (this.variation = he(e, "variation", null)),
          (this.displaySettings = new Fn(
            { config: t.config },
            this.templateType
          ));
      }
      static isValidRawJson(e) {
        return (
          (t = this),
          (i = function* () {
            var { draft_id: t, draft_tag: n, draft_type: i } = e;
            return i === Z.DRAFT_CAMPAIGN_TPYES.WEB_PERSONALIZATON
              ? null != t && null != n
              : null != t;
          }),
          new (n = (n = void 0) || Promise)(function (e, a) {
            function r(e) {
              try {
                o(i.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                o(i.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(t) {
              var i;
              t.done
                ? e(t.value)
                : ((i = t.value) instanceof n
                    ? i
                    : new n(function (e) {
                        e(i);
                      })
                  ).then(r, s);
            }
            o((i = i.apply(t, [])).next());
          })
        );
        var t, n, i;
      }
    }
    class jn {
      getIframe() {
        return (
          null == this.iFramePromise &&
            (this.iFramePromise = new Promise((e) => {
              const t = document.createElement("iframe");
              (t.id = "moengage-web-helper-frame"),
                (t.style.display = "none"),
                (t.src = Z.WEB_HELPER_IFRAME_URL),
                document.body.appendChild(t),
                t.addEventListener("load", () => {
                  (this.helper = new Kn(Z.IFRAME_CHANNEL, t)), e(t);
                });
            })),
          this.iFramePromise
        );
      }
      getDraftCampaignInfo() {
        return (
          (e = this),
          (n = function* () {
            var e = "IframeHelper.getDraftCampaignInfo";
            try {
              fe.log(1, e, "Loading helper frame"),
                yield this.getIframe(),
                fe.log(1, e, "Helper frame loaded");
              var t = yield this.helper.sendMessage(
                Z.IFRAME_TOPICS.COOKIE_STORAGE,
                { TYPE: "GET", KEY: Z.COOKIE_STORAGE.TEST_DRAFT_ID }
              );
              fe.log(1, e, "Data from iframe: ", t);
              var n = t.message;
              fe.log(1, e, "Raw test campaign", n);
              let i = null;
              return (
                null != n &&
                  (Gn.isValidRawJson(n)
                    ? (i = new Gn(n))
                    : fe.error(1, e, "Data is not a valid test campaign")),
                i
              );
            } catch (e) {
              return null;
            }
          }),
          new (t = (t = void 0) || Promise)(function (i, a) {
            function r(e) {
              try {
                o(n.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                o(n.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              var n;
              e.done
                ? i(e.value)
                : ((n = e.value) instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })
                  ).then(r, s);
            }
            o((n = n.apply(e, [])).next());
          })
        );
        var e, t, n;
      }
    }
    class Vn {
      constructor(e) {
        (this.templateType = he(e, "template_type", null)),
          (this.payloadType = he(e, "payload_type", null)),
          (this.payload = he(e, "payload", null)),
          (this.position = he(e, "position", null)),
          (this.campaignContext = he(e, "campaign_context", null)),
          (this.editorVersion = he(e, "editor_version", null)),
          (this.htmlJsonPayload = JSON.parse(he(e, "html_json_payload", null))),
          (this.updatedTime = Ve(he(e, "updated_time") + "Z"));
      }
    }
    var Yn = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class qn {
      constructor(e, t) {
        (this.appId = e),
          (this.store = ge.createInstance({
            driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
            name: Z.DATABASE_NAME,
            storeName: Z.STORES.SERVICE_META.NAME,
          })),
          (this.host = Z.HOST_1),
          null != t && null != t.host && (this.host = t.host);
      }
      getCampaignsMeta() {
        return Yn(this, void 0, void 0, function* () {
          var e = qn.baseLogTag + ".getCampaignsMeta";
          try {
            var t = yield this.getRequestOptions();
            const e = yield this.store.getItem(
              Z.STORES.SERVICE_META.KEYS.LAST_META_CALL_TIME
            );
            var n = yield it.post(
              this.host + Z.API.META,
              Object.assign(Object.assign({}, t), {
                postData: { campaign_ids: [] },
                last_fetch_time:
                  e && "object" == typeof e ? e.toISOString() : e,
              })
            );
            this.store.setItem(
              Z.STORES.SERVICE_META.KEYS.LAST_META_CALL_TIME,
              new Date()
            ),
              this.store.setItem(
                Z.STORES.SERVICE_META.KEYS.UNIQUE_ID,
                t.queryParams.unique_id
              );
            const i = JSON.parse(n.responseText),
              a = [];
            return (
              i.campaigns.forEach((e) => {
                Rn.isValidMetaJSON(e) && a.push(new Rn(e));
              }),
              {
                campaignsMeta: a,
                globalDelayBetweenInapps: he(i, "min_delay_btw_inapps", 0),
              }
            );
          } catch (t) {
            throw (
              (fe.error(1, e, "Error getting meta for inapp: ", t),
              new Error("Could not get meta payload"))
            );
          }
        });
      }
      getCampaignPayload(e, t) {
        return Yn(this, void 0, void 0, function* () {
          var n = qn.baseLogTag + ".getCampaignPayload";
          let i;
          try {
            if (t) {
              const n = {};
              for (let e = 0; e < t.attributes.length; e++)
                n[t.attributes[e].key] = t.attributes[e].value;
              var a = {
                event: {
                  name: t.name,
                  attributes: n,
                  time: new Date().toISOString(),
                },
                contexts: ["string"],
                campaign_context: e.campaignContext,
              };
              i = yield it.post(
                this.host + Z.API.CAMPAIGN_PAYLOAD + e.campaignId,
                yield this.getRequestOptions(a)
              );
            } else i = yield it.post(this.host + Z.API.CAMPAIGN_PAYLOAD + e.campaignId, yield this.getRequestOptions());
            return (
              (i = JSON.parse(i.responseText)),
              i.code === Z.GCG_ERROR_CODE && (i = { payload: i }),
              new Vn(i)
            );
          } catch (i) {
            if (
              (fe.error(1, n, "Error geting payload", i),
              i.code && (409 === i.code || 400 === i.code) && i.reason)
            )
              return {
                error: !0,
                reason: JSON.parse(i.reason).description || "",
              };
            throw new Error("Could not get payload for " + e.campaignId);
          }
        });
      }
      getCampaignsPayload(e, t) {
        return Yn(this, void 0, void 0, function* () {
          var n = qn.baseLogTag + ".getCampaignsPayload";
          let i;
          try {
            if (t) {
              const n = {};
              for (let e = 0; e < t.attributes.length; e++)
                n[t.attributes[e].key] = t.attributes[e].value;
              var a = {
                event: {
                  name: t.name,
                  attributes: n,
                  time: new Date().toISOString(),
                },
                contexts: ["string"],
                campaign_ids: e,
              };
              i = yield it.post(
                this.host + Z.API.CAMPAIGNS_PAYLOAD,
                this.getRequestOptions(a)
              );
            } else i = yield it.post(this.host + Z.API.CAMPAIGNS_PAYLOAD, this.getRequestOptions());
            const n = [];
            return (
              JSON.parse(i.responseText).forEach((e) => {
                n.push(new Vn(e));
              }),
              n
            );
          } catch (i) {
            throw (
              (fe.error(1, n, "Error geting payload", i),
              new Error("Could not get payload for " + e))
            );
          }
        });
      }
      getDraftCampaign(e) {
        return Yn(this, void 0, void 0, function* () {
          var t = qn.baseLogTag + ".getDraftCampaign";
          try {
            const t = yield this.getRequestOptions();
            t.queryParams = Object.assign({}, t.queryParams, {
              locale: e.locale,
              variation: e.variation,
            });
            var n = yield it.get(
              this.host + Z.API.DRAFT_CAMPAIGN_PAYLOAD + e.draftId,
              t
            );
            const i = JSON.parse(n.responseText);
            return (
              "JSON" === i.payload_type && (i.payload = JSON.parse(i.payload)),
              new Vn(i)
            );
          } catch (n) {
            return (
              fe.error(1, t, "Error geting test campaign payload", n), null
            );
          }
        });
      }
      getRequestOptions(e) {
        const t = Ye();
        return Bt.getWebSDKSettings()
          .then((n) => {
            var i = Ee.get(r.USER_DATA);
            let a;
            const { deviceUuid: s, attributes: o } = i;
            if (
              (o.map((e) => {
                e.key === I && (a = e.value);
              }),
              !s)
            )
              throw new Error("device_unique_id not found in localStorage.");
            return {
              headers: {
                "Content-Type": "application/json",
                "MOE-APPKEY": this.appId,
              },
              queryParams: {
                sdk_ver: t.getSdkVersion(),
                os: Ke() ? "mweb" : "web",
                unique_id: s,
                uid: "allowed" === n.o_u_e ? a : void 0,
              },
              postData: e || {},
            };
          })
          .catch((e) => {
            throw new Error(
              "Error in getting Web SDK Settings. This might indicate that the App is blocked."
            );
          });
      }
      sendDeliveryFunnelStats(e, t) {
        return Yn(this, void 0, void 0, function* () {
          const n = qn.baseLogTag + ".sendDeliveryFunnelStats";
          try {
            var i = yield this.getRequestOptions(null);
            return it
              .post(
                this.host + Z.API.STATS,
                Object.assign(Object.assign({}, i), {
                  headers: Object.assign(Object.assign({}, i.headers), {
                    "MOE-INAPP-BATCH-ID": t,
                  }),
                  postData: e,
                })
              )
              .then(() => {
                fe.log(1, n, "Delivery Funnel stats sent to Moengage: ", e);
              })
              .catch((e) => {
                fe.warn(1, n, "Error sending campaign stats: ", e);
              });
          } catch (i) {
            fe.warn(1, n, "Error sending campaign stats: ", i);
          }
        });
      }
    }
    qn.baseLogTag = "OnsiteApi";
    class zn {
      constructor() {
        (this.isExitIntentShown = !1), (this.isPopStateEventBound = !1);
      }
      onScroll(e) {
        const t = zn.baseLogTag + ".onScroll";
        null == e && (e = () => {});
        var n = zn.throttle(() => {
          fe.log(1, t, "Scrolled percent:", zn.getScrollPercent()),
            e(zn.getScrollPercent());
        }, Z.SCROLL_CAMPAIGN_THROTTLING_TIME);
        return (
          e(zn.getScrollPercent()), window.addEventListener("scroll", n), n
        );
      }
      onMobileTabChange(e) {
        const t = zn.baseLogTag + ".onMobileTabChange";
        document.addEventListener("visibilitychange", () => {
          this.isExitIntentShown ||
            "hidden" !== document.visibilityState ||
            (fe.log(1, t, "TRIGGERED: MOBILE EXIT INTENT"),
            e(),
            (this.isExitIntentShown = !0));
        });
      }
      onMobileBackHit(e) {
        const t = zn.baseLogTag + ".onMobileBackHit";
        setTimeout(() => {
          (this.isPopStateEventBound = !0),
            window.addEventListener("popstate", (n) => {
              !this.isExitIntentShown &&
                n.state &&
                "exit_intent" === n.state.moeIntent &&
                (fe.log(1, t, "TRIGGERED: MOBILE EXIT INTENT"),
                e("onBackClick"),
                (this.isExitIntentShown = !0));
            });
        }, 1e3),
          this.setHistoryState();
      }
      setHistoryState() {
        (window.history.state &&
          "no_intent" === window.history.state.moeIntent) ||
          (window.history.replaceState(
            Object.assign(Object.assign({}, window.history.state), {
              moeIntent: "exit_intent",
            }),
            ""
          ),
          window.history.pushState(
            Object.assign(Object.assign({}, window.history.state), {
              moeIntent: "no_intent",
            }),
            ""
          ));
      }
      onMobileScrollAndExit(e) {
        const t = zn.baseLogTag + ".onMobileScrollAndExit",
          n = document.documentElement.offsetHeight;
        let i,
          a = zn.getScrollY();
        0 < n &&
          (this.scrollExitIntentInterval = window.setInterval(() => {
            let r = a - zn.getScrollY();
            r < 0 && ((r = 0), (a = zn.getScrollY())),
              (i =
                zn.getScrollPercent() >
                Z.EXIT_INTENT.CONFIG.SCROLL_DOWN_THRESHOLD),
              i &&
                r / n > Z.EXIT_INTENT.CONFIG.SCROLL_UP_THRESHOLD / 100 &&
                (clearInterval(this.scrollExitIntentInterval),
                (this.scrollExitIntentInterval = null),
                this.isExitIntentShown ||
                  (fe.log(1, t, "TRIGGERED: MOBILE EXIT INTENT"),
                  e(),
                  (this.isExitIntentShown = !0)));
          }, Z.EXIT_INTENT.CONFIG.SCROLL_INTERVAL));
      }
      mobileExitIntent(e) {
        this.onMobileScrollAndExit(e),
          this.onMobileBackHit(e),
          this.onMobileTabChange(e);
      }
      onExit(e) {
        const t = zn.baseLogTag + ".onExit";
        Ke()
          ? this.mobileExitIntent(e)
          : document.addEventListener(
              "mouseout",
              (n) => {
                return (
                  (i = this),
                  (r = function* () {
                    var i = window.innerWidth,
                      a = window.innerHeight;
                    (n.clientY < 0 ||
                      n.clientX < 0 ||
                      n.clientY >= a ||
                      n.clientX >= i) &&
                      (fe.log(1, t, "TRIGGERED: EXIT INTENT"), e());
                  }),
                  new (a = (a = void 0) || Promise)(function (e, t) {
                    function n(e) {
                      try {
                        o(r.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function s(e) {
                      try {
                        o(r.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o(t) {
                      var i;
                      t.done
                        ? e(t.value)
                        : ((i = t.value) instanceof a
                            ? i
                            : new a(function (e) {
                                e(i);
                              })
                          ).then(n, s);
                    }
                    o((r = r.apply(i, [])).next());
                  })
                );
                var i, a, r;
              },
              !1
            );
      }
      static getScrollPercent() {
        const e = window,
          t = document,
          n = t.documentElement,
          i = t.getElementsByTagName("body")[0],
          a = e.innerHeight || n.clientHeight || i.clientHeight;
        var r = document.body,
          s = document.documentElement;
        return a <
          (s = Math.max(
            r.scrollHeight,
            r.offsetHeight,
            s.clientHeight,
            s.scrollHeight,
            s.offsetHeight
          ))
          ? (100 * zn.getScrollY()) / (s - a)
          : 100;
      }
      static getScrollY() {
        let e = 0;
        return (
          "number" == typeof window.pageYOffset
            ? (e = window.pageYOffset)
            : document.body &&
              document.body.scrollTop &&
              (e = document.body.scrollTop),
          e
        );
      }
      static throttle(e, t) {
        let n;
        return (...i) => {
          n =
            n ||
            window.setTimeout(() => {
              (n = null), e.apply(null, i);
            }, t);
        };
      }
    }
    zn.baseLogTag = "WindowEventManager";
    var Jn = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class Xn {
      constructor(e) {
        (this.eventNameCampaignHash = {}),
          (this.messagingCampaigns = []),
          (this.scrollCampaigns = []),
          (this.scrollCampaignTriggered = !1),
          (this.exitIntentCampaigns = []),
          (this.exitCampaignTriggered = !1),
          (this.listener = null),
          (this.historyManager = window[$]),
          (this.onEvent = (e) => {
            var t = Xn.baseLogTag + ".onEvent";
            try {
              if (null != this.eventNameCampaignHash[e.name]) {
                var n = this.eventNameCampaignHash[e.name].filter((t) =>
                  Rn.getFilterResult(e, t)
                );
                fe.log(
                  1,
                  t,
                  `Campaigns triggered for event ${e.name}: ` + n.length
                ),
                  this.trigger(e, n);
              }
            } catch (n) {
              fe.error(
                1,
                t,
                "Error occurred during check event trigger campaigns: ",
                n
              );
            }
          }),
          (this.onScroll = (e) =>
            Jn(this, void 0, void 0, function* () {
              const t = Xn.baseLogTag + ".onScroll";
              try {
                if (
                  this.scrollCampaigns &&
                  0 < this.scrollCampaigns.length &&
                  !this.scrollCampaignTriggered
                ) {
                  const n = yield pn(
                    this.eventNameCampaignHash.MOE_PAGE_SCROLL
                  );
                  null != n &&
                    n.map((n) =>
                      Jn(this, void 0, void 0, function* () {
                        var i,
                          a =
                            null ===
                              (i =
                                null ===
                                  (a =
                                    null ===
                                      (i =
                                        null ===
                                          (a =
                                            null ===
                                              (i =
                                                null == n
                                                  ? void 0
                                                  : n.triggerData) ||
                                            void 0 === i
                                              ? void 0
                                              : i.primary_condition) ||
                                        void 0 === a
                                          ? void 0
                                          : a.included_filters) || void 0 === i
                                      ? void 0
                                      : i.filters[0]) || void 0 === a
                                  ? void 0
                                  : a.attributes) || void 0 === i
                              ? void 0
                              : i.filters[0];
                        a &&
                          ((i = new ot(a.name, a.value)),
                          (i = yield Rt.createEvent(y, [i])),
                          Rn.getFilterResult(i, n) &&
                            e > a.value &&
                            !this.scrollCampaignTriggered &&
                            ((this.scrollCampaignTriggered = !0),
                            window.removeEventListener(
                              "scroll",
                              this.scrollListenerCallback
                            ),
                            fe.log(1, t, "Triggered Scroll campaign"),
                            this.trigger(i, [n])));
                      })
                    );
                }
              } catch (e) {
                fe.error(
                  1,
                  t,
                  "Error occurred in triggering scroll campaigns ",
                  e
                );
              }
            })),
          (this.onExit = (e) =>
            Jn(this, void 0, void 0, function* () {
              var t = Xn.baseLogTag + ".onExit";
              try {
                if (
                  0 < this.exitIntentCampaigns.length &&
                  !this.exitCampaignTriggered
                ) {
                  const i = yield Rt.createEvent("MOE_EXIT", []);
                  var n = this.eventNameCampaignHash.MOE_PAGE_EXIT.filter((e) =>
                    Rn.getFilterResult(i, e)
                  );
                  n.length
                    ? (fe.log(1, t, "Triggered Exit Intent campaign: ", n),
                      this.trigger(i, n))
                    : ("onBackClick" === e && window.history.back(),
                      fe.log(1, t, "No Exit Intent campaign is eligible."));
                }
              } catch (n) {
                fe.error(
                  1,
                  t,
                  "Error occurred in triggering exit intent campaigns ",
                  n
                );
              }
            })),
          (this.messagingCampaigns = e),
          (this.windowEventManager = new zn());
      }
      onTrigger(e) {
        this.listener = e;
      }
      startWatching() {
        return Jn(this, void 0, void 0, function* () {
          Xn.baseLogTag,
            (this.eventNameCampaignHash = {}),
            this.messagingCampaigns.forEach((e) => {
              he(
                e,
                "triggerData.primary_condition.included_filters.filters",
                []
              ).forEach((t) => {
                null != (t = t.action_name) &&
                  (null == this.eventNameCampaignHash[t] &&
                    (this.eventNameCampaignHash[t] = []),
                  this.eventNameCampaignHash[t].push(e));
              });
            }),
            this.historyManager &&
              (this.historyManager.getHistory().forEach(this.onEvent),
              this.historyManager.addEventListener(this.onEvent)),
            (this.scrollCampaignTriggered = !1),
            (this.scrollCampaigns = this.messagingCampaigns.filter((e) =>
              fn(e, y)
            )),
            0 < this.scrollCampaigns.length &&
              (this.scrollListenerCallback = this.windowEventManager.onScroll(
                this.onScroll
              )),
            (this.exitCampaignTriggered = !1),
            (this.exitIntentCampaigns = this.messagingCampaigns.filter((e) =>
              fn(e, b)
            )),
            0 < this.exitIntentCampaigns.length &&
              this.windowEventManager.onExit(this.onExit);
        });
      }
      setScrollListenerCallback(e) {
        this.scrollListenerCallback = e;
      }
      getScrollListenerCallback() {
        return this.scrollListenerCallback;
      }
      getWindowEventManager() {
        return this.windowEventManager;
      }
      trigger(e, t) {
        null != this.listener && this.listener(e, t);
      }
      destory() {
        this.listener = null;
      }
    }
    Xn.baseLogTag = "OnsiteTriggerManager";
    class Qn {
      constructor(e, t) {
        (this.waitForDelay = null),
          (this.iframe = null),
          (this.onFrameLoad = new qe()),
          (this.active = !1),
          (this.dismissInterval = null),
          (this.isJSONPayloadApproach = !1),
          (this.osmDivRendering = null),
          (this.osmDivSelector = null),
          (this.isActive = () => this.active),
          (this.campaignMeta = e),
          (this.data = t),
          (this.active = !1);
        const n = he(e, "triggerData.trigger_delay.delayInSeconds", 0) || 0;
        this.waitForDelay = new Promise((e) => {
          this.delayTimer = setTimeout(() => {
            e();
          }, 1e3 * n);
        });
      }
      setIsActive(e) {
        this.active = e;
      }
    }
    const $n = {
        CENTER: {
          position: "absolute",
          top: "50%",
          left: "50%",
          bottom: "auto",
          right: "auto",
          transform: "translate(-50%, -50%)",
        },
        CENTER_LEFT: {
          position: "absolute",
          top: "50%",
          left: "10px",
          bottom: "auto",
          right: "auto",
          transform: "translate(0,-50%)",
        },
        CENTER_RIGHT: {
          position: "absolute",
          top: "50%",
          right: "10px",
          bottom: "auto",
          left: "auto",
          transform: "translate(0,-50%)",
        },
        TOP_LEFT: {
          position: "absolute",
          top: "10px",
          left: "10px",
          bottom: "auto",
          right: "auto",
        },
        TOP_CENTER: {
          position: "absolute",
          top: "0",
          left: "50%",
          bottom: "auto",
          right: "auto",
          transform: "translate(-50%, 0)",
        },
        TOP_RIGHT: {
          position: "absolute",
          top: "10px",
          right: "10px",
          bottom: "auto",
          left: "auto",
        },
        BOTTOM_LEFT: {
          position: "absolute",
          bottom: "10px",
          left: "10px",
          top: "auto",
          right: "auto",
        },
        BOTTOM_CENTER: {
          position: "absolute",
          left: "50%",
          bottom: "10px",
          top: "auto",
          right: "auto",
          transform: "translate(-50%, 0)",
        },
        BOTTOM_RIGHT: {
          position: "absolute",
          bottom: "10px",
          right: "10px",
          top: "auto",
          left: "auto",
        },
        TOP: {
          position: "absolute",
          top: "0",
          left: "50%",
          bottom: "auto",
          right: "auto",
          transform: "translate(-50%, 0)",
        },
        BOTTOM: {
          position: "absolute",
          bottom: "0",
          top: "auto",
          right: "auto",
          left: "50%",
          transform: "translate(-50%, 0)",
        },
        LEFT: {
          position: "absolute",
          left: "0",
          bottom: "auto",
          right: "auto",
          top: "auto",
        },
        RIGHT: {
          position: "absolute",
          right: "0",
          bottom: "auto",
          left: "auto",
          top: "auto",
        },
      },
      Zn = (e) => {
        try {
          return (
            !ei() &&
            window.Moengage.onsite.displayManager.campaignRenderMap[e]
              .campaignMeta
          );
        } catch (t) {
          fe.error(
            1,
            "OsmFunctions.getCampaignMeta",
            "Campaign meta not found: " + e
          );
        }
      },
      ei = () =>
        !!window.Moengage.onsite.displayManager.testCampaign &&
        (fe.log(
          1,
          "OsmFunctions.isTestCampaign",
          "Test campaign element. No data will be sent to BE right now. We'll start tracking events once the campaign is live"
        ),
        !0);
    var ti = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    function ni(e, t, n) {
      return ti(this, void 0, void 0, function* () {
        const i = Sn(t);
        yield ti(this, void 0, void 0, function* () {
          try {
            const { root: o, styles: l, scripts: c } = e,
              d = document.createElement("div");
            (d.id = i), n.parentNode.insertBefore(d, n);
            const u = document.querySelector("#" + i),
              g = new DOMParser();
            var a = g.parseFromString(o, "text/html");
            yield (function (e) {
              return ti(this, void 0, void 0, function* () {
                try {
                  const t = e.getElementsByTagName("a");
                  for (let e = t.length - 1; 0 <= e; e--)
                    "" === t[e].getAttribute("href") &&
                      t[e].removeAttribute("href");
                } catch (e) {
                  fe.error(
                    2,
                    "InsertCustomHtmlJs.removeEmptyHrefTags",
                    "Error while removing Empty href attributes",
                    e
                  );
                }
              });
            })(a),
              (function (e) {
                try {
                  [
                    "trackEvent",
                    "trackClick",
                    "trackDismiss",
                    "dismissMessage",
                    "leadGenFormSubmit",
                    "fetchRatingValue",
                  ].forEach((n) => {
                    !(function (e, n) {
                      e.querySelectorAll("[onclick]").forEach((e) => {
                        var i = e
                          .getAttribute("onclick")
                          .replace(new RegExp(n + "\\((.*?)\\)", "g"), (e, i) =>
                            i ? n + `('${t}',${i})` : n + `('${t}')`
                          );
                        e.setAttribute("onclick", i);
                      });
                    })(e, n);
                  });
                } catch (e) {
                  fe.error(
                    2,
                    "InsertCustomHtmlJs.addCampaignId",
                    "Error while adding Campaign Id",
                    e
                  );
                }
              })(a);
            const h = l.map(
              (e) => g.parseFromString(e, "text/html").head.childNodes[0]
            );
            var r = c.map(
                (e) => g.parseFromString(e, "text/html").head.childNodes[0]
              ),
              s = h.map(
                (e) =>
                  new Promise((t, n) => {
                    !(function (e) {
                      const { node: t, onLoad: n, onError: a } = e;
                      t instanceof HTMLMetaElement ||
                      "dns-prefetch" === t.getAttribute("rel")
                        ? n()
                        : ((t.onload = () => n()), (t.onerror = () => a())),
                        document.querySelector("#" + i).appendChild(t);
                    })({ node: e, onLoad: t, onError: n });
                  })
              );
            yield Promise.all(s).catch((e) => {
              fe.warn(
                1,
                "InsertCustomHtmlJs",
                "Error loading Styles",
                (null == e ? void 0 : e.message) || ""
              );
            });
            const p = a.body.childNodes[0];
            u.appendChild(p),
              [...p.querySelectorAll(".brz-embed-code script")].map((e) => {
                !(function (e) {
                  const t = document.createElement("script");
                  t.innerHTML = e.innerHTML;
                  for (let a = 0; a < e.attributes.length; a++) {
                    var { name: n, value: i } = e.attributes[a];
                    t.setAttribute(n, i);
                  }
                  e.replaceWith(t);
                })(e);
              }),
              (function (e) {
                return ti(this, void 0, void 0, function* () {
                  for (const n of e)
                    yield (function (e) {
                      return new Promise((n, a) => {
                        const r = document.createElement("script");
                        for (let n = 0; n < e.attributes.length; n++) {
                          var s = e.attributes[n].name;
                          let i = e.attributes[n].value;
                          "src" === s &&
                            i.includes("typeform") &&
                            (i = i + "?campaignId=" + t),
                            r.setAttribute(s, i);
                        }
                        r.src
                          ? ((r.onload = n), (r.onerror = a))
                          : ((r.innerHTML = e.innerHTML), n()),
                          document.querySelector("#" + i).appendChild(r);
                      });
                    })(n);
                });
              })(r)
                .then(() => {
                  window.Brz.emit("init.dom", window.jQuery(p)),
                    fe.log(
                      1,
                      "InsertCustomHtmlJs",
                      "Custom HTML/JS DOM Level OSM Insertion: " + i
                    );
                })
                .catch((e) => {
                  fe.warn(
                    1,
                    "InsertCustomHtmlJs",
                    "Error loading script",
                    (null == e ? void 0 : e.message) || ""
                  );
                });
          } catch (a) {
            fe.error(
              2,
              "InsertCustomHtmlJs",
              "Failed to Insert OSM into DOM: " + i
            );
          }
        });
      });
    }
    var ii = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class ai {
      constructor() {
        (this.renderListener = null),
          (this.initializationPromiseObject = null),
          (this.campaignRenderOrder = []),
          (this.campaignRenderMap = {}),
          (this.dismissTestInapp = (e) => {
            this.initialInlineBodyStyle
              ? document.body.setAttribute("style", this.initialInlineBodyStyle)
              : document.body.removeAttribute("style"),
              (this.moeInappPusher.style.height = "0"),
              this.pushCardsTemplate(0),
              setTimeout(
                () =>
                  document.getElementById("moe-onsite-campaign-" + e).remove(),
                0
              );
          }),
          (this.dismissInapp = (e) => {
            if (0 !== this.getActiveCampaigns().length) {
              const t = this.getActiveCampaigns();
              setTimeout(() => {
                t.forEach((t) => {
                  t.campaignMeta.campaignId === e &&
                    (t.iframe || t.osmDivSelector).remove();
                });
              }, 0),
                this.campaignRenderMap[e].setIsActive(!1),
                clearInterval(this.campaignRenderMap[e].dismissInterval),
                this.renderAllActiveCampaigns();
            } else this.dismissTestInapp(e);
          }),
          (this.clickTracker = ln),
          (this.dismissEvent = dn),
          this.startInitialization(),
          (this.initialInlineBodyStyle = document.body.getAttribute("style"));
      }
      startInitialization() {
        return ii(this, void 0, void 0, function* () {
          var e = ai.baseLogTag + ".startInitialization";
          try {
            if (
              (null == this.initializationPromiseObject &&
                (this.initializationPromiseObject = new qe()),
              (this.moeInappPusher = document.createElement("div")),
              (this.moeInappPusher.id = Z.PUSH_BANNER),
              this.moeInappPusher.style.setProperty(
                "display",
                "block",
                "important"
              ),
              (this.moeInappPusher.style.height = "0px"),
              "FRAMESET" === document.body.nodeName)
            ) {
              const e = document.head;
              e.parentNode.insertBefore(this.moeInappPusher, e);
            } else {
              const e = document.body.firstChild;
              e.parentNode.insertBefore(this.moeInappPusher, e);
            }
            this.initializationPromiseObject.res();
          } catch (t) {
            fe.error(1, e, "Error initializing display managaer:", t);
          }
        });
      }
      queueDraftCampaign(e, t) {
        return ii(this, void 0, void 0, function* () {
          var n = ai.baseLogTag + ".queueDraftCampaign";
          try {
            yield this.initializationPromiseObject.p,
              (e.position = t.position),
              (this.testCampaign = e);
            var i = !("1" !== t.editorVersion || !t.htmlJsonPayload);
            const a =
              !i &&
              ai.createDefaultIframe(this.testCampaign.draftId, t.payload);
            let r;
            fe.warn(1, n, "Going to render test campaign " + e.draftId),
              (r =
                "FRAMESET" === document.body.nodeName
                  ? this.moeInappPusher
                  : document.body.firstChild),
              i
                ? (yield ni(t.htmlJsonPayload, this.testCampaign.draftId, r),
                  this.renderTestCampaign(e, a, t))
                : (r.parentNode.insertBefore(a, r),
                  (a.onload = () => {
                    a.contentWindow.postMessage({ campaignId: e.draftId }, "*"),
                      "1" === t.editorVersion
                        ? this.handleBridgeInsertion(
                            a.contentDocument,
                            e.draftId
                          )
                        : this.handleClassBasedTrackingForTestCampaign(a, t, e),
                      this.renderTestCampaign(e, a);
                  }));
          } catch (e) {
            fe.error(1, n, "Error queueing draft campaign", e);
          }
        });
      }
      renderTestCampaign(e, t, n) {
        return ii(this, void 0, void 0, function* () {
          if (t) {
            var i;
            (t.style.visibility = "hidden"),
              (t.style.display = "block"),
              (t.style.zIndex = "2147483647"),
              e.displaySettings.config.blocking
                ? ((t.style.height = window.innerHeight + "px"),
                  (t.style.width = "100%"))
                : ((t.style.height = getComputedStyle(
                    t.contentDocument.body
                  ).height),
                  (t.style.width = getComputedStyle(
                    t.contentDocument.body
                  ).width),
                  e.templateType === sn.POP_UP && (t.style.margin = "0px auto"),
                  -1 < t.srcdoc.indexOf(Z.POSITIONED_TEMPLATE) &&
                    ((i = -1 < t.srcdoc.indexOf(Z.SIDE_BANNER)),
                    this.adjustPositionOfCampaign(t.style, e.position, i))),
              (t.style.visibility = "visible"),
              this.testCampaignPositionStyling(e, t),
              e.displaySettings.config.scrollable ||
                (document.body.style.overflow = "hidden");
          } else {
            const t = document.getElementById(Sn(e.draftId));
            (t.style.zIndex = "2147483647"),
              this.testCampaignPositionStyling(e, t);
          }
          e.templateType === sn.BANNER &&
            this.bannerTestCampaignStyling(e, t, n);
        });
      }
      queueLiveCampaign(e, t) {
        var n;
        return ii(this, void 0, void 0, function* () {
          var i,
            a = ai.baseLogTag + ".queueLiveCampaign";
          (e.campaignContext = t.campaignContext),
            (e.editorVersion = t.editorVersion);
          try {
            if (
              (yield this.initializationPromiseObject.p,
              null != this.campaignRenderMap[e.campaignId] &&
                this.campaignRenderMap[e.campaignId].isActive())
            )
              fe.warn(
                1,
                a,
                `Can not render ${e.campaignId}, as campaign is already Active.`
              );
            else if (
              (this.campaignRenderOrder.push(e.campaignId),
              (this.campaignRenderMap[e.campaignId] = new Qn(e, t)),
              (this.campaignRenderMap[e.campaignId].isJSONPayloadApproach = !(
                "1" !== t.editorVersion || !t.htmlJsonPayload
              )),
              this.campaignRenderMap[e.campaignId].isJSONPayloadApproach
                ? (this.campaignRenderMap[e.campaignId].osmDivRendering = (n) =>
                    ii(this, void 0, void 0, function* () {
                      yield ni(t.htmlJsonPayload, e.campaignId, n);
                    }))
                : ((i = ai.createDefaultIframe(
                    e.campaignId,
                    this.campaignRenderMap[e.campaignId].data.payload
                  )),
                  (this.campaignRenderMap[e.campaignId].iframe = i)),
              yield this.campaignRenderMap[e.campaignId].waitForDelay,
              yield this.canCampaignBeRendered(e))
            ) {
              if (
                (fe.warn(1, a, "Going to render " + e.campaignId),
                (null === (n = t.payload) || void 0 === n ? void 0 : n.code) ===
                  Z.GCG_ERROR_CODE)
              )
                return (
                  fe.warn(
                    1,
                    a,
                    `Can not render ${e.campaignId} as it falls under Control Group.`
                  ),
                  void cn(e, "OSM", !0)()
                );
              this.campaignRenderMap[e.campaignId].setIsActive(!0),
                cn(e, "OSM")(),
                null != this.renderListener && this.renderListener(e),
                this.renderAllActiveCampaigns();
            } else fe.warn(1, a, "Can not render " + e.campaignId);
          } catch (i) {
            fe.error(1, a, "Error queuing campaign " + e.campaignId, i);
          }
        });
      }
      renderAllActiveCampaigns() {
        return ii(this, void 0, void 0, function* () {
          var e,
            t = ai.baseLogTag + ".renderAllActiveCampaigns";
          const n = this.getActiveCampaigns();
          if ((this.restoreBodyStyle(), 0 < n.length)) {
            for (let i = 0; i < n.length; i++) {
              if (
                null ==
                document.getElementById(Sn(n[i].campaignMeta.campaignId))
              ) {
                let e;
                (e =
                  "FRAMESET" === document.body.nodeName
                    ? this.moeInappPusher
                    : document.body.firstChild),
                  n[i].isJSONPayloadApproach
                    ? (yield n[i].osmDivRendering(e),
                      n[i].onFrameLoad.res(),
                      (n[i].osmDivSelector = document.getElementById(
                        Sn(n[i].campaignMeta.campaignId)
                      )))
                    : (e.parentNode.insertBefore(n[i].iframe, e),
                      (n[i].iframe.onload = () => {
                        ri.setScrollState(n),
                          n[i].iframe.contentWindow.postMessage(
                            { campaignId: n[i].campaignMeta.campaignId },
                            "*"
                          ),
                          "1" === n[i].campaignMeta.editorVersion
                            ? (this.handleBridgeInsertion(
                                n[i].iframe.contentDocument,
                                n[i].campaignMeta.campaignId,
                                n[i].campaignMeta
                              ),
                              this.changeAnchorTagReDirectionMethod(
                                n[i].iframe
                              ))
                            : this.handleClassBasedTracking(n[i]),
                          n[i].onFrameLoad.res();
                      }));
              }
              yield n[i].onFrameLoad.p,
                n[i].isJSONPayloadApproach
                  ? (fe.log(
                      1,
                      t,
                      "zindex for " + n[i].campaignMeta.campaignId,
                      (2147483647).toString()
                    ),
                    (n[i].osmDivSelector.style.zIndex = (
                      2147483647 -
                      (n.length - i - 1)
                    ).toString()),
                    this.liveCampaignPositionStyling(
                      n[i].campaignMeta,
                      n[i].osmDivSelector
                    ))
                  : ((n[i].iframe.style.visibility = "hidden"),
                    (n[i].iframe.style.display = "block"),
                    fe.log(
                      1,
                      t,
                      "zindex for " + n[i].campaignMeta.campaignId,
                      (2147483647).toString()
                    ),
                    (n[i].iframe.style.zIndex = (
                      2147483647 -
                      (n.length - i - 1)
                    ).toString()),
                    (n[i].iframe.style.margin = "0"),
                    n[i].campaignMeta.display.config.blocking
                      ? ((n[i].iframe.style.height = window.innerHeight + "px"),
                        (n[i].iframe.style.width = "100%"))
                      : ((n[i].iframe.style.height = getComputedStyle(
                          n[i].iframe.contentDocument.body
                        ).height),
                        n[i].iframe.style.padding.includes("10px")
                          ? (n[i].iframe.style.width =
                              parseInt(
                                getComputedStyle(
                                  n[i].iframe.contentDocument.body
                                ).width
                              ) +
                              20 +
                              "px")
                          : (n[i].iframe.style.width = getComputedStyle(
                              n[i].iframe.contentDocument.body
                            ).width),
                        n[i].campaignMeta.templateType === sn.POP_UP &&
                          (n[i].iframe.style.margin = "0px auto"),
                        n[i].data.payload &&
                          -1 <
                            n[i].data.payload.indexOf(Z.POSITIONED_TEMPLATE) &&
                          ((e = -1 < n[i].data.payload.indexOf(Z.SIDE_BANNER)),
                          this.adjustPositionOfCampaign(
                            n[i].iframe.style,
                            n[i].data.position,
                            e
                          ))),
                    (n[i].iframe.style.visibility = "visible"),
                    this.liveCampaignPositionStyling(
                      n[i].campaignMeta,
                      n[i].iframe
                    )),
                null != n[i].dismissInterval ||
                  (0 <
                    (e =
                      1e3 *
                      he(n[i].campaignMeta, "delivery.dismiss_interval", 0)) &&
                    (n[i].dismissInterval = setTimeout(() => {
                      const e =
                        this.campaignRenderMap[n[i].campaignMeta.campaignId];
                      e &&
                        e.isActive() &&
                        (this.dismissInapp(n[i].campaignMeta.campaignId),
                        dn(n[i].campaignMeta, "OSM", !0));
                    }, e)));
            }
            this.bannerLiveCampaignsStyling(n);
          }
        });
      }
      restoreBodyStyle() {
        (this.moeInappPusher.style.height = "0px"), this.pushCardsTemplate(0);
        let e = 0;
        Object.keys(this.campaignRenderMap).forEach((t) => {
          this.campaignRenderMap[t].campaignMeta.templateType === sn.POP_UP &&
            this.campaignRenderMap[t].isActive() &&
            e++;
        }),
          1 <= e ||
            (this.initialInlineBodyStyle
              ? document.body.setAttribute("style", this.initialInlineBodyStyle)
              : document.body.removeAttribute("style"));
      }
      canCampaignBeRendered(e) {
        return ii(this, void 0, void 0, function* () {
          var t = ai.baseLogTag + ".queueLiveCampaign";
          try {
            var n = yield en.campaingsStatsStore.getItem(e.campaignId),
              i = yield en.serviceMetaStore.getItem(
                Z.STORES.SERVICE_META.KEYS.GLOBAL_DELAY
              ),
              a = yield en.serviceMetaStore.getItem(
                Z.STORES.SERVICE_META.KEYS.LAST_INAPP_SHOWN_TIME
              );
            return (
              hn.isValid(e, n) &&
              hn.isValidMessagingCampaign(
                e,
                n,
                i,
                a,
                this.getActiveCampaigns()
              ) &&
              Rn.getURLFilterResult(e)
            );
          } catch (n) {
            fe.error(
              1,
              t,
              `Error checking if campaign ${e.campaignId} can be rendered:`,
              n
            );
          }
          return !1;
        });
      }
      static createDefaultIframe(e, t) {
        ai.baseLogTag, (e = Sn(e));
        const n = document.createElement("iframe");
        return (
          n.setAttribute("id", e),
          (n.style.left = "0px"),
          (n.style.top = "0px"),
          (n.style.bottom = "0px"),
          (n.style.right = "0px"),
          (n.style.border = "0px none"),
          (n.style.height = "100%"),
          (n.style.width = window.innerWidth.toString() + "px"),
          (n.style.padding = "0"),
          (n.style.overflow = "hidden"),
          (n.style.overflowY = "hidden"),
          (n.style.zIndex = "999999"),
          (n.style.display = "none"),
          (n.style.position = "fixed"),
          n.setAttribute("srcdoc", t),
          n
        );
      }
      onRender(e) {
        this.renderListener = e;
      }
      getActiveCampaigns() {
        return this.campaignRenderOrder
          .map((e) => this.campaignRenderMap[e])
          .filter((e) => e.isActive());
      }
      destroy() {
        this.getActiveCampaigns().forEach((e) => {
          e.setIsActive(!1);
        }),
          this.renderAllActiveCampaigns(),
          (this.campaignRenderOrder = []),
          (this.campaignRenderMap = {});
      }
      adjustPositionOfCampaign(e, t, n) {
        t && (Object.assign(e, $n[t]), Ke() && n && this.addMarginInMweb(e, t));
      }
      addMarginInMweb(e, t) {
        const n = {
          paddingLeft: "10px",
          paddingRight: "10px",
          marginTop: "0",
          marginBottom: "0",
        };
        "TOP" === t && (n.marginTop = "10px"),
          "BOTTOM" === t && (n.marginBottom = "10px"),
          Object.assign(e, n);
      }
      handleBridgeInsertion(e, t, n) {
        var i = ai.baseLogTag + ".handleBridgeInsertion";
        try {
          e.head.append(
            ((e, t) => {
              const n = document.createElement("script");
              return (
                (n.type = "text/javascript"),
                (n.text =
                  ((t = t),
                  `\n    const moeSDK = window.parent.Moengage;\n    let OsmCampaignMeta = ${JSON.stringify(
                    e
                  )};\n    // if its a test osm no event will be tracked as no OsmCampaignMeta found.\n    trackEvent = !!OsmCampaignMeta;\n    const moengage = {\n        trackEvent: function (eventName, eventAttr, isNonInteractive) {\n            trackEvent && moeSDK.track_event(eventName, eventAttr);\n        },\n        trackClick: function (id) {\n            trackEvent && moeSDK.onsite.displayManager.clickTracker(OsmCampaignMeta, 'OSM', {\n                widget_id: id,\n              })();\n        },\n        trackDismiss: function (isAuto = false) {\n            trackEvent && moeSDK.onsite.displayManager.dismissEvent(OsmCampaignMeta, 'OSM', isAuto);\n        },\n        setAlias: function (data) {\n            moeSDK.update_unique_user_id(data);\n        },\n        setUniqueId: function (data) {\n            moeSDK.add_unique_user_id(data);\n        },\n        destroySession: function () {\n            moeSDK.destroy_session();\n        },\n        setUserName: function (data) {\n            moeSDK.add_user_name(data);\n        },\n        setFirstName: function (data) {\n            moeSDK.add_first_name(data);\n        },\n        setLastName: function (data) {\n            moeSDK.add_last_name(data);\n        },\n        setEmailId: function (data) {\n            moeSDK.add_email(data);\n        },\n        setMobileNumber: function (data) {\n            moeSDK.add_mobile(data);\n        },\n        setGender: function (data) {\n            moeSDK.add_gender(data);\n        },\n        setBirthDate: function (data) {\n            //iso date format only\n            moeSDK.add_birthday(data);\n        },\n        setUserAttribute: function (name, value) {\n            moeSDK.add_user_attribute(name, value);\n        },\n        dismissMessage: function () {\n          setTimeout(() => {\n            moeSDK.onsite.displayManager.dismissInapp('${t}');\n          }, 100)\n        },\n        showPushOptIn: function (config) {\n            moeSDK.call_web_push(config);\n        },\n        copyText: function (selector) {\n            var text = document.querySelector(selector);\n            if(text.textContent) {\n                navigator.clipboard.writeText(text.textContent);\n            }\n            else {\n                text.select();\n                text.setSelectionRange(0, 99999);\n                navigator.clipboard.writeText(text.value);\n            }\n        }\n    }\n    const MoeOsm = moengage;\n    `)),
                n.setAttribute("data-moe-script", "1"),
                n
              );
            })(n, t)
          ),
            fe.log(2, i, "JS-bridge script inserted successfully", t);
        } catch (e) {
          fe.warn(2, i, "Failed to insert OSM JS Bridge: ", t);
        }
      }
      handleClassBasedTrackingForTestCampaign(e, t, n) {
        const i = ai.baseLogTag + ".handleClassBasedTrackingForTestCampaign";
        var a = (e) => Array.prototype.slice.call(e),
          r = a(
            e.contentDocument.getElementsByClassName(
              Z.CSS_SELECTORS.DISMISS_INAPP
            )
          ),
          s = a(
            e.contentDocument.getElementsByClassName(
              Z.CSS_SELECTORS.CLICK_INAPP
            )
          );
        if (
          ((a = a(e.contentDocument.getElementsByTagName("a"))),
          0 === r.length &&
            fe.warn(1, i, "No dismiss class items present in this template"),
          0 === s.length &&
            fe.warn(1, i, "No click class items present in this template"),
          -1 < t.payload.indexOf("TEXT_INPUT") ||
            -1 < t.payload.indexOf('dynamic-listeners="true"'))
        )
          e.contentDocument.body.addEventListener("click", (e) => {
            e.target &&
              e.target.classList.contains(Z.CSS_SELECTORS.CLICK_INAPP) &&
              fe.log(
                1,
                i,
                "Clicked on test campaign element. No data will be sent to BE right now. We'll start sending the click events once the campaign is live"
              ),
              e.target &&
                e.target.classList.contains(Z.CSS_SELECTORS.DISMISS_INAPP) &&
                this.dismissTestInapp(n.draftId);
          });
        else {
          for (const e of s)
            e.addEventListener("click", (e) => {
              fe.log(
                1,
                i,
                "Clicked on test campaign element. No data will be sent to BE right now. We'll start sending the click events once the campaign is live"
              );
            });
          for (const e of r)
            e.addEventListener("click", () => {
              this.dismissTestInapp(n.draftId);
            });
        }
        for (const e of a)
          "_blank" !== e.getAttribute("target") &&
            e.setAttribute("target", "_parent");
      }
      handleClassBasedTracking(e) {
        var t = ai.baseLogTag + ".handleClassBasedTracking",
          n = (e) => Array.prototype.slice.call(e);
        const i = e.iframe;
        var a = n(
            i.contentDocument.getElementsByClassName(
              Z.CSS_SELECTORS.DISMISS_INAPP
            )
          ),
          r = n(
            i.contentDocument.getElementsByClassName(
              Z.CSS_SELECTORS.CLICK_INAPP
            )
          );
        if (
          ((n = n(i.contentDocument.getElementsByTagName("a"))),
          0 === a.length &&
            fe.warn(1, t, "No dismiss class items present in this template"),
          0 === r.length &&
            fe.warn(1, t, "No click class items present in this template"),
          e.data.payload &&
            (-1 < e.data.payload.indexOf("TEXT_INPUT") ||
              -1 < e.data.payload.indexOf('dynamic-listeners="true"')))
        )
          i.contentDocument.body.addEventListener("click", (t) => {
            var n;
            t.target &&
              t.target.classList.contains(Z.CSS_SELECTORS.CLICK_INAPP) &&
              ((n = t.target.dataset.id),
              ln(e.campaignMeta, "OSM", { widget_id: n })()),
              t.target &&
                t.target.classList.contains(Z.CSS_SELECTORS.DISMISS_INAPP) &&
                (this.dismissInapp(e.campaignMeta.campaignId),
                t.target.classList.contains(Z.CSS_SELECTORS.CLICK_INAPP) ||
                  dn(e.campaignMeta, "OSM"));
          });
        else {
          for (const t of r)
            t.addEventListener("click", (t) => {
              (t = t.target.dataset.id),
                ln(e.campaignMeta, "OSM", { widget_id: t })();
            });
          for (const t of a)
            t.addEventListener("click", () => {
              this.dismissInapp(e.campaignMeta.campaignId),
                t.classList.contains(Z.CSS_SELECTORS.CLICK_INAPP) ||
                  dn(e.campaignMeta, "OSM");
            });
        }
        for (const e of n)
          "_blank" !== e.getAttribute("target") &&
            e.setAttribute("target", "_parent");
      }
      changeAnchorTagReDirectionMethod(e) {
        var t,
          n = ai.baseLogTag + ".changeAnchorTagReDirectionMethod";
        try {
          for (const n of ((t = e.contentDocument.getElementsByTagName("a")),
          Array.prototype.slice.call(t))) {
            var i = n.getAttribute("target"),
              a = n.getAttribute("href");
            a &&
              "_parent" === i &&
              (n.setAttribute(
                "onclick",
                `setTimeout(()=>{window.open('${a}','_parent')})`
              ),
              n.removeAttribute("href"));
          }
          fe.log(
            1,
            n,
            "Anchor Tag Href Rendering Changed to onClick for Campaign Frame: " +
              e.id
          );
        } catch (t) {
          fe.error(
            1,
            n,
            "Failed to Change Anchor Tag Href Rendering for Campaign Frame: " +
              e.id
          );
        }
      }
      liveCampaignPositionStyling(e, t) {
        var n = ai.baseLogTag + ".liveCampaignPositionStyling";
        try {
          e.templateType === sn.BANNER
            ? e.display.config.sticky
              ? (t.style.position = "fixed")
              : (t.style.position = "absolute")
            : e.templateType === sn.POP_UP &&
              ((t.style.position = "fixed"),
              "DIV" === t.tagName
                ? (t.style.inset = "0")
                : (t.style.backgroundColor = "rgba(99, 99, 99, 0.21)")),
            fe.log(
              1,
              n,
              "Added Position Styles for CampaignId: " + e.campaignId
            );
        } catch (t) {
          fe.error(
            1,
            n,
            "Failed adding Styles for CampaignId: " + e.campaignId
          );
        }
      }
      testCampaignPositionStyling(e, t) {
        var n = ai.baseLogTag + ".testCampaignPositionStyling";
        try {
          e.templateType === sn.BANNER
            ? e.displaySettings.config.sticky
              ? (t.style.position = "fixed")
              : (t.style.position = "absolute")
            : e.templateType === sn.POP_UP &&
              ((t.style.position = "fixed"),
              "DIV" === t.tagName
                ? (t.style.inset = "0")
                : (t.style.backgroundColor = "rgba(99, 99, 99, 0.21)")),
            fe.log(1, n, "Added Position Styles for CampaignId: " + e.draftId);
        } catch (t) {
          fe.error(1, n, "Failed adding Styles for CampaignId: " + e.draftId);
        }
      }
      bannerTestCampaignStyling(e, t, n) {
        var i,
          a = ai.baseLogTag + ".bannerTestCampaignStyling";
        try {
          let n,
            r = !0;
          t
            ? ((n = parseInt(getComputedStyle(t.contentDocument.body).height)),
              (r = -1 < t.srcdoc.indexOf(Z.POSITIONED_TEMPLATE)))
            : ((i = document.querySelector(
                "#" + Sn(e.draftId) + " .brz-container"
              )),
              (n = parseInt(getComputedStyle(i).height))),
            e.displaySettings.config.pushPage &&
              ((r && "TOP" === e.position) || !r) &&
              (this.moeInappPusher.style.height = n.toString() + "px"),
            this.pushCardsTemplate(n, this.moeInappPusher),
            fe.log(
              1,
              a,
              "Added Banner Styles for Test CampaignId: " + e.draftId
            );
        } catch (n) {
          fe.error(
            1,
            a,
            "Failed Added Banner Styles for Test CampaignId: " + e.draftId
          );
        }
      }
      bannerLiveCampaignsStyling(e) {
        var t = ai.baseLogTag + ".bannerLiveCampaignsStyling";
        let n = 0,
          i = 0;
        for (
          let a =
            e.filter((e) => e.campaignMeta.templateType === sn.BANNER).length -
            1;
          0 <= a;
          a--
        )
          try {
            if (e[a].isJSONPayloadApproach || e[a].iframe.contentDocument) {
              let r,
                s = !0;
              e[a].isJSONPayloadApproach
                ? (r = parseInt(
                    getComputedStyle(
                      e[a].osmDivSelector.querySelector(".brz-container")
                    ).height
                  ))
                : ((r = parseInt(
                    getComputedStyle(e[a].iframe.contentDocument.body).height
                  )),
                  (s =
                    e[a].data.payload &&
                    -1 < e[a].data.payload.indexOf(Z.POSITIONED_TEMPLATE))),
                (n += r),
                e[a].campaignMeta.display.config.pushPage &&
                  ((s && "TOP" === e[a].data.position) || !s) &&
                  (i += r),
                fe.log(
                  1,
                  t,
                  "Added Banner Styles for Live CampaignId: " +
                    e[a].campaignMeta.campaignId
                );
            }
          } catch (n) {
            fe.error(
              1,
              t,
              "Failed Adding Banner Styles for Live CampaignId: " +
                e[a].campaignMeta.campaignId
            );
          }
        (this.moeInappPusher.style.height = i.toString() + "px"),
          this.pushCardsTemplate(i, this.moeInappPusher);
      }
      pushCardsTemplate(e, t) {
        var n;
        null !==
          (n =
            null ===
              (n =
                null === (n = window) || void 0 === n ? void 0 : n.Moengage) ||
            void 0 === n
              ? void 0
              : n.cards) &&
          void 0 !== n &&
          n.updatePushBannerHeight(e, t);
      }
    }
    ai.baseLogTag = "MessagingDisplayManager";
    class ri {
      static setScrollState(e) {
        let t = !0;
        for (let n = 0; n < e.length; n++)
          t = t && e[n].campaignMeta.display.config.scrollable;
        t || (document.body.style.overflow = "hidden");
      }
    }
    var si,
      oi,
      li,
      ci,
      di = function (e, t, n, i) {
        return new (n = n || Promise)(function (a, r) {
          function s(e) {
            try {
              l(i.next(e));
            } catch (e) {
              r(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(s, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
    class ui {
      constructor(e, t, n) {
        (this.baseLogTag = "DeliveryFunnelManager"),
          (this.appId = e.appId),
          (this.displayManager = t),
          (this.batchId = (0, rt.v4)()),
          (this.OnsiteApiClient = new qn(this.appId, n));
      }
      setStats(e, t) {
        var n = new Date().toISOString();
        (e.stats[t] = e.stats[t] || []),
          e.stats[t].includes(n) || e.stats[t].push(n);
      }
      attemptCampaigns(e) {
        e.forEach((e) => {
          this.setStats(e, si.CAMPAIGN_ATTEMPTED);
        });
      }
      getImpressionStats(e) {
        return di(this, void 0, void 0, function* () {
          var t = this.baseLogTag + ".getImpressionStats";
          try {
            return yield en.campaingsStatsStore.getItem(e.campaignId);
          } catch (n) {
            fe.error(
              1,
              t,
              "Error getting impression stats for " + e.campaignId,
              n
            );
          }
        });
      }
      getLastGlobalInappShown() {
        return di(this, void 0, void 0, function* () {
          return yield en.serviceMetaStore.getItem(
            Z.STORES.SERVICE_META.KEYS.LAST_INAPP_SHOWN_TIME
          );
        });
      }
      getGlobalDelay() {
        return di(this, void 0, void 0, function* () {
          return yield en.serviceMetaStore.getItem(
            Z.STORES.SERVICE_META.KEYS.GLOBAL_DELAY
          );
        });
      }
      filterValidCampaigns(e) {
        return di(this, void 0, void 0, function* () {
          var t = this.baseLogTag + ".filterValidCampaigns",
            n = e.map((e) => this.getImpressionStats(e));
          const i = yield this.getLastGlobalInappShown(),
            a = yield this.getGlobalDelay();
          try {
            const t = yield Promise.all(n);
            return e.filter((e, n) => {
              if (e.templateType !== sn.SELF_HANDLED) {
                if (!hn.isCampaignWithinFC(e, t[n]))
                  return (
                    this.setStats(e, oi.CAMPAIGN_PRIORITY_MAX_TIMES_SHOWN), !1
                  );
                if (!hn.hasCampaignClearedSelfDelay(e, t[n]))
                  return this.setStats(e, oi.CAMPAIGN_PRIORITY_MIN_DELAY), !1;
                if (!hn.hasCampaignClearedGlobalDelay(e, a, i))
                  return (
                    this.setStats(e, oi.CAMPAIGN_PRIORITY_GLOBAL_DELAY), !1
                  );
              }
              return (
                !hn.isCampaignExpired(e) ||
                (this.setStats(e, oi.CAMPAIGN_PRIORITY_EXPIRED), !1)
              );
            });
          } catch (n) {
            fe.error(1, t, "Error filtering and sorting campaigns", n);
          }
        });
      }
      prioritizeMessagingCampaigns(e) {
        return di(this, void 0, void 0, function* () {
          const t = yield this.filterValidCampaigns(e);
          if (0 < t.length) {
            const [e, ...n] = t.sort(hn.comparator);
            return (
              n &&
                0 < n.length &&
                n.map((t) => {
                  t.campaignId !== e.campaignId &&
                    this.setStats(
                      t,
                      oi.CAMPAIGN_PRIORITY_HIGH_PRIORITY_CAMPAIGN_AVAILABLE
                    );
                }),
              e
            );
          }
        });
      }
      getCampaignTagMap(e) {
        const t = {},
          n = [],
          i = [];
        return (
          e.forEach((e) => {
            null != e.tag &&
              (i.indexOf(e.tag) < 0 && i.push(e.tag),
              null == t[e.tag] && (t[e.tag] = []),
              t[e.tag].push(e));
          }),
          i.forEach((e) => {
            if (null != t[e]) {
              var i = t[e].sort(hn.comparator);
              for (let e = 0; e < i.length; e++)
                0 === e
                  ? n.push(i[e])
                  : this.setStats(
                      i[e],
                      oi.CAMPAIGN_PRIORITY_HIGH_PRIORITY_CAMPAIGN_AVAILABLE
                    );
            }
          }),
          n
        );
      }
      prioritizePersonalizationCampaigns(e) {
        return di(this, void 0, void 0, function* () {
          var t = yield this.filterValidCampaigns(e);
          return 0 < t.length ? this.getCampaignTagMap(t) : [];
        });
      }
      getOnsitePayload(e, t) {
        return di(this, void 0, void 0, function* () {
          var n = this.baseLogTag + ".getOnsitePayload";
          try {
            var i = yield this.OnsiteApiClient.getCampaignPayload(e, t);
            if (i && !i.error) return i;
            if (i && i.error) {
              const t = i.reason;
              return t && t.includes("PAUSED")
                ? void this.setStats(e, li.CAMPAIGN_DELIVERED_PAUSED)
                : t && t.includes("EXPIRED")
                ? void this.setStats(e, li.CAMPAIGN_DELIVERED_EXPIRED)
                : t && t.includes("personalize")
                ? void this.setStats(
                    e,
                    li.CAMPAIGN_DELIVERED_PERSONALIZATION_FAILURE
                  )
                : void this.setStats(e, li.CAMPAIGN_DELIVERED_API_FAILURE);
            }
            return void this.setStats(e, li.CAMPAIGN_DELIVERED_API_FAILURE);
          } catch (i) {
            fe.error(1, n, "Error getting onsite payload", i);
          }
        });
      }
      deliverMessagingCampaign(e, t) {
        return di(this, void 0, void 0, function* () {
          var n = this.baseLogTag + ".deliverMessagingCampaign";
          if (e)
            try {
              var i = yield this.getOnsitePayload(e, t);
              if (i)
                return (
                  (e.onsitePayload = i),
                  hn.doCampaignPayloadHasMandatoryParams(e.onsitePayload)
                    ? e
                    : (fe.warn(1, n, "Can not render " + e.campaignId),
                      void this.setStats(
                        e,
                        li.CAMPAIGN_DELIVERED_MANDATORY_PARAMS_MISSING
                      ))
                );
            } catch (i) {
              fe.error(1, n, "Error delivering messaging campaign", i);
            }
        });
      }
      deliverPersonalizationCampaigns(e, t, n) {
        return di(this, void 0, void 0, function* () {
          var i = this.baseLogTag + ".deliverPersonalizationCampaigns";
          if (0 < e.length) {
            var a = e.map((e) => this.getOnsitePayload(e, n));
            try {
              const n = yield Promise.all(a);
              return e.filter((e, i) => {
                if (
                  n[i] &&
                  n[i].payload &&
                  ((e.onsitePayload = n[i]), null != e.tag && null != t[e.tag])
                ) {
                  if ("JSON" !== e.onsitePayload.payloadType) return !0;
                  if (
                    ((e) => {
                      try {
                        JSON.parse(e);
                      } catch (e) {
                        return !1;
                      }
                      return !0;
                    })(e.onsitePayload.payload)
                  )
                    return !0;
                }
                return !1;
              });
            } catch (a) {
              fe.error(1, i, "Error delivering personalization campaigns", a);
            }
          }
        });
      }
      messagingCampaignImpression(e) {
        return di(this, void 0, void 0, function* () {
          var t = this.baseLogTag + ".messagingCampaignImpression";
          if (e)
            try {
              var n = yield this.getLastGlobalInappShown(),
                i = yield this.getGlobalDelay(),
                a = this.displayManager.getActiveCampaigns();
              return hn.hasCampaignClearedGlobalDelay(e, i, n)
                ? hn.canCampaignBeRenderedOverExisting(e, a.length)
                  ? hn.isCampaignMatchURLFilter(e)
                    ? e
                    : (fe.warn(1, t, "Can not render " + e.campaignId),
                      void this.setStats(
                        e,
                        ci.CAMPAIGN_IMPRESSION_CONTEXT_CHANGED
                      ))
                  : void this.setStats(
                      e,
                      ci.CAMPAIGN_IMPRESSION_ANOTHER_CAMPAIGN_VISIBLE
                    )
                : (fe.warn(1, t, "Can not render " + e.campaignId),
                  void this.setStats(e, ci.CAMPAIGN_IMPRESSION_GLOBAL_DELAY));
            } catch (n) {
              return void fe.error(
                1,
                t,
                "Error delivering messaging campaign",
                n
              );
            }
        });
      }
      sendDeliveryStats(e) {
        return di(this, void 0, void 0, function* () {
          var t = this.baseLogTag + ".sendDeliveryStats";
          if (0 < e.length)
            try {
              const t = {};
              e.forEach((e) => {
                t[e.campaignContext.cid] ||
                  ((t[e.campaignContext.cid] = e.stats), (e.stats = {}));
              });
              var n = { stats: t };
              this.OnsiteApiClient.sendDeliveryFunnelStats(n, this.batchId);
            } catch (n) {
              fe.error(1, t, "Error in sending delivery funnel stats", n);
            }
        });
      }
      mostEligibleMessagingCampaign(e, t) {
        return di(this, void 0, void 0, function* () {
          if (0 < e.length) {
            this.attemptCampaigns(e);
            var n = yield this.prioritizeMessagingCampaigns(e);
            let i;
            return (
              (i = fn(n, b)
                ? yield vn(n)
                : yield this.deliverMessagingCampaign(n, t)),
              (n = yield this.messagingCampaignImpression(i)),
              this.sendDeliveryStats(e),
              n
            );
          }
        });
      }
      mostEligiblePersonalizationCampaigns(e, t, n) {
        return di(this, void 0, void 0, function* () {
          if (0 < e.length) {
            this.attemptCampaigns(e);
            var i = yield this.prioritizePersonalizationCampaigns(e);
            return (
              (i = yield this.deliverPersonalizationCampaigns(i, t, n)),
              this.sendDeliveryStats(e),
              i || []
            );
          }
          return [];
        });
      }
      mostEligibleSelfHandledPersonalizationCampaigns(e, t) {
        return di(this, void 0, void 0, function* () {
          var n =
            this.baseLogTag +
            ".mostEligibleSelfHandledPersonalizationCampaigns";
          this.attemptCampaigns(e);
          const i = yield this.filterValidCampaigns(e);
          fe.log(1, n, "Eligible campaigns with tag ", t, "are", i);
          const a = i.sort(hn.comparator)[0];
          return (
            a &&
              (fe.log(
                1,
                n,
                "Campaign with highest priority for tag",
                t,
                "is",
                a.campaignId
              ),
              (n = yield this.getOnsitePayload(a)) &&
                n.payload &&
                (a.onsitePayload = n)),
            this.sendDeliveryStats(e),
            a
          );
        });
      }
    }
    ((si = si || {}).CAMPAIGN_ATTEMPTED = "ATM"),
      ((bi = oi = oi || {}).CAMPAIGN_PRIORITY_HIGH_PRIORITY_CAMPAIGN_AVAILABLE =
        "PRT_HIGH_PRT_CMP_AVL"),
      (bi.CAMPAIGN_PRIORITY_MAX_TIMES_SHOWN = "PRT_MAX_TIM_SWN"),
      (bi.CAMPAIGN_PRIORITY_MIN_DELAY = "PRT_MIN_DEL"),
      (bi.CAMPAIGN_PRIORITY_GLOBAL_DELAY = "PRT_GBL_DEL"),
      (bi.CAMPAIGN_PRIORITY_EXPIRED = "PRT_EXP"),
      ((bi = li = li || {}).CAMPAIGN_DELIVERED_API_FAILURE = "DLV_API_FLR"),
      (bi.CAMPAIGN_DELIVERED_PERSONALIZATION_FAILURE = "DLV_PERSN_FLR"),
      (bi.CAMPAIGN_DELIVERED_PAUSED = "DLV_PAU"),
      (bi.CAMPAIGN_DELIVERED_EXPIRED = "DLV_EXP"),
      (bi.CAMPAIGN_DELIVERED_MANDATORY_PARAMS_MISSING = "DLV_MAND_PARM_MIS"),
      ((bi = ci = ci || {}).CAMPAIGN_IMPRESSION_CONTEXT_CHANGED =
        "IMP_CTX_CHG"),
      (bi.CAMPAIGN_IMPRESSION_GLOBAL_DELAY = "IMP_GBL_DEL"),
      (bi.CAMPAIGN_IMPRESSION_MAX_TIMES_SHOWN = "IMP_MAX_TIM_SHW"),
      (bi.CAMPAIGN_IMPRESSION_ANOTHER_CAMPAIGN_VISIBLE = "IMP_ANTR_CMP_VISB");
    var gi = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    const hi = new qe();
    class pi {
      constructor(e) {
        (this.initializationPomise = null),
          (this.testDraftInfo = null),
          (this.triggerManager = null),
          (this.displayManager = null),
          (this.onsiteSelfHandledTriggerListeners = {}),
          (this.funnelManager = null),
          (this.initData = e),
          (this.appId = e.appId),
          fe.setLogLevel(e.debugLevel),
          (this.config = { host: Z.HOST_1 }),
          (this.config.host = e.baseDomainName),
          e.inapp && e.inapp.host && (this.config.host = e.inapp.host),
          (this.OnsiteApiClient = new qn(this.appId, this.config)),
          (this.iframeHelper = new jn());
      }
      setLogLevel(e) {
        fe.setLogLevel(e, !1);
      }
      isTestCampaignAvailable() {
        return gi(this, void 0, void 0, function* () {
          const e = pi.baseLogTag + ".isTestCampaignAvailable";
          if (window.opener) {
            let t;
            window.addEventListener(
              "message",
              (n) =>
                gi(this, void 0, void 0, function* () {
                  var i, a;
                  n.data &&
                    "inapp_test" === n.data.action &&
                    ((i = n.data),
                    (yield Gn.isValidRawJson(i))
                      ? ((t = !0),
                        (a = new Gn(i)),
                        fe.log(
                          1,
                          e,
                          "Valid test campaign data found checking TestCampaign",
                          i
                        ),
                        yield this.checkForTestCampaign(a))
                      : fe.error(1, e, "Data is not a valid test campaign", i),
                    hi.res());
                }),
              !1
            ),
              window.opener.postMessage("moe_test_osm", "*"),
              (window.opener = null),
              setTimeout(
                () =>
                  gi(this, void 0, void 0, function* () {
                    t || (yield this.checkForTestCampaign()), hi.res();
                  }),
                100
              );
          } else hi.res();
        });
      }
      initialize() {
        const e = pi.baseLogTag + ".initialize";
        return (
          null == this.initializationPomise &&
            (this.initializationPomise = new Promise((t) =>
              gi(this, void 0, void 0, function* () {
                try {
                  yield en.initialize(),
                    yield this.isTestCampaignAvailable(),
                    hi.p.then(() =>
                      gi(this, void 0, void 0, function* () {
                        yield this.syncCampaigns();
                        const n = yield this.getCampaignsFromDB();
                        var i = this.isExitIntentCampaignFound(n);
                        if (
                          (i.length &&
                            (yield this.prefetchExitIntentCampaigns(i)),
                          (i = n.filter((e) => null != e.triggerData)),
                          (this.displayManager = new ai()),
                          this.displayManager.onRender((t) => {
                            fe.log(1, e, "Campaign rendered: " + t.campaignId),
                              en.serviceMetaStore.setItem(
                                Z.STORES.SERVICE_META.KEYS
                                  .LAST_INAPP_SHOWN_TIME,
                                new Date()
                              );
                          }),
                          null != this.testDraftInfo &&
                            this.testDraftInfo.draftType ===
                              Z.DRAFT_CAMPAIGN_TPYES.ONSITE_MESSAGING)
                        ) {
                          fe.log(
                            1,
                            e,
                            "Test campaigns present, will be showing only the test campaign."
                          ),
                            fe.log(
                              1,
                              e,
                              "No live campaign will be shown till draft campaign showing"
                            );
                          try {
                            fe.log(
                              1,
                              e,
                              "Trying to render draft campaign with id " +
                                this.testDraftInfo.draftId
                            );
                            var a = yield this.OnsiteApiClient.getDraftCampaign(
                              this.testDraftInfo
                            );
                            fe.log(1, e, "Test campaign payload: ", a),
                              a &&
                                this.displayManager.queueDraftCampaign(
                                  this.testDraftInfo,
                                  a
                                );
                          } catch (n) {
                            fe.error(
                              1,
                              e,
                              `Error fetching data for test campaign ${this.testDraftInfo.draftId}: `,
                              n
                            );
                          }
                        } else
                          (this.triggerManager = new Xn(i)),
                            (this.funnelManager = new ui(
                              this.initData,
                              this.displayManager,
                              this.config
                            )),
                            this.triggerManager.onTrigger((t, n) =>
                              gi(this, void 0, void 0, function* () {
                                fe.log(1, e, "Triggered for: ", t.name, n);
                                var i = n.filter(
                                    (e) => e.templateType === sn.SELF_HANDLED
                                  ),
                                  a = n.filter(
                                    (e) => e.templateType !== sn.SELF_HANDLED
                                  );
                                0 < i.length &&
                                  0 <
                                    (i =
                                      yield this.funnelManager.mostEligiblePersonalizationCampaigns(
                                        i,
                                        this.onsiteSelfHandledTriggerListeners,
                                        t
                                      )).length &&
                                  this.handlePersonalizationCampagins(i),
                                  0 < a.length &&
                                    (a =
                                      yield this.funnelManager.mostEligibleMessagingCampaign(
                                        a,
                                        t
                                      )) &&
                                    this.handleMessagingCampaigns(a);
                              })
                            ),
                            this.triggerManager.startWatching();
                        t(!0);
                      })
                    );
                } catch (t) {
                  fe.error(1, e, t);
                }
              })
            )),
          this.initializationPomise
        );
      }
      handleMessagingCampaigns(e) {
        return gi(this, void 0, void 0, function* () {
          var t = pi.baseLogTag + ".handleMessagingCampaigns";
          e.onsitePayload &&
            (fe.log(1, t, "Campaign triggered: " + e.campaignId),
            fe.log(1, t, "Payload for campaign:", e.onsitePayload),
            this.displayManager.queueLiveCampaign(e, e.onsitePayload));
        });
      }
      handlePersonalizationCampagins(e) {
        return gi(this, void 0, void 0, function* () {
          const t = pi.baseLogTag + ".handlePersonalizationCampagins";
          0 < e.length &&
            e.forEach((e) => {
              null != e.tag &&
                (fe.log(
                  1,
                  t,
                  "Personlization Campaign triggered: " + e.campaignId
                ),
                this.onsiteSelfHandledTriggerListeners[e.tag].forEach((t) => {
                  this.handleSelfHandledCallback(e, e.onsitePayload, t);
                }));
            });
        });
      }
      logout() {
        return gi(this, void 0, void 0, function* () {
          var e = pi.baseLogTag + ".logout";
          fe.log(1, e, "Starting module logout"),
            (this.initializationPomise = null),
            this.displayManager &&
              (Object.keys(this.displayManager.campaignRenderMap).forEach(
                (e) => {
                  const t = document.getElementById("moe-onsite-campaign-" + e);
                  t && t.remove();
                }
              ),
              this.displayManager.destroy()),
            this.triggerManager && this.triggerManager.destory(),
            (this.displayManager = null),
            (this.funnelManager = null),
            yield en.clear(),
            fe.log(1, e, "Starting module logout complete");
        });
      }
      getCampaignsFromDB() {
        return new Promise((e) => {
          setTimeout(
            () =>
              gi(this, void 0, void 0, function* () {
                const t = [];
                for (const e of yield en.campaingsMetaStore.keys())
                  t.push(yield this.getCampaignById(e));
                e(t);
              }),
            0
          );
        });
      }
      checkForTestCampaign(e) {
        return gi(this, void 0, void 0, function* () {
          var t = pi.baseLogTag + ".checkForTestCampaign";
          try {
            var n = e || (yield this.iframeHelper.getDraftCampaignInfo());
            null == n
              ? (fe.log(1, t, "No draft campaign found"),
                (this.testDraftInfo = null))
              : (fe.log(1, t, "Found draft campaign: ", n),
                (this.testDraftInfo = n),
                null == this.testDraftInfo.draftId &&
                  (this.testDraftInfo.draftType =
                    Z.DRAFT_CAMPAIGN_TPYES.WEB_PERSONALIZATON));
          } catch (n) {
            fe.error(1, t, "Error getting test campaign", n);
          }
        });
      }
      getCampaignById(e) {
        return gi(this, void 0, void 0, function* () {
          var t = pi.baseLogTag + ".getCampaignById";
          try {
            return yield en.campaingsMetaStore.getItem(e);
          } catch (e) {
            return (
              fe.error(1, t, "Error getting campaign from stroe: ", e), null
            );
          }
        });
      }
      getData(e, t) {
        return gi(this, void 0, void 0, function* () {
          const n = pi.baseLogTag + ".getData";
          null == t &&
            (fe.warn(
              1,
              n,
              "Moengage.onsite.getData called without a providing a callback."
            ),
            (t = () => {}));
          try {
            if ((yield this.initializationPomise, null != this.testDraftInfo)) {
              var i;
              fe.log(1, n, "Fetching test campaign: ", this.testDraftInfo),
                this.testDraftInfo.draftType ===
                  Z.DRAFT_CAMPAIGN_TPYES.WEB_PERSONALIZATON &&
                  ((i = yield this.OnsiteApiClient.getDraftCampaign(
                    this.testDraftInfo
                  )),
                  t(null, {
                    payload: i.payload,
                    click: () => {
                      fe.log(1, n, "This is a test campaign");
                    },
                    imp: () => {
                      fe.log(1, n, "This is a test campaign");
                    },
                  }));
            } else {
              const i = yield en.campaingsTagsStore.getItem(e);
              if (i) {
                const s = yield Promise.all(
                  i.map((e) => this.getCampaignById(e))
                );
                var a = s.filter((e) => null == e.triggerData),
                  r =
                    yield this.funnelManager.mostEligibleSelfHandledPersonalizationCampaigns(
                      a,
                      e
                    );
                r && r.onsitePayload
                  ? this.handleSelfHandledCallback(r, r.onsitePayload, t)
                  : (fe.error(1, n, "Error fetching campaign payload"),
                    t(
                      {
                        message:
                          "There was an error fetching data for this tag",
                      },
                      null
                    ));
              } else
                fe.warn(
                  1,
                  n,
                  "Could not find any eligible campaign for tag",
                  e
                ),
                  t(
                    {
                      message:
                        "Could not find any eligible campaign for tag " + e,
                    },
                    null
                  );
            }
          } catch (i) {
            fe.error(1, n, "Error getting campaign", i);
          }
        });
      }
      registerCallback(e, t) {
        return gi(this, void 0, void 0, function* () {
          var n = pi.baseLogTag + ".registerCallback";
          try {
            yield this.initializationPomise,
              null == this.onsiteSelfHandledTriggerListeners[e]
                ? (this.onsiteSelfHandledTriggerListeners[e] = [t])
                : this.onsiteSelfHandledTriggerListeners[e].push(t);
          } catch (t) {
            fe.error(1, n, "Error setting callback for tag", e),
              fe.error(1, n, "Error stack:", t);
          }
        });
      }
      handleSelfHandledCallback(e, t, n) {
        return gi(this, void 0, void 0, function* () {
          var i = pi.baseLogTag + ".handleSelfHandledCallback";
          if (
            ((e.campaignContext = t.campaignContext), "JSON" === t.payloadType)
          )
            try {
              t.payload = JSON.parse(t.payload);
              var a = he(e, "triggerData.trigger_delay.delayInSeconds", 0) || 0;
              setTimeout(() => {
                un(e, "WP"),
                  n(null, {
                    payload: t.payload,
                    click: (t) => {
                      ln(e, "WP", t)();
                    },
                    imp: cn(e, "WP"),
                  });
              }, 1e3 * a);
            } catch (r) {
              (a = `Payload for campaign_id ${e.campaignId} is not a valid JSON`),
                fe.error(1, i, a),
                fe.error(1, i, "Payload provided:", t.payload),
                n({ message: a }, null);
            }
          else
            un(e, "WP"),
              n(null, {
                payload: t.payload,
                click: (t) => {
                  ln(e, "WP", t)();
                },
                imp: cn(e, "WP"),
              });
        });
      }
      syncCampaigns() {
        return gi(this, void 0, void 0, function* () {
          var e = pi.baseLogTag + ".syncCampaigns";
          try {
            (yield this.shouldClearMetaStorage()) &&
              (yield en.campaingsMetaStore.clear(),
              yield this.rebuildTagStore()),
              (yield this.shouldSaveRemoteCampaigns()) &&
                (yield this.saveRemoteCampaigns());
          } catch (t) {
            fe.error(1, e, "Error getting remote campaigns: ", t);
          }
        });
      }
      shouldClearMetaStorage() {
        return gi(this, void 0, void 0, function* () {
          return (
            (yield en.serviceMetaStore.getItem(
              Z.STORES.SERVICE_META.KEYS.LAST_FETCH_SDK_VERSION
            )) !== Ye().getSdkVersion()
          );
        });
      }
      shouldSaveRemoteCampaigns() {
        return gi(this, void 0, void 0, function* () {
          var e = pi.baseLogTag + ".shouldSaveRemoteCampaigns",
            t = yield en.serviceMetaStore.getItem(
              Z.STORES.SERVICE_META.KEYS.LAST_FETCH_SDK_VERSION
            ),
            n = yield en.serviceMetaStore.getItem(
              Z.STORES.SERVICE_META.KEYS.LAST_META_CALL_TIME
            ),
            i = ((n = new Date(n)), new Date().getTime());
          return (
            null == n ||
            i - n > Z.META_REFRESH_TIME ||
            (fe.log(1, e, "Last fetch was less than 15 mins ago at ", n),
            t !== Ye().getSdkVersion()
              ? (fe.log(
                  1,
                  e,
                  "Version change detected. Will proceed to fetch latest campaigns"
                ),
                !0)
              : !(
                  !(t = yield en.serviceMetaStore.getItem(
                    Z.STORES.SERVICE_META.KEYS.UNIQUE_ID
                  )) ||
                  t === Ee.get(r.USER_DATA).deviceUuid ||
                  (fe.log(
                    1,
                    e,
                    "Unique device id change detected. Will proceed to fetch latest campaigns"
                  ),
                  0)
                ))
          );
        });
      }
      saveRemoteCampaigns() {
        return gi(this, void 0, void 0, function* () {
          var e = pi.baseLogTag + ".saveRemoteCampaigns";
          yield en.campaingsMetaStore.clear();
          var t = yield this.OnsiteApiClient.getCampaignsMeta();
          null != t &&
            (yield this.addCampaignsToDB(t.campaignsMeta),
            fe.log(1, e, "Inapp campaigns meta saved!")),
            yield en.serviceMetaStore.setItem(
              Z.STORES.SERVICE_META.KEYS.GLOBAL_DELAY,
              t.globalDelayBetweenInapps
            ),
            yield en.serviceMetaStore.setItem(
              Z.STORES.SERVICE_META.KEYS.LAST_FETCH_SDK_VERSION,
              Ye().getSdkVersion()
            );
        });
      }
      addCampaignsToDB(e) {
        return gi(this, void 0, void 0, function* () {
          var t = pi.baseLogTag + ".addCampaignsToDB";
          fe.log(
            1,
            t,
            `Adding/Updating ${e.length} campaigns in DB`,
            e.map((e) => e.campaignId)
          );
          try {
            yield Promise.all(
              e.map((e) => en.campaingsMetaStore.setItem(e.campaignId, e))
            ),
              yield this.rebuildTagStore();
          } catch (e) {
            fe.error(1, t, "Error saving remote campaigns:", e);
          }
        });
      }
      rebuildTagStore() {
        return gi(this, void 0, void 0, function* () {
          var e = pi.baseLogTag + ".rebuildTagStore";
          try {
            yield en.campaingsTagsStore.clear();
            var t = yield this.getCampaignsFromDB();
            const e = {};
            for (const n of t)
              null != n.tag &&
                (null == e[n.tag] && (e[n.tag] = []),
                e[n.tag].push(n.campaignId));
            const n = [];
            yield en.campaingsTagsStore.clear();
            for (const t in e)
              e.hasOwnProperty(t) &&
                n.push(en.campaingsTagsStore.setItem(t, e[t]));
            yield Promise.all(n);
          } catch (t) {
            fe.error(1, e, "Error updating tags store:", t);
          }
        });
      }
      isExitIntentCampaignFound(e) {
        return e.filter((e) => e.templateType !== sn.SELF_HANDLED && fn(e, b));
      }
      prefetchExitIntentCampaigns(e) {
        return gi(this, void 0, void 0, function* () {
          var t = pi.baseLogTag + ".prefetchExitIntentCampaigns";
          const n = yield Rt.createEvent("MOE_EXIT", []),
            i = (yield pn(e)).filter((e) => Rn.getFilterResult(n, e));
          if (!i || !i.length)
            return (
              fe.log(1, t, "Exit intent campaign not eligible to prefetch"), !1
            );
          {
            const e = yield vn(i[0]);
            if (
              !e ||
              !e.onsitePayload ||
              e.onsitePayload.updatedTime.getTime() !==
                i[0].updatedTime.getTime()
            ) {
              var a = i[0].campaignId;
              const e = yield this.OnsiteApiClient.getCampaignPayload(i[0]);
              (e.payload || e.htmlJsonPayload) &&
                ((e.updatedTime = i[0].updatedTime),
                yield en.exitIntentCampaignStore.setItem(a, e),
                fe.log(1, t, "Exit intent campaign prefetched: " + a));
            }
          }
        });
      }
      refresh() {
        return gi(this, void 0, void 0, function* () {
          _i.onsite.appId && (yield Ii(), Ti());
        });
      }
    }
    (pi.baseLogTag = "MoeOnsite"),
      (window[Z.OSM_MODULE] = pi),
      (window.MoeOsm =
        (fe.log(1, "OsmFunctions", "Osm Functions for tracking user behaviour"),
        {
          trackEvent(e, t, n, i) {
            Zn(e) && window.Moengage.track_event(t, n);
          },
          trackClick(e, t) {
            (e = Zn(e)) &&
              window.Moengage.onsite.displayManager.clickTracker(e, "OSM", {
                widget_id: t,
              })();
          },
          trackDismiss(e, t = !1) {
            (e = Zn(e)) &&
              window.Moengage.onsite.displayManager.dismissEvent(e, "OSM", t);
          },
          setAlias(e) {
            window.Moengage.update_unique_user_id(e);
          },
          setUniqueId(e) {
            window.Moengage.add_unique_user_id(e);
          },
          destroySession() {
            window.Moengage.destroy_session();
          },
          setUserName(e) {
            window.Moengage.add_user_name(e);
          },
          setFirstName(e) {
            window.Moengage.add_first_name(e);
          },
          setLastName(e) {
            window.Moengage.add_last_name(e);
          },
          setEmailId(e) {
            window.Moengage.add_email(e);
          },
          setMobileNumber(e) {
            window.Moengage.add_mobile(e);
          },
          setGender(e) {
            window.Moengage.add_gender(e);
          },
          setBirthDate(e) {
            window.Moengage.add_birthday(e);
          },
          setUserAttribute(e, t) {
            window.Moengage.add_user_attribute(e, t);
          },
          dismissMessage(e) {
            setTimeout(() => {
              window.Moengage.onsite.displayManager.dismissInapp("" + e);
            }, 100);
          },
          showPushOptIn(e) {
            window.Moengage.call_web_push(e);
          },
          copyText(e) {
            const t = document.querySelector(e);
            t.textContent
              ? navigator.clipboard.writeText(t.textContent)
              : (t.select(),
                t.setSelectionRange(0, 99999),
                navigator.clipboard.writeText(t.value));
          },
        }));
    var mi = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    const fi = "MoEngage";
    let vi = new qe(),
      Si = new qe();
    const Ei = {
      getData: (e, t) => {
        Bt.getWebSDKSettings()
          .then((n) => {
            vi.p.then((n) => {
              n.getData(e, t);
            });
          })
          .catch((e) => {});
      },
      registerCallback: (e, t) => {
        Bt.getWebSDKSettings()
          .then((n) => {
            vi.p.then((n) => {
              n.registerCallback(e, t);
            });
          })
          .catch((e) => {});
      },
    };
    class _i {
      static callWebPush(e) {
        const t = fi + ".callWebPush";
        Bt.getWebSDKSettings()
          .then((n) => {
            var i, a, r, s, o, l, c;
            n.isConfigured
              ? n.optInConfig.type === pt.TYPE.SELF_HANDLED
                ? (fe.log(1, t, "Starting web push functions"),
                  null != e &&
                    (Le.setSoftAskConfig(e),
                    (i = he(e, "soft_ask_display_callback", null)),
                    (a = he(e, "soft_ask_allow_callback", null)),
                    (r = he(e, "soft_ask_block_callback", null)),
                    (s = he(e, "hard_ask_allow_callback", null)),
                    (o = he(e, "hard_ask_dismiss_callback", null)),
                    (l = he(e, "hard_ask_block_callback", null)),
                    (c = L),
                    Kt.addCallback(c.SOFT_ASK_SHOWN, i),
                    Kt.addCallback(c.SOFT_ASK_ALLOWED, a),
                    Kt.addCallback(c.SOFT_ASK_DISMISSED, r),
                    Kt.addCallback(c.HARD_ASK_ALLOWED, s),
                    Kt.addCallback(c.HARD_ASK_DISMISSED, o),
                    Kt.addCallback(c.HARD_ASK_DENIED, l)),
                  Te.getInstance().then((e) => {
                    new Qt(n, e).callWebPush();
                  }))
                : fe.warn(
                    1,
                    t,
                    "This feature can only be used when you have chosed self-handled approach in the dashboard. You can check dashboard here:",
                    V
                  )
              : fe.log(
                  1,
                  t,
                  "Web push settings not configured on dashboard yet. To start web push subscriptions, please configure the settings on dashboard."
                );
          })
          .catch((e) => {
            fe.error(
              1,
              t,
              "Error in getting Web SDK Settings. This might indicate that the App is blocked."
            );
          });
      }
      static showNotification(e) {
        Bt.getWebSDKSettings()
          .then((t) => {
            Te.getInstance().then((n) => {
              new Qt(t, n).showNotification(e);
            });
          })
          .catch((e) => {});
      }
      static getSdkVersion() {
        return "2.19.20";
      }
      static setDebugLevel(e) {
        return mi(this, void 0, void 0, function* () {
          const t = fi + ".setDebugLevel";
          try {
            "number" == typeof e &&
              (!Le.get().disableOnsite &&
                _i.onsite.setLogLevel &&
                _i.onsite.setLogLevel(e),
              Bt.getWebSDKSettings()
                .then((t) => {
                  null != t && t.c_s && _i.cards && _i.cards.setLogLevel(e),
                    "allowed" === (null == t ? void 0 : t.c_w_p_e) &&
                      window.MoeWebP &&
                      window.MoeWebP.setLogLevel &&
                      window.MoeWebP.setLogLevel(e),
                    fe.setLogLevel(e, !0);
                })
                .catch((n) => {
                  fe.setLogLevel(e, !0),
                    fe.error(
                      1,
                      t,
                      "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                    );
                }));
          } catch (e) {
            fe.error(0, t, "Error changing log level:", e);
          }
        });
      }
      static vitals() {
        var e = ct.getSync();
        return {
          deviceUuid: e.deviceUuid,
          userDetails: e,
          pushToken: Ee.get(r.PUSH_TOKEN),
          softAskStatus: Ee.get(r.SOFT_ASK_STATUS),
          hardAskStatus: Ee.get(r.HARD_ASK_STATUS),
        };
      }
      static help() {
        var e = fi + ".help";
        fe.log(0, e, "Moengage Dashboard - ", j.MOE_DASHBOARD);
        for (const t in j) j.hasOwnProperty(t) && fe.log(0, e, t, "-", j[t]);
      }
      static track_event(e, t) {
        return Mt.track(e, t);
      }
      static add_unique_user_id(e) {
        return mi(this, void 0, void 0, function* () {
          var t = yield Xt.login(e);
          return (
            Le.get(),
            Bt.getWebSDKSettings()
              .then((e) => {
                null != e &&
                  e.c_s &&
                  _i.cards &&
                  (fe.log(
                    1,
                    "Moengage.add_unique_user_id",
                    "Fetching new Cards after login"
                  ),
                  _i.cards.refreshCards());
              })
              .catch((e) => {}),
            t
          );
        });
      }
      static update_unique_user_id(e) {
        return Xt.updateUniqueId(e);
      }
      static add_user_attribute(e, t) {
        return Xt.addAttribute(e, t);
      }
      static add_first_name(e) {
        return Xt.addAttribute("first_name", e);
      }
      static add_last_name(e) {
        return Xt.addAttribute("last_name", e);
      }
      static add_email(e) {
        return Xt.addAttribute("email", e);
      }
      static add_mobile(e) {
        return Xt.addAttribute("mobile", e);
      }
      static add_user_name(e) {
        return Xt.addAttribute("name", e);
      }
      static add_gender(e) {
        return Xt.addAttribute("gender", e);
      }
      static add_birthday(e) {
        return Xt.addAttribute("birthday", e);
      }
      static destroy_session() {
        return _i.user.logout();
      }
      static call_web_push(e) {
        _i.callWebPush(e);
      }
      static getBranch() {
        return "master";
      }
      static track_page_view() {
        return (
          Mt.track(l, { timestamp: Number(Date.now()) }),
          Mt.track(c, { timestamp: Number(Date.now()) })
        );
      }
    }
    (_i.user = Xt),
      (_i.event = Mt),
      (_i.device = class {
        static getUuid() {
          return Ee.get(r.USER_DATA).deviceUuid;
        }
        static getPushToken() {
          return Ee.get(r.PUSH_TOKEN);
        }
        static getPermissionState(e) {
          return new Promise((t, n) => {
            Bt.getWebSDKSettings()
              .then((i) => {
                Te.getInstance().then((a) => {
                  new Qt(i, a)
                    .getPermissionState()
                    .then((n) => {
                      t(n), e && e(null, n);
                    })
                    .catch((t) => {
                      n(t), e && e(t, null);
                    });
                });
              })
              .catch((t) => {
                n(t), e && e(t, null);
              });
          });
        }
      }),
      (_i.onsite = Ei),
      (_i.reports = Dt.reports);
    var bi = () => {};
    const yi = {
      track_event: bi,
      add_user_attribute: bi,
      add_first_name: bi,
      add_last_name: bi,
      add_email: bi,
      add_mobile: bi,
      add_user_name: bi,
      add_gender: bi,
      add_birthday: bi,
      destroy_session: bi,
      add_unique_user_id: bi,
      moe_events: bi,
      location_type_attribute: bi,
      call_web_push: bi,
      setDebugLevel: bi,
    };
    function Ti() {
      var e;
      _i.onsite.appId ||
        ((e = Le.get()),
        (_i.onsite = new pi(e)),
        vi.res(_i.onsite),
        _i.onsite.initialize());
    }
    function Ii() {
      return mi(this, void 0, void 0, function* () {
        _i.onsite.appId &&
          (fe.log(
            1,
            "Moengage.disableOnsiteApi",
            "logging out from inapp module"
          ),
          yield _i.onsite.logout(),
          (vi = new qe()),
          (_i.onsite = Ei));
      });
    }
    class Ai {
      onWindowVisibilityChange(e, t) {
        pe.set("isWindowActive", !0),
          document.addEventListener(
            "focus",
            () => {
              n(!0);
            },
            !1
          ),
          document.addEventListener(
            "blur",
            () => {
              n(!1);
            },
            !1
          ),
          window.addEventListener(
            "focus",
            () => {
              n(!0);
            },
            !1
          ),
          window.addEventListener(
            "blur",
            () => {
              "IFRAME" !== document.activeElement.tagName && n(!1);
            },
            !1
          );
        const n = (e) =>
          "boolean" == typeof e
            ? a(e ? "visible" : "hidden")
            : document.hidden
            ? a("hidden")
            : a("visible");
        var i = (t) => {
          pe.set("isWindowActive", "visible" === t), e(t);
        };
        const a = t
          ? i
          : ((e, t, n) => {
              let i = 0;
              return function (...t) {
                const n = this;
                clearTimeout(i),
                  (i = setTimeout(() => {
                    (i = null), e.apply(n, t);
                  }, 250));
              };
            })(i);
        window.addEventListener("visibilitychange", n, !1);
      }
    }
    Ai.baseLogTag = "WindowEventManager";
    var wi = function (e, t, n, i) {
      return new (n = n || Promise)(function (a, r) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function o(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(s, o);
        }
        l((i = i.apply(e, t || [])).next());
      });
    };
    class Oi {
      static initialize() {
        return wi(this, void 0, void 0, function* () {
          var e;
          return (
            null == Oi.ready &&
              ((Oi.campaignStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: oe,
                storeName: le.STORE_NAME,
              })),
              (Oi.metaStore = ge.createInstance({
                driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
                name: oe,
                storeName: ce.STORE_NAME,
              })),
              (e = [Oi.campaignStore.ready(), Oi.metaStore.ready()]),
              (Oi.ready = Promise.all(e))),
            Oi.ready
          );
        });
      }
      static clear() {
        return wi(this, void 0, void 0, function* () {
          var e = Oi.baseLogTag + ".clear";
          try {
            yield Oi.initialize(),
              yield Promise.all([
                Oi.campaignStore.clear(),
                Oi.metaStore.clear(),
              ]);
            var t = [Oi.campaignStore.ready(), Oi.metaStore.ready()];
            Oi.ready = Promise.all(t);
          } catch (t) {
            fe.error(1, e, "Error clearing cards stores:", t);
          }
          return Oi.ready;
        });
      }
    }
    let Di;
    function Ci(e) {
      const t = "Pre-Initialization";
      if (
        !((e) => {
          const t = [
            "bot",
            "spider",
            "crawler",
            "crawling",
            "Applebot",
            "PetalBot",
            "pingbot",
            "proximic",
            "AdsBot-Google",
            "Googlebot",
            "Cincraw",
            "SnapchatBot",
            "Snapchat-Proxy/1.0",
            "SnapchatAds",
            "Snapchat-Ads/1.0",
            "YandexRenderResourcesBot",
            "bingbot",
            "slurp",
            "MicrosoftPreview",
            "Baiduspider",
            "HeadlessChrome",
            ...(Array.isArray(e) ? e : []),
          ];
          return new RegExp(t.join("|"), "i").test(navigator.userAgent);
        })(null == e ? void 0 : e.bots_list)
      ) {
        var n = Ye();
        return n && 0 < n.initialised
          ? (fe.error(
              1,
              t,
              "MoEngage Web SDK initialised multiple times. Please integrate the Web SDK only once!"
            ),
            n)
          : (fe.log(1, t, "Init data: ", e),
            "undefined" == typeof Promise
              ? (fe.error(1, t, "Promises not supported"), yi)
              : e.app_id || e.appId
              ? ((n = Ni()) && (e = Object.assign({}, e, n)),
                Le.save(e),
                Ri().then(() => {
                  Pt.broadcastToWindow({
                    topic: M,
                    name: k.MOE_INIT,
                    data: Le.get(),
                  }),
                    Pi(),
                    fe.setLogLevel(Le.get().debugLevel),
                    fe.log(1, t, "Script loaded!"),
                    fe.customLabel(1, t, "SDK Version", "2.19.20"),
                    0 < Le.get().debugLevel &&
                      (fe.warn(
                        1,
                        t,
                        "You are currently using MoEngage in debug environment. You'll find all the data captured in this environment in the TEST mode on the dashoard."
                      ),
                      fe.warn(
                        1,
                        t,
                        "Please initialize with debugLevel as",
                        0,
                        "when using on your production environment."
                      )),
                    Mi();
                }),
                (e = window.moengage_object || "Moengage"),
                (window[e] = _i),
                _i)
              : (fe.error(
                  1,
                  t,
                  "App Id not specified. Please check docs page to complete the integration - ",
                  j.WEBSDK_DOCS
                ),
                yi));
      }
      fe.error(1, t, "Bot detected, Can't initialise the MoEngage Web SDK");
    }
    Oi.baseLogTag = "MOE_CARDS_STORES";
    const Pi = () => {
        ge.createInstance({
          driver: [ge.INDEXEDDB, ge.WEBSQL, ge.LOCALSTORAGE],
          name: z,
          storeName: J,
        }).clear();
      },
      Ri = () =>
        new Promise((e) => {
          "complete" !== window.document.readyState
            ? window.addEventListener("load", () => {
                e(!0);
              })
            : e(!0);
        });
    window &&
      ((window.moe = Ci), (window.moeBannerText = "banner"), (window[$] = Nt));
    const Ni = () => {
        try {
          var e = localStorage.getItem("moe_segment_cluster"),
            t = localStorage.getItem("moe_segment_sw_path"),
            n = localStorage.getItem("moe_segment_sw_scope");
          const i = {};
          return (
            e && (i.cluster = e),
            t && (i.swPath = t),
            n && (i.swScope = n),
            !!(e || t || n) &&
              (fe.log(
                1,
                ".isSegmentDataFound",
                "Data found for segment initialisation",
                i
              ),
              i)
          );
        } catch (e) {
          return !1;
        }
      },
      Mi = () => {
        const e = "Initialization";
        return new Promise((t) => {
          Bt.getWebSDKSettings()
            .then((n) => {
              n.isDomainLevelStorage &&
                ((Ee.isSharedWithCookie = !0), Ee.copyKeysFromCookie()),
                "allowed" === n.s_e_b_e && Dt.init(n),
                ct.get().then((i) => {
                  if (qt.get().deviceToLogout === i.deviceUuid)
                    return (
                      fe.log(
                        1,
                        e,
                        "User was not able to logout last time. Completing the logout now and starting new session."
                      ),
                      _i.user.logout()
                    );
                  i.deviceAdded && Bt.onDeviceAdd.res(),
                    n.isPushSubBilling &&
                      fe.warn(
                        1,
                        e,
                        "You are under push subscriber based billing plan. We are only tracking users with an email, phone number or have subscribed to web push. All user attributes and events will be stored in a queue till we receive either of the properties."
                      );
                  var a = new st();
                  new Ai().onWindowVisibilityChange(
                    a.handleBrowserInactivity,
                    n.s_s_d
                  ),
                    fe.customLabel(1, e, "Device UUID", i.deviceUuid),
                    fe.customLabel(1, e, "Device Added", i.deviceAdded),
                    Pt.broadcastToWindow({
                      topic: M,
                      name: k.SETTINGS_FETCHED,
                      data: n,
                    }),
                    n.isPushSubBilling || i.deviceAdded || Bt.deviceAdd(),
                    _i.track_page_view(),
                    Ht.clear(r.Q.DEVICE),
                    Ht.clear(r.Q.REPORT),
                    Le.get().enableSPA && !Di && Li(),
                    Te.getInstance().then((t) => {
                      const i = !Le.get().disableWebPush && new Qt(n, t);
                      var a = !(
                        null !== (a = window.MoeWebP) &&
                        void 0 !== a &&
                        a.isEditorModeEnabled()
                      );
                      i && i.isWebPushEnabled() && a
                        ? 0 <=
                          [pt.TYPE.ONE_CLICK, pt.TYPE.TWO_STEP].indexOf(
                            n.optInConfig.type
                          )
                          ? i.callWebPush()
                          : (fe.log(
                              1,
                              e,
                              "Self handled setting. Will show opt-in on manual invocation, if required."
                            ),
                            i
                              .getPermissionState()
                              .then((t) => {
                                var n = Ee.get(r.PUSH_TOKEN);
                                (t === kt.GRANTED ||
                                  (null != n && t === kt.DENIED)) &&
                                  (t === kt.GRANTED &&
                                    fe.log(
                                      1,
                                      e,
                                      "Notification permission already granted. Proceeding to subscribe the user"
                                    ),
                                  i.callWebPush());
                              })
                              .catch((t) => {
                                fe.warn(
                                  1,
                                  e,
                                  "Cannot get permission state: ",
                                  t
                                );
                              }))
                        : Qt.SUPPORTED_BROWSERS.indexOf(t.name) < 0
                        ? fe.warn(
                            1,
                            e,
                            "Web push not supported on this browser. Supported browsers are:\n\t\t1. Google Chrome\n\t\t2. Mozilla Firefox\n\t\t3. Opera\n\t\t4. Edge\n\t\t5. Safari 16 and above + macOS 13 and above"
                          )
                        : fe.warn(
                            1,
                            e,
                            "Web push feature not enabled for current environment"
                          ),
                        !Le.get().disableOnsite && a
                          ? Bt.onDeviceAdd.p.then(() => {
                              Ti();
                            })
                          : fe.warn(
                              1,
                              e,
                              "Onsite is disabled in this page since `disableOnsite: true` is passed during initialization."
                            ),
                        null != n && n.c_s && a
                          ? $t
                              .loadModule(ee.CARDS)
                              .then((e) => {
                                Si.res(e), e.initialize(), (_i.cards = e);
                              })
                              .catch((e) => {
                                Si.rej(e);
                              })
                          : Oi.clear(),
                        ki();
                    }),
                    t(!0);
                });
            })
            .catch((n) => {
              fe.error(
                1,
                e,
                "Error in getting Web SDK Settings. This might indicate that the App is blocked."
              ),
                t(!1);
            });
        });
      },
      ki = () => {
        const e = "Moengage.clearWindowQ";
        Ri().then(() => {
          try {
            var t = window.moengage_object || "Moengage";
            if (window[t] && window.moengage_q) {
              let i = window.moengage_q;
              if (((window.moengage_q = []), i && 0 < i.length && window[t]))
                for (let t = 0; t < i.length; t++) {
                  fe.log(
                    1,
                    e,
                    "Method called before SDK downloaded:",
                    [i[t].f],
                    i[t].a
                  );
                  var n = i[t].f;
                  "onsite.getData" === n
                    ? _i.onsite.getData(...i[t].a)
                    : "onsite.registerCallback" === n
                    ? _i.onsite.registerCallback(...i[t].a)
                    : null != _i[i[t].f] && _i[i[t].f].apply(null, i[t].a);
                }
              i = [];
            }
          } catch (t) {
            fe.error(1, e, t);
          }
        });
      },
      Li = () => {
        const e = "startSpaUrlHandler";
        let t = document.location.href;
        (() => {
          (Di = !0), fe.log(1, e, "Start listening to URL changes");
          const n = document.querySelector("body"),
            i = new MutationObserver((n) => {
              n.forEach((n) => {
                var i, a, r;
                t !== document.location.href &&
                  ((t = document.location.href),
                  fe.log(1, e, "URL Change detected", t),
                  (() => {
                    const e = window.Moengage;
                    if (e.onsite.displayManager) {
                      e.onsite.triggerManager &&
                        e.onsite.triggerManager.eventNameCampaignHash
                          .MOE_PAGE_SCROLL &&
                        (window.removeEventListener(
                          "scroll",
                          e.onsite.triggerManager.getScrollListenerCallback()
                        ),
                        e.onsite.triggerManager.setScrollListenerCallback(
                          e.onsite.triggerManager
                            .getWindowEventManager()
                            .onScroll(e.onsite.triggerManager.onScroll)
                        ));
                      const { displayManager: t, triggerManager: n } = e.onsite,
                        i = Object.keys(t.campaignRenderMap);
                      n && (n.scrollCampaignTriggered = !1),
                        i.forEach((e) => {
                          document.getElementById("moe-onsite-campaign-" + e) &&
                            document
                              .getElementById("moe-onsite-campaign-" + e)
                              .remove(),
                            t.campaignRenderMap[e].isActive() &&
                              t.dismissInapp(e),
                            clearTimeout(t.campaignRenderMap[e].delayTimer),
                            delete t.campaignRenderMap[e],
                            (t.campaignRenderOrder =
                              t.campaignRenderOrder.filter((t) => t !== e));
                        }),
                        Ke() &&
                          e.onsite.triggerManager.windowEventManager
                            .isPopStateEventBound &&
                          setTimeout(() => {
                            e.onsite.triggerManager.windowEventManager.setHistoryState(),
                              (e.onsite.triggerManager.windowEventManager.isExitIntentShown =
                                !1),
                              (e.onsite.triggerManager.windowEventManager.scrollExitIntentInterval =
                                null);
                          }, 0);
                    }
                  })(),
                  _i.track_page_view(),
                  0 <
                    (null ===
                      (i =
                        null == (r = _i.onsite.triggerManager)
                          ? void 0
                          : r.exitIntentCampaigns) || void 0 === i
                      ? void 0
                      : i.length) &&
                    Ke() &&
                    null !== (a = null == r ? void 0 : r.windowEventManager) &&
                    void 0 !== a &&
                    a.onMobileScrollAndExit(r.onExit),
                  Bt.getWebSDKSettings()
                    .then((t) => {
                      null != t &&
                        t.c_s &&
                        _i.cards &&
                        (_i.cards.checkCacheAndSaveRemote(de),
                        _i.cards.displayManager.closeIframe()),
                        "allowed" === (null == t ? void 0 : t.c_w_p_e) &&
                          (null !== (t = window.MoeWebP) &&
                            void 0 !== t &&
                            t.getLiveExperiences(),
                          fe.log(1, e, "webP sync function called"));
                    })
                    .catch((t) => {
                      fe.error(
                        1,
                        e,
                        "Error in getting Web SDK Settings. This might indicate that the App is blocked."
                      );
                    }));
              });
            });
          i.observe(n, { childList: !0, subtree: !0 });
        })();
      },
      xi = {
        clearWindowQ: ki,
        startSpaUrlHandler: Li,
        isSegmentDataFound: Ni,
        clearEventsFromIDB: Pi,
        moeInit: Ci,
        windowLoaded: Ri,
      };
  })();
})();
