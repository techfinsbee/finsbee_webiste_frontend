import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const target = req.nextUrl.searchParams.get('target');

  if (!target) {
    return NextResponse.json({ error: 'Missing target URL' }, { status: 400 });
  }

  try {
    console.log('🔁 Proxying request to:', target);

    // Force disable redirects so we control all CORS from Next.js
    const res = await fetch(target, {
      method: 'GET',
      redirect: 'manual', 
      headers: {
        'User-Agent': 'Next.js-Proxy',
        'Accept': 'application/json,text/plain,*/*',
      },
      cache: 'no-store',
    });

    // Handle redirect (2Factor does this sometimes)
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      const redirectedUrl = res.headers.get('location');
      console.log('🔄 Following redirect to:', redirectedUrl);
      return await GET({
        nextUrl: new URL(`${req.nextUrl.origin}/api/2factor-proxy?target=${encodeURIComponent(redirectedUrl)}`),
      });
    }
   

    // Read raw response (text or json)
    const contentType = res.headers.get('content-type') || 'text/plain';
    const text = await res.text();

    return new NextResponse(text, {
      status: res.status,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('❌ Proxy error:', err);
    return NextResponse.json(
      { error: 'Proxy failed', details: err.message },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
