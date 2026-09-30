/**
 * VantorKit — Global Navigation Sidebar & Favorites System
 * Zero Backend • Privacy First • LocalStorage Only
 * Accessible, LTR/RTL Aware, Zero Regressions
 */

(function () {
  'use strict';

  // --- 32 Tools Complete Static Registry ---
  const TOOLS_REGISTRY = [
  {
    "id": "percentage-calculator",
    "filename": "percentage-calculator.html",
    "category": "math",
    "titles": {
      "en": "Percentage Calculator",
      "ar": "حاسبة النسبة المئوية",
      "fr": "Calculateur de Pourcentage",
      "it": "Calcolatore di Percentuale"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle></svg>"
  },
  {
    "id": "compound-interest",
    "filename": "compound-interest.html",
    "category": "math",
    "titles": {
      "en": "Compound Interest",
      "ar": "الفائدة المركبة",
      "fr": "Intérêts Composés",
      "it": "Interesse Composto"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline></svg>"
  },
  {
    "id": "loan-amortization",
    "filename": "loan-calculator.html",
    "category": "math",
    "titles": {
      "en": "Loan & Amortization",
      "ar": "القروض وجدول الاستهلاك",
      "fr": "Prêts & Amortissement",
      "it": "Prestiti & Ammortamento"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"></rect><line x1=\"2\" y1=\"10\" x2=\"22\" y2=\"10\"></line></svg>"
  },
  {
    "id": "discount-sales-tax",
    "filename": "discount-tax-calculator.html",
    "category": "math",
    "titles": {
      "en": "Discount & Sales Tax",
      "ar": "الخصومات وضريبة المبيعات",
      "fr": "Remise & Taxe de Vente",
      "it": "Sconto & Tasse di Vendita"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line></svg>"
  },
  {
    "id": "gpa-calculator",
    "filename": "gpa-calculator.html",
    "category": "math",
    "titles": {
      "en": "GPA & Grade Calculator",
      "ar": "حاسبة المعدل التراكمي",
      "fr": "Calculateur de Moyenne & Notes",
      "it": "Calcolatore Media & Voti"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"></path><path d=\"M6 12v5c3 3 9 3 12 0v-5\"></path></svg>"
  },
  {
    "id": "csv-json",
    "filename": "csv-json-converter.html",
    "category": "files",
    "titles": {
      "en": "CSV to JSON / JSON to CSV",
      "ar": "تحويل CSV إلى JSON والعكس",
      "fr": "CSV vers JSON / JSON vers CSV",
      "it": "Da CSV a JSON / Da JSON a CSV"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline></svg>"
  },
  {
    "id": "pdf-merge",
    "filename": "pdf-merge.html",
    "category": "files",
    "titles": {
      "en": "PDF Merge",
      "ar": "دمج ملفات PDF",
      "fr": "Fusionner des PDF",
      "it": "Unisci PDF"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 2h8l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z\"></path><path d=\"M4 8h2v14H4z\"></path></svg>"
  },
  {
    "id": "pdf-split",
    "filename": "pdf-split.html",
    "category": "files",
    "titles": {
      "en": "PDF Split & Extract",
      "ar": "تقسيم واستخراج صفحات PDF",
      "fr": "Diviser & Extraire PDF",
      "it": "Dividi ed Estrai PDF"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line></svg>"
  },
  {
    "id": "pdf-to-word",
    "filename": "pdf-to-word.html",
    "category": "files",
    "titles": {
      "en": "PDF to Word Converter",
      "ar": "تحويل PDF إلى Word",
      "fr": "Convertisseur PDF vers Word",
      "it": "Convertitore PDF in Word"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>"
  },
  {
    "id": "big-data-transformer",
    "filename": "big-data-transformer.html",
    "category": "files",
    "titles": {
      "en": "Big-Data Transformer & Stream Parser",
      "ar": "محول ومعالج البيانات الضخمة",
      "fr": "Transformateur Big-Data Hors Ligne",
      "it": "Trasformatore Big-Data Offline"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path></svg>"
  },
  {
    "id": "pdf-redactor",
    "filename": "pdf-redactor.html",
    "category": "pdf",
    "titles": {
      "en": "PDF Redactor & Signer",
      "ar": "طمس وتوقيع مستندات PDF",
      "fr": "Biffure & Signature PDF",
      "it": "Oscuramento & Firma PDF"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path><path d=\"M9 12l2 2 4-4\"></path></svg>"
  },
  {
    "id": "base64-file-encoder",
    "filename": "base64-file-encoder.html",
    "category": "files",
    "titles": {
      "en": "Base64 File Encoder",
      "ar": "تشفير الملفات بـ Base64",
      "fr": "Encodeur de Fichiers Base64",
      "it": "Codificatore File Base64"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line></svg>"
  },
  {
    "id": "audio-trimmer",
    "filename": "audio-trimmer.html",
    "category": "files",
    "titles": {
      "en": "Audio Trimmer & Cutter",
      "ar": "قص وتقطيع الصوت",
      "fr": "Découpeur audio & Trimmer",
      "it": "Taglia Audio & Trimmer"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle></svg>"
  },
  {
    "id": "video-trimmer",
    "filename": "video-trimmer.html",
    "category": "files",
    "titles": {
      "en": "Video Trimmer & Cutter",
      "ar": "قص وتعديل الفيديو",
      "fr": "Découpeur vidéo & Trimmer",
      "it": "Taglia Video & Trimmer"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line></svg>"
  },
  {
    "id": "color-palette-extractor",
    "filename": "color-palette-extractor.html",
    "category": "images",
    "titles": {
      "en": "Color Palette Extractor",
      "ar": "استخراج لوحة الألوان",
      "fr": "Extracteur de Palette de Couleurs",
      "it": "Estrattore di Palette Colori"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"13.5\" cy=\"6.5\" r=\".5\"></circle><circle cx=\"17.5\" cy=\"10.5\" r=\".5\"></circle><circle cx=\"8.5\" cy=\"7.5\" r=\".5\"></circle><circle cx=\"6.5\" cy=\"12.5\" r=\".5\"></circle><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z\"></path></svg>"
  },
  {
    "id": "svg-png-converter",
    "filename": "svg-to-png.html",
    "category": "images",
    "titles": {
      "en": "SVG to PNG Converter",
      "ar": "تحويل SVG إلى PNG",
      "fr": "Convertisseur SVG vers PNG",
      "it": "Convertitore da SVG a PNG"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2L2 7l10 5 10-5-10-5z\"></path><path d=\"M2 17l10 5 10-5\"></path><path d=\"M2 12l10 5 10-5\"></path></svg>"
  },
  {
    "id": "image-resizer-crop",
    "filename": "image-resizer.html",
    "category": "images",
    "titles": {
      "en": "Image Resizer & Crop",
      "ar": "تعديل أبعاد وقص الصور",
      "fr": "Redimensionner & Rogner l'Image",
      "it": "Ridimensiona & Ritaglia Immagine"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 2v14a2 2 0 0 0 2 2h14\"></path><path d=\"M18 22V8a2 2 0 0 0-2-2H2\"></path></svg>"
  },
  {
    "id": "image-to-base64",
    "filename": "image-to-base64.html",
    "category": "images",
    "titles": {
      "en": "Image to Base64",
      "ar": "تحويل الصورة إلى Base64",
      "fr": "Image vers Base64",
      "it": "Da Immagine a Base64"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><path d=\"M21 15l-5-5L5 21\"></path></svg>"
  },
  {
    "id": "image-compressor",
    "filename": "image-compressor.html",
    "category": "images",
    "titles": {
      "en": "Image Compressor & WebP Optimizer",
      "ar": "ضاغط الصور ومُحسّن WEBP",
      "fr": "Compresseur d'Images & Optimiseur WebP",
      "it": "Compressore Immagini & Ottimizzatore WebP"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line></svg>"
  },
  {
    "id": "favicon-builder",
    "filename": "favicon-builder.html",
    "category": "images",
    "titles": {
      "en": "Multi-Size Favicon Builder",
      "ar": "منشئ أيقونات Favicon المتعددة",
      "fr": "Générateur de Favicon Multi-Tailles",
      "it": "Generatore di Favicon Multi-Dimensione"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon></svg>"
  },
  {
    "id": "metadata-cleaner",
    "filename": "metadata-cleaner.html",
    "category": "images",
    "titles": {
      "en": "Metadata & EXIF Cleaner",
      "ar": "منظف البيانات الوصفية وEXIF",
      "fr": "Nettoyeur de Métadonnées & EXIF",
      "it": "Pulitore Metadati & EXIF"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path><path d=\"m9 12 2 2 4-4\"></path></svg>"
  },
  {
    "id": "date-difference",
    "filename": "date-difference.html",
    "category": "everyday",
    "titles": {
      "en": "Date Difference & Workdays",
      "ar": "فرق التواريخ وأيام العمل",
      "fr": "Différence de Dates & Jours Ouvrés",
      "it": "Differenza Date & Giorni Lavorativi"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>"
  },
  {
    "id": "qr-code-generator",
    "filename": "qr-generator.html",
    "category": "everyday",
    "titles": {
      "en": "QR Code Generator",
      "ar": "مولد رموز QR Code",
      "fr": "Générateur de Code QR",
      "it": "Generatore di Codici QR"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"></rect><rect x=\"18\" y=\"14\" width=\"3\" height=\"3\"></rect><rect x=\"14\" y=\"18\" width=\"7\" height=\"3\"></rect></svg>"
  },
  {
    "id": "age-milestone-calculator",
    "filename": "age-calculator.html",
    "category": "everyday",
    "titles": {
      "en": "Age & Milestone Calculator",
      "ar": "حاسبة العمر والمحطات الزمنية",
      "fr": "Calculateur d'Âge & Jalons",
      "it": "Calcolatore Età & Traguardi"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 14 14\"></polyline></svg>"
  },
  {
    "id": "password-generator",
    "filename": "password-generator.html",
    "category": "everyday",
    "titles": {
      "en": "Password Generator & Entropy",
      "ar": "مولد كلمات المرور وقوة التشفير",
      "fr": "Générateur de Mots de Passe & Entropie",
      "it": "Generatore di Password & Entropia"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path></svg>"
  },
  {
    "id": "timezone-meeting-planner",
    "filename": "timezone-planner.html",
    "category": "everyday",
    "titles": {
      "en": "Time Zone Meeting Planner",
      "ar": "مخطط الاجتماعات عبر المناطق الزمنية",
      "fr": "Planificateur de Réunions Fuseaux Horaires",
      "it": "Pianificatore Riunioni Fusi Orari"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path></svg>"
  },
  {
    "id": "word-counter",
    "filename": "word-counter.html",
    "category": "text",
    "titles": {
      "en": "Word & Character Counter",
      "ar": "عداد الكلمات والأحرف",
      "fr": "Compteur de Mots & Caractères",
      "it": "Conteggio Parole & Caratteri"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line></svg>"
  },
  {
    "id": "markdown-previewer",
    "filename": "markdown-editor.html",
    "category": "text",
    "titles": {
      "en": "Markdown Previewer",
      "ar": "محرر ومعاين Markdown",
      "fr": "Prévisualiseur Markdown",
      "it": "Anteprima Markdown"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line></svg>"
  },
  {
    "id": "url-slug-generator",
    "filename": "case-converter.html",
    "category": "text",
    "titles": {
      "en": "Case Converter & URL Slugifier",
      "ar": "محول حالات الأحرف ومولد روابط URL",
      "fr": "Convertisseur de Casse & Slugs URL",
      "it": "Convertitore di Maiuscole & Slug URL"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line></svg>"
  },
  {
    "id": "text-diff",
    "filename": "text-diff.html",
    "category": "text",
    "titles": {
      "en": "Text Diff & Compare",
      "ar": "مقارنة النصوص وتحديد الفروقات",
      "fr": "Comparateur de Texte (Diff)",
      "it": "Confronto Testo & Diff"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M16 3h5v5\"></path><path d=\"M4 20L21 3\"></path><path d=\"M21 16v5h-5\"></path><path d=\"M15 15l6 6\"></path><path d=\"M4 4l5 5\"></path></svg>"
  },
  {
    "id": "css-grid-generator",
    "filename": "css-grid-generator.html",
    "category": "text",
    "titles": {
      "en": "CSS Grid & Gradient Studio",
      "ar": "استوديو شبكات CSS والتدرجات",
      "fr": "Studio CSS Grid & Dégradés",
      "it": "Studio CSS Grid & Sfumature"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line></svg>"
  },
  {
    "id": "jwt-decoder",
    "filename": "jwt-decoder.html",
    "category": "text",
    "titles": {
      "en": "JWT Decoder & Verifier",
      "ar": "محلل ومتحقق رموز JWT",
      "fr": "Décodeur & Vérificateur JWT",
      "it": "Decodificatore & Verificatore JWT"
    },
    "iconSvg": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path></svg>"
  }
];

  // --- Multilingual Dictionaries for Sidebar ---
  const I18N = {
    en: {
      hamburgerAria: "Open menu",
      closeAria: "Close menu",
      recentTitle: "Recently Used",
      recentEmpty: "No tools used yet",
      recentEmptySub: "Tools you open will appear here for quick access",
      favoritesTitle: "Favorites",
      favoritesEmpty: "No favorite tools yet",
      favoritesEmptySub: "Click the star icon on any tool card to save it here",
      categoriesTitle: "All Categories",
      catAll: "All Tools",
      catMath: "Math & Finance",
      catFiles: "PDF & Files",
      catImages: "Images",
      catText: "Text Tools",
      catEveryday: "Everyday",
      footerGithub: "GitHub",
      footerAbout: "About Us",
      footerContact: "Contact",
      favAddAria: "Add to favorites",
      favRemoveAria: "Remove from favorites",
      unstarTooltip: "Remove from favorites"
    },
    ar: {
      hamburgerAria: "فتح القائمة",
      closeAria: "إغلاق القائمة",
      recentTitle: "المستخدمة مؤخراً",
      recentEmpty: "لم تستخدم أي أداة بعد",
      recentEmptySub: "الأدوات التي تستخدمها ستظهر هنا للوصول السريع",
      favoritesTitle: "المفضلة",
      favoritesEmpty: "لا توجد أدوات مفضلة بعد",
      favoritesEmptySub: "انقر على أيقونة النجمة على أي بطاقة أداة لحفظها هنا",
      categoriesTitle: "جميع التصنيفات",
      catAll: "جميع الأدوات",
      catMath: "الرياضيات والمالية",
      catFiles: "ملفات و PDF",
      catImages: "الصور",
      catText: "أدوات النصوص",
      catEveryday: "أدوات يومية",
      footerGithub: "جيت هاب",
      footerAbout: "من نحن",
      footerContact: "اتصل بنا",
      favAddAria: "أضف للمفضلة",
      favRemoveAria: "إزالة من المفضلة",
      unstarTooltip: "إزالة من المفضلة"
    },
    fr: {
      hamburgerAria: "Ouvrir le menu",
      closeAria: "Fermer le menu",
      recentTitle: "Récemment utilisés",
      recentEmpty: "Aucun outil utilisé pour le moment",
      recentEmptySub: "Les outils consultés apparaîtront ici pour un accès rapide",
      favoritesTitle: "Favoris",
      favoritesEmpty: "Aucun favori pour le moment",
      favoritesEmptySub: "Cliquez sur l'étoile d'une carte pour l'épingler ici",
      categoriesTitle: "Toutes les catégories",
      catAll: "Tous les outils",
      catMath: "Math & Finance",
      catFiles: "PDF & Fichiers",
      catImages: "Images",
      catText: "Outils Texte",
      catEveryday: "Quotidien",
      footerGithub: "GitHub",
      footerAbout: "À propos",
      footerContact: "Contact",
      favAddAria: "Ajouter aux favoris",
      favRemoveAria: "Retirer des favoris",
      unstarTooltip: "Retirer des favoris"
    },
    it: {
      hamburgerAria: "Apri menu",
      closeAria: "Chiudi menu",
      recentTitle: "Usati di recente",
      recentEmpty: "Nessun strumento ancora utilizzato",
      recentEmptySub: "Gli strumenti che usi appariranno qui per un accesso rapido",
      favoritesTitle: "Preferiti",
      favoritesEmpty: "Nessun preferito ancora",
      favoritesEmptySub: "Fai clic sulla stella di una scheda per salvarlo qui",
      categoriesTitle: "Tutte le categorie",
      catAll: "Tutti gli strumenti",
      catMath: "Matematica & Finanza",
      catFiles: "PDF & File",
      catImages: "Immagini",
      catText: "Strumenti Testo",
      catEveryday: "Tutti i giorni",
      footerGithub: "GitHub",
      footerAbout: "Chi siamo",
      footerContact: "Contatto",
      favAddAria: "Aggiungi ai preferiti",
      favRemoveAria: "Rimuovi dai preferiti",
      unstarTooltip: "Rimuovi dai preferiti"
    }
  };

  const CATEGORY_KEYS = [
    { key: 'all', i18nKey: 'catAll', label: 'All Tools' },
    { key: 'math', i18nKey: 'catMath', label: 'Math & Finance' },
    { key: 'files', i18nKey: 'catFiles', label: 'PDF & Files' },
    { key: 'images', i18nKey: 'catImages', label: 'Images' },
    { key: 'text', i18nKey: 'catText', label: 'Text Tools' },
    { key: 'everyday', i18nKey: 'catEveryday', label: 'Everyday' }
  ];

  // --- Environment & Path Detection ---
  const isToolsSubdir = window.location.pathname.includes('/tools/') || 
    (window.location.pathname.replace(/\\/g, '/').split('/').slice(-2)[0] === 'tools');
  const rootPrefix = isToolsSubdir ? '../' : './';
  const toolsPrefix = isToolsSubdir ? './' : 'tools/';

  function getLang() {
    try {
      const htmlLang = document.documentElement.getAttribute('lang');
      if (htmlLang && I18N[htmlLang]) return htmlLang;
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && I18N[stored]) return stored;
    } catch (e) {}
    return 'en';
  }

  function getTranslation(key) {
    const lang = getLang();
    const dict = I18N[lang] || I18N.en;
    return dict[key] || I18N.en[key] || '';
  }

  // --- LocalStorage Helpers (try/catch protected) ---
  const RECENT_KEY = 'vantorkit_recent_tools';
  const FAVORITES_KEY = 'vantorkit_favorite_tools';

  function getRecentTools() {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveRecentTools(arr) {
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(arr));
    } catch (e) {}
  }

  function getFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(arr) {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
    } catch (e) {}
  }

  // --- Record current tool visit ---
  function recordCurrentTool() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const currentFilename = path.split('/').pop().toLowerCase();
    if (!currentFilename || currentFilename === 'index.html' || currentFilename === '') return;

    let matched = TOOLS_REGISTRY.find(t => t.filename.toLowerCase() === currentFilename);
    if (!matched) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical && canonical.href) {
        matched = TOOLS_REGISTRY.find(t => canonical.href.toLowerCase().includes(t.filename.toLowerCase()));
      }
    }

    if (matched) {
      const recents = getRecentTools().filter(id => id !== matched.id);
      recents.unshift(matched.id);
      if (recents.length > 5) recents.length = 5;
      saveRecentTools(recents);
    }
  }

  // --- DOM Elements Reference ---
  let backdropEl = null;
  let drawerEl = null;
  let toggleBtnEl = null;
  let closeBtnEl = null;
  let lastFocusedEl = null;
  let isSidebarOpen = false;

  // --- Create or ensure DOM markup ---
  function initDOM() {
    // 1. Ensure Toggle Button in Header
    toggleBtnEl = document.getElementById('vkSidebarToggle');
    if (!toggleBtnEl) {
      // Find brand link to place hamburger to its far left in LTR (far right in RTL)
      const brandLink = document.querySelector('.brand-link, .nav-brand');
      if (brandLink) {
        toggleBtnEl = document.createElement('button');
        toggleBtnEl.type = 'button';
        toggleBtnEl.className = 'vk-sidebar-toggle';
        toggleBtnEl.id = 'vkSidebarToggle';
        toggleBtnEl.setAttribute('aria-label', getTranslation('hamburgerAria'));
        toggleBtnEl.setAttribute('aria-expanded', 'false');
        toggleBtnEl.setAttribute('aria-controls', 'vkSidebarDrawer');
        toggleBtnEl.innerHTML = `
          <svg class="vk-sidebar-toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        `;
        brandLink.parentNode.insertBefore(toggleBtnEl, brandLink);
      }
    }

    // 2. Ensure Backdrop
    backdropEl = document.getElementById('vkSidebarBackdrop');
    if (!backdropEl) {
      backdropEl = document.createElement('div');
      backdropEl.id = 'vkSidebarBackdrop';
      backdropEl.className = 'vk-sidebar-backdrop';
      backdropEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdropEl);
    }

    // 3. Ensure Drawer
    drawerEl = document.getElementById('vkSidebarDrawer');
    if (!drawerEl) {
      drawerEl = document.createElement('aside');
      drawerEl.id = 'vkSidebarDrawer';
      drawerEl.className = 'vk-sidebar-drawer';
      drawerEl.setAttribute('role', 'dialog');
      drawerEl.setAttribute('aria-modal', 'true');
      drawerEl.setAttribute('aria-label', 'Navigation Sidebar');
      drawerEl.innerHTML = `
        <div class="vk-sidebar-header">
          <a href="${rootPrefix}index.html" class="vk-sidebar-brand" aria-label="VantorKit Home">
            <svg class="vk-sidebar-brand-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vkGradL" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
                <linearGradient id="vkGradR" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#c084fc"/></linearGradient>
                <linearGradient id="vkGradC" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#a855f7"/></linearGradient>
              </defs>
              <rect x="2" y="2" width="36" height="36" rx="10" fill="#0d111d" stroke="rgba(59, 130, 246, 0.35)" stroke-width="1.5"/>
              <path d="M10 11.5L17.5 28.5L20.5 23L15 11.5H10Z" fill="url(#vkGradL)"/>
              <path d="M30 11.5L22.5 28.5L19.5 23L25 11.5H30Z" fill="url(#vkGradR)"/>
              <path d="M17.5 11.5L20 16.5L22.5 11.5L20 9L17.5 11.5Z" fill="url(#vkGradC)"/>
              <path d="M20 23L17.5 28.5L20 30.5L22.5 28.5L20 23Z" fill="#a855f7"/>
            </svg>
            <span class="vk-sidebar-brand-title">Vantor<span>Kit</span></span>
          </a>
          <button type="button" class="vk-sidebar-close" id="vkSidebarClose" aria-label="${getTranslation('closeAria')}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="vk-sidebar-body">
          <!-- Recently Used Section -->
          <div class="vk-sidebar-section">
            <div class="vk-sidebar-section-title">
              <svg class="vk-sidebar-section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span id="vkSidebarRecentTitle">${getTranslation('recentTitle')}</span>
            </div>
            <div id="vkSidebarRecentList"></div>
          </div>

          <!-- Favorites Section -->
          <div class="vk-sidebar-section">
            <div class="vk-sidebar-section-title">
              <svg class="vk-sidebar-section-icon vk-sidebar-icon-fav" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span id="vkSidebarFavTitle">${getTranslation('favoritesTitle')}</span>
            </div>
            <div id="vkSidebarFavList"></div>
          </div>

          <!-- All Categories Section -->
          <div class="vk-sidebar-section">
            <div class="vk-sidebar-section-title">
              <svg class="vk-sidebar-section-icon vk-sidebar-icon-cat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span id="vkSidebarCatTitle">${getTranslation('categoriesTitle')}</span>
            </div>
            <div class="vk-sidebar-cat-list" id="vkSidebarCatList"></div>
          </div>
        </div>

        <!-- Sidebar Footer -->
        <div class="vk-sidebar-footer">
          <a href="https://github.com/hajjami4270/vantorkit" target="_blank" rel="noopener noreferrer" class="vk-sidebar-footer-link" aria-label="View VantorKit on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span id="vkSidebarFooterGithub">${getTranslation('footerGithub')}</span>
          </a>
          <a href="${rootPrefix}about.html" class="vk-sidebar-footer-link">
            <span id="vkSidebarFooterAbout">${getTranslation('footerAbout')}</span>
          </a>
          <a href="${rootPrefix}contact.html" class="vk-sidebar-footer-link">
            <span id="vkSidebarFooterContact">${getTranslation('footerContact')}</span>
          </a>
        </div>
      `;
      document.body.appendChild(drawerEl);
    }

    closeBtnEl = document.getElementById('vkSidebarClose');

    // Attach Event Listeners
    if (toggleBtnEl) {
      toggleBtnEl.addEventListener('click', toggleSidebar);
    }
    if (closeBtnEl) {
      closeBtnEl.addEventListener('click', closeSidebar);
    }
    if (backdropEl) {
      backdropEl.addEventListener('click', closeSidebar);
    }

    // Render Categories
    renderCategories();

    // Render Dynamic Sections
    renderRecents();
    renderFavorites();

    // Setup Homepage Star Buttons
    initHomepageFavorites();
  }

  // --- Render Categories Section ---
  function renderCategories() {
    const list = document.getElementById('vkSidebarCatList');
    if (!list) return;

    list.innerHTML = CATEGORY_KEYS.map(cat => {
      const localizedName = getTranslation(cat.i18nKey) || cat.label;
      return `
        <a class="vk-sidebar-cat-item" data-cat="${cat.key}" href="${rootPrefix}index.html?cat=${cat.key}">
          <div class="vk-sidebar-cat-left">
            <span class="vk-sidebar-cat-dot"></span>
            <span class="vk-sidebar-cat-label">${localizedName}</span>
          </div>
          <span class="vk-sidebar-cat-arrow">→</span>
        </a>
      `;
    }).join('');

    // Attach click handler to categories
    list.querySelectorAll('.vk-sidebar-cat-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const catKey = item.dataset.cat;
        // If on homepage: trigger filter and close sidebar
        const homepageBtn = document.querySelector(`.category-btn[data-cat="${catKey}"]`);
        if (homepageBtn) {
          e.preventDefault();
          homepageBtn.click();
          closeSidebar();
          // Scroll slightly to tools grid
          const grid = document.getElementById('toolsGrid') || document.getElementById('categoriesBar');
          if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Navigating from a tool page to index.html with query parameter
          closeSidebar();
        }
      });
    });
  }

  // --- Render Recently Used Section ---
  function renderRecents() {
    const container = document.getElementById('vkSidebarRecentList');
    if (!container) return;

    const recentIds = getRecentTools();
    const currentLang = getLang();
    const recentTools = recentIds
      .map(id => TOOLS_REGISTRY.find(t => t.id === id))
      .filter(Boolean);

    if (recentTools.length === 0) {
      container.innerHTML = `
        <div class="vk-sidebar-empty">
          <svg class="vk-sidebar-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <div class="vk-sidebar-empty-text">${getTranslation('recentEmpty')}</div>
          <div class="vk-sidebar-empty-sub">${getTranslation('recentEmptySub')}</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="vk-sidebar-list">
        ${recentTools.map(tool => {
          const title = tool.titles[currentLang] || tool.titles.en;
          const catName = getTranslation('cat' + tool.category.charAt(0).toUpperCase() + tool.category.slice(1)) || tool.category;
          const href = toolsPrefix + tool.filename;
          return `
            <a href="${href}" class="vk-sidebar-tool-item" data-tool-id="${tool.id}">
              <div class="vk-sidebar-tool-left">
                <div class="vk-sidebar-tool-icon">${tool.iconSvg}</div>
                <div class="vk-sidebar-tool-info">
                  <span class="vk-sidebar-tool-name">${title}</span>
                  <span class="vk-sidebar-tool-cat">${catName}</span>
                </div>
              </div>
              <svg class="vk-sidebar-tool-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          `;
        }).join('')}
      </div>
    `;
  }

  // --- Render Favorites Section ---
  function renderFavorites() {
    const container = document.getElementById('vkSidebarFavList');
    if (!container) return;

    const favIds = getFavorites();
    const currentLang = getLang();
    const favTools = favIds
      .map(id => TOOLS_REGISTRY.find(t => t.id === id))
      .filter(Boolean);

    if (favTools.length === 0) {
      container.innerHTML = `
        <div class="vk-sidebar-empty">
          <svg class="vk-sidebar-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <div class="vk-sidebar-empty-text">${getTranslation('favoritesEmpty')}</div>
          <div class="vk-sidebar-empty-sub">${getTranslation('favoritesEmptySub')}</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="vk-sidebar-list">
        ${favTools.map(tool => {
          const title = tool.titles[currentLang] || tool.titles.en;
          const catName = getTranslation('cat' + tool.category.charAt(0).toUpperCase() + tool.category.slice(1)) || tool.category;
          const href = toolsPrefix + tool.filename;
          return `
            <div class="vk-sidebar-tool-item" data-tool-id="${tool.id}">
              <a href="${href}" class="vk-sidebar-tool-left" style="text-decoration:none; color:inherit;">
                <div class="vk-sidebar-tool-icon">${tool.iconSvg}</div>
                <div class="vk-sidebar-tool-info">
                  <span class="vk-sidebar-tool-name">${title}</span>
                  <span class="vk-sidebar-tool-cat">${catName}</span>
                </div>
              </a>
              <button type="button" class="vk-sidebar-tool-unstar" data-unstar-id="${tool.id}" aria-label="${getTranslation('unstarTooltip')}" title="${getTranslation('unstarTooltip')}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Attach unstar listeners in sidebar
    container.querySelectorAll('.vk-sidebar-tool-unstar').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const toolId = btn.dataset.unstarId;
        toggleFavorite(toolId);
      });
    });
  }

  // --- Toggle Favorite Logic ---
  function toggleFavorite(toolId) {
    let favs = getFavorites();
    if (favs.includes(toolId)) {
      favs = favs.filter(id => id !== toolId);
    } else {
      favs.push(toolId);
    }
    saveFavorites(favs);

    // Update sidebar UI
    renderFavorites();

    // Update homepage cards star state
    updateHomepageCardStars();
  }

  // --- Setup Homepage Card Stars ---
  function initHomepageFavorites() {
    const cards = document.querySelectorAll('.tool-card[data-tool-id]');
    if (cards.length === 0) return;

    cards.forEach(card => {
      const toolId = card.dataset.toolId;
      let metaEl = card.querySelector('.tool-meta');
      if (!metaEl) return;

      let favBtn = card.querySelector('.vk-sidebar-fav-btn');
      if (!favBtn) {
        favBtn = document.createElement('button');
        favBtn.type = 'button';
        favBtn.className = 'vk-sidebar-fav-btn';
        favBtn.dataset.toolFav = toolId;
        favBtn.setAttribute('aria-label', getTranslation('favAddAria'));
        favBtn.setAttribute('title', getTranslation('favAddAria'));
        favBtn.innerHTML = `
          <svg class="vk-sidebar-fav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        `;

        // Check if there is an existing badge or meta-actions
        let actionsEl = metaEl.querySelector('.vk-sidebar-meta-actions');
        if (!actionsEl) {
          actionsEl = document.createElement('div');
          actionsEl.className = 'vk-sidebar-meta-actions';
          const badgeEl = metaEl.querySelector('.tool-badge');
          if (badgeEl) {
            metaEl.insertBefore(actionsEl, badgeEl);
            actionsEl.appendChild(badgeEl);
          } else {
            metaEl.appendChild(actionsEl);
          }
        }
        actionsEl.appendChild(favBtn);

        favBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(toolId);
        });
      }
    });

    updateHomepageCardStars();
  }

  function updateHomepageCardStars() {
    const favs = getFavorites();
    const favAddLabel = getTranslation('favAddAria');
    const favRemoveLabel = getTranslation('favRemoveAria');

    document.querySelectorAll('.vk-sidebar-fav-btn').forEach(btn => {
      const id = btn.dataset.toolFav;
      const isFav = favs.includes(id);
      if (isFav) {
        btn.classList.add('vk-sidebar-fav-active');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', favRemoveLabel);
        btn.setAttribute('title', favRemoveLabel);
      } else {
        btn.classList.remove('vk-sidebar-fav-active');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', favAddLabel);
        btn.setAttribute('title', favAddLabel);
      }
    });
  }

  // --- Sidebar Open / Close Functions ---
  function openSidebar() {
    if (isSidebarOpen || !drawerEl) return;
    lastFocusedEl = (document.activeElement && document.activeElement !== document.body) ? document.activeElement : toggleBtnEl;
    isSidebarOpen = true;

    // Refresh dynamic sections
    renderRecents();
    renderFavorites();

    drawerEl.classList.add('vk-sidebar-open');
    if (backdropEl) backdropEl.classList.add('vk-sidebar-open');
    if (toggleBtnEl) toggleBtnEl.setAttribute('aria-expanded', 'true');
    document.body.classList.add('vk-sidebar-body-lock');

    // Accessibility focus move to close button
    if (closeBtnEl) {
      setTimeout(() => closeBtnEl.focus(), 50);
    }
  }

  function closeSidebar() {
    if (!isSidebarOpen || !drawerEl) return;
    isSidebarOpen = false;

    drawerEl.classList.remove('vk-sidebar-open');
    if (backdropEl) backdropEl.classList.remove('vk-sidebar-open');
    if (toggleBtnEl) toggleBtnEl.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('vk-sidebar-body-lock');

    // Accessibility focus return
    const elToFocus = (lastFocusedEl && typeof lastFocusedEl.focus === 'function') ? lastFocusedEl : toggleBtnEl;
    if (elToFocus && typeof elToFocus.focus === 'function') {
      setTimeout(() => elToFocus.focus(), 10);
    }
  }

  function toggleSidebar() {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // --- Keyboard Trap & Escape Handler ---
  document.addEventListener('keydown', (e) => {
    if (!isSidebarOpen || !drawerEl) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeSidebar();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = drawerEl.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || !drawerEl.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !drawerEl.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // --- Sync with Language Switcher via MutationObserver ---
  function updateSidebarLanguage() {
    if (toggleBtnEl) toggleBtnEl.setAttribute('aria-label', getTranslation('hamburgerAria'));
    if (closeBtnEl) closeBtnEl.setAttribute('aria-label', getTranslation('closeAria'));

    const recentTitle = document.getElementById('vkSidebarRecentTitle');
    if (recentTitle) recentTitle.textContent = getTranslation('recentTitle');

    const favTitle = document.getElementById('vkSidebarFavTitle');
    if (favTitle) favTitle.textContent = getTranslation('favoritesTitle');

    const catTitle = document.getElementById('vkSidebarCatTitle');
    if (catTitle) catTitle.textContent = getTranslation('categoriesTitle');

    const footerGithub = document.getElementById('vkSidebarFooterGithub');
    if (footerGithub) footerGithub.textContent = getTranslation('footerGithub');

    const footerAbout = document.getElementById('vkSidebarFooterAbout');
    if (footerAbout) footerAbout.textContent = getTranslation('footerAbout');

    const footerContact = document.getElementById('vkSidebarFooterContact');
    if (footerContact) footerContact.textContent = getTranslation('footerContact');

    renderCategories();
    renderRecents();
    renderFavorites();
    updateHomepageCardStars();
  }

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && (m.attributeName === 'lang' || m.attributeName === 'dir')) {
        updateSidebarLanguage();
        break;
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });

  // --- URL ?cat= handler on Homepage ---
  function checkUrlCategory() {
    try {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('cat');
      if (cat) {
        const btn = document.querySelector(`.category-btn[data-cat="${cat}"]`);
        if (btn) {
          btn.click();
        }
      }
    } catch (e) {}
  }

  // --- Initialization ---
  function init() {
    recordCurrentTool();
    initDOM();
    checkUrlCategory();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
