


// // app/api/web/session/authenticate/route.js
// import axios from "axios";

// export async function POST(request) {
//   try {
//     // 1. Parse body safely
//     let body = {};
//     try {
//       body = await request.json();
//     } catch {
//       // keep empty
//     }

//     const {
//       db = "finsbee",
//       login = "finsbee@gmail.com",
//       password = "Finsbee@123%4ujm",
//     } = body;

//     // 2. Forward any existing cookie (important for logout-then-login)
//     const clientCookie = request.headers.get("cookie") || undefined;

//     // 3. Call Odoo
//     const odooRes = await axios.post(
//       "https://payday.finsbee.com/web/session/authenticate",
//       {
//         jsonrpc: "2.0",
//         method: "call",
//         params: { db, login, password },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           ...(clientCookie ? { Cookie: clientCookie } : {}),
//         },
//         // Let axios return the raw set-cookie headers
//         maxRedirects: 0,
//         validateStatus: (s) => s === 200,
//       }
//     );

//     // 4. Extract the new session cookie
//     const setCookieHeader = odooRes.headers["set-cookie"];
//     const newSessionCookie = Array.isArray(setCookieHeader)
//       ? setCookieHeader[0]
//       : setCookieHeader || null;

//     // 5. Build response
//     const responseBody = {
//       success: true,
//       message: "Odoo authentication successful",
//       // expose session_id & uid for Flutter (optional, safe)
//       session_id: odooRes.data.result?.session_id,
//       uid: odooRes.data.result?.uid,
//       result: odooRes.data,
//     };

//     const headers = new Headers({
//       "Content-Type": "application/json",
//     });

//     // 6. **Overwrite** any old cookie
//     if (newSessionCookie) {
//       headers.append("Set-Cookie", newSessionCookie);
//     }

//     // 7. (Optional but recommended) Clear old client-side data
//     // This forces the browser to drop localStorage, IndexedDB, etc.
//     headers.append("Clear-Site-Data", '"cookies", "storage"');

//     return new Response(JSON.stringify(responseBody), {
//       status: 200,
//       headers,
//     });
//   } catch (err) {
//     console.error("Authentication proxy error:", err.message);
//     return new Response(
//       JSON.stringify({ success: false, error: err.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }

// app/api/web/session/authenticate/route.js
import axios from "axios";

export async function POST(request) {
  try {
    let body = {};
    try {
      body = await request.json();
    } catch {}

    const {
      db = "finsbee",
      login = "finsbee@gmail.com",
      password = "Finsbee@123%4ujm",
    } = body;

    const clientCookie = request.headers.get("cookie") || undefined;

    const odooRes = await axios.post(
      "https://payday.finsbee.com/web/session/authenticate",
      {
        jsonrpc: "2.0",
        method: "call",
        params: { db, login, password },
      },
      {
        headers: {
          "Content-Type": "application/json",
          ...(clientCookie ? { Cookie: clientCookie } : {}),
        },
        validateStatus: (s) => s === 200,
      }
    );

    const setCookieHeader = odooRes.headers["set-cookie"];
    const newSessionCookie = Array.isArray(setCookieHeader)
      ? setCookieHeader[0]
      : setCookieHeader || null;

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (newSessionCookie) {
      headers.append("Set-Cookie", newSessionCookie);
    }

    return new Response(
      JSON.stringify({
        success: true,
        session_id: odooRes.data.result?.session_id,
        uid: odooRes.data.result?.uid,
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}


