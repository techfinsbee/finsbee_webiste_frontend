// // app/api/customer/profile/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";

// async function handle(request) {
//   try {
//     const { params } = await request.json();
//     const { CustomerId } = params || {};

//     if (!CustomerId) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "CustomerId required" } },
//         { status: 400 }
//       );
//     }

//     const cookie = request.headers.get("cookie") || "";
//     const sessionMatch = cookie.match(/session_id=([^;]+)/);
//     if (!sessionMatch) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 401, message: "No session" } },
//         { status: 401 }
//       );
//     }

//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "read",
//         args: [[CustomerId], ["name", "email", "phone"]],
//         kwargs: {}
//       },
//     };

//     const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Cookie: cookie },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     const partner = data.result?.[0];

//     if (!partner) {
//       return new Response(
//         JSON.stringify({ jsonrpc: "2.0", result: [{ success: "False", message: "Not found" }] }),
//         { status: 200, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     const headers = new Headers({ "Content-Type": "application/json" });
//     const setCookie = res.headers.get("set-cookie");
//     if (setCookie) headers.set("Set-Cookie", setCookie);

//     return new Response(
//       JSON.stringify({
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           name: partner.name,
//           email: partner.email || false,
//           phone: partner.phone,
//           CustomerId,
//         }],
//       }),
//       { status: 200, headers }
//     );
//   } catch (err) {
//     console.error("PROFILE ERROR:", err.message);
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) { return handle(request); }
// export async function GET(request)  { return handle(request); }

// // app/api/customer/profile/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";
// const ADMIN = {
//   db: "finsbee",
//   login: "finsbee@gmail.com",
//   password: "Finsbee@123%4ujm",
// };

// async function getAdminSession() {
//   const loginRes = await fetch(`${ODOO}/web/session/authenticate`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: ADMIN }),
//   });
//   const cookie = loginRes.headers.get("set-cookie");
//   if (!cookie) throw new Error("Admin login failed");
//   return cookie;
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { CustomerId } = body.params || {};

//     if (!CustomerId) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "CustomerId required" } },
//         { status: 400 }
//       );
//     }

//     const adminCookie = await getAdminSession();

//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "read",
//         args: [[CustomerId], ["name", "email", "phone"]],
//         kwargs: {},
//       },
//     };

//     const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: adminCookie,
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (data.error || !data.result?.[0]) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 404, message: "Customer not found" } },
//         { status: 404 }
//       );
//     }

//     const partner = data.result[0];

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           name: partner.name || "",
//           email: partner.email || "", // ← FIXED: NO FAKE EMAIL
//           phone: partner.phone || "",
//           CustomerId,
//         }],
//       },
//       {
//         status: 200,
//         headers: {
//           "Set-Cookie": adminCookie,
//           "Access-Control-Allow-Origin": "https://finsbee.com",
//           "Access-Control-Allow-Credentials": "true",
//         },
//       }
//     );

//   } catch (err) {
//     console.error("PROFILE ERROR:", err.message);
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request) {
//   return POST(request);
// }

// app/api/customer/profile/route.js
import { NextResponse } from "next/server";

const ODOO = "https://dashboard.finsbee.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { CustomerId } = body.params || {};

    if (!CustomerId) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 400, message: "CustomerId required" } },
        { status: 400 }
      );
    }

    // GET USER SESSION FROM COOKIE
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("session_id=")) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 401, message: "Session required" } },
        { status: 401 }
      );
    }

    const payload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "res.partner",
        method: "read",
        args: [[CustomerId], ["name", "email", "phone"]],
        kwargs: {},
      },
    };

    const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader, // USER SESSION
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.error || !data.result?.[0]) {
      console.error("PROFILE READ ERROR:", data);
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 404, message: "Customer not found" } },
        { status: 404 }
      );
    }

    const partner = data.result[0];

    return NextResponse.json(
      {
        jsonrpc: "2.0",
        result: [{
          success: "True",
          name: partner.name || "",
          email: partner.email || "",
          phone: partner.phone || "",
          CustomerId,
        }],
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://finsbee.com",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );

  } catch (err) {
    console.error("PROFILE FATAL ERROR:", err.message);
    return NextResponse.json(
      { jsonrpc: "2.0", error: { code: 500, message: err.message } },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return POST(request);
}