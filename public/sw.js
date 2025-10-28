// public/sw.js
self.addEventListener('install', (event) => {
  console.log('SW: install');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW: activate');
  event.waitUntil(self.clients.claim());
});

// Intercept 2Factor API requests and route via Next.js proxy
self.addEventListener('fetch', (event) => {
  try {
    const req = event.request;
    const reqUrl = new URL(req.url);

    // Debug logs visible in Chrome DevTools -> Application -> Service Workers
    console.log('SW: fetch for', reqUrl.href);

    // Intercept only 2Factor API calls
    if (reqUrl.hostname === '2factor.in' && reqUrl.pathname.startsWith('/API/V1')) {
      console.log('SW: intercepting 2factor request:', reqUrl.href);

      // Proxy through Next.js API route
      const proxyUrl = `/api/2factor-proxy?url=${encodeURIComponent(reqUrl.href)}`;

      event.respondWith(
        fetch(proxyUrl, {
          method: req.method,
          headers: req.headers,
        })
          .then((resp) => {
            console.log('SW: proxied response status', resp.status);
            return resp;
          })
          .catch((err) => {
            console.error('SW: proxy fetch failed', err);
            return new Response(JSON.stringify({ error: 'Service Worker proxy failed' }), {
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
