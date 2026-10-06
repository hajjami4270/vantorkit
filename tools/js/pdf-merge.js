(function () {
      'use strict';

      // --- Internationalization (i18n) Dictionary ---
      const I18N = {
        en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
          backLink: "← Back to Tools",
          clientBadge: "Client-Side • Privacy-First",
          brandBadge: "PDF & Files • 100% Client-Side • Zero Cloud Uploads",
          pageTitle: "PDF Merge / <span>Combine Documents</span>",
          pageSubtitle: "Combine multiple PDF documents into a single organized file in seconds. Completely private and processed locally on your device with zero data transmission.",
          dropTitle: "Select or Drop PDF Files Here",
          dropSubtitle: "Choose multiple PDF files to combine. Files are processed locally in your browser memory for total confidentiality.",
          btnBrowse: "Browse PDF Files",
          queueTitle: "Selected Documents",
          btnAddMore: "Add More",
          btnClearAll: "Clear All",
          mergeSummaryTitle: "Ready to Merge Documents",
          mergeSummaryDesc: "Adjust sequence by dragging or using arrow buttons, then compile your final PDF.",
          btnMerge: "Merge PDFs Now",
          merging: "Merging documents...",
          successTitle: "PDF Documents Merged Successfully!",
          successSubtitle: "Your compiled PDF has been generated and is ready to download.",
          statDocs: "Total Documents",
          statPages: "Combined Pages",
          statOriginal: "Combined Size",
          statMerged: "Merged PDF Size",
          btnDownload: "Download Merged PDF",
          btnPreview: "Preview in New Tab",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally.",
          page: "page",
          pages: "pages",
          files: "files",
          dragReorder: "Drag to reorder",
          moveUp: "Move Up",
          moveDown: "Move Down",
          removeDoc: "Remove Document",
          skippedNotPdf: (name) => `Skipped "${name}" (not a PDF)`,
          addedDocs: (n) => `Added ${n} document${n > 1 ? 's' : ''}`,
          docRemoved: "Document removed",
          allCleared: "All documents cleared",
          minFilesWarning: "Please add at least 2 PDF documents to merge",
          engineLoading: "PDF engine still loading, please wait a moment...",
          initCompiler: "Initializing PDF compiler...",
          procDoc: (i, total, name) => `Processing document ${i} of ${total}: ${name}...`,
          savingStream: "Saving merged PDF stream...",
          complete: "Complete!",
          mergeSuccessToast: "Merged PDF downloaded successfully!",
          downloading: "Downloading merged PDF...",
          mergeFailed: "Failed to merge PDFs: "
        },
        ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
          backLink: "← العودة إلى الأدوات",
          clientBadge: "محلي بالكامل • الأولوية للخصوصية",
          brandBadge: "ملفات PDF • محلي 100% في المتصفح • بدون رفع للسحابة",
          pageTitle: "دمج ملفات PDF / <span>تجميع المستندات</span>",
          pageSubtitle: "ادمج ملفات PDF متعددة في ملف واحد منظم خلال ثوانٍ معدودة. معالجة محلية خاصة بالكامل على جهازك دون أي نقل للبيانات عبر الإنترنت.",
          dropTitle: "اختر أو اسحب ملفات PDF هنا",
          dropSubtitle: "حدد ملفات PDF متعددة لدمجها. تتم معالجة الملفات محلياً في ذاكرة متصفحك لسرية تامة.",
          btnBrowse: "تصفح ملفات PDF",
          queueTitle: "المستندات المختارة",
          btnAddMore: "إضافة المزيد",
          btnClearAll: "مسح الكل",
          mergeSummaryTitle: "جاهز لدمج المستندات",
          mergeSummaryDesc: "اضبط الترتيب بالسحب أو بأزرار الأسهم، ثم قم بتجميع ملف PDF النهائي.",
          btnMerge: "دمج ملفات PDF الآن",
          merging: "جارٍ دمج المستندات...",
          successTitle: "تم دمج مستندات PDF بنجاح!",
          successSubtitle: "تم إنشاء ملف PDF المدمج وهو جاهز للتحميل فوراً.",
          statDocs: "إجمالي المستندات",
          statPages: "إجمالي الصفحات",
          statOriginal: "الحجم الأصلي",
          statMerged: "حجم الملف المدمج",
          btnDownload: "تحميل ملف PDF المدمج",
          btnPreview: "معاينة في علامة تبويب جديدة",
          footerText: "© 2026 VantorKit. أدوات ويب سريعة، مجانية ومبنية للخصوصية. تتم جميع المعالجات محلياً في المتصفح.",
          page: "صفحة",
          pages: "صفحات",
          files: "ملفات",
          dragReorder: "اسحب لإعادة الترتيب",
          moveUp: "تحريك لأعلى",
          moveDown: "تحريك لأسفل",
          removeDoc: "حذف المستند",
          skippedNotPdf: (name) => `تم تخطي "${name}" (ليس ملف PDF)`,
          addedDocs: (n) => `تمت إضافة ${n} مستند${n > 1 ? 'ات' : ''}`,
          docRemoved: "تم حذف المستند",
          allCleared: "تم مسح جميع المستندات",
          minFilesWarning: "يرجى إضافة مستندين PDF على الأقل للدمج",
          engineLoading: "محرك PDF قيد التحميل، يرجى الانتظار لحظة...",
          initCompiler: "تهيئة مجمّع PDF...",
          procDoc: (i, total, name) => `معالجة المستند ${i} من ${total}: ${name}...`,
          savingStream: "حفظ ملف PDF المدمج...",
          complete: "اكتمل!",
          mergeSuccessToast: "تم تحميل ملف PDF المدمج بنجاح!",
          downloading: "جارٍ تنزيل ملف PDF المدمج...",
          mergeFailed: "فشل دمج ملفات PDF: "
        },
        fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
          backLink: "← Retour aux outils",
          clientBadge: "Côté Client • Priorité Confidentialité",
          brandBadge: "PDF & Fichiers • 100% Côté Client • Zéro Téléversement",
          pageTitle: "Fusion PDF / <span>Combiner des documents</span>",
          pageSubtitle: "Combinez plusieurs documents PDF en un seul fichier organisé en quelques secondes. Traitement 100% privé et local sur votre appareil sans transfert réseau.",
          dropTitle: "Sélectionnez ou déposez des fichiers PDF ici",
          dropSubtitle: "Choisissez plusieurs fichiers PDF à assembler. Vos documents sont traités dans la mémoire locale de votre navigateur en toute confidentialité.",
          btnBrowse: "Parcourir les fichiers PDF",
          queueTitle: "Documents sélectionnés",
          btnAddMore: "Ajouter d'autres",
          btnClearAll: "Tout effacer",
          mergeSummaryTitle: "Prêt à fusionner les documents",
          mergeSummaryDesc: "Ajustez la séquence par glisser-déposer ou avec les flèches, puis compilez votre PDF final.",
          btnMerge: "Fusionner les PDF maintenant",
          merging: "Fusion des documents en cours...",
          successTitle: "Documents PDF fusionnés avec succès !",
          successSubtitle: "Votre PDF combiné a été généré et est prêt à être téléchargé.",
          statDocs: "Total Documents",
          statPages: "Pages combinées",
          statOriginal: "Taille initiale",
          statMerged: "Taille du PDF fusionné",
          btnDownload: "Télécharger le PDF fusionné",
          btnPreview: "Aperçu dans un nouvel onglet",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, confidentiels et gratuits. Tous les traitements sont exécutés localement.",
          page: "page",
          pages: "pages",
          files: "fichiers",
          dragReorder: "Glisser pour réorganiser",
          moveUp: "Monter",
          moveDown: "Descendre",
          removeDoc: "Supprimer le document",
          skippedNotPdf: (name) => `"${name}" ignoré (pas un fichier PDF)`,
          addedDocs: (n) => `${n} document${n > 1 ? 's' : ''} ajouté${n > 1 ? 's' : ''}`,
          docRemoved: "Document supprimé",
          allCleared: "Tous les documents ont été effacés",
          minFilesWarning: "Veuillez ajouter au moins 2 documents PDF à fusionner",
          engineLoading: "Moteur PDF en cours de chargement, veuillez patienter...",
          initCompiler: "Initialisation du compilateur PDF...",
          procDoc: (i, total, name) => `Traitement du document ${i} sur ${total} : ${name}...`,
          savingStream: "Enregistrement du flux PDF fusionné...",
          complete: "Terminé !",
          mergeSuccessToast: "PDF fusionné téléchargé avec succès !",
          downloading: "Téléchargement du PDF fusionné...",
          mergeFailed: "Échec de la fusion des PDF : "
        },
        it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
          backLink: "← Torna agli strumenti",
          clientBadge: "Lato Client • Privacy Garantita",
          brandBadge: "PDF & File • 100% Lato Client • Zero Caricamenti Cloud",
          pageTitle: "Unisci PDF / <span>Combina documenti</span>",
          pageSubtitle: "Combina più documenti PDF in un unico file organizzato in pochi secondi. Totalmente privato ed elaborato in locale sul tuo dispositivo senza trasmissione dati.",
          dropTitle: "Seleziona o trascina i file PDF qui",
          dropSubtitle: "Scegli più file PDF da combinare. I documenti vengono elaborati nella memoria del browser per la massima riservatezza.",
          btnBrowse: "Sfoglia file PDF",
          queueTitle: "Documenti selezionati",
          btnAddMore: "Aggiungi altri",
          btnClearAll: "Cancella tutto",
          mergeSummaryTitle: "Pronto per unire i documenti",
          mergeSummaryDesc: "Regola la sequenza trascinando o usando le frecce, quindi compila il tuo PDF finale.",
          btnMerge: "Unisci PDF adesso",
          merging: "Unione documenti in corso...",
          successTitle: "Documenti PDF uniti con successo!",
          successSubtitle: "Il tuo PDF combinato è stato generato ed è pronto per il download.",
          statDocs: "Documenti totali",
          statPages: "Pagine totali",
          statOriginal: "Dimensione originale",
          statMerged: "Dimensione PDF unito",
          btnDownload: "Scarica PDF unito",
          btnPreview: "Anteprima in una nuova scheda",
          footerText: "© 2026 VantorKit. Utility web veloci, private e gratuite. Tutte le elaborazioni avvengono localmente.",
          page: "pagina",
          pages: "pagine",
          files: "file",
          dragReorder: "Trascina per riordinare",
          moveUp: "Sposta su",
          moveDown: "Sposta giù",
          removeDoc: "Rimuovi documento",
          skippedNotPdf: (name) => `Saltato "${name}" (non è un PDF)`,
          addedDocs: (n) => `Aggiunti ${n} document${n > 1 ? 'i' : 'o'}`,
          docRemoved: "Documento rimosso",
          allCleared: "Tutti i documenti rimossi",
          minFilesWarning: "Aggiungi almeno 2 documenti PDF da unire",
          engineLoading: "Motore PDF in caricamento, attendere un istante...",
          initCompiler: "Inizializzazione compilatore PDF...",
          procDoc: (i, total, name) => `Elaborazione documento ${i} di ${total}: ${name}...`,
          savingStream: "Salvataggio flusso PDF unito...",
          complete: "Completato!",
          mergeSuccessToast: "PDF unito scaricato con successo!",
          downloading: "Download del PDF unito in corso...",
          mergeFailed: "Impossibile unire i PDF: "
        }
      };

      const LANG_LABELS = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
        it: 'Italiano'
      };

      // --- State ---
      let fileQueue = []; // [{ id, file, name, size, pages, arrayBuffer }]
      let mergedPdfBlobUrl = null;
      let toastTimer = null;

      // --- DOM Elements ---
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');

      const queueSection = document.getElementById('queueSection');
      const queueList = document.getElementById('queueList');
      const queueSummaryPill = document.getElementById('queueSummaryPill');
      const btnAddMore = document.getElementById('btnAddMore');
      const btnClearAll = document.getElementById('btnClearAll');

      const btnMerge = document.getElementById('btnMerge');
      const progressContainer = document.getElementById('progressContainer');
      const progressStatus = document.getElementById('progressStatus');
      const progressPercent = document.getElementById('progressPercent');
      const progressBar = document.getElementById('progressBar');

      const successCard = document.getElementById('successCard');
      const statDocCount = document.getElementById('statDocCount');
      const statPageCount = document.getElementById('statPageCount');
      const statOriginalSize = document.getElementById('statOriginalSize');
      const statMergedSize = document.getElementById('statMergedSize');
      const btnDownloadMerged = document.getElementById('btnDownloadMerged');
      const btnPreviewMerged = document.getElementById('btnPreviewMerged');

      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // --- Language Switcher DOM Elements ---
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langDropdown = document.getElementById('langDropdown');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      // --- Language Switcher Events ---
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

        // Re-render queue to update localized tooltips & counters
        if (fileQueue.length > 0) {
          renderQueue();
        }
      }

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

      function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
      }

      // --- File Reading & Page Counting ---
      async function processFiles(files) {
        if (!files || files.length === 0) return;

        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        let addedCount = 0;
        for (const file of files) {
          if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
            showToast(dict.skippedNotPdf(file.name));
            continue;
          }

          const fileId = generateId();
          const fileObj = {
            id: fileId,
            file: file,
            name: file.name,
            size: file.size,
            pages: '...',
            arrayBuffer: null
          };

          fileQueue.push(fileObj);
          addedCount++;
          renderQueue();

          // Read ArrayBuffer and count pages asynchronously
          try {
            const buf = await file.arrayBuffer();
            fileObj.arrayBuffer = buf;

            if (window.PDFLib) {
              const doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
              fileObj.pages = doc.getPageCount();
            } else {
              fileObj.pages = '1+';
            }
          } catch (err) {
            console.warn('Could not read page count for', file.name, err);
            fileObj.pages = 'Error';
          }
          renderQueue();
        }

        if (addedCount > 0) {
          showToast(dict.addedDocs(addedCount));
        }
      }

      // --- Render Queue UI ---
      function renderQueue() {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        if (fileQueue.length === 0) {
          queueSection.style.display = 'none';
          successCard.style.display = 'none';
          return;
        }

        queueSection.style.display = 'flex';

        // Update Summary Pill
        const totalSize = fileQueue.reduce((acc, f) => acc + f.size, 0);
        const knownPages = fileQueue.reduce((acc, f) => acc + (typeof f.pages === 'number' ? f.pages : 0), 0);
        queueSummaryPill.textContent = `${fileQueue.length} ${dict.files} • ${knownPages > 0 ? knownPages + ' ' + (knownPages === 1 ? dict.page : dict.pages) + ' • ' : ''}${formatBytes(totalSize)}`;

        // Render List Items
        queueList.innerHTML = '';
        fileQueue.forEach((item, index) => {
          const el = document.createElement('div');
          el.className = 'queue-item';
          el.draggable = true;
          el.dataset.id = item.id;
          el.dataset.index = index;

          const pageCountText = typeof item.pages === 'number'
            ? `${item.pages} ${item.pages === 1 ? dict.page : dict.pages}`
            : item.pages;

          el.innerHTML = `
            <div class="item-left">
              <span class="drag-handle" title="${dict.dragReorder}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="6" r="1.5"></circle><circle cx="15" cy="6" r="1.5"></circle><circle cx="9" cy="12" r="1.5"></circle><circle cx="15" cy="12" r="1.5"></circle><circle cx="9" cy="18" r="1.5"></circle><circle cx="15" cy="18" r="1.5"></circle></svg>
              </span>
              <span class="order-badge">#${index + 1}</span>
              <div class="item-pdf-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <div class="item-details">
                <span class="item-name" title="${item.name}">${item.name}</span>
                <div class="item-meta">
                  <span class="item-page-badge">${pageCountText}</span>
                  <span>${formatBytes(item.size)}</span>
                </div>
              </div>
            </div>

            <div class="item-actions">
              <button type="button" class="btn-icon btn-move-up" title="${dict.moveUp}" ${index === 0 ? 'disabled' : ''}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </button>
              <button type="button" class="btn-icon btn-move-down" title="${dict.moveDown}" ${index === fileQueue.length - 1 ? 'disabled' : ''}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <button type="button" class="btn-icon btn-delete" title="${dict.removeDoc}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          `;

          // Button handlers
          el.querySelector('.btn-move-up').addEventListener('click', (e) => {
            e.stopPropagation();
            moveItem(index, index - 1);
          });

          el.querySelector('.btn-move-down').addEventListener('click', (e) => {
            e.stopPropagation();
            moveItem(index, index + 1);
          });

          el.querySelector('.btn-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            removeItem(item.id);
          });

          // Drag and drop reordering
          el.addEventListener('dragstart', handleDragStart);
          el.addEventListener('dragover', handleDragOver);
          el.addEventListener('drop', handleDrop);
          el.addEventListener('dragend', handleDragEnd);

          queueList.appendChild(el);
        });

        // Update merge button state
        btnMerge.disabled = fileQueue.length < 2;
      }

      function moveItem(fromIdx, toIdx) {
        if (toIdx < 0 || toIdx >= fileQueue.length) return;
        const item = fileQueue.splice(fromIdx, 1)[0];
        fileQueue.splice(toIdx, 0, item);
        renderQueue();
      }

      function removeItem(id) {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;
        fileQueue = fileQueue.filter(f => f.id !== id);
        renderQueue();
        showToast(dict.docRemoved);
      }

      function clearAll() {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;
        fileQueue = [];
        if (mergedPdfBlobUrl) {
          URL.revokeObjectURL(mergedPdfBlobUrl);
          mergedPdfBlobUrl = null;
        }
        renderQueue();
        showToast(dict.allCleared);
      }

      // --- Drag and Drop Reordering Handlers ---
      let draggedElement = null;

      function handleDragStart(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', this.dataset.index);
      }

      function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }

      function handleDrop(e) {
        e.preventDefault();
        if (!draggedElement || draggedElement === this) return;

        const fromIdx = parseInt(draggedElement.dataset.index, 10);
        const toIdx = parseInt(this.dataset.index, 10);

        moveItem(fromIdx, toIdx);
      }

      function handleDragEnd() {
        this.classList.remove('dragging');
        draggedElement = null;
      }

      // --- Dropzone & File Input Events ---
      btnBrowse.addEventListener('click', () => {
        fileInput.click();
      });

      btnAddMore.addEventListener('click', () => {
        fileInput.click();
      });

      btnClearAll.addEventListener('click', clearAll);

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          processFiles(Array.from(e.target.files));
          fileInput.value = '';
        }
      });

      // Drag and drop into dropzone
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
        if (e.dataTransfer && e.dataTransfer.files) {
          processFiles(e.dataTransfer.files);
        }
      });

      // --- PDF Merging Execution ---
      btnMerge.addEventListener('click', async () => {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;

        if (fileQueue.length < 2) {
          showToast(dict.minFilesWarning);
          return;
        }

        if (!window.PDFLib) {
          showToast(dict.engineLoading);
          return;
        }

        btnMerge.disabled = true;
        progressContainer.style.display = 'flex';
        successCard.style.display = 'none';

        function updateProgress(percent, status) {
          progressBar.style.width = `${percent}%`;
          progressPercent.textContent = `${percent}%`;
          progressStatus.textContent = status;
        }

        try {
          updateProgress(10, dict.initCompiler);
          const { PDFDocument } = PDFLib;
          const mergedDoc = await PDFDocument.create();

          const totalDocs = fileQueue.length;
          let combinedPages = 0;

          for (let i = 0; i < totalDocs; i++) {
            const item = fileQueue[i];
            const percent = Math.round(15 + ((i + 1) / totalDocs) * 65);
            updateProgress(percent, dict.procDoc(i + 1, totalDocs, item.name));

            let buf = item.arrayBuffer;
            if (!buf) {
              buf = await item.file.arrayBuffer();
              item.arrayBuffer = buf;
            }

            const srcDoc = await PDFDocument.load(buf, { ignoreEncryption: true });
            const pageIndices = srcDoc.getPageIndices();
            combinedPages += pageIndices.length;

            const copiedPages = await mergedDoc.copyPages(srcDoc, pageIndices);
            copiedPages.forEach(p => mergedDoc.addPage(p));
          }

          updateProgress(85, dict.savingStream);
          const mergedBytes = await mergedDoc.save();

          updateProgress(100, dict.complete);

          // Create Blob URL
          if (mergedPdfBlobUrl) {
            URL.revokeObjectURL(mergedPdfBlobUrl);
          }
          const blob = new Blob([mergedBytes], { type: 'application/pdf' });
          mergedPdfBlobUrl = URL.createObjectURL(blob);

          // Update Success Stats
          const totalOriginalBytes = fileQueue.reduce((acc, f) => acc + f.size, 0);
          statDocCount.textContent = totalDocs;
          statPageCount.textContent = combinedPages;
          statOriginalSize.textContent = formatBytes(totalOriginalBytes);
          statMergedSize.textContent = formatBytes(blob.size);

          successCard.style.display = 'block';
          successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          // Auto-trigger download
          triggerDownload(mergedPdfBlobUrl, 'vantorkit-merged.pdf');
          showToast(dict.mergeSuccessToast);

        } catch (err) {
          console.error('PDF Merge Error:', err);
          showToast(dict.mergeFailed + err.message);
        } finally {
          btnMerge.disabled = false;
          setTimeout(() => {
            progressContainer.style.display = 'none';
            progressBar.style.width = '0%';
          }, 1000);
        }
      });

      function triggerDownload(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      btnDownloadMerged.addEventListener('click', () => {
        const curLang = localStorage.getItem('vantorkit_lang') || 'en';
        const dict = I18N[curLang] || I18N.en;
        if (mergedPdfBlobUrl) {
          triggerDownload(mergedPdfBlobUrl, 'vantorkit-merged.pdf');
          showToast(dict.downloading);
        }
      });

      btnPreviewMerged.addEventListener('click', () => {
        if (mergedPdfBlobUrl) {
          window.open(mergedPdfBlobUrl, '_blank');
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
        "title": "PDF Merge – Combine & Reorder Documents Online",
        "desc": "Merge multiple PDF files into an organized document with drag-and-drop page ordering. Files are assembled in local memory without leaving your machine."
    },
    "ar": {
        "title": "دمج ملفات PDF – تجميع وترتيب المستندات محلياً",
        "desc": "ادمج عدة مستندات PDF في ملف منظم واحد مع إعادة ترتيب الصفحات بالسحب. يتم تجميع الملفات محلياً داخل جهازك دون إرسالها إلى أي خادم خارجي."
    },
    "fr": {
        "title": "Fusionner PDF – Combiner des Documents en Ligne",
        "desc": "Assemblez plusieurs fichiers PDF en un document ordonné avec réorganisation par glisser-déposer. Vos fichiers ne quittent jamais votre équipement."
    },
    "it": {
        "title": "Unisci PDF – Combina e Riordina Documenti Online",
        "desc": "Unisci più documenti PDF in un unico file con ordinamento visivo delle pagine. L'assemblaggio avviene in memoria locale con totale riservatezza."
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