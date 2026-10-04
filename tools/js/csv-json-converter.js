(function () {
      'use strict';

      // --- Pre-packaged Sample Data ---
      const SAMPLES = {
        csv: `id,name,role,department,salary,active\n101,"Alice Johnson",Lead Engineer,Engineering,135000,true\n102,"Bob Smith",Product Designer,Design,115000,true\n103,"Charlie Davis",Data Scientist,Analytics,128000,false\n104,"Diana Prince",VP Marketing,Marketing,150000,true\n105,"Evan Wright",DevOps Architect,Infrastructure,142000,true`,
        json: `[\n  {\n    "id": 101,\n    "name": "Alice Johnson",\n    "role": "Lead Engineer",\n    "contact": {\n      "email": "alice@example.com",\n      "city": "San Francisco"\n    },\n    "salary": 135000,\n    "active": true\n  },\n  {\n    "id": 102,\n    "name": "Bob Smith",\n    "role": "Product Designer",\n    "contact": {\n      "email": "bob@example.com",\n      "city": "New York"\n    },\n    "salary": 115000,\n    "active": true\n  },\n  {\n    "id": 103,\n    "name": "Charlie Davis",\n    "role": "Data Scientist",\n    "contact": {\n      "email": "charlie@example.com",\n      "city": "Chicago"\n    },\n    "salary": 128000,\n    "active": false\n  }\n]`
      };

      // --- State ---
      let currentMode = 'csv-to-json'; // 'csv-to-json' | 'json-to-csv'
      let toastTimer = null;

      // --- DOM Elements ---
      const tabCsvToJson = document.getElementById('tabCsvToJson');
      const tabJsonToCsv = document.getElementById('tabJsonToCsv');
      const btnSwapMode = document.getElementById('btnSwapMode');

      const csvOptionsGroup = document.getElementById('csvOptionsGroup');
      const jsonOptionsGroup = document.getElementById('jsonOptionsGroup');

      const csvDelimiter = document.getElementById('csvDelimiter');
      const csvHasHeaders = document.getElementById('csvHasHeaders');
      const csvParseTypes = document.getElementById('csvParseTypes');
      const jsonFormat = document.getElementById('jsonFormat');

      const jsonOutDelimiter = document.getElementById('jsonOutDelimiter');
      const jsonIncludeHeaders = document.getElementById('jsonIncludeHeaders');
      const jsonFlatten = document.getElementById('jsonFlatten');

      const sourceInput = document.getElementById('sourceInput');
      const outputResult = document.getElementById('outputResult');
      const inputPane = document.getElementById('inputPane');

      const inputLabel = document.getElementById('inputLabel');
      const outputLabel = document.getElementById('outputLabel');

      const alertBanner = document.getElementById('alertBanner');
      const alertMsg = document.getElementById('alertMsg');
      const alertClose = document.getElementById('alertClose');

      const btnLoadSample = document.getElementById('btnLoadSample');
      const btnClearAll = document.getElementById('btnClearAll');
      const btnCopyOutput = document.getElementById('btnCopyOutput');
      const btnDownloadOutput = document.getElementById('btnDownloadOutput');
      const btnUploadFile = document.getElementById('btnUploadFile');
      const fileUploadInput = document.getElementById('fileUploadInput');

      const inLinesCount = document.getElementById('inLinesCount');
      const inCharsCount = document.getElementById('inCharsCount');
      const inSize = document.getElementById('inSize');

      const outRecordsCount = document.getElementById('outRecordsCount');
      const outCharsCount = document.getElementById('outCharsCount');
      const outSize = document.getElementById('outSize');

      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // --- Helpers ---
      function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
      }

      function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }

      function showAlert(msg, isError = true) {
        alertMsg.textContent = msg;
        alertBanner.className = 'alert-banner ' + (isError ? 'error' : 'warning');
      }

      function hideAlert() {
        alertBanner.style.display = 'none';
        alertBanner.className = 'alert-banner';
      }

      alertClose.addEventListener('click', hideAlert);

      // --- Delimiter Auto-Detection ---
      function detectDelimiter(text) {
        const delimiters = [',', ';', '\t', '|'];
        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0).slice(0, 8);
        if (lines.length === 0) return ',';

        let bestDelim = ',';
        let maxCount = -1;

        for (const d of delimiters) {
          let counts = [];
          for (const line of lines) {
            let count = 0;
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
              if (line[i] === '"') inQuotes = !inQuotes;
              else if (!inQuotes && line[i] === d) count++;
            }
            counts.push(count);
          }
          const sum = counts.reduce((a, b) => a + b, 0);
          const avg = sum / counts.length;
          // Reward consistent row delimiter count
          const isConsistent = counts.every(c => c === counts[0] && c > 0);
          const score = isConsistent ? avg * 2 : avg;

          if (score > maxCount) {
            maxCount = score;
            bestDelim = d;
          }
        }

        return maxCount > 0 ? bestDelim : ',';
      }

      // --- RFC 4180 Compliant CSV Parser ---
      function parseCSV(text, delimiter = ',', hasHeaders = true, parseTypes = true) {
        if (!text || !text.trim()) return [];

        const rows = [];
        let currentRow = [];
        let currentVal = '';
        let inQuotes = false;
        let wasQuoted = false;
        let i = 0;

        while (i < text.length) {
          const char = text[i];
          const nextChar = text[i + 1];

          if (inQuotes) {
            if (char === '"' && nextChar === '"') {
              currentVal += '"';
              i += 2;
            } else if (char === '"') {
              inQuotes = false;
              i++;
            } else {
              currentVal += char;
              i++;
            }
          } else {
            if (char === '"') {
              inQuotes = true;
              wasQuoted = true;
              i++;
            } else if (char === delimiter) {
              currentRow.push(wasQuoted ? currentVal : currentVal.trim());
              currentVal = '';
              wasQuoted = false;
              i++;
            } else if (char === '\r') {
              if (nextChar === '\n') i++;
              currentRow.push(wasQuoted ? currentVal : currentVal.trim());
              rows.push(currentRow);
              currentRow = [];
              currentVal = '';
              wasQuoted = false;
              i++;
            } else if (char === '\n') {
              currentRow.push(wasQuoted ? currentVal : currentVal.trim());
              rows.push(currentRow);
              currentRow = [];
              currentVal = '';
              wasQuoted = false;
              i++;
            } else {
              currentVal += char;
              i++;
            }
          }
        }

        currentRow.push(wasQuoted ? currentVal : currentVal.trim());
        if (currentRow.some(c => c !== '')) {
          rows.push(currentRow);
        }

        if (rows.length === 0) return [];

        function parseTypedValue(val) {
          if (!parseTypes) return val;
          if (val === '') return '';
          const lower = val.toLowerCase();
          if (lower === 'true') return true;
          if (lower === 'false') return false;
          if (lower === 'null') return null;
          if (!isNaN(val) && val.trim() !== '') {
            const num = Number(val);
            if (Number.isFinite(num)) return num;
          }
          return val;
        }

        if (hasHeaders) {
          const rawHeaders = rows[0];
          const headers = rawHeaders.map((h, idx) => (h && h.length > 0 ? h : `column_${idx + 1}`));
          const dataRows = rows.slice(1);

          return dataRows.map(row => {
            const obj = {};
            headers.forEach((header, idx) => {
              obj[header] = idx < row.length ? parseTypedValue(row[idx]) : null;
            });
            return obj;
          });
        } else {
          return rows.map(row => row.map(parseTypedValue));
        }
      }

      // --- Nested JSON Flattening ---
      function flattenObject(obj, prefix = '') {
        const result = {};
        for (const key in obj) {
          if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
          const propName = prefix ? `${prefix}.${key}` : key;
          const val = obj[key];
          if (val !== null && typeof val === 'object' && !Array.isArray(val) && !(val instanceof Date)) {
            Object.assign(result, flattenObject(val, propName));
          } else if (Array.isArray(val)) {
            result[propName] = JSON.stringify(val);
          } else {
            result[propName] = val;
          }
        }
        return result;
      }

      // --- JSON to CSV Serializer ---
      function jsonToCSV(jsonText, delimiter = ',', includeHeaders = true, shouldFlatten = true) {
        if (!jsonText || !jsonText.trim()) return '';

        let parsed;
        try {
          parsed = JSON.parse(jsonText);
        } catch (err) {
          throw new Error('Invalid JSON syntax: ' + err.message);
        }

        let array = [];
        if (Array.isArray(parsed)) {
          array = parsed;
        } else if (typeof parsed === 'object' && parsed !== null) {
          array = [parsed];
        } else {
          throw new Error('Input must be a JSON array of objects or a single JSON object.');
        }

        if (array.length === 0) return '';

        const processedList = array.map(item => {
          if (typeof item === 'object' && item !== null) {
            return shouldFlatten ? flattenObject(item) : item;
          }
          return { value: item };
        });

        const headers = [];
        const headerSet = new Set();
        for (const item of processedList) {
          for (const key of Object.keys(item)) {
            if (!headerSet.has(key)) {
              headerSet.add(key);
              headers.push(key);
            }
          }
        }

        function escapeCell(val) {
          if (val === null || val === undefined) return '';
          let str = typeof val === 'object' ? JSON.stringify(val) : String(val);
          if (str.includes(delimiter) || str.includes('"') || str.includes('\n') || str.includes('\r')) {
            return `"${str.replace(/"/g, '""')}"`;
          }
          return str;
        }

        const lines = [];
        if (includeHeaders) {
          lines.push(headers.map(escapeCell).join(delimiter));
        }

        for (const item of processedList) {
          const row = headers.map(header => escapeCell(item[header] !== undefined ? item[header] : ''));
          lines.push(row.join(delimiter));
        }

        return lines.join('\n');
      }

      // --- Conversion Orchestration ---
      function runConversion() {
        hideAlert();
        const inputVal = sourceInput.value;

        // Update input stats
        const inBytes = new Blob([inputVal]).size;
        const inLines = inputVal ? inputVal.split(/\r?\n/).length : 0;
        inLinesCount.textContent = `${inLines} lines`;
        inCharsCount.textContent = `${inputVal.length} chars`;
        inSize.textContent = formatBytes(inBytes);

        if (!inputVal.trim()) {
          outputResult.value = '';
          outRecordsCount.textContent = '0 records';
          outCharsCount.textContent = '0 chars';
          outSize.textContent = '0 B';
          return;
        }

        try {
          if (currentMode === 'csv-to-json') {
            // Determine delimiter
            let delim = csvDelimiter.value;
            if (delim === 'auto') {
              delim = detectDelimiter(inputVal);
            }

            const parsedObj = parseCSV(
              inputVal,
              delim,
              csvHasHeaders.checked,
              csvParseTypes.checked
            );

            const isMinify = jsonFormat.value === 'minify';
            const formattedJson = isMinify ? JSON.stringify(parsedObj) : JSON.stringify(parsedObj, null, 2);

            outputResult.value = formattedJson;

            // Update output stats
            const outBytes = new Blob([formattedJson]).size;
            const records = Array.isArray(parsedObj) ? parsedObj.length : 1;
            outRecordsCount.textContent = `${records} records`;
            outCharsCount.textContent = `${formattedJson.length} chars`;
            outSize.textContent = formatBytes(outBytes);

          } else {
            // JSON to CSV
            const delim = jsonOutDelimiter.value;
            const resultCSV = jsonToCSV(
              inputVal,
              delim,
              jsonIncludeHeaders.checked,
              jsonFlatten.checked
            );

            outputResult.value = resultCSV;

            // Update output stats
            const outBytes = new Blob([resultCSV]).size;
            const lines = resultCSV ? resultCSV.split(/\r?\n/).length : 0;
            const records = jsonIncludeHeaders.checked && lines > 1 ? lines - 1 : lines;
            outRecordsCount.textContent = `${records} rows`;
            outCharsCount.textContent = `${resultCSV.length} chars`;
            outSize.textContent = formatBytes(outBytes);
          }
        } catch (err) {
          showAlert(err.message, true);
          outputResult.value = '';
          outRecordsCount.textContent = 'Error';
          outCharsCount.textContent = '0 chars';
          outSize.textContent = '0 B';
        }
      }

      // --- i18n Translation Dictionary ---
      const I18N = {
        en: {
          langLabel: "English",
          backLink: "← Back to Tools",
          brandBadge: "PDF &amp; Files • Client-Side • Zero Server Uploads",
          pageTitle: 'CSV to JSON / <span>JSON to CSV</span>',
          pageSubtitle: "Seamlessly convert tabular CSV records to structured JSON and flatten nested JSON back into clean CSV files. Fast, private, RFC 4180 compliant.",
          tabCsvToJson: "CSV to JSON",
          tabJsonToCsv: "JSON to CSV",
          btnSwapMode: "Swap Mode",
          csvOptDelimiter: "Delimiter:",
          csvOptHeaders: "First row is header",
          csvOptParseTypes: "Parse numbers &amp; booleans",
          csvOptFormat: "Output Format:",
          jsonOptOutDelimiter: "Output Delimiter:",
          jsonOptHeaders: "Include header row",
          jsonOptFlatten: "Auto-flatten nested objects",
          btnLoadSample: "Load Sample",
          btnClearAll: "Clear",
          btnUploadFile: "Upload File",
          btnCopy: "Copy",
          btnDownload: "Download",
          inputLabelCsv: "CSV Source Data",
          inputLabelJson: "JSON Source Data",
          outputLabelJson: "JSON Result",
          outputLabelCsv: "CSV Result",
          inputPlaceholderCsv: "Paste your CSV data here or drag & drop a file...",
          inputPlaceholderJson: "Paste your JSON data here or drag & drop a file...",
          outputPlaceholder: "Converted output will appear here in real time...",
          copied: "Copied!",
          toastCopied: "Output copied to clipboard!",
          sampleLoaded: "Sample data loaded!",
          footerText: "© 2026 VantorKit. Fast, Private &amp; Free Web Utilities. All client processing is performed locally."
        },
        ar: {
          langLabel: "العربية",
          backLink: "← العودة إلى الأدوات",
          brandBadge: "ملفات وPDF • معالجة محلية • بدون رفع على الخوادم",
          pageTitle: 'محول CSV إلى JSON / <span>JSON إلى CSV</span>',
          pageSubtitle: "حوّل جداول CSV إلى بيانات JSON مهيكلة وسكّح كائنات JSON المتداخلة إلى ملفات CSV نظيفة. سريع، خاص، ومتوافق مع معيار RFC 4180.",
          tabCsvToJson: "CSV إلى JSON",
          tabJsonToCsv: "JSON إلى CSV",
          btnSwapMode: "تبديل الوضع",
          csvOptDelimiter: "الفاصل:",
          csvOptHeaders: "الصف الأول يحتوي على العناوين",
          csvOptParseTypes: "تحليل الأرقام والقيم المنطقية",
          csvOptFormat: "تنسيق المخرجات:",
          jsonOptOutDelimiter: "فاصل المخرجات:",
          jsonOptHeaders: "تضمين صف العناوين",
          jsonOptFlatten: "تسطيح الكائنات المتداخلة تلقائياً",
          btnLoadSample: "تحميل نموذج",
          btnClearAll: "مسح",
          btnUploadFile: "رفع ملف",
          btnCopy: "نسخ",
          btnDownload: "تنزيل",
          inputLabelCsv: "بيانات CSV المصدر",
          inputLabelJson: "بيانات JSON المصدر",
          outputLabelJson: "نتيجة JSON",
          outputLabelCsv: "نتيجة CSV",
          inputPlaceholderCsv: "الصق بيانات CSV هنا أو اسحب الملف وأفلته...",
          inputPlaceholderJson: "الصق كائن أو مصفوفة JSON هنا أو اسحب الملف وأفلته...",
          outputPlaceholder: "ستظهر النتيجة المحولة هنا في الوقت الفعلي...",
          copied: "تم النسخ!",
          toastCopied: "تم نسخ النتيجة إلى الحافظة!",
          sampleLoaded: "تم تحميل البيانات النموذجية!",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً على جهازك."
        },
        fr: {
          langLabel: "Français",
          backLink: "← Retour aux outils",
          brandBadge: "PDF &amp; Fichiers • Côté Client • Zéro Téléversement Serveur",
          pageTitle: 'Convertisseur CSV vers JSON / <span>JSON vers CSV</span>',
          pageSubtitle: "Convertissez de manière fluide les enregistrements tabulaires CSV en JSON structuré et aplatissez le JSON imbriqué en CSV propre. Rapide, privé, conforme à la norme RFC 4180.",
          tabCsvToJson: "CSV vers JSON",
          tabJsonToCsv: "JSON vers CSV",
          btnSwapMode: "Inverser le mode",
          csvOptDelimiter: "Délimiteur :",
          csvOptHeaders: "La 1ère ligne est l'en-tête",
          csvOptParseTypes: "Analyser nombres et booléens",
          csvOptFormat: "Format de sortie :",
          jsonOptOutDelimiter: "Délimiteur de sortie :",
          jsonOptHeaders: "Inclure ligne d'en-tête",
          jsonOptFlatten: "Aplatir objets imbriqués",
          btnLoadSample: "Charger exemple",
          btnClearAll: "Effacer",
          btnUploadFile: "Téléverser fichier",
          btnCopy: "Copier",
          btnDownload: "Télécharger",
          inputLabelCsv: "Données source CSV",
          inputLabelJson: "Données source JSON",
          outputLabelJson: "Résultat JSON",
          outputLabelCsv: "Résultat CSV",
          inputPlaceholderCsv: "Collez vos données CSV ici ou glissez-déposez un fichier...",
          inputPlaceholderJson: "Collez votre JSON ici ou glissez-déposez un fichier...",
          outputPlaceholder: "Le résultat converti apparaîtra ici en temps réel...",
          copied: "Copié !",
          toastCopied: "Résultat copié dans le presse-papiers !",
          sampleLoaded: "Données d'exemple chargées !",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement."
        },
        it: {
          langLabel: "Italiano",
          backLink: "← Torna agli strumenti",
          brandBadge: "PDF &amp; File • Lato Client • Zero Caricamenti su Server",
          pageTitle: 'Convertitore da CSV a JSON / <span>da JSON a CSV</span>',
          pageSubtitle: "Converti in modo fluido i record CSV tabulari in JSON strutturato e appiattisci il JSON nidificato in CSV pulito. Veloce, privato, conforme a RFC 4180.",
          tabCsvToJson: "Da CSV a JSON",
          tabJsonToCsv: "Da JSON a CSV",
          btnSwapMode: "Inverti modalità",
          csvOptDelimiter: "Delimitatore:",
          csvOptHeaders: "La prima riga è l'intestazione",
          csvOptParseTypes: "Analizza numeri e booleani",
          csvOptFormat: "Formato di output:",
          jsonOptOutDelimiter: "Delimitatore di output:",
          jsonOptHeaders: "Includi riga intestazione",
          jsonOptFlatten: "Appiattisci oggetti nidificati",
          btnLoadSample: "Carica esempio",
          btnClearAll: "Cancella",
          btnUploadFile: "Carica file",
          btnCopy: "Copia",
          btnDownload: "Scarica",
          inputLabelCsv: "Dati sorgente CSV",
          inputLabelJson: "Dati sorgente JSON",
          outputLabelJson: "Risultato JSON",
          outputLabelCsv: "Risultato CSV",
          inputPlaceholderCsv: "Incolla i dati CSV qui o trascina un file...",
          inputPlaceholderJson: "Incolla il JSON qui o trascina un file...",
          outputPlaceholder: "L'output convertito apparirà qui in tempo reale...",
          copied: "Copiato!",
          toastCopied: "Output copiato negli appunti!",
          sampleLoaded: "Dati di esempio caricati!",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente."
        }
      };

      // --- i18n Engine & State ---
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      let activeLang = 'en';

      function setLanguage(lang) {
      window.setLanguage = setLanguage;
        if (!I18N[lang]) lang = 'en';
        activeLang = lang;
        localStorage.setItem('vantorkit_lang', lang);

        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        currentLangLabel.textContent = I18N[lang].langLabel;
        langOptions.forEach(opt => {
          if (opt.dataset.lang === lang) opt.classList.add('active');
          else opt.classList.remove('active');
        });

        const dict = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            el.innerHTML = dict[key];
          }
        });

        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle && dict.pageTitle) pageTitle.innerHTML = dict.pageTitle;

        // Update dynamic labels depending on current active mode
        if (currentMode === 'csv-to-json') {
          inputLabel.textContent = dict.inputLabelCsv;
          outputLabel.textContent = dict.outputLabelJson;
          sourceInput.placeholder = dict.inputPlaceholderCsv;
        } else {
          inputLabel.textContent = dict.inputLabelJson;
          outputLabel.textContent = dict.outputLabelCsv;
          sourceInput.placeholder = dict.inputPlaceholderJson;
        }
        outputResult.placeholder = dict.outputPlaceholder;
      }

      langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('open');
        if (isOpen) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        } else {
          langMenu.classList.add('open');
          langToggleBtn.setAttribute('aria-expanded', 'true');
        }
      });

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          setLanguage(opt.dataset.lang);
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!document.getElementById('langDropdown').contains(e.target)) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // --- Switch Mode Handler ---
      function switchMode(newMode) {
        if (currentMode === newMode) return;
        currentMode = newMode;
        const dict = I18N[activeLang] || I18N.en;

        if (newMode === 'csv-to-json') {
          tabCsvToJson.classList.add('active');
          tabCsvToJson.setAttribute('aria-selected', 'true');
          tabJsonToCsv.classList.remove('active');
          tabJsonToCsv.setAttribute('aria-selected', 'false');

          csvOptionsGroup.style.display = 'flex';
          jsonOptionsGroup.style.display = 'none';

          inputLabel.textContent = dict.inputLabelCsv;
          outputLabel.textContent = dict.outputLabelJson;
          sourceInput.placeholder = dict.inputPlaceholderCsv;
        } else {
          tabJsonToCsv.classList.add('active');
          tabJsonToCsv.setAttribute('aria-selected', 'true');
          tabCsvToJson.classList.remove('active');
          tabCsvToJson.setAttribute('aria-selected', 'false');

          jsonOptionsGroup.style.display = 'flex';
          csvOptionsGroup.style.display = 'none';

          inputLabel.textContent = dict.inputLabelJson;
          outputLabel.textContent = dict.outputLabelCsv;
          sourceInput.placeholder = dict.inputPlaceholderJson;
        }

        runConversion();
      }

      tabCsvToJson.addEventListener('click', () => switchMode('csv-to-json'));
      tabJsonToCsv.addEventListener('click', () => switchMode('json-to-csv'));

      btnSwapMode.addEventListener('click', () => {
        const nextMode = currentMode === 'csv-to-json' ? 'json-to-csv' : 'csv-to-json';
        // If there is converted output, place it into source input
        const currentOutput = outputResult.value;
        if (currentOutput.trim()) {
          sourceInput.value = currentOutput;
        }
        switchMode(nextMode);
      });

      // --- Event Listeners for Live Updates ---
      sourceInput.addEventListener('input', runConversion);

      [csvDelimiter, csvHasHeaders, csvParseTypes, jsonFormat, jsonOutDelimiter, jsonIncludeHeaders, jsonFlatten].forEach(el => {
        el.addEventListener('change', runConversion);
      });

      // --- Load Sample Action ---
      btnLoadSample.addEventListener('click', () => {
        if (currentMode === 'csv-to-json') {
          sourceInput.value = SAMPLES.csv;
        } else {
          sourceInput.value = SAMPLES.json;
        }
        runConversion();
        const dict = I18N[activeLang] || I18N.en;
        showToast(dict.sampleLoaded || 'Sample data loaded!');
      });

      // --- Clear All Action ---
      btnClearAll.addEventListener('click', () => {
        sourceInput.value = '';
        outputResult.value = '';
        hideAlert();
        runConversion();
        sourceInput.focus();
      });

      // --- Copy to Clipboard Action ---
      btnCopyOutput.addEventListener('click', () => {
        const out = outputResult.value;
        if (!out) return;

        const dict = I18N[activeLang] || I18N.en;

        function indicateSuccess() {
          const origHTML = btnCopyOutput.innerHTML;
          btnCopyOutput.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${dict.copied || 'Copied!'}</span>
          `;
          btnCopyOutput.classList.add('copied');
          showToast(dict.toastCopied || 'Output copied to clipboard!');
          setTimeout(() => {
            btnCopyOutput.innerHTML = origHTML;
            btnCopyOutput.classList.remove('copied');
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(out).then(indicateSuccess).catch(() => {
            fallbackCopy(out, indicateSuccess);
          });
        } else {
          fallbackCopy(out, indicateSuccess);
        }
      });

      function fallbackCopy(text, cb) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          cb();
        } catch (e) {
          console.error('Copy failed', e);
        }
        document.body.removeChild(ta);
      }

      // --- Download Output Action ---
      btnDownloadOutput.addEventListener('click', () => {
        const out = outputResult.value;
        if (!out) return;

        const isJson = currentMode === 'csv-to-json';
        const mime = isJson ? 'application/json;charset=utf-8' : 'text/csv;charset=utf-8';
        const filename = isJson ? 'converted-data.json' : 'converted-data.csv';

        const blob = new Blob([out], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`Downloaded ${filename}`);
      });

      // --- File Upload & Drag & Drop ---
      btnUploadFile.addEventListener('click', () => {
        fileUploadInput.click();
      });

      function handleFile(file) {
        if (!file) return;
        const name = file.name.toLowerCase();

        // Smart mode auto-detection based on file extension
        if (name.endsWith('.json') && currentMode !== 'json-to-csv') {
          switchMode('json-to-csv');
        } else if ((name.endsWith('.csv') || name.endsWith('.tsv')) && currentMode !== 'csv-to-json') {
          switchMode('csv-to-json');
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          sourceInput.value = e.target.result;
          runConversion();
          showToast(`Loaded ${file.name}`);
        };
        reader.onerror = () => {
          showAlert('Failed to read uploaded file.', true);
        };
        reader.readAsText(file);
      }

      fileUploadInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFile(e.target.files[0]);
          fileUploadInput.value = '';
        }
      });

      // Drag & Drop onto Input Pane
      ['dragenter', 'dragover'].forEach(eventName => {
        inputPane.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          inputPane.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        inputPane.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          inputPane.classList.remove('drag-over');
        });
      });

      inputPane.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      // --- Initial Load with Sample & i18n ---
      const initialLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(initialLang);

      sourceInput.value = SAMPLES.csv;
      runConversion();
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
        "title": "CSV to JSON Converter – Tabular & Object Data Parser",
        "desc": "Convert CSV spreadsheets to structured JSON and reverse arrays back to tabular files. RFC 4180 parsing runs in-memory with zero cloud exposure."
    },
    "ar": {
        "title": "محول CSV إلى JSON – تحويل الجداول والبيانات بدقة",
        "desc": "حول جداول CSV إلى كائنات JSON والعكس بسرعة ومطابقة لمعيار RFC 4180. تتم معالجة البيانات محلياً في ذاكرة جهازك دون رفعها إلى أي سحابة."
    },
    "fr": {
        "title": "Convertisseur CSV en JSON – Analyseur de Données Tabulaires",
        "desc": "Transformez vos fichiers CSV en JSON et inversement sans intermédiaire. Analyse conforme RFC 4180 exécutée localement sans partage de données."
    },
    "it": {
        "title": "Convertitore CSV in JSON – Strutturazione Dati Tabellari",
        "desc": "Converti fogli CSV in array JSON e viceversa in tempo reale. Elaborazione RFC 4180 eseguita sul tuo computer senza trasferimenti di file."
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