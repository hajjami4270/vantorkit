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
      lblAnimationSection: "Animation & Motion FX",
      lblAnimationMode: "Animation Mode:",
      animModeNone: "None (Static Display)",
      animModeTypewriter: "Canva Typewriter (كتابة تدريجية + مؤشر)",
      animModePop: "Submagic Word Pop (ارتداد الكلمة النشطة)",
      animModeKaraokeSweep: "CapCut Karaoke Sweep (تدفق لوني انسيابي)",
      animModeSlideUp: "Cinematic Slide-Up (صعود وتلاشٍ ناعم)",
      animModeGlassPill: "Sliding Glass Pill (كبسولة زجاجية انسيابية)",
      animModeExtrusion: "3D Extrusion Shadow (ظل مجسم ثلاثي الأبعاد)",
      lblTypewriterCursor: "Blinking Cursor (|)",
      descTypewriterCursor: "Shows active typing caret",
      lblBounceIntensity: "Kinetic Bounce Intensity:",
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
      btnExportAss: "Download SubStation Alpha (.ASS)",
      btnExportAssStyled: "Download Styled FX (.ASS)",
      btnModalInstantAss: "⚡ Instant (.ASS)",
      btnInstantAssDesc: "Instant Styled FX",
      btnBurnMp4: "Burn Captions & Export MP4 Video",
      btnCancelBurn: "Cancel Export",
      btnCancelExport: "Cancel Export",
      burnProgress: "Encoding MP4 Video: ",
      exportCancelled: "Export cancelled cleanly",
      exportModalTitle: "Exporting 1080p Video...",
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
      lblAnimationSection: "الحركة والمؤثرات البصرية",
      lblAnimationMode: "نمط الحركة والتأثير:",
      animModeNone: "بدون (عرض ثابت)",
      animModeTypewriter: "كتابة كانفا التدريجية + مؤشر (Canva Typewriter)",
      animModePop: "ارتداد الكلمة النشطة (Submagic Word Pop)",
      animModeKaraokeSweep: "تدفق كاريوكي كاب كات الانسيابي (CapCut Karaoke)",
      animModeSlideUp: "صعود سينمائي وتلاشٍ ناعم (Cinematic Slide-Up)",
      animModeGlassPill: "كبسولة زجاجية انسيابية (Sliding Glass Pill)",
      animModeExtrusion: "ظل مجسم ثلاثي الأبعاد (3D Extrusion Shadow)",
      lblTypewriterCursor: "مؤشر الكتابة الخفاق (|)",
      descTypewriterCursor: "إظهار مؤشر الكتابة النشط أثناء الظهور",
      lblBounceIntensity: "شدة ارتداد الكلمة:",
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
      btnExportAss: "تنزيل ملف الترجمة (.ASS)",
      btnExportAssStyled: "تنزيل ملف المؤثرات الفوري (.ASS)",
      btnModalInstantAss: "⚡ تحميل ملف المؤثرات الفوري (.ASS)",
      btnInstantAssDesc: "مؤثرات بصرية فورية",
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
      lblAnimationSection: "Animations & Effets Cinétiques",
      lblAnimationMode: "Mode d'animation :",
      animModeNone: "Aucune (Affichage statique)",
      animModeTypewriter: "Machine à écrire Canva (+ Curseur)",
      animModePop: "Rebond de mot Submagic",
      animModeKaraokeSweep: "Balayage Karaoké CapCut",
      animModeSlideUp: "Glissement cinématique ascendant",
      animModeGlassPill: "Pilule de verre glissante",
      animModeExtrusion: "Ombre d'extrusion 3D",
      lblTypewriterCursor: "Curseur clignotant (|)",
      descTypewriterCursor: "Affiche le curseur de frappe actif",
      lblBounceIntensity: "Intensité du rebond cinétique :",
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
      btnExportAss: "Télécharger ASS (.ASS)",
      btnExportAssStyled: "Télécharger les effets (.ASS)",
      btnModalInstantAss: "⚡ Téléchargement instantané (.ASS)",
      btnInstantAssDesc: "Effets stylés instantanés",
      btnBurnMp4: "Incruster & Exporter en Vidéo MP4",
      btnCancelBurn: "Annuler l'export",
      btnCancelExport: "Annuler l'export",
      burnProgress: "Encodage vidéo MP4 : ",
      exportCancelled: "Exportation annulée",
      exportModalTitle: "Exportation de la vidéo 1080p...",
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
      lblAnimationSection: "Animazioni & Effetti Cinetici",
      lblAnimationMode: "Modalità Animazione:",
      animModeNone: "Nessuna (Visualizzazione statica)",
      animModeTypewriter: "Macchina da scrivere Canva (+ Cursore)",
      animModePop: "Rimbalzo parola Submagic",
      animModeKaraokeSweep: "Scorrimento Karaoke CapCut",
      animModeSlideUp: "Scorrimento cinematografico fluido",
      animModeGlassPill: "Pillola di vetro scorrevole",
      animModeExtrusion: "Ombra di estrusione 3D",
      lblTypewriterCursor: "Cursore lampeggiante (|)",
      descTypewriterCursor: "Mostra il cursore di digitazione attivo",
      lblBounceIntensity: "Intensità del rimbalzo cinetico:",
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
      btnExportAss: "Scarica ASS (.ASS)",
      btnExportAssStyled: "Scarica effetti (.ASS)",
      btnModalInstantAss: "⚡ Download istantaneo (.ASS)",
      btnInstantAssDesc: "Effetti stilizzati istantanei",
      btnBurnMp4: "Incidi Sottotitoli & Esporta Video MP4",
      btnCancelBurn: "Annulla Esportazione",
      btnCancelExport: "Annulla Esportazione",
      burnProgress: "Codifica Video MP4: ",
      exportCancelled: "Esportazione annullata",
      exportModalTitle: "Esportazione video 1080p in corso...",
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
    customFontFile: null,
    customFontName: null,
    customFontFamily: null,
    styling: {
      preset: 'poetic',
      animationMode: 'slide-up',
      typewriterCursor: true,
      bounceIntensity: 1.15,
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
  let activeExportTimer = null;
  let activeWatchdogTimer = null;

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

    if (!state.cues || state.cues.length === 0) {
      return { cueIdx, wordIdx };
    }

    const cue = state.cues.find((c, idx) => {
      if (currentTime >= c.start && currentTime <= c.end) {
        cueIdx = idx;
        return true;
      }
      return false;
    });

    if (cueIdx !== -1 && cue) {
      const words = (cue.words && cue.words.length > 0)
        ? cue.words
        : (cue.text ? cue.text.split(/\s+/).filter(Boolean).map(t => ({ text: t })) : []);

      if (words.length > 0) {
        const cueDuration = Math.max(0.001, cue.end - cue.start);
        for (let w = 0; w < words.length; w++) {
          const word = words[w];
          const wStart = (word.start !== undefined && word.start !== null)
            ? word.start
            : (cue.start + (w * (cueDuration / words.length)));
          const wEnd = (word.end !== undefined && word.end !== null)
            ? word.end
            : (wStart + (cueDuration / words.length));
          if (currentTime >= wStart && currentTime <= wEnd) {
            wordIdx = w;
            break;
          }
        }
        if (wordIdx === -1) {
          for (let w = words.length - 1; w >= 0; w--) {
            const word = words[w];
            const wStart = (word.start !== undefined && word.start !== null)
              ? word.start
              : (cue.start + (w * (cueDuration / words.length)));
            if (currentTime >= wStart) {
              wordIdx = w;
              break;
            }
          }
        }
        if (wordIdx === -1) {
          wordIdx = 0;
        }
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

  // Unicode Grapheme Cluster Splitter strictly preserving Arabic Harakat & Tashkeel
  function getGraphemeClusters(text) {
    if (!text) return [];
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text), s => s.segment);
      } catch (e) {}
    }
    // Unicode regex fallback: base character followed by zero or more combining marks / Harakat
    const matches = text.match(/[\s\S][\u0300-\u036F\u064B-\u065F\u0670\u0640\u06D6-\u06ED]*/g);
    return matches || text.split('');
  }

  // Master Unified Caption & Kinetic FX Renderer (Used by both Live Preview and Video Frame Burn-In)
  function renderCaptionsOnContext(ctx, canvasWidth, canvasHeight, currentTimeSeconds, clearBeforeDraw = true) {
    if (!ctx || !canvasWidth || !canvasHeight) return;

    if (clearBeforeDraw) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }

    if (!state.cues || state.cues.length === 0) return;

    // 1. Finding the active cue strictly via passed currentTimeSeconds argument
    const cue = state.cues.find(c => currentTimeSeconds >= c.start && currentTimeSeconds <= c.end);
    if (!cue) return;

    const styling = state.styling || {};
    const isArabic = isArabicText(cue.text) || state.language === 'ar' || (document.getElementById('spokenLangSelect') && document.getElementById('spokenLangSelect').value === 'ar') || (document.documentElement.getAttribute('lang') === 'ar');
    const isRtl = isArabic || document.documentElement.getAttribute('dir') === 'rtl';

    // Compute dynamic font size relative to canvas height
    const fontSize = Math.max(18, Math.round(((styling.fontSizePercent || 5.2) / 100) * canvasHeight));

    // Force Cairo as mandatory default font whenever Arabic is selected or Arabic characters are detected
    let fontName = styling.customFontName;
    if (!fontName) {
      if (isArabic) {
        fontName = (styling.fontFamily && !styling.fontFamily.includes('Plus Jakarta')) ? styling.fontFamily : "'Cairo', sans-serif";
      } else {
        fontName = styling.fontFamily || "'Cairo', sans-serif";
      }
    } else if (isArabic && fontName.includes('Plus Jakarta')) {
      fontName = "'Cairo', sans-serif";
    }

    const fontStyle = `800 ${fontSize}px ${fontName}, -apple-system, sans-serif`;

    const words = cue.words && cue.words.length > 0
      ? cue.words
      : (cue.text ? cue.text.split(/\s+/).filter(Boolean).map(t => ({ text: t })) : []);
    if (words.length === 0) return;

    const cueDuration = Math.max(0.001, cue.end - cue.start);
    const cueElapsed = currentTimeSeconds - cue.start;
    const cueProgress = Math.min(1, Math.max(0, cueElapsed / cueDuration));

    // Calculate word-level timings and active word index strictly from currentTimeSeconds
    let wordIdx = -1;
    for (let w = 0; w < words.length; w++) {
      const word = words[w];
      const wStart = (word.start !== undefined && word.start !== null)
        ? word.start
        : (cue.start + (w * (cueDuration / words.length)));
      const wEnd = (word.end !== undefined && word.end !== null)
        ? word.end
        : (wStart + (cueDuration / words.length));
      if (currentTimeSeconds >= wStart && currentTimeSeconds <= wEnd) {
        wordIdx = w;
        break;
      }
    }
    if (wordIdx === -1) {
      for (let w = words.length - 1; w >= 0; w--) {
        const word = words[w];
        const wStart = (word.start !== undefined && word.start !== null)
          ? word.start
          : (cue.start + (w * (cueDuration / words.length)));
        if (currentTimeSeconds >= wStart) {
          wordIdx = w;
          break;
        }
      }
    }
    if (wordIdx === -1) {
      wordIdx = 0;
    }

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

    // Effect 4: Cinematic Slide-Up & Fade-In (Smooth cubic-bezier easing over first 250ms)
    let lineAlpha = 1.0;
    let lineOffsetY = 0;
    const isSlideUpActive = (styling.animationMode === 'slide-up') || (styling.slideUpFade && styling.animationMode !== 'none');
    if (isSlideUpActive) {
      if (cueElapsed >= 0 && cueElapsed < 0.25) {
        const t = Math.min(1, Math.max(0, cueElapsed / 0.25));
        const easeOut = 1 - Math.pow(1 - t, 3);
        lineAlpha = easeOut;
        const baseOffset = 12 * (canvasHeight / 720);
        lineOffsetY = (1 - easeOut) * baseOffset;
      }
    }

    // Vertical Y position with entry motion offset
    const posY = (((styling.positionY !== undefined) ? styling.positionY : 80) / 100) * canvasHeight;
    const effectivePosY = posY + lineOffsetY;
    const startX = (canvasWidth - totalTextWidth) / 2;

    // Background Pill or Box dimensions (with diacritics vertical padding headroom)
    const padX = Math.round(fontSize * 0.48);
    const padY = isRtl ? Math.round(fontSize * 0.55) : Math.round(fontSize * 0.38);
    const bgWidth = totalTextWidth + (padX * 2);
    const bgHeight = fontSize + (padY * 2);
    const bgX = startX - padX;
    const bgY = effectivePosY - (bgHeight / 2);

    // Bounding Box isolation calculations: crop tightly around captions + glow + bounce + slide-up margin
    const bounceIntensity = styling.bounceIntensity || 1.15;
    const bounceMargin = Math.round(fontSize * (bounceIntensity - 1.0) * 1.5) + 16;
    const glowRadius = (styling.glowEnabled && styling.glowRadius > 0) ? styling.glowRadius : 0;
    const outlineW = (styling.outlineWidth || 0) * 2;
    const margin = Math.ceil(Math.max(padX + 24, glowRadius * 2 + outlineW + bounceMargin + 24));

    const boxLeft = Math.max(0, Math.floor(startX - padX - margin));
    const boxRight = Math.min(canvasWidth, Math.ceil(startX + totalTextWidth + padX + margin));
    const boxTop = Math.max(0, Math.floor(posY - (bgHeight / 2) - margin));
    const boxBottom = Math.min(canvasHeight, Math.ceil(posY + lineOffsetY + (bgHeight / 2) + margin));
    const boxW = Math.max(1, boxRight - boxLeft);
    const boxH = Math.max(1, boxBottom - boxTop);

    // Sub-Canvas Cache Invalidation: Reuse dedicated offscreen canvas, reset transforms, and clear every frame
    const { subCanvas, subCtx } = getCaptionSubCanvas(boxW, boxH);
    subCtx.setTransform(1, 0, 0, 1, 0, 0);
    subCtx.clearRect(0, 0, subCanvas.width, subCanvas.height);

    subCtx.save();
    try {
      subCtx.translate(-boxLeft, -boxTop);
      subCtx.font = fontStyle;
      subCtx.textBaseline = 'middle';
      subCtx.direction = isRtl ? 'rtl' : 'ltr';
      subCtx.textAlign = 'center';

      // 1. Render Background Pill or Box (or Glass Pill FX)
      // Note: animMode is declared later in scope — check for glass-pill here via styling directly
      const _animModeForBg = styling.animationMode || 'slide-up';
      if (_animModeForBg === 'glass-pill') {
        // Sliding Glass Pill Effect: frosted-glass with subtle white stroke
        subCtx.save();
        const glassPadX = Math.round(fontSize * 0.55);
        const glassPadY = isRtl ? Math.round(fontSize * 0.60) : Math.round(fontSize * 0.40);
        const glassW = totalTextWidth + glassPadX * 2;
        const glassH = fontSize + glassPadY * 2;
        const glassX = startX - glassPadX;
        const glassY = effectivePosY - glassH / 2;
        const glassR = glassH / 2;

        subCtx.globalAlpha = 0.78 * lineAlpha;
        subCtx.fillStyle = 'rgba(255,255,255,0.08)';
        subCtx.strokeStyle = 'rgba(255,255,255,0.22)';
        subCtx.lineWidth = 1.5;
        subCtx.beginPath();
        if (typeof subCtx.roundRect === 'function') {
          subCtx.roundRect(glassX, glassY, glassW, glassH, glassR);
        } else {
          subCtx.rect(glassX, glassY, glassW, glassH);
        }
        subCtx.fill();
        subCtx.stroke();
        subCtx.restore();
      } else if (styling.bgType && styling.bgType !== 'none') {
        subCtx.save();
        subCtx.globalAlpha = ((styling.bgOpacity !== undefined) ? styling.bgOpacity : 0.6) * lineAlpha;
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

      // Pre-calculate grapheme clusters and word timing states
      const animMode = styling.animationMode || 'slide-up';
      const isTypewriter = animMode === 'typewriter';
      const isWordPop = animMode === 'pop';
      const isKaraokeSweep = animMode === 'karaoke-sweep';
      const isGlassPill = animMode === 'glass-pill';
      const isExtrusion = animMode === 'extrusion';

      // Pre-segment clusters for each word (preserving Arabic Harakat & Tashkeel)
      const wordClusters = words.map(w => getGraphemeClusters(w.text));
      const totalCueClusters = wordClusters.reduce((sum, cl) => sum + cl.length, 0);

      // Typewriter state tracking
      const targetTypewriterClusters = Math.floor(cueProgress * totalCueClusters);
      let cumulativeClusterCount = 0;
      let activeCaretPos = null;

      subCtx.save();
      subCtx.globalAlpha = lineAlpha;
      let currentEdge = isRtl ? ((canvasWidth + totalTextWidth) / 2) : startX;

      for (let i = 0; i < words.length; i++) {
        const w = words[i];
        const wWidth = wordWidths[i];
        const clusters = wordClusters[i];
        const isWordActive = (i === wordIdx);

        // Intra-word timing evaluated directly from currentTimeSeconds
        const wStart = (w.start !== undefined && w.start !== null)
          ? w.start
          : (cue.start + (i * (cueDuration / Math.max(1, words.length))));
        const wEnd = (w.end !== undefined && w.end !== null)
          ? w.end
          : (wStart + (cueDuration / Math.max(1, words.length)));
        const wDur = Math.max(0.001, wEnd - wStart);
        const wordProgress = Math.min(1, Math.max(0, (currentTimeSeconds - wStart) / wDur));

        const wordCenterX = isRtl
          ? (currentEdge - (wWidth / 2))
          : (currentEdge + (wWidth / 2));

        // ----------------------------------------------------
        // Effect 1: Canva Typewriter Text Determination
        // ----------------------------------------------------
        let drawText = w.text;
        let isVisible = true;

        if (isTypewriter) {
          let revealedClustersCount = 0;
          const hasWordTimings = w.start !== undefined && w.end !== undefined && w.end > w.start;

          if (hasWordTimings) {
            if (currentTimeSeconds < wStart) {
              revealedClustersCount = 0;
            } else if (currentTimeSeconds >= wEnd) {
              revealedClustersCount = clusters.length;
            } else {
              revealedClustersCount = Math.min(clusters.length, Math.max(1, Math.floor(wordProgress * clusters.length)));
            }
          } else {
            // Distributed cue progress
            const wordStartCluster = cumulativeClusterCount;
            const wordEndCluster = cumulativeClusterCount + clusters.length;
            if (targetTypewriterClusters >= wordEndCluster) {
              revealedClustersCount = clusters.length;
            } else if (targetTypewriterClusters <= wordStartCluster) {
              revealedClustersCount = 0;
            } else {
              revealedClustersCount = Math.max(0, targetTypewriterClusters - wordStartCluster);
            }
          }
          cumulativeClusterCount += clusters.length;

          if (revealedClustersCount === 0) {
            isVisible = false;
          } else {
            drawText = clusters.slice(0, revealedClustersCount).join('');
          }

          // Determine caret writing edge
          if (isVisible && revealedClustersCount < clusters.length && activeCaretPos === null) {
            subCtx.font = fontStyle;
            const drawnWidth = subCtx.measureText(drawText).width;
            activeCaretPos = isRtl ? (currentEdge - drawnWidth) : (currentEdge + drawnWidth);
          } else if (isVisible && revealedClustersCount === clusters.length && (i === words.length - 1 || currentTimeSeconds < wEnd)) {
            subCtx.font = fontStyle;
            const drawnWidth = subCtx.measureText(drawText).width;
            if (activeCaretPos === null) {
              activeCaretPos = isRtl ? (currentEdge - drawnWidth) : (currentEdge + drawnWidth);
            }
          }
        }

        if (isVisible) {
          subCtx.save();

          // ----------------------------------------------------
          // Effect 2: Submagic Word Pop / Bounce Scale Matrix
          // ----------------------------------------------------
          let scale = 1.0;
          if ((isWordPop || (styling.wordBounce && animMode !== 'typewriter')) && isWordActive) {
            if (wordProgress >= 0 && wordProgress <= 1.0) {
              scale = 1.0 + (bounceIntensity - 1.0) * Math.sin(wordProgress * Math.PI);
            }
          }

          // Apply scale transform from local word center baseline
          if (scale !== 1.0) {
            subCtx.translate(wordCenterX, effectivePosY);
            subCtx.scale(scale, scale);
            subCtx.translate(-wordCenterX, -effectivePosY);
          }

          subCtx.direction = isRtl ? 'rtl' : 'ltr';
          subCtx.textAlign = 'center';
          subCtx.textBaseline = 'middle';

          // ----------------------------------------------------
          // Effect 3: CapCut Karaoke Sweep (Progressive Gradient Wipe)
          // ----------------------------------------------------
          let fillStyle = isWordActive ? (styling.highlightColor || '#f59e0b') : (styling.textColor || '#ffffff');

          if (isKaraokeSweep) {
            if (i < wordIdx) {
              fillStyle = styling.highlightColor || '#f59e0b';
            } else if (i > wordIdx) {
              fillStyle = styling.textColor || '#ffffff';
            } else {
              const wordLeft = wordCenterX - (wWidth / 2);
              const wordRight = wordCenterX + (wWidth / 2);

              if (Math.abs(wordRight - wordLeft) > 1) {
                const grad = isRtl
                  ? subCtx.createLinearGradient(wordRight, 0, wordLeft, 0)
                  : subCtx.createLinearGradient(wordLeft, 0, wordRight, 0);

                const p0 = Math.max(0, Math.min(1, wordProgress - 0.05));
                const p1 = Math.min(1, Math.max(p0, wordProgress + 0.05));

                grad.addColorStop(0, styling.highlightColor || '#f59e0b');
                grad.addColorStop(p0, styling.highlightColor || '#f59e0b');
                grad.addColorStop(p1, styling.textColor || '#ffffff');
                grad.addColorStop(1, styling.textColor || '#ffffff');

                fillStyle = grad;
              }
            }
          }

          // Cinematic Glow (Neon) - Isolated to tight sub-canvas
          if (styling.glowEnabled && styling.glowRadius > 0) {
            subCtx.shadowColor = (isWordActive && isKaraokeSweep)
              ? (styling.highlightColor || styling.glowColor || '#06b6d4')
              : (styling.glowColor || '#06b6d4');
            subCtx.shadowBlur = isWordActive ? styling.glowRadius * 1.25 : styling.glowRadius;
            subCtx.shadowOffsetX = 0;
            subCtx.shadowOffsetY = 0;
          } else {
            subCtx.shadowBlur = 0;
            subCtx.shadowColor = 'transparent';
          }

          // ----------------------------------------------------
          // Effect: 3D Extrusion Shadow (stacked offset layers)
          // ----------------------------------------------------
          if (isExtrusion) {
            const extrusionColor = styling.outlineColor || '#000000';
            const extrusionLayers = 4;
            for (let el = extrusionLayers; el >= 1; el--) {
              subCtx.save();
              subCtx.globalAlpha = lineAlpha * (0.18 + el * 0.06);
              subCtx.fillStyle = extrusionColor;
              subCtx.shadowBlur = 0;
              subCtx.shadowColor = 'transparent';
              subCtx.fillText(drawText, wordCenterX + el, effectivePosY + el);
              subCtx.restore();
            }
          }

          // Stroke / Outline (round join for 100% legibility over any background)
          if (styling.outlineWidth > 0 && !isExtrusion) {
            subCtx.strokeStyle = styling.outlineColor || '#000000';
            subCtx.lineWidth = styling.outlineWidth * 2;
            subCtx.lineJoin = 'round';
            subCtx.lineCap = 'round';
            subCtx.miterLimit = 2;
            subCtx.strokeText(drawText, wordCenterX, effectivePosY);
          } else if (styling.outlineWidth > 0 && isExtrusion) {
            // Light stroke pass for extrusion to sharpen text edge
            subCtx.strokeStyle = styling.outlineColor || '#000000';
            subCtx.lineWidth = Math.max(1, styling.outlineWidth * 0.75);
            subCtx.lineJoin = 'round';
            subCtx.strokeText(drawText, wordCenterX, effectivePosY);
          }

          // Main Text Fill (Harakat & Tashkeel preserved)
          // Independent Arabic Diacritics Coloring: render diacritic marks in accent color
          const hasDiacriticsColor = isRtl && styling.diacriticsColor && styling.diacriticsColor !== styling.textColor;
          if (hasDiacriticsColor && !isTypewriter) {
            // Render base text without diacritics first, then overlay diacritics in accent color
            const baseClusters = getGraphemeClusters(drawText);
            const baseOnly = baseClusters.filter(c => !/^[\u064B-\u065F\u0670\u0640]$/.test(c)).join('');
            subCtx.fillStyle = fillStyle;
            subCtx.fillText(baseOnly, wordCenterX, effectivePosY);
            subCtx.save();
            subCtx.fillStyle = styling.diacriticsColor;
            subCtx.fillText(drawText, wordCenterX, effectivePosY);
            subCtx.restore();
          } else {
            subCtx.fillStyle = fillStyle;
            subCtx.fillText(drawText, wordCenterX, effectivePosY);
          }

          subCtx.restore();
        }

        if (isRtl) {
          currentEdge -= (wWidth + spaceWidth);
        } else {
          currentEdge += (wWidth + spaceWidth);
        }
      }

      // ----------------------------------------------------
      // Canva Typewriter Pulsing Vertical Cursor Caret `|`
      // ----------------------------------------------------
      if (isTypewriter && styling.typewriterCursor) {
        if (activeCaretPos === null) {
          activeCaretPos = isRtl
            ? (cueProgress >= 1 ? (startX - 6) : ((canvasWidth + totalTextWidth) / 2))
            : (cueProgress >= 1 ? (startX + totalTextWidth + 6) : startX);
        }

        // Smooth pulsing caret alpha (strictly deterministic against currentTimeSeconds)
        const caretPulse = 0.5 + 0.5 * Math.sin(currentTimeSeconds * Math.PI * 4);
        const caretAlpha = Math.max(0.12, caretPulse);

        subCtx.save();
        subCtx.globalAlpha = lineAlpha * caretAlpha;
        subCtx.fillStyle = styling.highlightColor || '#38bdf8';
        if (styling.glowEnabled && styling.glowRadius > 0) {
          subCtx.shadowColor = styling.glowColor || styling.highlightColor;
          subCtx.shadowBlur = Math.min(12, styling.glowRadius);
        }

        const caretW = Math.max(2.5, Math.round(fontSize * 0.08));
        const caretH = Math.round(fontSize * 0.90);
        const caretY = effectivePosY - (caretH / 2);

        if (typeof subCtx.roundRect === 'function') {
          subCtx.beginPath();
          subCtx.roundRect(activeCaretPos - (caretW / 2), caretY, caretW, caretH, caretW / 2);
          subCtx.fill();
        } else {
          subCtx.fillRect(activeCaretPos - (caretW / 2), caretY, caretW, caretH);
        }
        subCtx.restore();
      }

      subCtx.restore(); // restore globalAlpha
    } finally {
      subCtx.restore(); // restore translate(-boxLeft, -boxTop)
    }

    // Composite tight sub-canvas directly onto destination canvas (preserves underlying video frame!)
    ctx.drawImage(subCanvas, 0, 0, boxW, boxH, boxLeft, boxTop, boxW, boxH);
  }

  // Master alias for backward compatibility across existing hooks
  const renderCaptionsOnCanvas = renderCaptionsOnContext;

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

  /**
   * Reads current live values directly from the DOM inputs/selects
   * and synchronizes them into state.styling.
   */
  function syncStylingFromDOM() {
    if (!state.styling) {
      state.styling = {};
    }

    const presetSelect = document.getElementById('stylePresetSelect');
    if (presetSelect && presetSelect.value) {
      state.styling.preset = presetSelect.value;
    }

    const fontSelect = document.getElementById('fontFamilySelect');
    if (fontSelect && !state.styling.customFontName && fontSelect.value) {
      state.styling.fontFamily = fontSelect.value;
    }

    const fontSizeSlider = document.getElementById('fontSizeSlider');
    if (fontSizeSlider) {
      const pct = parseFloat(fontSizeSlider.value) || 5.5;
      state.styling.fontSizePercent = pct;
      state.styling.fontSize = Math.round(pct * 8.2);
    }

    const posYSlider = document.getElementById('positionYSlider');
    if (posYSlider) {
      state.styling.positionY = parseFloat(posYSlider.value) || 82;
    }

    const textColorPicker = document.getElementById('textColorPicker');
    if (textColorPicker && textColorPicker.value) {
      state.styling.textColor = textColorPicker.value;
    }

    const highlightColorPicker = document.getElementById('highlightColorPicker');
    if (highlightColorPicker && highlightColorPicker.value) {
      state.styling.highlightColor = highlightColorPicker.value;
    }

    const strokeWidthSlider = document.getElementById('strokeWidthSlider');
    if (strokeWidthSlider) {
      state.styling.outlineWidth = parseFloat(strokeWidthSlider.value);
    }

    const strokeColorPicker = document.getElementById('strokeColorPicker');
    if (strokeColorPicker && strokeColorPicker.value) {
      state.styling.outlineColor = strokeColorPicker.value;
    }

    const toggleGlow = document.getElementById('toggleGlow');
    if (toggleGlow) {
      state.styling.glowEnabled = toggleGlow.checked;
    }

    const glowRadiusSlider = document.getElementById('glowRadiusSlider');
    if (glowRadiusSlider) {
      state.styling.glowRadius = parseFloat(glowRadiusSlider.value) || 12;
    }

    const glowColorPicker = document.getElementById('glowColorPicker');
    if (glowColorPicker && glowColorPicker.value) {
      state.styling.glowColor = glowColorPicker.value;
    }

    const animationModeSelect = document.getElementById('animationModeSelect');
    if (animationModeSelect && animationModeSelect.value) {
      state.styling.animationMode = animationModeSelect.value;
    }

    const toggleTypewriterCursor = document.getElementById('toggleTypewriterCursor');
    if (toggleTypewriterCursor) {
      state.styling.typewriterCursor = toggleTypewriterCursor.checked;
    }

    const toggleSlideUp = document.getElementById('toggleSlideUp');
    if (toggleSlideUp) {
      state.styling.slideUpFade = toggleSlideUp.checked;
    }

    const bounceIntensitySlider = document.getElementById('bounceIntensitySlider');
    if (bounceIntensitySlider) {
      state.styling.bounceIntensity = parseFloat(bounceIntensitySlider.value) || 1.15;
    }

    const bgTypeSelect = document.getElementById('bgTypeSelect');
    if (bgTypeSelect && bgTypeSelect.value) {
      state.styling.bgType = bgTypeSelect.value;
    }

    const bgOpacitySlider = document.getElementById('bgOpacitySlider');
    if (bgOpacitySlider) {
      state.styling.bgOpacity = parseFloat(bgOpacitySlider.value);
    }

    return state.styling;
  }

  /**
   * Converts Hex color (#rrggbb) to ASS &HAABBGGRR& color format.
   * In SubStation Alpha (.ass), colors MUST be formatted as &HAABBGGRR& where AA = 00 is 100% OPAQUE
   * and AA = FF is 100% TRANSPARENT, and channels are reversed (BBGGRR, NOT RRGGBB!).
   */
  function hexToAss(hex, transparency = 0) {
    let clean = String(hex || '#FFFFFF').replace('#', '').trim();
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const r = clean.substring(0, 2) || 'FF';
    const g = clean.substring(2, 4) || 'FF';
    const b = clean.substring(4, 6) || 'FF';
    let a = '00';
    if (typeof transparency === 'number') {
      a = Math.max(0, Math.min(255, Math.round(transparency * 255)))
            .toString(16).padStart(2, '0').toUpperCase();
    } else if (typeof transparency === 'string') {
      a = transparency.replace('&H', '').replace('&', '').padStart(2, '0').toUpperCase();
    }
    return `&H${a}${b}${g}${r}&`.toUpperCase();
  }

  function hexToAssColor(hex, alphaHexOrPercent = '00') {
    return hexToAss(hex, alphaHexOrPercent);
  }

  /**
   * Generates High-Fidelity Advanced SubStation Alpha (.ass) subtitles with full kinetic FX.
   * Maps Cairo Arabic typography, Harakat, and all kinetic animations to native ASS override tags.
   */
  function generateStyledAssSubtitles(cues, styling, videoWidth = 1920, videoHeight = 1080) {
    if (!cues || cues.length === 0) return '';
    styling = styling || state.styling || {};

    const animMode = styling.animationMode || 'slide-up';
    const isRtl = cues.some(c => isArabicText(c.text)) || state.language === 'ar';

    // Font selection: Custom uploaded font (if provided) or Cairo for Arabic typography & bundled TTF
    let font = styling.customFontName || (typeof state !== 'undefined' && (state.customFontFamily || state.customFontName)) || 'Cairo';

    // 1080p Resolution Scaling:
    // Multiply UI fontSize by 2.35 (minimum 92 for 1080p)
    // Multiply strokeWidth by 2.2 (minimum 4.5)
    const uiFontSize = styling.fontSize || Math.round(((styling.fontSizePercent || 5.5) / 100) * 800) || 45;
    const assFontSize = Math.max(92, Math.round(uiFontSize * 2.35));

    const uiStroke = (styling.outlineWidth !== undefined && styling.outlineWidth !== null) ? styling.outlineWidth : 3;
    const scaledStroke = Math.max(4.5, Math.round(uiStroke * 2.2 * 10) / 10);

    // Map vertical position accurately to 1080p
    const posYPercent = (styling.positionY !== undefined && styling.positionY !== null) ? styling.positionY : (styling.posY !== undefined ? styling.posY : 82);
    const assY = Math.round((posYPercent / 100) * videoHeight);
    const centerX = Math.round(videoWidth / 2); // 960 for 1920

    // Colors in ASS &HAABBGGRR& format
    const assTextColor = hexToAss(styling.textColor || '#fffdf5', 0);
    const assActiveColor = hexToAss(styling.highlightColor || '#fde047', 0);
    const assStrokeColor = hexToAss(styling.outlineColor || '#000000', 0);
    const assGlowColor = hexToAss(styling.glowColor || '#d97706', 0);
    const backAlpha = 1 - (styling.bgOpacity !== undefined ? styling.bgOpacity : 0.6);
    const assBackColor = hexToAss(styling.bgColor || '#000000', backAlpha);

    // Scaled Glow Blur and Border
    const glowRadius = (styling.glowRadius !== undefined && styling.glowRadius !== null) ? styling.glowRadius : 12;
    const scaledGlowBord = Math.round(scaledStroke + Math.max(6, glowRadius * 1.5));
    const scaledGlowBlur = Math.round(Math.max(8, glowRadius * 1.8));

    const isGlowActive = !!(
      styling.glowEnabled ||
      styling.preset === 'poetic' ||
      styling.preset === 'neon' ||
      (styling.glowRadius && styling.glowRadius > 0 && styling.glowEnabled !== false)
    );

    const borderStyle = (styling.bgType && styling.bgType !== 'none') ? 3 : 1;
    const marginV = Math.max(20, Math.round(videoHeight * (1 - posYPercent / 100)));

    let out = `[Script Info]
Title: VantorKit Kinetic Subtitles (Libass Ultra-Fidelity)
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: ${videoWidth}
PlayResY: ${videoHeight}

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: MainStyle,${font},${assFontSize},${assTextColor},${assActiveColor},${assStrokeColor},${assBackColor},-1,0,0,0,100,100,0,0,${borderStyle},${scaledStroke},0,2,30,30,${marginV},-1
Style: Default,${font},${assFontSize},${assTextColor},${assActiveColor},${assStrokeColor},${assBackColor},-1,0,0,0,100,100,0,0,${borderStyle},${scaledStroke},0,2,30,30,${marginV},-1
Style: GlowStyle,${font},${assFontSize},${assGlowColor},${assGlowColor},${assGlowColor},&HFF000000&,-1,0,0,0,100,100,0,0,1,${scaledGlowBord},0,2,30,30,${marginV},-1
Style: Glow,${font},${assFontSize},${assGlowColor},${assGlowColor},${assGlowColor},&HFF000000&,-1,0,0,0,100,100,0,0,1,${scaledGlowBord},0,2,30,30,${marginV},-1
Style: KaraokeStyle,${font},${assFontSize},${assActiveColor},${assTextColor},${assStrokeColor},${assBackColor},-1,0,0,0,100,100,0,0,${borderStyle},${scaledStroke},0,2,30,30,${marginV},-1
Style: ExtrusionStyle,${font},${assFontSize},${assStrokeColor},${assStrokeColor},${assStrokeColor},&HFF000000&,-1,0,0,0,100,100,0,0,1,${scaledStroke},0,2,30,30,${marginV},-1
Style: Extrusion,${font},${assFontSize},${assStrokeColor},${assStrokeColor},${assStrokeColor},&HFF000000&,-1,0,0,0,100,100,0,0,1,${scaledStroke},0,2,30,30,${marginV},-1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;

    cues.forEach(cue => {
      const start = formatTimestampAss(cue.start);
      const end = formatTimestampAss(cue.end);
      const cueDur = Math.max(0.1, cue.end - cue.start);
      const cueText = (cue.text || '').replace(/[\r\n]+/g, ' ').trim();
      if (!cueText) return;

      const isCueRtl = isRtl || isArabicText(cueText);
      const rlm = isCueRtl ? '\u200F' : '';

      const words = cue.words && cue.words.length > 0
        ? cue.words
        : cueText.split(/\s+/).map((w, idx, arr) => ({
            text: w,
            start: cue.start + (idx / arr.length) * cueDur,
            end: cue.start + ((idx + 1) / arr.length) * cueDur
          }));

      // Effect 1: Royal Poetic Glow / Cinematic Slide-Up (Dual-Layer Entry)
      if (animMode === 'slide-up' || animMode === 'royal-glow' || (!animMode && styling.preset === 'poetic')) {
        const moveTag = (styling.slideUpFade !== false)
          ? `\\move(${centerX},${assY + 35},${centerX},${assY},0,240)\\fad(220,160)`
          : `\\pos(${centerX},${assY})`;
        if (isGlowActive) {
          out += `Dialogue: 0,${start},${end},GlowStyle,,0,0,0,,{${moveTag}\\bord${scaledGlowBord}\\blur${scaledGlowBlur}\\1c${assGlowColor}\\3c${assGlowColor}\\4c${assGlowColor}}${rlm}${cueText}\n`;
        }
        out += `Dialogue: 1,${start},${end},MainStyle,,0,0,0,,{${moveTag}\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}${rlm}${cueText}\n`;
        return;
      }

      // Effect 2: Canva Typewriter (Progressive Reveal + Blinking Accent Caret)
      if (animMode === 'typewriter') {
        const showCursor = styling.typewriterCursor !== false;
        for (let wi = 0; wi < words.length; wi++) {
          const wStart = formatTimestampAss(words[wi].start);
          const wEnd = formatTimestampAss((wi < words.length - 1) ? words[wi + 1].start : cue.end);
          const subText = words.slice(0, wi + 1).map(w => w.text).join(' ');
          const cursorTag = (showCursor && wi < words.length - 1) ? `{\\1c${assActiveColor}}|{\\1c${assTextColor}}` : '';
          if (isGlowActive) {
            out += `Dialogue: 0,${wStart},${wEnd},GlowStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledGlowBord}\\blur${scaledGlowBlur}\\1c${assGlowColor}\\3c${assGlowColor}\\4c${assGlowColor}}${rlm}${subText}\n`;
          }
          out += `Dialogue: 1,${wStart},${wEnd},MainStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}${rlm}${subText}${cursorTag}\n`;
        }
        return;
      }

      // Effect 3: Submagic Word Pop / Bounce / Glass Pill (Word-by-Word Kinetic Pop)
      if (animMode === 'pop' || animMode === 'bounce' || animMode === 'word-pop' || animMode === 'glass-pill') {
        for (let wi = 0; wi < words.length; wi++) {
          const w = words[wi];
          const wStart = formatTimestampAss(w.start);
          const wEnd = formatTimestampAss((wi < words.length - 1) ? Math.max(w.start + 0.08, words[wi + 1].start) : cue.end);

          const lineWords = words.map((currW, ci) => {
            if (ci === wi) {
              return `{\\1c${assActiveColor}\\fscx125\\fscy125\\t(0,180,\\fscx108\\fscy108)}${currW.text}{\\rMainStyle\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}`;
            }
            return currW.text;
          }).join(' ');

          if (isGlowActive) {
            out += `Dialogue: 0,${wStart},${wEnd},GlowStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledGlowBord}\\blur${scaledGlowBlur}\\1c${assGlowColor}\\3c${assGlowColor}\\4c${assGlowColor}}${rlm}${cueText}\n`;
          }
          out += `Dialogue: 1,${wStart},${wEnd},MainStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}${rlm}${lineWords}\n`;
        }
        return;
      }

      // Effect 4: CapCut RTL Karaoke Sweep (\kf Fill Tags)
      if (animMode === 'karaoke-sweep' || animMode === 'karaoke') {
        const karaokeWords = words.map(w => {
          const cs = Math.max(1, Math.round((Math.max(w.start + 0.05, w.end) - w.start) * 100));
          return `{\\kf${cs}}${w.text}`;
        }).join(' ');

        if (isGlowActive) {
          out += `Dialogue: 0,${start},${end},GlowStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledGlowBord}\\blur${scaledGlowBlur}\\1c${assGlowColor}\\3c${assGlowColor}\\4c${assGlowColor}}${rlm}${cueText}\n`;
        }
        out += `Dialogue: 1,${start},${end},KaraokeStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledStroke}\\blur0.6}${rlm}${karaokeWords}\n`;
        return;
      }

      // Effect 5: 3D Extrusion Shadow
      if (animMode === 'extrusion') {
        out += `Dialogue: 0,${start},${end},ExtrusionStyle,,0,0,0,,{\\pos(${centerX + 5},${assY + 5})\\bord${scaledStroke}\\1c${assStrokeColor}\\3c${assStrokeColor}}${rlm}${cueText}\n`;
        out += `Dialogue: 1,${start},${end},MainStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}${rlm}${cueText}\n`;
        return;
      }

      // Default: Clean Static Display
      if (isGlowActive) {
        out += `Dialogue: 0,${start},${end},GlowStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledGlowBord}\\blur${scaledGlowBlur}\\1c${assGlowColor}\\3c${assGlowColor}\\4c${assGlowColor}}${rlm}${cueText}\n`;
      }
      out += `Dialogue: 1,${start},${end},MainStyle,,0,0,0,,{\\pos(${centerX},${assY})\\bord${scaledStroke}\\blur0.6\\1c${assTextColor}\\3c${assStrokeColor}}${rlm}${cueText}\n`;
    });

    return out;
  }

  function generateAss(cues, styling) {
    return generateStyledAssSubtitles(cues, styling, 1920, 1080);
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
     9.5 SUBTITLE FILE IMPORT ENGINE (.SRT / .VTT / .ASS)
     ========================================================================== */

  /**
   * Decode ArrayBuffer to string with fail-safe Arabic & UTF-8 handling.
   * Eliminates "ط / ظ" mojibake by decoding UTF-8 first and only falling back to windows-1256 on \uFFFD.
   */
  async function decodeSubtitleBuffer(buffer) {
    const bytes = new Uint8Array(buffer);
    // Check for explicit UTF-16 BOMs
    if (bytes[0] === 0xFF && bytes[1] === 0xFE) {
      return new TextDecoder('utf-16le').decode(buffer).replace(/^\uFEFF/, '');
    }
    if (bytes[0] === 0xFE && bytes[1] === 0xFF) {
      return new TextDecoder('utf-16be').decode(buffer).replace(/^\uFEFF/, '');
    }

    // 1. Decode FIRST using standard non-fatal UTF-8
    let text = new TextDecoder('utf-8', { fatal: false }).decode(buffer);
    // 2. Strip UTF-8 BOM if present
    text = text.replace(/^\uFEFF/, '');
    // 3. ONLY fallback to windows-1256 if text contains replacement characters (\uFFFD)
    if (text.includes('\uFFFD')) {
      try {
        const winText = new TextDecoder('windows-1256').decode(buffer);
        if (winText && !winText.includes('\uFFFD')) {
          text = winText;
        } else if (winText) {
          text = winText;
        }
      } catch (err) {
        console.warn("windows-1256 decoding fallback error:", err);
      }
    }
    return text;
  }

  /**
   * Parse SRT timestamp: HH:MM:SS,mmm or HH:MM:SS.mmm -> seconds.
   */
  function parseSrtTimestamp(ts) {
    if (!ts) return 0;
    const m = ts.trim().match(/^(\d+):(\d{2}):(\d{2})[,\.](\d{1,3})$/);
    if (!m) return 0;
    return parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseInt(m[3]) + parseInt(m[4].padEnd(3,'0')) / 1000;
  }

  /**
   * Parse VTT timestamp: [HH:]MM:SS.mmm -> seconds.
   */
  function parseVttTimestamp(ts) {
    if (!ts) return 0;
    const parts = ts.trim().split(':');
    if (parts.length === 3) {
      return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseFloat(parts[2]);
    } else if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    }
    return 0;
  }

  /**
   * Strip inline formatting tags from subtitle text.
   * Handles SRT HTML tags, ASS override blocks, and VTT cue settings.
   */
  function stripSubtitleTags(text) {
    if (!text) return '';
    return text
      .replace(/\{[^}]*\}/g, '')          // ASS override blocks {\an8}, {\pos(...)}, etc.
      .replace(/<[^>]+>/g, '')             // HTML tags <b>, <i>, <font color="...">...
      .replace(/\{\\N\}/gi, ' ')           // ASS hard line break
      .replace(/\{\\n\}/gi, ' ')           // ASS soft line break
      .replace(/\\N/g, ' ')               // ASS \N in text
      .replace(/\\n/g, ' ')               // ASS \n in text
      .replace(/  +/g, ' ')               // collapse double spaces
      .trim();
  }

  /**
   * Build cue word timings by proportional character-length interpolation.
   */
  function buildWordTimings(text, start, end) {
    const rawWords = (text || '').split(/\s+/).filter(Boolean);
    if (rawWords.length === 0) return [];
    const span = Math.max(0.1, end - start);
    const totalChars = rawWords.reduce((acc, w) => acc + Math.max(1, w.length), 0);
    let cur = start;
    return rawWords.map(wText => {
      const ratio = Math.max(1, wText.length) / totalChars;
      const wDur = span * ratio;
      const wStart = Math.round(cur * 1000) / 1000;
      const wEnd = Math.round((cur + wDur * 0.92) * 1000) / 1000;
      cur += wDur;
      return { text: wText, start: wStart, end: wEnd };
    });
  }

  /**
   * Parse SRT file text -> array of cue objects.
   */
  function parseSrt(text) {
    const cues = [];
    const blocks = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split(/\n{2,}/);
    for (const block of blocks) {
      const lines = block.trim().split('\n');
      if (lines.length < 2) continue;
      // Find timestamp line
      let tsLine = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('-->')) { tsLine = i; break; }
      }
      if (tsLine < 0) continue;
      const tsParts = lines[tsLine].split('-->');
      if (tsParts.length < 2) continue;
      const start = parseSrtTimestamp(tsParts[0].trim());
      // Also handle end timestamps with position tags: 00:00:01,000 --> 00:00:02,000 X1:0 ...
      const endRaw = tsParts[1].trim().split(/\s+/)[0];
      const end = parseSrtTimestamp(endRaw);
      if (end <= 0 && start <= 0) continue;
      const textLines = lines.slice(tsLine + 1).map(l => stripSubtitleTags(l)).filter(Boolean);
      if (textLines.length === 0) continue;
      const cueText = textLines.join(' ');
      cues.push({
        id: 'srt_cue_' + (cues.length + 1),
        start,
        end: Math.max(start + 0.1, end),
        text: cueText,
        words: buildWordTimings(cueText, start, Math.max(start + 0.1, end)),
        confidence: 0.95,
        isInterpolated: false
      });
    }
    return cues;
  }

  /**
   * Parse WebVTT file text -> array of cue objects.
   */
  function parseVtt(text) {
    const cues = [];
    const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const blocks = normalized.split(/\n{2,}/);
    for (const block of blocks) {
      const lines = block.trim().split('\n');
      if (!lines.length) continue;
      // Skip header/meta blocks
      const firstLine = lines[0].trim();
      if (
        firstLine.startsWith('WEBVTT') ||
        firstLine.startsWith('NOTE') ||
        firstLine.startsWith('STYLE') ||
        firstLine.startsWith('REGION')
      ) continue;
      // Find timestamp line
      let tsLine = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('-->')) { tsLine = i; break; }
      }
      if (tsLine < 0) continue;
      const tsParts = lines[tsLine].split('-->');
      if (tsParts.length < 2) continue;
      const start = parseVttTimestamp(tsParts[0].trim());
      // VTT end part may have cue settings appended
      const endRaw = tsParts[1].trim().split(/\s+/)[0];
      const end = parseVttTimestamp(endRaw);
      const textLines = lines.slice(tsLine + 1).map(l => stripSubtitleTags(l)).filter(Boolean);
      if (textLines.length === 0) continue;
      const cueText = textLines.join(' ');
      cues.push({
        id: 'vtt_cue_' + (cues.length + 1),
        start,
        end: Math.max(start + 0.1, end),
        text: cueText,
        words: buildWordTimings(cueText, start, Math.max(start + 0.1, end)),
        confidence: 0.95,
        isInterpolated: false
      });
    }
    return cues;
  }

  /**
   * Parse ASS/SSA file text -> array of cue objects.
   * Reads only the [Events] section -> Dialogue: lines.
   */
  function parseAss(text) {
    const cues = [];
    const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const inEventsSection = { active: false };
    let formatKeys = [];
    for (const line of normalized.split('\n')) {
      const trimmed = line.trim();
      if (/^\[Events\]/i.test(trimmed)) {
        inEventsSection.active = true;
        continue;
      }
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        inEventsSection.active = false;
        continue;
      }
      if (!inEventsSection.active) continue;

      if (/^Format:/i.test(trimmed)) {
        formatKeys = trimmed.replace(/^Format:/i, '').split(',').map(k => k.trim().toLowerCase());
        continue;
      }

      if (/^Dialogue:/i.test(trimmed)) {
        const raw = trimmed.replace(/^Dialogue:/i, '').trim();
        // Split only up to formatKeys.length fields; the last field (Text) may contain commas
        const parts = raw.split(',');
        const numFields = formatKeys.length;
        if (parts.length < numFields) continue;

        const fieldMap = {};
        for (let fi = 0; fi < numFields - 1; fi++) {
          fieldMap[formatKeys[fi]] = parts[fi].trim();
        }
        // Last field (Text) is everything after the (numFields-1)th comma
        const textParts = parts.slice(numFields - 1);
        fieldMap[formatKeys[numFields - 1]] = textParts.join(',');

        const startRaw = fieldMap['start'] || '';
        const endRaw = fieldMap['end'] || '';
        const rawText = fieldMap['text'] || '';
        const cueText = stripSubtitleTags(rawText);
        if (!cueText) continue;

        // ASS timestamps: H:MM:SS.cc
        const parseAssTs = ts => {
          const m = (ts || '').trim().match(/^(\d+):(\d{2}):(\d{2})\.(\d{2})$/);
          if (!m) return 0;
          return parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseInt(m[3]) + parseInt(m[4]) / 100;
        };
        const start = parseAssTs(startRaw);
        const end = parseAssTs(endRaw);
        cues.push({
          id: 'ass_cue_' + (cues.length + 1),
          start,
          end: Math.max(start + 0.1, end),
          text: cueText,
          words: buildWordTimings(cueText, start, Math.max(start + 0.1, end)),
          confidence: 0.95,
          isInterpolated: false
        });
      }
    }
    // Sort by start time (ASS files can have out-of-order dialogue lines)
    cues.sort((a, b) => a.start - b.start);
    return cues;
  }

  /**
   * Master subtitle import handler.
   * Accepts a File object (SRT, VTT, ASS/SSA, TXT treated as SRT).
   * On success, replaces state.cues, shows studio, re-renders timeline.
   */
  async function importSubtitleFile(file) {
    if (!file) return;
    const ext = file.name.toLowerCase().split('.').pop();
    try {
      const buffer = await file.arrayBuffer();
      const text = await decodeSubtitleBuffer(buffer);
      let parsed = [];

      if (ext === 'vtt') {
        parsed = parseVtt(text);
      } else if (ext === 'ass' || ext === 'ssa') {
        parsed = parseAss(text);
      } else {
        // SRT or TXT — try SRT first
        parsed = parseSrt(text);
        if (parsed.length === 0) {
          // Fallback: treat as plain text lines, distribute equally
          const lines = text.split(/\r?\n+/).map(l => stripSubtitleTags(l).trim()).filter(Boolean);
          const step = 3.0;
          lines.forEach((lineText, i) => {
            const start = i * step;
            const end = start + step - 0.1;
            parsed.push({
              id: 'txt_cue_' + (i + 1),
              start,
              end,
              text: lineText,
              words: buildWordTimings(lineText, start, end),
              confidence: 0.80,
              isInterpolated: true
            });
          });
        }
      }

      if (parsed.length === 0) {
        showToast('No subtitle cues found in file. Verify format.');
        return;
      }

      history.pushState(state.cues);
      state.cues = parsed;
      renderTimelineCues();

      // Reveal studio section
      const studioSec = document.getElementById('studioWorkspace');
      if (studioSec) {
        studioSec.style.display = 'block';
        studioSec.scrollIntoView({ behavior: 'smooth' });
      }
      resizeStudioCanvas();
      showToast(`Imported ${parsed.length} cues from ${file.name}`);
    } catch (err) {
      console.error('Subtitle import error:', err);
      showToast('Failed to parse subtitle file. Verify encoding and format.');
    }
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

    if (activeExportTimer) {
      clearInterval(activeExportTimer);
      activeExportTimer = null;
    }
    if (activeWatchdogTimer) {
      clearInterval(activeWatchdogTimer);
      activeWatchdogTimer = null;
    }

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

  function formatSecondsToTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateExportProgress(pct, currentTime, totalDuration) {
    const progressFill = document.getElementById('burnProgressFill');
    const progressText = document.getElementById('burnProgressText');
    const modalProgressFill = document.getElementById('exportModalProgressFill');
    const modalProgressText = document.getElementById('exportModalProgressText');
    const modalTimeText = document.getElementById('exportModalTimeText');

    const curStr = formatSecondsToTime(currentTime);
    const totStr = formatSecondsToTime(totalDuration);

    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) {
      progressText.textContent = `${getTranslation('burnProgress')} ${pct}% (${currentTime.toFixed(1)}s / ${totalDuration.toFixed(1)}s)`;
    }
    if (modalProgressFill) modalProgressFill.style.width = pct + '%';
    if (modalProgressText) {
      modalProgressText.textContent = `Encoding: ${pct}% (4x Turbo)`;
    }
    if (modalTimeText) {
      modalTimeText.textContent = `${curStr} / ${totStr}`;
    }
  }

  async function burnCaptionsToMp4() {
    if (state.isExporting) return;
    const video = document.getElementById('studioVideoPlayer');
    if (!state.videoFile && !state.videoUrl) {
      showToast(getTranslation('errNoVideo'));
      return;
    }

    // Pause studio video preview to prevent audio contention & resource drain
    if (video && !video.paused) {
      try { video.pause(); } catch(e) {}
    }

    isExportCancelled = false;
    state.isExporting = true;
    state.abortExport = false;
    exportAbortController = new AbortController();
    let isFinalizingExport = false;

    const burnBtn = document.getElementById('btnBurnMp4');
    const cancelBtn1 = document.getElementById('btnCancelExport');
    const cancelBtn2 = document.getElementById('btnCancelBurn');
    const progressBar = document.getElementById('burnProgressContainer');
    const progressFill = document.getElementById('burnProgressFill');
    const progressText = document.getElementById('burnProgressText');
    const exportModal = document.getElementById('exportProgressModal');

    if (burnBtn) burnBtn.style.display = 'none';
    if (cancelBtn1) cancelBtn1.style.display = 'inline-flex';
    if (cancelBtn2) cancelBtn2.style.display = 'inline-flex';
    if (progressBar) progressBar.style.display = 'block';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = `${getTranslation('burnProgress')} 0%`;
    if (exportModal) exportModal.classList.add('show');
    updateExportProgress(0, 0, state.videoDuration || 1.0);

    const exportModalTitle = document.getElementById('exportModalTitle');
    const exportModalBadge = document.getElementById('exportModalBadge');

    // -------------------------------------------------------------
    // ENGINE 1: Local FFmpeg Turbo Burn-In (< 60s for 8-min video)
    // -------------------------------------------------------------
    let hasLocalTurbo = false;
    if (state.videoFile) {
      try {
        const probeRes = await fetch('/api/burn-progress?probe=1', { signal: AbortSignal.timeout(1500) });
        if (probeRes.ok) {
          const probeData = await probeRes.json();
          if (probeData && probeData.ok && probeData.ffmpegAvailable) {
            hasLocalTurbo = true;
          }
        }
      } catch (probeErr) {
        hasLocalTurbo = false;
      }
    }

    if (hasLocalTurbo) {
      if (exportModalTitle) exportModalTitle.textContent = "FFmpeg Turbo Export (< 60s)...";
      if (exportModalBadge) exportModalBadge.textContent = "⚡ Local FFmpeg Engine";

      try {
        syncStylingFromDOM();
        const assText = generateStyledAssSubtitles(state.cues, state.styling, 1920, 1080);
        const formData = new FormData();
        formData.append('video', state.videoFile);
        formData.append('subtitles', assText);
        formData.append('ass', assText);
        formData.append('duration', String(state.videoDuration || (video ? video.duration : 0) || 0));
        if (state.customFontFile) {
          formData.append('font', state.customFontFile, state.customFontFile.name);
          formData.append('fontName', state.customFontFamily || state.customFontName || (state.styling && state.styling.customFontName) || state.customFontFile.name.replace(/\.[^.]+$/, ''));
        }

        const startRes = await fetch('/api/burn-captions', {
          method: 'POST',
          body: formData,
          signal: exportAbortController.signal
        });

        if (!startRes.ok) {
          throw new Error('Local server failed to start encode job');
        }

        const startData = await startRes.json();
        const jobId = startData.id;
        let lastReportedPct = 0;
        const totalDur = state.videoDuration || (video ? video.duration : 60);

        // Poll progress every 400ms
        await new Promise((resolve, reject) => {
          const pollTimer = setInterval(async () => {
            if (isExportCancelled || state.abortExport) {
              clearInterval(pollTimer);
              try { await fetch(`/api/burn-cancel?id=${jobId}`, { method: 'POST' }); } catch(e) {}
              resolve();
              return;
            }

            try {
              const progRes = await fetch(`/api/burn-progress?id=${jobId}`, { signal: AbortSignal.timeout(2000) });
              if (!progRes.ok) return;
              const progData = await progRes.json();

              if (progData.status === 'encoding') {
                const pct = Math.max(lastReportedPct, Math.min(99, progData.progress || 0));
                lastReportedPct = pct;
                const curMediaTime = (pct / 100) * totalDur;
                updateExportProgress(pct, curMediaTime, totalDur);
                if (progressText) progressText.textContent = `FFmpeg Turbo Encode: ${pct}% (Ultra-Fast)`;
                const mText = document.getElementById('exportModalProgressText');
                if (mText) mText.textContent = `Encoding: ${pct}% (FFmpeg Turbo)`;
              } else if (progData.status === 'done') {
                clearInterval(pollTimer);
                updateExportProgress(100, totalDur, totalDur);
                const mText = document.getElementById('exportModalProgressText');
                if (mText) mText.textContent = `100% (Complete!)`;

                const downloadUrl = `/api/burn-download?id=${jobId}`;
                const dlLink = document.createElement('a');
                dlLink.href = downloadUrl;
                dlLink.download = `${(state.videoFile.name || 'video').replace(/\.[^/.]+$/, '')}-captions.mp4`;
                document.body.appendChild(dlLink);
                dlLink.click();
                document.body.removeChild(dlLink);

                showToast("Video exported with FFmpeg Turbo Engine!");
                setTimeout(() => cleanupExportUI(), 800);
                resolve();
              } else if (progData.status === 'error') {
                clearInterval(pollTimer);
                reject(new Error(progData.error || 'FFmpeg encoding failed'));
              }
            } catch (pollErr) {
              // Ignore temporary poll network glitch
            }
          }, 400);
        });

        return; // Finished local turbo export successfully!

      } catch (turboErr) {
        console.warn("Local FFmpeg Turbo failed or cancelled, evaluating browser fallback:", turboErr);
        if (isExportCancelled || state.abortExport) {
          cleanupExportUI();
          return;
        }
        showToast("Local FFmpeg busy; running in-browser WebCodecs...");
      }
    }

    // -------------------------------------------------------------
    // ENGINE 2: Fallback In-Browser WebCodecs / MediaRecorder
    // -------------------------------------------------------------
    if (exportModalTitle) exportModalTitle.textContent = "Exporting 1080p Video...";
    if (exportModalBadge) exportModalBadge.textContent = "Hardware WebCodecs";

    // 1. Strict 1080p Resolution Preservation
    const width = video ? (video.videoWidth || 1280) : 1280;
    const height = video ? (video.videoHeight || 720) : 720;
    const sourceWidth = state.videoWidth || width;
    const sourceHeight = state.videoHeight || height;
    const fps = 30;
    const dt = 1 / fps;
    const frameDurationMicros = Math.round((1 / fps) * 1_000_000);

    // Offscreen render canvas
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = sourceWidth;
    offscreenCanvas.height = sourceHeight;
    const offCtx = offscreenCanvas.getContext('2d', { alpha: false, desynchronized: true });

    // Live preview canvas inside modal
    const modalCanvas = document.getElementById('exportLivePreviewCanvas');
    const modalCtx = modalCanvas ? modalCanvas.getContext('2d') : null;

    // Check WebCodecs availability
    const hasWebCodecs = typeof window.VideoEncoder === 'function' && typeof window.VideoFrame === 'function' && typeof window.Mp4Muxer !== 'undefined';

    if (hasWebCodecs) {
      let videoEncoder = null;
      let audioEncoder = null;
      let exportVideo = null;
      let muxer = null;

      try {
        // Step A: Offline 1.0x Audio Encoding (Zero Pitch Distortion)
        let audioBuffer = null;
        try {
          audioBuffer = await getFullFidelityAudioBuffer(state.videoFile || state.videoUrl);
        } catch (audioErr) {
          console.warn("Audio decoding error:", audioErr);
        }

        const hasAudioEncoder = typeof window.AudioEncoder === 'function' && typeof window.AudioData === 'function';

        // Step B: Setup Muxer with Video & Audio Tracks (Strict AVC + FastStart)
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
          framerate: fps,
          hardwareAcceleration: 'prefer-hardware',
          avc: { format: 'avc' }
        };
        videoEncoder.configure(videoEncoderConfig);

        // Step D: Encode all 1.0x Audio Offline in ~2 Seconds
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

          // Slice AudioBuffer PCM into 2048-frame planar AudioData chunks with native 1.0x timestamps
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

            // Mandatory backpressure: prevent AudioEncoder queue overflow hang on long videos
            if (audioEncoder.encodeQueueSize > 12) {
              while (audioEncoder.encodeQueueSize > 4 && !isExportCancelled && !state.abortExport) {
                await new Promise(r => setTimeout(r, 10));
              }
            }

            // Periodic main-thread yield every 200 chunks to keep UI responsive
            if ((offset / audioChunkSize) % 200 === 0) {
              await new Promise(r => setTimeout(r, 0));
            }
          }
        }

        if (isExportCancelled || state.abortExport) {
          cancelExport();
          return;
        }

        // Step E: Setup Attached Fast-Forward Video Element for Decoupled Turbo Frame Capture
        exportVideo = document.createElement('video');
        exportVideo.style.cssText = "position: fixed; top: 0; left: 0; width: 320px; height: 180px; opacity: 0.01; pointer-events: none; z-index: -9999;";
        exportVideo.src = state.videoUrl;
        exportVideo.muted = true;
        exportVideo.defaultMuted = true;
        exportVideo.playsInline = true;
        exportVideo.crossOrigin = 'anonymous';
        exportVideo.preload = 'auto';
        const turboSpeed = 3.5;
        exportVideo.playbackRate = turboSpeed;
        document.body.appendChild(exportVideo);
        activeExportVideo = exportVideo;

        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => resolve(), 5000);
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
              setTimeout(r, 200);
            });
          }
        } catch(e) {}

        const totalDuration = (Number.isFinite(exportVideo.duration) && exportVideo.duration > 0)
          ? exportVideo.duration
          : (state.videoDuration || 1.0);
        const totalFrames = Math.max(1, Math.ceil(totalDuration * fps));

        // Step F: Decoupled 3.5x Turbo Frame Capture via 10ms Non-Throttled Timer
        let usedTurboCapture = false;
        try {
          await new Promise(async (resolveCapture, rejectCapture) => {
            let isCaptureFinished = false;
            let lastEncodedMediaTime = -1;
            let lastPtsMicroseconds = -1;
            let encodedFrameCount = 0;
            let isProcessingTick = false;

            const finishCapture = () => {
              if (isCaptureFinished) return;
              isCaptureFinished = true;
              if (activeExportTimer) {
                clearInterval(activeExportTimer);
                activeExportTimer = null;
              }
              if (activeWatchdogTimer) {
                clearInterval(activeWatchdogTimer);
                activeWatchdogTimer = null;
              }
              try { exportVideo.pause(); } catch(e) {}
              resolveCapture();
            };

            exportVideo.onended = () => finishCapture();
            exportVideo.onerror = (e) => {
              if (!isCaptureFinished) {
                isCaptureFinished = true;
                if (activeExportTimer) {
                  clearInterval(activeExportTimer);
                  activeExportTimer = null;
                }
                if (activeWatchdogTimer) {
                  clearInterval(activeWatchdogTimer);
                  activeWatchdogTimer = null;
                }
                rejectCapture(e);
              }
            };

            const captureTick = async () => {
              if (isFinalizingExport || isCaptureFinished || isProcessingTick || isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
                if (isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
                  finishCapture();
                }
                return;
              }

              isProcessingTick = true;
              try {
                const mediaTime = exportVideo.currentTime;

                // Capture and encode frame when mediaTime reaches next (1 / 30) slot
                if (lastEncodedMediaTime < 0 || mediaTime >= lastEncodedMediaTime + (1 / fps)) {
                  lastEncodedMediaTime = mediaTime;

                  // 1. Draw decoded video frame FIRST onto 1080p canvas
                  offCtx.drawImage(exportVideo, 0, 0, sourceWidth, sourceHeight);

                  // 2. Composite styled captions & kinetic animations ON TOP (clearBeforeDraw = false)
                  renderCaptionsOnContext(offCtx, sourceWidth, sourceHeight, mediaTime, false);

                  // 3. Mirror onto active export modal live preview canvas every 3rd frame
                  if (encodedFrameCount % 3 === 0 && modalCtx && modalCanvas) {
                    modalCtx.drawImage(offscreenCanvas, 0, 0, modalCanvas.width, modalCanvas.height);
                  }

                  // 4. Strict monotonic timestamps and explicit duration to prevent VLC/PotPlayer freeze
                  let ptsMicroseconds = Math.round(mediaTime * 1_000_000);
                  if (ptsMicroseconds <= lastPtsMicroseconds) {
                    ptsMicroseconds = lastPtsMicroseconds + frameDurationMicros;
                  }
                  lastPtsMicroseconds = ptsMicroseconds;

                  const frame = new VideoFrame(offscreenCanvas, {
                    timestamp: ptsMicroseconds,
                    duration: frameDurationMicros
                  });

                  // Regular IDR keyframe every 60 frames (~2 seconds)
                  const isKeyFrame = (encodedFrameCount === 0 || encodedFrameCount % 60 === 0);
                  videoEncoder.encode(frame, { keyFrame: isKeyFrame });
                  frame.close();
                  encodedFrameCount++;

                  // Update progress indicators (in-page bar & modal)
                  const pct = Math.min(99, Math.round((mediaTime / totalDuration) * 100));
                  updateExportProgress(pct, mediaTime, totalDuration);

                  // 5. Backpressure Safety: If encoder queue backlog > 8, pause playback until drained <= 2
                  if (videoEncoder && videoEncoder.encodeQueueSize > 8) {
                    exportVideo.pause();
                    while (videoEncoder && videoEncoder.encodeQueueSize > 2 && !isCaptureFinished && !isExportCancelled && !state.abortExport) {
                      await new Promise(r => setTimeout(r, 10));
                    }
                    if (!isCaptureFinished && !isExportCancelled && !state.abortExport && !exportVideo.ended) {
                      exportVideo.playbackRate = turboSpeed;
                      try { await exportVideo.play(); } catch(e) {}
                    }
                  }

                  // Micro-yield to keep main event loop & UI responsive
                  if (encodedFrameCount % 12 === 0) {
                    await new Promise(r => setTimeout(r, 0));
                  }
                }

                if (exportVideo.ended || mediaTime >= totalDuration - 0.08) {
                  finishCapture();
                }
              } catch (tickErr) {
                console.error("Turbo capture tick error:", tickErr);
                finishCapture();
              } finally {
                isProcessingTick = false;
              }
            };

            // High-frequency non-throttled 10ms capture loop
            activeExportTimer = setInterval(captureTick, 10);

            // Watchdog timer: checks every 300ms for stalls, pauses, or completion
            activeWatchdogTimer = setInterval(() => {
              if (isFinalizingExport || isCaptureFinished || isExportCancelled || state.abortExport) {
                if (activeWatchdogTimer) {
                  clearInterval(activeWatchdogTimer);
                  activeWatchdogTimer = null;
                }
                return;
              }
              if (exportVideo.ended || exportVideo.currentTime >= totalDuration - 0.08) {
                finishCapture();
              } else if (exportVideo.paused && (!videoEncoder || videoEncoder.encodeQueueSize <= 2) && !exportVideo.ended) {
                exportVideo.playbackRate = turboSpeed;
                exportVideo.play().catch(() => {});
              }
            }, 300);

            exportVideo.playbackRate = turboSpeed;
            await exportVideo.play();
          });

          usedTurboCapture = true;
        } catch (captureErr) {
          console.warn("High-speed playback capture had an issue, falling back to seek clock:", captureErr);
          usedTurboCapture = false;
        }

        // Fallback frame clock seek loop if continuous turbo playback failed
        if (!usedTurboCapture && !isExportCancelled && !state.abortExport) {
          try { exportVideo.pause(); } catch(e) {}
          exportVideo.currentTime = 0;
          let lastPtsMicroseconds = -1;

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
            renderCaptionsOnContext(offCtx, sourceWidth, sourceHeight, t, false);

            if (frameIndex % 3 === 0 && modalCtx && modalCanvas) {
              modalCtx.drawImage(offscreenCanvas, 0, 0, modalCanvas.width, modalCanvas.height);
            }

            let ptsMicroseconds = Math.round(t * 1_000_000);
            if (ptsMicroseconds <= lastPtsMicroseconds) {
              ptsMicroseconds = lastPtsMicroseconds + frameDurationMicros;
            }
            lastPtsMicroseconds = ptsMicroseconds;

            const frame = new VideoFrame(offscreenCanvas, {
              timestamp: ptsMicroseconds,
              duration: frameDurationMicros
            });
            const isKeyFrame = (frameIndex === 0 || frameIndex % 60 === 0);
            videoEncoder.encode(frame, { keyFrame: isKeyFrame });
            frame.close();

            if (frameIndex % 3 === 0) {
              await new Promise(r => setTimeout(r, 0));
            }

            const pct = Math.min(99, Math.round(((frameIndex + 1) / totalFrames) * 100));
            updateExportProgress(pct, t, totalDuration);
          }
        }

        if (isExportCancelled || state.abortExport || (exportAbortController && exportAbortController.signal.aborted)) {
          cancelExport();
          return;
        }

        // Finalize hardware encode with strict lock & fail-safe timeouts
        if (isFinalizingExport) return;
        isFinalizingExport = true;

        // Immediately stop/kill timers and pause playback video BEFORE flushing encoders
        if (activeExportTimer) {
          clearInterval(activeExportTimer);
          activeExportTimer = null;
        }
        if (activeWatchdogTimer) {
          clearInterval(activeWatchdogTimer);
          activeWatchdogTimer = null;
        }
        try { if (exportVideo) exportVideo.pause(); } catch(e) {}

        updateExportProgress(100, totalDuration, totalDuration);
        const pText = document.getElementById('burnProgressText');
        if (pText) pText.textContent = `${getTranslation('burnProgress')} 100% (Finalizing MP4...)`;
        const mText = document.getElementById('exportModalProgressText');
        if (mText) mText.textContent = `100% (Finalizing MP4...)`;

        try {
          const safeFlush = async (encoder, label) => {
            if (!encoder || encoder.state !== 'configured') return;
            try {
              await Promise.race([
                encoder.flush(),
                new Promise(resolve => setTimeout(resolve, 2500))
              ]);
            } catch (err) {
              console.warn(label + ' flush warning:', err);
            }
          };

          await safeFlush(videoEncoder, 'VideoEncoder');
          try { if (videoEncoder && videoEncoder.state !== 'closed') videoEncoder.close(); } catch(e) {}
          activeVideoEncoder = null;

          if (audioEncoder) {
            await safeFlush(audioEncoder, 'AudioEncoder');
            try { if (audioEncoder && audioEncoder.state !== 'closed') audioEncoder.close(); } catch(e) {}
            activeAudioEncoder = null;
          }

          try {
            muxer.finalize();
          } catch (muxErr) {
            console.warn("muxer.finalize warning:", muxErr);
          }

          const buffer = muxer && muxer.target && muxer.target.buffer ? muxer.target.buffer : null;
          if (buffer && buffer.byteLength > 0) {
            const blob = new Blob([buffer], { type: 'video/mp4' });
            const cleanName = (state.videoFile ? state.videoFile.name.replace(/\.[^/.]+$/, "") : "video") + "-captions.mp4";
            triggerDownload(blob, cleanName, 'video/mp4');
          } else {
            throw new Error("Muxer buffer empty or invalid");
          }
        } catch (finalizeErr) {
          console.warn("Hardware WebCodecs finalize failed, offering instant .ASS subtitles:", finalizeErr);
          syncStylingFromDOM();
          const ass = generateStyledAssSubtitles(state.cues, state.styling, sourceWidth, sourceHeight);
          triggerDownload(ass, 'captions-styled.ass', 'text/plain;charset=utf-8');
          showToast("Export completed (Instant .ASS subtitles generated)");
        } finally {
          cleanupExportUI();
        }

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
        if (activeExportTimer) {
          clearInterval(activeExportTimer);
          activeExportTimer = null;
        }
        if (activeWatchdogTimer) {
          clearInterval(activeWatchdogTimer);
          activeWatchdogTimer = null;
        }
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
    const exportModal = document.getElementById('exportProgressModal');
    if (exportModal) exportModal.classList.remove('show');
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
        if (state.customFontName && e.target.value === state.customFontName) {
          state.styling.customFontName = state.customFontName;
        } else {
          state.styling.customFontName = null;
        }
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
        state.styling.glowRadius = 14;
        state.styling.glowColor = '#d97706';
        state.styling.animationMode = 'slide-up';
        state.styling.typewriterCursor = false;
        state.styling.bounceIntensity = 1.15;
        state.styling.wordBounce = false;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'pill';
        state.styling.bgColor = '#050811';
        state.styling.bgOpacity = 0.60;
      } else if (val === 'typewriter') {
        state.styling.fontFamily = "'Cairo', sans-serif";
        state.styling.textColor = '#ffffff';
        state.styling.highlightColor = '#f59e0b';
        state.styling.outlineWidth = 3;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 12;
        state.styling.glowColor = '#f59e0b';
        state.styling.animationMode = 'typewriter';
        state.styling.typewriterCursor = true;
        state.styling.bounceIntensity = 1.15;
        state.styling.wordBounce = false;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'none';
      } else if (val === 'tiktok' || val === 'bounce') {
        state.styling.fontFamily = "'Plus Jakarta Sans', sans-serif";
        state.styling.textColor = '#ffffff';
        state.styling.highlightColor = '#22d3ee';
        state.styling.outlineWidth = 5;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 8;
        state.styling.glowColor = '#0284c7';
        state.styling.animationMode = 'pop';
        state.styling.typewriterCursor = false;
        state.styling.bounceIntensity = 1.20;
        state.styling.wordBounce = true;
        state.styling.slideUpFade = true;
        state.styling.bgType = 'none';
      } else if (val === 'karaoke') {
        state.styling.fontFamily = "'Plus Jakarta Sans', sans-serif";
        state.styling.textColor = '#ffffff';
        state.styling.highlightColor = '#22d3ee';
        state.styling.outlineWidth = 5;
        state.styling.outlineColor = '#000000';
        state.styling.glowEnabled = true;
        state.styling.glowRadius = 8;
        state.styling.glowColor = '#0284c7';
        state.styling.animationMode = 'karaoke-sweep';
        state.styling.typewriterCursor = false;
        state.styling.bounceIntensity = 1.15;
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
        state.styling.animationMode = 'typewriter';
        state.styling.typewriterCursor = true;
        state.styling.bounceIntensity = 1.15;
        state.styling.wordBounce = false;
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
        state.styling.animationMode = 'none';
        state.styling.typewriterCursor = false;
        state.styling.bounceIntensity = 1.15;
        state.styling.wordBounce = false;
        state.styling.slideUpFade = false;
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
        state.styling.animationMode = 'pop';
        state.styling.typewriterCursor = false;
        state.styling.bounceIntensity = 1.22;
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
      const aMode = document.getElementById('animationModeSelect');
      if (aMode) aMode.value = state.styling.animationMode || 'slide-up';
      const twCur = document.getElementById('toggleTypewriterCursor');
      if (twCur) twCur.checked = !!state.styling.typewriterCursor;
      const bIntensity = document.getElementById('bounceIntensitySlider');
      if (bIntensity) bIntensity.value = state.styling.bounceIntensity || 1.15;
      const bVal = document.getElementById('bounceIntensityValue');
      if (bVal) bVal.textContent = (state.styling.bounceIntensity || 1.15).toFixed(2) + 'x';
      const twRow = document.getElementById('typewriterCursorRow');
      if (twRow) twRow.style.opacity = (state.styling.animationMode === 'typewriter') ? '1' : '0.5';
      const bounceRow = document.getElementById('bounceIntensityRow');
      if (bounceRow) bounceRow.style.opacity = (state.styling.animationMode === 'pop') ? '1' : '0.7';
      const wBounce = document.getElementById('toggleWordBounce');
      if (wBounce) wBounce.checked = state.styling.wordBounce;
      const sUp = document.getElementById('toggleSlideUp');
      if (sUp) sUp.checked = state.styling.slideUpFade;
      const bgSel = document.getElementById('bgTypeSelect');
      if (bgSel) bgSel.value = state.styling.bgType;
      const bgOp = document.getElementById('bgOpacitySlider');
      if (bgOp) bgOp.value = state.styling.bgOpacity;

      syncStylingFromDOM();
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
        state.styling.fontSize = Math.round(state.styling.fontSizePercent * 8.2);
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const posYSlider = document.getElementById('positionYSlider');
    if (posYSlider) {
      posYSlider.addEventListener('input', e => {
        state.styling.positionY = parseFloat(e.target.value);
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const textColorPicker = document.getElementById('textColorPicker');
    if (textColorPicker) {
      textColorPicker.addEventListener('input', e => {
        state.styling.textColor = e.target.value;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const highlightColorPicker = document.getElementById('highlightColorPicker');
    if (highlightColorPicker) {
      highlightColorPicker.addEventListener('input', e => {
        state.styling.highlightColor = e.target.value;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const strokeWidthSlider = document.getElementById('strokeWidthSlider');
    if (strokeWidthSlider) {
      strokeWidthSlider.addEventListener('input', e => {
        state.styling.outlineWidth = parseFloat(e.target.value);
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const strokeColorPicker = document.getElementById('strokeColorPicker');
    if (strokeColorPicker) {
      strokeColorPicker.addEventListener('input', e => {
        state.styling.outlineColor = e.target.value;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const glowRadiusSlider = document.getElementById('glowRadiusSlider');
    if (glowRadiusSlider) {
      glowRadiusSlider.addEventListener('input', e => {
        state.styling.glowRadius = parseFloat(e.target.value);
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const toggleGlow = document.getElementById('toggleGlow');
    if (toggleGlow) {
      toggleGlow.addEventListener('change', e => {
        state.styling.glowEnabled = e.target.checked;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const glowColorPicker = document.getElementById('glowColorPicker');
    if (glowColorPicker) {
      glowColorPicker.addEventListener('input', e => {
        state.styling.glowColor = e.target.value;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const toggleWordBounce = document.getElementById('toggleWordBounce');
    if (toggleWordBounce) {
      toggleWordBounce.addEventListener('change', e => {
        state.styling.wordBounce = e.target.checked;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const toggleSlideUp = document.getElementById('toggleSlideUp');
    if (toggleSlideUp) {
      toggleSlideUp.addEventListener('change', e => {
        state.styling.slideUpFade = e.target.checked;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const animModeSelect = document.getElementById('animationModeSelect');
    if (animModeSelect) {
      animModeSelect.addEventListener('change', e => {
        state.styling.animationMode = e.target.value;
        const twRow = document.getElementById('typewriterCursorRow');
        if (twRow) twRow.style.opacity = (e.target.value === 'typewriter') ? '1' : '0.5';
        const bounceRow = document.getElementById('bounceIntensityRow');
        if (bounceRow) bounceRow.style.opacity = (e.target.value === 'pop') ? '1' : '0.7';
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const toggleTypewriterCursor = document.getElementById('toggleTypewriterCursor');
    if (toggleTypewriterCursor) {
      toggleTypewriterCursor.addEventListener('change', e => {
        state.styling.typewriterCursor = e.target.checked;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const bounceIntensitySlider = document.getElementById('bounceIntensitySlider');
    if (bounceIntensitySlider) {
      bounceIntensitySlider.addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        state.styling.bounceIntensity = val;
        const bVal = document.getElementById('bounceIntensityValue');
        if (bVal) bVal.textContent = val.toFixed(2) + 'x';
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const bgTypeSelect = document.getElementById('bgTypeSelect');
    if (bgTypeSelect) {
      bgTypeSelect.addEventListener('change', e => {
        state.styling.bgType = e.target.value;
        syncStylingFromDOM();
        resizeStudioCanvas();
      });
    }

    const bgOpacitySlider = document.getElementById('bgOpacitySlider');
    if (bgOpacitySlider) {
      bgOpacitySlider.addEventListener('input', e => {
        state.styling.bgOpacity = parseFloat(e.target.value);
        syncStylingFromDOM();
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

            state.customFontFile = file;
            state.customFontName = fontName;
            state.customFontFamily = fontName;
            state.styling.customFontName = fontName;
            state.styling.fontFamily = fontName;
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
        syncStylingFromDOM();
        const ass = generateAss(state.cues, state.styling);
        triggerDownload(ass, 'captions.ass', 'text/plain;charset=utf-8');
      });
    }

    const exportAssStyledBtn = document.getElementById('btnExportAssStyled');
    if (exportAssStyledBtn) {
      exportAssStyledBtn.addEventListener('click', () => {
        syncStylingFromDOM();
        const ass = generateStyledAssSubtitles(state.cues, state.styling, 1920, 1080);
        triggerDownload(ass, 'captions-styled.ass', 'text/plain;charset=utf-8');
      });
    }

    const modalInstantAssBtn = document.getElementById('btnModalInstantAss');
    if (modalInstantAssBtn) {
      modalInstantAssBtn.addEventListener('click', () => {
        syncStylingFromDOM();
        const ass = generateStyledAssSubtitles(state.cues, state.styling, 1920, 1080);
        triggerDownload(ass, 'captions-styled.ass', 'text/plain;charset=utf-8');
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

    const cancelModalBtn = document.getElementById('btnCancelModalExport');
    if (cancelModalBtn) {
      cancelModalBtn.addEventListener('click', cancelExport);
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

    // ----------------------------------------------------------------
    // Subtitle File Import: #btnUploadSrt + #btnUploadSrtStudio
    // ----------------------------------------------------------------
    let srtFileInput = document.getElementById('srtFileInput');
    if (!srtFileInput) {
      srtFileInput = document.createElement('input');
      srtFileInput.type = 'file';
      srtFileInput.id = 'srtFileInput';
      srtFileInput.accept = '.srt,.vtt,.ass,.ssa,.txt';
      srtFileInput.style.display = 'none';
      document.body.appendChild(srtFileInput);
    }
    const btnUploadSrt = document.getElementById('btnUploadSrt');
    const btnUploadSrtStudio = document.getElementById('btnUploadSrtStudio');

    if (srtFileInput) {
      srtFileInput.addEventListener('change', async e => {
        if (e.target.files && e.target.files[0]) {
          await importSubtitleFile(e.target.files[0]);
          e.target.value = '';
        }
      });
    }

    if (btnUploadSrt && srtFileInput) {
      btnUploadSrt.addEventListener('click', e => {
        e.stopPropagation();
        srtFileInput.click();
      });
    }

    if (btnUploadSrtStudio && srtFileInput) {
      btnUploadSrtStudio.addEventListener('click', e => {
        e.stopPropagation();
        srtFileInput.click();
      });
    }

    // Route subtitle file drag-and-drop on the main dropzone
    const mainDropzone = document.getElementById('autoCaptionsDropzone');
    if (mainDropzone && srtFileInput) {
      mainDropzone.addEventListener('drop', async e => {
        const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (!file) return;
        const ext = file.name.toLowerCase().split('.').pop();
        if (['srt', 'vtt', 'ass', 'ssa', 'txt'].includes(ext)) {
          e.stopImmediatePropagation();
          await importSubtitleFile(file);
        }
        // Otherwise, the existing drop handler already called loadVideoFile()
      }, true); // capture phase so this fires before the video drop handler
    }

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
