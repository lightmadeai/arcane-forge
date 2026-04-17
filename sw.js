// Arcane Forge — Service Worker
// Cache-first strategy with network fallback + background refresh

const CACHE  = 'arcane-forge-v2';
const PRECACHE = [
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
];

// ── Install: pre-cache core app shell ────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      // addAll fails if any resource 404s; use individual adds so missing
      // icons don't break the install before they're generated.
      return Promise.allSettled(
        PRECACHE.map(url => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: claim clients, prune old caches ─────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, then network; cache successful responses ──
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(response => {
        // Cache successful same-origin and CDN responses
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => null);

      // Return cached immediately; fetch in background to refresh
      return cached || networkFetch;
    })
  );
});
