(function () {
      'use strict';

      // --- Multi-Language (i18n) Translations ---
      const I18N = {
        en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
          backLink: "← Back to Tools",
          brandBadge: "Images & Design • 100% Client-Side • Canvas Quantization",
          pageTitle: "Color Palette <span>Extractor</span>",
          pageSubtitle: "Extract vibrant dominant color palettes from any photo, vector, or artwork directly in your browser. Inspect WCAG contrast, sample custom pixels with the loupe eyedropper, and export in one click.",
          imageSourceTitle: "Source Image",
          badgeLocal: "100% Private",
          dropTitle: "Drop an Image Here or Click to Browse",
          dropDesc: "Supports PNG, JPG, WEBP, and SVG (all processed locally)",
          btnBrowse: "Choose Image File",
          lblSamples: "Load Sample:",
          sampleSunset: "Sunset Horizon",
          sampleCyberpunk: "Cyberpunk Neon",
          sampleEmerald: "Emerald Botanical",
          btnClearFile: "Reset",
          eyedropperHint: "Hover to inspect or click to sample pixel",
          btnEyedropper: "Eyedropper",
          sampledPixelTitle: "Sampled Pixel Color",
          btnCopy: "Copy",
          btnAddCustom: "Add to Palette",
          paletteOutputTitle: "Extracted Palette",
          lblPaletteSize: "Palette Size",
          lblColorFormat: "Color Format",
          lblSortMode: "Sorting & Grouping",
          sortDominant: "Dominant",
          sortVibrant: "Vibrant",
          sortLuminance: "Luminance",
          galleryTitle: "Swatches & Accessibility",
          clickCopyHint: "Click any swatch to copy code",
          exportTitle: "Export Palette",
          btnCopyCss: "Copy CSS Variables",
          btnExportPng: "Export as PNG",
          btnExportJson: "Export as JSON",
          btnCopyHexArray: "Copy Array",
          guideHeading: "Client-Side Color Intelligence & Harmony",
          guideSubheading: "Discover how in-browser pixel sampling and k-means clustering calculate visually cohesive palettes with zero network latency and complete privacy.",
          card1Title: "K-Means Chromatic Quantization",
          card1Desc: "Images contain millions of individual pixel colors. Our k-means++ clustering algorithm partitions pixel coordinates in 3D RGB color space to isolate the mathematically dominant clusters that define the aesthetic tone of the image.",
          card2Title: "100% In-Memory Privacy",
          card2Desc: "Your proprietary design files, personal photographs, and client assets are parsed exclusively inside your browser's local sandbox memory using the HTML5 Canvas API. Zero images are ever uploaded or transmitted across any network.",
          card3Title: "WCAG 2.1 Contrast Standards",
          card3Desc: "Every extracted swatch includes relative luminance and automated contrast ratios against black and white backgrounds. This ensures your UI components satisfy WCAG AA (4.5:1) and AAA (7:1) readability guidelines.",
          faq1Q: "Why extract palettes client-side rather than via an API?",
          faq1A: "Client-side extraction executes with zero server lag, requires no account or API keys, works offline, and guarantees your proprietary graphic assets and unreleased photographs remain strictly private on your computer.",
          faq2Q: "Which image formats and file sizes are supported?",
          faq2A: "You can drag and drop PNG, JPG, JPEG, WEBP, and SVG vector graphics of any dimension. The algorithm automatically scales down high-resolution images during sampling for instant processing without losing chromatic precision.",
          faq3Q: "How does the interactive eyedropper work?",
          faq3A: "Hovering your mouse over the preview canvas reveals a real-time magnifying loupe displaying the magnified pixel grid and exact hex code. Clicking anywhere locks that custom pixel color so you can copy it or append it to your active palette.",
          faq4Q: "How do I use the exported CSS variables in my project?",
          faq4A: "Clicking 'Copy CSS Variables' provides a clean :root declaration block with custom variables (--color-1, --color-2, etc.). Paste this directly into your global CSS or design tokens file for instant design consistency.",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser.",
          // Toast Feedback Strings
          copiedToast: "Color code copied to clipboard!",
          cssCopiedToast: "CSS Variables copied to clipboard!",
          arrayCopiedToast: "Color array copied to clipboard!",
          pngDownloadedToast: "Palette swatch card PNG exported!",
          jsonDownloadedToast: "Palette JSON exported!",
          pixelSampledToast: "Custom pixel sampled: ",
          pixelAddedToast: "Sampled color added to palette!",
          sampleLoadedToast: "Sample image loaded successfully!"
        },
        ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
          backLink: "← العودة إلى الأدوات",
          brandBadge: "الصور والتصميم • محلي 100% في المتصفح • تكميم الألوان بالكانفاس",
          pageTitle: "استخراج <span>لوحة الألوان</span>",
          pageSubtitle: "استخرج لوحات ألوان جذابة ومتناسقة من أي صورة أو تصميم متجهي مباشرة داخل متصفحك. افحص تباين سهولة القراءة WCAG، والتقط البكسلات بالقطارة، وقم بالتصدير بنقرة واحدة.",
          imageSourceTitle: "الصورة المصدر",
          badgeLocal: "خصوصية 100%",
          dropTitle: "اسحب صورة هنا أو انقر للاختيار",
          dropDesc: "يدعم PNG و JPG و WEBP و SVG (تتم المعالجة محلياً بالكامل)",
          btnBrowse: "اختر ملف صورة",
          lblSamples: "تحميل عينة:",
          sampleSunset: "شفق الغروب",
          sampleCyberpunk: "سايبربانك نيون",
          sampleEmerald: "الزمرد النباتي",
          btnClearFile: "إعادة ضبط",
          eyedropperHint: "مرر المؤشر للمعاينة أو انقر لالتقاط البكسل",
          btnEyedropper: "القطارة",
          sampledPixelTitle: "لون البكسل الملتقط",
          btnCopy: "نسخ",
          btnAddCustom: "إضافة للوحة",
          paletteOutputTitle: "لوحة الألوان المستخرجة",
          lblPaletteSize: "عدد الألوان",
          lblColorFormat: "صيغة الألوان",
          lblSortMode: "الفرز والترتيب",
          sortDominant: "السائدة",
          sortVibrant: "الحيوية",
          sortLuminance: "الإضاءة",
          galleryTitle: "العينات وإمكانية الوصول",
          clickCopyHint: "انقر على أي لون لنسخ الكود",
          exportTitle: "تصدير لوحة الألوان",
          btnCopyCss: "نسخ متغيرات CSS",
          btnExportPng: "تصدير كصورة PNG",
          btnExportJson: "تصدير كملف JSON",
          btnCopyHexArray: "نسخ مصفوفة الأكواد",
          guideHeading: "ذكاء وتناسق الألوان المحلي داخل المتصفح",
          guideSubheading: "تعرف على كيفية قيام خوارزميات أخذ العينات وتجميع K-Means بحساب لوحات ألوان متجانسة بصرية دون أي خوادم خارجية وبخصوصية مطلقة.",
          card1Title: "تكميم لوني عبر خوارزمية K-Means",
          card1Desc: "تحتوي الصور على ملايين البكسلات الفردية. تعمل خوارزمية K-Means++ على تقسيم فضاء الألوان الثلاثي RGB لعزل التجمعات اللونية السائدة رياضياً والتي تحدد الطابع البصري للصورة.",
          card2Title: "خصوصية 100% داخل الذاكرة",
          card2Desc: "تتم معالجة تصميماتك الخاصة وصور عملائك الحصرية داخل ذاكرة متصفحك الآمنة فقط باستخدام واجهة Canvas API. لا يتم نقل أي بايت من صورك عبر الشبكة مطلقاً.",
          card3Title: "معايير التباين وإمكانية الوصول WCAG 2.1",
          card3Desc: "تتضمن كل عينة لونية مقياس الإضاءة النسبية ونسب التباين المحسوبة آلياً مقابل الخلفيات البيضاء والسوداء، مما يضمن توافق واجهاتك مع معايير AA و AAA للقراءة المريحة.",
          faq1Q: "لماذا أستخرج لوحات الألوان محلياً بدلاً من واجهات برمجة التطبيقات السحابية؟",
          faq1A: "توفر المعالجة المحلية سرعة فائقة دون تأخير الخوادم، ولا تتطلب اشتراكاً أو مفاتيح API، وتعمل بدون إنترنت، وتضمن بقاء صورك وملفاتك الحساسة سرية تماماً على جهازك الشخصي.",
          faq2Q: "ما هي صيغ الصور وأحجام الملفات المدعومة؟",
          faq2A: "يمكنك سحب وإفلات صور PNG وJPG وWEBP والرسومات المتجهة SVG بأي دقة. تقوم الخوارزمية بتحجيم الصور الكبيرة تلقائياً أثناء أخذ العينات لضمان معالجة فورية دون المساس بدقة الألوان.",
          faq3Q: "كيف تعمل قطارة الألوان التفاعلية؟",
          faq3A: "يؤدي تمرير المؤشر فوق الصورة إلى تفعيل عدسة مكبرة تكشف شبكة البكسلات وكود اللون بدقة متناهية. يؤدي النقر على أي موضع إلى تثبيت هذا اللون لنسخه أو إضافته إلى اللوحة الحالية.",
          faq4Q: "كيف أستخدم متغيرات CSS المصدرة في مشروعي البرمجي؟",
          faq4A: "ينسخ زر 'نسخ متغيرات CSS' قالباً منسقاً لقواعد :root يحوي متغيرات مخصصة (--color-1, --color-2، إلخ). يمكنك لصقه مباشرة في ملف الأنماط العام لديك للبدء فوراً في بناء واجهات متناسقة.",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك.",
          copiedToast: "تم نسخ كود اللون إلى الحافظة!",
          cssCopiedToast: "تم نسخ متغيرات CSS بنجاح!",
          arrayCopiedToast: "تم نسخ مصفوفة الألوان بنجاح!",
          pngDownloadedToast: "تم تصدير بطاقة الألوان بصيغة PNG!",
          jsonDownloadedToast: "تم تصدير ملف لوحة الألوان JSON!",
          pixelSampledToast: "تم التقاط لون البكسل: ",
          pixelAddedToast: "تمت إضافة اللون الملتقط إلى اللوحة!",
          sampleLoadedToast: "تم تحميل الصورة النموذجية بنجاح!"
        },
        fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
          backLink: "← Retour aux Outils",
          brandBadge: "Images & Design • 100% Côté Client • Quantification Canvas",
          pageTitle: "Extracteur de <span>Palette de Couleurs</span>",
          pageSubtitle: "Extrayez des palettes de couleurs dominantes depuis toute photo ou illustration directement dans votre navigateur. Inspectez le contraste WCAG, échantillonnez des pixels avec la loupe et exportez en un clic.",
          imageSourceTitle: "Image Source",
          badgeLocal: "100% Privé",
          dropTitle: "Déposez une image ici ou cliquez pour parcourir",
          dropDesc: "Prend en charge PNG, JPG, WEBP et SVG (traitement local)",
          btnBrowse: "Choisir une Image",
          lblSamples: "Charger un exemple :",
          sampleSunset: "Coucher de Soleil",
          sampleCyberpunk: "Néon Cyberpunk",
          sampleEmerald: "Botanique Émeraude",
          btnClearFile: "Réinitialiser",
          eyedropperHint: "Survolez pour inspecter ou cliquez pour échantillonner",
          btnEyedropper: "Pipette",
          sampledPixelTitle: "Couleur de Pixel Échantillonnée",
          btnCopy: "Copier",
          btnAddCustom: "Ajouter à la Palette",
          paletteOutputTitle: "Palette Extraite",
          lblPaletteSize: "Taille de Palette",
          lblColorFormat: "Format de Couleur",
          lblSortMode: "Tri & Organisation",
          sortDominant: "Dominante",
          sortVibrant: "Vibrante",
          sortLuminance: "Luminance",
          galleryTitle: "Échantillons & Accessibilité",
          clickCopyHint: "Cliquez sur un échantillon pour copier son code",
          exportTitle: "Exporter la Palette",
          btnCopyCss: "Copier Variables CSS",
          btnExportPng: "Exporter en PNG",
          btnExportJson: "Exporter en JSON",
          btnCopyHexArray: "Copier Tableau",
          guideHeading: "Harmonie et Intelligence Chromatique en Navigateur",
          guideSubheading: "Découvrez comment l'échantillonnage de pixels et la segmentation k-means calculent des palettes harmonieuses sans latence réseau et dans le respect total de votre vie privée.",
          card1Title: "Quantification Chromatique K-Means",
          card1Desc: "Les images contiennent des millions de pixels. Notre algorithme k-means++ regroupe les coordonnées colorimétriques dans l'espace 3D RGB pour isoler les centroïdes dominants caractéristiques de l'image.",
          card2Title: "Confidentialité 100% en Mémoire",
          card2Desc: "Vos maquettes graphiques et photos personnelles sont traitées exclusivement dans la mémoire sandboxée de votre navigateur via l'API HTML5 Canvas. Aucune image n'est transmise sur le réseau.",
          card3Title: "Standards de Contraste WCAG 2.1",
          card3Desc: "Chaque échantillon intègre sa luminance relative et ses ratios de contraste calculés face aux fonds blanc et noir, garantissant la conformité de vos interfaces avec les normes AA (4.5:1) et AAA (7:1).",
          faq1Q: "Pourquoi extraire les palettes côté client plutôt que par API ?",
          faq1A: "L'extraction locale garantit un temps de réponse instantané, ne nécessite aucune clé d'API, fonctionne hors ligne et protège rigoureusement la confidentialité de vos créations.",
          faq2Q: "Quels formats et résolutions d'images sont supportés ?",
          faq2A: "Vous pouvez glisser-déposer des fichiers PNG, JPG, JPEG, WEBP et des vecteurs SVG de toute dimension. Le moteur optimise l'échantillonnage pour un calcul immédiat sans perte de précision.",
          faq3Q: "Comment fonctionne la pipette interactive ?",
          faq3A: "Le survol de l'image déclenche une loupe grossissante affichant la grille de pixels et la couleur exacte sous le curseur. Un clic verrouille la nuance pour la copier ou l'ajouter à vos nuances.",
          faq4Q: "Comment utiliser les variables CSS exportées ?",
          faq4A: "L'action 'Copier Variables CSS' génère un bloc de déclarations :root prêt à l'emploi (--color-1, --color-2, etc.) que vous pouvez coller directement dans vos feuilles de style.",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement dans votre navigateur.",
          copiedToast: "Code couleur copié dans le presse-papiers !",
          cssCopiedToast: "Variables CSS copiées avec succès !",
          arrayCopiedToast: "Tableau de couleurs copié !",
          pngDownloadedToast: "Carte de palette PNG exportée !",
          jsonDownloadedToast: "Fichier JSON de palette exporté !",
          pixelSampledToast: "Pixel personnalisé échantillonné : ",
          pixelAddedToast: "Couleur ajoutée à la palette !",
          sampleLoadedToast: "Image exemple chargée avec succès !"
        },
        it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
          backLink: "← Torna agli Strumenti",
          brandBadge: "Immagini & Design • 100% Lato Client • Quantizzazione Canvas",
          pageTitle: "Estrattore di <span>Palette Colori</span>",
          pageSubtitle: "Estrai palette di colori dominanti da qualsiasi foto o illustrazione vettoriale direttamente nel browser. Verifica il contrasto WCAG, campiona pixel con la lente contagocce ed esporta in un clic.",
          imageSourceTitle: "Immagine Sorgente",
          badgeLocal: "100% Privato",
          dropTitle: "Trascina un'immagine qui o clicca per sfogliare",
          dropDesc: "Supporta PNG, JPG, WEBP e SVG (tutto elaborato in locale)",
          btnBrowse: "Scegli File Immagine",
          lblSamples: "Carica Esempio:",
          sampleSunset: "Orizzonte al Tramonto",
          sampleCyberpunk: "Neon Cyberpunk",
          sampleEmerald: "Botanico Smeraldo",
          btnClearFile: "Ripristina",
          eyedropperHint: "Passa sopra per ispezionare o clicca per campionare",
          btnEyedropper: "Contagocce",
          sampledPixelTitle: "Colore Pixel Campionato",
          btnCopy: "Copia",
          btnAddCustom: "Aggiungi a Palette",
          paletteOutputTitle: "Palette Estratta",
          lblPaletteSize: "Dimensione Palette",
          lblColorFormat: "Formato Colore",
          lblSortMode: "Ordinamento & Raggruppamento",
          sortDominant: "Dominante",
          sortVibrant: "Vivace",
          sortLuminance: "Luminanza",
          galleryTitle: "Campioni & Accessibilità",
          clickCopyHint: "Clicca su qualsiasi colore per copiarne il codice",
          exportTitle: "Esporta Palette",
          btnCopyCss: "Copia Variabili CSS",
          btnExportPng: "Esporta come PNG",
          btnExportJson: "Esporta come JSON",
          btnCopyHexArray: "Copia Array",
          guideHeading: "Armonia e Intelligenza Cromatica nel Browser",
          guideSubheading: "Scopri come il campionamento dei pixel e il clustering k-means calcolano palette armoniose con latenza zero e totale rispetto della privacy.",
          card1Title: "Quantizzazione Cromatica K-Means",
          card1Desc: "Le immagini contengono milioni di pixel individuali. Il nostro algoritmo k-means++ raggruppa le coordinate cromatiche nello spazio 3D RGB per estrarre i baricentri dominanti che definiscono il tono estetico dell'immagine.",
          card2Title: "Privacy 100% in Memoria",
          card2Desc: "Le tue grafiche e fotografie personali vengono elaborate esclusivamente nella memoria locale del browser tramite l'API HTML5 Canvas. Nessun file o dato viene mai trasmesso in rete.",
          card3Title: "Standard di Contrasto WCAG 2.1",
          card3Desc: "Ogni campione include la luminanza relativa e il rapporto di contrasto calcolato rispetto a sfondi bianchi e neri, assicurando che i tuoi elementi UI soddisfino le linee guida di leggibilità AA (4.5:1) e AAA (7:1).",
          faq1Q: "Perché estrarre le palette lato client anziché con un'API remota?",
          faq1A: "L'elaborazione locale garantisce risposte istantanee, non richiede account o chiavi API, funziona offline e mantiene i tuoi file grafici completamente riservati sul tuo computer.",
          faq2Q: "Quali formati e dimensioni di immagine sono supportati?",
          faq2A: "Puoi trascinare e rilasciare file PNG, JPG, JPEG, WEBP e vettori SVG di qualsiasi dimensione. Il motore ottimizza il campionamento per un'elaborazione istantanea senza perdite di fedeltà cromatica.",
          faq3Q: "Come funziona il contagocce interattivo?",
          faq3A: "Muovendo il mouse sull'immagine viene mostrata una lente d'ingrandimento con la griglia dei pixel e il codice esadecimale esatto. Cliccando su qualsiasi punto il colore viene bloccato per copiarlo o aggiungerlo alla palette.",
          faq4Q: "Come si utilizzano le variabili CSS esportate?",
          faq4A: "Il pulsante 'Copia Variabili CSS' genera un blocco :root con variabili personalizzate (--color-1, --color-2, ecc.) pronto da incollare nei tuoi fogli di stile.",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente nel tuo browser.",
          copiedToast: "Codice colore copiato negli appunti!",
          cssCopiedToast: "Variabili CSS copiate con successo!",
          arrayCopiedToast: "Array di colori copiato negli appunti!",
          pngDownloadedToast: "Scheda palette PNG esportata!",
          jsonDownloadedToast: "File JSON della palette esportato!",
          pixelSampledToast: "Pixel personalizzato campionato: ",
          pixelAddedToast: "Colore aggiunto alla palette!",
          sampleLoadedToast: "Immagine di esempio caricata con successo!"
        }
      };

      const LANG_LABELS = {
        en: "English",
        ar: "العربية",
        fr: "Français",
        it: "Italiano"
      };

      // --- Curated Generative Sample Graphics (Data URLs) ---
      // 1. Sunset Horizon (Warm gradients, golden sun, purple mountains, indigo waves)
      const SVG_SAMPLE_SUNSET = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%231e1b4b"/>
            <stop offset="35%" stop-color="%23581c87"/>
            <stop offset="65%" stop-color="%23c026d3"/>
            <stop offset="85%" stop-color="%23f97316"/>
            <stop offset="100%" stop-color="%23fde047"/>
          </linearGradient>
          <radialGradient id="sunGlow" cx="0.5" cy="0.65" r="0.4">
            <stop offset="0%" stop-color="%23fff" stop-opacity="1"/>
            <stop offset="25%" stop-color="%23fef08a" stop-opacity="0.9"/>
            <stop offset="60%" stop-color="%23fb923c" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="%23c026d3" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%23ea580c"/>
            <stop offset="20%" stop-color="%239333ea"/>
            <stop offset="60%" stop-color="%233b0764"/>
            <stop offset="100%" stop-color="%230f172a"/>
          </linearGradient>
        </defs>
        <rect width="800" height="340" fill="url(%23skyGrad)"/>
        <circle cx="400" cy="270" r="140" fill="url(%23sunGlow)"/>
        <circle cx="400" cy="270" r="65" fill="%23fef08a"/>
        <!-- Mountain silhouettes -->
        <polygon points="0,340 120,240 260,340" fill="%234a044e" opacity="0.85"/>
        <polygon points="180,340 340,210 520,340" fill="%233b0764" opacity="0.9"/>
        <polygon points="460,340 620,230 760,340" fill="%232e1065" opacity="0.85"/>
        <polygon points="680,340 760,270 800,340" fill="%231e1b4b" opacity="0.95"/>
        <rect y="335" width="800" height="165" fill="url(%23seaGrad)"/>
        <!-- Sun reflection waves on sea -->
        <ellipse cx="400" cy="350" rx="90" ry="4" fill="%23fde047" opacity="0.7"/>
        <ellipse cx="400" cy="365" rx="75" ry="3" fill="%23fde047" opacity="0.6"/>
        <ellipse cx="400" cy="385" rx="60" ry="3" fill="%23fb923c" opacity="0.5"/>
        <ellipse cx="400" cy="410" rx="40" ry="2" fill="%23f97316" opacity="0.4"/>
      </svg>`;

      // 2. Cyberpunk Neon (Electric cyan, neon pink, deep obsidian, bright violet grid)
      const SVG_SAMPLE_CYBERPUNK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
        <defs>
          <linearGradient id="cyberSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%23050510"/>
            <stop offset="50%" stop-color="%230d0926"/>
            <stop offset="100%" stop-color="%232b0938"/>
          </linearGradient>
          <linearGradient id="neonPink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23ff007f"/>
            <stop offset="100%" stop-color="%237928ca"/>
          </linearGradient>
          <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%2300f2fe"/>
            <stop offset="100%" stop-color="%234facfe"/>
          </linearGradient>
          <radialGradient id="sunNeon" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stop-color="%23ff007f"/>
            <stop offset="100%" stop-color="%23ff007f" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill="url(%23cyberSky)"/>
        <!-- Cyber Moon/Sun -->
        <circle cx="400" cy="180" r="90" fill="url(%23neonPink)"/>
        <circle cx="400" cy="180" r="130" fill="url(%23sunNeon)" opacity="0.35"/>
        <!-- Buildings -->
        <rect x="60" y="210" width="80" height="190" fill="%23110e26" stroke="%2300f2fe" stroke-width="1.5"/>
        <rect x="160" y="160" width="100" height="240" fill="%23180d33" stroke="%23ff007f" stroke-width="1.5"/>
        <rect x="280" y="230" width="90" height="170" fill="%230b0b1c" stroke="%237928ca" stroke-width="1.5"/>
        <rect x="440" y="190" width="110" height="210" fill="%23180d33" stroke="%2300f2fe" stroke-width="1.5"/>
        <rect x="580" y="140" width="95" height="260" fill="%23110e26" stroke="%23ff007f" stroke-width="1.5"/>
        <rect x="700" y="220" width="70" height="180" fill="%230b0b1c" stroke="%2300f2fe" stroke-width="1.5"/>
        <!-- Cyber Ground Grid -->
        <rect y="390" width="800" height="110" fill="%23060312"/>
        <line x1="0" y1="390" x2="800" y2="390" stroke="%2300f2fe" stroke-width="2"/>
        <line x1="0" y1="415" x2="800" y2="415" stroke="%23ff007f" stroke-width="1.5" opacity="0.8"/>
        <line x1="0" y1="445" x2="800" y2="445" stroke="%2300f2fe" stroke-width="1.5" opacity="0.6"/>
        <line x1="0" y1="480" x2="800" y2="480" stroke="%23ff007f" stroke-width="1.5" opacity="0.4"/>
      </svg>`;

      // 3. Emerald Botanical (Lush jungle greens, mint, golden ochre, earthy amber)
      const SVG_SAMPLE_EMERALD = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23062c1d"/>
            <stop offset="50%" stop-color="%230a442c"/>
            <stop offset="100%" stop-color="%23021a10"/>
          </linearGradient>
          <linearGradient id="leafGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%2334d399"/>
            <stop offset="100%" stop-color="%23059669"/>
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%2310b981"/>
            <stop offset="100%" stop-color="%23047857"/>
          </linearGradient>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23fcd34d"/>
            <stop offset="100%" stop-color="%23d97706"/>
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(%23bgGrad)"/>
        <!-- Golden Decorative Ring -->
        <circle cx="400" cy="250" r="160" fill="none" stroke="url(%23goldGrad)" stroke-width="3" opacity="0.75"/>
        <circle cx="400" cy="250" r="145" fill="none" stroke="%23fcd34d" stroke-width="1" stroke-dasharray="4,6" opacity="0.5"/>
        <!-- Large Monstera Leaves -->
        <path d="M 220 450 C 220 300 320 180 440 180 C 440 280 360 420 220 450 Z" fill="url(%23leafGrad1)" opacity="0.9"/>
        <path d="M 580 450 C 580 300 480 180 360 180 C 360 280 440 420 580 450 Z" fill="url(%23leafGrad2)" opacity="0.95"/>
        <!-- Central Golden Blossom Node -->
        <circle cx="400" cy="250" r="28" fill="url(%23goldGrad)"/>
        <circle cx="400" cy="250" r="14" fill="%23fff" opacity="0.8"/>
        <!-- Little foliage accents -->
        <ellipse cx="260" cy="220" rx="35" ry="12" fill="%236ee7b7" transform="rotate(-30 260 220)"/>
        <ellipse cx="540" cy="220" rx="35" ry="12" fill="%236ee7b7" transform="rotate(30 540 220)"/>
      </svg>`;

      // --- State ---
      let activeImage = null;
      let activeFileName = "sunset-horizon.png";
      let activeFileSize = "SVG Vector Sample";
      let paletteSize = 6;
      let colorFormat = "hex"; // 'hex' | 'rgb' | 'hsl'
      let sortMode = "dominant"; // 'dominant' | 'vibrant' | 'luminance'
      let currentPalette = [];
      let sampledCustomColor = null;
      let toastTimer = null;

      // --- DOM Elements ---
      const htmlRoot = document.getElementById('htmlRoot');
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');
      const fileBanner = document.getElementById('fileBanner');
      const fileTypeBadge = document.getElementById('fileTypeBadge');
      const fileName = document.getElementById('fileName');
      const fileDimensions = document.getElementById('fileDimensions');
      const btnClearFile = document.getElementById('btnClearFile');

      const samplePills = document.querySelectorAll('.sample-pill');
      const canvasContainer = document.getElementById('canvasContainer');
      const previewCanvas = document.getElementById('previewCanvas');
      const loupe = document.getElementById('loupe');
      const loupeCanvas = document.getElementById('loupeCanvas');
      const liveDot = document.getElementById('liveDot');
      const liveHexCode = document.getElementById('liveHexCode');
      const btnEyedropper = document.getElementById('btnEyedropper');

      const sampledCard = document.getElementById('sampledCard');
      const sampledSwatch = document.getElementById('sampledSwatch');
      const sampledCode = document.getElementById('sampledCode');
      const btnCopySampled = document.getElementById('btnCopySampled');
      const btnAddSampledToPalette = document.getElementById('btnAddSampledToPalette');

      const colorsCountBadge = document.getElementById('colorsCountBadge');
      const sizePills = document.querySelectorAll('#sizePillGroup .pill-btn');
      const formatPills = document.querySelectorAll('#formatPillGroup .pill-btn');
      const sortPills = document.querySelectorAll('#sortPillGroup .pill-btn');
      const activeSizeDisplay = document.getElementById('activeSizeDisplay');
      const activeFormatDisplay = document.getElementById('activeFormatDisplay');
      const activeSortDisplay = document.getElementById('activeSortDisplay');
      const swatchesGrid = document.getElementById('swatchesGrid');

      const btnCopyCss = document.getElementById('btnCopyCss');
      const btnExportPng = document.getElementById('btnExportPng');
      const btnExportJson = document.getElementById('btnExportJson');
      const btnCopyHexArray = document.getElementById('btnCopyHexArray');

      const langDropdown = document.getElementById('langDropdown');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // --- Notifications ---
      function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }

      function getActiveDict() {
        const lang = localStorage.getItem('vantorkit_lang') || 'en';
        return I18N[lang] || I18N.en;
      }

      // --- Color Mathematics & Conversion Helpers ---
      function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
          const hex = Math.min(255, Math.max(0, Math.round(x))).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('').toUpperCase();
      }

      function hexToRgb(hex) {
        let clean = hex.replace('#', '');
        if (clean.length === 3) {
          clean = clean.split('').map(c => c + c).join('');
        }
        const num = parseInt(clean, 16);
        return {
          r: (num >> 16) & 255,
          g: (num >> 8) & 255,
          b: num & 255
        };
      }

      function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }

        return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          l: Math.round(l * 100)
        };
      }

      function formatColor(r, g, b, format = colorFormat) {
        if (format === 'rgb') {
          return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }
        if (format === 'hsl') {
          const { h, s, l } = rgbToHsl(r, g, b);
          return `hsl(${h}, ${s}%, ${l}%)`;
        }
        return rgbToHex(r, g, b);
      }

      // WCAG 2.1 Relative Luminance formula
      function getRelativeLuminance(r, g, b) {
        const a = [r, g, b].map(v => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
      }

      // WCAG Contrast Ratio
      function getContrastRatio(l1, l2) {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      }

      function getWCAGRating(contrast) {
        if (contrast >= 7.0) return { label: 'AAA', class: 'pass-aaa' };
        if (contrast >= 4.5) return { label: 'AA', class: 'pass-aa' };
        return { label: `${contrast.toFixed(1)}:1`, class: 'fail' };
      }

      function getSaturation(r, g, b) {
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        return max === 0 ? 0 : (max - min) / max;
      }

      // --- K-Means++ Clustering Algorithm for HTML5 Canvas ---
      function extractPalette(canvas, k = 6, mode = 'dominant') {
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return [];

        // Downsample to max dimension 160px for sub-30ms execution speed
        const maxDim = 160;
        let w = canvas.width;
        let h = canvas.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        w = Math.max(10, w);
        h = Math.max(10, h);

        const sampleCanvas = document.createElement('canvas');
        sampleCanvas.width = w;
        sampleCanvas.height = h;
        const sCtx = sampleCanvas.getContext('2d');
        sCtx.drawImage(canvas, 0, 0, w, h);

        const imgData = sCtx.getImageData(0, 0, w, h).data;
        const pixels = [];

        for (let i = 0; i < imgData.length; i += 4) {
          const a = imgData[i + 3];
          if (a < 128) continue; // Skip transparency
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          pixels.push([r, g, b]);
        }

        if (pixels.length === 0) return [];

        // K-Means++ Centroid Initialization
        const centroids = [];
        centroids.push(pixels[Math.floor(Math.random() * pixels.length)].slice());

        while (centroids.length < k) {
          const distSq = new Float64Array(pixels.length);
          let sumDistSq = 0;

          for (let i = 0; i < pixels.length; i++) {
            let minDist = Infinity;
            const p = pixels[i];
            for (let c = 0; c < centroids.length; c++) {
              const cent = centroids[c];
              const d = (p[0] - cent[0]) ** 2 + (p[1] - cent[1]) ** 2 + (p[2] - cent[2]) ** 2;
              if (d < minDist) minDist = d;
            }
            distSq[i] = minDist;
            sumDistSq += minDist;
          }

          if (sumDistSq === 0) {
            centroids.push(pixels[Math.floor(Math.random() * pixels.length)].slice());
            continue;
          }

          let rand = Math.random() * sumDistSq;
          let chosen = 0;
          for (let i = 0; i < pixels.length; i++) {
            rand -= distSq[i];
            if (rand <= 0) {
              chosen = i;
              break;
            }
          }
          centroids.push(pixels[chosen].slice());
        }

        // K-Means Iterations
        const maxIter = 10;
        const assignments = new Int32Array(pixels.length);
        const clusterCounts = new Int32Array(k);

        for (let iter = 0; iter < maxIter; iter++) {
          clusterCounts.fill(0);
          const sumR = new Float64Array(k);
          const sumG = new Float64Array(k);
          const sumB = new Float64Array(k);
          let changed = false;

          for (let i = 0; i < pixels.length; i++) {
            const p = pixels[i];
            let bestDist = Infinity;
            let bestC = 0;
            for (let c = 0; c < k; c++) {
              const cent = centroids[c];
              const d = (p[0] - cent[0]) ** 2 + (p[1] - cent[1]) ** 2 + (p[2] - cent[2]) ** 2;
              if (d < bestDist) {
                bestDist = d;
                bestC = c;
              }
            }
            if (assignments[i] !== bestC) {
              assignments[i] = bestC;
              changed = true;
            }
            clusterCounts[bestC]++;
            sumR[bestC] += p[0];
            sumG[bestC] += p[1];
            sumB[bestC] += p[2];
          }

          for (let c = 0; c < k; c++) {
            if (clusterCounts[c] > 0) {
              centroids[c][0] = Math.round(sumR[c] / clusterCounts[c]);
              centroids[c][1] = Math.round(sumG[c] / clusterCounts[c]);
              centroids[c][2] = Math.round(sumB[c] / clusterCounts[c]);
            }
          }

          if (!changed && iter > 2) break;
        }

        // Build list of colors
        let colorList = centroids.map((c, idx) => ({
          r: Math.min(255, Math.max(0, c[0])),
          g: Math.min(255, Math.max(0, c[1])),
          b: Math.min(255, Math.max(0, c[2])),
          count: clusterCounts[idx] || 0
        }));

        // Deduplicate very close colors
        const unique = [];
        for (const item of colorList) {
          const isDup = unique.some(u => {
            const d = Math.sqrt((u.r - item.r) ** 2 + (u.g - item.g) ** 2 + (u.b - item.b) ** 2);
            return d < 18;
          });
          if (!isDup) unique.push(item);
        }

        // Fill back up to k if deduplication reduced size
        if (unique.length < k && colorList.length >= k) {
          for (const item of colorList) {
            if (!unique.includes(item)) {
              unique.push(item);
              if (unique.length === k) break;
            }
          }
        }

        // Sort based on selected sortMode
        if (mode === 'luminance') {
          unique.sort((a, b) => getRelativeLuminance(b.r, b.g, b.b) - getRelativeLuminance(a.r, a.g, a.b));
        } else if (mode === 'vibrant') {
          unique.sort((a, b) => getSaturation(b.r, b.g, b.b) - getSaturation(a.r, a.g, a.b));
        } else {
          // Dominant: most frequent pixels
          unique.sort((a, b) => b.count - a.count);
        }

        return unique.slice(0, k);
      }

      // --- Render Canvas & Image Preview ---
      function displayImage(img) {
        activeImage = img;
        const ctx = previewCanvas.getContext('2d');

        // Limit display dimension
        let w = img.naturalWidth || img.width || 800;
        let h = img.naturalHeight || img.height || 500;

        previewCanvas.width = w;
        previewCanvas.height = h;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);

        // Update banner
        fileBanner.style.display = 'flex';
        fileName.textContent = activeFileName;
        fileDimensions.textContent = `${w} × ${h} px`;
        const ext = activeFileName.split('.').pop().toUpperCase();
        fileTypeBadge.textContent = ext.length <= 4 ? ext : 'IMG';

        // Run Palette Extraction
        recalculatePalette();
      }

      function recalculatePalette() {
        if (!previewCanvas || previewCanvas.width === 0) return;
        currentPalette = extractPalette(previewCanvas, paletteSize, sortMode);
        renderSwatches();
      }

      // --- Render Palette Swatches ---
      function renderSwatches() {
        swatchesGrid.innerHTML = '';
        colorsCountBadge.textContent = `${currentPalette.length} Colors`;

        currentPalette.forEach((col, index) => {
          const hex = rgbToHex(col.r, col.g, col.b);
          const lum = getRelativeLuminance(col.r, col.g, col.b);
          const contrastWhite = getContrastRatio(lum, 1.0);
          const contrastBlack = getContrastRatio(lum, 0.0);
          
          // Optimal text color on top of this color
          const textColor = lum > 0.45 ? '#000000' : '#ffffff';
          const bestContrast = Math.max(contrastWhite, contrastBlack);
          const wcag = getWCAGRating(bestContrast);
          const displayCode = formatColor(col.r, col.g, col.b, colorFormat);

          const card = document.createElement('div');
          card.className = 'swatch-card';
          card.title = `Click to copy ${displayCode}`;
          card.setAttribute('role', 'button');
          card.setAttribute('tabindex', '0');

          card.innerHTML = `
            <div class="swatch-color-box" style="background-color: ${hex};">
              <span class="swatch-copy-overlay" style="color: ${textColor};">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span>Copy</span>
              </span>
            </div>
            <div class="swatch-meta-box">
              <div class="swatch-code-row">
                <span class="swatch-code">${displayCode}</span>
                <button type="button" class="swatch-copy-btn" aria-label="Copy color code">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
              <div class="swatch-indicators">
                <span class="lum-badge">Lum ${Math.round(lum * 100)}%</span>
                <span class="contrast-pill ${wcag.class}" title="Contrast ${bestContrast.toFixed(1)}:1 against ${lum > 0.45 ? 'Black' : 'White'}">
                  ${wcag.label}
                </span>
              </div>
            </div>
          `;

          // Click on card or copy button copies code
          const handleCopy = (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(displayCode).then(() => {
              showToast(`${getActiveDict().copiedToast} (${displayCode})`);
            }).catch(() => {
              showToast(displayCode);
            });
          };

          card.addEventListener('click', handleCopy);
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopy(e);
            }
          });

          swatchesGrid.appendChild(card);
        });
      }

      // --- Interactive Loupe & Pixel Sampling on Preview Canvas ---
      function handleCanvasMouseMove(e) {
        const rect = previewCanvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const scaleX = previewCanvas.width / rect.width;
        const scaleY = previewCanvas.height / rect.height;

        const x = Math.floor((e.clientX - rect.left) * scaleX);
        const y = Math.floor((e.clientY - rect.top) * scaleY);

        if (x < 0 || x >= previewCanvas.width || y < 0 || y >= previewCanvas.height) {
          loupe.style.display = 'none';
          return;
        }

        const ctx = previewCanvas.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);

        // Update live status bar
        liveDot.style.backgroundColor = hex;
        liveHexCode.textContent = hex;

        // Position & render loupe
        loupe.style.display = 'block';
        loupe.style.left = `${e.clientX - canvasContainer.getBoundingClientRect().left}px`;
        loupe.style.top = `${e.clientY - canvasContainer.getBoundingClientRect().top - 60}px`;

        // Draw magnified 9x9 pixel grid onto loupe
        const lCtx = loupeCanvas.getContext('2d');
        lCtx.imageSmoothingEnabled = false;
        lCtx.clearRect(0, 0, 90, 90);
        lCtx.drawImage(previewCanvas, x - 5, y - 5, 11, 11, 0, 0, 90, 90);
      }

      canvasContainer.addEventListener('mousemove', handleCanvasMouseMove);
      canvasContainer.addEventListener('mouseleave', () => {
        loupe.style.display = 'none';
      });

      // Click to sample pixel
      canvasContainer.addEventListener('click', (e) => {
        const rect = previewCanvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const scaleX = previewCanvas.width / rect.width;
        const scaleY = previewCanvas.height / rect.height;

        const x = Math.floor((e.clientX - rect.left) * scaleX);
        const y = Math.floor((e.clientY - rect.top) * scaleY);

        if (x >= 0 && x < previewCanvas.width && y >= 0 && y < previewCanvas.height) {
          const ctx = previewCanvas.getContext('2d');
          const pixel = ctx.getImageData(x, y, 1, 1).data;
          setSampledColor(pixel[0], pixel[1], pixel[2]);
        }
      });

      function setSampledColor(r, g, b) {
        sampledCustomColor = { r, g, b };
        const hex = rgbToHex(r, g, b);
        const code = formatColor(r, g, b, colorFormat);

        sampledSwatch.style.backgroundColor = hex;
        sampledCode.textContent = code;
        sampledCard.style.display = 'flex';

        showToast(`${getActiveDict().pixelSampledToast}${hex}`);
      }

      // Copy sampled color
      btnCopySampled.addEventListener('click', () => {
        if (!sampledCustomColor) return;
        const code = formatColor(sampledCustomColor.r, sampledCustomColor.g, sampledCustomColor.b, colorFormat);
        navigator.clipboard.writeText(code).then(() => {
          showToast(getActiveDict().copiedToast);
        });
      });

      // Add sampled color to active palette
      btnAddSampledToPalette.addEventListener('click', () => {
        if (!sampledCustomColor) return;
        // Prepend to current palette
        currentPalette.unshift({ ...sampledCustomColor, count: 9999 });
        if (currentPalette.length > paletteSize) {
          currentPalette.pop();
        }
        renderSwatches();
        showToast(getActiveDict().pixelAddedToast);
      });

      // Browser Native Eyedropper API (if available)
      btnEyedropper.addEventListener('click', async () => {
        if (window.EyeDropper) {
          try {
            const dropper = new window.EyeDropper();
            const result = await dropper.open();
            if (result && result.sRGBHex) {
              const rgb = hexToRgb(result.sRGBHex);
              setSampledColor(rgb.r, rgb.g, rgb.b);
            }
          } catch (err) {
            // User cancelled or unsupported
          }
        } else {
          showToast(getActiveDict().eyedropperHint);
        }
      });

      // --- Extraction Controls Event Handlers ---
      // 1. Palette Size (4, 6, 8, 10)
      sizePills.forEach(pill => {
        pill.addEventListener('click', () => {
          sizePills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          paletteSize = parseInt(pill.getAttribute('data-size'), 10);
          activeSizeDisplay.textContent = `${paletteSize} Dominant Colors`;
          recalculatePalette();
        });
      });

      // 2. Color Format (hex, rgb, hsl)
      formatPills.forEach(pill => {
        pill.addEventListener('click', () => {
          formatPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          colorFormat = pill.getAttribute('data-format');
          activeFormatDisplay.textContent = colorFormat.toUpperCase();
          if (sampledCustomColor) {
            sampledCode.textContent = formatColor(sampledCustomColor.r, sampledCustomColor.g, sampledCustomColor.b, colorFormat);
          }
          renderSwatches();
        });
      });

      // 3. Sorting Mode (dominant, vibrant, luminance)
      sortPills.forEach(pill => {
        pill.addEventListener('click', () => {
          sortPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          sortMode = pill.getAttribute('data-sort');
          activeSortDisplay.textContent = pill.textContent;
          recalculatePalette();
        });
      });

      // --- Export Hub Logic ---
      // 1. Copy All as CSS Variables
      btnCopyCss.addEventListener('click', () => {
        if (currentPalette.length === 0) return;
        const cssLines = [
          '/* VantorKit Color Palette — Extracted via Canvas Quantization */',
          ':root {'
        ];
        currentPalette.forEach((col, idx) => {
          const hex = rgbToHex(col.r, col.g, col.b);
          cssLines.push(`  --color-${idx + 1}: ${hex};`);
        });
        cssLines.push('}');
        const resultCss = cssLines.join('\n');

        navigator.clipboard.writeText(resultCss).then(() => {
          showToast(getActiveDict().cssCopiedToast);
        });
      });

      // 2. Export Palette as PNG Swatch Card
      btnExportPng.addEventListener('click', () => {
        if (currentPalette.length === 0) return;

        const count = currentPalette.length;
        const cardW = 1200;
        const cardH = 680;
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = cardW;
        exportCanvas.height = cardH;
        const ctx = exportCanvas.getContext('2d');

        // Draw Dark Background
        ctx.fillStyle = '#07090e';
        ctx.fillRect(0, 0, cardW, cardH);

        // Header Background Glow
        const radGrad = ctx.createRadialGradient(600, 0, 10, 600, 0, 600);
        radGrad.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
        radGrad.addColorStop(1, 'rgba(7, 9, 14, 0)');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, cardW, cardH);

        // Top Border Accent Line
        const topGrad = ctx.createLinearGradient(0, 0, cardW, 0);
        topGrad.addColorStop(0, '#38bdf8');
        topGrad.addColorStop(0.5, '#818cf8');
        topGrad.addColorStop(1, '#c084fc');
        ctx.fillStyle = topGrad;
        ctx.fillRect(0, 0, cardW, 4);

        // Header Title & Branding
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('VantorKit Color Palette', 60, 75);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
        const dateStr = new Date().toISOString().split('T')[0];
        ctx.fillText(`Extracted Palette • ${count} Colors • Dominant Quantization • ${dateStr}`, 60, 110);

        // Calculate Swatch Dimensions
        const startX = 60;
        const startY = 160;
        const totalW = cardW - 120;
        const gap = 16;
        const colW = (totalW - (count - 1) * gap) / count;
        const colH = 400;

        currentPalette.forEach((col, idx) => {
          const hex = rgbToHex(col.r, col.g, col.b);
          const lum = getRelativeLuminance(col.r, col.g, col.b);
          const x = startX + idx * (colW + gap);

          // Card Background
          ctx.fillStyle = 'rgba(15, 18, 28, 0.8)';
          roundRect(ctx, x, startY, colW, colH, 16, true, false);

          // Card Border
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;
          roundRect(ctx, x, startY, colW, colH, 16, false, true);

          // Top Color Swatch Block
          ctx.fillStyle = hex;
          roundTopRect(ctx, x, startY, colW, colH - 120, 16);

          // Bottom Swatch Metadata
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 18px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(hex, x + colW / 2, startY + colH - 75);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '500 13px "JetBrains Mono", monospace';
          ctx.fillText(`rgb(${col.r}, ${col.g}, ${col.b})`, x + colW / 2, startY + colH - 48);

          ctx.fillStyle = '#60a5fa';
          ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
          ctx.fillText(`Lum ${Math.round(lum * 100)}%`, x + colW / 2, startY + colH - 24);
        });

        // Reset alignment
        ctx.textAlign = 'left';

        // Footer Watermark
        ctx.fillStyle = '#64748b';
        ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('Generated 100% Client-Side with VantorKit — vantorkit.com', 60, cardH - 35);

        // Trigger Download
        const dataUrl = exportCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `vantorkit-palette-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showToast(getActiveDict().pngDownloadedToast);
      });

      // Canvas Rounded Rect Helpers
      function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
      }

      function roundTopRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
      }

      // 3. Export as JSON
      btnExportJson.addEventListener('click', () => {
        if (currentPalette.length === 0) return;
        const data = {
          generator: "VantorKit Color Palette Extractor",
          url: "https://vantorkit.com/tools/color-palette-extractor.html",
          timestamp: new Date().toISOString(),
          paletteSize: currentPalette.length,
          sortMode: sortMode,
          colors: currentPalette.map(col => {
            const hex = rgbToHex(col.r, col.g, col.b);
            const { h, s, l } = rgbToHsl(col.r, col.g, col.b);
            const lum = getRelativeLuminance(col.r, col.g, col.b);
            return {
              hex: hex,
              rgb: `rgb(${col.r}, ${col.g}, ${col.b})`,
              hsl: `hsl(${h}, ${s}%, ${l}%)`,
              luminance: parseFloat(lum.toFixed(4)),
              contrastWhite: parseFloat(getContrastRatio(lum, 1.0).toFixed(2)),
              contrastBlack: parseFloat(getContrastRatio(lum, 0.0).toFixed(2)),
              recommendedTextColor: lum > 0.45 ? "#000000" : "#ffffff"
            };
          })
        };

        const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const a = document.createElement('a');
        a.href = jsonStr;
        a.download = `vantorkit-palette-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showToast(getActiveDict().jsonDownloadedToast);
      });

      // 4. Copy Array to Clipboard
      btnCopyHexArray.addEventListener('click', () => {
        if (currentPalette.length === 0) return;
        const arrayStr = JSON.stringify(currentPalette.map(c => rgbToHex(c.r, c.g, c.b)));
        navigator.clipboard.writeText(arrayStr).then(() => {
          showToast(getActiveDict().arrayCopiedToast);
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
        if (!file.type.startsWith('image/')) {
          showToast('Please upload a valid image (PNG, JPG, WEBP, or SVG).');
          return;
        }

        activeFileName = file.name;
        activeFileSize = (file.size / 1024).toFixed(1) + ' KB';

        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => displayImage(img);
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }

      btnClearFile.addEventListener('click', () => {
        fileInput.value = '';
        loadSample('sunset');
      });

      // --- Sample Images Loader ---
      function loadSample(key) {
        let src = SVG_SAMPLE_SUNSET;
        activeFileName = "sunset-horizon.svg";

        if (key === 'cyberpunk') {
          src = SVG_SAMPLE_CYBERPUNK;
          activeFileName = "cyberpunk-neon.svg";
        } else if (key === 'emerald') {
          src = SVG_SAMPLE_EMERALD;
          activeFileName = "emerald-botanical.svg";
        }

        const img = new Image();
        img.onload = () => displayImage(img);
        img.src = src;
      }

      samplePills.forEach(pill => {
        pill.addEventListener('click', () => {
          const sampleKey = pill.getAttribute('data-sample');
          loadSample(sampleKey);
          showToast(getActiveDict().sampleLoadedToast);
        });
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

        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        if (currentLangLabel) {
          currentLangLabel.textContent = LANG_LABELS[lang] || 'English';
        }

        langOptions.forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Translate all data-i18n elements
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
      }

      // --- Initialization ---
      const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(savedLang);
      loadSample('sunset');

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
        "title": "Color Palette Extractor – Sample Image Hues & Contrast",
        "desc": "Extract dominant hex codes, accents, and WCAG contrast ratios from any image. Palette analysis occurs on an offline HTML5 canvas without uploads."
    },
    "ar": {
        "title": "استخراج لوحة الألوان – استخلاص درجات وتباين الصور",
        "desc": "استخرج أكواد ألوان Hex المتناسقة ودرجات التباين المعتمدة من أي صورة. تتم قراءة البكسلات محلياً عبر Canvas دون نقل الصورة لأي خادم."
    },
    "fr": {
        "title": "Extracteur de Palette – Analyse des Couleurs & Contrastes",
        "desc": "Extrayez les codes hexadécimaux et ratios de contraste WCAG depuis vos images. Traitement direct sur Canvas HTML5 sans envoi vers un serveur."
    },
    "it": {
        "title": "Estrattore Palette Colori – Campiona Tonalità e Contrasti",
        "desc": "Estrai codici esadecimali dominanti e conformità WCAG da qualsiasi immagine. L'analisi dei colori si svolge localmente senza caricare file."
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