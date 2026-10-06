/* ==========================================================================
       VantorKit Base64 File Encoder & Decoder Engine
       100% Client-Side FileReader & Blob Architecture
       ========================================================================== */

    const TRANSLATIONS = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "Base64 File Encoder & Decoder",
        toolSubtitle: "Encode any file to Base64, Data URI, HTML embed, or CSS snippet, or decode Base64 back into its original binary file locally in your browser.",
        tabEncode: "File to Base64 (Encode)",
        tabDecode: "Base64 to File (Decode)",
        dropTitle: "Drag & drop any file to encode, or browse",
        dropSubtitle: "PDF, PNG, JPG, SVG, WebP, MP3, ZIP, Documents • Up to 50 MB • 100% In-Browser",
        btnBrowse: "Choose File",
        btnLoadSample: "Test Demo File",
        lblOutputFormat: "Encoded Payload Format:",
        btnCopy: "Copy to Clipboard",
        btnDownloadTxt: "Download as .txt",
        btnClear: "Clear",
        decodeTitle: "Paste Base64 String or Data URI",
        btnPaste: "Paste from Clipboard",
        btnDemoBase64: "Try Demo Data",
        btnDownloadFile: "Download File",
        guideHeading: "Understanding Base64 Encoding & Data URIs",
        guideSubheading: "Learn how binary data is serialized into text for web transports, email attachments, and CSS inlining.",
        g1Title: "RFC 4648 Binary-to-Text",
        g1Desc: "Base64 converts binary streams into a 64-character alphabet (A-Z, a-z, 0-9, +, /). Groups of 24 bits (3 bytes) are divided into four 6-bit integers, making raw binary safe to transmit across text-only protocols like SMTP, JSON APIs, and HTML.",
        g2Title: "When to Use Data URIs",
        g2Desc: "Data URIs eliminate extra HTTP requests by embedding small icons, favicons, or SVGs directly into HTML or CSS stylesheets. While convenient, the +33% size overhead means large media (videos, large photos) should generally remain external files.",
        g3Title: "Zero-Telemetry Privacy",
        g3Desc: "Confidential private keys, legal contracts, certificates, and personal pictures should never be uploaded to third-party web servers. VantorKit processes all binary conversions entirely within your browser's local sandbox memory.",
        faq1Q: "Why do Base64 strings end with '=' signs?",
        faq1A: "The '=' character acts as padding. Because Base64 groups bytes into triplets, if an input file has 1 or 2 leftover bytes at the end, padding characters ('=' or '==') are appended to complete the final 4-character block.",
        faq2Q: "What is the maximum file size I can encode?",
        faq2A: "Because VantorKit executes purely in browser memory, you can comfortably encode files up to 50 MB depending on available RAM. The tool utilizes fast streaming FileReader APIs to prevent tab freezing.",
        faq3Q: "How does autodetection identify file types without a header?",
        faq3A: "Every file format has unique initial signature bytes ('magic numbers'). For instance, PDFs begin with '%PDF', PNGs with '0x89 0x50 0x4E 0x47', and JPEGs with '0xFF 0xD8 0xFF'. VantorKit reads these bytes to identify the exact format.",
        faq4Q: "Can I convert Base64 back into an audio or video file?",
        faq4A: "Yes! Simply switch to the 'Base64 to File (Decode)' tab, paste your string, and click 'Download File'. The tool will automatically detect the media format and provide an instant playback preview.",
        toastCopied: "Base64 payload copied to clipboard!",
        toastTxtDownloaded: "Base64 text file downloaded!",
        toastFileDownloaded: "Decoded file downloaded successfully!",
        toastCleared: "Workspace cleared."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "← العودة إلى الأدوات",
        badgePill: "على جهازك 100% • خصوصية تامة • دون خوادم",
        toolTitle: "محول ومفكك تشفير ملفات Base64",
        toolSubtitle: "تحويل أي ملف إلى نصوص Base64 و Data URI، أو استرجاع الملفات الأصلية من كود Base64 محلياً داخل المتصفح بأمان تام.",
        tabEncode: "تحويل ملف إلى Base64 (تشفير)",
        tabDecode: "فك Base64 إلى ملف (استرجاع)",
        dropTitle: "اسحب أي ملف هنا للتحويل، أو تصفح جهازك",
        dropSubtitle: "ملفات PDF، صور، صوتيات، مستندات، أرشيف مضغوط • حتى 50 ميغابايت • داخل المتصفح",
        btnBrowse: "اختيار ملف",
        btnLoadSample: "تجربة ملف تجريبي",
        lblOutputFormat: "تنسيق المخرجات المشفرة:",
        btnCopy: "نسخ إلى الحافظة",
        btnDownloadTxt: "تحميل كملف نصي .txt",
        btnClear: "مسح",
        decodeTitle: "الصق نص Base64 أو Data URI",
        btnPaste: "لصق من الحافظة",
        btnDemoBase64: "تجربة بيانات تجريبية",
        btnDownloadFile: "تحميل الملف المسترجع",
        guideHeading: "دليل تشفير Base64 وروابط Data URI",
        guideSubheading: "تعرف على كيفية تحويل البيانات الثنائية إلى نصوص برمجية للاستخدام في تطوير الويب والبريد الإلكتروني.",
        g1Title: "معيار RFC 4648 الدولي",
        g1Desc: "يقوم Base64 بتحويل البايتات الثنائية إلى أبجدية مكونة من 64 حرفاً آمناً لنقل الملفات عبر بروتوكولات النصوص مثل JSON و HTML دون تلف البيانات.",
        g2Title: "متى تستخدم Data URI في الويب؟",
        g2Desc: "تساعد في تضمين الأيقونات والصور الصغيرة مباشرة داخل كود CSS أو HTML دون إرسال طلبات HTTP إضافية، مع مراعاة زيادة الحجم بنسبة 33%.",
        g3Title: "خصوصية تامة دون إرسال بيانات",
        g3Desc: "المستندات الحساسة والصور الخاصة لا يجب أن ترفع على خوادم أطراف ثالثة. تجري كل العمليات محلياً داخل ذاكرة متصفحك.",
        faq1Q: "لماذا تنتهي نصوص Base64 بعلامة '=' أحياناً؟",
        faq1A: "تستخدم علامة '=' كحشو تعويضي لإكمال البلوكات عند وجود بايتات فردية في نهاية الملف.",
        faq2Q: "ما هو الحجم الأقصى المتاح للتحويل؟",
        faq2A: "يمكنك تحويل ملفات تصل إلى 50 ميغابايت بسلاسة تامة اعتماداً على ذاكرة جهازك.",
        faq3Q: "كيف يتم اكتشاف نوع الملف تلقائياً؟",
        faq3A: "يتم فحص البايتات السحرية في مقدمة الملف مثل توقيع %PDF لملفات PDF وتواقيع PNG و JPEG المعروفة.",
        faq4Q: "هل يمكن استرجاع ملفات صوتية ومستندات؟",
        faq4A: "نعم، بمجرد لصق الكود سيتعرف النظام على نوع الملف فورياً ويتيح لك تحميله ومعاينته.",
        toastCopied: "تم نسخ كود Base64 إلى الحافظة بنجاح!",
        toastTxtDownloaded: "تم تحميل الملف النصي بنجاح!",
        toastFileDownloaded: "تم تحميل الملف المسترجع بنجاح!",
        toastCleared: "تم مسح مساحة العمل."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "← Retour aux Outils",
        badgePill: "Côté Client • Confidentialité Totale • Zéro Log",
        toolTitle: "Encodeur & Décodeur de Fichiers Base64",
        toolSubtitle: "Encodez n'importe quel fichier en Base64 et Data URI, ou décodez des chaînes Base64 en fichiers binaires originaux localement dans votre navigateur.",
        tabEncode: "Fichier vers Base64 (Encoder)",
        tabDecode: "Base64 vers Fichier (Décoder)",
        dropTitle: "Glissez un fichier à encoder ou parcourez",
        dropSubtitle: "PDF, PNG, JPG, SVG, Audio, ZIP, Documents • Jusqu'à 50 Mo • 100% en local",
        btnBrowse: "Choisir un fichier",
        btnLoadSample: "Tester fichier démo",
        lblOutputFormat: "Format du résultat encodé :",
        btnCopy: "Copier dans le Presse-Papier",
        btnDownloadTxt: "Télécharger en .txt",
        btnClear: "Effacer",
        decodeTitle: "Collez la chaîne Base64 ou Data URI",
        btnPaste: "Coller depuis le Presse-Papier",
        btnDemoBase64: "Tester données démo",
        btnDownloadFile: "Télécharger le Fichier",
        guideHeading: "Comprendre l'Encodage Base64 & les Data URI",
        guideSubheading: "Découvrez comment les données binaires sont sérialisées en texte pour le web, les API et les feuilles de style.",
        g1Title: "Standard Binaire-vers-Texte RFC 4648",
        g1Desc: "Base64 convertit des flux binaires en un alphabet de 64 caractères ASCII. 3 octets binaires sont traduits en 4 caractères lisibles, garantissant un transport sans corruption.",
        g2Title: "Quand utiliser les Data URI ?",
        g2Desc: "Idéal pour intégrer de petites icônes ou images directement dans le HTML/CSS, évitant ainsi des requêtes HTTP réseau supplémentaires.",
        g3Title: "Confidentialité 100% Côté Client",
        g3Desc: "Vos documents confidentiels ne transitent jamais sur des serveurs distants. Tout est traité dans la mémoire locale de votre navigateur.",
        faq1Q: "Pourquoi le Base64 se termine par des signes '=' ?",
        faq1A: "Le signe '=' sert de remplissage pour aligner les blocs sur des multiples de 4 caractères lorsque la taille du fichier n'est pas un multiple de 3 octets.",
        faq2Q: "Quelle taille de fichier maximale puis-je traiter ?",
        faq2A: "L'outil gère facilement des fichiers allant jusqu'à 50 Mo selon la mémoire RAM disponible sur votre machine.",
        faq3Q: "Comment l'outil devine-t-il le format du fichier ?",
        faq3A: "L'outil analyse les octets de signature magique en début de flux binaire (par ex. %PDF, \x89PNG, \xFF\xD8\xFF).",
        faq4Q: "Puis-je restaurer des fichiers audio ou zip ?",
        faq4A: "Oui, collez simplement votre chaîne Base64 et cliquez sur 'Télécharger le Fichier'.",
        toastCopied: "Données Base64 copiées dans le presse-papier !",
        toastTxtDownloaded: "Fichier texte téléchargé avec succès !",
        toastFileDownloaded: "Fichier décodé téléchargé avec succès !",
        toastCleared: "Espace de travail réinitialisé."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "← Torna agli Strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Codificatore & Decodificatore File Base64",
        toolSubtitle: "Codifica qualsiasi file in Base64 e Data URI o decodifica stringhe Base64 nei rispettivi file binari originali direttamente nel tuo browser.",
        tabEncode: "Da File a Base64 (Codifica)",
        tabDecode: "Da Base64 a File (Decodifica)",
        dropTitle: "Trascina qui il file da codificare o sfoglia",
        dropSubtitle: "PDF, immagini, audio, ZIP, documenti • Fino a 50 MB • 100% nel Browser",
        btnBrowse: "Scegli File",
        btnLoadSample: "File Demo di Prova",
        lblOutputFormat: "Formato Stringa Codificata:",
        btnCopy: "Copia negli Appunti",
        btnDownloadTxt: "Scarica come .txt",
        btnClear: "Cancella",
        decodeTitle: "Incolla Stringa Base64 o Data URI",
        btnPaste: "Incolla dagli Appunti",
        btnDemoBase64: "Carica Dati Demo",
        btnDownloadFile: "Scarica File",
        guideHeading: "Guida alla Codifica Base64 & Data URI",
        guideSubheading: "Scopri come i dati binari vengono convertiti in testo per il web e le applicazioni moderne.",
        g1Title: "Standard RFC 4648",
        g1Desc: "La codifica Base64 mappa 3 byte binari in 4 caratteri ASCII stampabili per consentire la trasmissione sicura di file multimediali via testo.",
        g2Title: "Vantaggi delle Data URI",
        g2Desc: "Consentono di incorporare icone e immagini direttamente nell'HTML o nei file CSS, riducendo le richieste di rete al server.",
        g3Title: "Riservatezza Assoluta nel Browser",
        g3Desc: "I tuoi file non vengono mai caricati su server remoti. Tutte le conversioni avvengono nella sandbox del browser.",
        faq1Q: "Perché molte stringhe terminano con '='?",
        faq1A: "Il carattere '=' funge da riempimento per completare il blocco di 4 caratteri nel caso di byte rimanenti.",
        faq2Q: "Qual è la dimensione massima supportata?",
        faq2A: "L'applicazione supporta agevolmente file fino a 50 MB a seconda della memoria del dispositivo.",
        faq3Q: "Come viene rilevata l'estensione del file?",
        faq3A: "L'algoritmo analizza i 'magic bytes' iniziali del file binario ricostruito per determinare il formato esatto.",
        faq4Q: "Posso riconvertire file audio o compressi?",
        faq4A: "Certamente, incolla la stringa Base64 e scarica istantaneamente il file ripristinato.",
        toastCopied: "Codice Base64 copiato negli appunti!",
        toastTxtDownloaded: "File di testo scaricato!",
        toastFileDownloaded: "File decodificato scaricato con successo!",
        toastCleared: "Spazio di lavoro azzerato."
      }
    };

    let currentLang = 'en';
    let currentMode = 'encode'; // 'encode' or 'decode'
    let currentFormat = 'raw'; // 'raw', 'datauri', 'html', 'css'

    // State for Encoded File
    let encodedState = {
      file: null,
      rawBase64: '',
      dataUri: '',
      mimeType: '',
      name: '',
      size: 0
    };

    // State for Decoded File
    let decodedState = {
      blob: null,
      mimeType: 'application/octet-stream',
      extension: 'bin',
      filename: 'decoded-file.bin',
      size: 0,
      previewUrl: null
    };

    function initLanguage() {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && TRANSLATIONS[stored]) {
        currentLang = stored;
      }
      applyLanguage(currentLang);

      const toggleBtn = document.getElementById('langToggleBtn');
      const menu = document.getElementById('langMenu');
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang && TRANSLATIONS[lang]) {
            currentLang = lang;
            localStorage.setItem('vantorkit_lang', lang);
            applyLanguage(lang);
            toggleBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
          }
        });
      });
    }

    function applyLanguage(lang) {
      window.applyLanguage = applyLanguage;
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const html = document.getElementById('htmlRoot');
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const langNames = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      document.getElementById('currentLangLabel').textContent = langNames[lang] || 'English';

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    }

    function showToast(message) {
      const toast = document.getElementById('toastBox');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }

    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    /* ==========================================================================
       Mode 1: File to Base64 (Encode) Logic
       ========================================================================== */

    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const btnBrowse = document.getElementById('btnBrowse');
    const btnLoadSampleFile = document.getElementById('btnLoadSampleFile');
    const metaBar = document.getElementById('metaBar');
    const outputCard = document.getElementById('outputCard');
    const dispFileName = document.getElementById('dispFileName');
    const dispFileType = document.getElementById('dispFileType');
    const dispFileSize = document.getElementById('dispFileSize');
    const dispEncodedSize = document.getElementById('dispEncodedSize');
    const txtEncodedOutput = document.getElementById('txtEncodedOutput');
    const txtLengthCounter = document.getElementById('txtLengthCounter');
    const encodePreviewBox = document.getElementById('encodePreviewBox');
    const previewMediaContainer = document.getElementById('previewMediaContainer');

    function setupEncodeListeners() {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });

      dropZone.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          processFileToEncode(e.target.files[0]);
          fileInput.value = '';
        }
      });

      ['dragenter', 'dragover'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('dragover');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          processFileToEncode(e.dataTransfer.files[0]);
        }
      });

      // Sample Demo File Generator (Vibrant SVG Logo Badge)
      btnLoadSampleFile.addEventListener('click', (e) => {
        e.stopPropagation();
        const demoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" rx="20" fill="url(#g1)"/>
  <circle cx="200" cy="90" r="48" fill="url(#g2)" opacity="0.85"/>
  <polygon points="180,65 225,90 180,115" fill="#ffffff"/>
  <text x="200" y="170" fill="#ffffff" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle">VantorKit Base64 Demo</text>
  <text x="200" y="200" fill="#94a3b8" font-size="14" font-family="sans-serif" text-anchor="middle">100% In-Browser Binary Encoder</text>
</svg>`;
        const file = new File([demoSvg], 'vantorkit-demo-badge.svg', { type: 'image/svg+xml' });
        processFileToEncode(file);
      });

      // Output Format Toggles
      document.querySelectorAll('.format-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.format-pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFormat = btn.getAttribute('data-fmt');
          updateEncodedTextarea();
        });
      });

      // Copy Button
      document.getElementById('btnCopyEncoded').addEventListener('click', () => {
        if (!txtEncodedOutput.value) return;
        navigator.clipboard.writeText(txtEncodedOutput.value).then(() => {
          showToast(TRANSLATIONS[currentLang]?.toastCopied || 'Base64 copied to clipboard!');
        }).catch(() => {
          showToast('Failed to copy to clipboard.');
        });
      });

      // Download as .txt Button
      document.getElementById('btnDownloadTxt').addEventListener('click', () => {
        if (!txtEncodedOutput.value) return;
        const blob = new Blob([txtEncodedOutput.value], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const base = (encodedState.name || 'file').replace(/\.[^/.]+$/, "");
        a.download = `${base}-base64-${currentFormat}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        showToast(TRANSLATIONS[currentLang]?.toastTxtDownloaded || 'Text file downloaded!');
      });

      // Clear Button
      document.getElementById('btnClearEncode').addEventListener('click', () => {
        encodedState = { file: null, rawBase64: '', dataUri: '', mimeType: '', name: '', size: 0 };
        metaBar.style.display = 'none';
        outputCard.style.display = 'none';
        encodePreviewBox.classList.remove('active');
        previewMediaContainer.innerHTML = '';
        txtEncodedOutput.value = '';
        showToast(TRANSLATIONS[currentLang]?.toastCleared || 'Cleared.');
      });
    }

    function processFileToEncode(file) {
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const commaIdx = dataUrl.indexOf(',');
        const rawBase64 = commaIdx !== -1 ? dataUrl.slice(commaIdx + 1) : dataUrl;
        const mimeType = file.type || 'application/octet-stream';

        encodedState = {
          file,
          rawBase64,
          dataUri: dataUrl,
          mimeType,
          name: file.name,
          size: file.size
        };

        // Update UI
        dispFileName.textContent = file.name;
        dispFileType.textContent = mimeType;
        dispFileSize.textContent = formatBytes(file.size);
        dispEncodedSize.textContent = `${formatBytes(rawBase64.length)} Base64`;

        metaBar.style.display = 'flex';
        outputCard.style.display = 'flex';

        updateEncodedTextarea();
        renderEncodePreview(dataUrl, mimeType, file.name);
      };

      reader.readAsDataURL(file);
    }

    function updateEncodedTextarea() {
      let outputText = '';
      const mime = encodedState.mimeType;
      const dataUri = encodedState.dataUri;
      const raw = encodedState.rawBase64;
      const name = encodedState.name;

      if (currentFormat === 'raw') {
        outputText = raw;
      } else if (currentFormat === 'datauri') {
        outputText = dataUri;
      } else if (currentFormat === 'html') {
        if (mime.startsWith('image/')) {
          outputText = `<img src="${dataUri}" alt="${name}" />`;
        } else if (mime === 'application/pdf') {
          outputText = `<embed src="${dataUri}" type="application/pdf" width="100%" height="600px" />`;
        } else if (mime.startsWith('audio/')) {
          outputText = `<audio controls src="${dataUri}"></audio>`;
        } else {
          outputText = `<a href="${dataUri}" download="${name}">Download ${name}</a>`;
        }
      } else if (currentFormat === 'css') {
        outputText = `background-image: url("${dataUri}");`;
      }

      txtEncodedOutput.value = outputText;
      txtLengthCounter.textContent = `${outputText.length.toLocaleString()} characters`;
    }

    function renderEncodePreview(dataUrl, mime, name) {
      previewMediaContainer.innerHTML = '';
      if (mime.startsWith('image/')) {
        encodePreviewBox.classList.add('active');
        const img = document.createElement('img');
        img.className = 'preview-img';
        img.src = dataUrl;
        img.alt = name;
        previewMediaContainer.appendChild(img);
      } else if (mime.startsWith('audio/')) {
        encodePreviewBox.classList.add('active');
        const audio = document.createElement('audio');
        audio.className = 'preview-audio';
        audio.controls = true;
        audio.src = dataUrl;
        previewMediaContainer.appendChild(audio);
      } else if (mime === 'application/pdf') {
        encodePreviewBox.classList.add('active');
        previewMediaContainer.innerHTML = `<span style="font-size:.88rem;color:#60a5fa;font-weight:700;">📄 PDF Document Ready (${formatBytes(encodedState.size)})</span>`;
      } else {
        encodePreviewBox.classList.remove('active');
      }
    }

    /* ==========================================================================
       Mode 2: Base64 to File (Decode) Logic & Magic Byte Detection
       ========================================================================== */

    const txtDecodeInput = document.getElementById('txtDecodeInput');
    const decodeLengthCounter = document.getElementById('decodeLengthCounter');
    const decodeDetectionStatus = document.getElementById('decodeDetectionStatus');
    const decodedResultCard = document.getElementById('decodedResultCard');
    const dispDecodedType = document.getElementById('dispDecodedType');
    const dispDecodedSize = document.getElementById('dispDecodedSize');
    const inputDecodedFilename = document.getElementById('inputDecodedFilename');
    const btnDownloadDecoded = document.getElementById('btnDownloadDecoded');
    const decodeMediaContainer = document.getElementById('decodeMediaContainer');

    function setupDecodeListeners() {
      txtDecodeInput.addEventListener('input', () => {
        handleBase64Decode(txtDecodeInput.value.trim());
      });

      document.getElementById('btnPasteClipboard').addEventListener('click', async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text) {
            txtDecodeInput.value = text;
            handleBase64Decode(text.trim());
            showToast('Pasted from clipboard!');
          }
        } catch (e) {
          showToast('Clipboard access denied.');
        }
      });

      // Sample Demo Base64 (A small high-res inline WebP/PNG star graphic)
      document.getElementById('btnLoadDemoBase64').addEventListener('click', () => {
        // Transparent PNG star icon
        const demoDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFmUlEQVR4nO2ba2hcVRTHf+fmzkzazCQmaZo2tWla66ONWquI1qpFhSp+EUEfFL+p+EERFUEfVBC/KEiLgr5QBAXFRxVERFQUrIK21mptra21TW3TvJtknp17fDizs5uZmbyc3XbT7L8QcpMz59xzf/ecf5/n3jMQ";
        txtDecodeInput.value = demoDataUri;
        handleBase64Decode(demoDataUri);
      });

      btnDownloadDecoded.addEventListener('click', () => {
        if (!decodedState.blob) return;
        const filename = inputDecodedFilename.value.trim() || `decoded-file.${decodedState.extension}`;
        const url = URL.createObjectURL(decodedState.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        showToast(TRANSLATIONS[currentLang]?.toastFileDownloaded || 'File downloaded!');
      });
    }

    function handleBase64Decode(str) {
      if (!str) {
        decodedResultCard.classList.remove('active');
        decodeLengthCounter.textContent = '0 characters';
        decodeDetectionStatus.textContent = 'Awaiting input...';
        decodeMediaContainer.innerHTML = '';
        return;
      }

      decodeLengthCounter.textContent = `${str.length.toLocaleString()} characters`;

      let mimeType = '';
      let rawBase64 = str;

      // 1. Check for Data URI prefix
      const matchDataUri = str.match(/^data:([^;]+);base64,(.+)$/s);
      if (matchDataUri) {
        mimeType = matchDataUri[1].toLowerCase();
        rawBase64 = matchDataUri[2];
      } else {
        // Strip any whitespace or line breaks
        rawBase64 = str.replace(/\s+/g, '');
      }

      try {
        // Decode base64 to binary byte array
        const binaryString = atob(rawBase64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        // 2. If MIME type not in data URI header, detect via magic bytes
        if (!mimeType) {
          mimeType = detectMimeFromBytes(bytes);
        }

        const ext = getExtensionFromMime(mimeType);
        const blob = new Blob([bytes], { type: mimeType });

        if (decodedState.previewUrl) {
          URL.revokeObjectURL(decodedState.previewUrl);
        }
        const previewUrl = URL.createObjectURL(blob);

        decodedState = {
          blob,
          mimeType,
          extension: ext,
          filename: `decoded-file.${ext}`,
          size: len,
          previewUrl
        };

        // Update UI
        dispDecodedType.textContent = `Format: ${mimeType.toUpperCase()} (.${ext})`;
        dispDecodedSize.textContent = `Size: ${formatBytes(len)}`;
        inputDecodedFilename.value = `decoded-file.${ext}`;
        decodeDetectionStatus.textContent = `✓ Valid Base64 (${formatBytes(len)})`;
        decodeDetectionStatus.style.color = 'var(--success)';

        decodedResultCard.classList.add('active');

        // Render preview
        renderDecodePreview(previewUrl, mimeType, ext);
      } catch (err) {
        decodeDetectionStatus.textContent = `Invalid Base64 sequence`;
        decodeDetectionStatus.style.color = 'var(--danger)';
        decodedResultCard.classList.remove('active');
        decodeMediaContainer.innerHTML = '';
      }
    }

    // Inspect initial signature bytes (magic numbers)
    function detectMimeFromBytes(bytes) {
      if (bytes.length >= 4) {
        // PDF: %PDF (0x25 0x50 0x44 0x46)
        if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) {
          return 'application/pdf';
        }
        // PNG: \x89PNG (0x89 0x50 0x4E 0x47)
        if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
          return 'image/png';
        }
        // JPEG: \xFF\xD8\xFF
        if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
          return 'image/jpeg';
        }
        // GIF: GIF8 (0x47 0x49 0x46 0x38)
        if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
          return 'image/gif';
        }
        // ZIP / DOCX / XLSX: PK\x03\x04
        if (bytes[0] === 0x50 && bytes[1] === 0x4B && bytes[2] === 0x03 && bytes[3] === 0x04) {
          return 'application/zip';
        }
        // GZIP: 0x1F 0x8B
        if (bytes[0] === 0x1F && bytes[1] === 0x8B) {
          return 'application/gzip';
        }
      }

      if (bytes.length >= 12) {
        // WEBP: RIFF....WEBP
        if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
            bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) {
          return 'image/webp';
        }
      }

      // Check for plain ASCII / JSON / SVG
      let textSample = '';
      const sampleLen = Math.min(bytes.length, 100);
      for (let i = 0; i < sampleLen; i++) {
        textSample += String.fromCharCode(bytes[i]);
      }
      if (textSample.trim().startsWith('<svg') || textSample.includes('<?xml')) {
        return 'image/svg+xml';
      }
      if (textSample.trim().startsWith('{') || textSample.trim().startsWith('[')) {
        return 'application/json';
      }

      return 'application/octet-stream';
    }

    function getExtensionFromMime(mime) {
      if (!mime) return 'bin';
      if (mime.includes('pdf')) return 'pdf';
      if (mime.includes('png')) return 'png';
      if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg';
      if (mime.includes('webp')) return 'webp';
      if (mime.includes('gif')) return 'gif';
      if (mime.includes('svg')) return 'svg';
      if (mime.includes('zip')) return 'zip';
      if (mime.includes('audio/mpeg') || mime.includes('mp3')) return 'mp3';
      if (mime.includes('audio/ogg')) return 'ogg';
      if (mime.includes('json')) return 'json';
      if (mime.includes('text/plain')) return 'txt';
      return 'bin';
    }

    function renderDecodePreview(previewUrl, mime, ext) {
      decodeMediaContainer.innerHTML = '';
      if (mime.startsWith('image/')) {
        const img = document.createElement('img');
        img.className = 'preview-img';
        img.src = previewUrl;
        img.alt = 'Decoded Preview';
        decodeMediaContainer.appendChild(img);
      } else if (mime.startsWith('audio/')) {
        const audio = document.createElement('audio');
        audio.className = 'preview-audio';
        audio.controls = true;
        audio.src = previewUrl;
        decodeMediaContainer.appendChild(audio);
      } else {
        decodeMediaContainer.innerHTML = `<span style="font-size:.9rem;color:var(--text-muted);font-weight:600;">📦 Ready to download: <strong>decoded-file.${ext}</strong></span>`;
      }
    }

    /* ==========================================================================
       Mode Navigation (Encode vs Decode Tabs)
       ========================================================================== */

    function setupModeSwitcher() {
      const tabEncode = document.getElementById('tabEncode');
      const tabDecode = document.getElementById('tabDecode');
      const viewEncode = document.getElementById('viewEncode');
      const viewDecode = document.getElementById('viewDecode');

      tabEncode.addEventListener('click', () => {
        currentMode = 'encode';
        tabEncode.classList.add('active');
        tabDecode.classList.remove('active');
        viewEncode.classList.add('active');
        viewDecode.classList.remove('active');
      });

      tabDecode.addEventListener('click', () => {
        currentMode = 'decode';
        tabDecode.classList.add('active');
        tabEncode.classList.remove('active');
        viewDecode.classList.add('active');
        viewEncode.classList.remove('active');
      });
    }

    // Initialize Tool
    document.addEventListener('DOMContentLoaded', () => {
      initLanguage();
      setupModeSwitcher();
      setupEncodeListeners();
      setupDecodeListeners();
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
        "title": "Base64 File Encoder – Data URI & Binary Decoder",
        "desc": "Encode any binary file into Base64 strings or decode data URIs back to downloadable assets. Runs entirely offline in browser memory without servers."
    },
    "ar": {
        "title": "تشفير وفك تشفير ملفات Base64 – روابط Data URI",
        "desc": "حول أي ملف رقمي إلى نصوص Base64 أو استرجع الملفات الأصلية من الرموز المشفرة. يعمل بالكامل في الذاكرة المحلية لجهازك دون الحاجة لاتصال خارجي."
    },
    "fr": {
        "title": "Encodeur de Fichiers Base64 – Décodeur Binaire & Data URI",
        "desc": "Encodez vos fichiers binaires en chaînes Base64 ou restaurez les fichiers d'origine. Fonctionne hors ligne dans la mémoire de votre navigateur."
    },
    "it": {
        "title": "Codificatore File Base64 – Decodifica Binaria e Data URI",
        "desc": "Codifica qualsiasi file in stringhe Base64 o ricava l'asset originale dai dati codificati. L'elaborazione si svolge nella RAM senza server."
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