(function () {
      'use strict';

      // Ensure UTF-8 multi-byte support in qrcode-generator
      if (window.qrcode && qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs['UTF-8']) {
        qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
      }

      // --- Internationalization (i18n) Dictionary ---
      const I18N = {
        en: {
          backLink: "← Back to Tools",
          brandBadge: "Everyday Tools • 100% Client-Side • Instant Vector & High-Res Export",
          pageTitle: "QR Code <span>Generator</span>",
          pageSubtitle: "Generate customizable, high-resolution QR codes for websites, Wi-Fi connections, vCard contacts, emails, and plain text. 100% private and generated locally in your browser.",
          tabUrl: "URL",
          tabText: "Text",
          tabWifi: "Wi-Fi",
          tabVcard: "vCard",
          tabEmail: "Email",
          lblWebsiteUrl: "Website or Link URL:",
          hintHttps: "Starts with https://",
          lblTextMessage: "Plain Text Message or Notes:",
          lblWifiSsid: "Network Name (SSID):",
          lblWifiSecurity: "Security Type:",
          lblWifiPassword: "Network Password:",
          lblWifiHidden: "Hidden Network (SSID not broadcast)",
          lblVcardName: "Full Name:",
          lblVcardPhone: "Phone Number:",
          lblVcardEmail: "Email Address:",
          lblVcardOrg: "Company / Organization:",
          lblVcardUrl: "Website URL:",
          lblEmailTo: "Recipient Email:",
          lblEmailSubject: "Email Subject:",
          lblEmailBody: "Email Body Message:",
          secStyling: "Appearance & QR Design",
          lblFgColor: "Foreground",
          lblBgColor: "Background",
          lblPresets: "Theme Presets:",
          lblDimension: "Resolution / Size:",
          lblEcc: "Error Correction Level:",
          hintEcc: "Higher levels withstand surface damage",
          previewTitle: "Live QR Preview",
          badgeLive: "Live Ready",
          btnPng: "Download PNG",
          btnSvg: "Vector SVG",
          btnCopy: "Copy Image to Clipboard",
          scanHint: "Aim your smartphone camera to test scan immediately",
          infoTitle: "Enterprise QR Generation with Absolute Confidentiality",
          infoDesc: "Discover why client-side QR rendering protects your private credentials, ensures zero server retention, and delivers razor-sharp vector printing assets.",
          card1Title: "100% Zero-Cloud Privacy",
          card1Desc: "Your confidential Wi-Fi network passwords, personal contact numbers, and private messages are computed exclusively inside your local browser memory. Nothing is ever sent to or logged on any remote server.",
          card2Title: "Infinite Vector Scalability",
          card2Desc: "Download lossless SVG files ready for billboards, restaurant menus, product packaging, and business cards without losing a single pixel of crispness at any print dimension.",
          card3Title: "Permanent & Direct",
          card3Desc: "Generated codes are standard static matrix symbols. They do not redirect through URL shorteners or intermediate tracking domains, meaning they never expire and continue working forever.",
          faq1Q: "Are my Wi-Fi credentials or vCard contacts stored anywhere?",
          faq1A: "Never. The encoding calculation takes place 100% in your device's memory. When you close the tab or change fields, the memory is cleared. No database, server endpoint, or third-party analytics collects your credentials.",
          faq2Q: "Do these QR codes have a scan limit or expiration date?",
          faq2A: "No. Static QR codes encode raw text, URLs, or Wi-Fi commands directly into the visual 2D pattern. There are no scan counters, no expiration deadlines, and no monthly subscription fees.",
          faq3Q: "How do phones connect to Wi-Fi using the generated QR code?",
          faq3A: "Both iOS and Android native camera apps recognize the standardized WIFI protocol (WIFI:S:...;P:...;;). When scanned, the device prompts the user to join the network with one tap without manual password entry.",
          faq4Q: "Which error correction level should I select?",
          faq4A: "Level M (15%) is the industry standard balance between pattern compactness and readability. If printing on curved surfaces, rough textures, or outdoors where symbols may get scratched, choose Level Q (25%) or Level H (30%).",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally.",
          // Dynamic strings:
          copiedToast: "QR Code copied to clipboard!",
          copyErrorToast: "Could not copy image to clipboard.",
          pngDownloadToast: "High-resolution PNG downloaded!",
          svgDownloadToast: "Lossless vector SVG downloaded!",
          chars: "chars",
          modules: "Modules"
        },
        ar: {
          backLink: "← العودة إلى الأدوات",
          brandBadge: "أدوات يومية • محلي 100% في المتصفح • تصدير متجه وفائق الدقة",
          pageTitle: "مولد رموز <span>QR Code</span>",
          pageSubtitle: "أنشئ رموز QR مخصصة وفائقة الدقة للروابط، وشبكات الواي فاي، وجهات الاتصال vCard، ورسائل البريد والنصوص. خصوصية مطلقة 100% ومعالجة محلية بالكامل.",
          tabUrl: "رابط URL",
          tabText: "نص",
          tabWifi: "واي فاي",
          tabVcard: "جهة اتصال",
          tabEmail: "بريد",
          lblWebsiteUrl: "رابط الموقع الإلكتروني:",
          hintHttps: "يبدأ بـ https://",
          lblTextMessage: "الرسالة أو الملاحظات النصية:",
          lblWifiSsid: "اسم شبكة الواي فاي (SSID):",
          lblWifiSecurity: "نوع الأمان والتشفير:",
          lblWifiPassword: "كلمة مرور الشبكة:",
          lblWifiHidden: "شبكة مخفية (لا تبث الاسم)",
          lblVcardName: "الاسم الكامل:",
          lblVcardPhone: "رقم الهاتف:",
          lblVcardEmail: "البريد الإلكتروني:",
          lblVcardOrg: "الشركة / المؤسسة:",
          lblVcardUrl: "رابط الموقع:",
          lblEmailTo: "البريد الإلكتروني للمستلم:",
          lblEmailSubject: "موضوع الرسالة:",
          lblEmailBody: "نص الرسالة:",
          secStyling: "المظهر وتصميم الرمز",
          lblFgColor: "لون الرمز",
          lblBgColor: "لون الخلفية",
          lblPresets: "سمات جاهزة:",
          lblDimension: "الدقة / الأبعاد:",
          lblEcc: "مستوى تصحيح الخطأ:",
          hintEcc: "المستويات الأعلى تقاوم الخدوش والتلف",
          previewTitle: "معاينة حية ومباشرة",
          badgeLive: "جاهز للمسح",
          btnPng: "تنزيل صورة PNG",
          btnSvg: "تنزيل متجه SVG",
          btnCopy: "نسخ الصورة للحافظة",
          scanHint: "وجّه كاميرا هاتفك لاختبار المسح فوراً",
          infoTitle: "توليد احترافي لرموز QR مع أمان وخصوصية مطلقة",
          infoDesc: "تعرف على سبب حماية المعالجة المحلية لكلمات مرورك الخاصة وجهات اتصالك، مع تصدير متجه فائق النقاء للطباعة.",
          card1Title: "خصوصية كاملة بدون سحابة",
          card1Desc: "تتم معالجة كلمات مرور الواي فاي وبيانات الاتصال والرسائل داخل ذاكرة متصفحك فقط، ولا يتم إرسال أي معلومة إلى أي خادم خارجي إطلاقاً.",
          card2Title: "قابلية تكبير غير محدودة كمتجه",
          card2Desc: "حمّل ملفات SVG غير منقوصة الجودة، ملائمة للوحات الإعلانات الكبيرة، وقوائم المطاعم، وبطاقات الأعمال دون أي تشوه أو بكسلة.",
          card3Title: "دائم ومباشر بدون انتهاء",
          card3Desc: "الرموز الناتجة هي رموز مصفوفة قياسية ثابتة، لا تمر عبر روابط تقصير أو خوادم وسيطة، مما يعني أنها تعمل للأبد دون توقف.",
          faq1Q: "هل يتم تخزين كلمات مرور الواي فاي أو جهات الاتصال الخاصة بي؟",
          faq1A: "مستحيل. تجري خوارزمية التشفير محلياً بنسبة 100% في ذاكرة جهازك، وبمجرد إغلاق الصفحة أو تغيير الحقول يتم مسح البيانات فوراً دون أي تخزين.",
          faq2Q: "هل تحتوي هذه الرموز على حد لعدد مرات المسح أو تاريخ انتهاء؟",
          faq2A: "لا. رموز QR الثابتة تشفر النصوص والبيانات مباشرة داخل النمط البصري، ولا توجد أي قيود على المسح أو تواريخ انتهاء صلاحية.",
          faq3Q: "كيف تتصل الهواتف بالواي فاي عبر رمز QR؟",
          faq3A: "تتعرف كاميرات هواتف آيفون وأندرويد تلقائياً على بروتوكول WIFI القياسي، وبمجرد توجيه الكاميرا يظهر إشعار بالانضمام للشبكة بنقرة واحدة.",
          faq4Q: "أي مستوى تصحيح خطأ ينبغي أن أختار؟",
          faq4A: "المستوى M (15%) هو الأنسب لمعظم الاستخدامات الرقمية والمطبوعة. للأسطح الخارجية المعرضة للتلف أو الخدش، اختر المستوى Q (25%) أو H (30%).",
          footerText: "© 2026 VantorKit. أدوات ويب سريعة، خاصة ومجانية. تتم كافة المعالجات محلياً داخل جهازك.",
          copiedToast: "تم نسخ رمز QR إلى الحافظة بنجاح!",
          copyErrorToast: "تعذر نسخ الصورة إلى الحافظة.",
          pngDownloadToast: "تم تنزيل صورة PNG عالية الدقة!",
          svgDownloadToast: "تم تنزيل ملف SVG المتجه فائق النقاء!",
          chars: "حرف",
          modules: "وحدة نمطية"
        },
        fr: {
          backLink: "← Retour aux outils",
          brandBadge: "Outils Quotidiens • 100% Côté Client • Export Vectoriel & Haute Résolution",
          pageTitle: "Générateur de <span>QR Code</span>",
          pageSubtitle: "Générez des QR codes personnalisés haute résolution pour sites web, réseaux Wi-Fi, contacts vCard, e-mails et textes. 100% privé et traité localement dans votre navigateur.",
          tabUrl: "URL",
          tabText: "Texte",
          tabWifi: "Wi-Fi",
          tabVcard: "vCard",
          tabEmail: "E-mail",
          lblWebsiteUrl: "URL du site web :",
          hintHttps: "Commence par https://",
          lblTextMessage: "Message texte libre ou notes :",
          lblWifiSsid: "Nom du réseau (SSID) :",
          lblWifiSecurity: "Type de sécurité :",
          lblWifiPassword: "Mot de passe du réseau :",
          lblWifiHidden: "Réseau masqué (SSID non diffusé)",
          lblVcardName: "Nom complet :",
          lblVcardPhone: "Numéro de téléphone :",
          lblVcardEmail: "Adresse e-mail :",
          lblVcardOrg: "Société / Organisation :",
          lblVcardUrl: "Site internet :",
          lblEmailTo: "E-mail du destinataire :",
          lblEmailSubject: "Objet du message :",
          lblEmailBody: "Corps du message :",
          secStyling: "Apparence & Style du QR",
          lblFgColor: "Couleur avant-plan",
          lblBgColor: "Couleur d'arrière-plan",
          lblPresets: "Thèmes prédéfinis :",
          lblDimension: "Résolution / Taille :",
          lblEcc: "Niveau de correction d'erreur :",
          hintEcc: "Les niveaux élevés résistent aux rayures",
          previewTitle: "Aperçu en direct",
          badgeLive: "Prêt à scanner",
          btnPng: "Télécharger PNG",
          btnSvg: "Vecteur SVG",
          btnCopy: "Copier dans le presse-papier",
          scanHint: "Pointez votre smartphone pour tester instantanément",
          infoTitle: "Génération Professionnelle avec Confidentialité Absolue",
          infoDesc: "Découvrez pourquoi le traitement local protège vos mots de passe confidentiels et fournit des graphismes vectoriels parfaits pour l'impression.",
          card1Title: "Zéro Cloud, 100% Privé",
          card1Desc: "Vos mots de passe Wi-Fi, téléphones et messages sont encodés exclusivement dans la mémoire locale de votre navigateur. Rien n'est jamais téléversé.",
          card2Title: "Évolutivité Vectorielle Infinie",
          card2Desc: "Téléchargez des fichiers SVG vectoriels parfaits pour panneaux publicitaires, emballages et menus sans la moindre pixellisation.",
          card3Title: "Permanent & Sans Expiration",
          card3Desc: "Les QR codes statiques encodent directement vos données. Sans redirection ni intermédiaire, ils restent valables pour toujours.",
          faq1Q: "Mes identifiants Wi-Fi ou contacts vCard sont-ils stockés ?",
          faq1A: "Jamais. Tout le calcul s'effectue dans la mémoire vive de votre appareil. Dès la fermeture de l'onglet, les données disparaissent.",
          faq2Q: "Ces QR codes ont-ils une limite de scans ou une date de fin ?",
          faq2A: "Non. Ce sont des codes statiques autonomes. Aucune limite de scan ni abonnement requis.",
          faq3Q: "Comment les smartphones se connectent-ils au Wi-Fi via ce code ?",
          faq3A: "L'application photo native d'iOS et Android lit le protocole WIFI standard et propose de rejoindre le réseau en un seul clic.",
          faq4Q: "Quel niveau de correction d'erreur choisir ?",
          faq4A: "Le niveau M (15%) est le standard idéal. Pour l'impression extérieure ou les matériaux exposés aux rayures, préférez le niveau Q (25%) ou H (30%).",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, confidentiels et gratuits. Tous les traitements sont exécutés localement.",
          copiedToast: "QR Code copié dans le presse-papier !",
          copyErrorToast: "Impossible de copier l'image.",
          pngDownloadToast: "Image PNG haute résolution téléchargée !",
          svgDownloadToast: "Fichier vectoriel SVG téléchargé !",
          chars: "caractères",
          modules: "Modules"
        },
        it: {
          backLink: "← Torna agli strumenti",
          brandBadge: "Strumenti Quotidiani • 100% Lato Client • Esportazione Vettoriale & HD",
          pageTitle: "Generatore di <span>QR Code</span>",
          pageSubtitle: "Genera codici QR personalizzati ad alta risoluzione per siti web, reti Wi-Fi, contatti vCard, e-mail e testo. 100% privato ed elaborato localmente.",
          tabUrl: "URL",
          tabText: "Testo",
          tabWifi: "Wi-Fi",
          tabVcard: "vCard",
          tabEmail: "E-mail",
          lblWebsiteUrl: "URL del sito o link:",
          hintHttps: "Inizia con https://",
          lblTextMessage: "Testo libero o note:",
          lblWifiSsid: "Nome della rete (SSID):",
          lblWifiSecurity: "Tipo di sicurezza:",
          lblWifiPassword: "Password della rete:",
          lblWifiHidden: "Rete nascosta (SSID non visibile)",
          lblVcardName: "Nome completo:",
          lblVcardPhone: "Numero di telefono:",
          lblVcardEmail: "Indirizzo e-mail:",
          lblVcardOrg: "Azienda / Organizzazione:",
          lblVcardUrl: "Sito web:",
          lblEmailTo: "E-mail del destinatario:",
          lblEmailSubject: "Oggetto del messaggio:",
          lblEmailBody: "Testo dell'e-mail:",
          secStyling: "Aspetto & Stile del QR",
          lblFgColor: "Colore primo piano",
          lblBgColor: "Colore sfondo",
          lblPresets: "Temi preimpostati:",
          lblDimension: "Risoluzione / Dimensione:",
          lblEcc: "Livello correzione errori:",
          hintEcc: "Livelli più alti resistono ai graffi superficiali",
          previewTitle: "Anteprima in tempo reale",
          badgeLive: "Pronto per la scansione",
          btnPng: "Scarica PNG",
          btnSvg: "Vettoriale SVG",
          btnCopy: "Copia negli appunti",
          scanHint: "Inquadra con la fotocamera per testare subito",
          infoTitle: "Generazione Professionale con Riservatezza Assoluta",
          infoDesc: "Scopri come l'elaborazione locale protegge le tue password riservate garantendo file vettoriali nitidi per qualsiasi formato di stampa.",
          card1Title: "Zero Cloud, Privacy al 100%",
          card1Desc: "Le password Wi-Fi e le informazioni di contatto vengono elaborate unicamente nella memoria del tuo browser senza invii a server esterni.",
          card2Title: "Scalabilità Vettoriale Infinita",
          card2Desc: "Scarica file SVG pronti per insegne, menu di ristoranti o biglietti da visita senza alcuna perdita di definizione o sgranatura.",
          card3Title: "Permanente & Diretto",
          card3Desc: "I codici QR generati sono statici e standard: non usano link di reindirizzamento e funzioneranno per sempre senza scadenze.",
          faq1Q: "Le mie credenziali Wi-Fi o i contatti vengono salvati?",
          faq1A: "Assolutamente no. L'elaborazione avviene interamente nella RAM del tuo dispositivo e scompare chiudendo la scheda del browser.",
          faq2Q: "I codici QR hanno un limite di scansioni o scadono?",
          faq2A: "No. I codici QR statici contengono direttamente i dati al loro interno. Non ci sono scadenze né limiti di scansione.",
          faq3Q: "Come si collegano gli smartphone al Wi-Fi tramite QR Code?",
          faq3A: "La fotocamera di iPhone e Android riconosce il protocollo WIFI standard e mostra un prompt immediato per connettersi con un tocco.",
          faq4Q: "Quale livello di correzione errori scegliere?",
          faq4A: "Il livello M (15%) offre il compromesso perfetto. Se stampi su superfici curve o esposte a usura, scegli il livello Q (25%) o H (30%).",
          footerText: "© 2026 VantorKit. Utility web veloci, private e gratuite. Tutte le elaborazioni avvengono localmente.",
          copiedToast: "QR Code copiato negli appunti!",
          copyErrorToast: "Impossibile copiare l'immagine.",
          pngDownloadToast: "Immagine PNG ad alta risoluzione scaricata!",
          svgDownloadToast: "File vettoriale SVG scaricato!",
          chars: "caratteri",
          modules: "Moduli"
        }
      };

      const LANG_LABELS = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
        it: 'Italiano'
      };

      // --- State ---
      let currentMode = 'url'; // 'url' | 'text' | 'wifi' | 'vcard' | 'email'
      let qrSize = 300;
      let qrEcc = 'M'; // 'L' | 'M' | 'Q' | 'H'
      let fgColor = '#000000';
      let bgColor = '#ffffff';
      let currentQr = null;
      let toastTimer = null;

      // --- DOM Elements ---
      const modeTabs = document.getElementById('modeTabs');
      const modeTabBtns = document.querySelectorAll('.mode-tab-btn');
      const modeTabPill = document.getElementById('modeTabPill');
      const modePanels = document.querySelectorAll('.mode-panel');

      // Inputs
      const urlInput = document.getElementById('urlInput');
      const textInput = document.getElementById('textInput');
      const textCharCount = document.getElementById('textCharCount');
      const wifiSsid = document.getElementById('wifiSsid');
      const wifiSecurity = document.getElementById('wifiSecurity');
      const wifiPassword = document.getElementById('wifiPassword');
      const wifiPassGroup = document.getElementById('wifiPassGroup');
      const wifiHidden = document.getElementById('wifiHidden');
      const btnToggleWifiPass = document.getElementById('btnToggleWifiPass');
      const eyeIconOpen = document.getElementById('eyeIconOpen');
      const eyeIconClosed = document.getElementById('eyeIconClosed');

      const vcardName = document.getElementById('vcardName');
      const vcardPhone = document.getElementById('vcardPhone');
      const vcardEmail = document.getElementById('vcardEmail');
      const vcardOrg = document.getElementById('vcardOrg');
      const vcardUrl = document.getElementById('vcardUrl');

      const emailTo = document.getElementById('emailTo');
      const emailSubject = document.getElementById('emailSubject');
      const emailBody = document.getElementById('emailBody');

      // Styling Controls
      const fgColorPicker = document.getElementById('fgColorPicker');
      const fgHexInput = document.getElementById('fgHexInput');
      const bgColorPicker = document.getElementById('bgColorPicker');
      const bgHexInput = document.getElementById('bgHexInput');
      const sizeSlider = document.getElementById('sizeSlider');
      const sizeBadge = document.getElementById('sizeBadge');
      const eccPills = document.querySelectorAll('.ecc-pill');
      const paletteBtns = document.querySelectorAll('.palette-btn');

      // Preview & Export Elements
      const canvasBoard = document.getElementById('canvasBoard');
      const qrCanvas = document.getElementById('qrCanvas');
      const metaSize = document.getElementById('metaSize');
      const metaModules = document.getElementById('metaModules');
      const metaEcc = document.getElementById('metaEcc');
      const btnDownloadPng = document.getElementById('btnDownloadPng');
      const btnDownloadSvg = document.getElementById('btnDownloadSvg');
      const btnCopyClipboard = document.getElementById('btnCopyClipboard');

      // Language Switcher Elements
      const langDropdown = document.getElementById('langDropdown');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // --- Utilities ---
      function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2400);
      }

      function triggerDownload(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      function sanitizeHex(val, fallback) {
        val = (val || '').trim();
        if (/^#[0-9a-fA-F]{6}$/.test(val)) return val;
        if (/^[0-9a-fA-F]{6}$/.test(val)) return '#' + val;
        return fallback;
      }

      // --- Mode Tabs Switching with Animated Indicator ---
      function updateModeTabPill() {
        const activeBtn = modeTabs.querySelector('.mode-tab-btn.active');
        if (!activeBtn || !modeTabPill) return;
        modeTabPill.style.width = `${activeBtn.offsetWidth}px`;
        modeTabPill.style.transform = `translateX(${activeBtn.offsetLeft - 5}px)`;
      }

      modeTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-mode');
          if (mode === currentMode) return;

          currentMode = mode;
          modeTabBtns.forEach(b => b.classList.toggle('active', b === btn));
          updateModeTabPill();

          modePanels.forEach(p => {
            p.classList.toggle('active', p.id === `panel${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
          });

          renderQr();
        });
      });

      window.addEventListener('resize', updateModeTabPill);

      // --- Data Payload Assembly ---
      function escapeWifi(str) {
        return (str || '').replace(/([\\;,:"])/g, '\\$1');
      }

      function getPayloadString() {
        switch (currentMode) {
          case 'url': {
            let u = (urlInput.value || '').trim();
            if (!u) u = 'https://vantorkit.com';
            return u;
          }
          case 'text': {
            let t = textInput.value || '';
            return t || 'VantorKit QR Code Generator';
          }
          case 'wifi': {
            const ssid = escapeWifi((wifiSsid.value || '').trim());
            const sec = wifiSecurity.value || 'WPA';
            const pass = escapeWifi(wifiPassword.value || '');
            const isHidden = wifiHidden.checked;
            
            let wifiStr = `WIFI:S:${ssid};T:${sec};`;
            if (sec !== 'nopass' && pass) {
              wifiStr += `P:${pass};`;
            }
            if (isHidden) {
              wifiStr += `H:true;`;
            }
            wifiStr += `;`;
            return wifiStr;
          }
          case 'vcard': {
            const name = (vcardName.value || '').trim();
            const phone = (vcardPhone.value || '').trim();
            const email = (vcardEmail.value || '').trim();
            const org = (vcardOrg.value || '').trim();
            let site = (vcardUrl.value || '').trim();
            if (site && !/^https?:\/\//i.test(site)) site = 'https://' + site;

            const parts = name.split(/\s+/);
            const lastName = parts.length > 1 ? parts.slice(1).join(' ') : '';
            const firstName = parts[0] || '';

            let card = 'BEGIN:VCARD\nVERSION:3.0\n';
            if (name) {
              card += `FN:${name}\n`;
              card += `N:${lastName};${firstName};;;\n`;
            }
            if (org) card += `ORG:${org}\n`;
            if (phone) card += `TEL;TYPE=CELL,VOICE:${phone}\n`;
            if (email) card += `EMAIL;TYPE=WORK,INTERNET:${email}\n`;
            if (site) card += `URL:${site}\n`;
            card += 'END:VCARD';
            return card;
          }
          case 'email': {
            const to = (emailTo.value || '').trim();
            const subj = (emailSubject.value || '').trim();
            const body = emailBody.value || '';
            if (!to) return 'mailto:info@example.com';
            let mailto = `mailto:${encodeURIComponent(to)}`;
            const params = [];
            if (subj) params.push(`subject=${encodeURIComponent(subj)}`);
            if (body) params.push(`body=${encodeURIComponent(body)}`);
            if (params.length > 0) mailto += `?${params.join('&')}`;
            return mailto;
          }
          default:
            return 'https://vantorkit.com';
        }
      }

      // --- QR Code Rendering to Canvas & SVG ---
      function renderQr() {
        const payload = getPayloadString();
        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[activeLang] || I18N.en;

        try {
          // typeNumber = 0 auto-detects version
          const qr = qrcode(0, qrEcc);
          qr.addData(payload);
          qr.make();
          currentQr = qr;

          const moduleCount = qr.getModuleCount();
          const margin = 4; // Standard quiet zone
          const totalModules = moduleCount + margin * 2;

          qrCanvas.width = qrSize;
          qrCanvas.height = qrSize;
          const ctx = qrCanvas.getContext('2d');

          // Draw Background
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, qrSize, qrSize);

          // Draw Foreground Modules
          ctx.fillStyle = fgColor;
          const cellSize = qrSize / totalModules;

          for (let r = 0; r < moduleCount; r++) {
            for (let c = 0; c < moduleCount; c++) {
              if (qr.isDark(r, c)) {
                const x = (c + margin) * cellSize;
                const y = (r + margin) * cellSize;
                const w = ((c + margin + 1) * cellSize) - x;
                const h = ((r + margin + 1) * cellSize) - y;
                ctx.fillRect(x, y, w, h);
              }
            }
          }

          // Update board background to match QR background for seamless presentation
          canvasBoard.style.backgroundColor = bgColor;

          // Update metadata pills
          metaSize.textContent = `${qrSize} × ${qrSize} px`;
          metaModules.textContent = `${moduleCount} × ${moduleCount} ${dict.modules}`;
          metaEcc.textContent = `Level ${qrEcc} (${qrEcc === 'L' ? '7%' : qrEcc === 'M' ? '15%' : qrEcc === 'Q' ? '25%' : '30%'})`;

        } catch (err) {
          console.warn('QR Code generation error:', err);
          // If data exceeds capacity at current ECC, suggest lowering ECC
          showToast('Data exceeds capacity for this error correction level. Try lowering to Level L or M.');
        }
      }

      // Generate pristine, resolution-independent SVG
      function generateQrSvg() {
        if (!currentQr) return '';
        const moduleCount = currentQr.getModuleCount();
        const margin = 4;
        const totalModules = moduleCount + margin * 2;

        let rects = '';
        for (let r = 0; r < moduleCount; r++) {
          for (let c = 0; c < moduleCount; c++) {
            if (currentQr.isDark(r, c)) {
              rects += `<rect x="${c + margin}" y="${r + margin}" width="1" height="1" fill="${fgColor}"/>\n`;
            }
          }
        }

        return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${totalModules} ${totalModules}" width="${qrSize}" height="${qrSize}">
  <rect width="${totalModules}" height="${totalModules}" fill="${bgColor}"/>
  ${rects}
</svg>`;
      }

      // --- Export Actions ---
      // 1. Download PNG
      btnDownloadPng.addEventListener('click', () => {
        if (!qrCanvas) return;
        const dataUrl = qrCanvas.toDataURL('image/png');
        triggerDownload(dataUrl, 'vantorkit-qrcode.png');
        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        showToast((I18N[activeLang] || I18N.en).pngDownloadToast);
      });

      // 2. Download Vector SVG
      btnDownloadSvg.addEventListener('click', () => {
        const svgContent = generateQrSvg();
        if (!svgContent) return;
        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        triggerDownload(url, 'vantorkit-qrcode.svg');
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        showToast((I18N[activeLang] || I18N.en).svgDownloadToast);
      });

      // 3. Copy Image to System Clipboard
      btnCopyClipboard.addEventListener('click', async () => {
        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[activeLang] || I18N.en;

        if (!navigator.clipboard || !window.ClipboardItem) {
          showToast(dict.copyErrorToast);
          return;
        }

        try {
          qrCanvas.toBlob(async (blob) => {
            if (!blob) {
              showToast(dict.copyErrorToast);
              return;
            }
            try {
              await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
              ]);
              showToast(dict.copiedToast);
            } catch (clipErr) {
              console.error('Clipboard write failed:', clipErr);
              showToast(dict.copyErrorToast);
            }
          }, 'image/png');
        } catch (e) {
          showToast(dict.copyErrorToast);
        }
      });

      // --- Event Listeners for Live Preview Updates ---
      const allInputs = [
        urlInput, textInput, wifiSsid, wifiPassword, wifiHidden,
        vcardName, vcardPhone, vcardEmail, vcardOrg, vcardUrl,
        emailTo, emailSubject, emailBody
      ];

      allInputs.forEach(inp => {
        if (!inp) return;
        inp.addEventListener('input', () => {
          if (inp === textInput) {
            const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
            const dict = I18N[activeLang] || I18N.en;
            textCharCount.textContent = `${textInput.value.length} ${dict.chars}`;
          }
          renderQr();
        });
      });

      wifiSecurity.addEventListener('change', () => {
        wifiPassGroup.style.display = wifiSecurity.value === 'nopass' ? 'none' : 'block';
        renderQr();
      });

      // Wi-Fi Password Show/Hide Toggle
      btnToggleWifiPass.addEventListener('click', () => {
        const isPass = wifiPassword.type === 'password';
        wifiPassword.type = isPass ? 'text' : 'password';
        eyeIconOpen.style.display = isPass ? 'none' : 'block';
        eyeIconClosed.style.display = isPass ? 'block' : 'none';
      });

      // Preset URL chips
      document.querySelectorAll('.chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          urlInput.value = btn.getAttribute('data-fill');
          renderQr();
        });
      });

      // Foreground Color Pickers
      fgColorPicker.addEventListener('input', (e) => {
        fgColor = e.target.value;
        fgHexInput.value = fgColor.toUpperCase();
        renderQr();
      });

      fgHexInput.addEventListener('change', () => {
        fgColor = sanitizeHex(fgHexInput.value, '#000000');
        fgHexInput.value = fgColor.toUpperCase();
        fgColorPicker.value = fgColor;
        renderQr();
      });

      // Background Color Pickers
      bgColorPicker.addEventListener('input', (e) => {
        bgColor = e.target.value;
        bgHexInput.value = bgColor.toUpperCase();
        renderQr();
      });

      bgHexInput.addEventListener('change', () => {
        bgColor = sanitizeHex(bgHexInput.value, '#FFFFFF');
        bgHexInput.value = bgColor.toUpperCase();
        bgColorPicker.value = bgColor;
        renderQr();
      });

      // Palette Presets
      paletteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          fgColor = btn.getAttribute('data-fg');
          bgColor = btn.getAttribute('data-bg');
          fgColorPicker.value = fgColor;
          fgHexInput.value = fgColor.toUpperCase();
          bgColorPicker.value = bgColor;
          bgHexInput.value = bgColor.toUpperCase();
          renderQr();
        });
      });

      // Size Slider
      sizeSlider.addEventListener('input', (e) => {
        qrSize = parseInt(e.target.value, 10);
        sizeBadge.textContent = `${qrSize} × ${qrSize} px`;
        renderQr();
      });

      // Error Correction Level Selector
      eccPills.forEach(pill => {
        pill.addEventListener('click', () => {
          eccPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          qrEcc = pill.getAttribute('data-ecc');
          renderQr();
        });
      });

      // --- Internationalization (i18n) Handler ---
      function toggleLangMenu(force) {
        const isExpanded = force !== undefined ? force : !langDropdown.classList.contains('active');
        langDropdown.classList.toggle('active', isExpanded);
        langToggleBtn.setAttribute('aria-expanded', isExpanded);
      }

      if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleLangMenu();
        });
      }

      document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target)) {
          toggleLangMenu(false);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && langDropdown && langDropdown.classList.contains('active')) {
          toggleLangMenu(false);
          langToggleBtn.focus();
        }
      });

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.getAttribute('data-lang');
          if (lang && I18N[lang]) {
            setLanguage(lang);
            toggleLangMenu(false);
          }
        });
      });

      function setLanguage(lang) {
      window.setLanguage = setLanguage;
        if (!I18N[lang]) lang = 'en';
        localStorage.setItem('vantorkit_lang', lang);

        const dict = I18N[lang];
        const isRtl = lang === 'ar';

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        if (currentLangLabel) {
          currentLangLabel.textContent = LANG_LABELS[lang] || 'English';
        }

        langOptions.forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Translate data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (dict[key]) {
            if (key === 'pageTitle') {
              el.innerHTML = dict[key];
            } else {
              el.textContent = dict[key];
            }
          }
        });

        // Update tab pill position and re-render QR with translated labels
        updateModeTabPill();
        renderQr();
      }

      // --- Initialization ---
      const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(savedLang);
      updateModeTabPill();
      renderQr();

    })();

(function() {
    'use strict';

    const LANG_NAMES = {
      en: 'English',
      ar: 'العربية',
      fr: 'Français',
      it: 'Italiano'
    };

    const BACK_LABELS = {
      en: '← Back to Tools',
      ar: 'الرجوع إلى الأدوات ←',
      fr: '← Retour aux outils',
      it: '← Torna agli strumenti'
    };

    const SEO_META = {
    "en": {
        "title": "QR Code Generator – Custom Vector SVG & PNG Codes",
        "desc": "Create scannable QR matrices for URLs, WiFi credentials, vCards, and emails. Visual rendering compiles into vector SVG entirely on your personal device."
    },
    "ar": {
        "title": "توليد رموز QR – إنشاء باركود متجه SVG وصور PNG",
        "desc": "أنشئ رموز QR سريعة للروابط وبيانات Wi-Fi وجهات الاتصال وبطاقات vCard. يتم رسم الرموز وتصديرها محلياً في جهازك دون مشاركة معلوماتك."
    },
    "fr": {
        "title": "Générateur de QR Code – Export Vectoriel SVG & PNG",
        "desc": "Créez des codes QR pour vos liens, accès Wi-Fi, contacts et emails. La génération graphique s'effectue entièrement sur votre appareil."
    },
    "it": {
        "title": "Generatore Codici QR – Esportazione Vettoriale SVG e PNG",
        "desc": "Genera codici QR per collegamenti web, reti Wi-Fi, contatti e messaggi. Il rendering visivo si elabora localmente sul tuo dispositivo."
    }
};

    function updateActiveLanguageUI(lang) {
      if (!LANG_NAMES[lang]) lang = 'en';
      const isRtl = (lang === 'ar');

      // 1. Root lang & dir attributes
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      const htmlRoot = document.getElementById('htmlRoot');
      if (htmlRoot && htmlRoot !== document.documentElement) {
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      }

      // 2. Active button label text
      const currentLangLabel = document.getElementById('currentLangLabel');
      if (currentLangLabel) {
        currentLangLabel.textContent = LANG_NAMES[lang];
      }

      // 3. Dropdown option active indicator
      document.querySelectorAll('.lang-option').forEach(opt => {
        const optLang = opt.getAttribute('data-lang');
        opt.classList.toggle('active', optLang === lang);
      });

      // 4. Back to Tools link localization
      const backSpan = document.querySelector('#backToHome [data-i18n="backLink"]');
      if (backSpan && BACK_LABELS[lang]) {
        backSpan.textContent = BACK_LABELS[lang];
      }

      // 5. SEO Content Layer language block visibility sync
      if (typeof SEO_META !== 'undefined' && SEO_META[lang]) {
        if (SEO_META[lang].title) {
          document.title = SEO_META[lang].title;
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) ogTitle.setAttribute('content', SEO_META[lang].title);
        }
        if (SEO_META[lang].desc) {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', SEO_META[lang].desc);
          const ogDesc = document.querySelector('meta[property="og:description"]');
          if (ogDesc) ogDesc.setAttribute('content', SEO_META[lang].desc);
        }
      }

      document.querySelectorAll('.tool-content-layer .lang-content-block').forEach(block => {
        block.style.display = (block.getAttribute('data-lang') === lang) ? 'block' : 'none';
      });
    }

    function initLangSwitcher() {
      const dropdown = document.getElementById('langDropdown');
      const oldBtn = document.getElementById('langToggleBtn');
      const oldMenu = document.getElementById('langMenu');
      if (!dropdown || !oldBtn || !oldMenu) return;

      // Clone button & menu to neutralize any competing or double-toggling event listeners
      const toggleBtn = oldBtn.cloneNode(true);
      oldBtn.parentNode.replaceChild(toggleBtn, oldBtn);

      const menu = oldMenu.cloneNode(true);
      oldMenu.parentNode.replaceChild(menu, oldMenu);

      function openMenu() {
        menu.classList.add('open', 'show');
        dropdown.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }

      function closeMenu() {
        menu.classList.remove('open', 'show');
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }

      function toggleMenu(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const isOpen = menu.classList.contains('open') || menu.classList.contains('show') || dropdown.classList.contains('active');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      // Authoritative toggle click listener
      toggleBtn.addEventListener('click', toggleMenu);

      // Authoritative language options click listener
      menu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', function(e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const selectedLang = opt.getAttribute('data-lang');
          if (selectedLang && LANG_NAMES[selectedLang]) {
            try {
              localStorage.setItem('vantorkit_lang', selectedLang);
            } catch (err) {}

            updateActiveLanguageUI(selectedLang);

            // Call tool translation engine if defined
            if (typeof window.setLanguage === 'function') {
              try { window.setLanguage(selectedLang); } catch (err) { console.warn(err); }
            } else if (typeof window.applyLanguage === 'function') {
              try { window.applyLanguage(selectedLang); } catch (err) { console.warn(err); }
            }

            closeMenu();
          }
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          closeMenu();
        }
      });

      // Close dropdown on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeMenu();
        }
      });

      // Initial apply from localStorage
      let currentLang = 'en';
      try {
        currentLang = localStorage.getItem('vantorkit_lang') || 'en';
      } catch (err) {}
      if (!LANG_NAMES[currentLang]) currentLang = 'en';
      updateActiveLanguageUI(currentLang);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLangSwitcher);
    } else {
      initLangSwitcher();
    }
  })();