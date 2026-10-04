(function() {
      'use strict';

      // --- Translations Dictionary (EN, AR, FR, IT) ---
      const I18N = {
        en: {
          langLabel: "English",
          backLink: "← Back to Tools",
          heroBadge: "Zero Server Transmission • In-Browser RAM Only • Safe for Production Keys",
          heroTitle: "JWT Decoder & HMAC Verifier",
          heroSubtitle: "Decode, inspect claims, format timestamps, and verify HMAC HS256 signatures securely in your browser RAM without leaking credentials to third parties.",
          tabDecode: "Decode & Verify",
          tabSign: "Token Signer / Generator",
          btnSampleValid: "Sample Active JWT",
          btnSampleExpired: "Sample Expired JWT",
          btnClear: "Clear",
          encodedTitle: "Encoded JWT String",
          tokenStructureTitle: "Token Segmentation & Structure:",
          headerTagTitle: "HEADER: ALGORITHM & TOKEN TYPE",
          payloadTagTitle: "PAYLOAD: DATA & CLAIMS",
          tsTitle: "Timestamp Analysis & Expiration Status",
          sigVerifyTitle: "VERIFY SIGNATURE (HMAC-SHA256)",
          chkBase64: "Secret is base64 encoded",
          sigStatusNeutral: "Enter your HMAC secret key above to verify signature locally.",
          sigStatusValid: "Signature Verified (HMAC Match)",
          sigStatusInvalid: "Invalid Signature (Mismatch)",
          signerTitle: "Generate & Cryptographically Sign a JWT",
          signerDesc: "Customize claims and sign with HMAC (HS256) directly in client RAM using native Web Crypto API.",
          signingSecretTitle: "HMAC SECRET KEY FOR SIGNING",
          btnSignGenerate: "Cryptographically Sign & Generate JWT",
          generatedTitle: "Generated Signed Token (HS256)",
          btnCopy: "Copy Token",
          guideHeading: "Understanding JSON Web Tokens & Zero-Leak Security",
          guideSubheading: "Learn the mechanics of JWT authentication tokens, signature verification, and why offline decoders are essential for API security.",
          g1Title: "The 3-Part Architecture",
          g1Desc: "A JWT consists of Header (algorithm & token type), Payload (user claims, roles, timestamps), and Signature separated by dots. The header and payload are Base64URL-encoded JSON, not encrypted.",
          g2Title: "Native Web Crypto Verification",
          g2Desc: "Signature verification executes entirely via the browser's hardware-accelerated W3C Web Crypto API (crypto.subtle). Your HMAC secret key is ingested directly into isolated cryptographic memory without external API calls.",
          g3Title: "Why Online Decoders are Risky",
          g3Desc: "Pasting production JWTs or API signing secrets into third-party websites risks leaking session identifiers, email addresses, and HMAC keys into server access logs, reverse proxies, and CDN caches.",
          faq1Q: "Is my JWT or secret key stored anywhere?",
          faq1A: "No. All decoding and verification takes place strictly in volatile browser RAM. When you close the tab, all memory is immediately reclaimed by the browser's garbage collector. Zero network requests are made.",
          faq2Q: "What does the 'exp' timestamp claim mean?",
          faq2A: "The exp (Expiration Time) claim identifies the Unix epoch timestamp after which the JWT is invalid. VantorKit translates this timestamp into your local timezone and displays a live countdown showing whether the token is currently active or expired.",
          faq3Q: "How do I verify Base64 encoded secret keys?",
          faq3A: "Check the 'Secret is base64 encoded' toggle beneath the secret input field. The verifier will automatically decode the Base64 representation into raw binary bytes before passing it to Web Crypto for HMAC evaluation.",
          faq4Q: "Can this tool verify RSA (RS256) or ECDSA (ES256) tokens?",
          faq4A: "The decoder parses all standard JWT algorithms (RS256, ES256, EdDSA, HS256, etc.) into readable claims. Instant client-side cryptographic verification is currently implemented for symmetric HMAC algorithms (HS256, HS384, HS512).",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerCopy: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
          langLabel: "العربية",
          backLink: "→ العودة للأدوات",
          heroBadge: "بدون إرسال للخوادم • في ذاكرة المتصفح فقط • آمن للمفاتيح الحساسة",
          heroTitle: "مفكك ومحقق توكنات JWT مع التحقق من التوقيع",
          heroSubtitle: "قم بفك تشفير توكنات JWT، وفحص المطالبات والبيانات، والتحقق من تواقيع HMAC HS256 محلياً في ذاكرة متصفحك بأمان تام.",
          tabDecode: "فك التشفير والتحقق",
          tabSign: "توليد وتوقيع التوكن",
          btnSampleValid: "توكن تجريبي نشط",
          btnSampleExpired: "توكن تجريبي منتهي الصلاحية",
          btnClear: "مسح",
          encodedTitle: "سلسلة JWT المشفرة",
          tokenStructureTitle: "بنية وتلوين أجزاء التوكن:",
          headerTagTitle: "الترويسة: نوع الرمز والخوارزمية",
          payloadTagTitle: "الحمولة: البيانات والمطالبات",
          tsTitle: "تحليل الطوابع الزمنية وصلاحية التوكن",
          sigVerifyTitle: "التحقق من التوقيع الرقمي (HMAC-SHA256)",
          chkBase64: "المفتاح السري مشفر بصيغة Base64",
          sigStatusNeutral: "أدخل المفتاح السري لـ HMAC للتحقق من التوقيع محلياً.",
          sigStatusValid: "التوقيع سليم وصالح (تطابق تام)",
          sigStatusInvalid: "توقيع غير صالح (عدم تطابق في التوقيع)",
          signerTitle: "توليد وتوقيع توكن JWT مشفر",
          signerDesc: "قم بتخصيص المطالبات والتوقيع عبر خوارزمية HMAC (HS256) محلياً بدون إرسال أي بيانات.",
          signingSecretTitle: "المفتاح السري لتوقيع HMAC",
          btnSignGenerate: "توقيع وتوليد توكن JWT",
          generatedTitle: "التوكن الموقع الناتج (HS256)",
          btnCopy: "نسخ التوكن",
          guideHeading: "فهم بنية رموز JWT وضمان الأمان بدون تسريب",
          guideSubheading: "تعرف على آلية عمل رموز مصادقة JWT، وكيفية التحقق من التوقيع الرقمي، ولماذا تعد أدوات فك التشفير غير المتصلة ضرورة لأمان واجهات البرمجة.",
          g1Title: "بنية رمز JWT ثلاثية الأجزاء",
          g1Desc: "يتكون رمز JWT من الترويسة (نوع الرمز والخوارزمية)، والحمولة (بيانات المستخدم، الصلاحيات، والطوابع الزمنية)، والتوقيع المشفر، مفصولة بنقاط. الترويسة والحمولة مشفرتان بصيغة Base64URL وليستا مشفرتين تعميةً.",
          g2Title: "التحقق عبر Web Crypto الأصلي",
          g2Desc: "تتم عملية التحقق من صحة التوقيع عبر واجهة برمجة تطبيقات Web Crypto المدمجة في المتصفح (crypto.subtle). يتم فحص مفتاح HMAC السري مباشرة في الذاكرة المشفرة المعزولة دون إرسال أي طلبات خارجية.",
          g3Title: "مخاطر أدوات فك التشفير السحابية",
          g3Desc: "إن لصق رموز JWT الخاصة ببيئات الإنتاج أو مفاتيح التوقيع السرية في مواقع خارجية يعرض معرفات الجلسات وعناوين البريد ومفاتيح HMAC لخطر التسريب في سجلات الخوادم وشبكات التوصيل السحابية.",
          faq1Q: "هل يتم تخزين رمز JWT أو المفتاح السري في أي مكان؟",
          faq1A: "كلا على الإطلاق. تتم جميع عمليات فك التشفير والتحقق من التوقيع حصرياً داخل ذاكرة RAM المؤقتة لمتصفحك. بمجرد إغلاق علامة التبويب، يتم مسح كافة البيانات تلقائياً دون إرسال أي بايت عبر الشبكة.",
          faq2Q: "ماذا تعني مطالبة الطابع الزمني 'exp'؟",
          faq2A: "تحدد مطالبة exp (وقت انتهاء الصلاحية) التوقيت الدقيق الذي يصبح بعده الرمز غير صالح للاستخدام. تقوم أداة فانتور كيت بتحويل هذا الطابع إلى توقيتك المحلي مع عرض حالة الصلاحية اللحظية والعد التنازلي.",
          faq3Q: "كيف يمكنني التحقق من المفاتيح السرية المشفرة بصيغة Base64؟",
          faq3A: "قم بتفعيل خيار 'المفتاح السري مشفر بصيغة Base64' أسفل حقل إدخال المفتاح. ستقوم الأداة بفك تشفير بايتات Base64 تلقائياً قبل تمريرها إلى خوارزمية Web Crypto للتحقق من HMAC.",
          faq4Q: "هل تدعم الأداة التحقق من رموز RSA (RS256) أو ECDSA (ES256)؟",
          faq4A: "يقوم مفكك الرموز بقراءة وتحليل ترويسات ومطالبات كافة خوارزميات JWT القياسية (مثل RS256 و ES256 و EdDSA و HS256). بينما يركز التحقق المشفر الفوري في المتصفح حالياً على خوارزميات HMAC المتناظرة (HS256 و HS384 و HS512).",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerCopy: "© 2026 VantorKit. أدوات ويب سريعة وخاصة ومجانية. المعالجة تتم محلياً في متصفحك."
        },
        fr: {
          langLabel: "Français",
          backLink: "← Retour aux outils",
          heroBadge: "Aucune Transmission Serveur • Mémoire Locale • Sécurisé pour Clés de Prod",
          heroTitle: "Décodeur & Vérificateur JWT HMAC",
          heroSubtitle: "Décodez, inspectez les claims, formatez les horodatages et vérifiez les signatures HMAC HS256 dans votre RAM sans fuite de secrets.",
          tabDecode: "Décoder & Vérifier",
          tabSign: "Générateur & Signataire",
          btnSampleValid: "JWT Actif d'exemple",
          btnSampleExpired: "JWT Expiré d'exemple",
          btnClear: "Effacer",
          encodedTitle: "Chaîne JWT Encodée",
          tokenStructureTitle: "Segmentation & Structure du Jeton :",
          headerTagTitle: "EN-TÊTE : ALGORITHME & TYPE DE JETON",
          payloadTagTitle: "CHARGE UTILE : DONNÉES & CLAIMS",
          tsTitle: "Analyse des Horodatages & Validité",
          sigVerifyTitle: "VÉRIFIER LA SIGNATURE (HMAC-SHA256)",
          chkBase64: "La clé secrète est encodée en base64",
          sigStatusNeutral: "Saisissez votre clé secrète HMAC ci-dessus pour vérifier la signature.",
          sigStatusValid: "Signature Validée (Correspondance HMAC)",
          sigStatusInvalid: "Signature Invalide (Non conforme)",
          signerTitle: "Générer & Signer un Jeton JWT",
          signerDesc: "Personnalisez les claims et signez avec HMAC (HS256) directement dans la RAM locale.",
          signingSecretTitle: "CLÉ SECRÈTE HMAC POUR SIGNER",
          btnSignGenerate: "Signer & Générer le JWT",
          generatedTitle: "Jeton Signé Généré (HS256)",
          btnCopy: "Copier le jeton",
          guideHeading: "Comprendre les Jetons JWT & Sécurité Zéro Fuite",
          guideSubheading: "Découvrez le fonctionnement des jetons d'authentification JWT, la vérification des signatures et pourquoi les décodeurs locaux sont essentiels.",
          g1Title: "L'Architecture en 3 Parties",
          g1Desc: "Un jeton JWT comprend l'En-tête (algorithme et type), la Charge utile (revendications, rôles, horodatages) et la Signature séparés par des points. L'en-tête et la charge utile sont simplement encodés en Base64URL, et non chiffrés.",
          g2Title: "Vérification Native Web Crypto",
          g2Desc: "La vérification de signature s'exécute via l'API Web Crypto du navigateur (crypto.subtle). Votre clé secrète HMAC est traitée directement dans une mémoire cryptographique isolée sans aucun appel API externe.",
          g3Title: "Pourquoi les Décodeurs en Ligne sont Risqués",
          g3Desc: "Coller des jetons de production ou des secrets API sur des sites tiers expose vos identifiants de session, emails et clés HMAC aux journaux d'accès serveur, proxys et caches CDN tiers.",
          faq1Q: "Mon jeton JWT ou ma clé secrète sont-ils stockés quelque part ?",
          faq1A: "Non. Tout le décodage et la vérification se déroulent strictement dans la mémoire vive (RAM) de votre navigateur. À la fermeture de l'onglet, toutes les données sont immédiatement purgées.",
          faq2Q: "Que signifie la revendication d'horodatage 'exp' ?",
          faq2A: "La revendication exp (Expiration Time) indique l'heure Unix après laquelle le jeton ne doit plus être accepté. VantorKit convertit cet horodatage dans votre fuseau horaire local et affiche un compte à rebours précis.",
          faq3Q: "Comment vérifier les clés secrètes encodées en Base64 ?",
          faq3A: "Cochez la case 'La clé secrète est encodée en base64' sous le champ du secret. L'outil convertira la représentation Base64 en octets bruts avant l'importation de la clé HMAC dans Web Crypto.",
          faq4Q: "Cet outil peut-il vérifier les jetons RSA (RS256) ou ECDSA (ES256) ?",
          faq4A: "Le décodeur analyse toutes les structures d'algorithmes JWT (RS256, ES256, EdDSA, HS256, etc.) pour en afficher les claims. La vérification cryptographique instantanée est optimisée pour les algorithmes symétriques HMAC (HS256, HS384, HS512).",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerCopy: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits."
        },
        it: {
          langLabel: "Italiano",
          backLink: "← Torna agli strumenti",
          heroBadge: "Nessun Invio a Server • Solo RAM del Browser • Sicuro per Chiavi di Produzione",
          heroTitle: "Decoder JWT & Verificatore HMAC",
          heroSubtitle: "Decodifica, ispeziona i claim, visualizza i timestamp e verifica le firme HMAC HS256 direttamente nella memoria locale senza rischi.",
          tabDecode: "Decodifica & Verifica",
          tabSign: "Generatore & Firma Token",
          btnSampleValid: "Esempio JWT Valido",
          btnSampleExpired: "Esempio JWT Scaduto",
          btnClear: "Cancella",
          encodedTitle: "Stringa JWT Codificata",
          tokenStructureTitle: "Struttura e Segmentazione Token:",
          headerTagTitle: "INTESTAZIONE: ALGORITMO & TIPO TOKEN",
          payloadTagTitle: "PAYLOAD: DATI & CLAIM",
          tsTitle: "Analisi Timestamp & Scadenza",
          sigVerifyTitle: "VERIFICA FIRMA (HMAC-SHA256)",
          chkBase64: "Il segreto è codificato in base64",
          sigStatusNeutral: "Inserisci la chiave segreta HMAC in alto per verificare la firma.",
          sigStatusValid: "Firma Verificata (Corrispondenza HMAC)",
          sigStatusInvalid: "Firma Non Valida (Mancata corrispondenza)",
          signerTitle: "Genera e Firma un Token JWT",
          signerDesc: "Personalizza i claim e firma con HMAC (HS256) direttamente nella RAM del browser.",
          signingSecretTitle: "CHIAVE SEGRETA HMAC PER LA FIRMA",
          btnSignGenerate: "Firma e Genera JWT",
          generatedTitle: "Token Firmato Generato (HS256)",
          btnCopy: "Copia Token",
          guideHeading: "Informazioni sui Token JWT & Massima Sicurezza",
          guideSubheading: "Scopri come funzionano i token di autenticazione JWT, la verifica della firma e perché i decoder locali sono essenziali per la sicurezza delle API.",
          g1Title: "L'Architettura in 3 Parti",
          g1Desc: "Un token JWT è composto da Intestazione (algoritmo e tipo), Carico utile (claim utente, ruoli, timestamp) e Firma separati da punti. Intestazione e payload sono semplicemente codificati in Base64URL, non crittografati.",
          g2Title: "Verifica Nativa Web Crypto",
          g2Desc: "La verifica della firma viene eseguita tramite l'API Web Crypto del browser (crypto.subtle). La tua chiave segreta HMAC viene gestita direttamente nella memoria crittografica protetta senza alcuna chiamata di rete esterna.",
          g3Title: "Perché i Decoder Online Sono Rischiosi",
          g3Desc: "Incollare token di produzione o chiavi segrete su siti web di terze parti rischia di esporre identificatori di sessione, indirizzi email e chiavi HMAC nei log dei server e nei proxy cloud.",
          faq1Q: "Il mio token JWT o la chiave segreta vengono memorizzati altrove?",
          faq1A: "Assolutamente no. Tutte le operazioni di decodifica e verifica avvengono rigorosamente nella memoria RAM del browser locale. Alla chiusura della scheda, tutti i dati vengono rimossi all'istante.",
          faq2Q: "Cosa significa il claim di timestamp 'exp'?",
          faq2A: "Il claim exp (Expiration Time) specifica il timestamp Unix dopo il quale il token non deve più essere accettato. VantorKit converte questo valore nel tuo fuso orario locale mostrando il tempo residuo o la scadenza.",
          faq3Q: "Come posso verificare chiavi segrete codificate in Base64?",
          faq3A: "Seleziona la casella 'Il segreto è codificato in base64' sotto il campo di input. Il verificatore decodificherà i byte Base64 prima di importare la chiave HMAC nell'API Web Crypto.",
          faq4Q: "Questo strumento può verificare token RSA (RS256) o ECDSA (ES256)?",
          faq4A: "Il decoder è in grado di analizzare e mostrare i claim di tutti gli algoritmi JWT standard (RS256, ES256, EdDSA, HS256, ecc.). La verifica crittografica locale istantanea è implementata per gli algoritmi simmetrici HMAC (HS256, HS384, HS512).",
          footerPriv: "Privacy Policy",
          footerTerms: "Termini di servizio",
          footerAbout: "Chi siamo",
          footerContact: "Contatto",
          footerCopy: "© 2026 VantorKit. Strumenti web veloci, privati e gratuiti."
        }
      };

      // --- State ---
      let currentLang = localStorage.getItem('vantorkit_lang') || 'en';
      let currentParsedToken = null;

      // --- DOM Elements ---
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      const tabDecodeBtn = document.getElementById('tabDecodeBtn');
      const tabSignBtn = document.getElementById('tabSignBtn');
      const decoderView = document.getElementById('decoderView');
      const generatorView = document.getElementById('generatorView');

      const jwtInput = document.getElementById('jwtInput');
      const tokenLengthBadge = document.getElementById('tokenLengthBadge');
      const tokenColorPreview = document.getElementById('tokenColorPreview');
      const jsonHeaderView = document.getElementById('jsonHeaderView');
      const jsonPayloadView = document.getElementById('jsonPayloadView');
      const headerAlgBadge = document.getElementById('headerAlgBadge');
      const payloadClaimsCount = document.getElementById('payloadClaimsCount');
      const sigAlgDisplay = document.getElementById('sigAlgDisplay');

      const timestampCard = document.getElementById('timestampCard');
      const timestampList = document.getElementById('timestampList');

      const jwtSecretInput = document.getElementById('jwtSecretInput');
      const btnToggleSecret = document.getElementById('btnToggleSecret');
      const eyeIcon = document.getElementById('eyeIcon');
      const chkBase64Secret = document.getElementById('chkBase64Secret');
      const sigStatusBadge = document.getElementById('sigStatusBadge');
      const sigStatusText = document.getElementById('sigStatusText');

      const btnLoadValidSample = document.getElementById('btnLoadValidSample');
      const btnLoadExpiredSample = document.getElementById('btnLoadExpiredSample');
      const btnClearToken = document.getElementById('btnClearToken');

      const signerHeaderInput = document.getElementById('signerHeaderInput');
      const signerPayloadInput = document.getElementById('signerPayloadInput');
      const signerSecretInput = document.getElementById('signerSecretInput');
      const btnSignToken = document.getElementById('btnSignToken');
      const generatedTokenWrap = document.getElementById('generatedTokenWrap');
      const generatedTokenPreview = document.getElementById('generatedTokenPreview');
      const btnCopyGeneratedToken = document.getElementById('btnCopyGeneratedToken');

      const toastBox = document.getElementById('toastBox');
      const toastMsg = document.getElementById('toastMsg');

      // --- Language Selector Setup ---
      function setLanguage(lang) {
        if (!I18N[lang]) lang = 'en';
        currentLang = lang;
        localStorage.setItem('vantorkit_lang', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const dict = I18N[lang];
        currentLangLabel.textContent = dict.langLabel;

        langOptions.forEach(opt => {
          if (opt.dataset.lang === lang) opt.classList.add('active');
          else opt.classList.remove('active');
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
              el.placeholder = dict[key];
            } else {
              el.textContent = dict[key];
            }
          }
        });

        // Re-evaluate signature and timestamps with new locale strings
        if (jwtInput.value.trim()) {
          decodeJWT(jwtInput.value.trim());
          verifySignature();
        }
      }

      langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('open');
        langToggleBtn.setAttribute('aria-expanded', langMenu.classList.contains('open'));
      });

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          setLanguage(opt.dataset.lang);
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!document.getElementById('langDropdown').contains(e.target)) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // --- Toast Notification Helper ---
      let toastTimer = null;
      function showToast(msg) {
        toastMsg.textContent = msg;
        toastBox.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastBox.classList.remove('show');
        }, 2200);
      }

      // --- Tab Switching ---
      tabDecodeBtn.addEventListener('click', () => {
        tabDecodeBtn.classList.add('active');
        tabSignBtn.classList.remove('active');
        decoderView.style.display = 'grid';
        generatorView.classList.remove('active');
      });

      tabSignBtn.addEventListener('click', () => {
        tabSignBtn.classList.add('active');
        tabDecodeBtn.classList.remove('active');
        decoderView.style.display = 'none';
        generatorView.classList.add('active');
      });

      // --- Secret Input Visibility Toggle ---
      let secretVisible = false;
      btnToggleSecret.addEventListener('click', () => {
        secretVisible = !secretVisible;
        jwtSecretInput.type = secretVisible ? 'text' : 'password';
        eyeIcon.innerHTML = secretVisible
          ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
          : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
      });

      // --- Base64URL Helpers ---
      function base64UrlDecode(str) {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
          base64 += '=';
        }
        try {
          const binary = atob(base64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          return new TextDecoder('utf-8').decode(bytes);
        } catch (e) {
          return null;
        }
      }

      function base64UrlDecodeToBytes(str) {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
          base64 += '=';
        }
        try {
          const binary = atob(base64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          return bytes;
        } catch (e) {
          return null;
        }
      }

      function base64UrlEncode(str) {
        const bytes = new TextEncoder().encode(str);
        let binary = '';
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary)
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
      }

      function base64UrlEncodeBuffer(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary)
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
      }

      // --- JSON Syntax Highlighter ---
      function syntaxHighlight(json) {
        if (typeof json !== 'string') {
          json = JSON.stringify(json, null, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          let cls = 'json-number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'json-key';
            } else {
              cls = 'json-string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
          } else if (/null/.test(match)) {
            cls = 'json-null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      }

      // --- Human-Friendly Timestamp Formatter ---
      function formatTimestamp(epochSeconds, claimName) {
        const date = new Date(epochSeconds * 1000);
        if (isNaN(date.getTime())) return null;

        const now = Date.now();
        const diffSec = Math.floor((date.getTime() - now) / 1000);
        const isFuture = diffSec > 0;
        const absDiff = Math.abs(diffSec);

        let relativeStr = '';
        if (absDiff < 60) {
          relativeStr = absDiff + 's';
        } else if (absDiff < 3600) {
          relativeStr = Math.floor(absDiff / 60) + 'm';
        } else if (absDiff < 86400) {
          relativeStr = Math.floor(absDiff / 3600) + 'h ' + Math.floor((absDiff % 3600) / 60) + 'm';
        } else {
          relativeStr = Math.floor(absDiff / 86400) + 'd ' + Math.floor((absDiff % 86400) / 3600) + 'h';
        }

        const dateStr = date.toUTCString();
        const localStr = date.toLocaleString();

        let badgeClass = 'valid';
        let statusLabel = '';

        if (claimName === 'exp') {
          if (isFuture) {
            badgeClass = 'valid';
            statusLabel = 'Expires in ' + relativeStr;
            if (currentLang === 'ar') statusLabel = 'ينتهي خلال ' + relativeStr;
            else if (currentLang === 'fr') statusLabel = 'Expire dans ' + relativeStr;
            else if (currentLang === 'it') statusLabel = 'Scade tra ' + relativeStr;
          } else {
            badgeClass = 'expired';
            statusLabel = 'Expired ' + relativeStr + ' ago';
            if (currentLang === 'ar') statusLabel = 'انتهى منذ ' + relativeStr;
            else if (currentLang === 'fr') statusLabel = 'Expiré il y a ' + relativeStr;
            else if (currentLang === 'it') statusLabel = 'Scaduto da ' + relativeStr;
          }
        } else if (claimName === 'iat') {
          statusLabel = 'Issued ' + relativeStr + ' ago';
          if (currentLang === 'ar') statusLabel = 'صدر منذ ' + relativeStr;
          else if (currentLang === 'fr') statusLabel = 'Émis il y a ' + relativeStr;
          else if (currentLang === 'it') statusLabel = 'Emesso da ' + relativeStr;
        } else if (claimName === 'nbf') {
          if (isFuture) {
            badgeClass = 'expired';
            statusLabel = 'Not active for ' + relativeStr;
            if (currentLang === 'ar') statusLabel = 'غير نشط لمدة ' + relativeStr;
            else if (currentLang === 'fr') statusLabel = 'Inactif pendant ' + relativeStr;
            else if (currentLang === 'it') statusLabel = 'Non attivo per ' + relativeStr;
          } else {
            badgeClass = 'valid';
            statusLabel = 'Active since ' + relativeStr + ' ago';
            if (currentLang === 'ar') statusLabel = 'نشط منذ ' + relativeStr;
            else if (currentLang === 'fr') statusLabel = 'Actif depuis ' + relativeStr;
            else if (currentLang === 'it') statusLabel = 'Attivo da ' + relativeStr;
          }
        }

        return {
          claim: claimName,
          dateUtc: dateStr,
          dateLocal: localStr,
          statusLabel: statusLabel,
          badgeClass: badgeClass,
          epoch: epochSeconds
        };
      }

      // --- JWT Decoder Core ---
      function decodeJWT(raw) {
        if (!raw) {
          tokenLengthBadge.textContent = '0 chars';
          tokenColorPreview.innerHTML = '<span style="color:#64748b;font-style:italic">Paste a valid 3-part token above to inspect color segmentation...</span>';
          jsonHeaderView.innerHTML = '{}';
          jsonPayloadView.innerHTML = '{}';
          timestampCard.style.display = 'none';
          currentParsedToken = null;
          updateSigBadge('neutral', I18N[currentLang].sigStatusNeutral);
          return;
        }

        tokenLengthBadge.textContent = raw.length + ' chars';

        // Strip "Bearer " if present
        let clean = raw.trim();
        if (clean.toLowerCase().startsWith('bearer ')) {
          clean = clean.substring(7).trim();
        }

        const parts = clean.split('.');

        // Render visual color preview
        if (parts.length === 3) {
          tokenColorPreview.innerHTML =
            '<span class="token-part-header">' + escapeHtml(parts[0]) + '</span>' +
            '<span class="token-dot">.</span>' +
            '<span class="token-part-payload">' + escapeHtml(parts[1]) + '</span>' +
            '<span class="token-dot">.</span>' +
            '<span class="token-part-sig">' + escapeHtml(parts[2]) + '</span>';
        } else if (parts.length === 2) {
          tokenColorPreview.innerHTML =
            '<span class="token-part-header">' + escapeHtml(parts[0]) + '</span>' +
            '<span class="token-dot">.</span>' +
            '<span class="token-part-payload">' + escapeHtml(parts[1]) + '</span>' +
            '<span style="color:#ef4444;font-size:0.75rem;margin-inline-start:8px">[Missing Signature Segment]</span>';
        } else {
          tokenColorPreview.innerHTML = '<span style="color:#ef4444">' + escapeHtml(clean) + ' (Invalid JWT format: expected 3 dot-separated parts)</span>';
        }

        if (parts.length < 2) {
          jsonHeaderView.innerHTML = '<span style="color:#ef4444">// Invalid JWT structure</span>';
          jsonPayloadView.innerHTML = '<span style="color:#ef4444">// Missing payload segment</span>';
          timestampCard.style.display = 'none';
          currentParsedToken = null;
          return;
        }

        // Decode Header
        let headerObj = null;
        const headerJson = base64UrlDecode(parts[0]);
        if (headerJson) {
          try {
            headerObj = JSON.parse(headerJson);
            jsonHeaderView.innerHTML = syntaxHighlight(headerObj);
            headerAlgBadge.textContent = headerObj.alg || 'UNKNOWN';
            sigAlgDisplay.textContent = headerObj.alg || 'HS256';
          } catch (e) {
            jsonHeaderView.innerHTML = '<span style="color:#ef4444">// Failed to parse Header JSON: ' + escapeHtml(headerJson) + '</span>';
          }
        } else {
          jsonHeaderView.innerHTML = '<span style="color:#ef4444">// Invalid Base64URL encoding in Header</span>';
        }

        // Decode Payload
        let payloadObj = null;
        const payloadJson = base64UrlDecode(parts[1]);
        if (payloadJson) {
          try {
            payloadObj = JSON.parse(payloadJson);
            jsonPayloadView.innerHTML = syntaxHighlight(payloadObj);
            const claimCount = Object.keys(payloadObj).length;
            payloadClaimsCount.textContent = claimCount + ' Claim' + (claimCount !== 1 ? 's' : '');

            renderTimestamps(payloadObj);
          } catch (e) {
            jsonPayloadView.innerHTML = '<span style="color:#ef4444">// Failed to parse Payload JSON: ' + escapeHtml(payloadJson) + '</span>';
            timestampCard.style.display = 'none';
          }
        } else {
          jsonPayloadView.innerHTML = '<span style="color:#ef4444">// Invalid Base64URL encoding in Payload</span>';
          timestampCard.style.display = 'none';
        }

        currentParsedToken = {
          headerRaw: parts[0],
          payloadRaw: parts[1],
          signatureRaw: parts[2] || '',
          header: headerObj,
          payload: payloadObj
        };

        verifySignature();
      }

      function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      function renderTimestamps(payloadObj) {
        const timeClaims = ['exp', 'iat', 'nbf', 'auth_time'];
        const found = [];

        timeClaims.forEach(c => {
          if (payloadObj && typeof payloadObj[c] === 'number') {
            const parsed = formatTimestamp(payloadObj[c], c);
            if (parsed) found.push(parsed);
          }
        });

        if (found.length === 0) {
          timestampCard.style.display = 'none';
          return;
        }

        timestampList.innerHTML = found.map(item => `
          <div class="ts-item">
            <div style="display:flex;align-items:center;gap:0.4rem;">
              <span class="ts-name">${item.claim.toUpperCase()}:</span>
              <span style="font-family:'JetBrains Mono',monospace;color:#fff;">${item.epoch}</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span style="color:var(--text-muted);font-size:0.75rem;">${item.dateLocal}</span>
              <span class="ts-badge ${item.badgeClass}">${item.statusLabel}</span>
            </div>
          </div>
        `).join('');

        timestampCard.style.display = 'block';
      }

      // --- Web Crypto Native Signature Verification ---
      async function verifySignature() {
        const dict = I18N[currentLang];
        const secret = jwtSecretInput.value;

        if (!currentParsedToken || !currentParsedToken.signatureRaw) {
          updateSigBadge('neutral', dict.sigStatusNeutral);
          return;
        }

        if (!secret) {
          updateSigBadge('neutral', dict.sigStatusNeutral);
          return;
        }

        const alg = (currentParsedToken.header && currentParsedToken.header.alg) ? currentParsedToken.header.alg : 'HS256';

        // Check if supported HMAC algorithm
        let hashName = null;
        if (alg === 'HS256') hashName = 'SHA-256';
        else if (alg === 'HS384') hashName = 'SHA-384';
        else if (alg === 'HS512') hashName = 'SHA-512';

        if (!hashName) {
          updateSigBadge('neutral', 'Algorithm ' + alg + ' requires asymmetric keys (RSA/ECDSA). Local verification active for HS256/384/512.');
          return;
        }

        try {
          const enc = new TextEncoder();
          let keyBytes;

          if (chkBase64Secret.checked) {
            keyBytes = base64UrlDecodeToBytes(secret);
            if (!keyBytes) {
              updateSigBadge('invalid', 'Invalid Base64 format in Secret Key');
              return;
            }
          } else {
            keyBytes = enc.encode(secret);
          }

          const cryptoKey = await window.crypto.subtle.importKey(
            'raw',
            keyBytes,
            { name: 'HMAC', hash: hashName },
            false,
            ['verify']
          );

          const dataToVerify = enc.encode(currentParsedToken.headerRaw + '.' + currentParsedToken.payloadRaw);
          const sigBytes = base64UrlDecodeToBytes(currentParsedToken.signatureRaw);

          if (!sigBytes) {
            updateSigBadge('invalid', dict.sigStatusInvalid + ' (Corrupt Base64 in Signature)');
            return;
          }

          const isValid = await window.crypto.subtle.verify(
            'HMAC',
            cryptoKey,
            sigBytes,
            dataToVerify
          );

          if (isValid) {
            updateSigBadge('valid', dict.sigStatusValid);
          } else {
            updateSigBadge('invalid', dict.sigStatusInvalid);
          }
        } catch (err) {
          updateSigBadge('invalid', 'Verification Error: ' + err.message);
        }
      }

      function updateSigBadge(state, text) {
        sigStatusBadge.className = 'sig-status-badge ' + state;
        sigStatusText.textContent = text;
        const iconSvg = sigStatusBadge.querySelector('svg');
        if (state === 'valid') {
          iconSvg.setAttribute('stroke', '#10b981');
          iconSvg.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
        } else if (state === 'invalid') {
          iconSvg.setAttribute('stroke', '#ef4444');
          iconSvg.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>';
        } else {
          iconSvg.setAttribute('stroke', '#94a3b8');
          iconSvg.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
        }
      }

      // --- Interactive Event Listeners ---
      jwtInput.addEventListener('input', () => {
        decodeJWT(jwtInput.value);
      });

      jwtSecretInput.addEventListener('input', () => {
        verifySignature();
      });

      chkBase64Secret.addEventListener('change', () => {
        verifySignature();
      });

      btnClearToken.addEventListener('click', () => {
        jwtInput.value = '';
        jwtSecretInput.value = '';
        decodeJWT('');
      });

      // --- Sample Token Loaders ---
      btnLoadValidSample.addEventListener('click', () => {
        const now = Math.floor(Date.now() / 1000);
        const header = { alg: 'HS256', typ: 'JWT' };
        const payload = {
          sub: 'usr_vantor_8819',
          name: 'Alex Vance',
          role: 'Security Engineer',
          scope: 'admin:write user:read',
          iat: now - 3600,
          exp: now + 7200
        };
        const secret = 'vantorkit-super-secret-key-32chars!';

        signSampleToken(header, payload, secret, false).then(token => {
          jwtInput.value = token;
          jwtSecretInput.value = secret;
          chkBase64Secret.checked = false;
          decodeJWT(token);
          showToast('Sample active token loaded & verified!');
        });
      });

      btnLoadExpiredSample.addEventListener('click', () => {
        const now = Math.floor(Date.now() / 1000);
        const header = { alg: 'HS256', typ: 'JWT' };
        const payload = {
          sub: 'usr_vantor_expired',
          name: 'Expired Session',
          role: 'viewer',
          iat: now - 86400,
          exp: now - 3600
        };
        const secret = 'vantorkit-super-secret-key-32chars!';

        signSampleToken(header, payload, secret, false).then(token => {
          jwtInput.value = token;
          jwtSecretInput.value = secret;
          chkBase64Secret.checked = false;
          decodeJWT(token);
          showToast('Sample expired token loaded!');
        });
      });

      // --- In-Memory Signing Helper for Samples and Signer Mode ---
      async function signSampleToken(headerObj, payloadObj, secretStr, isBase64) {
        const enc = new TextEncoder();
        const headerB64 = base64UrlEncode(JSON.stringify(headerObj));
        const payloadB64 = base64UrlEncode(JSON.stringify(payloadObj));
        const dataToSign = headerB64 + '.' + payloadB64;

        let keyBytes;
        if (isBase64) {
          keyBytes = base64UrlDecodeToBytes(secretStr);
        } else {
          keyBytes = enc.encode(secretStr);
        }

        const cryptoKey = await window.crypto.subtle.importKey(
          'raw',
          keyBytes,
          { name: 'HMAC', hash: 'SHA-256' },
          false,
          ['sign']
        );

        const sigBuffer = await window.crypto.subtle.sign(
          'HMAC',
          cryptoKey,
          enc.encode(dataToSign)
        );

        const sigB64 = base64UrlEncodeBuffer(sigBuffer);
        return dataToSign + '.' + sigB64;
      }

      // --- Token Signer Generate Button ---
      btnSignToken.addEventListener('click', async () => {
        try {
          const header = JSON.parse(signerHeaderInput.value);
          const payload = JSON.parse(signerPayloadInput.value);
          const secret = signerSecretInput.value;

          if (!secret) {
            alert('Please specify an HMAC secret key.');
            return;
          }

          const token = await signSampleToken(header, payload, secret, false);
          generatedTokenWrap.style.display = 'flex';
          const parts = token.split('.');
          generatedTokenPreview.innerHTML =
            '<span class="token-part-header">' + escapeHtml(parts[0]) + '</span>' +
            '<span class="token-dot">.</span>' +
            '<span class="token-part-payload">' + escapeHtml(parts[1]) + '</span>' +
            '<span class="token-dot">.</span>' +
            '<span class="token-part-sig">' + escapeHtml(parts[2]) + '</span>';

          btnCopyGeneratedToken.onclick = () => {
            navigator.clipboard.writeText(token).then(() => {
              showToast('Generated token copied to clipboard!');
            });
          };

          showToast('Token signed & generated!');
        } catch (e) {
          alert('Error signing token: Invalid JSON formatting in Header or Payload.');
        }
      });

      // Initialize with sample token on first load
      btnLoadValidSample.click();

      // Initialize language
      setLanguage(currentLang);
    })();