// // next.config.mjs
// const nextConfig = {
//   async rewrites() {
//     return [
//       { source: "/api/flutterapi/create/customer",  destination: "/api/create/customer" },
//       { source: "/api/flutterapi/update/customer",  destination: "/api/update/customer" },
//       { source: "/api/flutterapi/customer/profile", destination: "/api/customer/profile" },
//       { source: "/api/flutterapi/customer/loan",    destination: "/api/customer/loan" },
//       { source: "/api/flutterapi/check-phone",      destination: "/api/check-phone" },
//       { source: "/api/flutterapi/bre/website",      destination: "https://dashboard.finsbee.com/api/bre/website" },

       
//       { source: "/api/flutterapi/crm/webinar", destination: "https://dashboard.finsbee.com/api/crm/webinar" },
//       { source: "/api/flutterapi/loanremark/update", destination: "https://dashboard.finsbee.com/api/loanremark/update" },
//       { source: "/api/flutterapi/:path*",           destination: "https://dashboard.finsbee.com/:path*" },
//       { source: "/api/2factor-proxy", destination: "https://2factor.in/" },
//       { source: "/api/2factor/:path*", destination: "https://2factor.in/API/V1/:path*" },
//       { source: "/api/booking/:path*", destination: "https://booking.finsbee.com/api/bookings/:path*" },
//       { source: "/api/dashboard/:path*", destination: "https://dashboard.finsbee.com/api/bookings/:path*" },
//     ];
//   },

//   async headers() {
//     const origin = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://finsbee.com";
//     return [
//       {
//         source: "/api/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Origin", value: origin },
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,OPTIONS" },
//           { key: "Access-Control-Allow-Headers", value: "Content-Type,Cookie" },
//           { key: "Access-Control-Expose-Headers", value: "Set-Cookie" },
//         ],
//       },

//         //  NEW: Disable caching for Instant-form page
//       {
//         source: "/Instant-form",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "no-store, no-cache, must-revalidate, proxy-revalidate",
//           },
//           { key: "Pragma", value: "no-cache" },
//           { key: "Expires", value: "0" },
//         ],
//       },
//     ];
//   },

//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "c.animaapp.com" },
//       { protocol: "https", hostname: "dashboard.finsbee.com" },
//       { protocol: "https", hostname: "admin.finsbee.com" },
//     ],
//   },
// };

// export default nextConfig;



// next.config.mjs
const nextConfig = {
 async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "https://payday.finsbee.com/:path*",
    },

    // ────────────────────────────────────────────────
    // Your existing Flutter / API rewrites (keep all)
    // ────────────────────────────────────────────────
    // { source: "/api/flutterapi/create/customer",  destination: "/api/create/customer" },
    // { source: "/api/flutterapi/update/customer",  destination: "/api/update/customer" },
    // { source: "/api/flutterapi/customer/profile", destination: "/api/customer/profile" },
    // { source: "/api/flutterapi/customer/loan",    destination: "/api/customer/loan" },
    // { source: "/api/flutterapi/check-phone",      destination: "/api/check-phone" },
    // { source: "/api/flutterapi/bre/website",      destination: "https://dashboard.finsbee.com/api/bre/website" },
    // { source: "/api/flutterapi/crm/webinar",      destination: "https://dashboard.finsbee.com/api/crm/webinar" },
    // { source: "/api/flutterapi/loanremark/update", destination: "https://dashboard.finsbee.com/api/loanremark/update" },
    // { source: "/api/flutterapi/:path*",           destination: "https://dashboard.finsbee.com/:path*" },
    { source: "/api/flutterapi/bre/website", destination: "https://payday.finsbee.com/api/bre/website" },
{ source: "/api/flutterapi/crm/webinar", destination: "https://payday.finsbee.com/api/crm/webinar" },
{ source: "/api/flutterapi/loanremark/update", destination: "https://payday.finsbee.com/api/loanremark/update" },
{ source: "/api/flutterapi/:path*", destination: "https://payday.finsbee.com/:path*" },
{ source: "/api/dashboard/:path*", destination: "https://payday.finsbee.com/api/bookings/:path*" },


    // ────────────────────────────────────────────────
    // 2Factor proxy – covers BOTH send OTP and verify OTP
    // This single rule handles /twofactor/... and /api/twofactor/...
    // ────────────────────────────────────────────────
    {
      source: "/twofactor/:path*",
      destination: "https://2factor.in/:path*",
    },
    {
      source: "/api/twofactor/:path*",
      destination: "https://2factor.in/:path*",
    },

    // Your other rewrites
    { source: "/api/booking/:path*", destination: "https://booking.finsbee.com/api/bookings/:path*" },
    // { source: "/api/dashboard/:path*", destination: "https://dashboard.finsbee.com/api/bookings/:path*" },
  ];
},

  async headers() {
    const origin = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://finsbee.com";
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: origin },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Cookie,X-Session-Id" }, // added X-Session-Id if needed
          { key: "Access-Control-Expose-Headers", value: "Set-Cookie" },
        ],
      },
      // Your Instant-form no-cache rule
      {
        source: "/Instant-form",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "dashboard.finsbee.com" },
      { protocol: "https", hostname: "admin.finsbee.com" },
      // If 2factor.in sends images (unlikely), you could add:
      // { protocol: "https", hostname: "2factor.in" },
    ],
  },

  // Optional: if you want trailing slash consistency (sometimes helps with rewrites)
  // trailingSlash: false, // or true – test if you have redirect loops
};

export default nextConfig;