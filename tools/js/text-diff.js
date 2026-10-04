(function() {
    'use strict';

    // Sample Data for Demonstration
    const SAMPLE_ORIGINAL = `VantorKit Utilities Release Notes v1.2
Date: September 2026

Features included in this build:
- Fast client-side PDF manipulation tools (merge and split)
- SVG to PNG converter with transparent background support
- Color palette extractor with HEX and RGB codes
- Basic word counter with character estimation

Security and Compliance:
All processing runs locally in the client browser with no external server requests.
Telemetry is disabled by default to protect user privacy.`;

    const SAMPLE_MODIFIED = `VantorKit Utilities Release Notes v2.0
Date: October 2026

Features included in this build:
- Fast client-side PDF manipulation tools (merge, split, and PDF to Word converter)
- High-fidelity SVG to PNG vector rasterizer
- Advanced color palette extractor with HEX, HSL, and RGB codes
- Real-time Word & Character Counter with keyword density analysis
- Password Generator & Entropy strength meter
- Live Markdown Editor with split-screen preview

Security and Compliance:
All processing runs 100% locally in the client browser with zero server requests or logs.
Zero-cloud telemetry guarantees complete privacy for all proprietary files.`;

    // Internationalization dictionary
    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Text Tools \u2022 100% Client-Side \u2022 Visual Diff Checker',
        pageSubtitle: 'Compare two texts or code snippets side-by-side or inline. Inspect additions in vibrant green, deletions in soft red, and analyze similarity with zero cloud telemetry.',
        lblGranularity: 'Granularity:',
        granLine: 'Line',
        granWord: 'Word',
        granChar: 'Character',
        lblViewMode: 'View:',
        viewSplit: 'Side-by-Side',
        viewUnified: 'Unified',
        optIgnoreWhitespace: 'Ignore Whitespace',
        optCaseSensitive: 'Case Sensitive',
        btnSample: 'Sample',
        btnSwap: 'Swap',
        btnClear: 'Clear',
        paneOriginal: 'Original Text',
        tagOriginal: 'Old / Before',
        paneModified: 'Modified / New Text',
        tagModified: 'New / After',
        lblAdditions: 'additions',
        lblDeletions: 'deletions',
        lblUnchanged: 'unchanged',
        lblSimilarity: 'Similarity:',
        btnCopyDiff: 'Copy Diff',
        btnCopied: 'Copied!',
        btnExportHtml: 'Export HTML',
        emptyTitle: 'No differences to show',
        emptyDesc: 'Type or paste text in both panes, or click \'Sample\' above to inspect visual differences.',
        guideHeading: 'Understanding Text Diff & Comparison Algorithms',
        guideSub: 'How modern diff engines calculate line, word, and character differences efficiently.',
        guide1Title: '1. The LCS & Myers Algorithm',
        guide1Desc: 'The Longest Common Subsequence (LCS) algorithm finds the longest sequence of words or characters that appear in both versions in identical relative order, calculating the minimal set of additions and deletions needed to transform one text into another.',
        guide2Title: '2. Choosing the Right Granularity',
        guide2Desc: 'Line-by-line diff is optimal for source code and structured data where line breaks are meaningful. Word-by-word diff is essential for proofreading legal contracts and essays. Character-by-character reveals subtle typos and minor punctuation changes.',
        guide3Title: '3. Confidential & Zero-Upload',
        guide3Desc: 'Unlike online diff services that transmit your data to remote cloud servers, VantorKit processes all diff computations locally inside your web browser. Proprietary code, NDA agreements, and private communications never leave your machine.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Does this tool upload my text or files to any server?',
        faq1A: 'No. All diff comparisons and calculations are executed 100% locally in your browser using client-side JavaScript. No logs or network requests are created.',
        faq2Q: 'What is the difference between Side-by-Side and Unified views?',
        faq2A: 'Side-by-Side view displays the original text on the left and the modified text on the right. Unified view combines both into a single chronological stream with \'-\' and \'+\' indicators.',
        faq3Q: 'How is the similarity percentage score calculated?',
        faq3A: 'Similarity is computed based on the ratio of unchanged common characters against the total combined length of both texts.',
        faq4Q: 'Can I export the diff result to share with colleagues?',
        faq4A: 'Yes! You can copy the unified diff text directly to your clipboard or click \'Export HTML\' to download a self-contained, standalone visual diff report.',
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastSwapped: '\u21c4 Texts swapped successfully!',
        toastCleared: '\ud83d\uddd1\ufe0f All texts cleared.',
        toastSample: '\ud83d\udcd6 Sample difference loaded.',
        toastCopied: '\u2705 Diff result copied to clipboard!',
        toastExported: '\ud83d\udce5 Downloading diff-report.html...'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2192 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0646\u0635\u0648\u0635 \u2022 100% \u0645\u062d\u0644\u064a\u0627\u064b \u2022 \u0641\u0627\u062d\u0635 \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062a \u0627\u0644\u0628\u0635\u0631\u064a',
        pageSubtitle: '\u0642\u0627\u0631\u0646 \u0628\u064a\u0646 \u0646\u0635\u064a\u0646 \u0623\u0648 \u0643\u0648\u062f\u064a\u0646 \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628 \u0623\u0648 \u0628\u0634\u0643\u0644 \u0645\u062f\u0645\u062c. \u062a\u0645\u064a\u064a\u0632 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a \u0628\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u062e\u0636\u0631 \u0648\u0627\u0644\u062d\u0630\u0641 \u0628\u0627\u0644\u0623\u062d\u0645\u0631 \u062f\u0648\u0646 \u0623\u064a \u062a\u0633\u062c\u064a\u0644 \u0633\u062d\u0627\u0628\u064a.',
        lblGranularity: '\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062a\u062f\u0642\u064a\u0642:',
        granLine: '\u0633\u0637\u0631',
        granWord: '\u0643\u0644\u0645\u0629',
        granChar: '\u062d\u0631\u0641',
        lblViewMode: '\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0639\u0631\u0636:',
        viewSplit: '\u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628',
        viewUnified: '\u0645\u062f\u0645\u062c',
        optIgnoreWhitespace: '\u062a\u062c\u0627\u0647\u0644 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a',
        optCaseSensitive: '\u0645\u0637\u0627\u0628\u0642\u0629 \u062d\u0627\u0644\u0629 \u0627\u0644\u0623\u062d\u0631\u0641',
        btnSample: '\u0646\u0645\u0648\u0630\u062c',
        btnSwap: '\u062a\u0628\u062f\u064a\u0644',
        btnClear: '\u0645\u0633\u062d',
        paneOriginal: '\u0627\u0644\u0646\u0635 \u0627\u0644\u0623\u0635\u0644\u064a',
        tagOriginal: '\u0627\u0644\u0633\u0627\u0628\u0642 / \u0642\u0628\u0644',
        paneModified: '\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0639\u062f\u0644',
        tagModified: '\u0627\u0644\u062c\u062f\u064a\u062f / \u0628\u0639\u062f',
        lblAdditions: '\u0625\u0636\u0627\u0641\u0627\u062a',
        lblDeletions: '\u062d\u0630\u0641',
        lblUnchanged: '\u0645\u062a\u0637\u0627\u0628\u0642',
        lblSimilarity: '\u0646\u0633\u0628\u0629 \u0627\u0644\u062a\u0637\u0627\u0628\u0642:',
        btnCopyDiff: '\u0646\u0633\u062e \u0627\u0644\u0641\u0631\u0648\u0642',
        btnCopied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!',
        btnExportHtml: '\u062a\u0635\u062f\u064a\u0631 HTML',
        emptyTitle: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0631\u0648\u0642\u0627\u062a \u062d\u0627\u0644\u064a\u0627\u064b',
        emptyDesc: '\u0627\u0643\u062a\u0628 \u0623\u0648 \u0627\u0644\u0635\u0642 \u0646\u0635\u064a\u0646 \u0641\u064a \u0627\u0644\u062d\u0642\u0644\u064a\u0646\u060c \u0623\u0648 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \'\u0646\u0645\u0648\u0630\u062c\' \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629.',
        guideHeading: '\u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a \u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0646\u0635\u0648\u0635 Diff',
        guideSub: '\u0643\u064a\u0641 \u062a\u062d\u0633\u0628 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062a \u0639\u0644\u0649 \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0633\u0637\u0631 \u0648\u0627\u0644\u0643\u0644\u0645\u0629 \u0648\u0627\u0644\u062d\u0631\u0641.',
        guide1Title: '1. \u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0629 LCS \u0648Myers',
        guide1Desc: '\u062a\u0639\u062a\u0645\u062f \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0639\u0644\u0649 \u0625\u064a\u062c\u0627\u062f \u0623\u0637\u0648\u0644 \u062a\u0633\u0644\u0633\u0644 \u0645\u0634\u062a\u0631\u0643 (LCS) \u0644\u062d\u0633\u0627\u0628 \u0623\u0642\u0644 \u0639\u062f\u062f \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0627\u0644\u0644\u0627\u0632\u0645\u0629.',
        guide2Title: '2. \u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u062a\u062f\u0642\u064a\u0642',
        guide2Desc: '\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0623\u0633\u0637\u0631 \u0645\u062b\u0627\u0644\u064a\u0629 \u0644\u0644\u0623\u0643\u0648\u0627\u062f \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629\u060c \u0628\u064a\u0646\u0645\u0627 \u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0623\u0646\u0633\u0628 \u0644\u0644\u0639\u0642\u0648\u062f \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a\u060c \u0648\u0627\u0644\u0623\u062d\u0631\u0641 \u0644\u0643\u0634\u0641 \u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0625\u0645\u0644\u0627\u0626\u064a\u0629.',
        guide3Title: '3. \u062e\u0635\u0648\u0635\u064a\u0629 \u0645\u062d\u0644\u064a\u0629 100%',
        guide3Desc: '\u062a\u062a\u0645 \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u062d\u0635\u0631\u0627\u064b \u062f\u0648\u0646 \u0631\u0641\u0639 \u0623\u064a \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0644\u0649 \u062e\u0648\u0627\u062f\u0645 \u062e\u0627\u0631\u062c\u064a\u0629.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0647\u0644 \u064a\u062a\u0645 \u062d\u0641\u0638 \u0646\u0635\u0648\u0635\u064a \u0639\u0644\u0649 \u062e\u0627\u062f\u0645\u061f',
        faq1A: '\u0644\u0627. \u062a\u062c\u0631\u064a \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0646\u0635\u0648\u0635 \u0641\u0642\u0637 \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u062f\u0648\u0646 \u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a.',
        faq2Q: '\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0627\u0644\u0639\u0631\u0636 \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628 \u0648\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062f\u0645\u062c\u061f',
        faq2A: '\u0627\u0644\u0639\u0631\u0636 \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628 \u064a\u0636\u0639 \u0627\u0644\u0646\u0633\u062e\u062a\u064a\u0646 \u0641\u064a \u0639\u0645\u0648\u062f\u064a\u0646 \u0645\u062a\u062c\u0627\u0648\u0631\u064a\u0646\u060c \u0628\u064a\u0646\u0645\u0627 \u0627\u0644\u0645\u062f\u0645\u062c \u064a\u0638\u0647\u0631 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0641\u064a \u062a\u062f\u0641\u0642 \u0648\u0627\u062d\u062f.',
        faq3Q: '\u0643\u064a\u0641 \u062a\u062d\u0633\u0628 \u0646\u0633\u0628\u0629 \u0627\u0644\u062a\u0637\u0627\u0628\u0642\u061f',
        faq3A: '\u062a\u062d\u0633\u0628 \u0627\u0644\u0646\u0633\u0628\u0629 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0639\u062f\u062f \u0627\u0644\u0623\u062d\u0631\u0641 \u0627\u0644\u0645\u062a\u0637\u0627\u0628\u0642\u0629 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0625\u062c\u0645\u0627\u0644\u064a \u0637\u0648\u0644 \u0627\u0644\u0646\u0635\u064a\u0646.',
        faq4Q: '\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u062a\u0635\u062f\u064a\u0631 \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062a\u061f',
        faq4A: '\u0646\u0639\u0645\u060c \u064a\u0645\u0643\u0646\u0643 \u0646\u0633\u062e \u0643\u0648\u062f diff \u0623\u0648 \u062a\u0646\u0632\u064a\u0644 \u062a\u0642\u0631\u064a\u0631 HTML \u0645\u0646\u0633\u0642 \u0648\u0643\u0627\u0645\u0644.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629.',
        toastSwapped: '\u21c4 \u062a\u0645 \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0646\u0635\u064a\u0646 \u0628\u0646\u062c\u0627\u062d!',
        toastCleared: '\ud83d\uddd1\ufe0f \u062a\u0645 \u0645\u0633\u062d \u062c\u0645\u064a\u0639 \u0627\u0644\u0646\u0635\u0648\u0635.',
        toastSample: '\ud83d\udcd6 \u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062a.',
        toastCopied: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062a!',
        toastExported: '\ud83d\udce5 \u062c\u0627\u0631\u064d \u062a\u0646\u0632\u064a\u0644 \u062a\u0642\u0631\u064a\u0631 diff-report.html...'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux outils',
        brandBadge: 'Outils Texte \u2022 100% C\u00f4t\u00e9 Client \u2022 V\u00e9rificateur de Diff\u00e9rences',
        pageSubtitle: 'Comparez deux textes ou codes c\u00f4te \u00e0 c\u00f4te ou en continu. Visualisez les ajouts en vert \u00e9clatant et les suppressions en rouge sans aucune t\u00e9l\u00e9m\u00e9trie.',
        lblGranularity: 'Granularit\u00e9 :',
        granLine: 'Ligne',
        granWord: 'Mot',
        granChar: 'Caract\u00e8re',
        lblViewMode: 'Affichage :',
        viewSplit: 'C\u00f4te \u00e0 C\u00f4te',
        viewUnified: 'Unifi\u00e9',
        optIgnoreWhitespace: 'Ignorer les espaces',
        optCaseSensitive: 'Sensible \u00e0 la casse',
        btnSample: 'Exemple',
        btnSwap: 'Inverser',
        btnClear: 'Effacer',
        paneOriginal: 'Texte Original',
        tagOriginal: 'Ancien / Avant',
        paneModified: 'Texte Modifi\u00e9 / Nouveau',
        tagModified: 'Nouveau / Apr\u00e8s',
        lblAdditions: 'ajouts',
        lblDeletions: 'suppressions',
        lblUnchanged: 'inchang\u00e9s',
        lblSimilarity: 'Similarit\u00e9 :',
        btnCopyDiff: 'Copier Diff',
        btnCopied: 'Copi\u00e9 !',
        btnExportHtml: 'Exporter HTML',
        emptyTitle: 'Aucune diff\u00e9rence \u00e0 afficher',
        emptyDesc: 'Saisissez ou collez des textes dans les deux zones ou cliquez sur \'Exemple\' pour observer les r\u00e9sultats.',
        guideHeading: 'Comprendre les Algorithmes de Comparaison de Texte (Diff)',
        guideSub: 'Comment les moteurs modernes calculent efficacement les diff\u00e9rences de lignes, mots et caract\u00e8res.',
        guide1Title: '1. L\'Algorithme LCS & Myers',
        guide1Desc: 'L\'algorithme de la plus longue sous-s\u00e9quence commune d\u00e9termine la suite ordonn\u00e9e d\'\u00e9l\u00e9ments communs pour calculer le nombre minimal d\'ajouts et de suppressions n\u00e9cessaires.',
        guide2Title: '2. Choix de la Granularit\u00e9',
        guide2Desc: 'Ligne par ligne est id\u00e9al pour le code source. Mot par mot convient parfaitement aux contrats et textes r\u00e9dig\u00e9s. Caract\u00e8re par caract\u00e8re d\u00e9tecte les coquilles subtiles.',
        guide3Title: '3. Confidentialit\u00e9 100% Locale',
        guide3Desc: 'Vos codes sources et documents sensibles ne sont jamais transf\u00e9r\u00e9s sur un serveur. Tout s\'ex\u00e9cute dans votre navigateur.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Mes textes sont-ils envoy\u00e9s \u00e0 un serveur ?',
        faq1A: 'Non. Tous les calculs s\'ex\u00e9cutent localement dans votre navigateur en JavaScript.',
        faq2Q: 'Quelle diff\u00e9rence entre C\u00f4te \u00e0 C\u00f4te et Unifi\u00e9 ?',
        faq2A: 'C\u00f4te \u00e0 C\u00f4te affiche l\'original \u00e0 gauche et la r\u00e9vision \u00e0 droite. Unifi\u00e9 fusionne les changements dans un seul flux chronologique.',
        faq3Q: 'Comment est calcul\u00e9 le score de similarit\u00e9 ?',
        faq3A: 'Le score \u00e9value le ratio de caract\u00e8res communs conserv\u00e9s par rapport \u00e0 la longueur cumul\u00e9e des deux textes.',
        faq4Q: 'Puis-je exporter le r\u00e9sultat ?',
        faq4A: 'Oui, vous pouvez copier le diff au format texte ou t\u00e9l\u00e9charger un rapport HTML complet et stylis\u00e9.',
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastSwapped: '\u21c4 Textes invers\u00e9s !',
        toastCleared: '\ud83d\uddd1\ufe0f Textes effac\u00e9s.',
        toastSample: '\ud83d\udcd6 Exemple de comparaison charg\u00e9.',
        toastCopied: '\u2705 R\u00e9sultat diff copi\u00e9 !',
        toastExported: '\ud83d\udce5 T\u00e9l\u00e9chargement de diff-report.html...'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli strumenti',
        brandBadge: 'Strumenti Testo \u2022 100% Lato Client \u2022 Controllo Differenze',
        pageSubtitle: 'Confronta due testi o frammenti di codice affiancati o in linea. Visualizza aggiunte in verde, rimozioni in rosso e calcola la similarit\u00e0 senza telemetria.',
        lblGranularity: 'Granularit\u00e0:',
        granLine: 'Riga',
        granWord: 'Parola',
        granChar: 'Carattere',
        lblViewMode: 'Vista:',
        viewSplit: 'Affiancato',
        viewUnified: 'Unificato',
        optIgnoreWhitespace: 'Ignora spazi',
        optCaseSensitive: 'Sensibile maiuscole/minuscole',
        btnSample: 'Esempio',
        btnSwap: 'Inverti',
        btnClear: 'Cancella',
        paneOriginal: 'Testo Originale',
        tagOriginal: 'Precedente / Prima',
        paneModified: 'Testo Modificato',
        tagModified: 'Nuovo / Dopo',
        lblAdditions: 'aggiunte',
        lblDeletions: 'rimozioni',
        lblUnchanged: 'invariati',
        lblSimilarity: 'Similarit\u00e0:',
        btnCopyDiff: 'Copia Diff',
        btnCopied: 'Copiato!',
        btnExportHtml: 'Esporta HTML',
        emptyTitle: 'Nessuna differenza da mostrare',
        emptyDesc: 'Digita o incolla testi in entrambi i campi, oppure clicca \'Esempio\' per visualizzare il confronto.',
        guideHeading: 'Comprendere gli Algoritmi di Confronto Testi (Diff)',
        guideSub: 'Come i motori di diff calcolano differenze a livello di riga, parola e carattere.',
        guide1Title: '1. Algoritmo LCS & Myers',
        guide1Desc: 'L\'algoritmo della sottosequenza comune pi\u00f9 lunga identifica i segmenti condivisi minimizzando le modifiche per trasformare un testo nell\'altro.',
        guide2Title: '2. Scelta della Granularit\u00e0',
        guide2Desc: 'Riga per riga \u00e8 perfetto per il codice. Parola per parola \u00e8 ottimale per saggi e contratti legali. Carattere per carattere rileva refusi minimi.',
        guide3Title: '3. Privacy Assoluta Lato Client',
        guide3Desc: 'Nessun testo esce dal tuo browser. Tutte le computazioni avvengono localmente garantendo riservatezza assoluta.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'I miei testi vengono inviati a un server?',
        faq1A: 'No. Tutti i confronti vengono eseguiti al 100% in locale nel browser.',
        faq2Q: 'Che differenza c\'\u00e8 tra Affiancato e Unificato?',
        faq2A: 'Affiancato mostra l\'originale a sinistra e la versione modificata a destra. Unificato combina le variazioni in un unico flusso continuo.',
        faq3Q: 'Come viene calcolata la similarit\u00e0?',
        faq3A: 'La percentuale \u00e8 determinata dal rapporto tra caratteri rimasti invariati e dimensione complessiva dei testi.',
        faq4Q: 'Posso esportare il report?',
        faq4A: 'Certamente! Puoi copiare il diff testuale o scaricare un report HTML autonomo.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastSwapped: '\u21c4 Testi invertiti con successo!',
        toastCleared: '\ud83d\uddd1\ufe0f Testi cancellati.',
        toastSample: '\ud83d\udcd6 Esempio di confronto caricato.',
        toastCopied: '\u2705 Risultato diff copiato!',
        toastExported: '\ud83d\udce5 Download di diff-report.html in corso...'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const origTextarea = document.getElementById('origTextarea');
    const modTextarea = document.getElementById('modTextarea');
    const origLineCount = document.getElementById('origLineCount');
    const origWordCount = document.getElementById('origWordCount');
    const modLineCount = document.getElementById('modLineCount');
    const modWordCount = document.getElementById('modWordCount');

    const granularityControl = document.getElementById('granularityControl');
    const viewModeControl = document.getElementById('viewModeControl');
    const chkIgnoreWhitespace = document.getElementById('chkIgnoreWhitespace');
    const chkCaseSensitive = document.getElementById('chkCaseSensitive');

    const btnLoadSample = document.getElementById('btnLoadSample');
    const btnSwap = document.getElementById('btnSwap');
    const btnClearAll = document.getElementById('btnClearAll');

    const statAdditions = document.getElementById('statAdditions');
    const statDeletions = document.getElementById('statDeletions');
    const statUnchanged = document.getElementById('statUnchanged');
    const statSimilarity = document.getElementById('statSimilarity');
    const similarityFill = document.getElementById('similarityFill');

    const btnCopyDiff = document.getElementById('btnCopyDiff');
    const copyDiffLabel = document.getElementById('copyDiffLabel');
    const btnExportHtml = document.getElementById('btnExportHtml');

    const diffViewer = document.getElementById('diffViewer');
    const diffEmptyState = document.getElementById('diffEmptyState');
    const diffOutputContainer = document.getElementById('diffOutputContainer');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    let currentLang = 'en';
    let currentGranularity = 'line';
    let currentViewMode = 'split';

    function dict() { return I18N[currentLang] || I18N.en; }

    let toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2400;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    // DMP Helper with Fallback
    let dmpInstance = null;
    function getDmp() {
      if (!dmpInstance && typeof diff_match_patch !== 'undefined') {
        dmpInstance = new diff_match_patch();
      }
      return dmpInstance;
    }

    // Robust Core Diff Algorithm (Supports Line, Word, Char)
    function computeDiff(text1, text2, gran, ignoreWs, caseSens) {
      let t1 = text1;
      let t2 = text2;

      if (!caseSens) {
        // We'll normalize for matching or diffing
      }

      if (ignoreWs) {
        t1 = t1.replace(/[ \t]+/g, ' ').replace(/\r\n/g, '\n');
        t2 = t2.replace(/[ \t]+/g, ' ').replace(/\r\n/g, '\n');
      } else {
        t1 = t1.replace(/\r\n/g, '\n');
        t2 = t2.replace(/\r\n/g, '\n');
      }

      const dmp = getDmp();
      if (dmp) {
        if (gran === 'char') {
          const diffs = dmp.diff_main(t1, t2);
          dmp.diff_cleanupSemantic(diffs);
          return diffs;
        } else if (gran === 'word') {
          return computeWordDiff(dmp, t1, t2);
        } else {
          // Line mode
          return computeLineDiff(dmp, t1, t2);
        }
      }

      // Fallback LCS engine if library failed to load
      return fallbackLcsDiff(t1, t2, gran);
    }

    function computeLineDiff(dmp, t1, t2) {
      const a = dmp.diff_linesToChars_(t1, t2);
      const diffs = dmp.diff_main(a.chars1, a.chars2, false);
      dmp.diff_charsToLines_(diffs, a.lineArray);
      dmp.diff_cleanupSemantic(diffs);
      return diffs;
    }

    function computeWordDiff(dmp, t1, t2) {
      const wordList = [''];
      const wordHash = {};

      function wordsToChars(text) {
        let chars = '';
        const words = text.match(/\S+|\s+/g) || [];
        for (let i = 0; i < words.length; i++) {
          const w = words[i];
          if (!Object.prototype.hasOwnProperty.call(wordHash, w)) {
            wordList.push(w);
            wordHash[w] = wordList.length - 1;
          }
          chars += String.fromCharCode(wordHash[w]);
        }
        return chars;
      }

      const chars1 = wordsToChars(t1);
      const chars2 = wordsToChars(t2);
      const diffs = dmp.diff_main(chars1, chars2, false);
      dmp.diff_cleanupSemantic(diffs);

      // Re-map back to original words
      for (let i = 0; i < diffs.length; i++) {
        const textArr = [];
        const chars = diffs[i][1];
        for (let j = 0; j < chars.length; j++) {
          textArr.push(wordList[chars.charCodeAt(j)]);
        }
        diffs[i][1] = textArr.join('');
      }
      return diffs;
    }

    // Built-in LCS Fallback Engine
    function fallbackLcsDiff(t1, t2, gran) {
      let tokens1, tokens2;
      if (gran === 'char') {
        tokens1 = Array.from(t1);
        tokens2 = Array.from(t2);
      } else if (gran === 'word') {
        tokens1 = t1.match(/\S+|\s+/g) || [];
        tokens2 = t2.match(/\S+|\s+/g) || [];
      } else {
        tokens1 = t1.split('\n').map(function(l, i, arr) { return i < arr.length - 1 ? (l + '\n') : l; });
        tokens2 = t2.split('\n').map(function(l, i, arr) { return i < arr.length - 1 ? (l + '\n') : l; });
      }

      const m = tokens1.length;
      const n = tokens2.length;
      const dp = Array.from({ length: m + 1 }, function() { return new Uint16Array(n + 1); });

      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (tokens1[i] === tokens2[j]) {
            dp[i + 1][j + 1] = dp[i][j] + 1;
          } else {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
          }
        }
      }

      // Backtrack
      const diffs = [];
      let i = m, j = n;
      while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && tokens1[i - 1] === tokens2[j - 1]) {
          diffs.unshift([0, tokens1[i - 1]]);
          i--; j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
          diffs.unshift([1, tokens2[j - 1]]);
          j--;
        } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
          diffs.unshift([-1, tokens1[i - 1]]);
          i--;
        }
      }

      // Coalesce same types
      const coalesced = [];
      diffs.forEach(function(item) {
        if (coalesced.length > 0 && coalesced[coalesced.length - 1][0] === item[0]) {
          coalesced[coalesced.length - 1][1] += item[1];
        } else {
          coalesced.push([item[0], item[1]]);
        }
      });
      return coalesced;
    }

    // Render Side-by-Side (Split) View
    function renderSplitView(diffs, gran) {
      // Split into line-based rows for clean side-by-side alignment
      const leftRows = [];
      const rightRows = [];

      let leftLineNum = 1;
      let rightLineNum = 1;

      if (gran === 'line') {
        diffs.forEach(function(d) {
          const type = d[0];
          const lines = d[1].split('\n');
          // If trailing newline, last line is empty
          if (lines[lines.length - 1] === '') lines.pop();

          lines.forEach(function(line) {
            if (type === 0) {
              leftRows.push({ lineNum: leftLineNum++, text: line, type: 'equal' });
              rightRows.push({ lineNum: rightLineNum++, text: line, type: 'equal' });
            } else if (type === -1) {
              leftRows.push({ lineNum: leftLineNum++, text: line, type: 'del' });
            } else if (type === 1) {
              rightRows.push({ lineNum: rightLineNum++, text: line, type: 'add' });
            }
          });
        });
      } else {
        // Word or Char Granularity in Split view:
        // Accumulate original vs modified with inline highlighting
        let leftHtml = '';
        let rightHtml = '';

        diffs.forEach(function(d) {
          const type = d[0];
          const text = d[1];
          const safe = escapeHtml(text);

          if (type === 0) {
            leftHtml += safe;
            rightHtml += safe;
          } else if (type === -1) {
            leftHtml += '<del class="diff-inline-del">' + safe + '</del>';
          } else if (type === 1) {
            rightHtml += '<ins class="diff-inline-add">' + safe + '</ins>';
          }
        });

        const leftLines = leftHtml.split('\n');
        const rightLines = rightHtml.split('\n');

        const maxLines = Math.max(leftLines.length, rightLines.length);
        for (let idx = 0; idx < maxLines; idx++) {
          const lText = idx < leftLines.length ? leftLines[idx] : null;
          const rText = idx < rightLines.length ? rightLines[idx] : null;

          if (lText !== null && rText !== null && lText === rText && !lText.includes('<del') && !rText.includes('<ins')) {
            leftRows.push({ lineNum: leftLineNum++, html: lText, type: 'equal' });
            rightRows.push({ lineNum: rightLineNum++, html: rText, type: 'equal' });
          } else {
            if (lText !== null) {
              const hasDel = lText.includes('<del');
              leftRows.push({ lineNum: leftLineNum++, html: lText, type: hasDel ? 'del' : 'equal' });
            }
            if (rText !== null) {
              const hasAdd = rText.includes('<ins');
              rightRows.push({ lineNum: rightLineNum++, html: rText, type: hasAdd ? 'add' : 'equal' });
            }
          }
        }
      }

      // Build balanced side-by-side table
      const totalLen = Math.max(leftRows.length, rightRows.length);
      let html = '<table class="diff-table">';

      for (let i = 0; i < totalLen; i++) {
        const left = leftRows[i] || null;
        const right = rightRows[i] || null;

        html += '<tr>';

        // Left Column (Original)
        if (left) {
          const cls = left.type === 'del' ? 'line-del' : (left.type === 'equal' ? 'line-equal' : '');
          const prefix = left.type === 'del' ? '-' : ' ';
          const content = left.html !== undefined ? left.html : escapeHtml(left.text);
          html += '<td class="diff-line-num">' + left.lineNum + '</td>' +
                  '<td class="diff-prefix">' + prefix + '</td>' +
                  '<td class="' + cls + '">' + (content || '&nbsp;') + '</td>';
        } else {
          html += '<td class="diff-line-num"></td><td class="diff-prefix"></td><td class="line-empty">&nbsp;</td>';
        }

        // Right Column (Modified)
        if (right) {
          const cls = right.type === 'add' ? 'line-add' : (right.type === 'equal' ? 'line-equal' : '');
          const prefix = right.type === 'add' ? '+' : ' ';
          const content = right.html !== undefined ? right.html : escapeHtml(right.text);
          html += '<td class="diff-line-num">' + right.lineNum + '</td>' +
                  '<td class="diff-prefix">' + prefix + '</td>' +
                  '<td class="' + cls + '">' + (content || '&nbsp;') + '</td>';
        } else {
          html += '<td class="diff-line-num"></td><td class="diff-prefix"></td><td class="line-empty">&nbsp;</td>';
        }

        html += '</tr>';
      }
      html += '</table>';
      return html;
    }

    // Render Unified (Inline) View
    function renderUnifiedView(diffs, gran) {
      let html = '<table class="diff-table">';
      let origLine = 1;
      let newLine = 1;

      if (gran === 'line') {
        diffs.forEach(function(d) {
          const type = d[0];
          const lines = d[1].split('\n');
          if (lines[lines.length - 1] === '') lines.pop();

          lines.forEach(function(line) {
            let rowCls = 'line-equal';
            let prefix = ' ';
            let origNumStr = '';
            let newNumStr = '';

            if (type === -1) {
              rowCls = 'line-del';
              prefix = '-';
              origNumStr = String(origLine++);
            } else if (type === 1) {
              rowCls = 'line-add';
              prefix = '+';
              newNumStr = String(newLine++);
            } else {
              origNumStr = String(origLine++);
              newNumStr = String(newLine++);
            }

            html += '<tr class="' + rowCls + '">' +
                      '<td class="diff-line-num">' + origNumStr + '</td>' +
                      '<td class="diff-line-num">' + newNumStr + '</td>' +
                      '<td class="diff-prefix">' + prefix + '</td>' +
                      '<td>' + (escapeHtml(line) || '&nbsp;') + '</td>' +
                    '</tr>';
          });
        });
      } else {
        // Word or Char Granularity: format lines with inline additions and deletions
        let streamHtml = '';
        diffs.forEach(function(d) {
          const type = d[0];
          const safe = escapeHtml(d[1]);
          if (type === 0) streamHtml += safe;
          else if (type === -1) streamHtml += '<del class="diff-inline-del">' + safe + '</del>';
          else if (type === 1) streamHtml += '<ins class="diff-inline-add">' + safe + '</ins>';
        });

        const lines = streamHtml.split('\n');
        lines.forEach(function(l) {
          const hasDel = l.includes('<del');
          const hasAdd = l.includes('<ins');
          let rowCls = 'line-equal';
          let prefix = ' ';

          if (hasDel && hasAdd) {
            rowCls = 'line-add';
            prefix = '\u00b1';
          } else if (hasDel) {
            rowCls = 'line-del';
            prefix = '-';
          } else if (hasAdd) {
            rowCls = 'line-add';
            prefix = '+';
          }

          html += '<tr class="' + rowCls + '">' +
                    '<td class="diff-line-num">' + (origLine++) + '</td>' +
                    '<td class="diff-line-num">' + (newLine++) + '</td>' +
                    '<td class="diff-prefix">' + prefix + '</td>' +
                    '<td>' + (l || '&nbsp;') + '</td>' +
                  '</tr>';
        });
      }

      html += '</table>';
      return html;
    }

    // Main Update Function
    let updateTimeout;
    function updateDiff() {
      const orig = origTextarea.value;
      const mod = modTextarea.value;

      // Update input counters
      const origLines = orig ? orig.split('\n').length : 0;
      const origWords = orig.trim() ? orig.trim().split(/\s+/).filter(Boolean).length : 0;
      origLineCount.textContent = origLines + ' lines';
      origWordCount.textContent = origWords + ' words \u2022 ' + orig.length + ' chars';

      const modLines = mod ? mod.split('\n').length : 0;
      const modWords = mod.trim() ? mod.trim().split(/\s+/).filter(Boolean).length : 0;
      modLineCount.textContent = modLines + ' lines';
      modWordCount.textContent = modWords + ' words \u2022 ' + mod.length + ' chars';

      if (!orig && !mod) {
        diffEmptyState.style.display = 'block';
        diffOutputContainer.style.display = 'none';
        statAdditions.textContent = '0';
        statDeletions.textContent = '0';
        statUnchanged.textContent = '0';
        statSimilarity.textContent = '100%';
        similarityFill.style.width = '100%';
        return;
      }

      diffEmptyState.style.display = 'none';
      diffOutputContainer.style.display = 'block';

      const ignoreWs = chkIgnoreWhitespace.checked;
      const caseSens = chkCaseSensitive.checked;
      const diffs = computeDiff(orig, mod, currentGranularity, ignoreWs, caseSens);

      // Compute statistics
      let additions = 0;
      let deletions = 0;
      let equalChars = 0;

      diffs.forEach(function(d) {
        const type = d[0];
        const text = d[1];
        if (type === 1) {
          additions += currentGranularity === 'line' ? (text.split('\n').length - (text.endsWith('\n') ? 1 : 0)) : (currentGranularity === 'word' ? (text.trim().split(/\s+/).filter(Boolean).length || 1) : text.length);
        } else if (type === -1) {
          deletions += currentGranularity === 'line' ? (text.split('\n').length - (text.endsWith('\n') ? 1 : 0)) : (currentGranularity === 'word' ? (text.trim().split(/\s+/).filter(Boolean).length || 1) : text.length);
        } else {
          equalChars += text.length;
        }
      });

      const totalChars = orig.length + mod.length;
      let similarity = 100;
      if (totalChars > 0) {
        similarity = Math.min(100, Math.max(0, Math.round(((2 * equalChars) / totalChars) * 1000) / 10));
      }

      statAdditions.textContent = additions.toLocaleString();
      statDeletions.textContent = deletions.toLocaleString();
      statUnchanged.textContent = (currentGranularity === 'line' ? Math.max(0, origLines - deletions) : equalChars).toLocaleString();
      statSimilarity.textContent = similarity + '%';
      similarityFill.style.width = similarity + '%';

      // Render view
      if (currentViewMode === 'split') {
        diffOutputContainer.innerHTML = renderSplitView(diffs, currentGranularity);
      } else {
        diffOutputContainer.innerHTML = renderUnifiedView(diffs, currentGranularity);
      }
    }

    // Generate Raw Unified Diff String for Clipboard Copy
    function generateUnifiedDiffText() {
      const orig = origTextarea.value;
      const mod = modTextarea.value;
      if (!orig && !mod) return '';

      const diffs = computeDiff(orig, mod, 'line', chkIgnoreWhitespace.checked, chkCaseSensitive.checked);
      const lines = [
        '--- Original',
        '+++ Modified',
        '@@ -1,' + (orig.split('\n').length || 1) + ' +1,' + (mod.split('\n').length || 1) + ' @@'
      ];

      diffs.forEach(function(d) {
        const type = d[0];
        const lineList = d[1].split('\n');
        if (lineList[lineList.length - 1] === '') lineList.pop();

        lineList.forEach(function(l) {
          if (type === -1) lines.push('- ' + l);
          else if (type === 1) lines.push('+ ' + l);
          else lines.push('  ' + l);
        });
      });

      return lines.join('\n');
    }

    // Events: Granularity buttons
    granularityControl.querySelectorAll('.segmented-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        granularityControl.querySelectorAll('.segmented-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentGranularity = btn.dataset.gran;
        updateDiff();
      });
    });

    // Events: View mode buttons
    viewModeControl.querySelectorAll('.segmented-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        viewModeControl.querySelectorAll('.segmented-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentViewMode = btn.dataset.view;
        updateDiff();
      });
    });

    chkIgnoreWhitespace.addEventListener('change', updateDiff);
    chkCaseSensitive.addEventListener('change', updateDiff);

    origTextarea.addEventListener('input', function() {
      clearTimeout(updateTimeout);
      updateTimeout = setTimeout(updateDiff, 150);
    });

    modTextarea.addEventListener('input', function() {
      clearTimeout(updateTimeout);
      updateTimeout = setTimeout(updateDiff, 150);
    });

    // Swap button
    btnSwap.addEventListener('click', function() {
      const temp = origTextarea.value;
      origTextarea.value = modTextarea.value;
      modTextarea.value = temp;
      updateDiff();
      showToast(dict().toastSwapped);
    });

    // Clear All
    btnClearAll.addEventListener('click', function() {
      origTextarea.value = '';
      modTextarea.value = '';
      updateDiff();
      origTextarea.focus();
      showToast(dict().toastCleared);
    });

    // Sample
    btnLoadSample.addEventListener('click', function() {
      origTextarea.value = SAMPLE_ORIGINAL;
      modTextarea.value = SAMPLE_MODIFIED;
      updateDiff();
      showToast(dict().toastSample);
    });

    // Copy Diff Action
    btnCopyDiff.addEventListener('click', function() {
      const text = generateUnifiedDiffText();
      if (!text) return;
      copyTextToClipboard(text);
      btnCopyDiff.classList.add('copied');
      copyDiffLabel.textContent = dict().btnCopied;
      showToast(dict().toastCopied);
      setTimeout(function() {
        btnCopyDiff.classList.remove('copied');
        copyDiffLabel.textContent = dict().btnCopyDiff;
      }, 2000);
    });

    // Export HTML Report Action
    btnExportHtml.addEventListener('click', function() {
      const diffContent = diffOutputContainer.innerHTML;
      if (!diffContent) return;

      const reportHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Diff Comparison Report — VantorKit</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #07090e; color: #f8fafc; padding: 2rem; }
    h1 { font-size: 1.5rem; margin-bottom: 1rem; color: #60a5fa; }
    .meta { font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem; font-family: monospace; }
    .table-wrap { background: #080c14; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: auto; }
    table { width: 100%; border-collapse: collapse; font-family: monospace; font-size: 13px; line-height: 1.5; }
    td { padding: 3px 8px; vertical-align: top; white-space: pre-wrap; word-break: break-all; }
    .diff-line-num { width: 45px; text-align: right; color: #475569; background: #0b0f19; border-right: 1px solid rgba(255,255,255,0.06); user-select: none; }
    .diff-prefix { width: 20px; text-align: center; color: #64748b; font-weight: bold; }
    .line-add { background: rgba(16, 185, 129, 0.15); border-left: 3px solid #10b981; }
    .line-del { background: rgba(239, 68, 68, 0.15); border-left: 3px solid #ef4444; }
    .line-equal { color: #94a3b8; }
    .line-empty { background: rgba(255, 255, 255, 0.02); }
    ins.diff-inline-add { background: rgba(16, 185, 129, 0.35); color: #a7f3d0; text-decoration: none; font-weight: bold; }
    del.diff-inline-del { background: rgba(239, 68, 68, 0.35); color: #fecaca; text-decoration: line-through; font-weight: bold; }
  </style>
</head>
<body>
  <h1>VantorKit Text Diff Comparison Report</h1>
  <div class="meta">
    Additions: ${statAdditions.textContent} | Deletions: ${statDeletions.textContent} | Similarity: ${statSimilarity.textContent} | Generated: ${new Date().toISOString()}
  </div>
  <div class="table-wrap">
    ${diffContent}
  </div>
  <script src="../sidebar.js" defer><\/script>
</body>
</html>`;

      downloadBlob(reportHtml, 'text-diff-report.html', 'text/html;charset=utf-8');
      showToast(dict().toastExported);
    });

    function downloadBlob(content, filename, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 200);
    }

    function copyTextToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function() {
          fallbackClipboardCopy(text);
        });
      } else {
        fallbackClipboardCopy(text);
      }
    }

    function fallbackClipboardCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    // Language handling
    function setLanguage(lang) {
      window.setLanguage = setLanguage;
      if (!I18N[lang]) lang = 'en';
      currentLang = lang;
      localStorage.setItem('vantorkit_lang', lang);
      const d = I18N[lang];

      htmlRoot.setAttribute('lang', lang);
      htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      currentLangLabel.textContent = d.langLabel;

      langOptions.forEach(function(o) {
        o.classList.toggle('active', o.dataset.lang === lang);
      });

      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const k = el.dataset.i18n;
        if (d[k] && typeof d[k] === 'string') el.textContent = d[k];
      });

      updateDiff();
    }

    langToggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const open = langMenu.classList.contains('open');
      langMenu.classList.toggle('open', !open);
      langToggleBtn.setAttribute('aria-expanded', String(!open));
    });

    langOptions.forEach(function(o) {
      o.addEventListener('click', function() {
        setLanguage(o.dataset.lang);
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function(e) {
      if (!document.getElementById('langDropdown').contains(e.target)) {
        langMenu.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Initialize with sample or empty state
    const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(savedLang);

    // Load sample by default so user sees immediate visual magic
    origTextarea.value = SAMPLE_ORIGINAL;
    modTextarea.value = SAMPLE_MODIFIED;
    updateDiff();

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
        "title": "Text Diff Tool – Compare Differences Side by Side",
        "desc": "Inspect line, word, and character differences between two text drafts side by side. Diff parsing algorithms execute locally on client hardware without uploads."
    },
    "ar": {
        "title": "أداة مقارنة النصوص – كشف الفروق جنباً إلى جنب",
        "desc": "قارن بين نسختين من النصوص جنباً إلى جنب لاكتشاف الفروقات على مستوى الأسطر والكلمات بدقة. تعمل خوارزمية الفحص محلياً على جهازك دون إرسال نصوصك للخارج."
    },
    "fr": {
        "title": "Comparateur de Textes – Vérificateur de Différences",
        "desc": "Comparez deux rédactions côte à côte ou en ligne pour détecter ajouts et suppressions. L'analyse différentielle s'exécute directement sur votre ordinateur."
    },
    "it": {
        "title": "Confronto Testi – Analisi Differenze Affiancate",
        "desc": "Individua modifiche, aggiunte e cancellazioni tra due testi affiancati riga per riga. L'algoritmo di differenziazione gira in locale senza caricare file."
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