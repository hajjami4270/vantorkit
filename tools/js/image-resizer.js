(function () {
      'use strict';

      // --- Multi-Language (i18n) Translations ---
      const I18N = {
        en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
          backLink: "← Back to Tools",
          brandBadge: "Images & Vector • 100% Client-Side • In-Browser Resampling",
          pageTitle: "Image Resizer <span>&amp; Crop</span>",
          pageSubtitle: "Adjust dimensions, lock aspect ratios, and crop photos with precision overlays. Convert to WEBP, JPG, or PNG and compress weights with zero server uploads.",
          sourceTitle: "Visual Workspace",
          badgeLocal: "100% Private",
          dropTitle: "Drop an Image Here or Click to Browse",
          dropDesc: "Supports PNG, JPG, JPEG, and WEBP (processed 100% in your browser)",
          btnBrowse: "Choose Image File",
          lblSamples: "Load Sample:",
          sampleLandscape: "Landscape 16:9",
          samplePortrait: "Portrait 4:5",
          sampleSquare: "Product 1:1",
          btnClearFile: "Reset",
          cropAreaLabel: "Crop Box:",
          btnResetCrop: "Full Image (Reset Crop)",
          controlsTitle: "Resize & Output Settings",
          lblAspectPresets: "Crop Aspect Ratio",
          aspectFree: "Custom",
          aspectSquare: "Square",
          aspectVideo: "Landscape",
          aspectStory: "Story/Reel",
          aspectFeed: "Portrait Feed",
          lblDimensions: "Target Dimensions",
          aspectLockNotice: "Aspect Ratio Locked",
          lblWidth: "Width",
          lblHeight: "Height",
          lblFormat: "Export Format",
          formatHint: "Modern & Lightweight",
          lblQuality: "Compression Quality",
          lblEstSize: "Estimated Output Size",
          btnDownload: "Download Processed Image",
          btnCopyClipboard: "Copy to Clipboard",
          btnReset: "Reset All",
          guideHeading: "Precision In-Browser Resampling & Compression",
          guideSubheading: "Learn how HTML5 Canvas 2D engines perform high-fidelity downsampling, aspect ratio preservation, and next-generation file optimization without cloud intermediaries.",
          card1Title: "Bicubic Resampling & Density",
          card1Desc: "When scaling down large camera captures or 4K wallpapers, standard nearest-neighbor algorithms produce jagged edges and moiré artifacts. VantorKit activates browser-native bicubic interpolation for pristine, smooth gradients at any scale.",
          card2Title: "Next-Gen WEBP Compression",
          card2Desc: "WEBP utilizes predictive macroblock coding to achieve 30% to 50% smaller file sizes compared to legacy JPEG images at equivalent visual quality. Exporting directly to WEBP boosts Google PageSpeed and Core Web Vitals (LCP).",
          card3Title: "100% In-Memory Sandbox Privacy",
          card3Desc: "Your personal photographs, proprietary corporate assets, and unreleased designs are never transmitted across any network or uploaded to cloud storage buckets. All pixels are processed in your device's private RAM buffer.",
          faq1Q: "Why should I resize and crop images locally in my browser?",
          faq1A: "Local browser processing eliminates the wait times and bandwidth costs of uploading multi-megabyte files to remote servers. It also provides guaranteed data sovereignty, ensuring your private photos are never logged or stored by third parties.",
          faq2Q: "How does aspect ratio locking work?",
          faq2A: "When aspect ratio lock is enabled, typing a new width automatically recalculates the exact height to prevent stretching or squishing. You can toggle the lock off at any time if you specifically require non-proportional stretching.",
          faq3Q: "How do social media aspect ratio presets work?",
          faq3A: "Selecting 1:1, 16:9, 9:16, or 4:5 instantly snaps the visual crop overlay to industry-standard dimensions for Instagram, YouTube, TikTok, and web banners. You can slide the crop box to center the best part of your subject.",
          faq4Q: "Which format is best for transparent images?",
          faq4A: "If your source image has transparent backgrounds, export to PNG (lossless) or WEBP (lossy or lossless with alpha channel). JPG does not support alpha transparency and will fill transparent areas with solid white or black.",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser.",
          // Toast Feedback Strings
          downloadToast: "Processed image downloaded successfully!",
          copySuccessToast: "Image copied to clipboard!",
          copyErrorToast: "Could not copy image to clipboard in this browser.",
          resetToast: "All settings reset to defaults.",
          sampleLoadedToast: "Sample image loaded successfully!"
        },
        ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
          backLink: "← العودة إلى الأدوات",
          brandBadge: "الصور والرسومات • محلي 100% في المتصفح • إعادة تشكيل دقيقة",
          pageTitle: "تعديل أبعاد <span>وقص الصور</span>",
          pageSubtitle: "عدّل أبعاد الصور بالبكسل مع قفل نسب التناسب والقص التفاعلي بدقة عالية. حوّل إلى WEBP و JPG و PNG مع تحكم بضغط الحجم وبدون أي رفع للسيرفر.",
          sourceTitle: "مساحة العمل البصرية",
          badgeLocal: "خصوصية 100%",
          dropTitle: "اسحب صورة هنا أو انقر للاختيار",
          dropDesc: "يدعم PNG و JPG و JPEG و WEBP (معالجة محلية بالكامل في متصفحك)",
          btnBrowse: "اختر ملف صورة",
          lblSamples: "تحميل عينة:",
          sampleLandscape: "أفقي 16:9",
          samplePortrait: "عمودي 4:5",
          sampleSquare: "مربع 1:1",
          btnClearFile: "إعادة تعيين",
          cropAreaLabel: "مربع القص:",
          btnResetCrop: "كامل الصورة (إلغاء القص)",
          controlsTitle: "إعدادات الأبعاد والتصدير",
          lblAspectPresets: "نسبة أبعاد القص",
          aspectFree: "مخصص",
          aspectSquare: "مربع",
          aspectVideo: "أفقي فيديو",
          aspectStory: "ستوري/ريلز",
          aspectFeed: "منشور عمودي",
          lblDimensions: "الأبعاد المستهدفة",
          aspectLockNotice: "نسبة التناسب مقفلة",
          lblWidth: "العرض",
          lblHeight: "الارتفاع",
          lblFormat: "صيغة التصدير",
          formatHint: "حديثة وخفيفة الحجم",
          lblQuality: "جودة الضغط",
          lblEstSize: "الحجم التقديري الناتج",
          btnDownload: "تنزيل الصورة المعالجة",
          btnCopyClipboard: "نسخ إلى الحافظة",
          btnReset: "إعادة ضبط الكل",
          guideHeading: "إعادة تشكيل وضغط فائق الدقة داخل المتصفح",
          guideSubheading: "تعرف على كيفية قيام محركات Canvas 2D بإعادة تشكيل البكسلات والحفاظ على التناسب وخفض الحجم دون الحاجة لأي خوادم سحابية.",
          card1Title: "إعادة تشكيل تكعيبية ثنائية متقدمة",
          card1Desc: "عند تصغير الصور الكبيرة بدقة 4K، تؤدي الطرق التقليدية لتشوهات وتعرجات بصرية. يطبق VantorKit خوارزميات ترشيح متقدمة لضمان نعومة الحواف والتدرجات.",
          card2Title: "ضغط حديث بصيغة WEBP",
          card2Desc: "توفر صيغة WEBP الحديثة ضغطاً متقدماً يخفض حجم الصور بنسبة 30% إلى 50% مقارنة بصيغة JPEG مع الحفاظ على نفس الوضوح، مما يسرع تحميل المواقع.",
          card3Title: "خصوصية 100% داخل الذاكرة المحلية",
          card3Desc: "تتم معالجة صورك الشخصية وملفات عملائك الحساسة فقط داخل ذاكرة المتصفح المعزولة عبر Canvas API دون إرسال أي بايت عبر الإنترنت.",
          faq1Q: "لماذا أعدل أبعاد الصور وأقصها محلياً في المتصفح؟",
          faq1A: "توفر المعالجة المحلية سرعة فائقة دون انتظار الرفع والتنزيل، وتعمل بدون إنترنت، وتضمن بقاء صورك وملفاتك الحساسة سرية تماماً على جهازك الشخصي.",
          faq2Q: "كيف يعمل قفل نسبة التناسب؟",
          faq2A: "عند تفعيل قفل التناسب، يتم حساب الارتفاع آلياً عند إدخال العرض الجديد والعكس صحيح لمنع تمدد الصورة أو تشوه أبعادها.",
          faq3Q: "كيف تعمل قوالب القص لشبكات التواصل الاجتماعي؟",
          faq3A: "يضبط اختيار 1:1 أو 16:9 أو 9:16 أو 4:5 إطار القص فوراً وفقاً للمقاييس المعتمدة في إنستغرام ويوتيوب وتيك توك مع إمكانية تحريك الإطار بحرية.",
          faq4Q: "ما هي الصيغة الأنسب للصور الشفافة؟",
          faq4A: "إذا كانت الصورة تحتوي على خلفية شفافة، اختر تصديرها بصيغة PNG أو WEBP، بينما تحول صيغة JPG المساحات الشفافة إلى خلفية بيضاء أو سوداء.",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك.",
          downloadToast: "تم تنزيل الصورة المعالجة بنجاح!",
          copySuccessToast: "تم نسخ الصورة إلى الحافظة!",
          copyErrorToast: "تعذر نسخ الصورة إلى الحافظة في هذا المتصفح.",
          resetToast: "تمت إعادة ضبط جميع الإعدادات للوضع الافتراضي.",
          sampleLoadedToast: "تم تحميل الصورة النموذجية بنجاح!"
        },
        fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
          backLink: "← Retour aux Outils",
          brandBadge: "Images & Vecteurs • 100% Côté Client • Rééchantillonnage Local",
          pageTitle: "Redimensionner <span>&amp; Rogner l'Image</span>",
          pageSubtitle: "Ajustez les dimensions, verrouillez les proportions et rognez vos photos avec précision. Convertissez en WEBP, JPG ou PNG et optimisez le poids sans aucun serveur.",
          sourceTitle: "Espace de Travail Visuel",
          badgeLocal: "100% Privé",
          dropTitle: "Déposez une image ici ou cliquez pour parcourir",
          dropDesc: "Prend en charge PNG, JPG, JPEG et WEBP (traité localement)",
          btnBrowse: "Choisir un Fichier Image",
          lblSamples: "Charger un exemple :",
          sampleLandscape: "Paysage 16:9",
          samplePortrait: "Portrait 4:5",
          sampleSquare: "Produit 1:1",
          btnClearFile: "Réinitialiser",
          cropAreaLabel: "Zone de Rognage :",
          btnResetCrop: "Image Entière (Réinitialiser Rognage)",
          controlsTitle: "Paramètres de Taille &amp; Sortie",
          lblAspectPresets: "Ratio de Rognage",
          aspectFree: "Personnalisé",
          aspectSquare: "Carré",
          aspectVideo: "Paysage",
          aspectStory: "Story/Reel",
          aspectFeed: "Portrait Feed",
          lblDimensions: "Dimensions Cibles",
          aspectLockNotice: "Ratio d'Aspect Verrouillé",
          lblWidth: "Largeur",
          lblHeight: "Hauteur",
          lblFormat: "Format d'Exportation",
          formatHint: "Moderne &amp; Léger",
          lblQuality: "Qualité de Compression",
          lblEstSize: "Taille de Sortie Estimée",
          btnDownload: "Télécharger l'Image Traitée",
          btnCopyClipboard: "Copier dans le Presse-papiers",
          btnReset: "Tout Réinitialiser",
          guideHeading: "Rééchantillonnage et Compression Précis en Navigateur",
          guideSubheading: "Découvrez comment le moteur Canvas 2D effectue un sous-échantillonnage de haute fidélité et une compression optimale sans intermédiaire cloud.",
          card1Title: "Rééchantillonnage Bicubique & Densité",
          card1Desc: "Lors de la réduction de photos 4K, les algorithmes basiques génèrent du crénelage. VantorKit applique une interpolation bicubique native pour des dégradés lisses et nets.",
          card2Title: "Compression Nouvelle Génération WEBP",
          card2Desc: "Le format WEBP permet de réduire la taille des fichiers de 30% à 50% par rapport au JPEG avec une qualité visuelle identique, accélérant considérablement le chargement des pages web.",
          card3Title: "Confidentialité 100% en Mémoire Sandboxée",
          card3Desc: "Vos photographies et visuels d'entreprise ne sont jamais transmis sur le réseau. Tous les traitements s'exécutent strictement dans la mémoire vive de votre navigateur.",
          faq1Q: "Pourquoi redimensionner et rogner les images localement ?",
          faq1A: "Le traitement local élimine les temps d'attente de transfert vers un serveur distant, fonctionne sans connexion et garantit une confidentialité totale.",
          faq2Q: "Comment fonctionne le verrouillage du ratio d'aspect ?",
          faq2A: "Lorsque le verrouillage est actif, modifier la largeur ajuste automatiquement la hauteur proportionnellement afin d'éviter toute déformation.",
          faq3Q: "Comment fonctionnent les préréglages pour réseaux sociaux ?",
          faq3A: "Les boutons 1:1, 16:9, 9:16 et 4:5 ajustent instantanément le cadre aux formats standards d'Instagram, YouTube, TikTok et des bannières web.",
          faq4Q: "Quel format choisir pour conserver la transparence ?",
          faq4A: "Si votre image comporte de la transparence, choisissez PNG (sans perte) ou WEBP. Le format JPG ne supporte pas l'alpha et remplira le fond en blanc.",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement dans votre navigateur.",
          downloadToast: "Image traitée téléchargée avec succès !",
          copySuccessToast: "Image copiée dans le presse-papiers !",
          copyErrorToast: "Impossible de copier l'image dans ce navigateur.",
          resetToast: "Paramètres réinitialisés aux valeurs par défaut.",
          sampleLoadedToast: "Image exemple chargée avec succès !"
        },
        it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
          backLink: "← Torna agli Strumenti",
          brandBadge: "Immagini & Vettori • 100% Lato Client • Ricampionamento nel Browser",
          pageTitle: "Ridimensiona <span>&amp; Ritaglia Immagine</span>",
          pageSubtitle: "Regola le dimensioni in pixel, blocca le proporzioni e ritaglia le foto con precisione. Converti in WEBP, JPG o PNG e comprimi il peso senza server.",
          sourceTitle: "Area di Lavoro Visiva",
          badgeLocal: "100% Privato",
          dropTitle: "Trascina un'immagine qui o clicca per sfogliare",
          dropDesc: "Supporta PNG, JPG, JPEG e WEBP (elaborazione 100% nel browser)",
          btnBrowse: "Scegli File Immagine",
          lblSamples: "Carica Esempio:",
          sampleLandscape: "Panoramica 16:9",
          samplePortrait: "Ritratto 4:5",
          sampleSquare: "Prodotto 1:1",
          btnClearFile: "Ripristina",
          cropAreaLabel: "Riquadro Ritaglio:",
          btnResetCrop: "Immagine Intera (Azzera Ritaglio)",
          controlsTitle: "Impostazioni Dimensioni &amp; Output",
          lblAspectPresets: "Proporzioni Ritaglio",
          aspectFree: "Personalizzato",
          aspectSquare: "Quadrato",
          aspectVideo: "Panoramico",
          aspectStory: "Story/Reel",
          aspectFeed: "Ritratto Feed",
          lblDimensions: "Dimensioni Destinazione",
          aspectLockNotice: "Proporzioni Bloccate",
          lblWidth: "Larghezza",
          lblHeight: "Altezza",
          lblFormat: "Formato Esportazione",
          formatHint: "Moderno &amp; Leggero",
          lblQuality: "Qualità di Compressione",
          lblEstSize: "Dimensione File Stimata",
          btnDownload: "Scarica Immagine Elaborata",
          btnCopyClipboard: "Copia negli Appunti",
          btnReset: "Azzera Tutto",
          guideHeading: "Ricampionamento e Compressione Precisi nel Browser",
          guideSubheading: "Scopri come i motori Canvas 2D eseguono ricampionamenti ad alta fedeltà e compressioni avanzate senza intermediari cloud.",
          card1Title: "Ricampionamento Bicubico & Densità",
          card1Desc: "Nella riduzione di fotografie ad alta risoluzione 4K, gli algoritmi semplici creano sgranature. VantorKit utilizza l'interpolazione bicubica nativa per contorni nitidi e sfumature pulite.",
          card2Title: "Compressione WEBP di Nuova Generazione",
          card2Desc: "Il formato WEBP riduce il peso dei file dal 30% al 50% rispetto al JPEG a parità di qualità percepita, ottimizzando i tempi di caricamento e i punteggi Core Web Vitals.",
          card3Title: "Privacy 100% nella Memoria Sandbox",
          card3Desc: "Le tue fotografie personali e i tuoi progetti grafici non vengono mai trasferiti in rete. Ogni pixel viene elaborato esclusivamente nella memoria RAM locale del tuo dispositivo.",
          faq1Q: "Perché ridimensionare e ritagliare le immagini localmente?",
          faq1A: "L'elaborazione locale nel browser azzera i tempi di caricamento verso server esterni, funziona offline e garantisce la massima riservatezza per i tuoi file.",
          faq2Q: "Come funziona il blocco delle proporzioni?",
          faq2A: "Quando il blocco proporzioni è attivo, modificando la larghezza viene calcolata automaticamente l'altezza corretta, prevenendo schiacciamenti o distorsioni.",
          faq3Q: "Come funzionano i preset per social network?",
          faq3A: "Selezionando 1:1, 16:9, 9:16 o 4:5 il riquadro di ritaglio si imposta istantaneamente sui formati standard per Instagram, YouTube, TikTok e banner web.",
          faq4Q: "Qual è il formato ideale per immagini trasparenti?",
          faq4A: "Se la tua immagine ha uno sfondo trasparente, esporta in PNG o WEBP. Il formato JPG non supporta la trasparenza e riempirà le aree vuote di bianco.",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente nel tuo browser.",
          downloadToast: "Immagine elaborata scaricata con successo!",
          copySuccessToast: "Immagine copiata negli appunti!",
          copyErrorToast: "Impossibile copiare l'immagine in questo browser.",
          resetToast: "Tutte le impostazioni sono state ripristinate.",
          sampleLoadedToast: "Immagine di esempio caricata con successo!"
        }
      };

      const LANG_LABELS = {
        en: "English",
        ar: "العربية",
        fr: "Français",
        it: "Italiano"
      };

      // --- Curated Generative Sample Graphics (High Res Data URLs) ---
      // 1. Landscape 16:9 (1920x1080)
      const SVG_SAMPLE_LANDSCAPE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%230f172a"/>
            <stop offset="40%" stop-color="%231e1b4b"/>
            <stop offset="70%" stop-color="%233b0764"/>
            <stop offset="90%" stop-color="%23ea580c"/>
            <stop offset="100%" stop-color="%23fbbf24"/>
          </linearGradient>
          <radialGradient id="sun1" cx="0.5" cy="0.65" r="0.4">
            <stop offset="0%" stop-color="%23ffffff"/>
            <stop offset="30%" stop-color="%23fef08a"/>
            <stop offset="70%" stop-color="%23f97316"/>
            <stop offset="100%" stop-color="%23c026d3" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="sea1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="%23ea580c"/>
            <stop offset="30%" stop-color="%236b21a8"/>
            <stop offset="100%" stop-color="%23020617"/>
          </linearGradient>
        </defs>
        <rect width="1920" height="740" fill="url(%23sky1)"/>
        <circle cx="960" cy="580" r="280" fill="url(%23sun1)"/>
        <circle cx="960" cy="580" r="140" fill="%23fef08a"/>
        <!-- Mountains -->
        <polygon points="0,740 380,480 760,740" fill="%232e1065" opacity="0.9"/>
        <polygon points="520,740 960,420 1400,740" fill="%233b0764" opacity="0.85"/>
        <polygon points="1200,740 1620,490 1920,740" fill="%231e1b4b" opacity="0.95"/>
        <rect y="730" width="1920" height="350" fill="url(%23sea1)"/>
        <!-- Reflection -->
        <ellipse cx="960" cy="770" rx="300" ry="12" fill="%23fde047" opacity="0.6"/>
        <ellipse cx="960" cy="810" rx="240" ry="9" fill="%23fb923c" opacity="0.5"/>
        <ellipse cx="960" cy="860" rx="180" ry="7" fill="%23f97316" opacity="0.4"/>
      </svg>`;

      // 2. Portrait 4:5 (1080x1350)
      const SVG_SAMPLE_PORTRAIT = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="1080" height="1350">
        <defs>
          <linearGradient id="pBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23111827"/>
            <stop offset="50%" stop-color="%231e1b4b"/>
            <stop offset="100%" stop-color="%23311042"/>
          </linearGradient>
          <linearGradient id="neonGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%2306b6d4"/>
            <stop offset="50%" stop-color="%233b82f6"/>
            <stop offset="100%" stop-color="%23a855f7"/>
          </linearGradient>
          <linearGradient id="goldHex" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="%23f59e0b"/>
            <stop offset="100%" stop-color="%23ec4899"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1350" fill="url(%23pBg)"/>
        <!-- Concentric Cyber Rings -->
        <circle cx="540" cy="675" r="380" fill="none" stroke="url(%23neonGlow)" stroke-width="4" opacity="0.5"/>
        <circle cx="540" cy="675" r="320" fill="none" stroke="url(%23goldHex)" stroke-width="2" stroke-dasharray="10,14" opacity="0.6"/>
        <circle cx="540" cy="675" r="240" fill="url(%23neonGlow)" opacity="0.25"/>
        <!-- Silhouette Portrait Hexagon -->
        <polygon points="540,420 740,535 740,765 540,880 340,765 340,535" fill="%230f172a" stroke="url(%23neonGlow)" stroke-width="6"/>
        <polygon points="540,470 690,555 690,725 540,810 390,725 390,555" fill="url(%23goldHex)" opacity="0.85"/>
        <circle cx="540" cy="640" r="60" fill="%23ffffff"/>
      </svg>`;

      // 3. Square Product 1:1 (1200x1200)
      const SVG_SAMPLE_SQUARE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="1200" height="1200">
        <defs>
          <radialGradient id="sqBg" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0%" stop-color="%231e293b"/>
            <stop offset="60%" stop-color="%230f172a"/>
            <stop offset="100%" stop-color="%23020617"/>
          </radialGradient>
          <linearGradient id="cube1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%2338bdf8"/>
            <stop offset="100%" stop-color="%231d4ed8"/>
          </linearGradient>
          <linearGradient id="cube2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23818cf8"/>
            <stop offset="100%" stop-color="%236366f1"/>
          </linearGradient>
          <linearGradient id="cube3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="%23c084fc"/>
            <stop offset="100%" stop-color="%239333ea"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="1200" fill="url(%23sqBg)"/>
        <!-- Pedestal -->
        <ellipse cx="600" cy="850" rx="360" ry="70" fill="%230b0f19" stroke="rgba(59,130,246,0.3)" stroke-width="2"/>
        <ellipse cx="600" cy="850" rx="260" ry="45" fill="rgba(59,130,246,0.15)"/>
        <!-- Isometric 3D Floating Cube Product -->
        <!-- Top Face -->
        <polygon points="600,320 840,440 600,560 360,440" fill="url(%23cube1)"/>
        <!-- Left Face -->
        <polygon points="360,440 600,560 600,820 360,700" fill="url(%23cube2)"/>
        <!-- Right Face -->
        <polygon points="600,560 840,440 840,700 600,820" fill="url(%23cube3)"/>
      </svg>`;

      // --- State ---
      let loadedImage = null;
      let activeFileName = "sample-landscape.png";
      let activeFileBytes = 1250000;

      // Crop rectangle (in original image coordinates)
      let cropRect = { x: 0, y: 0, w: 1920, h: 1080 };
      let activeAspectMode = 'free'; // 'free' | '1:1' | '16:9' | '9:16' | '4:5'

      // Resize target dimensions (px)
      let targetWidth = 1920;
      let targetHeight = 1080;
      let isAspectLocked = true;

      // Output settings
      let exportFormat = 'image/webp'; // 'image/webp' | 'image/jpeg' | 'image/png'
      let exportQuality = 0.85;

      // Interaction state for canvas cropper
      let dragHandle = null; // 'move' | 'tl' | 'tr' | 'bl' | 'br' | null
      let dragStartMouse = { x: 0, y: 0 };
      let dragStartCrop = { x: 0, y: 0, w: 0, h: 0 };
      let toastTimer = null;
      let estimateDebounceTimer = null;

      // --- DOM Elements ---
      const htmlRoot = document.getElementById('htmlRoot');
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');
      const samplePills = document.querySelectorAll('.sample-pill');
      const fileBanner = document.getElementById('fileBanner');
      const fileTypeBadge = document.getElementById('fileTypeBadge');
      const fileName = document.getElementById('fileName');
      const fileDimensions = document.getElementById('fileDimensions');
      const btnClearFile = document.getElementById('btnClearFile');

      const viewportContainer = document.getElementById('viewportContainer');
      const viewportCanvas = document.getElementById('viewportCanvas');
      const cropBoxDimensions = document.getElementById('cropBoxDimensions');
      const btnResetCrop = document.getElementById('btnResetCrop');

      const aspectBtns = document.querySelectorAll('.aspect-btn');
      const activeAspectLabel = document.getElementById('activeAspectLabel');
      const activePresetBadge = document.getElementById('activePresetBadge');

      const inputWidth = document.getElementById('inputWidth');
      const inputHeight = document.getElementById('inputHeight');
      const btnLockAspect = document.getElementById('btnLockAspect');
      const scaleBtns = document.querySelectorAll('.scale-btn');

      const formatBtns = document.querySelectorAll('.format-btn');
      const qualityWrap = document.getElementById('qualityWrap');
      const qualitySlider = document.getElementById('qualitySlider');
      const qualityValDisplay = document.getElementById('qualityValDisplay');
      const formatHint = document.getElementById('formatHint');

      const originalWeightDisplay = document.getElementById('originalWeightDisplay');
      const estSizeDisplay = document.getElementById('estSizeDisplay');
      const reductionDisplay = document.getElementById('reductionDisplay');

      const btnDownload = document.getElementById('btnDownload');
      const btnCopyClipboard = document.getElementById('btnCopyClipboard');
      const btnResetAll = document.getElementById('btnResetAll');

      const langDropdown = document.getElementById('langDropdown');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // --- Helper Utilities ---
      function formatBytes(bytes) {
        if (!bytes || isNaN(bytes) || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
      }

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

      // --- Image Loading & Initialization ---
      function loadImage(src, name = 'custom-image.png', sizeBytes = 1200000) {
        const img = new Image();
        img.onload = () => {
          loadedImage = img;
          activeFileName = name;
          activeFileBytes = sizeBytes;

          const origW = img.naturalWidth || img.width;
          const origH = img.naturalHeight || img.height;

          // Initialize crop to full image
          cropRect = { x: 0, y: 0, w: origW, h: origH };
          targetWidth = origW;
          targetHeight = origH;

          inputWidth.value = targetWidth;
          inputHeight.value = targetHeight;

          // Update banner
          fileBanner.style.display = 'flex';
          fileName.textContent = activeFileName;
          fileDimensions.textContent = `${origW} × ${origH} px • ${formatBytes(activeFileBytes)}`;
          const ext = activeFileName.split('.').pop().toUpperCase();
          fileTypeBadge.textContent = ext.length <= 4 ? ext : 'IMG';
          originalWeightDisplay.textContent = `Original: ~${formatBytes(activeFileBytes)}`;

          // Reset aspect ratio pill to freeform
          setAspectPreset('free');
          setScalePreset(1);

          drawViewport();
          scheduleEstimateSize();
        };
        img.src = src;
      }

      // --- Aspect Ratio Presets ---
      function setAspectPreset(aspect) {
        activeAspectMode = aspect;
        aspectBtns.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-aspect') === aspect);
        });

        if (!loadedImage) return;
        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;

        let ratio = null;
        if (aspect === '1:1') ratio = 1;
        else if (aspect === '16:9') ratio = 16 / 9;
        else if (aspect === '9:16') ratio = 9 / 16;
        else if (aspect === '4:5') ratio = 4 / 5;

        if (ratio !== null) {
          // Fit largest crop box with this aspect ratio inside image
          let newW = origW;
          let newH = Math.round(newW / ratio);

          if (newH > origH) {
            newH = origH;
            newW = Math.round(newH * ratio);
          }

          const newX = Math.round((origW - newW) / 2);
          const newY = Math.round((origH - newH) / 2);

          cropRect = { x: newX, y: newY, w: newW, h: newH };
          targetWidth = newW;
          targetHeight = newH;
          inputWidth.value = targetWidth;
          inputHeight.value = targetHeight;
        }

        activeAspectLabel.textContent = aspect.toUpperCase();
        drawViewport();
        scheduleEstimateSize();
      }

      aspectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          setAspectPreset(btn.getAttribute('data-aspect'));
        });
      });

      // --- Canvas Overlay & Cropper Drawing ---
      function drawViewport() {
        if (!loadedImage) return;

        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;

        // Container bounds
        const containerW = viewportContainer.clientWidth || 640;
        const maxH = 440;

        // Scale image to fit container nicely
        const scale = Math.min(containerW / origW, maxH / origH, 1);
        const displayW = Math.round(origW * scale);
        const displayH = Math.round(origH * scale);

        viewportCanvas.width = displayW;
        viewportCanvas.height = displayH;

        const ctx = viewportCanvas.getContext('2d');
        ctx.clearRect(0, 0, displayW, displayH);

        // 1. Draw base image
        ctx.drawImage(loadedImage, 0, 0, displayW, displayH);

        // 2. Draw Translucent Scrim
        ctx.fillStyle = 'rgba(7, 9, 14, 0.72)';
        ctx.fillRect(0, 0, displayW, displayH);

        // Convert crop coordinates from image-space to canvas display-space
        const cX = Math.round((cropRect.x / origW) * displayW);
        const cY = Math.round((cropRect.y / origH) * displayH);
        const cW = Math.round((cropRect.w / origW) * displayW);
        const cH = Math.round((cropRect.h / origH) * displayH);

        // 3. Clear Scrim inside Crop Box (reveal full bright image)
        ctx.save();
        ctx.beginPath();
        ctx.rect(cX, cY, cW, cH);
        ctx.clip();
        ctx.drawImage(loadedImage, 0, 0, displayW, displayH);

        // 4. Subtle Rule-of-Thirds Grid inside crop area
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        // Verticals
        ctx.moveTo(cX + cW / 3, cY);
        ctx.lineTo(cX + cW / 3, cY + cH);
        ctx.moveTo(cX + (cW * 2) / 3, cY);
        ctx.lineTo(cX + (cW * 2) / 3, cY + cH);
        // Horizontals
        ctx.moveTo(cX, cY + cH / 3);
        ctx.lineTo(cX + cW, cY + cH / 3);
        ctx.moveTo(cX, cY + (cH * 2) / 3);
        ctx.lineTo(cX + cW, cY + (cH * 2) / 3);
        ctx.stroke();
        ctx.restore();

        // 5. Crop Box Border with Glowing Outline
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 2;
        ctx.strokeRect(cX, cY, cW, cH);

        // 6. Corner Handles (Tactile White Knobs with Shadow)
        const handleSize = 10;
        const corners = [
          { x: cX, y: cY },
          { x: cX + cW, y: cY },
          { x: cX, y: cY + cH },
          { x: cX + cW, y: cY + cH }
        ];

        corners.forEach(pt => {
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#2563eb';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, handleSize / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });

        // Update crop badge in UI
        cropBoxDimensions.textContent = `${Math.round(cropRect.w)} × ${Math.round(cropRect.h)} px`;
      }

      // --- Interactive Cropper Dragging & Resizing ---
      function getCanvasCoords(e) {
        const rect = viewportCanvas.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }

      function getCropDisplayBounds() {
        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;
        const dW = viewportCanvas.width;
        const dH = viewportCanvas.height;

        return {
          x: (cropRect.x / origW) * dW,
          y: (cropRect.y / origH) * dH,
          w: (cropRect.w / origW) * dW,
          h: (cropRect.h / origH) * dH,
          scaleX: origW / dW,
          scaleY: origH / dH
        };
      }

      viewportCanvas.addEventListener('mousedown', (e) => {
        if (!loadedImage) return;
        const mouse = getCanvasCoords(e);
        const b = getCropDisplayBounds();
        const hitRadius = 14;

        // Check corner handles
        if (Math.hypot(mouse.x - b.x, mouse.y - b.y) <= hitRadius) dragHandle = 'tl';
        else if (Math.hypot(mouse.x - (b.x + b.w), mouse.y - b.y) <= hitRadius) dragHandle = 'tr';
        else if (Math.hypot(mouse.x - b.x, mouse.y - (b.y + b.h)) <= hitRadius) dragHandle = 'bl';
        else if (Math.hypot(mouse.x - (b.x + b.w), mouse.y - (b.y + b.h)) <= hitRadius) dragHandle = 'br';
        else if (mouse.x >= b.x && mouse.x <= b.x + b.w && mouse.y >= b.y && mouse.y <= b.y + b.h) {
          dragHandle = 'move';
        } else {
          dragHandle = null;
        }

        if (dragHandle) {
          dragStartMouse = { x: e.clientX, y: e.clientY };
          dragStartCrop = { ...cropRect };
        }
      });

      window.addEventListener('mousemove', (e) => {
        if (!dragHandle || !loadedImage) return;

        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;
        const dW = viewportCanvas.width;
        const dH = viewportCanvas.height;
        const scaleX = origW / dW;
        const scaleY = origH / dH;

        const dx = (e.clientX - dragStartMouse.x) * scaleX;
        const dy = (e.clientY - dragStartMouse.y) * scaleY;

        let newX = dragStartCrop.x;
        let newY = dragStartCrop.y;
        let newW = dragStartCrop.w;
        let newH = dragStartCrop.h;

        // Determine aspect constraint
        let aspect = null;
        if (activeAspectMode === '1:1') aspect = 1;
        else if (activeAspectMode === '16:9') aspect = 16 / 9;
        else if (activeAspectMode === '9:16') aspect = 9 / 16;
        else if (activeAspectMode === '4:5') aspect = 4 / 5;

        if (dragHandle === 'move') {
          newX = Math.min(Math.max(0, dragStartCrop.x + dx), origW - dragStartCrop.w);
          newY = Math.min(Math.max(0, dragStartCrop.y + dy), origH - dragStartCrop.h);
        } else if (dragHandle === 'br') {
          newW = Math.max(50, Math.min(origW - dragStartCrop.x, dragStartCrop.w + dx));
          if (aspect) {
            newH = Math.round(newW / aspect);
            if (newY + newH > origH) {
              newH = origH - newY;
              newW = Math.round(newH * aspect);
            }
          } else {
            newH = Math.max(50, Math.min(origH - dragStartCrop.y, dragStartCrop.h + dy));
          }
        } else if (dragHandle === 'bl') {
          const maxLeft = dragStartCrop.x + dragStartCrop.w - 50;
          newX = Math.max(0, Math.min(maxLeft, dragStartCrop.x + dx));
          newW = dragStartCrop.w - (newX - dragStartCrop.x);
          if (aspect) {
            newH = Math.round(newW / aspect);
            if (newY + newH > origH) {
              newH = origH - newY;
              newW = Math.round(newH * aspect);
              newX = dragStartCrop.x + dragStartCrop.w - newW;
            }
          } else {
            newH = Math.max(50, Math.min(origH - dragStartCrop.y, dragStartCrop.h + dy));
          }
        } else if (dragHandle === 'tr') {
          newW = Math.max(50, Math.min(origW - dragStartCrop.x, dragStartCrop.w + dx));
          const maxTop = dragStartCrop.y + dragStartCrop.h - 50;
          newY = Math.max(0, Math.min(maxTop, dragStartCrop.y + dy));
          newH = dragStartCrop.h - (newY - dragStartCrop.y);
          if (aspect) {
            newH = Math.round(newW / aspect);
            newY = dragStartCrop.y + dragStartCrop.h - newH;
            if (newY < 0) {
              newY = 0;
              newH = dragStartCrop.y + dragStartCrop.h;
              newW = Math.round(newH * aspect);
            }
          }
        } else if (dragHandle === 'tl') {
          const maxLeft = dragStartCrop.x + dragStartCrop.w - 50;
          const maxTop = dragStartCrop.y + dragStartCrop.h - 50;
          newX = Math.max(0, Math.min(maxLeft, dragStartCrop.x + dx));
          newY = Math.max(0, Math.min(maxTop, dragStartCrop.y + dy));
          newW = dragStartCrop.w - (newX - dragStartCrop.x);
          newH = dragStartCrop.h - (newY - dragStartCrop.y);
          if (aspect) {
            newH = Math.round(newW / aspect);
            newY = dragStartCrop.y + dragStartCrop.h - newH;
            if (newY < 0) {
              newY = 0;
              newH = dragStartCrop.y + dragStartCrop.h;
              newW = Math.round(newH * aspect);
              newX = dragStartCrop.x + dragStartCrop.w - newW;
            }
          }
        }

        cropRect = {
          x: Math.round(newX),
          y: Math.round(newY),
          w: Math.round(newW),
          h: Math.round(newH)
        };

        // Update resize dimension inputs
        targetWidth = cropRect.w;
        targetHeight = cropRect.h;
        inputWidth.value = targetWidth;
        inputHeight.value = targetHeight;

        drawViewport();
      });

      window.addEventListener('mouseup', () => {
        if (dragHandle) {
          dragHandle = null;
          scheduleEstimateSize();
        }
      });

      // Hover cursor indicator
      viewportCanvas.addEventListener('mousemove', (e) => {
        if (dragHandle || !loadedImage) return;
        const mouse = getCanvasCoords(e);
        const b = getCropDisplayBounds();
        const hit = 12;

        if (Math.hypot(mouse.x - b.x, mouse.y - b.y) <= hit) viewportCanvas.style.cursor = 'nwse-resize';
        else if (Math.hypot(mouse.x - (b.x + b.w), mouse.y - b.y) <= hit) viewportCanvas.style.cursor = 'nesw-resize';
        else if (Math.hypot(mouse.x - b.x, mouse.y - (b.y + b.h)) <= hit) viewportCanvas.style.cursor = 'nesw-resize';
        else if (Math.hypot(mouse.x - (b.x + b.w), mouse.y - (b.y + b.h)) <= hit) viewportCanvas.style.cursor = 'nwse-resize';
        else if (mouse.x >= b.x && mouse.x <= b.x + b.w && mouse.y >= b.y && mouse.y <= b.y + b.h) {
          viewportCanvas.style.cursor = 'move';
        } else {
          viewportCanvas.style.cursor = 'default';
        }
      });

      // Reset crop to full image
      btnResetCrop.addEventListener('click', () => {
        if (!loadedImage) return;
        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;
        cropRect = { x: 0, y: 0, w: origW, h: origH };
        targetWidth = origW;
        targetHeight = origH;
        inputWidth.value = targetWidth;
        inputHeight.value = targetHeight;
        setAspectPreset('free');
        setScalePreset(1);
        drawViewport();
        scheduleEstimateSize();
      });

      // --- Resize Dimensions & Percentage Presets ---
      // Lock Aspect Ratio Toggle
      btnLockAspect.addEventListener('click', () => {
        isAspectLocked = !isAspectLocked;
        btnLockAspect.classList.toggle('locked', isAspectLocked);
        const lockNotice = document.getElementById('aspectLockNotice');
        if (lockNotice) {
          lockNotice.textContent = isAspectLocked ? "Aspect Ratio Locked" : "Aspect Ratio Unlocked";
        }
      });

      // Width input change
      inputWidth.addEventListener('input', () => {
        const val = parseInt(inputWidth.value, 10);
        if (isNaN(val) || val <= 0) return;
        targetWidth = val;

        if (isAspectLocked && cropRect.w > 0) {
          const ratio = cropRect.h / cropRect.w;
          targetHeight = Math.round(val * ratio);
          inputHeight.value = targetHeight;
        }

        clearActiveScalePresets();
        scheduleEstimateSize();
      });

      // Height input change
      inputHeight.addEventListener('input', () => {
        const val = parseInt(inputHeight.value, 10);
        if (isNaN(val) || val <= 0) return;
        targetHeight = val;

        if (isAspectLocked && cropRect.h > 0) {
          const ratio = cropRect.w / cropRect.h;
          targetWidth = Math.round(val * ratio);
          inputWidth.value = targetWidth;
        }

        clearActiveScalePresets();
        scheduleEstimateSize();
      });

      // Percentage Scaling Presets (25%, 50%, 75%, 100%, 200%)
      function setScalePreset(multiplier) {
        scaleBtns.forEach(btn => {
          btn.classList.toggle('active', parseFloat(btn.getAttribute('data-scale')) === multiplier);
        });

        targetWidth = Math.round(cropRect.w * multiplier);
        targetHeight = Math.round(cropRect.h * multiplier);
        inputWidth.value = targetWidth;
        inputHeight.value = targetHeight;

        activePresetBadge.textContent = `${Math.round(multiplier * 100)}% (${targetWidth}×${targetHeight})`;
        scheduleEstimateSize();
      }

      function clearActiveScalePresets() {
        scaleBtns.forEach(btn => btn.classList.remove('active'));
        activePresetBadge.textContent = `Custom (${targetWidth}×${targetHeight})`;
      }

      scaleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          setScalePreset(parseFloat(btn.getAttribute('data-scale')));
        });
      });

      // --- Format & Quality Settings ---
      formatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          formatBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          exportFormat = btn.getAttribute('data-format');

          if (exportFormat === 'image/png') {
            qualityWrap.style.opacity = '0.5';
            qualitySlider.disabled = true;
            qualityValDisplay.textContent = 'Lossless (100%)';
            formatHint.textContent = 'Lossless Transparency';
          } else {
            qualityWrap.style.opacity = '1';
            qualitySlider.disabled = false;
            updateQualityDisplay();
            formatHint.textContent = exportFormat === 'image/webp' ? 'Modern & Lightweight' : 'Universal Compatibility';
          }

          scheduleEstimateSize();
        });
      });

      qualitySlider.addEventListener('input', () => {
        exportQuality = parseInt(qualitySlider.value, 10) / 100;
        updateQualityDisplay();
        scheduleEstimateSize();
      });

      function updateQualityDisplay() {
        const pct = Math.round(exportQuality * 100);
        let tag = 'Normal';
        if (pct >= 90) tag = 'Ultra';
        else if (pct >= 80) tag = 'High Quality';
        else if (pct >= 60) tag = 'Balanced';
        else tag = 'Maximum Compression';
        qualityValDisplay.textContent = `${pct}% (${tag})`;
      }

      // --- Offscreen Canvas Render for Export & Size Estimation ---
      function createProcessedCanvas() {
        if (!loadedImage) return null;

        const offCanvas = document.createElement('canvas');
        offCanvas.width = targetWidth;
        offCanvas.height = targetHeight;
        const ctx = offCanvas.getContext('2d');

        // High quality smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw cropped area to target dimensions
        ctx.drawImage(
          loadedImage,
          cropRect.x, cropRect.y, cropRect.w, cropRect.h,
          0, 0, targetWidth, targetHeight
        );

        return offCanvas;
      }

      // Real-time estimated size calculation
      function scheduleEstimateSize() {
        clearTimeout(estimateDebounceTimer);
        estimateDebounceTimer = setTimeout(computeEstimatedSize, 250);
      }

      function computeEstimatedSize() {
        const off = createProcessedCanvas();
        if (!off) return;

        try {
          off.toBlob((blob) => {
            if (!blob) return;
            const bytes = blob.size;
            estSizeDisplay.textContent = `~${formatBytes(bytes)}`;

            if (activeFileBytes > 0) {
              const diff = ((bytes - activeFileBytes) / activeFileBytes) * 100;
              if (diff < 0) {
                reductionDisplay.textContent = `(${Math.round(diff)}% smaller)`;
                reductionDisplay.style.color = '#34d399';
              } else {
                reductionDisplay.textContent = `(+${Math.round(diff)}% larger)`;
                reductionDisplay.style.color = '#94a3b8';
              }
            }
          }, exportFormat, exportQuality);
        } catch (e) {
          estSizeDisplay.textContent = '~Estimated';
        }
      }

      // --- Download & Clipboard Actions ---
      btnDownload.addEventListener('click', () => {
        const off = createProcessedCanvas();
        if (!off) return;

        off.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const extMap = {
            'image/webp': 'webp',
            'image/jpeg': 'jpg',
            'image/png': 'png'
          };
          const ext = extMap[exportFormat] || 'webp';
          const baseName = activeFileName.replace(/\.[^/.]+$/, "");
          const downloadName = `${baseName}-${targetWidth}x${targetHeight}.${ext}`;

          const a = document.createElement('a');
          a.href = url;
          a.download = downloadName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          showToast(getActiveDict().downloadToast);
        }, exportFormat, exportQuality);
      });

      btnCopyClipboard.addEventListener('click', () => {
        const off = createProcessedCanvas();
        if (!off) return;

        if (!navigator.clipboard || !window.ClipboardItem) {
          showToast(getActiveDict().copyErrorToast);
          return;
        }

        off.toBlob((blob) => {
          if (!blob) {
            showToast(getActiveDict().copyErrorToast);
            return;
          }
          try {
            navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]).then(() => {
              showToast(getActiveDict().copySuccessToast);
            }).catch(() => {
              showToast(getActiveDict().copyErrorToast);
            });
          } catch (e) {
            showToast(getActiveDict().copyErrorToast);
          }
        }, 'image/png'); // Standard clipboard requires PNG format
      });

      // Reset All
      btnResetAll.addEventListener('click', () => {
        if (!loadedImage) return;
        const origW = loadedImage.naturalWidth || loadedImage.width;
        const origH = loadedImage.naturalHeight || loadedImage.height;

        cropRect = { x: 0, y: 0, w: origW, h: origH };
        targetWidth = origW;
        targetHeight = origH;
        inputWidth.value = targetWidth;
        inputHeight.value = targetHeight;

        isAspectLocked = true;
        btnLockAspect.classList.add('locked');

        exportFormat = 'image/webp';
        formatBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-format') === 'image/webp'));
        qualityWrap.style.opacity = '1';
        qualitySlider.disabled = false;
        qualitySlider.value = 85;
        exportQuality = 0.85;
        updateQualityDisplay();

        setAspectPreset('free');
        setScalePreset(1);

        showToast(getActiveDict().resetToast);
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
          showToast('Please upload a valid image file (PNG, JPG, WEBP).');
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          loadImage(e.target.result, file.name, file.size);
        };
        reader.readAsDataURL(file);
      }

      btnClearFile.addEventListener('click', () => {
        fileInput.value = '';
        loadImage(SVG_SAMPLE_LANDSCAPE, 'sample-landscape.png', 1250000);
      });

      // Quick Sample Buttons
      samplePills.forEach(pill => {
        pill.addEventListener('click', () => {
          const sampleKey = pill.getAttribute('data-sample');
          if (sampleKey === 'portrait') {
            loadImage(SVG_SAMPLE_PORTRAIT, 'sample-portrait.png', 980000);
          } else if (sampleKey === 'square') {
            loadImage(SVG_SAMPLE_SQUARE, 'sample-product.png', 850000);
          } else {
            loadImage(SVG_SAMPLE_LANDSCAPE, 'sample-landscape.png', 1250000);
          }
          showToast(getActiveDict().sampleLoadedToast);
        });
      });

      window.addEventListener('resize', drawViewport);

      // --- Multi-Language Switcher Logic ---
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
      loadImage(SVG_SAMPLE_LANDSCAPE, 'sample-landscape.png', 1250000);

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
        "title": "Image Resizer & Crop – Custom Dimensions & Aspect Ratio",
        "desc": "Scale photos, crop target compositions, and adjust aspect ratios for social feeds. Re-encoding processes locally with zero cloud photo retention."
    },
    "ar": {
        "title": "تغيير حجم وقص الصور – أبعاد مخصصة ونسب عرض متناسقة",
        "desc": "عدل أبعاد الصور وقص أجزاءها بدقة مع نسب عرض مخصصة لمنصات النشر. تتم إعادة التحجيم في الذاكرة المحلية لجهازك مع سرية تامة للصور."
    },
    "fr": {
        "title": "Redimensionner & Recadrer – Dimensions et Proportions",
        "desc": "Ajustez la taille et recadrez vos images selon vos besoins graphiques. Le traitement s'effectue localement sans conservation de vos photos."
    },
    "it": {
        "title": "Ridimensiona e Ritaglia Immagini – Proporzioni e Pixel",
        "desc": "Modifica risoluzione e ritaglia composizioni visive per i social network. Il ricampionamento avviene nel browser senza memorizzare immagini."
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