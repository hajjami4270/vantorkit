(function() {
    const I18N = {
      en: {
        langLabel: "English",
        backLink: "← Back to Tools",
        badgePill: "100% Client-Side • Zero Cloud Uploads • Instant Encoding",
        toolTitle: "Image to Base64 Converter",
        toolSubtitle: "Convert PNG, JPG, WebP, SVG, GIF, or ICO into embeddable Base64 Data URIs, HTML <img alt=\"Image preview\"> tags, and CSS background snippets locally in your browser.",
        dropzoneTitle: "Drag & Drop Image Here",
        dropzoneSub: "Supports PNG, JPG, WebP, SVG, GIF, ICO (Max recommended: 15MB)",
        btnBrowse: "Choose Image File",
        btnSample: "Load Sample Graphic",
        pasteHint: "Or paste directly from clipboard",
        metaDimensions: "Dimensions:",
        metaMime: "MIME:",
        metaOriginalSize: "File Size:",
        metaBase64Size: "Base64 Size:",
        metaOverhead: "+33.3% Overhead",
        tabDataUri: "Data URI",
        tabHtml: "HTML <img alt=\"Image preview\">",
        tabCss: "CSS Background",
        tabRaw: "Raw Base64",
        btnCopySnippet: "Copy Snippet",
        btnCopyLabel: "Copy Snippet",
        btnCopiedLabel: "Copied!",
        btnDownloadTxt: "Download as .txt",
        btnClearImage: "Clear Image",
        infoTitle: "Everything About Base64 Image Inlining",
        infoSubtitle: "Learn when and how to embed images directly into HTML and CSS stylesheets without external HTTP requests.",
        guide1Title: "Eliminate HTTP Requests",
        guide1Desc: "Embedding small graphics (icons, logos, bullets, avatars) directly into your HTML document or CSS bundle prevents separate DNS lookups and TCP handshakes, improving Largest Contentful Paint (LCP) on mobile networks.",
        guide2Title: "The +33% Overhead Math",
        guide2Desc: "Base64 converts 3 binary bytes (24 bits) into 4 printable ASCII characters (6 bits each). This produces a predictable 4:3 (~33.3%) file size increase. Keep Base64 inlining restricted to assets smaller than 10KB.",
        guide3Title: "Browser Caching Trade-off",
        guide3Desc: "When an image is inlined inside HTML, it re-downloads whenever the HTML reloads. If placed inside a versioned, cached CSS stylesheet, the image stays cached in browser storage across multiple visits.",
        faq1Q: "Are my images uploaded to any remote server?",
        faq1A: "Never. Conversion is performed 100% locally in your web browser memory via the HTML5 FileReader API. Your images, personal graphics, and proprietary designs never leave your machine.",
        faq2Q: "What formats can I encode with this tool?",
        faq2A: "The tool handles PNG, JPEG/JPG, WebP, SVG, GIF, and ICO image formats. It accurately senses the MIME type and provides compliant Data URIs for both HTML and CSS.",
        faq3Q: "How do I paste an image directly from clipboard?",
        faq3A: "Simply press Ctrl+V (or Cmd+V on macOS) anywhere on the page after copying an image or taking a screenshot. The tool immediately detects the image payload and produces your Base64 snippets.",
        faq4Q: "Can I decode Base64 back into an image or file?",
        faq4A: "Yes! You can use VantorKit's Base64 File Encoder & Decoder tool to paste any Base64 string and download the original binary image or document file instantly.",
        toastCopied: "Snippet copied to clipboard!",
        toastLoaded: "Image converted to Base64 successfully!",
        toastCleared: "Workspace cleared."
      },
      ar: {
        langLabel: "العربية",
        backLink: "الرجوع إلى الأدوات ←",
        badgePill: "100% محلي في المتصفح • بدون رفع للسحابة • ترميز فوري",
        toolTitle: "محول الصور إلى Base64",
        toolSubtitle: "حوّل صور PNG أو JPG أو WebP أو SVG أو GIF أو ICO إلى عناوين Data URI وروابط HTML <img alt=\"Image preview\"> وأكواد خلفيات CSS مباشرة داخل متصفحك.",
        dropzoneTitle: "اسحب الصورة وأفلتها هنا",
        dropzoneSub: "يدعم PNG و JPG و WebP و SVG و GIF و ICO (الحجم الموصى به: حتى 15 ميجابايت)",
        btnBrowse: "اختيار ملف الصورة",
        btnSample: "تحميل رسم توضيحي للتجربة",
        pasteHint: "أو الصق مباشرة من الحافظة",
        metaDimensions: "الأبعاد:",
        metaMime: "نوع MIME:",
        metaOriginalSize: "حجم الملف:",
        metaBase64Size: "حجم Base64:",
        metaOverhead: "+33.3% زيادة في الحجم",
        tabDataUri: "عنوان Data URI",
        tabHtml: "وسم HTML <img alt=\"Image preview\">",
        tabCss: "خلفية CSS",
        tabRaw: "سلسلة Base64 النقية",
        btnCopySnippet: "نسخ الكود",
        btnCopyLabel: "نسخ الكود",
        btnCopiedLabel: "تم النسخ!",
        btnDownloadTxt: "تنزيل كملف .txt",
        btnClearImage: "مسح الصورة",
        infoTitle: "كل ما تحتاج معرفته عن تضمين الصور بصيغة Base64",
        infoSubtitle: "تعرف على كيفية وتوقيت تضمين الصور مباشرة في ملفات HTML و CSS دون الحاجة لطلبات HTTP منفصلة.",
        guide1Title: "تخطي طلبات HTTP الإضافية",
        guide1Desc: "يؤدي تضمين الرسومات الصغيرة (الأيقونات والشعارات والصور الرمزية) مباشرة في مستند HTML أو حزمة CSS إلى تجنب استعلامات DNS المنفصلة ومصادقات TCP، مما يسرع ظهور المحتوى الرئيسي على الهواتف.",
        guide2Title: "معادلة زيادة الحجم بنسبة 33%",
        guide2Desc: "يحول ترميز Base64 كل 3 بايتات ثنائية إلى 4 أحرف ASCII قابلة للقراءة، مما يضيف زيادة بنسبة الثلث تقريباً (+33.3%). يُنصح بحصر التضمين على الملفات التي يقل حجمها عن 10 كيلوبايت.",
        guide3Title: "مفاضلة التخزين المؤقت",
        guide3Desc: "عندما تُضمن الصورة داخل HTML يتم تنزيلها مع كل تحديث للمستند. أما عند وضعها داخل ملف CSS مخزن مؤقتاً ومحمي بإصدار، فتبقى محفوظة في ذاكرة المتصفح عبر الزيارات المتكررة.",
        faq1Q: "هل تُرفع صوري إلى أي خوادم خارجية؟",
        faq1A: "مستحيل تماماً. تتم كل المعالجة داخل ذاكرة متصفحك مباشرة عبر واجهة HTML5 FileReader. صورك وتصميماتك لا تغادر جهازك أبداً.",
        faq2Q: "ما هي الصيغ المدعومة في هذا المحول؟",
        faq2A: "يدعم المحول صيغ PNG و JPG و WebP و SVG و GIF و ICO، مع تحديد نوع MIME الدقيق وتوفير أكواد صالحة لكل من HTML و CSS.",
        faq3Q: "كيف يمكنني لصق صورة من الحافظة مباشرة؟",
        faq3A: "ما عليك سوى الضغط على Ctrl+V (أو Cmd+V على نظام Mac) في أي مكان بالصفحة بعد نسخ لقطة شاشة أو صورة، وسيقوم المحول بقراءتها وتحويلها فوراً.",
        faq4Q: "هل يمكنني فك ترميز Base64 وإعادته لملف صورة؟",
        faq4A: "نعم! يمكنك استخدام أداة مشفر ومفكك Base64 في VantorKit للصق أي سلسلة وتنزيل ملف الصورة الأصلي على الفور.",
        toastCopied: "تم نسخ الكود إلى الحافظة بنجاح!",
        toastLoaded: "تم تحويل الصورة إلى Base64 بنجاح!",
        toastCleared: "تم تفريغ مساحة العمل."
      },
      fr: {
        langLabel: "Français",
        backLink: "← Retour aux outils",
        badgePill: "100% Côté Client • Zéro Téléversement Cloud • Encodage Instantané",
        toolTitle: "Convertisseur Image vers Base64",
        toolSubtitle: "Convertissez PNG, JPG, WebP, SVG, GIF ou ICO en Data URI Base64, balises HTML <img alt=\"Image preview\"> et arrière-plans CSS directement dans votre navigateur.",
        dropzoneTitle: "Glissez & Déposez votre image ici",
        dropzoneSub: "Prend en charge PNG, JPG, WebP, SVG, GIF, ICO (Max recommandé: 15 Mo)",
        btnBrowse: "Choisir une Image",
        btnSample: "Charger une Image de Démonstration",
        pasteHint: "Ou collez directement depuis le presse-papiers",
        metaDimensions: "Dimensions:",
        metaMime: "Type MIME:",
        metaOriginalSize: "Taille d'origine:",
        metaBase64Size: "Taille Base64:",
        metaOverhead: "+33.3% Surcharge",
        tabDataUri: "Data URI",
        tabHtml: "Balise HTML <img alt=\"Image preview\">",
        tabCss: "Arrière-plan CSS",
        tabRaw: "Base64 Brut",
        btnCopySnippet: "Copier l'extrait",
        btnCopyLabel: "Copier l'extrait",
        btnCopiedLabel: "Copié !",
        btnDownloadTxt: "Télécharger en .txt",
        btnClearImage: "Effacer l'image",
        infoTitle: "Tout Savoir sur l'Intégration d'Images en Base64",
        infoSubtitle: "Apprenez quand et comment intégrer des images directement dans vos pages HTML et feuilles de style CSS sans requêtes HTTP supplémentaires.",
        guide1Title: "Élimination des requêtes HTTP",
        guide1Desc: "Intégrer de petits éléments graphiques (icônes, logos, puces, avatars) directement dans vos documents HTML ou vos bundles CSS élimine les allers-retours réseau et accélère l'affichage initial.",
        guide2Title: "La surcharge de taille de 33%",
        guide2Desc: "Base64 encode 3 octets binaires en 4 caractères ASCII, entraînant une surcharge géométrique inhérente de 4:3 (~33.3%). Réservez l'inlining aux fichiers inférieurs à 10 Ko.",
        guide3Title: "Gestion du cache navigateur",
        guide3Desc: "Une image intégrée dans le HTML est rechargée à chaque chargement de page. Si elle est placée dans une feuille de style CSS mise en cache, elle reste en mémoire locale.",
        faq1Q: "Mes images sont-elles téléversées sur un serveur distant ?",
        faq1A: "Non, absolument pas. La conversion s'exécute à 100% dans la mémoire locale de votre navigateur via l'API HTML5 FileReader. Vos images ne quittent jamais votre machine.",
        faq2Q: "Quels formats d'images sont pris en charge ?",
        faq2A: "L'outil gère PNG, JPEG/JPG, WebP, SVG, GIF et ICO avec détection automatique du type MIME pour un code HTML et CSS conforme.",
        faq3Q: "Comment coller une image depuis le presse-papiers ?",
        faq3A: "Appuyez simplement sur Ctrl+V (ou Cmd+V sur Mac) n'importe où sur la page après avoir copié une image ou pris une capture d'écran.",
        faq4Q: "Puis-je reconvertir du Base64 en image téléchargeable ?",
        faq4A: "Oui ! Utilisez notre outil 'Encodeur et Décodeur de Fichiers Base64' pour coller du Base64 et réexporter le fichier binaire d'origine.",
        toastCopied: "Extrait copié dans le presse-papiers !",
        toastLoaded: "Image encodée en Base64 avec succès !",
        toastCleared: "Espace de travail réinitialisé."
      },
      it: {
        langLabel: "Italiano",
        backLink: "← Torna agli strumenti",
        badgePill: "100% Lato Client • Zero Caricamenti Cloud • Codifica Istantanea",
        toolTitle: "Convertitore da Immagine a Base64",
        toolSubtitle: "Converti PNG, JPG, WebP, SVG, GIF o ICO in Data URI Base64, tag HTML <img alt=\"Image preview\"> e sfondi CSS direttamente nel tuo browser.",
        dropzoneTitle: "Trascina e rilascia l'immagine qui",
        dropzoneSub: "Supporta PNG, JPG, WebP, SVG, GIF, ICO (Consigliato max: 15 MB)",
        btnBrowse: "Scegli File Immagine",
        btnSample: "Carica Grafica di Esempio",
        pasteHint: "Oppure incolla dagli appunti",
        metaDimensions: "Dimensioni:",
        metaMime: "Tipo MIME:",
        metaOriginalSize: "Dimensione File:",
        metaBase64Size: "Dimensione Base64:",
        metaOverhead: "+33.3% Sovraccarico",
        tabDataUri: "Data URI",
        tabHtml: "Tag HTML <img alt=\"Image preview\">",
        tabCss: "Sfondo CSS",
        tabRaw: "Base64 Grezzo",
        btnCopySnippet: "Copia Snippet",
        btnCopyLabel: "Copia Snippet",
        btnCopiedLabel: "Copiato!",
        btnDownloadTxt: "Scarica come .txt",
        btnClearImage: "Cancella Immagine",
        infoTitle: "Tutto sull'Incorporamento di Immagini in Base64",
        infoSubtitle: "Scopri quando e come incorporare immagini direttamente nei tuoi documenti HTML e fogli di stile CSS senza richieste HTTP separate.",
        guide1Title: "Elimina le richieste HTTP",
        guide1Desc: "L'incorporamento di piccole risorse grafiche (icone, loghi, avatar) direttamente nel codice HTML o CSS evita risoluzioni DNS separate e accelera il rendering su reti mobili.",
        guide2Title: "La matematica dell'aumento del 33%",
        guide2Desc: "Base64 codifica 3 byte binari in 4 caratteri ASCII, con un incremento strutturale del 33.3%. È consigliabile limitare l'inlining a file inferiori a 10 KB.",
        guide3Title: "Compromesso della cache del browser",
        guide3Desc: "Un'immagine inlined in HTML viene riscaricata a ogni ricaricamento. Se inserita in un foglio CSS con cache attiva, rimane memorizzata nel browser per le visite successive.",
        faq1Q: "Le mie immagini vengono caricate su server remoti?",
        faq1A: "Assolutamente no. Tutta l'elaborazione avviene al 100% nella memoria del tuo browser tramite l'API HTML5 FileReader. Le tue immagini restano private.",
        faq2Q: "Quali formati grafici sono supportati?",
        faq2A: "Il convertitore supporta PNG, JPG/JPEG, WebP, SVG, GIF e ICO con rilevamento automatico del MIME type.",
        faq3Q: "Come posso incollare un'immagine dagli appunti?",
        faq3A: "Premi semplicemente Ctrl+V (o Cmd+V su Mac) in qualunque punto della pagina dopo aver copiato uno screenshot o un'immagine.",
        faq4Q: "Posso decodificare una stringa Base64 in file immagine?",
        faq4A: "Certamente! Utilizza lo strumento 'Codificatore e Decodificatore File Base64' di VantorKit per incollare il codice e scaricare il file immagine originale.",
        toastCopied: "Snippet copiato negli appunti!",
        toastLoaded: "Immagine convertita in Base64 con successo!",
        toastCleared: "Area di lavoro svuotata."
      }
    };

    // DOM Elements
    const dropZone = document.getElementById('dropZone');
    const imageFileInput = document.getElementById('imageFileInput');
    const btnBrowse = document.getElementById('btnBrowse');
    const btnSample = document.getElementById('btnSample');
    const resultsWorkspace = document.getElementById('resultsWorkspace');
    const imgPreview = document.getElementById('imgPreview');
    const metaFileName = document.getElementById('metaFileName');
    const metaDimensions = document.getElementById('metaDimensions');
    const metaMime = document.getElementById('metaMime');
    const metaOriginalSize = document.getElementById('metaOriginalSize');
    const metaBase64Size = document.getElementById('metaBase64Size');
    const snippetOutput = document.getElementById('snippetOutput');
    const snippetCharCount = document.getElementById('snippetCharCount');
    const btnCopySnippet = document.getElementById('btnCopySnippet');
    const copyBtnLabel = document.getElementById('copyBtnLabel');
    const btnDownloadTxt = document.getElementById('btnDownloadTxt');
    const btnClearImage = document.getElementById('btnClearImage');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const toastBox = document.getElementById('toastBox');
    const toastMessage = document.getElementById('toastMessage');

    let currentFile = null;
    let currentDataUri = '';
    let currentRawBase64 = '';
    let currentMimeType = 'image/png';
    let currentWidth = 0;
    let currentHeight = 0;
    let currentTab = 'datauri';
    let activeLang = 'en';

    function formatBytes(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    let toastTimeout = null;
    function showToast(msg) {
      if (!toastBox) return;
      toastMessage.textContent = msg;
      toastBox.classList.add('show');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toastBox.classList.remove('show');
      }, 2600);
    }

    function generateSnippet(tab) {
      if (!currentDataUri) return '';
      switch (tab) {
        case 'datauri':
          return currentDataUri;
        case 'html': {
          const dims = (currentWidth && currentHeight) ? ` width="${currentWidth}" height="${currentHeight}"` : '';
          return `<img src="${currentDataUri}" alt="${currentFile ? currentFile.name : 'Embedded Image'}"${dims} />`;
        }
        case 'css':
          return `background-image: url('${currentDataUri}');\nbackground-size: contain;\nbackground-repeat: no-repeat;`;
        case 'raw':
          return currentRawBase64;
        default:
          return currentDataUri;
      }
    }

    function updateOutputView() {
      const code = generateSnippet(currentTab);
      snippetOutput.value = code;
      const len = code.length;
      snippetCharCount.textContent = len.toLocaleString() + ' characters';
    }

    function processImageFile(file) {
      if (!file) return;
      currentFile = file;

      const reader = new FileReader();
      reader.onload = function(e) {
        currentDataUri = e.target.result;
        const commaIdx = currentDataUri.indexOf(',');
        currentRawBase64 = commaIdx !== -1 ? currentDataUri.slice(commaIdx + 1) : currentDataUri;
        currentMimeType = file.type || 'image/png';

        // Load into Image element to determine dimensions
        const img = new Image();
        img.onload = function() {
          currentWidth = img.naturalWidth || img.width;
          currentHeight = img.naturalHeight || img.height;

          // Update UI
          imgPreview.src = currentDataUri;
          metaFileName.textContent = file.name || 'image.png';
          metaDimensions.textContent = `${currentWidth} × ${currentHeight} px`;
          metaMime.textContent = currentMimeType;
          metaOriginalSize.textContent = formatBytes(file.size);
          const base64Bytes = Math.round(currentRawBase64.length * 0.75);
          metaBase64Size.textContent = formatBytes(currentRawBase64.length);

          updateOutputView();
          resultsWorkspace.classList.add('active');
          dropZone.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          showToast(I18N[activeLang]?.toastLoaded || 'Image converted successfully!');
        };
        img.src = currentDataUri;
      };
      reader.readAsDataURL(file);
    }

    // Load SVG/Canvas sample graphic
    function loadSampleGraphic() {
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');

      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, 400, 400);
      grad.addColorStop(0, '#1e293b');
      grad.addColorStop(0.5, '#0f172a');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 400, 400);

      // Glowing circle
      const radial = ctx.createRadialGradient(200, 200, 10, 200, 200, 150);
      radial.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
      radial.addColorStop(0.5, 'rgba(168, 85, 247, 0.4)');
      radial.addColorStop(1, 'transparent');
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(200, 200, 150, 0, Math.PI * 2);
      ctx.fill();

      // Geometric badge
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('VantorKit', 200, 185);

      ctx.fillStyle = '#60a5fa';
      ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('100% Client-Side Graphic', 200, 230);

      canvas.toBlob(function(blob) {
        const file = new File([blob], 'vantorkit-sample.png', { type: 'image/png' });
        processImageFile(file);
      }, 'image/png');
    }

    // Clear Workspace
    function clearWorkspace() {
      currentFile = null;
      currentDataUri = '';
      currentRawBase64 = '';
      currentWidth = 0;
      currentHeight = 0;
      imgPreview.src = '';
      snippetOutput.value = '';
      snippetCharCount.textContent = '0 characters';
      resultsWorkspace.classList.remove('active');
      imageFileInput.value = '';
      showToast(I18N[activeLang]?.toastCleared || 'Workspace cleared.');
    }

    // Tab buttons
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.getAttribute('data-tab');
        updateOutputView();
      });
    });

    // Copy action
    btnCopySnippet.addEventListener('click', () => {
      if (!snippetOutput.value) return;
      navigator.clipboard.writeText(snippetOutput.value).then(() => {
        btnCopySnippet.classList.add('copied');
        copyBtnLabel.textContent = I18N[activeLang]?.btnCopiedLabel || 'Copied!';
        showToast(I18N[activeLang]?.toastCopied || 'Snippet copied to clipboard!');
        setTimeout(() => {
          btnCopySnippet.classList.remove('copied');
          copyBtnLabel.textContent = I18N[activeLang]?.btnCopyLabel || 'Copy Snippet';
        }, 2200);
      }).catch(() => {
        snippetOutput.select();
        document.execCommand('copy');
        showToast(I18N[activeLang]?.toastCopied || 'Snippet copied to clipboard!');
      });
    });

    // Download .txt
    btnDownloadTxt.addEventListener('click', () => {
      if (!snippetOutput.value) return;
      const blob = new Blob([snippetOutput.value], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const baseName = currentFile ? currentFile.name.replace(/\.[^/.]+$/, "") : "image";
      a.href = url;
      a.download = `${baseName}-base64-${currentTab}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    });

    // Clear Button
    btnClearImage.addEventListener('click', clearWorkspace);

    // File Input & Drag and Drop Events
    btnBrowse.addEventListener('click', (e) => {
      e.stopPropagation();
      imageFileInput.click();
    });
    btnSample.addEventListener('click', (e) => {
      e.stopPropagation();
      loadSampleGraphic();
    });
    dropZone.addEventListener('click', () => {
      imageFileInput.click();
    });

    imageFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        processImageFile(e.target.files[0]);
      }
    });

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
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files[0]) {
        processImageFile(dt.files[0]);
      }
    });

    // Clipboard Paste Listener (Ctrl+V / Cmd+V)
    window.addEventListener('paste', (e) => {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const pastedFile = new File([blob], 'pasted-graphic.png', { type: blob.type || 'image/png' });
            processImageFile(pastedFile);
            break;
          }
        }
      }
    });

    // i18n Translation Switcher
    function setLanguage(lang) {
      if (!I18N[lang]) lang = 'en';
      activeLang = lang;
      const dict = I18N[lang];

      // Update static elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      // Update snippet tabs labels
      updateOutputView();
    }

    // Expose setLanguage globally for standardized dropdown sync
    window.setLanguage = setLanguage;

    // Initialization with stored language
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
        "title": "Image to Base64 Converter – Data URI & CSS Code Maker",
        "desc": "Convert PNG, JPG, and SVG graphics into copyable Data URIs and background-image CSS. String generation operates locally in browser sandbox memory."
    },
    "ar": {
        "title": "تحويل الصور إلى Base64 – كود Data URI وأكواد CSS",
        "desc": "حول صور PNG وJPG وSVG إلى روابط Data URI وشفرات CSS جاهزة للنسخ المباشر. يتم توليد الأكواد محلياً في متصفحك دون رفع أي صورة إلى الإنترنت."
    },
    "fr": {
        "title": "Convertisseur Image en Base64 – Data URI & CSS Intégrable",
        "desc": "Transformez vos visuels en chaînes Data URI et règles CSS prêtes à coller. Génération de code réalisée dans le bac à sable de votre navigateur."
    },
    "it": {
        "title": "Convertitore Immagini in Base64 – Codice Data URI e CSS",
        "desc": "Converti grafiche PNG e JPG in Data URI e background CSS pronti all'uso. La codifica si esegue nel tuo browser salvaguardando i tuoi dati."
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