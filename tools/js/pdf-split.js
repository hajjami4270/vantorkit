(function () {
      'use strict';

      // --- Internationalization (i18n) Dictionary ---
      const I18N = {
        en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
          backLink: "← Back to Tools",
          brandBadge: "PDF & Files • 100% Client-Side • Zero Cloud Uploads",
          pageTitle: "PDF Split & <span>Extract Pages</span>",
          pageSubtitle: "Selectively extract page ranges or separate individual PDF pages in seconds. Completely private and processed locally in your browser memory.",
          dropTitle: "Select or Drop a PDF File Here",
          dropSubtitle: "Choose any PDF document to split or extract pages. Processed 100% inside your browser memory for absolute confidentiality.",
          btnBrowse: "Browse PDF File",
          btnChangeFile: "Change Document",
          tabCustomRange: "Select & Extract Pages",
          tabSplitAll: "Split into Single Pages",
          rangeLabel: "Custom Page Range:",
          rangeExample: "e.g. 1-3, 5, 8-10",
          chipAll: "All Pages",
          chipOdd: "Odd Pages",
          chipEven: "Even Pages",
          chipFirstHalf: "First Half",
          chipClear: "Clear Selection",
          visualGridTitle: "Visual Page Selector (Click to toggle)",
          btnInvert: "Invert",
          splitAllTitle: "Extract Every Page as a Separate PDF",
          splitAllDesc: "Each individual page will be extracted into its own distinct single-page PDF document and neatly archived into a convenient, downloadable ZIP bundle.",
          actionReady: "Ready to Extract Pages",
          btnExtract: "Extract Pages Now",
          btnSplit: "Split into ZIP Archive",
          processing: "Processing PDF document...",
          successTitle: "Pages Extracted Successfully!",
          successSubtitle: "Your new compiled PDF has been generated in memory and downloaded.",
          statExtractedPages: "Pages Extracted",
          statOriginalPages: "Source Pages",
          statOriginalSize: "Original Size",
          statNewSize: "Generated Size",
          btnDownloadAgain: "Download Again",
          btnPreview: "Preview in New Tab",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally.",
          // Dynamic strings:
          page: "page",
          pages: "pages",
          pageCardTitle: "Page",
          extractingCount: (n, list) => `Extracting ${n} page${n === 1 ? '' : 's'}: [${list}]`,
          noPagesSelected: "No pages selected. Please select at least one page.",
          invalidRangeError: "Invalid range syntax. Use numbers, commas, and hyphens (e.g. 1-3, 5).",
          outOfBoundsError: (p, max) => `Page ${p} exceeds total page count (${max}).`,
          skippedNotPdf: (name) => `"${name}" is not a PDF document.`,
          loadedPdf: (name, p) => `Loaded "${name}" (${p} pages)`,
          pdfLoadingWait: "PDF engine is initializing, please wait a moment...",
          splittingStep: (cur, tot) => `Extracting page ${cur} of ${tot}...`,
          compilingPdf: "Compiling extracted PDF document...",
          creatingZip: "Packing individual pages into ZIP archive...",
          complete: "Complete!",
          downloadSuccess: "Download triggered successfully!",
          downloadZipSuccess: "ZIP archive downloaded successfully!"
        },
        ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
          backLink: "← العودة إلى الأدوات",
          brandBadge: "ملفات PDF • محلي 100% في المتصفح • بدون رفع للسحابة",
          pageTitle: "تقسيم ملفات PDF / <span>استخراج الصفحات</span>",
          pageSubtitle: "استخرج نطاقات صفحات محددة أو افصل كل صفحة في ملف مستقل خلال ثوانٍ. معالجة محلية وسرية بالكامل داخل ذاكرة متصفحك.",
          dropTitle: "اختر أو اسحب ملف PDF هنا",
          dropSubtitle: "حدد أي مستند PDF لتقسيمه أو استخراج صفحات منه. تتم المعالجة محلياً بنسبة 100% لسرية مطلقة.",
          btnBrowse: "تصفح ملف PDF",
          btnChangeFile: "تغيير المستند",
          tabCustomRange: "تحديد واستخراج الصفحات",
          tabSplitAll: "فصل إلى صفحات فردية",
          rangeLabel: "نطاق الصفحات المخصص:",
          rangeExample: "مثال: 1-3, 5, 8-10",
          chipAll: "كل الصفحات",
          chipOdd: "الصفحات الفردية",
          chipEven: "الصفحات الزوجية",
          chipFirstHalf: "النصف الأول",
          chipClear: "إلغاء التحديد",
          visualGridTitle: "محدد الصفحات المرئي (انقر للتحديد)",
          btnInvert: "عكس التحديد",
          splitAllTitle: "استخراج كل صفحة كملف PDF مستقل",
          splitAllDesc: "سيتم استخراج كل صفحة بمفردها كملف PDF مستقل وتجميع كافة الملفات في أرشيف ZIP مضغوط وسهل التنزيل.",
          actionReady: "جاهز لاستخراج الصفحات",
          btnExtract: "استخراج الصفحات الآن",
          btnSplit: "تقسيم وتنزيل كأرشيف ZIP",
          processing: "جارٍ معالجة مستند PDF...",
          successTitle: "تم استخراج الصفحات بنجاح!",
          successSubtitle: "تم إنشاء ملف PDF المخصص في الذاكرة وبدأ التحميل تلقائياً.",
          statExtractedPages: "الصفحات المستخرجة",
          statOriginalPages: "صفحات المستند الأصلي",
          statOriginalSize: "الحجم الأصلي",
          statNewSize: "حجم الملف الجديد",
          btnDownloadAgain: "تحميل مرة أخرى",
          btnPreview: "معاينة في علامة تبويب جديدة",
          footerText: "© 2026 VantorKit. أدوات ويب سريعة، مجانية ومبنية للخصوصية. تتم جميع المعالجات محلياً في المتصفح.",
          page: "صفحة",
          pages: "صفحات",
          pageCardTitle: "صفحة",
          extractingCount: (n, list) => `سيتم استخراج ${n} صفحة: [${list}]`,
          noPagesSelected: "لم يتم اختيار أي صفحات. يرجى تحديد صفحة واحدة على الأقل.",
          invalidRangeError: "صيغة غير صحيحة. استخدم الأرقام والفواصل والشرطات (مثال: 1-3, 5).",
          outOfBoundsError: (p, max) => `الصفحة ${p} تتجاوز إجمالي صفحات الملف (${max}).`,
          skippedNotPdf: (name) => `"${name}" ليس مستند PDF صالحاً.`,
          loadedPdf: (name, p) => `تم تحميل "${name}" (${p} صفحة)`,
          pdfLoadingWait: "محرك PDF قيد التحميل، يرجى الانتظار لحظة...",
          splittingStep: (cur, tot) => `استخراج الصفحة ${cur} من ${tot}...`,
          compilingPdf: "تجميع ملف PDF النهائي...",
          creatingZip: "ضغط الصفحات الفردية في أرشيف ZIP...",
          complete: "اكتمل!",
          downloadSuccess: "تم بدء تنزيل الملف بنجاح!",
          downloadZipSuccess: "تم تنزيل أرشيف ZIP بنجاح!"
        },
        fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
          backLink: "← Retour aux outils",
          brandBadge: "PDF & Fichiers • 100% Côté Client • Zéro Téléversement",
          pageTitle: "Division PDF / <span>Extraire des pages</span>",
          pageSubtitle: "Extrayez sélectivement des plages de pages ou séparez chaque page en fichier unique en quelques secondes. 100% confidentiel et traité localement sur votre appareil.",
          dropTitle: "Sélectionnez ou déposez un fichier PDF ici",
          dropSubtitle: "Choisissez n'importe quel PDF à diviser ou extraire. Traitement intégral dans la mémoire locale de votre navigateur.",
          btnBrowse: "Parcourir le fichier PDF",
          btnChangeFile: "Changer de document",
          tabCustomRange: "Sélectionner & Extraire",
          tabSplitAll: "Diviser en pages uniques",
          rangeLabel: "Plage de pages personnalisée :",
          rangeExample: "ex. 1-3, 5, 8-10",
          chipAll: "Toutes les pages",
          chipOdd: "Pages impaires",
          chipEven: "Pages paires",
          chipFirstHalf: "Première moitié",
          chipClear: "Effacer la sélection",
          visualGridTitle: "Sélecteur Visuel (Cliquer pour basculer)",
          btnInvert: "Inverser",
          splitAllTitle: "Extraire chaque page en PDF distinct",
          splitAllDesc: "Chaque page individuelle sera extraite dans son propre PDF distinct et compressée dans une archive ZIP prête au téléchargement.",
          actionReady: "Prêt à extraire les pages",
          btnExtract: "Extraire les pages maintenant",
          btnSplit: "Diviser en archive ZIP",
          processing: "Traitement du document PDF...",
          successTitle: "Pages extraites avec succès !",
          successSubtitle: "Votre nouveau document PDF a été généré en mémoire et téléchargé.",
          statExtractedPages: "Pages extraites",
          statOriginalPages: "Pages d'origine",
          statOriginalSize: "Taille initiale",
          statNewSize: "Nouvelle taille",
          btnDownloadAgain: "Télécharger à nouveau",
          btnPreview: "Aperçu dans un nouvel onglet",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, confidentiels et gratuits. Tous les traitements sont exécutés localement.",
          page: "page",
          pages: "pages",
          pageCardTitle: "Page",
          extractingCount: (n, list) => `Extraction de ${n} page${n === 1 ? '' : 's'} : [${list}]`,
          noPagesSelected: "Aucune page sélectionnée. Veuillez en choisir au moins une.",
          invalidRangeError: "Syntaxe de plage invalide. Utilisez des chiffres, virgules et tirets (ex. 1-3, 5).",
          outOfBoundsError: (p, max) => `La page ${p} dépasse le nombre total de pages (${max}).`,
          skippedNotPdf: (name) => `"${name}" n'est pas un document PDF valide.`,
          loadedPdf: (name, p) => `"${name}" chargé (${p} pages)`,
          pdfLoadingWait: "Le moteur PDF se charge, veuillez patienter...",
          splittingStep: (cur, tot) => `Extraction de la page ${cur} sur ${tot}...`,
          compilingPdf: "Compilation du document PDF extrait...",
          creatingZip: "Création de l'archive ZIP compressée...",
          complete: "Terminé !",
          downloadSuccess: "Téléchargement déclenché avec succès !",
          downloadZipSuccess: "Archive ZIP téléchargée avec succès !"
        },
        it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
          backLink: "← Torna agli strumenti",
          brandBadge: "PDF & File • 100% Lato Client • Zero Caricamenti Cloud",
          pageTitle: "Dividi PDF / <span>Estrai pagine</span>",
          pageSubtitle: "Estrai selettivamente intervalli di pagine o separa ogni pagina in file singoli in pochi secondi. Totalmente privato ed elaborato nella memoria locale.",
          dropTitle: "Seleziona o trascina un file PDF qui",
          dropSubtitle: "Scegli qualsiasi documento PDF da dividere o estrarre. Elaborazione 100% nella memoria del tuo browser.",
          btnBrowse: "Sfoglia file PDF",
          btnChangeFile: "Cambia documento",
          tabCustomRange: "Seleziona ed Estrai",
          tabSplitAll: "Dividi in pagine singole",
          rangeLabel: "Intervallo pagine personalizzato:",
          rangeExample: "es. 1-3, 5, 8-10",
          chipAll: "Tutte le pagine",
          chipOdd: "Pagine dispari",
          chipEven: "Pagine pari",
          chipFirstHalf: "Prima metà",
          chipClear: "Cancella selezione",
          visualGridTitle: "Selettore Visivo (Clicca per selezionare)",
          btnInvert: "Inverti",
          splitAllTitle: "Estrai ogni pagina come PDF separato",
          splitAllDesc: "Ogni singola pagina verrà estratta nel proprio file PDF e raggruppata in un archivio ZIP pronto per il download.",
          actionReady: "Pronto per estrarre le pagine",
          btnExtract: "Estrai pagine adesso",
          btnSplit: "Dividi in archivio ZIP",
          processing: "Elaborazione documento PDF in corso...",
          successTitle: "Pagine estratte con successo!",
          successSubtitle: "Il nuovo documento PDF è stato compilato in memoria e scaricato.",
          statExtractedPages: "Pagine estratte",
          statOriginalPages: "Pagine sorgente",
          statOriginalSize: "Dimensione originale",
          statNewSize: "Nuova dimensione",
          btnDownloadAgain: "Scarica di nuovo",
          btnPreview: "Anteprima in una nuova scheda",
          footerText: "© 2026 VantorKit. Utility web veloci, private e gratuite. Tutte le elaborazioni avvengono localmente.",
          page: "pagina",
          pages: "pagine",
          pageCardTitle: "Pagina",
          extractingCount: (n, list) => `Estrazione di ${n} pagin${n === 1 ? 'a' : 'e'}: [${list}]`,
          noPagesSelected: "Nessuna pagina selezionata. Scegline almeno una.",
          invalidRangeError: "Sintassi non valida. Usa numeri, virgole e trattini (es. 1-3, 5).",
          outOfBoundsError: (p, max) => `La pagina ${p} supera il totale delle pagine (${max}).`,
          skippedNotPdf: (name) => `"${name}" non è un documento PDF valido.`,
          loadedPdf: (name, p) => `Caricato "${name}" (${p} pagine)`,
          pdfLoadingWait: "Motore PDF in caricamento, attendere un istante...",
          splittingStep: (cur, tot) => `Estrazione pagina ${cur} di ${tot}...`,
          compilingPdf: "Compilazione PDF estratto...",
          creatingZip: "Creazione archivio ZIP compresso...",
          complete: "Completato!",
          downloadSuccess: "Download avviato con successo!",
          downloadZipSuccess: "Archivio ZIP scaricato con successo!"
        }
      };

      const LANG_LABELS = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
        it: 'Italiano'
      };

      // --- State ---
      let currentFile = null;
      let currentPdfDoc = null;
      let totalPageCount = 0;
      let selectedPages = new Set(); // 1-indexed integers
      let activeMode = 'range'; // 'range' | 'split'
      let generatedBlobUrl = null;
      let generatedFilename = 'vantorkit-extracted.pdf';
      let toastTimer = null;

      // --- DOM Elements ---
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');

      const fileBanner = document.getElementById('fileBanner');
      const displayFileName = document.getElementById('displayFileName');
      const displayPageCount = document.getElementById('displayPageCount');
      const displayFileSize = document.getElementById('displayFileSize');
      const btnChangeFile = document.getElementById('btnChangeFile');

      const workspaceSection = document.getElementById('workspaceSection');
      const modeTabs = document.getElementById('modeTabs');
      const tabRange = document.getElementById('tabRange');
      const tabSplit = document.getElementById('tabSplit');
      const modeTabPill = document.getElementById('modeTabPill');
      const panelRange = document.getElementById('panelRange');
      const panelSplit = document.getElementById('panelSplit');

      const rangeInput = document.getElementById('rangeInput');
      const rangeFeedback = document.getElementById('rangeFeedback');
      const pagesGrid = document.getElementById('pagesGrid');

      const chipAll = document.getElementById('chipAll');
      const chipOdd = document.getElementById('chipOdd');
      const chipEven = document.getElementById('chipEven');
      const chipFirstHalf = document.getElementById('chipFirstHalf');
      const chipClear = document.getElementById('chipClear');
      const btnInvertSelection = document.getElementById('btnInvertSelection');

      const actionTitle = document.getElementById('actionTitle');
      const actionDesc = document.getElementById('actionDesc');
      const btnExecute = document.getElementById('btnExecute');
      const btnExecuteLabel = document.getElementById('btnExecuteLabel');

      const progressContainer = document.getElementById('progressContainer');
      const progressStatus = document.getElementById('progressStatus');
      const progressPercent = document.getElementById('progressPercent');
      const progressBar = document.getElementById('progressBar');

      const successCard = document.getElementById('successCard');
      const statExtractedPages = document.getElementById('statExtractedPages');
      const statOriginalPages = document.getElementById('statOriginalPages');
      const statOriginalSize = document.getElementById('statOriginalSize');
      const statNewSize = document.getElementById('statNewSize');
      const btnDownloadAgain = document.getElementById('btnDownloadAgain');
      const btnPreviewExtracted = document.getElementById('btnPreviewExtracted');

      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // Language Switcher Elements
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langDropdown = document.getElementById('langDropdown');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      // --- Utilities ---
      function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      }

      function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }

      function triggerDownload(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

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

        // Update range feedback & tab position
        validateAndSyncRangeInput();
        updateModeTabPill();
      }

      // --- Mode Tabs Indicator & Switching ---
      function updateModeTabPill() {
        const activeBtn = modeTabs.querySelector('.mode-tab-btn.active');
        if (!activeBtn || !modeTabPill) return;
        modeTabPill.style.width = `${activeBtn.offsetWidth}px`;
        modeTabPill.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`;
      }

      [tabRange, tabSplit].forEach(tab => {
        tab.addEventListener('click', () => {
          const mode = tab.dataset.mode;
          if (mode === activeMode) return;
          activeMode = mode;

          [tabRange, tabSplit].forEach(t => t.classList.toggle('active', t === tab));
          updateModeTabPill();

          const curLang = localStorage.getItem('vantorkit_lang') || 'en';
          const dict = I18N[curLang] || I18N.en;

          if (activeMode === 'range') {
            panelRange.style.display = 'block';
            panelSplit.style.display = 'none';
            btnExecuteLabel.textContent = dict.btnExtract;
            validateAndSyncRangeInput();
          } else {
            panelRange.style.display = 'none';
            panelSplit.style.display = 'block';
            btnExecuteLabel.textContent = dict.btnSplit;
            btnExecute.disabled = false;
            actionTitle.textContent = dict.splitAllTitle;
            actionDesc.textContent = dict.splitAllDesc;
          }
        });
      });

      window.addEventListener('resize', updateModeTabPill);

      // --- File Upload & PDF Loading ---
      btnBrowse.addEventListener('click', () => fileInput.click());
      dropZone.addEventListener('click', (e) => {
        if (e.target !== btnBrowse && !btnBrowse.contains(e.target)) {
          fileInput.click();
        }
      });
      btnChangeFile.addEventListener('click', () => fileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('drag-active');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('drag-active');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFile(e.target.files[0]);
          fileInput.value = '';
        }
      });

      async function handleFile(file) {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
          showToast(dict.skippedNotPdf(file.name));
          return;
        }

        if (!window.PDFLib) {
          showToast(dict.pdfLoadingWait);
          return;
        }

        currentFile = file;
        successCard.style.display = 'none';

        try {
          showToast('Reading PDF...');
          const arrayBuffer = await file.arrayBuffer();
          const doc = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
          
          currentPdfDoc = doc;
          totalPageCount = doc.getPageCount();

          // Update banner
          displayFileName.textContent = file.name;
          displayFileName.title = file.name;
          displayPageCount.textContent = `${totalPageCount} ${totalPageCount === 1 ? dict.page : dict.pages}`;
          displayFileSize.textContent = formatBytes(file.size);

          dropZone.style.display = 'none';
          fileBanner.style.display = 'flex';
          workspaceSection.style.display = 'flex';

          // Select all pages by default
          selectedPages.clear();
          for (let i = 1; i <= totalPageCount; i++) {
            selectedPages.add(i);
          }

          renderVisualPagesGrid();
          syncRangeInputFromSelection();
          updateModeTabPill();

          showToast(dict.loadedPdf(file.name, totalPageCount));

        } catch (err) {
          console.error('Failed to load PDF:', err);
          showToast('Failed to load PDF: ' + err.message);
        }
      }

      // --- Render Visual Page Cards Grid ---
      function renderVisualPagesGrid() {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        pagesGrid.innerHTML = '';
        for (let i = 1; i <= totalPageCount; i++) {
          const isSelected = selectedPages.has(i);
          const card = document.createElement('div');
          card.className = `page-card ${isSelected ? 'selected' : ''}`;
          card.dataset.page = i;

          card.innerHTML = `
            <div class="page-mockup">
              <span class="page-check-ring">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <div class="mockup-line short"></div>
              <div class="mockup-line full"></div>
              <div class="mockup-line medium"></div>
              <div class="mockup-line full"></div>
            </div>
            <span class="page-number-label">${dict.pageCardTitle} ${i}</span>
          `;

          card.addEventListener('click', () => {
            togglePageSelection(i);
          });

          pagesGrid.appendChild(card);
        }
      }

      function togglePageSelection(pageNum) {
        if (selectedPages.has(pageNum)) {
          selectedPages.delete(pageNum);
        } else {
          selectedPages.add(pageNum);
        }
        updateGridSelectionUI();
        syncRangeInputFromSelection();
        validateAndSyncRangeInput();
      }

      function updateGridSelectionUI() {
        const cards = pagesGrid.querySelectorAll('.page-card');
        cards.forEach(card => {
          const page = parseInt(card.dataset.page, 10);
          card.classList.toggle('selected', selectedPages.has(page));
        });
      }

      // --- Range String Parsing & Conversion ---
      function formatPagesToRangeString(pageSet) {
        const sorted = Array.from(pageSet).sort((a, b) => a - b);
        if (sorted.length === 0) return '';

        const ranges = [];
        let start = sorted[0];
        let end = sorted[0];

        for (let i = 1; i < sorted.length; i++) {
          if (sorted[i] === end + 1) {
            end = sorted[i];
          } else {
            ranges.push(start === end ? `${start}` : `${start}-${end}`);
            start = sorted[i];
            end = sorted[i];
          }
        }
        ranges.push(start === end ? `${start}` : `${start}-${end}`);
        return ranges.join(', ');
      }

      function syncRangeInputFromSelection() {
        rangeInput.value = formatPagesToRangeString(selectedPages);
      }

      function parseRangeStringToPages(str, maxPages) {
        const clean = str.trim();
        if (!clean) return { valid: true, pages: [], listStr: '' };

        const tokens = clean.split(',').map(t => t.trim()).filter(Boolean);
        const pages = new Set();

        for (const token of tokens) {
          if (/^\d+$/.test(token)) {
            const num = parseInt(token, 10);
            if (num < 1 || num > maxPages) {
              return { valid: false, error: 'outOfBounds', page: num };
            }
            pages.add(num);
          } else if (/^\d+\s*-\s*\d+$/.test(token)) {
            const parts = token.split('-').map(p => parseInt(p.trim(), 10));
            const start = parts[0];
            const end = parts[1];
            if (start > end || start < 1 || end > maxPages) {
              return { valid: false, error: 'outOfBounds', page: end > maxPages ? end : start };
            }
            for (let p = start; p <= end; p++) {
              pages.add(p);
            }
          } else {
            return { valid: false, error: 'syntax' };
          }
        }

        const sorted = Array.from(pages).sort((a, b) => a - b);
        return { valid: true, pages: sorted, listStr: sorted.join(', ') };
      }

      function validateAndSyncRangeInput() {
        if (!currentPdfDoc) return;
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        const result = parseRangeStringToPages(rangeInput.value, totalPageCount);

        if (!result.valid) {
          rangeFeedback.className = 'range-feedback error';
          if (result.error === 'outOfBounds') {
            rangeFeedback.textContent = dict.outOfBoundsError(result.page, totalPageCount);
          } else {
            rangeFeedback.textContent = dict.invalidRangeError;
          }
          btnExecute.disabled = true;
          return;
        }

        if (result.pages.length === 0) {
          rangeFeedback.className = 'range-feedback error';
          rangeFeedback.textContent = dict.noPagesSelected;
          btnExecute.disabled = true;
          return;
        }

        rangeFeedback.className = 'range-feedback valid';
        rangeFeedback.textContent = dict.extractingCount(result.pages.length, result.listStr);
        btnExecute.disabled = false;

        actionTitle.textContent = dict.actionReady;
        actionDesc.textContent = `Extracting ${result.pages.length} page${result.pages.length === 1 ? '' : 's'} into a new PDF document.`;
      }

      rangeInput.addEventListener('input', () => {
        const result = parseRangeStringToPages(rangeInput.value, totalPageCount);
        if (result.valid) {
          selectedPages = new Set(result.pages);
          updateGridSelectionUI();
        }
        validateAndSyncRangeInput();
      });

      // --- Preset Chip Handlers ---
      chipAll.addEventListener('click', () => {
        selectedPages.clear();
        for (let i = 1; i <= totalPageCount; i++) selectedPages.add(i);
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      chipOdd.addEventListener('click', () => {
        selectedPages.clear();
        for (let i = 1; i <= totalPageCount; i += 2) selectedPages.add(i);
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      chipEven.addEventListener('click', () => {
        selectedPages.clear();
        for (let i = 2; i <= totalPageCount; i += 2) selectedPages.add(i);
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      chipFirstHalf.addEventListener('click', () => {
        selectedPages.clear();
        const half = Math.ceil(totalPageCount / 2);
        for (let i = 1; i <= half; i++) selectedPages.add(i);
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      chipClear.addEventListener('click', () => {
        selectedPages.clear();
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      btnInvertSelection.addEventListener('click', () => {
        const newSet = new Set();
        for (let i = 1; i <= totalPageCount; i++) {
          if (!selectedPages.has(i)) newSet.add(i);
        }
        selectedPages = newSet;
        syncRangeInputFromSelection();
        updateGridSelectionUI();
        validateAndSyncRangeInput();
      });

      // --- Execution & Extraction Logic ---
      btnExecute.addEventListener('click', async () => {
        if (!currentPdfDoc || !currentFile) return;

        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        btnExecute.disabled = true;
        progressContainer.style.display = 'flex';
        successCard.style.display = 'none';

        function updateProgress(percent, msg) {
          progressBar.style.width = `${percent}%`;
          progressPercent.textContent = `${percent}%`;
          progressStatus.textContent = msg;
        }

        try {
          if (activeMode === 'range') {
            // Mode A: Extract selected pages into a single PDF
            const sortedPages = Array.from(selectedPages).sort((a, b) => a - b);
            if (sortedPages.length === 0) {
              showToast(dict.noPagesSelected);
              btnExecute.disabled = false;
              return;
            }

            updateProgress(15, dict.processing);
            const { PDFDocument } = PDFLib;
            const newDoc = await PDFDocument.create();

            // 0-indexed page indices for pdf-lib
            const pageIndices = sortedPages.map(p => p - 1);
            updateProgress(45, dict.splittingStep(1, pageIndices.length));

            const copiedPages = await newDoc.copyPages(currentPdfDoc, pageIndices);
            copiedPages.forEach(p => newDoc.addPage(p));

            updateProgress(85, dict.compilingPdf);
            const pdfBytes = await newDoc.save();

            updateProgress(100, dict.complete);

            if (generatedBlobUrl) URL.revokeObjectURL(generatedBlobUrl);
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            generatedBlobUrl = URL.createObjectURL(blob);
            generatedFilename = 'vantorkit-extracted.pdf';

            // Show Stats
            statExtractedPages.textContent = sortedPages.length;
            statOriginalPages.textContent = totalPageCount;
            statOriginalSize.textContent = formatBytes(currentFile.size);
            statNewSize.textContent = formatBytes(blob.size);

            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            triggerDownload(generatedBlobUrl, generatedFilename);
            showToast(dict.downloadSuccess);

          } else {
            // Mode B: Split all into individual single-page PDFs packaged in a ZIP
            if (!window.JSZip) {
              throw new Error('ZIP archiver library still loading');
            }

            updateProgress(10, 'Initializing ZIP packager...');
            const zip = new JSZip();
            const { PDFDocument } = PDFLib;

            const baseName = currentFile.name.replace(/\.pdf$/i, '');
            const folder = zip.folder(`${baseName}-pages`);

            for (let i = 0; i < totalPageCount; i++) {
              const percent = Math.round(15 + ((i + 1) / totalPageCount) * 70);
              updateProgress(percent, dict.splittingStep(i + 1, totalPageCount));

              const singleDoc = await PDFDocument.create();
              const [copiedPage] = await singleDoc.copyPages(currentPdfDoc, [i]);
              singleDoc.addPage(copiedPage);

              const singleBytes = await singleDoc.save();
              folder.file(`page-${i + 1}.pdf`, singleBytes);
            }

            updateProgress(90, dict.creatingZip);
            const zipBlob = await zip.generateAsync({ type: 'blob' });

            updateProgress(100, dict.complete);

            if (generatedBlobUrl) URL.revokeObjectURL(generatedBlobUrl);
            generatedBlobUrl = URL.createObjectURL(zipBlob);
            generatedFilename = 'vantorkit-split-pages.zip';

            // Show Stats
            statExtractedPages.textContent = totalPageCount;
            statOriginalPages.textContent = totalPageCount;
            statOriginalSize.textContent = formatBytes(currentFile.size);
            statNewSize.textContent = formatBytes(zipBlob.size);

            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            triggerDownload(generatedBlobUrl, generatedFilename);
            showToast(dict.downloadZipSuccess);
          }

        } catch (err) {
          console.error('PDF Split Error:', err);
          showToast('Failed to process PDF: ' + err.message);
        } finally {
          btnExecute.disabled = false;
          setTimeout(() => {
            progressContainer.style.display = 'none';
            progressBar.style.width = '0%';
          }, 1200);
        }
      });

      btnDownloadAgain.addEventListener('click', () => {
        if (generatedBlobUrl) {
          triggerDownload(generatedBlobUrl, generatedFilename);
          showToast('Downloading document...');
        }
      });

      btnPreviewExtracted.addEventListener('click', () => {
        if (generatedBlobUrl) {
          if (generatedFilename.endsWith('.zip')) {
            showToast('ZIP file cannot be previewed in browser tab.');
          } else {
            window.open(generatedBlobUrl, '_blank');
          }
        }
      });

      // --- Initial Execution with Saved Language ---
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
        "title": "PDF Split & Extract – Separate Custom Page Ranges",
        "desc": "Extract individual pages or isolate custom intervals from large PDF documents. Page decoupling finishes in your browser with complete privacy."
    },
    "ar": {
        "title": "تقسيم ملفات PDF – استخراج صفحات ومقاطع محددة",
        "desc": "افصل صفحات محددة أو استخرج نطاقات مخصصة من ملفات PDF الكبيرة فورياً. تتم عملية تقسيم المستند في متصفحك دون رفع أي صفحة إلى السحابة."
    },
    "fr": {
        "title": "Diviser PDF – Extraire des Pages et Intervalles",
        "desc": "Isolez des pages ou découpez des intervalles personnalisés depuis vos PDF. Le découpage s'effectue dans votre navigateur en toute confidentialité."
    },
    "it": {
        "title": "Dividi PDF – Estrai Pagine e Intervalli Personalizzati",
        "desc": "Separa pagine singole o estrai capitoli specifici da documenti PDF voluminosi. Il processo si completa localmente preservando la privacy."
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