"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9478, 3186, 16],
  {
    63186: function (t, a, e) {
      e.d(a, {
        X: function () {
          return s;
        },
        j: function () {
          return o;
        },
      });
      var s = function (t) {
          return !!(
            t &&
            t.status &&
            t.data &&
            t.data.email &&
            t.data.email.includes("amberstudent.com")
          );
        },
        o = function (t) {
          return !(!t || !t.status);
        };
    },
    26793: function (t, a, e) {
      e.d(a, {
        h: function () {
          return c;
        },
      });
      var s = e(52322),
        o = e(62595),
        n = e(47842),
        r = (0, o.createStyles)(function (t) {
          return {
            container: (0, n.Z)({ gap: 4 }, t.fn.largerThan("lg"), { gap: 8 }),
            title: (0, n.Z)(
              {
                fontSize: 18,
                fontWeight: 600,
                lineHeight: "125%",
                letterSpacing: "0.027px",
                color: t.colors.neutral[8],
              },
              t.fn.largerThan("lg"),
              { fontSize: 24, fontWeight: 700 }
            ),
            subtitle: (0, n.Z)(
              {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.035px",
                color: t.colors.neutral[5],
              },
              t.fn.largerThan("lg"),
              { fontSize: 18 }
            ),
          };
        }),
        m = function (t) {
          var a = t.title,
            e = t.subtitle,
            n = r().classes;
          return (0, s.jsxs)(o.Flex, {
            className: n.container,
            children: [
              (0, s.jsx)(o.Title, {
                order: 2,
                className: n.title,
                children: a,
              }),
              e && (0, s.jsx)(o.Text, { className: n.subtitle, children: e }),
            ],
          });
        },
        p = e(70016),
        i = (0, o.createStyles)(function (t, a) {
          var e,
            s = a.background;
          return {
            container: {
              backgroundColor:
                null !== s && void 0 !== s ? s : t.colors.neutral[0],
            },
            innerContainer:
              ((e = { padding: "32px 16px" }),
              (0, n.Z)(e, t.fn.largerThan("lg"), {
                padding: "56px 80px",
                maxWidth: t.breakpoints.xl,
              }),
              (0, n.Z)(e, t.fn.largerThan(p.d), {
                margin: "auto",
                width: 1440,
              }),
              (0, n.Z)(e, t.fn.largerThan("xl"), {
                maxWidth: 1620,
                width: "100%",
              }),
              (0, n.Z)(e, t.fn.largerThan(1601), { padding: "56px 0" }),
              e),
          };
        }),
        c = function (t) {
          var a = t.title,
            e = t.subtitle,
            n = t.children,
            r = t.background,
            p = t.innerClassName,
            c = i({ background: r }).classes,
            h = a || e;
          return (0, s.jsx)(o.Flex, {
            className: c.container,
            children: (0, s.jsxs)(o.Flex, {
              className: "".concat(c.innerContainer, " ").concat(p),
              children: [h && (0, s.jsx)(m, { title: a, subtitle: e }), n],
            }),
          });
        };
    },
    83486: function (t, a, e) {
      e.d(a, {
        a: function () {
          return o;
        },
        c: function () {
          return s;
        },
      });
      var s = [
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
    93823: function (t, a, e) {
      e.r(a),
        e.d(a, {
          SectionTrendingProperties: function () {
            return v;
          },
        });
      var s = e(66383),
        o = e(52322),
        n = e(2784),
        r = e(99333),
        m = e(24291),
        p = e(35590),
        i = e(36886),
        c = e(62595),
        h = e(90788),
        u = e(17386),
        d = e(26793),
        b = e(83486),
        l = e(47842),
        g = (0, c.createStyles)(function (t) {
          return {
            wrapper: (0, l.Z)({ padding: "32px 16px" }, t.fn.largerThan("md"), {
              padding: "56px 80px",
              maxWidth: 1440,
              margin: "auto",
            }),
            loadingOverlay: {
              height: 364,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            },
            heading: (0, l.Z)(
              { color: t.colors.neutral[8], fontSize: 18, fontWeight: 600 },
              t.fn.largerThan("md"),
              { fontSize: 24, fontWeight: 700 }
            ),
            subHeading: (0, l.Z)(
              { color: t.colors.neutral[5], fontSize: 14 },
              t.fn.largerThan("md"),
              { fontSize: 18 }
            ),
            navContainer: (0, l.Z)(
              {
                overflowX: "scroll",
                overflowY: "hidden",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  boxShadow: " 0 0 1px rgba(255, 255, 255, .5)",
                  borderRadius: 24,
                },
                marginTop: 28,
                marginBottom: 16,
                margin: "28px -16px 16px -16px",
              },
              t.fn.largerThan("md"),
              { margin: "32px 0px 24px 0px" }
            ),
            navButton: (0, l.Z)(
              {
                padding: "8px 12px",
                marginBottom: 4,
                fontSize: 14,
                height: 36,
                fontWeight: 400,
                lineHeight: "150%",
                border: "1px solid ".concat(t.colors.neutral[2]),
                borderRadius: 4,
                color: t.colors.neutral[6],
                "&:hover": { background: t.colors.neutral[0] },
                "&:first-of-type": (0, l.Z)(
                  { marginLeft: 16 },
                  t.fn.largerThan("md"),
                  { marginLeft: 0 }
                ),
                "&:last-of-type": (0, l.Z)(
                  { marginRight: 16 },
                  t.fn.largerThan("md"),
                  { marginRight: 0 }
                ),
              },
              t.fn.largerThan("lg"),
              { padding: "8px 16px", fontSize: 16, height: 40 }
            ),
            activeNavButton: {
              color: t.colors.neutral[8],
              border: "1px solid ".concat(t.colors.neutral[8]),
            },
          };
        }),
        _ = function (t) {
          var a = t.item,
            e = t.handleSetActiveItem,
            s = t.activeItem,
            p = (0, n.useRef)(null),
            i = g(),
            h = i.classes,
            u = i.cx;
          return (0, o.jsx)(c.Button, {
            ref: p,
            variant: "outline",
            onClick: function () {
              return (function (t) {
                var a;
                (0, m.pr)({
                  action: "clicked_city_thousand_properties",
                  category: r.E0.HOME,
                  city_name: t.name,
                }),
                  e(t),
                  p &&
                    p.current &&
                    (null === (a = p.current) ||
                      void 0 === a ||
                      a.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      }));
              })(a);
            },
            className: u(h.navButton, a === s ? h.activeNavButton : ""),
            old: !0,
            children: a.name,
          });
        },
        v = function (t) {
          var a = t.auth,
            e = (0, n.useState)(b.c[0]),
            m = e[0],
            l = e[1],
            v = (0, n.useState)(b.a),
            f = v[0],
            w = v[1],
            j = (0, n.useState)(!0),
            z = j[0],
            C = j[1],
            y = (0, s.Z)((0, h.Z)(), 2),
            I = y[0],
            E = y[1],
            x = (0, n.useRef)(!1),
            k = g().classes;
          (0, n.useEffect)(
            function () {
              E && !x.current && ((x.current = !0), B(b.c[0].placeId));
            },
            [E]
          );
          var A = function (t) {
              l(t), B(null === t || void 0 === t ? void 0 : t.placeId);
            },
            B = function (t) {
              C(!0);
              var a = {
                params: {
                  location_place_id: t || m.placeId,
                  p: 1,
                  limit: 10,
                  sort_key: "available",
                  sort_order: "desc",
                  methods: "children_count",
                },
              };
              (0, i.Ze)(a, {
                success: function (t) {
                  w(t.data.result);
                },
                failure: function (t) {
                  p.r.error(t);
                },
                done: function () {
                  C(!1);
                },
              });
            };
          return (0, o.jsxs)(d.h, {
            background: "#fff",
            title: "Thousands of properties globally",
            subtitle:
              "Explore affluent and cozy student homes near renowned universities and bustling capitals",
            dataTestId: "global-properties-section",
            children: [
              (0, o.jsx)(c.Flex, {
                ref: I,
                direction: "row",
                className: k.navContainer,
                gap: 8,
                children: b.c.map(function (t, a) {
                  return (0,
                  o.jsx)(_, { item: t, handleSetActiveItem: A, activeItem: m }, a);
                }),
              }),
              (0, o.jsx)(u.s, {
                idSuffix: "trending_properties",
                listings: f,
                title: "Trending Properties",
                isRequestActive: z,
                withLayoutAndHeader: !1,
                auth: a,
                gtagEventCategory: r.E0.HOME,
                gtagEventAction: "clicked_trending_properties_card",
              }),
            ],
          });
        };
    },
    70016: function (t, a, e) {
      e.d(a, {
        EG: function () {
          return n;
        },
        GH: function () {
          return r;
        },
        Kc: function () {
          return m;
        },
        d: function () {
          return i;
        },
        t_: function () {
          return c;
        },
        tj: function () {
          return p;
        },
        wD: function () {
          return h;
        },
      });
      var s = e(8388),
        o = e.n(s),
        n = "e1affeb13de9140",
        r = { TOP_NAV: "top_nav", BOTTOM_NAV: "bottom_nav" },
        m = {
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
        p = "https://m.me/amberstudent",
        i = 1441,
        c = "".concat(
          o().app.image_static_assets_url,
          "/images/wechat-qr.png?auto=format&q=10"
        ),
        h = "".concat(
          o().app.image_static_assets_url,
          "/images/xhr_qr.jpg?auto=format&q=10"
        );
    },
    90788: function (t, a, e) {
      var s = e(66383),
        o = e(2784);
      a.Z = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { rootMargin: "10px 0px 30px 0px" },
          a = (0, o.useRef)(),
          e = (0, o.useState)(!1),
          n = e[0],
          r = e[1],
          m = function (t) {
            var a = (0, s.Z)(t, 1)[0];
            r(a.isIntersecting);
          };
        return (
          (0, o.useEffect)(
            function () {
              var e = new IntersectionObserver(m, t);
              return (
                a.current && e.observe(a.current),
                function () {
                  a.current && e.unobserve(a.current);
                }
              );
            },
            [a]
          ),
          [a, n]
        );
      };
    },
    92661: function (t, a, e) {
      e.d(a, {
        n5: function () {
          return s;
        },
        _6: function () {
          return n;
        },
        M0: function () {
          return r;
        },
        qq: function () {
          return m;
        },
      });
      e(36886);
      var s = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = t.isTopRated,
            e = void 0 !== a && a,
            s = t.isFillingFast,
            o = void 0 !== s && s,
            n = t.isCashbackOrDiscount,
            r = void 0 !== n && n,
            m = t.cashbackValue,
            p = void 0 === m ? null : m;
          return e
            ? "Top Rated"
            : o
            ? "Filling Fast"
            : r && p
            ? "Upto ".concat(p, " Cashback")
            : null;
        },
        o = {
          "Top Rated": "secondary",
          "Filling Fast": "primary",
          "Cashback/Discount": "tertiary",
        },
        n = function (t) {
          return o[t];
        },
        r =
          (e(62595),
          function (t) {
            var a = t.noun,
              e = t.count,
              s = void 0 === e ? 0 : e,
              o = t.suffix,
              n = void 0 === o ? "s" : o;
            return "".concat(s, " ").concat(
              (function (t) {
                var a = t.noun,
                  e = t.count,
                  s = void 0 === e ? 0 : e,
                  o = t.suffix,
                  n = void 0 === o ? "s" : o;
                return s > 1 ? "".concat(a).concat(n) : a;
              })({ noun: a, count: s, suffix: n })
            );
          }),
        m = function (t) {
          return t.replace(/\b hours?\b/g, "h").replace(/\b mins?\b/g, "m");
        };
    },
  },
]);
//# sourceMappingURL=buildstatic/chunks/9478.66ac7844e9f68496.js.map
