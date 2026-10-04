(function () {
      'use strict';

      // --- Internationalization (i18n) Dictionary ---
      const I18N = {
        en: {
          backLink: "← Back to Tools",
          brandBadge: "Images & Vector • 100% Client-Side • Ultra-HD Rasterizer",
          pageTitle: "SVG to <span>PNG Converter</span>",
          pageSubtitle: "Render SVG vectors to ultra-sharp PNGs up to 8x resolution. Customize dimensions, preserve transparent backgrounds, or fill solid colors with zero server uploads.",
          tabUpload: "Upload File",
          tabPaste: "Paste SVG Code",
          dropTitle: "Drop an SVG File Here or Click to Browse",
          dropDesc: "Supports all valid .svg files, illustrations, icons, and logos.",
          btnBrowse: "Choose SVG File",
          lblSamples: "Quick Samples:",
          secScaling: "Resolution Scaling Multiplier",
          scale1: "Standard",
          scale2: "Retina HD",
          scale4: "4K Ultra",
          scale8: "Print Master",
          lblWidth: "Width (px)",
          lblHeight: "Height (px)",
          secBg: "Background Canvas Fill",
          bgTransparent: "Transparent (PNG)",
          bgColor: "Solid Color",
          previewTitle: "Raster Canvas Preview",
          badgeLive: "Pixel-Perfect",
          btnDownload: "Download PNG",
          btnCopy: "Copy Image",
          btnReset: "Reset to Default",
          infoTitle: "Professional Vector Rasterization Without Compromise",
          infoDesc: "Discover how browser-native Canvas engines convert vector mathematics into ultra-high-density bitmap images with zero server logging.",
          card1Title: "Infinite Vector Mathematics",
          card1Desc: "SVGs are formed of Bézier curves and coordinate equations rather than pixels. When you scale up to 4x or 8x, our engine re-computes every line curve directly at the target pixel grid for razor-sharp clarity.",
          card2Title: "100% In-Memory Privacy",
          card2Desc: "Your proprietary design assets, client logos, and vector illustrations are processed exclusively inside your browser's local sandbox memory. Zero images or code strings are ever sent over the network.",
          card3Title: "Universal Compatibility",
          card3Desc: "While many social networks, email clients, and desktop editors reject raw SVG vectors, high-resolution PNGs with transparent alpha channels are universally supported everywhere.",
          faq1Q: "Why convert SVG vectors to PNG format?",
          faq1A: "Many platforms—including Microsoft Office, Discord, Slack, and various content management systems—do not support raw SVG files or have SVG rendering vulnerabilities. PNG provides pixel-perfect universal viewing with transparent backgrounds.",
          faq2Q: "What scale multiplier should I choose?",
          faq2A: "For web icons and UI elements, 1x or 2x (Retina) is ideal. For presentations, 4K video overlays, or print merchandise, select 4x or 8x to generate massive high-density bitmaps that never look blurry.",
          faq3Q: "How do I preserve transparency in my output PNG?",
          faq3A: "Keep the background mode set to 'Transparent (PNG)' (the default). The output PNG will retain an intact 32-bit alpha channel, allowing the logo or illustration to sit seamlessly over any background.",
          faq4Q: "Are there any file size or conversion limits?",
          faq4A: "No. Because all raster processing runs natively on your computer's GPU and CPU via the browser canvas API, there are no artificial file limits, watermarks, or conversion quotas.",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally.",
          // Dynamic strings:
          copiedToast: "PNG copied to clipboard!",
          copyErrorToast: "Could not copy image to clipboard.",
          pngDownloadToast: "High-resolution PNG downloaded!",
          invalidSvgToast: "Invalid SVG content. Please check markup.",
          loadedFileToast: "SVG loaded successfully!"
        },
        ar: {
          backLink: "← العودة إلى الأدوات",
          brandBadge: "الصور والمتجهات • محلي 100% في المتصفح • تنقيط فائق الدقة",
          pageTitle: "تحويل SVG إلى <span>صورة PNG</span>",
          pageSubtitle: "حوّل رسوميات ومتجهات SVG إلى صور PNG فائقة النقاء بمضاعفة دقة تصل إلى 8x. تحكم بالأبعاد والشفافية والألوان دون أي رفع للسحابة.",
          tabUpload: "رفع ملف",
          tabPaste: "لصق كود SVG",
          dropTitle: "اسحب ملف SVG هنا أو انقر للاختيار",
          dropDesc: "يدعم جميع ملفات .svg والشعارات والرموز المتجهة الصالحة.",
          btnBrowse: "اختر ملف SVG",
          lblSamples: "عينات جاهزة:",
          secScaling: "مضاعف دقة التكبير",
          scale1: "قياسي",
          scale2: "شاشات ريتنا",
          scale4: "دقة 4K فائقة",
          scale8: "جودة طباعة ممتازة",
          lblWidth: "العرض (بكسل)",
          lblHeight: "الارتفاع (بكسل)",
          secBg: "تعبئة خلفية الصورة",
          bgTransparent: "شفاف (PNG)",
          bgColor: "لون مخصص",
          previewTitle: "معاينة الصورة الناتجة",
          badgeLive: "دقة بكسلية",
          btnDownload: "تنزيل PNG",
          btnCopy: "نسخ الصورة",
          btnReset: "إعادة تعيين",
          infoTitle: "تنقيط متجهات احترافي دون أي مساومة على الجودة",
          infoDesc: "اكتشف كيف تحول محركات Canvas المحلية المعادلات الهندسية إلى صور نقطية فائقة الكثافة مع خصوصية مطلقة.",
          card1Title: "معادلات هندسية لا نهائية",
          card1Desc: "تتكون ملفات SVG من منحنيات بيزيه رياضية وليس من بكسلات مسبقة الصنع. عند المضاعفة إلى 4x أو 8x يعاد رسم المنحنيات بالكامل لحدة بصرية متناهية.",
          card2Title: "خصوصية 100% داخل الذاكرة",
          card2Desc: "تتم معالجة شعارات عملائك وتصميماتك الحصرية داخل ذاكرة متصفحك المحلية فقط، دون إرسال أي بايت عبر الإنترنت.",
          card3Title: "توافق عالمي شامل",
          card3Desc: "بينما ترفض العديد من المنصات وتطبيقات المراسلة ملفات SVG، فإن صور PNG ذات الخلفية الشفافة مدعومة في كل مكان دون استثناء.",
          faq1Q: "لماذا أحول ملفات SVG إلى تنسيق PNG؟",
          faq1A: "العديد من البرامج ومنصات التواصل لا تعرض ملفات SVG مباشرة. يضمن تنسيق PNG عرضاً متطابقاً وثابتاً مع الحفاظ على شفافية الخلفية.",
          faq2Q: "أي مضاعف دقة عليّ اختياره؟",
          faq2A: "لرموز الويب ومواقع الإنترنت، يعد 1x أو 2x مثالياً. للملصقات والطباعة الكبيرة أو شاشات 4K، اختر 4x أو 8x لتجنب أي بهتان.",
          faq3Q: "كيف أحافظ على خلفية شفافة في الصورة الناتجة؟",
          faq3A: "اختر وضع 'شفاف (PNG)' (الوضع الافتراضي)، وستحتفظ الصورة بقناة ألفا الشفافة لتناسب وضعها فوق أي تصميم آخر.",
          faq4Q: "هل هناك قيود على حجم الملفات أو عدد مرات التحويل؟",
          faq4A: "كلا، نظراً لأن التحويل يجري محلياً عبر معالج الرسوميات في جهازك، فلا توجد أي قيود أو علامات مائية أو حدود استخدام.",
          footerText: "© 2026 VantorKit. أدوات ويب سريعة، خاصة ومجانية. تتم كافة المعالجات محلياً داخل جهازك.",
          copiedToast: "تم نسخ صورة PNG إلى الحافظة بنجاح!",
          copyErrorToast: "تعذر نسخ الصورة إلى الحافظة.",
          pngDownloadToast: "تم تنزيل صورة PNG عالية الدقة!",
          invalidSvgToast: "محتوى SVG غير صالح، يرجى فحص الكود.",
          loadedFileToast: "تم تحميل ملف SVG بنجاح!"
        },
        fr: {
          backLink: "← Retour aux outils",
          brandBadge: "Images & Vecteur • 100% Côté Client • Rastériseur Ultra-HD",
          pageTitle: "Convertisseur <span>SVG en PNG</span>",
          pageSubtitle: "Convertissez vos fichiers SVG en PNG haute résolution jusqu'à 8x. Personnalisez les dimensions, conservez la transparence ou appliquez des couleurs sans téléversement serveur.",
          tabUpload: "Importer un fichier",
          tabPaste: "Coller le code SVG",
          dropTitle: "Déposez un fichier SVG ici ou cliquez pour parcourir",
          dropDesc: "Prend en charge tous les fichiers .svg valides, logos, icônes et illustrations.",
          btnBrowse: "Choisir un fichier SVG",
          lblSamples: "Exemples rapides :",
          secScaling: "Multiplicateur de Résolution",
          scale1: "Standard",
          scale2: "Rétina HD",
          scale4: "Ultra 4K",
          scale8: "Qualité Impression",
          lblWidth: "Largeur (px)",
          lblHeight: "Hauteur (px)",
          secBg: "Remplissage de l'Arrière-Plan",
          bgTransparent: "Transparent (PNG)",
          bgColor: "Couleur unie",
          previewTitle: "Aperçu du Rendu Canvas",
          badgeLive: "Rendu Précis",
          btnDownload: "Télécharger PNG",
          btnCopy: "Copier l'image",
          btnReset: "Réinitialiser",
          infoTitle: "Rastérisation Vectorielle Sans Compromis",
          infoDesc: "Découvrez comment le moteur Canvas natif transforme les courbes mathématiques en bitmaps denses avec une confidentialité absolue.",
          card1Title: "Mathématiques Vectorielles Infinies",
          card1Desc: "Les SVGs sont constitués de courbes de Bézier. En choisissant 4x ou 8x, notre moteur recalcule chaque courbe à la résolution cible pour une netteté totale.",
          card2Title: "Confidentialité 100% en Mémoire",
          card2Desc: "Vos logos d'entreprise et créations graphiques restent exclusivement dans la mémoire vive de votre navigateur. Rien n'est envoyé sur internet.",
          card3Title: "Compatibilité Universelle",
          card3Desc: "Tandis que de nombreuses applications rejettent le format SVG, le PNG avec canal alpha transparent est supporté partout sans restriction.",
          faq1Q: "Pourquoi convertir du SVG en PNG ?",
          faq1A: "De nombreuses applications (Office, réseaux sociaux, suites graphiques) ne gèrent pas le format SVG. Le PNG offre une compatibilité universelle immédiate.",
          faq2Q: "Quel multiplicateur d'échelle choisir ?",
          faq2A: "Pour les sites web, 1x ou 2x (Retina) suffit amplement. Pour l'impression papier ou les écrans 4K, choisissez 4x ou 8x.",
          faq3Q: "Comment conserver la transparence ?",
          faq3A: "Laissez l'option sur 'Transparent (PNG)' (sélection par défaut). Le fichier PNG conservera son canal alpha sans dégradation.",
          faq4Q: "Y a-t-il des limites de taille ou de conversion ?",
          faq4A: "Aucune. Tout s'exécute directement sur votre processeur graphique via l'API Canvas de votre navigateur.",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, confidentiels et gratuits. Tous les traitements sont exécutés localement.",
          copiedToast: "Image PNG copiée dans le presse-papier !",
          copyErrorToast: "Impossible de copier l'image.",
          pngDownloadToast: "Image PNG haute résolution téléchargée !",
          invalidSvgToast: "Contenu SVG invalide. Vérifiez le balisage.",
          loadedFileToast: "Fichier SVG chargé avec succès !"
        },
        it: {
          backLink: "← Torna agli strumenti",
          brandBadge: "Immagini & Vettoriale • 100% Lato Client • Rasterizzatore Ultra-HD",
          pageTitle: "Convertitore da <span>SVG a PNG</span>",
          pageSubtitle: "Trasforma grafiche vettoriali SVG in immagini PNG nitide fino a 8x di risoluzione. Personalizza dimensioni, trasparenza e colori senza caricare dati su server.",
          tabUpload: "Carica file",
          tabPaste: "Incolla codice SVG",
          dropTitle: "Trascina un file SVG qui o clicca per sfogliare",
          dropDesc: "Supporta tutti i file .svg validi, loghi, illustrazioni e icone.",
          btnBrowse: "Scegli file SVG",
          lblSamples: "Esempi veloci:",
          secScaling: "Moltiplicatore di Risoluzione",
          scale1: "Standard",
          scale2: "Retina HD",
          scale4: "Ultra 4K",
          scale8: "Stampa Professionale",
          lblWidth: "Larghezza (px)",
          lblHeight: "Altezza (px)",
          secBg: "Sfondo del Canvas",
          bgTransparent: "Trasparente (PNG)",
          bgColor: "Colore pieno",
          previewTitle: "Anteprima Canvas",
          badgeLive: "Pixel-Perfect",
          btnDownload: "Scarica PNG",
          btnCopy: "Copia immagine",
          btnReset: "Ripristina",
          infoTitle: "Rasterizzazione Vettoriale Professionale",
          infoDesc: "Scopri come il motore Canvas del browser trasforma la geometria vettoriale in bitmap ad altissima densità senza inviare dati all'esterno.",
          card1Title: "Geometria Vettoriale Infinita",
          card1Desc: "Gli SVG usano curve matematiche anziché pixel statici. Scalando a 4x o 8x, il nostro motore ridisegna le curve con nitidezza cristallina.",
          card2Title: "Privacy 100% in Memoria Locale",
          card2Desc: "I tuoi loghi aziendali e file grafici rimangono confinati nella RAM del browser, senza mai transitare su server cloud.",
          card3Title: "Compatibilità Universale",
          card3Desc: "Mentre molte piattaforme rifiutano i file SVG, il formato PNG con canale alpha trasparente è accettato da qualsiasi software.",
          faq1Q: "Perché convertire SVG in formato PNG?",
          faq1A: "Molti programmi e social network non supportano il rendering diretto degli SVG. Il PNG garantisce una visualizzazione perfetta ovunque.",
          faq2Q: "Quale moltiplicatore di scala scegliere?",
          faq2A: "Per il web usa 1x o 2x. Per presentazioni su schermi 4K o stampe di grande formato, scegli 4x o 8x.",
          faq3Q: "Come mantenere lo sfondo trasparente?",
          faq3A: "Lascia selezionata l'opzione 'Trasparente (PNG)'. Il file manterrà il canale alpha integro per sovrapporsi a qualsiasi sfondo.",
          faq4Q: "Ci sono limiti di dimensione o conversioni?",
          faq4A: "Nessun limite. L'elaborazione sfrutta interamente le risorse della tua scheda grafica in locale senza quote o filigrane.",
          footerText: "© 2026 VantorKit. Utility web veloci, private e gratuite. Tutte le elaborazioni avvengono localmente.",
          copiedToast: "Immagine PNG copiata negli appunti!",
          copyErrorToast: "Impossibile copiare l'immagine.",
          pngDownloadToast: "PNG ad alta risoluzione scaricato!",
          invalidSvgToast: "Contenuto SVG non valido. Controlla il codice.",
          loadedFileToast: "File SVG caricato con successo!"
        }
      };

      const LANG_LABELS = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
        it: 'Italiano'
      };

      // Built-in high-value sample SVGs
      const SAMPLE_SVGS = {
        badge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect x="15" y="15" width="170" height="170" rx="35" fill="#0d111d" stroke="rgba(59,130,246,0.5)" stroke-width="3"/>
  <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(168,85,247,0.3)" stroke-width="2" stroke-dasharray="6,4"/>
  <path d="M60 65L95 140L108 115L82 65H60Z" fill="url(#g1)" filter="url(#glow)"/>
  <path d="M140 65L105 140L92 115L118 65H140Z" fill="url(#g2)" filter="url(#glow)"/>
  <circle cx="100" cy="65" r="9" fill="#60a5fa"/>
  <circle cx="100" cy="140" r="7" fill="#c084fc"/>
</svg>`,
        rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="rf" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef08a"/>
    </linearGradient>
    <linearGradient id="rb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>
  <!-- Flames -->
  <path d="M100 135 C85 160, 95 185, 100 195 C105 185, 115 160, 100 135 Z" fill="url(#rf)"/>
  <path d="M100 140 C92 155, 96 175, 100 182 C104 175, 108 155, 100 140 Z" fill="#ffffff"/>
  <!-- Fins -->
  <path d="M65 130 C65 130, 60 148, 48 155 C65 155, 80 145, 80 130 Z" fill="#9333ea"/>
  <path d="M135 130 C135 130, 140 148, 152 155 C135 155, 120 145, 120 130 Z" fill="#9333ea"/>
  <!-- Rocket Body -->
  <path d="M100 20 C82 50, 75 95, 78 135 L122 135 C125 95, 118 50, 100 20 Z" fill="url(#rb)"/>
  <path d="M100 20 C108 50, 115 95, 122 135 L100 135 Z" fill="rgba(0,0,0,0.15)"/>
  <!-- Porthole -->
  <circle cx="100" cy="75" r="16" fill="#0f172a" stroke="#60a5fa" stroke-width="3"/>
  <circle cx="100" cy="75" r="12" fill="#38bdf8"/>
  <circle cx="96" cy="71" r="4" fill="#ffffff"/>
</svg>`,
        chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160" width="240" height="160">
  <defs>
    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
    </linearGradient>
    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>
  <!-- Grid -->
  <line x1="20" y1="30" x2="220" y2="30" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
  <line x1="20" y1="70" x2="220" y2="70" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
  <line x1="20" y1="110" x2="220" y2="110" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
  <!-- Area -->
  <path d="M20 130 L20 110 C50 115, 70 85, 100 90 C130 95, 150 45, 180 50 C200 55, 210 35, 220 30 L220 130 Z" fill="url(#areaGrad)"/>
  <!-- Line -->
  <path d="M20 110 C50 115, 70 85, 100 90 C130 95, 150 45, 180 50 C200 55, 210 35, 220 30" fill="none" stroke="url(#lineGrad)" stroke-width="4" stroke-linecap="round"/>
  <!-- Dots -->
  <circle cx="100" cy="90" r="5" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
  <circle cx="180" cy="50" r="5" fill="#a855f7" stroke="#ffffff" stroke-width="2"/>
  <circle cx="220" cy="30" r="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
</svg>`
      };

      // --- State ---
      let currentMode = 'upload'; // 'upload' | 'paste'
      let activeSvgString = SAMPLE_SVGS.badge;
      let baseWidth = 200;
      let baseHeight = 200;
      let scaleFactor = 2; // Default 2x
      let customWidth = 400;
      let customHeight = 400;
      let isAspectLocked = true;
      let bgMode = 'transparent'; // 'transparent' | 'color'
      let bgColor = '#ffffff';
      let activeFileName = 'vantorkit-badge.svg';
      let toastTimer = null;
      let isRasterizing = false;

      // --- DOM Elements ---
      const modeTabs = document.getElementById('modeTabs');
      const modeTabBtns = document.querySelectorAll('.mode-tab-btn');
      const modeTabPill = document.getElementById('modeTabPill');
      const panelUpload = document.getElementById('panelUpload');
      const panelPaste = document.getElementById('panelPaste');

      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');
      const fileBanner = document.getElementById('fileBanner');
      const displayFileName = document.getElementById('displayFileName');
      const displayFileMeta = document.getElementById('displayFileMeta');
      const btnClearFile = document.getElementById('btnClearFile');

      const rawSvgInput = document.getElementById('rawSvgInput');
      const sampleChips = document.querySelectorAll('.sample-chip');

      const scaleBtns = document.querySelectorAll('.scale-btn');
      const inputWidth = document.getElementById('inputWidth');
      const inputHeight = document.getElementById('inputHeight');
      const btnLockAspect = document.getElementById('btnLockAspect');

      const btnBgTransparent = document.getElementById('btnBgTransparent');
      const btnBgColor = document.getElementById('btnBgColor');
      const bgColorControls = document.getElementById('bgColorControls');
      const nativeBgColor = document.getElementById('nativeBgColor');
      const hexBgColor = document.getElementById('hexBgColor');
      const colorPresetDots = document.querySelectorAll('.color-preset-dot');

      const previewCanvas = document.getElementById('previewCanvas');
      const metaDimensions = document.getElementById('metaDimensions');
      const metaScale = document.getElementById('metaScale');
      const metaEstSize = document.getElementById('metaEstSize');

      const btnDownloadPng = document.getElementById('btnDownloadPng');
      const btnCopyClipboard = document.getElementById('btnCopyClipboard');
      const btnResetAll = document.getElementById('btnResetAll');

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
        }, 2200);
      }

      function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
      }

      function triggerDownload(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      // --- Mode Tabs Switching ---
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

          if (mode === 'upload') {
            panelUpload.style.display = 'block';
            panelPaste.style.display = 'none';
          } else {
            panelUpload.style.display = 'none';
            panelPaste.style.display = 'block';
            rawSvgInput.value = activeSvgString;
          }
        });
      });

      window.addEventListener('resize', updateModeTabPill);

      // --- SVG Parsing & Dimension Extraction ---
      function parseSvgMetadata(svgStr) {
        try {
          const parser = new DOMParser();
          const doc = parser.parseFromString(svgStr, 'image/svg+xml');
          const svgEl = doc.querySelector('svg');
          if (!svgEl || doc.querySelector('parsererror')) {
            return null;
          }

          let w = parseFloat(svgEl.getAttribute('width'));
          let h = parseFloat(svgEl.getAttribute('height'));

          // Check viewBox if width or height missing
          const viewBox = svgEl.getAttribute('viewBox');
          if (viewBox) {
            const parts = viewBox.trim().split(/[\s,]+/).map(Number);
            if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
              if (isNaN(w) || w <= 0) w = parts[2];
              if (isNaN(h) || h <= 0) h = parts[3];
            }
          }

          if (isNaN(w) || w <= 0) w = 300;
          if (isNaN(h) || h <= 0) h = 300;

          return { width: Math.round(w), height: Math.round(h), doc, svgEl };
        } catch (e) {
          return null;
        }
      }

      function loadNewSvg(svgStr, filename = 'illustration.svg', fileSize = 0) {
        const meta = parseSvgMetadata(svgStr);
        if (!meta) {
          const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
          showToast((I18N[activeLang] || I18N.en).invalidSvgToast);
          return false;
        }

        activeSvgString = svgStr;
        activeFileName = filename;
        baseWidth = meta.width;
        baseHeight = meta.height;

        customWidth = Math.round(baseWidth * scaleFactor);
        customHeight = Math.round(baseHeight * scaleFactor);

        inputWidth.value = customWidth;
        inputHeight.value = customHeight;
        rawSvgInput.value = svgStr;

        if (fileSize > 0) {
          displayFileName.textContent = filename;
          displayFileMeta.textContent = `${formatBytes(fileSize)} • ${baseWidth} × ${baseHeight} px`;
          fileBanner.style.display = 'flex';
        }

        renderCanvas();
        return true;
      }

      // --- Canvas Rasterization Engine ---
      function renderCanvas() {
        if (isRasterizing) return;
        isRasterizing = true;

        const targetW = Math.max(1, Math.min(10000, parseInt(inputWidth.value, 10) || customWidth));
        const targetH = Math.max(1, Math.min(10000, parseInt(inputHeight.value, 10) || customHeight));

        const parser = new DOMParser();
        const doc = parser.parseFromString(activeSvgString, 'image/svg+xml');
        const svgEl = doc.querySelector('svg');

        if (!svgEl || doc.querySelector('parsererror')) {
          isRasterizing = false;
          return;
        }

        // Ensure xmlns is present
        if (!svgEl.getAttribute('xmlns')) {
          svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }

        // Ensure viewBox exists so it scales cleanly
        if (!svgEl.getAttribute('viewBox')) {
          svgEl.setAttribute('viewBox', `0 0 ${baseWidth} ${baseHeight}`);
        }

        // Set dimensions explicitly on SVG for the rasterizer
        svgEl.setAttribute('width', targetW);
        svgEl.setAttribute('height', targetH);

        const serializer = new XMLSerializer();
        const normalizedSvg = serializer.serializeToString(svgEl);

        const blob = new Blob([normalizedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const img = new Image();

        img.onload = () => {
          previewCanvas.width = targetW;
          previewCanvas.height = targetH;
          const ctx = previewCanvas.getContext('2d');

          // Handle Background Fill
          if (bgMode === 'color') {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, targetW, targetH);
          } else {
            ctx.clearRect(0, 0, targetW, targetH);
          }

          // Draw Image
          ctx.drawImage(img, 0, 0, targetW, targetH);
          URL.revokeObjectURL(url);

          // Update Information Pills
          metaDimensions.textContent = `${targetW} × ${targetH} px`;
          metaScale.textContent = `Scale: ${scaleFactor}x`;

          // Estimate PNG size via canvas data URL length
          try {
            const dataUrl = previewCanvas.toDataURL('image/png');
            const approxBytes = Math.round((dataUrl.length - 22) * 0.75);
            metaEstSize.textContent = `Est. ~${formatBytes(approxBytes)}`;
          } catch (e) {
            metaEstSize.textContent = `~PNG HD`;
          }

          isRasterizing = false;
        };

        img.onerror = () => {
          URL.revokeObjectURL(url);
          isRasterizing = false;
        };

        img.src = url;
      }

      // --- Dimension Sync & Scale Logic ---
      function applyScale(scale) {
        scaleFactor = scale;
        scaleBtns.forEach(btn => {
          btn.classList.toggle('active', parseInt(btn.getAttribute('data-scale'), 10) === scale);
        });

        customWidth = Math.round(baseWidth * scale);
        customHeight = Math.round(baseHeight * scale);

        inputWidth.value = customWidth;
        inputHeight.value = customHeight;

        renderCanvas();
      }

      scaleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const s = parseInt(btn.getAttribute('data-scale'), 10);
          applyScale(s);
        });
      });

      // Aspect Ratio Lock Toggle
      btnLockAspect.addEventListener('click', () => {
        isAspectLocked = !isAspectLocked;
        btnLockAspect.classList.toggle('locked', isAspectLocked);
      });

      // Width / Height Manual Changes
      inputWidth.addEventListener('input', () => {
        const w = parseInt(inputWidth.value, 10);
        if (isNaN(w) || w <= 0) return;
        customWidth = w;

        if (isAspectLocked && baseWidth > 0) {
          const ratio = baseHeight / baseWidth;
          customHeight = Math.round(w * ratio);
          inputHeight.value = customHeight;
        }
        renderCanvas();
      });

      inputHeight.addEventListener('input', () => {
        const h = parseInt(inputHeight.value, 10);
        if (isNaN(h) || h <= 0) return;
        customHeight = h;

        if (isAspectLocked && baseHeight > 0) {
          const ratio = baseWidth / baseHeight;
          customWidth = Math.round(h * ratio);
          inputWidth.value = customWidth;
        }
        renderCanvas();
      });

      // Background Selector
      btnBgTransparent.addEventListener('click', () => {
        bgMode = 'transparent';
        btnBgTransparent.classList.add('active');
        btnBgColor.classList.remove('active');
        bgColorControls.classList.remove('show');
        renderCanvas();
      });

      btnBgColor.addEventListener('click', () => {
        bgMode = 'color';
        btnBgColor.classList.add('active');
        btnBgTransparent.classList.remove('active');
        bgColorControls.classList.add('show');
        renderCanvas();
      });

      nativeBgColor.addEventListener('input', (e) => {
        bgColor = e.target.value;
        hexBgColor.value = bgColor.toUpperCase();
        renderCanvas();
      });

      hexBgColor.addEventListener('change', () => {
        let val = hexBgColor.value.trim();
        if (/^#[0-9a-fA-F]{6}$/.test(val)) {
          bgColor = val;
        } else if (/^[0-9a-fA-F]{6}$/.test(val)) {
          bgColor = '#' + val;
          hexBgColor.value = bgColor;
        }
        nativeBgColor.value = bgColor;
        renderCanvas();
      });

      colorPresetDots.forEach(dot => {
        dot.addEventListener('click', () => {
          bgColor = dot.getAttribute('data-col');
          nativeBgColor.value = bgColor;
          hexBgColor.value = bgColor.toUpperCase();
          renderCanvas();
        });
      });

      // --- File Upload & Drag-and-Drop ---
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });

      dropZone.addEventListener('click', () => fileInput.click());

      ['dragenter', 'dragover'].forEach(evt => {
        dropZone.addEventListener(evt, (e) => {
          e.preventDefault();
          dropZone.classList.add('drag-active');
        });
      });

      ['dragleave', 'drop'].forEach(evt => {
        dropZone.addEventListener(evt, (e) => {
          e.preventDefault();
          dropZone.classList.remove('drag-active');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleFile(e.target.files[0]);
        }
      });

      function handleFile(file) {
        if (!file.name.toLowerCase().endsWith('.svg') && file.type !== 'image/svg+xml') {
          showToast('Please upload a valid .svg file.');
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          const ok = loadNewSvg(content, file.name, file.size);
          if (ok) {
            const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
            showToast((I18N[activeLang] || I18N.en).loadedFileToast);
          }
        };
        reader.readAsText(file);
      }

      btnClearFile.addEventListener('click', () => {
        fileBanner.style.display = 'none';
        fileInput.value = '';
        loadNewSvg(SAMPLE_SVGS.badge, 'vantorkit-badge.svg', 0);
      });

      // --- Raw Code Input & Samples ---
      let rawDebounce = null;
      rawSvgInput.addEventListener('input', () => {
        clearTimeout(rawDebounce);
        rawDebounce = setTimeout(() => {
          const text = rawSvgInput.value.trim();
          if (text) {
            loadNewSvg(text, 'custom-vector.svg', 0);
          }
        }, 300);
      });

      sampleChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const key = chip.getAttribute('data-sample');
          if (SAMPLE_SVGS[key]) {
            loadNewSvg(SAMPLE_SVGS[key], `${key}.svg`, 0);
          }
        });
      });

      // --- Export Actions ---
      // 1. Download PNG
      btnDownloadPng.addEventListener('click', () => {
        if (!previewCanvas) return;
        const dataUrl = previewCanvas.toDataURL('image/png');
        const exportName = activeFileName.replace(/\.svg$/i, '') + '-raster.png';
        triggerDownload(dataUrl, exportName);

        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        showToast((I18N[activeLang] || I18N.en).pngDownloadToast);
      });

      // 2. Copy Image to System Clipboard
      btnCopyClipboard.addEventListener('click', async () => {
        const activeLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[activeLang] || I18N.en;

        if (!navigator.clipboard || !window.ClipboardItem) {
          showToast(dict.copyErrorToast);
          return;
        }

        try {
          previewCanvas.toBlob(async (blob) => {
            if (!blob) {
              showToast(dict.copyErrorToast);
              return;
            }
            try {
              await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
              ]);
              showToast(dict.copiedToast);
            } catch (err) {
              console.error('Clipboard write failed:', err);
              showToast(dict.copyErrorToast);
            }
          }, 'image/png');
        } catch (e) {
          showToast(dict.copyErrorToast);
        }
      });

      // 3. Reset All to Default
      btnResetAll.addEventListener('click', () => {
        fileBanner.style.display = 'none';
        fileInput.value = '';
        bgMode = 'transparent';
        btnBgTransparent.classList.add('active');
        btnBgColor.classList.remove('active');
        bgColorControls.classList.remove('show');
        isAspectLocked = true;
        btnLockAspect.classList.add('locked');
        scaleFactor = 2;
        loadNewSvg(SAMPLE_SVGS.badge, 'vantorkit-badge.svg', 0);
        applyScale(2);
      });

      // --- Language Switcher Logic ---
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

        updateModeTabPill();
      }

      // --- Initialization ---
      const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(savedLang);
      loadNewSvg(SAMPLE_SVGS.badge, 'vantorkit-badge.svg', 0);
      applyScale(2);

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
        "title": "SVG to PNG Converter – Rasterize Vector Graphics",
        "desc": "Scale vector artwork into crystal-clear PNG files up to 8x resolution. Rasterization renders in your browser canvas with transparent alpha support."
    },
    "ar": {
        "title": "تحويل SVG إلى PNG – تنقيط الرسوم الشعاعية بجودة فائقة",
        "desc": "حول ملفات SVG المتجهة إلى صور PNG عالية الدقة حتى 8 أضعاف مع دعم الشفافية. تجري المعالجة بالكامل في متصفحك دون إرسال ملفاتك لأي سحابة."
    },
    "fr": {
        "title": "Convertisseur SVG en PNG – Pixelliser les Vecteurs HD",
        "desc": "Convertissez vos fichiers vectoriels en PNG haute résolution jusqu'à 8x avec transparence. Rendu instantané exécuté dans votre navigateur."
    },
    "it": {
        "title": "Convertitore SVG in PNG – Rasterizza Grafica Vettoriale",
        "desc": "Trasforma grafiche vettoriali in immagini PNG nitide fino a 8x con canale alfa. La rasterizzazione si svolge nel browser senza server remoti."
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