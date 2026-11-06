/**
 * VantorKit — Production-Grade PWA Service Worker
 * Strategy: Strict Network-First (with Offline Fallback)
 * Zero Stale Cache Traps • Privacy First • 100% CSP Compliant
 */

const CACHE_NAME = 'vantorkit-cache-v1.3';

// Synchronized pre-cache manifest: core shell, legal pages, blog resources, and 32 active tools
const PRECACHE_ASSETS = [
  // Core Shell & Static Assets
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/sidebar.css',
  '/sidebar.js',
  '/i18n-bootstrap.js',
  '/js/gtag-init.js',
  '/js/index.js',
  '/assets/fazier-badge.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',

  // Legal & Transparency Pages
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/terms.html',

  // Blog Resources
  '/blog/index.html',
  '/blog/blog.js',
  '/blog/feed.xml',
  '/blog/how-to-redact-pdf-locally.html',
  '/blog/why-metadata-stripping-fails.html',
  '/blog/client-side-big-data-processing.html',
  '/blog/how-to-trim-mp4-locally.html',
  '/blog/how-to-verify-jwt-in-memory.html',
  '/blog/how-i-built-33-tools-zero-backend.html',

  // Active 32 Live Tools (Canonical /tools/ paths)
  '/tools/percentage-calculator.html',
  '/tools/compound-interest.html',
  '/tools/loan-calculator.html',
  '/tools/discount-tax-calculator.html',
  '/tools/gpa-calculator.html',
  '/tools/csv-json-converter.html',
  '/tools/pdf-merge.html',
  '/tools/pdf-split.html',
  '/tools/pdf-to-word.html',
  '/tools/base64-file-encoder.html',
  '/tools/audio-trimmer.html',
  '/tools/video-trimmer.html',
  '/tools/color-palette-extractor.html',
  '/tools/svg-to-png.html',
  '/tools/image-resizer.html',
  '/tools/image-to-base64.html',
  '/tools/image-compressor.html',
  '/tools/favicon-builder.html',
  '/tools/date-difference.html',
  '/tools/qr-generator.html',
  '/tools/age-calculator.html',
  '/tools/password-generator.html',
  '/tools/timezone-planner.html',
  '/tools/word-counter.html',
  '/tools/markdown-editor.html',
  '/tools/case-converter.html',
  '/tools/text-diff.html',
  '/tools/metadata-cleaner.html',
  '/tools/jwt-decoder.html',
  '/tools/pdf-redactor.html',
  '/tools/big-data-transformer.html',
  '/tools/css-grid-generator.html'
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
