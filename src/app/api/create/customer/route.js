

// // app/api/create/customer/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://payday.finsbee.com";
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

//   if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);
//   const setCookie = loginRes.headers.get("set-cookie");
//   if (!setCookie) throw new Error("No session cookie");
//   return setCookie;
// }

// export async function POST(request) {
//   let adminCookie, sessionId;

//   try {
//     const body = await request.json();
//     const { name, phone, email } = body.params || {};

//     if (!phone || !/^\d{10}$/.test(phone)) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "Valid 10-digit phone required" } },
//         { status: 400 }
//       );
//     }

//     adminCookie = await getAdminSession();
//     sessionId = adminCookie.split(";")[0].split("=")[1];

//     // === SEARCH EXISTING CUSTOMER ===
//     const searchPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "search_read",
//         args: [[["phone", "=", phone]], ["id", "name", "email"]],
//         kwargs: { limit: 1 },
//       },
//     };

//     const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Cookie: adminCookie },
//       body: JSON.stringify(searchPayload),
//     });

//     const searchData = await searchRes.json();
//     if (searchData.error) throw new Error(searchData.error.message);

//     const existing = searchData.result?.[0];

//     if (existing) {
//       console.log(`REUSING EXISTING CustomerId: ${existing.id}`);
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           result: [{
//             success: "True",
//             CustomerId: existing.id,
//             session_id: sessionId,
//             name: existing.name || name || phone,
//             phone,
//             email: existing.email || "", // ← Real email if exists
//           }],
//         },
//         {
//           status: 200,
//           headers: {
//             "Set-Cookie": adminCookie,
//             "Access-Control-Allow-Origin": "https://finsbee.com",
//             "Access-Control-Allow-Credentials": "true",
//           },
//         }
//       );
//     }

//     // === CREATE NEW CUSTOMER (NO EMAIL) ===
//     console.log(`CREATING NEW Customer for: ${phone}`);
//     const createPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "create",
//         args: [[{
//           name: name || phone,
//           phone,
//           // DO NOT SET EMAIL → Flutter detects as NEW
//         }]],
//         kwargs: {},
//       },
//     };

//     const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Cookie: adminCookie },
//       body: JSON.stringify(createPayload),
//     });

//     const createData = await createRes.json();
//     if (createData.error) {
//       console.error("CREATE ERROR:", createData.error);
//       throw new Error(createData.error.message);
//     }

//     if (!createData.result?.[0]) throw new Error("Create failed: no ID returned");

//     const newId = createData.result[0];

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           CustomerId: newId,
//           session_id: sessionId,
//           name: name || phone,
//           phone,
//           email: "", // ← EMPTY → Flutter opens UserRegistrationScreen
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
//     console.error("FATAL ERROR:", err.message);
//     return NextResponse.json(
//       { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from "next/server";

// const ODOO = "https://payday.finsbee.com";
// const ADMIN = {
//   db: "finsbee",
//   login: "finsbee@gmail.com",
//   password: "Finsbee@123%4ujm",
// };

// async function getAdminSession() {
//   const loginRes = await fetch(`${ODOO}/web/session/authenticate`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       jsonrpc: "2.0",
//       method: "call",
//       params: ADMIN,
//     }),
//   });

//   if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);

//   const setCookie = loginRes.headers.get("set-cookie");
//   if (!setCookie) throw new Error("No session cookie");

//   return setCookie;
// }

// // ✅ NORMALIZE PHONE TO 10 DIGITS
// function normalizePhone(phone) {
//   if (!phone) return "";
//   return phone.replace(/\D/g, "").slice(-10);
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, phone, email } = body.params || {};

//     const cleanPhone = normalizePhone(phone);

//     if (!cleanPhone || cleanPhone.length !== 10) {
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           error: { code: 400, message: "Valid 10-digit phone required" },
//         },
//         { status: 400 }
//       );
//     }

//     const adminCookie = await getAdminSession();
//     const sessionId = adminCookie.split(";")[0].split("=")[1];

//     // ============================================
//     // 🔍 SEARCH EXISTING CUSTOMER
//     // ============================================

//     const searchPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "search_read",
//         args: [
//           [["phone", "=", cleanPhone]],
//           ["id", "name", "email", "phone"],
//         ],
//         kwargs: { limit: 1 },
//       },
//     };

//     const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: adminCookie,
//       },
//       body: JSON.stringify(searchPayload),
//     });

//     const searchData = await searchRes.json();
//     if (searchData.error) throw new Error(searchData.error.message);

//     const existing = searchData.result?.[0];

//     // ============================================
//     // ♻ REUSE IF FOUND
//     // ============================================

//    if (existing) {

//   // If phone is empty in Odoo → fix it
//   if (!existing.phone && !existing.mobile) {
//     await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: adminCookie,
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "write",
//           args: [[existing.id], { phone: cleanPhone }],
//           kwargs: {},
//         },
//       }),
//     });

//     console.log("📞 Fixed missing phone for:", existing.id);
//   }

//   console.log("♻ REUSING EXISTING CustomerId:", existing.id);

//   return NextResponse.json({
//     jsonrpc: "2.0",
//     result: [{
//       success: "True",
//       CustomerId: existing.id,
//       session_id: sessionId,
//       name: existing.name || name || cleanPhone,
//       phone: cleanPhone,
//       email: existing.email || "",
//     }],
//   });
// }


//     // ============================================
//     // 🆕 CREATE NEW CUSTOMER
//     // ============================================

//     console.log("🆕 Creating new customer for:", cleanPhone);

//     const createPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "create",
//         args: [[{
//           name: name || cleanPhone,
//           phone: cleanPhone,
//           email: email || "",
//         }]],
//         kwargs: {},
//       },
//     };

//     const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: adminCookie,
//       },
//       body: JSON.stringify(createPayload),
//     });

//     const createData = await createRes.json();
//     if (createData.error) throw new Error(createData.error.message);

//     const newId = createData.result;

//     console.log("✅ New Customer Created:", newId);

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         result: [
//           {
//             success: "True",
//             CustomerId: newId,
//             session_id: sessionId,
//             name: name || cleanPhone,
//             phone: cleanPhone,
//             email: email || "",
//           },
//         ],
//       },
//       {
//         status: 200,
//         headers: {
//           "Set-Cookie": adminCookie,
//         },
//       }
//     );

//   } catch (err) {
//     console.error("FATAL ERROR:", err.message);

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         error: { code: 500, message: err.message },
//       },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";

const ODOO = "https://payday.finsbee.com";

const ADMIN = {
  db: "finsbee",
  login: "finsbee@gmail.com",
  password: "Finsbee@123%4ujm",
};

// =======================================
// 🔐 LOGIN AS ADMIN
// =======================================
async function getAdminSession() {
  const res = await fetch(`${ODOO}/web/session/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: ADMIN,
    }),
  });

  if (!res.ok) throw new Error("Admin login failed");

  const setCookie = res.headers.get("set-cookie");
  if (!setCookie) throw new Error("No session cookie received");

  const sessionId = setCookie.split(";")[0].split("=")[1];

  return { cookie: setCookie, sessionId };
}

// =======================================
// 📞 NORMALIZE PHONE
// =======================================
function normalizePhone(phone) {
  if (!phone) return "";
  return phone.replace(/\D/g, "").slice(-10);
}

// =======================================
// 🚀 MAIN API
// =======================================
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email } = body?.params || {};

    const cleanPhone = normalizePhone(phone);

    if (!cleanPhone || cleanPhone.length !== 10) {
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          error: { code: 400, message: "Valid 10-digit phone required" },
        },
        { status: 400 }
      );
    }

    // 🔐 Admin Session
    const { cookie, sessionId } = await getAdminSession();

    // =======================================
    // 🔍 SEARCH EXISTING (phone OR mobile)
    // =======================================
    const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {
          model: "res.partner",
          method: "search_read",
          args: [
            [
              "|",
              ["phone", "ilike", cleanPhone],
              ["mobile", "ilike", cleanPhone],
            ],
            ["id", "name", "email", "phone", "mobile"],
          ],
          kwargs: { limit: 1 },
        },
      }),
    });

    const searchData = await searchRes.json();
    if (searchData.error) throw new Error(searchData.error.message);

    const existing = searchData.result?.[0];

    // =======================================
    // ♻ IF EXISTS
    // =======================================
    if (existing) {
      return NextResponse.json({
        jsonrpc: "2.0",
        result: [
          {
            success: "True",
            isExisting: true,
            message: "Customer already exists",
            CustomerId: existing.id,
            session_id: sessionId,
            name: existing.name || name || cleanPhone,
            phone: cleanPhone,
            email: existing.email || "",
          },
        ],
      });
    }

    // =======================================
    // 🆕 CREATE NEW CUSTOMER
    // =======================================
    const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {
          model: "res.partner",
          method: "create",
          args: [
            [
              {
                name: name || cleanPhone,
                phone: cleanPhone,
                mobile: cleanPhone,
                email: email || "",
              },
            ],
          ],
          kwargs: {},
        },
      }),
    });

    const createData = await createRes.json();
    if (createData.error) throw new Error(createData.error.message);

    const newId = createData.result;

    return NextResponse.json({
      jsonrpc: "2.0",
      result: [
        {
          success: "True",
          isExisting: false,
          message: "New customer created",
          CustomerId: newId,
          session_id: sessionId,
          name: name || cleanPhone,
          phone: cleanPhone,
          email: email || "",
        },
      ],
    });
  } catch (err) {
    console.error("API ERROR:", err.message);

    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: {
          code: 500,
          message: err.message || "Internal Server Error",
        },
      },
      { status: 500 }
    );
  }
}
