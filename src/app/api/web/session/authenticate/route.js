import { NextResponse } from 'next/server';

export async function POST(request) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dashboard.finsbee.com';
  const url = `${backendUrl}/web/session/authenticate`;

  try {
    const body = await request.json();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.text();
    // Forward Set-Cookie header if present
    const setCookie = response.headers.get('set-cookie');
    const headers = {};
    if (setCookie) headers['set-cookie'] = setCookie;

    return new NextResponse(data, { status: response.status, headers });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to authenticate', details: error.message }), { status: 500 });
  }
}