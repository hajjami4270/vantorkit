(function() {
  const LANG_NAMES = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
  const BACK_LABELS = {
    en: '← Back to Tools',
    ar: 'الرجوع إلى الأدوات ←',
    fr: '← Retour aux outils',
    it: '← Torna agli strumenti'
  };

  const I18N_PAGE = {
    en: {
      privBadge: "Privacy & Data Protection",
      privTitle: 'Privacy <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Policy</span>',
      privSubtitle: "Your files and text never leave your browser. Optional anonymous analytics only with your consent.",
      privUpdated: "Last Updated: November 6, 2026 • Effective Date: November 6, 2026",
      privZeroTitle: "100% Client-Side Tool Processing",
      privZeroDesc: "When you use VantorKit utilities—including PDF mergers, redactors, image converters, formatters, and calculators—all file and text processing occurs locally within your web browser using HTML5 Canvas, the Web Crypto API, and WebAssembly. Your files, photos, text contents, audio, video, and calculation inputs never leave your browser and are never transmitted to or stored on our servers.",
      privSec1Title: "1. Information We Collect (And What We Never Collect)",
      privSec1P1: "VantorKit executes all utility computations locally on your hardware. Here is how data handling is structured across the platform:",
      privSec1L1: "<strong>User Files, Text &amp; Tool Content (Never Collected):</strong> We <em>never</em> receive, transmit, log, or store your uploaded images, PDFs, CSVs, audio, video, markdown documents, passwords, or tool inputs and outputs. When you close or refresh your browser tab, all temporary browser memory used by the tool is immediately released.",
      privSec1L2: "<strong>Local Storage Data:</strong> We use standard browser <code>localStorage</code> on your device solely to remember your preferred interface language (<code>vantorkit_lang</code>), your analytics consent preference (<code>vantorkit_analytics_consent</code>), and optional local tool drafts (such as in the Markdown Editor). This data resides on your device and is never uploaded to our servers.",
      privSec1L3: "<strong>Standard Hosting Access Logs:</strong> Like standard websites, our hosting infrastructure processes routine HTTP connection requests (such as IP addresses, browser user-agent strings, referring URLs, and timestamps) strictly to deliver static files, mitigate DDoS attacks, and maintain infrastructure stability.",
      privSec2Title: "2. Optional Website Analytics (Google Analytics 4)",
      privSec2P1: "On selected pages, VantorKit uses <strong>Google Analytics 4 (GA4)</strong> (Measurement ID: <code>G-S8MDMH082N</code>) strictly on an opt-in basis to measure aggregate traffic and understand which tools are used. VantorKit does not serve advertisements and does not use advertising or cross-site tracking cookies.",
      privSec2L1: "<strong>Loaded Only After Your Consent:</strong> Google Analytics is blocked by default. Before you click <em>Accept</em> on the consent banner—or if you click <em>Decline</em>—zero network requests are made to Google domains (<code>googletagmanager.com</code> or <code>google-analytics.com</code>) and no analytics cookies are set.",
      privSec2L2: "<strong>What Is Collected (With Consent):</strong> When you explicitly accept analytics, GA4 collects anonymous usage events such as page views, tool page visited, device and browser type, and approximate geographic region using first-party analytics cookies (<code>_ga</code> and <code>_ga_S8MDMH082N</code>). Under GA4, IP addresses are processed transiently by Google to derive coarse location metadata and are not logged or stored by Google Analytics.",
      privSec2L3: "<strong>What Is NEVER Collected:</strong> Google Analytics never receives or inspects your files, text, audio, video, passwords, tokens, calculation inputs, or any content processed inside any tool. Furthermore, privacy-sensitive tools (including PDF Redactor, JWT Decoder, Metadata Cleaner, Big-Data Transformer, CSS Grid Generator, and Video Trimmer) and legal/blog pages do not include the analytics loader at all.",
      privSec2L4: "<strong>Data Processor:</strong> Google LLC acts as the data processor for optional analytics data processed through Google Analytics 4.",
      privSec2P2: "<strong>How to Withdraw Consent:</strong> You can review, change, or withdraw your analytics consent at any time by clicking the <strong>Privacy settings</strong> link in the footer of any page. Withdrawing consent immediately stops Google Analytics (enabling <code>window['ga-disable-G-S8MDMH082N'] = true</code>) and deletes the <code>_ga</code> cookies set by it.",
      privSec3Title: "3. How to Manage and Disable Cookies",
      privSec3P1: "You can decline or revoke analytics cookies at any time via the <strong>Privacy settings</strong> link in the site footer, or by clearing and blocking cookies in your browser settings. Declining or disabling cookies does not affect the functionality of any VantorKit tool.",
      privSec4Title: "4. European Privacy Rights (EEA, UK &amp; Switzerland)",
      privSec4P1: "If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you may exercise privacy rights regarding personal data, including requesting access, rectification, erasure, restriction of processing, or data portability, and withdrawing consent at any time.",
      privSec4P2: "Because VantorKit does not require user accounts and never uploads your files or tool inputs to our servers, we do not store personal user profiles or user content. For optional analytics, you may withdraw consent immediately using the <strong>Privacy settings</strong> link in the footer, or contact us at the email address below.",
      privSec5Title: "5. California Privacy Disclosures (Do Not Sell My Info)",
      privSec5P1: "For California residents, here is a factual summary of how VantorKit handles information:",
      privSec5L1: "<strong>We Do Not Sell Personal Information:</strong> VantorKit does not sell, rent, or trade personal information to third parties or data brokers.",
      privSec5L2: "<strong>Control &amp; Deletion:</strong> You can revoke analytics consent and clear analytics cookies at any time via the <strong>Privacy settings</strong> link in the footer, and you may contact us to inquire about technical server log records.",
      privSec5L3: "<strong>Equal Access:</strong> All VantorKit tools provide identical features and performance regardless of whether you accept or decline optional analytics.",
      privSec6Title: "6. Children's Privacy",
      privSec6P1: "VantorKit does not knowingly solicit or collect personal information from children under the age of 13. If you believe a child has submitted personal information to us, please notify us at the address below so we can promptly delete any such records.",
      privSec7Title: "7. Privacy Inquiries &amp; Contact",
      privSec7P1: "If you have any questions, clarifications, or requests concerning this Privacy Policy or our client-side processing architecture, please reach out to our privacy team:",
      privSec7Contact: '<strong>Email:</strong> <a href="mailto:privacy@vantorkit.com">privacy@vantorkit.com</a> or <a href="mailto:support@vantorkit.com">support@vantorkit.com</a><br><strong>Website:</strong> <a href="https://vantorkit.com/contact.html">https://vantorkit.com/contact.html</a>',
      footerPriv: "Privacy Policy",
      footerTerms: "Terms of Service",
      footerAbout: "About Us",
      footerContact: "Contact",
      footerPrivacySettings: "Privacy settings",
      footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
    },
    ar: {
      privBadge: "الخصوصية وحماية البيانات",
      privTitle: 'سياسة <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">الخصوصية</span>',
      privSubtitle: "ملفاتك ونصوصك لا تغادر متصفحك أبداً. التحليلات المجهولة الاختيارية تعمل فقط بموافقتك.",
      privUpdated: "آخر تحديث: 6 نوفمبر 2026 • تاريخ السريان: 6 نوفمبر 2026",
      privZeroTitle: "معالجة محلية للأدوات بنسبة 100% داخل المتصفح",
      privZeroDesc: "عند استخدام أي من أدوات فانتوركيت—بما فيها دمج وتنقيح ملفات PDF ومحولات الصور والآلات الحاسبة—تتم معالجة الملفات والنصوص بالكامل محلياً داخل متصفحك باستخدام HTML5 Canvas وWeb Crypto API وWebAssembly. لا تغادر ملفاتك أو نصوصك أو مقاطع الصوت والفيديو متصفحك أبداً ولا يتم إرسالها أو تخزينها على خوادمنا.",
      privSec1Title: "1. البيانات التي نجمعها (وما لا نجمعه أبداً)",
      privSec1P1: "تنفذ فانتوركيت جميع عمليات الأدوات محلياً على جهازك. وفيما يلي كيفية التعامل مع البيانات عبر المنصة:",
      privSec1L1: "<strong>ملفات المستخدم والنصوص ومحتوى الأدوات (لا تُجمع أبداً):</strong> نحن لا نستلم أو ننقل أو نسجل أو نخزن أي صور أو ملفات PDF أو CSV أو مقاطع صوتية أو مرئية أو نصوص أو كلمات مرور تعالجها داخل الأدوات. عند إغلاق علامة التبويب، يتم تفريغ الذاكرة المؤقتة فوراً.",
      privSec1L2: "<strong>بيانات التخزين المحلي (Local Storage):</strong> نستخدم <code>localStorage</code> في متصفحك فقط لحفظ لغة الواجهة المفضلة (<code>vantorkit_lang</code>) وخيار موافقة التحليلات (<code>vantorkit_analytics_consent</code>) والمسودات المحلية الاختيارية (مثل محرر Markdown). تبقى هذه البيانات على جهازك فقط.",
      privSec1L3: "<strong>سجلات الاتصال القياسية للاستضافة:</strong> كأي موقع ويب قياسي، تعالج خوادم الاستضافة بيانات الاتصال الروتينية (مثل عنوان IP ونوع المتصفح والوقت) حصرياً لتقديم الصفحات الثابتة والحماية من هجمات حجب الخدمة (DDoS).",
      privSec2Title: "2. تحليلات الموقع الاختيارية (Google Analytics 4)",
      privSec2P1: "في صفحات مختارة، نستخدم <strong>Google Analytics 4 (GA4)</strong> (المعرّف: <code>G-S8MDMH082N</code>) بشكل اختياري فقط لقياس إجمالي الزيارات ومعرفة الأدوات الأكثر استخداماً. لا تعرض فانتوركيت أي إعلانات ولا تستخدم ملفات تعريف ارتباط إعلانية.",
      privSec2L1: "<strong>تُحمَّل فقط بعد موافقتك:</strong> يتم حظر نصوص Google Analytics افتراضياً. قبل النقر على <em>قبول</em> في شريط الموافقة—أو في حال النقر على <em>رفض</em>—لا يتم إرسال أي طلبات إلى نطاقات Google (<code>googletagmanager.com</code> أو <code>google-analytics.com</code>) ولا يتم تعيين أي ملفات تعريف ارتباط للتحليلات.",
      privSec2L2: "<strong>ما الذي يتم جمعه (بعد الموافقة):</strong> عند قبول التحليلات، يسجل GA4 أحداث استخدام مجهولة مثل مشاهدات الصفحة، والأداة المستخدمة، ونوع الجهاز والمتصفح، والمنطقة الجغرافية التقريبية عبر ملفات تعريف الارتباط (<code>_ga</code> و<code>_ga_S8MDMH082N</code>). تعالج Google عناوين IP بشكل عابر لتقدير المنطقة الجغرافية وفق آلية GA4 دون تخزينها.",
      privSec2L3: "<strong>ما الذي لا يتم جمعه أبداً:</strong> لا تصل التحليلات أبداً إلى ملفاتك أو نصوصك أو الصوت أو الفيديو أو كلمات المرور أو محتوى الأدوات. كما أن الأدوات الحساسة (مثل تنقيح PDF، ومحلل JWT، ومنظف البيانات الوصفية، ومحول البيانات الضخمة، واستوديو CSS Grid، وقص الفيديو) وصفحات السياسات والمدونة لا تتضمن أداة تحميل التحليلات أصلاً.",
      privSec2L4: "<strong>معالج البيانات:</strong> تعمل شركة Google LLC كمعالج بيانات لإحصاءات الاستخدام الاختيارية عبر خدمة Google Analytics 4.",
      privSec2P2: "<strong>كيفية سحب الموافقة:</strong> يمكنك تغيير خيارك أو سحب موافقتك في أي وقت عبر النقر على رابط <strong>إعدادات الخصوصية</strong> في تذييل الصفحة. يؤدي سحب الموافقة فوراً إلى إيقاف Google Analytics (بتفعيل <code>window['ga-disable-G-S8MDMH082N'] = true</code>) ومسح ملفات تعريف الارتباط <code>_ga</code>.",
      privSec3Title: "3. إدارة وتعطيل ملفات تعريف الارتباط (Cookies)",
      privSec3P1: "يمكنك رفض أو إلغاء ملفات تعريف ارتباط التحليلات في أي وقت من خلال رابط <strong>إعدادات الخصوصية</strong> في أسفل الصفحة، أو من إعدادات متصفحك. لا يؤثر تعطيل ملفات تعريف الارتباط على عمل أي أداة في فانتوركيت.",
      privSec4Title: "4. حقوق الخصوصية الأوروبية (المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا)",
      privSec4P1: "إذا كنت مقيماً في المنطقة الاقتصادية الأوروبية أو المملكة المتحدة أو سويسرا، يمكنك ممارسة حقوق الخصوصية المتعلقة بالبيانات الشخصية، بما في ذلك طلب الوصول أو التصحيح أو الحذف أو تقييد المعالجة، وسحب الموافقة في أي وقت.",
      privSec4P2: "نظراً لأن فانتوركيت لا تتطلب إنشاء حسابات ولا ترفع ملفاتك إلى الخوادم، فليست لدينا ملفات تعريف للمستخدمين. وبالنسبة للتحليلات الاختيارية، يمكنك سحب الموافقة فوراً عبر رابط <strong>إعدادات الخصوصية</strong> في التذييل أو مراسلتنا عبر البريد الإلكتروني أدناه.",
      privSec5Title: "5. إفصاحات الخصوصية في كاليفورنيا (عدم بيع البيانات الشخصية)",
      privSec5P1: "نوضح للمستخدمين في كاليفورنيا الحقائق التالية حول ممارسات البيانات لدينا:",
      privSec5L1: "<strong>نحن لا نبيع البيانات الشخصية:</strong> لا تقوم فانتوركيت ببيع أو تأجير أو مشاركة البيانات الشخصية مع أي جهات إعلانية أو وسطاء بيانات.",
      privSec5L2: "<strong>التحكم والحذف:</strong> يمكنك إلغاء موافقة التحليلات ومسح ملفات تعريف الارتباط في أي وقت عبر <strong>إعدادات الخصوصية</strong> في التذييل، أو التواصل معنا بشأن سجلات الاتصال التقنية.",
      privSec5L3: "<strong>الخدمة المتكافئة:</strong> تعمل جميع أدوات فانتوركيت بنفس الكفاءة والميزات سواء قبلت أو رفضت التحليلات الاختيارية.",
      privSec6Title: "6. خصوصية الأطفال",
      privSec6P1: "لا تطلب فانتوركيت أو تجمع عن علم أي بيانات شخصية من الأطفال دون سن 13 عاماً. إذا كنت تعتقد أن طفلاً قد أرسل بيانات شخصية إلينا، يرجى إبلاغنا عبر البريد الإلكتروني أدناه لحذفها فوراً.",
      privSec7Title: "7. استفسارات الخصوصية والتواصل معنا",
      privSec7P1: "إذا كانت لديك أي أسئلة أو طلبات بخصوص سياسة الخصوصية هذه أو معمارية المعالجة المحلية، يرجى التواصل مع فريق الخصوصية:",
      privSec7Contact: '<strong>البريد الإلكتروني:</strong> <a href="mailto:privacy@vantorkit.com">privacy@vantorkit.com</a> أو <a href="mailto:support@vantorkit.com">support@vantorkit.com</a><br><strong>الموقع:</strong> <a href="https://vantorkit.com/contact.html">https://vantorkit.com/contact.html</a>',
      footerPriv: "سياسة الخصوصية",
      footerTerms: "شروط الخدمة",
      footerAbout: "من نحن",
      footerContact: "اتصل بنا",
      footerPrivacySettings: "إعدادات الخصوصية",
      footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
    },
    fr: {
      privBadge: "Confidentialité & Protection des données",
      privTitle: 'Politique de <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Confidentialité</span>',
      privSubtitle: "Vos fichiers et textes ne quittent jamais votre navigateur. Analyses anonymes facultatives uniquement avec votre consentement.",
      privUpdated: "Dernière mise à jour : 6 novembre 2026 • Date d'effet : 6 novembre 2026",
      privZeroTitle: "Traitement des Outils 100% Côté Client",
      privZeroDesc: "Lorsque vous utilisez les utilitaires VantorKit (fusion et biffure PDF, convertisseurs d'images, formateurs, calculateurs), tout le traitement des fichiers et des textes s'exécute localement dans votre navigateur via HTML5 Canvas, Web Crypto API et WebAssembly. Vos fichiers, photos, textes, sons et vidéos ne quittent jamais votre navigateur et ne sont jamais transmis à nos serveurs.",
      privSec1Title: "1. Informations Collectées (Et Ce Que Nous Ne Collectons Jamais)",
      privSec1P1: "VantorKit exécute tous les calculs d'outils localement sur votre appareil. Voici comment les données sont gérées :",
      privSec1L1: "<strong>Fichiers, Textes et Contenus des Outils (Jamais Collectés) :</strong> Nous ne recevons, ne transmettons, n'enregistrons ni ne stockons jamais vos images, PDF, CSV, fichiers audio/vidéo, documents Markdown, mots de passe ou calculs. À la fermeture de l'onglet, la mémoire temporaire du navigateur est immédiatement libérée.",
      privSec1L2: "<strong>Stockage Local (Local Storage) :</strong> Nous utilisons le <code>localStorage</code> de votre navigateur uniquement pour mémoriser votre langue d'interface (<code>vantorkit_lang</code>), votre choix de consentement aux analyses (<code>vantorkit_analytics_consent</code>) et les brouillons locaux optionnels (comme dans l'Éditeur Markdown). Ces données restent sur votre appareil.",
      privSec1L3: "<strong>Journaux d'Accès d'Hébergement Standards :</strong> Comme tout site web standard, notre infrastructure d'hébergement traite les métadonnées de connexion HTTP courantes (adresse IP, agent utilisateur, URL demandée, horodatage) uniquement pour servir les pages statiques, contrer les attaques DDoS et assurer la stabilité du service.",
      privSec2Title: "2. Analyses Web Facultatives (Google Analytics 4)",
      privSec2P1: "Sur certaines pages, VantorKit utilise <strong>Google Analytics 4 (GA4)</strong> (ID : <code>G-S8MDMH082N</code>) strictement sur consentement préalable (opt-in) afin de mesurer la fréquentation globale et comprendre quels outils sont utilisés. VantorKit ne diffuse aucune publicité et n'utilise aucun cookie publicitaire.",
      privSec2L1: "<strong>Chargé Uniquement Après Votre Consentement :</strong> Google Analytics est bloqué par défaut. Avant que vous ne cliquiez sur <em>Accepter</em> dans la bannière de consentement — ou si vous cliquez sur <em>Refuser</em> — aucune requête n'est envoyée aux domaines Google (<code>googletagmanager.com</code> ou <code>google-analytics.com</code>) et aucun cookie d'analyse n'est déposé.",
      privSec2L2: "<strong>Ce Qui Est Collecté (Avec Consentement) :</strong> Si vous acceptez les analyses, GA4 enregistre des événements d'utilisation anonymes tels que les pages vues, l'outil consulté, le type d'appareil/navigateur et la région géographique approximative via des cookies propriétaires (<code>_ga</code> et <code>_ga_S8MDMH082N</code>). Dans GA4, l'adresse IP est traitée de manière transitoire par Google pour déterminer la région approximative et n'est ni journalisée ni stockée par Google Analytics.",
      privSec2L3: "<strong>Ce Qui N'est JAMAIS Collecté :</strong> Google Analytics n'accède jamais à vos fichiers, textes, contenus audio ou vidéo, mots de passe, jetons ou données traitées dans les outils. De plus, les outils sensibles (PDF Redactor, JWT Decoder, Metadata Cleaner, Big-Data Transformer, CSS Grid Generator, Video Trimmer) ainsi que les pages légales et le blog ne chargent jamais le script d'analyse.",
      privSec2L4: "<strong>Sous-traitant :</strong> Google LLC agit en tant que sous-traitant (data processor) pour le traitement des données d'analyse facultatives via Google Analytics 4.",
      privSec2P2: "<strong>Comment Retirer Votre Consentement :</strong> Vous pouvez modifier votre choix ou retirer votre consentement à tout moment en cliquant sur le lien <strong>Paramètres de confidentialité</strong> dans le pied de page. Le retrait du consentement désactive immédiatement Google Analytics (via <code>window['ga-disable-G-S8MDMH082N'] = true</code>) et supprime les cookies <code>_ga</code>.",
      privSec3Title: "3. Gestion et Désactivation des Cookies",
      privSec3P1: "Vous pouvez refuser ou révoquer les cookies d'analyse à tout moment via le lien <strong>Paramètres de confidentialité</strong> en bas de page, ou dans les paramètres de votre navigateur. La désactivation des cookies n'affecte aucunement le fonctionnement des outils VantorKit.",
      privSec4Title: "4. Droits Européens en Matière de Confidentialité (EEE, Royaume-Uni et Suisse)",
      privSec4P1: "Si vous résidez dans l'Espace économique européen (EEE), au Royaume-Uni ou en Suisse, vous disposez de droits concernant vos données personnelles, notamment l'accès, la rectification, l'effacement, la limitation du traitement et le retrait de votre consentement à tout moment.",
      privSec4P2: "VantorKit ne nécessitant aucun compte utilisateur et ne téléversant jamais vos fichiers sur nos serveurs, nous ne détenons aucun profil personnel. Pour les analyses facultatives, vous pouvez retirer votre consentement immédiatement via le lien <strong>Paramètres de confidentialité</strong> du pied de page ou nous contacter à l'adresse ci-dessous.",
      privSec5Title: "5. Informations sur la Confidentialité en Californie (Non-Vente des Données)",
      privSec5P1: "Pour les résidents de Californie, voici un résumé factuel de nos pratiques :",
      privSec5L1: "<strong>Aucune Vente de Données Personnelles :</strong> VantorKit ne vend, ne loue ni n'échange aucune information personnelle à des tiers ou courtiers en données.",
      privSec5L2: "<strong>Contrôle et Suppression :</strong> Vous pouvez révoquer votre consentement aux analyses et supprimer les cookies <code>_ga</code> à tout moment via <strong>Paramètres de confidentialité</strong>, ou nous contacter au sujet des journaux techniques.",
      privSec5L3: "<strong>Accès Égal :</strong> Tous les outils VantorKit offrent des fonctionnalités identiques, que vous acceptiez ou refusiez les analyses facultatives.",
      privSec6Title: "6. Confidentialité des Enfants",
      privSec6P1: "VantorKit ne sollicite ni ne collecte sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous pensez qu'un enfant nous a transmis des informations personnelles, veuillez nous contacter afin que nous les supprimions rapidement.",
      privSec7Title: "7. Questions et Contact Confidentialité",
      privSec7P1: "Pour toute question ou demande concernant cette Politique de Confidentialité ou notre architecture côté client, veuillez contacter notre équipe :",
      privSec7Contact: '<strong>E-mail :</strong> <a href="mailto:privacy@vantorkit.com">privacy@vantorkit.com</a> ou <a href="mailto:support@vantorkit.com">support@vantorkit.com</a><br><strong>Site Web :</strong> <a href="https://vantorkit.com/contact.html">https://vantorkit.com/contact.html</a>',
      footerPriv: "Politique de confidentialité",
      footerTerms: "Conditions d'utilisation",
      footerAbout: "À propos",
      footerContact: "Contact",
      footerPrivacySettings: "Paramètres de confidentialité",
      footerText: "© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur."
    },
    it: {
      privBadge: "Privacy e Protezione Dati",
      privTitle: 'Informativa sulla <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Privacy</span>',
      privSubtitle: "I tuoi file e testi non lasciano mai il tuo browser. Statistiche anonime facoltative solo con il tuo consenso.",
      privUpdated: "Ultimo aggiornamento: 6 novembre 2026 • Data di efficacia: 6 novembre 2026",
      privZeroTitle: "Elaborazione degli Strumenti 100% Lato Client",
      privZeroDesc: "Quando utilizzi gli strumenti di VantorKit—inclusi strumenti PDF, convertitori di immagini, formattatori e calcolatrici—tutta l'elaborazione di file e testi avviene localmente nel tuo browser tramite HTML5 Canvas, Web Crypto API e WebAssembly. I tuoi file, foto, testi, audio, video e parametri di calcolo non lasciano mai il tuo browser e non vengono mai trasmessi o salvati sui nostri server.",
      privSec1Title: "1. Informazioni che Raccogliamo (E Cosa Non Raccogliamo Mai)",
      privSec1P1: "VantorKit esegue tutti i calcoli localmente sul tuo dispositivo. Ecco come vengono gestiti i dati:",
      privSec1L1: "<strong>File, Testi e Contenuti degli Strumenti (Mai Raccolti):</strong> Non riceviamo, trasmettiamo, registriamo né memorizziamo mai immagini, PDF, CSV, file audio o video, documenti Markdown, password o input elaborati negli strumenti. Alla chiusura della scheda, la memoria temporanea del browser viene immediatamente liberata.",
      privSec1L2: "<strong>Dati nel Local Storage:</strong> Utilizziamo il <code>localStorage</code> del browser esclusivamente per memorizzare la lingua dell'interfaccia (<code>vantorkit_lang</code>), la preferenza di consenso alle statistiche (<code>vantorkit_analytics_consent</code>) e le bozze locali facoltative (come nell'Editor Markdown). Questi dati restano sul tuo dispositivo.",
      privSec1L3: "<strong>Log di Accesso Standard dell'Hosting:</strong> Come i normali siti web, la nostra infrastruttura di hosting elabora i consueti dati tecnici di connessione HTTP (indirizzo IP, user-agent del browser, URL richiesto e timestamp) esclusivamente per erogare le pagine statiche, mitigare attacchi DDoS e garantire la stabilità del servizio.",
      privSec2Title: "2. Statistiche Web Facoltative (Google Analytics 4)",
      privSec2P1: "Su pagine selezionate, VantorKit utilizza <strong>Google Analytics 4 (GA4)</strong> (ID: <code>G-S8MDMH082N</code>) esclusivamente previa accettazione (opt-in) per misurare il traffico aggregato e comprendere quali strumenti vengono utilizzati. VantorKit non mostra pubblicità e non utilizza cookie pubblicitari o di profilazione.",
      privSec2L1: "<strong>Caricato Solo Dopo il Tuo Consenso:</strong> Google Analytics è bloccato per impostazione predefinita. Prima che tu faccia clic su <em>Accetta</em> nel banner del consenso—o se fai clic su <em>Rifiuta</em>—non viene effettuata alcuna richiesta verso i domini Google (<code>googletagmanager.com</code> o <code>google-analytics.com</code>) e non viene impostato alcun cookie analitico.",
      privSec2L2: "<strong>Cosa Viene Raccolto (Con il Consenso):</strong> Se accetti le statistiche, GA4 raccoglie eventi di utilizzo anonimi come pagine visualizzate, strumento visitato, tipo di dispositivo/browser e regione geografica approssimativa tramite cookie analitici di prima parte (<code>_ga</code> e <code>_ga_S8MDMH082N</code>). In GA4, gli indirizzi IP vengono elaborati in modo transitorio da Google per ricavare l'area geografica approssimativa e non vengono registrati né archiviati da Google Analytics.",
      privSec2L3: "<strong>Cosa NON Viene MAI Raccolto:</strong> Google Analytics non accede né raccoglie mai file, testi, audio, video, password, token o qualsiasi contenuto elaborato all'interno degli strumenti. Inoltre, gli strumenti più sensibili (PDF Redactor, JWT Decoder, Metadata Cleaner, Big-Data Transformer, CSS Grid Generator e Video Trimmer), le pagine legali e il blog non caricano affatto lo script analitico.",
      privSec2L4: "<strong>Responsabile del Trattamento (Data Processor):</strong> Google LLC opera quale responsabile del trattamento per i dati statistici facoltativi elaborati tramite Google Analytics 4.",
      privSec2P2: "<strong>Come Revocare il Consenso:</strong> Puoi modificare la tua scelta o revocare il consenso in qualsiasi momento facendo clic sul link <strong>Impostazioni privacy</strong> nel piè di pagina. La revoca disattiva immediatamente Google Analytics (impostando <code>window['ga-disable-G-S8MDMH082N'] = true</code>) e cancella i cookie <code>_ga</code> impostati.",
      privSec3Title: "3. Come Gestire e Disattivare i Cookie",
      privSec3P1: "Puoi rifiutare o revocare i cookie analitici in qualsiasi momento tramite il link <strong>Impostazioni privacy</strong> nel piè di pagina, oppure cancellando e bloccando i cookie nelle impostazioni del browser. Disattivare i cookie non limita in alcun modo l'utilizzo degli strumenti di VantorKit.",
      privSec4Title: "4. Diritti Europei sulla Privacy (SEE, Regno Unito e Svizzera)",
      privSec4P1: "Se ti trovi nello Spazio Economico Europeo (SEE), nel Regno Unito o in Svizzera, puoi esercitare i diritti relativi ai dati personali, inclusi accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e revoca del consenso in qualsiasi momento.",
      privSec4P2: "Poiché VantorKit non richiede account utente e non carica mai i tuoi file sui nostri server, non conserviamo profili personali né file degli utenti. Per le statistiche facoltative, puoi revocare il consenso immediatamente tramite il link <strong>Impostazioni privacy</strong> nel piè di pagina o contattarci all'indirizzo email indicato di seguito.",
      privSec5Title: "5. Informazioni sulla Privacy per la California (Nessuna Vendita di Dati)",
      privSec5P1: "Per i residenti in California, ecco un riepilogo fattuale delle nostre pratiche:",
      privSec5L1: "<strong>Non Vendiamo Informazioni Personali:</strong> VantorKit non vende, affitta né cede informazioni personali a terze parti o broker di dati.",
      privSec5L2: "<strong>Controllo e Cancellazione:</strong> Puoi revocare il consenso alle statistiche ed eliminare i cookie analitici in qualsiasi momento tramite <strong>Impostazioni privacy</strong> nel piè di pagina, o contattarci in merito ai log tecnici di connessione.",
      privSec5L3: "<strong>Parità di Servizio:</strong> Tutti gli strumenti di VantorKit offrono le medesime funzionalità indipendentemente dalle tue scelte sulle statistiche facoltative.",
      privSec6Title: "6. Privacy dei Minori",
      privSec6P1: "VantorKit non richiede né raccoglie consapevolmente informazioni personali da minori di 13 anni. Se ritieni che un minore ci abbia inviato dati personali, contattaci all'indirizzo sottostante per provvedere alla rimozione immediata.",
      privSec7Title: "7. Richieste sulla Privacy e Contatti",
      privSec7P1: "Per qualsiasi domanda o richiesta riguardante questa Informativa sulla Privacy o la nostra architettura lato client, contatta il nostro team:",
      privSec7Contact: '<strong>Email:</strong> <a href="mailto:privacy@vantorkit.com">privacy@vantorkit.com</a> o <a href="mailto:support@vantorkit.com">support@vantorkit.com</a><br><strong>Sito web:</strong> <a href="https://vantorkit.com/contact.html">https://vantorkit.com/contact.html</a>',
      footerPriv: "Informativa sulla privacy",
      footerTerms: "Termini di servizio",
      footerAbout: "Chi siamo",
      footerContact: "Contatti",
      footerPrivacySettings: "Impostazioni privacy",
      footerText: "© 2026 VantorKit. Utilità web veloci, gratuite e private. Tutta l'elaborazione viene eseguita localmente nel browser."
    }
  };

  function clearGaCookiesOnPrivacyPage() {
    try {
      window['ga-disable-G-S8MDMH082N'] = true;
      const rawCookies = document.cookie ? document.cookie.split(';') : [];
      const names = ['_ga', '_ga_S8MDMH082N', '_gid', '_gat'];
      for (let i = 0; i < rawCookies.length; i++) {
        const eq = rawCookies[i].indexOf('=');
        const n = (eq > -1 ? rawCookies[i].substring(0, eq) : rawCookies[i]).trim();
        if ((n.indexOf('_ga') === 0 || n.indexOf('_gid') === 0 || n.indexOf('_gat') === 0) && !names.includes(n)) {
          names.push(n);
        }
      }
      const host = window.location.hostname || '';
      const domains = ['', host];
      if (host) {
        domains.push('.' + host);
        const parts = host.split('.');
        if (parts.length >= 2) {
          const base = parts.slice(-2).join('.');
          domains.push(base, '.' + base);
        }
      }
      const paths = ['/', window.location.pathname || '/'];
      const exp = 'Thu, 01 Jan 1970 00:00:00 GMT';
      names.forEach(cName => {
        domains.forEach(dom => {
          const domAttr = dom ? '; domain=' + dom : '';
          paths.forEach(p => {
            document.cookie = cName + '=; expires=' + exp + '; Max-Age=0; path=' + p + domAttr + '; SameSite=Lax';
          });
        });
      });
    } catch (e) {}
  }

  function updateActiveLanguageUI(lang) {
    if (!LANG_NAMES[lang]) lang = 'en';
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    const label = document.getElementById('currentLangLabel');
    if (label) label.textContent = LANG_NAMES[lang];

    document.querySelectorAll('.lang-option').forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      opt.classList.toggle('active', optLang === lang);
    });

    const backSpan = document.querySelector('#backToHome [data-i18n="backLink"]');
    if (backSpan && BACK_LABELS[lang]) {
      backSpan.textContent = BACK_LABELS[lang];
    }

    const t = I18N_PAGE[lang] || I18N_PAGE.en;
    Object.keys(t).forEach(key => {
      const els = document.querySelectorAll(`[data-i18n="${key}"]`);
      els.forEach(el => {
        el.innerHTML = t[key];
      });
    });
  }

  function setupDropdownInteractivity() {
    const dropdown = document.getElementById('langDropdown');
    const toggleBtn = document.getElementById('langToggleBtn');
    const menu = document.getElementById('langMenu');
    if (!dropdown || !toggleBtn || !menu) return;

    function closeDropdown() {
      menu.classList.remove('open');
      dropdown.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown(e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      const isOpen = menu.classList.contains('open');
      if (isOpen) {
        closeDropdown();
      } else {
        menu.classList.add('open');
        dropdown.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    }

    toggleBtn.onclick = toggleDropdown;

    menu.querySelectorAll('.lang-option').forEach(opt => {
      opt.onclick = function(e) {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        const selectedLang = opt.getAttribute('data-lang');
        if (selectedLang) {
          try { localStorage.setItem('vantorkit_lang', selectedLang); } catch (err) {}
          updateActiveLanguageUI(selectedLang);
        }
        closeDropdown();
      };
    });

    document.addEventListener('click', function(e) {
      if (dropdown && !dropdown.contains(e.target)) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDropdown();
        toggleBtn.focus();
      }
    });

    const privSettingsBtn = document.getElementById('vkPrivacySettingsBtn');
    if (privSettingsBtn) {
      privSettingsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        try { localStorage.setItem('vantorkit_analytics_consent', 'declined'); } catch (err) {}
        clearGaCookiesOnPrivacyPage();
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const notices = {
          en: 'Analytics consent has been revoked and _ga cookies have been cleared.',
          ar: 'تم سحب موافقة التحليلات ومسح ملفات تعريف الارتباط _ga.',
          fr: 'Le consentement aux analyses a été révoqué et les cookies _ga ont été supprimés.',
          it: 'Il consenso alle statistiche è stato revocato e i cookie _ga sono stati cancellati.'
        };
        privSettingsBtn.textContent = notices[lang] || notices.en;
      });
    }

    let savedLang = 'en';
    try { savedLang = localStorage.getItem('vantorkit_lang') || 'en'; } catch (err) {}
    if (!LANG_NAMES[savedLang]) savedLang = 'en';
    updateActiveLanguageUI(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDropdownInteractivity);
  } else {
    setupDropdownInteractivity();
  }
})();
