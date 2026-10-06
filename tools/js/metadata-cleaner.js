(function() {
      'use strict';

      // --- Translations Dictionary (EN, AR, FR, IT) ---
      const I18N = {
        en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
          langLabel: "English",
          backLink: "← Back to Tools",
          heroBadge: "Client-Side • Privacy-First • Zero Bytes Transferred",
          heroTitle: "Metadata & EXIF Cleaner",
          heroSubtitle: "Inspect hidden GPS coordinates, camera models, capture timestamps, and private metadata, then sanitize and purge all tags locally before sharing.",
          dropTitle: "Drop an Image to Inspect & Strip Metadata",
          dropDesc: "Supports JPEG, PNG, and WebP photos up to 100MB. Processed entirely in your browser RAM.",
          btnSample: "Load Sample Photo with GPS EXIF",
          panelTitle: "Metadata Audit & Security Analysis",
          btnChange: "Change Photo",
          metaFilename: "File Name",
          metaDimensions: "Dimensions",
          metaFormat: "Format",
          metaFileSize: "File Size",
          gpsAlertTitle: "⚠️ SENSITIVE GPS LOCATION DETECTED!",
          cameraAlertTitle: "📸 Hardware & Timestamp Tags Found",
          cleanAlertTitle: "✅ No High-Risk Metadata Detected",
          cleanAlertText: "No GPS coordinates found in standard EXIF tags. Re-sanitizing ensures any residual chunks are purged.",
          detectedTagsTitle: "Detected Metadata Tags",
          thTag: "Tag Name",
          thValue: "Embedded Value",
          actionNote: "100% In-Memory Canvas Purge. Zero server logging.",
          btnSanitize: "Strip Metadata & Sanitize",
          resultTitle: "Photo Successfully Sanitized!",
          resultDesc: "All EXIF tags, GPS coordinates, and camera footprints have been permanently stripped from memory.",
          statTagsRemoved: "Metadata Tags Purged",
          statGpsStatus: "GPS Status",
          statFileSize: "Sanitized Size",
          btnDownload: "Download Sanitized Image",
          btnReset: "Sanitize Another Photo",
          guideHeading: "Why Stripping Image Metadata is Essential for Digital Privacy",
          guideSubheading: "Understand how EXIF, IPTC, and GPS tags are created, what risks they pose, and how browser-side sanitization keeps you safe.",
          g1Title: "Why Strip Metadata?",
          g1Desc: "Smartphone and digital camera photos automatically embed latitude, longitude, altitude, capture timestamps, and device serial numbers. Publishing unstripped photos exposes home addresses, daily routines, and sensitive workplace locations.",
          g2Title: "How Canvas Sanitization Works",
          g2Desc: "VantorKit decodes the image and rasterizes the raw visual pixels onto an isolated in-memory HTML5 Canvas buffer. Re-encoding this canvas into a new image file discards all non-pixel EXIF, IPTC, and XMP chunks completely without reducing visual clarity.",
          g3Title: "Zero-Server Guarantee",
          g3Desc: "Unlike commercial image tools that upload your files to cloud servers, VantorKit processes 100% of the extraction and sanitization inside your browser RAM. Zero bytes are ever sent over the network, ensuring total confidentiality for journalists, legal teams, and families.",
          faq1Q: "Does stripping metadata affect photo resolution or visual quality?",
          faq1A: "No. The canvas re-encoding preserves full pixel dimensions (width and height). Only non-visual metadata headers (APP1, XMP, IPTC) are permanently removed.",
          faq2Q: "Which image formats are supported?",
          faq2A: "The tool fully supports JPEG (.jpg, .jpeg), PNG (.png), and modern WebP (.webp) formats. Sanitized output preserves your original format.",
          faq3Q: "Can someone recover stripped GPS data after sanitization?",
          faq3A: "No. Because the image is re-rasterized directly into fresh pixel data, the old EXIF data blocks cease to exist. There is zero residual forensic metadata left to recover.",
          faq4Q: "Is there any file size limit?",
          faq4A: "Because all processing takes place in your computer's local memory, you can comfortably process large RAW-converted JPEGs and photos up to 100MB without throttling.",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerCopy: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
          langLabel: "العربية",
          backLink: "→ العودة للأدوات",
          heroBadge: "على جهازك • خصوصية كاملة • بدون رفع أي بيانات",
          heroTitle: "أداة تنظيف البيانات الوصفية و EXIF",
          heroSubtitle: "افحص إحداثيات GPS ونماذج الكاميرات المخفية وتواريخ الالتقاط، ثم احذف كافة البيانات الوصفية محلياً بأمان قبل مشاركة الصور.",
          dropTitle: "أفلت الصورة هنا لفحص وحذف البيانات الوصفية",
          dropDesc: "تدعم صور JPEG و PNG و WebP حتى 100 ميجابايت. المعالجة تتم بالكامل في ذاكرة متصفحك.",
          btnSample: "تحميل صورة تجريبية بها إحداثيات GPS",
          panelTitle: "تدقيق وتحليل أمان البيانات الوصفية",
          btnChange: "تغيير الصورة",
          metaFilename: "اسم الملف",
          metaDimensions: "الأبعاد",
          metaFormat: "الصيغة",
          metaFileSize: "حجم الملف",
          gpsAlertTitle: "⚠️ تم اكتشاف إحداثيات GPS حساسة!",
          cameraAlertTitle: "📸 تم العثور على بيانات الكاميرا والوقت",
          cleanAlertTitle: "✅ لم يتم اكتشاف إحداثيات GPS خطيرة",
          cleanAlertText: "لا توجد إحداثيات جغرافية مسجلة. عملية التنظيف تضمن إزالة أي بيانات وصفية إضافية.",
          detectedTagsTitle: "البيانات الوصفية المكتشفة",
          thTag: "اسم الحقل",
          thValue: "القيمة المسجلة",
          actionNote: "تنظيف في الذاكرة 100% بدون أي خوادم خارجية.",
          btnSanitize: "إزالة كافة البيانات الوصفية وتطهير الصورة",
          resultTitle: "تم تطهير الصورة بنجاح!",
          resultDesc: "تمت إزالة كافة وسوم EXIF وإحداثيات GPS وبيانات الكاميرا بالكامل من الذاكرة.",
          statTagsRemoved: "الوسوم المحذوفة",
          statGpsStatus: "حالة إحداثيات GPS",
          statFileSize: "الحجم بعد التنظيف",
          btnDownload: "تحميل الصورة المطهرة",
          btnReset: "تطهير صورة أخرى",
          guideHeading: "أهمية إزالة البيانات الوصفية للصور لحماية الخصوصية الرقمية",
          guideSubheading: "تعرف على كيفية إنشاء وسوم EXIF و IPTC وإحداثيات GPS، وما هي المخاطر التي تفرضها، وكيف تحميك المعالجة داخل المتصفح.",
          g1Title: "لماذا يجب حذف البيانات الوصفية؟",
          g1Desc: "تقوم الهواتف الذكية والكاميرات الرقمية بتضمين خطوط الطول والعرض، والارتفاع، وتوقيت الالتقاط، والرقم التسلسلي للجهاز داخل الصور تلقائياً. يؤدي نشر هذه الصور دون تطهير إلى كشف موقع منزلك وعناوين عملك ومساراتك اليومية.",
          g2Title: "كيف تعمل آلية التطهير عبر Canvas؟",
          g2Desc: "تقوم الأداة بفك تشفير الصورة ورسم بكسلاتها المرئية فقط على لوحة HTML5 Canvas معزولة في الذاكرة. ثم يُعاد ترميزها كملف صورة جديد يطرح تماماً كل وسوم EXIF و IPTC و XMP دون المساس بدقة وجودة الصورة الأصلية.",
          g3Title: "ضمان المعالجة المحلية بدون خوادم",
          g3Desc: "على عكس أدوات الصور السحابية التي ترسل ملفاتك إلى خوادم خارجية، تعمل أداة فانتور كيت بنسبة 100% داخل ذاكرة متصفحك المؤقتة. لا يتم إرسال أي بايت عبر الإنترنت، مما يوفر سرية مطلقة للصحفيين والمحامين والعائلات.",
          faq1Q: "هل يؤثر حذف البيانات الوصفية على دقة أو جودة الصورة؟",
          faq1A: "كلا، إطلاقاً. تحافظ عملية إعادة الترميز على الأبعاد الكاملة بالبكسل (العرض والارتفاع). يتم فقط حذف كتل البيانات الوصفية غير المرئية (APP1 و XMP و IPTC) بشكل دائم.",
          faq2Q: "ما هي صيغ الصور المدعومة؟",
          faq2A: "تدعم الأداة صيغ JPEG (.jpg, .jpeg) و PNG (.png) وصيغة WebP (.webp) الحديثة بالكامل، ويتم حفظ الملف المطهر بنفس الصيغة الأصلية.",
          faq3Q: "هل يمكن لأي شخص استرجاع إحداثيات GPS بعد التطهير؟",
          faq3A: "مستحيل تماماً. نظراً لإعادة رسم الصورة مباشرة كبكسلات نقية جديدة، تنعدم كتل بيانات EXIF الأصلية تماماً ولا يتبقى أي أثر جنائي أو بيانات رقمية مخفية.",
          faq4Q: "هل يوجد حد أقصى لحجم الملف المرفوع؟",
          faq4A: "نظراً لأن جميع المعالجات تتم مباشرة في ذاكرة جهازك المحلية دون رفع إلى خوادم، يمكنك معالجة الصور الكبيرة وصور JPEG الناتجة عن كاميرات RAW حتى 100 ميجابايت بكل سلاسة وبدون قيود.",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerCopy: "© 2026 فانتوركيت. أدوات ويب سريعة وخاصة ومجانية. المعالجة تتم محلياً في متصفحك."
        },
        fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
          langLabel: "Français",
          backLink: "← Retour aux outils",
          heroBadge: "Côté Client • Confidentialité Absolue • Zéro Donnée Transférée",
          heroTitle: "Nettoyeur de Métadonnées & EXIF",
          heroSubtitle: "Inspectez les coordonnées GPS cachées, modèles d'appareils et horodatages, puis supprimez définitivement tous les marqueurs en mémoire locale avant de partager.",
          dropTitle: "Déposez une image pour inspecter et supprimer les métadonnées",
          dropDesc: "Prend en charge les photos JPEG, PNG et WebP jusqu'à 100 Mo. Traitement 100% local en RAM.",
          btnSample: "Charger une photo d'exemple avec GPS EXIF",
          panelTitle: "Audit de Sécurité et Analyse des Métadonnées",
          btnChange: "Changer de photo",
          metaFilename: "Nom du fichier",
          metaDimensions: "Dimensions",
          metaFormat: "Format",
          metaFileSize: "Taille",
          gpsAlertTitle: "⚠️ LOCALISATION GPS SENSIBLE DÉTECTÉE !",
          cameraAlertTitle: "📸 Données d'appareil et horodatage détectés",
          cleanAlertTitle: "✅ Aucune localisation GPS détectée",
          cleanAlertText: "Aucune coordonnée GPS trouvée. La ré-encodage assure la suppression de toute métadonnée résiduelle.",
          detectedTagsTitle: "Balises de métadonnées détectées",
          thTag: "Balise",
          thValue: "Valeur intégrée",
          actionNote: "Purge Canvas 100% locale en mémoire. Aucun journal serveur.",
          btnSanitize: "Purger les métadonnées & Assainir",
          resultTitle: "Image assainie avec succès !",
          resultDesc: "Toutes les balises EXIF, coordonnées GPS et identifiants matériels ont été éliminés.",
          statTagsRemoved: "Balises purgées",
          statGpsStatus: "Statut GPS",
          statFileSize: "Taille assainie",
          btnDownload: "Télécharger l'image assainie",
          btnReset: "Assainir une autre photo",
          guideHeading: "Pourquoi Supprimer les Métadonnées d'Images est Essentiel",
          guideSubheading: "Comprenez comment sont générées les balises EXIF, IPTC et GPS, quels risques elles présentent et comment l'assainissement local vous protège.",
          g1Title: "Pourquoi Supprimer les Métadonnées ?",
          g1Desc: "Les smartphones et appareils photo intègrent automatiquement la latitude, la longitude, l'altitude, l'heure exacte et le numéro de série de l'appareil. Publier des photos sans les nettoyer expose votre domicile et vos déplacements quotidiens.",
          g2Title: "Fonctionnement de l'Assainissement Canvas",
          g2Desc: "VantorKit décode l'image et restitue uniquement les pixels visuels sur un canevas HTML5 en mémoire. Le ré-encodage produit un nouveau fichier d'image exempt de toute balise EXIF, IPTC ou XMP résiduelle tout en préservant la qualité.",
          g3Title: "Garantie Zéro Serveur",
          g3Desc: "Contrairement aux outils cloud qui téléversent vos fichiers vers des serveurs distants, VantorKit effectue 100% du traitement dans la RAM de votre navigateur. Aucun octet n'est transmis sur le réseau, garantissant une confidentialité totale.",
          faq1Q: "La suppression des métadonnées affecte-t-elle la résolution ou la qualité de l'image ?",
          faq1A: "Non. Le ré-encodage sur canevas préserve l'intégralité des dimensions en pixels (largeur et hauteur). Seules les métadonnées non visuelles (APP1, XMP, IPTC) sont définitivement supprimées.",
          faq2Q: "Quels formats d'image sont pris en charge ?",
          faq2A: "L'outil prend en charge les formats JPEG (.jpg, .jpeg), PNG (.png) et WebP (.webp). Le fichier assaini conserve son format d'origine.",
          faq3Q: "Peut-on récupérer les données GPS supprimées après l'assainissement ?",
          faq3A: "Non. L'image étant entièrement restituée à partir de nouveaux pixels bruts, les anciens blocs de données EXIF cessent d'exister. Aucune métadonnée résiduelle ne peut être récupérée.",
          faq4Q: "Existe-t-il une limite de taille de fichier ?",
          faq4A: "Comme tout le traitement est effectué localement dans la mémoire de votre appareil, vous pouvez traiter de volumineux fichiers JPEG ou photos haute résolution jusqu'à 100 Mo sans ralentissement.",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerCopy: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits."
        },
        it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
          langLabel: "Italiano",
          backLink: "← Torna agli strumenti",
          heroBadge: "Lato Client • Massima Privacy • Nessun Upload",
          heroTitle: "Pulitore di Metadati & EXIF",
          heroSubtitle: "Ispeziona coordinate GPS, modelli di fotocamera e timestamp nascosti, quindi ripulisci ed elimina tutti i metadati localmente prima di condividere le tue foto.",
          dropTitle: "Trascina un'immagine per ispezionare e rimuovere i metadati",
          dropDesc: "Supporta JPEG, PNG e WebP fino a 100 MB. Elaborato interamente nella RAM del tuo browser.",
          btnSample: "Carica foto di prova con GPS EXIF",
          panelTitle: "Analisi di sicurezza e audit dei metadati",
          btnChange: "Cambia foto",
          metaFilename: "Nome file",
          metaDimensions: "Dimensioni",
          metaFormat: "Formato",
          metaFileSize: "Dimensione file",
          gpsAlertTitle: "⚠️ POSIZIONE GPS SENSIBILE RILEVATA!",
          cameraAlertTitle: "📸 Dati fotocamera e timestamp rilevati",
          cleanAlertTitle: "✅ Nessuna coordinata GPS rilevata",
          cleanAlertText: "Nessun dato GPS trovato nei tag standard. La ricodifica garantisce l'eliminazione totale di qualsiasi blocco.",
          detectedTagsTitle: "Tag metadati rilevati",
          thTag: "Tag",
          thValue: "Valore incorporato",
          actionNote: "Pulizia Canvas 100% in memoria. Nessun log sul server.",
          btnSanitize: "Rimuovi metadati & Sanifica",
          resultTitle: "Immagine sanificata con successo!",
          resultDesc: "Tutti i tag EXIF, coordinate GPS e impronte della fotocamera sono stati rimossi in modo permanente.",
          statTagsRemoved: "Tag eliminati",
          statGpsStatus: "Stato GPS",
          statFileSize: "Dimensione sanificata",
          btnDownload: "Scarica immagine sanificata",
          btnReset: "Sanifica un'altra foto",
          guideHeading: "Perché Rimuovere i Metadati delle Immagini è Essenziale",
          guideSubheading: "Scopri come vengono generati i tag EXIF, IPTC e GPS, quali rischi comportano e in che modo la sanificazione locale protegge la tua privacy.",
          g1Title: "Perché Rimuovere i Metadati?",
          g1Desc: "Le foto scattate con smartphone e fotocamere incorporano latitudine, longitudine, altitudine, timestamp precisi e numeri di serie. La condivisione di immagini non sanificate espone indirizzi privati e luoghi di lavoro sensibili.",
          g2Title: "Come Funziona la Pulizia con Canvas",
          g2Desc: "VantorKit decodifica l'immagine e renderizza i singoli pixel visivi su un buffer HTML5 Canvas isolato nella memoria. La ricodifica genera un nuovo file ripulito da qualsiasi intestazione EXIF, IPTC o XMP senza compromettere la qualità.",
          g3Title: "Garanzia Zero Server",
          g3Desc: "A differenza degli strumenti online tradizionali che caricano i file su server remoti, VantorKit elabora il 100% delle immagini nella RAM locale del browser. Nessun dato lascia il dispositivo, garantendo la massima riservatezza.",
          faq1Q: "La rimozione dei metadati influisce sulla risoluzione o sulla qualità della foto?",
          faq1A: "No. La ricodifica tramite canvas preserva integralmente le dimensioni in pixel (larghezza e altezza). Vengono rimosse esclusivamente le intestazioni non visive (APP1, XMP, IPTC).",
          faq2Q: "Quali formati di immagine sono supportati?",
          faq2A: "Lo strumento supporta i formati JPEG (.jpg, .jpeg), PNG (.png) e il moderno WebP (.webp). L'output sanificato mantiene il formato d'origine.",
          faq3Q: "È possibile recuperare le coordinate GPS rimosse dopo la sanificazione?",
          faq3A: "No. Poiché l'immagine viene ri-renderizzata direttamente in dati pixel completamente nuovi, i vecchi blocchi EXIF cessano di esistere, senza alcun residuo forense recuperabile.",
          faq4Q: "Esiste un limite di dimensione per i file?",
          faq4A: "Poiché tutte le operazioni avvengono nella memoria locale del tuo dispositivo senza upload, puoi elaborare senza limitazioni file JPEG di grandi dimensioni e foto fino a 100 MB.",
          footerPriv: "Privacy Policy",
          footerTerms: "Termini di servizio",
          footerAbout: "Chi siamo",
          footerContact: "Contatto",
          footerCopy: "© 2026 VantorKit. Strumenti web veloci, privati e gratuiti."
        }
      };

      // --- State ---
      let currentFile = null;
      let currentImageObj = null;
      let currentParsedTags = {};
      let sanitizedBlob = null;
      let currentLang = localStorage.getItem('vantorkit_lang') || 'en';

      // --- DOM Elements ---
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnLoadSample = document.getElementById('btnLoadSample');
      const analysisPanel = document.getElementById('analysisPanel');
      const resultPanel = document.getElementById('resultPanel');
      const btnChangeImage = document.getElementById('btnChangeImage');
      const btnSanitize = document.getElementById('btnSanitize');
      const btnResetTool = document.getElementById('btnResetTool');
      const btnDownload = document.getElementById('btnDownload');

      const imagePreview = document.getElementById('imagePreview');
      const metaFileName = document.getElementById('metaFileName');
      const metaDimensions = document.getElementById('metaDimensions');
      const metaFormat = document.getElementById('metaFormat');
      const metaFileSize = document.getElementById('metaFileSize');

      const gpsAlertBox = document.getElementById('gpsAlertBox');
      const gpsAlertText = document.getElementById('gpsAlertText');
      const gpsCoordsRow = document.getElementById('gpsCoordsRow');
      const cameraAlertBox = document.getElementById('cameraAlertBox');
      const cameraAlertText = document.getElementById('cameraAlertText');
      const cleanAlertBox = document.getElementById('cleanAlertBox');

      const metaTableBody = document.getElementById('metaTableBody');
      const statTagsRemoved = document.getElementById('statTagsRemoved');
      const statGpsStatus = document.getElementById('statGpsStatus');
      const statCleanSize = document.getElementById('statCleanSize');

      // --- Language Selector Setup ---
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      function setLanguage(lang) {
        window.setLanguage = setLanguage;
        window.applyLanguage = setLanguage;
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
          if (dict[key]) el.textContent = dict[key];
        });
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

      // --- Drag and Drop Handlers ---
      ['dragenter', 'dragover'].forEach(evt => {
        dropZone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(evt => {
        dropZone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('dragover');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
          handleFile(files[0]);
        }
      });

      dropZone.addEventListener('click', (e) => {
        if (e.target.closest('#btnLoadSample')) return;
        fileInput.click();
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files.length > 0) {
          handleFile(fileInput.files[0]);
        }
      });

      btnChangeImage.addEventListener('click', () => {
        fileInput.click();
      });

      btnResetTool.addEventListener('click', () => {
        resultPanel.style.display = 'none';
        analysisPanel.style.display = 'none';
        dropZone.style.display = 'block';
        currentFile = null;
        currentImageObj = null;
        sanitizedBlob = null;
        fileInput.value = '';
      });

      // --- File Processing Core ---
      function handleFile(file) {
        if (!file.type.match(/^image\/(jpeg|png|webp)/i) && !file.name.match(/\.(jpe?g|png|webp)$/i)) {
          alert('Please select a valid image file (JPEG, PNG, or WebP).');
          return;
        }

        currentFile = file;
        dropZone.style.display = 'none';
        resultPanel.style.display = 'none';
        analysisPanel.style.display = 'block';

        metaFileName.textContent = file.name;
        metaFileSize.textContent = formatBytes(file.size);
        metaFormat.textContent = file.type ? file.type.replace('image/', '').toUpperCase() : 'UNKNOWN';

        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            currentImageObj = img;
            metaDimensions.textContent = img.naturalWidth + ' × ' + img.naturalHeight + ' px';
            imagePreview.src = img.src;
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);

        // Read binary for EXIF analysis
        const binReader = new FileReader();
        binReader.onload = (e) => {
          const buffer = e.target.result;
          parseImageMetadata(buffer, file);
        };
        binReader.readAsArrayBuffer(file);
      }

      // --- Pure Client-Side Binary EXIF / Metadata Parser ---
      function parseImageMetadata(buffer, file) {
        const view = new DataView(buffer);
        const tags = {};
        let hasGps = false;
        let hasCamera = false;
        let gpsInfo = null;

        if (file.type === 'image/jpeg' || file.name.match(/\.jpe?g$/i)) {
          // JPEG SOI marker 0xFFD8
          if (view.getUint16(0, false) === 0xFFD8) {
            let offset = 2;
            const length = view.byteLength;

            while (offset < length - 4) {
              const marker = view.getUint16(offset, false);
              offset += 2;

              if (marker === 0xFFE1) {
                // APP1 (EXIF / XMP)
                const segLength = view.getUint16(offset, false);
                const segStart = offset + 2;

                // Check "Exif  "
                if (segStart + 6 <= length) {
                  const exifHeader = String.fromCharCode(
                    view.getUint8(segStart),
                    view.getUint8(segStart + 1),
                    view.getUint8(segStart + 2),
                    view.getUint8(segStart + 3)
                  );

                  if (exifHeader === 'Exif') {
                    const exifResults = parseExifSegment(view, segStart + 6, segLength - 8);
                    Object.assign(tags, exifResults.tags);
                    if (exifResults.hasGps) {
                      hasGps = true;
                      gpsInfo = exifResults.gpsInfo;
                    }
                    if (exifResults.hasCamera) hasCamera = true;
                  }
                }

                offset += segLength;
              } else if (marker >= 0xFFE0 && marker <= 0xFFEF) {
                // Other APP segments (IPTC, ICC, XMP, etc.)
                const segLength = view.getUint16(offset, false);
                const appName = 'APP' + (marker & 0x0F);
                tags['Segment: ' + appName] = 'Detected (' + segLength + ' bytes)';
                offset += segLength;
              } else if (marker === 0xFFDA) {
                // Start of Scan (Image Data Begins)
                break;
              } else {
                const segLength = view.getUint16(offset, false);
                offset += segLength;
              }
            }
          }
        } else if (file.type === 'image/png' || file.name.match(/\.png$/i)) {
          // PNG Chunk Analysis
          if (view.getUint32(0, false) === 0x89504E47) {
            let offset = 8;
            const length = view.byteLength;

            while (offset < length - 8) {
              const chunkLen = view.getUint32(offset, false);
              const chunkType = String.fromCharCode(
                view.getUint8(offset + 4),
                view.getUint8(offset + 5),
                view.getUint8(offset + 6),
                view.getUint8(offset + 7)
              );

              if (['tEXt', 'zTXt', 'iTXt', 'eXIf'].includes(chunkType)) {
                tags['PNG Chunk: ' + chunkType] = 'Metadata present (' + chunkLen + ' bytes)';
                if (chunkType === 'eXIf') hasCamera = true;
              }

              offset += 12 + chunkLen;
            }
          }
        }

        currentParsedTags = tags;
        renderMetadataTable(tags, hasGps, gpsInfo, hasCamera);
      }

      function parseExifSegment(view, tiffStart, maxLen) {
        const tags = {};
        let hasGps = false;
        let hasCamera = false;
        let gpsInfo = null;

        const endian = view.getUint16(tiffStart, false);
        const littleEndian = endian === 0x4949; // 'II'

        if (view.getUint16(tiffStart + 2, littleEndian) !== 0x002A) {
          return { tags, hasGps, hasCamera, gpsInfo };
        }

        const ifd0Offset = view.getUint32(tiffStart + 4, littleEndian);
        let ifdOffset = tiffStart + ifd0Offset;

        if (ifdOffset >= view.byteLength) return { tags, hasGps, hasCamera, gpsInfo };

        const numEntries = view.getUint16(ifdOffset, littleEndian);
        let cur = ifdOffset + 2;

        let exifSubIfdOffset = 0;
        let gpsIfdOffset = 0;

        for (let i = 0; i < numEntries; i++) {
          if (cur + 12 > view.byteLength) break;
          const tagId = view.getUint16(cur, littleEndian);
          const type = view.getUint16(cur + 2, littleEndian);
          const count = view.getUint32(cur + 4, littleEndian);
          const valueOffset = cur + 8;

          if (tagId === 0x010F) {
            tags['Camera Make'] = readAscii(view, tiffStart, valueOffset, count, littleEndian);
            hasCamera = true;
          } else if (tagId === 0x0110) {
            tags['Camera Model'] = readAscii(view, tiffStart, valueOffset, count, littleEndian);
            hasCamera = true;
          } else if (tagId === 0x0131) {
            tags['Software'] = readAscii(view, tiffStart, valueOffset, count, littleEndian);
          } else if (tagId === 0x0132) {
            tags['Modify Date'] = readAscii(view, tiffStart, valueOffset, count, littleEndian);
          } else if (tagId === 0x8769) {
            exifSubIfdOffset = view.getUint32(valueOffset, littleEndian);
          } else if (tagId === 0x8825) {
            gpsIfdOffset = view.getUint32(valueOffset, littleEndian);
          }

          cur += 12;
        }

        // Parse Exif SubIFD if present
        if (exifSubIfdOffset > 0 && tiffStart + exifSubIfdOffset < view.byteLength) {
          const subCur = tiffStart + exifSubIfdOffset;
          const subEntries = view.getUint16(subCur, littleEndian);
          let subPtr = subCur + 2;

          for (let j = 0; j < subEntries; j++) {
            if (subPtr + 12 > view.byteLength) break;
            const subTag = view.getUint16(subPtr, littleEndian);
            const subCount = view.getUint32(subPtr + 4, littleEndian);
            const subValOffset = subPtr + 8;

            if (subTag === 0x9003) {
              tags['Date Time Original'] = readAscii(view, tiffStart, subValOffset, subCount, littleEndian);
            } else if (subTag === 0x9004) {
              tags['Date Time Digitized'] = readAscii(view, tiffStart, subValOffset, subCount, littleEndian);
            } else if (subTag === 0xA434) {
              tags['Lens Model'] = readAscii(view, tiffStart, subValOffset, subCount, littleEndian);
            } else if (subTag === 0xA431) {
              tags['Body Serial Number'] = readAscii(view, tiffStart, subValOffset, subCount, littleEndian);
            }

            subPtr += 12;
          }
        }

        // Parse GPS IFD if present
        if (gpsIfdOffset > 0 && tiffStart + gpsIfdOffset < view.byteLength) {
          hasGps = true;
          const gpsCur = tiffStart + gpsIfdOffset;
          const gpsEntries = view.getUint16(gpsCur, littleEndian);
          let gpsPtr = gpsCur + 2;

          let latRef = 'N';
          let lonRef = 'E';
          let latVal = null;
          let lonVal = null;

          for (let k = 0; k < gpsEntries; k++) {
            if (gpsPtr + 12 > view.byteLength) break;
            const gTag = view.getUint16(gpsPtr, littleEndian);
            const gCount = view.getUint32(gpsPtr + 4, littleEndian);
            const gValOff = gpsPtr + 8;

            if (gTag === 0x0001) latRef = String.fromCharCode(view.getUint8(gValOff));
            else if (gTag === 0x0002) latVal = readRationalArray(view, tiffStart, gValOff, 3, littleEndian);
            else if (gTag === 0x0003) lonRef = String.fromCharCode(view.getUint8(gValOff));
            else if (gTag === 0x0004) lonVal = readRationalArray(view, tiffStart, gValOff, 3, littleEndian);

            gpsPtr += 12;
          }

          if (latVal && lonVal) {
            const latDeg = latVal[0] + latVal[1]/60 + latVal[2]/3600;
            const lonDeg = lonVal[0] + lonVal[1]/60 + lonVal[2]/3600;
            gpsInfo = {
              lat: (latRef === 'S' ? -latDeg : latDeg).toFixed(6),
              lon: (lonRef === 'W' ? -lonDeg : lonDeg).toFixed(6),
              display: latDeg.toFixed(4) + '° ' + latRef + ', ' + lonDeg.toFixed(4) + '° ' + lonRef
            };
            tags['GPS Latitude'] = gpsInfo.lat + ' (' + latRef + ')';
            tags['GPS Longitude'] = gpsInfo.lon + ' (' + lonRef + ')';
          } else {
            tags['GPS Data'] = 'Embedded GPS Tags Detected';
          }
        }

        return { tags, hasGps, hasCamera, gpsInfo };
      }

      function readAscii(view, tiffStart, offset, count, littleEndian) {
        let strOffset = offset;
        if (count > 4) {
          strOffset = tiffStart + view.getUint32(offset, littleEndian);
        }
        let str = '';
        for (let i = 0; i < count; i++) {
          if (strOffset + i >= view.byteLength) break;
          const charCode = view.getUint8(strOffset + i);
          if (charCode === 0) break;
          str += String.fromCharCode(charCode);
        }
        return str.trim();
      }

      function readRationalArray(view, tiffStart, offset, count, littleEndian) {
        const arrOffset = tiffStart + view.getUint32(offset, littleEndian);
        const res = [];
        for (let i = 0; i < count; i++) {
          const num = view.getUint32(arrOffset + (i * 8), littleEndian);
          const den = view.getUint32(arrOffset + (i * 8) + 4, littleEndian);
          res.push(den === 0 ? 0 : num / den);
        }
        return res;
      }

      function renderMetadataTable(tags, hasGps, gpsInfo, hasCamera) {
        metaTableBody.innerHTML = '';
        const tagKeys = Object.keys(tags);

        if (hasGps) {
          gpsAlertBox.style.display = 'flex';
          cleanAlertBox.style.display = 'none';
          if (gpsInfo && gpsInfo.display) {
            gpsCoordsRow.textContent = '📍 ' + gpsInfo.display + ' (Coordinates: ' + gpsInfo.lat + ', ' + gpsInfo.lon + ')';
          } else {
            gpsCoordsRow.textContent = '📍 GPS Satellite Coordinates and Timestamp Embedded';
          }
        } else {
          gpsAlertBox.style.display = 'none';
          cleanAlertBox.style.display = 'flex';
        }

        if (hasCamera) {
          cameraAlertBox.style.display = 'flex';
        } else {
          cameraAlertBox.style.display = 'none';
        }

        if (tagKeys.length === 0) {
          metaTableBody.innerHTML = '<tr><td colspan="2" style="text-align:center;color:var(--text-muted);padding:1.5rem">No standard EXIF metadata tags detected. Re-sanitizing will ensure all residual chunks are stripped.</td></tr>';
        } else {
          tagKeys.forEach(key => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td class="tag-name">' + escapeHtml(key) + '</td><td class="tag-value-code">' + escapeHtml(tags[key]) + '</td>';
            metaTableBody.appendChild(tr);
          });
        }
      }

      // --- Pure In-Memory Canvas Sanitization ---
      btnSanitize.addEventListener('click', () => {
        if (!currentImageObj) return;

        const canvas = document.createElement('canvas');
        canvas.width = currentImageObj.naturalWidth;
        canvas.height = currentImageObj.naturalHeight;
        const ctx = canvas.getContext('2d');

        // Draw fresh pixels to in-memory raster buffer
        ctx.drawImage(currentImageObj, 0, 0);

        let mimeType = currentFile.type || 'image/jpeg';
        let quality = 0.95;

        canvas.toBlob((blob) => {
          sanitizedBlob = blob;
          analysisPanel.style.display = 'none';
          resultPanel.style.display = 'block';

          statTagsRemoved.textContent = Object.keys(currentParsedTags).length || 'Purged';
          statCleanSize.textContent = formatBytes(blob.size);

          window.scrollTo({ top: resultPanel.offsetTop - 50, behavior: 'smooth' });
        }, mimeType, quality);
      });

      // --- Download Sanitized Image ---
      btnDownload.addEventListener('click', () => {
        if (!sanitizedBlob) return;

        const url = URL.createObjectURL(sanitizedBlob);
        const a = document.createElement('a');
        let origName = currentFile ? currentFile.name : 'photo.jpg';
        a.download = 'sanitized_' + origName;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => URL.revokeObjectURL(url), 5000);
      });

      // --- Sample Photo Generator with Synthetic EXIF ---
      btnLoadSample.addEventListener('click', (e) => {
        e.stopPropagation();
        createSampleImageWithExif().then(file => {
          handleFile(file);
        });
      });

      async function createSampleImageWithExif() {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');

        // Draw a simulated scenic sample photo
        const grad = ctx.createLinearGradient(0, 0, 1200, 800);
        grad.addColorStop(0, '#0f172a');
        grad.addColorStop(0.5, '#1e293b');
        grad.addColorStop(1, '#0284c7');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1200, 800);

        // Sun / Mountain graphic
        ctx.beginPath();
        ctx.arc(600, 300, 90, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();

        ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText('VantorKit Sample Photo with Embedded GPS EXIF', 600, 480);

        ctx.font = '20px monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('Coordinates: 37.7749° N, 122.4194° W (San Francisco, CA)', 600, 530);

        return new Promise((resolve) => {
          canvas.toBlob((blob) => {
            const reader = new FileReader();
            reader.onload = () => {
              const baseBuffer = reader.result;
              const exifBuffer = injectMockExif(baseBuffer);
              const sampleFile = new File([exifBuffer], 'sample_vacation_gps.jpg', { type: 'image/jpeg' });
              resolve(sampleFile);
            };
            reader.readAsArrayBuffer(blob);
          }, 'image/jpeg', 0.92);
        });
      }

      function injectMockExif(jpegBuffer) {
        // Construct standard APP1 EXIF segment with GPS and camera info
        const exifData = [
          0x45, 0x78, 0x69, 0x66, 0x00, 0x00, // "Exif  "
          0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, // TIFF header (Little Endian, offset 8)
          0x06, 0x00, // 6 IFD0 entries
          0x0F, 0x01, 0x02, 0x00, 0x06, 0x00, 0x00, 0x00, 0x56, 0x00, 0x00, 0x00, // Make: "Apple "
          0x10, 0x01, 0x02, 0x00, 0x10, 0x00, 0x00, 0x00, 0x5C, 0x00, 0x00, 0x00, // Model: "iPhone 15 Pro "
          0x31, 0x01, 0x02, 0x00, 0x09, 0x00, 0x00, 0x00, 0x6C, 0x00, 0x00, 0x00, // Software: "iOS 18.1 "
          0x32, 0x01, 0x02, 0x00, 0x14, 0x00, 0x00, 0x00, 0x76, 0x00, 0x00, 0x00, // Modify Date
          0x69, 0x87, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0x8C, 0x00, 0x00, 0x00, // ExifSubIFD Offset
          0x25, 0x88, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0xB0, 0x00, 0x00, 0x00, // GPS IFD Offset
          0x00, 0x00, 0x00, 0x00, // Next IFD offset
          // Strings:
          0x41, 0x70, 0x70, 0x6C, 0x65, 0x00, // "Apple "
          0x69, 0x50, 0x68, 0x6F, 0x6E, 0x65, 0x20, 0x31, 0x35, 0x20, 0x50, 0x72, 0x6F, 0x00, 0x00, // "iPhone 15 Pro "
          0x69, 0x4F, 0x53, 0x20, 0x31, 0x38, 0x2E, 0x31, 0x00, // "iOS 18.1 "
          0x32, 0x30, 0x32, 0x36, 0x3A, 0x30, 0x39, 0x3A, 0x32, 0x39, 0x20, 0x31, 0x34, 0x3A, 0x33, 0x30, 0x3A, 0x30, 0x30, 0x00, // Date
          // SubIFD (2 entries):
          0x02, 0x00,
          0x03, 0x90, 0x02, 0x00, 0x14, 0x00, 0x00, 0x00, 0x76, 0x00, 0x00, 0x00, // DateTimeOriginal
          0x34, 0xA4, 0x02, 0x00, 0x16, 0x00, 0x00, 0x00, 0xD4, 0x00, 0x00, 0x00, // Lens Model
          0x00, 0x00, 0x00, 0x00,
          // GPS IFD (4 entries):
          0x04, 0x00,
          0x01, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00, 0x4E, 0x00, 0x00, 0x00, // LatRef: 'N'
          0x02, 0x00, 0x05, 0x00, 0x03, 0x00, 0x00, 0x00, 0xEA, 0x00, 0x00, 0x00, // Latitude
          0x03, 0x00, 0x02, 0x00, 0x02, 0x00, 0x00, 0x00, 0x57, 0x00, 0x00, 0x00, // LonRef: 'W'
          0x04, 0x00, 0x05, 0x00, 0x03, 0x00, 0x00, 0x00, 0x02, 0x01, 0x00, 0x00, // Longitude
          0x00, 0x00, 0x00, 0x00,
          // Lens String:
          0x69, 0x50, 0x68, 0x6F, 0x6E, 0x65, 0x20, 0x31, 0x35, 0x20, 0x50, 0x72, 0x6F, 0x20, 0x6D, 0x61, 0x69, 0x6E, 0x20, 0x63, 0x61, 0x6D, // Lens
          // Lat values: 37/1, 46/1, 2964/100 -> 37° 46' 29.64" N
          0x25, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
          0x2E, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
          0x94, 0x0B, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00,
          // Lon values: 122/1, 25/1, 984/100 -> 122° 25' 9.84" W
          0x7A, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
          0x19, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
          0xD8, 0x03, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00
        ];

        const segLen = exifData.length + 2;
        const app1Header = [0xFF, 0xE1, (segLen >> 8) & 0xFF, segLen & 0xFF];

        const origBytes = new Uint8Array(jpegBuffer);
        const combined = new Uint8Array(origBytes.length + app1Header.length + exifData.length);

        // SOI marker (2 bytes)
        combined.set(origBytes.subarray(0, 2), 0);
        // APP1 header
        combined.set(app1Header, 2);
        // APP1 payload
        combined.set(exifData, 6);
        // Rest of original JPEG
        combined.set(origBytes.subarray(2), 6 + exifData.length);

        return combined.buffer;
      }

      function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
      }

      function escapeHtml(str) {
        if (typeof str !== 'string') return String(str);
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      // Initialize language
      setLanguage(currentLang);
    })();