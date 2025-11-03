// // pages/api/update/customer.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const backendUrl =
//       process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';

//     const response = await fetch(`${backendUrl}/api/update/customer`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Cookie: req.headers.cookie || '',
//       },
//       body: JSON.stringify(req.body),
//     });

//     const data = await response.json();
//     return res.status(response.status).json(data);
//   } catch (err) {
//     console.error('❌ Error in /api/update/customer:', err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// // app/api/update/customer/route.js
// import { NextResponse } from "next/server";

// const ODOO_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || "https://dashboard.finsbee.com";

// export async function POST(request) {
//   return handleUpdate(request);
// }

// export async function PUT(request) {
//   return handleUpdate(request);
// }

// async function handleUpdate(request) {
//   try {
//     const body = await request.json().catch(() => ({}));
//     const { CustomerId, name, Email, phone, DOB, gender, Pincode } = body;

//     if (!CustomerId) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "CustomerId is required" } },
//         { status: 400 }
//       );
//     }

//     // 1. Forward session cookie
//     const clientCookie = request.headers.get("cookie") || "";

//     // 2. Build Odoo write RPC
//     const odooPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "write",
//         args: [
//           [CustomerId],
//           Object.fromEntries(
//             Object.entries({
//               name,
//               email: Email,
//               phone,
//               date_birth: DOB,
//               gender,
//               zip: Pincode,
//             }).filter(([_, v]) => v !== undefined && v !== null && v !== false)
//           ),
//         ],
//       },
//     };

//     // 3. Call Odoo
//     const odooRes = await fetch(`${ODOO_BASE}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: clientCookie,
//       },
//       body: JSON.stringify(odooPayload),
//     });

//     const data = await odooRes.json();

//     // 4. Build response with Set-Cookie
//     const headers = new Headers({
//       "Content-Type": "application/json",
//     });

//     const setCookie = odooRes.headers.get("set-cookie");
//     if (setCookie) {
//       headers.set("Set-Cookie", setCookie);
//     }

//     return new Response(JSON.stringify(data), {
//       status: odooRes.status,
//       headers,
//     });
//   } catch (error) {
//     console.error("Update customer error:", error.message);
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: error.message } },
//       { status: 500 }
//     );
//   }
// }


// // app/api/update/customer/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";

// export async function POST(request) { return handle(request); }
// export async function PUT(request)  { return handle(request); }

// async function handle(request) {
//   try {
//     const { params } = await request.json();
//     const { CustomerId, ...fields } = params || {};

//     if (!CustomerId) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "CustomerId required" } },
//         { status: 400 }
//       );
//     }

//     const clientCookie = request.headers.get("cookie") || "";
//     if (!clientCookie.includes("session_id")) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 401, message: "Login first" } },
//         { status: 401 }
//       );
//     }

//     const odooFields = Object.fromEntries(
//       Object.entries({
//         name: fields.name,
//         email: fields.email,
//         phone: fields.phone,
//         date_birth: fields.DOB,
//         gender: fields.gender,
//         zip: fields.Pincode,
//       }).filter(([_, v]) => v !== undefined && v !== null && v !== false)
//     );

//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "write",
//         args: [[CustomerId], odooFields],
//       },
//     };

//     const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Cookie: clientCookie },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     const headers = new Headers({ "Content-Type": "application/json" });
//     const setCookie = res.headers.get("set-cookie");
//     if (setCookie) headers.set("Set-Cookie", setCookie);

//     return new Response(JSON.stringify(data), { status: res.status, headers });
//   } catch (err) {
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//       { status: 500 }
//     );
//   }
// }

// // app/api/update/customer/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";

// /* -------------------------------------------------
//    Flutter → Odoo field mapping
//    Add any custom fields you use in the app here
//    ------------------------------------------------- */
// const FIELD_MAP = {
//   Email: "email",
//   DOB: "birthday",   // Odoo uses 'birthday' for date-of-birth
//   Pincode: "zip",
//   // gender: "gender",   // uncomment if you have a gender field
// };

// export async function POST(request) {
//   try {
//     const { params } = await request.json();
//     const { CustomerId } = params || {};

//     // ---- 1. Validation -------------------------------------------------
//     if (!CustomerId || isNaN(CustomerId)) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "Valid CustomerId required" } },
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

//     // ---- 2. Clean + Map fields -----------------------------------------
//     const odooFields = {};

//     for (const [flutterKey, value] of Object.entries(params)) {
//       if (flutterKey === "CustomerId") continue;

//       // skip null / false / empty strings
//       if (value == null || value === false || value === "" || value === "false") continue;

//       // map known Flutter keys, otherwise lower-case the key
//       const odooKey = FIELD_MAP[flutterKey] || flutterKey.toLowerCase();
//       odooFields[odooKey] = value;
//     }

//     if (Object.keys(odooFields).length === 0) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "No valid fields to update" } },
//         { status: 400 }
//       );
//     }

//     // ---- 3. Build Odoo payload -----------------------------------------
//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "write",
//         args: [[CustomerId], odooFields],
//         kwargs: {} // Odoo 18 requires this
//       },
//     };

//     console.log("UPDATE PAYLOAD → ODOO:", JSON.stringify(payload, null, 2));

//     // ---- 4. Call Odoo ---------------------------------------------------
//     const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (!data.result) {
//       console.error("ODOO UPDATE FAILED:", data);
//       throw new Error(data.error?.message || "Update failed");
//     }

//     // ---- 5. Forward Set-Cookie (if any) ---------------------------------
//     const headers = new Headers({ "Content-Type": "application/json" });
//     const setCookie = res.headers.get("set-cookie");
//     if (setCookie) headers.set("Set-Cookie", setCookie);

//     return new Response(
//       JSON.stringify({ jsonrpc: "2.0", result: { success: "True" } }),
//       { status: 200, headers }
//     );
//   } catch (err) {
//     console.error("UPDATE ERROR:", err.message);
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//       { status: 500 }
//     );
//   }
// }

// app/api/update/customer/route.js
import { NextResponse } from "next/server";

const ODOO = "https://dashboard.finsbee.com";

const FIELD_MAP = {
  Email: "email",
  DOB: "birthday",
  Pincode: "zip",
  // gender: "gender",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const params = body.params || {};

    const { CustomerId } = params;
    if (!CustomerId || isNaN(CustomerId)) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 400, message: "Valid CustomerId required" } },
        { status: 400 }
      );
    }

    // GET FULL COOKIE HEADER
    const cookieHeader = request.headers.get("cookie") || "";
    if (!cookieHeader.includes("session_id=")) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 401, message: "Session cookie required" } },
        { status: 401 }
      );
    }

    // BUILD ODOO FIELDS
    const odooFields = {};
    for (const [key, value] of Object.entries(params)) {
      if (key === "CustomerId") continue;
      if (value == null || value === "" || value === false) continue;

      const odooKey = FIELD_MAP[key] || key.toLowerCase();
      odooFields[odooKey] = value;
    }

    if (Object.keys(odooFields).length === 0) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 400, message: "No fields to update" } },
        { status: 400 }
      );
    }

    // ODOO WRITE
    const payload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "res.partner",
        method: "write",
        args: [[CustomerId], odooFields],
        kwargs: {},
      },
    };

    console.log("UPDATE PAYLOAD:", JSON.stringify(payload, null, 2));

    const res = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader, // PASS FULL COOKIE
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.error || !data.result) {
      console.error("ODOO UPDATE ERROR:", data);
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 500, message: data.error?.message || "Update failed" } },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { jsonrpc: "2.0", result: { success: "True" } },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://finsbee.com",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );

  } catch (err) {
    console.error("UPDATE FATAL ERROR:", err.message);
    return NextResponse.json(
      { jsonrpc: "2.0", error: { code: 500, message: err.message } },
      { status: 500 }
    );
  }
}