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


import { NextResponse } from "next/server";

// ✅ Handle preflight CORS requests
export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}

// ✅ GET handler
export async function GET(req) {
  const target = req.nextUrl.searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "Missing target URL" }, { status: 400 });
  }

  try {
    const res = await fetch(target, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.text();

    const response = new NextResponse(data, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") || "application/json",
      },
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
  } catch (error) {
    console.error("GET Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch target", details: error.message },
      { status: 500 }
    );
  }
}

// ✅ POST handler
export async function POST(req) {
  const target = req.nextUrl.searchParams.get("target");
  if (!target) {
    return NextResponse.json({ error: "Missing target URL" }, { status: 400 });
  }

  try {
    const body = await req.text();
    const res = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": req.headers.get("Content-Type") || "application/json",
      },
      body,
    });

    const data = await res.text();

    const response = new NextResponse(data, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") || "application/json",
      },
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
  } catch (error) {
    console.error("POST Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to forward request", details: error.message },
      { status: 500 }
    );
  }
}
