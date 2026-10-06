(function() {
    // 4-Language Translation Dictionaries
    const I18N = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "← Back to Tools",
        badgePill: "100% Client-Side • Canvas Powered • Multi-Resolution Packaging",
        toolTitle: "Multi-Size Favicon Builder",
        toolSubtitle: "Generate multi-resolution browser favicons (16×16, 32×32, 48×48), Apple Touch icons (180×180), Android PWA assets, and standard cross-platform ICO packages.",
        dropzoneTitle: "Drop Your Logo or Icon Here",
        dropzoneSub: "Supports PNG, JPG, SVG, WebP (Square 512×512 px or higher recommended)",
        btnBrowse: "Choose Image Asset",
        btnSample: "Load Sample Logo",
        pasteHint: "Or paste directly from clipboard",
        shapeSquare: "Square",
        shapeSquircle: "iOS",
        shapeCircle: "Circle",
        sourceResolution: "Source:",
        ctrlScalingMode: "Scaling & Fit Mode",
        fitContain: "Contain (Fit with Padding)",
        fitCover: "Cover (Fill Square)",
        ctrlPadding: "Inner Padding / Breathing Room",
        ctrlBackground: "Icon Background Fill",
        ctrlThemeColor: "Browser Bar & PWA Theme Color",
        sizesTitle: "Multi-Resolution Live Previews",
        sizesSub: "Precise downsampled canvas outputs rendered for desktop tabs, Apple iOS, and Android PWAs.",
        size16Label: "Classic Browser Tab",
        size32Label: "Standard Retina Tab",
        size48Label: "Windows Desktop / Shortcut",
        size180Label: "Apple Touch Icon (iOS)",
        size192Label: "Android Chrome / PWA",
        size512Label: "PWA Splash / High-Res",
        btnDownloadPNG: "Download PNG",
        btnDownloadZip: "Download All as ZIP Package",
        btnDownloadIco: "Download favicon.ico",
        btnClearAsset: "Reset / Choose Another Asset",
        tabHead: "HTML <head> Snippet",
        tabManifest: "site.webmanifest",
        btnCopyCode: "Copy Snippet",
        copiedToast: "Copied to clipboard!",
        generatingZipToast: "Generating ZIP package, please wait...",
        zipDownloadedToast: "ZIP package downloaded successfully!",
        icoDownloadedToast: "favicon.ico downloaded successfully!",
        eduTitle: "Modern Favicon Architecture & Best Practices",
        eduSub: "Everything you need to know about browser tabs, Apple Touch icons, and PWA manifest configurations.",
        guide1Title: "Modern Multi-Resolution Standards",
        guide1Desc: "Modern browsers prioritize high-DPI 32×32 PNG favicons for tabs and address bars, while legacy systems and search crawlers request /favicon.ico at the root. Providing both ensures universal compatibility.",
        guide2Title: "Apple iOS & Safari Web Clips",
        guide2Desc: "When users tap 'Add to Home Screen' on iPhone or iPad, iOS loads the 180×180 px apple-touch-icon.png. Always avoid transparent backgrounds for iOS icons, as Apple fills transparent areas with jet black.",
        guide3Title: "Android & PWA Web Manifest",
        guide3Desc: "Progressive Web Apps (PWAs) and Chrome on Android rely on site.webmanifest with 192×192 and 512×512 icons to display custom splash screens and crisp adaptive app drawer shortcuts.",
        faq1Q: "Are my logos or graphics sent to a remote server?",
        faq1A: "Never. The entire favicon generation process runs 100% locally in your web browser using HTML5 Canvas and JSZip. No image data or metadata is ever transmitted over the network.",
        faq2Q: "Where should I upload the generated favicon files on my site?",
        faq2A: "Extract the downloaded ZIP package and upload all files (favicon.ico, PNGs, and site.webmanifest) directly to your website's root directory (e.g. public_html/ or web root).",
        faq3Q: "Why doesn't my new favicon update immediately in my browser?",
        faq3A: "Web browsers cache favicons aggressively. To see your updated favicon immediately, open your website in an Incognito/Private window or perform a hard refresh with Ctrl+F5 (Cmd+Shift+R on Mac).",
        faq4Q: "What makes VantorKit's favicon.ico special?",
        faq4A: "Our builder packages a genuine multi-resolution binary ICO container containing 16×16, 32×32, and 48×48 frames with full 32-bit alpha transparency for seamless desktop rendering."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "100% داخل المتصفح • يعتمد على Canvas • حزمة متعددة الدقات",
        toolTitle: "منشئ أيقونات Favicon المتعددة",
        toolSubtitle: "أنشئ أيقونات مواقع متعددة الأحجام لتبويبات المتصفح (16×16، 32×32، 48×48)، وأيقونات Apple Touch لأجهزة iOS (180×180)، وتطبيقات PWA، وملف favicon.ico قياسي.",
        dropzoneTitle: "اسحب وأفلت شعارك أو أيقونتك هنا",
        dropzoneSub: "يدعم PNG و JPG و SVG و WebP (يُفضل صورة مربعة 512×512 بكسل أو أعلى)",
        btnBrowse: "اختيار ملف الصورة",
        btnSample: "تحميل شعار تجريبي",
        pasteHint: "أو الصق مباشرة من الحافظة",
        shapeSquare: "مربع",
        shapeSquircle: "iOS مدور",
        shapeCircle: "دائري",
        sourceResolution: "الدقة المصدر:",
        ctrlScalingMode: "طريقة القياس والملاءمة",
        fitContain: "احتواء (مع هوامش)",
        fitCover: "ملء كامل المربع",
        ctrlPadding: "الهامش الداخلي للصورة",
        ctrlBackground: "لون خلفية الأيقونة",
        ctrlThemeColor: "لون سمة المتصفح و PWA",
        sizesTitle: "معاينة حية لجميع الأحجام",
        sizesSub: "مخرجات canvas مصغرة بدقة عالية مخصصة لتبويبات سطح المكتب وأجهزة Apple و Android.",
        size16Label: "تبويب المتصفح الكلاسيكي",
        size32Label: "تبويب شاشات ريتينا",
        size48Label: "اختصار سطح مكتب ويندوز",
        size180Label: "أيقونة Apple Touch (iOS)",
        size192Label: "أندرويد كروم وتطبيقات PWA",
        size512Label: "شاشة البداية للتطبيقات بدقة فائقة",
        btnDownloadPNG: "تحميل PNG",
        btnDownloadZip: "تحميل الكل في حزمة ZIP",
        btnDownloadIco: "تحميل favicon.ico",
        btnClearAsset: "إعادة ضبط / اختيار صورة أخرى",
        tabHead: "كود HTML <head>",
        tabManifest: "ملف site.webmanifest",
        btnCopyCode: "نسخ الكود",
        copiedToast: "تم النسخ إلى الحافظة بنجاح!",
        generatingZipToast: "جاري إنشاء ملف ZIP، يرجى الانتظار...",
        zipDownloadedToast: "تم تحميل حزمة ZIP بنجاح!",
        icoDownloadedToast: "تم تحميل ملف favicon.ico بنجاح!",
        eduTitle: "معايير أيقونات Favicon الحديثة وأفضل الممارسات",
        eduSub: "كل ما تحتاج لمعرفته حول أيقونات التبويبات وأجهزة Apple وتكوينات تطبيقات الويب التقدمية PWA.",
        guide1Title: "معايير الدقة المتعددة الحديثة",
        guide1Desc: "تفضل المتصفحات الحديثة أيقونات PNG عالية الدقة 32×32 للتبويبات، بينما تطلب الأنظمة القديمة ومحركات البحث ملف /favicon.ico في الجذر. توفير الاثنين يضمن التوافق الشامل.",
        guide2Title: "أجهزة Apple iOS ومتصفح سفاري",
        guide2Desc: "عندما يختار المستخدم 'إضافة إلى الشاشة الرئيسية' على iPhone، يعتمد النظام على apple-touch-icon.png بدقة 180×180. تجنب الخلفيات الشفافة لأن iOS يحولها إلى لون أسود داكن.",
        guide3Title: "تطبيقات الويب التقدمية PWA وأندرويد",
        guide3Desc: "يعتمد متصفح كروم على أندرويد وتطبيقات الويب التقدمية على ملف site.webmanifest بأحجام 192×192 و 512×512 لعرض شاشة بداية أنيقة وأيقونة واضحة.",
        faq1Q: "هل يتم إرسال شعاري أو صوري إلى أي خادم خارجي؟",
        faq1A: "أبداً. تجري المعالجة وتوليد حزم ZIP وتكوين ملفات ICO بنسبة 100% داخل ذاكرة متصفحك دون رفع أي بيانات.",
        faq2Q: "أين يجب أن أضع ملفات favicon على موقعي؟",
        faq2A: "قم بفك ضغط ملف ZIP وضع كافة الملفات الناتجة (favicon.ico وملفات PNG و site.webmanifest) مباشرة في المجلد الرئيسي لموقعك (جذر الموقع web root).",
        faq3Q: "لماذا لا تظهر الأيقونة الجديدة فوراً في متصفحي؟",
        faq3A: "تحتفظ المتصفحات بالأيقونات في الذاكرة المخبئية مؤقتاً. لرؤية التغييرات فوراً، افتح نافذة تصفح خفي (Incognito) أو اضغط Ctrl+F5 لتحديث قوي.",
        faq4Q: "ما الذي يميز ملف favicon.ico الذي يولده VantorKit؟",
        faq4A: "ينتج أداتنا ملف ICO ثنائي حقيقي متعدد الدقات يضم إطارات 16×16 و 32×32 و 48×48 مع شفافية ألفا 32 بت كاملة لأداء رائع على كافة أنظمة سطح المكتب."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "← Retour aux outils",
        badgePill: "100% Côté Client • Technologie Canvas • Export Multi-Résolution",
        toolTitle: "Générateur de Favicon Multi-Tailles",
        toolSubtitle: "Générez des favicons multi-résolutions (16×16, 32×32, 48×48), des icônes Apple Touch (180×180), des icônes PWA Android et des fichiers ICO universels.",
        dropzoneTitle: "Déposez votre logo ou icône ici",
        dropzoneSub: "Prend en charge PNG, JPG, SVG, WebP (carré 512×512 px ou plus recommandé)",
        btnBrowse: "Choisir une image",
        btnSample: "Charger un logo d'exemple",
        pasteHint: "Ou collez directement depuis le presse-papiers",
        shapeSquare: "Carré",
        shapeSquircle: "iOS Arrondi",
        shapeCircle: "Cercle",
        sourceResolution: "Résolution source :",
        ctrlScalingMode: "Mode de cadrage",
        fitContain: "Contenir (avec marge)",
        fitCover: "Remplir tout le carré",
        ctrlPadding: "Marge interne / Espace",
        ctrlBackground: "Arrière-plan de l'icône",
        ctrlThemeColor: "Couleur de thème PWA & barre",
        sizesTitle: "Aperçus en direct multi-résolutions",
        sizesSub: "Rendus canvas réduits avec précision pour les onglets, iOS Apple et les PWA Android.",
        size16Label: "Onglet classique de navigateur",
        size32Label: "Onglet Retina haute résolution",
        size48Label: "Raccourci bureau Windows",
        size180Label: "Apple Touch Icon (iOS)",
        size192Label: "Android Chrome / PWA",
        size512Label: "Écran de démarrage PWA haute résolution",
        btnDownloadPNG: "Télécharger PNG",
        btnDownloadZip: "Télécharger tout en ZIP",
        btnDownloadIco: "Télécharger favicon.ico",
        btnClearAsset: "Réinitialiser / Changer d'image",
        tabHead: "Extrait HTML <head>",
        tabManifest: "Fichier site.webmanifest",
        btnCopyCode: "Copier le code",
        copiedToast: "Copié dans le presse-papiers !",
        generatingZipToast: "Génération de l'archive ZIP en cours...",
        zipDownloadedToast: "Archive ZIP téléchargée avec succès !",
        icoDownloadedToast: "Fichier favicon.ico téléchargé avec succès !",
        eduTitle: "Architecture des Favicons Modernes & Bonnes Pratiques",
        eduSub: "Tout ce que vous devez savoir sur les onglets, les icônes Apple Touch et les manifestes PWA.",
        guide1Title: "Normes Multi-Résolutions Modernes",
        guide1Desc: "Les navigateurs récents privilégient les fichiers PNG 32×32 haute résolution, tandis que les anciens systèmes et robots d'indexation demandent /favicon.ico à la racine.",
        guide2Title: "Apple iOS & Safari Web Clips",
        guide2Desc: "Lorsque les utilisateurs ajoutent votre site à l'écran d'accueil sur iPhone, iOS utilise apple-touch-icon.png (180×180). Évitez la transparence car Apple affiche un fond noir.",
        guide3Title: "Android & Manifeste Web PWA",
        guide3Desc: "Les Progressive Web Apps et Chrome sur Android utilisent le fichier site.webmanifest avec des icônes 192×192 et 512×512 pour un écran de démarrage net.",
        faq1Q: "Mes images ou logos sont-ils envoyés à un serveur ?",
        faq1A: "Non, absolument jamais. Toutes les opérations s'exécutent à 100% dans la mémoire locale de votre navigateur via l'API Canvas et JSZip.",
        faq2Q: "Où dois-je déposer les fichiers sur mon hébergement ?",
        faq2A: "Décompressez l'archive ZIP et déposez tous les fichiers directement dans le dossier racine de votre site web (ex. public_html/ ou web root).",
        faq3Q: "Pourquoi le nouveau favicon ne s'affiche-t-il pas immédiatement ?",
        faq3A: "Les navigateurs mettent fortement en cache les favicons. Ouvrez une fenêtre de navigation privée ou forcez l'actualisation avec Ctrl+F5 (Cmd+Shift+R sur Mac).",
        faq4Q: "Qu'est-ce qui rend le fichier favicon.ico de VantorKit unique ?",
        faq4A: "Notre outil assemble un conteneur binaire ICO multi-trames (16×16, 32×32 et 48×48) avec une transparence alpha 32 bits authentique."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "← Torna agli strumenti",
        badgePill: "100% Lato Client • Motore Canvas • Pacchetto Multi-Risoluzione",
        toolTitle: "Generatore di Favicon Multi-Dimensione",
        toolSubtitle: "Genera favicon per schede desktop (16×16, 32×32, 48×48), icone Apple Touch (180×180), risorse PWA per Android e pacchetti ICO multipiattaforma.",
        dropzoneTitle: "Trascina qui il tuo logo o icona",
        dropzoneSub: "Supporta PNG, JPG, SVG, WebP (consigliato quadrato 512×512 px o superiore)",
        btnBrowse: "Scegli file immagine",
        btnSample: "Carica logo di esempio",
        pasteHint: "Oppure incolla direttamente dagli appunti",
        shapeSquare: "Quadrato",
        shapeSquircle: "iOS Arrotondato",
        shapeCircle: "Cerchio",
        sourceResolution: "Risoluzione sorgente:",
        ctrlScalingMode: "Modalità di ridimensionamento",
        fitContain: "Contieni (con spaziatura)",
        fitCover: "Riempi quadrato intero",
        ctrlPadding: "Margine interno / Spazio",
        ctrlBackground: "Colore di sfondo icona",
        ctrlThemeColor: "Colore tema barra & PWA",
        sizesTitle: "Anteprime live multi-risoluzione",
        sizesSub: "Uscite canvas ridotte con precisione per schede desktop, iOS Apple e PWA Android.",
        size16Label: "Scheda browser classica",
        size32Label: "Scheda Retina ad alta densità",
        size48Label: "Scorciatoia desktop Windows",
        size180Label: "Apple Touch Icon (iOS)",
        size192Label: "Android Chrome / PWA",
        size512Label: "Splash screen PWA ad alta risoluzione",
        btnDownloadPNG: "Scarica PNG",
        btnDownloadZip: "Scarica tutto in pacchetto ZIP",
        btnDownloadIco: "Scarica favicon.ico",
        btnClearAsset: "Reimposta / Scegli un'altra risorsa",
        tabHead: "Snippet HTML <head>",
        tabManifest: "File site.webmanifest",
        btnCopyCode: "Copia snippet",
        copiedToast: "Copiato negli appunti!",
        generatingZipToast: "Generazione archivio ZIP in corso...",
        zipDownloadedToast: "Pacchetto ZIP scaricato con successo!",
        icoDownloadedToast: "favicon.ico scaricato con successo!",
        eduTitle: "Architettura delle Favicon Moderne & Best Practice",
        eduSub: "Tutto ciò che devi sapere su schede browser, icone Apple Touch e manifesti PWA.",
        guide1Title: "Standard Moderni Multi-Risoluzione",
        guide1Desc: "I browser moderni danno priorità a file PNG ad alta risoluzione 32×32, mentre i sistemi precedenti e i motori di ricerca cercano /favicon.ico nella root.",
        guide2Title: "Apple iOS & Safari Web Clips",
        guide2Desc: "Quando gli utenti aggiungono il sito alla schermata Home su iPhone, iOS utilizza apple-touch-icon.png (180×180). Evita la trasparenza perché Apple inserisce uno sfondo nero.",
        guide3Title: "Android & Manifesto Web PWA",
        guide3Desc: "Le Progressive Web App e Chrome su Android utilizzano il file site.webmanifest con icone 192×192 e 512×512 per schermate di avvio nitide.",
        faq1Q: "I miei loghi o immagini vengono caricati su un server?",
        faq1A: "Mai. L'intero processo di generazione viene eseguito al 100% in locale nella memoria del tuo browser tramite HTML5 Canvas e JSZip.",
        faq2Q: "Dove devo caricare i file favicon sul mio sito web?",
        faq2A: "Estrai l'archivio ZIP e carica tutti i file (favicon.ico, PNG e site.webmanifest) direttamente nella directory root del tuo sito web.",
        faq3Q: "Perché la nuova favicon non si aggiorna subito nel browser?",
        faq3A: "I browser mantengono le favicon in cache in modo persistente. Apri una finestra in incognito o esegui un aggiornamento forzato con Ctrl+F5 (Cmd+Shift+R su Mac).",
        faq4Q: "Cosa rende speciale il file favicon.ico di VantorKit?",
        faq4A: "Il nostro generatore crea un contenitore binario ICO multi-frame (16×16, 32×32 e 48×48) con autentica trasparenza alfa a 32 bit per tutti i sistemi operativi."
      }
    };

    // State Variables
    let activeLang = 'en';
    let sourceImage = null;
    let sourceFileName = 'favicon-source.png';
    let fitMode = 'contain'; // 'contain' or 'cover'
    let innerPaddingPercent = 10; // 0 - 35%
    let backgroundColor = 'transparent'; // 'transparent' or hex
    let themeColor = '#ffffff';
    let currentPreviewShape = 'square'; // 'square', 'squircle', 'circle'
    let activeCodeTab = 'head'; // 'head' or 'manifest'

    const SIZES = [16, 32, 48, 180, 192, 512];

    // DOM Elements
    const dropZone = document.getElementById('dropZone');
    const imageFileInput = document.getElementById('imageFileInput');
    const btnBrowse = document.getElementById('btnBrowse');
    const btnSample = document.getElementById('btnSample');
    const builderWorkspace = document.getElementById('builderWorkspace');
    const masterPreviewWrapper = document.getElementById('masterPreviewWrapper');
    const masterCanvas = document.getElementById('masterCanvas');
    const masterCtx = masterCanvas.getContext('2d');
    const statResolution = document.getElementById('statResolution');
    const paddingControlGroup = document.getElementById('paddingControlGroup');
    const paddingSlider = document.getElementById('paddingSlider');
    const paddingVal = document.getElementById('paddingVal');
    const customColorPicker = document.getElementById('customColorPicker');
    const customHexInput = document.getElementById('customHexInput');
    const themeColorPicker = document.getElementById('themeColorPicker');
    const themeHexInput = document.getElementById('themeHexInput');
    const btnDownloadZip = document.getElementById('btnDownloadZip');
    const btnDownloadIco = document.getElementById('btnDownloadIco');
    const btnResetTool = document.getElementById('btnResetTool');
    const codeContent = document.getElementById('codeContent');
    const btnCopySnippet = document.getElementById('btnCopySnippet');
    const copyBtnText = document.getElementById('copyBtnText');
    const tabHead = document.getElementById('tabHead');
    const tabManifest = document.getElementById('tabManifest');
    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    // Toast Notification Utility
    let toastTimer = null;
    function showToast(msg) {
      if (toastTimer) clearTimeout(toastTimer);
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      toastTimer = setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2500);
    }

    // Render Canvas at a specific size
    function renderToCanvas(targetCanvas, width, height) {
      if (!sourceImage) return;
      targetCanvas.width = width;
      targetCanvas.height = height;
      const ctx = targetCanvas.getContext('2d');

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Background color
      if (backgroundColor && backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const imgW = sourceImage.width;
      const imgH = sourceImage.height;

      if (fitMode === 'cover') {
        // Cover square entirely
        const scale = Math.max(width / imgW, height / imgH);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const drawX = (width - drawW) / 2;
        const drawY = (height - drawH) / 2;
        ctx.drawImage(sourceImage, drawX, drawY, drawW, drawH);
      } else {
        // Contain with optional padding
        const padPx = (innerPaddingPercent / 100) * Math.min(width, height);
        const availW = Math.max(1, width - padPx * 2);
        const availH = Math.max(1, height - padPx * 2);
        const scale = Math.min(availW / imgW, availH / imgH);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const drawX = (width - drawW) / 2;
        const drawY = (height - drawH) / 2;
        ctx.drawImage(sourceImage, drawX, drawY, drawW, drawH);
      }
    }

    // Update all live previews
    function updateAllCanvases() {
      if (!sourceImage) return;

      // Master canvas (512x512)
      renderToCanvas(masterCanvas, 512, 512);

      // Downsampled previews
      SIZES.forEach(sz => {
        const c = document.getElementById('canvas' + sz);
        if (c) {
          renderToCanvas(c, sz, sz);
        }
      });

      // Update background checkerboard / preview styling
      const previewBoxes = document.querySelectorAll('.size-preview-box');
      if (backgroundColor === 'transparent') {
        masterPreviewWrapper.classList.add('checkerboard-bg');
        masterPreviewWrapper.style.backgroundColor = '';
        previewBoxes.forEach(b => {
          b.classList.add('checkerboard-bg');
          b.style.backgroundColor = '';
        });
      } else {
        masterPreviewWrapper.classList.remove('checkerboard-bg');
        masterPreviewWrapper.style.backgroundColor = backgroundColor;
        previewBoxes.forEach(b => {
          b.classList.remove('checkerboard-bg');
          b.style.backgroundColor = backgroundColor;
        });
      }

      updateCodeSnippets();
    }

    // Generate HTML <head> snippet
    function getHeadSnippet() {
      return `<!-- Standard Favicons -->\n` +
        `<link rel="icon" type="image/x-icon" href="/favicon.ico">\n` +
        `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n` +
        `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n` +
        `<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">\n\n` +
        `<!-- Apple iOS Home Screen & Safari Web Clip -->\n` +
        `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n\n` +
        `<!-- Android Chrome & PWA Web App Manifest -->\n` +
        `<link rel="manifest" href="/site.webmanifest">\n` +
        `<meta name="theme-color" content="${themeColor}">\n` +
        `<meta name="apple-mobile-web-app-status-bar-style" content="default">`;
    }

    // Generate site.webmanifest JSON snippet
    function getManifestSnippet() {
      const manifest = {
        name: "My Modern Web Application",
        short_name: "WebApp",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        theme_color: themeColor,
        background_color: backgroundColor === 'transparent' ? '#ffffff' : backgroundColor,
        display: "standalone",
        start_url: "/"
      };
      return JSON.stringify(manifest, null, 2);
    }

    function updateCodeSnippets() {
      if (activeCodeTab === 'head') {
        codeContent.value = getHeadSnippet();
      } else {
        codeContent.value = getManifestSnippet();
      }
    }

    // Load Image file
    function handleImageLoad(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          sourceImage = img;
          sourceFileName = file.name || 'favicon-source.png';
          statResolution.textContent = `${img.width} × ${img.height} px`;
          builderWorkspace.classList.add('active');
          dropZone.style.display = 'none';
          updateAllCanvases();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    // Generate Sample Logo
    function loadSampleLogo() {
      const sampleCanvas = document.createElement('canvas');
      sampleCanvas.width = 512;
      sampleCanvas.height = 512;
      const ctx = sampleCanvas.getContext('2d');

      // Modern geometric vibrant gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, '#38bdf8');
      grad.addColorStop(0.5, '#3b82f6');
      grad.addColorStop(1, '#8b5cf6');

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Round rect
      const r = 90;
      ctx.moveTo(r, 0);
      ctx.lineTo(512 - r, 0);
      ctx.quadraticCurveTo(512, 0, 512, r);
      ctx.lineTo(512, 512 - r);
      ctx.quadraticCurveTo(512, 512, 512 - r, 512);
      ctx.lineTo(r, 512);
      ctx.quadraticCurveTo(0, 512, 0, 512 - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.closePath();
      ctx.fill();

      // Stylish Emblem inside
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      // V / Shield emblem
      ctx.moveTo(140, 160);
      ctx.lineTo(256, 380);
      ctx.lineTo(372, 160);
      ctx.lineTo(306, 160);
      ctx.lineTo(256, 275);
      ctx.lineTo(206, 160);
      ctx.closePath();
      ctx.fill();

      // Accent star
      ctx.fillStyle = '#fde047';
      ctx.beginPath();
      ctx.arc(256, 160, 24, 0, Math.PI * 2);
      ctx.fill();

      const img = new Image();
      img.onload = () => {
        sourceImage = img;
        sourceFileName = 'sample-vantorkit-logo.png';
        statResolution.textContent = `512 × 512 px`;
        builderWorkspace.classList.add('active');
        dropZone.style.display = 'none';
        updateAllCanvases();
      };
      img.src = sampleCanvas.toDataURL('image/png');
    }

    // Convert Canvas to Blob helper
    function getCanvasBlob(canvas) {
      return new Promise((resolve) => {
        canvas.toBlob((blob) => resolve(blob), 'image/png');
      });
    }

    // Convert Canvas to Uint8Array helper
    async function getCanvasUint8Array(canvas) {
      const blob = await getCanvasBlob(canvas);
      const arrayBuffer = await blob.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    }

    // Multi-Frame ICO Binary Builder
    function createIcoFromPngBuffers(pngBuffers) {
      const count = pngBuffers.length;
      const headerSize = 6;
      const dirEntrySize = 16;
      let offset = headerSize + count * dirEntrySize;

      const totalSize = offset + pngBuffers.reduce((acc, p) => acc + p.buffer.length, 0);
      const out = new Uint8Array(totalSize);
      const view = new DataView(out.buffer);

      // ICO Header
      view.setUint16(0, 0, true); // reserved
      view.setUint16(2, 1, true); // type 1 = icon
      view.setUint16(4, count, true); // number of images

      let entryOffset = headerSize;
      let dataOffset = offset;

      for (let i = 0; i < count; i++) {
        const item = pngBuffers[i];
        const w = item.width >= 256 ? 0 : item.width;
        const h = item.height >= 256 ? 0 : item.height;
        out[entryOffset + 0] = w;
        out[entryOffset + 1] = h;
        out[entryOffset + 2] = 0; // color palette
        out[entryOffset + 3] = 0; // reserved
        view.setUint16(entryOffset + 4, 1, true); // color planes
        view.setUint16(entryOffset + 6, 32, true); // bpp
        view.setUint32(entryOffset + 8, item.buffer.length, true); // size
        view.setUint32(entryOffset + 12, dataOffset, true); // offset

        out.set(item.buffer, dataOffset);
        dataOffset += item.buffer.length;
        entryOffset += dirEntrySize;
      }
      return out;
    }

    // Trigger Browser Download
    function triggerDownload(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // Event Listeners: Upload & Drag/Drop
    btnBrowse.addEventListener('click', () => imageFileInput.click());
    btnSample.addEventListener('click', loadSampleLogo);

    imageFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageLoad(e.target.files[0]);
      }
    });

    ['dragenter', 'dragover'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drag-active');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drag-active');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files[0]) {
        handleImageLoad(dt.files[0]);
      }
    });

    // Clipboard Paste Listener
    window.addEventListener('paste', (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            handleImageLoad(blob);
            break;
          }
        }
      }
    });

    // Fit Mode Segmented Control
    const btnFitContain = document.getElementById('btnFitContain');
    const btnFitCover = document.getElementById('btnFitCover');

    btnFitContain.addEventListener('click', () => {
      fitMode = 'contain';
      btnFitContain.classList.add('active');
      btnFitCover.classList.remove('active');
      paddingControlGroup.style.display = 'block';
      updateAllCanvases();
    });

    btnFitCover.addEventListener('click', () => {
      fitMode = 'cover';
      btnFitCover.classList.add('active');
      btnFitContain.classList.remove('active');
      paddingControlGroup.style.display = 'none';
      updateAllCanvases();
    });

    // Padding Slider
    paddingSlider.addEventListener('input', (e) => {
      innerPaddingPercent = parseInt(e.target.value, 10);
      paddingVal.textContent = `${innerPaddingPercent}%`;
      updateAllCanvases();
    });

    // Background Color Swatches
    document.querySelectorAll('.color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        backgroundColor = btn.getAttribute('data-color');
        if (backgroundColor !== 'transparent') {
          customColorPicker.value = backgroundColor;
          customHexInput.value = backgroundColor.toUpperCase();
        }
        updateAllCanvases();
      });
    });

    customColorPicker.addEventListener('input', (e) => {
      document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
      backgroundColor = e.target.value;
      customHexInput.value = e.target.value.toUpperCase();
      updateAllCanvases();
    });

    customHexInput.addEventListener('change', (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
        backgroundColor = val;
        customColorPicker.value = val;
        updateAllCanvases();
      }
    });

    // Theme Color Inputs
    themeColorPicker.addEventListener('input', (e) => {
      themeColor = e.target.value;
      themeHexInput.value = e.target.value.toUpperCase();
      updateCodeSnippets();
    });

    themeHexInput.addEventListener('change', (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        themeColor = val;
        themeColorPicker.value = val;
        updateCodeSnippets();
      }
    });

    // Shape Preview Mask Toggles
    document.querySelectorAll('.btn-shape').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-shape').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const shape = btn.getAttribute('data-shape');
        currentPreviewShape = shape;
        masterPreviewWrapper.classList.remove('shape-squircle', 'shape-circle');
        if (shape === 'squircle') {
          masterPreviewWrapper.classList.add('shape-squircle');
        } else if (shape === 'circle') {
          masterPreviewWrapper.classList.add('shape-circle');
        }
      });
    });

    // Individual PNG Downloads
    document.querySelectorAll('.btn-download-size').forEach(btn => {
      btn.addEventListener('click', () => {
        const sz = btn.getAttribute('data-size');
        const filename = btn.getAttribute('data-name');
        const canvas = document.getElementById('canvas' + sz);
        if (canvas) {
          canvas.toBlob((blob) => {
            if (blob) triggerDownload(blob, filename);
          }, 'image/png');
        }
      });
    });

    // Code Snippet Tabs
    tabHead.addEventListener('click', () => {
      activeCodeTab = 'head';
      tabHead.classList.add('active');
      tabManifest.classList.remove('active');
      updateCodeSnippets();
    });

    tabManifest.addEventListener('click', () => {
      activeCodeTab = 'manifest';
      tabManifest.classList.add('active');
      tabHead.classList.remove('active');
      updateCodeSnippets();
    });

    // Copy Code Button
    btnCopySnippet.addEventListener('click', () => {
      if (!codeContent.value) return;
      navigator.clipboard.writeText(codeContent.value).then(() => {
        btnCopySnippet.classList.add('copied');
        copyBtnText.textContent = "✓ Copied!";
        showToast(I18N[activeLang]?.copiedToast || "Copied to clipboard!");
        setTimeout(() => {
          btnCopySnippet.classList.remove('copied');
          copyBtnText.textContent = I18N[activeLang]?.btnCopyCode || "Copy Snippet";
        }, 2000);
      });
    });

    // Download favicon.ico Only
    btnDownloadIco.addEventListener('click', async () => {
      if (!sourceImage) return;
      try {
        const c16 = document.getElementById('canvas16');
        const c32 = document.getElementById('canvas32');
        const c48 = document.getElementById('canvas48');

        const [buf16, buf32, buf48] = await Promise.all([
          getCanvasUint8Array(c16),
          getCanvasUint8Array(c32),
          getCanvasUint8Array(c48)
        ]);

        const icoBytes = createIcoFromPngBuffers([
          { width: 16, height: 16, buffer: buf16 },
          { width: 32, height: 32, buffer: buf32 },
          { width: 48, height: 48, buffer: buf48 }
        ]);

        const icoBlob = new Blob([icoBytes], { type: 'image/x-icon' });
        triggerDownload(icoBlob, 'favicon.ico');
        showToast(I18N[activeLang]?.icoDownloadedToast || "favicon.ico downloaded successfully!");
      } catch (err) {
        console.error('ICO generation error:', err);
      }
    });

    // Download All as ZIP (using JSZip)
    btnDownloadZip.addEventListener('click', async () => {
      if (!sourceImage) return;

      if (!window.JSZip) {
        showToast("ZIP library is loading, please try again in a moment...");
        return;
      }

      showToast(I18N[activeLang]?.generatingZipToast || "Generating ZIP package, please wait...");

      try {
        const zip = new JSZip();

        // Canvas element references
        const c16 = document.getElementById('canvas16');
        const c32 = document.getElementById('canvas32');
        const c48 = document.getElementById('canvas48');
        const c180 = document.getElementById('canvas180');
        const c192 = document.getElementById('canvas192');
        const c512 = document.getElementById('canvas512');

        // Fetch Blobs in parallel
        const [b16, b32, b48, b180, b192, b512] = await Promise.all([
          getCanvasBlob(c16),
          getCanvasBlob(c32),
          getCanvasBlob(c48),
          getCanvasBlob(c180),
          getCanvasBlob(c192),
          getCanvasBlob(c512)
        ]);

        // Add PNG files to ZIP
        zip.file('favicon-16x16.png', b16);
        zip.file('favicon-32x32.png', b32);
        zip.file('favicon-48x48.png', b48);
        zip.file('apple-touch-icon.png', b180);
        zip.file('android-chrome-192x192.png', b192);
        zip.file('android-chrome-512x512.png', b512);

        // Generate multi-frame favicon.ico
        const [buf16, buf32, buf48] = await Promise.all([
          b16.arrayBuffer().then(ab => new Uint8Array(ab)),
          b32.arrayBuffer().then(ab => new Uint8Array(ab)),
          b48.arrayBuffer().then(ab => new Uint8Array(ab))
        ]);

        const icoBytes = createIcoFromPngBuffers([
          { width: 16, height: 16, buffer: buf16 },
          { width: 32, height: 32, buffer: buf32 },
          { width: 48, height: 48, buffer: buf48 }
        ]);
        zip.file('favicon.ico', icoBytes);

        // Add site.webmanifest
        zip.file('site.webmanifest', getManifestSnippet());

        // Add integration README
        const readmeContent = `VantorKit Favicon Package
=============================
Generated on: ${new Date().toUTCString()}

INSTALLATION INSTRUCTIONS:
1. Extract all files from this ZIP archive directly into your website's root directory (e.g. public_html/ or www/):
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - favicon-48x48.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - site.webmanifest

2. Insert the following HTML code inside the <head> ... </head> tags of your pages:

${getHeadSnippet()}

3. Clear your browser cache or open in Incognito to see changes immediately.

Generated with VantorKit Multi-Size Favicon Builder (https://vantorkit.com/tools/favicon-builder.html)
100% Private, Client-Side Utilities.
`;
        zip.file('README.txt', readmeContent);

        // Generate and download ZIP file
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        triggerDownload(zipBlob, 'favicons.zip');
        showToast(I18N[activeLang]?.zipDownloadedToast || "ZIP package downloaded successfully!");
      } catch (err) {
        console.error('ZIP generation error:', err);
        showToast("Error creating ZIP package. Please download files individually.");
      }
    });

    // Reset Workspace
    btnResetTool.addEventListener('click', () => {
      sourceImage = null;
      imageFileInput.value = '';
      builderWorkspace.classList.remove('active');
      dropZone.style.display = 'block';
    });

    // i18n Translation Switcher
    function setLanguage(lang) {
      if (!I18N[lang]) lang = 'en';
      activeLang = lang;
      const dict = I18N[lang];

      // Update static elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      updateCodeSnippets();
    }

    // Expose setLanguage globally for standardized dropdown sync
    window.setLanguage = setLanguage;

    // Initialization with stored language
    const initialLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(initialLang);

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
        "title": "Favicon Builder – Generate Multi-Size ICO & Web Icons",
        "desc": "Package desktop and mobile app icons from 16px to 512px with site manifest headers. Bundles compile into a clean ZIP archive directly on your device."
    },
    "ar": {
        "title": "صانع الأيقونات Favicon – توليد حزم ICO وأيقونات الويب",
        "desc": "أنشئ حزم الأيقونات متعددة المقاسات من 16 إلى 512 بكسل مع ملفات webmanifest. يتم تجميع الحزمة في أرشيف ZIP محلياً داخل جهازك دون خوادم."
    },
    "fr": {
        "title": "Générateur de Favicon – Créer des Icônes Multi-Tailles",
        "desc": "Générez des packs d'icônes de 16 à 512 px avec manifestes pour applications web. Vos archives ZIP se compilent directement sur votre appareil."
    },
    "it": {
        "title": "Creatore Favicon – Generatore Pacchetti ICO e Web App",
        "desc": "Crea icone multipiattaforma da 16px a 512px comprensive di file manifest. L'archivio ZIP finale si compila interamente sul tuo computer."
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