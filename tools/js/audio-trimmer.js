/* ==========================================================================
       VantorKit Audio Trimmer & Cutter Engine
       100% Client-Side Web Audio API, Canvas & 16-Bit PCM WAV Architecture
       ========================================================================== */

    const TRANSLATIONS = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "Audio Trimmer & Cutter",
        toolSubtitle: "Trim, cut, and slice audio files locally with interactive waveform visualization, millisecond precision, and instant WAV export.",
        privacyAlert: "Processing happens locally in your browser. Your audio file is never uploaded.",
        dropTitle: "Drag & drop your audio file here, or browse",
        dropSubtitle: "Supports MP3, WAV, AAC, M4A, OGG, FLAC • Up to 50 MB • 100% In-Browser",
        btnBrowse: "Choose Audio File",
        btnLoadDemo: "Test Demo Audio",
        statusLoading: "Reading audio file into memory...",
        statusDecoding: "Decoding audio stream with Web Audio API...",
        statusInRAM: "Computing waveform peaks in local memory",
        statusExporting: "Slicing PCM data and encoding audio...",
        statusExportingWav: "Slicing PCM data and encoding 16-bit WAV...",
        statusExportingMp3: "Encoding trimmed audio to MP3 locally...",
        waveformTitle: "Interactive Waveform",
        lblTotalDuration: "Total Duration",
        lblSelectedDuration: "Selected Duration",
        lblStartTime: "Start Time",
        lblEndTime: "End Time",
        lblQuickSelect: "Quick Select:",
        quickAll: "Select All",
        quickFirst30: "First 30s",
        quickLast30: "Last 30s",
        btnPlay: "Play Selected",
        btnPreview: "Play Selected",
        btnPause: "Pause",
        btnStop: "Stop",
        btnReset: "Reset",
        lblExportFormat: "Format:",
        optWav: "WAV (Lossless Studio WAV)",
        optMp3: "MP3 (Standard MP3)",
        btnExportWav: "Export WAV",
        btnExportMp3: "Export MP3",
        exportSuccessTitle: "Audio Clip Ready for Download",
        btnDownload: "Download Audio",
        btnDownloadWav: "Download WAV",
        btnDownloadMp3: "Download MP3",
        btnTrimAnother: "Trim Another Clip",
        errDecodeFailed: "This audio format could not be decoded by your browser. Try WAV or MP3.",
        errOversized: "File exceeds 50 MB limit. Please select a smaller audio file.",
        errEmpty: "The selected file is empty.",
        errInvalidTime: "Start time must be before end time.",
        errExportFailed: "Unable to export audio. Please check selection and try again.",
        toastCopied: "Copied to clipboard!",
        toastDownloaded: "Audio file downloaded successfully!",
        toastDownloadedWav: "WAV file downloaded successfully!",
        toastDownloadedMp3: "MP3 file downloaded successfully!",
        footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "على جهازك • خصوصية تامة • بدون حفظ سجلات",
        toolTitle: "قص وتقطيع الصوت",
        toolSubtitle: "قص وتعديل المقاطع الصوتية محلياً بدقة عالية مع مخطط موجي تفاعلي وتصدير فوري بصيغة WAV.",
        privacyAlert: "تتم المعالجة محلياً في متصفحك. لا يتم رفع ملفك الصوتي إلى أي خادم مطلقاً.",
        dropTitle: "اسحب وأفلت الملف الصوتي هنا، أو تصفح",
        dropSubtitle: "يدعم MP3 وWAV وAAC وM4A وOGG وFLAC • حتى 50 ميجابايت • 100% محلياً",
        btnBrowse: "اختيار ملف صوتي",
        btnLoadDemo: "تجربة مقطع توضيحي",
        statusLoading: "جارٍ قراءة الملف الصوتي في الذاكرة...",
        statusDecoding: "جارٍ فك تشفير الصوت عبر Web Audio API...",
        statusInRAM: "جارٍ حساب قمم المخطط الموجي محلياً",
        statusExporting: "جارٍ اقتطاع وتشفير الملف الصوتي...",
        statusExportingWav: "جارٍ اقتطاع العينات وتوليد ملف WAV 16-bit...",
        statusExportingMp3: "جارٍ تشفير المقطع الصوتي إلى MP3 محلياً...",
        waveformTitle: "المخطط الموجي التفاعلي",
        lblTotalDuration: "المدة الإجمالية",
        lblSelectedDuration: "المدة المحددة",
        lblStartTime: "وقت البداية",
        lblEndTime: "وقت النهاية",
        lblQuickSelect: "تحديد سريع:",
        quickAll: "تحديد الكل",
        quickFirst30: "أول 30 ثانية",
        quickLast30: "آخر 30 ثانية",
        btnPlay: "تشغيل المقطع",
        btnPreview: "تشغيل المقطع",
        btnPause: "إيقاف مؤقت",
        btnStop: "إيقاف",
        btnReset: "إعادة ضبط",
        lblExportFormat: "الصيغة:",
        optWav: "WAV (جودة أصلية فائقة)",
        optMp3: "MP3 (صوت مضغوط متوافق)",
        btnExportWav: "تصدير WAV",
        btnExportMp3: "تصدير MP3",
        exportSuccessTitle: "المقطع الصوتي جاهز للتنزيل",
        btnDownload: "تنزيل الملف الصوتي",
        btnDownloadWav: "تنزيل WAV",
        btnDownloadMp3: "تنزيل MP3",
        btnTrimAnother: "اقتطاع مقطع آخر",
        errDecodeFailed: "تعذر فك تشفير هذا التنسيق في متصفحك. يرجى تجربة ملف WAV أو MP3.",
        errOversized: "حجم الملف يتجاوز الحد الأقصى 50 ميجابايت. يرجى اختيار ملف أصغر.",
        errEmpty: "الملف المحدد فارغ.",
        errInvalidTime: "يجب أن يكون وقت البداية قبل وقت النهاية.",
        errExportFailed: "تعذر تصدير الصوت. يرجى التحقق من التحديد والمحاولة مجدداً.",
        toastCopied: "تم النسخ إلى الحافظة!",
        toastDownloaded: "تم تنزيل الملف الصوتي بنجاح!",
        toastDownloadedWav: "تم تنزيل ملف WAV بنجاح!",
        toastDownloadedMp3: "تم تنزيل ملف MP3 بنجاح!",
        footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "← Retour aux outils",
        badgePill: "Côté client • Confidentialité totale • Zéro journal",
        toolTitle: "Découpeur audio & Trimmer",
        toolSubtitle: "Découpez et extrayez vos pistes sonores localement avec onde sonore interactive, précision millimétrique et export WAV.",
        privacyAlert: "Le traitement s'exécute localement dans votre navigateur. Votre fichier audio n'est jamais téléversé.",
        dropTitle: "Glissez-déposez votre fichier audio ici, ou parcourez",
        dropSubtitle: "Prend en charge MP3, WAV, AAC, M4A, OGG, FLAC • Jusqu'à 50 Mo • 100% Navigateur",
        btnBrowse: "Choisir un fichier audio",
        btnLoadDemo: "Tester l'audio démo",
        statusLoading: "Lecture du fichier sonore en mémoire...",
        statusDecoding: "Décodage du signal avec Web Audio API...",
        statusInRAM: "Calcul des crêtes de l'onde dans la mémoire locale",
        statusExporting: "Extraction et encodage audio en cours...",
        statusExportingWav: "Extraction PCM et encodage WAV 16 bits...",
        statusExportingMp3: "Encodage du fichier en MP3 en mémoire...",
        waveformTitle: "Onde sonore interactive",
        lblTotalDuration: "Durée totale",
        lblSelectedDuration: "Durée sélectionnée",
        lblStartTime: "Début",
        lblEndTime: "Fin",
        lblQuickSelect: "Sélection rapide:",
        quickAll: "Tout sélectionner",
        quickFirst30: "Premières 30s",
        quickLast30: "Dernières 30s",
        btnPlay: "Écouter l'extrait",
        btnPreview: "Écouter l'extrait",
        btnPause: "Pause",
        btnStop: "Arrêter",
        btnReset: "Réinitialiser",
        lblExportFormat: "Format :",
        optWav: "WAV (Qualité studio sans perte)",
        optMp3: "MP3 (Standard compressé)",
        btnExportWav: "Exporter WAV",
        btnExportMp3: "Exporter MP3",
        exportSuccessTitle: "Extrait audio prêt au téléchargement",
        btnDownload: "Télécharger l'audio",
        btnDownloadWav: "Télécharger WAV",
        btnDownloadMp3: "Télécharger MP3",
        btnTrimAnother: "Découper un autre extrait",
        errDecodeFailed: "Ce format audio n'a pas pu être décodé par votre navigateur. Essayez un fichier WAV ou MP3.",
        errOversized: "Le fichier dépasse la limite de 50 Mo. Veuillez sélectionner un fichier plus compact.",
        errEmpty: "Le fichier sélectionné est vide.",
        errInvalidTime: "Le temps de début doit être inférieur au temps de fin.",
        errExportFailed: "Impossible d'exporter l'audio. Veuillez vérifier votre sélection.",
        toastCopied: "Copié dans le presse-papiers!",
        toastDownloaded: "Fichier audio téléchargé avec succès!",
        toastDownloadedWav: "Fichier WAV téléchargé avec succès !",
        toastDownloadedMp3: "Fichier MP3 téléchargé avec succès !",
        footerText: "© 2026 VantorKit. Utilitaires Web rapides, privés et gratuits. Tous les traitements s'effectuent dans votre navigateur."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "← Torna agli strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Taglia Audio & Trimmer",
        toolSubtitle: "Taglia e ritaglia tracce audio localmente con forma d'onda interattiva, precisione al millisecondo ed esportazione WAV.",
        privacyAlert: "L'elaborazione avviene localmente nel browser. Il tuo file audio non viene mai caricato su un server.",
        dropTitle: "Trascina qui il tuo file audio, oppure sfoglia",
        dropSubtitle: "Supporta MP3, WAV, AAC, M4A, OGG, FLAC • Fino a 50 MB • 100% Nel Browser",
        btnBrowse: "Sfoglia file audio",
        btnLoadDemo: "Prova audio demo",
        statusLoading: "Caricamento traccia audio in memoria...",
        statusDecoding: "Decodifica del flusso audio con Web Audio API...",
        statusInRAM: "Calcolo dei picchi dell'onda acustica",
        statusExporting: "Estrazione e codifica audio in corso...",
        statusExportingWav: "Estrazione PCM e codifica WAV a 16 bit...",
        statusExportingMp3: "Codifica del file ritagliato in MP3...",
        waveformTitle: "Forma d'onda interattiva",
        lblTotalDuration: "Durata totale",
        lblSelectedDuration: "Durata selezionata",
        lblStartTime: "Inizio",
        lblEndTime: "Fine",
        lblQuickSelect: "Selezione rapida:",
        quickAll: "Seleziona tutto",
        quickFirst30: "Primi 30s",
        quickLast30: "Ultimi 30s",
        btnPlay: "Ascolta Selezione",
        btnPreview: "Ascolta Selezione",
        btnPause: "Pausa",
        btnStop: "Interrompi",
        btnReset: "Ripristina",
        lblExportFormat: "Formato:",
        optWav: "WAV (Qualità studio lossless)",
        optMp3: "MP3 (Standard compresso)",
        btnExportWav: "Esporta WAV",
        btnExportMp3: "Esporta MP3",
        exportSuccessTitle: "Spezzone audio pronto per il download",
        btnDownload: "Scarica Audio",
        btnDownloadWav: "Scarica WAV",
        btnDownloadMp3: "Scarica MP3",
        btnTrimAnother: "Taglia un altro spezzone",
        errDecodeFailed: "Impossibile decodificare questo formato con il tuo browser. Prova con WAV o MP3.",
        errOversized: "Il file supera il limite massimo di 50 MB. Seleziona un file di dimensioni inferiori.",
        errEmpty: "Il file selezionato risulta vuoto.",
        errInvalidTime: "Il punto iniziale deve precedere il punto finale.",
        errExportFailed: "Impossibile esportare l'audio. Controlla la selezione e riprova.",
        toastCopied: "Copiato negli appunti!",
        toastDownloaded: "File audio scaricato con successo!",
        toastDownloadedWav: "File WAV scaricato con successo!",
        toastDownloadedMp3: "File MP3 scaricato con successo!",
        footerText: "© 2026 VantorKit. Strumenti web veloci, privati e gratuiti. Tutte le elaborazioni avvengono nel tuo browser."
      }
    };

    // State Constants
    const AudioState = {
      IDLE: 'IDLE',
      LOADING: 'LOADING',
      DECODING: 'DECODING',
      READY: 'READY',
      PREVIEWING: 'PREVIEWING',
      EXPORTING: 'EXPORTING',
      ERROR: 'ERROR'
    };

    // Internal State
    let currentState = AudioState.IDLE;
    let audioContext = null;
    let currentAudioBuffer = null;
    let currentOriginalFilename = 'audio.wav';
    let currentFileSize = 0;
    let waveformPeaks = []; // Array of { min, max }
    let selectionStart = 0; // in seconds
    let selectionEnd = 0;   // in seconds
    let currentPlayhead = 0; // in seconds
    let activeSourceNode = null;
    let playbackStartTime = 0;
    let playbackStartOffset = 0;
    let isPlaying = false;
    let animFrameId = null;
    let selectedExportFormat = 'wav';
    let exportedBlob = null;
    let exportedBlobType = 'wav';
    let exportedWavBlob = null;
    let lastGeneratedUrl = null;

    // Canvas interaction state
    let activeDragHandle = null; // 'start', 'end', or null
    const HANDLE_HIT_WIDTH = 22;

    // DOM Elements
    const audioDropZone = document.getElementById('audioDropZone');
    const audioFileInput = document.getElementById('audioFileInput');
    const btnBrowseAudio = document.getElementById('btnBrowseAudio');
    const btnLoadDemoAudio = document.getElementById('btnLoadDemoAudio');
    const audioLoadingCard = document.getElementById('audioLoadingCard');
    const audioLoadingText = document.getElementById('audioLoadingText');
    const audioTrimmerError = document.getElementById('audioTrimmerError');
    const errorMessageText = document.getElementById('errorMessageText');
    const btnDismissError = document.getElementById('btnDismissError');
    const audioWorkspace = document.getElementById('audioWorkspace');

    const dispAudioName = document.getElementById('dispAudioName');
    const dispAudioChannels = document.getElementById('dispAudioChannels');
    const dispAudioSampleRate = document.getElementById('dispAudioSampleRate');
    const dispAudioFileSize = document.getElementById('dispAudioFileSize');
    const dispTotalDuration = document.getElementById('dispTotalDuration');
    const dispSelectedDuration = document.getElementById('dispSelectedDuration');
    const dispPlayheadPosition = document.getElementById('dispPlayheadPosition');

    const canvasWrap = document.getElementById('canvasWrap');
    const canvas = document.getElementById('audioWaveformCanvas');
    const startTimeInput = document.getElementById('startTimeInput');
    const endTimeInput = document.getElementById('endTimeInput');

    const btnPresetAll = document.getElementById('btnPresetAll');
    const btnPresetFirst15 = document.getElementById('btnPresetFirst15');
    const btnPresetFirst30 = document.getElementById('btnPresetFirst30');
    const btnPresetLast15 = document.getElementById('btnPresetLast15');
    const btnPresetLast30 = document.getElementById('btnPresetLast30');

    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnPlayPauseIcon = document.getElementById('btnPlayPauseIcon');
    const btnPlayPauseText = document.getElementById('btnPlayPauseText');
    const btnPreview = btnPlayPause; // Compatibility alias
    const btnStop = document.getElementById('btnStop');
    const btnResetSelection = document.getElementById('btnResetSelection');
    const exportFormatSelect = document.getElementById('exportFormatSelect');
    const btnExportAudio = document.getElementById('btnExportAudio');
    const btnExportText = document.getElementById('btnExportText');
    const btnExportWav = btnExportAudio; // Compatibility alias

    const exportSuccessCard = document.getElementById('exportSuccessCard');
    const dispExportSpecs = document.getElementById('dispExportSpecs');
    const dispExportSize = document.getElementById('dispExportSize');
    const btnDownloadExported = document.getElementById('btnDownloadExported') || document.getElementById('btnDownloadExportedWav');
    const btnDownloadExportedText = document.getElementById('btnDownloadExportedText');
    const btnDownloadExportedWav = btnDownloadExported; // Compatibility alias
    const btnDismissSuccess = document.getElementById('btnDismissSuccess');

    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    /* ==========================================================================
       Language & UI Synchronization
       ========================================================================== */

    function getActiveLang() {
      try {
        const saved = localStorage.getItem('vantorkit_lang');
        if (saved && TRANSLATIONS[saved]) return saved;
      } catch (e) {}
      return 'en';
    }

    function applyLanguage(lang) {
      window.applyLanguage = applyLanguage;
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      
      const html = document.getElementById('htmlRoot');
      if (html) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      }

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const langNames = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      const currentLabel = document.getElementById('currentLangLabel');
      if (currentLabel) {
        currentLabel.textContent = langNames[lang] || 'English';
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          if (el.tagName === 'INPUT') {
            el.placeholder = dict[key];
          } else {
            el.textContent = dict[key];
          }
        }
      });

      // Synchronize dynamic button labels and indicators
      updatePlayPauseButtonUI(isPlaying);
      updateExportButtonText();
      if (exportedBlob) {
        updateDownloadButtonText();
      }
      updateTimeDisplays();
    }

    function updatePlayPauseButtonUI(playing) {
      const lang = getActiveLang();
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      if (!btnPlayPause) return;
      if (playing) {
        btnPlayPause.classList.add('playing');
        if (btnPlayPauseIcon) {
          btnPlayPauseIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        }
        if (btnPlayPauseText) {
          btnPlayPauseText.textContent = dict.btnPause || 'Pause';
        }
        btnPlayPause.setAttribute('aria-label', dict.btnPause || 'Pause');
      } else {
        btnPlayPause.classList.remove('playing');
        if (btnPlayPauseIcon) {
          btnPlayPauseIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
        }
        if (btnPlayPauseText) {
          btnPlayPauseText.textContent = dict.btnPlay || 'Play Selected';
        }
        btnPlayPause.setAttribute('aria-label', dict.btnPlay || 'Play Selected');
      }
    }

    function updateExportButtonText() {
      const lang = getActiveLang();
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      if (!btnExportText) return;
      if (selectedExportFormat === 'mp3') {
        btnExportText.textContent = dict.btnExportMp3 || 'Export MP3';
      } else {
        btnExportText.textContent = dict.btnExportWav || 'Export WAV';
      }
    }

    function updateDownloadButtonText() {
      const lang = getActiveLang();
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      if (!btnDownloadExportedText) return;
      if (exportedBlobType === 'mp3') {
        btnDownloadExportedText.textContent = dict.btnDownloadMp3 || 'Download MP3';
      } else {
        btnDownloadExportedText.textContent = dict.btnDownloadWav || 'Download WAV';
      }
    }

    function showToast(msg) {
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2800);
    }

    function showError(msg) {
      setAudioState(AudioState.ERROR);
      errorMessageText.textContent = msg;
      audioTrimmerError.classList.add('active');
    }

    function clearError() {
      audioTrimmerError.classList.remove('active');
    }

    btnDismissError.addEventListener('click', () => {
      clearError();
    });

    /* ==========================================================================
       AudioContext Management
       ========================================================================== */

    function getAudioContext() {
      if (!audioContext || audioContext.state === 'closed') {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioCtxClass();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      return audioContext;
    }

    /* ==========================================================================
       Time Formatting & Parsing (mm:ss.SS)
       ========================================================================== */

    function formatTime(sec) {
      if (isNaN(sec) || !isFinite(sec) || sec < 0) sec = 0;
      const hours = Math.floor(sec / 3600);
      const minutes = Math.floor((sec % 3600) / 60);
      const seconds = Math.floor(sec % 60);
      const centis = Math.floor(Math.round((sec % 1) * 100));

      const pad = (n) => String(n).padStart(2, '0');
      if (hours > 0) {
        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds) + '.' + pad(centis % 100);
      }
      return pad(minutes) + ':' + pad(seconds) + '.' + pad(centis % 100);
    }

    function parseTime(str, maxDuration) {
      if (typeof str !== 'string') return null;
      const clean = str.trim();
      if (!clean || clean.includes('-')) return null;

      const parts = clean.split(':');
      let seconds = 0;
      if (parts.length === 3) {
        const h = parseFloat(parts[0]);
        const m = parseFloat(parts[1]);
        const s = parseFloat(parts[2]);
        if (isNaN(h) || isNaN(m) || isNaN(s) || h < 0 || m < 0 || s < 0 || m >= 60 || s >= 60) return null;
        seconds = h * 3600 + m * 60 + s;
      } else if (parts.length === 2) {
        const m = parseFloat(parts[0]);
        const s = parseFloat(parts[1]);
        if (isNaN(m) || isNaN(s) || m < 0 || s < 0 || s >= 60) return null;
        seconds = m * 60 + s;
      } else if (parts.length === 1) {
        const s = parseFloat(parts[0]);
        if (isNaN(s) || s < 0) return null;
        seconds = s;
      } else {
        return null;
      }

      if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) return null;
      if (maxDuration !== undefined && seconds > maxDuration) {
        seconds = maxDuration;
      }
      return Math.round(seconds * 100) / 100;
    }

    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    /* ==========================================================================
       State Machine & UI State Transitions
       ========================================================================== */

    function setAudioState(state) {
      currentState = state;

      if (state === AudioState.IDLE) {
        audioLoadingCard.classList.remove('active');
        audioWorkspace.classList.remove('active');
        exportSuccessCard.classList.remove('active');
      } else if (state === AudioState.LOADING || state === AudioState.DECODING) {
        clearError();
        audioLoadingCard.classList.add('active');
        audioWorkspace.classList.remove('active');
        exportSuccessCard.classList.remove('active');
        const lang = getActiveLang();
        audioLoadingText.textContent = (state === AudioState.LOADING)
          ? TRANSLATIONS[lang].statusLoading
          : TRANSLATIONS[lang].statusDecoding;
      } else if (state === AudioState.READY) {
        audioLoadingCard.classList.remove('active');
        audioWorkspace.classList.add('active');
        btnPlayPause.disabled = false;
        btnStop.disabled = (currentPlayhead === selectionStart);
        btnExportAudio.disabled = false;
        updatePlayPauseButtonUI(false);
      } else if (state === AudioState.PREVIEWING) {
        btnPlayPause.disabled = false;
        btnStop.disabled = false;
        btnExportAudio.disabled = false;
        updatePlayPauseButtonUI(true);
      } else if (state === AudioState.EXPORTING) {
        btnPlayPause.disabled = true;
        btnExportAudio.disabled = true;
      } else if (state === AudioState.ERROR) {
        audioLoadingCard.classList.remove('active');
      }
    }

    /* ==========================================================================
       File Ingestion & Safe Decoding
       ========================================================================== */

    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 Megabytes

    function handleSelectedFile(file) {
      if (!file) return;
      clearError();

      if (file.size === 0) {
        showError(TRANSLATIONS[getActiveLang()].errEmpty);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        showError(TRANSLATIONS[getActiveLang()].errOversized);
        return;
      }

      // Stop previous playback and reset
      stopPlayback(true);
      if (lastGeneratedUrl) {
        URL.revokeObjectURL(lastGeneratedUrl);
        lastGeneratedUrl = null;
      }

      setAudioState(AudioState.LOADING);
      currentOriginalFilename = file.name || 'audio.wav';
      currentFileSize = file.size;

      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          setAudioState(AudioState.DECODING);
          const arrayBuffer = e.target.result;
          const ctx = getAudioContext();

          // Safe clone in case decodeAudioData detaches the buffer
          const bufferCopy = arrayBuffer.slice(0);
          
          let decodedBuffer = null;
          try {
            decodedBuffer = await ctx.decodeAudioData(bufferCopy);
          } catch (decodeErr) {
            showError(TRANSLATIONS[getActiveLang()].errDecodeFailed);
            return;
          }

          if (!decodedBuffer || decodedBuffer.duration <= 0) {
            showError(TRANSLATIONS[getActiveLang()].errDecodeFailed);
            return;
          }

          onAudioDecoded(decodedBuffer);
        } catch (err) {
          showError(TRANSLATIONS[getActiveLang()].errDecodeFailed);
        }
      };

      reader.onerror = () => {
        showError(TRANSLATIONS[getActiveLang()].errDecodeFailed);
      };

      reader.readAsArrayBuffer(file);
    }

    function onAudioDecoded(buffer) {
      currentAudioBuffer = buffer;
      selectionStart = 0;
      selectionEnd = Math.round(buffer.duration * 100) / 100;
      currentPlayhead = 0;

      // Extract downsampled waveform peaks
      computeWaveformPeaks(buffer, 900);

      // Populate Metadata
      dispAudioName.textContent = currentOriginalFilename;
      dispAudioChannels.textContent = buffer.numberOfChannels === 1 ? 'Mono' : 'Stereo';
      dispAudioSampleRate.textContent = buffer.sampleRate.toLocaleString() + ' Hz';
      dispAudioFileSize.textContent = formatBytes(currentFileSize);

      updateTimeDisplays();
      setAudioState(AudioState.READY);
      renderWaveform();
    }

    /* ==========================================================================
       Synthetic Demo Audio Generator (5-Second Melodic Chimes in Stereo)
       ========================================================================== */

    function generateDemoAudio() {
      const ctx = getAudioContext();
      const sampleRate = ctx.sampleRate || 44100;
      const duration = 5.0;
      const numSamples = Math.floor(sampleRate * duration);
      const audioBuffer = ctx.createBuffer(2, numSamples, sampleRate);
      const left = audioBuffer.getChannelData(0);
      const right = audioBuffer.getChannelData(1);

      // Pleasant arpeggio chords in C Major (C4, E4, G4, B4, C5, E5, G5)
      const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 659.25, 783.99];
      for (let i = 0; i < numSamples; i++) {
        const t = i / sampleRate;
        let sL = 0;
        let sR = 0;

        notes.forEach((freq, idx) => {
          const noteStart = idx * 0.55;
          if (t >= noteStart) {
            const dt = t - noteStart;
            const env = Math.exp(-dt * 2.8); // Natural exponential decay
            const harmonic = Math.sin(2 * Math.PI * freq * dt) + 0.35 * Math.sin(4 * Math.PI * freq * dt);
            const val = harmonic * env * 0.18;
            const pan = (idx / (notes.length - 1)) * 1.6 - 0.8; // stereo spread
            sL += val * (1 - pan) * 0.5;
            sR += val * (1 + pan) * 0.5;
          }
        });

        left[i] = Math.max(-1, Math.min(1, sL));
        right[i] = Math.max(-1, Math.min(1, sR));
      }

      currentOriginalFilename = 'vantorkit-demo-chimes.wav';
      currentFileSize = numSamples * 4 + 44;
      onAudioDecoded(audioBuffer);
    }

    /* ==========================================================================
       Waveform Peak Extraction & Canvas Rendering
       ========================================================================== */

    function computeWaveformPeaks(buffer, totalBins) {
      waveformPeaks = [];
      const numChannels = buffer.numberOfChannels;
      const totalSamples = buffer.length;
      const samplesPerBin = Math.max(1, Math.floor(totalSamples / totalBins));

      const channels = [];
      for (let ch = 0; ch < numChannels; ch++) {
        channels.push(buffer.getChannelData(ch));
      }

      for (let b = 0; b < totalBins; b++) {
        const start = b * samplesPerBin;
        const end = Math.min(totalSamples, start + samplesPerBin);
        let min = 1.0;
        let max = -1.0;

        for (let ch = 0; ch < numChannels; ch++) {
          const data = channels[ch];
          for (let s = start; s < end; s += 2) { // 2x sub-sample for speed
            const val = data[s];
            if (val < min) min = val;
            if (val > max) max = val;
          }
        }

        if (min > max) {
          min = 0;
          max = 0;
        }
        waveformPeaks.push({ min, max });
      }
    }

    function renderWaveform() {
      if (!currentAudioBuffer || waveformPeaks.length === 0) return;

      const rect = canvasWrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);

      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }

      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.scale(dpr, dpr);

      // Background
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0a0e17';
      ctx.fillRect(0, 0, w, h);

      const totalDuration = currentAudioBuffer.duration;
      const startRatio = selectionStart / totalDuration;
      const endRatio = selectionEnd / totalDuration;
      const startX = startRatio * w;
      const endX = endRatio * w;

      // Draw Selected Range Backdrop (Indigo Highlight)
      ctx.fillStyle = 'rgba(99, 102, 241, 0.18)';
      ctx.fillRect(startX, 0, Math.max(1, endX - startX), h);

      // Draw Unselected Shading
      ctx.fillStyle = 'rgba(7, 9, 14, 0.65)';
      if (startX > 0) ctx.fillRect(0, 0, startX, h);
      if (endX < w) ctx.fillRect(endX, 0, w - endX, h);

      // Center baseline
      const midY = h / 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      // Draw Waveform Bars
      const bins = waveformPeaks.length;
      const barW = Math.max(1, (w / bins) * 0.9);

      for (let i = 0; i < bins; i++) {
        const x = (i / bins) * w;
        const peak = waveformPeaks[i];
        const amplitude = Math.max(0.04, (peak.max - peak.min) * 0.5);
        const barH = Math.max(3, amplitude * (h * 0.78));

        const isSelected = (x >= startX && x <= endX);
        if (isSelected) {
          ctx.fillStyle = '#818cf8'; // Vibrant indigo for selection
        } else {
          ctx.fillStyle = '#334155'; // Dark muted slate for unselected
        }

        ctx.fillRect(x, midY - barH / 2, barW, barH);
      }

      // Start Handle & Line
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      ctx.lineTo(startX, h);
      ctx.stroke();

      // Start Marker Tab (Top)
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(startX - 18, 4, 36, 18, 4) : ctx.rect(startX - 18, 4, 36, 18);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('START', startX, 13);

      // End Handle & Line
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(endX, 0);
      ctx.lineTo(endX, h);
      ctx.stroke();

      // End Marker Tab (Top)
      ctx.fillStyle = '#818cf8';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(endX - 18, 4, 36, 18, 4) : ctx.rect(endX - 18, 4, 36, 18);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('END', endX, 13);

      // Playhead Cursor (if playing or scrubbed)
      if (isPlaying || currentPlayhead > 0) {
        const playRatio = Math.max(0, Math.min(1, currentPlayhead / totalDuration));
        const playX = playRatio * w;

        ctx.save();
        ctx.shadowColor = 'rgba(56, 189, 248, 0.85)';
        ctx.shadowBlur = 8;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(playX, 0);
        ctx.lineTo(playX, h);
        ctx.stroke();

        // Top downward indicator pin
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(playX - 6, 0);
        ctx.lineTo(playX + 6, 0);
        ctx.lineTo(playX, 9);
        ctx.closePath();
        ctx.fill();

        // Bottom circular indicator
        ctx.beginPath();
        ctx.arc(playX, h - 8, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
    }

    // Window resize observer for responsive waveform
    window.addEventListener('resize', () => {
      if (currentAudioBuffer) {
        renderWaveform();
      }
    });

    /* ==========================================================================
       Interactive Dragging & Waveform Scrubbing (Pointer Events)
       ========================================================================== */

    function getWaveformXFromEvent(e) {
      const rect = canvasWrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      return Math.max(0, Math.min(rect.width, x));
    }

    function getTimeFromX(x) {
      if (!currentAudioBuffer) return 0;
      const rect = canvasWrap.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, x / rect.width));
      return ratio * currentAudioBuffer.duration;
    }

    canvasWrap.addEventListener('pointerdown', (e) => {
      if (!currentAudioBuffer) return;
      const x = getWaveformXFromEvent(e);
      const rect = canvasWrap.getBoundingClientRect();
      const totalDur = currentAudioBuffer.duration;
      const startX = (selectionStart / totalDur) * rect.width;
      const endX = (selectionEnd / totalDur) * rect.width;

      const distStart = Math.abs(x - startX);
      const distEnd = Math.abs(x - endX);

      if (distStart <= HANDLE_HIT_WIDTH && distStart <= distEnd) {
        activeDragHandle = 'start';
        canvasWrap.setPointerCapture(e.pointerId);
      } else if (distEnd <= HANDLE_HIT_WIDTH) {
        activeDragHandle = 'end';
        canvasWrap.setPointerCapture(e.pointerId);
      } else {
        // Clicked somewhere in the timeline: if clicked before start or after end, snap nearest
        const clickTime = getTimeFromX(x);
        if (Math.abs(clickTime - selectionStart) < Math.abs(clickTime - selectionEnd)) {
          setSelection(clickTime, selectionEnd);
          activeDragHandle = 'start';
        } else {
          setSelection(selectionStart, clickTime);
          activeDragHandle = 'end';
        }
        canvasWrap.setPointerCapture(e.pointerId);
      }
    });

    canvasWrap.addEventListener('pointermove', (e) => {
      if (!currentAudioBuffer) return;
      const x = getWaveformXFromEvent(e);
      const rect = canvasWrap.getBoundingClientRect();
      const totalDur = currentAudioBuffer.duration;
      const startX = (selectionStart / totalDur) * rect.width;
      const endX = (selectionEnd / totalDur) * rect.width;

      // Update hover cursor
      if (!activeDragHandle) {
        if (Math.abs(x - startX) <= HANDLE_HIT_WIDTH || Math.abs(x - endX) <= HANDLE_HIT_WIDTH) {
          canvasWrap.style.cursor = 'ew-resize';
        } else {
          canvasWrap.style.cursor = 'crosshair';
        }
        return;
      }

      const newTime = getTimeFromX(x);
      if (activeDragHandle === 'start') {
        const bounded = Math.max(0, Math.min(newTime, selectionEnd - 0.05));
        setSelection(bounded, selectionEnd);
      } else if (activeDragHandle === 'end') {
        const bounded = Math.min(totalDur, Math.max(newTime, selectionStart + 0.05));
        setSelection(selectionStart, bounded);
      }
    });

    function releasePointer(e) {
      if (activeDragHandle) {
        try { canvasWrap.releasePointerCapture(e.pointerId); } catch (err) {}
        activeDragHandle = null;
      }
    }

    canvasWrap.addEventListener('pointerup', releasePointer);
    canvasWrap.addEventListener('pointercancel', releasePointer);

    // Keyboard support on canvas
    canvas.addEventListener('keydown', (e) => {
      if (!currentAudioBuffer) return;
      const step = e.shiftKey ? 1.0 : 0.1;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelection(Math.max(0, selectionStart - step), selectionEnd);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSelection(selectionStart, Math.min(currentAudioBuffer.duration, selectionEnd + step));
      }
    });

    /* ==========================================================================
       Selection Synchronization & Numerical Inputs
       ========================================================================== */

    function setSelection(start, end) {
      if (!currentAudioBuffer) return;
      const total = currentAudioBuffer.duration;
      let s = Math.max(0, Math.min(total, start));
      let e = Math.max(0, Math.min(total, end));

      if (e < s) {
        const tmp = s;
        s = e;
        e = tmp;
      }
      if (e - s < 0.05) {
        if (e + 0.05 <= total) e = s + 0.05;
        else if (s - 0.05 >= 0) s = e - 0.05;
      }

      selectionStart = Math.round(s * 100) / 100;
      selectionEnd = Math.round(e * 100) / 100;
      currentPlayhead = selectionStart;

      updateTimeDisplays();
      renderWaveform();
    }

    function updateTimeDisplays() {
      if (!currentAudioBuffer) return;
      startTimeInput.value = formatTime(selectionStart);
      endTimeInput.value = formatTime(selectionEnd);
      dispTotalDuration.textContent = formatTime(currentAudioBuffer.duration);
      dispSelectedDuration.textContent = formatTime(Math.max(0, selectionEnd - selectionStart));
      dispPlayheadPosition.textContent = 'Position: ' + formatTime(currentPlayhead);
    }

    // Input blur / change authoritative handling
    startTimeInput.addEventListener('change', () => {
      if (!currentAudioBuffer) return;
      const parsed = parseTime(startTimeInput.value, currentAudioBuffer.duration);
      if (parsed === null || parsed >= selectionEnd) {
        startTimeInput.value = formatTime(selectionStart);
      } else {
        setSelection(parsed, selectionEnd);
      }
    });

    endTimeInput.addEventListener('change', () => {
      if (!currentAudioBuffer) return;
      const parsed = parseTime(endTimeInput.value, currentAudioBuffer.duration);
      if (parsed === null || parsed <= selectionStart) {
        endTimeInput.value = formatTime(selectionEnd);
      } else {
        setSelection(selectionStart, parsed);
      }
    });

    // Nudge Buttons (+/- 0.1s, 1s)
    document.querySelectorAll('.audio-trimmer-nudge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!currentAudioBuffer) return;
        const target = btn.getAttribute('data-target');
        const delta = parseFloat(btn.getAttribute('data-nudge'));
        if (target === 'start') {
          setSelection(selectionStart + delta, selectionEnd);
        } else {
          setSelection(selectionStart, selectionEnd + delta);
        }
      });
    });

    // Quick Presets
    btnPresetAll.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      setSelection(0, currentAudioBuffer.duration);
    });
    btnPresetFirst15.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      setSelection(0, Math.min(15, currentAudioBuffer.duration));
    });
    btnPresetFirst30.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      setSelection(0, Math.min(30, currentAudioBuffer.duration));
    });
    btnPresetLast15.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      setSelection(Math.max(0, currentAudioBuffer.duration - 15), currentAudioBuffer.duration);
    });
    btnPresetLast30.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      setSelection(Math.max(0, currentAudioBuffer.duration - 30), currentAudioBuffer.duration);
    });

    /* ==========================================================================
       Audio Playback Engine (AudioBufferSourceNode with Active Playhead)
       ========================================================================== */

    function stopPlayback(resetToStart = true) {
      if (activeSourceNode) {
        try {
          activeSourceNode.onended = null;
          activeSourceNode.stop();
          activeSourceNode.disconnect();
        } catch (e) {}
        activeSourceNode = null;
      }
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      isPlaying = false;
      if (resetToStart) {
        currentPlayhead = selectionStart;
      }
      updatePlayPauseButtonUI(false);
      btnStop.disabled = (currentPlayhead === selectionStart);
      updateTimeDisplays();
      renderWaveform();
    }

    async function startPlayback(offset) {
      if (!currentAudioBuffer) return;
      const ctx = getAudioContext();

      // Ensure AudioContext is actively running to defeat autoplay policy
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume();
        } catch (e) {
          console.warn('AudioContext resume error:', e);
        }
      }

      // Stop previous instance cleanly without resetting position
      if (activeSourceNode) {
        try {
          activeSourceNode.onended = null;
          activeSourceNode.stop();
          activeSourceNode.disconnect();
        } catch (e) {}
        activeSourceNode = null;
      }
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }

      let startPos = (typeof offset === 'number') ? offset : selectionStart;
      if (startPos >= selectionEnd || startPos < selectionStart) {
        startPos = selectionStart;
      }

      let durationToPlay = selectionEnd - startPos;
      if (durationToPlay <= 0.02) {
        currentPlayhead = selectionStart;
        startPos = selectionStart;
        durationToPlay = selectionEnd - startPos;
      }
      if (durationToPlay <= 0.02) return;

      const source = ctx.createBufferSource();
      source.buffer = currentAudioBuffer;
      source.connect(ctx.destination);

      playbackStartTime = ctx.currentTime;
      playbackStartOffset = startPos;
      isPlaying = true;
      activeSourceNode = source;

      source.onended = () => {
        if (activeSourceNode === source) {
          stopPlayback(true);
        }
      };

      source.start(0, startPos, durationToPlay);
      updatePlayPauseButtonUI(true);
      btnStop.disabled = false;

      function tick() {
        if (!isPlaying) return;
        const elapsed = ctx.currentTime - playbackStartTime;
        currentPlayhead = playbackStartOffset + elapsed;

        if (currentPlayhead >= selectionEnd) {
          stopPlayback(true);
          return;
        }
        updateTimeDisplays();
        renderWaveform();
        animFrameId = requestAnimationFrame(tick);
      }
      animFrameId = requestAnimationFrame(tick);
    }

    function pausePlayback() {
      if (!isPlaying) return;
      const ctx = getAudioContext();
      const elapsed = ctx.currentTime - playbackStartTime;
      currentPlayhead = playbackStartOffset + elapsed;
      stopPlayback(false);
    }

    async function togglePlayPause() {
      if (!currentAudioBuffer) return;
      if (isPlaying) {
        pausePlayback();
      } else {
        await startPlayback(currentPlayhead);
      }
    }

    btnPlayPause.addEventListener('click', togglePlayPause);

    btnStop.addEventListener('click', () => {
      stopPlayback(true);
    });

    btnResetSelection.addEventListener('click', () => {
      if (!currentAudioBuffer) return;
      stopPlayback(true);
      setSelection(0, currentAudioBuffer.duration);
    });

    /* ==========================================================================
       16-Bit PCM WAV Serialization & Validation
       ========================================================================== */

    function encode16BitWav(audioBuffer, startTime, endTime) {
      const sampleRate = audioBuffer.sampleRate;
      const numChannels = audioBuffer.numberOfChannels;

      const startSample = Math.max(0, Math.floor(startTime * sampleRate));
      const endSample = Math.min(audioBuffer.length, Math.ceil(endTime * sampleRate));
      const numSamples = Math.max(0, endSample - startSample);

      if (numSamples === 0) {
        throw new Error("Zero-length audio selection.");
      }

      const bytesPerSample = 2; // 16-bit
      const blockAlign = numChannels * bytesPerSample;
      const byteRate = sampleRate * blockAlign;
      const dataSize = numSamples * blockAlign;
      const bufferSize = 44 + dataSize;

      const buffer = new ArrayBuffer(bufferSize);
      const view = new DataView(buffer);

      function writeString(offset, str) {
        for (let i = 0; i < str.length; i++) {
          view.setUint8(offset + i, str.charCodeAt(i));
        }
      }

      // RIFF chunk descriptor
      writeString(0, 'RIFF');
      view.setUint32(4, 36 + dataSize, true); // ChunkSize
      writeString(8, 'WAVE');

      // "fmt " sub-chunk
      writeString(12, 'fmt ');
      view.setUint32(16, 16, true);          // Subchunk1Size (16 for PCM)
      view.setUint16(20, 1, true);           // AudioFormat (1 for PCM)
      view.setUint16(22, numChannels, true); // NumChannels
      view.setUint32(24, sampleRate, true);  // SampleRate
      view.setUint32(28, byteRate, true);    // ByteRate
      view.setUint16(32, blockAlign, true);  // BlockAlign
      view.setUint16(34, 16, true);          // BitsPerSample

      // "data" sub-chunk
      writeString(36, 'data');
      view.setUint32(40, dataSize, true);    // Subchunk2Size

      // Interleave channel data and convert Float32 to signed 16-bit PCM with clipping
      const channels = [];
      for (let ch = 0; ch < numChannels; ch++) {
        channels.push(audioBuffer.getChannelData(ch));
      }

      let offset = 44;
      for (let i = 0; i < numSamples; i++) {
        const sIdx = startSample + i;
        for (let ch = 0; ch < numChannels; ch++) {
          const sample = channels[ch][sIdx];
          // Safe clipping to prevent overflow
          const clamped = Math.max(-1, Math.min(1, sample));
          const int16 = clamped < 0 ? clamped * 0x8000 : clamped * 0x7FFF;
          view.setInt16(offset, int16, true);
          offset += 2;
        }
      }

      return new Blob([buffer], { type: 'audio/wav' });
    }

    async function validateWavBlob(blob, expectedChannels, expectedSampleRate, expectedDuration) {
      const arrayBuffer = await blob.arrayBuffer();
      if (arrayBuffer.byteLength < 44) {
        throw new Error("WAV size smaller than 44 bytes");
      }
      const view = new DataView(arrayBuffer);

      const riff = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
      const wave = String.fromCharCode(view.getUint8(8), view.getUint8(9), view.getUint8(10), view.getUint8(11));
      const fmt = String.fromCharCode(view.getUint8(12), view.getUint8(13), view.getUint8(14), view.getUint8(15));
      const data = String.fromCharCode(view.getUint8(36), view.getUint8(37), view.getUint8(38), view.getUint8(39));

      if (riff !== 'RIFF' || wave !== 'WAVE') throw new Error("Invalid RIFF/WAVE header");
      if (fmt !== 'fmt ') throw new Error("Invalid fmt subchunk");
      if (data !== 'data') throw new Error("Invalid data subchunk");

      const format = view.getUint16(20, true);
      const channels = view.getUint16(22, true);
      const sampleRate = view.getUint32(24, true);
      const bitsPerSample = view.getUint16(34, true);

      if (format !== 1) throw new Error("AudioFormat is not PCM");
      if (channels !== expectedChannels) throw new Error("Channel count mismatch");
      if (sampleRate !== expectedSampleRate) throw new Error("Sample rate mismatch");
      if (bitsPerSample !== 16) throw new Error("Bits per sample is not 16");

      // Local round-trip decoding test
      const ctx = getAudioContext();
      const decoded = await ctx.decodeAudioData(arrayBuffer.slice(0));
      const diff = Math.abs(decoded.duration - expectedDuration);
      if (diff > 0.12) {
        throw new Error("Round-trip duration mismatch: expected " + expectedDuration + "s, got " + decoded.duration + "s");
      }

      return {
        channels: decoded.numberOfChannels,
        sampleRate: decoded.sampleRate,
        duration: decoded.duration,
        size: blob.size
      };
    }

    function sanitizeOriginalFilename(name) {
      if (!name || typeof name !== 'string') return 'audio';
      let base = name.replace(/\.[^/.]+$/, '');
      base = base.replace(/^.*[\\\/]/, '');
      base = base.replace(/[\\/:*?"<>|\x00-\x1F\x7F]/g, '_').trim();
      if (!base || /^_+$/.test(base)) base = 'audio';
      return base;
    }

    /* ==========================================================================
       Client-Side MP3 Encoding (LAME.js Integration)
       ========================================================================== */

    function encodeMp3(audioBuffer, startTime, endTime, kbps = 192) {
      if (typeof lamejs === 'undefined' || !lamejs.Mp3Encoder) {
        throw new Error("LAME MP3 encoder library is not available.");
      }

      const sampleRate = audioBuffer.sampleRate;
      const numChannels = audioBuffer.numberOfChannels;
      const startSample = Math.max(0, Math.floor(startTime * sampleRate));
      const endSample = Math.min(audioBuffer.length, Math.ceil(endTime * sampleRate));
      const numSamples = Math.max(0, endSample - startSample);

      if (numSamples === 0) {
        throw new Error("Zero-length audio selection.");
      }

      const mp3encoder = new lamejs.Mp3Encoder(numChannels, sampleRate, kbps);
      const mp3Data = [];
      const sampleBlockSize = 1152;

      if (numChannels === 1) {
        const floatSamples = audioBuffer.getChannelData(0);
        const int16Samples = new Int16Array(numSamples);
        for (let i = 0; i < numSamples; i++) {
          const s = Math.max(-1, Math.min(1, floatSamples[startSample + i]));
          int16Samples[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        for (let i = 0; i < numSamples; i += sampleBlockSize) {
          const chunk = int16Samples.subarray(i, i + sampleBlockSize);
          const mp3buf = mp3encoder.encodeBuffer(chunk);
          if (mp3buf.length > 0) {
            mp3Data.push(mp3buf);
          }
        }
      } else {
        const floatLeft = audioBuffer.getChannelData(0);
        const floatRight = audioBuffer.getChannelData(1);
        const int16Left = new Int16Array(numSamples);
        const int16Right = new Int16Array(numSamples);

        for (let i = 0; i < numSamples; i++) {
          const sL = Math.max(-1, Math.min(1, floatLeft[startSample + i]));
          const sR = Math.max(-1, Math.min(1, floatRight[startSample + i]));
          int16Left[i] = sL < 0 ? sL * 0x8000 : sL * 0x7FFF;
          int16Right[i] = sR < 0 ? sR * 0x8000 : sR * 0x7FFF;
        }

        for (let i = 0; i < numSamples; i += sampleBlockSize) {
          const chunkL = int16Left.subarray(i, i + sampleBlockSize);
          const chunkR = int16Right.subarray(i, i + sampleBlockSize);
          const mp3buf = mp3encoder.encodeBuffer(chunkL, chunkR);
          if (mp3buf.length > 0) {
            mp3Data.push(mp3buf);
          }
        }
      }

      const mp3buf = mp3encoder.flush();
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }

      return new Blob(mp3Data, { type: 'audio/mp3' });
    }

    async function handleExport() {
      if (!currentAudioBuffer) return;
      stopPlayback(false);
      clearError();

      const duration = selectionEnd - selectionStart;
      if (duration <= 0.05) {
        showError(TRANSLATIONS[getActiveLang()].errInvalidTime);
        return;
      }

      setAudioState(AudioState.EXPORTING);
      const lang = getActiveLang();
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

      try {
        if (selectedExportFormat === 'mp3') {
          audioLoadingText.textContent = dict.statusExportingMp3 || "Encoding trimmed audio to MP3 locally...";
          await new Promise(r => setTimeout(r, 25));
          const blob = encodeMp3(currentAudioBuffer, selectionStart, selectionEnd, 192);
          exportedBlob = blob;
          exportedBlobType = 'mp3';
          exportedWavBlob = blob; // compatibility alias
          dispExportSpecs.textContent = `MP3 (192 kbps) • ${currentAudioBuffer.sampleRate.toLocaleString()} Hz • ${currentAudioBuffer.numberOfChannels === 1 ? 'Mono' : 'Stereo'} (${formatTime(duration)})`;
          dispExportSize.textContent = formatBytes(blob.size);
          updateDownloadButtonText();
          exportSuccessCard.classList.add('active');
          setAudioState(AudioState.READY);
          triggerDownload(blob, currentOriginalFilename, 'mp3');
          showToast(dict.toastDownloadedMp3 || "MP3 file downloaded successfully!");
        } else {
          audioLoadingText.textContent = dict.statusExportingWav || "Slicing PCM data and encoding 16-bit WAV...";
          await new Promise(r => setTimeout(r, 25));
          const blob = encode16BitWav(currentAudioBuffer, selectionStart, selectionEnd);
          const stats = await validateWavBlob(blob, currentAudioBuffer.numberOfChannels, currentAudioBuffer.sampleRate, duration);
          exportedBlob = blob;
          exportedBlobType = 'wav';
          exportedWavBlob = blob; // compatibility alias
          dispExportSpecs.textContent = `16-bit PCM WAV • ${stats.sampleRate.toLocaleString()} Hz • ${stats.channels === 1 ? 'Mono' : 'Stereo'} (${formatTime(stats.duration)})`;
          dispExportSize.textContent = formatBytes(stats.size);
          updateDownloadButtonText();
          exportSuccessCard.classList.add('active');
          setAudioState(AudioState.READY);
          triggerDownload(blob, currentOriginalFilename, 'wav');
          showToast(dict.toastDownloadedWav || "WAV file downloaded successfully!");
        }
      } catch (err) {
        console.error(err);
        setAudioState(AudioState.READY);
        showError(dict.errExportFailed);
      }
    }

    function triggerDownload(blob, originalName, format = 'wav') {
      const safeBase = sanitizeOriginalFilename(originalName);
      const ext = format === 'mp3' ? 'mp3' : 'wav';
      const filename = `trimmed-${safeBase}.${ext}`;

      if (lastGeneratedUrl) {
        URL.revokeObjectURL(lastGeneratedUrl);
      }
      const url = URL.createObjectURL(blob);
      lastGeneratedUrl = url;

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    exportFormatSelect.addEventListener('change', () => {
      selectedExportFormat = exportFormatSelect.value;
      updateExportButtonText();
    });

    btnExportAudio.addEventListener('click', handleExport);

    btnDownloadExported.addEventListener('click', () => {
      if (exportedBlob) {
        const lang = getActiveLang();
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
        triggerDownload(exportedBlob, currentOriginalFilename, exportedBlobType);
        showToast(exportedBlobType === 'mp3' ? (dict.toastDownloadedMp3 || dict.toastDownloaded) : (dict.toastDownloadedWav || dict.toastDownloaded));
      }
    });

    btnDismissSuccess.addEventListener('click', () => {
      exportSuccessCard.classList.remove('active');
    });

    /* ==========================================================================
       Drag & Drop Event Handlers
       ========================================================================== */

    btnBrowseAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      audioFileInput.click();
    });

    audioDropZone.addEventListener('click', () => {
      audioFileInput.click();
    });

    audioFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleSelectedFile(e.target.files[0]);
        audioFileInput.value = '';
      }
    });

    ['dragenter', 'dragover'].forEach(name => {
      audioDropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        audioDropZone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      audioDropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        audioDropZone.classList.remove('dragover');
      });
    });

    audioDropZone.addEventListener('drop', (e) => {
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleSelectedFile(e.dataTransfer.files[0]);
      }
    });

    btnLoadDemoAudio.addEventListener('click', (e) => {
      e.stopPropagation();
      generateDemoAudio();
    });

    // Initialize Language on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      const initialLang = getActiveLang();
      applyLanguage(initialLang);
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
        "title": "Audio Trimmer &amp; Cutter – Precision Sound Waveform Editor",
        "desc": "Slice audio tracks with interactive waveform scrubbing and millisecond markers. Lossless WAV and MP3 exports process directly inside browser RAM."
    },
    "ar": {
        "title": "قص وتقطيع الصوت – محرر المخطط الموجي بدقة المللي ثانية",
        "desc": "قص المقاطع الصوتية بصيغ MP3 وWAV مع مخطط موجي تفاعلي وتدقيق دقيق بالأجزاء من الثانية. يتم التصدير محلياً في ذاكرة جهازك دون رفع أي صوتيات."
    },
    "fr": {
        "title": "Découpeur Audio & Trimmer – Éditeur d'Onde Sonore Précis",
        "desc": "Découpez vos pistes MP3 et WAV avec une forme d'onde interactive au millième de seconde. Export WAV sans perte réalisé dans la mémoire vive locale."
    },
    "it": {
        "title": "Taglia Audio & Trimmer – Editor Forma d'Onda di Precisione",
        "desc": "Ritaglia brani musicali e registrazioni con forma d'onda interattiva e controlli millimetrici. Esportazione WAV e MP3 elaborata nella RAM locale."
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
            if (typeof window.applyLanguage === 'function') {
              try { window.applyLanguage(selectedLang); } catch (err) { console.warn(err); }
            } else if (typeof window.setLanguage === 'function') {
              try { window.setLanguage(selectedLang); } catch (err) { console.warn(err); }
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