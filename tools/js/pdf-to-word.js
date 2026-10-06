(function(){
    'use strict';
    if(window.pdfjsLib){
      pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
    const I18N={
      en:{
        dropzonePrivacyBadge: "🔒 100% Private: Processed locally in browser RAM (0 bytes uploaded)",
        langLabel:'English',backLink:'\u2190 Back to Tools',
        brandBadge:'PDF & Files \u2022 100% Client-Side \u2022 Zero Cloud Uploads',
        pageSubtitle:'Extract text from PDF documents and export a structured .docx file entirely in your browser. No uploads. Total privacy.',
        disclaimerText:'Best results with text-based documents (single and multi-column articles, reports, and basic tables). Scanned documents (image-only) cannot be converted without OCR, and complex magazine-style layouts with text wrapped around irregular floating images are not yet fully supported.',
        scannedHaltMsg:"This PDF appears to be a scanned image with no extractable text. Automatic conversion isn't possible — OCR support may be added in a future update.",
        dropTitle:'Drop Your PDF Here',
        dropSubtitle:'Drag & drop a PDF file, or click Browse to select. Processed 100% locally \u2014 never uploaded to any server.',
        btnBrowse:'Browse PDF File',
        scannedWarning:'This PDF appears to be scanned or image-based. Very little or no selectable text was detected. The output document may be mostly empty. For best results, use text-based PDFs.',
        previewLabel:'First Page Preview',convertTitle:'Ready to Convert',
        convertDesc:'Click to extract text, reconstruct layout, and generate your .docx file.',
        btnClear:'Clear',btnConvert:'Convert to Word (.docx)',converting:'Extracting text...',
        procPage:function(i,t){return 'Processing page '+i+' of '+t+'\u2026';},
        buildingDoc:'Building Word document\u2026',done:'Done!',
        successTitle:'Word Document Generated!',
        successSubtitle:'Your .docx file is ready to download and edit in Microsoft Word or Google Docs.',
        statPages:'Total Pages',statWords:'Words Extracted',statParagraphs:'Paragraphs',statDocxSize:'.docx Size',
        btnDownload:'Download .docx',btnConvertAnother:'Convert Another',
        guideTitle:'How PDF to Word Conversion Works',
        guideSubtitle:'Your PDF is parsed entirely in your browser \u2014 no servers, no cloud, no data exposure.',
        guideStep1Title:'1. Text Extraction',
        guideStep1Desc:"pdf.js reads each page and extracts text runs with their x/y coordinates and font metrics from the PDF's internal content stream without rendering an image.",
        guideStep2Title:'2. Layout Reconstruction',
        guideStep2Desc:'Runs are grouped into lines by y-coordinate proximity, then into paragraphs by vertical gap analysis. Column-aligned text is detected and represented as Word tables.',
        guideStep3Title:'3. .docx Assembly',
        guideStep3Desc:'docx.js assembles the extracted structure into an Open XML .docx document with styled paragraphs and a page-break between each original PDF page.',
        faqTitle:'Frequently Asked Questions',
        faq1Q:'Is my PDF uploaded to any server?',faq1A:'No. All processing runs in your browser tab using WebAssembly and JavaScript. Your PDF bytes never leave your device.',
        faq2Q:'Why is the output different from my original PDF?',faq2A:'PDF is a fixed-layout format not designed for reflow. The tool approximates the text structure, but pixel-perfect fidelity is impossible without OCR or layout AI.',
        faq3Q:'Will scanned PDFs work?',faq3A:'No. Scanned documents store pages as images, not selectable text. This tool requires text-layer PDFs. An OCR step is needed first.',
        faq4Q:'Can I convert password-protected PDFs?',faq4A:'Not directly. Remove the password protection first, then upload the unlocked version here.',
        footerText:'\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastConverted:'\u2705 .docx ready for download!',toastDownload:'\u2b07\ufe0f Downloading your document\u2026',
        toastCleared:'\u{1f5d1}\ufe0f File cleared.',toastLibErr:'\u26a0\ufe0f Libraries not yet loaded. Please wait.',toastNoFile:'\u{1f4c4} Please select a PDF file first.'
      },
      ar:{
        dropzonePrivacyBadge: "🔒 100% خصوصية: معالجة محلية في ذاكرة المتصفح RAM (تم رفع 0 بايت)",
        langLabel:'\u0627\u0644\u0639\u0631\u0628\u064a\u0629',backLink:'\u2190 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge:'PDF \u0648\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u2022 \u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u062d\u0644\u064a\u0629 100% \u2022 \u0644\u0627 \u0631\u0641\u0639 \u0644\u0644\u0645\u0644\u0641\u0627\u062a',
        pageSubtitle:'\u0627\u0633\u062a\u062e\u0631\u062c \u0627\u0644\u0646\u0635\u0648\u0635 \u0645\u0646 \u0645\u0644\u0641\u0627\u062a PDF \u0648\u0635\u062f\u0651\u0631\u0647\u0627 \u0643\u0645\u0644\u0641 .docx \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u062a\u0645\u0627\u0645\u0627\u064b. \u0628\u062f\u0648\u0646 \u0631\u0641\u0639. \u062e\u0635\u0648\u0635\u064a\u0629 \u0643\u0627\u0645\u0644\u0629.',
        disclaimerText:'\u0623\u0641\u0636\u0644 \u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0645\u0639 \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0627\u0644\u0646\u0635\u064a\u0629 (\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a \u0648\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0623\u062d\u0627\u062f\u064a\u0629 \u0648\u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0639\u0645\u062f\u0629 \u0648\u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629). \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0627\u0644\u0645\u0645\u0633\u0648\u062d\u0629 \u0636\u0648\u0626\u064a\u0627\u064b (\u0627\u0644\u0635\u0648\u0631 \u0641\u0642\u0637) \u062a\u062a\u0637\u0644\u0628 OCR\u060c \u0648\u0627\u0644\u062a\u062e\u0637\u064a\u0637\u0627\u062a \u0627\u0644\u0645\u0639\u0642\u062f\u0629 \u0630\u0627\u062a \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0645\u0644\u062a\u0641\u0629 \u062d\u0648\u0644 \u0627\u0644\u0635\u0648\u0631 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0639\u062f.',
        scannedHaltMsg:'\u064a\u0628\u062f\u0648 \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062a\u0646\u062f \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u0635\u0648\u0631\u0629 \u0645\u0645\u0633\u0648\u062d\u0629 \u0636\u0648\u0626\u064a\u0627\u064b \u0648\u0644\u0627 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0646\u0635 \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u0631\u062c\u0627\u064c\u0647. \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a \u2014 \u0642\u062f \u062a\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u062f\u0639\u0645 OCR \u0641\u064a \u062a\u062d\u062f\u064a\u062b \u0645\u0633\u062a\u0642\u0628\u0644\u064a.',
        dropTitle:'\u0623\u0633\u0642\u0637 \u0645\u0644\u0641 PDF \u0647\u0646\u0627',
        dropSubtitle:'\u0627\u0633\u062d\u0628 \u0648\u0623\u0641\u0644\u062a \u0645\u0644\u0641 PDF\u060c \u0623\u0648 \u0627\u0646\u0642\u0631 \u0644\u0644\u0627\u062e\u062a\u064a\u0627\u0631. \u062a\u062a\u0645 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u062d\u0644\u064a\u0627\u064b 100%.',
        btnBrowse:'\u0627\u062e\u062a\u0631 \u0645\u0644\u0641 PDF',
        scannedWarning:'\u064a\u0628\u062f\u0648 \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0645\u0645\u0633\u0648\u062d \u0636\u0648\u0626\u064a\u0627\u064b. \u062a\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0646\u0635 \u0642\u0644\u064a\u0644 \u0623\u0648 \u0645\u0639\u062f\u0648\u0645. \u0642\u062f \u064a\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0646\u0627\u062a\u062c \u0641\u0627\u0631\u063a\u0627\u064b.',
        previewLabel:'\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0623\u0648\u0644\u0649',convertTitle:'\u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u062d\u0648\u064a\u0644',
        convertDesc:'\u0627\u0646\u0642\u0631 \u0644\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0627\u0644\u0646\u0635 \u0648\u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 .docx.',
        btnClear:'\u0645\u0633\u062d',btnConvert:'\u062a\u062d\u0648\u064a\u0644 \u0625\u0644\u0649 Word (.docx)',converting:'\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0627\u0644\u0646\u0635\u0648\u0635...',
        procPage:function(i,t){return '\u062c\u0627\u0631\u064a \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0635\u0641\u062d\u0629 '+i+' \u0645\u0646 '+t+'\u2026';},
        buildingDoc:'\u062c\u0627\u0631\u064a \u0628\u0646\u0627\u0621 \u0645\u0633\u062a\u0646\u062f Word\u2026',done:'\u0627\u0643\u062a\u0645\u0644!',
        successTitle:'\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0645\u0633\u062a\u0646\u062f Word!',
        successSubtitle:'\u0645\u0644\u0641 .docx \u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u0646\u0632\u064a\u0644.',
        statPages:'\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0635\u0641\u062d\u0627\u062a',statWords:'\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u0631\u062c\u0629',statParagraphs:'\u0627\u0644\u0641\u0642\u0631\u0627\u062a',statDocxSize:'\u062d\u062c\u0645 .docx',
        btnDownload:'\u062a\u0646\u0632\u064a\u0644 .docx',btnConvertAnother:'\u062a\u062d\u0648\u064a\u0644 \u0645\u0644\u0641 \u0622\u062e\u0631',
        guideTitle:'\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644',guideSubtitle:'\u064a\u062a\u0645 \u062a\u062d\u0644\u064a\u0644 \u0645\u0644\u0641 PDF \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643.',
        guideStep1Title:'1. \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0627\u0644\u0646\u0635',guideStep1Desc:'\u064a\u0642\u0631\u0623 pdf.js \u0643\u0644 \u0635\u0641\u062d\u0629 \u0648\u064a\u0633\u062a\u062e\u0631\u062c \u0627\u0644\u0646\u0635\u0648\u0635 \u0645\u0639 \u0625\u062d\u062f\u0627\u062b\u064a\u0627\u062a\u0647\u0627.',
        guideStep2Title:'2. \u0625\u0639\u0627\u062f\u0629 \u0628\u0646\u0627\u0621 \u0627\u0644\u062a\u062e\u0637\u064a\u0637',guideStep2Desc:'\u064a\u062a\u0645 \u062a\u062c\u0645\u064a\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0641\u064a \u0623\u0633\u0637\u0631 \u062b\u0645 \u0641\u0642\u0631\u0627\u062a.',
        guideStep3Title:'3. \u0628\u0646\u0627\u0621 \u0645\u0644\u0641 .docx',guideStep3Desc:'\u062a\u062c\u0645\u0639 \u0645\u0643\u062a\u0628\u0629 docx.js \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u0631\u062c\u0629 \u0641\u064a \u0645\u0633\u062a\u0646\u062f .docx.',
        faqTitle:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q:'\u0647\u0644 \u064a\u064f\u0631\u0641\u0639 \u0645\u0644\u0641 PDF \u0625\u0644\u0649 \u0623\u064a \u062e\u0627\u062f\u0645\u061f',faq1A:'\u0644\u0627. \u062a\u0639\u0645\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0641\u064a \u0645\u062a\u0635\u0641\u062d\u0643.',
        faq2Q:'\u0644\u0645\u0627\u0630\u0627 \u064a\u062e\u062a\u0644\u0641 \u0627\u0644\u0646\u0627\u062a\u062c\u061f',faq2A:'PDF \u0635\u064a\u063a\u0629 \u062a\u062e\u0637\u064a\u0637 \u062b\u0627\u0628\u062a. \u062a\u064f\u0642\u0631\u0651\u0628 \u0627\u0644\u0623\u062f\u0627\u0629 \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0646\u0635\u064a\u0629.',
        faq3Q:'\u0647\u0644 \u062a\u0639\u0645\u0644 \u0627\u0644\u0623\u062f\u0627\u0629 \u0645\u0639 \u0645\u0644\u0641\u0627\u062a PDF \u0627\u0644\u0645\u0645\u0633\u0648\u062d\u0629\u061f',faq3A:'\u0644\u0627. \u062a\u062e\u0632\u0646 \u0627\u0644\u0635\u0648\u0631 \u0643\u0635\u0648\u0631. \u062a\u062d\u062a\u0627\u062c \u0623\u0648\u0644\u0627\u064b \u0625\u0644\u0649 OCR.',
        faq4Q:'\u0647\u0644 \u064a\u0645\u0643\u0646 \u062a\u062d\u0648\u064a\u0644 \u0645\u0644\u0641\u0627\u062a \u0645\u062d\u0645\u064a\u0629\u061f',faq4A:'\u0644\u064a\u0633 \u0645\u0628\u0627\u0634\u0631\u0629. \u0623\u0632\u0644 \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0623\u0648\u0644\u0627\u064b.',
        footerText:'\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629.',
        toastConverted:'\u2705 \u0645\u0644\u0641 .docx \u062c\u0627\u0647\u0632!',toastDownload:'\u2b07\ufe0f \u062c\u0627\u0631\u064a \u0627\u0644\u062a\u0646\u0632\u064a\u0644\u2026',
        toastCleared:'\u{1f5d1}\ufe0f \u062a\u0645 \u0627\u0644\u0645\u0633\u062d.',toastLibErr:'\u26a0\ufe0f \u0627\u0644\u0645\u0643\u062a\u0628\u0627\u062a \u0644\u0645 \u062a\u064f\u062d\u0645\u0651\u0644 \u0628\u0639\u062f.',toastNoFile:'\u{1f4c4} \u064a\u0631\u062c\u0649 \u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0641 PDF \u0623\u0648\u0644\u0627\u064b.'
      },
      fr:{
        dropzonePrivacyBadge: "🔒 100% Privé : Traité localement dans la RAM du navigateur (0 octet téléversé)",
        langLabel:'Fran\u00e7ais',backLink:'\u2190 Retour aux Outils',
        brandBadge:'PDF & Fichiers \u2022 100% C\u00f4t\u00e9 Client \u2022 Z\u00e9ro Upload Cloud',
        pageSubtitle:'Extrayez le texte de vos PDF et exportez un fichier .docx structur\u00e9 enti\u00e8rement dans votre navigateur. Z\u00e9ro upload. Confidentialit\u00e9 totale.',
        disclaimerText:'Meilleurs r\u00e9sultats avec des documents textuels (articles mono et multi-colonnes, rapports et tableaux simples). Les documents scann\u00e9s (images seules) n\u00e9cessitent un OCR, et les mises en page complexes de type magazine ne sont pas encore enti\u00e8rement prises en charge.',
        scannedHaltMsg:"Ce PDF semble \u00eatre une image num\u00e9ris\u00e9e sans texte extractible. La conversion automatique n'est pas possible \u2014 le support OCR sera peut-\u00eatre ajout\u00e9 dans une prochaine mise \u00e0 jour.",
        dropTitle:'D\u00e9posez Votre PDF Ici',
        dropSubtitle:'Glissez-d\u00e9posez un fichier PDF ou cliquez pour s\u00e9lectionner. Traitement 100% local.',
        btnBrowse:'Parcourir le Fichier PDF',
        scannedWarning:'Ce PDF semble \u00eatre scann\u00e9 ou bas\u00e9 sur des images. Tr\u00e8s peu de texte d\u00e9tect\u00e9.',
        previewLabel:"Aper\u00e7u de la Premi\u00e8re Page",convertTitle:'Pr\u00eat \u00e0 Convertir',
        convertDesc:'Cliquez pour extraire le texte et g\u00e9n\u00e9rer votre fichier .docx.',
        btnClear:'Effacer',btnConvert:'Convertir en Word (.docx)',converting:'Extraction du texte\u2026',
        procPage:function(i,t){return 'Traitement de la page '+i+' sur '+t+'\u2026';},
        buildingDoc:'Construction du document Word\u2026',done:'Termin\u00e9 !',
        successTitle:'Document Word G\u00e9n\u00e9r\u00e9 !',
        successSubtitle:'Votre fichier .docx est pr\u00eat \u00e0 t\u00e9l\u00e9charger.',
        statPages:'Pages Total',statWords:'Mots Extraits',statParagraphs:'Paragraphes',statDocxSize:'Taille .docx',
        btnDownload:'T\u00e9l\u00e9charger .docx',btnConvertAnother:'Convertir un autre',
        guideTitle:'Comment Fonctionne la Conversion PDF vers Word',
        guideSubtitle:'Votre PDF est analys\u00e9 enti\u00e8rement dans votre navigateur.',
        guideStep1Title:'1. Extraction du Texte',guideStep1Desc:'pdf.js lit chaque page et extrait les fragments de texte avec leurs coordonn\u00e9es.',
        guideStep2Title:'2. Reconstruction de la Mise en Page',guideStep2Desc:'Les fragments sont regroup\u00e9s en lignes par proximit\u00e9 y, puis en paragraphes.',
        guideStep3Title:'3. Assemblage .docx',guideStep3Desc:"docx.js assemble la structure extraite en un document Open XML .docx.",
        faqTitle:'Questions Fr\u00e9quentes',
        faq1Q:'Mon PDF est-il upload\u00e9 sur un serveur ?',faq1A:"Non. Tout le traitement s'effectue dans votre navigateur.",
        faq2Q:'Pourquoi le r\u00e9sultat diff\u00e8re-t-il du PDF original ?',faq2A:"Le PDF est un format \u00e0 mise en page fixe. L'outil approxime la structure du texte.",
        faq3Q:'Les PDF scann\u00e9s fonctionnent-ils ?',faq3A:"Non. Les documents scann\u00e9s stockent les pages comme images. Une \u00e9tape OCR est n\u00e9cessaire.",
        faq4Q:'Puis-je convertir des PDF prot\u00e9g\u00e9s ?',faq4A:"Pas directement. Supprimez d'abord la protection.",
        footerText:'\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastConverted:'\u2705 Fichier .docx pr\u00eat !',toastDownload:'\u2b07\ufe0f T\u00e9l\u00e9chargement\u2026',
        toastCleared:'\u{1f5d1}\ufe0f Fichier effac\u00e9.',toastLibErr:'\u26a0\ufe0f Biblioth\u00e8ques pas encore charg\u00e9es.',toastNoFile:"\u{1f4c4} Veuillez d'abord s\u00e9lectionner un fichier PDF."
      },
      it:{
        dropzonePrivacyBadge: "🔒 100% Privato: Elaborato localmente nella RAM del browser (0 byte caricati)",
        langLabel:'Italiano',backLink:'\u2190 Torna agli Strumenti',
        brandBadge:'PDF & File \u2022 100% Lato Client \u2022 Zero Upload Cloud',
        pageSubtitle:'Estrai testo da PDF e genera un file .docx strutturato interamente nel tuo browser. Nessun upload. Privacy totale.',
        disclaimerText:'Migliori risultati con documenti basati su testo (articoli a colonna singola o multipla, relazioni e tabelle di base). I documenti scansionati (solo immagini) richiedono OCR, e i layout editoriali complessi non sono ancora pienamente supportati.',
        scannedHaltMsg:"Questo PDF sembra essere un'immagine scansionata priva di testo estraibile. La conversione automatica non \u00e8 possibile \u2014 il supporto OCR potrebbe essere aggiunto in un aggiornamento futuro.",
        dropTitle:'Trascina il Tuo PDF Qui',
        dropSubtitle:'Trascina un file PDF o clicca per selezionare. Elaborazione 100% locale.',
        btnBrowse:'Sfoglia File PDF',
        scannedWarning:'Questo PDF sembra scansionato. Pochissimo testo selezionabile rilevato.',
        previewLabel:'Anteprima Prima Pagina',convertTitle:'Pronto per Convertire',
        convertDesc:'Clicca per estrarre il testo e generare il file .docx.',
        btnClear:'Cancella',btnConvert:'Converti in Word (.docx)',converting:'Estrazione testo\u2026',
        procPage:function(i,t){return 'Elaborazione pagina '+i+' di '+t+'\u2026';},
        buildingDoc:'Costruzione documento Word\u2026',done:'Completato!',
        successTitle:'Documento Word Generato!',
        successSubtitle:'Il tuo file .docx \u00e8 pronto per il download.',
        statPages:'Pagine Totali',statWords:'Parole Estratte',statParagraphs:'Paragrafi',statDocxSize:'Dimensione .docx',
        btnDownload:'Scarica .docx',btnConvertAnother:'Converti un altro',
        guideTitle:'Come Funziona la Conversione PDF in Word',
        guideSubtitle:'Il tuo PDF viene analizzato interamente nel browser.',
        guideStep1Title:'1. Estrazione del Testo',guideStep1Desc:'pdf.js legge ogni pagina ed estrae frammenti di testo con coordinate x/y.',
        guideStep2Title:'2. Ricostruzione del Layout',guideStep2Desc:'I frammenti sono raggruppati in righe per prossimit\u00e0 y, poi in paragrafi.',
        guideStep3Title:'3. Assemblaggio .docx',guideStep3Desc:'docx.js assembla la struttura estratta in un documento Open XML .docx.',
        faqTitle:'Domande Frequenti',
        faq1Q:'Il mio PDF viene caricato su un server?',faq1A:"No. Tutta l'elaborazione avviene nel browser.",
        faq2Q:'Perch\u00e9 il risultato \u00e8 diverso dal PDF originale?',faq2A:"Il PDF \u00e8 un formato a layout fisso. Lo strumento approssima la struttura del testo.",
        faq3Q:'Funziona con PDF scansionati?',faq3A:'No. I documenti scansionati memorizzano le pagine come immagini. Serve prima un passaggio OCR.',
        faq4Q:'Posso convertire PDF protetti da password?',faq4A:'Non direttamente. Rimuovi prima la protezione.',
        footerText:'\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastConverted:'\u2705 File .docx pronto!',toastDownload:'\u2b07\ufe0f Download in corso\u2026',
        toastCleared:'\u{1f5d1}\ufe0f File eliminato.',toastLibErr:'\u26a0\ufe0f Librerie non ancora caricate.',toastNoFile:'\u{1f4c4} Seleziona prima un file PDF.'
      }
    };
    const htmlRoot=document.getElementById('htmlRoot');
    const langToggleBtn=document.getElementById('langToggleBtn');
    const langMenu=document.getElementById('langMenu');
    const currentLangLabel=document.getElementById('currentLangLabel');
    const langOptions=document.querySelectorAll('.lang-option');
    const dropZone=document.getElementById('dropZone');
    const fileInput=document.getElementById('fileInput');
    const btnBrowse=document.getElementById('btnBrowse');
    const fileCard=document.getElementById('fileCard');
    const fileInfoName=document.getElementById('fileInfoName');
    const fileInfoMeta=document.getElementById('fileInfoMeta');
    const fileMetaRow=document.getElementById('fileMetaRow');
    const scannedWarning=document.getElementById('scannedWarning');
    const previewSection=document.getElementById('previewSection');
    const previewCanvas=document.getElementById('previewCanvas');
    const convertCard=document.getElementById('convertCard');
    const btnConvert=document.getElementById('btnConvert');
    const btnClear=document.getElementById('btnClear');
    const progressContainer=document.getElementById('progressContainer');
    const progressBar=document.getElementById('progressBar');
    const progressStatus=document.getElementById('progressStatus');
    const progressPercent=document.getElementById('progressPercent');
    const successCard=document.getElementById('successCard');
    const statPages=document.getElementById('statPages');
    const statWords=document.getElementById('statWords');
    const statParagraphs=document.getElementById('statParagraphs');
    const statDocxSize=document.getElementById('statDocxSize');
    const btnDownload=document.getElementById('btnDownload');
    const btnConvertAnother=document.getElementById('btnConvertAnother');
    const toastEl=document.getElementById('toast');
    const toastMsg=document.getElementById('toastMsg');

    let currentLang='en',currentFile=null,pdfDoc=null,docxBlobUrl=null,docxBytes=null,isScannedPdf=false;
    let totalWordCount=0,totalParaCount=0;

    function dict(){return I18N[currentLang]||I18N.en;}
    function formatBytes(b){if(b<1024)return b+' B';if(b<1048576)return (b/1024).toFixed(1)+' KB';return (b/1048576).toFixed(2)+' MB';}
    var toastTimer;
    function showToast(msg,dur){dur=dur||2800;toastMsg.textContent=msg;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){toastEl.classList.remove('show');},dur);}
    function updateProgress(pct,status){progressBar.style.width=pct+'%';progressPercent.textContent=pct+'%';progressStatus.textContent=status;}

    function setLanguage(lang){
      window.setLanguage = setLanguage;
      if(!I18N[lang])lang='en';
      currentLang=lang;
      localStorage.setItem('vantorkit_lang',lang);
      var d=I18N[lang];
      htmlRoot.setAttribute('lang',lang);
      htmlRoot.setAttribute('dir',lang==='ar'?'rtl':'ltr');
      currentLangLabel.textContent=d.langLabel;
      langOptions.forEach(function(o){o.classList.toggle('active',o.dataset.lang===lang);});
      document.querySelectorAll('[data-i18n]').forEach(function(el){
        var k=el.dataset.i18n;
        if(d[k]&&typeof d[k]==='string')el.textContent=d[k];
      });
    }

    langToggleBtn.addEventListener('click',function(e){
      e.stopPropagation();
      var open=langMenu.classList.contains('open');
      langMenu.classList.toggle('open',!open);
      langToggleBtn.setAttribute('aria-expanded',String(!open));
    });
    langOptions.forEach(function(o){
      o.addEventListener('click',function(){setLanguage(o.dataset.lang);langMenu.classList.remove('open');langToggleBtn.setAttribute('aria-expanded','false');});
    });
    document.addEventListener('click',function(e){
      if(!document.getElementById('langDropdown').contains(e.target)){langMenu.classList.remove('open');langToggleBtn.setAttribute('aria-expanded','false');}
    });

    btnBrowse.addEventListener('click',function(){fileInput.click();});
    fileInput.addEventListener('change',function(e){
      if(e.target.files&&e.target.files.length>0){handleFile(e.target.files[0]);fileInput.value='';}
    });
    ['dragenter','dragover'].forEach(function(ev){
      dropZone.addEventListener(ev,function(e){e.preventDefault();e.stopPropagation();dropZone.classList.add('drag-active');});
    });
    ['dragleave','drop'].forEach(function(ev){
      dropZone.addEventListener(ev,function(e){e.preventDefault();e.stopPropagation();dropZone.classList.remove('drag-active');});
    });
    dropZone.addEventListener('drop',function(e){
      var f=e.dataTransfer&&e.dataTransfer.files;
      if(f&&f.length>0){
        var p=Array.from(f).find(function(x){return x.type==='application/pdf'||x.name.toLowerCase().endsWith('.pdf');});
        if(p)handleFile(p);
      }
    });

    function handleFile(file){
      if(!file||(file.type!=='application/pdf'&&!file.name.toLowerCase().endsWith('.pdf'))){showToast('\u26a0\ufe0f Please upload a valid PDF file.');return;}
      resetState();
      currentFile=file;
      fileInfoName.textContent=file.name;
      fileInfoMeta.textContent=formatBytes(file.size);
      file.arrayBuffer().then(function(ab){
        return pdfjsLib.getDocument({data:ab}).promise;
      }).then(function(pdf){
        pdfDoc=pdf;
        var pc=pdf.numPages;
        fileMetaRow.innerHTML='<span class="meta-pill">\ud83d\udcc4 PDF</span><span class="meta-pill">'+pc+' page'+(pc!==1?'s':'')+'</span><span class="meta-pill">'+formatBytes(file.size)+'</span>';
        var sampleChars=0,samplePages=Math.min(3,pc),promises=[];
        for(var i=1;i<=samplePages;i++){promises.push(pdf.getPage(i).then(function(pg){return pg.getTextContent();}).then(function(tc){tc.items.forEach(function(it){sampleChars+=(it.str||'').trim().length;});}));}
        return Promise.all(promises).then(function(){
          isScannedPdf=(sampleChars/samplePages<30);
          if(isScannedPdf)scannedWarning.classList.add('visible');
          fileCard.classList.add('visible');
          return renderPreview(pdf);
        });
      }).then(function(){
        convertCard.classList.add('visible');
      }).catch(function(err){
        console.error(err);showToast('\u274c Failed to read PDF: '+(err.message||'Unknown error'));
      });
    }

    function renderPreview(pdf){
      return pdf.getPage(1).then(function(page){
        var vp=page.getViewport({scale:1});
        var tw=Math.min(760,window.innerWidth-60);
        var sc=tw/vp.width;
        var sv=page.getViewport({scale:sc});
        previewCanvas.width=sv.width;previewCanvas.height=sv.height;
        var ctx=previewCanvas.getContext('2d');
        return page.render({canvasContext:ctx,viewport:sv}).promise;
      }).then(function(){
        previewSection.classList.add('visible');
      }).catch(function(e){console.warn('Preview failed:',e);});
    }

    function isArabicText(text){
      return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
    }

    function resolveFontStyles(tc, page){
      var fontInfo = {};
      var commonObjs = page && page.commonObjs;
      var styles = tc && tc.styles ? tc.styles : {};
      Object.keys(styles).forEach(function(fn){
        var fObj = (commonObjs && commonObjs.has && commonObjs.has(fn)) ? commonObjs.get(fn) : null;
        var rawName = fObj ? (fObj.name || fObj.loadedName || fObj.fallbackName || '') : '';
        var familyName = styles[fn] ? (styles[fn].fontFamily || '') : '';
        var testStr = (rawName + ' ' + familyName + ' ' + fn).toLowerCase();

        var isBold = !!(fObj && (fObj.bold || fObj.black)) || /bold|black|heavy|demi|semibold/i.test(testStr);
        var isItalic = !!(fObj && fObj.italic) || /italic|oblique/i.test(testStr);

        fontInfo[fn] = {
          name: rawName || familyName || fn,
          bold: isBold,
          italic: isItalic
        };
      });
      return fontInfo;
    }

    function groupRunsIntoLines(runs){
      if(!runs||runs.length===0)return[];
      var sorted = runs.slice().sort(function(a,b){
        return a.y - b.y || a.x - b.x;
      });

      var lines = [];
      var currentLine = [sorted[0]];
      var currentY = sorted[0].y;
      var currentH = sorted[0].height || 12;

      for(var i=1; i<sorted.length; i++){
        var r = sorted[i];
        var rH = r.height || 12;
        var tol = Math.max(Math.min(currentH, rH) * 0.45, 3.5);
        if(Math.abs(r.y - currentY) <= tol){
          currentLine.push(r);
          currentY = currentLine.reduce(function(s, item){ return s + item.y; }, 0) / currentLine.length;
          currentH = Math.max(currentH, rH);
        } else {
          lines.push(currentLine);
          currentLine = [r];
          currentY = r.y;
          currentH = rH;
        }
      }
      if(currentLine.length > 0) lines.push(currentLine);

      return lines.map(function(ln){
        ln.sort(function(a, b){ return a.x - b.x; });
        var yAvg = ln.reduce(function(s, r){ return s + r.y; }, 0) / ln.length;
        var maxH = ln.reduce(function(s, r){ return Math.max(s, r.height || 12); }, 0);
        return {
          runs: ln,
          y: yAvg,
          height: maxH,
          minX: ln[0].x,
          maxX: ln[ln.length - 1].x + (ln[ln.length - 1].width || 10)
        };
      });
    }

    function clusterLineCells(line){
      var cells = [];
      var curCell = null;
      line.runs.forEach(function(r){
        if(!curCell){
          curCell = { x: r.x, width: r.width || 10, runs: [r], text: r.str };
        } else {
          var gap = r.x - (curCell.x + curCell.width);
          if(gap < 20){
            curCell.runs.push(r);
            curCell.text += ' ' + r.str;
            curCell.width = (r.x + (r.width || 10)) - curCell.x;
          } else {
            cells.push(curCell);
            curCell = { x: r.x, width: r.width || 10, runs: [r], text: r.str };
          }
        }
      });
      if(curCell) cells.push(curCell);
      return cells;
    }

    function extractTablesAndText(lines, pageWidth){
      if(!lines||lines.length===0)return[];

      var lineMeta = lines.map(function(ln){
        var cells = clusterLineCells(ln);
        var isMultiColTableCand = false;
        if(cells.length >= 3){
          isMultiColTableCand = true;
        } else if(cells.length === 2){
          var is2ColArticle = (cells[0].x < pageWidth * 0.45 && cells[1].x > pageWidth * 0.50 &&
                               (cells[0].text.length > 25 || cells[1].text.length > 25 || ln.maxX - ln.minX > pageWidth * 0.65));
          if(!is2ColArticle){
            isMultiColTableCand = true;
          }
        }
        return { line: ln, cells: cells, isTableCand: isMultiColTableCand };
      });

      var blocks = [];
      var curTextLines = [];
      var curTableRows = [];

      function flushText(){
        if(curTextLines.length > 0){
          blocks.push({ type: 'text', lines: curTextLines });
          curTextLines = [];
        }
      }

      function flushTable(){
        if(curTableRows.length >= 2){
          var allColX = [];
          curTableRows.forEach(function(row){
            row.cells.forEach(function(c){ allColX.push(c.x); });
          });
          allColX.sort(function(a, b){ return a - b; });
          var cols = [];
          allColX.forEach(function(x){
            var last = cols[cols.length - 1];
            if(last === undefined || (x - last) > 28) cols.push(x);
          });

          if(cols.length >= 2 && cols.length <= 10){
            var mappedRows = curTableRows.map(function(row){
              var rowCells = new Array(cols.length).fill(null).map(function(){ return { text: '', runs: [] }; });
              row.cells.forEach(function(cell){
                var colIdx = cols.findIndex(function(cx){ return Math.abs(cell.x - cx) <= 30; });
                if(colIdx >= 0){
                  rowCells[colIdx].text = (rowCells[colIdx].text ? rowCells[colIdx].text + ' ' : '') + cell.text.trim();
                  rowCells[colIdx].runs.push.apply(rowCells[colIdx].runs, cell.runs);
                }
              });
              return rowCells;
            });
            blocks.push({ type: 'table', cols: cols, rows: mappedRows });
            curTableRows = [];
            return;
          }
        }
        curTableRows.forEach(function(r){ curTextLines.push(r.line); });
        curTableRows = [];
      }

      lineMeta.forEach(function(lm){
        if(lm.isTableCand){
          flushText();
          curTableRows.push(lm);
        } else {
          flushTable();
          curTextLines.push(lm.line);
        }
      });
      flushTable();
      flushText();

      return blocks;
    }

    function segmentColumnsInTextBlock(lines, pageWidth){
      if(!lines||lines.length < 3) return [{ type: 'flow', lines: lines }];

      var midLeft = pageWidth * 0.44;
      var midRight = pageWidth * 0.56;

      var col1Lines = [];
      var col2Lines = [];
      var multiColCount = 0;

      lines.forEach(function(line){
        var leftRuns = line.runs.filter(function(r){ return (r.x + (r.width || 0)) <= midRight; });
        var rightRuns = line.runs.filter(function(r){ return r.x >= midLeft; });

        if(leftRuns.length > 0 && rightRuns.length > 0 && (rightRuns[0].x - (leftRuns[leftRuns.length - 1].x + (leftRuns[leftRuns.length - 1].width || 0)) >= 25)){
          multiColCount++;
        } else if(line.maxX - line.minX < pageWidth * 0.52){
          if(line.maxX <= midRight) col1Lines.push(line);
          else if(line.minX >= midLeft) col2Lines.push(line);
        }
      });

      if(multiColCount < 2 && (col1Lines.length < 2 || col2Lines.length < 2)){
        return [{ type: 'flow', lines: lines }];
      }

      var colMinY = Infinity, colMaxY = -Infinity;
      lines.forEach(function(line){
        var leftRuns = line.runs.filter(function(r){ return (r.x + (r.width || 0)) <= midRight; });
        var rightRuns = line.runs.filter(function(r){ return r.x >= midLeft; });
        if(leftRuns.length > 0 && rightRuns.length > 0 && (rightRuns[0].x - (leftRuns[leftRuns.length - 1].x + (leftRuns[leftRuns.length - 1].width || 0)) >= 25)){
          colMinY = Math.min(colMinY, line.y);
          colMaxY = Math.max(colMaxY, line.y);
        } else if(line.maxX - line.minX < pageWidth * 0.52){
          colMinY = Math.min(colMinY, line.y);
          colMaxY = Math.max(colMaxY, line.y);
        }
      });

      var topSpanning = [];
      var bottomSpanning = [];
      var allCol1 = [];
      var allCol2 = [];

      lines.forEach(function(line){
        if(line.y < colMinY - 15){
          topSpanning.push(line);
        } else if(line.y > colMaxY + 15){
          bottomSpanning.push(line);
        } else {
          var leftRuns = line.runs.filter(function(r){ return (r.x + (r.width || 0)) <= midRight; });
          var rightRuns = line.runs.filter(function(r){ return r.x >= midLeft; });

          if(leftRuns.length > 0 && rightRuns.length > 0 && (rightRuns[0].x - (leftRuns[leftRuns.length - 1].x + (leftRuns[leftRuns.length - 1].width || 0)) >= 25)){
            allCol1.push({ runs: leftRuns, y: line.y, height: line.height });
            allCol2.push({ runs: rightRuns, y: line.y, height: line.height });
          } else if(line.maxX <= midRight){
            allCol1.push(line);
          } else if(line.minX >= midLeft){
            allCol2.push(line);
          } else {
            topSpanning.push(line);
          }
        }
      });

      var subBlocks = [];
      if(topSpanning.length > 0) subBlocks.push({ type: 'flow', lines: topSpanning });
      if(allCol1.length > 0) subBlocks.push({ type: 'column', lines: allCol1, colIndex: 1 });
      if(allCol2.length > 0) subBlocks.push({ type: 'column', lines: allCol2, colIndex: 2 });
      if(bottomSpanning.length > 0) subBlocks.push({ type: 'flow', lines: bottomSpanning });
      return subBlocks;
    }

    function linesToParagraphs(lines){
      if(!lines||lines.length===0)return[];
      var avgH = lines.reduce(function(s, l){ return s + l.height; }, 0) / lines.length;

      var spacings = [];
      for(var sIdx=1; sIdx<lines.length; sIdx++){
        var sg = lines[sIdx].y - lines[sIdx - 1].y;
        if(sg > 0 && sg <= avgH * 1.8) spacings.push(sg);
      }
      var normalSpacing = spacings.length > 0 ? (spacings.reduce(function(a, b){ return a + b; }, 0) / spacings.length) : (avgH * 1.3);
      var pt = Math.max(normalSpacing * 1.4, avgH * 1.6);

      function lineIsHeading(ln){
        var txt = ln.runs.map(function(r){ return r.str; }).join(' ').trim();
        var wc = txt.split(/\s+/).length;
        var isShort = txt.length < 90 && wc <= 12;
        var hasPeriod = /[.?!]$/.test(txt);
        var isAllCaps = txt.length > 3 && txt === txt.toUpperCase() && /[A-Za-z]/.test(txt);
        var isNumbered = /^(\d+[\.\)]|\b(Section|Chapter|Part|Article)\b)/i.test(txt);
        var anyBold = ln.runs.some(function(r){ return r.bold; });
        return isShort && !hasPeriod && (isAllCaps || isNumbered || (anyBold && wc <= 8));
      }

      var paragraphs = [];
      var curPLines = [lines[0]];

      for(var i=1; i<lines.length; i++){
        var gap = lines[i].y - lines[i - 1].y;
        var prevIsH = lineIsHeading(lines[i - 1]);
        var curIsH = lineIsHeading(lines[i]);

        if(gap >= pt || prevIsH || curIsH){
          paragraphs.push(curPLines);
          curPLines = [lines[i]];
        } else {
          curPLines.push(lines[i]);
        }
      }
      if(curPLines.length > 0) paragraphs.push(curPLines);

      return paragraphs.map(function(pLines){
        var allRuns = [];
        pLines.forEach(function(l){
          l.runs.forEach(function(r){ allRuns.push(r); });
        });

        var fullText = pLines.map(function(l){
          return l.runs.map(function(r){ return r.str; }).join(' ');
        }).join(' ').replace(/\s+/g, ' ').trim();

        var isArabic = isArabicText(fullText);
        var maxH = pLines.reduce(function(s, l){ return Math.max(s, l.height); }, 0);
        var wc = fullText.split(/\s+/).length;
        var isShort = fullText.length < 90 && wc <= 12;
        var hasPeriod = /[.?!]$/.test(fullText);
        var isAllCaps = fullText.length > 3 && fullText === fullText.toUpperCase() && /[A-Za-z]/.test(fullText);
        var isNumbered = /^(\d+[\.\)]|\b(Section|Chapter|Part|Article)\b)/i.test(fullText);
        var anyBold = allRuns.some(function(r){ return r.bold; });
        var isHeading = isShort && !hasPeriod && (isAllCaps || isNumbered || maxH > avgH * 1.15 || (anyBold && wc <= 8));

        var coalescedRuns = [];
        var curRun = null;
        allRuns.forEach(function(r){
          var s = r.str;
          if(!s) return;
          if(!curRun){
            curRun = { text: s, bold: !!r.bold, italic: !!r.italic, height: r.height, isArabic: isArabicText(s) };
          } else if(curRun.bold === !!r.bold && curRun.italic === !!r.italic && Math.abs(curRun.height - r.height) < 2){
            curRun.text += ' ' + s;
          } else {
            coalescedRuns.push(curRun);
            curRun = { text: s, bold: !!r.bold, italic: !!r.italic, height: r.height, isArabic: isArabicText(s) };
          }
        });
        if(curRun) coalescedRuns.push(curRun);

        return {
          text: fullText,
          runs: coalescedRuns,
          isHeading: isHeading,
          isArabic: isArabic,
          maxHeight: maxH
        };
      });
    }

    function processPageLayout(rawItems, fontMap, viewportWidth, viewportHeight){
      var runs = rawItems.filter(function(r){ return (r.str || '').trim().length > 0; }).map(function(it){
        var fn = it.fontName || '';
        var fInfo = fontMap[fn] || { name: fn, bold: /bold|black/i.test(fn), italic: /italic|oblique/i.test(fn) };
        var h = it.height || (it.transform ? Math.abs(it.transform[0] || it.transform[3] || 12) : 12);
        var w = it.width || (it.str ? it.str.length * (h * 0.5) : 10);
        return {
          str: it.str || '',
          x: it.transform ? Math.round(it.transform[4]) : 0,
          y: viewportHeight - (it.transform ? it.transform[5] : 0),
          width: w,
          height: h,
          bold: fInfo.bold,
          italic: fInfo.italic,
          fontName: fInfo.name
        };
      });

      if(runs.length === 0) return [];

      var lines = groupRunsIntoLines(runs);
      var tableAndTextBlocks = extractTablesAndText(lines, viewportWidth);

      var finalElements = [];
      tableAndTextBlocks.forEach(function(block){
        if(block.type === 'table'){
          finalElements.push(block);
        } else {
          var colSubBlocks = segmentColumnsInTextBlock(block.lines, viewportWidth);
          colSubBlocks.forEach(function(csb){
            var paras = linesToParagraphs(csb.lines);
            paras.forEach(function(p){ finalElements.push({ type: 'paragraph', data: p }); });
          });
        }
      });

      return finalElements;
    }

    // Expose layout functions for QA/testing
    window.processPageLayout = processPageLayout;
    window.groupRunsIntoLines = groupRunsIntoLines;
    window.extractTablesAndText = extractTablesAndText;
    window.segmentColumnsInTextBlock = segmentColumnsInTextBlock;
    window.linesToParagraphs = linesToParagraphs;
    window.resolveFontStyles = resolveFontStyles;

    btnConvert.addEventListener('click',function(){
      if(!currentFile||!pdfDoc){showToast(dict().toastNoFile);return;}
      if(!window.docx){showToast(dict().toastLibErr);return;}

      if(isScannedPdf){
        showToast(dict().scannedHaltMsg || "This PDF appears to be a scanned image with no extractable text. Automatic conversion isn't possible — OCR support may be added in a future update.", 6000);
        return;
      }

      btnConvert.disabled=true;
      progressContainer.style.display='flex';
      successCard.style.display='none';
      var D=docx;
      var docChildren=[];
      var pageCount=pdfDoc.numPages;
      totalWordCount=0;totalParaCount=0;
      var totalExtractedChars=0;

      var pagePromise=Promise.resolve();
      for(var pn=1;pn<=pageCount;pn++){
        (function(pageNum){
          pagePromise=pagePromise.then(function(){
            var pct=Math.round(5+((pageNum-1)/pageCount)*80);
            updateProgress(pct,dict().procPage(pageNum,pageCount));
            return pdfDoc.getPage(pageNum);
          }).then(function(page){
            var vp=page.getViewport({scale:1});
            return Promise.all([page.getOperatorList(), page.getTextContent()]).then(function(results){
              var opList=results[0];
              var tc=results[1];
              var fontMap=resolveFontStyles(tc, page);
              var pageChars=tc.items.reduce(function(acc,it){return acc+(it.str||'').trim().length;},0);
              totalExtractedChars+=pageChars;

              var elements=processPageLayout(tc.items, fontMap, vp.width, vp.height);
              if(elements.length===0){
                docChildren.push(new D.Paragraph({children:[new D.TextRun({text:'',size:22})],spacing:{after:200}}));
              }else{
                elements.forEach(function(el){
                  if(el.type==='table'){
                    var nc=el.cols.length;
                    var trows=el.rows.map(function(rowCells,ri){
                      return new D.TableRow({
                        children:rowCells.map(function(cell){
                          var isAr=isArabicText(cell.text);
                          var cellRuns=cell.runs.length>0?cell.runs.map(function(r){
                            return new D.TextRun({
                              text:r.str||r.text||' ',
                              bold:ri===0||r.bold,
                              italics:r.italic,
                              size:20,
                              rightToLeft:isAr
                            });
                          }):[new D.TextRun({text:cell.text||' ',bold:ri===0,size:20,rightToLeft:isAr})];

                          return new D.TableCell({
                            children:[new D.Paragraph({
                              children:cellRuns,
                              bidirectional:isAr,
                              alignment:isAr?D.AlignmentType.RIGHT:undefined,
                              spacing:{after:60,before:60}
                            })],
                            width:{size:Math.floor(9000/nc),type:D.WidthType.DXA}
                          });
                        })
                      });
                    });
                    docChildren.push(new D.Table({rows:trows,width:{size:9000,type:D.WidthType.DXA}}));
                    docChildren.push(new D.Paragraph({children:[],spacing:{after:120}}));
                    var words=el.rows.map(function(r){return r.map(function(c){return c.text;}).join(' ');}).join(' ').split(/\s+/).filter(Boolean).length;
                    totalWordCount+=words;totalParaCount+=el.rows.length;
                  }else if(el.type==='paragraph'){
                    var p=el.data;
                    var tr=(p.text||'').trim();
                    if(!tr)return;
                    var wc=tr.split(/\s+/).length;
                    totalWordCount+=wc;totalParaCount+=1;
                    var isH=p.isHeading;
                    var isAr=p.isArabic;

                    var runs=p.runs.map(function(r){
                      return new D.TextRun({
                        text:r.text,
                        bold:isH||r.bold,
                        italics:r.italic,
                        size:isH?26:Math.round(r.height*2),
                        rightToLeft:r.isArabic
                      });
                    });

                    docChildren.push(new D.Paragraph({
                      children:runs,
                      heading:isH?D.HeadingLevel.HEADING_2:undefined,
                      bidirectional:isAr,
                      alignment:isAr?D.AlignmentType.RIGHT:undefined,
                      spacing:{after:isH?160:120,before:isH?200:0}
                    }));
                  }
                });
              }
              if(pageNum<pageCount)docChildren.push(new D.Paragraph({children:[new D.PageBreak()]}));
            });
          });
        })(pn);
      }

      pagePromise.then(function(){
        if(totalExtractedChars<30*pageCount){
          showToast(dict().scannedHaltMsg || "This PDF appears to be a scanned image with no extractable text. Automatic conversion isn't possible — OCR support may be added in a future update.", 6000);
          btnConvert.disabled=false;
          progressContainer.style.display='none';
          return;
        }

        updateProgress(90,dict().buildingDoc);
        var doc=new D.Document({
          creator:'VantorKit PDF to Word',
          title:currentFile.name.replace(/\.pdf$/i,''),
          sections:[{children:docChildren}]
        });
        updateProgress(95,dict().buildingDoc);
        if(D.Packer&&D.Packer.toBlob){
          return D.Packer.toBlob(doc).catch(function(){
            return D.Packer.toBase64String(doc).then(function(b64){
              var byteChars=atob(b64);
              var byteNumbers=new Array(byteChars.length);
              for(var i=0;i<byteChars.length;i++)byteNumbers[i]=byteChars.charCodeAt(i);
              return new Blob([new Uint8Array(byteNumbers)],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
            });
          });
        }else{
          return D.Packer.toBase64String(doc).then(function(b64){
            var byteChars=atob(b64);
            var byteNumbers=new Array(byteChars.length);
            for(var i=0;i<byteChars.length;i++)byteNumbers[i]=byteChars.charCodeAt(i);
            return new Blob([new Uint8Array(byteNumbers)],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
          });
        }
      }).then(function(blob){
        if(!blob)return;
        docxBytes=blob;
        if(docxBlobUrl)URL.revokeObjectURL(docxBlobUrl);
        docxBlobUrl=URL.createObjectURL(blob);
        updateProgress(100,dict().done);
        statPages.textContent=pageCount;
        statWords.textContent=totalWordCount.toLocaleString();
        statParagraphs.textContent=totalParaCount.toLocaleString();
        statDocxSize.textContent=formatBytes(blob.size);
        successCard.style.display='block';
        successCard.scrollIntoView({behavior:'smooth',block:'nearest'});
        triggerDownload(docxBlobUrl,currentFile.name.replace(/\.pdf$/i,'.docx'));
        showToast(dict().toastConverted,3500);
      }).catch(function(err){
        console.error(err);showToast('\u274c Conversion failed: '+(err.message||'Unknown error'));
      }).finally(function(){
        btnConvert.disabled=false;
        setTimeout(function(){progressContainer.style.display='none';progressBar.style.width='0%';},900);
      });
    });

    function triggerDownload(url,filename){var a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();document.body.removeChild(a);}

    btnDownload.addEventListener('click',function(){
      if(docxBlobUrl&&currentFile){triggerDownload(docxBlobUrl,currentFile.name.replace('.pdf','.docx'));showToast(dict().toastDownload);}
    });

    function resetState(){
      currentFile=null;pdfDoc=null;isScannedPdf=false;
      if(docxBlobUrl){URL.revokeObjectURL(docxBlobUrl);docxBlobUrl=null;}
      docxBytes=null;totalWordCount=0;totalParaCount=0;
      fileCard.classList.remove('visible');scannedWarning.classList.remove('visible');
      previewSection.classList.remove('visible');convertCard.classList.remove('visible');
      successCard.style.display='none';progressContainer.style.display='none';
      progressBar.style.width='0%';fileMetaRow.innerHTML='';btnConvert.disabled=false;
      var ctx=previewCanvas.getContext('2d');ctx.clearRect(0,0,previewCanvas.width,previewCanvas.height);
    }

    btnClear.addEventListener('click',function(){resetState();showToast(dict().toastCleared);});
    btnConvertAnother.addEventListener('click',function(){resetState();showToast(dict().toastCleared);});

    var savedLang=localStorage.getItem('vantorkit_lang')||'en';
    setLanguage(savedLang);
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
        "title": "PDF to Word Converter – Export Editable DOCX Files",
        "desc": "Extract text, headings, and formatting from PDF files into clean Word documents. File conversion completes inside your browser with zero document uploads."
    },
    "ar": {
        "title": "تحويل PDF إلى Word – تصدير مستندات DOCX قابلة للتعديل",
        "desc": "استخرج النصوص والعناوين والتنسيقات من ملفات PDF إلى مستندات Word جاهزة للتحرير. تتم المعالجة بالكامل داخل المتصفح دون إرسال المستند للخارج."
    },
    "fr": {
        "title": "Convertisseur PDF en Word – Exporter en DOCX Modifiable",
        "desc": "Convertissez vos PDF en documents Word éditables en préservant le texte et la structure. Traitement 100% navigateur sans téléversement de fichier."
    },
    "it": {
        "title": "Convertitore PDF in Word – Esporta File DOCX Modificabili",
        "desc": "Trasforma documenti PDF in file Word modificabili preservando paragrafi e testo. La conversione avviene nel tuo browser senza caricamenti esterni."
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