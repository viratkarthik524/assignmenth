"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3961],
  {
    22859: function (t, a, s) {
      s.d(a, {
        s: function () {
          return e.s;
        },
      });
      var e = s(17386);
    },
    83961: function (t, a, s) {
      s.d(a, {
        z: function () {
          return i;
        },
      });
      var e = s(52322),
        o = s(2784),
        n = s(36886),
        m = s(22859),
        p = s(83486),
        i = function (t) {
          var a = t.auth,
            s = t.idSuffix,
            i = t.gtagEventAction,
            c = t.gtagEventCategory,
            r = t.withLayoutAndHeader,
            h = t.inventoryCanonicalName,
            u = void 0 === h ? "" : h,
            d = (0, o.useState)([]),
            b = d[0],
            v = d[1],
            g = (0, o.useState)([]),
            l = g[0],
            w = g[1],
            _ = (0, o.useState)(!0),
            j = _[0],
            z = _[1];
          (0, o.useEffect)(function () {
            var t = (0, n.Vj)(1, 10) || [];
            if (
              t &&
              (null === t || void 0 === t ? void 0 : t.length) &&
              !(null === b || void 0 === b ? void 0 : b.length)
            ) {
              var a = {
                params: {
                  canonical_names: t.toString(),
                  only: "id,status,name,canonical_name,location,pricing,tags,virtual_views,videos",
                  methods: "children_count,reviews_rating,reviews_count",
                  limit: 10,
                },
              };
              w(t),
                (0, n.Ze)(a, {
                  success: function (t) {
                    var a;
                    return v(
                      (null === t ||
                      void 0 === t ||
                      null === (a = t.data) ||
                      void 0 === a
                        ? void 0
                        : a.result) || []
                    );
                  },
                  failure: function () {
                    return v([]);
                  },
                  done: function () {
                    return z(!1);
                  },
                });
            } else v([]), z(!1);
          }, []);
          var y = (0, o.useCallback)(
            function () {
              var t = b.filter(function (t) {
                return !(
                  "undefined" === typeof t.images ||
                  (t.images && 0 === t.images.length) ||
                  "active" !== t.status
                );
              });
              return t.length > 0
                ? t
                    .filter(function (t) {
                      return (
                        l.includes(
                          null === t || void 0 === t ? void 0 : t.canonical_name
                        ) &&
                        (null === t || void 0 === t
                          ? void 0
                          : t.canonical_name) !== u
                      );
                    })
                    .sort(function (t, a) {
                      return (
                        l.indexOf(
                          null === t || void 0 === t ? void 0 : t.canonical_name
                        ) -
                        l.indexOf(
                          null === a || void 0 === a ? void 0 : a.canonical_name
                        )
                      );
                    })
                : [];
            },
            [b.length, l.length]
          );
          return (0, e.jsx)(m.s, {
            auth: a,
            isRequestActive: j,
            listings: j ? p.a : y(),
            title: "Recently Viewed",
            idSuffix: s,
            gtagEventAction: i,
            gtagEventCategory: c,
            withLayoutAndHeader: r,
            "data-testid": "recently-viewed-section",
          });
        };
    },
    83486: function (t, a, s) {
      s.d(a, {
        a: function () {
          return o;
        },
        c: function () {
          return e;
        },
      });
      var e = [
          { name: "London", placeId: "ChIJdd4hrwug2EcRmSrV3Vo6llI" },
          { name: "Glasgow", placeId: "ChIJ685WIFYViEgRHlHvBbiD5nE" },
          { name: "Sydney", placeId: "ChIJP5iLHkCuEmsRwMwyFmh9AQU" },
          { name: "Liverpool", placeId: "ChIJt2BwZIrfekgRAW4XP28E3EI" },
          { name: "Melbourne", placeId: "ChIJ90260rVG1moRkM2MIXVWBAQ" },
          { name: "Manchester", placeId: "ChIJ2_UmUkxNekgRqmv-BDgUvtk" },
          { name: "Sheffield", placeId: "ChIJFb7o-qkKeUgReLAGr_UnKD4" },
          { name: "Birmingham", placeId: "ChIJc3FBGy2UcEgRmHnurvD-gco" },
        ],
        o = new Array(5).fill({
          id: 147635,
          name: "Bull Inn Court, London",
          pricing: {
            price: 2975,
            deposit: 250,
            currency: "pound",
            duration: "weekly",
          },
          videos: [
            {
              path: "v1669143802/inventories/oq4ebswajdrmoo01r7ti.mp4",
              type: "tour",
              caption: "Bull Inn Court",
              platform: "cloudinary",
              description: "Bull Inn Court, Video Tour\n",
              thumbnail_url:
                "https://res.cloudinary.com/amberstudent/video/upload/c_limit,h_60,w_90/v1669143802/inventories/oq4ebswajdrmoo01r7ti.jpg",
            },
          ],
          location: {
            name: "14 Bull Inn Ct",
            route: { long_name: "Bull Inn Court", short_name: "Bull Inn Ct" },
            state: { long_name: "England", short_name: "England" },
            country: { long_name: "United Kingdom", short_name: "GB" },
            primary: "14 Bull Inn Ct",
            district: {
              long_name: "Greater London",
              short_name: "Greater London",
            },
            locality: { long_name: "London", short_name: "London" },
            secondary: "London, UK",
            street_number: { long_name: "14", short_name: "14" },
            location_bounds: {
              northeast: { lat: 51.51188028029149, lng: -0.121798319708498 },
              southwest: { lat: 51.50918231970849, lng: -0.124496280291502 },
            },
            location_place_id:
              "EhoxNCBCdWxsIElubiBDdCwgTG9uZG9uLCBVSyIwEi4KFAoSCYv6_fnLBHZIEe7uxR6Ih94JEA4qFAoSCbV2A_rLBHZIEdHCqKocYyxG",
            location_coordinates: { lat: 51.5105313, lng: -0.1231473 },
          },
          tags: [
            "Air Conditioning",
            "bills_included",
            "Private elevator access",
            "not_available",
          ],
          canonical_name: "bull-inn-court-1912063755522",
          status: "active",
          virtual_views: [],
          children_count: 1,
          reviews_rating: null,
          reviews_count: 0,
          inventory_featured_image_path: null,
          images_with_featured: [
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3858be18.jpg",
              type: "bedroom",
              caption: "Bedroom",
              featured: !0,
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3858be18.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a190e951.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a190e951.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a517fe0b.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a517fe0b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3b3aa3b2.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3b3aa3b2.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4ddbb1c3.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4ddbb1c3.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/9e2ee740.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/9e2ee740.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/746149db.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/746149db.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/323b74a5.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/323b74a5.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/90685abc.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/90685abc.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4fc31088.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4fc31088.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8368c95b.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8368c95b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/d9c7c38b.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/d9c7c38b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/70758998.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/70758998.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2e59ec75.jpg",
              type: "amenities",
              caption: "Amenities",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2e59ec75.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8802784a.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8802784a.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/b611a530.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/b611a530.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/eff71b69.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/eff71b69.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/14be8daa.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/14be8daa.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2a4ce2d1.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2a4ce2d1.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/ad30e0d4.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/ad30e0d4.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/6cae8cbe.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/6cae8cbe.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/7f9c53df.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/7f9c53df.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3a98c881.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3a98c881.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/e02a1868.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/e02a1868.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/98130a0b.jpg",
              type: "floor_plan",
              caption: "Floor Plan",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/98130a0b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3ea06774.jpg",
              type: "exterior",
              caption: "Exterior",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3ea06774.jpg",
            },
          ],
          images: [
            {
              path: "https://prod-assets.amberstudent.com/inventories/147635/3858be18.jpg?w=400&h=260&fit=crop&q=0&auto=format&trim=auto",
              type: "bedroom",
              caption: "Bedroom",
              featured: !0,
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3858be18.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a190e951.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a190e951.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a517fe0b.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/a517fe0b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3b3aa3b2.jpg",
              type: "kitchen",
              caption: "Kitchen",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3b3aa3b2.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4ddbb1c3.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4ddbb1c3.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/9e2ee740.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/9e2ee740.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/746149db.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/746149db.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/323b74a5.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/323b74a5.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/90685abc.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/90685abc.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4fc31088.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/4fc31088.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8368c95b.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8368c95b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/d9c7c38b.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/d9c7c38b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/70758998.jpg",
              type: "common_area",
              caption: "Common Area",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/70758998.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2e59ec75.jpg",
              type: "amenities",
              caption: "Amenities",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2e59ec75.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8802784a.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/8802784a.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/b611a530.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/b611a530.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/eff71b69.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/eff71b69.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/14be8daa.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/14be8daa.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2a4ce2d1.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/2a4ce2d1.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/ad30e0d4.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/ad30e0d4.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/6cae8cbe.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/6cae8cbe.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/7f9c53df.jpg",
              type: "bedroom",
              caption: "Bedroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/7f9c53df.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3a98c881.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3a98c881.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/e02a1868.jpg",
              type: "bathroom",
              caption: "Bathroom",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/e02a1868.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/98130a0b.jpg",
              type: "floor_plan",
              caption: "Floor Plan",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/98130a0b.jpg",
            },
            {
              path: "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3ea06774.jpg",
              type: "exterior",
              caption: "Exterior",
              base_path:
                "https://s3.ap-southeast-1.amazonaws.com/assets.amberstudent.com/inventories/147635/3ea06774.jpg",
            },
          ],
          offers_count: 1,
        });
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/3961-e8b4e58edd060f18.js.map
