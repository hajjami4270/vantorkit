const I18N = {
      en: {
        backLink: "← Back to Tools",
        brandBadge: "Client-Side • True Flattening • Zero Server Uploads",
        heroSubtitle: "Permanently blackout sensitive text, redact private records with unrecoverable pixel flattening, and place digital signatures—100% locally in your browser.",
        dropTitle: "Drag & Drop confidential PDF here",
        dropSubtitle: "or browse your files (Supports multi-page contracts, statements, and reports)",
        browseBtn: "Choose PDF Document",
        sampleBtn: "Try Sample Document",
        fileInfoName: "Document:",
        fileInfoPages: "Pages:",
        fileInfoSize: "Size:",
        redactionCount: "Active Redactions:",
        changeFileBtn: "Change File",
        modeRedact: "Redact (Blackout)",
        modeSign: "Place Signature",
        undoBtn: "Undo Box",
        clearBoxesBtn: "Clear Page Redactions",
        prevPage: "◀ Prev",
        nextPage: "Next ▶",
        pageOf: "of",
        exportBtn: "Download Redacted & Signed PDF",
        signatureModalTitle: "Create Digital Signature",
        tabDraw: "Draw Signature",
        tabType: "Type Signature",
        typePlaceholder: "Type your legal name...",
        inkColorLabel: "Ink Color:",
        clearSigBtn: "Clear Pad",
        closeModalBtn: "Cancel",
        applySigBtn: "Insert Signature Stamp",
        guideHeading: "Permanent PDF Redaction & Privacy Architecture",
        guideSubheading: "Understand how visual blackouts fail and why pixel-flattened rasterization guarantees confidentiality.",
        g1Title: "The Danger of Fake Redactions",
        g1Desc: "Drawing black rectangles in Word, Preview, or Acrobat without raster flattening only creates a visual mask. The raw text stream remains intact underneath, allowing anyone to select, copy, or scrape confidential Social Security Numbers, names, and trade secrets with a simple Ctrl+C.",
        g2Title: "True Client-Side Pixel Flattening",
        g2Desc: "VantorKit renders redacted pages directly to an in-memory HTML5 Canvas and burns opaque black pixels permanently over target coordinates. When exported, the original vector text objects are completely erased and replaced with flattened raster pixels, making forensic extraction mathematically impossible.",
        g3Title: "Zero-Knowledge Guarantee",
        g3Desc: "Your legal briefs, financial disclosures, and medical records never leave your workstation. Rendering, redacting, signing, and PDF binary compilation execute 100% inside your browser's private memory sandbox with zero network telemetry.",
        faqHeading: "Frequently Asked Questions",
        faqSubheading: "Everything you need to know about secure client-side document redaction and digital signing.",
        faq1Q: "Can someone highlight or copy text hidden under the black redaction boxes?",
        faq1A: "No. When you export, pages containing redactions are rendered to high-resolution raster layers where redacted text is completely stripped from the PDF object tree and replaced with solid black pixels. There is zero underlying text stream to copy or extract.",
        faq2Q: "Are my PDF documents uploaded to VantorKit servers?",
        faq2A: "Never. VantorKit operates under a zero-server architecture. All document decoding, canvas manipulation, signature placement, and PDF recompilation occur exclusively inside your device RAM.",
        faq3Q: "Is the digital signature legally binding?",
        faq3A: "Yes, electronic signatures created with this tool satisfy standard e-signature criteria under frameworks like the US ESIGN Act and European eIDAS for general commercial agreements, NDAs, and routine approvals.",
        faq4Q: "What is the maximum PDF file size supported?",
        faq4A: "Because all processing happens locally in browser memory, you can comfortably redact documents of dozens or hundreds of pages. The only limit is your device's available system RAM.",
        footerPriv: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerAbout: "About Us",
        footerContact: "Contact",
        footerCopy: "© 2026 VantorKit. Client-side tools designed with absolute data privacy."
      },
      ar: {
        backLink: "الرجوع إلى الأدوات ←",
        brandBadge: "معالجة محلية • تسطيح كامل • بدون خوادم",
        heroSubtitle: "احجب النصوص السرية والمعلومات الحساسة نهائياً بتسطيح البكسلات غير القابل للاسترجاع وضع توقيعك الرقمي—محلياً بنسبة 100% في متصفحك.",
        dropTitle: "اسحب وأفلت مستند PDF السري هنا",
        dropSubtitle: "أو تصفح ملفاتك (يدعم العقود متعددة الصفحات والكشوفات والتقارير)",
        browseBtn: "اختيار ملف PDF",
        sampleBtn: "تجربة مستند نموذجي",
        fileInfoName: "المستند:",
        fileInfoPages: "الصفحات:",
        fileInfoSize: "الحجم:",
        redactionCount: "مربعات التعتيم:",
        changeFileBtn: "تغيير الملف",
        modeRedact: "طمس وتعتيم (Blackout)",
        modeSign: "إدراج توقيع",
        undoBtn: "تراجع عن مربع",
        clearBoxesBtn: "مسح تعتيم الصفحة",
        prevPage: "◀ السابق",
        nextPage: "التالي ▶",
        pageOf: "من",
        exportBtn: "تنزيل مستند PDF المكتمل والموقع",
        signatureModalTitle: "إنشاء توقيع رقمي",
        tabDraw: "رسم التوقيع باليد",
        tabType: "كتابة التوقيع بالنص",
        typePlaceholder: "اكتب اسمك القانوني هنا...",
        inkColorLabel: "لون الحبر:",
        clearSigBtn: "مسح اللوحة",
        closeModalBtn: "إلغاء",
        applySigBtn: "إدراج ختم التوقيع",
        guideHeading: "بنية التعتيم الآمن للـ PDF والخصوصية التامة",
        guideSubheading: "تعرف على أسباب فشل التعتيم البصري الشكلي وكيف يضمن تسطيح البكسلات السرية المطلقة.",
        g1Title: "خطر التعتيم البصري المزيف",
        g1Desc: "رسم مربعات سوداء داخل برامج مثل Word أو Acrobat دون تسطيح الصور يمثل مجرد قناع بصري خادع؛ حيث تبقى سلاسل النصوص الأصلية مخزنة أسفلها، مما يمكن أي شخص من نسخ وسحب أرقام الهوية والبيانات السرية بمجرد الضغط على Ctrl+C.",
        g2Title: "التسطيح الفعلي داخل ذاكرة المتصفح",
        g2Desc: "تقوم أداة فانتوركيت برسم صفحات PDF داخل لوحة HTML5 Canvas وتحرق بكسلات سوداء مصمتة فوق الإحداثيات المستهدفة نهائياً. وعند التصدير، تُحذف عناصر النص المتجهي الأصلي بالكامل وتُستبدل بطبقة بكسلات يستحيل استرجاعها.",
        g3Title: "ضمانة المعالجة المحلية الخالصة",
        g3Desc: "لا تغادر عقودك القانونية وإفصاحاتك المالية وسجلاتك الطبية جهازك على الإطلاق. تتم عمليات العرض والطمس والتوقيع وتجميع ملفات PDF داخل متصفحك بمعزل كامل عن أي خوادم خارجية.",
        faqHeading: "الأسئلة الشائعة",
        faqSubheading: "كل ما تحتاج لمعرفته حول التعتيم الآمن لمستندات PDF والتوقيع الإلكتروني المحلي.",
        faq1Q: "هل يمكن لأي شخص تظليل أو نسخ النصوص المخفية تحت مربعات التعتيم السوداء؟",
        faq1A: "لا على الإطلاق. عند التصدير، يتم تسطيح الصفحات التي تحتوي على طمس بالكامل إلى طبقات بكسل نقطية عالية الدقة، حيث يُحذف النص الأصلي نهائياً من شجرة كائنات PDF ويُستبدل ببكسلات سوداء مصمتة يستحيل استخراجها.",
        faq2Q: "هل يتم رفع مستندات PDF الخاصة بي إلى خوادم فانتوركيت؟",
        faq2A: "أبداً. تعمل أداة فانتوركيت وفق بنية معالجة محلية 100%. تتم كافة عمليات قراءة المستندات والرسم والتسطيح وإعادة التجميع داخل ذاكرة متصفحك العشوائية دون إرسال أي بايت عبر الشبكة.",
        faq3Q: "هل التوقيع الرقمي المضاف ملزم قانوناً؟",
        faq3A: "نعم، تفي التوقيعات الإلكترونية المنشأة عبر الأداة بالمتطلبات المعمول بها في العقود التجارية العامة واتفاقيات عدم الإفصاح والاعتمادات الروتينية وفق تشريعات ESIGN و eIDAS.",
        faq4Q: "ما هو الحد الأقصى لحجم ملف PDF المدعوم؟",
        faq4A: "نظراً لأن المعالجة تتم محلياً في الذاكرة، تدعم الأداة مستندات بعشرات أو مئات الصفحات بسلاسة، ويكون الحد الوحيد هو الذاكرة المتاحة في جهازك ومتصفحك.",
        footerPriv: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerAbout: "من نحن",
        footerContact: "اتصل بنا",
        footerCopy: "© 2026 فانتوركيت. أدوات ويب صممت بخصوصية بيانات مطلقة ومعالجة محلية."
      },
      fr: {
        backLink: "← Retour aux outils",
        brandBadge: "Côté Client • Aplatissement Réel • Zéro Téléversement",
        heroSubtitle: "Masquez définitivement les données confidentielles par aplatissement de pixels et apposez votre signature numérique—100% localement dans votre navigateur.",
        dropTitle: "Glissez et déposez votre PDF confidentiel ici",
        dropSubtitle: "ou parcourez vos fichiers (Prend en charge contrats, relevés et rapports multipages)",
        browseBtn: "Choisir un document PDF",
        sampleBtn: "Essayer un document d'exemple",
        fileInfoName: "Document :",
        fileInfoPages: "Pages :",
        fileInfoSize: "Taille :",
        redactionCount: "Biffures actives :",
        changeFileBtn: "Changer de fichier",
        modeRedact: "Biffer (Masquage)",
        modeSign: "Apposer une signature",
        undoBtn: "Annuler rectangle",
        clearBoxesBtn: "Effacer les biffures",
        prevPage: "◀ Précédent",
        nextPage: "Suivant ▶",
        pageOf: "sur",
        exportBtn: "Télécharger le PDF Biffé & Signé",
        signatureModalTitle: "Créer une signature numérique",
        tabDraw: "Dessiner la signature",
        tabType: "Saisir la signature",
        typePlaceholder: "Saisissez votre nom légal...",
        inkColorLabel: "Couleur d'encre :",
        clearSigBtn: "Effacer la zone",
        closeModalBtn: "Annuler",
        applySigBtn: "Insérer le tampon de signature",
        guideHeading: "Architecture de Biffure PDF & Confidentialité Absolue",
        guideSubheading: "Comprenez pourquoi le simple masquage visuel échoue et comment l'aplatissement de pixels garantit le secret.",
        g1Title: "Le Danger des Biffures Illusoires",
        g1Desc: "Dessiner des rectangles noirs dans Word, Aperçu ou Acrobat sans aplatissement d'image ne crée qu'un masque de surface. Le flux de texte brut subsiste en dessous, permettant à quiconque de copier ou d'extraire des numéros confidentiels via un simple Ctrl+C.",
        g2Title: "Véritable Aplatissement de Pixels en RAM",
        g2Desc: "VantorKit génère les pages modifiées directement sur un canevas HTML5 et fusionne des pixels noirs opaques sur les coordonnées ciblées. Lors de l'exportation, les éléments de texte vectoriels d'origine sont supprimés et remplacés par des pixels définitifs.",
        g3Title: "Garantie Zéro-Connaissance",
        g3Desc: "Vos actes juridiques, bilans financiers et dossiers médicaux ne quittent jamais votre machine. Tout le traitement s'exécute dans l'espace isolé de votre navigateur, sans télémétrie ni communication serveur.",
        faqHeading: "Foire Aux Questions",
        faqSubheading: "Tout ce que vous devez savoir sur la biffure sécurisée et la signature électronique locale.",
        faq1Q: "Peut-on surligner ou copier le texte masqué sous les zones noires ?",
        faq1A: "Non. Lors de l'exportation, les pages modifiées sont transformées en calques d'images haute résolution où le texte masqué est définitivement radié et remplacé par des pixels opaques. Aucun flux de texte ne peut être récupéré.",
        faq2Q: "Mes documents PDF sont-ils téléversés sur les serveurs de VantorKit ?",
        faq2A: "Jamais. VantorKit fonctionne selon une architecture sans serveur. Le décodage, l'édition, l'apposition de signature et la compilation PDF se font exclusivement dans la mémoire vive de votre terminal.",
        faq3Q: "La signature numérique a-t-elle une valeur légale ?",
        faq3A: "Oui, les signatures électroniques créées répondent aux exigences légales ordinaires pour les accords commerciaux et approbations selon les réglementations ESIGN et eIDAS.",
        faq4Q: "Quelle est la taille maximale de fichier PDF supportée ?",
        faq4A: "Le traitement étant entièrement local, vous pouvez biffer des documents de plusieurs dizaines ou centaines de pages sans contrainte autre que la mémoire RAM de votre appareil.",
        footerPriv: "Politique de confidentialité",
        footerTerms: "Conditions d'utilisation",
        footerAbout: "À propos",
        footerContact: "Contact",
        footerCopy: "© 2026 VantorKit. Outils côté client conçus avec une confidentialité absolue."
      },
      it: {
        backLink: "← Torna agli strumenti",
        brandBadge: "Lato Client • Appiattimento Reale • Zero Server",
        heroSubtitle: "Oscura permanentemente dati sensibili con appiattimento irreversibile dei pixel e apponi firme digitali—100% in locale nel browser.",
        dropTitle: "Trascina e rilascia il PDF riservato qui",
        dropSubtitle: "o sfoglia i file (Supporta contratti, estratti conto e documenti multipagina)",
        browseBtn: "Scegli documento PDF",
        sampleBtn: "Prova documento di esempio",
        fileInfoName: "Documento:",
        fileInfoPages: "Pagine:",
        fileInfoSize: "Dimensione:",
        redactionCount: "Oscuramenti attivi:",
        changeFileBtn: "Cambia file",
        modeRedact: "Oscura (Blackout)",
        modeSign: "Apponi firma",
        undoBtn: "Annulla riquadro",
        clearBoxesBtn: "Cancella oscuramenti pagina",
        prevPage: "◀ Prec",
        nextPage: "Succ ▶",
        pageOf: "di",
        exportBtn: "Scarica PDF Oscurato & Firmato",
        signatureModalTitle: "Crea firma digitale",
        tabDraw: "Disegna firma",
        tabType: "Digita firma",
        typePlaceholder: "Digita il tuo nome legale...",
        inkColorLabel: "Colore inchiostro:",
        clearSigBtn: "Cancella area",
        closeModalBtn: "Annulla",
        applySigBtn: "Inserisci timbro firma",
        guideHeading: "Architettura di Oscuramento PDF & Privacy Assoluta",
        guideSubheading: "Scopri perché le semplici forme nere falliscono e come l'appiattimento raster garantisce la totale riservatezza.",
        g1Title: "Il Pericolo delle False Biffature",
        g1Desc: "Disegnare rettangoli neri in Word o Acrobat senza appiattimento raster crea solo una maschera superficiale. Il flusso di testo sottostante rimane intatto, consentendo a chiunque di copiare dati riservati con un semplice Ctrl+C.",
        g2Title: "Vero Appiattimento dei Pixel in Memoria Locale",
        g2Desc: "VantorKit renderizza le pagine modificate direttamente su canvas HTML5 fondendo pixel neri opachi sulle coordinate selezionate. All'esportazione, gli oggetti testo vettoriali vengono eliminati e sostituiti da pixel raster definitivi.",
        g3Title: "Garanzia Zero-Conoscenza",
        g3Desc: "I tuoi atti legali, dichiarazioni fiscali e documenti medici non lasciano mai il tuo dispositivo. Tutto il processo di rendering, oscuramento e firma si svolge nella sandbox della memoria del browser.",
        faqHeading: "Domande Frequenti",
        faqSubheading: "Tutto ciò che devi sapere sull'oscuramento sicuro e la firma di documenti in locale.",
        faq1Q: "È possibile evidenziare o copiare il testo nascosto sotto i riquadri neri?",
        faq1A: "No. Durante l'esportazione, le pagine con oscuramenti vengono convertite in livelli raster ad alta risoluzione in cui il testo biffato viene completamente cancellato e rimpiazzato con pixel neri opachi.",
        faq2Q: "I miei file PDF vengono caricati sui server VantorKit?",
        faq2A: "Mai. VantorKit opera con architettura a zero server. Tutta l'elaborazione, l'apposizione della firma e la ricompilazione del PDF avvengono unicamente nella RAM del tuo browser.",
        faq3Q: "La firma digitale ha valore legale?",
        faq3A: "Sì, le firme elettroniche create con questo strumento soddisfano i requisiti standard per contratti commerciali e approvazioni ordinarie secondo le norme ESIGN ed eIDAS.",
        faq4Q: "Qual è la dimensione massima supportata per i file PDF?",
        faq4A: "Poiché l'elaborazione avviene localmente, puoi lavorare su documenti di decine o centinaia di pagine senza problemi; l'unico vincolo è la RAM disponibile sul tuo computer.",
        footerPriv: "Informativa sulla privacy",
        footerTerms: "Termini di servizio",
        footerAbout: "Chi siamo",
        footerContact: "Contatti",
        footerCopy: "© 2026 VantorKit. Strumenti lato client progettati per la massima privacy."
      }
    };

    // --- State Variables ---
    let currentPdfDoc = null;
    let pdfRawBytes = null;
    let currentFile = null;
    let originalFileName = 'document.pdf';
    let currentPageNum = 1;
    let totalPages = 1;
    let zoomLevel = 1.0;
    let currentMode = 'redact'; // 'redact' or 'sign'

    // Redaction store: pageNum -> array of {x, y, w, h} (normalized 0 to 1 relative to page width/height)
    const redactions = {};
    // Signatures store: pageNum -> array of {id, imgData, x, y, w, h}
    const signatures = {};

    let isDrawingBox = false;
    let startX = 0, startY = 0;
    let currentBox = null;

    // Signature Pad state
    let sigCanvas, sigCtx;
    let isDrawingSig = false;
    let sigInkColor = '#000000';
    let sigMode = 'draw'; // 'draw' or 'type'

    // --- DOM Elements ---
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const btnBrowse = document.getElementById('btnBrowse');
    const btnSample = document.getElementById('btnSample');
    const workspace = document.getElementById('workspace');
    const btnChangeFile = document.getElementById('btnChangeFile');

    const pdfCanvas = document.getElementById('pdfCanvas');
    const pdfCtx = pdfCanvas.getContext('2d');
    const drawCanvas = document.getElementById('drawCanvas');
    const drawCtx = drawCanvas.getContext('2d');
    const canvasStage = document.getElementById('canvasStage');

    const btnModeRedact = document.getElementById('btnModeRedact');
    const btnModeSign = document.getElementById('btnModeSign');
    const btnUndoBox = document.getElementById('btnUndoBox');
    const btnClearBoxes = document.getElementById('btnClearBoxes');
    const btnPrevPage = document.getElementById('btnPrevPage');
    const btnNextPage = document.getElementById('btnNextPage');
    const pageNumInput = document.getElementById('pageNumInput');
    const pageTotal = document.getElementById('pageTotal');
    const boxCount = document.getElementById('boxCount');
    const docName = document.getElementById('docName');
    const docPages = document.getElementById('docPages');
    const docSize = document.getElementById('docSize');
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnZoomReset = document.getElementById('btnZoomReset');
    const btnExport = document.getElementById('btnExport');

    // Signature Modal elements
    const sigModal = document.getElementById('sigModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnCancelSig = document.getElementById('btnCancelSig');
    const tabBtnDraw = document.getElementById('tabBtnDraw');
    const tabBtnType = document.getElementById('tabBtnType');
    const drawSigArea = document.getElementById('drawSigArea');
    const typeSigArea = document.getElementById('typeSigArea');
    const typeSigInput = document.getElementById('typeSigInput');
    const typeSigText = document.getElementById('typeSigText');
    const btnClearSig = document.getElementById('btnClearSig');
    const btnApplySig = document.getElementById('btnApplySig');
    const inkButtons = document.querySelectorAll('.ink-btn');

    const toastBox = document.getElementById('toastBox');
    const toastMsg = document.getElementById('toastMsg');

    function showToast(msg) {
      toastMsg.textContent = msg;
      toastBox.classList.add('show');
      setTimeout(() => { toastBox.classList.remove('show'); }, 3000);
    }

    // --- Format Helper ---
    function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    // --- PDF.js Worker Configuration ---
    if (window.pdfjsLib) {
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      } catch (e) {}
    }

    // --- File Handling & Loading ---
    async function loadPdfArrayBuffer(arrayBuffer, fileName, fileInstance) {
      try {
        if (fileInstance) {
          currentFile = fileInstance;
        } else if (!currentFile || currentFile.name !== fileName) {
          currentFile = new File([arrayBuffer], fileName || 'document.pdf', { type: 'application/pdf' });
        }
        originalFileName = fileName || (currentFile ? currentFile.name : 'document.pdf');

        const masterBuffer = await currentFile.arrayBuffer();
        pdfRawBytes = new Uint8Array(masterBuffer.slice(0));
        const renderBuffer = masterBuffer.slice(0);

        const loadingTask = pdfjsLib.getDocument({
          data: renderBuffer,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true,
          standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/',
          enableXfa: true
        });
        currentPdfDoc = await loadingTask.promise;
        totalPages = currentPdfDoc.numPages;

        docName.textContent = originalFileName;
        docPages.textContent = totalPages;
        docSize.textContent = formatBytes(currentFile.size);
        pageTotal.textContent = totalPages;
        currentPageNum = 1;
        pageNumInput.value = 1;
        pageNumInput.max = totalPages;

        // Reset stores
        for (let i = 1; i <= totalPages; i++) {
          if (!redactions[i]) redactions[i] = [];
          if (!signatures[i]) signatures[i] = [];
        }

        dropZone.style.display = 'none';
        workspace.style.display = 'flex';

        await renderCurrentPage();
        showToast('Document loaded successfully');
      } catch (err) {
        console.error(err);
        showToast('Failed to load PDF. Document may be encrypted or invalid.');
      }
    }

    async function renderCurrentPage() {
      if (!currentPdfDoc) return;
      const page = await currentPdfDoc.getPage(currentPageNum);
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      const baseScale = 1.5;
      const viewport = page.getViewport({ scale: zoomLevel * baseScale });

      // CSS display size
      const cssWidth = Math.floor(viewport.width);
      const cssHeight = Math.floor(viewport.height);

      // Hi-DPI backing store buffer (scaled by devicePixelRatio)
      pdfCanvas.width = Math.floor(viewport.width * dpr);
      pdfCanvas.height = Math.floor(viewport.height * dpr);
      pdfCanvas.style.width = cssWidth + 'px';
      pdfCanvas.style.height = cssHeight + 'px';

      drawCanvas.width = Math.floor(viewport.width * dpr);
      drawCanvas.height = Math.floor(viewport.height * dpr);
      drawCanvas.style.width = cssWidth + 'px';
      drawCanvas.style.height = cssHeight + 'px';

      canvasStage.style.width = cssWidth + 'px';
      canvasStage.style.height = cssHeight + 'px';

      const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;

      const renderContext = {
        canvasContext: pdfCtx,
        viewport: viewport,
        transform: transform
      };

      await page.render(renderContext).promise;
      redrawOverlay();
      updateBoxCount();
    }

    function redrawOverlay() {
      drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      const pageBoxes = redactions[currentPageNum] || [];

      // Draw all saved redaction boxes (Solid black)
      drawCtx.fillStyle = '#000000';
      pageBoxes.forEach(box => {
        const x = box.x * drawCanvas.width;
        const y = box.y * drawCanvas.height;
        const w = box.w * drawCanvas.width;
        const h = box.h * drawCanvas.height;
        drawCtx.fillRect(x, y, w, h);
      });

      // Render any active signature DOM elements for this page
      renderSignatureElements();
    }

    function updateBoxCount() {
      const pageBoxes = redactions[currentPageNum] || [];
      boxCount.textContent = pageBoxes.length;
    }

    // --- Interactive Redaction Box Drawing ---
    function getCanvasCoordinates(e) {
      const rect = drawCanvas.getBoundingClientRect();
      const scaleX = drawCanvas.width / rect.width;
      const scaleY = drawCanvas.height / rect.height;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    drawCanvas.addEventListener('mousedown', (e) => {
      if (currentMode !== 'redact') return;
      isDrawingBox = true;
      const coords = getCanvasCoordinates(e);
      startX = coords.x;
      startY = coords.y;
      currentBox = { x: startX, y: startY, w: 0, h: 0 };
    });

    drawCanvas.addEventListener('mousemove', (e) => {
      if (!isDrawingBox || currentMode !== 'redact') return;
      const coords = getCanvasCoordinates(e);
      currentBox.w = coords.x - startX;
      currentBox.h = coords.y - startY;

      redrawOverlay();

      // Draw temporary semi-transparent dragging preview box
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      drawCtx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      drawCtx.strokeStyle = '#38bdf8';
      drawCtx.lineWidth = 2 * dpr;
      drawCtx.fillRect(currentBox.x, currentBox.y, currentBox.w, currentBox.h);
      drawCtx.strokeRect(currentBox.x, currentBox.y, currentBox.w, currentBox.h);
    });

    function finishBox() {
      if (!isDrawingBox) return;
      isDrawingBox = false;

      if (!currentBox || Math.abs(currentBox.w) < 4 || Math.abs(currentBox.h) < 4) {
        redrawOverlay();
        return;
      }

      // Normalize positive width/height
      let normX = currentBox.w < 0 ? currentBox.x + currentBox.w : currentBox.x;
      let normY = currentBox.h < 0 ? currentBox.y + currentBox.h : currentBox.y;
      let normW = Math.abs(currentBox.w);
      let normH = Math.abs(currentBox.h);

      if (!redactions[currentPageNum]) redactions[currentPageNum] = [];
      redactions[currentPageNum].push({
        x: normX / drawCanvas.width,
        y: normY / drawCanvas.height,
        w: normW / drawCanvas.width,
        h: normH / drawCanvas.height
      });

      redrawOverlay();
      updateBoxCount();
      showToast('Redaction box placed');
    }

    drawCanvas.addEventListener('mouseup', finishBox);
    drawCanvas.addEventListener('mouseleave', finishBox);

    // Undo & Clear Redactions
    btnUndoBox.addEventListener('click', () => {
      if (redactions[currentPageNum] && redactions[currentPageNum].length > 0) {
        redactions[currentPageNum].pop();
        redrawOverlay();
        updateBoxCount();
        showToast('Last redaction box removed');
      }
    });

    btnClearBoxes.addEventListener('click', () => {
      if (redactions[currentPageNum] && redactions[currentPageNum].length > 0) {
        redactions[currentPageNum] = [];
        redrawOverlay();
        updateBoxCount();
        showToast('All redactions cleared on this page');
      }
    });

    // --- Signatures Placement & Management ---
    function renderSignatureElements() {
      // Remove existing signature DOM elements
      document.querySelectorAll('.sig-stamp-container').forEach(el => el.remove());

      const pageSigs = signatures[currentPageNum] || [];
      pageSigs.forEach(sig => {
        const el = document.createElement('div');
        el.className = 'sig-stamp-container';
        el.id = 'sig_' + sig.id;
        el.style.left = (sig.x * canvasStage.clientWidth) + 'px';
        el.style.top = (sig.y * canvasStage.clientHeight) + 'px';
        el.style.width = (sig.w * canvasStage.clientWidth) + 'px';
        el.style.height = (sig.h * canvasStage.clientHeight) + 'px';

        const img = document.createElement('img');
        img.src = sig.imgData;
        img.alt = 'Digital Signature Stamp';
        el.appendChild(img);

        // Delete button
        const delBtn = document.createElement('div');
        delBtn.className = 'sig-stamp-del';
        delBtn.textContent = '✕';
        delBtn.title = 'Remove Signature';
        delBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          signatures[currentPageNum] = signatures[currentPageNum].filter(s => s.id !== sig.id);
          renderSignatureElements();
          showToast('Signature removed');
        });
        el.appendChild(delBtn);

        // Resize handle
        const handle = document.createElement('div');
        handle.className = 'sig-stamp-handle';
        el.appendChild(handle);

        makeDraggableAndResizable(el, sig);
        canvasStage.appendChild(el);
      });
    }

    function makeDraggableAndResizable(el, sig) {
      let isDragging = false;
      let isResizing = false;
      let startMouseX = 0, startMouseY = 0;
      let startLeft = 0, startTop = 0, startW = 0, startH = 0;

      el.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('sig-stamp-del')) return;
        if (e.target.classList.contains('sig-stamp-handle')) {
          isResizing = true;
        } else {
          isDragging = true;
        }
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        startLeft = parseFloat(el.style.left) || 0;
        startTop = parseFloat(el.style.top) || 0;
        startW = parseFloat(el.style.width) || 120;
        startH = parseFloat(el.style.height) || 50;

        function onMouseMove(ev) {
          const dx = ev.clientX - startMouseX;
          const dy = ev.clientY - startMouseY;
          if (isDragging) {
            const newL = Math.max(0, Math.min(canvasStage.clientWidth - startW, startLeft + dx));
            const newT = Math.max(0, Math.min(canvasStage.clientHeight - startH, startTop + dy));
            el.style.left = newL + 'px';
            el.style.top = newT + 'px';
            sig.x = newL / canvasStage.clientWidth;
            sig.y = newT / canvasStage.clientHeight;
          } else if (isResizing) {
            const newW = Math.max(40, startW + dx);
            const newH = Math.max(20, startH + dy);
            el.style.width = newW + 'px';
            el.style.height = newH + 'px';
            sig.w = newW / canvasStage.clientWidth;
            sig.h = newH / canvasStage.clientHeight;
          }
        }

        function onMouseUp() {
          isDragging = false;
          isResizing = false;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    }

    // --- Page Navigation Controls ---
    btnPrevPage.addEventListener('click', () => {
      if (currentPageNum > 1) {
        currentPageNum--;
        pageNumInput.value = currentPageNum;
        renderCurrentPage();
      }
    });

    btnNextPage.addEventListener('click', () => {
      if (currentPageNum < totalPages) {
        currentPageNum++;
        pageNumInput.value = currentPageNum;
        renderCurrentPage();
      }
    });

    pageNumInput.addEventListener('change', () => {
      let val = parseInt(pageNumInput.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      if (val > totalPages) val = totalPages;
      currentPageNum = val;
      pageNumInput.value = currentPageNum;
      renderCurrentPage();
    });

    // Zoom Controls
    btnZoomIn.addEventListener('click', () => {
      if (zoomLevel < 2.5) {
        zoomLevel += 0.25;
        btnZoomReset.textContent = Math.round(zoomLevel * 100) + '%';
        renderCurrentPage();
      }
    });

    btnZoomOut.addEventListener('click', () => {
      if (zoomLevel > 0.5) {
        zoomLevel -= 0.25;
        btnZoomReset.textContent = Math.round(zoomLevel * 100) + '%';
        renderCurrentPage();
      }
    });

    btnZoomReset.addEventListener('click', () => {
      zoomLevel = 1.0;
      btnZoomReset.textContent = '100%';
      renderCurrentPage();
    });

    // Mode Toggle Buttons
    btnModeRedact.addEventListener('click', () => {
      currentMode = 'redact';
      btnModeRedact.classList.add('active');
      btnModeSign.classList.remove('active');
      drawCanvas.style.cursor = 'crosshair';
    });

    btnModeSign.addEventListener('click', () => {
      openSignatureModal();
    });

    // --- Signature Modal & Pad Logic ---
    function initSigPad() {
      sigCanvas = document.getElementById('sigCanvas');
      sigCtx = sigCanvas.getContext('2d');
      sigCanvas.width = 480;
      sigCanvas.height = 180;
      sigCtx.lineCap = 'round';
      sigCtx.lineJoin = 'round';
      sigCtx.lineWidth = 3;
      sigCtx.strokeStyle = sigInkColor;

      sigCanvas.addEventListener('mousedown', (e) => {
        isDrawingSig = true;
        const rect = sigCanvas.getBoundingClientRect();
        sigCtx.beginPath();
        sigCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
      });

      sigCanvas.addEventListener('mousemove', (e) => {
        if (!isDrawingSig) return;
        const rect = sigCanvas.getBoundingClientRect();
        sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        sigCtx.stroke();
      });

      function stopSig() { isDrawingSig = false; }
      sigCanvas.addEventListener('mouseup', stopSig);
      sigCanvas.addEventListener('mouseleave', stopSig);
    }

    function openSignatureModal() {
      sigModal.classList.add('open');
      if (!sigCanvas) initSigPad();
      else clearSigCanvas();
    }

    function closeSignatureModal() {
      sigModal.classList.remove('open');
    }

    function clearSigCanvas() {
      if (sigCtx) {
        sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
      }
    }

    btnCloseModal.addEventListener('click', closeSignatureModal);
    btnCancelSig.addEventListener('click', closeSignatureModal);

    tabBtnDraw.addEventListener('click', () => {
      sigMode = 'draw';
      tabBtnDraw.classList.add('active');
      tabBtnType.classList.remove('active');
      drawSigArea.style.display = 'block';
      typeSigArea.style.display = 'none';
    });

    tabBtnType.addEventListener('click', () => {
      sigMode = 'type';
      tabBtnType.classList.add('active');
      tabBtnDraw.classList.remove('active');
      drawSigArea.style.display = 'none';
      typeSigArea.style.display = 'flex';
      typeSigText.style.color = sigInkColor;
    });

    typeSigInput.addEventListener('input', () => {
      typeSigText.textContent = typeSigInput.value || 'John Doe';
    });

    inkButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        inkButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sigInkColor = btn.dataset.color;
        if (sigCtx) sigCtx.strokeStyle = sigInkColor;
        typeSigText.style.color = sigInkColor;
      });
    });

    btnClearSig.addEventListener('click', () => {
      if (sigMode === 'draw') {
        clearSigCanvas();
      } else {
        typeSigInput.value = '';
        typeSigText.textContent = 'John Doe';
      }
    });

    btnApplySig.addEventListener('click', () => {
      let dataUrl = '';
      if (sigMode === 'draw') {
        dataUrl = sigCanvas.toDataURL('image/png');
      } else {
        // Render typed signature text to an offscreen canvas
        const offCanvas = document.createElement('canvas');
        offCanvas.width = 400;
        offCanvas.height = 140;
        const offCtx = offCanvas.getContext('2d');
        offCtx.font = "bold 56px 'Caveat', cursive, sans-serif";
        offCtx.fillStyle = sigInkColor;
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';
        offCtx.fillText(typeSigInput.value || 'John Doe', 200, 70);
        dataUrl = offCanvas.toDataURL('image/png');
      }

      if (!signatures[currentPageNum]) signatures[currentPageNum] = [];
      const newSig = {
        id: Date.now(),
        imgData: dataUrl,
        x: 0.35,
        y: 0.65,
        w: 0.28,
        h: 0.12
      };
      signatures[currentPageNum].push(newSig);

      closeSignatureModal();
      renderSignatureElements();
      showToast('Signature placed. Drag or resize on document.');
    });

    // --- Export Engine (True Pixel Flattening via pdf-lib) ---
    btnExport.addEventListener('click', async () => {
      if (!currentPdfDoc || (!pdfRawBytes && !currentFile)) return;

      btnExport.disabled = true;
      const originalText = btnExport.innerHTML;
      btnExport.innerHTML = '<span class="pulse-dot"></span> Flattening & Baking...';

      try {
        const { PDFDocument } = PDFLib;
        const sourceBuffer = currentFile ? await currentFile.arrayBuffer() : pdfRawBytes;
        const originalDoc = await PDFDocument.load(sourceBuffer);
        const newPdfDoc = await PDFDocument.create();

        const total = currentPdfDoc.numPages;

        for (let pageNum = 1; pageNum <= total; pageNum++) {
          const hasRedactions = (redactions[pageNum] && redactions[pageNum].length > 0);
          const hasSigs = (signatures[pageNum] && signatures[pageNum].length > 0);

          if (hasRedactions || hasSigs) {
            // TRUE FLATTENING: Render to canvas, paint black rectangles & signatures, and embed raster image
            const page = await currentPdfDoc.getPage(pageNum);
            // Render at 2.0x scale (150-200 DPI equivalent) for print-ready clarity
            const viewport = page.getViewport({ scale: 2.0 });

            const offCanvas = document.createElement('canvas');
            offCanvas.width = viewport.width;
            offCanvas.height = viewport.height;
            const offCtx = offCanvas.getContext('2d');

            // Render vector PDF into pixels
            await page.render({ canvasContext: offCtx, viewport: viewport }).promise;

            // Paint permanent black redaction rectangles
            if (hasRedactions) {
              offCtx.fillStyle = '#000000';
              redactions[pageNum].forEach(box => {
                const rx = box.x * offCanvas.width;
                const ry = box.y * offCanvas.height;
                const rw = box.w * offCanvas.width;
                const rh = box.h * offCanvas.height;
                offCtx.fillRect(rx, ry, rw, rh);
              });
            }

            // Draw signatures
            if (hasSigs) {
              for (const sig of signatures[pageNum]) {
                const sigImg = new Image();
                await new Promise((res) => {
                  sigImg.onload = res;
                  sigImg.src = sig.imgData;
                });
                offCtx.drawImage(
                  sigImg,
                  sig.x * offCanvas.width,
                  sig.y * offCanvas.height,
                  sig.w * offCanvas.width,
                  sig.h * offCanvas.height
                );
              }
            }

            // Convert canvas to image bytes and embed
            const imgDataUrl = offCanvas.toDataURL('image/jpeg', 0.94);
            const imgBytes = await fetch(imgDataUrl).then(res => res.arrayBuffer());
            const embeddedImg = await newPdfDoc.embedJpg(imgBytes);

            const origPage = originalDoc.getPage(pageNum - 1);
            const { width, height } = origPage.getSize();
            const newPage = newPdfDoc.addPage([width, height]);

            newPage.drawImage(embeddedImg, {
              x: 0,
              y: 0,
              width: width,
              height: height
            });
          } else {
            // No redaction or signature on this page: copy original pristine vector page
            const [copiedPage] = await newPdfDoc.copyPages(originalDoc, [pageNum - 1]);
            newPdfDoc.addPage(copiedPage);
          }
        }

        const outPdfBytes = await newPdfDoc.save();
        const blob = new Blob([outPdfBytes], { type: 'application/pdf' });
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        const cleanName = originalFileName.replace(/\.pdf$/i, '');
        a.download = `sanitized_${cleanName}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);

        showToast('PDF redacted and downloaded securely!');
      } catch (err) {
        console.error('Export error:', err);
        showToast('Export error: ' + err.message);
      } finally {
        btnExport.disabled = false;
        btnExport.innerHTML = originalText;
      }
    });

    // --- Sample Document Generator ---
    btnSample.addEventListener('click', async () => {
      try {
        const { PDFDocument, rgb, StandardFonts } = PDFLib;
        const sampleDoc = await PDFDocument.create();
        const font = await sampleDoc.embedFont(StandardFonts.Helvetica);
        const fontBold = await sampleDoc.embedFont(StandardFonts.HelveticaBold);

        // Page 1: Confidential Commercial Agreement
        const page1 = sampleDoc.addPage([600, 750]);
        page1.drawText("MUTUAL NON-DISCLOSURE AGREEMENT", { x: 50, y: 690, size: 20, font: fontBold, color: rgb(0.1, 0.15, 0.3) });
        page1.drawText("CONFIDENTIAL & PRIVILEGED ATTORNEY-CLIENT WORK PRODUCT", { x: 50, y: 665, size: 9, font: fontBold, color: rgb(0.8, 0.2, 0.2) });

        page1.drawText("This Commercial Agreement is entered into by and between:", { x: 50, y: 625, size: 12, font });
        page1.drawText("Party A: Global Tech Ventures LLC (EIN: 12-3456789)", { x: 50, y: 595, size: 12, font: fontBold });
        page1.drawText("Lead Executive: Jane Doe (SSN: 000-12-3456)", { x: 50, y: 575, size: 12, font });
        page1.drawText("Banking Account Wire: 9876543210 (Routing: 110000000)", { x: 50, y: 555, size: 12, font });
        page1.drawText("Registered Address: 100 Enterprise Way, Suite 400, Silicon Valley, CA", { x: 50, y: 535, size: 12, font });

        page1.drawText("Party B: Quantum Security Systems Inc.", { x: 50, y: 495, size: 12, font: fontBold });
        page1.drawText("Authorized Representative: Alex Smith", { x: 50, y: 475, size: 12, font });

        page1.drawText("1. Confidential Information Scope and Non-Disclosure Obligations:", { x: 50, y: 435, size: 13, font: fontBold });
        page1.drawText("Each recipient agrees to safeguard all proprietary algorithms, client rosters,", { x: 50, y: 410, size: 11, font });
        page1.drawText("financial forecasts, and trade secrets disclosed during project evaluation.", { x: 50, y: 390, size: 11, font });

        page1.drawText("2. Electronic Signatures and Counterparts:", { x: 50, y: 350, size: 13, font: fontBold });
        page1.drawText("This document may be executed in client-side digital counterparts under ESIGN.", { x: 50, y: 325, size: 11, font });

        page1.drawText("SIGNATURES:", { x: 50, y: 240, size: 13, font: fontBold });
        page1.drawText("Party A Representative Signature: _______________________", { x: 50, y: 200, size: 12, font });
        page1.drawText("Date: September 29, 2026", { x: 50, y: 175, size: 11, font });

        // Page 2: Financial Exhibit
        const page2 = sampleDoc.addPage([600, 750]);
        page2.drawText("EXHIBIT A: AUDITED FINANCIAL DISCLOSURES", { x: 50, y: 690, size: 18, font: fontBold });
        page2.drawText("Total Contract Valuation: $4,500,000 USD", { x: 50, y: 640, size: 13, font: fontBold });
        page2.drawText("Credit Facility: Chase Commercial Line #445-9981-002", { x: 50, y: 610, size: 12, font });
        page2.drawText("Auditor Sign-off: Certified Public Accountant #881293", { x: 50, y: 580, size: 12, font });

        const bytes = await sampleDoc.save();
        currentFile = new File([bytes.buffer], 'sample_agreement.pdf', { type: 'application/pdf' });
        await loadPdfArrayBuffer(bytes.buffer, 'sample_agreement.pdf', currentFile);
      } catch (err) {
        console.error(err);
        showToast('Error generating sample PDF');
      }
    });

    // File input triggers
    btnBrowse.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        currentFile = file;
        const buffer = await file.arrayBuffer();
        await loadPdfArrayBuffer(buffer, file.name, file);
      }
    });

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));

    dropZone.addEventListener('drop', async (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file && (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf'))) {
        currentFile = file;
        const buffer = await file.arrayBuffer();
        await loadPdfArrayBuffer(buffer, file.name, file);
      } else {
        showToast('Please upload a valid PDF document.');
      }
    });

    btnChangeFile.addEventListener('click', () => {
      dropZone.style.display = 'block';
      workspace.style.display = 'none';
      fileInput.value = '';
      currentFile = null;
    });

    // --- Authoritative Language Controller ---
    const LANG_NAMES = {
      en: 'English',
      ar: 'العربية',
      fr: 'Français',
      it: 'Italiano'
    };

    function setLanguage(lang) {
      if (!I18N[lang]) lang = 'en';
      try { localStorage.setItem('vantorkit_lang', lang); } catch (e) {}

      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      const currentLangLabel = document.getElementById('currentLangLabel');
      if (currentLangLabel) currentLangLabel.textContent = LANG_NAMES[lang];

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const dict = I18N[lang];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key]) {
          if (el.tagName === 'INPUT') {
            el.placeholder = dict[key];
          } else {
            el.innerHTML = dict[key];
          }
        }
      });
    }

    function initLanguageDropdown() {
      const toggleBtn = document.getElementById('langToggleBtn');
      const menu = document.getElementById('langMenu');
      const dropdown = document.getElementById('langDropdown');

      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains('open');
        menu.classList.toggle('open', !isOpen);
        toggleBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });

      menu.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const selectedLang = opt.getAttribute('data-lang');
          setLanguage(selectedLang);
          menu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          menu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Initialize Language & Events
    document.addEventListener('DOMContentLoaded', () => {
      initLanguageDropdown();
      const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(savedLang);
    });