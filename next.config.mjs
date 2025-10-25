// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

//     return [
//       // Temporary proxy for connectivity check (specific rule first)
      // {
      //   source: '/flutterapi/connectivity',
      //   destination: 'https://connectivitycheck.gstatic.com/generate_204',
      // },

//       // Existing API routes
//       {
//         source: '/api/:path*',
//         destination: `${backendUrl}/api/:path*`,
//       },
//       {
//         source: '/webhooks/:path*',
//         destination: `${backendUrl}/webhooks/:path*`,
//       },

//       // Proxy for Flutter app requests to dashboard.finsbee.com (wildcard rule last)
//       {
//         source: '/flutterapi/:path*',
//         destination: 'https://dashboard.finsbee.com/:path*',
//       },
//     ];
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "c.animaapp.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   // Allow serving Flutter static files with CORS headers
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

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';

  return [
    {
      source: '/flutterapi/connectivity',
      destination: 'https://connectivitycheck.gstatic.com/generate_204',
    },
    {
      source: '/flutterapi/web/session/authenticate',
      destination: `${backendUrl}/web/session/authenticate`,
    },
    {
      source: '/flutterapi/:path*',
      destination: `${backendUrl}/:path*`,
    },
    // ✅ Add this for Flutter SPA fallback
    {
      source: '/flutterapp/:path*',
      destination: '/flutterapp/index.html',
    },
  ];
},


  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/flutterapp/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
        ],
      },
    ];
  },
};

export default nextConfig;