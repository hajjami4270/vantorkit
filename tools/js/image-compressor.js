/* ==========================================================================
       VantorKit Image Compressor & WebP Optimizer Engine
       100% Client-Side Canvas & Blob Architecture with i18n
       ========================================================================== */

    const TRANSLATIONS = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "Image Compressor & WebP Optimizer",
        toolSubtitle: "Compress JPG, PNG, WEBP, and AVIF images directly in your browser. Shrink file sizes, convert formats, and verify visual quality side-by-side with zero server uploads.",
        dropTitle: "Drag & drop images here, or browse files",
        dropSubtitle: "Supports JPG, PNG, WebP, AVIF • Bulk uploads supported • Paste from clipboard (Ctrl+V)",
        btnBrowse: "Choose Images",
        btnSample: "Try Demo Graphic",
        cardOriginal: "Original Size",
        cardCompressed: "Compressed Size",
        cardSaved: "Space Saved",
        cardStatus: "Quality Setting",
        panelSettings: "Compression Settings",
        labelQuality: "Image Quality",
        labelFormat: "Output Format",
        badgeBest: "Best",
        descWebP: "Smallest size & modern",
        descJPEG: "Standard compatibility",
        descPNG: "Lossless / alpha",
        fmtOriginal: "Original",
        descOriginal: "Keep source type",
        toggleResize: "Resize Dimensions",
        btnDownload: "Download Image",
        btnCopy: "Copy to Clipboard",
        titleComparator: "Visual Comparison",
        modeSplit: "Split View",
        modeSide: "Side-by-Side",
        lblOriginal: "Original",
        lblCompressed: "Compressed",
        btnDownloadZip: "Download All (ZIP)",
        btnClearAll: "Clear All",
        queueTitle: "Uploaded Images Queue",
        queueHint: "Click any image to preview in comparator",
        guideHeading: "Why Optimize Images with Modern WebP & Local Compression?",
        guideSubheading: "Learn how client-side compression reduces bounce rates, speeds up mobile Core Web Vitals, and protects confidential graphics.",
        g1Title: "Boost Core Web Vitals & LCP",
        g1Desc: "Large unoptimized images are the #1 cause of slow Largest Contentful Paint (LCP) scores. Compressing images by 60-80% speeds up page rendering, lowers bandwidth costs, and improves Google search rankings.",
        g2Title: "100% In-Browser Privacy",
        g2Desc: "Unlike cloud compression services that upload your personal photos, scans, or trade secrets to remote servers, VantorKit executes all image resampling inside your browser's memory via HTML5 Canvas. Zero data leaves your computer.",
        g3Title: "WebP & Modern Encoding",
        g3Desc: "WebP uses advanced predictive block coding to eliminate redundancy without creating noticeable pixel artifacts. It supports transparent alpha channels while maintaining file sizes up to 34% smaller than classic JPEG.",
        faq1Q: "What is the difference between lossy and lossless compression?",
        faq1A: "Lossless compression (like standard PNG) reduces file size without discarding any pixel information. Lossy compression (like WebP and JPEG at 80% quality) removes subtle color details imperceptible to the human eye, yielding drastic 70-90% weight reductions.",
        faq2Q: "What quality setting offers the best balance?",
        faq2A: "For web applications, e-commerce, and blogs, a quality setting of 80% produces virtually indistinguishable fidelity from the original photo while cutting file sizes by 65% to 85%. For high-resolution portfolio graphics, 90% is ideal.",
        faq3Q: "Does WebP support transparent backgrounds?",
        faq3A: "Yes! WebP provides full 8-bit alpha channel transparency just like PNG, but at a fraction of the file size. If you convert transparent PNG graphics to WebP, full transparency is retained.",
        faq4Q: "Can I compress dozens of images at the same time?",
        faq4A: "Yes, select or drop multiple images at once. VantorKit processes them sequentially in your browser tab and generates an instant ZIP archive containing all optimized files for 1-click download.",
        toastCopied: "Compressed image copied to clipboard!",
        toastDownloaded: "Image downloaded successfully!",
        toastZipReady: "ZIP archive created and downloading!",
        toastError: "Unable to process image format."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "← العودة إلى الأدوات",
        badgePill: "على جهازك 100% • خصوصية تامة • دون خوادم",
        toolTitle: "ضاغط الصور ومُحسّن WEBP",
        toolSubtitle: "ضغط صور JPG و PNG و WEBP و AVIF محلياً داخل المتصفح. تقليص حجم الملفات بنسبة تصل إلى 90% مع المعاينة المقارنة المباشرة وحفظ الخصوصية.",
        dropTitle: "اسحب الصور وأفلتها هنا، أو تصفح الملفات",
        dropSubtitle: "يدعم JPG و PNG و WebP و AVIF • يدعم المعالجة الجماعية • لصق مباشر (Ctrl+V)",
        btnBrowse: "اختيار الصور",
        btnSample: "تجربة صورة تجريبية",
        cardOriginal: "الحجم الأصلي",
        cardCompressed: "الحجم بعد الضغط",
        cardSaved: "المساحة الموفرة",
        cardStatus: "مستوى الجودة",
        panelSettings: "إعدادات الضغط",
        labelQuality: "جودة الصورة",
        labelFormat: "تنسيق المخرجات",
        badgeBest: "الأفضل",
        descWebP: "أصغر حجم وأداء فائق",
        descJPEG: "توافق قياسي شامل",
        descPNG: "بدون فقدان / شفافية",
        fmtOriginal: "الأصلي",
        descOriginal: "نفس نوع الملف الأصلي",
        toggleResize: "تغيير الأبعاد والقياس",
        btnDownload: "تحميل الصورة المضغوطة",
        btnCopy: "نسخ إلى الحافظة",
        titleComparator: "المقارنة البصرية المباشرة",
        modeSplit: "عرض مقسوم",
        modeSide: "جنباً إلى جنب",
        lblOriginal: "الأصلية",
        lblCompressed: "المضغوطة",
        btnDownloadZip: "تحميل الكل كملف (ZIP)",
        btnClearAll: "مسح الكل",
        queueTitle: "قائمة الصور المرفوعة",
        queueHint: "انقر على أي صورة لمعاينتها في شريط المقارنة",
        guideHeading: "لماذا يعد ضغط الصور بصيغة WebP مفتاح تسريع المواقع؟",
        guideSubheading: "تعرف على كيفية مساهمة الضغط المحلي في تسريع مؤشرات أداء الويب Core Web Vitals وحماية أمان ملفاتك.",
        g1Title: "تسريع مؤشرات LCP والويب",
        g1Desc: "تعتبر الصور الثقيلة السبب الأول لبطء تحميل صفحات الويب. يوفر تقليص الحجم بنسبة 60-80% سرعة فائقة للمستخدمين وتوفيراً لاستهلاك بيانات الهاتف المحمول.",
        g2Title: "خصوصية محلية 100% في المتصفح",
        g2Desc: "على عكس أدوات السحاب التي تنقل صورك الخاصة إلى خوادم بعيدة، تتم جميع عمليات المعالجة وإعادة التشفير داخل ذاكرة المتصفح دون إرسال بايت واحد إلى الإنترنت.",
        g3Title: "ميزات تقنية WebP الحديثة",
        g3Desc: "تعتمد صيغة WebP من Google على ترميز الكتل التنبؤي الذكي لتقليل الحجم مع الاحتفاظ بتفاصيل دقيقة وشفافية كاملة متفوقة على JPEG التقليدي.",
        faq1Q: "ما الفرق بين الضغط مع الفقد وبدون فقد؟",
        faq1A: "الضغط غير الفاقد (مثل PNG) يحتفظ بكافة بيانات البكسل كاملة، بينما الضغط الفاقد الذكي (مثل WebP بجودة 80%) يستبعد تدرجات لونية دقيقة لا تراها العين البشرية، محققاً توفيراً هائلاً بالحجم.",
        faq2Q: "ما هي أفضل نسبة جودة موصى بها؟",
        faq2A: "توفر جودة 80% توازناً مثالياً لا يمكن تمييزه بالعين المجردة عن الصورة الأصلية، مع توفير 65% إلى 85% من حجم الملف الإجمالي.",
        faq3Q: "هل تدعم صيغة WebP الخلفيات الشفافة؟",
        faq3A: "نعم، تدعم صيغة WebP قنوات الشفافية Alpha بدقة 8-bit تماماً مثل PNG ولكن بحجم أقل بكثير.",
        faq4Q: "هل يمكنني ضغط عشرات الصور دفعة واحدة؟",
        faq4A: "نعم، يمكنك إفلات عدة صور معاً وسيقوم النظام بضغطها محلياً وتوفير خيار تحميلها جميعاً في ملف مضغوط ZIP بنقرة واحدة.",
        toastCopied: "تم نسخ الصورة المضغوطة إلى الحافظة بنجاح!",
        toastDownloaded: "تم تحميل الصورة بنجاح!",
        toastZipReady: "تم تجهيز الأرشيف وجارٍ التحميل!",
        toastError: "تعذر معالجة تنسيق الصورة."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "← Retour aux Outils",
        badgePill: "Côté Client • Confidentialité Totale • Zéro Log",
        toolTitle: "Compresseur d'Images & Optimiseur WebP",
        toolSubtitle: "Compressez vos images JPG, PNG, WEBP et AVIF localement dans votre navigateur. Réduisez le poids jusqu'à 90% avec comparaison visuelle instantanée avant/après.",
        dropTitle: "Glissez vos images ici ou parcourez vos fichiers",
        dropSubtitle: "Prend en charge JPG, PNG, WebP, AVIF • Traitement par lots • Collage direct (Ctrl+V)",
        btnBrowse: "Choisir des images",
        btnSample: "Tester une image démo",
        cardOriginal: "Taille Initiale",
        cardCompressed: "Taille Compressée",
        cardSaved: "Espace Économisé",
        cardStatus: "Réglage Qualité",
        panelSettings: "Paramètres de Compression",
        labelQuality: "Qualité de l'Image",
        labelFormat: "Format de Sortie",
        badgeBest: "Idéal",
        descWebP: "Poids minimal & moderne",
        descJPEG: "Compatibilité standard",
        descPNG: "Sans perte / canal alpha",
        fmtOriginal: "Original",
        descOriginal: "Conserver le type source",
        toggleResize: "Redimensionner les Dimensions",
        btnDownload: "Télécharger l'Image",
        btnCopy: "Copier dans le Presse-Papier",
        titleComparator: "Comparateur Visuel Interactif",
        modeSplit: "Curseur Séparateur",
        modeSide: "Côte à Côte",
        lblOriginal: "Originale",
        lblCompressed: "Compressée",
        btnDownloadZip: "Télécharger Tout (ZIP)",
        btnClearAll: "Tout Effacer",
        queueTitle: "File des Images Importées",
        queueHint: "Cliquez sur une image pour l'afficher dans le comparateur",
        guideHeading: "Pourquoi Optimiser vos Images avec WebP & la Compression Locale ?",
        guideSubheading: "Découvrez comment la compression côté client accélère vos Core Web Vitals et garantit la stricte confidentialité de vos fichiers.",
        g1Title: "Amélioration des Core Web Vitals & LCP",
        g1Desc: "Les images trop lourdes sont la cause principale d'un mauvais score Largest Contentful Paint. Réduire leur poids de 60-80% accélère l'affichage et améliore votre référencement Google.",
        g2Title: "Confidentialité 100% Locale",
        g2Desc: "Contrairement aux outils cloud qui téléchargent vos images vers des serveurs distants, VantorKit effectue tous les calculs via l'API HTML5 Canvas de votre navigateur. Aucun octet n'est envoyé.",
        g3Title: "Efficacité du Format WebP",
        g3Desc: "Le format WebP développé par Google applique un encodage prédictif avancé qui élimine les红ondances tout en préservant la netteté et la transparence alpha.",
        faq1Q: "Quelle est la différence entre compression avec ou sans perte ?",
        faq1A: "La compression sans perte (comme PNG) conserve chaque pixel. La compression avec perte (comme WebP à 80%) élimine des nuances imperceptibles pour réduire le poids de 70% à 90%.",
        faq2Q: "Quel niveau de qualité offre le meilleur compromis ?",
        faq2A: "Une valeur de 80% est idéale pour le web : elle réduit le fichier de 70-85% tout en restant indiscernable de l'original à l'œil nu.",
        faq3Q: "Le format WebP gère-t-il la transparence ?",
        faq3A: "Oui, WebP prend en charge la transparence 8-bit comme le format PNG, avec un poids nettement inférieur.",
        faq4Q: "Puis-je compresser plusieurs images à la fois ?",
        faq4A: "Oui, glissez plusieurs fichiers à la fois. Le compresseur les traite en chaîne et vous permet d'exporter l'ensemble dans une archive ZIP en 1 clic.",
        toastCopied: "Image compressée copiée dans le presse-papier !",
        toastDownloaded: "Image téléchargée avec succès !",
        toastZipReady: "Archive ZIP générée avec succès !",
        toastError: "Impossible de traiter ce format d'image."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "← Torna agli Strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Compressore Immagini & Ottimizzatore WebP",
        toolSubtitle: "Comprimi immagini JPG, PNG, WEBP e AVIF direttamente nel browser. Riduci le dimensioni fino al 90% e verifica la qualità con cursore comparativo.",
        dropTitle: "Trascina qui le immagini o sfoglia i file",
        dropSubtitle: "Supporta JPG, PNG, WebP, AVIF • Compressione multipla • Incolla da appunti (Ctrl+V)",
        btnBrowse: "Scegli Immagini",
        btnSample: "Prova Immagine Demo",
        cardOriginal: "Dimensione Originale",
        cardCompressed: "Dimensione Ottimizzata",
        cardSaved: "Spazio Risparmiato",
        cardStatus: "Livello Qualità",
        panelSettings: "Impostazioni Compressione",
        labelQuality: "Qualità Immagine",
        labelFormat: "Formato di Output",
        badgeBest: "Consigliato",
        descWebP: "Minima dimensione & moderno",
        descJPEG: "Compatibilità standard",
        descPNG: "Senza perdita / trasparenza",
        fmtOriginal: "Originale",
        descOriginal: "Mantieni formato sorgente",
        toggleResize: "Ridimensiona Dimensioni",
        btnDownload: "Scarica Immagine",
        btnCopy: "Copia negli Appunti",
        titleComparator: "Confronto Visivo",
        modeSplit: "Vista Split",
        modeSide: "Fianco a Fianco",
        lblOriginal: "Originale",
        lblCompressed: "Compressa",
        btnDownloadZip: "Scarica Tutto (ZIP)",
        btnClearAll: "Cancella Tutto",
        queueTitle: "Coda Immagini Caricate",
        queueHint: "Clicca su qualsiasi immagine per confrontarla nel visualizzatore",
        guideHeading: "Perché Ottimizzare le Immagini con WebP e la Compressione Locale?",
        guideSubheading: "Scopri come la compressione in-browser accelera i Core Web Vitals e garantisce la riservatezza assoluta delle tue immagini.",
        g1Title: "Ottimizzazione Core Web Vitals & LCP",
        g1Desc: "Immagini pesanti rallentano l'indice Largest Contentful Paint (LCP). Ridurre il peso del 60-80% migliora l'esperienza d'uso e il posizionamento SEO su Google.",
        g2Title: "Privacy 100% nel Browser",
        g2Desc: "A differenza dei servizi cloud che caricano le foto su server remoti, VantorKit elabora tutto in locale nella memoria del tuo browser con HTML5 Canvas.",
        g3Title: "Vantaggi del Formato WebP",
        g3Desc: "WebP offre algoritmi predittivi che eliminano ridondanze visive mantenendo trasparenza e nitidezza con file fino al 34% più leggeri del JPEG.",
        faq1Q: "Che differenza c'è tra compressione lossy e lossless?",
        faq1A: "La compressione lossless (PNG) mantiene ogni singolo pixel. La compressione lossy (WebP e JPEG a qualità 80%) rimuove dettagli impercettibili all'occhio umano per risparmiare fino al 90% di spazio.",
        faq2Q: "Qual è il miglior valore di qualità?",
        faq2A: "Per il web, l'80% offre il miglior bilanciamento tra eccellente qualità visiva e forte riduzione delle dimensioni.",
        faq3Q: "WebP supporta lo sfondo trasparente?",
        faq3A: "Sì, WebP supporta la trasparenza a 8 bit esattamente come PNG, ma con dimensioni notevolmente più compatte.",
        faq4Q: "Posso comprimere più immagini contemporaneamente?",
        faq4A: "Certamente, carica più file assieme. Verranno compressi in sequenza e potrai scaricarli tutti in un pratico archivio ZIP.",
        toastCopied: "Immagine compressa copiata negli appunti!",
        toastDownloaded: "Immagine scaricata con successo!",
        toastZipReady: "Archivio ZIP generato e in scaricamento!",
        toastError: "Impossibile elaborare questo formato immagine."
      }
    };

    let currentLang = 'en';

    function initLanguage() {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && TRANSLATIONS[stored]) {
        currentLang = stored;
      }
      applyLanguage(currentLang);

      const toggleBtn = document.getElementById('langToggleBtn');
      const menu = document.getElementById('langMenu');
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang && TRANSLATIONS[lang]) {
            currentLang = lang;
            localStorage.setItem('vantorkit_lang', lang);
            applyLanguage(lang);
            toggleBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
          }
        });
      });
    }

    function applyLanguage(lang) {
      window.applyLanguage = applyLanguage;
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const html = document.getElementById('htmlRoot');
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      // Update active option
      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const langNames = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      document.getElementById('currentLangLabel').textContent = langNames[lang] || 'English';

      // Update text nodes
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    }

    function showToast(message) {
      const toast = document.getElementById('toastBox');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    /* ==========================================================================
       Compression Engine & State Management
       ========================================================================== */

    const state = {
      images: [], // List of { id, file, name, originalSize, originalWidth, originalHeight, originalUrl, compressedBlob, compressedUrl, compressedSize, compressedWidth, compressedHeight, compressedFormat, quality, savingsPct }
      activeId: null,
      quality: 80,
      targetFormat: 'image/webp', // 'image/webp', 'image/jpeg', 'image/png', 'original'
      resizeEnabled: false,
      maxWidth: null,
      maxHeight: null,
      viewMode: 'split' // 'split' or 'side'
    };

    // DOM Elements
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const btnBrowse = document.getElementById('btnBrowse');
    const btnSample = document.getElementById('btnSample');
    const workspaceArea = document.getElementById('workspaceArea');

    const qualityRange = document.getElementById('qualityRange');
    const lblQualityValue = document.getElementById('lblQualityValue');
    const valQualityDisplay = document.getElementById('valQualityDisplay');

    const resizeToggle = document.getElementById('resizeToggle');
    const dimInputsContainer = document.getElementById('dimInputsContainer');
    const resChipsContainer = document.getElementById('resChipsContainer');
    const maxWidthInput = document.getElementById('maxWidthInput');
    const maxHeightInput = document.getElementById('maxHeightInput');

    const valOriginalSize = document.getElementById('valOriginalSize');
    const valOriginalDims = document.getElementById('valOriginalDims');
    const valCompressedSize = document.getElementById('valCompressedSize');
    const valCompressedDims = document.getElementById('valCompressedDims');
    const badgeSavedPct = document.getElementById('badgeSavedPct');
    const valSavedBytes = document.getElementById('valSavedBytes');
    const valCompressionRatio = document.getElementById('valCompressionRatio');

    const btnDownloadActive = document.getElementById('btnDownloadActive');
    const btnCopyClipboard = document.getElementById('btnCopyClipboard');
    const btnDownloadAllZip = document.getElementById('btnDownloadAllZip');
    const btnClearAll = document.getElementById('btnClearAll');

    const bulkSummaryBar = document.getElementById('bulkSummaryBar');
    const bulkCountBadge = document.getElementById('bulkCountBadge');
    const bulkStatsText = document.getElementById('bulkStatsText');

    const queueSection = document.getElementById('queueSection');
    const queueGrid = document.getElementById('queueGrid');

    const compContainer = document.getElementById('compContainer');
    const compHandle = document.getElementById('compHandle');
    const compClippedLayer = document.getElementById('compClippedLayer');
    const imgOriginalView = document.getElementById('imgOriginalView');
    const imgCompressedView = document.getElementById('imgCompressedView');
    const sideBySideContainer = document.getElementById('sideBySideContainer');
    const imgSideOrig = document.getElementById('imgSideOrig');
    const imgSideComp = document.getElementById('imgSideComp');

    const modeSplit = document.getElementById('modeSplit');
    const modeSide = document.getElementById('modeSide');

    // Setup Drag and Drop
    function setupDragAndDrop() {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });

      dropZone.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleFiles(Array.from(e.target.files));
          fileInput.value = '';
        }
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('dragover');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleFiles(Array.from(e.dataTransfer.files));
        }
      });

      // Window Paste Support (Ctrl+V)
      window.addEventListener('paste', (e) => {
        if (e.clipboardData && e.clipboardData.items) {
          const files = [];
          for (let i = 0; i < e.clipboardData.items.length; i++) {
            const item = e.clipboardData.items[i];
            if (item.type.indexOf('image') !== -1) {
              const file = item.getAsFile();
              if (file) files.push(file);
            }
          }
          if (files.length > 0) {
            handleFiles(files);
          }
        }
      });

      // Sample Demo Image Generator
      btnSample.addEventListener('click', (e) => {
        e.stopPropagation();
        loadSampleDemoImage();
      });
    }

    // Generate high-resolution rich demo graphic on offscreen canvas
    function loadSampleDemoImage() {
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');

      // Vibrant Gradient Background
      const grad = ctx.createLinearGradient(0, 0, 1920, 1080);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(0.3, '#1e1b4b');
      grad.addColorStop(0.7, '#311042');
      grad.addColorStop(1, '#022c22');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1920, 1080);

      // Geometric glowing shapes
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        const x = (i * 123) % 1920;
        const y = (i * 219) % 1080;
        const r = 40 + (i * 7) % 120;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        const colGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
        colGrad.addColorStop(0, `hsla(${(i * 35) % 360}, 90%, 65%, 0.4)`);
        colGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = colGrad;
        ctx.fill();
      }

      // High-contrast complex detail lines (to test fine compression retention)
      ctx.lineWidth = 3;
      for (let j = 0; j < 30; j++) {
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${(j * 20) % 360}, 80%, 75%, 0.35)`;
        ctx.moveTo(100 + j * 60, 100);
        ctx.bezierCurveTo(400, 200 + j * 20, 800, 900 - j * 15, 1800, 500 + j * 10);
        ctx.stroke();
      }

      // Elegant Center Card
      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 4;
      ctx.roundRect ? ctx.roundRect(460, 280, 1000, 520, 24) : ctx.rect(460, 280, 1000, 520);
      ctx.fill();
      ctx.stroke();

      // Heading Text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 64px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('VantorKit In-Browser Compressor', 960, 470);

      // Subheading Text
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 32px sans-serif';
      ctx.fillText('100% Client-Side WebP & Canvas Image Processing', 960, 540);

      // Specs badge
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 26px monospace';
      ctx.fillText('Resolution: 1920 × 1080 px • Ultra Sharp Test File', 960, 620);

      canvas.toBlob((blob) => {
        const file = new File([blob], 'vantorkit-demo-graphic.png', { type: 'image/png' });
        handleFiles([file]);
      }, 'image/png');
    }

    // Process incoming file list
    async function handleFiles(files) {
      const validFiles = files.filter(f => f.type.startsWith('image/'));
      if (validFiles.length === 0) {
        showToast(TRANSLATIONS[currentLang]?.toastError || 'Please select valid images.');
        return;
      }

      for (const file of validFiles) {
        const id = 'img_' + Math.random().toString(36).substr(2, 9);
        const originalUrl = URL.createObjectURL(file);

        // Load image dimensions
        const dims = await getImageDimensions(originalUrl);

        const imgItem = {
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: dims.width,
          originalHeight: dims.height,
          originalUrl,
          compressedBlob: null,
          compressedUrl: null,
          compressedSize: 0,
          compressedWidth: dims.width,
          compressedHeight: dims.height,
          compressedFormat: state.targetFormat,
          quality: state.quality,
          savingsPct: 0
        };

        state.images.push(imgItem);
      }

      // Set active image to the first or newly added
      if (!state.activeId || !state.images.find(img => img.id === state.activeId)) {
        state.activeId = state.images[state.images.length - 1].id;
      }

      workspaceArea.classList.add('active');

      // Run compression on all items in background
      await compressAllImages();
      updateUI();
    }

    function getImageDimensions(url) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
        };
        img.onerror = () => {
          resolve({ width: 800, height: 600 });
        };
        img.src = url;
      });
    }

    // Perform canvas compression on a single image item
    function compressItem(item) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          let targetWidth = img.naturalWidth;
          let targetHeight = img.naturalHeight;

          // Apply dimension scaling if enabled
          if (state.resizeEnabled) {
            if (state.maxWidth && targetWidth > state.maxWidth) {
              const ratio = state.maxWidth / targetWidth;
              targetWidth = Math.round(targetWidth * ratio);
              targetHeight = Math.round(targetHeight * ratio);
            }
            if (state.maxHeight && targetHeight > state.maxHeight) {
              const ratio = state.maxHeight / targetHeight;
              targetWidth = Math.round(targetWidth * ratio);
              targetHeight = Math.round(targetHeight * ratio);
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          const ctx = canvas.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // Determine actual target mime type
          let mime = state.targetFormat;
          if (mime === 'original') {
            mime = item.file.type || 'image/jpeg';
          }

          // If output is JPEG, fill white background to prevent transparent alpha turning black
          if (mime === 'image/jpeg') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, targetWidth, targetHeight);
          }

          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const qFloat = Math.min(Math.max(state.quality / 100, 0.05), 1.0);

          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error('Canvas toBlob failed'));
              return;
            }

            if (item.compressedUrl) {
              URL.revokeObjectURL(item.compressedUrl);
            }

            item.compressedBlob = blob;
            item.compressedUrl = URL.createObjectURL(blob);
            item.compressedSize = blob.size;
            item.compressedWidth = targetWidth;
            item.compressedHeight = targetHeight;
            item.compressedFormat = mime;
            item.quality = state.quality;

            const saved = item.originalSize - item.compressedSize;
            item.savingsPct = Math.max(0, Math.round((saved / item.originalSize) * 100));

            resolve(item);
          }, mime, qFloat);
        };
        img.onerror = reject;
        img.src = item.originalUrl;
      });
    }

    async function compressAllImages() {
      for (const item of state.images) {
        await compressItem(item);
      }
    }

    async function recompressActiveImage() {
      const active = state.images.find(img => img.id === state.activeId);
      if (active) {
        await compressItem(active);
        updateUI();
      }
    }

    // Refresh UI Components
    function updateUI() {
      if (state.images.length === 0) {
        workspaceArea.classList.remove('active');
        return;
      }

      const active = state.images.find(img => img.id === state.activeId) || state.images[0];

      // Update Metric Cards
      valOriginalSize.textContent = formatBytes(active.originalSize);
      valOriginalDims.textContent = `${active.originalWidth} × ${active.originalHeight} px • ${formatMime(active.file.type)}`;

      valCompressedSize.textContent = formatBytes(active.compressedSize);
      valCompressedDims.textContent = `${active.compressedWidth} × ${active.compressedHeight} px • ${formatMime(active.compressedFormat)}`;

      const savedBytes = Math.max(0, active.originalSize - active.compressedSize);
      badgeSavedPct.textContent = `-${active.savingsPct}%`;
      valSavedBytes.textContent = formatBytes(savedBytes);

      const ratio = active.compressedSize > 0 ? (active.originalSize / active.compressedSize).toFixed(1) : '1.0';
      valCompressionRatio.textContent = `${ratio} : 1 Ratio`;

      valQualityDisplay.textContent = `${state.quality}%`;
      lblQualityValue.textContent = `${state.quality}%`;
      qualityRange.value = state.quality;

      // Update Viewports
      imgOriginalView.src = active.originalUrl;
      imgCompressedView.src = active.compressedUrl;
      imgSideOrig.src = active.originalUrl;
      imgSideComp.src = active.compressedUrl;

      // Update Badges with Sizes
      document.getElementById('badgeOrigLabel').textContent = `${TRANSLATIONS[currentLang]?.lblOriginal || 'Original'} (${formatBytes(active.originalSize)})`;
      document.getElementById('badgeCompLabel').textContent = `${TRANSLATIONS[currentLang]?.lblCompressed || 'Compressed'} (${formatBytes(active.compressedSize)})`;

      // Update Bulk Header
      if (state.images.length > 1) {
        bulkSummaryBar.style.display = 'flex';
        queueSection.classList.add('active');

        const totalOriginal = state.images.reduce((acc, cur) => acc + cur.originalSize, 0);
        const totalCompressed = state.images.reduce((acc, cur) => acc + cur.compressedSize, 0);
        const totalSaved = Math.max(0, totalOriginal - totalCompressed);
        const totalPct = totalOriginal > 0 ? Math.round((totalSaved / totalOriginal) * 100) : 0;

        bulkCountBadge.textContent = `${state.images.length} Images`;
        bulkStatsText.innerHTML = `Original: <strong>${formatBytes(totalOriginal)}</strong> → Compressed: <strong>${formatBytes(totalCompressed)}</strong> (<span style="color:#34d399;">-${totalPct}% saved</span>)`;

        renderQueue();
      } else {
        bulkSummaryBar.style.display = 'none';
        queueSection.classList.remove('active');
      }
    }

    function formatMime(mime) {
      if (!mime) return 'IMG';
      if (mime.includes('webp')) return 'WebP';
      if (mime.includes('jpeg') || mime.includes('jpg')) return 'JPEG';
      if (mime.includes('png')) return 'PNG';
      if (mime.includes('avif')) return 'AVIF';
      return mime.replace('image/', '').toUpperCase();
    }

    // Render Queue Items
    function renderQueue() {
      queueGrid.innerHTML = '';
      state.images.forEach(item => {
        const card = document.createElement('div');
        card.className = `queue-card ${item.id === state.activeId ? 'active-item' : ''}`;
        card.innerHTML = `
          <img class="queue-thumb" src="${item.compressedUrl || item.originalUrl}" alt="thumb">
          <div class="queue-details">
            <div class="queue-filename" title="${item.name}">${item.name}</div>
            <div class="queue-meta">
              <span>${formatBytes(item.compressedSize)}</span>
              <span class="queue-saved-badge">-${item.savingsPct}%</span>
              <span>${item.compressedWidth}×${item.compressedHeight}</span>
            </div>
          </div>
          <button type="button" class="queue-btn-download" title="Download this image">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </button>
          <button type="button" class="queue-btn-remove" title="Remove">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        `;

        card.addEventListener('click', (e) => {
          if (e.target.closest('.queue-btn-download') || e.target.closest('.queue-btn-remove')) return;
          state.activeId = item.id;
          updateUI();
        });

        const dlBtn = card.querySelector('.queue-btn-download');
        dlBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          downloadSingleItem(item);
        });

        const rmBtn = card.querySelector('.queue-btn-remove');
        rmBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeItem(item.id);
        });

        queueGrid.appendChild(card);
      });
    }

    function removeItem(id) {
      const idx = state.images.findIndex(img => img.id === id);
      if (idx !== -1) {
        URL.revokeObjectURL(state.images[idx].originalUrl);
        if (state.images[idx].compressedUrl) URL.revokeObjectURL(state.images[idx].compressedUrl);
        state.images.splice(idx, 1);
        if (state.activeId === id) {
          state.activeId = state.images.length > 0 ? state.images[0].id : null;
        }
        updateUI();
      }
    }

    /* ==========================================================================
       Interactive Split Comparator Controls
       ========================================================================== */

    let isDragging = false;

    function setSplitPosition(percent) {
      const clamped = Math.min(Math.max(percent, 2), 98);
      compContainer.style.setProperty('--split-pos', `${clamped}%`);
    }

    function setupComparatorEvents() {
      function onMove(clientX) {
        const rect = compContainer.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const pct = (offsetX / rect.width) * 100;
        setSplitPosition(pct);
      }

      compContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        onMove(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        onMove(e.clientX);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Touch support
      compContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches && e.touches[0]) onMove(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches && e.touches[0]) onMove(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });

      // Mode switch
      modeSplit.addEventListener('click', () => {
        state.viewMode = 'split';
        modeSplit.classList.add('active');
        modeSide.classList.remove('active');
        compContainer.style.display = 'block';
        sideBySideContainer.style.display = 'none';
      });

      modeSide.addEventListener('click', () => {
        state.viewMode = 'side';
        modeSide.classList.add('active');
        modeSplit.classList.remove('active');
        compContainer.style.display = 'none';
        sideBySideContainer.style.display = 'grid';
      });
    }

    /* ==========================================================================
       Controls & Event Handlers
       ========================================================================== */

    let debounceTimer = null;
    function triggerRecompressDebounced() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        recompressActiveImage();
      }, 150);
    }

    function setupControls() {
      // Quality Slider
      qualityRange.addEventListener('input', (e) => {
        state.quality = parseInt(e.target.value, 10);
        lblQualityValue.textContent = `${state.quality}%`;
        document.querySelectorAll('.preset-chip').forEach(btn => {
          btn.classList.toggle('active', parseInt(btn.getAttribute('data-q'), 10) === state.quality);
        });
        triggerRecompressDebounced();
      });

      // Quality Presets
      document.querySelectorAll('.preset-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          state.quality = parseInt(btn.getAttribute('data-q'), 10);
          qualityRange.value = state.quality;
          lblQualityValue.textContent = `${state.quality}%`;
          document.querySelectorAll('.preset-chip').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          triggerRecompressDebounced();
        });
      });

      // Target Format Selection
      document.querySelectorAll('.format-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.format-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          state.targetFormat = card.getAttribute('data-format');
          triggerRecompressDebounced();
        });
      });

      // Resize Toggle
      resizeToggle.addEventListener('change', (e) => {
        state.resizeEnabled = e.target.checked;
        dimInputsContainer.classList.toggle('show', state.resizeEnabled);
        resChipsContainer.style.display = state.resizeEnabled ? 'flex' : 'none';
        triggerRecompressDebounced();
      });

      maxWidthInput.addEventListener('input', (e) => {
        state.maxWidth = e.target.value ? parseInt(e.target.value, 10) : null;
        triggerRecompressDebounced();
      });

      maxHeightInput.addEventListener('input', (e) => {
        state.maxHeight = e.target.value ? parseInt(e.target.value, 10) : null;
        triggerRecompressDebounced();
      });

      document.querySelectorAll('.res-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const maxVal = parseInt(chip.getAttribute('data-max'), 10);
          maxWidthInput.value = maxVal;
          state.maxWidth = maxVal;
          triggerRecompressDebounced();
        });
      });

      // Download Active Button
      btnDownloadActive.addEventListener('click', () => {
        const active = state.images.find(img => img.id === state.activeId);
        if (active) downloadSingleItem(active);
      });

      // Copy to Clipboard
      btnCopyClipboard.addEventListener('click', async () => {
        const active = state.images.find(img => img.id === state.activeId);
        if (!active || !active.compressedBlob) return;

        try {
          // If browser clipboard supports writing image blobs
          if (navigator.clipboard && window.ClipboardItem) {
            // PNG is the most universally accepted clipboard image mime type
            if (active.compressedBlob.type === 'image/png') {
              await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': active.compressedBlob })
              ]);
              showToast(TRANSLATIONS[currentLang]?.toastCopied || 'Copied to clipboard!');
            } else {
              // Convert to PNG blob on the fly for clipboard compatibility
              const c = document.createElement('canvas');
              c.width = active.compressedWidth;
              c.height = active.compressedHeight;
              const ctx = c.getContext('2d');
              const img = new Image();
              img.onload = async () => {
                ctx.drawImage(img, 0, 0);
                c.toBlob(async (pngBlob) => {
                  try {
                    await navigator.clipboard.write([
                      new ClipboardItem({ 'image/png': pngBlob })
                    ]);
                    showToast(TRANSLATIONS[currentLang]?.toastCopied || 'Copied to clipboard!');
                  } catch (err) {
                    showToast('Clipboard access denied or unsupported.');
                  }
                }, 'image/png');
              };
              img.src = active.compressedUrl;
            }
          } else {
            showToast('Clipboard API not supported in this browser.');
          }
        } catch (e) {
          console.error('Clipboard copy error:', e);
          showToast('Clipboard copy failed.');
        }
      });

      // Download All as ZIP
      btnDownloadAllZip.addEventListener('click', async () => {
        if (state.images.length === 0) return;
        if (!window.JSZip) {
          showToast('JSZip library loading, please wait...');
          return;
        }

        btnDownloadAllZip.disabled = true;
        btnDownloadAllZip.textContent = 'Archiving ZIP...';

        try {
          const zip = new JSZip();
          for (let i = 0; i < state.images.length; i++) {
            const item = state.images[i];
            const ext = getExtensionForMime(item.compressedFormat);
            const baseName = item.name.replace(/\.[^/.]+$/, "");
            const outName = `${baseName}.min.${ext}`;
            zip.file(outName, item.compressedBlob);
          }

          const content = await zip.generateAsync({ type: 'blob' });
          downloadBlob(content, 'vantorkit-compressed-images.zip');
          showToast(TRANSLATIONS[currentLang]?.toastZipReady || 'ZIP archive downloaded!');
        } catch (err) {
          console.error('ZIP error:', err);
          showToast('Failed to create ZIP.');
        } finally {
          btnDownloadAllZip.disabled = false;
          btnDownloadAllZip.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            ${TRANSLATIONS[currentLang]?.btnDownloadZip || 'Download All (ZIP)'}
          `;
        }
      });

      // Clear All
      btnClearAll.addEventListener('click', () => {
        state.images.forEach(img => {
          URL.revokeObjectURL(img.originalUrl);
          if (img.compressedUrl) URL.revokeObjectURL(img.compressedUrl);
        });
        state.images = [];
        state.activeId = null;
        updateUI();
      });
    }

    function getExtensionForMime(mime) {
      if (mime === 'image/webp') return 'webp';
      if (mime === 'image/jpeg') return 'jpg';
      if (mime === 'image/png') return 'png';
      if (mime === 'image/avif') return 'avif';
      return 'webp';
    }

    function downloadSingleItem(item) {
      if (!item || !item.compressedBlob) return;
      const ext = getExtensionForMime(item.compressedFormat);
      const baseName = item.name.replace(/\.[^/.]+$/, "");
      const filename = `${baseName}.min.${ext}`;
      downloadBlob(item.compressedBlob, filename);
      showToast(TRANSLATIONS[currentLang]?.toastDownloaded || 'Image downloaded!');
    }

    function downloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }

    // Initialize Tool
    document.addEventListener('DOMContentLoaded', () => {
      initLanguage();
      setupDragAndDrop();
      setupComparatorEvents();
      setupControls();
    });

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
        "title": "Image Compressor – Optimize JPG, PNG & WebP Quality",
        "desc": "Shrink bulky photo assets up to 90% while comparing live side-by-side quality. Compression quantization runs on client hardware with zero remote latency."
    },
    "ar": {
        "title": "ضغط الصور وتحسين WebP – تقليل حجم الصور مع الحفاظ على الدقة",
        "desc": "قلص حجم صورك حتى 90% مع معاينة مباشرة للمقارنة قبل الحفظ وبعده. تجري المعالجة بالكامل على معالج جهازك دون انتظار رفع الملفات للسيرفر."
    },
    "fr": {
        "title": "Compresseur d'Images – Optimisation JPG, PNG et WebP",
        "desc": "Réduisez le poids de vos visuels jusqu'à 90% avec aperçu comparatif direct. La compression s'exécute sur votre machine sans latence réseau."
    },
    "it": {
        "title": "Compressore Immagini – Ottimizza Formati JPG, PNG e WebP",
        "desc": "Riduci le dimensioni dei file fino al 90% con confronto visivo affiancato. L'ottimizzazione avviene sull'hardware locale in totale autonomia."
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