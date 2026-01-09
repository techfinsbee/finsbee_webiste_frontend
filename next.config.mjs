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
//     ],
//   },
// };

// export default nextConfig;


// next.config.mjs

const nextConfig = {
  async rewrites() {
    return [
      { source: "/api/flutterapi/create/customer",  destination: "/api/create/customer" },
      { source: "/api/flutterapi/update/customer",  destination: "/api/update/customer" },
      { source: "/api/flutterapi/customer/profile", destination: "/api/customer/profile" },
      { source: "/api/flutterapi/customer/loan",    destination: "/api/customer/loan" },
      { source: "/api/flutterapi/check-phone",      destination: "/api/check-phone" },

      // ✅ ONLY CHANGE: dashboard → payday
      {
        source: "/api/flutterapi/bre/website",
        destination: "https://payday.finsbee.com/api/bre/website",
      },
      {
        source: "/api/flutterapi/loanremark/update",
        destination: "https://payday.finsbee.com/api/loanremark/update",
      },
      {
        source: "/api/flutterapi/:path*",
        destination: "https://payday.finsbee.com/:path*",
      },

      // unchanged
      { source: "/api/2factor-proxy", destination: "https://2factor.in/" },
      { source: "/api/2factor/:path*", destination: "https://2factor.in/API/V1/:path*" },
      { source: "/api/booking/:path*", destination: "https://booking.finsbee.com/api/bookings/:path*" },

      // dashboard bookings → payday bookings
      {
        source: "/api/dashboard/:path*",
        destination: "https://payday.finsbee.com/api/bookings/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Cookie" },
          { key: "Access-Control-Expose-Headers", value: "Set-Cookie" },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "payday.finsbee.com" }, 
    ],
  },
};

export default nextConfig;
