(function () {
      'use strict';

      // --- Complete Translation Dictionary (4 Languages) ---
      const TRANSLATIONS = {
        en: {
          langLabel: "English",
          toolsCount: "32 Tools Available",
          brandBadge: "Client-Side • Privacy-First • No Logs",
          heroSubtitle: "Fast, accessible, browser-based tools designed for developers, creators, and professionals. 100% private and processed locally.",
          searchPlaceholder: "Search 32 tools (e.g. percentage, pdf, video, diff)...",
          noResultsTitle: "No tools found",
          noResultsDesc: "No tools matching your search criteria. Try a different keyword or category.",
          btnResetSearch: "Reset Search",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser.",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          cat_all: "All Tools",
          cat_math: "Math & Finance",
          cat_files: "PDF & Files",
          cat_images: "Images",
          cat_text: "Text Tools",
          cat_everyday: "Everyday",
          badge_popular: "Popular",
          badge_high_value: "High Value",
          badge_live: "Live Now",
          badge_request: "Suggest",
          cat_request: "Community",
          tools: {
            "percentage-calculator": {
              title: "Percentage Calculator",
              desc: "Quickly calculate increases, decreases, differences, and standard percentages."
            },
            "compound-interest": {
              title: "Compound Interest",
              desc: "Simulate investment growth, deposits, and compound frequencies over time."
            },
            "loan-amortization": {
              title: "Loan & Amortization",
              desc: "Calculate monthly installments, interest breakdown, and repayment schedules."
            },
            "discount-sales-tax": {
              title: "Discount & Sales Tax",
              desc: "Find final price savings, discount margins, and applicable sales taxes."
            },
            "gpa-calculator": {
              title: "GPA & Grade Calculator",
              desc: "Compute cumulative semester GPA and weighted scale grades instantly."
            },
            "csv-json": {
              title: "CSV to JSON / JSON to CSV",
              desc: "Convert data structures back and forth with custom delimiter support."
            },
            "pdf-merge": {
              title: "PDF Merge",
              desc: "Combine multiple PDF documents entirely in your browser securely."
            },
            "pdf-split": {
              title: "PDF Split & Extract",
              desc: "Extract selected page ranges or separate individual pages locally."
            },
            "pdf-to-word": {
              title: "PDF to Word Converter",
              desc: "Export PDF text content as editable .docx files with layout reconstruction, entirely in your browser."
            },
            "base64-file-encoder": {
              title: "Base64 File Encoder",
              desc: "Encode documents and binary assets into data URIs and raw Base64 strings."
            },
            "audio-trimmer": {
              title: "Audio Trimmer & Cutter",
              desc: "Cut, trim, and extract high-precision audio clips with interactive waveform and WAV export."
            },
            "video-trimmer": {
              title: "Video Trimmer & Cutter",
              desc: "Cut, trim, and slice MP4, WebM, and MOV videos locally with dual-handle timeline and stream copy."
            },
            "color-palette-extractor": {
              title: "Color Palette Extractor",
              desc: "Extract primary and complementary hex palette codes from any uploaded image."
            },
            "svg-png-converter": {
              title: "SVG to PNG Converter",
              desc: "Rasterize SVG vector illustrations to transparent, high-res PNG formats."
            },
            "image-resizer-crop": {
              title: "Image Resizer & Crop",
              desc: "Adjust image pixel dimensions, preserve aspect ratios, and optimize weights."
            },
            "image-to-base64": {
              title: "Image to Base64",
              desc: "Convert PNG, JPG, or SVG to embeddable HTML/CSS inline data sources."
            },
            "image-compressor": {
              title: "Image Compressor & WebP Optimizer",
              desc: "Compress JPG, PNG, WEBP, and AVIF files locally with quality controls and split comparison."
            },
            "webp-converter": {
              title: "Image Compressor & WebP Optimizer",
              desc: "Compress JPG, PNG, WEBP, and AVIF files locally with quality controls and split comparison."
            },
            "favicon-builder": {
              title: "Multi-Size Favicon Builder",
              desc: "Generate standard 16x16, 32x32, and apple-touch icons from an icon asset."
            },
            "date-difference": {
              title: "Date Difference & Workdays",
              desc: "Calculate total days, business working days, and weekends between dates."
            },
            "qr-code-generator": {
              title: "QR Code Generator",
              desc: "Create custom vector QR codes for URLs, WiFi credentials, and contact cards."
            },
            "age-milestone-calculator": {
              title: "Age & Milestone Calculator",
              desc: "Compute exact age in years, months, and hours with countdown milestones."
            },
            "password-generator": {
              title: "Password Generator & Entropy",
              desc: "Generate cryptographically secure passwords with entropy strength scoring."
            },
            "timezone-meeting-planner": {
              title: "Time Zone Meeting Planner",
              desc: "Compare overlapping business hours across major global timezones."
            },
            "word-counter": {
              title: "Word & Character Counter",
              desc: "Track real-time character counts, words, reading durations, and paragraph stats."
            },
            "markdown-previewer": {
              title: "Markdown Previewer",
              desc: "Write Markdown with side-by-side formatted preview and instant HTML export."
            },
            "url-slug-generator": {
              title: "Case Converter & URL Slugifier",
              desc: "Convert text cases (camelCase, snake_case, Title Case) and generate clean SEO URL slugs."
            },
            "text-diff": {
              title: "Text Diff & Compare",
              desc: "Compare two text snippets side-by-side or inline with visual additions and deletions highlights."
            },
            "metadata-cleaner": {
              title: "Metadata & EXIF Cleaner",
              desc: "Inspect and strip GPS coordinates, camera models, and private EXIF/XMP tags from images locally."
            },
            "jwt-decoder": {
              title: "JWT Decoder & Verifier",
              desc: "Decode JSON Web Tokens, inspect claims, format timestamps, and verify HMAC signatures locally."
            },
                        "big-data-transformer": {
              title: "Big-Data Transformer & Stream Parser",
              desc: "Stream, inspect, filter, and convert massive CSV, JSON, and TSV datasets in background Web Workers."
            },
            "css-grid-generator": {
              title: "CSS Grid & Gradient Studio",
              desc: "Visually design complex CSS Grid matrix templates, configure named areas, and generate Tailwind CSS."
            },
            "pdf-redactor": {
              title: "PDF Redactor & Signer",
              desc: "Permanently blackout sensitive text with pixel flattening and apply digital signatures 100% locally."
            },
            "request-a-tool": {
              title: "Request a Tool",
              desc: "Need a specific browser utility? Tell us what client-side tool to build next."
            }
          }
        },
        ar: {
          langLabel: "العربية",
          toolsCount: "32 أداة متاحة",
          brandBadge: "على جهازك • خصوصية تامة • بدون حفظ سجلات",
          heroSubtitle: "أدوات متصفح فائقة السرعة وسهلة الاستخدام للمطورين والمبدعين والمحترفين. معالجة محلية 100% بدون إرسال أي بيانات.",
          searchPlaceholder: "ابحث في 32 أداة (مثل النسبة المئوية، PDF، الفيديو، المقارنة)...",
          noResultsTitle: "لم يتم العثور على نتائج",
          noResultsDesc: "لا توجد أدوات تطابق عبارة البحث الحالية. جرب كلمة مفتاحية أخرى أو قسماً آخر.",
          btnResetSearch: "إعادة ضبط البحث",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك.",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          cat_all: "جميع الأدوات",
          cat_math: "الرياضيات والمالية",
          cat_files: "PDF والملفات",
          cat_images: "الصور",
          cat_text: "أدوات النصوص",
          cat_everyday: "أدوات يومية",
          badge_popular: "شائع",
          badge_high_value: "قيمة عالية",
          badge_live: "متاح الآن",
          badge_request: "اقتراح",
          cat_request: "المجتمع",
          tools: {
            "percentage-calculator": {
              title: "حاسبة النسبة المئوية",
              desc: "احسب الزيادة والنقصان والفرق والنسب المئوية القياسية بدقة وسرعة وبدون تحديث للصفحة."
            },
            "compound-interest": {
              title: "الفائدة المركبة",
              desc: "حاكي نمو الاستثمارات والإيداعات المنتظمة وتكرار تراكم العوائد عبر الزمن."
            },
            "loan-amortization": {
              title: "القروض وجدول الاستهلاك",
              desc: "احسب الأقساط الشهرية وتفاصيل الفوائد وجداول السداد الكاملة بمنتهى السهولة."
            },
            "discount-sales-tax": {
              title: "الخصومات وضريبة المبيعات",
              desc: "احسب السعر النهائي بعد التخفيض، وقيمة التوفير الإجمالية، وضريبة المبيعات المطبقة."
            },
            "gpa-calculator": {
              title: "حاسبة المعدل التراكمي",
              desc: "احسب المعدل الفصلي والتراكمي والدرجات الموزونة بدقة لجميع الأنظمة الأكاديمية."
            },
            "csv-json": {
              title: "تحويل CSV إلى JSON والعكس",
              desc: "حوّل هياكل البيانات بين النسقين بكل سلاسة مع دعم الفواصل والمحددات المخصصة."
            },
            "pdf-merge": {
              title: "دمج ملفات PDF",
              desc: "اجمع عدة مستندات PDF في ملف واحد منظم بأمان تام داخل متصفحك."
            },
            "pdf-split": {
              title: "تقسيم واستخراج صفحات PDF",
              desc: "استخرج نطاقات صفحات محددة أو افصل كل صفحة كملف مستقل محلياً على جهازك."
            },
            "pdf-to-word": {
              title: "تحويل PDF إلى Word",
              desc: "صدّر محتوى PDF النصي كملفات .docx قابلة للتحرير مع إعادة بناء التخطيط داخل متصفحك."
            },
            "base64-file-encoder": {
              title: "تشفير الملفات بـ Base64",
              desc: "حوّل المستندات والملفات الثنائية إلى صيغ data URI وسلاسل نصية Base64."
            },
            "audio-trimmer": {
              title: "قص وتقطيع الصوت",
              desc: "قص وتعديل المقاطع الصوتية بدقة عالية مع مخطط موجي تفاعلي وتصدير بصيغة WAV."
            },
            "video-trimmer": {
              title: "قص وتعديل الفيديو",
              desc: "قص واقتطاع مقاطع الفيديو بصيغ MP4 وWebM وMOV محلياً مع شريط زمني تفاعلي ونسخ سريع للتدفقات."
            },
            "color-palette-extractor": {
              title: "استخراج لوحة الألوان",
              desc: "استخرج أكواد ألوان Hex الأساسية والمتكاملة والمتناسقة من أي صورة ترفعها."
            },
            "svg-png-converter": {
              title: "تحويل SVG إلى PNG",
              desc: "حوّل الرسومات المتجهة SVG إلى صور PNG شفافة وعالية الدقة والوضوح."
            },
            "image-resizer-crop": {
              title: "تعديل أبعاد وقص الصور",
              desc: "عدّل أبعاد الصور بالبكسل مع الحفاظ على التناسب وخفض الحجم دون فقدان الجودة."
            },
            "image-to-base64": {
              title: "تحويل الصورة إلى Base64",
              desc: "حوّل صور PNG وJPG وSVG إلى كود مضمن لصفحات HTML وCSS مباشرة."
            },
            "image-compressor": {
              title: "ضاغط الصور ومُحسّن WEBP",
              desc: "ضغط صور JPG و PNG و WEBP و AVIF محلياً مع التحكم في الجودة والمقارنة البصرية."
            },
            "webp-converter": {
              title: "ضاغط الصور ومُحسّن WEBP",
              desc: "ضغط صور JPG و PNG و WEBP و AVIF محلياً مع التحكم في الجودة والمقارنة البصرية."
            },
            "favicon-builder": {
              title: "منشئ أيقونات Favicon المتعددة",
              desc: "أنشئ حزم الأيقونات بمقاسات 16x16 و32x32 وأيقونات Apple Touch من أي صورة."
            },
            "date-difference": {
              title: "فرق التواريخ وأيام العمل",
              desc: "احسب عدد الأيام الإجمالية وأيام العمل الرسمية وعطلات نهاية الأسبوع بين تاريخين."
            },
            "qr-code-generator": {
              title: "مولد رموز QR Code",
              desc: "أنشئ رموز استجابة سريعة للروابط وبيانات شبكات Wi-Fi وبطاقات جهات الاتصال."
            },
            "age-milestone-calculator": {
              title: "حاسبة العمر والمحطات الزمنية",
              desc: "احسب عمرك الدقيق بالسنوات والأشهر والساعات مع عد تنازلي للمناسبات القادمة."
            },
            "password-generator": {
              title: "مولد كلمات المرور وقوة التشفير",
              desc: "أنشئ كلمات مرور مشفرة وفائقة الأمان مع قياس دقيق لمستوى الإنتروبيا والقوة."
            },
            "timezone-meeting-planner": {
              title: "مخطط الاجتماعات عبر المناطق الزمنية",
              desc: "قارن ساعات العمل المشتركة بين مختلف العواصم والمناطق الزمنية العالمية."
            },
            "word-counter": {
              title: "عداد الكلمات والأحرف",
              desc: "تابع عدد الأحرف والكلمات ووقت القراءة المقدر وإحصائيات الفقرات بشكل فوري."
            },
            "markdown-previewer": {
              title: "محرر ومعاين Markdown",
              desc: "اكتب بلغة Markdown مع معاينة منسقة جنباً إلى جنب وتصدير فوري لكود HTML."
            },
            "url-slug-generator": {
              title: "محول حالات الأحرف ومولد روابط URL",
              desc: "حوّل النصوص بين camelCase وsnake_case وحالات التحرير وأنشئ روابط URL متوافقة مع SEO."
            },
            "text-diff": {
              title: "مقارنة النصوص وتحديد الفروقات",
              desc: "قارن بين نصين جنباً إلى جنب أو بشكل مدمج مع تمييز دقيق للإضافات والحذف."
            },
            "metadata-cleaner": {
              title: "منظف البيانات الوصفية وEXIF",
              desc: "افحص وأزل إحداثيات GPS وبيانات الكاميرا والبيانات الوصفية المخفية من الصور محلياً."
            },
            "jwt-decoder": {
              title: "محلل ومتحقق رموز JWT",
              desc: "فك تشفير وفحص ترويسة وبيانات رموز JWT وتحقق من توقيع HMAC محلياً في المتصفح."
            },
                        "big-data-transformer": {
              title: "محول ومعالج البيانات الضخمة",
              desc: "تحويل وفحص وتصفية ملفات CSV وJSON وTSV الضخمة محلياً في الذاكرة عبر خيوط Web Workers."
            },
            "css-grid-generator": {
              title: "استوديو شبكات CSS والتدرجات",
              desc: "تصميم شبكات CSS بصرياً وتوزيع مناطق القوالب المسمية وتوليد فئات Tailwind والتدرجات اللونية."
            },
            "pdf-redactor": {
              title: "طمس وتوقيع مستندات PDF",
              desc: "احجب النصوص والأرقام الحساسة مع تسطيح آمن للبكسلات وأضف توقيعك الرقمي محلياً بالكامل."
            },
"request-a-tool": {
              title: "اقتراح أداة جديدة",
              desc: "هل تحتاج إلى أداة تصفح معينة؟ أخبرنا بما ترغب في بنائه مستقبلاً."
            }
          }
        },
        fr: {
          langLabel: "Français",
          toolsCount: "32 Outils Disponibles",
          brandBadge: "Côté Client • Confidentialité Totale • Aucun Journal",
          heroSubtitle: "Outils web rapides et accessibles conçus pour les développeurs, créateurs et professionnels. 100% privés et exécutés localement.",
          searchPlaceholder: "Rechercher parmi 32 outils (ex: pourcentage, pdf, vidéo, diff)...",
          noResultsTitle: "Aucun outil trouvé",
          noResultsDesc: "Aucun outil ne correspond à vos critères de recherche. Essayez un autre mot-clé.",
          btnResetSearch: "Réinitialiser la recherche",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement dans votre navigateur.",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          cat_all: "Tous les Outils",
          cat_math: "Maths & Finance",
          cat_files: "PDF & Fichiers",
          cat_images: "Images",
          cat_text: "Outils Texte",
          cat_everyday: "Quotidien",
          badge_popular: "Populaire",
          badge_high_value: "Haute Valeur",
          badge_live: "Disponible",
          badge_request: "Suggérer",
          cat_request: "Communauté",
          tools: {
            "percentage-calculator": {
              title: "Calculateur de Pourcentage",
              desc: "Calculez rapidement les hausses, baisses, écarts et pourcentages standards en temps réel."
            },
            "compound-interest": {
              title: "Intérêts Composés",
              desc: "Simulez la croissance des investissements, dépôts et fréquences de capitalisation."
            },
            "loan-amortization": {
              title: "Prêts & Amortissement",
              desc: "Calculez les mensualités, la répartition des intérêts et les échéanciers complets."
            },
            "discount-sales-tax": {
              title: "Remise & Taxe de Vente",
              desc: "Trouvez les économies sur prix final, les marges de remise et taxes de vente."
            },
            "gpa-calculator": {
              title: "Calculateur de Moyenne & Notes",
              desc: "Calculez votre moyenne semestrielle cumulative et vos notes pondérées instantanément."
            },
            "csv-json": {
              title: "CSV vers JSON / JSON vers CSV",
              desc: "Convertissez vos structures de données dans les deux sens avec séparateurs personnalisés."
            },
            "pdf-merge": {
              title: "Fusionner des PDF",
              desc: "Combinez plusieurs documents PDF en toute sécurité directement dans votre navigateur."
            },
            "pdf-split": {
              title: "Diviser & Extraire PDF",
              desc: "Extrayez des plages de pages ou séparez chaque page individuellement en local."
            },
            "pdf-to-word": {
              title: "Convertisseur PDF vers Word",
              desc: "Exportez le contenu textuel d'un PDF en fichier .docx éditable avec reconstruction de mise en page."
            },
            "base64-file-encoder": {
              title: "Encodeur de Fichiers Base64",
              desc: "Encodez documents et fichiers binaires en URI de données et chaînes Base64."
            },
            "audio-trimmer": {
              title: "Découpeur audio & Trimmer",
              desc: "Découpez et extrayez des extraits audio haute précision avec onde sonore interactive et export WAV."
            },
            "video-trimmer": {
              title: "Découpeur vidéo & Trimmer",
              desc: "Découpez et élaguez vos vidéos MP4, WebM et MOV localement avec double curseur temporel et copie rapide."
            },
            "color-palette-extractor": {
              title: "Extracteur de Palette de Couleurs",
              desc: "Extrayez les codes hexadécimaux dominants et complémentaires de toute image téléversée."
            },
            "svg-png-converter": {
              title: "Convertisseur SVG vers PNG",
              desc: "Pixellisez vos illustrations vectorielles SVG en images PNG transparentes haute résolution."
            },
            "image-resizer-crop": {
              title: "Redimensionner & Rogner l'Image",
              desc: "Ajustez les dimensions en pixels, conservez le ratio d'aspect et optimisez le poids."
            },
            "image-to-base64": {
              title: "Image vers Base64",
              desc: "Convertissez PNG, JPG ou SVG en sources de données inline pour HTML/CSS."
            },
            "image-compressor": {
              title: "Compresseur d'Images & Optimiseur WebP",
              desc: "Compressez vos images JPG, PNG, WEBP et AVIF localement avec curseur comparatif avant/après."
            },
            "webp-converter": {
              title: "Compresseur d'Images & Optimiseur WebP",
              desc: "Compressez vos images JPG, PNG, WEBP et AVIF localement avec curseur comparatif avant/après."
            },
            "favicon-builder": {
              title: "Générateur de Favicon Multi-Tailles",
              desc: "Générez les formats standards 16x16, 32x32 et apple-touch depuis une image."
            },
            "date-difference": {
              title: "Différence de Dates & Jours Ouvrés",
              desc: "Calculez le nombre total de jours, jours ouvrés et week-ends entre deux dates."
            },
            "qr-code-generator": {
              title: "Générateur de Code QR",
              desc: "Créez des codes QR vectoriels personnalisés pour URLs, accès Wi-Fi et fiches contact."
            },
            "age-milestone-calculator": {
              title: "Calculateur d'Âge & Jalons",
              desc: "Calculez votre âge exact en années, mois et heures avec compte à rebours."
            },
            "password-generator": {
              title: "Générateur de Mots de Passe & Entropie",
              desc: "Générez des mots de passe cryptographiquement sûrs avec évaluation d'entropie."
            },
            "timezone-meeting-planner": {
              title: "Planificateur de Réunions Fuseaux Horaires",
              desc: "Comparez les heures de travail qui se chevauchent à travers les fuseaux horaires mondiaux."
            },
            "word-counter": {
              title: "Compteur de Mots & Caractères",
              desc: "Suivez en temps réel le nombre de caractères, mots, temps de lecture et paragraphes."
            },
            "markdown-previewer": {
              title: "Prévisualiseur Markdown",
              desc: "Rédigez en Markdown avec rendu côte à côte et export HTML instantané."
            },
            "url-slug-generator": {
              title: "Convertisseur de Casse & Slugs URL",
              desc: "Convertissez en camelCase, snake_case, Title Case et générez des slugs d'URL optimisés pour le SEO."
            },
            "text-diff": {
              title: "Comparateur de Texte (Diff)",
              desc: "Comparez deux textes côte à côte ou en ligne avec surbrillance des ajouts et suppressions."
            },
            "metadata-cleaner": {
              title: "Nettoyeur de Métadonnées & EXIF",
              desc: "Inspectez et supprimez les coordonnées GPS, modèles d'appareils et balises EXIF/XMP localement."
            },
            "jwt-decoder": {
              title: "Décodeur & Vérificateur JWT",
              desc: "Décodez les jetons JWT, inspectez les réclamations et vérifiez les signatures HMAC localement."
            },
                        "big-data-transformer": {
              title: "Transformateur Big-Data Hors Ligne",
              desc: "Traitez, inspectez, filtrez et convertissez d'importants jeux de données CSV, JSON et TSV en mémoire RAM."
            },
            "css-grid-generator": {
              title: "Studio CSS Grid & Dégradés",
              desc: "Concevez visuellement vos modèles CSS Grid, configurez des zones nommées et générez du code Tailwind."
            },
            "pdf-redactor": {
              title: "Biffure & Signature PDF",
              desc: "Masquez définitivement les données sensibles par aplatissement de pixels et signez vos PDF localement."
            },
"request-a-tool": {
              title: "Proposer un outil",
              desc: "Besoin d'un outil spécifique ? Dites-nous quel outil développer ensuite."
            }
          }
        },
        it: {
          langLabel: "Italiano",
          toolsCount: "32 Strumenti Disponibili",
          brandBadge: "Lato Client • Massima Privacy • Nessun Log",
          heroSubtitle: "Strumenti web veloci e accessibili per sviluppatori, creator e professionisti. 100% privati ed elaborati in locale.",
          searchPlaceholder: "Cerca tra 32 strumenti (es: percentuale, pdf, video, diff)...",
          noResultsTitle: "Nessun risultato",
          noResultsDesc: "Nessuno strumento trovato corrispondente alla ricerca. Prova un'altra parola chiave.",
          btnResetSearch: "Azzera ricerca",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente nel tuo browser.",
          footerPriv: "Informativa sulla privacy",
          footerTerms: "Termini di servizio",
          footerAbout: "Chi siamo",
          footerContact: "Contatti",
          cat_all: "Tutti gli Strumenti",
          cat_math: "Matematica & Finanza",
          cat_files: "PDF & File",
          cat_images: "Immagini",
          cat_text: "Strumenti Testo",
          cat_everyday: "Quotidiano",
          badge_popular: "Popolare",
          badge_high_value: "Alto Valore",
          badge_live: "Disponibile",
          badge_request: "Suggerisci",
          cat_request: "Community",
          tools: {
            "percentage-calculator": {
              title: "Calcolatore di Percentuale",
              desc: "Calcola rapidamente aumenti, diminuzioni, differenze e percentuali standard in tempo reale."
            },
            "compound-interest": {
              title: "Interesse Composto",
              desc: "Simula la crescita degli investimenti, depositi e frequenze di capitalizzazione nel tempo."
            },
            "loan-amortization": {
              title: "Prestiti & Ammortamento",
              desc: "Calcola le rate mensili, ripartizione degli interessi e piani di rimborso completi."
            },
            "discount-sales-tax": {
              title: "Sconto & Tasse di Vendita",
              desc: "Calcola il risparmio sul prezzo finale, margini di sconto e imposte applicabili."
            },
            "gpa-calculator": {
              title: "Calcolatore Media & Voti",
              desc: "Calcola la media ponderata degli esami e i punteggi accademici all'istante."
            },
            "csv-json": {
              title: "Da CSV a JSON / Da JSON a CSV",
              desc: "Converti strutture dati avanti e indietro con supporto per delimitatori personalizzati."
            },
            "pdf-merge": {
              title: "Unisci PDF",
              desc: "Combina più documenti PDF interamente nel tuo browser in totale sicurezza."
            },
            "pdf-split": {
              title: "Dividi ed Estrai PDF",
              desc: "Estrai intervalli di pagine selezionati o separa singole pagine localmente."
            },
            "pdf-to-word": {
              title: "Convertitore PDF in Word",
              desc: "Esporta il contenuto testuale del PDF come file .docx modificabile con ricostruzione del layout."
            },
            "base64-file-encoder": {
              title: "Codificatore File Base64",
              desc: "Codifica documenti e risorse binarie in URI dati e stringhe Base64 grezze."
            },
            "audio-trimmer": {
              title: "Taglia Audio & Trimmer",
              desc: "Taglia e ritaglia spezzoni audio ad alta precisione con forma d'onda interattiva ed esportazione WAV."
            },
            "video-trimmer": {
              title: "Taglia Video & Trimmer",
              desc: "Taglia e ritaglia video MP4, WebM e MOV localmente con doppi cursori temporali ed esportazione diretta."
            },
            "color-palette-extractor": {
              title: "Estrattore di Palette Colori",
              desc: "Estrai codici esadecimali primari e complementari da qualsiasi immagine caricata."
            },
            "svg-png-converter": {
              title: "Convertitore da SVG a PNG",
              desc: "Rasterizza illustrazioni vettoriali SVG in formati PNG trasparenti ad alta risoluzione."
            },
            "image-resizer-crop": {
              title: "Ridimensiona & Ritaglia Immagine",
              desc: "Regola le dimensioni in pixel, mantieni le proporzioni e ottimizza il peso."
            },
            "image-to-base64": {
              title: "Da Immagine a Base64",
              desc: "Converti PNG, JPG o SVG in sorgenti dati inline incorporabili in HTML/CSS."
            },
            "image-compressor": {
              title: "Compressore Immagini & Ottimizzatore WebP",
              desc: "Comprimi immagini JPG, PNG, WEBP e AVIF in locale con controllo qualità e confronto split-view."
            },
            "webp-converter": {
              title: "Compressore Immagini & Ottimizzatore WebP",
              desc: "Comprimi immagini JPG, PNG, WEBP e AVIF in locale con controllo qualità e confronto split-view."
            },
            "favicon-builder": {
              title: "Generatore di Favicon Multi-Dimensione",
              desc: "Genera icone standard 16x16, 32x32 e apple-touch a partire da un'icona."
            },
            "date-difference": {
              title: "Differenza Date & Giorni Lavorativi",
              desc: "Calcola giorni totali, giorni lavorativi aziendali e weekend tra date."
            },
            "qr-code-generator": {
              title: "Generatore di Codici QR",
              desc: "Crea codici QR vettoriali personalizzati per URL, credenziali WiFi e contatti."
            },
            "age-milestone-calculator": {
              title: "Calcolatore Età & Traguardi",
              desc: "Calcola l'età esatta in anni, mesi e ore con conto alla rovescia per gli eventi."
            },
            "password-generator": {
              title: "Generatore di Password & Entropia",
              desc: "Genera password crittograficamente sicure con punteggio di entropia e robustezza."
            },
            "timezone-meeting-planner": {
              title: "Pianificatore Riunioni Fusi Orari",
              desc: "Confronta le ore lavorative sovrapposte nei principali fusi orari globali."
            },
            "word-counter": {
              title: "Conteggio Parole & Caratteri",
              desc: "Monitora in tempo reale caratteri, parole, tempi di lettura stimati e paragrafi."
            },
            "markdown-previewer": {
              title: "Anteprima Markdown",
              desc: "Scrivi Markdown con anteprima affiancata ed esportazione HTML istantanea."
            },
            "url-slug-generator": {
              title: "Convertitore di Maiuscole & Slug URL",
              desc: "Converti testo tra camelCase, snake_case, Title Case e genera slug URL ottimizzati per la SEO."
            },
            "text-diff": {
              title: "Confronto Testo & Diff",
              desc: "Confronta due testi affiancati o in linea con evidenziazione visiva di aggiunte e rimozioni."
            },
            "metadata-cleaner": {
              title: "Pulitore Metadati & EXIF",
              desc: "Ispeziona e rimuovi coordinate GPS, modelli di fotocamera e metadati EXIF/XMP localmente."
            },
            "jwt-decoder": {
              title: "Decodificatore & Verificatore JWT",
              desc: "Decodifica token JWT, ispeziona i payload e verifica le firme HMAC localmente nel browser."
            },
                        "big-data-transformer": {
              title: "Trasformatore Big-Data Offline",
              desc: "Analizza, ispeziona, filtra e converti enormi dataset CSV, JSON e TSV nella memoria RAM."
            },
            "css-grid-generator": {
              title: "Studio CSS Grid & Sfumature",
              desc: "Progetta visivamente layout CSS Grid complessi, configura aree con nome e genera classi Tailwind CSS."
            },
            "pdf-redactor": {
              title: "Oscuramento & Firma PDF",
              desc: "Cancella in modo permanente dati sensibili con appiattimento dei pixel e firma digitalmente i PDF in locale."
            },
"request-a-tool": {
              title: "Richiedi uno strumento",
              desc: "Hai bisogno di un'utilità specifica? Suggeriscici il prossimo strumento."
            }
          }
        }
      };

      // --- State & DOM References ---
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      const searchInput = document.getElementById('search-input') || document.getElementById('toolSearch');
      const searchClear = document.getElementById('searchClear');
      const searchKbd = document.getElementById('searchKbd');
      const categoryBtns = document.querySelectorAll('.category-btn');
      const categoriesBar = document.getElementById('categoriesBar');
      const categoryPillIndicator = document.getElementById('categoryPillIndicator');
      const cards = document.querySelectorAll('.tool-card');
      const noResultsBox = document.getElementById('noResultsBox');
      const btnResetSearch = document.getElementById('btnResetSearch');

      let currentLang = 'en';

      // --- Language Switcher Logic ---
      function setLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'en';
        currentLang = lang;
        localStorage.setItem('vantorkit_lang', lang);

        const dict = TRANSLATIONS[lang];

        // Update html lang and dir
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update Button label and active state
        currentLangLabel.textContent = dict.langLabel;
        langOptions.forEach(opt => {
          if (opt.dataset.lang === lang) {
            opt.classList.add('active');
          } else {
            opt.classList.remove('active');
          }
        });

        // Update static UI elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            if (el.tagName === 'INPUT') {
              el.placeholder = dict[key];
            } else {
              el.textContent = dict[key];
            }
          }
        });

        // Update Search Placeholder
        searchInput.placeholder = dict.searchPlaceholder;

        // Update All Tool Cards Titles and Descriptions
        cards.forEach(card => {
          const toolId = card.dataset.toolId;
          if (dict.tools && dict.tools[toolId]) {
            const titleEl = card.querySelector('[data-tool-field="title"]');
            const descEl = card.querySelector('[data-tool-field="desc"]');
            if (titleEl) titleEl.textContent = dict.tools[toolId].title;
            if (descEl) descEl.textContent = dict.tools[toolId].desc;
          }

          // Update Category label inside card
          const cat = card.dataset.category;
          const catLabelEl = card.querySelector('.tool-category');
          if (catLabelEl && dict['cat_' + cat]) {
            catLabelEl.textContent = dict['cat_' + cat];
          }

          // Update Badge if exists
          const badgeEl = card.querySelector('.tool-badge');
          if (badgeEl) {
            if (badgeEl.classList.contains('popular')) badgeEl.textContent = dict.badge_popular;
            else if (badgeEl.classList.contains('high-value')) badgeEl.textContent = dict.badge_high_value;
            else if (badgeEl.classList.contains('live')) badgeEl.textContent = dict.badge_live;
          }
        });

        // Re-filter search results with updated language content
        filterTools();

        // Update category indicator position for localized button widths
        setTimeout(() => {
          updateCategoryIndicator(null, false);
        }, 0);
      }

      // Toggle Language Menu
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

      // Handle Option Selection
      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          const selectedLang = opt.dataset.lang;
          setLanguage(selectedLang);
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!document.getElementById('langDropdown').contains(e.target)) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // --- Arabic & Latin Search Normalizer ---
      function normalizeSearch(str) {
        if (!str) return '';
        return str.toString().toLowerCase()
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .replace(/[أإآء]/g, 'ا')
          .replace(/ة/g, 'ه')
          .replace(/ى/g, 'ي')
          .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
          .trim();
      }

      // --- Search & Category Filtering ---
      function filterTools() {
        const rawQuery = searchInput.value;
        const normQuery = normalizeSearch(rawQuery);
        const activeCatEl = document.querySelector('.category-btn.active');
        const activeCat = activeCatEl ? activeCatEl.dataset.cat : 'all';
        let visibleCount = 0;

        // Toggle clear search button and ⌘K badge
        if (normQuery.length > 0) {
          searchClear.style.display = 'flex';
          if (searchKbd) searchKbd.style.display = 'none';
        } else {
          searchClear.style.display = 'none';
          if (searchKbd) searchKbd.style.display = 'inline-flex';
        }

        cards.forEach(card => {
          if (card.classList.contains('card-request-tool')) {
            if (normQuery === '' && activeCat === 'all') {
              card.style.display = 'flex';
            } else if (normQuery !== '' && (normQuery.includes('request') || normQuery.includes('طلب'))) {
              card.style.display = 'flex';
              visibleCount++;
            } else {
              card.style.display = 'none';
            }
            return;
          }

          const toolId = card.dataset.toolId || '';
          const category = card.dataset.category || '';
          const tags = card.dataset.tags || '';
          const keywords = card.dataset.keywords || '';

          const titleEl = card.querySelector('[data-tool-field="title"]') || card.querySelector('.tool-title') || card.querySelector('h3');
          const title = card.dataset.title || (titleEl ? titleEl.textContent : '');

          const descEl = card.querySelector('[data-tool-field="desc"]') || card.querySelector('.tool-desc') || card.querySelector('p');
          const desc = card.dataset.desc || (descEl ? descEl.textContent : '');

          const catLabelEl = card.querySelector('.tool-category');
          const catLabel = catLabelEl ? catLabelEl.textContent : '';

          // Match keywords across all 4 translations
          let translationKeywords = '';
          if (typeof TRANSLATIONS !== 'undefined') {
            for (const langKey in TRANSLATIONS) {
              const langTools = TRANSLATIONS[langKey] && TRANSLATIONS[langKey].tools;
              if (langTools && langTools[toolId]) {
                translationKeywords += ' ' + (langTools[toolId].title || '') + ' ' + (langTools[toolId].desc || '');
              }
            }
          }

          // Full searchable text for this card
          const fullSearchableText = [
            title,
            desc,
            tags,
            keywords,
            category,
            catLabel,
            translationKeywords
          ].join(' ');

          const normCardText = normalizeSearch(fullSearchableText);

          let matchesQuery = false;
          if (normQuery === '') {
            matchesQuery = true;
          } else {
            const queryWords = normQuery.split(/\s+/).filter(Boolean);
            matchesQuery = queryWords.every(word => normCardText.includes(word));
          }

          const matchesCategory = (activeCat === 'all' || category === activeCat || (activeCat === 'files' && category === 'pdf'));

          let isVisible = false;
          if (normQuery !== '') {
            isVisible = matchesQuery;
          } else {
            isVisible = matchesCategory;
          }

          if (isVisible) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Show/hide no results box
        if (visibleCount === 0) {
          noResultsBox.style.display = 'block';
        } else {
          noResultsBox.style.display = 'none';
        }
      }

      searchInput.addEventListener('input', filterTools);
      searchInput.addEventListener('keyup', filterTools);

      if (searchKbd) {
        searchKbd.addEventListener('click', () => {
          searchInput.focus();
        });
      }

      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        filterTools();
        searchInput.focus();
      });

      // Sliding Pill Indicator Positioner
      function updateCategoryIndicator(targetBtn, animate = true) {
        if (!categoryPillIndicator || !categoriesBar) return;
        const activeBtn = targetBtn || categoriesBar.querySelector('.category-btn.active');
        if (!activeBtn) {
          categoryPillIndicator.style.opacity = '0';
          return;
        }

        const left = activeBtn.offsetLeft;
        const top = activeBtn.offsetTop;
        const width = activeBtn.offsetWidth;
        const height = activeBtn.offsetHeight;

        if (!animate) {
          categoryPillIndicator.style.transition = 'none';
        } else {
          categoryPillIndicator.style.transition = 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), width 0.32s cubic-bezier(0.16, 1, 0.3, 1), height 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease';
        }

        categoryPillIndicator.style.transform = `translate3d(${left}px, ${top}px, 0)`;
        categoryPillIndicator.style.width = `${width}px`;
        categoryPillIndicator.style.height = `${height}px`;
        categoryPillIndicator.style.opacity = '1';

        if (!animate) {
          categoryPillIndicator.offsetHeight; // force reflow
          categoryPillIndicator.style.transition = '';
        }
      }

      btnResetSearch.addEventListener('click', () => {
        searchInput.value = '';
        categoryBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        const allBtn = document.querySelector('.category-btn[data-cat="all"]');
        if (allBtn) {
          allBtn.classList.add('active');
          allBtn.setAttribute('aria-selected', 'true');
          updateCategoryIndicator(allBtn, true);
        }
        filterTools();
        searchInput.focus();
      });

      categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          categoryBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          updateCategoryIndicator(btn, true);
          filterTools();
        });
      });

      window.addEventListener('resize', () => {
        updateCategoryIndicator(null, false);
      });

      // Keyboard Shortcuts (Cmd+K / Ctrl+K and '/' to open & focus search)
      document.addEventListener('keydown', (e) => {
        const isCmdOrCtrlK = (e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K');
        const isSlash = e.key === '/' && document.activeElement !== searchInput && !['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase());

        if (isCmdOrCtrlK || isSlash) {
          e.preventDefault();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          searchInput.focus();
          searchInput.select();
        } else if (e.key === 'Escape' && document.activeElement === searchInput) {
          searchInput.value = '';
          filterTools();
          searchInput.blur();
        }
      });

      // --- Initialization ---
      const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(savedLang);
      requestAnimationFrame(() => {
        updateCategoryIndicator(null, false);
      });
    })();