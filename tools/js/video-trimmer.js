(function() {
    'use strict';

    /* ==========================================================================
       Localization Dictionaries (en, ar, fr, it)
       ========================================================================== */
    const TRANSLATIONS = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "Video Trimmer & Cutter",
        toolSubtitle: "Trim, cut, and slice MP4, WebM, and MOV videos locally with dual-handle timeline controls and fast stream copying.",
        privacyAlert: "Processing happens locally in your browser. Your video file is never uploaded.",
        dropTitle: "Drag & drop your video here, or browse",
        dropSubtitle: "Supports MP4, WebM, MOV, MKV • Up to 500 MB • 100% In-Browser",
        btnBrowse: "Choose Video File",
        btnLoadDemo: "Test Demo Video",
        statusLoading: "Reading video data in browser memory...",
        statusInRAM: "Initializing local video player and timeline",
        statusProcessing: "Processing video clip locally...",
        statusStreamCopy: "Extracting frames with fast stream copying",
        statusEncoding: "Transcoding frames client-side...",
        timelineTitle: "Timeline Trim Range",
        lblTotalDuration: "Total Duration",
        lblSelectedDuration: "Selected Clip",
        lblStartTime: "Start Time",
        lblEndTime: "End Time",
        btnSetCurrent: "Set Current",
        lblQuickSelect: "Quick Select:",
        quickAll: "Full Video",
        quickFirst15: "First 15s",
        quickFirst30: "First 30s",
        quickFirst60: "First 60s",
        quickLast30: "Last 30s",
        btnPreview: "Preview Selection",
        btnPause: "Pause Preview",
        btnStop: "Stop",
        btnReset: "Reset",
        lblExportFormat: "Format:",
        optMp4: "MP4 (Fast Stream Copy)",
        optWebm: "WebM (Universal Web)",
        btnExport: "Trim & Export Video",
        exportSuccessTitle: "Trimmed Video Ready for Download",
        btnDownload: "Download Video",
        btnTrimAnother: "Trim Another Clip",
        errEmpty: "The selected file is empty.",
        errOversized: "File exceeds recommended 500 MB limit. Please select a smaller clip.",
        errInvalidTime: "Start time must be strictly before end time.",
        errFormatUnsupported: "This video container could not be parsed by your browser. Try standard MP4 or WebM.",
        errExportFailed: "Video trimming failed. Please verify the timestamps and try again.",
        toastCopied: "Copied to clipboard!",
        toastDownloaded: "Video downloaded successfully!",
        toastDemoLoaded: "Demo video generated and loaded!",
        footerText: "© 2026 VantorKit. Fast, private, and free client-side web utilities. All processing happens locally in your browser."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "← العودة إلى الأدوات",
        badgePill: "على جهازك • خصوصية تامة • بدون حفظ سجلات",
        toolTitle: "قص وتعديل الفيديو",
        toolSubtitle: "قص واقتطاع مقاطع الفيديو بصيغ MP4 وWebM وMOV محلياً مع شريط زمني تفاعلي ونسخ سريع للتدفقات.",
        privacyAlert: "تتم المعالجة بالكامل محلياً داخل متصفحك. لا يتم رفع ملف الفيديو إلى أي خادم.",
        dropTitle: "اسحب وأفلت ملف الفيديو هنا، أو تصفح جهازك",
        dropSubtitle: "يدعم MP4 وWebM وMOV وMKV • حتى 500 ميجابايت • محلي 100%",
        btnBrowse: "اختيار ملف فيديو",
        btnLoadDemo: "تجربة فيديو توضيحي",
        statusLoading: "جارٍ قراءة الفيديو في ذاكرة المتصفح...",
        statusInRAM: "تهيئة مشغل الفيديو والشريط الزمني محلياً",
        statusProcessing: "جارٍ قص وتجهيز مقطع الفيديو محلياً...",
        statusStreamCopy: "استخراج الإطارات عبر النسخ المباشر للتدفقات",
        statusEncoding: "جارٍ تشفير وحفظ المقطع عبر المتصفح...",
        timelineTitle: "نطاق القص على الشريط الزمني",
        lblTotalDuration: "المدة الإجمالية",
        lblSelectedDuration: "المقطع المحدد",
        lblStartTime: "وقت البداية",
        lblEndTime: "وقت النهاية",
        btnSetCurrent: "الموقع الحالي",
        lblQuickSelect: "تحديد سريع:",
        quickAll: "كامل الفيديو",
        quickFirst15: "أول 15 ثانية",
        quickFirst30: "أول 30 ثانية",
        quickFirst60: "أول دقيقة",
        quickLast30: "آخر 30 ثانية",
        btnPreview: "معاينة المقطع المحدد",
        btnPause: "إيقاف مؤقت",
        btnStop: "إيقاف",
        btnReset: "إعادة ضبط",
        lblExportFormat: "الصيغة:",
        optMp4: "MP4 (نسخ تدفقات فائق السرعة)",
        optWebm: "WebM (متوافق مع الويب)",
        btnExport: "قص وتصدير الفيديو",
        exportSuccessTitle: "الفيديو المقصوص جاهز للتنزيل",
        btnDownload: "تنزيل الفيديو",
        btnTrimAnother: "قص مقطع آخر",
        errEmpty: "الملف المحدد فارغ.",
        errOversized: "حجم الملف يتجاوز 500 ميجابايت. يرجى اختيار ملف أصغر.",
        errInvalidTime: "يجب أن يكون وقت البداية قبل وقت النهاية.",
        errFormatUnsupported: "تعذر تشغيل هذا التنسيق في متصفحك. جرب ملف MP4 أو WebM.",
        errExportFailed: "تعذر قص الفيديو. يرجى التحقق من التوقيتات والمحاولة ثانية.",
        toastCopied: "تم النسخ إلى الحافظة!",
        toastDownloaded: "تم تنزيل الفيديو بنجاح!",
        toastDemoLoaded: "تم إنشاء وتحميل الفيديو التوضيحي بنجاح!",
        footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "← Retour aux outils",
        badgePill: "Côté client • Confidentialité totale • Zéro journal",
        toolTitle: "Découpeur vidéo & Trimmer",
        toolSubtitle: "Découpez et élaguez vos vidéos MP4, WebM et MOV localement avec double curseur temporel et copie rapide.",
        privacyAlert: "Le traitement s'exécute localement dans votre navigateur. Votre vidéo n'est jamais téléversée.",
        dropTitle: "Glissez-déposez votre vidéo ici, ou parcourez",
        dropSubtitle: "Prend en charge MP4, WebM, MOV, MKV • Jusqu'à 500 Mo • 100% Navigateur",
        btnBrowse: "Choisir un fichier vidéo",
        btnLoadDemo: "Tester la vidéo démo",
        statusLoading: "Lecture de la vidéo dans la mémoire locale...",
        statusInRAM: "Initialisation du lecteur et de la ligne temporelle",
        statusProcessing: "Découpage de l'extrait vidéo en cours...",
        statusStreamCopy: "Extraction des trames par copie de flux directe",
        statusEncoding: "Encodage du flux dans le navigateur...",
        timelineTitle: "Plage de découpe temporelle",
        lblTotalDuration: "Durée totale",
        lblSelectedDuration: "Extrait sélectionné",
        lblStartTime: "Début",
        lblEndTime: "Fin",
        btnSetCurrent: "Position actuelle",
        lblQuickSelect: "Sélection rapide :",
        quickAll: "Vidéo entière",
        quickFirst15: "Premières 15s",
        quickFirst30: "Premières 30s",
        quickFirst60: "Première minute",
        quickLast30: "Dernières 30s",
        btnPreview: "Aperçu de la sélection",
        btnPause: "Pause",
        btnStop: "Arrêter",
        btnReset: "Réinitialiser",
        lblExportFormat: "Format :",
        optMp4: "MP4 (Copie directe ultra-rapide)",
        optWebm: "WebM (Standard Web)",
        btnExport: "Découper et exporter",
        exportSuccessTitle: "Vidéo découpée prête au téléchargement",
        btnDownload: "Télécharger la vidéo",
        btnTrimAnother: "Découper un autre extrait",
        errEmpty: "Le fichier sélectionné est vide.",
        errOversized: "Le fichier dépasse 500 Mo. Veuillez sélectionner un clip plus compact.",
        errInvalidTime: "Le temps de début doit être inférieur au temps de fin.",
        errFormatUnsupported: "Ce format vidéo n'a pas pu être lu. Essayez MP4 ou WebM.",
        errExportFailed: "Impossible de découper la vidéo. Vérifiez les horodatages.",
        toastCopied: "Copié dans le presse-papiers !",
        toastDownloaded: "Vidéo téléchargée avec succès !",
        toastDemoLoaded: "Vidéo de démonstration chargée !",
        footerText: "© 2026 VantorKit. Utilitaires Web rapides, privés et gratuits. Tous les traitements s'effectuent dans votre navigateur."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "← Torna agli strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Taglia Video & Trimmer",
        toolSubtitle: "Taglia e ritaglia video MP4, WebM e MOV localmente con doppi cursori temporali ed esportazione diretta.",
        privacyAlert: "L'elaborazione avviene localmente nel browser. Il tuo video non viene mai caricato su un server.",
        dropTitle: "Trascina qui il tuo video, oppure sfoglia",
        dropSubtitle: "Supporta MP4, WebM, MOV, MKV • Fino a 500 MB • 100% Nel Browser",
        btnBrowse: "Scegli file video",
        btnLoadDemo: "Prova video dimostrativo",
        statusLoading: "Lettura del video nella memoria del browser...",
        statusInRAM: "Inizializzazione del lettore e della linea temporale",
        statusProcessing: "Ritaglio del filmato in corso...",
        statusStreamCopy: "Estrazione fotogrammi con copia flussi diretta",
        statusEncoding: "Codifica del video nel browser...",
        timelineTitle: "Intervallo di ritaglio",
        lblTotalDuration: "Durata totale",
        lblSelectedDuration: "Clip selezionata",
        lblStartTime: "Inizio",
        lblEndTime: "Fine",
        btnSetCurrent: "Posizione attuale",
        lblQuickSelect: "Scelta rapida:",
        quickAll: "Intero video",
        quickFirst15: "Primi 15s",
        quickFirst30: "Primi 30s",
        quickFirst60: "Primo minuto",
        quickLast30: "Ultimi 30s",
        btnPreview: "Anteprima selezione",
        btnPause: "Pausa",
        btnStop: "Interrompi",
        btnReset: "Azzera",
        lblExportFormat: "Formato:",
        optMp4: "MP4 (Copia flussi istantanea)",
        optWebm: "WebM (Formato Web)",
        btnExport: "Taglia ed esporta video",
        exportSuccessTitle: "Video ritagliato pronto per il download",
        btnDownload: "Scarica video",
        btnTrimAnother: "Taglia un altro clip",
        errEmpty: "Il file selezionato è vuoto.",
        errOversized: "Il file supera i 500 MB. Seleziona una clip più leggera.",
        errInvalidTime: "L'orario iniziale deve precedere quello finale.",
        errFormatUnsupported: "Questo formato video non può essere letto. Prova MP4 o WebM.",
        errExportFailed: "Ritaglio video non riuscito. Controlla i tempi e riprova.",
        toastCopied: "Copiato negli appunti!",
        toastDownloaded: "Video scaricato con successo!",
        toastDemoLoaded: "Video dimostrativo caricato!",
        footerText: "© 2026 VantorKit. Utilitaires Web rapidi, privati e gratuiti. Tutti i processi avvengono localmente nel browser."
      }
    };

    /* Helper: Current active language */
    function getActiveLang() {
      try {
        const lang = localStorage.getItem('vantorkit_lang');
        if (lang && TRANSLATIONS[lang]) return lang;
      } catch (e) {}
      const htmlLang = document.documentElement.getAttribute('lang');
      return (htmlLang && TRANSLATIONS[htmlLang]) ? htmlLang : 'en';
    }

    /* Apply Translations to DOM */
    function applyTranslations(lang) {
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          if (el.tagName === 'INPUT' && el.type === 'button') {
            el.value = dict[key];
          } else {
            el.textContent = dict[key];
          }
        }
      });

      // Update content blocks
      document.querySelectorAll('.lang-content-block').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });

      updatePlayPauseButtonText();
    }

    window.applyLanguage = applyTranslations;
    window.setLanguage = applyTranslations;

    /* ==========================================================================
       DOM Elements
       ========================================================================== */
    const videoDropZone = document.getElementById('videoDropZone');
    const videoFileInput = document.getElementById('videoFileInput');
    const btnBrowseVideo = document.getElementById('btnBrowseVideo');
    const btnLoadDemoVideo = document.getElementById('btnLoadDemoVideo');
    const videoLoadingCard = document.getElementById('videoLoadingCard');
    const videoLoadingText = document.getElementById('videoLoadingText');
    const videoWorkspace = document.getElementById('videoWorkspace');
    const videoTrimmerError = document.getElementById('videoTrimmerError');
    const errorMessageText = document.getElementById('errorMessageText');
    const btnDismissError = document.getElementById('btnDismissError');

    // Video Player & Overlay
    const videoPreview = document.getElementById('videoPreview');
    const videoStatusDot = document.getElementById('videoStatusDot');
    const videoStatusText = document.getElementById('videoStatusText');

    // Meta Specs
    const dispVideoName = document.getElementById('dispVideoName');
    const dispVideoRes = document.getElementById('dispVideoRes');
    const dispVideoFormat = document.getElementById('dispVideoFormat');
    const dispVideoSize = document.getElementById('dispVideoSize');
    const dispTotalDuration = document.getElementById('dispTotalDuration');
    const dispSelectedDuration = document.getElementById('dispSelectedDuration');
    const dispPlayheadPosition = document.getElementById('dispPlayheadPosition');

    // Timeline Track & Handles
    const timelineTrack = document.getElementById('timelineTrack');
    const selectionBar = document.getElementById('selectionBar');
    const handleStart = document.getElementById('handleStart');
    const handleEnd = document.getElementById('handleEnd');
    const playheadIndicator = document.getElementById('playheadIndicator');

    // Time Inputs & Nudge Buttons
    const startTimeInput = document.getElementById('startTimeInput');
    const endTimeInput = document.getElementById('endTimeInput');
    const btnSnapStart = document.getElementById('btnSnapStart');
    const btnSnapEnd = document.getElementById('btnSnapEnd');

    // Quick Presets
    const btnPresetAll = document.getElementById('btnPresetAll');
    const btnPresetFirst15 = document.getElementById('btnPresetFirst15');
    const btnPresetFirst30 = document.getElementById('btnPresetFirst30');
    const btnPresetFirst60 = document.getElementById('btnPresetFirst60');
    const btnPresetLast30 = document.getElementById('btnPresetLast30');

    // Transport Actions
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnPlayPauseText = document.getElementById('btnPlayPauseText');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const btnStop = document.getElementById('btnStop');
    const btnResetSelection = document.getElementById('btnResetSelection');

    // Export Controls
    const exportFormatSelect = document.getElementById('exportFormatSelect');
    const btnExportVideo = document.getElementById('btnExportVideo');
    const exportProgressCard = document.getElementById('exportProgressCard');
    const exportProgressText = document.getElementById('exportProgressText');
    const exportProgressSub = document.getElementById('exportProgressSub');
    const exportProgressBar = document.getElementById('exportProgressBar');

    // Export Success Card
    const exportSuccessCard = document.getElementById('exportSuccessCard');
    const dispExportSpecs = document.getElementById('dispExportSpecs');
    const trimmedVideoPreview = document.getElementById('trimmedVideoPreview');
    const btnDownloadExported = document.getElementById('btnDownloadExported');
    const btnDismissSuccess = document.getElementById('btnDismissSuccess');

    // Toast
    const toastNotification = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');

    /* ==========================================================================
       Application State
       ========================================================================== */
    let currentVideoFile = null;
    let currentVideoUrl = null;
    let videoDuration = 0;
    let selectionStart = 0;
    let selectionEnd = 0;
    let isPreviewPlaying = false;
    let isDragging = null; // 'start', 'end', or null
    let exportedBlob = null;
    let exportedUrl = null;
    let ffmpegInstance = null;
    let isFfmpegLoading = false;

    /* ==========================================================================
       Time Utility Functions (Strict formatting & parsing)
       ========================================================================== */

    function formatTime(seconds) {
      if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
        seconds = 0;
      }
      const hrs = Math.floor(seconds / 3600);
      const rem = seconds % 3600;
      const mins = Math.floor(rem / 60);
      const secs = Math.floor(rem % 60);
      const cs = Math.floor((seconds - Math.floor(seconds)) * 100);

      const mm = String(mins).padStart(2, '0');
      const ss = String(secs).padStart(2, '0');
      const csStr = String(cs).padStart(2, '0');

      if (hrs > 0) {
        const hh = String(hrs).padStart(2, '0');
        return `${hh}:${mm}:${ss}.${csStr}`;
      }
      return `${mm}:${ss}.${csStr}`;
    }

    function parseTime(str, maxDuration) {
      if (typeof str !== 'string') return null;
      str = str.trim();
      if (!str) return null;

      // Check simple numeric seconds (e.g., "45" or "12.5")
      if (/^\d+(\.\d+)?$/.test(str)) {
        const val = parseFloat(str);
        if (isNaN(val) || val < 0) return null;
        return maxDuration !== undefined ? Math.min(val, maxDuration) : val;
      }

      // Check mm:ss or mm:ss.SS or hh:mm:ss or hh:mm:ss.SS
      const parts = str.split(':');
      if (parts.length === 2) {
        const m = parseInt(parts[0], 10);
        const s = parseFloat(parts[1]);
        if (isNaN(m) || isNaN(s) || m < 0 || s < 0 || s >= 60) return null;
        const total = m * 60 + s;
        return maxDuration !== undefined ? Math.min(total, maxDuration) : total;
      } else if (parts.length === 3) {
        const h = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        const s = parseFloat(parts[2]);
        if (isNaN(h) || isNaN(m) || isNaN(s) || h < 0 || m < 0 || m >= 60 || s < 0 || s >= 60) return null;
        const total = h * 3600 + m * 60 + s;
        return maxDuration !== undefined ? Math.min(total, maxDuration) : total;
      }
      return null;
    }

    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
    }

    function sanitizeOriginalFilename(name) {
      if (!name) return 'video';
      const base = name.replace(/\.[^/.]+$/, '').trim();
      const sanitized = base.replace(/[/\\?%*:|"<>]/g, '_').trim();
      return sanitized || 'video';
    }

    /* ==========================================================================
       UI Feedback & Toast
       ========================================================================== */

    let toastTimer = null;
    function showToast(msg) {
      if (!toastNotification) return;
      toastMessage.textContent = msg;
      toastNotification.classList.add('show');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastNotification.classList.remove('show');
      }, 3500);
    }

    function showError(msg) {
      if (!videoTrimmerError) return;
      errorMessageText.textContent = msg;
      videoTrimmerError.classList.add('active');
    }

    function clearError() {
      if (!videoTrimmerError) return;
      videoTrimmerError.classList.remove('active');
    }

    btnDismissError.addEventListener('click', clearError);

    /* ==========================================================================
       File Ingestion & Video Loading
       ========================================================================== */

    function handleSelectedFile(file) {
      clearError();
      if (!file) return;

      if (file.size === 0) {
        showError(TRANSLATIONS[getActiveLang()].errEmpty);
        return;
      }

      // Memory safeguard: 500 MB max recommended
      if (file.size > 500 * 1024 * 1024) {
        showError(TRANSLATIONS[getActiveLang()].errOversized);
        return;
      }

      currentVideoFile = file;
      loadVideoBlob(file);
    }

    function loadVideoBlob(blob, customName) {
      stopPreviewLoop();
      clearError();
      exportSuccessCard.classList.remove('active');

      const dict = TRANSLATIONS[getActiveLang()];
      videoLoadingText.textContent = dict.statusLoading;
      videoLoadingCard.classList.add('active');
      videoWorkspace.classList.remove('active');

      if (currentVideoUrl) {
        URL.revokeObjectURL(currentVideoUrl);
      }
      currentVideoUrl = URL.createObjectURL(blob);

      videoPreview.src = currentVideoUrl;
      videoPreview.load();

      const name = customName || (blob.name ? blob.name : 'video.mp4');
      dispVideoName.textContent = name;
      dispVideoSize.textContent = formatBytes(blob.size);
      
      const ext = name.split('.').pop().toUpperCase();
      dispVideoFormat.textContent = ext || 'MP4';
    }

    // Video metadata loaded listener
    videoPreview.addEventListener('loadedmetadata', () => {
      videoLoadingCard.classList.remove('active');
      videoWorkspace.classList.add('active');

      videoDuration = videoPreview.duration;
      if (!videoDuration || isNaN(videoDuration) || videoDuration === Infinity) {
        videoDuration = 10; // Fallback for live streams / malformed metadata
      }

      selectionStart = 0;
      selectionEnd = videoDuration;

      // Update resolution badge
      const w = videoPreview.videoWidth || 1920;
      const h = videoPreview.videoHeight || 1080;
      dispVideoRes.textContent = `${w} × ${h}`;

      dispTotalDuration.textContent = formatTime(videoDuration);
      updateSelectionUI();

      videoPreview.currentTime = 0;
      updatePlayheadUI(0);
    });

    videoPreview.addEventListener('error', () => {
      videoLoadingCard.classList.remove('active');
      showError(TRANSLATIONS[getActiveLang()].errFormatUnsupported);
    });

    /* ==========================================================================
       Interactive Dual-Handle Timeline Scrubber
       ========================================================================== */

    function updateSelectionUI() {
      if (videoDuration <= 0) return;

      const startPercent = (selectionStart / videoDuration) * 100;
      const endPercent = (selectionEnd / videoDuration) * 100;

      // Update visual range bar
      selectionBar.style.left = `${startPercent}%`;
      selectionBar.style.width = `${Math.max(0, endPercent - startPercent)}%`;

      // Update handles
      handleStart.style.left = `${startPercent}%`;
      handleEnd.style.left = `${endPercent}%`;

      // Update time inputs
      startTimeInput.value = formatTime(selectionStart);
      endTimeInput.value = formatTime(selectionEnd);

      // Update selected duration readout
      const selectedDuration = Math.max(0, selectionEnd - selectionStart);
      dispSelectedDuration.textContent = formatTime(selectedDuration);
    }

    function updatePlayheadUI(time) {
      if (videoDuration <= 0) return;
      const percent = (time / videoDuration) * 100;
      playheadIndicator.style.left = `${percent}%`;
      dispPlayheadPosition.textContent = `Playhead: ${formatTime(time)}`;
    }

    // Timeline track click & drag coordination
    function getTimeFromPointerEvent(e) {
      const rect = timelineTrack.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      return (offsetX / rect.width) * videoDuration;
    }

    function onPointerDownHandle(e, handleType) {
      e.preventDefault();
      e.stopPropagation();
      isDragging = handleType;
      e.target.setPointerCapture(e.pointerId);
      e.target.classList.add('dragging');
    }

    handleStart.addEventListener('pointerdown', (e) => onPointerDownHandle(e, 'start'));
    handleEnd.addEventListener('pointerdown', (e) => onPointerDownHandle(e, 'end'));

    window.addEventListener('pointermove', (e) => {
      if (!isDragging || videoDuration <= 0) return;
      const targetTime = getTimeFromPointerEvent(e);

      if (isDragging === 'start') {
        selectionStart = Math.max(0, Math.min(targetTime, selectionEnd - 0.1));
        videoPreview.currentTime = selectionStart;
      } else if (isDragging === 'end') {
        selectionEnd = Math.min(videoDuration, Math.max(targetTime, selectionStart + 0.1));
        videoPreview.currentTime = selectionEnd;
      }
      updateSelectionUI();
    });

    window.addEventListener('pointerup', (e) => {
      if (isDragging) {
        handleStart.classList.remove('dragging');
        handleEnd.classList.remove('dragging');
        isDragging = null;
      }
    });

    timelineTrack.addEventListener('click', (e) => {
      if (isDragging || videoDuration <= 0) return;
      const clickTime = getTimeFromPointerEvent(e);
      videoPreview.currentTime = clickTime;
      updatePlayheadUI(clickTime);
    });

    /* ==========================================================================
       Numerical Time Inputs & Nudge Controls
       ========================================================================== */

    startTimeInput.addEventListener('change', () => {
      const parsed = parseTime(startTimeInput.value, videoDuration);
      if (parsed !== null && parsed < selectionEnd) {
        selectionStart = parsed;
        videoPreview.currentTime = selectionStart;
      } else {
        startTimeInput.value = formatTime(selectionStart);
      }
      updateSelectionUI();
    });

    endTimeInput.addEventListener('change', () => {
      const parsed = parseTime(endTimeInput.value, videoDuration);
      if (parsed !== null && parsed > selectionStart) {
        selectionEnd = Math.min(parsed, videoDuration);
        videoPreview.currentTime = selectionEnd;
      } else {
        endTimeInput.value = formatTime(selectionEnd);
      }
      updateSelectionUI();
    });

    // Snap to playhead buttons
    btnSnapStart.addEventListener('click', () => {
      const current = videoPreview.currentTime;
      if (current < selectionEnd) {
        selectionStart = current;
        updateSelectionUI();
      }
    });

    btnSnapEnd.addEventListener('click', () => {
      const current = videoPreview.currentTime;
      if (current > selectionStart) {
        selectionEnd = Math.min(current, videoDuration);
        updateSelectionUI();
      }
    });

    // Precision Nudge buttons (-1s, -0.1s, +0.1s, +1s)
    document.querySelectorAll('.video-trimmer-nudge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const nudge = parseFloat(btn.getAttribute('data-nudge'));
        if (isNaN(nudge)) return;

        if (target === 'start') {
          selectionStart = Math.max(0, Math.min(selectionStart + nudge, selectionEnd - 0.1));
          videoPreview.currentTime = selectionStart;
        } else if (target === 'end') {
          selectionEnd = Math.min(videoDuration, Math.max(selectionEnd + nudge, selectionStart + 0.1));
          videoPreview.currentTime = selectionEnd;
        }
        updateSelectionUI();
      });
    });

    // Presets
    btnPresetAll.addEventListener('click', () => {
      selectionStart = 0;
      selectionEnd = videoDuration;
      videoPreview.currentTime = 0;
      updateSelectionUI();
    });

    btnPresetFirst15.addEventListener('click', () => {
      selectionStart = 0;
      selectionEnd = Math.min(15, videoDuration);
      videoPreview.currentTime = 0;
      updateSelectionUI();
    });

    btnPresetFirst30.addEventListener('click', () => {
      selectionStart = 0;
      selectionEnd = Math.min(30, videoDuration);
      videoPreview.currentTime = 0;
      updateSelectionUI();
    });

    btnPresetFirst60.addEventListener('click', () => {
      selectionStart = 0;
      selectionEnd = Math.min(60, videoDuration);
      videoPreview.currentTime = 0;
      updateSelectionUI();
    });

    btnPresetLast30.addEventListener('click', () => {
      selectionStart = Math.max(0, videoDuration - 30);
      selectionEnd = videoDuration;
      videoPreview.currentTime = selectionStart;
      updateSelectionUI();
    });

    /* ==========================================================================
       Interactive "Preview Selection" Playback Loop
       ========================================================================== */

    function updatePlayPauseButtonText() {
      const dict = TRANSLATIONS[getActiveLang()] || TRANSLATIONS.en;
      if (isPreviewPlaying) {
        btnPlayPauseText.textContent = dict.btnPause;
        btnPlayPause.classList.add('playing');
        playPauseIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
        videoStatusDot.className = 'video-trimmer-status-dot looping';
        videoStatusText.textContent = 'Looping Trim';
      } else {
        btnPlayPauseText.textContent = dict.btnPreview;
        btnPlayPause.classList.remove('playing');
        playPauseIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
        videoStatusDot.className = 'video-trimmer-status-dot';
        videoStatusText.textContent = 'Ready';
      }
    }

    async function startPreviewLoop() {
      if (!currentVideoUrl) return;
      if (videoPreview.currentTime < selectionStart || videoPreview.currentTime >= selectionEnd) {
        videoPreview.currentTime = selectionStart;
      }
      try {
        await videoPreview.play();
        isPreviewPlaying = true;
        updatePlayPauseButtonText();
      } catch (err) {
        console.warn("Autoplay was prevented:", err);
      }
    }

    function pausePreviewLoop() {
      videoPreview.pause();
      isPreviewPlaying = false;
      updatePlayPauseButtonText();
    }

    function stopPreviewLoop() {
      videoPreview.pause();
      videoPreview.currentTime = selectionStart;
      isPreviewPlaying = false;
      updatePlayheadUI(selectionStart);
      updatePlayPauseButtonText();
    }

    btnPlayPause.addEventListener('click', () => {
      if (isPreviewPlaying) {
        pausePreviewLoop();
      } else {
        startPreviewLoop();
      }
    });

    btnStop.addEventListener('click', stopPreviewLoop);

    btnResetSelection.addEventListener('click', () => {
      selectionStart = 0;
      selectionEnd = videoDuration;
      videoPreview.currentTime = 0;
      updateSelectionUI();
    });

    // Timeupdate tracking for playhead & loop boundary
    videoPreview.addEventListener('timeupdate', () => {
      const cur = videoPreview.currentTime;
      updatePlayheadUI(cur);

      if (isPreviewPlaying) {
        if (cur >= selectionEnd) {
          videoPreview.currentTime = selectionStart;
        }
      }
    });

    /* ==========================================================================
       Synthetic Demo Video Generator (100% In-Browser Offline Sample)
       ========================================================================== */

    async function generateDemoVideoBlob() {
      const width = 640;
      const height = 360;
      const fps = 30;
      const durationSeconds = 5;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      // Audio stream synthesizer via Web Audio API Destination
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const dest = audioCtx.createMediaStreamDestination();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // Concert A
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(dest);
      osc.start();

      const videoStream = canvas.captureStream(fps);
      const combinedStream = new MediaStream([
        ...videoStream.getVideoTracks(),
        ...dest.stream.getAudioTracks()
      ]);

      let mimeType = 'video/webm;codecs=vp9,opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }

      const recorder = new MediaRecorder(combinedStream, { mimeType });
      const chunks = [];
      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };

      return new Promise((resolve) => {
        recorder.onstop = () => {
          try { osc.stop(); } catch(e) {}
          try { audioCtx.close(); } catch(e) {}
          const blob = new Blob(chunks, { type: mimeType });
          blob.name = 'vantorkit-demo.webm';
          resolve(blob);
        };

        recorder.start();

        const startTime = performance.now();
        function drawFrame(now) {
          const elapsed = (now - startTime) / 1000;
          if (elapsed >= durationSeconds) {
            recorder.stop();
            return;
          }

          // Dynamic vibrant SaaS background
          const grad = ctx.createLinearGradient(0, 0, width, height);
          const hue = (elapsed * 40) % 360;
          grad.addColorStop(0, `hsl(${hue}, 70%, 14%)`);
          grad.addColorStop(1, `hsl(${(hue + 60) % 360}, 80%, 8%)`);
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);

          // Grid decorative dots
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          for (let x = 30; x < width; x += 40) {
            for (let y = 30; y < height; y += 40) {
              ctx.beginPath();
              ctx.arc(x, y, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Center Branding Pill
          ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(width / 2 - 170, 70, 340, 50, 25);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('VantorKit • Video Trimmer Demo', width / 2, 102);

          // Animated Circular Pulse Scrubber
          const progress = elapsed / durationSeconds;
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.arc(width / 2, 210, 55, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(width / 2, 210, 55, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
          ctx.stroke();

          // Time Readout
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 28px "JetBrains Mono", monospace';
          ctx.fillText(`00:0${elapsed.toFixed(2)}s`, width / 2, 220);

          ctx.font = '14px sans-serif';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('100% In-Browser Video Generation', width / 2, 300);

          requestAnimationFrame(drawFrame);
        }

        requestAnimationFrame(drawFrame);
      });
    }

    btnLoadDemoVideo.addEventListener('click', async () => {
      clearError();
      const dict = TRANSLATIONS[getActiveLang()];
      videoLoadingText.textContent = dict.statusLoading;
      videoLoadingCard.classList.add('active');

      try {
        const demoBlob = await generateDemoVideoBlob();
        loadVideoBlob(demoBlob, 'vantorkit-demo.webm');
        showToast(dict.toastDemoLoaded);
      } catch (e) {
        console.error("Demo video generation failed:", e);
        showError(dict.errFormatUnsupported);
        videoLoadingCard.classList.remove('active');
      }
    });

    /* ==========================================================================
       Client-Side Video Processing Engine (Fast Stream Copy + Native Fallback)
       ========================================================================== */

    async function initFFmpegEngine() {
      if (ffmpegInstance && ffmpegInstance.isLoaded()) return ffmpegInstance;
      if (typeof FFmpeg === 'undefined' || !FFmpeg.createFFmpeg) {
        return null;
      }
      try {
        isFfmpegLoading = true;
        ffmpegInstance = FFmpeg.createFFmpeg({
          corePath: 'https://unpkg.com/@ffmpeg/core-st@0.10.0/dist/ffmpeg-core.js',
          log: false
        });
        await ffmpegInstance.load();
        isFfmpegLoading = false;
        return ffmpegInstance;
      } catch (e) {
        console.warn("FFmpeg single-threaded WASM load failed, native fallback will be used:", e);
        isFfmpegLoading = false;
        return null;
      }
    }

    // Native Browser Trimming Fallback (MediaRecorder + Video playback)
    async function nativeTrimVideo(startSec, endSec, outputFormat, onProgress) {
      const duration = endSec - startSec;
      if (duration <= 0) throw new Error("Invalid duration");

      const stream = videoPreview.captureStream ? videoPreview.captureStream() : (videoPreview.mozCaptureStream ? videoPreview.mozCaptureStream() : null);
      if (!stream) {
        throw new Error("Browser does not support stream capture");
      }

      let mimeType = outputFormat === 'mp4' && MediaRecorder.isTypeSupported('video/mp4;codecs=avc1') 
        ? 'video/mp4;codecs=avc1' 
        : 'video/webm;codecs=vp9,opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }

      const recorder = new MediaRecorder(stream, { mimeType });
      const chunks = [];
      recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };

      return new Promise(async (resolve, reject) => {
        recorder.onstop = () => {
          videoPreview.pause();
          const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';
          const blob = new Blob(chunks, { type: mimeType });
          resolve({ blob, ext });
        };

        recorder.onerror = reject;

        videoPreview.currentTime = startSec;
        await new Promise(r => {
          const onSeek = () => { videoPreview.removeEventListener('seeked', onSeek); r(); };
          videoPreview.addEventListener('seeked', onSeek);
        });

        recorder.start(100);
        videoPreview.play();

        const checkInterval = setInterval(() => {
          const cur = videoPreview.currentTime;
          const prog = Math.min(100, Math.round(((cur - startSec) / duration) * 100));
          if (onProgress) onProgress(prog);

          if (cur >= endSec || videoPreview.ended) {
            clearInterval(checkInterval);
            recorder.stop();
          }
        }, 80);
      });
    }

    async function handleExport() {
      if (!currentVideoUrl || videoDuration <= 0) return;
      stopPreviewLoop();
      clearError();

      const duration = selectionEnd - selectionStart;
      if (duration <= 0.05) {
        showError(TRANSLATIONS[getActiveLang()].errInvalidTime);
        return;
      }

      const format = exportFormatSelect.value || 'mp4';
      const dict = TRANSLATIONS[getActiveLang()];

      exportProgressCard.classList.add('active');
      exportSuccessCard.classList.remove('active');
      exportProgressBar.style.width = '15%';
      exportProgressText.textContent = dict.statusProcessing;
      exportProgressSub.textContent = dict.statusStreamCopy;

      try {
        let resultBlob = null;
        let finalExt = format;

        // Step 1: Attempt FFmpeg Fast Stream Copy if available
        let ffmpeg = await initFFmpegEngine();
        if (ffmpeg) {
          exportProgressBar.style.width = '40%';
          const { fetchFile } = FFmpeg;
          const inName = `input_${Date.now()}.${currentVideoFile?.name ? currentVideoFile.name.split('.').pop() : 'mp4'}`;
          const outName = `output_${Date.now()}.${format}`;

          exportProgressSub.textContent = "Writing file to in-memory filesystem...";
          const fileData = await fetchFile(currentVideoFile || currentVideoUrl);
          ffmpeg.FS('writeFile', inName, fileData);

          exportProgressBar.style.width = '70%';
          exportProgressSub.textContent = "Performing fast lossless stream copy (-c copy)...";

          let ffmpegSuccess = false;
          try {
            await ffmpeg.run(
              '-ss', selectionStart.toFixed(3),
              '-to', selectionEnd.toFixed(3),
              '-i', inName,
              '-c', 'copy',
              '-avoid_negative_ts', 'make_zero',
              outName
            );
            ffmpegSuccess = true;
          } catch (streamCopyErr) {
            console.warn("Fast stream copy failed, falling back to fast transcode:", streamCopyErr);
            exportProgressSub.textContent = dict.statusEncoding;
            try {
              await ffmpeg.run(
                '-ss', selectionStart.toFixed(3),
                '-to', selectionEnd.toFixed(3),
                '-i', inName,
                '-preset', 'ultrafast',
                '-crf', '24',
                outName
              );
              ffmpegSuccess = true;
            } catch (transcodeErr) {
              console.error("FFmpeg transcode failed:", transcodeErr);
            }
          }

          if (ffmpegSuccess) {
            const data = ffmpeg.FS('readFile', outName);
            const mime = format === 'webm' ? 'video/webm' : 'video/mp4';
            resultBlob = new Blob([data.buffer], { type: mime });

            // Clean up in-memory filesystem
            try { ffmpeg.FS('unlink', inName); } catch (e) {}
            try { ffmpeg.FS('unlink', outName); } catch (e) {}
          }
        }

        // Step 2: If FFmpeg unavailable or failed, run native browser trimmer
        if (!resultBlob) {
          exportProgressBar.style.width = '50%';
          exportProgressSub.textContent = "Running browser native video recorder...";
          const res = await nativeTrimVideo(selectionStart, selectionEnd, format, (prog) => {
            exportProgressBar.style.width = `${Math.min(95, 40 + Math.round(prog * 0.55))}%`;
          });
          resultBlob = res.blob;
          finalExt = res.ext;
        }

        exportProgressBar.style.width = '100%';
        exportProgressCard.classList.remove('active');

        // Present Result Card
        exportedBlob = resultBlob;
        if (exportedUrl) URL.revokeObjectURL(exportedUrl);
        exportedUrl = URL.createObjectURL(resultBlob);

        trimmedVideoPreview.src = exportedUrl;
        trimmedVideoPreview.load();

        dispExportSpecs.textContent = `${finalExt.toUpperCase()} • ${formatTime(duration)} • ${formatBytes(resultBlob.size)}`;
        exportSuccessCard.classList.add('active');

        // Immediate Download
        triggerDownload(resultBlob, currentVideoFile?.name || 'video', finalExt);
        showToast(dict.toastDownloaded);

      } catch (err) {
        console.error("Export process failed:", err);
        exportProgressCard.classList.remove('active');
        showError(dict.errExportFailed);
      }
    }

    function triggerDownload(blob, originalName, ext) {
      const safeBase = sanitizeOriginalFilename(originalName);
      const filename = `trimmed-${safeBase}.${ext || 'mp4'}`;

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    }

    btnExportVideo.addEventListener('click', handleExport);

    btnDownloadExported.addEventListener('click', () => {
      if (exportedBlob) {
        const ext = exportFormatSelect.value || 'mp4';
        triggerDownload(exportedBlob, currentVideoFile?.name || 'video', ext);
        showToast(TRANSLATIONS[getActiveLang()].toastDownloaded);
      }
    });

    btnDismissSuccess.addEventListener('click', () => {
      exportSuccessCard.classList.remove('active');
    });

    /* ==========================================================================
       Drag & Drop Handlers
       ========================================================================== */

    btnBrowseVideo.addEventListener('click', (e) => {
      e.stopPropagation();
      videoFileInput.click();
    });

    videoDropZone.addEventListener('click', () => {
      videoFileInput.click();
    });

    videoFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleSelectedFile(e.target.files[0]);
        videoFileInput.value = '';
      }
    });

    ['dragenter', 'dragover'].forEach(name => {
      videoDropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        videoDropZone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      videoDropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        videoDropZone.classList.remove('dragover');
      });
    });

    videoDropZone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleSelectedFile(e.dataTransfer.files[0]);
      }
    });

    /* ==========================================================================
       Language Switcher Dropdown Controller
       ========================================================================== */
    function initLangSwitcher() {
      const dropdown = document.getElementById('vantorkit-lang-controller');
      const toggleBtn = document.getElementById('langMenuBtn');
      const menu = document.getElementById('langMenu');
      const label = document.getElementById('currentLangLabel');

      if (!dropdown || !toggleBtn || !menu) return;

      const LANG_NAMES = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
        it: 'Italiano'
      };

      const SEO_META = {
    "en": {
        "title": "Video Trimmer &amp; Cutter – Dual-Handle Timeline Editor",
        "desc": "Trim MP4, WebM, and MOV clips with precision timeline scrubbing and stream copying. Cuts export rapidly in-browser without sending video to any server."
    },
    "ar": {
        "title": "قص وتعديل الفيديو – شريط زمني بمؤشرات سحب مزدوجة",
        "desc": "قص مقاطع MP4 وWebM وMOV عبر شريط زمني تفاعلي مع نسخ مباشر فائق السرعة للتدفقات. يتم التصدير محلياً في جهازك دون رفع أي فيديو لخوادم سحابية."
    },
    "fr": {
        "title": "Découpeur Vidéo & Trimmer – Chronologie à Double Curseur",
        "desc": "Élaguez vos vidéos MP4, WebM et MOV avec précision temporelle et copie directe de flux. Export rapide dans le navigateur sans téléversement."
    },
    "it": {
        "title": "Taglia Video & Trimmer – Timeline con Doppi Cursori",
        "desc": "Ritaglia video MP4, WebM e MOV con timeline interattiva e copia diretta dei flussi. Esportazione immediata nel browser senza invio di file a server."
    }
};

      function updateActiveLanguageUI(lang) {
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

        if (!LANG_NAMES[lang]) lang = 'en';
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        if (label) label.textContent = LANG_NAMES[lang];

        menu.querySelectorAll('.lang-option').forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        applyTranslations(lang);
      }

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
        const isOpen = menu.classList.contains('open') || menu.classList.contains('show');
        if (isOpen) closeMenu();
        else openMenu();
      }

      toggleBtn.addEventListener('click', toggleMenu);

      menu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const selected = opt.getAttribute('data-lang');
          if (selected && LANG_NAMES[selected]) {
            try {
              localStorage.setItem('vantorkit_lang', selected);
            } catch (err) {}
            updateActiveLanguageUI(selected);
            closeMenu();
          }
        });
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeMenu();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });

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