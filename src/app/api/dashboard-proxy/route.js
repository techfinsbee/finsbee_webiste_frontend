// // app/api/dashboard-proxy/route.js
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   const target = req.nextUrl.searchParams.get("target");
//   if (!target) {
//     return NextResponse.json({ error: "Missing target URL" }, { status: 400 });
//   }

//   try {
//     const res = await fetch(target, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.text();

//     const response = new NextResponse(data, {
//       status: res.status,
//       headers: {
//         "Content-Type": res.headers.get("content-type") || "application/json",
//       },
//     });

//     // ✅ Add CORS headers for browser
//     response.headers.set("Access-Control-Allow-Origin", "*");
//     response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     return response;
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch target", details: error.message }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   const target = req.nextUrl.searchParams.get("target");
//   if (!target) {
//     return NextResponse.json({ error: "Missing target URL" }, { status: 400 });
//   }

//   try {
//     const body = await req.text();
//     const res = await fetch(target, {
//       method: "POST",
//       headers: {
//         "Content-Type": req.headers.get("Content-Type") || "application/json",
//       },
//       body,
//     });

//     const data = await res.text();

//     const response = new NextResponse(data, {
//       status: res.status,
//       headers: {
//         "Content-Type": res.headers.get("content-type") || "application/json",
//       },
//     });

//     response.headers.set("Access-Control-Allow-Origin", "*");
//     response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     return response;
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to forward request", details: error.message }, { status: 500 });
//   }
// }

// export async function OPTIONS() {
//   const res = new NextResponse(null, { status: 204 });
//   res.headers.set("Access-Control-Allow-Origin", "*");
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   return res;
// }


import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);
    const target = searchParams.get('target');

    if (!target) {
      return NextResponse.json({ error: 'Missing target parameter' }, { status: 400 });
    }

    const body = await req.text();
    const headers = new Headers(req.headers);

    // Clean up host & encoding headers
    headers.delete('host');
    headers.delete('content-length');
    headers.delete('accept-encoding');

    // Forward cookie and CSRF if available
    const cookie = req.headers.get('cookie');
    if (cookie) headers.set('cookie', cookie);

    const csrfToken = req.headers.get('x-csrftoken');
    if (csrfToken) headers.set('x-csrftoken', csrfToken);

    // Make request to Odoo or Dashboard
    const response = await fetch(target, {
      method: 'POST',
      headers,
      body,
      credentials: 'include',
    });

    const resText = await response.text();
    const resHeaders = new Headers(response.headers);

    // Capture cookies (Set-Cookie)
    const setCookie = resHeaders.get('set-cookie');
    if (setCookie) {
      const res = new NextResponse(resText, { status: response.status });
      res.headers.set('set-cookie', setCookie);
      return res;
    }

    return new NextResponse(resText, { status: response.status });
  } catch (err) {
    console.error('Proxy Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
