// app/api/customer/loan/route.js
import { NextResponse } from 'next/server';

const sessionLoanMap = new Map();

export async function POST(request) {
  try {
    const body = await request.json();
    const cookieHeader = request.headers.get('cookie') || '';
    const sessionId = cookieHeader.match(/session_id=([^;]+)/)?.[1];

    if (!sessionId) return errorResponse('Login required', 401);

    let params = { ...body.params };

    // GENDER: Male → male
    if (params.gender) {
      if (['Male', 'M'].includes(params.gender)) params.gender = 'male';
      else if (['Female', 'F'].includes(params.gender)) params.gender = 'female';
    }

    // AUTO-FILL LoanID
    if (!params.LoanID && sessionLoanMap.has(sessionId)) {
      params.LoanID = sessionLoanMap.get(sessionId);
      console.log(`Auto-filled LoanID: ${params.LoanID}`);
    }

    const payload = { ...body, params };

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://payday.finsbee.com';
    const targetUrl = `${backendUrl}/api/customer/loan`;

    const odooRes = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
      body: JSON.stringify(payload),
    });

    const text = await odooRes.text();

    if (!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
      return errorResponse('Invalid response', 502, sessionId);
    }

    const data = JSON.parse(text);

    // STORE LoanID
    if (data.result?.[0]?.LoanID && !body.params.LoanID) {
      sessionLoanMap.set(sessionId, data.result[0].LoanID);
    }

    return NextResponse.json(data, { status: odooRes.status });

  } catch (err) {
    console.error('Proxy error:', err);
    const sessionId = request.headers.get('cookie')?.match(/session_id=([^;]+)/)?.[1];
    return errorResponse(err.message || 'Server error', 500, sessionId);
  }
}

function errorResponse(message, status, sessionId = null) {
  return NextResponse.json(
    { jsonrpc: "2.0", result: [{ success: "False", message, session_id: sessionId }] },
    { status }
  );
}