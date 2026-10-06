const I18N = {
      en: {
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        backLink: "All Tools",
        heroBadge: "Web Worker Streaming • 100% Client-Side • Zero Leak",
        heroTitle: "Offline Big-Data Transformer",
        heroSubtitle: "Stream, inspect, filter, and convert massive CSV, JSON, TSV, and NDJSON datasets locally in browser RAM using multi-threaded Web Workers.",
        dropzoneTitle: "Drop your CSV, TSV, or JSON dataset here",
        dropzoneDesc: "Supports large files up to 100MB+. Streaming execution occurs in an isolated background Web Worker thread without freezing your browser.",
        btnBrowse: "Choose Dataset File",
        btnLoadSample: "Load 5,000-Row Sample",
        privacyPill: "100% In-Browser Worker • Your Data Never Leaves RAM",
        workerIdle: "Worker: Ready",
        workerWorking: "Worker: Processing...",
        workerError: "Worker: Error",
        processingErrorToast: "Failed to process dataset. Please check file format.",
        lblConvert: "Convert To:",
        lblDelimiter: "Input Delimiter:",
        btnExport: "Download Export",
        btnCopy: "Copy Data",
        btnClear: "Clear",
        tabPreview: "Table Preview",
        tabRaw: "Converted Output",
        tabSchema: "Column Schema",
        filterPlaceholder: "Filter rows in preview...",
        colName: "Column Name",
        colType: "Inferred Type",
        colSample: "Sample Value",
        colUnique: "Unique Values (Sample)",
        btnPrev: "◀ Previous",
        btnNext: "Next ▶",
        ed1Title: "Why Public Converters Pose Grave Security Risks",
        ed1Desc: "Uploading financial datasets, customer PII, internal telemetry, or medical logs to cloud converters exposes sensitive company assets to server logging, reverse proxies, and third-party data collection.",
        ed2Title: "Multi-Threaded Web Worker Streaming",
        ed2Desc: "VantorKit delegates high-throughput file chunking and serialization to an isolated background thread. Even when processing 100MB+ datasets, the main browser UI remains silky-smooth and responsive.",
        ed3Title: "Zero-Persistence In-Memory Privacy",
        ed3Desc: "All ingested files, parsed tables, and transformed outputs exist exclusively in volatile browser RAM. Closing or refreshing the tab triggers immediate garbage collection with zero disk remnants.",
        faq1Q: "What is the maximum file size supported?",
        faq1A: "The tool comfortably handles files of hundreds of megabytes. Because all chunking and serialization occurs in an isolated background Web Worker, capacity is bounded exclusively by your device's available system RAM.",
        faq2Q: "Is any dataset sent to an external server?",
        faq2A: "Never. All data parsing, transformations, and exports occur 100% inside your local browser memory sandbox. Enforced by strict Content-Security-Policy headers, zero network requests are made.",
        faq3Q: "Can it handle malformed CSV rows or nested JSON?",
        faq3A: "Yes. The streaming engine implements resilient delimiter sniffing, escaped quotation handling, and error recovery for mismatched column counts and nested JSON objects.",
        faq4Q: "Which formats can I export to?",
        faq4A: "You can convert and export between Standard CSV, Tab-Separated TSV, Flat/Structured JSON Arrays, Beautified JSON (2-space indented), and Newline-Delimited JSON (NDJSON).",
        footerPriv: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerAbout: "About Us",
        footerContact: "Contact",
        footerCopy: "© 2026 VantorKit. Client-side tools designed with absolute data privacy."
      },
      ar: {
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        backLink: "جميع الأدوات",
        heroBadge: "معالجة متعددة الخيوط Web Worker • على جهازك 100% • بدون تسريب",
        heroTitle: "محول البيانات الضخمة بدون إنترنت",
        heroSubtitle: "قم بتحويل وفحص وتصفية ملفات CSV وJSON وTSV الضخمة محلياً في الذاكرة العشوائية عبر خيوط Web Workers دون تجميد المتصفح.",
        dropzoneTitle: "أفلت ملف CSV أو TSV أو JSON هنا",
        dropzoneDesc: "يدعم الملفات الكبيرة حتى 100MB وأكثر. تتم المعالجة التدفقية بالكامل في خيط خلفي مستقل لضمان سلاسة وسرعة جهازك.",
        btnBrowse: "اختر ملف البيانات",
        btnLoadSample: "تحميل عينة 5,000 صف",
        privacyPill: "معالجة محلية 100% عبر Web Worker • بياناتك لا تغادر ذاكرة RAM أبداً",
        workerIdle: "المعالج: جاهز",
        workerWorking: "المعالج: جاري المعالجة...",
        workerError: "المعالج: خطأ في المعالجة",
        processingErrorToast: "فشلت معالجة الملف، يرجى التحقق من ترميز الملف.",
        lblConvert: "التحويل إلى:",
        lblDelimiter: "فاصل المدخلات:",
        btnExport: "تحميل الملف المحول",
        btnCopy: "نسخ البيانات",
        btnClear: "مسح البيانات",
        tabPreview: "معاينة الجدول",
        tabRaw: "البيانات المحولة",
        tabSchema: "هيكل الأعمدة",
        filterPlaceholder: "تصفية الصفوف في المعاينة...",
        colName: "اسم العمود",
        colType: "النوع التقديري",
        colSample: "عينة قيمة",
        colUnique: "القيم الفريدة (عينة)",
        btnPrev: "◀ السابق",
        btnNext: "التالي ▶",
        ed1Title: "مخاطر محولات البيانات السحابية العامة",
        ed1Desc: "إن رفع البيانات المالية أو سجلات العملاء الخاصة أو سجلات الخوادم إلى مواقع التحويل العامة يعرض أسرار المؤسسات للانتهاك والتخزين غير المصرح به.",
        ed2Title: "محرك خيوط المعالجة المتعددة Web Worker",
        ed2Desc: "توكل الأداة عمليات التجزئة والتحويل إلى خيط خلفي مستقل، مما يضمن بقاء واجهة المتصفح فائقة الاستجابة حتى مع أحجام البيانات التي تتجاوز 100MB.",
        ed3Title: "خصوصية مطلقة داخل الذاكرة المؤقتة",
        ed3Desc: "توجد الملفات والبيانات حصرياً في ذاكرة RAM المؤقتة، وتُحذف نهائياً وتلقائياً بمجرد إغلاق نافذة المتصفح دون ترك أي أثر على القرص الصلب.",
        faq1Q: "ما هو الحد الأقصى لحجم الملفات المدعومة؟",
        faq1A: "تدعم الأداة ملفات بحجم مئات الميجابايت بكل سهولة. وبفضل المعالجة في خيوط Web Worker المستقلة، يعتمد الحد الأقصى فقط على سعة الذاكرة العشوائية RAM في جهازك.",
        faq2Q: "هل يتم إرسال مجموعات البيانات إلى أي خادم خارجي؟",
        faq2A: "أبداً. تجري جميع عمليات المعالجة والتحويل محلياً بنسبة 100% داخل المتصفح، مدعومة بسياسة أمان صارمة تمنع أي اتصال خارجي.",
        faq3Q: "هل تدعم الأداة تصحيح ملفات CSV غير المكتملة أو JSON المتداخل؟",
        faq3A: "نعم. يمتلك المحرك الذكي آليات مرنة لاكتشاف الفواصل ومعالجة علامات الاقتباس وتصحيح التفاوت في عدد الأعمدة.",
        faq4Q: "ما هي الصيغ التي يمكنني التصدير إليها؟",
        faq4A: "يمكنك التصدير بين CSV قياسي، وTSV المفصول بمسافات جدولية، ومصفوفات JSON، وJSON المنسق، وNDJSON المفصول بأسطر جديدة.",
        footerPriv: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerAbout: "من نحن",
        footerContact: "اتصل بنا",
        footerCopy: "© 2026 فانتوركيت. أدوات عميل محلية مصممة مع خصوصية مطلقة للبيانات."
      },
      fr: {
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        backLink: "Tous les Outils",
        heroBadge: "Streaming Web Worker • 100% Côté Client • Aucune Fuite",
        heroTitle: "Transformateur Big-Data Hors Ligne",
        heroSubtitle: "Traitez, inspectez, filtrez et convertissez d'importants jeux de données CSV, JSON, TSV et NDJSON en mémoire RAM grâce aux Web Workers multi-threads.",
        dropzoneTitle: "Déposez votre fichier CSV, TSV ou JSON ici",
        dropzoneDesc: "Prend en charge les fichiers volumineux jusqu'à plus de 100 Mo. L'exécution s'effectue dans un thread Web Worker en arrière-plan sans figer votre navigateur.",
        btnBrowse: "Choisir un Fichier",
        btnLoadSample: "Charger l'Échantillon (5 000 lignes)",
        privacyPill: "100% Web Worker en Navigateur • Vos Données Ne Quittent Jamais la RAM",
        workerIdle: "Worker : Prêt",
        workerWorking: "Worker : En cours...",
        lblConvert: "Convertir en :",
        lblDelimiter: "Séparateur d'Entrée :",
        btnExport: "Télécharger l'Export",
        btnCopy: "Copier les Données",
        btnClear: "Effacer",
        tabPreview: "Aperçu du Tableau",
        tabRaw: "Résultat Converti",
        tabSchema: "Schéma des Colonnes",
        filterPlaceholder: "Filtrer les lignes dans l'aperçu...",
        colName: "Nom de Colonne",
        colType: "Type Déduit",
        colSample: "Valeur Exemple",
        colUnique: "Valeurs Uniques (Échantillon)",
        btnPrev: "◀ Précédent",
        btnNext: "Suivant ▶",
        ed1Title: "Pourquoi les Convertisseurs Publics Sont un Risque",
        ed1Desc: "Téléverser des données financières ou des informations confidentielles vers des serveurs cloud expose vos secrets d'entreprise à la mise en cache et aux journaux tiers.",
        ed2Title: "Streaming Multi-Thread Web Worker",
        ed2Desc: "VantorKit délègue les calculs lourds à un thread isolé. Même lors du traitement de gros fichiers, l'interface du navigateur reste parfaitement réactive.",
        ed3Title: "Confidentialité Zéro Persistance en RAM",
        ed3Desc: "Les fichiers et les sorties générées existent uniquement dans la mémoire vive de l'ordinateur et sont automatiquement purgés à la fermeture de l'onglet.",
        faq1Q: "Quelle est la taille maximale de fichier prise en charge ?",
        faq1A: "L'outil gère aisément des fichiers de plusieurs centaines de mégaoctets, la seule limite étant la mémoire RAM de votre appareil.",
        faq2Q: "Mes données sont-elles envoyées sur un serveur ?",
        faq2A: "Jamais. Tout le traitement s'effectue à 100% localement dans votre navigateur, garanti par nos règles Content-Security-Policy.",
        faq3Q: "Peut-il traiter des fichiers CSV mal formés ?",
        faq3A: "Oui, le moteur intègre une détection automatique robuste des délimiteurs et des guillemets imbriqués.",
        faq4Q: "Quels sont les formats d'export disponibles ?",
        faq4A: "Vous pouvez exporter en CSV, TSV, Tableau JSON, JSON indenté (2 espaces) et NDJSON.",
        footerPriv: "Politique de Confidentialité",
        footerTerms: "Conditions d'Utilisation",
        footerAbout: "À Propos",
        footerContact: "Contact",
        footerCopy: "© 2026 VantorKit. Outils côté client conçus avec une confidentialité absolue."
      },
      it: {
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        backLink: "Tutti gli Strumenti",
        heroBadge: "Streaming Web Worker • 100% Lato Client • Zero Perdite",
        heroTitle: "Trasformatore Big-Data Offline",
        heroSubtitle: "Analizza, ispeziona, filtra e converti enormi dataset CSV, JSON, TSV e NDJSON nella memoria RAM con Web Worker multi-thread.",
        dropzoneTitle: "Trascina qui il tuo file CSV, TSV o JSON",
        dropzoneDesc: "Supporta file di grandi dimensioni fino a oltre 100MB. L'esecuzione avviene in un thread Web Worker dedicato senza bloccare il browser.",
        btnBrowse: "Scegli File Dataset",
        btnLoadSample: "Carica Esempio da 5.000 Righe",
        privacyPill: "100% Web Worker nel Browser • I Tuoi Dati Non Lasciano Mai la RAM",
        workerIdle: "Worker: Pronto",
        workerWorking: "Worker: In elaborazione...",
        lblConvert: "Converti in:",
        lblDelimiter: "Delimitatore di Input:",
        btnExport: "Scarica Esportazione",
        btnCopy: "Copia Dati",
        btnClear: "Cancella",
        tabPreview: "Anteprima Tabella",
        tabRaw: "Output Convertito",
        tabSchema: "Schema Colonne",
        filterPlaceholder: "Filtra righe nell'anteprima...",
        colName: "Nome Colonna",
        colType: "Tipo Dedotto",
        colSample: "Valore di Esempio",
        colUnique: "Valori Unici (Esempio)",
        btnPrev: "◀ Precedente",
        btnNext: "Successivo ▶",
        ed1Title: "I Rischi dei Convertitori Cloud Pubblici",
        ed1Desc: "Caricare dataset finanziari o dati privati su convertitori online espone le informazioni riservate a log di server e accessi non autorizzati.",
        ed2Title: "Streaming Multi-Thread con Web Worker",
        ed2Desc: "VantorKit delega l'elaborazione ad alta intensità a un thread isolato, garantendo un'interfaccia utente sempre fluida e reattiva.",
        ed3Title: "Zero Persistenza e Massima Privacy in RAM",
        ed3Desc: "I file importati e i risultati rimangono unicamente nella memoria volatile e vengono cancellati istantaneamente alla chiusura della scheda.",
        faq1Q: "Qual è la dimensione massima del file supportata?",
        faq1A: "Lo strumento gestisce senza problemi file di centinaia di megabyte. L'unico limite effettivo è la memoria RAM disponibile sul dispositivo.",
        faq2Q: "I miei dati vengono inviati a qualche server?",
        faq2A: "Assolutamente no. Tutte le trasformazioni avvengono al 100% in locale, validate da rigide intestazioni Content-Security-Policy.",
        faq3Q: "Riesce a gestire righe CSV irregolari o JSON nidificati?",
        faq3A: "Sì, il motore integra una logica resiliente per il rilevamento di delimitatori, virgolette di escape e colonne variabili.",
        faq4Q: "Quali formati di esportazione sono supportati?",
        faq4A: "È possibile esportare in CSV standard, TSV con tabulazioni, Array JSON, JSON indentato (2 spazi) e NDJSON.",
        footerPriv: "Privacy Policy",
        footerTerms: "Termini di Servizio",
        footerAbout: "Chi Siamo",
        footerContact: "Contatti",
        footerCopy: "© 2026 VantorKit. Strumenti lato client progettati per la massima privacy."
      }
    };

    // --- Embedded Web Worker Script for High-Performance Big Data Processing ---
    const workerCode = `
      self.onerror = function(e) {
        self.postMessage({ type: 'error', message: 'Worker error: ' + (e && e.message ? e.message : 'Unknown') });
      };
      self.onunhandledrejection = function(e) {
        self.postMessage({ type: 'error', message: 'Unhandled worker rejection: ' + (e && e.reason ? e.reason : 'Unknown') });
      };

      self.onmessage = function(e) {
        let watchdog = null;
        try {
          const { action, text, targetFormat, customDelimiter, filename } = e.data;
          const startTime = Date.now();

          // 10-second fail-safe watchdog timer
          watchdog = setTimeout(() => {
            self.postMessage({ type: 'error', message: 'Processing timeout: Failed to parse file encoding or structure within 10 seconds.' });
          }, 10000);

          if (action === 'parseAndConvert') {
            let parsedData = null;
            let originalType = 'unknown';

            let rawText = text || '';
            // Strip Byte Order Mark (BOM) if present
            if (rawText.charCodeAt(0) === 0xFEFF) {
              rawText = rawText.slice(1);
            }

            const trimmed = rawText.trim();
            if (!trimmed) {
              if (watchdog) clearTimeout(watchdog);
              self.postMessage({ type: 'error', message: 'The uploaded file is empty.' });
              return;
            }

            if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
              try {
                parsedData = JSON.parse(trimmed);
                originalType = 'json';
                if (!Array.isArray(parsedData)) {
                  parsedData = [parsedData];
                }
              } catch (err) {
                // Try NDJSON
                try {
                  const lines = trimmed.split(String.fromCharCode(10));
                  const ndjsonRows = [];
                  for (let i = 0; i < lines.length; i++) {
                    const l = lines[i].trim();
                    if (l) ndjsonRows.push(JSON.parse(l));
                  }
                  parsedData = ndjsonRows;
                  originalType = 'ndjson';
                } catch (ndjsonErr) {
                  originalType = 'delimited';
                  parsedData = parseDelimitedText(rawText, customDelimiter, filename);
                }
              }
            } else {
              // Parse CSV / TSV / Delimited text / Single-Column text
              originalType = 'delimited';
              parsedData = parseDelimitedText(rawText, customDelimiter, filename);
            }

            if (!parsedData || parsedData.length === 0) {
              if (watchdog) clearTimeout(watchdog);
              self.postMessage({ type: 'error', message: 'No valid records found in dataset.' });
              return;
            }

            // Inferred Columns and Schema
            const columns = Object.keys(parsedData[0]);
            const totalRows = parsedData.length;
            const previewRows = parsedData.slice(0, 100);

            // Infer schema from sample (first 100 rows)
            const schema = columns.map(col => {
              const sampleVals = [];
              const uniqueSet = new Set();
              let inferredType = 'string';

              for (let i = 0; i < Math.min(100, totalRows); i++) {
                const val = parsedData[i][col];
                if (val !== undefined && val !== null && val !== '') {
                  sampleVals.push(val);
                  uniqueSet.add(String(val));
                }
              }

              if (sampleVals.length > 0) {
                const isAllNumbers = sampleVals.every(v => !isNaN(Number(v)));
                const isAllBooleans = sampleVals.every(v => v === true || v === false || String(v).toLowerCase() === 'true' || String(v).toLowerCase() === 'false');
                const isAllDates = sampleVals.every(v => !isNaN(Date.parse(v)) && String(v).length > 6);

                if (isAllNumbers) inferredType = 'number';
                else if (isAllBooleans) inferredType = 'boolean';
                else if (isAllDates) inferredType = 'date';
              }

              return {
                name: col,
                type: inferredType,
                sample: sampleVals[0] !== undefined ? String(sampleVals[0]) : '-',
                uniqueCount: uniqueSet.size
              };
            });

            // Convert to target format
            let convertedText = '';
            let exportMime = 'text/plain';
            let exportExt = 'txt';

            if (targetFormat === 'json_array') {
              convertedText = JSON.stringify(parsedData);
              exportMime = 'application/json';
              exportExt = 'json';
            } else if (targetFormat === 'json_pretty') {
              convertedText = JSON.stringify(parsedData, null, 2);
              exportMime = 'application/json';
              exportExt = 'json';
            } else if (targetFormat === 'csv') {
              convertedText = serializeToDelimited(parsedData, ',');
              exportMime = 'text/csv';
              exportExt = 'csv';
            } else if (targetFormat === 'tsv') {
              convertedText = serializeToDelimited(parsedData, String.fromCharCode(9));
              exportMime = 'text/tab-separated-values';
              exportExt = 'tsv';
            } else if (targetFormat === 'ndjson') {
              convertedText = parsedData.map(r => JSON.stringify(r)).join(String.fromCharCode(10));
              exportMime = 'application/x-ndjson';
              exportExt = 'ndjson';
            }

            const elapsed = Date.now() - startTime;

            if (watchdog) clearTimeout(watchdog);
            self.postMessage({
              type: 'complete',
              totalRows,
              columns,
              previewRows,
              schema,
              convertedText,
              exportMime,
              exportExt,
              originalType,
              elapsed
            });
          }
        } catch (fatalWorkerErr) {
          if (watchdog) clearTimeout(watchdog);
          self.postMessage({
            type: 'error',
            message: (fatalWorkerErr && fatalWorkerErr.message) ? fatalWorkerErr.message : 'Dataset processing error.'
          });
        }
      };

      function parseDelimitedText(text, forcedDelimiter, filename) {
        if (!text || typeof text !== 'string') return [];
        let cleanText = text;
        if (cleanText.charCodeAt(0) === 0xFEFF) {
          cleanText = cleanText.slice(1);
        }
        const trimmedText = cleanText.trim();
        if (!trimmedText) return [];

        let delimiter = forcedDelimiter;
        const sample = trimmedText.slice(0, 8192);
        let commas = 0, tabs = 0, semicolons = 0, pipes = 0;
        for (let i = 0; i < sample.length; i++) {
          const ch = sample[i];
          if (ch === ',') commas++;
          else if (ch === String.fromCharCode(9)) tabs++;
          else if (ch === ';') semicolons++;
          else if (ch === '|') pipes++;
        }
        const hasStandardDelimiter = (commas > 0 || tabs > 0 || semicolons > 0 || pipes > 0);

        if (!delimiter || delimiter === 'auto') {
          if (tabs > commas && tabs > semicolons) delimiter = String.fromCharCode(9);
          else if (semicolons > commas && semicolons > pipes) delimiter = ';';
          else if (pipes > commas) delimiter = '|';
          else if (commas > 0) delimiter = ',';
          else delimiter = null; // No standard delimiter detected!
        }

        // --- FALLBACK 1: Single-Column Dataset (Keywords, Domains, plain .txt list, newline-delimited text) ---
        const isTxtFile = filename && filename.trim().toLowerCase().endsWith('.txt');
        if (!delimiter || delimiter === 'single_column' || (!hasStandardDelimiter && (!forcedDelimiter || forcedDelimiter === 'auto')) || (isTxtFile && !hasStandardDelimiter)) {
          const rawLines = trimmedText.split(String.fromCharCode(10));
          const nonEmptylines = [];
          for (let i = 0; i < rawLines.length; i++) {
            const line = rawLines[i].trim();
            if (line.length > 0) {
              nonEmptylines.push(line);
            }
          }

          if (nonEmptylines.length === 0) return [];

          const firstLineLower = nonEmptylines[0].toLowerCase();
          const isExplicitHeader = ['keyword', 'keywords', 'item', 'items', 'value', 'values', 'domain', 'domains', 'url', 'urls', 'host', 'hosts', 'email', 'emails', 'key', 'keys', 'record', 'records'].includes(firstLineLower);

          let headerName = 'Item';
          let startIndex = 0;

          const isKeywordList = (filename && (filename.toLowerCase().includes('keyword') || filename.includes('كلم') || filename.includes('مفتاح'))) || firstLineLower.includes('keyword') || firstLineLower.includes('كلم');

          if (isKeywordList) {
            headerName = 'Keyword';
          } else {
            headerName = 'Item';
          }

          if (isExplicitHeader && nonEmptylines.length > 1) {
            headerName = nonEmptylines[0];
            startIndex = 1;
          } else {
            startIndex = 0;
          }

          const singleColData = [];
          for (let i = startIndex; i < nonEmptylines.length; i++) {
            singleColData.push({ [headerName]: nonEmptylines[i] });
          }

          if (singleColData.length === 0 && nonEmptylines.length > 0) {
            singleColData.push({ [headerName]: nonEmptylines[0] });
          }

          return singleColData;
        }

        // --- Standard Delimited Parsing (CSV, TSV, Semicolon, Pipe) ---
        const rows = [];
        let curRow = [];
        let curVal = '';
        let insideQuote = false;

        const len = trimmedText.length;
        for (let i = 0; i < len; i++) {
          const char = trimmedText[i];
          const nextChar = trimmedText[i + 1];

          if (char === '"') {
            if (insideQuote && nextChar === '"') {
              curVal += '"';
              i++;
            } else {
              insideQuote = !insideQuote;
            }
          } else if (char === delimiter && !insideQuote) {
            curRow.push(curVal.trim());
            curVal = '';
          } else if ((char.charCodeAt(0) === 13 || char.charCodeAt(0) === 10) && !insideQuote) {
            if (char.charCodeAt(0) === 13 && nextChar && nextChar.charCodeAt(0) === 10) i++;
            curRow.push(curVal.trim());
            if (curRow.length > 0 && curRow.some(c => c !== '')) {
              rows.push(curRow);
            }
            curRow = [];
            curVal = '';
          } else {
            curVal += char;
          }
        }

        if (curVal || curRow.length > 0) {
          curRow.push(curVal.trim());
          if (curRow.some(c => c !== '')) rows.push(curRow);
        }

        if (rows.length === 0) return [];

        if (rows.length === 1) {
          const headers = rows[0].map((h, idx) => 'column_' + (idx + 1));
          const obj = {};
          for (let c = 0; c < headers.length; c++) {
            obj[headers[c]] = rows[0][c] !== undefined ? rows[0][c] : '';
          }
          return [obj];
        }

        const headers = rows[0].map((h, idx) => h || ('column_' + (idx + 1)));
        const data = [];

        for (let r = 1; r < rows.length; r++) {
          const rowVals = rows[r];
          const obj = {};
          for (let c = 0; c < headers.length; c++) {
            obj[headers[c]] = rowVals[c] !== undefined ? rowVals[c] : '';
          }
          data.push(obj);
        }

        return data;
      }

      function serializeToDelimited(data, delimiter) {
        if (!data || data.length === 0) return '';
        const headers = Object.keys(data[0]);
        const lines = [];

        // Header line
        lines.push(headers.map(h => escapeField(h, delimiter)).join(delimiter));

        // Data lines
        for (let i = 0; i < data.length; i++) {
          const row = data[i];
          const line = headers.map(h => escapeField(row[h], delimiter)).join(delimiter);
          lines.push(line);
        }

        return lines.join(String.fromCharCode(10));
      }

      function escapeField(field, delimiter) {
        if (field === null || field === undefined) return '';
        const str = String(field);
        if (str.includes(delimiter) || str.includes('"') || str.includes(String.fromCharCode(10)) || str.includes(String.fromCharCode(13))) {
          return '"' + str.replace(/"/g, '""') + '"';
        }
        return str;
      }
    `;

    // --- Main Application Controller ---
    (function() {
      let currentLang = 'en';
      try {
        const stored = localStorage.getItem('vantorkit_lang');
        if (stored && I18N[stored]) currentLang = stored;
      } catch (e) {}

      // DOM Elements
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');
      const dropzone = document.getElementById('dropzone');
      const fileInput = document.getElementById('fileInput');
      const btnBrowse = document.getElementById('btnBrowse');
      const btnLoadSample = document.getElementById('btnLoadSample');
      const statusCard = document.getElementById('statusCard');
      const controlsPanel = document.getElementById('controlsPanel');
      const inspectorCard = document.getElementById('inspectorCard');
      const workerStatusBadge = document.getElementById('workerStatusBadge');
      const fileNameBadge = document.getElementById('fileNameBadge');
      const fileSizeBadge = document.getElementById('fileSizeBadge');
      const rowCountBadge = document.getElementById('rowCountBadge');
      const colCountBadge = document.getElementById('colCountBadge');
      const timeElapsedBadge = document.getElementById('timeElapsedBadge');
      const progressBar = document.getElementById('progressBar');
      const selectTargetFormat = document.getElementById('selectTargetFormat');
      const selectDelimiter = document.getElementById('selectDelimiter');
      const btnDownloadExport = document.getElementById('btnDownloadExport');
      const btnCopyConverted = document.getElementById('btnCopyConverted');
      const btnClearData = document.getElementById('btnClearData');
      const inspectorTabs = document.querySelectorAll('.inspector-tab');
      const tabContentPreview = document.getElementById('tabContentPreview');
      const tabContentCode = document.getElementById('tabContentCode');
      const tabContentSchema = document.getElementById('tabContentSchema');
      const filterInput = document.getElementById('filterInput');
      const tableHead = document.getElementById('tableHead');
      const tableBody = document.getElementById('tableBody');
      const codeOutputBox = document.getElementById('codeOutputBox');
      const schemaTableBody = document.getElementById('schemaTableBody');
      const paginationInfo = document.getElementById('paginationInfo');
      const btnPrevPage = document.getElementById('btnPrevPage');
      const btnNextPage = document.getElementById('btnNextPage');
      const toastBox = document.getElementById('toastBox');
      const toastMsg = document.getElementById('toastMsg');

      // State
      let workerInstance = null;
      let activeRawText = '';
      let activeFileName = '';
      let currentResult = null;
      let currentFilter = '';
      let currentPage = 1;
      const rowsPerPage = 50;
      let workerWatchdogTimer = null;
      const MAX_DIRECT_SIZE = 20 * 1024 * 1024; // 20 MB direct read threshold

      // Initialize Web Worker via volatile Blob URI
      function initWorker() {
        if (workerInstance) workerInstance.terminate();
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        workerInstance = new Worker(url);

        workerInstance.onmessage = function(e) {
          const data = e.data;
          if (data.type === 'complete') {
            currentResult = data;
            renderComplete(data);
          } else if (data.type === 'error') {
            handleWorkerError(data.message);
          }
        };

        workerInstance.onerror = function(err) {
          console.error('Worker runtime error:', err);
          handleWorkerError((err && err.message) ? err.message : 'Worker encountered an unhandled error.');
        };
      }

      function handleWorkerError(errorMsg) {
        if (workerWatchdogTimer) {
          clearTimeout(workerWatchdogTimer);
          workerWatchdogTimer = null;
        }
        progressBar.style.width = '0%';
        const translatedError = (I18N[currentLang] && I18N[currentLang].workerError) || 'Worker: Error';
        workerStatusBadge.textContent = translatedError;
        workerStatusBadge.classList.add('error');
        const translatedToast = (I18N[currentLang] && I18N[currentLang].processingErrorToast) || ('Error: ' + errorMsg);
        showToast(translatedToast);
      }

      // Resilient buffer decoder with multi-encoding fallback (UTF-16 BOM -> UTF-8 fatal -> Windows-1256 -> ISO-8859-1 -> Strip BOM)
      function decodeBufferResilient(buffer) {
        if (!buffer || buffer.byteLength === 0) return '';
        const u8 = new Uint8Array(buffer);

        // 1. Detect UTF-16LE / UTF-16BE BOMs
        if (u8.length >= 2) {
          if (u8[0] === 0xFF && u8[1] === 0xFE) {
            return new TextDecoder('utf-16le').decode(new Uint8Array(buffer, 2));
          }
          if (u8[0] === 0xFE && u8[1] === 0xFF) {
            return new TextDecoder('utf-16be').decode(new Uint8Array(buffer, 2));
          }
        }

        // 2. Resilient decode chain: UTF-8 (strict fatal) -> Windows-1256 (Arabic) -> ISO-8859-1
        let decodedText = '';
        try {
          // Attempt standard UTF-8 (fatal: true catches invalid byte sequences like Windows-1256 Arabic)
          const utf8Decoder = new TextDecoder('utf-8', { fatal: true });
          decodedText = utf8Decoder.decode(buffer);
        } catch (e) {
          try {
            // Fallback to Windows-1256 (standard for Arabic text files created on Windows)
            const win1256Decoder = new TextDecoder('windows-1256');
            decodedText = win1256Decoder.decode(buffer);
          } catch (e2) {
            // Universal fallback
            decodedText = new TextDecoder('iso-8859-1').decode(buffer);
          }
        }

        // 3. Strip Byte Order Mark (BOM) if present
        if (decodedText.charCodeAt(0) === 0xFEFF) {
          decodedText = decodedText.slice(1);
        }

        return decodedText;
      }

      // Stream file with clean EOF chunking and multibyte stream decoder (>20MB)
      function readFileStream(file, onProgress, onComplete, onError) {
        if (!file) return;
        const fileSize = file.size;

        if (fileSize === 0) {
          onComplete('');
          return;
        }

        const CHUNK_SIZE = 4 * 1024 * 1024; // 4MB progressive chunks
        let offset = 0;
        let accumulatedText = '';
        let streamDecoder = null;
        const reader = new FileReader();

        function readNextChunk() {
          // Strict stream EOF termination condition: offset >= fileSize
          if (offset >= fileSize) {
            if (accumulatedText.charCodeAt(0) === 0xFEFF) {
              accumulatedText = accumulatedText.slice(1);
            }
            onComplete(accumulatedText);
            return;
          }

          const nextOffset = Math.min(offset + CHUNK_SIZE, fileSize);
          const chunk = file.slice(offset, nextOffset);

          reader.onload = function(e) {
            try {
              const buffer = e.target.result;
              const u8 = new Uint8Array(buffer);
              const isLast = (nextOffset >= fileSize);

              if (!streamDecoder) {
                if (u8.length >= 2 && u8[0] === 0xFF && u8[1] === 0xFE) {
                  streamDecoder = new TextDecoder('utf-16le');
                } else if (u8.length >= 2 && u8[0] === 0xFE && u8[1] === 0xFF) {
                  streamDecoder = new TextDecoder('utf-16be');
                } else {
                  try {
                    new TextDecoder('utf-8', { fatal: true }).decode(u8.subarray(0, Math.min(u8.length, 65536)));
                    streamDecoder = new TextDecoder('utf-8');
                  } catch (utfErr) {
                    try {
                      new TextDecoder('windows-1256').decode(u8.subarray(0, Math.min(u8.length, 65536)));
                      streamDecoder = new TextDecoder('windows-1256');
                    } catch (wErr) {
                      streamDecoder = new TextDecoder('iso-8859-1');
                    }
                  }
                }
              }

              // Always pass { stream: !isLast } so multibyte Arabic characters split across chunk boundaries do not get corrupted
              const chunkStr = streamDecoder.decode(buffer, { stream: !isLast });
              accumulatedText += chunkStr;
              offset = nextOffset;

              if (onProgress) {
                const pct = Math.min(95, Math.round((offset / fileSize) * 100));
                onProgress(pct);
              }

              // Verify strict stream EOF condition
              if (offset >= fileSize) {
                if (accumulatedText.charCodeAt(0) === 0xFEFF) {
                  accumulatedText = accumulatedText.slice(1);
                }
                onComplete(accumulatedText);
              } else {
                setTimeout(readNextChunk, 0);
              }
            } catch (chunkErr) {
              if (onError) onError(chunkErr);
            }
          };

          reader.onerror = function(err) {
            if (onError) onError(err);
          };

          reader.readAsArrayBuffer(chunk);
        }

        readNextChunk();
      }

      function showToast(msg) {
        toastMsg.textContent = msg;
        toastBox.classList.add('show');
        setTimeout(() => toastBox.classList.remove('show'), 3000);
      }

      function formatBytes(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
      }

      // Process raw text with worker
      function processData(text, filename, originalFileSize) {
        activeRawText = text;
        activeFileName = filename || 'dataset.csv';

        statusCard.style.display = 'flex';
        controlsPanel.style.display = 'flex';
        inspectorCard.style.display = 'flex';

        fileNameBadge.textContent = activeFileName;
        const byteCount = (originalFileSize !== undefined && originalFileSize !== null) ? originalFileSize : new Blob([text]).size;
        fileSizeBadge.textContent = formatBytes(byteCount);
        workerStatusBadge.textContent = (I18N[currentLang] && I18N[currentLang].workerWorking) || 'Worker: Processing...';
        workerStatusBadge.classList.remove('error');
        progressBar.style.width = '70%';

        if (!workerInstance) initWorker();

        // 10-second fail-safe watchdog timer
        if (workerWatchdogTimer) clearTimeout(workerWatchdogTimer);
        workerWatchdogTimer = setTimeout(() => {
          handleWorkerError('Processing timed out: Failed to parse file encoding or structure within 10 seconds.');
          if (workerInstance) {
            workerInstance.terminate();
            workerInstance = null;
          }
        }, 10000);

        workerInstance.postMessage({
          action: 'parseAndConvert',
          text: activeRawText,
          targetFormat: selectTargetFormat.value,
          customDelimiter: selectDelimiter.value,
          filename: activeFileName
        });
      }

      function renderComplete(data) {
        if (workerWatchdogTimer) {
          clearTimeout(workerWatchdogTimer);
          workerWatchdogTimer = null;
        }
        progressBar.style.width = '100%';
        workerStatusBadge.textContent = (I18N[currentLang] && I18N[currentLang].workerIdle) || 'Worker: Ready';
        rowCountBadge.textContent = data.totalRows.toLocaleString() + ' Rows';
        colCountBadge.textContent = data.columns.length + (data.columns.length === 1 ? ' Column' : ' Columns');
        timeElapsedBadge.textContent = data.elapsed + 'ms';

        // Render Schema
        schemaTableBody.innerHTML = '';
        data.schema.forEach(col => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td style="font-weight:700;color:#fb923c">${escapeHtml(col.name)}</td>
            <td><span class="tag-badge worker">${col.type}</span></td>
            <td>${escapeHtml(col.sample)}</td>
            <td>${col.uniqueCount}</td>
          `;
          schemaTableBody.appendChild(tr);
        });

        // Render Table Headers
        tableHead.innerHTML = '';
        const trHead = document.createElement('tr');
        const thIndex = document.createElement('th');
        thIndex.className = 'row-index';
        thIndex.textContent = '#';
        trHead.appendChild(thIndex);

        data.columns.forEach(col => {
          const th = document.createElement('th');
          th.textContent = col;
          trHead.appendChild(th);
        });
        tableHead.appendChild(trHead);

        // Render Table Body
        currentPage = 1;
        renderTableRows();

        // Render Code Preview
        const previewSnippet = data.convertedText.slice(0, 10000);
        codeOutputBox.textContent = previewSnippet + (data.convertedText.length > 10000 ? '\n... [Preview Truncated: Use "Download Export" for entire dataset]' : '');

        showToast('Dataset parsed in ' + data.elapsed + 'ms!');
      }

      function renderTableRows() {
        if (!currentResult) return;
        tableBody.innerHTML = '';

        let rows = currentResult.previewRows;
        if (currentFilter) {
          const q = currentFilter.toLowerCase();
          rows = rows.filter(r => Object.values(r).some(val => String(val).toLowerCase().includes(q)));
        }

        const totalFiltered = rows.length;
        const totalPages = Math.ceil(totalFiltered / rowsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        const startIdx = (currentPage - 1) * rowsPerPage;
        const endIdx = Math.min(startIdx + rowsPerPage, totalFiltered);
        const pagedRows = rows.slice(startIdx, endIdx);

        pagedRows.forEach((r, idx) => {
          const tr = document.createElement('tr');
          const tdIdx = document.createElement('td');
          tdIdx.className = 'row-index';
          tdIdx.textContent = startIdx + idx + 1;
          tr.appendChild(tdIdx);

          currentResult.columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = r[col] !== undefined ? r[col] : '';
            tr.appendChild(td);
          });
          tableBody.appendChild(tr);
        });

        paginationInfo.textContent = 'Showing ' + (totalFiltered > 0 ? (startIdx + 1) : 0) + ' to ' + endIdx + ' of ' + totalFiltered + ' preview rows (' + currentResult.totalRows.toLocaleString() + ' total in file)';
        btnPrevPage.disabled = currentPage <= 1;
        btnNextPage.disabled = currentPage >= totalPages;
      }

      function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      // Event Listeners
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });

      dropzone.addEventListener('click', () => fileInput.click());

      function loadFile(file) {
        if (!file) return;

        if (workerWatchdogTimer) {
          clearTimeout(workerWatchdogTimer);
          workerWatchdogTimer = null;
        }

        statusCard.style.display = 'flex';
        controlsPanel.style.display = 'flex';
        inspectorCard.style.display = 'flex';
        fileNameBadge.textContent = file.name;
        fileSizeBadge.textContent = formatBytes(file.size);
        rowCountBadge.textContent = '0 Rows';
        colCountBadge.textContent = '0 Columns';
        workerStatusBadge.textContent = (I18N[currentLang] && I18N[currentLang].workerWorking) || 'Worker: Processing...';
        workerStatusBadge.classList.remove('error');
        progressBar.style.width = '10%';

        if (file.size === 0) {
          handleWorkerError('The uploaded file is empty.');
          return;
        }

        // For files under 20MB: Read entire file directly as ArrayBuffer with resilient fallback
        if (file.size <= MAX_DIRECT_SIZE) {
          const reader = new FileReader();
          progressBar.style.width = '35%';

          reader.onload = function(e) {
            progressBar.style.width = '65%';
            try {
              const buffer = e.target.result;
              const fullText = decodeBufferResilient(buffer);
              processData(fullText, file.name, file.size);
            } catch (err) {
              handleWorkerError((err && err.message) || 'Failed to parse file encoding');
            }
          };

          reader.onerror = function(err) {
            handleWorkerError('Error reading file: ' + (err && err.message ? err.message : 'Unknown'));
          };

          reader.readAsArrayBuffer(file);
        } else {
          // Streaming chunk safety for huge files (>20MB)
          readFileStream(
            file,
            (pct) => {
              progressBar.style.width = Math.max(10, Math.min(60, pct)) + '%';
            },
            (fullText) => {
              processData(fullText, file.name, file.size);
            },
            (err) => {
              handleWorkerError((err && err.message) || 'Error reading file stream');
            }
          );
        }
      }

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          loadFile(file);
        }
      });

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) {
          loadFile(file);
        }
      });

      // Sample 5,000-Row Generator
      btnLoadSample.addEventListener('click', (e) => {
        e.stopPropagation();
        const rows = ['order_id,customer_name,country,item_sku,unit_price,quantity,order_status,created_at'];
        const countries = ['United States', 'Germany', 'United Kingdom', 'Canada', 'France', 'Saudi Arabia', 'Japan', 'Australia', 'Italy', 'Brazil'];
        const statuses = ['Delivered', 'Processing', 'Shipped', 'Pending', 'Cancelled'];
        const items = ['SKU-VANTOR-PRO', 'SKU-QUANTUM-X', 'SKU-DEV-KIT-9', 'SKU-SEC-CHIP', 'SKU-CLOUD-SYNC'];

        for (let i = 1; i <= 5000; i++) {
          const country = countries[i % countries.length];
          const status = statuses[i % statuses.length];
          const item = items[i % items.length];
          const price = (19.99 + (i % 80) * 2.5).toFixed(2);
          const qty = (i % 5) + 1;
          const date = new Date(Date.now() - (i * 3600000)).toISOString().split('T')[0];
          rows.push('ORD-' + (10000 + i) + ',Customer_' + (100 + (i % 400)) + ',' + country + ',' + item + ',' + price + ',' + qty + ',' + status + ',' + date);
        }

        processData(rows.join('\n'), 'sample_ecommerce_5000_records.csv');
      });

      // Target Format & Delimiter Change
      selectTargetFormat.addEventListener('change', () => {
        if (activeRawText) processData(activeRawText, activeFileName);
      });

      selectDelimiter.addEventListener('change', () => {
        if (activeRawText) processData(activeRawText, activeFileName);
      });

      // Download Export
      btnDownloadExport.addEventListener('click', () => {
        if (!currentResult || !currentResult.convertedText) return;
        const blob = new Blob([currentResult.convertedText], { type: currentResult.exportMime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const baseName = activeFileName.replace(/\.[^/.]+$/, '');
        a.href = url;
        a.download = 'converted_' + baseName + '.' + currentResult.exportExt;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Export downloaded successfully!');
      });

      // Copy Data
      btnCopyConverted.addEventListener('click', () => {
        if (!currentResult || !currentResult.convertedText) return;
        navigator.clipboard.writeText(currentResult.convertedText).then(() => {
          showToast('Data copied to clipboard!');
        });
      });

      // Clear Data
      btnClearData.addEventListener('click', () => {
        activeRawText = '';
        currentResult = null;
        fileInput.value = '';
        statusCard.style.display = 'none';
        controlsPanel.style.display = 'none';
        inspectorCard.style.display = 'none';
        progressBar.style.width = '0%';
        showToast('Data cleared from browser RAM');
      });

      // Inspector Tabs
      inspectorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          inspectorTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const target = tab.getAttribute('data-tab');

          tabContentPreview.style.display = target === 'preview' ? 'block' : 'none';
          tabContentCode.style.display = target === 'code' ? 'block' : 'none';
          tabContentSchema.style.display = target === 'schema' ? 'block' : 'none';
        });
      });

      // Filter Search
      filterInput.addEventListener('input', (e) => {
        currentFilter = e.target.value.trim();
        currentPage = 1;
        renderTableRows();
      });

      // Pagination
      btnPrevPage.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderTableRows();
        }
      });

      btnNextPage.addEventListener('click', () => {
        currentPage++;
        renderTableRows();
      });

      // Language Switcher & i18n
      function setLanguage(lang) {
        window.setLanguage = setLanguage;
        window.applyLanguage = setLanguage;
        if (!I18N[lang]) lang = 'en';
        currentLang = lang;
        try {
          localStorage.setItem('vantorkit_lang', lang);
        } catch (e) {}

        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const dict = I18N[lang];
        currentLangLabel.textContent = dict.langLabel || (lang === 'ar' ? 'العربية' : lang === 'fr' ? 'Français' : lang === 'it' ? 'Italiano' : 'English');

        // Update data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (dict[key]) {
            el.textContent = dict[key];
          }
        });

        // Update placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
          const key = el.getAttribute('data-i18n-placeholder');
          if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
          }
        });

        // Update active content block
        document.querySelectorAll('.lang-content-block').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });

        // Update active dropdown item
        langOptions.forEach(opt => {
          opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
      }

      langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('open');
      });

      document.addEventListener('click', () => langMenu.classList.remove('open'));

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.getAttribute('data-lang');
          setLanguage(lang);
          langMenu.classList.remove('open');
        });
      });

      // Initialize
      initWorker();
      setLanguage(currentLang);
    })();