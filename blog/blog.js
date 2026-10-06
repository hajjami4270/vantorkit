/**
 * VantorKit Blog Subsystem — 4-Language i18n & BiDi Architecture Engine
 * Zero Backend • Strict CSP Compliant • Client-Side Only
 * Languages: English (en), Arabic (ar, RTL), French (fr), Italian (it)
 */

(function () {
  'use strict';

  const LANG_NAMES = {
    en: 'English',
    ar: 'العربية',
    fr: 'Français',
    it: 'Italiano'
  };

  const BLOG_I18N = {
    en: {
      // Navbar
      blog_badge: 'Blog',
      nav_all_tools: 'All 32 Utilities',
      nav_rss: 'RSS',
      nav_back_blog: 'Blog Hub',
      nav_launch_redactor: 'Open PDF Redactor',

      // Blog Hub Hero (blog/index.html)
      hero_badge: 'Client-Side Architecture & Research',
      hero_title: 'VantorKit <span>Engineering & Privacy</span> Guides',
      hero_subtitle: 'Architectural deep dives, cryptographic sandboxing, and practical engineering guides for true client-side web applications. Discover how to inspect, redact, and transform sensitive documents directly inside browser RAM without ever uploading data to the cloud.',
      feat_zero_uploads: '0 Bytes Server Uploads',
      feat_in_browser: 'In-Browser RAM Execution',
      feat_open_standards: 'Open Web & Wasm Standards',

      // Section Headers
      sec_latest_articles: 'Latest Technical Articles',
      sec_subscribe_rss: 'Subscribe via RSS',

      // Article Card 1 (Flagship)
      card1_cat: 'PDF Security & Privacy',
      card1_read_time: '6 min read',
      card1_title: 'How to Permanently Redact Sensitive Text in PDF Files Without Cloud Uploads',
      card1_excerpt: 'Drawing black boxes over text in standard PDF viewers creates visual masks that retain underlying vector characters. Learn why traditional redaction fails and how true HTML5 Canvas rasterization flattens documents locally in RAM.',
      card1_author: 'By VantorKit Security Team',
      card1_date: 'Oct 2026',
      card1_cta: 'Read Guide',

      // Article Card 2
      card2_cat: 'Forensics & Privacy',
      badge_coming_soon: 'Coming Soon',
      card2_title: 'Why Traditional Metadata Stripping Fails: Inspecting EXIF, XMP & Document Streams',
      card2_excerpt: 'Standard file cleaners often leave hidden camera serial numbers, GPS coordinates, and revision histories intact in document binary trees. An analysis of client-side binary tree purges.',
      card2_author: 'By VantorKit Research',
      card2_date: 'Research Preview',
      card2_read_time: '5 min read',

      // Article Card 3
      card3_cat: 'Performance & Wasm',
      card3_title: 'Client-Side Big Data Transformation: Processing 500MB Payloads in Browser RAM',
      card3_excerpt: 'How streaming Web Workers, Transferable ArrayBuffers, and chunked WebAssembly runtimes parse enterprise JSON/CSV datasets on the client with zero cloud computation bills.',
      card3_author: 'By VantorKit Performance Lab',
      card3_date: 'Engineering Lab',
      card3_read_time: '7 min read',

      // RSS Callout Banner
      rss_callout_title: 'Zero Trackers. Pure Open Web RSS Syndication.',
      rss_callout_desc: "We don't collect your email address, run newsletter tracking pixels, or store cookies. Stay updated on our latest client-side browser engineering guides and cryptographic tools directly via standard RSS 2.0.",
      rss_callout_btn: 'Open RSS Feed (/blog/feed.xml)',

      // Article Page (blog/how-to-redact-pdf-locally.html)
      art_badge_category: 'PDF Security & Privacy',
      art_badge_verified: '100% In-Browser Execution',
      art_h1: 'How to Permanently Redact Sensitive Text in PDF Files Without Cloud Uploads',
      art_lead: 'Drawing black boxes over text in standard PDF readers does not delete the characters underneath. Discover why visual redactions leak confidential data, how true canvas flattening works, and how to sanitize legal and financial documents entirely inside your browser\'s local RAM.',
      art_meta_author_label: 'Author: ',
      art_meta_author_val: 'VantorKit Security Team',
      art_meta_pub_label: 'Published: ',
      art_meta_pub_val: 'October 6, 2026',
      art_meta_time_label: 'Read Time: ',
      art_meta_time_val: '6 min read',
      art_meta_exfil_label: 'Network Exfiltration: ',
      art_meta_exfil_val: '0 Bytes (Client-Side)',

      // Article Table of Contents
      art_toc_heading: 'Table of Contents',
      art_toc_1: '1. Executive Answer: Visual Masking vs. True Raster Flattening',
      art_toc_2: '2. Interactive Tool: VantorKit PDF Redactor',
      art_toc_3: '3. Step-by-Step Technical Guide for Sanitizing Documents',
      art_toc_4: '4. Security Deep Dive: WebAssembly, Canvas Pixels & RAM Sandboxing',
      art_toc_5: '5. Frequently Asked Questions (PDF Redaction Security)',

      // Article Section 1
      sec1_h2: '1. The Executive Answer: Visual Masking vs. True Raster Flattening',
      sec1_p1: 'Every year, major law firms, intelligence agencies, and healthcare providers accidentally leak confidential data through flawed PDF redaction. High-profile court dockets—including filings in the Paul Manafort federal trials and corporate antitrust litigation—have famously leaked classified names and bank account numbers because an attorney simply drew a black rectangle over text using an everyday PDF viewer.',
      sec1_p2: 'To understand why this happens, you must understand how the PDF file specification (ISO 32000) stores data. A PDF is not a flat bitmap image; it is an object graph containing independent layers:',
      comp_danger_title: 'Visual Masking (High Risk)',
      comp_danger_1: '❌ Character glyphs stay intact in binary stream',
      comp_danger_2: '❌ Anyone can copy text via Ctrl+A / Cmd+C',
      comp_danger_3: '❌ Scripted tools (e.g. pdftotext) extract text in ms',
      comp_danger_4: '❌ Underlying vector objects can be deleted in Acrobat',
      comp_danger_5: '❌ Metadata & OCR text layers remain searchable',
      comp_secure_title: 'True Raster Flattening (Secure)',
      comp_secure_1: '✅ Vectors & fonts baked into raw pixel matrix in RAM',
      comp_secure_2: '✅ Blackout coordinates overwrite pixel buffers directly',
      comp_secure_3: '✅ Text streams are obliterated from the file dictionary',
      comp_secure_4: '✅ Mathematically irreversible: 0 glyphs survive',
      comp_secure_5: '✅ Zero cloud uploads: documents never leave client RAM',

      // Article Section 2 Tool CTA Card
      sec2_h2: '2. Interactive Tool: VantorKit PDF Redactor',
      tool_badge: '100% Client-Side Browser Sandbox',
      tool_title: 'Launch VantorKit PDF Redactor — 100% Client-Side',
      tool_desc: 'Sanitize, blackout, and flatten sensitive PDF documents instantly with zero cloud uploads. Your documents are rendered and redacted entirely within your device\'s memory using HTML5 Canvas and WebAssembly.',
      tool_p1: '0 Bytes Transferred (Zero Logs)',
      tool_p2: 'High-DPI Multi-Page Rendering',
      tool_p3: 'Irreversible Canvas Pixel Baking',
      tool_p4: 'Instant Offline Execution',
      tool_btn: 'Launch PDF Redactor Tool',
      tool_guarantee: 'Free forever • No account required • Zero server telemetry',

      // Article Section 3 Steps
      sec3_h2: '3. Step-by-Step Technical Guide for Sanitizing Documents',
      step1_h3: 'Ingest File Locally Into Browser RAM',
      step1_desc: "Open the VantorKit PDF Redactor and drop your document onto the dropzone. The application calls the standard HTML5 FileReader.readAsArrayBuffer() API. Notice that in your browser's Developer Tools (Network Tab), zero HTTP POST requests are made. The binary buffer is held exclusively in your local device memory.",
      step2_h3: 'Apply Precision Coordinate Blackouts',
      step2_desc: 'VantorKit renders each page onto an HTML5 <canvas> element at a high device pixel ratio (2x scale for crisp readability). Click and drag over social security numbers, banking IBANs, confidential client names, or signature blocks. You will see black blackout overlays with live coordinate tracking.',
      step3_h3: 'Export the Flattened, Purged Document',
      step3_desc: 'Click Download Redacted PDF. The rasterizer bakes your blackout coordinates directly into the Canvas 2D image buffer, permanently overwriting the pixel colors with pure #000000. The engine then compiles a sanitized PDF container using local JavaScript. All underlying vector font streams, text dictionaries, revision histories, and hidden metadata are completely stripped.',

      // Article Section 4
      sec4_h2: '4. Security Deep Dive: WebAssembly, Canvas Pixels & RAM Sandboxing',
      sec4_sub1: 'The Canvas Rasterization & Pixel Overwrite Pipeline',
      sec4_sub2: 'Self-Verification: How to Audit Your Redacted PDF',

      // Article Section 5 FAQs
      sec5_h2: '5. Frequently Asked Questions (PDF Redaction Security)',
      faq_q1: 'Can text under a black box in a standard PDF still be highlighted or copied?',
      faq_a1: 'Yes. In standard PDF viewers (such as Adobe Acrobat Reader, macOS Preview, or web browsers), drawing a black shape merely places a visual vector annotation over the text. The underlying text stream, font glyphs, and selectable character coordinates remain completely intact in the document stream. Anyone using "Select All" or command-line extraction tools can extract the sensitive data in seconds.',
      faq_q2: 'What is the difference between visual masking and true PDF redaction?',
      faq_a2: 'Visual masking obscures text visually without deleting the underlying character data. True PDF redaction requires raster flattening or destructive stream editing, where vector text objects, metadata, and font glyph dictionaries are permanently deleted from the PDF binary structure or rendered to pixel bitmaps so no underlying data remains to be recovered.',
      faq_q3: 'How does VantorKit\'s PDF Redactor ensure zero data leaves my computer?',
      faq_a3: 'VantorKit operates 100% client-side inside your browser sandbox. The PDF is parsed into memory using WebAssembly and PDF.js, rendered onto an HTML5 Canvas in RAM, overlaid with your redaction blocks, and re-flattened into a sanitized PDF using local JavaScript. Zero bytes are uploaded to any server, eliminating cloud breach and data exfiltration risks.',

      // Wrap-up CTA
      final_cta_title: 'Ready to redact documents securely?',
      final_cta_desc: 'Protect your trade secrets, client financials, and personal identifiers. Use VantorKit PDF Redactor for immediate, private, client-side document sanitization.',
      final_cta_btn: 'Open VantorKit PDF Redactor →',
      final_cta_more: 'Explore More Engineering Guides',

      // Footer
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_about: 'About Us',
      footer_contact: 'Contact',
      footer_blog: 'Blog',
      footer_copy: '© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser.'
    },

    ar: {
      // Navbar
      blog_badge: 'المدونة',
      nav_all_tools: 'كافة الأدوات (32)',
      nav_rss: 'خلاصة RSS',
      nav_back_blog: 'مركز المدونة',
      nav_launch_redactor: 'أداة تعتيم وتطهير PDF',

      // Blog Hub Hero (blog/index.html)
      hero_badge: 'معمارية وأبحاث المعالجة داخل المتصفح',
      hero_title: 'أدلة فانتوركيت <span>للهندسة والخصوصية</span>',
      hero_subtitle: 'دراسات معمارية متعمقة، وعزل تشفيري، وأدلة هندسية عملية لتطبيقات الويب المستقلة عن الخوادم. اكتشف كيفية فحص وتعتيم وتحويل المستندات الحساسة داخل ذاكرة المتصفح العشوائية (RAM) دون رفع أي بايت إلى السحابة.',
      feat_zero_uploads: '0 بايت مرسلة للخادم (بدون رفع)',
      feat_in_browser: 'معالجة كاملة بذاكرة المتصفح',
      feat_open_standards: 'معايير الويب المفتوحة وWasm',

      // Section Headers
      sec_latest_articles: 'أحدث المقالات التقنية',
      sec_subscribe_rss: 'الاشتراك عبر RSS',

      // Article Card 1 (Flagship)
      card1_cat: 'أمان ملفات PDF والخصوصية',
      card1_read_time: 'قراءة في 6 دقائق',
      card1_title: 'كيفية تعتيم وحذف النصوص الحساسة في ملفات PDF نهائياً دون رفعها للسحابة',
      card1_excerpt: 'رسم مربعات سوداء فوق النصوص في عارضات PDF التقليدية يُنشئ أقنعة بصرية سطحية تحتفظ بالأحرف الأصلية. تعرّف على سبب فشل التعتيم التقليدي وكيف تقوم معالجة Canvas بتحويل المستند إلى بكسلات آمنة محلياً.',
      card1_author: 'فريق أمان فانتوركيت',
      card1_date: 'أكتوبر 2026',
      card1_cta: 'اقرأ الدليل',

      // Article Card 2
      card2_cat: 'التحليل الجنائي والخصوصية',
      badge_coming_soon: 'قريباً',
      card2_title: 'لماذا تفشل أدوات إزالة البيانات الوصفية التقليدية: فحص بيانات EXIF وXMP محلياً',
      card2_excerpt: 'غالباً ما تترك برامج التنظيف التقليدية الأرقام التسلسلية للكاميرات وإحداثيات الموقع وتواريخ التعديل سليمة داخل الملف الثنائي. دراسة لتنظيف الأشجار الثنائية داخل المتصفح.',
      card2_author: 'قسم أبحاث فانتوركيت',
      card2_date: 'نظرة أولية',
      card2_read_time: 'قراءة في 5 دقائق',

      // Article Card 3
      card3_cat: 'الأداء وWebAssembly',
      card3_title: 'تحويل البيانات الضخمة داخل المتصفح: معالجة ملفات بحجم 500 ميغابايت بذاكرة RAM',
      card3_excerpt: 'كيف تعمل خيوط Web Workers ومصفوفات ArrayBuffers وتقنيات WebAssembly على معالجة ملفات JSON وCSV الضخمة محلياً دون أي تكاليف سحابية.',
      card3_author: 'مختبر أداء فانتوركيت',
      card3_date: 'المختبر الهندسي',
      card3_read_time: 'قراءة في 7 دقائق',

      // RSS Callout Banner
      rss_callout_title: 'بدون أي تتبع. تغذية RSS قياسية ومفتوحة بالكامل.',
      rss_callout_desc: 'نحن لا نجمع بريدك الإلكتروني، ولا نستخدم وحدات بكسل لتتبع النشرات، ولا نخزن ملفات تعريف الارتباط. تابع أحدث أدلتنا التقنية وأدواتنا التشفيرية مباشرة عبر خلاصة RSS 2.0 القياسية.',
      rss_callout_btn: 'افتح خلاصة RSS (/blog/feed.xml)',

      // Article Page (blog/how-to-redact-pdf-locally.html)
      art_badge_category: 'أمان ملفات PDF والخصوصية',
      art_badge_verified: 'معالجة كاملة داخل المتصفح (100%)',
      art_h1: 'كيفية تعتيم وحذف النصوص الحساسة في ملفات PDF نهائياً دون رفعها للسحابة',
      art_lead: 'رسم مربعات سوداء فوق النصوص في عارضات PDF لا يحذف الأحرف الموجودة أسفلها. تعرّف على أسباب تسريب التعتيم البصري للبيانات الحساسة، وكيفية تسطيح صفحات المستند عبر Canvas وتطهير العقود داخل ذاكرة المتصفح.',
      art_meta_author_label: 'الكاتب: ',
      art_meta_author_val: 'فريق أمان فانتوركيت',
      art_meta_pub_label: 'تاريخ النشر: ',
      art_meta_pub_val: '6 أكتوبر 2026',
      art_meta_time_label: 'وقت القراءة: ',
      art_meta_time_val: '6 دقائق',
      art_meta_exfil_label: 'تسريب الشبكة: ',
      art_meta_exfil_val: '0 بايت (معالجة محلية)',

      // Article Table of Contents
      art_toc_heading: 'فهرس المحتويات',
      art_toc_1: '1. الإجابة التنفيذية: التعتيم البصري مقابل التسطيح النقطي الفعلي',
      art_toc_2: '2. الأداة التفاعلية: أداة تنقيح وتعتيم PDF من فانتوركيت',
      art_toc_3: '3. الدليل التقني خطوة بخطوة لتطهير المستندات',
      art_toc_4: '4. تحليل أمني معمق: WebAssembly وبكسلات Canvas وعزل الذاكرة',
      art_toc_5: '5. الأسئلة الشائعة حول أمان تعتيم مستندات PDF',

      // Article Section 1
      sec1_h2: '1. الإجابة التنفيذية: التعتيم البصري مقابل التسطيح النقطي الفعلي',
      sec1_p1: 'في كل عام، تسرّب مكاتب المحاماة الكبرى والجهات الطبية بيانات سرية بالخطأ بسبب التعتيم غير الصحيح لمستندات PDF. وقد شهدت قضايا فيدرالية شهيرة تسريبات محرجة لأسماء سرية وأرقام حسابات بنكية لأن المحامي قام ببساطة برسم مستطيل أسود فوق النص باستخدام عارض ملفات عادي.',
      sec1_p2: 'لفهم سبب حدوث ذلك، يجب معرفة بنية مواصفات PDF (ISO 32000). ملف PDF ليس صورة نقطية مسطحة، بل هو رسم بياني للكائنات يحتوي على طبقات مستقلة:',
      comp_danger_title: 'التعتيم البصري السطحي (شديد الخطورة)',
      comp_danger_1: '❌ رموز الأحرف تظل سليمة داخل الملف الثنائي',
      comp_danger_2: '❌ يمكن لأي شخص نسخ النص عبر Ctrl+A ثم Ctrl+C',
      comp_danger_3: '❌ تستخرج الأدوات البرمجية (مثل pdftotext) النص في أجزاء من الثانية',
      comp_danger_4: '❌ يمكن إزالة الأشكال السوداء بسهولة في برامج التعديل',
      comp_danger_5: '❌ تظل البيانات الوصفية وطبقات OCR قابلة للبحث والتعرف',
      comp_secure_title: 'التسطيح النقطي الفعلي (آمن بنسبة 100%)',
      comp_secure_1: '✅ حرق المتجهات والخطوط في مصفوفة بكسلات مباشرة بالذاكرة',
      comp_secure_2: '✅ إحداثيات التعتيم تستبدل قيم البكسل باللون الأسود مباشرة',
      comp_secure_3: '✅ إزالة تدفقات النصوص تماماً من هيكل المستند',
      comp_secure_4: '✅ عملية غير قابلة للاسترجاع رياضياً: لا يتبقى أي حرف',
      comp_secure_5: '✅ لا يتم رفع أي ملف: المستندات لا تغادر جهازك أبداً',

      // Article Section 2 Tool CTA Card
      sec2_h2: '2. الأداة التفاعلية: أداة تنقيح وتعتيم PDF من فانتوركيت',
      tool_badge: 'بيئة معزولة 100% داخل المتصفح',
      tool_title: 'تشغيل أداة تنقيح وتعتيم PDF — 100% داخل المتصفح',
      tool_desc: 'قم بتعتيم وحذف البيانات الحساسة وتسطيح ملفات PDF فورياً دون إرسالها إلى السحابة. تتم معالجة مستنداتك وتعتيمها بالكامل داخل ذاكرة جهازك باستخدام تقنيات HTML5 Canvas وWebAssembly.',
      tool_p1: '0 بايت مرسلة (بدون سجلات)',
      tool_p2: 'عرض عالي الدقة متعدد الصفحات',
      tool_p3: 'حرق بكسلات Canvas بشكل لا رجعة فيه',
      tool_p4: 'تشغيل فوري دون اتصال بالإنترنت',
      tool_btn: 'تشغيل أداة تعتيم PDF الآن',
      tool_guarantee: 'مجانية دائماً • لا تتطلب حساباً • بدون إرسال أي بيانات',

      // Article Section 3 Steps
      sec3_h2: '3. الدليل التقني خطوة بخطوة لتطهير المستندات',
      step1_h3: 'تحميل الملف محلياً إلى ذاكرة المتصفح (RAM)',
      step1_desc: 'افتح أداة تنقيح PDF وأسقط مستندك في منطقة الإسقاط. يستخدم التطبيق واجهة FileReader.readAsArrayBuffer القياسية. ستلاحظ في لوحة المطورين (قسم الشبكة) أنه لا يتم إرسال أي طلب POST خارجي، ويبقى الملف محلياً في الذاكرة.',
      step2_h3: 'تطبيق تعتيم دقيق حسب الإحداثيات',
      step2_desc: 'يقوم فانتوركيت بعرض كل صفحة على عنصر Canvas بدقة عالية مضاعفة (مقياس 2x). انقر واسحب فوق الأرقام القومية أو الحسابات المصرفية أو التوقيعات لتطبيق التعتيم الأسود مع تتبع حي للإحداثيات.',
      step3_h3: 'تصدير المستند المطهّر والمبسّط نهائياً',
      step3_desc: 'انقر فوق تنزيل ملف PDF المنقّح. يقوم المحول بحرق إحداثيات التعتيم مباشرة في بكسلات الصورة بلون #000000 الصافي، ثم يتم تجميع ملف PDF جديد كلياً يحذف الخطوط والنصوص والبيانات الوصفية السابقة.',

      // Article Section 4
      sec4_h2: '4. تحليل أمني معمق: WebAssembly وبكسلات Canvas وعزل الذاكرة',
      sec4_sub1: 'تسلسل تحويل Canvas وتجاوز البكسلات',
      sec4_sub2: 'التحقق الذاتي: كيف تفحص مستندك المنقح بنفسك',

      // Article Section 5 FAQs
      sec5_h2: '5. الأسئلة الشائعة حول أمان تعتيم مستندات PDF',
      faq_q1: 'هل يمكن تحديد أو نسخ النص الموجود أسفل المربع الأسود في ملف PDF عادي؟',
      faq_a1: 'نعم. في عارضات PDF التقليدية، وضع شكل أسود يضيف مجرد علامة بصرية سطحية فوق النص، بينما تظل أحرف النص وإحداثياته سليمة تماماً داخل تدفق الملف. يمكن لأي شخص الضغط على "تحديد الكل" أو استخدام أدوات سطر الأوامر لاستخراج البيانات الحساسة فوراً.',
      faq_q2: 'ما هو الفرق بين التعتيم البصري والتنقيح الفعلي لملف PDF؟',
      faq_a2: 'التعتيم البصري يخفي النص عن العين فقط دون حذف أحرفه من الملف. أما التنقيح الفعلي فيتطلب تسطيح الصفحة إلى بكسلات أو حذف كائنات النصوص والخطوط والبيانات الوصفية نهائياً من بنية الملف بحيث يستحيل استرجاعها رياضياً.',
      faq_q3: 'كيف تضمن أداة تنقيح PDF من فانتوركيت عدم مغادرة أي بيانات لجهازي؟',
      faq_a3: 'تعمل أداة فانتوركيت بنسبة 100% داخل بيئة متصفحك المعزولة. تتم معالجة الملف في الذاكرة عبر WebAssembly وPDF.js وعرضه على Canvas ثم إعادة تجميعه عبر جافاسكريبت محلياً. لا يتم إرسال أي بايت لأي خادم، مما يقضي تماماً على مخاطر الاختراق السحابي.',

      // Wrap-up CTA
      final_cta_title: 'هل أنت مستعد لتعتيم وتطهير مستنداتك بأمان؟',
      final_cta_desc: 'احمِ أسرارك التجارية وبيانات عملائك المالية وهوياتك الشخصية. استخدم أداة تنقيح PDF لتطهير فوري وخاص داخل جهازك.',
      final_cta_btn: 'تشغيل أداة تعتيم وتطهير PDF ←',
      final_cta_more: 'استكشف المزيد من الأدلة الهندسية',

      // Footer
      footer_privacy: 'سياسة الخصوصية',
      footer_terms: 'شروط الخدمة',
      footer_about: 'من نحن',
      footer_contact: 'اتصل بنا',
      footer_blog: 'المدونة',
      footer_copy: '© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك.'
    },

    fr: {
      // Navbar
      blog_badge: 'Blog',
      nav_all_tools: 'Tous les 32 outils',
      nav_rss: 'Flux RSS',
      nav_back_blog: 'Hub Blog',
      nav_launch_redactor: 'Ouvrir Rédacteur PDF',

      // Blog Hub Hero (blog/index.html)
      hero_badge: 'Architecture & Recherche Côté Client',
      hero_title: 'Guides <span>d\'Ingénierie & Confidentialité</span> VantorKit',
      hero_subtitle: 'Analyses architecturales approfondies, bac à sable cryptographique et guides pratiques pour applications web côté client. Découvrez comment inspecter, biffer et transformer vos documents sensibles dans la RAM sans transfert cloud.',
      feat_zero_uploads: '0 octet transféré au serveur',
      feat_in_browser: 'Exécution 100% en RAM',
      feat_open_standards: 'Standards du Web & WebAssembly',

      // Section Headers
      sec_latest_articles: 'Derniers Articles Techniques',
      sec_subscribe_rss: 'S\'abonner via RSS',

      // Article Card 1 (Flagship)
      card1_cat: 'Sécurité & Confidentialité PDF',
      card1_read_time: '6 min de lecture',
      card1_title: 'Comment biffer définitivement le texte confidentiel d\'un PDF sans envoi cloud',
      card1_excerpt: 'Dessiner des boîtes noires dans un lecteur PDF standard crée un masque visuel qui conserve les caractères vectoriels. Découvrez pourquoi le caviardage classique échoue et comment l\'aplatissement Canvas sécurise vos documents dans la RAM.',
      card1_author: 'Par l\'équipe Sécurité VantorKit',
      card1_date: 'Oct 2026',
      card1_cta: 'Lire le guide',

      // Article Card 2
      card2_cat: 'Forensique & Confidentialité',
      badge_coming_soon: 'Bientôt disponible',
      card2_title: 'Pourquoi le nettoyage classique de métadonnées échoue : analyse locale d\'EXIF et XMP',
      card2_excerpt: 'Les nettoyeurs de fichiers laissent souvent les numéros de série, balises GPS et historiques intacts dans les flux binaires. Analyse de la purge binaire côté client.',
      card2_author: 'Par la Recherche VantorKit',
      card2_date: 'Aperçu recherche',
      card2_read_time: '5 min de lecture',

      // Article Card 3
      card3_cat: 'Performance & Wasm',
      card3_title: 'Transformation de mégadonnées côté client : traitement de 500 Mo en mémoire RAM',
      card3_excerpt: 'Comment les Web Workers, les ArrayBuffers et WebAssembly traitent des flux JSON/CSV massifs côté client avec zéro coût d\'infrastructure cloud.',
      card3_author: 'Par le Lab Performance VantorKit',
      card3_date: 'Laboratoire Ingénierie',
      card3_read_time: '7 min de lecture',

      // RSS Callout Banner
      rss_callout_title: 'Zéro traqueur. Syndication RSS ouverte et respectueuse.',
      rss_callout_desc: 'Nous ne collectons pas votre e-mail, n\'utilisons aucun pixel espion ni cookie. Suivez nos publications techniques et nos outils cryptographiques directement via le flux RSS 2.0 standard.',
      rss_callout_btn: 'Ouvrir le flux RSS (/blog/feed.xml)',

      // Article Page (blog/how-to-redact-pdf-locally.html)
      art_badge_category: 'Sécurité & Confidentialité PDF',
      art_badge_verified: 'Exécution 100% en navigateur',
      art_h1: 'Comment biffer définitivement le texte confidentiel d\'un PDF sans envoi cloud',
      art_lead: 'Dessiner des boîtes noires sur un PDF ne supprime pas les caractères sous-jacents. Découvrez pourquoi le masquage visuel compromet vos données et comment l\'aplatissement Canvas sécurise vos contrats dans la RAM.',
      art_meta_author_label: 'Auteur : ',
      art_meta_author_val: 'Équipe Sécurité VantorKit',
      art_meta_pub_label: 'Publié : ',
      art_meta_pub_val: '6 octobre 2026',
      art_meta_time_label: 'Temps : ',
      art_meta_time_val: '6 min de lecture',
      art_meta_exfil_label: 'Exfiltration Réseau : ',
      art_meta_exfil_val: '0 octet (Côté client)',

      // Article Table of Contents
      art_toc_heading: 'Table des matières',
      art_toc_1: '1. Réponse synthétique : Masquage visuel vs Aplatissement raster',
      art_toc_2: '2. Outil interactif : Rédacteur PDF VantorKit',
      art_toc_3: '3. Guide technique étape par étape pour sécuriser vos documents',
      art_toc_4: '4. Analyse approfondie : WebAssembly, pixels Canvas et isolation RAM',
      art_toc_5: '5. Foire Aux Questions (Sécurité du caviardage PDF)',

      // Article Section 1
      sec1_h2: '1. Réponse synthétique : Masquage visuel vs Aplatissement raster',
      sec1_p1: 'Chaque année, des cabinets juridiques renommés et des agences divulguent des données sensibles en raison d\'un caviardage PDF erroné. De nombreux procès retentissants ont révélé des informations classifiées simplement parce qu\'un avocat a dessiné un rectangle noir avec un lecteur PDF standard.',
      sec1_p2: 'Pour comprendre ce phénomène, il faut observer la spécification ISO 32000 du PDF. Un document PDF n\'est pas une image plate mais un ensemble d\'objets avec calques indépendants :',
      comp_danger_title: 'Masquage Visuel (Haut Risque)',
      comp_danger_1: '❌ Les glyphes restent intacts dans le flux binaire',
      comp_danger_2: '❌ N\'importe qui peut copier le texte via Ctrl+A / Cmd+C',
      comp_danger_3: '❌ Des outils comme pdftotext extraient le texte en millisecondes',
      comp_danger_4: '❌ Les formes noires peuvent être supprimées dans Acrobat',
      comp_danger_5: '❌ Les métadonnées et couches OCR restent consultables',
      comp_secure_title: 'Aplatissement Raster Réel (Sécurisé)',
      comp_secure_1: '✅ Vecteurs et polices convertis en matrice de pixels dans la RAM',
      comp_secure_2: '✅ Les zones biffées écrasent directement les tampons de pixels',
      comp_secure_3: '✅ Les flux de texte sont complètement détruits du dictionnaire',
      comp_secure_4: '✅ Mathématiquement irréversible : aucun glyphe ne subsiste',
      comp_secure_5: '✅ Zéro envoi cloud : le document ne quitte jamais votre RAM',

      // Article Section 2 Tool CTA Card
      sec2_h2: '2. Outil interactif : Rédacteur PDF VantorKit',
      tool_badge: 'Bac à sable 100% côté client',
      tool_title: 'Lancer le Rédacteur PDF VantorKit — 100% Côté Client',
      tool_desc: 'Sécurisez, caviardez et aplatissez vos PDF sensibles instantanément sans transfert réseau. Le rendu et le masquage sont réalisés dans la mémoire de votre appareil via HTML5 Canvas et WebAssembly.',
      tool_p1: '0 octet transféré (Zéro journal)',
      tool_p2: 'Rendu multipage haute résolution',
      tool_p3: 'Fusion irréversible des pixels Canvas',
      tool_p4: 'Fonctionne hors ligne instantanément',
      tool_btn: 'Lancer le Rédacteur PDF',
      tool_guarantee: 'Gratuit à vie • Sans compte • Zéro télémétrie serveur',

      // Article Section 3 Steps
      sec3_h2: '3. Guide technique étape par étape pour sécuriser vos documents',
      step1_h3: 'Charger le fichier localement dans la RAM',
      step1_desc: 'Ouvrez le Rédacteur PDF VantorKit et déposez votre document. L\'application utilise l\'API standard FileReader.readAsArrayBuffer(). Dans l\'onglet Réseau des outils de développement, aucune requête HTTP POST n\'est émise.',
      step2_h3: 'Appliquer des masquages précis par coordonnées',
      step2_desc: 'VantorKit génère chaque page sur un élément Canvas à haute résolution (échelle 2x). Cliquez et glissez sur les numéros d\'identification, IBAN ou signatures pour créer les zones noires avec suivi des coordonnées en temps réel.',
      step3_h3: 'Exporter le document aplati et nettoyé',
      step3_desc: 'Cliquez sur Télécharger le PDF biffé. Le moteur incruste les coordonnées noires directement dans le tampon 2D Canvas avec du noir #000000 pur, puis génère un nouveau PDF débarrassé de tout texte ou métadonnée sous-jacente.',

      // Article Section 4
      sec4_h2: '4. Analyse approfondie : WebAssembly, pixels Canvas et isolation RAM',
      sec4_sub1: 'Le pipeline de pixellisation et écriture de pixels Canvas',
      sec4_sub2: 'Vérification autonome : comment auditer votre PDF caviardé',

      // Article Section 5 FAQs
      sec5_h2: '5. Foire Aux Questions (Sécurité du caviardage PDF)',
      faq_q1: 'Le texte sous une boîte noire dans un PDF standard peut-il encore être surligné ou copié ?',
      faq_a1: 'Oui. Dans les lecteurs PDF classiques, dessiner une forme noire ajoute une simple annotation vectorielle au-dessus du texte. Les caractères et polices sous-jacents restent intacts. N\'importe qui utilisant "Tout sélectionner" ou des outils en ligne de commande peut extraire les données en quelques secondes.',
      faq_q2: 'Quelle est la différence entre un masquage visuel et un caviardage PDF réel ?',
      faq_a2: 'Le masquage visuel cache le texte sans supprimer ses données binaires. Un caviardage réel requiert l\'aplatissement matriciel ou la suppression destructrice des flux d\'objets, métadonnées et dictionnaires de polices, rendant toute récupération impossible.',
      faq_q3: 'Comment le Rédacteur PDF VantorKit garantit-il qu\'aucune donnée ne quitte mon ordinateur ?',
      faq_a3: 'VantorKit fonctionne à 100% côté client dans le bac à sable de votre navigateur. Le PDF est chargé en mémoire via WebAssembly et PDF.js, rendu sur un Canvas en RAM et reconstitué via JavaScript local. Zéro octet n\'est envoyé vers un serveur.',

      // Wrap-up CTA
      final_cta_title: 'Prêt à biffer vos documents en toute sécurité ?',
      final_cta_desc: 'Protégez vos secrets d\'affaires, données financières et identités personnelles. Utilisez le Rédacteur PDF VantorKit pour un assainissement immédiat et confidentiel.',
      final_cta_btn: 'Ouvrir le Rédacteur PDF VantorKit →',
      final_cta_more: 'Explorer d\'autres guides techniques',

      // Footer
      footer_privacy: 'Politique de confidentialité',
      footer_terms: 'Conditions d\'utilisation',
      footer_about: 'À propos',
      footer_contact: 'Contact',
      footer_blog: 'Blog',
      footer_copy: '© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur.'
    },

    it: {
      // Navbar
      blog_badge: 'Blog',
      nav_all_tools: 'Tutte le 32 utilità',
      nav_rss: 'Feed RSS',
      nav_back_blog: 'Hub Blog',
      nav_launch_redactor: 'Apri Redattore PDF',

      // Blog Hub Hero (blog/index.html)
      hero_badge: 'Architettura & Ricerca Lato Client',
      hero_title: 'Guide <span>di Ingegneria & Privacy</span> VantorKit',
      hero_subtitle: 'Approfondimenti architetturali, sandboxing crittografico e guide ingegneristiche per applicazioni web lato client. Scopri come ispezionare, redigere e trasformare documenti sensibili direttamente nella RAM del browser senza alcun upload cloud.',
      feat_zero_uploads: '0 byte inviati al server',
      feat_in_browser: 'Esecuzione 100% in RAM',
      feat_open_standards: 'Standard Web Aperti & WebAssembly',

      // Section Headers
      sec_latest_articles: 'Ultimi Articoli Tecnici',
      sec_subscribe_rss: 'Iscriviti via RSS',

      // Article Card 1 (Flagship)
      card1_cat: 'Sicurezza & Privacy PDF',
      card1_read_time: '6 min di lettura',
      card1_title: 'Come redigere in modo permanente il testo sensibile nei PDF senza upload cloud',
      card1_excerpt: 'Disegnare rettangoli neri sui PDF nei lettori standard crea maschere visive che mantengono i caratteri vettoriali. Scopri perché l\'oscuramento tradizionale fallisce e come la rasterizzazione Canvas appiattisce i documenti nella RAM.',
      card1_author: 'Del team di sicurezza VantorKit',
      card1_date: 'Ott 2026',
      card1_cta: 'Leggi la guida',

      // Article Card 2
      card2_cat: 'Analisi Forense & Privacy',
      badge_coming_soon: 'In arrivo',
      card2_title: 'Perché la pulizia tradizionale dei metadati fallisce: ispezione locale di EXIF e XMP',
      card2_excerpt: 'I software di pulizia tradizionali lasciano intatti numeri di serie della fotocamera, coordinate GPS e cronologie. Un\'analisi della rimozione binaria lato client.',
      card2_author: 'Della Ricerca VantorKit',
      card2_date: 'Anteprima ricerca',
      card2_read_time: '5 min di lettura',

      // Article Card 3
      card3_cat: 'Prestazioni & Wasm',
      card3_title: 'Trasformazione di Big Data lato client: elaborazione di payload da 500MB nella RAM',
      card3_excerpt: 'Come Web Workers in streaming, ArrayBuffer trasferibili e WebAssembly analizzano grandi file JSON/CSV lato client senza costi cloud.',
      card3_author: 'Del Laboratorio Prestazioni VantorKit',
      card3_date: 'Laboratorio Ingegneria',
      card3_read_time: '7 min di lettura',

      // RSS Callout Banner
      rss_callout_title: 'Zero tracciamento. Feed RSS aperto e standard.',
      rss_callout_desc: 'Non raccogliamo la tua email, non usiamo pixel di tracciamento né cookie. Rimani aggiornato sulle nostre guide tecniche e strumenti crittografici tramite feed standard RSS 2.0.',
      rss_callout_btn: 'Apri Feed RSS (/blog/feed.xml)',

      // Article Page (blog/how-to-redact-pdf-locally.html)
      art_badge_category: 'Sicurezza & Privacy PDF',
      art_badge_verified: 'Esecuzione 100% nel browser',
      art_h1: 'Come redigere in modo permanente il testo sensibile nei PDF senza upload cloud',
      art_lead: 'Disegnare rettangoli neri sui testi nei PDF non elimina i caratteri sottostanti. Scopri perché l\'oscuramento visivo espone dati riservati e come l\'appiattimento Canvas igienizza i contratti nella RAM.',
      art_meta_author_label: 'Autore: ',
      art_meta_author_val: 'Team Sicurezza VantorKit',
      art_meta_pub_label: 'Pubblicato: ',
      art_meta_pub_val: '6 ottobre 2026',
      art_meta_time_label: 'Tempo: ',
      art_meta_time_val: '6 min di lettura',
      art_meta_exfil_label: 'Fuga di dati: ',
      art_meta_exfil_val: '0 byte (Lato client)',

      // Article Table of Contents
      art_toc_heading: 'Indice dei contenuti',
      art_toc_1: '1. Risposta esecutiva: Mascheramento visivo vs Appiattimento raster',
      art_toc_2: '2. Strumento interattivo: Redattore PDF VantorKit',
      art_toc_3: '3. Guida tecnica dettagliata per igienizzare i documenti',
      art_toc_4: '4. Approfondimento sulla sicurezza: WebAssembly, pixel Canvas e sandbox RAM',
      art_toc_5: '5. Domande Frequenti (Sicurezza della redazione PDF)',

      // Article Section 1
      sec1_h2: '1. Risposta esecutiva: Mascheramento visivo vs Appiattimento raster',
      sec1_p1: 'Ogni anno, importanti studi legali e agenzie divulgano dati riservati a causa di una redazione PDF imperfetta. Celebri processi hanno visto trapelare nomi classificati e numeri di conto corrente semplicemente perché un avvocato ha tracciato un rettangolo nero sopra il testo con un comune lettore PDF.',
      sec1_p2: 'Per comprendere perché ciò accade, occorre esaminare la specifica ISO 32000 dei PDF. Un documento PDF non è un\'immagine piatta ma un insieme di oggetti con livelli indipendenti:',
      comp_danger_title: 'Mascheramento Visivo (Alto Rischio)',
      comp_danger_1: '❌ I glifi dei caratteri rimangono intatti nel flusso binario',
      comp_danger_2: '❌ Chiunque può copiare il testo tramite Ctrl+A / Cmd+C',
      comp_danger_3: '❌ Strumenti come pdftotext estraggono il testo in millisecondi',
      comp_danger_4: '❌ Gli oggetti vettoriali sottostanti possono essere rimossi in Acrobat',
      comp_danger_5: '❌ Metadati e livelli OCR rimangono ricercabili',
      comp_secure_title: 'Vero Appiattimento Raster (Sicuro)',
      comp_secure_1: '✅ Vettori e caratteri convertiti in matrice di pixel nella RAM',
      comp_secure_2: '✅ Le coordinate oscurate sovrascrivono direttamente i pixel',
      comp_secure_3: '✅ I flussi di testo sono completamente eliminati dal file',
      comp_secure_4: '✅ Matematicamente irreversibile: zero glifi sopravvivono',
      comp_secure_5: '✅ Zero upload cloud: i documenti non lasciano mai la RAM',

      // Article Section 2 Tool CTA Card
      sec2_h2: '2. Strumento interattivo: Redattore PDF VantorKit',
      tool_badge: 'Sandbox 100% lato client',
      tool_title: 'Avvia il Redattore PDF VantorKit — 100% Lato Client',
      tool_desc: 'Igienizza, oscura e appiattisci i documenti PDF sensibili istantaneamente senza upload cloud. Il rendering e la modifica avvengono nella memoria del dispositivo tramite HTML5 Canvas e WebAssembly.',
      tool_p1: '0 byte trasferiti (Zero log)',
      tool_p2: 'Rendering multipagina ad alta risoluzione',
      tool_p3: 'Fusione irreversibile dei pixel Canvas',
      tool_p4: 'Funziona offline istantaneamente',
      tool_btn: 'Apri lo strumento Redattore PDF',
      tool_guarantee: 'Gratuito per sempre • Nessun account • Zero telemetria',

      // Article Section 3 Steps
      sec3_h2: '3. Guida tecnica dettagliata per igienizzare i documenti',
      step1_h3: 'Carica il file localmente nella RAM del browser',
      step1_desc: 'Apri il Redattore PDF VantorKit e rilascia il documento. L\'applicazione utilizza l\'API standard FileReader.readAsArrayBuffer(). Nella scheda Rete degli strumenti di sviluppo, nessuna richiesta HTTP POST viene inviata.',
      step2_h3: 'Applica oscuramenti precisi per coordinate',
      step2_desc: 'VantorKit renderizza ogni pagina su un elemento Canvas ad alta risoluzione (scala 2x). Clicca e trascina su numeri di conto, IBAN o firme per applicare le coperture nere con monitoraggio in tempo reale.',
      step3_h3: 'Esporta il documento appiattito e sanificato',
      step3_desc: 'Fai clic su Scarica PDF redatto. Il rasterizzatore incorpora le coordinate nere nel buffer di immagine Canvas sovrascrivendo i pixel con nero puro #000000, generando un PDF pulito privo di testi vettoriali o metadati.',

      // Article Section 4
      sec4_h2: '4. Approfondimento sulla sicurezza: WebAssembly, pixel Canvas e sandbox RAM',
      sec4_sub1: 'La pipeline di rasterizzazione Canvas e sovrascrittura dei pixel',
      sec4_sub2: 'Verifica autonoma: come controllare il PDF redatto',

      // Article Section 5 FAQs
      sec5_h2: '5. Domande Frequenti (Sicurezza della redazione PDF)',
      faq_q1: 'Il testo sotto un rettangolo nero in un PDF standard può essere ancora evidenziato o copiato?',
      faq_a1: 'Sì. Nei visualizzatori PDF standard, disegnare una forma nera posiziona una semplice annotazione vettoriale sopra il testo. I caratteri e le coordinate sottostanti rimangono intatti nel documento. Chiunque usi "Seleziona tutto" o strumenti da terminale può estrarre i dati in pochi secondi.',
      faq_q2: 'Qual è la differenza tra mascheramento visivo e vera redazione di un PDF?',
      faq_a2: 'Il mascheramento visivo nasconde il testo visivamente senza eliminare i caratteri dal file. La vera redazione richiede l\'appiattimento raster o l\'eliminazione distruttiva dei flussi di testo e metadati, rendendo impossibile qualsiasi recupero.',
      faq_q3: 'Come garantisce il Redattore PDF VantorKit che nessun dato lasci il mio computer?',
      faq_a3: 'VantorKit opera al 100% lato client nella sandbox del browser. Il PDF viene elaborato nella memoria tramite WebAssembly e PDF.js, renderizzato su Canvas in RAM e ricostruito localmente in JavaScript. Nessun byte viene inviato a server esterni.',

      // Wrap-up CTA
      final_cta_title: 'Pronto a redigere i documenti in modo sicuro?',
      final_cta_desc: 'Proteggi i tuoi segreti industriali, i dati finanziari e l\'identità dei clienti. Usa il Redattore PDF VantorKit per una sanificazione immediata e riservata.',
      final_cta_btn: 'Apri il Redattore PDF VantorKit →',
      final_cta_more: 'Esplora altre guide ingegneristiche',

      // Footer
      footer_privacy: 'Informativa sulla privacy',
      footer_terms: 'Termini di servizio',
      footer_about: 'Chi siamo',
      footer_contact: 'Contatti',
      footer_blog: 'Blog',
      footer_copy: '© 2026 VantorKit. Utilità web veloci, gratuite e private. Tutta l\'elaborazione viene eseguita localmente nel browser.'
    }
  };

  // --- Reading Progress Indicator ---
  function initReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', function () {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }, { passive: true });
  }

  // --- Code Copy Buttons ---
  function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.code-copy-btn');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const codeEl = targetId ? document.getElementById(targetId) : btn.closest('.code-box')?.querySelector('code');
        if (!codeEl) return;

        const textToCopy = codeEl.textContent || '';
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="color:#10b981;">Copied!</span>
          `;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          // Fallback if clipboard API is unavailable
        });
      });
    });
  }

  // --- Dropdown Management ---
  function initLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const toggleBtn = document.getElementById('langToggleBtn');
    const menu = document.getElementById('langMenu');
    if (!dropdown || !toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    menu.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          try {
            localStorage.setItem('vantorkit_lang', selectedLang);
          } catch (err) {}
          applyLang(selectedLang);
          dropdown.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // --- Strict BiDi & i18n Translation Dispatch ---
  function applyLang(lang) {
    if (!LANG_NAMES[lang]) lang = 'en';
    const isRtl = lang === 'ar';

    // 1. Strict Root Direction & Lang Attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // 2. Active Label in Navbar Dropdown
    const label = document.getElementById('currentLangLabel');
    if (label) label.textContent = LANG_NAMES[lang];

    // 3. Mark Active Option in Menu
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // 4. Translate All [data-i18n] Elements
    const dict = BLOG_I18N[lang] || BLOG_I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 5. Update Accessible ARIA Labels or Tooltips
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });
  }

  // --- Active Language Resolution ---
  function getActiveLang() {
    let lang = 'en';
    try {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && LANG_NAMES[stored]) lang = stored;
    } catch (e) {}
    return lang;
  }

  // Execute immediately to sync initial layout
  applyLang(getActiveLang());

  // Re-run on DOMContentLoaded to guarantee all elements are bound
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLang(getActiveLang());
      initReadingProgress();
      initCodeCopy();
      initLangDropdown();
    });
  } else {
    initReadingProgress();
    initCodeCopy();
    initLangDropdown();
  }

  // Listen for storage changes across tabs
  window.addEventListener('storage', function (e) {
    if (e.key === 'vantorkit_lang' && e.newValue && LANG_NAMES[e.newValue]) {
      applyLang(e.newValue);
    }
  });

})();
