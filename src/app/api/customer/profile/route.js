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

// /app/api/flutterapi/customer/profile/route.js

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const params = body?.params || {};
//     const { CustomerId } = params;

//     // ✅ Extract cookie header (session)
//     const cookieHeader = req.headers.get("cookie") || "";

//     if (!cookieHeader.includes("session_id=")) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 401, message: "No valid Odoo session cookie found" },
//         },
//         { status: 401 }
//       );
//     }

//     if (!CustomerId) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 400, message: "Missing CustomerId" },
//         },
//         { status: 400 }
//       );
//     }

//     console.log("🔍 Fetching Odoo profile for CustomerId:", CustomerId);

//     // ✅ Call Odoo JSON-RPC for reading customer record
//     const odooResponse = await fetch(
//       "https://dashboard.finsbee.com/web/dataset/call_kw",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookieHeader,
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             model: "res.partner",
//             method: "read",
//             args: [[CustomerId], ["name", "email", "phone", "zip", "birthday"]],
//             kwargs: {},
//           },
//         }),
//       }
//     );

//     const data = await odooResponse.json();
//     console.log("🧾 Odoo profile raw response:", data);

//     if (!odooResponse.ok || data.error) {
//       console.error("❌ Odoo error:", data.error);
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 500, message: "Odoo read error", details: data.error },
//         },
//         { status: 500 }
//       );
//     }

//     const result = data.result;
//     if (!result || result.length === 0) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 404, message: "Customer not found" },
//         },
//         { status: 404 }
//       );
//     }

//     const partner = result[0];
//     console.log("✅ Found customer:", partner.name);

//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [
//         {
//           success: "True",
//           CustomerId,
//           name: partner.name || "",
//           email: partner.email || "",
//           phone: partner.phone || "",
//           zip: partner.zip || "",
//           birthday: partner.birthday || "",
//         },
//       ],
//     });
//   } catch (err) {
//     console.error("🔥 Profile API Exception:", err);
//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         error: { code: 500, message: "Server Exception", details: err.message },
//       },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const params = body?.params || {};
//     const { CustomerId } = params;

//     // ✅ Extract cookie header (session)
//     const cookieHeader = req.headers.get("cookie") || "";

//     if (!cookieHeader.includes("session_id=")) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 401, message: "No valid Odoo session cookie found" },
//         },
//         { status: 401 }
//       );
//     }

//     if (!CustomerId) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 400, message: "Missing CustomerId" },
//         },
//         { status: 400 }
//       );
//     }

//     console.log("🔍 Fetching Odoo profile for CustomerId:", CustomerId);

//     // ✅ Use correct Odoo field names - remove 'birthday' which doesn't exist
//     const odooResponse = await fetch(
//       "https://payday.finsbee.com/web/dataset/call_kw",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookieHeader,
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             model: "res.partner",
//             method: "read",
//             args: [[CustomerId], ["name", "email", "phone", "zip"]], // Removed birthday
//             kwargs: {},
//           },
//         }),
//       }
//     );

//     const data = await odooResponse.json();
//     console.log("🧾 Odoo profile raw response:", data);

//     if (!odooResponse.ok || data.error) {
//       console.error("❌ Odoo error:", data.error);
      
//       // Return empty result instead of error for Flutter compatibility
//       return NextResponse.json({
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           CustomerId,
//           name: "",
//           email: "",
//           phone: "",
//           zip: "",
//           birthday: "", // Provide empty birthday field for Flutter
//         }],
//       });
//     }

//     const result = data.result;
//     if (!result || result.length === 0) {
//       // Return empty profile instead of error
//       return NextResponse.json({
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           CustomerId,
//           name: "",
//           email: "",
//           phone: "",
//           zip: "",
//           birthday: "",
//         }],
//       });
//     }

//     const partner = result[0];
//     console.log("✅ Found customer:", partner.name);

//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [
//         {
//           success: "True",
//           CustomerId,
//           name: partner.name || "",
//           email: partner.email || "",
//           phone: partner.phone || "",
//           zip: partner.zip || "",
//           birthday: "", // Always empty since Odoo doesn't have birthday field
//         },
//       ],
//     });
//   } catch (err) {
//     console.error("🔥 Profile API Exception:", err);
//     // Return empty profile instead of error
//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [{
//         success: "True",
//         CustomerId: params.CustomerId || 0,
//         name: "",
//         email: "",
//         phone: "",
//         zip: "",
//         birthday: "",
//       }],
//     });
//   }
// }


// // app/api/customer/profile/route.js
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const cookieHeader = req.headers.get("cookie") || "";

//     const odooResponse = await fetch(
//       "https://payday.finsbee.com/web/dataset/call_kw",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookieHeader,
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             model: "res.partner",
//             method: "fields_get",
//             args: [],
//             kwargs: {},
//           },
//         }),
//       }
//     );

//     const data = await odooResponse.json();

//     return NextResponse.json(data);

//   } catch (err) {
//     return NextResponse.json({ error: err.message });
//   }
// }



import { NextResponse } from "next/server";

const ODOO = "https://payday.finsbee.com";

export async function POST(req) {
  try {
    const body = await req.json();
    const { CustomerId } = body?.params || {};

    const cookieHeader = req.headers.get("cookie") || "";

    if (!cookieHeader.includes("session_id=")) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 401, message: "No valid session" } },
        { status: 401 }
      );
    }

    if (!CustomerId) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 400, message: "CustomerId missing" } },
        { status: 400 }
      );
    }

    // 🔥 FETCH ALL FIELDS (REAL VALUES)
    const odooResponse = await fetch(
      `${ODOO}/web/dataset/call_kw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            model: "res.partner",
            method: "read",
            args: [[CustomerId], []], // ← EMPTY ARRAY = ALL FIELDS
            kwargs: {},
          },
        }),
      }
    );

    const data = await odooResponse.json();

    if (!data.result || !data.result.length) {
      return NextResponse.json({
        jsonrpc: "2.0",
        result: [{ success: "False", message: "No profile found" }],
      });
    }

    const partner = data.result[0];

    // 🎯 FILTER ONLY UI FIELDS
    const filteredProfile = {
      CustomerId,
      name: partner.name || "",
      email: partner.email || "",
      phone: partner.phone || partner.mobile || "",
      pan: partner.PAN || partner.pan_card || "",
      dob: partner.DOB || "",
      nationality: partner.Nationality || "",
      street: partner.street || "",
      city: partner.city || "",
      state: partner.state_id?.[1] || "",
      pincode: partner.zip || "",
      gender: partner.gender || "",
    };

    return NextResponse.json({
      jsonrpc: "2.0",
      result: [{ success: "True", ...filteredProfile }],
    });

  } catch (err) {
    console.error("Profile API error:", err);
    return NextResponse.json(
      { jsonrpc: "2.0", error: { code: 500, message: err.message } },
      { status: 500 }
    );
  }
}
