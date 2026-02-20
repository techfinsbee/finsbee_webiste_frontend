

// // app/api/customer/loan/route.js
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const cookieHeader = request.headers.get('cookie') || '';
//     const sessionId = cookieHeader.match(/session_id=([^;]+)/)?.[1];

//     if (!sessionId) return errorResponse('Login required', 401);

//     let params = { ...body.params };

//     // Normalize gender
//     if (params.gender) {
//       if (['Male', 'M'].includes(params.gender)) params.gender = 'male';
//       else if (['Female', 'F'].includes(params.gender)) params.gender = 'female';
//     }

//     const payload = { ...body, params };

//     const backendUrl =
//       process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';

//     const targetUrl = `${backendUrl}/api/customer/loan`;

//     const odooRes = await fetch(targetUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Cookie': cookieHeader,
//       },
//       body: JSON.stringify(payload),
//     });

//     const text = await odooRes.text();

//     if (!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
//       return errorResponse('Invalid response', 502);
//     }

//     const data = JSON.parse(text);

//     return NextResponse.json(data, { status: odooRes.status });

//   } catch (err) {
//     console.error('Proxy error:', err);
//     return errorResponse(err.message || 'Server error', 500);
//   }
// }

// function errorResponse(message, status) {
//   return NextResponse.json(
//     {
//       jsonrpc: "2.0",
//       result: [{ success: "False", message }]
//     },
//     { status }
//   );
// }

import { NextResponse } from "next/server";

/*
  Store LoanID per:
  session_id + Loan_Type
*/
const loanMap = new Map();

export async function POST(request) {
  try {
    const body = await request.json();
    const cookieHeader = request.headers.get("cookie") || "";
    const sessionId = cookieHeader.match(/session_id=([^;]+)/)?.[1];

    if (!sessionId) {
      return errorResponse("Login required", 401);
    }

    let params = { ...body.params };

    // Normalize gender
    if (params.gender) {
      if (["Male", "M"].includes(params.gender)) params.gender = "male";
      else if (["Female", "F"].includes(params.gender)) params.gender = "female";
    }

    const loanType = params.Loan_Type || "UNKNOWN";
    const mapKey = `${sessionId}_${loanType}`;

    // ===================================================
    // 🔁 REUSE EXISTING LoanID IF SAME LOAN TYPE
    // ===================================================

    if (!params.LoanID && loanMap.has(mapKey)) {
      params.LoanID = loanMap.get(mapKey);
      console.log("♻️ Reusing LoanID:", params.LoanID);
    }

    const payload = { ...body, params };

    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://dashboard.finsbee.com";

    const targetUrl = `${backendUrl}/api/customer/loan`;

    const odooRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
      body: JSON.stringify(payload),
    });

    const text = await odooRes.text();

    if (!text.trim().startsWith("{") && !text.trim().startsWith("[")) {
      return errorResponse("Invalid response from backend", 502);
    }

    const data = JSON.parse(text);

    // ===================================================
    // 🆕 STORE LoanID ONLY IF NEWLY CREATED
    // ===================================================

    const result = data?.result?.[0];

    if (result?.LoanID && !params.LoanID) {
      loanMap.set(mapKey, result.LoanID);
      console.log("🆕 Stored LoanID:", result.LoanID);
    }

    return NextResponse.json(data, { status: odooRes.status });

  } catch (err) {
    console.error("Proxy error:", err);
    return errorResponse(err.message || "Server error", 500);
  }
}

function errorResponse(message, status) {
  return NextResponse.json(
    {
      jsonrpc: "2.0",
      result: [{ success: "False", message }],
    },
    { status }
  );
}
