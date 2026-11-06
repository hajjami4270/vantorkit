# VantorKit — Privacy/Consent Accuracy & Security Hardening Report

**Branch:** `fix/privacy-security` (branched from `main` at `3a2b6ba`)  
**Target Production Domain:** `https://vantorkit.com`  
**Status:** All 5 items implemented and verified (`32/32` visible tools PASS, `0` console errors, `0` page errors, `0` CSP violations, `0` SRI mismatches).

---

## STEP 0 — BASELINE (Read-Only on `main` @ `3a2b6ba`)

- **Baseline Artifact:** Saved to `scratch/privacy_baseline.json` with 390px EN + AR screenshots in `scratch/screenshots/privacy_step0_*.png`.
- **32 Visible Tools Smoke Test:** `32/32 PASS` (`0` console errors, `0` page errors, `0` CSP violations).
- **Pre-Fix Analytics Network & Cookie Behavior (Before Any User Interaction):**
  - On `/index.html` and 26 visible tool pages (plus `tools/auto-captions.html`, 28 pages total), Google Analytics 4 (`G-S8MDMH082N`) fired immediately on initial page load before any user interaction:
    ```text
    GET  https://www.googletagmanager.com/gtag/js?id=G-S8MDMH082N   [Script]
    GET  http://127.0.0.1:9450/gtag-init.js                         [Script]
    POST https://www.google-analytics.com/g/collect?v=2&tid=G-S8MDMH082N...&en=page_view  [Fetch/Ping]
    ```
  - **Cookies set immediately before interaction:**
    - `_ga` (2-year client identifier)
    - `_ga_S8MDMH082N` (GA4 session state identifier)
  - **Pages without GA4 (17 pages):** `tools/jwt-decoder.html`, `tools/pdf-redactor.html`, `tools/metadata-cleaner.html`, `tools/big-data-transformer.html`, `tools/css-grid-generator.html`, `tools/video-trimmer.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`, `blog/index.html`, and all 6 blog article pages.

---

## ITEM 1 — Privacy Policy & Consent Gate

### 1a) Shared Consent Gate (`/consent.js`)
- Created `/consent.js` and replaced the 2 `gtag` loader lines (`<script async src="https://www.googletagmanager.com/gtag/js?id=G-S8MDMH082N"></script>` and `<script src=".../gtag-init.js" defer></script>`) across the 28 pages with `<script src="/consent.js" defer></script>` (on `index.html`) and `<script src="../consent.js" defer></script>` (on the 27 tool pages).
- Defaults `window['ga-disable-G-S8MDMH082N'] = true` before any script execution.
- Persists user choice in `localStorage` under `vantorkit_analytics_consent` (`'accepted'` | `'declined'`) inside `try / catch`. If `localStorage` is blocked or throws, the page remains un-consented (`GA4` never loads) and prompts on each visit.

### 1b) Banner UI, Equal Visual Weight, Accessibility, Mobile Layout & Footer Link
- **Design & Equal Visual Weight:** Compact bottom bar (`#vkConsentBanner`) styled in the slate design system (`#0f172a` background, `#1e293b` border, `#cbd5e1` / `#f1f5f9` typography) with single cyan accent (`#06b6d4` / `#38bdf8`). Both `#vkConsentAccept` and `#vkConsentDecline` share identical `.vk-consent-btn` computed styles (`backgroundColor: rgb(30, 41, 59)`, `borderColor: rgb(6, 182, 212)`, `color: rgb(241, 245, 249)`, `fontSize: 13px`, `fontWeight: 600`, `padding: 6.72px 15.2px`).
- **Keyboard Accessibility:** Native `<button type="button">` controls supporting `Tab`, `Enter`, and `Space`, with high-visibility `:focus-visible` ring (`2px solid #06b6d4`, `outline-offset: 2px`).
- **Mobile 360–414px Verification:** Verified at `360x800`, `390x800`, and `414x800` viewports (`bannerTop: 690px`, `firstControlBottom: 490–579px`, `overlapsFirstControl: false`, with `body.vk-consent-open { padding-bottom: 5.75rem }` preventing any bottom content occlusion).
- **4-Language Translations & RTL:** Translated in `en`, `ar` (`dir="rtl"`), `fr`, and `it`, with live `MutationObserver` on `<html lang dir>` so switching languages immediately translates both the banner and the footer link.
- **Persistent Footer "Privacy settings" Link (`#vkPrivacySettingsBtn`):** Injected into `.footer-links` across all pages loading `/consent.js` and added to `privacy.html`. Clicking it revokes active consent (`window['ga-disable-G-S8MDMH082N'] = true`), removes `#vk-gtag-script`, clears `_ga` and `_ga_S8MDMH082N` cookies across all path/domain permutations, and reopens the banner.

### 1c) `privacy.html` & `js/privacy.js` Updates (All 4 Languages)
- **Removed:** Section 2 (Google AdSense & third-party advertising cookies).
- **Added:** Accurate Section 2 (`2. Optional Website Analytics (Google Analytics 4)`) in `en`, `ar`, `fr`, and `it` detailing:
  - What is collected when consented (anonymous usage events: page views, tool page visited, device/browser type, approximate region; IP processed transiently by Google per GA4 and not logged/stored).
  - What is NEVER collected (files, text, audio, video, passwords, tokens, calculation inputs, or any tool content).
  - That analytics load strictly after explicit consent (`Accept`).
  - How to withdraw consent at any time via the footer **Privacy settings** link (which disables GA4 and clears `_ga` cookies).
  - That Google LLC acts as data processor.
- **Factual Language Only:** Removed "GDPR Compliance" from Section 4 heading (`4. European Privacy Rights (EEA, UK & Switzerland)`) and ensured zero legal-compliance claims appear anywhere. Kept `privacy@vantorkit.com` and `support@vantorkit.com` intact.

### 1d) Audit & Replacement of Site-Wide Absolute Claims
Every site-wide claim was rewritten to accurately state that files and text never leave the browser while optional anonymous analytics load only with consent:

| File & Location | Before | After |
| :--- | :--- | :--- |
| `index.html:9, 21, 26` (`meta description`, `og:description`, `twitter:description`) | `...100% client-side with zero logs.` | `...Your files and text never leave your browser. Optional anonymous analytics only with your consent.` |
| `index.html:2068` (`#heroBadgeText`) & `js/index.js:9` (`en.brandBadge`) | `Client-Side • Privacy-First • No Logs` | `Your files and text never leave your browser • Consent-only analytics` |
| `index.html:2075` (`#heroSubtitle`) & `js/index.js:10` (`en.heroSubtitle`) | `...100% private and processed locally.` | `...Your files and text never leave your browser. Optional anonymous analytics only with your consent.` |
| `js/index.js:173-174` (`ar.brandBadge`, `ar.heroSubtitle`) | `على جهازك • خصوصية تامة • بدون حفظ سجلات` / `...معالجة محلية 100% بدون إرسال أي بيانات.` | `ملفاتك ونصوصك لا تغادر متصفحك أبداً • تحليلات اختيارية بموافقتك فقط` / `...ملفاتك ونصوصك لا تغادر متصفحك أبداً. تحليلات مجهولة اختيارية بموافقتك فقط.` |
| `js/index.js:337-338` (`fr.brandBadge`, `fr.heroSubtitle`) | `Côté Client • Confidentialité Totale • Aucun Journal` / `...100% privés et exécutés localement.` | `Vos fichiers et textes ne quittent jamais votre navigateur • Analyses sur consentement` / `...Vos fichiers et textes ne quittent jamais votre navigateur. Analyses anonymes facultatives uniquement avec votre consentement.` |
| `js/index.js:501-502` (`it.brandBadge`, `it.heroSubtitle`) | `Lato Client • Massima Privacy • Nessun Log` / `...100% privati ed elaborati in locale.` | `I tuoi file e testi non lasciano mai il tuo browser • Statistiche solo con consenso` / `...I tuoi file e testi non lasciano mai il tuo browser. Statistiche anonime facoltative solo con il tuo consenso.` |
| `privacy.html:9, 21, 26` (`meta description`, `og:description`, `twitter:description`) | `VantorKit Privacy Policy: Learn how our client-side utility platform protects your privacy with zero server uploads and transparent standards.` | `VantorKit Privacy Policy: Your files and text never leave your browser. Optional anonymous analytics load only with your consent.` |
| `privacy.html:610` & `js/privacy.js` (`privSubtitle` in `en`, `ar`, `fr`, `it`) | `VantorKit is built around an uncompromising zero-server data collection architecture. Your files, calculations, and inputs remain 100% on your device.` | `Your files and text never leave your browser. Optional anonymous analytics only with your consent.` (and translated in `ar`, `fr`, `it`) |

*Note on tool-processing statements:* Statements on individual tool pages describing local file/data processing (e.g., `tools/pdf-merge.html`, `tools/text-diff.html`, `tools/big-data-transformer.html`, `tools/css-grid-generator.html`, `tools/metadata-cleaner.html`, `tools/jwt-decoder.html`, `tools/image-to-base64.html`) and blog articles were preserved untouched in accordance with the Hard Rules ("Allowed tool-page edits are ONLY the exact lines listed below (analytics loader lines, CDN `<script>` tag attributes)" and "Do not change statements that are only about tool processing").

### 1e) Real Network & Cookie Verification Logs (`scratch/privacy_verification.json`)
1. **First visit, no click (`/index.html`):**
   - Requests to Google domains (`googletagmanager.com` / `google-analytics.com`): **`0` (`[]`)**
   - Cookies (`document.cookie` & CDP `Network.getAllCookies`): **`0` (`[]`)**
   - Banner state: `bannerVisible: true`, `storedConsent: null`, `equalVisualWeight: true`.
2. **Click Decline (`/index.html` -> navigate to `/tools/percentage-calculator.html`):**
   - Requests to Google domains: **`0` (`[]`)**
   - Cookies: **`0` (`[]`)**
   - State: `bannerHidden: true`, `storedConsent: "declined"`.
3. **Click Accept (via Footer `Privacy settings` -> `Accept`):**
   - Requests to Google domains: **`2`**
     - `GET https://www.googletagmanager.com/gtag/js?id=G-S8MDMH082N`
     - `POST https://www.google-analytics.com/g/collect?v=2&tid=G-S8MDMH082N...&en=page_view`
   - Cookies set: `["_ga_S8MDMH082N", "_ga"]`
   - State: `storedConsent: "accepted"`, `gaDisabledFlag: false`.
4. **Revoke Consent (via Footer `Privacy settings` -> `Decline`):**
   - `window['ga-disable-G-S8MDMH082N']`: **`true`**
   - `#vk-gtag-script` in DOM: **`false`**
   - Cookies after revoke: **`0` (`[]`, `document.cookie: ""`)**
   - Requests to Google domains on subsequent page load: **`0` (`[]`)**.
5. **17 Non-GA Pages Tested with `vantorkit_analytics_consent = 'accepted'`:**
   - Tested `/tools/jwt-decoder.html`, `/tools/pdf-redactor.html`, `/tools/metadata-cleaner.html`, `/tools/big-data-transformer.html`, `/tools/css-grid-generator.html`, `/tools/video-trimmer.html`, `/about.html`, `/contact.html`, `/privacy.html`, `/terms.html`, `/blog/index.html`, and all 6 blog post pages: **`0` requests to Google domains on all 17 pages**.

---

## ITEM 2 — Markdown Editor Sanitization (Self-Hosted DOMPurify)

- **Self-Hosted Library:** Added `js/vendor/purify.min.js` (`DOMPurify v3.2.4`, 22,216 bytes, `sha384-eEu5CTj3qGvu9PdJuS+YlkNi7d2XxQROAFYOr59zgObtlcux1ae1Il3u7jvdCSWu`) and loaded it via `<script src="../js/vendor/purify.min.js"></script>` in `tools/markdown-editor.html`.
- **Sanitization Coverage (`tools/js/markdown-editor.js`):**
  - Sanitizes output inside `renderMarkdownToHtml()`, at the live preview assignment (`previewBody.innerHTML`), in the Copy Clean HTML handler (`btnCopyHtml`), and in the Export `.html` handler (`btnDownloadHtml`).
  - Configured `DOMPurify.addHook('afterSanitizeAttributes', ...)` so any `<a target="_blank">` automatically receives `rel="noopener noreferrer"` and dangerous URI schemes (`javascript:`, `vbscript:`, `data:`) are stripped.
- **Verification of the 6 Required XSS Payloads:**

| # | Input Payload | Sanitized Preview & Copied HTML Output | `alert(1)` Executed? |
| :--- | :--- | :--- | :--- |
| 1 | `<img src=x onerror=alert(1)>` | `<img src="x">` | `false` |
| 2 | `<script>alert(1)</script>` | `""` (empty) | `false` |
| 3 | `[x](javascript:alert(1))` | `<p><a>x</a></p>` | `false` |
| 4 | `<svg onload=alert(1)>` | `""` (empty) | `false` |
| 5 | `<iframe src="javascript:alert(1)">` | `""` (empty) | `false` |
| 6 | `<a href="data:text/html,<script>alert(1)</script>">x</a>` | `<p><a>x</a></p>` | `false` |

- **Link `target="_blank"` Verification:**
  - Input: `<a href="https://example.com" target="_blank">External</a>`
  - Output: `<p><a rel="noopener noreferrer" href="https://example.com" target="_blank">External</a></p>`
- **Long Realistic Document DOM Equivalence:**
  - Tested full GFM Sample Guide (`SAMPLE_MARKDOWN`): `57` DOM elements before and `57` DOM elements after (`1` table, `4` task-list checkboxes, `1` code block, `1` blockquote, `1` link), with identical rendered DOM structure.

---

## ITEM 3 — Pin & Verify Third-Party Scripts (SRI)

All 14 external `<script>` tags across 11 tool pages are pinned to exact versions and verified twice with SHA-384 Subresource Integrity (`integrity="sha384-..." crossorigin="anonymous"`):

| Library | Pinned URL | SHA-384 Integrity Hash | Pages Updated |
| :--- | :--- | :--- | :--- |
| **Chart.js** (`4.6.1`) | `https://cdn.jsdelivr.net/npm/chart.js@4.6.1/dist/chart.umd.min.js` | `sha384-Emf5ZVIUiarAdhkgtqK+5/Z5qIvM6QoVrS+qAVtfyZVuD5lIHrac0me485+Antp0` | `tools/compound-interest.html` |
| **Marked** (`15.0.12`) | `https://cdn.jsdelivr.net/npm/marked@15.0.12/marked.min.js` | `sha384-948ahk4ZmxYVYOc+rxN1H2gM1EJ2Duhp7uHtZ4WSLkV4Vtx5MUqnV+l7u9B+jFv+` | `tools/markdown-editor.html` |
| **docx** (`8.5.0`) | `https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js` | `sha384-4xaIisuLEy2lo2HkB2C4rEf7v8jbTb2kuogX6TkuEt9feTWKBSFSOzsqNNbV+sKh` | `tools/pdf-to-word.html` |
| **diff_match_patch** (`20121119`) | `https://cdnjs.cloudflare.com/ajax/libs/diff_match_patch/20121119/diff_match_patch.js` | `sha384-7Le+JVwfZJb8qalIvvPjnRmpLO/aJJrlzAPIjywCLxhQrQ9v6dYKDTshRfeZTXZn` | `tools/text-diff.html` |
| **JSZip** (`3.10.1`) | `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js` | `sha384-+mbV2IY1Zk/X1p/nWllGySJSUN8uMs+gUAN10Or95UBH0fpj6GfKgPmgC5EXieXG` | `tools/favicon-builder.html`, `tools/image-compressor.html`, `tools/pdf-split.html` |
| **lamejs** (`1.2.1`) | `https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.1/lame.min.js` | `sha384-xuasJXVcyv3hZq0eYpelEkBC8l4yufatZXDsKuyCU2rqfhDCb+ftuE/mSfZAteiK` | `tools/audio-trimmer.html` |
| **PDF.js** (`3.11.174`) | `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js` | `sha384-/1qUCSGwTur9vjf/z9lmu/eCUYbpOTgSjmpbMQZ1/CtX2v/WcAIKqRv+U1DUCG6e` | `tools/pdf-redactor.html`, `tools/pdf-to-word.html` |
| **qrcode-generator** (`1.4.4`) | `https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js` | `sha384-mZT2gIty7ZDdOGkxfP6joZcYdMW1Jvj9dRlfpTmaJAKKXTqzygtB22k7FLe+KZC1` | `tools/qr-generator.html` |
| **pdf-lib** (`1.17.1`) | `https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js` | `sha384-weMABwrltA6jWR8DDe9Jp5blk+tZQh7ugpCsF3JwSA53WZM9/14PjS5LAJNHNjAI` | `tools/pdf-merge.html`, `tools/pdf-redactor.html`, `tools/pdf-split.html` |

### Runtime-Loaded URLs in JS (Documented Only — Untouched per Instructions)
- `tools/js/pdf-redactor.js:311`: `pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';`
- `tools/js/pdf-redactor.js:331`: `cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',`
- `tools/js/pdf-redactor.js:333`: `standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/',`
- `tools/js/pdf-to-word.js:4`: `pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';`

---

## ITEM 4 — Service Worker (`sw.js`)

- Updated `CACHE_NAME` from `'vantorkit-cache-v1.3'` to `'vantorkit-cache-v1.4'`.
- Restored `PRECACHE_ASSETS` to the 17 core shell assets only:
  `/`, `/index.html`, `/manifest.json`, `/favicon.svg`, `/sidebar.css`, `/sidebar.js`, `/i18n-bootstrap.js`, `/consent.js`, `/icon-192.png`, `/icon-512.png`, `/icon-maskable-512.png`, `/apple-touch-icon.png`, `/assets/fazier-badge.svg`, `/about.html`, `/contact.html`, `/privacy.html`, `/terms.html`.
- Removed all tool pages, blog pages, and `/js/gtag-init.js` from `PRECACHE_ASSETS`.
- Preserved the same-origin-only fetch filter (`if (url.origin !== self.location.origin) return;`).
- Verified in headless Chrome that activating `/sw.js` purges `vantorkit-cache-v1.3` (`v13Purged: true`) and populates `vantorkit-cache-v1.4` (`precachedCount: 17`).

---

## ITEM 5 — IndexNow File (`vantorkit-indexnow.txt`)

- Confirmed that `vantorkit-indexnow.txt` is unused across the entire repository and removed it via `git rm vantorkit-indexnow.txt`.
- **IndexNow Endpoint Statement:** **Zero** requests to any IndexNow endpoint (e.g., `api.indexnow.org`, Bing, Yandex, or any search engine ping URL) were ever made during this task or any earlier tasks.
