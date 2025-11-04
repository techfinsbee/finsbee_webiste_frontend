// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   async rewrites() {
// //     const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

// //     return [
// //       // Temporary proxy for connectivity check (specific rule first)
//       // {
//       //   source: '/flutterapi/connectivity',
//       //   destination: 'https://connectivitycheck.gstatic.com/generate_204',
//       // },

// //       // Existing API routes
// //       {
// //         source: '/api/:path*',
// //         destination: `${backendUrl}/api/:path*`,
// //       },
// //       {
// //         source: '/webhooks/:path*',
// //         destination: `${backendUrl}/webhooks/:path*`,
// //       },

// //       // Proxy for Flutter app requests to dashboard.finsbee.com (wildcard rule last)
// //       {
// //         source: '/flutterapi/:path*',
// //         destination: 'https://dashboard.finsbee.com/:path*',
// //       },
// //     ];
// //   },

// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: "https",
// //         hostname: "c.animaapp.com",
// //         pathname: "/**",
// //       },
// //     ],
// //   },

// //   // Allow serving Flutter static files with CORS headers
// //   async headers() {
// //     return [
// //       {
// //         source: '/flutterapp/:path*',
// //         headers: [
// //           { key: 'Access-Control-Allow-Origin', value: '*' },
// //           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
// //           { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
// //         ],
// //       },
// //     ];
// //   },
// // };

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//   const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://finsbee.com';

//   return [
//     {
//       source: '/flutterapi/connectivity',
//       destination: 'https://connectivitycheck.gstatic.com/generate_204',
//     },
//     {
//       source: '/flutterapi/web/session/authenticate',
//       destination: `${backendUrl}/web/session/authenticate`,
//     },
//     {
//       source: '/flutterapi/:path*',
//       destination: `${backendUrl}/:path*`,
//     },
//     // ✅ Add this for Flutter SPA fallback
//     {
//       source: '/flutterapp/:path*',
//       destination: '/flutterapp/index.html',
//     },
//   ];
// },


//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "c.animaapp.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: '/flutterapp/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: '*' },
//           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
//           { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
//         ],
//       },
//     ];
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     const backendUrl =
//       process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';

//     return [
//       // ✅ Flutter specific routes
//       {
//         source: '/api/flutterapi/create/customer',
//         destination: `${backendUrl}/create/customer`,
//       },
//       {
//         source: '/api/flutterapi/web/:path*',
//         destination: `${backendUrl}/web/:path*`,
//       },
//       {
//         source: '/api/flutterapi/:path*',
//         destination: `${backendUrl}/:path*`,
//       },

//       // ✅ Customer-related APIs
//       {
//         source: '/api/customer/:path*',
//         destination: `${backendUrl}/api/customer/:path*`,
//       },

//       // ✅ Generic backend API proxy
//       {
//         source: '/api/:path*',
//         destination: `${backendUrl}/api/:path*`,
//       },

//       // ✅ 2Factor OTP API proxy
//       {
//         source: '/api/2factor-proxy',
//         destination: 'https://2factor.in/',
//       },
//       {
//         source: '/api/2factor/:path*',
//         destination: 'https://2factor.in/API/V1/:path*',
//       },

//       // ✅ Flutter Web App static files
//       {
//         source: '/flutterapp/:path*',
//         destination: '/flutterapp/index.html',
//       },
//     ];
//   },

//   async headers() {
//     const frontendUrl =
//       process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

//     return [
//       // ✅ Apply CORS headers to all API routes
//       {
//         source: '/api/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: frontendUrl },
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value:
//               'X-Requested-With, Content-Type, Authorization, Cookie, Origin, Accept',
//           },
//           { key: 'Access-Control-Expose-Headers', value: 'Set-Cookie' },
//         ],
//       },
//       // ✅ Allow serving Flutter app correctly
//       {
//         source: '/flutterapp/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: frontendUrl },
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//         ],
//       },
//     ];
//   },

//   // ✅ Allow remote image domains (example: animaapp)
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'c.animaapp.com',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// // export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     const backendUrl =
//       process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';

//     return [
//       /**
//        * =====================================================
//        * 🟦 FLUTTER API → LOCAL NEXT.JS HANDLERS
//        * =====================================================
//        */

//       // 🔹 Create Customer (handled by /api/create/customer)
//       {
//         source: '/api/flutterapi/create/customer',
//         destination: '/api/create/customer',
//       },

//       // 🔹 Authentication (Flutter → Next.js → Odoo)
//       {
//         source: '/api/flutterapi/web/:path*',
//         destination: '/api/web/:path*',
//       },

//       // 🔹 Customer Profile (Flutter → Next.js → Backend)
//       {
//         source: '/api/flutterapi/customer/profile',
//         destination: '/api/customer/profile',
//       },

//       /**
//        * =====================================================
//        * 🟧 BACKEND DIRECT PROXY (Fallbacks)
//        * =====================================================
//        */

//       // 🔹 Any other Flutter API → directly forward to backend
//       {
//         source: '/api/flutterapi/:path*',
//         destination: `${backendUrl}/:path*`,
//       },

//       // 🔹 Direct backend API proxy for customer-related routes
//       {
//         source: '/api/customer/:path*',
//         destination: `${backendUrl}/api/customer/:path*`,
//       },

//       // 🔹 Generic API proxy (fallback for other /api/ calls)
//       {
//         source: '/api/:path*',
//         destination: `${backendUrl}/api/:path*`,
//       },

//       /**
//        * =====================================================
//        * 🟩 2FACTOR OTP API PROXY
//        * =====================================================
//        */

//       {
//         source: '/api/2factor-proxy',
//         destination: 'https://2factor.in/',
//       },
//       {
//         source: '/api/2factor/:path*',
//         destination: 'https://2factor.in/API/V1/:path*',
//       },

//       /**
//        * =====================================================
//        * 🟪 FLUTTER WEB APP STATIC FILES
//        * =====================================================
//        */
//       {
//         source: '/flutterapp/:path*',
//         destination: '/flutterapp/index.html',
//       },
//     ];
//   },

//   /**
//    * =====================================================
//    * 🟫 GLOBAL HEADERS (CORS + FRONTEND SETTINGS)
//    * =====================================================
//    */
//   async headers() {
//     const frontendUrl =
//       process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

//     return [
//       {
//         // Apply CORS to all API routes
//         source: '/api/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: frontendUrl },
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value:
//               'X-Requested-With, Content-Type, Authorization, Cookie, Origin, Accept',
//           },
//           { key: 'Access-Control-Expose-Headers', value: 'Set-Cookie' },
//         ],
//       },
//       {
//         // Flutter web files CORS
//         source: '/flutterapp/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: frontendUrl },
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//         ],
//       },
//     ];
//   },

//   /**
//    * =====================================================
//    * 🟨 IMAGE SETTINGS
//    * =====================================================
//    */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'c.animaapp.com',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     const backendUrl =
//       process.env.NEXT_PUBLIC_BACKEND_URL || "https://dashboard.finsbee.com";

//     return [
//       /**
//        * =====================================================
//        * 🟦 FLUTTER API → LOCAL NEXT.JS HANDLERS
//        * =====================================================
//        */
//       {
//         source: "/api/flutterapi/create/customer",
//         destination: "/api/create/customer",
//       },

//       // 🔹 These routes are handled by your app/api/ routes
//      {
//         source: "/api/flutterapi/customer/loan",
//         destination: "/api/customer/loan",
//       },

//       // NEW: Direct backend proxy for /api/customer/loan
//       {
//         source: "/api/customer/loan",
//         destination: `${backendUrl}/api/customer/loan`,
//       },

//       // Keep fallback
//       {
//         source: "/api/customer/:path*",
//         destination: `${backendUrl}/api/customer/:path*`,
//       },
//       {
//         source: "/api/flutterapi/web/:path*",
//         destination: "/api/web/:path*",
//       },
//       {
//         source: "/api/flutterapi/customer/profile",
//         destination: "/api/customer/profile",
//       },

//       // 🆕 ADD THESE NEW ROUTES:
//       {
//         source: "/api/flutterapi/customer/loan",
//         destination: "/api/customer/loan",
//       },
//       {
//         source: "/api/flutterapi/customer/company-details",
//         destination: "/api/customer/company-details",
//       },
//       {
//         source: "/api/flutterapi/update/customer",
//         destination: "/api/update/customer",
//       },
//       {
//         source: "/api/flutterapi/web/content/:path*",
//         destination: "/api/web/content/:path*",
//       },

//       /**
//        * =====================================================
//        * 🟧 BACKEND DIRECT PROXY (Fallbacks)
//        * =====================================================
//        */

//       // 🔹 Any other Flutter API → directly forward to backend
//       {
//         source: "/api/flutterapi/:path*",
//         destination: `${backendUrl}/:path*`,
//       },

//       // 🔹 Direct backend API proxy
//       {
//         source: "/api/customer/:path*",
//         destination: `${backendUrl}/api/customer/:path*`,
//       },
//       {
//         source: "/api/:path*",
//         destination: `${backendUrl}/api/:path*`,
//       },

//       /**
//        * =====================================================
//        * 🟩 2FACTOR OTP API PROXY
//        * =====================================================
//        */
//       {
//         source: "/api/2factor-proxy",
//         destination: "https://2factor.in/",
//       },
//       {
//         source: "/api/2factor/:path*",
//         destination: "https://2factor.in/API/V1/:path*",
//       },

//       /**
//        * =====================================================
//        * 🟪 FLUTTER WEB APP STATIC FILES
//        * =====================================================
//        */
//       {
//         source: "/flutterapp/:path*",
//         destination: "/flutterapp/index.html",
//       },
//     ];
//   },

//   /**
//    * =====================================================
//    * 🟫 GLOBAL HEADERS (CORS + FRONTEND SETTINGS)
//    * =====================================================
//    */
//   async headers() {
//     const frontendUrl =
//       process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

//     return [
//       {
//         // Apply CORS to all API routes
//         source: "/api/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Origin", value: frontendUrl },
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET, POST, PUT, DELETE, OPTIONS",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value:
//               "X-Requested-With, Content-Type, Authorization, Cookie, Origin, Accept",
//           },
//           { key: "Access-Control-Expose-Headers", value: "Set-Cookie" },
//         ],
//       },
//       {
//         // Flutter web files CORS
//         source: "/flutterapp/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Origin", value: frontendUrl },
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//         ],
//       },
//     ];
//   },

//   /**
//    * =====================================================
//    * 🟨 IMAGE SETTINGS
//    * =====================================================
//    */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "c.animaapp.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "dashboard.finsbee.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;


// // next.config.mjs
// const nextConfig = {
//   async rewrites() {
//     const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "https://dashboard.finsbee.com";

//     return [
//       // SPECIFIC HANDLERS
//       { source: "/api/flutterapi/create/customer",  destination: "/api/create/customer" },
//       { source: "/api/flutterapi/update/customer",  destination: "/api/update/customer" },
//       { source: "/api/flutterapi/customer/profile", destination: "/api/customer/profile" },

//       // FALLBACK FOR ANY OTHER flutterapi CALLS
//       { source: "/api/flutterapi/:path*",           destination: `${backend}/:path*` },

//       // 2FACTOR
//       { source: "/api/2factor-proxy", destination: "https://2factor.in/" },
//       { source: "/api/2factor/:path*", destination: "https://2factor.in/API/V1/:path*" },
//     ];
//   },

//   async headers() {
//     const origin = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
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
      { source: "/api/flutterapi/:path*",           destination: "https://dashboard.finsbee.com/:path*" },
      { source: "/api/2factor-proxy", destination: "https://2factor.in/" },
      { source: "/api/2factor/:path*", destination: "https://2factor.in/API/V1/:path*" },
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
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Cookie" },
          { key: "Access-Control-Expose-Headers", value: "Set-Cookie" },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "dashboard.finsbee.com" },
    ],
  },
};

export default nextConfig;