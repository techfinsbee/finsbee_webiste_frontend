// public/sw.js
self.addEventListener('install', (event) => {
  console.log('SW: install');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW: activate');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  try {
    const req = event.request;
    const reqUrl = new URL(req.url);

    console.log('SW: fetch for', reqUrl.href);

    // 🧩 1. Intercept 2Factor API calls
    if (reqUrl.hostname === '2factor.in' && reqUrl.pathname.startsWith('/API/V1')) {
      console.log('SW: intercepting 2factor request:', reqUrl.href);
      const proxyUrl = `/api/2factor-proxy?url=${encodeURIComponent(reqUrl.href)}`;
      event.respondWith(fetch(proxyUrl, { method: req.method, headers: req.headers }));
      return;
    }

    // 🧩 2. Intercept dashboard.finsbee.com API calls (for Flutter web)
    if (reqUrl.hostname === 'dashboard.finsbee.com' && reqUrl.pathname.startsWith('/api/')) {
      console.log('SW: intercepting dashboard request:', reqUrl.href);
      const proxyUrl = `/api/flutterapi${reqUrl.pathname.replace(/^\/api/, '')}`;
      event.respondWith(
        fetch(proxyUrl, {
          method: req.method,
          headers: req.headers,
          body: req.method !== 'GET' ? req.body : undefined,
        }).then((resp) => {
          console.log('SW: dashboard proxy response status', resp.status);
          return resp;
        }).catch((err) => {
          console.error('SW: dashboard proxy failed', err);
          return new Response(JSON.stringify({ error: 'Flutter proxy failed' }), {
            status: 502,
            headers: { 'Content-Type': 'application/json' },
          });
        })
      );
      return;
    }

  } catch (err) {
    console.error('SW: fetch handler error', err);
  }
});
