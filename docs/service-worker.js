const CACHE_NAME = 'gym-tracker-v1.3.5';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache each asset independently: one slow/failed fetch (e.g. the
      // large index.html on a flaky connection) must not block install,
      // otherwise no service worker ever activates and the app stops
      // qualifying as an installable PWA.
      await Promise.all(ASSETS.map(async (url) => {
        try {
          const res = await fetch(url, { cache: 'no-cache' });
          if (res.ok) await cache.put(url, res);
        } catch (e) { /* ignore, will be fetched on demand */ }
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => cached);
    })
  );
});
