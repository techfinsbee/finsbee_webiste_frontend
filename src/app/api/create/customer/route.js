// // import { NextResponse } from 'next/server';

// // export async function OPTIONS() {
// //   // ✅ Allow preflight for browser/Flutter Web
// //   return new NextResponse(null, {
// //     status: 204,
// //     headers: {
// //       'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
// //       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
// //       'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie, Origin, Accept',
// //       'Access-Control-Allow-Credentials': 'true',
// //     },
// //   });
// // }

// // export async function POST(request) {
// //   console.log('✅ Hit create/customer route');
// //   const backendUrl =
// //     process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';
// //   const url = `${backendUrl}/create/customer`;

// //   try {
// //     const body = await request.json();
// //     const response = await fetch(url, {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(body),
// //     });

// //     const data = await response.text();
// //     return new NextResponse(data, { status: response.status });
// //   } catch (error) {
// //     console.error('❌ Error in create/customer:', error);
// //     return new NextResponse(
// //       JSON.stringify({ error: 'Failed to create customer', details: error.message }),
// //       { status: 500 }
// //     );
// //   }
// // }


// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';
//     const { name, phone, cookie } = await req.json();

//     const response = await fetch(`${backendUrl}/api/create/customer`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Cookie': cookie || '',
//       },
//       body: JSON.stringify({
//         jsonrpc: '2.0',
//         method: 'call',
//         params: { name, phone },
//       }),
//     });

//     const data = await response.json();
//     return NextResponse.json(data, { status: response.status });
//   } catch (err) {
//     console.error('❌ Error creating customer:', err);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const backendUrl = "https://dashboard.finsbee.com";

//   try {
//     const body = await request.json();
//     const { name, phone } = body.params || body;

//     // STEP 1: Login to Odoo
//     const loginResponse = await fetch(`${backendUrl}/web/session/authenticate`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           db: "finsbee", // ✅ your actual DB name
//           login: "finsbee@gmail.com",
//           password: "Finsbee@123%4ujm",
//         },
//       }),
//     });

//     // Capture cookie from login response
//     const cookie = loginResponse.headers.get("set-cookie");
//     if (!cookie) {
//       const loginData = await loginResponse.json().catch(() => ({}));
//       return NextResponse.json(
//         { error: "Odoo login failed", details: loginData },
//         { status: 401 }
//       );
//     }

//     // STEP 2: Call create customer API using the same cookie
//     const createResponse = await fetch(`${backendUrl}/api/create/customer`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify({
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           name,
//           phone,
//         },
//       }),
//     });

//     const text = await createResponse.text();
//     return new NextResponse(text, {
//       status: createResponse.status,
//       headers: {
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         "Access-Control-Allow-Credentials": "true",
//       },
//     });
//   } catch (error) {
//     console.error("❌ Error in create/customer route:", error);
//     return NextResponse.json(
//       { error: "Failed to create customer", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function OPTIONS() {
//   return new NextResponse(null, {
//     status: 204,
//     headers: {
//       "Access-Control-Allow-Origin": "http://localhost:3000",
//       "Access-Control-Allow-Credentials": "true",
//       "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//       "Access-Control-Allow-Headers":
//         "X-Requested-With, Content-Type, Authorization, Cookie, Origin, Accept",
//       "Access-Control-Expose-Headers": "Set-Cookie",
//     },
//   });
// }



// import axios from "axios";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { params } = body;

//     // Step 1: Authenticate to get Odoo session cookie
//     const authResponse = await axios.post(
//       "https://dashboard.finsbee.com/web/session/authenticate",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           db: "finsbee",
//           login: "finsbee@gmail.com",
//           password: "Finsbee@123%4ujm",
//         },
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     const cookie = authResponse.headers["set-cookie"]?.[0];
//     if (!cookie) {
//       return new Response(
//         JSON.stringify({ error: "Authentication failed: No cookie found" }),
//         { status: 401 }
//       );
//     }

//     // Step 2: Create Customer
//     const customerResponse = await axios.post(
//       "https://dashboard.finsbee.com/api/create/customer",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookie,
//         },
//       }
//     );

//     return new Response(JSON.stringify(customerResponse.data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error in flutterapi/create/customer:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }


// import axios from "axios";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { params } = body;

//     // Step 1: Authenticate to get Odoo session cookie
//     const authResponse = await axios.post(
//       "https://dashboard.finsbee.com/web/session/authenticate",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           db: "finsbee",
//           login: "finsbee@gmail.com",
//           password: "Finsbee@123%4ujm",
//         },
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     const cookie = authResponse.headers["set-cookie"]?.[0];

//     // ✅ Log cookie in terminal for debugging
//     console.log("🟢 Odoo Session Cookie:", cookie);

//     if (!cookie) {
//       console.error("❌ Authentication failed: No cookie found");
//       return new Response(
//         JSON.stringify({ error: "Authentication failed: No cookie found" }),
//         { status: 401 }
//       );
//     }

//     // Step 2: Create Customer
//     const customerResponse = await axios.post(
//       "https://dashboard.finsbee.com/api/create/customer",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookie,
//         },
//       }
//     );

//     return new Response(
//       JSON.stringify({
//         ...customerResponse.data,
//         cookie: cookie, // ✅ also return cookie in response if needed
//       }),
//       {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("❌ Error in flutterapi/create/customer:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }

// app/api/flutterapi/create/customer/route.js
// import axios from "axios";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, phone, email } = body;

//     // Step 1: Authenticate with Odoo
//     const authResponse = await axios.post(
//       "https://dashboard.finsbee.com/web/session/authenticate",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           db: "finsbee",
//           login: "finsbee@gmail.com",
//           password: "Finsbee@123%4ujm",
//         },
//       },
//       { headers: { "Content-Type": "application/json" } }
//     );

//     const cookie = authResponse.headers["set-cookie"]?.[0];
//     if (!cookie) throw new Error("Authentication failed: No session cookie found");

//     // Step 2: Create customer
//     const createResponse = await axios.post(
//       "https://dashboard.finsbee.com/jsonrpc",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "create",
//           args: [
//             {
//               name,
//               phone,
//               email,
//             },
//           ],
//           kwargs: {},
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: cookie,
//         },
//       }
//     );

//     return new Response(
//       JSON.stringify({
//         success: true,
//         result: createResponse.data,
//         cookie, // Return for re-use in /profile
//       }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error("❌ Error creating customer:", error.message);
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// app/api/flutterapi/create/customer/route.js
// import axios from "axios";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { params } = body;
//     const { name, phone, email } = params || {};

//     if (!name || !phone) {
//       return new Response(
//         JSON.stringify({
//           jsonrpc: "2.0",
//           result: [{ success: "False", message: "Missing name or phone" }],
//         }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // 🔹 Step 1: Extract existing session cookie (if Flutter already has one)
//     let sessionCookie = req.headers.get("cookie");
//     if (!sessionCookie || !sessionCookie.includes("session_id")) {
//       console.log("🔐 No valid session cookie, authenticating with Odoo...");
//       const authResponse = await axios.post(
//         "https://dashboard.finsbee.com/web/session/authenticate",
//         {
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             db: "finsbee",
//             login: "finsbee@gmail.com",
//             password: "Finsbee@123%4ujm",
//           },
//         },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       sessionCookie = authResponse.headers["set-cookie"]?.[0];
//       if (!sessionCookie) throw new Error("Authentication failed: No cookie");
//       console.log("🟢 Authenticated. Cookie:", sessionCookie);
//     }

//     // Extract pure session_id value
//     const sessionId = sessionCookie.match(/session_id=([^;]+)/)?.[1] || null;

//     // 🔹 Step 2: Create customer in Odoo
//     console.log("👤 Creating customer:", name, phone);
//     const createResponse = await axios.post(
//       "https://dashboard.finsbee.com/jsonrpc",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "create",
//           args: [
//             {
//               name,
//               phone,
//               email: email || `${phone}@example.com`,
//             },
//           ],
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: sessionCookie,
//         },
//       }
//     );

//     const createdId = createResponse.data?.result;
//     if (!createdId)
//       throw new Error("Customer creation failed — no ID returned.");

//     // 🔹 Step 3: Return structured response Flutter expects
//     const responsePayload = {
//       jsonrpc: "2.0",
//       result: [
//         {
//           success: "True",
//           message: "Customer created successfully",
//           CustomerId: createdId,
//           session_id: sessionId,
//         },
//       ],
//     };

//     console.log("✅ Returning response:", responsePayload);

//     return new Response(JSON.stringify(responsePayload), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Set-Cookie": sessionCookie, // allows persistence on Flutter’s next request
//       },
//     });
//   } catch (error) {
//     console.error("❌ Error creating customer:", error);
//     return new Response(
//       JSON.stringify({
//         jsonrpc: "2.0",
//         result: [
//           {
//             success: "False",
//             message: error.message || "Internal Server Error",
//           },
//         ],
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }


// // app/api/create/customer/route.js
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// const BACKEND_URL = 'https://dashboard.finsbee.com';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { params } = body;
//     const { name, phone, email } = params || {};

//     if (!name || !phone) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", result: [{ success: "False", message: "Missing name or phone" }] },
//         { status: 400 }
//       );
//     }

//     let sessionCookie = request.headers.get('cookie');
//     let sessionId = null;

//     if (!sessionCookie || !sessionCookie.includes('session_id')) {
//       console.log("Authenticating...");
//       const authRes = await axios.post(
//         `${BACKEND_URL}/web/session/authenticate`,
//         {
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             db: "finsbee",
//             login: "finsbee@gmail.com",
//             password: "Finsbee@123%4ujm",
//           },
//         },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const setCookie = authRes.headers['set-cookie']?.[0];
//       if (!setCookie) throw new Error("Auth failed");
//       sessionCookie = setCookie;
//       sessionId = setCookie.match(/session_id=([^;]+)/)?.[1];
//       console.log("New session:", sessionId);
//     } else {
//       sessionId = sessionCookie.match(/session_id=([^;]+)/)?.[1];
//       console.log("Reusing session:", sessionId);
//     }

//     const customerId = Math.floor(100000 + Math.random() * 900000);

//     const payload = {
//       jsonrpc: "2.0",
//       result: [{
//         success: "True",
//         CustomerId: customerId,
//         session_id: sessionId,
//         name,
//         phone,
//         email: email || `${phone}@example.com`,
//       }],
//     };

//     createInBackground(name, phone, email, sessionCookie);

//     return NextResponse.json(payload, {
//       headers: {
//         'Set-Cookie': `session_id=${sessionId}; Path=/; HttpOnly; Secure; SameSite=None`,
//       },
//     });

//   } catch (error) {
//     console.error("Error:", error.message);
//     return NextResponse.json({
//       jsonrpc: "2.0",
//       result: [{
//         success: "True",
//         CustomerId: 999999,
//         session_id: "fallback_" + Date.now(),
//         name: "User",
//         phone: "0000000000",
//         email: "fallback@example.com",
//       }],
//     });
//   }
// }

// async function createInBackground(name, phone, email, cookie) {
//   try {
//     await axios.post(
//       `${BACKEND_URL}/jsonrpc`,
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: {
//           model: "res.partner",
//           method: "create",
//           args: [{ name, phone, email: email || `${phone}@example.com` }],
//         },
//       },
//       { headers: { "Content-Type": "application/json", Cookie: cookie } }
//     );
//   } catch (e) {
//     console.log("Background create failed:", e.message);
//   }
// }

// // app/api/create/customer/route.js
// import { NextResponse } from "next/server";

// const ODOO = "https://dashboard.finsbee.com";
// const ADMIN = {
//   db: "finsbee",
//   login: "finsbee@gmail.com",
//   password: "Finsbee@123%4ujm",
// };

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, phone, email } = body.params || {};

//     if (!name || !phone) {
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 400, message: "name and phone required" } },
//         { status: 400 }
//       );
//     }

//     let cookie = request.headers.get("cookie") || "";
//     let sessionId = cookie.match(/session_id=([^;]+)/)?.[1];

//     // ——— AUTO LOGIN ———
//     if (!sessionId) {
//       const loginRes = await fetch(`${ODOO}/web/session/authenticate`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: ADMIN }),
//       });

//       const setCookie = loginRes.headers.get("set-cookie");
//       if (!setCookie) throw new Error("Login failed: no cookie");

//       cookie = setCookie;
//       sessionId = setCookie.split(";")[0].split("=")[1];
//     }

//     // ——— CREATE PARTNER ———
//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "create",
//         args: [[
//           {
//             name,
//             phone,
//             email: email || `${phone}@example.com`,
//           }
//         ]],
//         kwargs: {}  // ← REQUIRED IN ODOO 18
//       },
//     };

//     console.log("CREATE PAYLOAD:", JSON.stringify(payload, null, 2));

//     const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: cookie,
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await createRes.json();
//     const partnerId = data.result?.[0];

//     if (!partnerId) {
//       console.error("ODOO CREATE FAILED:", data);
//       throw new Error(`Odoo create failed: ${JSON.stringify(data.error || data)}`);
//     }

//     // ——— SUCCESS ———
//     const headers = new Headers({ "Content-Type": "application/json" });
//     const finalCookie = createRes.headers.get("set-cookie") || cookie;
//     headers.set("Set-Cookie", finalCookie);

//     return new Response(
//       JSON.stringify({
//         jsonrpc: "2.0",
//         result: [{
//           success: "True",
//           CustomerId: partnerId,
//           session_id: sessionId,
//           name,
//           phone,
//           email: email || `${phone}@example.com`,
//         }],
//       }),
//       { status: 200, headers }
//     );
//   } catch (err) {
//       console.error("CREATE ERROR:", err.message);
//       return NextResponse.json(
//         { jsonrpc: "2.0", error: { code: 500, message: err.message } },
//         { status: 500 }
//       );
//   }
// }

// // app/api/create/customer/route.js
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

//   if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);

//   const setCookie = loginRes.headers.get("set-cookie");
//   if (!setCookie) throw new Error("No session cookie from login");

//   return setCookie;
// }

// export async function POST(request) {
//   let adminCookie;
//   let sessionId;

//   try {
//     const body = await request.json();
//     const { name, phone, email } = body.params || {};

//    if (!phone || !/^\d{10}$/.test(phone)) {
//   return NextResponse.json(
//     { jsonrpc: "2.0", error: { code: 400, message: "Valid 10-digit phone required" } },
//     { status: 400 }
//   );
// }
//     // GET ADMIN SESSION
//     adminCookie = await getAdminSession();
//     sessionId = adminCookie.split(";")[0].split("=")[1];

//     // SEARCH
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
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: adminCookie,
//       },
//       body: JSON.stringify(searchPayload),
//     });

//     const searchData = await searchRes.json();

//     if (searchData.error) {
//       console.error("SEARCH ERROR:", searchData.error);
//       throw new Error(searchData.error.message);
//     }

//     const existing = searchData.result?.[0];

//     if (existing) {
//       console.log(`REUSING CUSTOMER: ${existing.id}`);

//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           result: [{
//             success: "True",
//             CustomerId: existing.id,
//             session_id: sessionId,
//             name: existing.name || name || phone,
//             phone,
//             email: existing.email || `${phone}@example.com`,
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

//     // CREATE NEW
//     console.log(`CREATING NEW FOR: ${phone}`);

//     const createPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "create",
//         args: [[{
//           name: name || phone,
//           phone,
//           email: email || `${phone}@example.com`,
//           customer_rank: 1,
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

//     if (createData.error) {
//       console.error("CREATE ERROR:", createData.error);
//       throw new Error(createData.error.message);
//     }

//     if (!Array.isArray(createData.result) || createData.result.length === 0) {
//       throw new Error("Create failed: no ID returned");
//     }

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
//           email: email || `${phone}@example.com`,
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
//       {
//         jsonrpc: "2.0",
//         error: { code: 500, message: err.message || "Internal server error" },
//       },
//       { status: 500 }
//     );
//   }
// }


// // app/api/create/customer/route.js
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

//     // SEARCH
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
//       console.log(`REUSING: ${existing.id}`);
//       return NextResponse.json(
//         {
//           jsonrpc: "2.0",
//           result: [{
//             success: "True",
//             CustomerId: existing.id,
//             session_id: sessionId,
//             name: existing.name || name || phone,
//             phone,
//             email: existing.email || email || `${phone}@example.com`,
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

//     // CREATE — NO customer_rank!
//     console.log(`CREATING NEW: ${phone}`);
//     const createPayload = {
//       jsonrpc: "2.0",
//       method: "call",
//       params: {
//         model: "res.partner",
//         method: "create",
//         args: [[{
//           name: name || phone,
//           phone,
//           // email: email || `${phone}@example.com`,
//           // customer_rank: 1 → REMOVED
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

//     if (!createData.result?.[0]) throw new Error("Create failed: no ID");

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
//           email: email || `${phone}@example.com`,
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



// app/api/create/customer/route.js
import { NextResponse } from "next/server";

const ODOO = "https://payday.finsbee.com";
const ADMIN = {
  db: "finsbee",
  login: "finsbee@gmail.com",
  password: "Finsbee@123%4ujm",
};

async function getAdminSession() {
  const loginRes = await fetch(`${ODOO}/web/session/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: ADMIN }),
  });

  if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.status}`);
  const setCookie = loginRes.headers.get("set-cookie");
  if (!setCookie) throw new Error("No session cookie");
  return setCookie;
}

export async function POST(request) {
  let adminCookie, sessionId;

  try {
    const body = await request.json();
    const { name, phone, email } = body.params || {};

    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { jsonrpc: "2.0", error: { code: 400, message: "Valid 10-digit phone required" } },
        { status: 400 }
      );
    }

    adminCookie = await getAdminSession();
    sessionId = adminCookie.split(";")[0].split("=")[1];

    // === SEARCH EXISTING CUSTOMER ===
    const searchPayload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "res.partner",
        method: "search_read",
        args: [[["phone", "=", phone]], ["id", "name", "email"]],
        kwargs: { limit: 1 },
      },
    };

    const searchRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: adminCookie },
      body: JSON.stringify(searchPayload),
    });

    const searchData = await searchRes.json();
    if (searchData.error) throw new Error(searchData.error.message);

    const existing = searchData.result?.[0];

    if (existing) {
      console.log(`REUSING EXISTING CustomerId: ${existing.id}`);
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          result: [{
            success: "True",
            CustomerId: existing.id,
            session_id: sessionId,
            name: existing.name || name || phone,
            phone,
            email: existing.email || "", // ← Real email if exists
          }],
        },
        {
          status: 200,
          headers: {
            "Set-Cookie": adminCookie,
            "Access-Control-Allow-Origin": "https://finsbee.com",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
    }

    // === CREATE NEW CUSTOMER (NO EMAIL) ===
    console.log(`CREATING NEW Customer for: ${phone}`);
    const createPayload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "res.partner",
        method: "create",
        args: [[{
          name: name || phone,
          phone,
          // DO NOT SET EMAIL → Flutter detects as NEW
        }]],
        kwargs: {},
      },
    };

    const createRes = await fetch(`${ODOO}/web/dataset/call_kw`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: adminCookie },
      body: JSON.stringify(createPayload),
    });

    const createData = await createRes.json();
    if (createData.error) {
      console.error("CREATE ERROR:", createData.error);
      throw new Error(createData.error.message);
    }

    if (!createData.result?.[0]) throw new Error("Create failed: no ID returned");

    const newId = createData.result[0];

    return NextResponse.json(
      {
        jsonrpc: "2.0",
        result: [{
          success: "True",
          CustomerId: newId,
          session_id: sessionId,
          name: name || phone,
          phone,
          email: "", // ← EMPTY → Flutter opens UserRegistrationScreen
        }],
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": adminCookie,
          "Access-Control-Allow-Origin": "https://finsbee.com",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );

  } catch (err) {
    console.error("FATAL ERROR:", err.message);
    return NextResponse.json(
      { jsonrpc: "2.0", error: { code: 500, message: err.message } },
      { status: 500 }
    );
  }
}