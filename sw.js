/**
 * VantorKit — Production-Grade PWA Service Worker
 * Strategy: Strict Network-First (with Offline Fallback)
 * Zero Stale Cache Traps • Privacy First • 100% CSP Compliant
 */

const CACHE_NAME = 'vantorkit-cache-v1.4';

// Core shell pre-cache manifest only
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/sidebar.css',
  '/sidebar.js',
  '/i18n-bootstrap.js',
  '/consent.js',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/assets/fazier-badge.svg',
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/terms.html'
];

// Install Event: Pre-cache critical shell assets & activate immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch((err) => {
            console.warn(`[SW] Pre-cache skipped for ${url}:`, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate Event: Purge old cache versions and claim all open tabs/clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => {
          console.log('[SW] Purging stale cache:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Strict Network-First with Offline Fallback
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (!req || !req.url) return;

  // 1. Immediately bypass non-HTTP schemes (blob:, data:, etc.) so they are never intercepted
  if (
    req.url.startsWith('blob:') ||
    req.url.startsWith('data:') ||
    !req.url.startsWith('http')
  ) {
    return;
  }

  // 2. Only intercept GET requests
  if (req.method !== 'GET') return;

  // 3. Only intercept same-origin requests (never intercept cross-origin Fonts, CDNs, or GA4 telemetry)
  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }
  if (url.origin !== self.location.origin) {
    return;
  }

  // 4. Bypass Range requests (audio/video streaming) to prevent 206 Partial Content cache errors
  if (req.headers && req.headers.has('range')) {
    return;
  }

  // 5. Strict Network-First Strategy
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        // Cache valid standard responses (200 OK) dynamically
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseClone).catch(() => {});
          }).catch(() => {});
        }
        // Return clean network response (including 404, etc.) without error
        return networkResponse;
      })
      .catch(async () => {
        try {
          // Network unavailable (offline mode)
          const cachedResponse = await caches.match(req);
          if (cachedResponse) {
            return cachedResponse;
          }

          // Navigation requests (HTML page): try with .html extension or fallback to index.html
          if (req.mode === 'navigate') {
            if (!url.pathname.endsWith('.html')) {
              const htmlAlt = await caches.match(url.pathname + '.html');
              if (htmlAlt) return htmlAlt;
            }
            const fallback = (await caches.match('/index.html')) || (await caches.match('/'));
            if (fallback) return fallback;
          }
        } catch (e) {
          // Fall through to offline response
        }

        // Clean offline fallback response for uncached resources
        return new Response('Offline — Resource unavailable offline.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
        });
      })
  );
});
