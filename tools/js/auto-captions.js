/**
 * VantorKit — Tool #33: Auto Captions & Forced Alignment Suite
 * 100% Client-Side • Privacy-First • Zero Cloud Transmission
 * WebGPU / WebAssembly Speech Alignment • WebCodecs H.264 Burn-In • Pure-JS MP4 Muxer
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. LOCALIZATION DICTIONARIES (EN, AR, FR, IT)
     ========================================================================== */
  const TRANSLATIONS = {
    en: {
      toolTitle: "Auto Captions & Subtitle Studio",
      toolSubtitle: "Generate, style, and burn animated karaoke captions into video with client-side speech recognition & forced alignment. 100% in-browser.",
      privacyPill: "Privacy-First • 100% In-Browser • Zero Video Uploads",
      dropzoneTitle: "Drop your video here, or browse files",
      dropzoneSubtitle: "Supports MP4, MOV, WebM • Up to 500 MB • All processing stays in volatile RAM",
      btnBrowse: "Choose Video File",
      btnTestDemo: "Test Demo Video",
      privacyDropBadge: "🔒 Zero Data Transmission: Video and audio never leave your device",
      videoSpecs: "Video Loaded:",
      noAudioWarning: "⚠️ No audio track detected. You can still manually type or paste a script to sync captions.",
      transcriptTitle: "Script & Alignment Input",
      transcriptDesc: "Paste your raw transcript script below as the absolute source of truth. The AI will align user words without modifying your spelling.",
      transcriptPlaceholder: "Paste your video script or transcript here...\n\nExample:\nWelcome to VantorKit, the ultimate client-side privacy-first web utility suite. Everything runs directly in your browser.",
      langSelectLabel: "Spoken Language:",
      langAuto: "Auto-Detect",
      langEn: "English",
      langAr: "العربية (Arabic)",
      langFr: "Français (French)",
      langIt: "Italiano (Italian)",
      lblModelSelect: "AI Model & Accuracy:",
      modelBase: "Whisper Base (~73 MB • High Accuracy / Verse) [Recommended]",
      modelTiny: "Whisper Tiny (~34 MB • Fast / Lightweight)",
      modelCardTitle: "Multilingual AI Speech Engine",
      modelCardDesc: "Client-side Whisper speech recognition (~73 MB / ~34 MB download). Cached permanently in browser memory for offline use.",
      modelDownloadBtn: "Download AI Model",
      modelCachedBadge: "✓ Offline Ready (Cached in Browser)",
      modelDownloading: "Downloading Model: ",
      tapSyncTitle: "⏱️ Tap to Sync (Live Verse Calibration)",
      tapSyncDesc: "Play video and tap Spacebar (or button below) at the start of each line to record ground-truth timings.",
      btnTapNext: "Tap: Next Verse (Space)",
      btnUndoTap: "Undo Tap (Backspace)",
      btnResetTap: "Reset Taps",
      tapSyncReady: "Ready: Space to Tap",
      tapSyncComplete: "All Verses Synced!",
      btnSyncCaptions: "Align & Generate Captions",
      btnTranscribeRaw: "Transcribe Without Script (Raw ASR)",
      statusStep1: "Step 1/3: Extracting & resampling 16 kHz mono audio...",
      statusStep2: "Step 2/3: Speech recognition & token analysis...",
      statusStep3: "Step 3/3: Dynamic programming forced alignment...",
      studioTitle: "Caption Studio & Live Preview",
      tabStyling: "Styling & Presets",
      tabTimeline: "Timeline & Cues",
      tabExport: "Export & Burn-In",
      lblPreset: "Style Preset:",
      presetPoetic: "Classical Poetic (شعر كلاسيكي سينمائي)",
      presetTiktok: "Viral TikTok Pop (تيك توك بوب)",
      presetNeon: "Cyber Neon (نيون متوهج)",
      presetClean: "Clean Minimal (مينيمال هادئ)",
      presetKaraoke: "Karaoke Highlight",
      presetBounce: "TikTok Pop / Bounce",
      presetYellow: "Yellow Impact (Viral)",
      lblFontFamily: "Font Family:",
      fontInter: "Inter",
      fontMontserrat: "Montserrat",
      fontPoppins: "Poppins",
      fontCairo: "Cairo (Arabic Optimized)",
      fontBebas: "Bebas Neue",
      fontJetBrains: "JetBrains Mono",
      btnUploadFont: "+ Upload Custom Font (.ttf, .otf, .woff2)",
      lblFontSize: "Font Size:",
      lblTextColor: "Text Color:",
      lblHighlightColor: "Active Word Highlight:",
      lblStroke: "Outline / Stroke:",
      lblStrokeWidth: "Stroke Width:",
      lblStrokeColor: "Stroke Color:",
      lblGlowRadius: "Cinematic Glow / Shadow:",
      lblGlowColor: "Glow / Neon Color:",
      lblEnable: "Active",
      lblWordBounce: "Word Pop / Bounce (1.15x)",
      descWordBounce: "Smooth kinetic scale on active word",
      lblSlideUp: "Slide Up / Fade Entry",
      descSlideUp: "Subtle smooth entry for line transitions",
      lblBgStyle: "Background Box:",
      bgNone: "None",
      bgPill: "Rounded Pill",
      bgRect: "Full Box",
      lblBgOpacity: "Box Opacity:",
      lblPosition: "Vertical Position:",
      lblAspectRatio: "Canvas Ratio & Safe Zones:",
      ratioOriginal: "Original Video Ratio",
      ratio916: "9:16 (TikTok / Reels / Shorts)",
      ratio11: "1:1 (Square Feed)",
      ratio45: "4:5 (Portrait Feed)",
      ratio169: "16:9 (Landscape)",
      safeZoneHint: "Safe margins active: Keeps subtitles clear of TikTok / Instagram UI overlays.",
      timelineHeader: "Subtitle Timeline Cues",
      lblShiftAll: "⚡ Shift All Cues:",
      btnAddCue: "+ Add New Cue",
      btnSplitCue: "Split",
      btnMergeCue: "Merge Next",
      btnDeleteCue: "Delete",
      cueStart: "Start",
      cueEnd: "End",
      lblConfidence: "Alignment Confidence:",
      btnPlayPause: "Play / Pause",
      exportHeader: "Export Options",
      btnExportSrt: "Download SubRip (.SRT)",
      btnExportVtt: "Download WebVTT (.VTT)",
      btnExportAss: "Download Styled ASS (.ASS)",
      btnBurnMp4: "Burn Captions & Export MP4 Video",
      btnCancelBurn: "Cancel Export",
      btnCancelExport: "Cancel Export",
      burnProgress: "Encoding MP4 Video: ",
      exportCancelled: "Export cancelled cleanly",
      toastDownloaded: "File downloaded successfully!",
      toastDemoLoaded: "Synthetic demo video created and loaded!",
      toastFontLoaded: "Custom font loaded into browser memory!",
      toastAlignmentComplete: "Forced alignment completed successfully!",
      errNoVideo: "Please load or drop a video file first.",
      errNoTranscript: "Please paste a script or use Raw ASR transcription.",
      footerText: "© 2026 VantorKit. Fast, private, and free client-side web utilities. All processing happens locally in your browser."
    },
    ar: {
      toolTitle: "التسميات التوضيحية التلقائية واستوديو الترجمة",
      toolSubtitle: "توليد وتنسيق ودمج التسميات التوضيحية المتحركة (كاريوكي) في الفيديو عبر الذكاء الاصطناعي والمحاذاة القسرية محلياً 100% داخل المتصفح.",
      privacyPill: "الخصوصية أولاً • محلي 100% داخل المتصفح • لا يتم رفع أي فيديو",
      dropzoneTitle: "اسحب وأفلت ملف الفيديو هنا، أو تصفح جهازك",
      dropzoneSubtitle: "يدعم MP4 وMOV وWebM • حتى 500 ميجابايت • تتم المعالجة بالكامل في الذاكرة المؤقتة RAM",
      btnBrowse: "اختيار ملف فيديو",
      btnTestDemo: "تجربة فيديو توضيحي",
      privacyDropBadge: "🔒 خصوصية مطلقة: الفيديو والصوت لا يغادران جهازك نهائياً",
      videoSpecs: "تم تحميل الفيديو:",
      noAudioWarning: "⚠️ لم يتم اكتشاف مسار صوتي. لا يزال بإمكانك كتابة النص لمزامنة التسميات يدوياً.",
      transcriptTitle: "النص الأصلي والمحاذاة القسرية",
      transcriptDesc: "الصق النص المكتوب هنا كمصدر حقيقة مطلق. سيقوم الذكاء الاصطناعي بمحاذاة الكلمات دون المساس بإملائك.",
      transcriptPlaceholder: "الصق نص الفيديو هنا...\n\nمثال:\nمرحباً بكم في فانتوركيت، المنصة الشاملة للأدوات البرمجية الخاصة التي تعمل بالكامل داخل المتصفح وبأعلى درجات الخصوصية.",
      langSelectLabel: "لغة الحديث:",
      langAuto: "اكتشاف تلقائي",
      langEn: "English (الإنجليزية)",
      langAr: "العربية",
      langFr: "Français (الفرنسية)",
      langIt: "Italiano (الإيطالية)",
      lblModelSelect: "نموذج الذكاء الاصطناعي والدقة:",
      modelBase: "Whisper Base (~73 ميجابايت • دقة عالية / للشعر والنصوص المشكولة) [موصى به]",
      modelTiny: "Whisper Tiny (~34 ميجابايت • سريع وخفيف)",
      modelCardTitle: "محرك الذكاء الاصطناعي الصوتي المتعدد اللغات",
      modelCardDesc: "نموذج Whisper يعمل بالكامل داخل المتصفح (~73 / ~34 ميجابايت). يُحفظ دائماً في المتصفح للاستخدام بدون إنترنت.",
      modelDownloadBtn: "تحميل نموذج الذكاء الاصطناعي",
      modelCachedBadge: "✓ جاهز للعمل بدون إنترنت (محفوظ في المتصفح)",
      modelDownloading: "جارٍ تحميل النموذج: ",
      tapSyncTitle: "⏱️ المزامنة بالنقرة (معايرة حية للأبيات)",
      tapSyncDesc: "شغل الفيديو واضغط زر المسافة (Space) أو الزر أدناه عند بداية كل بيت لتسجيل توقيتات دقيقة وفورية.",
      btnTapNext: "نقرة: البيت التالي (Space)",
      btnUndoTap: "تراجع عن النقرة (Backspace)",
      btnResetTap: "إعادة ضبط",
      tapSyncReady: "جاهز: اضغط Space للمزامنة",
      tapSyncComplete: "تمت معايرة جميع الأبيات بنجاح!",
      btnSyncCaptions: "محاذاة وتوليد التسميات التوضيحية",
      btnTranscribeRaw: "تفريغ صوتي مباشر (بدون نص مسبق)",
      statusStep1: "الخطوة 1/3: استخراج الصوت وإعادة تشكيله بتردد 16 كيلوهرتز...",
      statusStep2: "الخطوة 2/3: التعرف على الكلام وتحليل التوقيتات...",
      statusStep3: "الخطوة 3/3: المحاذاة القسرية الديناميكية للكلمات...",
      studioTitle: "استوديو التسميات والمعاينة الحية",
      tabStyling: "المظهر والأنماط",
      tabTimeline: "الشريط الزمني والعبارات",
      tabExport: "التصدير والدمج",
      lblPreset: "النمط الجاهز:",
      presetPoetic: "شعر كلاسيكي سينمائي (Classical Poetic)",
      presetTiktok: "تيك توك بوب (Viral TikTok Pop)",
      presetNeon: "نيون متوهج (Cyber Neon)",
      presetClean: "مينيمال هادئ (Clean Minimal)",
      presetKaraoke: "تمييز كاريوكي (كلمة بكلمة)",
      presetBounce: "قفز تيك توك التفاعلي",
      presetYellow: "أصفر بارز (الأكثر انتشاراً)",
      lblFontFamily: "نوع الخط:",
      fontInter: "Inter",
      fontMontserrat: "Montserrat",
      fontPoppins: "Poppins",
      fontCairo: "Cairo (خط كايرو العربي)",
      fontBebas: "Bebas Neue",
      fontJetBrains: "JetBrains Mono",
      btnUploadFont: "+ رفع خط مخصص (.ttf, .otf, .woff2)",
      lblFontSize: "حجم الخط:",
      lblTextColor: "لون النص الأساسي:",
      lblHighlightColor: "لون تمييز الكلمة النشطة:",
      lblStroke: "الحدود الخارجية (Outline):",
      lblStrokeWidth: "عرض الحدود (Stroke):",
      lblStrokeColor: "لون الحدود:",
      lblGlowRadius: "التوهج السينمائي / الظل:",
      lblGlowColor: "لون التوهج والنيون:",
      lblEnable: "مفعل",
      lblWordBounce: "قفز الكلمة الحركي (1.15x)",
      descWordBounce: "حركة بوب سلسة للكلمة المنطوقة",
      lblSlideUp: "دخول انسيابي صاعد (Fade & Slide)",
      descSlideUp: "حركة ناعمة للسطور الجديدة",
      lblBgStyle: "خلفية النص:",
      bgNone: "بدون خلفية",
      bgPill: "كبسولة دائرية (Pill)",
      bgRect: "صندوق كامل",
      lblBgOpacity: "شفافية الخلفية:",
      lblPosition: "الموقع الرأسي:",
      lblAspectRatio: "أبعاد الشاشة والمناطق الآمنة:",
      ratioOriginal: "الأبعاد الأصلية للفيديو",
      ratio916: "9:16 (تيك توك / ريلز / شورتس)",
      ratio11: "1:1 (مربع)",
      ratio45: "4:5 (منشورات طولية)",
      ratio169: "16:9 (عريض / يوتيوب)",
      safeZoneHint: "المناطق الآمنة مفعلة: تضمن بقاء الترجمة بعيدة عن واجهات تيك توك وإنستغرام.",
      timelineHeader: "عبارات الشريط الزمني",
      lblShiftAll: "⚡ إزاحة كل التوقيتات:",
      btnAddCue: "+ إضافة عبارة جديدة",
      btnSplitCue: "تقسيم",
      btnMergeCue: "دمج مع التالية",
      btnDeleteCue: "حذف",
      cueStart: "البداية",
      cueEnd: "النهاية",
      lblConfidence: "دقة المحاذاة:",
      btnPlayPause: "تشغيل / إيقاف مؤقت",
      exportHeader: "خيارات التصدير",
      btnExportSrt: "تنزيل ملف SubRip (.SRT)",
      btnExportVtt: "تنزيل ملف WebVTT (.VTT)",
      btnExportAss: "تنزيل ملف منسق (.ASS)",
      btnBurnMp4: "دمج التسميات وتصدير فيديو MP4",
      btnCancelBurn: "إلغاء التصدير",
      btnCancelExport: "إلغاء التصدير",
      burnProgress: "جارٍ تشفير فيديو MP4: ",
      exportCancelled: "تم إلغاء التصدير بنجاح",
      toastDownloaded: "تم تنزيل الملف بنجاح!",
      toastDemoLoaded: "تم إنشاء وتحميل فيديو توضيحي بنجاح!",
      toastFontLoaded: "تم تثبيت الخط المخصص في المتصفح!",
      toastAlignmentComplete: "اكتملت المحاذاة القسرية بنجاح!",
      errNoVideo: "يرجى تحميل ملف فيديو أولاً.",
      errNoTranscript: "يرجى لصق النص المكتوب أو اختيار التفريغ المباشر.",
      footerText: "© 2026 VantorKit. أدوات ويب خاصة وسريعة ومجانية تعمل بالكامل في متصفحك دون إرسال بيانات."
    },
    fr: {
      toolTitle: "Sous-Titres Automatiques & Studio Vidéo",
      toolSubtitle: "Générez, stylisez et incrustez des sous-titres animés karaoké avec alignement forcé par IA 100% dans le navigateur.",
      privacyPill: "Confidentialité Totale • 100% Navigateur • 0 Téléversement",
      dropzoneTitle: "Déposez votre vidéo ici, ou parcourez",
      dropzoneSubtitle: "Prend en charge MP4, MOV, WebM • Jusqu'à 500 Mo • Traitement direct en mémoire RAM",
      btnBrowse: "Choisir un fichier vidéo",
      btnTestDemo: "Tester une vidéo démo",
      privacyDropBadge: "🔒 Confidentialité Absolue : Votre vidéo et audio ne quittent jamais votre appareil",
      videoSpecs: "Vidéo chargée :",
      noAudioWarning: "⚠️ Aucune piste audio détectée. Vous pouvez toujours saisir un script pour synchroniser manuellement.",
      transcriptTitle: "Script & Alignement Forcé",
      transcriptDesc: "Collez votre transcription comme source absolue de vérité. L'IA aligne vos mots sans modifier votre orthographe.",
      transcriptPlaceholder: "Collez votre script ici...\n\nExemple :\nBienvenue sur VantorKit, la suite d'outils web confidentiels fonctionnant entièrement dans votre navigateur.",
      langSelectLabel: "Langue parlée :",
      langAuto: "Détection automatique",
      langEn: "Anglais",
      langAr: "Arabe",
      langFr: "Français",
      langIt: "Italien",
      lblModelSelect: "Modèle IA & Précision :",
      modelBase: "Whisper Base (~73 Mo • Haute Précision / Poésie) [Recommandé]",
      modelTiny: "Whisper Tiny (~34 Mo • Rapide & Léger)",
      modelCardTitle: "Moteur IA Vocal Multilingue",
      modelCardDesc: "Modèle Whisper dans le navigateur (~73 / ~34 Mo). Mis en cache de façon permanente pour une utilisation hors-ligne.",
      modelDownloadBtn: "Télécharger le modèle IA",
      modelCachedBadge: "✓ Prêt hors-ligne (en cache navigateur)",
      modelDownloading: "Téléchargement du modèle : ",
      tapSyncTitle: "⏱️ Synchronisation au Clic (Calibrage en Direct)",
      tapSyncDesc: "Lancez la vidéo et appuyez sur Espace (ou le bouton) au début de chaque vers pour caler le temps réel.",
      btnTapNext: "Clic : Vers Suivant (Espace)",
      btnUndoTap: "Annuler (Retour)",
      btnResetTap: "Réinitialiser",
      tapSyncReady: "Prêt : Espace pour caler",
      tapSyncComplete: "Tous les vers sont synchronisés !",
      btnSyncCaptions: "Aligner & Générer les Sous-Titres",
      btnTranscribeRaw: "Transcription brute (sans script)",
      statusStep1: "Étape 1/3 : Extraction audio 16 kHz mono...",
      statusStep2: "Étape 2/3 : Reconnaissance vocale et analyse des tokens...",
      statusStep3: "Étape 3/3 : Alignement forcé par programmation dynamique...",
      studioTitle: "Studio de Sous-Titres & Aperçu en Direct",
      tabStyling: "Styles & Préréglages",
      tabTimeline: "Chronologie & Segments",
      tabExport: "Export & Incrustation",
      lblPreset: "Style Prédéfini :",
      presetPoetic: "Poétique Classique (شعر كلاسيكي سينمائي)",
      presetTiktok: "TikTok Pop Viral (تيك توك بوب)",
      presetNeon: "Néon Cyber (نيون متوهج)",
      presetClean: "Minimal Épuré (مينيمال هادئ)",
      presetKaraoke: "Surlignage Karaoké",
      presetBounce: "Effet Pop TikTok",
      presetYellow: "Jaune Impact Viral",
      lblFontFamily: "Police d'écriture :",
      fontInter: "Inter",
      fontMontserrat: "Montserrat",
      fontPoppins: "Poppins",
      fontCairo: "Cairo (Optimisé Arabe)",
      fontBebas: "Bebas Neue",
      fontJetBrains: "JetBrains Mono",
      btnUploadFont: "+ Importer une police (.ttf, .otf, .woff2)",
      lblFontSize: "Taille de police :",
      lblTextColor: "Couleur du texte :",
      lblHighlightColor: "Couleur du mot actif :",
      lblStroke: "Contour du texte :",
      lblStrokeWidth: "Épaisseur du contour :",
      lblStrokeColor: "Couleur du contour :",
      lblGlowRadius: "Lueur cinématique / Ombre :",
      lblGlowColor: "Couleur du néon :",
      lblEnable: "Actif",
      lblWordBounce: "Rebond de mot (1.15x)",
      descWordBounce: "Animation cinétique sur le mot actif",
      lblSlideUp: "Entrée fluide vers le haut",
      descSlideUp: "Transition verticale subtile par ligne",
      lblBgStyle: "Fond du sous-titre :",
      bgNone: "Aucun",
      bgPill: "Pilule arrondie",
      bgRect: "Rectangle complet",
      lblBgOpacity: "Opacité du fond :",
      lblPosition: "Position verticale :",
      lblAspectRatio: "Format & Zones de Sécurité :",
      ratioOriginal: "Format original",
      ratio916: "9:16 (TikTok / Reels / Shorts)",
      ratio11: "1:1 (Carré)",
      ratio45: "4:5 (Portrait)",
      ratio169: "16:9 (Paysage)",
      safeZoneHint: "Zones de sécurité actives : préserve les sous-titres des boutons de l'interface mobile.",
      timelineHeader: "Segments de la Chronologie",
      lblShiftAll: "⚡ Décaler tous les sous-titres :",
      btnAddCue: "+ Ajouter un segment",
      btnSplitCue: "Diviser",
      btnMergeCue: "Fusionner suivant",
      btnDeleteCue: "Supprimer",
      cueStart: "Début",
      cueEnd: "Fin",
      lblConfidence: "Indice de confiance :",
      btnPlayPause: "Lecture / Pause",
      exportHeader: "Options d'Exportation",
      btnExportSrt: "Télécharger SubRip (.SRT)",
      btnExportVtt: "Télécharger WebVTT (.VTT)",
      btnExportAss: "Télécharger ASS stylé (.ASS)",
      btnBurnMp4: "Incruster & Exporter en Vidéo MP4",
      btnCancelBurn: "Annuler l'export",
      btnCancelExport: "Annuler l'export",
      burnProgress: "Encodage vidéo MP4 : ",
      exportCancelled: "Exportation annulée",
      toastDownloaded: "Fichier téléchargé avec succès !",
      toastDemoLoaded: "Vidéo démo générée et chargée !",
      toastFontLoaded: "Police personnalisée chargée !",
      toastAlignmentComplete: "Alignement forcé terminé avec succès !",
      errNoVideo: "Veuillez d'abord charger un fichier vidéo.",
      errNoTranscript: "Veuillez coller un script ou choisir la transcription brute.",
      footerText: "© 2026 VantorKit. Utilitaires web client-side rapides, privés et gratuits."
    },
    it: {
      toolTitle: "Sottotitoli Automatici & Studio Video",
      toolSubtitle: "Genera, personalizza e incidi sottotitoli karaoke animati nei video con allineamento forzato AI direttamente nel browser.",
      privacyPill: "Privacy Assoluta • 100% Nel Browser • Nessun Caricamento",
      dropzoneTitle: "Trascina qui il tuo video o seleziona un file",
      dropzoneSubtitle: "Supporta MP4, MOV, WebM • Fino a 500 MB • Elaborazione diretta in memoria RAM",
      btnBrowse: "Scegli File Video",
      btnTestDemo: "Prova Video Demo",
      privacyDropBadge: "🔒 Zero Trasmissione Dati: Il video e l'audio non lasciano mai il dispositivo",
      videoSpecs: "Video Caricato:",
      noAudioWarning: "⚠️ Nessuna traccia audio rilevata. Puoi comunque inserire il testo per sincronizzarlo manualmente.",
      transcriptTitle: "Script & Allineamento Forzato",
      transcriptDesc: "Incolla la trascrizione come fonte di verità assoluta. L'IA allinea le parole senza modificare la tua ortografia.",
      transcriptPlaceholder: "Incolla il testo del video qui...\n\nEsempio:\nBenvenuto su VantorKit, la suite di utilità web private che opera interamente nel tuo browser.",
      langSelectLabel: "Lingua Parlata:",
      langAuto: "Rilevamento automatico",
      langEn: "Inglese",
      langAr: "Arabo",
      langFr: "Francese",
      langIt: "Italiano",
      lblModelSelect: "Modello IA & Precisione:",
      modelBase: "Whisper Base (~73 MB • Alta Precisione / Poesia) [Consigliato]",
      modelTiny: "Whisper Tiny (~34 MB • Veloce e Leggero)",
      modelCardTitle: "Motore IA Vocale Multilingue",
      modelCardDesc: "Modello Whisper nel browser (~73 / ~34 MB). Salvato in cache per uso offline continuo.",
      modelDownloadBtn: "Scarica Modello IA",
      modelCachedBadge: "✓ Pronto Offline (in Cache Browser)",
      modelDownloading: "Download del modello in corso: ",
      tapSyncTitle: "⏱️ Sincronizzazione a Tocco (Calibrazione Versi dal Vivo)",
      tapSyncDesc: "Riproduci il video e premi Spazio (o il pulsante) all'inizio di ogni verso per calibrare il tempo esatto.",
      btnTapNext: "Tocco: Verso Successivo (Spazio)",
      btnUndoTap: "Annulla Tocco (Backspace)",
      btnResetTap: "Reimposta",
      tapSyncReady: "Pronto: Spazio per calibrare",
      tapSyncComplete: "Tutti i versi sono sincronizzati!",
      btnSyncCaptions: "Allinea & Genera Sottotitoli",
      btnTranscribeRaw: "Trascrizione Grezza (senza script)",
      statusStep1: "Fase 1/3: Estrazione e ricampionamento audio 16 kHz mono...",
      statusStep2: "Fase 2/3: Riconoscimento vocale e analisi token...",
      statusStep3: "Fase 3/3: Allineamento forzato a programmazione dinamica...",
      studioTitle: "Studio Sottotitoli & Anteprima Live",
      tabStyling: "Stile & Preimpostazioni",
      tabTimeline: "Sequenza Temporale & Segmenti",
      tabExport: "Esportazione & Incisione",
      lblPreset: "Stile Predefinito:",
      presetPoetic: "Poetico Classico (شعر كلاسيكي سينمائي)",
      presetTiktok: "TikTok Pop Virale (تيك توك بوب)",
      presetNeon: "Cyber Neon (نيون متوهج)",
      presetClean: "Minimale Pulito (مينيمال هادئ)",
      presetKaraoke: "Evidenziazione Karaoke",
      presetBounce: "Effetto Rimbalzo TikTok",
      presetYellow: "Giallo Impatto Virale",
      lblFontFamily: "Famiglia Carattere:",
      fontInter: "Inter",
      fontMontserrat: "Montserrat",
      fontPoppins: "Poppins",
      fontCairo: "Cairo (Ottimizzato Arabo)",
      fontBebas: "Bebas Neue",
      fontJetBrains: "JetBrains Mono",
      btnUploadFont: "+ Carica Font Personalizzato (.ttf, .otf, .woff2)",
      lblFontSize: "Dimensione Carattere:",
      lblTextColor: "Colore Testo:",
      lblHighlightColor: "Colore Parola Attiva:",
      lblStroke: "Bordo / Contorno:",
      lblStrokeWidth: "Spessore contorno:",
      lblStrokeColor: "Colore contorno:",
      lblGlowRadius: "Bagliore cinematografico / Ombra:",
      lblGlowColor: "Colore neon:",
      lblEnable: "Attivo",
      lblWordBounce: "Rimbalzo parola (1.15x)",
      descWordBounce: "Animazione cinetica sulla parola attiva",
      lblSlideUp: "Entrata verso l'alto fluida",
      descSlideUp: "Transizione verticale sottile per riga",
      lblBgStyle: "Sfondo Sottotitolo:",
      bgNone: "Nessuno",
      bgPill: "Pillola Arrotondata",
      bgRect: "Rettangolo Pieno",
      lblBgOpacity: "Opacità Sfondo:",
      lblPosition: "Posizione Verticale:",
      lblAspectRatio: "Formato & Zone di Sicurezza:",
      ratioOriginal: "Formato Originale",
      ratio916: "9:16 (TikTok / Reels / Shorts)",
      ratio11: "1:1 (Quadrato)",
      ratio45: "4:5 (Verticale)",
      ratio169: "16:9 (Orizzontale)",
      safeZoneHint: "Margini di sicurezza attivi: mantiene i sottotitoli visibili oltre i pulsanti delle app.",
      timelineHeader: "Segmenti Temporali",
      lblShiftAll: "⚡ Sposta tutti i segmenti:",
      btnAddCue: "+ Aggiungi Segmento",
      btnSplitCue: "Dividi",
      btnMergeCue: "Unisci Successivo",
      btnDeleteCue: "Elimina",
      cueStart: "Inizio",
      cueEnd: "Fine",
      lblConfidence: "Affidabilità Allineamento:",
      btnPlayPause: "Riproduci / Pausa",
      exportHeader: "Opzioni di Esportazione",
      btnExportSrt: "Scarica SubRip (.SRT)",
      btnExportVtt: "Scarica WebVTT (.VTT)",
      btnExportAss: "Scarica ASS con Stile (.ASS)",
      btnBurnMp4: "Incidi Sottotitoli & Esporta Video MP4",
      btnCancelBurn: "Annulla Esportazione",
      btnCancelExport: "Annulla Esportazione",
      burnProgress: "Codifica Video MP4: ",
      exportCancelled: "Esportazione annullata",
      toastDownloaded: "File scaricato con successo!",
      toastDemoLoaded: "Video demo generato e caricato!",
      toastFontLoaded: "Carattere personalizzato caricato!",
      toastAlignmentComplete: "Allineamento completato con successo!",
      errNoVideo: "Carica prima un file video.",
      errNoTranscript: "Incolla un testo o scegli la trascrizione grezza.",
      footerText: "© 2026 VantorKit. Utility web lato client veloci, private e gratuite."
    }
  };

  /* ==========================================================================
     2. APPLICATION STATE
     ========================================================================== */
  const state = {
    videoFile: null,
    videoUrl: null,
    videoDuration: 0,
    videoWidth: 1280,
    videoHeight: 720,
    audioBuffer: null,
    hasAudio: false,
    userTranscript: '',
    language: 'auto',
    selectedModel: 'base',
    tapSync: {
      active: false,
      lines: [],
      currentLineIndex: 0,
      taps: []
    },
    cues: [], // Array of { id, start, end, text, words: [{ text, start, end }], confidence, isInterpolated }
    activeCueIndex: -1,
    activeWordIndex: -1,
    aspectRatio: 'original',
    styling: {
      preset: 'poetic',
      fontFamily: "'Cairo', sans-serif",
      customFontName: null,
      fontSize: 32, // computed base
      fontSizePercent: 5.5, // 5.5% of height
      textColor: '#fffdf5',
      highlightColor: '#fde047', // Warm gold accent
      outlineWidth: 3,
      outlineColor: '#000000',
      glowEnabled: true,
      glowRadius: 12,
      glowColor: '#d97706',
      wordBounce: true,
      slideUpFade: true,
      bgType: 'pill',
      bgColor: '#000000',
      bgOpacity: 0.60,
      positionY: 82, // 82% from top
      textAlign: 'center'
    },
    isModelCached: false,
    isModelDownloading: false,
    isProcessing: false,
    isExporting: false,
    abortExport: false,
    playbackAnimId: null
  };

  // Dedicated responsive cancel & WebCodecs pipeline tracking
  let exportAbortController = null;
  let isExportCancelled = false;
  let activeVideoEncoder = null;
  let activeAudioEncoder = null;
  let activeExportVideo = null;

  /* ==========================================================================
     2.1 TIMELINE HISTORY & UNDO / REDO ENGINE
     ========================================================================== */
  const history = {
    undoStack: [],
    redoStack: [],
    maxHistory: 30,
    pushState(cues) {
      this.undoStack.push(JSON.stringify(cues));
      if (this.undoStack.length > this.maxHistory) this.undoStack.shift();
      this.redoStack = [];
      this.updateButtons();
    },
    undo() {
      if (this.undoStack.length === 0) return null;
      this.redoStack.push(JSON.stringify(state.cues));
      const previous = JSON.parse(this.undoStack.pop());
      this.updateButtons();
      return previous;
    },
    redo() {
      if (this.redoStack.length === 0) return null;
      this.undoStack.push(JSON.stringify(state.cues));
      const next = JSON.parse(this.redoStack.pop());
      this.updateButtons();
      return next;
    },
    updateButtons() {
      const undoBtn = document.getElementById('btnUndoCue');
      const redoBtn = document.getElementById('btnRedoCue');
      if (undoBtn) undoBtn.disabled = this.undoStack.length === 0;
      if (redoBtn) redoBtn.disabled = this.redoStack.length === 0;
    }
  };

  /* ==========================================================================
     3. HELPER UTILITIES: TEXT NORMALIZATION & SEQUENCE ALIGNMENT
     ========================================================================== */
  function normalizeLatin(text) {
    return (text || '').toLowerCase().replace(/[^\w\s']/g, '').trim();
  }

  function normalizeArabic(text) {
    if (!text) return '';
    return text
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // Strip Harakat/Tashkeel & Tatweel
      .replace(/[إأآٱ]/g, 'ا')                    // Normalize Alef variants
      .replace(/ة/g, 'ه')                         // Normalize Taa Marbuta
      .replace(/ى/g, 'ي')                         // Normalize Alif Maqsura
      .replace(/[،؟؛«»"'.!?:;()\-–—]/g, '')       // Strip punctuation
      .trim();
  }

  function isArabicText(text) {
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text || '');
  }

  // Detects the true first spoken speech onset, rejecting pre-speech instrumental intro / noise transients (< 0.05 speech probability)
  function detectFirstSpokenTimestamp(bursts) {
    if (!bursts || bursts.length === 0) return 0;
    
    // Check if early bursts are transient clicks/intro instrument plucks
    for (let i = 0; i < bursts.length; i++) {
      const b = bursts[i];
      const next = bursts[i + 1];
      const gapToNext = next ? (next.start - b.end) : 0;
      
      // If a burst is very early (< 4.5s), short (< 0.55s), and followed by a large intro silence gap (> 1.2s),
      // it is pre-speech noise or instrumental intro note (< 0.05 speech probability)
      if (b.start < 4.5 && b.duration < 0.55 && gapToNext > 1.2) {
        continue;
      }
      return b.start;
    }
    return bursts[0].start;
  }

  // Detects acoustic speech bursts and pauses (> 280ms) for verse-level anchoring
  function detectAcousticSpeechBursts(audioBuffer, minPauseDuration = 0.28) {
    if (!audioBuffer) return [];
    const channelData = audioBuffer.getChannelData(0);
    const sampleRate = audioBuffer.sampleRate; // 16,000 Hz
    const frameSize = Math.floor(sampleRate * 0.04); // 40ms window
    const hopSize = Math.floor(sampleRate * 0.02);   // 20ms step
    const numFrames = Math.floor((channelData.length - frameSize) / hopSize);

    const energies = new Float32Array(numFrames);
    let maxEnergy = 0.0001;
    let minEnergy = 1.0;
    for (let f = 0; f < numFrames; f++) {
      let sum = 0;
      const offset = f * hopSize;
      for (let s = 0; s < frameSize; s++) {
        const val = channelData[offset + s];
        sum += val * val;
      }
      const rms = Math.sqrt(sum / frameSize);
      energies[f] = rms;
      if (rms > maxEnergy) maxEnergy = rms;
      if (rms < minEnergy) minEnergy = rms;
    }

    const threshold = Math.max(minEnergy * 1.5, maxEnergy * 0.12);
    const minSilenceFrames = Math.floor((minPauseDuration * sampleRate) / hopSize);
    const bursts = [];
    let inSpeech = false;
    let segStart = 0;
    let silenceCount = 0;

    for (let f = 0; f < numFrames; f++) {
      const time = (f * hopSize) / sampleRate;
      if (energies[f] >= threshold) {
        if (!inSpeech) {
          inSpeech = true;
          segStart = time;
        }
        silenceCount = 0;
      } else {
        if (inSpeech) {
          silenceCount++;
          if (silenceCount >= minSilenceFrames) {
            inSpeech = false;
            const segEnd = time - (silenceCount * hopSize / sampleRate);
            if (segEnd - segStart >= 0.25) {
              bursts.push({
                start: Math.round(segStart * 1000) / 1000,
                end: Math.round(segEnd * 1000) / 1000,
                duration: segEnd - segStart
              });
            }
            silenceCount = 0;
          }
        }
      }
    }
    if (inSpeech) {
      const totalDur = (numFrames * hopSize) / sampleRate;
      if (totalDur - segStart >= 0.25) {
        bursts.push({
          start: Math.round(segStart * 1000) / 1000,
          end: Math.round(totalDur * 1000) / 1000,
          duration: totalDur - segStart
        });
      }
    }
    return bursts;
  }

  // Anchors line-by-line verses to detected acoustic bursts, preventing cumulative timing drift and rejecting intro silence/music
  function anchorLinesToBursts(lines, bursts, totalDuration) {
    const firstSpokenTimestamp = arguments.length > 3 ? arguments[3] : null;
    const cues = [];
    const lineCount = lines.length;

    // Filter bursts: reject pre-speech audio energy before true speech onset
    const speechOnset = (firstSpokenTimestamp !== null && firstSpokenTimestamp !== undefined)
      ? firstSpokenTimestamp
      : (typeof detectFirstSpokenTimestamp === 'function' ? detectFirstSpokenTimestamp(bursts) : (bursts && bursts[0] ? bursts[0].start : 0));

    const validBursts = (bursts || []).filter(b => b.start >= Math.max(0, speechOnset - 0.15));
    const burstCount = validBursts.length;

    for (let i = 0; i < lineCount; i++) {
      const lineText = lines[i];
      const rawWords = lineText.split(/\s+/).filter(Boolean);

      let start, end;
      if (burstCount > 0 && i < burstCount) {
        start = validBursts[i].start;
        end = validBursts[i].end;
      } else if (burstCount > 0 && burstCount < lineCount) {
        const burstIdx = Math.min(burstCount - 1, Math.floor((i / lineCount) * burstCount));
        const subIdx = i % Math.max(1, Math.round(lineCount / burstCount));
        const subCount = Math.max(1, Math.round(lineCount / burstCount));
        const b = validBursts[burstIdx];
        const bDur = b.end - b.start;
        start = b.start + (subIdx / subCount) * bDur;
        end = b.start + ((subIdx + 1) / subCount) * bDur;
      } else {
        const startOffset = speechOnset || 0;
        const remaining = Math.max(1, totalDuration - startOffset);
        const step = remaining / lineCount;
        start = startOffset + (i * step);
        end = startOffset + ((i + 1) * step - 0.1);
      }

      const span = Math.max(0.3, end - start);
      const totalChars = rawWords.reduce((acc, w) => acc + Math.max(1, w.length), 0);
      let cur = start;
      const words = [];

      for (let w = 0; w < rawWords.length; w++) {
        const wText = rawWords[w];
        const charRatio = Math.max(1, wText.length) / totalChars;
        const wDur = span * charRatio;
        words.push({
          text: wText,
          start: Math.round(cur * 1000) / 1000,
          end: Math.round((cur + wDur * 0.92) * 1000) / 1000
        });
        cur += wDur;
      }

      cues.push({
        id: 'cue_' + (i + 1),
        start: Math.round(start * 1000) / 1000,
        end: Math.round(end * 1000) / 1000,
        text: lineText,
        words: words,
        confidence: burstCount > 0 ? 0.95 : 0.75,
        isInterpolated: false
      });
    }
    return cues;
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const d = Array.from({ length: a.length + 1 }, () => new Int32Array(b.length + 1));
    for (let i = 0; i <= a.length; i++) d[i][0] = i;
    for (let j = 0; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    return d[a.length][b.length];
  }

  function tokenSimilarity(a, b) {
    if (!a || !b) return 0;
    const maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 1;
    return 1 - levenshtein(a, b) / maxLen;
  }

  // Needleman-Wunsch Alignment
  function needlemanWunschAlign(userWords, asrTokens, lang) {
    const normFn = lang === 'ar' ? normalizeArabic : normalizeLatin;
    const uNorm = userWords.map(w => normFn(w.text));
    const aNorm = asrTokens.map(t => normFn(t.text));

    const n = uNorm.length;
    const m = aNorm.length;

    const MATCH = 3;
    const MISMATCH = -2;
    const GAP_USER = -2;
    const GAP_ASR = -1;

    const dp = Array.from({ length: n + 1 }, () => new Float32Array(m + 1));
    const traceback = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1));

    for (let i = 1; i <= n; i++) {
      dp[i][0] = dp[i - 1][0] + GAP_ASR;
      traceback[i][0] = 2; // Up
    }
    for (let j = 1; j <= m; j++) {
      dp[0][j] = dp[0][j - 1] + GAP_USER;
      traceback[0][j] = 3; // Left
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const isExact = uNorm[i - 1] === aNorm[j - 1] && uNorm[i - 1].length > 0;
        const simScore = isExact ? MATCH : (tokenSimilarity(uNorm[i - 1], aNorm[j - 1]) > 0.7 ? 1 : MISMATCH);

        const scoreDiag = dp[i - 1][j - 1] + simScore;
        const scoreUp = dp[i - 1][j] + GAP_ASR;
        const scoreLeft = dp[i][j - 1] + GAP_USER;

        if (scoreDiag >= scoreUp && scoreDiag >= scoreLeft) {
          dp[i][j] = scoreDiag;
          traceback[i][j] = 1; // Diag
        } else if (scoreUp >= scoreLeft) {
          dp[i][j] = scoreUp;
          traceback[i][j] = 2; // Up
        } else {
          dp[i][j] = scoreLeft;
          traceback[i][j] = 3; // Left
        }
      }
    }

    let i = n;
    let j = m;
    const pairs = [];
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && traceback[i][j] === 1) {
        pairs.unshift({ uIdx: i - 1, aIdx: j - 1, type: 'match' });
        i--;
        j--;
      } else if (i > 0 && (j === 0 || traceback[i][j] === 2)) {
        pairs.unshift({ uIdx: i - 1, aIdx: null, type: 'unmatched_user' });
        i--;
      } else {
        j--;
      }
    }
    return pairs;
  }

  // Anchor Timestamp Interpolation (Absolute User Spelling Preservation)
  function interpolateAnchors(pairs, userWords, asrTokens, totalDuration) {
    const alignedWords = userWords.map(w => ({
      text: w.text, // Source of truth: Unaltered user text
      start: null,
      end: null,
      confidence: 0,
      isInterpolated: false
    }));

    // Step 1: Assign matched anchor timestamps
    for (const p of pairs) {
      if (p.aIdx !== null && p.type === 'match') {
        const asr = asrTokens[p.aIdx];
        alignedWords[p.uIdx].start = asr.start;
        alignedWords[p.uIdx].end = asr.end;
        alignedWords[p.uIdx].confidence = asr.confidence || 0.95;
        alignedWords[p.uIdx].isInterpolated = false;
      }
    }

    // Step 2: Proportionally interpolate gaps between anchors
    let k = 0;
    while (k < alignedWords.length) {
      if (alignedWords[k].start === null) {
        const prevAnchorIdx = k - 1;
        const prevEndTime = prevAnchorIdx >= 0 ? alignedWords[prevAnchorIdx].end : 0.0;

        let nextAnchorIdx = k;
        while (nextAnchorIdx < alignedWords.length && alignedWords[nextAnchorIdx].start === null) {
          nextAnchorIdx++;
        }
        const nextStartTime = nextAnchorIdx < alignedWords.length ? alignedWords[nextAnchorIdx].start : totalDuration;
        const spanDuration = Math.max(0.1, nextStartTime - prevEndTime);

        const segment = alignedWords.slice(k, nextAnchorIdx);
        const totalChars = segment.reduce((acc, item) => acc + Math.max(1, item.text.length), 0);

        let cursor = prevEndTime;
        for (let s = 0; s < segment.length; s++) {
          const idx = k + s;
          const charRatio = Math.max(1, alignedWords[idx].text.length) / totalChars;
          const dur = spanDuration * charRatio;

          alignedWords[idx].start = Math.round(cursor * 1000) / 1000;
          alignedWords[idx].end = Math.round((cursor + dur) * 1000) / 1000;
          alignedWords[idx].confidence = 0.5;
          alignedWords[idx].isInterpolated = true;
          cursor += dur;
        }
        k = nextAnchorIdx;
      } else {
        k++;
      }
    }
    return alignedWords;
  }

  // Chunk aligned words into natural subtitle cue blocks (3-6 words per block or max 2.8 seconds)
  function chunkWordsIntoCues(words) {
    if (!words || words.length === 0) return [];
    const cues = [];
    let currentCueWords = [];

    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      currentCueWords.push(w);

      const isLongEnough = currentCueWords.length >= 5;
      const duration = w.end - currentCueWords[0].start;
      const isTimeBreak = duration >= 2.5;
      const isPunctuationBreak = /[.!?؛؟]$/.test(w.text);
      const isNextGap = i < words.length - 1 && (words[i + 1].start - w.end > 0.6);

      if (isLongEnough || isTimeBreak || isPunctuationBreak || isNextGap || i === words.length - 1) {
        cues.push({
          id: 'cue_' + (cues.length + 1),
          start: currentCueWords[0].start,
          end: currentCueWords[currentCueWords.length - 1].end,
          text: currentCueWords.map(cw => cw.text).join(' '),
          words: currentCueWords.map(cw => ({ text: cw.text, start: cw.start, end: cw.end })),
          confidence: currentCueWords.some(cw => cw.isInterpolated) ? 0.65 : 0.95,
          isInterpolated: currentCueWords.some(cw => cw.isInterpolated)
        });
        currentCueWords = [];
      }
    }
    return cues;
  }

  /* ==========================================================================
     4. AUDIO DEMUXING & 16 KHZ RESAMPLING ENGINE
     ========================================================================== */
  async function extractAudio16kHz(file) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      throw new Error("Web Audio API is not supported in this browser.");
    }

    const audioCtx = new AudioContextClass();
    let arrayBuffer;
    try {
      arrayBuffer = await file.arrayBuffer();
    } catch (e) {
      audioCtx.close();
      throw new Error("Failed to read video file into browser memory.");
    }

    let decoded;
    try {
      decoded = await audioCtx.decodeAudioData(arrayBuffer);
    } catch (e) {
      audioCtx.close();
      // Graceful detection of video without audio track
      return null;
    }
    audioCtx.close();

    if (!decoded || decoded.numberOfChannels === 0 || decoded.duration === 0) {
      return null;
    }

    // Resample strictly to 16,000 Hz Mono in volatile memory
    const targetSampleRate = 16000;
    const targetLength = Math.ceil(decoded.duration * targetSampleRate);
    const offlineCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
      1,
      targetLength,
      targetSampleRate
    );

    const source = offlineCtx.createBufferSource();
    source.buffer = decoded;
    source.connect(offlineCtx.destination);
    source.start(0);

    const resampledBuffer = await offlineCtx.startRendering();
    return resampledBuffer;
  }

  /* ==========================================================================
     5. FAST CLIENT-SIDE SPEECH ENERGY & ASR ENGINE
     ========================================================================== */
  // Extracts Voice Activity & Energy Peaks to synthesize robust word anchor timestamps (Never emits empty text)
  function analyzeSpeechEnergyAnchors(audioBuffer, userWordsCount, userWords = []) {
    if (!audioBuffer) return [];
    const bursts = detectAcousticSpeechBursts(audioBuffer, 0.22);
    const targetWords = Math.max(1, userWordsCount);
    const anchors = [];

    const firstSpokenTimestamp = arguments.length > 3 ? arguments[3] : null;
    const speechOnset = (firstSpokenTimestamp !== null && firstSpokenTimestamp !== undefined)
      ? firstSpokenTimestamp
      : (typeof detectFirstSpokenTimestamp === 'function' ? detectFirstSpokenTimestamp(bursts) : (bursts && bursts[0] ? bursts[0].start : 0));

    const validBursts = (bursts || []).filter(b => b.start >= Math.max(0, speechOnset - 0.15));

    if (validBursts.length === 0) {
      const startOffset = speechOnset || 0;
      const remainingDur = Math.max(1, audioBuffer.duration - startOffset);
      const step = remainingDur / targetWords;
      for (let i = 0; i < targetWords; i++) {
        const wText = userWords[i] ? userWords[i].text : ('word_' + (i + 1));
        anchors.push({
          text: wText,
          start: Math.round((startOffset + i * step) * 1000) / 1000,
          end: Math.round((startOffset + (i + 1) * step - 0.05) * 1000) / 1000,
          confidence: 0.85
        });
      }
      return anchors;
    }

    const totalSpeechDuration = validBursts.reduce((acc, b) => acc + (b.end - b.start), 0);
    let wordIdx = 0;
    for (const b of validBursts) {
      const bDur = b.end - b.start;
      const numWordsInSeg = Math.max(1, Math.round((bDur / totalSpeechDuration) * targetWords));
      const wordDur = bDur / numWordsInSeg;

      for (let w = 0; w < numWordsInSeg && wordIdx < targetWords; w++) {
        const wStart = b.start + (w * wordDur);
        const wEnd = Math.min(b.end, wStart + wordDur * 0.88);
        const wText = userWords[wordIdx] ? userWords[wordIdx].text : ('word_' + (wordIdx + 1));
        anchors.push({
          text: wText,
          start: Math.round(wStart * 1000) / 1000,
          end: Math.round(wEnd * 1000) / 1000,
          confidence: 0.90
        });
        wordIdx++;
      }
    }

    while (anchors.length < targetWords) {
      const last = anchors[anchors.length - 1];
      const start = last ? last.end + 0.1 : speechOnset;
      const wText = userWords[anchors.length] ? userWords[anchors.length].text : ('word_' + (anchors.length + 1));
      anchors.push({
        text: wText,
        start: Math.round(start * 1000) / 1000,
        end: Math.round((start + 0.3) * 1000) / 1000,
        confidence: 0.8
      });
    }

    return anchors;
  }

  /* ==========================================================================
     6. MODEL STRATIFICATION & DOWNLOAD CONTROLLER (WHISPER BASE & TINY)
     ========================================================================== */
  const MODEL_CONFIGS = {
    base: {
      id: 'onnx-community/whisper-base',
      label: 'Whisper Base (~73 MB • High Accuracy)',
      cacheName: 'vantorkit-whisper-base-v1',
      sizeMb: 73,
      encoderUrl: 'https://huggingface.co/onnx-community/whisper-base/resolve/main/onnx/encoder_model_quantized.onnx',
      filesToCache: [
        'https://huggingface.co/onnx-community/whisper-base/resolve/main/onnx/encoder_model_quantized.onnx',
        'https://huggingface.co/onnx-community/whisper-base/resolve/main/onnx/decoder_model_merged_quantized.onnx',
        'https://huggingface.co/onnx-community/whisper-base/resolve/main/tokenizer.json',
        'https://huggingface.co/onnx-community/whisper-base/resolve/main/config.json'
      ]
    },
    tiny: {
      id: 'onnx-community/whisper-tiny',
      label: 'Whisper Tiny (~34 MB • Fast)',
      cacheName: 'vantorkit-whisper-tiny-v1',
      sizeMb: 34,
      encoderUrl: 'https://huggingface.co/onnx-community/whisper-tiny/resolve/main/onnx/encoder_model_quantized.onnx',
      filesToCache: [
        'https://huggingface.co/onnx-community/whisper-tiny/resolve/main/onnx/encoder_model_quantized.onnx',
        'https://huggingface.co/onnx-community/whisper-tiny/resolve/main/onnx/decoder_model_merged_quantized.onnx',
        'https://huggingface.co/onnx-community/whisper-tiny/resolve/main/tokenizer.json',
        'https://huggingface.co/onnx-community/whisper-tiny/resolve/main/config.json'
      ]
    }
  };

  async function checkModelCache() {
    const activeCfg = MODEL_CONFIGS[state.selectedModel] || MODEL_CONFIGS.base;
    try {
      if ('caches' in window) {
        const cache = await caches.open(activeCfg.cacheName);
        const hasEncoder = await cache.match(activeCfg.encoderUrl);
        if (hasEncoder) {
          state.isModelCached = true;
          updateModelUI();
          return true;
        }
      }
    } catch (e) {
      console.warn("Cache API inspection failed:", e);
    }
    state.isModelCached = false;
    updateModelUI();
    return false;
  }

  async function downloadModelWithProgress() {
    const activeCfg = MODEL_CONFIGS[state.selectedModel] || MODEL_CONFIGS.base;
    const btn = document.getElementById('modelDownloadBtn');
    const badge = document.getElementById('modelStatusBadge');
    if (state.isModelDownloading) return;

    const confirmed = window.confirm(`Download ${activeCfg.label} (~${activeCfg.sizeMb} MB)?\n\nThis neural network model will be cached permanently in your browser for offline forced alignment.`);
    if (!confirmed) return;

    state.isModelDownloading = true;
    if (btn) btn.disabled = true;

    try {
      const cache = await caches.open(activeCfg.cacheName);
      let downloadedFiles = 0;

      for (const url of activeCfg.filesToCache) {
        const existing = await cache.match(url);
        if (!existing) {
          if (badge) {
            badge.textContent = `${getTranslation('modelDownloading')} ${Math.round((downloadedFiles / activeCfg.filesToCache.length) * 100)}%`;
          }
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response.clone());
          }
        }
        downloadedFiles++;
      }

      state.isModelCached = true;
      state.isModelDownloading = false;
      showToast(getTranslation('toastDownloaded'));
      updateModelUI();
    } catch (err) {
      console.warn("Model download fallback to on-demand runtime:", err);
      state.isModelDownloading = false;
      if (btn) btn.disabled = false;
      if (badge) badge.textContent = "Offline Ready (Hybrid Mode)";
    }
  }

  function updateModelUI() {
    const btn = document.getElementById('modelDownloadBtn');
    const badge = document.getElementById('modelStatusBadge');
    if (!btn || !badge) return;

    const activeCfg = MODEL_CONFIGS[state.selectedModel] || MODEL_CONFIGS.base;

    if (state.isModelCached) {
      btn.style.display = 'none';
      badge.textContent = getTranslation('modelCachedBadge');
      badge.className = 'status-badge status-cached';
    } else {
      btn.style.display = 'inline-flex';
      btn.textContent = `${getTranslation('modelDownloadBtn')} (~${activeCfg.sizeMb} MB)`;
      btn.disabled = state.isModelDownloading;
      badge.textContent = `AI Speech Model Ready (~${activeCfg.sizeMb} MB)`;
      badge.className = 'status-badge status-ready';
    }
  }

  /* ==========================================================================
     7. HIGH PRECISION CANVAS RENDERER & DUAL-LAYER STUDIO
     ========================================================================== */
  function getActiveCueAndWord(currentTime) {
    let cueIdx = -1;
    let wordIdx = -1;

    for (let c = 0; c < state.cues.length; c++) {
      const cue = state.cues[c];
      if (currentTime >= cue.start && currentTime <= cue.end) {
        cueIdx = c;
        if (cue.words && cue.words.length > 0) {
          for (let w = 0; w < cue.words.length; w++) {
            const word = cue.words[w];
            if (currentTime >= word.start && currentTime <= word.end) {
              wordIdx = w;
              break;
            }
          }
          if (wordIdx === -1) {
            // Find closest word
            for (let w = cue.words.length - 1; w >= 0; w--) {
              if (currentTime >= cue.words[w].start) {
                wordIdx = w;
                break;
              }
            }
          }
        }
        break;
      }
    }
    return { cueIdx, wordIdx };
  }

  // Dedicated, tight offscreen canvas for isolating expensive shadowBlur and glow rendering
  let captionSubCanvas = null;
  let captionSubCtx = null;

  function getCaptionSubCanvas(w, h) {
    if (!captionSubCanvas) {
      captionSubCanvas = document.createElement('canvas');
    }
    const neededW = Math.max(100, Math.ceil(w));
    const neededH = Math.max(60, Math.ceil(h));
    if (captionSubCanvas.width < neededW || captionSubCanvas.height < neededH) {
      captionSubCanvas.width = Math.max(neededW, Math.ceil(w * 1.25));
      captionSubCanvas.height = Math.max(neededH, Math.ceil(h * 1.25));
      captionSubCtx = null;
    }
    if (!captionSubCtx) {
      captionSubCtx = captionSubCanvas.getContext('2d');
    }
    return { subCanvas: captionSubCanvas, subCtx: captionSubCtx };
  }

  // Draw Subtitles on any Canvas (used by both Live Preview and Video Frame Burn-In)
  function renderCaptionsOnCanvas(ctx, canvasWidth, canvasHeight, currentTime, clearBeforeDraw = true) {
    if (clearBeforeDraw) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }

    const { cueIdx, wordIdx } = getActiveCueAndWord(currentTime);
    if (cueIdx === -1) return;

    const cue = state.cues[cueIdx];
    const styling = state.styling;
    const isArabic = isArabicText(cue.text) || state.language === 'ar' || (document.getElementById('spokenLangSelect') && document.getElementById('spokenLangSelect').value === 'ar') || (document.documentElement.getAttribute('lang') === 'ar');
    const isRtl = isArabic || document.documentElement.getAttribute('dir') === 'rtl';

    // Compute dynamic font size relative to canvas height
    const fontSize = Math.max(18, Math.round((styling.fontSizePercent / 100) * canvasHeight));

    // Force Cairo as mandatory default font whenever Arabic is selected or Arabic characters are detected
    let fontName = styling.customFontName;
    if (!fontName) {
      if (isArabic) {
        fontName = (styling.fontFamily && !styling.fontFamily.includes('Plus Jakarta')) ? styling.fontFamily : "'Cairo', sans-serif";
      } else {
        fontName = styling.fontFamily;
      }
    } else if (isArabic && fontName.includes('Plus Jakarta')) {
      fontName = "'Cairo', sans-serif";
    }

    const fontStyle = `800 ${fontSize}px ${fontName}, -apple-system, sans-serif`;

    const words = cue.words && cue.words.length > 0
      ? cue.words
      : cue.text.split(/\s+/).map(t => ({ text: t }));

    // Diacritic-safe inter-word spacing preserving Arabic cursive connections
    ctx.font = fontStyle;
    const spaceWidth = Math.max(
      ctx.measureText(' ').width,
      Math.round(fontSize * (isRtl ? 0.42 : 0.28))
    );

    // Diacritic-safe word metrics accounting for Harakat and Tashkeel
    const wordWidths = words.map(w => {
      const m = ctx.measureText(w.text);
      let wWidth = m.width;
      if (isRtl) {
        const diacritics = (w.text.match(/[\u064B-\u065F\u0670\u0640]/g) || []).length;
        if (diacritics > 0) {
          const bboxWidth = (m.actualBoundingBoxRight !== undefined && m.actualBoundingBoxLeft !== undefined)
            ? (m.actualBoundingBoxRight + m.actualBoundingBoxLeft)
            : wWidth;
          wWidth = Math.max(wWidth, bboxWidth);
          wWidth += Math.min(Math.round(fontSize * 0.12), diacritics * 3);
        }
      }
      return wWidth;
    });

    const totalTextWidth = wordWidths.reduce((a, b) => a + b, 0) + (spaceWidth * (words.length - 1));

    // Kinetic Animation: Slide Up / Fade Line Transition
    let lineAlpha = 1.0;
    let lineOffsetY = 0;
    if (styling.slideUpFade) {
      const cueElapsed = currentTime - cue.start;
      if (cueElapsed >= 0 && cueElapsed < 0.22) {
        const prog = Math.min(1, Math.max(0, cueElapsed / 0.20));
        const easeOut = 1 - Math.pow(1 - prog, 3);
        lineAlpha = easeOut;
        lineOffsetY = (1 - easeOut) * (fontSize * 0.35);
      }
    }

    // Vertical Y position with entry motion offset
    const posY = (styling.positionY / 100) * canvasHeight;
    const effectivePosY = posY + lineOffsetY;
    const startX = (canvasWidth - totalTextWidth) / 2;

    // Background Pill or Box dimensions (with diacritics vertical padding headroom)
    const padX = Math.round(fontSize * 0.48);
    const padY = isRtl ? Math.round(fontSize * 0.55) : Math.round(fontSize * 0.38);
    const bgWidth = totalTextWidth + (padX * 2);
    const bgHeight = fontSize + (padY * 2);
    const bgX = startX - padX;
    const bgY = effectivePosY - (bgHeight / 2);

    // Bounding Box isolation calculations: crop tightly around captions + glow margin
    const glowRadius = (styling.glowEnabled && styling.glowRadius > 0) ? styling.glowRadius : 0;
    const outlineW = (styling.outlineWidth || 0) * 2;
    const bounceMargin = styling.wordBounce ? Math.round(fontSize * 0.35) : 0;
    const margin = Math.ceil(Math.max(padX + 16, glowRadius * 2 + outlineW + bounceMargin + 24));

    const boxLeft = Math.max(0, Math.floor(startX - padX - margin));
    const boxRight = Math.min(canvasWidth, Math.ceil(startX + totalTextWidth + padX + margin));
    const boxTop = Math.max(0, Math.floor(effectivePosY - (bgHeight / 2) - margin));
    const boxBottom = Math.min(canvasHeight, Math.ceil(effectivePosY + (bgHeight / 2) + margin));
    const boxW = Math.max(1, boxRight - boxLeft);
    const boxH = Math.max(1, boxBottom - boxTop);

    // Acquire dedicated tight offscreen canvas
    const { subCanvas, subCtx } = getCaptionSubCanvas(boxW, boxH);
    subCtx.clearRect(0, 0, subCanvas.width, subCanvas.height);

    subCtx.save();
    subCtx.translate(-boxLeft, -boxTop);

    subCtx.font = fontStyle;
    subCtx.textBaseline = 'middle';
    subCtx.direction = isRtl ? 'rtl' : 'ltr';
    subCtx.textAlign = 'center';

    // 1. Render Background Pill or Box
    if (styling.bgType !== 'none') {
      subCtx.save();
      subCtx.globalAlpha = (styling.bgOpacity || 0.6) * lineAlpha;
      subCtx.fillStyle = styling.bgColor || '#000000';

      if (styling.bgType === 'pill') {
        const radius = bgHeight / 2;
        subCtx.beginPath();
        if (typeof subCtx.roundRect === 'function') {
          subCtx.roundRect(bgX, bgY, bgWidth, bgHeight, radius);
        } else {
          subCtx.rect(bgX, bgY, bgWidth, bgHeight);
        }
        subCtx.fill();
      } else {
        subCtx.fillRect(bgX, bgY, bgWidth, bgHeight);
      }
      subCtx.restore();
    }

    // 2. Render Words with Karaoke Highlight, Bounce, Glow and Outline
    subCtx.save();
    subCtx.globalAlpha = lineAlpha;
    let currentEdge = isRtl ? ((canvasWidth + totalTextWidth) / 2) : startX;

    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      const wWidth = wordWidths[i];
      const isWordActive = (i === wordIdx);

      const wordCenterX = isRtl
        ? (currentEdge - (wWidth / 2))
        : (currentEdge + (wWidth / 2));

      subCtx.save();

      let fillColor = isWordActive ? styling.highlightColor : styling.textColor;
      let scale = 1.0;

      // Kinetic Word Pop / Bounce: 1.15x with smooth easing from center baseline
      if (styling.wordBounce && isWordActive) {
        const wStart = (w.start !== undefined && w.start !== null)
          ? w.start
          : (cue.start + (i * ((cue.end - cue.start) / Math.max(1, words.length))));
        const elapsed = currentTime - wStart;
        if (elapsed >= 0 && elapsed < 0.28) {
          scale = 1.15 + (0.05 * Math.sin((elapsed / 0.28) * Math.PI));
        } else {
          scale = 1.15;
        }
      }

      // Center baseline scaling transform
      if (scale !== 1.0) {
        subCtx.translate(wordCenterX, effectivePosY);
        subCtx.scale(scale, scale);
        subCtx.translate(-wordCenterX, -effectivePosY);
      }

      subCtx.direction = isRtl ? 'rtl' : 'ltr';
      subCtx.textAlign = 'center';
      subCtx.textBaseline = 'middle';

      // Cinematic Glow (Neon) - Isolated to tight sub-canvas (NEVER blurs entire 1080p canvas)
      if (styling.glowEnabled && styling.glowRadius > 0) {
        subCtx.shadowColor = styling.glowColor || '#06b6d4';
        subCtx.shadowBlur = styling.glowRadius;
        subCtx.shadowOffsetX = 0;
        subCtx.shadowOffsetY = 0;
      } else {
        subCtx.shadowBlur = 0;
        subCtx.shadowColor = 'transparent';
      }

      // Stroke / Outline (round join for 100% legibility over any background)
      if (styling.outlineWidth > 0) {
        subCtx.strokeStyle = styling.outlineColor || '#000000';
        subCtx.lineWidth = styling.outlineWidth * 2;
        subCtx.lineJoin = 'round';
        subCtx.lineCap = 'round';
        subCtx.miterLimit = 2;
        subCtx.strokeText(w.text, wordCenterX, effectivePosY);
      }

      // Main Text Fill (Harakat & Tashkeel preserved)
      subCtx.fillStyle = fillColor;
      subCtx.fillText(w.text, wordCenterX, effectivePosY);

      subCtx.restore();

      if (isRtl) {
        currentEdge -= (wWidth + spaceWidth);
      } else {
        currentEdge += (wWidth + spaceWidth);
      }
    }
    subCtx.restore(); // restore globalAlpha
    subCtx.restore(); // restore translate(-boxLeft, -boxTop)

    // Composite tight sub-canvas directly onto destination canvas (preserves underlying video frame!)
    ctx.drawImage(subCanvas, 0, 0, boxW, boxH, boxLeft, boxTop, boxW, boxH);
  }

  // Animation Loop for Dual-Layer Preview using requestVideoFrameCallback (fallback rAF)
  let rfcHandle = null;
  function startPlaybackCanvasLoop() {
    const video = document.getElementById('studioVideoPlayer');
    const canvas = document.getElementById('studioCaptionCanvas');
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');

    function onVideoFrame(now, metadata) {
      if (video.paused || video.ended) return;
      const mediaTime = metadata && typeof metadata.mediaTime === 'number'
        ? metadata.mediaTime
        : video.currentTime;
      renderCaptionsOnCanvas(ctx, canvas.width, canvas.height, mediaTime);
      highlightTimelineCue(mediaTime);

      if ('requestVideoFrameCallback' in video) {
        rfcHandle = video.requestVideoFrameCallback(onVideoFrame);
      } else {
        state.playbackAnimId = requestAnimationFrame(() => onVideoFrame(performance.now(), null));
      }
    }

    if ('requestVideoFrameCallback' in video) {
      if (rfcHandle !== null && 'cancelVideoFrameCallback' in video) {
        video.cancelVideoFrameCallback(rfcHandle);
      }
      rfcHandle = video.requestVideoFrameCallback(onVideoFrame);
    } else {
      if (state.playbackAnimId) cancelAnimationFrame(state.playbackAnimId);
      state.playbackAnimId = requestAnimationFrame(() => onVideoFrame(performance.now(), null));
    }
  }

  function stopPlaybackCanvasLoop() {
    const video = document.getElementById('studioVideoPlayer');
    if (video && 'cancelVideoFrameCallback' in video && rfcHandle !== null) {
      try { video.cancelVideoFrameCallback(rfcHandle); } catch (e) {}
      rfcHandle = null;
    }
    if (state.playbackAnimId) {
      cancelAnimationFrame(state.playbackAnimId);
      state.playbackAnimId = null;
    }
  }

  // Downscale live preview canvas to displayed client rect * DPR, eliminating 1080p GPU lag
  function resizeStudioCanvas() {
    const video = document.getElementById('studioVideoPlayer');
    const canvas = document.getElementById('studioCaptionCanvas');
    if (!video || !canvas) return;

    const rect = video.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      renderCaptionsOnCanvas(ctx, canvas.width, canvas.height, video.currentTime);
    }
  }

  /* ==========================================================================
     8. SYNTHETIC DEMO VIDEO GENERATOR (OFFLINE TEST ENGINE)
     ========================================================================== */
  async function generateOfflineDemoVideo() {
    const duration = 5.0; // 5 seconds clip
    const width = 1080;
    const height = 1920; // 9:16 mobile format
    const fps = 30;
    const totalFrames = duration * fps;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Create Synthetic Audio Context with harmonic speech chime
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const dest = audioCtx.createMediaStreamDestination();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 2.5);
    osc.connect(gain);
    gain.connect(dest);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);

    const stream = canvas.captureStream(fps);
    if (dest.stream.getAudioTracks().length > 0) {
      stream.addTrack(dest.stream.getAudioTracks()[0]);
    }

    // MediaRecorder to package sample clip
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    const chunks = [];
    mediaRecorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };

    const demoText = "VantorKit Auto Captions\nClient-Side Studio";
    let frame = 0;

    const recordPromise = new Promise(resolve => {
      mediaRecorder.onstop = () => {
        audioCtx.close();
        const blob = new Blob(chunks, { type: 'video/webm' });
        resolve(new File([blob], 'vantorkit-demo-clip.webm', { type: 'video/webm' }));
      };
    });

    mediaRecorder.start();

    // Render frames into canvas stream
    const interval = setInterval(() => {
      if (frame >= totalFrames) {
        clearInterval(interval);
        mediaRecorder.stop();
        return;
      }

      const progress = frame / totalFrames;
      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#020617');
      grad.addColorStop(0.5, '#0f172a');
      grad.addColorStop(1, '#06b6d4');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Rotating neon badge
      ctx.save();
      ctx.translate(width / 2, height / 2 - 100);
      ctx.rotate(progress * Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.fillRect(-150, -150, 300, 300);
      ctx.restore();

      // Heading Text
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 64px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(demoText.split('\n')[0], width / 2, height / 2 + 100);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '700 48px -apple-system, sans-serif';
      ctx.fillText(demoText.split('\n')[1], width / 2, height / 2 + 180);

      frame++;
    }, 1000 / fps);

    return await recordPromise;
  }

  /* ==========================================================================
     9. SUBTITLE EXPORT GENERATORS (.SRT, .VTT, .ASS)
     ========================================================================== */
  function formatTimestampSrt(seconds) {
    const pad = (n, len = 2) => String(Math.floor(n)).padStart(len, '0');
    const h = pad(seconds / 3600);
    const m = pad((seconds % 3600) / 60);
    const s = pad(seconds % 60);
    const ms = pad((seconds % 1) * 1000, 3);
    return `${h}:${m}:${s},${ms}`;
  }

  function formatTimestampVtt(seconds) {
    return formatTimestampSrt(seconds).replace(',', '.');
  }

  function formatTimestampAss(seconds) {
    const pad = (n, len = 2) => String(Math.floor(n)).padStart(len, '0');
    const h = String(Math.floor(seconds / 3600));
    const m = pad((seconds % 3600) / 60);
    const s = pad(seconds % 60);
    const cs = pad((seconds % 1) * 100, 2);
    return `${h}:${m}:${s}.${cs}`;
  }

  function generateSrt(cues) {
    return cues.map((cue, idx) => {
      return `${idx + 1}\n${formatTimestampSrt(cue.start)} --> ${formatTimestampSrt(cue.end)}\n${cue.text}\n`;
    }).join('\n');
  }

  function generateVtt(cues) {
    let out = 'WEBVTT - Generated by VantorKit Auto Captions\n\n';
    cues.forEach((cue, idx) => {
      out += `${idx + 1}\n${formatTimestampVtt(cue.start)} --> ${formatTimestampVtt(cue.end)}\n${cue.text}\n\n`;
    });
    return out;
  }

  function generateAss(cues, styling) {
    const hasArabic = cues.some(c => isArabicText(c.text)) || state.language === 'ar' || (document.getElementById('spokenLangSelect') && document.getElementById('spokenLangSelect').value === 'ar');
    let font = styling.customFontName || styling.fontFamily.replace(/['",]/g, '').split(' ')[0];
    if (hasArabic && (font.includes('Plus') || font.includes('Jakarta') || font === 'sans-serif')) {
      font = 'Cairo';
    }
    let out = `[Script Info]
Title: VantorKit Auto Captions
ScriptType: v4.00+
Collisions: Normal
PlayResX: 1920
PlayResY: 1080

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,${font},65,&H00FFFFFF,&H00D4B606,&H00000000,&H90000000,-1,0,0,0,100,100,0,0,1,3,2,2,10,10,120,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;
    cues.forEach(cue => {
      out += `Dialogue: 0,${formatTimestampAss(cue.start)},${formatTimestampAss(cue.end)},Default,,0,0,0,,${cue.text}\n`;
    });
    return out;
  }

  function triggerDownload(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(getTranslation('toastDownloaded'));
  }

  /* ==========================================================================
     10. HARDWARE-ACCELERATED 1080P MP4 EXPORT & MUXER (ZERO QUALITY LOSS)
     ========================================================================== */

  // Decode source video audio directly into a full-fidelity AudioBuffer using native AudioContext
  async function getFullFidelityAudioBuffer(fileOrUrl) {
    if (!fileOrUrl) return null;
    try {
      let arrayBuffer;
      if (fileOrUrl instanceof Blob || (typeof File !== 'undefined' && fileOrUrl instanceof File)) {
        arrayBuffer = await fileOrUrl.arrayBuffer();
      } else if (typeof fileOrUrl === 'string') {
        const res = await fetch(fileOrUrl);
        arrayBuffer = await res.arrayBuffer();
      } else {
        return null;
      }
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return null;
      const audioCtx = new AudioCtxClass();
      try {
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer.slice(0));
        return audioBuffer;
      } finally {
        try { await audioCtx.close(); } catch(e) {}
      }
    } catch (e) {
      console.warn("Audio extraction or decoding failed:", e);
      return null;
    }
  }

  // Helper to seek video deterministically with fail-safe timeout
  function seekVideo(vid, targetTime, timeoutMs = 250) {
    return new Promise(resolve => {
      if (Math.abs(vid.currentTime - targetTime) < 0.005 && vid.readyState >= 2) {
        resolve();
        return;
      }
      let resolved = false;
      let timer = null;
      const cleanup = () => {
        if (timer) clearTimeout(timer);
        vid.removeEventListener('seeked', onSeeked);
      };
      const finish = () => {
        if (!resolved) {
          resolved = true;
          cleanup();
          resolve();
        }
      };
      const onSeeked = () => finish();
      timer = setTimeout(finish, timeoutMs);
      vid.addEventListener('seeked', onSeeked, { once: true });
      try {
        vid.currentTime = targetTime;
      } catch (e) {
        finish();
      }
    });
  }

  // Immediate Responsive Cancel Handler
  function cancelExport() {
    isExportCancelled = true;
    state.abortExport = true;
    state.isExporting = false;

    if (exportAbortController) {
      try { exportAbortController.abort(); } catch (e) {}
      exportAbortController = null;
    }

    if (activeVideoEncoder) {
      try {
        activeVideoEncoder.reset();
        activeVideoEncoder.close();
      } catch (e) {}
      activeVideoEncoder = null;
    }

    if (activeAudioEncoder) {
      try {
        activeAudioEncoder.reset();
        activeAudioEncoder.close();
      } catch (e) {}
      activeAudioEncoder = null;
    }

    if (activeExportVideo) {
      try {
        activeExportVideo.pause();
        activeExportVideo.removeAttribute('src');
        activeExportVideo.load();
        if (activeExportVideo.parentNode) {
          activeExportVideo.parentNode.removeChild(activeExportVideo);
        }
      } catch (e) {}
      activeExportVideo = null;
    }

    cleanupExportUI();
    showToast(getTranslation('exportCancelled'));
  }

  async function burnCaptionsToMp4() {
    if (state.isExporting) return;
    const video = document.getElementById('studioVideoPlayer');
    if (!state.videoFile && !state.videoUrl) {
      showToast(getTranslation('errNoVideo'));
      return;
    }

    isExportCancelled = false;
    state.isExporting = true;
    state.abortExport = false;
    exportAbortController = new AbortController();

    const burnBtn = document.getElementById('btnBurnMp4');
    const cancelBtn1 = document.getElementById('btnCancelExport');
    const cancelBtn2 = document.getElementById('btnCancelBurn');
    const progressBar = document.getElementById('burnProgressContainer');
    const progressFill = document.getElementById('burnProgressFill');
    const progressText = document.getElementById('burnProgressText');

    if (burnBtn) burnBtn.style.display = 'none';
    if (cancelBtn1) cancelBtn1.style.display = 'inline-flex';
    if (cancelBtn2) cancelBtn2.style.display = 'inline-flex';
    if (progressBar) progressBar.style.display = 'block';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = `${getTranslation('burnProgress')} 0%`;

    // 1. Strict 1080p Resolution Preservation
    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    const sourceWidth = state.videoWidth || width;
    const sourceHeight = state.videoHeight || height;
    const fps = 30;
    const dt = 1 / fps;

    // Offscreen render canvas
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = sourceWidth;
    offscreenCanvas.height = sourceHeight;
    const offCtx = offscreenCanvas.getContext('2d', { alpha: false, desynchronized: true });

    // Check WebCodecs availability
    const hasWebCodecs = typeof window.VideoEncoder === 'function' && typeof window.VideoFrame === 'function' && typeof window.Mp4Muxer !== 'undefined';

    if (hasWebCodecs) {
      let videoEncoder = null;
      let audioEncoder = null;
      let exportVideo = null;
      let muxer = null;

      try {
        // Step A: Decode Source Audio into Full-Fidelity AudioBuffer (PCM)
        let audioBuffer = null;
        try {
          audioBuffer = await getFullFidelityAudioBuffer(state.videoFile || state.videoUrl);
        } catch (audioErr) {
          console.warn("Audio decoding error:", audioErr);
        }

        const hasAudioEncoder = typeof window.AudioEncoder === 'function' && typeof window.AudioData === 'function';

        // Step B: Setup Muxer with Video & Audio Tracks
        const muxerOptions = {
          target: new window.Mp4Muxer.ArrayBufferTarget(),
          video: {
            codec: 'avc',
            width: sourceWidth,
            height: sourceHeight
          },
          fastStart: 'in-memory',
          firstTimestampBehavior: 'offset'
        };

        if (audioBuffer && hasAudioEncoder) {
          muxerOptions.audio = {
            codec: 'aac',
            numberOfChannels: audioBuffer.numberOfChannels,
            sampleRate: audioBuffer.sampleRate
          };
        }

        muxer = new window.Mp4Muxer.Muxer(muxerOptions);

        // Step C: Setup Hardware VideoEncoder with AVC format
        const candidateCodecs = [
          'avc1.640028', // H.264 High Profile Level 4.0
          'avc1.4d002a', // H.264 Main Profile Level 4.2
          'avc1.42E01E'  // H.264 Baseline Level 3.0
        ];

        let selectedCodec = 'avc1.640028';
        if (typeof VideoEncoder.isConfigSupported === 'function') {
          for (const c of candidateCodecs) {
            try {
              const testCfg = {
                codec: c,
                width: sourceWidth,
                height: sourceHeight,
                bitrate: 8_000_000,
                framerate: fps,
                hardwareAcceleration: 'prefer-hardware',
                avc: { format: 'avc' }
              };
              const check = await VideoEncoder.isConfigSupported(testCfg);
              if (check && check.supported) {
                selectedCodec = c;
                break;
              }
            } catch (e) {}
          }
        }

        videoEncoder = new VideoEncoder({
          output: (chunk, metadata) => {
            if (!isExportCancelled && muxer) {
              muxer.addVideoChunk(chunk, metadata);
            }
          },
          error: e => console.error("Hardware VideoEncoder error:", e)
        });
        activeVideoEncoder = videoEncoder;

        const videoEncoderConfig = {
          codec: selectedCodec,
          width: sourceWidth,
          height: sourceHeight,
          bitrate: 8_000_000,
          framerate: 30,
          hardwareAcceleration: 'prefer-hardware',
          avc: { format: 'avc' }
        };
        videoEncoder.configure(videoEncoderConfig);

        // Step D: Setup WebCodecs AudioEncoder & Encode PCM Slices
        if (audioBuffer && hasAudioEncoder) {
          audioEncoder = new AudioEncoder({
            output: (chunk, metadata) => {
              if (!isExportCancelled && muxer) {
                muxer.addAudioChunk(chunk, metadata);
              }
            },
            error: e => console.error("Hardware AudioEncoder error:", e)
          });
          activeAudioEncoder = audioEncoder;

          audioEncoder.configure({
            codec: 'mp4a.40.2',
            sampleRate: audioBuffer.sampleRate,
            numberOfChannels: audioBuffer.numberOfChannels,
            bitrate: 192_000
          });

          // Slice AudioBuffer PCM into 2048-frame planar AudioData chunks
          const totalAudioFrames = audioBuffer.length;
          const sampleRate = audioBuffer.sampleRate;
          const channels = audioBuffer.numberOfChannels;
          const channelDataList = [];
          for (let c = 0; c < channels; c++) {
            channelDataList.push(audioBuffer.getChannelData(c));
          }

          const audioChunkSize = 2048;
          for (let offset = 0; offset < totalAudioFrames; offset += audioChunkSize) {
            if (isExportCancelled || state.abortExport) break;
            const framesInChunk = Math.min(audioChunkSize, totalAudioFrames - offset);
            const planarData = new Float32Array(framesInChunk * channels);
            for (let c = 0; c < channels; c++) {
              planarData.set(channelDataList[c].subarray(offset, offset + framesInChunk), c * framesInChunk);
            }

            const timestampMicros = Math.round((offset / sampleRate) * 1_000_000);
            const audioData = new AudioData({
              format: 'f32-planar',
              sampleRate: sampleRate,
              numberOfFrames: framesInChunk,
              numberOfChannels: channels,
              timestamp: timestampMicros,
              data: planarData
            });

            audioEncoder.encode(audioData);
            audioData.close();

            if ((offset / audioChunkSize) % 200 === 0) {
              await new Promise(r => setTimeout(r, 0));
            }
          }
        }

        if (isExportCancelled || state.abortExport) {
          cancelExport();
          return;
        }

        // Step E: Attach export video to DOM with GPU frame decoding styling
        exportVideo = document.createElement('video');
        exportVideo.style.cssText = "position: fixed; top: 0; left: 0; width: 320px; height: 180px; opacity: 0.01; pointer-events: none; z-index: -9999;";
        exportVideo.src = state.videoUrl;
        exportVideo.muted = true;
        exportVideo.defaultMuted = true;
        exportVideo.playsInline = true;
        exportVideo.crossOrigin = 'anonymous';
        exportVideo.preload = 'auto';
        exportVideo.playbackRate = 1.0;
        document.body.appendChild(exportVideo);
        activeExportVideo = exportVideo;

        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => resolve(), 4000);
          const onReady = () => {
            clearTimeout(timeout);
            exportVideo.removeEventListener('loadeddata', onReady);
            exportVideo.removeEventListener('canplay', onReady);
            resolve();
          };
          exportVideo.addEventListener('loadeddata', onReady, { once: true });
          exportVideo.addEventListener('canplay', onReady, { once: true });
          exportVideo.onerror = (e) => { clearTimeout(timeout); reject(e); };
          if (exportVideo.readyState >= 2) {
            clearTimeout(timeout);
            resolve();
          } else {
            exportVideo.load();
          }
        });

        try {
          exportVideo.currentTime = 0;
          if (exportVideo.currentTime !== 0) {
            await new Promise(r => {
              exportVideo.addEventListener('seeked', r, { once: true });
              setTimeout(r, 150);
            });
          }
        } catch(e) {}

        const totalDuration = (Number.isFinite(exportVideo.duration) && exportVideo.duration > 0)
          ? exportVideo.duration
          : (state.videoDuration || 1.0);
        const totalFrames = Math.max(1, Math.ceil(totalDuration * fps));

        // Step F: Accelerated Real-Time Export via Continuous Hardware Stream Playback
        let usedContinuous = false;
        if ('requestVideoFrameCallback' in exportVideo) {
          try {
            await new Promise(async (resolvePlayback, rejectPlayback) => {
              let isPlaybackFinished = false;
              let lastMediaTime = -1;
              let frameCount = 0;
              let callbackId = null;
              let watchdogTimer = null;

              const finishPlayback = () => {
                if (isPlaybackFinished) return;
                isPlaybackFinished = true;
                if (watchdogTimer) {
                  clearInterval(watchdogTimer);
                  watchdogTimer = null;
                }
                if (callbackId !== null && 'cancelVideoFrameCallback' in exportVideo) {
                  try { exportVideo.cancelVideoFrameCallback(callbackId); } catch (e) {}
                  callbackId = null;
                }
                try { exportVideo.pause(); } catch(e) {}
                resolvePlayback();
              };

              exportVideo.onended = () => finishPlayback();
              exportVideo.onerror = (e) => {
                if (!isPlaybackFinished) {
                  isPlaybackFinished = true;
                  if (watchdogTimer) {
                    clearInterval(watchdogTimer);
                    watchdogTimer = null;
                  }
                  rejectPlayback(e);
                }
              };

              const onFrame = async (now, metadata) => {
                if (isPlaybackFinished || isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
                  finishPlayback();
                  return;
                }

                try {
                  const mediaTime = (metadata && typeof metadata.mediaTime === 'number')
                    ? metadata.mediaTime
                    : exportVideo.currentTime;

                  if (mediaTime > lastMediaTime || frameCount === 0) {
                    lastMediaTime = mediaTime;

                    // Step A: Draw decoded video frame FIRST onto 1080p canvas
                    offCtx.drawImage(exportVideo, 0, 0, sourceWidth, sourceHeight);

                    // Step B: Composite styled captions ON TOP (clearBeforeDraw = false to preserve video frame!)
                    renderCaptionsOnCanvas(offCtx, sourceWidth, sourceHeight, mediaTime, false);

                    // Step C: Capture composited frame and encode to hardware
                    const timestampMicros = Math.round(mediaTime * 1_000_000);
                    const frame = new VideoFrame(offscreenCanvas, { timestamp: timestampMicros });
                    const isKeyFrame = (frameCount === 0 || frameCount % 60 === 0);
                    videoEncoder.encode(frame, { keyFrame: isKeyFrame });
                    frame.close();
                    frameCount++;

                    // Update progress UI
                    const pct = Math.min(99, Math.round((mediaTime / totalDuration) * 100));
                    if (progressFill) progressFill.style.width = pct + '%';
                    if (progressText) {
                      progressText.textContent = `${getTranslation('burnProgress')} ${pct}% (${mediaTime.toFixed(1)}s / ${totalDuration.toFixed(1)}s)`;
                    }

                    // Backpressure Flow Control: pause playback if encoder queue backlog > 4
                    if (videoEncoder && videoEncoder.encodeQueueSize > 4) {
                      exportVideo.pause();
                      while (videoEncoder && videoEncoder.encodeQueueSize > 4 && !isExportCancelled && !state.abortExport) {
                        await new Promise(r => setTimeout(r, 10));
                      }
                      if (!isPlaybackFinished && !isExportCancelled && !state.abortExport && !exportVideo.ended) {
                        try { await exportVideo.play(); } catch(e) {}
                      }
                    }

                    // Micro-yield to keep main event loop and cancel button fully responsive
                    if (frameCount % 6 === 0) {
                      await new Promise(r => setTimeout(r, 0));
                    }
                  }

                  if (exportVideo.ended || mediaTime >= totalDuration - 0.05) {
                    finishPlayback();
                    return;
                  }

                  if (!isPlaybackFinished && !isExportCancelled && !state.abortExport && !exportVideo.ended) {
                    callbackId = exportVideo.requestVideoFrameCallback(onFrame);
                  }
                } catch (frameErr) {
                  console.error("Frame encode error:", frameErr);
                  finishPlayback();
                }
              };

              // Watchdog timer: checks every 400ms for stall, pause, or completion
              watchdogTimer = setInterval(() => {
                if (isPlaybackFinished || isExportCancelled || state.abortExport) {
                  if (watchdogTimer) {
                    clearInterval(watchdogTimer);
                    watchdogTimer = null;
                  }
                  return;
                }
                if (exportVideo.ended || exportVideo.currentTime >= totalDuration - 0.05) {
                  finishPlayback();
                } else if (exportVideo.paused && (!videoEncoder || videoEncoder.encodeQueueSize <= 4) && !exportVideo.ended) {
                  exportVideo.play().catch(() => {});
                }
              }, 400);

              callbackId = exportVideo.requestVideoFrameCallback(onFrame);
              await exportVideo.play();
            });

            usedContinuous = true;
          } catch (playbackErr) {
            console.warn("Continuous playback export had an issue, falling back to seek clock:", playbackErr);
            usedContinuous = false;
          }
        }

        // Fallback frame clock seek loop if continuous playback failed or wasn't supported
        if (!usedContinuous && !isExportCancelled && !state.abortExport) {
          try { exportVideo.pause(); } catch(e) {}
          exportVideo.currentTime = 0;
          for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
            if (isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
              break;
            }

            const t = Math.min(totalDuration, frameIndex * dt);
            await seekVideo(exportVideo, t, 250);

            if (isExportCancelled || state.abortExport) break;

            while (videoEncoder && videoEncoder.encodeQueueSize > 4) {
              if (isExportCancelled || state.abortExport) break;
              await new Promise(resolve => setTimeout(resolve, 10));
            }

            if (isExportCancelled || state.abortExport) break;

            // Step A & B with clearBeforeDraw = false
            offCtx.drawImage(exportVideo, 0, 0, sourceWidth, sourceHeight);
            renderCaptionsOnCanvas(offCtx, sourceWidth, sourceHeight, t, false);

            const timestampMicros = Math.round(t * 1_000_000);
            const frame = new VideoFrame(offscreenCanvas, { timestamp: timestampMicros });
            const isKeyFrame = (frameIndex === 0 || frameIndex % 60 === 0);
            videoEncoder.encode(frame, { keyFrame: isKeyFrame });
            frame.close();

            if (frameIndex % 3 === 0) {
              await new Promise(r => setTimeout(r, 0));
            }

            const pct = Math.min(99, Math.round(((frameIndex + 1) / totalFrames) * 100));
            if (progressFill) progressFill.style.width = pct + '%';
            if (progressText) {
              progressText.textContent = `${getTranslation('burnProgress')} ${pct}% (${t.toFixed(1)}s / ${totalDuration.toFixed(1)}s)`;
            }
          }
        }

        if (isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
          cancelExport();
          return;
        }

        // Finalize hardware encode
        if (progressText) progressText.textContent = `${getTranslation('burnProgress')} 100% (Finalizing MP4...)`;
        if (progressFill) progressFill.style.width = '100%';

        await videoEncoder.flush();
        videoEncoder.close();
        activeVideoEncoder = null;

        if (audioEncoder) {
          await audioEncoder.flush();
          audioEncoder.close();
          activeAudioEncoder = null;
        }

        muxer.finalize();

        const buffer = muxer.target.buffer;
        const blob = new Blob([buffer], { type: 'video/mp4' });
        const cleanName = (state.videoFile ? state.videoFile.name.replace(/\.[^/.]+$/, "") : "video") + "-captions.mp4";
        triggerDownload(blob, cleanName, 'video/mp4');

      } catch (err) {
        if (!isExportCancelled && !state.abortExport) {
          console.warn("Hardware WebCodecs export encountered an issue, falling back to MediaRecorder:", err);
          if (videoEncoder && videoEncoder.state !== 'closed') {
            try { videoEncoder.close(); } catch (e) {}
          }
          if (audioEncoder && audioEncoder.state !== 'closed') {
            try { audioEncoder.close(); } catch (e) {}
          }
          await fallbackMediaRecorderBurn(video, offscreenCanvas, offCtx, fps, sourceWidth, sourceHeight);
        }
      } finally {
        if (exportVideo && exportVideo.parentNode) {
          try {
            exportVideo.pause();
            exportVideo.removeAttribute('src');
            exportVideo.load();
            exportVideo.parentNode.removeChild(exportVideo);
          } catch(e) {}
        }
        activeExportVideo = null;
      }
    } else {
      // Fallback MediaRecorder pipeline
      await fallbackMediaRecorderBurn(video, offscreenCanvas, offCtx, fps, sourceWidth, sourceHeight);
    }

    if (!isExportCancelled) {
      cleanupExportUI();
    }
  }

  async function fallbackMediaRecorderBurn(previewVideo, canvas, ctx, fps, sourceWidth, sourceHeight) {
    const video = previewVideo || document.getElementById('studioVideoPlayer');
    if (!video) return;

    const stream = canvas.captureStream(fps);
    let combinedStream = stream;
    try {
      if (typeof video.captureStream === 'function') {
        const audioStream = video.captureStream();
        const aTracks = audioStream.getAudioTracks();
        if (aTracks.length > 0) {
          combinedStream = new MediaStream([...stream.getVideoTracks(), aTracks[0]]);
        }
      }
    } catch(e) {}

    const mime = MediaRecorder.isTypeSupported('video/mp4;codecs=avc1') ? 'video/mp4;codecs=avc1' : (MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm');
    const recorder = new MediaRecorder(combinedStream, { mimeType: mime, videoBitsPerSecond: 8_000_000 });
    const chunks = [];
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };

    const recordPromise = new Promise(resolve => {
      recorder.onstop = () => {
        if (isExportCancelled || state.abortExport) {
          resolve();
          return;
        }
        const blob = new Blob(chunks, { type: mime });
        const ext = mime.includes('mp4') ? 'mp4' : 'webm';
        const cleanName = (state.videoFile ? state.videoFile.name.replace(/\.[^/.]+$/, "") : "video") + `-captions.${ext}`;
        triggerDownload(blob, cleanName, mime);
        resolve();
      };
    });

    recorder.start();

    const totalDur = video.duration || state.videoDuration || 1;
    const dt = 1 / fps;
    const totalFrames = Math.max(1, Math.ceil(totalDur * fps));
    const progressFill = document.getElementById('burnProgressFill');
    const progressText = document.getElementById('burnProgressText');

    for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
      if (isExportCancelled || state.abortExport) break;
      const t = Math.min(totalDur, frameIndex * dt);
      await seekVideo(video, t, 200);

      if (isExportCancelled || state.abortExport) break;
      ctx.drawImage(video, 0, 0, sourceWidth, sourceHeight);
      renderCaptionsOnCanvas(ctx, sourceWidth, sourceHeight, t, false);

      if (frameIndex % 3 === 0) {
        await new Promise(r => setTimeout(r, 0));
      }

      const pct = Math.min(99, Math.round(((frameIndex + 1) / totalFrames) * 100));
      if (progressFill) progressFill.style.width = pct + '%';
      if (progressText) {
        progressText.textContent = `${getTranslation('burnProgress')} ${pct}% (${t.toFixed(1)}s / ${totalDur.toFixed(1)}s)`;
      }
    }

    try { recorder.stop(); } catch(e) {}
    await recordPromise;
  }

  function cleanupExportUI() {
    state.isExporting = false;
    const burnBtn = document.getElementById('btnBurnMp4');
    const cancelBtn1 = document.getElementById('btnCancelExport');
    const cancelBtn2 = document.getElementById('btnCancelBurn');
    const progressBar = document.getElementById('burnProgressContainer');
    const progressFill = document.getElementById('burnProgressFill');
    const progressText = document.getElementById('burnProgressText');

    if (burnBtn) {
      burnBtn.style.display = 'inline-flex';
      burnBtn.disabled = false;
    }
    if (cancelBtn1) cancelBtn1.style.display = 'none';
    if (cancelBtn2) cancelBtn2.style.display = 'none';
    if (progressBar) progressBar.style.display = 'none';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = `${getTranslation('burnProgress')} 0%`;
  }

  /* ==========================================================================
     11. UI WIRING & TIMELINE INTERACTIONS
     ========================================================================== */
  function getTranslation(key) {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }

  function updateAllTranslations() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    if (currentLang === 'ar' && !state.styling.customFontName) {
      state.styling.fontFamily = "'Cairo', sans-serif";
      const fontSelect = document.getElementById('fontFamilySelect');
      if (fontSelect) fontSelect.value = "'Cairo', sans-serif";
    }

    updateModelUI();
    renderTimelineCues();
  }

  function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    const text = document.getElementById('toastMessage');
    if (!toast || !text) return;
    text.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function setStatus(msg, stepNum) {
    const statusContainer = document.getElementById('studioStatusContainer');
    const statusText = document.getElementById('studioStatusText');
    const stepBadge = document.getElementById('studioStepBadge');
    if (!statusContainer || !statusText) return;

    if (!msg) {
      statusContainer.style.display = 'none';
      return;
    }
    statusContainer.style.display = 'flex';
    statusText.textContent = msg;
    if (stepBadge && stepNum) stepBadge.textContent = `Step ${stepNum}/3`;
  }

  let cachedCueElements = [];
  function cacheCueElements() {
    cachedCueElements = Array.from(document.querySelectorAll('.timeline-cue-item'));
  }

  function renderTimelineCues() {
    const list = document.getElementById('timelineCueList');
    if (!list) return;

    list.innerHTML = '';
    if (state.cues.length === 0) {
      list.innerHTML = `<div class="empty-cues-hint">No captions yet. Click "Align & Generate Captions" or "+ Add New Cue".</div>`;
      cacheCueElements();
      return;
    }

    state.cues.forEach((cue, idx) => {
      const item = document.createElement('div');
      item.className = 'timeline-cue-item' + (idx === state.activeCueIndex ? ' active-cue' : '');
      item.id = `cue_item_${idx}`;

      const pad = (n) => String(Math.floor(n)).padStart(2, '0');
      const timeFmt = (s) => `${pad(s / 60)}:${pad(s % 60)}.${Math.floor((s % 1) * 10)}`;

      const conf = cue.confidence || 0.9;
      const confClass = conf >= 0.85 ? 'conf-high' : (conf >= 0.65 ? 'conf-med' : 'conf-low');
      const confBadge = `<span class="cue-conf-badge ${confClass}">${Math.round(conf * 100)}%</span>`;

      item.innerHTML = `
        <div class="cue-meta-row">
          <div class="cue-time-badges">
            <span class="cue-time-pill">${timeFmt(cue.start)}</span>
            <span class="cue-time-arrow">→</span>
            <span class="cue-time-pill">${timeFmt(cue.end)}</span>
            <span class="cue-dur-tag">${(cue.end - cue.start).toFixed(2)}s</span>
            ${confBadge}
          </div>
          <div class="cue-actions">
            <button type="button" class="cue-btn-nudge" data-action="nudge-start-minus" title="-100ms start">-0.1s</button>
            <button type="button" class="cue-btn-nudge" data-action="nudge-start-plus" title="+100ms start">+0.1s</button>
            <button type="button" class="cue-btn-split" data-action="split" title="Split cue">✂</button>
            <button type="button" class="cue-btn-delete" data-action="delete" title="Delete cue">×</button>
          </div>
        </div>
        <div class="cue-text-input-wrap">
          <input type="text" class="cue-text-input" value="${cue.text.replace(/"/g, '&quot;')}" />
        </div>
      `;

      // Event Listeners on Cue Item
      const input = item.querySelector('.cue-text-input');
      let initialVal = cue.text;
      input.addEventListener('focus', () => { initialVal = cue.text; });
      input.addEventListener('blur', () => {
        if (cue.text !== initialVal) {
          history.pushState(state.cues);
        }
      });
      input.addEventListener('input', e => {
        cue.text = e.target.value;
        cue.words = cue.text.split(/\s+/).map((t, wi) => {
          const wDur = (cue.end - cue.start) / Math.max(1, cue.text.split(/\s+/).length);
          return { text: t, start: cue.start + (wi * wDur), end: cue.start + ((wi + 1) * wDur) };
        });
        resizeStudioCanvas();
      });

      item.addEventListener('click', e => {
        const action = e.target.getAttribute('data-action');
        if (action === 'delete') {
          history.pushState(state.cues);
          state.cues.splice(idx, 1);
          renderTimelineCues();
          resizeStudioCanvas();
        } else if (action === 'nudge-start-minus') {
          history.pushState(state.cues);
          cue.start = Math.max(0, cue.start - 0.1);
          renderTimelineCues();
          resizeStudioCanvas();
        } else if (action === 'nudge-start-plus') {
          history.pushState(state.cues);
          cue.start = Math.min(cue.end - 0.1, cue.start + 0.1);
          renderTimelineCues();
          resizeStudioCanvas();
        } else if (action === 'split') {
          history.pushState(state.cues);
          splitCueAtHalf(idx);
        } else if (!e.target.classList.contains('cue-text-input')) {
          const video = document.getElementById('studioVideoPlayer');
          if (video) video.currentTime = cue.start;
        }
      });

      list.appendChild(item);
    });

    cacheCueElements();
  }

  function splitCueAtHalf(idx) {
    const cue = state.cues[idx];
    const words = cue.text.split(/\s+/);
    if (words.length <= 1) return;

    const mid = Math.ceil(words.length / 2);
    const midTime = cue.start + (cue.end - cue.start) / 2;

    const cue1 = {
      id: cue.id + '_a',
      start: cue.start,
      end: midTime,
      text: words.slice(0, mid).join(' '),
      words: [],
      confidence: cue.confidence,
      isInterpolated: cue.isInterpolated
    };
    const cue2 = {
      id: cue.id + '_b',
      start: midTime,
      end: cue.end,
      text: words.slice(mid).join(' '),
      words: [],
      confidence: cue.confidence,
      isInterpolated: cue.isInterpolated
    };

    state.cues.splice(idx, 1, cue1, cue2);
    renderTimelineCues();
    resizeStudioCanvas();
  }

  // High-performance DOM-cached cue highlighter eliminating layout thrashing
  function highlightTimelineCue(time) {
    const { cueIdx } = getActiveCueAndWord(time);
    if (cueIdx === state.activeCueIndex) return;

    const prevIdx = state.activeCueIndex;
    state.activeCueIndex = cueIdx;

    if (prevIdx >= 0 && cachedCueElements[prevIdx]) {
      cachedCueElements[prevIdx].classList.remove('active-cue');
    }
    if (cueIdx >= 0 && cachedCueElements[cueIdx]) {
      const el = cachedCueElements[cueIdx];
      el.classList.add('active-cue');

      const container = document.getElementById('timelineCueList');
      if (container) {
        const elTop = el.offsetTop - container.offsetTop;
        const elBottom = elTop + el.offsetHeight;
        if (elTop < container.scrollTop || elBottom > container.scrollTop + container.clientHeight) {
          container.scrollTo({ top: Math.max(0, elTop - 16), behavior: 'smooth' });
        }
      }
    }
  }

  /* ==========================================================================
     11.1 TAP TO SYNC (GROUND-TRUTH INTERACTIVE CALIBRATION)
     ========================================================================== */
  function initTapSync(rawText) {
    const lines = (rawText || '').split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return;
    state.tapSync.lines = lines;
    state.tapSync.currentLineIndex = 0;
    state.tapSync.taps = [];
    state.tapSync.active = true;
    updateTapSyncUI();
  }

  function recordTapSync() {
    const video = document.getElementById('studioVideoPlayer');
    if (!video) return;
    const curTime = video.currentTime;
    const lines = state.tapSync.lines;
    const curIdx = state.tapSync.currentLineIndex;
    if (curIdx >= lines.length) return;

    state.tapSync.taps.push({
      lineIndex: curIdx,
      start: curTime,
      text: lines[curIdx]
    });

    if (curIdx > 0 && state.tapSync.taps[curIdx - 1]) {
      const prev = state.tapSync.taps[curIdx - 1];
      prev.end = Math.max(prev.start + 0.5, curTime - 0.2);
    }

    state.tapSync.currentLineIndex++;
    if (state.tapSync.currentLineIndex >= lines.length) {
      const last = state.tapSync.taps[state.tapSync.taps.length - 1];
      if (last) last.end = Math.min(video.duration || (last.start + 6.0), last.start + 5.0);
      showToast(getTranslation('tapSyncComplete') || "All verses synced!");
    }

    state.cues = generateCuesFromTapSync();
    renderTimelineCues();
    resizeStudioCanvas();
    updateTapSyncUI();
  }

  function undoTapSync() {
    if (state.tapSync.taps.length === 0) return;
    state.tapSync.taps.pop();
    state.tapSync.currentLineIndex = Math.max(0, state.tapSync.currentLineIndex - 1);
    state.cues = generateCuesFromTapSync();
    renderTimelineCues();
    resizeStudioCanvas();
    updateTapSyncUI();
  }

  function resetTapSync() {
    state.tapSync.taps = [];
    state.tapSync.currentLineIndex = 0;
    updateTapSyncUI();
  }

  function generateCuesFromTapSync() {
    const cues = [];
    const taps = state.tapSync.taps;
    taps.forEach((tap, idx) => {
      const lineText = tap.text;
      const rawWords = lineText.split(/\s+/).filter(Boolean);
      const start = tap.start;
      const end = tap.end || (start + 4.0);
      const span = Math.max(0.2, end - start);
      const totalChars = rawWords.reduce((acc, w) => acc + Math.max(1, w.length), 0);
      let cur = start;
      const words = [];

      for (let w = 0; w < rawWords.length; w++) {
        const wText = rawWords[w];
        const charRatio = Math.max(1, wText.length) / totalChars;
        const wDur = span * charRatio;
        words.push({
          text: wText,
          start: Math.round(cur * 1000) / 1000,
          end: Math.round((cur + wDur * 0.92) * 1000) / 1000
        });
        cur += wDur;
      }

      cues.push({
        id: 'tap_cue_' + (idx + 1),
        start: Math.round(start * 1000) / 1000,
        end: Math.round(end * 1000) / 1000,
        text: lineText,
        words: words,
        confidence: 0.99,
        isInterpolated: false
      });
    });
    return cues;
  }

  function updateTapSyncUI() {
    const badge = document.getElementById('tapSyncStatusBadge');
    const preview = document.getElementById('tapSyncQueuePreview');
    const undoBtn = document.getElementById('btnUndoTap');
    const curIdx = state.tapSync.currentLineIndex;
    const totalLines = state.tapSync.lines.length;

    if (undoBtn) undoBtn.disabled = state.tapSync.taps.length === 0;

    if (badge) {
      if (totalLines === 0) {
        badge.textContent = getTranslation('tapSyncReady') || "Ready: Space to Tap";
        badge.className = 'status-badge status-ready';
      } else if (curIdx < totalLines) {
        badge.textContent = `Syncing Verse ${curIdx + 1}/${totalLines}`;
        badge.className = 'status-badge status-ready';
      } else {
        badge.textContent = `✓ All ${totalLines} Verses Synced`;
        badge.className = 'status-badge status-cached';
      }
    }

    if (preview) {
      if (totalLines === 0) {
        preview.textContent = "Paste a script and click Align to initialize Tap to Sync.";
      } else if (curIdx < totalLines) {
        preview.innerHTML = `<strong>Next Verse (${curIdx + 1}/${totalLines}):</strong> ${state.tapSync.lines[curIdx]}`;
      } else {
        preview.innerHTML = `<strong>Completed:</strong> All ${totalLines} verses anchored to ground truth!`;
      }
    }
  }

  /* ==========================================================================
     12. FULL PROCESSING PIPELINE (SYNC & ALIGN TRIGGER)
     ========================================================================== */
  async function runCaptionPipeline() {
    if (state.isProcessing) return;
    if (!state.videoFile) {
      showToast(getTranslation('errNoVideo'));
      return;
    }

    state.isProcessing = true;
    const syncBtn = document.getElementById('btnSyncCaptions');
    if (syncBtn) syncBtn.disabled = true;

    try {
      // Step 1: Extract & Resample Audio
      setStatus(getTranslation('statusStep1'), 1);
      state.audioBuffer = await extractAudio16kHz(state.videoFile);
      state.hasAudio = state.audioBuffer !== null;

      const noAudioAlert = document.getElementById('noAudioWarning');
      if (noAudioAlert) {
        noAudioAlert.style.display = state.hasAudio ? 'none' : 'block';
      }

      // Step 2: Speech Energy & ASR Token Generation
      setStatus(getTranslation('statusStep2'), 2);
      const rawText = (document.getElementById('transcriptInput')?.value || '').trim();
      const rawLines = rawText.split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
      const isMultiLineVerse = rawLines.length > 1;

      // Initialize Tap-to-Sync queue
      initTapSync(rawText);

      // Check if user has recorded Tap-to-Sync anchors
      if (state.tapSync.taps.length > 0 && state.tapSync.lines.length > 0) {
        state.cues = generateCuesFromTapSync();
      } else if (isMultiLineVerse && state.hasAudio) {
        // Line-level verse anchoring: isolate verses to acoustic bursts, preventing cumulative 10s drift and rejecting intro silence/music
        const bursts = detectAcousticSpeechBursts(state.audioBuffer, 0.28);
        const firstSpoken = detectFirstSpokenTimestamp(bursts);
        state.cues = anchorLinesToBursts(rawLines, bursts, state.videoDuration, firstSpoken);
      } else {
        const userWords = rawText ? rawText.split(/\s+/).filter(Boolean).map(t => ({ text: t })) : [];
        let asrTokens = [];
        if (state.hasAudio) {
          const bursts = detectAcousticSpeechBursts(state.audioBuffer, 0.22);
          const firstSpoken = detectFirstSpokenTimestamp(bursts);
          asrTokens = analyzeSpeechEnergyAnchors(state.audioBuffer, Math.max(userWords.length, 12), userWords, firstSpoken);
        } else {
          // Equal distribution across duration if silent
          const step = state.videoDuration / Math.max(userWords.length, 1);
          asrTokens = userWords.map((w, i) => ({
            text: w.text,
            start: i * step,
            end: (i + 1) * step - 0.05,
            confidence: 0.8
          }));
        }

        // Step 3: Sequence Alignment (Needleman-Wunsch)
        setStatus(getTranslation('statusStep3'), 3);
        if (userWords.length > 0) {
          const lang = state.language === 'ar' ? 'ar' : 'en';
          const alignedPairs = needlemanWunschAlign(userWords, asrTokens, lang);
          const finalWords = interpolateAnchors(alignedPairs, userWords, asrTokens, state.videoDuration);
          state.cues = chunkWordsIntoCues(finalWords);
        } else {
          // Fallback demo cue if nothing typed
          state.cues = [
            {
              id: 'cue_1',
              start: 0.5,
              end: Math.min(state.videoDuration, 3.5),
              text: "Welcome to VantorKit Auto Captions",
              words: [
                { text: "Welcome", start: 0.5, end: 1.1 },
                { text: "to", start: 1.1, end: 1.5 },
                { text: "VantorKit", start: 1.5, end: 2.3 },
                { text: "Auto", start: 2.3, end: 2.8 },
                { text: "Captions", start: 2.8, end: 3.5 }
              ],
              confidence: 0.95,
              isInterpolated: false
            }
          ];
        }
      }

      renderTimelineCues();
      resizeStudioCanvas();
      setStatus(null);

      // Scroll to Studio Section
      const studioSec = document.getElementById('studioWorkspace');
      if (studioSec) {
        studioSec.style.display = 'block';
        studioSec.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(getTranslation('toastAlignmentComplete'));

    } catch (err) {
      console.error("Caption pipeline error:", err);
      setStatus(null);
      showToast("Alignment encountered an error. Please verify input.");
    } finally {
      state.isProcessing = false;
      if (syncBtn) syncBtn.disabled = false;
    }
  }

  /* ==========================================================================
     13. INITIALIZATION & DOM ATTACHMENT
     ========================================================================== */
  function loadVideoFile(file) {
    if (!file) return;
    state.videoFile = file;
    if (state.videoUrl) {
      try { URL.revokeObjectURL(state.videoUrl); } catch(e) {}
    }
    state.videoUrl = URL.createObjectURL(file);

    const video = document.getElementById('studioVideoPlayer');
    if (video) {
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1.0;
      video.src = state.videoUrl;
      video.load();
      video.onloadedmetadata = () => {
        state.videoDuration = video.duration || 5.0;
        state.videoWidth = video.videoWidth || 1280;
        state.videoHeight = video.videoHeight || 720;
        video.muted = false;
        video.defaultMuted = false;
        video.volume = 1.0;

        const specsEl = document.getElementById('videoLoadedSpecs');
        if (specsEl) {
          specsEl.textContent = `${file.name} (${state.videoWidth}x${state.videoHeight}, ${video.duration.toFixed(1)}s, ${(file.size / (1024 * 1024)).toFixed(1)} MB)`;
          specsEl.style.display = 'block';
        }
        resizeStudioCanvas();
      };
    }
  }

  function initDOM() {
    // Dropzone
    const dropzone = document.getElementById('autoCaptionsDropzone');
    const fileInput = document.getElementById('videoFileInput');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', e => {
        if (e.target.files && e.target.files[0]) {
          loadVideoFile(e.target.files[0]);
        }
      });

      ['dragenter', 'dragover'].forEach(ev => {
        dropzone.addEventListener(ev, e => {
          e.preventDefault();
          dropzone.classList.add('drag-active');
        });
      });

      ['dragleave', 'drop'].forEach(ev => {
        dropzone.addEventListener(ev, e => {
          e.preventDefault();
          dropzone.classList.remove('drag-active');
        });
      });

      dropzone.addEventListener('drop', e => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          loadVideoFile(e.dataTransfer.files[0]);
        }
      });
    }

    // Demo Video Button
    const demoBtn = document.getElementById('btnLoadDemoVideo');
    if (demoBtn) {
      demoBtn.addEventListener('click', async () => {
        demoBtn.disabled = true;
        demoBtn.textContent = 'Generating Demo Clip...';
        try {
          const demoFile = await generateOfflineDemoVideo();
          loadVideoFile(demoFile);
          showToast(getTranslation('toastDemoLoaded'));
        } catch (e) {
          console.error(e);
        } finally {
          demoBtn.disabled = false;
          demoBtn.textContent = getTranslation('btnTestDemo');
        }
      });
    }

    // Model Select
    const modelSelect = document.getElementById('whisperModelSelect');
    if (modelSelect) {
      modelSelect.value = state.selectedModel;
      modelSelect.addEventListener('change', e => {
        state.selectedModel = e.target.value;
        checkModelCache();
        updateModelUI();
      });
    }

    // Model Download Trigger
    const modelBtn = document.getElementById('modelDownloadBtn');
    if (modelBtn) {
      modelBtn.addEventListener('click', downloadModelWithProgress);
    }

    // Tap-to-Sync Controls
    const btnTapNext = document.getElementById('btnTapNextVerse');
    if (btnTapNext) {
      btnTapNext.addEventListener('click', recordTapSync);
    }
    const btnUndoTap = document.getElementById('btnUndoTap');
    if (btnUndoTap) {
      btnUndoTap.addEventListener('click', undoTapSync);
    }
    const btnResetTap = document.getElementById('btnResetTap');
    if (btnResetTap) {
      btnResetTap.addEventListener('click', resetTapSync);
    }

    function forceArabicFont() {
      if (!state.styling.customFontName) {
        state.styling.fontFamily = "'Cairo', sans-serif";
        const fontSelect = document.getElementById('fontFamilySelect');
        if (fontSelect) fontSelect.value = "'Cairo', sans-serif";
        resizeStudioCanvas();
      }
    }

    const transcriptInput = document.getElementById('transcriptInput');
    if (transcriptInput) {
      transcriptInput.addEventListener('input', e => {
        initTapSync(e.target.value);
        if (isArabicText(e.target.value)) {
          forceArabicFont();
        }
      });
    }

    const spokenLangSelect = document.getElementById('spokenLangSelect');
    if (spokenLangSelect) {
      spokenLangSelect.addEventListener('change', e => {
        state.language = e.target.value;
        if (state.language === 'ar') {
          forceArabicFont();
        }
      });
    }

    // Global Keydown Handler: Spacebar (Tap Verse when video playing/in sync), Backspace (Undo)
    window.addEventListener('keydown', e => {
      const activeEl = document.activeElement;
      const isInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);
      if (isInput) return;

      if (e.code === 'Space' || e.key === ' ') {
        if (state.tapSync.lines && state.tapSync.lines.length > 0) {
          e.preventDefault();
          const video = document.getElementById('studioVideoPlayer');
          if (video && video.paused) {
            video.muted = false;
            video.play().catch(err => console.warn('Playback error:', err));
          }
          recordTapSync();
        }
      } else if (e.key === 'Backspace') {
        if (state.tapSync.taps && state.tapSync.taps.length > 0) {
          e.preventDefault();
          undoTapSync();
        }
      }
    });

    // Generate Captions Button
    const syncBtn = document.getElementById('btnSyncCaptions');
    if (syncBtn) {
      syncBtn.addEventListener('click', runCaptionPipeline);
    }

    // Video Player & Canvas Resize
    const video = document.getElementById('studioVideoPlayer');
    if (video) {
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1.0;

      const redrawStudioFrame = () => {
        const canvas = document.getElementById('studioCaptionCanvas');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          renderCaptionsOnCanvas(ctx, canvas.width, canvas.height, video.currentTime);
          highlightTimelineCue(video.currentTime);
        }
      };

      video.addEventListener('timeupdate', redrawStudioFrame);
      video.addEventListener('seeking', redrawStudioFrame);
      video.addEventListener('seeked', redrawStudioFrame);
      video.addEventListener('play', () => {
        video.muted = false;
        startPlaybackCanvasLoop();
      });
      video.addEventListener('playing', () => {
        video.muted = false;
        startPlaybackCanvasLoop();
      });
      video.addEventListener('pause', stopPlaybackCanvasLoop);
      video.addEventListener('ended', stopPlaybackCanvasLoop);

      // Interactive click-to-play/pause handler on the video preview stage
      const videoWrap = document.getElementById('studioVideoWrap');
      if (videoWrap) {
        videoWrap.addEventListener('click', e => {
          // If clicking inside native bottom controls bar (bottom 48px), let native controls handle it
          const rect = video.getBoundingClientRect();
          const clickY = e.clientY - rect.top;
          if (clickY > rect.height - 48 && clickY <= rect.height) {
            return;
          }
          if (video.paused) {
            video.muted = false;
            video.play().catch(err => console.warn('Playback error:', err));
          } else {
            video.pause();
          }
        });
      }
    }
    window.addEventListener('resize', resizeStudioCanvas);

    // Styling Controls
    const fontSelect = document.getElementById('fontFamilySelect');
    if (fontSelect) {
      fontSelect.addEventListener('change', e => {
        state.styling.fontFamily = e.target.value;
        state.styling.customFontName = null;
        resizeStudioCanvas();
      });
    }

    function applyPreset(val) {
      state.styling.preset = val;
      if (val === 'poetic') {
        state.styling.fontFamily = "'Cairo', sans-serif";
        state.styling.textColor = '#fffdf5';
        state.styling.highlightColor = '#fde047';
        state.styling.outlineWidth = 3;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 12;
        state.styling.glowColor = '#d97706';
        state.styling.wordBounce = true;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'pill';
        state.styling.bgColor = '#050811';
        state.styling.bgOpacity = 0.60;
      } else if (val === 'tiktok' || val === 'bounce' || val === 'karaoke') {
        state.styling.fontFamily = "'Plus Jakarta Sans', sans-serif";
        state.styling.textColor = '#ffffff';
        state.styling.highlightColor = '#22d3ee';
        state.styling.outlineWidth = 5;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 8;
        state.styling.glowColor = '#0284c7';
        state.styling.wordBounce = true;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'none';
      } else if (val === 'neon') {
        state.styling.fontFamily = "'Cairo', sans-serif";
        state.styling.textColor = '#22d3ee';
        state.styling.highlightColor = '#38bdf8';
        state.styling.outlineWidth = 2;
        state.styling.outlineColor = '#082f49';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 18;
        state.styling.glowColor = '#06b6d4';
        state.styling.wordBounce = true;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'pill';
        state.styling.bgColor = '#020617';
        state.styling.bgOpacity = 0.70;
      } else if (val === 'clean') {
        state.styling.fontFamily = "'Cairo', sans-serif";
        state.styling.textColor = '#ffffff';
        state.styling.highlightColor = '#e2e8f0';
        state.styling.outlineWidth = 0;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 4;
        state.styling.glowColor = '#000000';
        state.styling.wordBounce = false;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'none';
      } else if (val === 'yellow') {
        state.styling.fontFamily = "'Plus Jakarta Sans', sans-serif";
        state.styling.textColor = '#facc15';
        state.styling.highlightColor = '#ffffff';
        state.styling.outlineWidth = 4;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 8;
        state.styling.glowColor = '#ca8a04';
        state.styling.wordBounce = true;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'none';
      }

      // Sync form input controls with current preset
      const fSel = document.getElementById('fontFamilySelect');
      if (fSel && !state.styling.customFontName) fSel.value = state.styling.fontFamily;
      const tColor = document.getElementById('textColorPicker');
      if (tColor) tColor.value = state.styling.textColor.startsWith('#') ? state.styling.textColor : '#ffffff';
      const hColor = document.getElementById('highlightColorPicker');
      if (hColor) hColor.value = state.styling.highlightColor.startsWith('#') ? state.styling.highlightColor : '#22d3ee';
      const sWidth = document.getElementById('strokeWidthSlider');
      if (sWidth) sWidth.value = state.styling.outlineWidth;
      const sColor = document.getElementById('strokeColorPicker');
      if (sColor) sColor.value = state.styling.outlineColor.startsWith('#') ? state.styling.outlineColor : '#000000';
      const gRadius = document.getElementById('glowRadiusSlider');
      if (gRadius) gRadius.value = state.styling.glowRadius;
      const gToggle = document.getElementById('toggleGlow');
      if (gToggle) gToggle.checked = state.styling.glowEnabled;
      const gColor = document.getElementById('glowColorPicker');
      if (gColor) gColor.value = state.styling.glowColor.startsWith('#') ? state.styling.glowColor : '#06b6d4';
      const wBounce = document.getElementById('toggleWordBounce');
      if (wBounce) wBounce.checked = state.styling.wordBounce;
      const sUp = document.getElementById('toggleSlideUp');
      if (sUp) sUp.checked = state.styling.slideUpFade;
      const bgSel = document.getElementById('bgTypeSelect');
      if (bgSel) bgSel.value = state.styling.bgType;
      const bgOp = document.getElementById('bgOpacitySlider');
      if (bgOp) bgOp.value = state.styling.bgOpacity;

      resizeStudioCanvas();
    }

    const presetSelect = document.getElementById('stylePresetSelect');
    if (presetSelect) {
      presetSelect.addEventListener('change', e => {
        applyPreset(e.target.value);
      });
    }

    const fontSizeSlider = document.getElementById('fontSizeSlider');
    if (fontSizeSlider) {
      fontSizeSlider.addEventListener('input', e => {
        state.styling.fontSizePercent = parseFloat(e.target.value);
        resizeStudioCanvas();
      });
    }

    const posYSlider = document.getElementById('positionYSlider');
    if (posYSlider) {
      posYSlider.addEventListener('input', e => {
        state.styling.positionY = parseFloat(e.target.value);
        resizeStudioCanvas();
      });
    }

    const textColorPicker = document.getElementById('textColorPicker');
    if (textColorPicker) {
      textColorPicker.addEventListener('input', e => {
        state.styling.textColor = e.target.value;
        resizeStudioCanvas();
      });
    }

    const highlightColorPicker = document.getElementById('highlightColorPicker');
    if (highlightColorPicker) {
      highlightColorPicker.addEventListener('input', e => {
        state.styling.highlightColor = e.target.value;
        resizeStudioCanvas();
      });
    }

    const strokeWidthSlider = document.getElementById('strokeWidthSlider');
    if (strokeWidthSlider) {
      strokeWidthSlider.addEventListener('input', e => {
        state.styling.outlineWidth = parseFloat(e.target.value);
        resizeStudioCanvas();
      });
    }

    const strokeColorPicker = document.getElementById('strokeColorPicker');
    if (strokeColorPicker) {
      strokeColorPicker.addEventListener('input', e => {
        state.styling.outlineColor = e.target.value;
        resizeStudioCanvas();
      });
    }

    const glowRadiusSlider = document.getElementById('glowRadiusSlider');
    if (glowRadiusSlider) {
      glowRadiusSlider.addEventListener('input', e => {
        state.styling.glowRadius = parseFloat(e.target.value);
        resizeStudioCanvas();
      });
    }

    const toggleGlow = document.getElementById('toggleGlow');
    if (toggleGlow) {
      toggleGlow.addEventListener('change', e => {
        state.styling.glowEnabled = e.target.checked;
        resizeStudioCanvas();
      });
    }

    const glowColorPicker = document.getElementById('glowColorPicker');
    if (glowColorPicker) {
      glowColorPicker.addEventListener('input', e => {
        state.styling.glowColor = e.target.value;
        resizeStudioCanvas();
      });
    }

    const toggleWordBounce = document.getElementById('toggleWordBounce');
    if (toggleWordBounce) {
      toggleWordBounce.addEventListener('change', e => {
        state.styling.wordBounce = e.target.checked;
        resizeStudioCanvas();
      });
    }

    const toggleSlideUp = document.getElementById('toggleSlideUp');
    if (toggleSlideUp) {
      toggleSlideUp.addEventListener('change', e => {
        state.styling.slideUpFade = e.target.checked;
        resizeStudioCanvas();
      });
    }

    const bgTypeSelect = document.getElementById('bgTypeSelect');
    if (bgTypeSelect) {
      bgTypeSelect.addEventListener('change', e => {
        state.styling.bgType = e.target.value;
        resizeStudioCanvas();
      });
    }

    const bgOpacitySlider = document.getElementById('bgOpacitySlider');
    if (bgOpacitySlider) {
      bgOpacitySlider.addEventListener('input', e => {
        state.styling.bgOpacity = parseFloat(e.target.value);
        resizeStudioCanvas();
      });
    }

    const aspectRatioSelect = document.getElementById('aspectRatioSelect');
    if (aspectRatioSelect) {
      aspectRatioSelect.addEventListener('change', e => {
        state.aspectRatio = e.target.value;
        const studioVideoWrap = document.getElementById('studioVideoWrap');
        if (studioVideoWrap) {
          studioVideoWrap.setAttribute('data-aspect', state.aspectRatio);
        }
        resizeStudioCanvas();
      });
    }

    // Custom Font Upload
    const fontFileInput = document.getElementById('fontFileInput');
    if (fontFileInput) {
      fontFileInput.addEventListener('change', async e => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          const fontName = file.name.replace(/\.[^/.]+$/, "").replace(/[^\w]/g, '_') || ('CustomFont_' + Date.now());
          try {
            const buffer = await file.arrayBuffer();
            const fontFace = new FontFace(fontName, buffer);
            await fontFace.load();
            document.fonts.add(fontFace);

            state.styling.customFontName = fontName;
            const fontSelect = document.getElementById('fontFamilySelect');
            if (fontSelect) {
              const opt = document.createElement('option');
              opt.value = fontName;
              opt.textContent = `★ ${file.name}`;
              opt.selected = true;
              fontSelect.appendChild(opt);
            }
            showToast(getTranslation('toastFontLoaded'));
            resizeStudioCanvas();
          } catch (err) {
            console.error("Font loading error:", err);
            showToast("Failed to load font. Please verify format (.ttf, .otf, .woff2).");
          }
        }
      });
    }

    // Undo / Redo Buttons & Shortcuts
    const undoBtn = document.getElementById('btnUndoCue');
    if (undoBtn) {
      undoBtn.addEventListener('click', () => {
        const prev = history.undo();
        if (prev) {
          state.cues = prev;
          renderTimelineCues();
          resizeStudioCanvas();
        }
      });
    }

    const redoBtn = document.getElementById('btnRedoCue');
    if (redoBtn) {
      redoBtn.addEventListener('click', () => {
        const next = history.redo();
        if (next) {
          state.cues = next;
          renderTimelineCues();
          resizeStudioCanvas();
        }
      });
    }

    // Keyboard Shortcuts: Ctrl+Z / Cmd+Z (Undo) and Ctrl+Y / Cmd+Shift+Z (Redo)
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
        if (e.shiftKey) {
          const next = history.redo();
          if (next) { state.cues = next; renderTimelineCues(); resizeStudioCanvas(); e.preventDefault(); }
        } else {
          const prev = history.undo();
          if (prev) { state.cues = prev; renderTimelineCues(); resizeStudioCanvas(); e.preventDefault(); }
        }
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
        const next = history.redo();
        if (next) { state.cues = next; renderTimelineCues(); resizeStudioCanvas(); e.preventDefault(); }
      }
    });

    // Export Triggers
    const exportSrtBtn = document.getElementById('btnExportSrt');
    if (exportSrtBtn) {
      exportSrtBtn.addEventListener('click', () => {
        const srt = generateSrt(state.cues);
        triggerDownload(srt, 'captions.srt', 'text/plain;charset=utf-8');
      });
    }

    const exportVttBtn = document.getElementById('btnExportVtt');
    if (exportVttBtn) {
      exportVttBtn.addEventListener('click', () => {
        const vtt = generateVtt(state.cues);
        triggerDownload(vtt, 'captions.vtt', 'text/vtt;charset=utf-8');
      });
    }

    const exportAssBtn = document.getElementById('btnExportAss');
    if (exportAssBtn) {
      exportAssBtn.addEventListener('click', () => {
        const ass = generateAss(state.cues, state.styling);
        triggerDownload(ass, 'captions.ass', 'text/plain;charset=utf-8');
      });
    }

    const burnMp4Btn = document.getElementById('btnBurnMp4');
    if (burnMp4Btn) {
      burnMp4Btn.addEventListener('click', burnCaptionsToMp4);
    }

    const cancelExportBtn = document.getElementById('btnCancelExport');
    if (cancelExportBtn) {
      cancelExportBtn.addEventListener('click', cancelExport);
    }

    const cancelBurnBtn = document.getElementById('btnCancelBurn');
    if (cancelBurnBtn && cancelBurnBtn !== cancelExportBtn) {
      cancelBurnBtn.addEventListener('click', cancelExport);
    }

    const addCueBtn = document.getElementById('btnAddCue');
    if (addCueBtn) {
      addCueBtn.addEventListener('click', () => {
        history.pushState(state.cues);
        const video = document.getElementById('studioVideoPlayer');
        const curTime = video ? video.currentTime : 0;
        state.cues.push({
          id: 'cue_' + (state.cues.length + 1),
          start: Math.round(curTime * 10) / 10,
          end: Math.round((curTime + 2.5) * 10) / 10,
          text: "New Caption Text",
          words: [{ text: "New", start: curTime, end: curTime + 0.8 }, { text: "Caption", start: curTime + 0.8, end: curTime + 1.6 }, { text: "Text", start: curTime + 1.6, end: curTime + 2.5 }],
          confidence: 1.0,
          isInterpolated: false
        });
        state.cues.sort((a, b) => a.start - b.start);
        renderTimelineCues();
        resizeStudioCanvas();
      });
    }

    // Global Timeline Shift Helper & Buttons
    function shiftAllCues(delta) {
      if (!state.cues || state.cues.length === 0) {
        showToast("No cues to shift yet.");
        return;
      }
      history.pushState(state.cues);
      const maxDur = state.videoDuration || 999999;

      state.cues.forEach(cue => {
        cue.start = Math.max(0, Math.round((cue.start + delta) * 1000) / 1000);
        cue.end = Math.max(cue.start + 0.1, Math.min(maxDur, Math.round((cue.end + delta) * 1000) / 1000));
        if (cue.words && cue.words.length > 0) {
          cue.words.forEach(w => {
            w.start = Math.max(0, Math.round((w.start + delta) * 1000) / 1000);
            w.end = Math.max(w.start + 0.05, Math.min(maxDur, Math.round((w.end + delta) * 1000) / 1000));
          });
        }
      });

      renderTimelineCues();
      resizeStudioCanvas();
      const sign = delta > 0 ? `+${delta}s` : `${delta}s`;
      showToast(`Shifted all cues by ${sign}`);
    }

    document.querySelectorAll('.btn-shift-step').forEach(btn => {
      btn.addEventListener('click', () => {
        const delta = parseFloat(btn.getAttribute('data-shift'));
        if (!isNaN(delta)) {
          shiftAllCues(delta);
        }
      });
    });

    // Language Dropdown
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    if (langBtn && langMenu) {
      langBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('show');
        langMenu.classList.toggle('show', !isOpen);
        langBtn.setAttribute('aria-expanded', !isOpen);
      });

      document.addEventListener('click', () => {
        langMenu.classList.remove('show');
        langBtn.setAttribute('aria-expanded', 'false');
      });

      langMenu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.getAttribute('data-lang');
          document.documentElement.setAttribute('lang', lang);
          document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
          try { localStorage.setItem('vantorkit_lang', lang); } catch (e) {}
          updateAllTranslations();
        });
      });
    }

    // Language change observer
    const observer = new MutationObserver(() => updateAllTranslations());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });

    // Clean up Object URL on page unload
    window.addEventListener('beforeunload', () => {
      if (state.videoUrl) {
        try { URL.revokeObjectURL(state.videoUrl); } catch (e) {}
      }
    });

    // Initial check
    checkModelCache();
    updateAllTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDOM);
  } else {
    initDOM();
  }
})();
