// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";

// const ADMIN = {
//   db: "finsbee",
//   login: "finsbee@gmail.com",
//   password: "Finsbee@123%4ujm",
// };

// // =======================================
// // 🔐 LOGIN AS ADMIN
// // =======================================
// async function getAdminSession() {
//   const res = await fetch(`${ODOO}/web/session/authenticate`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       jsonrpc: "2.0",
//       method: "call",
//       params: ADMIN,
//     }),
//   });

//   if (!res.ok) throw new Error("Admin login failed");

//   const setCookie = res.headers.get("set-cookie");
//   if (!setCookie) throw new Error("No session cookie received");

//   const sessionId = setCookie.split(";")[0].split("=")[1];

//   return { cookie: setCookie, sessionId };
// }

// // =======================================
// // 📞 NORMALIZE PHONE (10 DIGITS)
// // =======================================
// function normalizePhone(phone) {
//   if (!phone) return "";
//   return phone.replace(/\D/g, "").slice(-10);
// }

// // =======================================
// // 🚀 MAIN API
// // =======================================
// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, phone, email } = body?.params || {};

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

//     const { cookie, sessionId } = await getAdminSession();

//     // =======================================
//     // 🔍 STRICT SEARCH (NO ILIKE)
//     // =======================================
//     const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "search",
//           args: [
//             [
//               "|",
//               "|",
//               ["phone", "=", cleanPhone],
//               ["mobile", "=", cleanPhone],
//               ["phone", "=", "+91" + cleanPhone],
//             ],
//           ],
//           kwargs: { limit: 1 },
//         },
//       }),
//     });

//     const searchData = await searchRes.json();
//     if (searchData.error) throw new Error(searchData.error.message);

//     const existingId = searchData.result?.[0];

//     // =======================================
//     // ♻ IF EXISTS → READ & RETURN
//     // =======================================
//     if (existingId) {
//       const readRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookie,
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             model: "res.partner",
//             method: "read",
//             args: [[existingId], ["id", "name", "email"]],
//             kwargs: {},
//           },
//         }),
//       });

//       const readData = await readRes.json();
//       const existing = readData.result?.[0];

//       return NextResponse.json({
//         jsonrpc: "2.0",
//         result: [
//           {
//             success: "True",
//             isExisting: true,
//             message: "Customer already exists",
//             CustomerId: existingId,
//             session_id: sessionId,
//             name: existing?.name || name || cleanPhone,
//             phone: cleanPhone,
//             email: existing?.email || "",
//           },
//         ],
//       });
//     }

//     // =======================================
//     // 🆕 CREATE NEW CUSTOMER
//     // =======================================
//     const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "create",
//           args: [
//             [
//               {
//                 name: name || cleanPhone,
//                 phone: cleanPhone,
//                 mobile: cleanPhone,
//                 email: email || "",
//                 // source_id: "finsbee-website",
//               },
//             ],
//           ],
//           kwargs: {},
//         },
//       }),
//     });

//     const createData = await createRes.json();

//     // 🔥 Race condition protection
//     if (createData.error) {
//       // If create failed because duplicate inserted simultaneously
//       // Try searching again
//       const retrySearchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookie,
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             model: "res.partner",
//             method: "search",
//             args: [
//               [
//                 "|",
//                 ["phone", "=", cleanPhone],
//                 ["mobile", "=", cleanPhone],
//               ],
//             ],
//             kwargs: { limit: 1 },
//           },
//         }),
//       });

//       const retryData = await retrySearchRes.json();
//       const retryId = retryData.result?.[0];

//       if (retryId) {
//         return NextResponse.json({
//           jsonrpc: "2.0",
//           result: [
//             {
//               success: "True",
//               isExisting: true,
//               message: "Customer already exists (race handled)",
//               CustomerId: retryId,
//               session_id: sessionId,
//               name: name || cleanPhone,
//               phone: cleanPhone,
//               email: email || "",
//             },
//           ],
//         });
//       }

//       throw new Error(createData.error.message);
//     }

//     const newId = createData.result;

//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [
//         {
//           success: "True",
//           isExisting: false,
//           message: "New customer created",
//           CustomerId: newId,
//           session_id: sessionId,
//           name: name || cleanPhone,
//           phone: cleanPhone,
//           email: email || "",
//         },
//       ],
//     });
//   } catch (err) {
//     console.error("API ERROR:", err.message);

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         error: {
//           code: 500,
//           message: err.message || "Internal Server Error",
//         },
//       },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";

// const ADMIN = {
//   db: "finsbee",
//   login: "finsbee@gmail.com",
//   password: "Finsbee@123%4ujm",
// };

// // ===============================
// // 🔐 LOGIN AS ADMIN (SAFE)
// // ===============================
// async function getAdminSession() {
//   const res = await fetch(`${ODOO}/web/session/authenticate`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       jsonrpc: "2.0",
//       method: "call",
//       params: ADMIN,
//     }),
//   });

//   if (!res.ok) {
//     throw new Error("Admin authentication failed");
//   }

//   const setCookie = res.headers.get("set-cookie");
//   if (!setCookie) {
//     throw new Error("No session cookie received from Odoo");
//   }

//   const match = setCookie.match(/session_id=([^;]+)/);
//   if (!match) {
//     throw new Error("Session ID not found in cookie");
//   }

//   const sessionId = match[1];

//   return {
//     cookie: `session_id=${sessionId}`,
//     sessionId,
//   };
// }

// // ===============================
// // 📞 NORMALIZE PHONE
// // ===============================
// function normalizePhone(phone) {
//   if (!phone) return "";
//   return phone.replace(/\D/g, "").slice(-10);
// }

// // ===============================
// // 🚀 MAIN API
// // ===============================
// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, phone, source_id } = body?.params || {};

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

//     // 🔐 Authenticate with Odoo
//     const { cookie, sessionId } = await getAdminSession();

//     // ===============================
//     // 🔎 CHECK EXISTING CUSTOMER
//     // ===============================
//     const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "search",
//           args: [[["phone", "=", cleanPhone]]],
//           kwargs: { limit: 1 },
//         },
//       }),
//     });

//     const searchText = await searchRes.text();
//     if (!searchText) throw new Error("Empty search response from Odoo");

//     const searchData = JSON.parse(searchText);

//     if (searchData.error) {
//       throw new Error(searchData.error.message);
//     }

//     const existingId = searchData.result?.[0];

//     // ===============================
//     // ♻ IF EXISTS
//     // ===============================
//     if (existingId) {
//       return NextResponse.json({
//         jsonrpc: "2.0",
//         result: [
//           {
//             success: "True",
//             isExisting: true,
//             message: "Customer already exists",
//             CustomerId: existingId,
//             session_id: sessionId,
//             name: name || cleanPhone,
//             phone: cleanPhone,
//           },
//         ],
//       });
//     }

//     // ===============================
//     // 🆕 CREATE NEW CUSTOMER
//     // ===============================
//     const createRes = await fetch(`${ODOO}/api/create/customer`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify({
//         name: name || cleanPhone,
//         phone: cleanPhone,
//         source_id: source_id || "finsbee-website", // ✅ string source
//       }),
//     });

//     const createText = await createRes.text();
//     if (!createText) throw new Error("Empty create response from Odoo");

//     const createData = JSON.parse(createText);

//     const result = createData?.[0];

//     // if (!result?.CustomerId) {
//     //   throw new Error(result?.message || "Customer creation failed");
//     // }

//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [
//         {
//           success: result.success,
//           isExisting: false,
//           message: result.message,
//           CustomerId: result.CustomerId,
//           session_id: sessionId,
//           name: name || cleanPhone,
//           phone: cleanPhone,
//         },
//       ],
//     });

//   } catch (err) {
//     console.error("API ERROR:", err);

//     return NextResponse.json(
//       {
//         jsonrpc: "2.0",
//         error: {
//           code: 500,
//           message: err.message || "Internal Server Error",
//         },
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";

const ODOO = "https://dashboard.finsbee.com";

const ADMIN = {
  db: "finsbee",
  login: "finsbee@gmail.com",
  password: "Finsbee@123%4ujm",
};

// 🔐 ADMIN LOGIN
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

  if (!res.ok) throw new Error("Admin authentication failed");

  const setCookie = res.headers.get("set-cookie");
  const match = setCookie?.match(/session_id=([^;]+)/);

  if (!match) throw new Error("Session ID not found");

  return {
    cookie: `session_id=${match[1]}`,
    sessionId: match[1],
  };
}

// 📞 Normalize Phone
function normalizePhone(phone) {
  if (!phone) return "";
  return phone.replace(/\D/g, "").slice(-10);
}

export async function POST(request) {
  try {
    const body = await request.json();

    // ⚠️ Because frontend sends JSONRPC
    const { name, phone, source_id } = body?.params || {};

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

    const { cookie, sessionId } = await getAdminSession();

    // 🚀 CALL ODOO CONTROLLER (IMPORTANT: JSONRPC FORMAT)
    const createRes = await fetch(`${ODOO}/api/create/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {
          name: name || cleanPhone,
          phone: cleanPhone,
          source_id: source_id || "finsbee-website",
        },
      }),
    });

    const createData = await createRes.json();

    console.log("ODOO FULL RESPONSE:", createData);

    const result = createData?.result?.[0];

    if (!result?.CustomerId) {
      throw new Error(result?.message || "Customer creation failed");
    }

    return NextResponse.json({
      jsonrpc: "2.0",
      result: [
        {
          success: result.success,
          isExisting: result.success === "False",
          message: result.message,
          CustomerId: result.CustomerId,
          session_id: sessionId,
          name: name || cleanPhone,
          phone: cleanPhone,
        },
      ],
    });

  } catch (err) {
    console.error("API ERROR:", err);

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