(function() {
    'use strict';

    const SAMPLE_TEXT = "Building Next-Gen Web Utilities: Éléments of Modern SEO & API Architecture in 2026!";

    const STOP_WORDS = new Set([
      'a','an','the','and','or','but','in','on','at','to','for','of','with','by',
      'is','are','was','were','it','its','as','from','into','about'
    ]);

    const MINOR_WORDS = new Set([
      'a','an','the','and','but','or','for','nor','on','at','to','from','by','with','in','of','as'
    ]);

    // Internationalization dictionary
    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Text Tools \u2022 100% Client-Side \u2022 Instant String & Slug Transformations',
        pageSubtitle: 'Convert text cases between camelCase, snake_case, PascalCase, kebab-case, Title Case, and generate clean SEO-optimized URL slugs with zero cloud uploads.',
        lblInputText: 'Input Text',
        lblOutputResult: 'Converted Result',
        btnPaste: 'Paste',
        btnSample: 'Sample',
        btnClear: 'Clear',
        btnSwap: '\u21c6 Swap with Input',
        btnDownload: '.txt',
        btnCopy: 'Copy Result',
        btnCopied: 'Copied!',
        secEditorial: 'Editorial & Writing Presets',
        secDeveloper: 'Developer & Code Presets',
        secSlugifier: 'Dedicated SEO URL Slugifier',
        secCleaners: 'Quick String Cleanup Utilities',
        lblSeparator: 'Separator:',
        lblPrefix: 'Prefix (Optional):',
        lblSuffix: 'Suffix (Optional):',
        chkSlugLower: 'Lowercase Output',
        chkStripDiacritics: 'Remove Accents (é \u2192 e)',
        chkStopWords: 'Filter Stop Words (a, the, in...)',
        btnGenerateSlug: 'Apply URL Slug',
        lblLiveSlugPreview: 'Live Slug Preview:',
        btnCleanSpaces: 'Clean Extra Spaces',
        btnRemoveNewlines: 'Remove Line Breaks',
        btnStripHtml: 'Strip HTML Tags',
        btnReverse: 'Reverse Text',
        guideHeading: 'Code Naming Conventions & URL Slug Optimization',
        guideSub: 'Best practices for software architectures, database schemas, and search engine optimization.',
        cheatTitle: 'Developer Case Style Guide',
        thCase: 'Case Format',
        thExample: 'Example',
        thUsage: 'Standard Use Cases',
        guide1Title: '1. Why URL Slugs Matter for SEO',
        guide1Desc: 'Clean, descriptive, hyphen-separated URLs give search engines immediate context about your page content. Removing redundant stop words keeps URLs short and improves organic click-through rates.',
        guide2Title: '2. Diacritics & Universal Normalization',
        guide2Desc: 'Accented Latin characters cause URL encoding issues (%C3%A9). Our engine normalizes Unicode via NFD to automatically convert diacritics into plain ASCII equivalents.',
        guide3Title: '3. Zero-Cloud Privacy Guarantee',
        guide3Desc: 'Your proprietary source code, draft article titles, and confidential project names are processed 100% locally in your browser memory. Nothing is ever sent to external cloud servers.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Does this tool upload or store my text on any server?',
        faq1A: 'Never. All conversions, case formats, and slug generations run strictly inside client-side JavaScript in your local browser sandbox.',
        faq2Q: 'What is AP / Chicago Title Case?',
        faq2A: 'Title Case capitalizes all major words (nouns, verbs, adjectives, adverbs) while keeping minor articles and prepositions lowercase unless they are the first or last word.',
        faq3Q: 'How do I generate an SEO-friendly URL slug?',
        faq3A: 'Paste your article title, select your separator (hyphens \'-\' are recommended by Google), enable \'Remove Accents\' and \'Filter Stop Words\', then click \'Apply URL Slug\'.',
        faq4Q: 'Can I chain multiple transformations?',
        faq4A: 'Yes! Click the \'Swap with Input\' button to transfer the converted result back into the input field and apply another transformation preset.',
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastCopied: '\u2705 Converted text copied to clipboard!',
        toastCleared: '\ud83d\uddd1\ufe0f Input text cleared.',
        toastSample: '\ud83d\udcd6 Demonstration sample text loaded.',
        toastSwapped: '\u21c4 Output swapped back to input!',
        toastDownloaded: '\ud83d\udce5 Downloading converted.txt...',
        toastApplied: '\u2728 Transformation applied!'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2192 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0646\u0635\u0648\u0635 \u2022 100% \u0645\u062d\u0644\u064a\u0627\u064b \u2022 \u062a\u062d\u0648\u064a\u0644 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0623\u062d\u0631\u0641 \u0648\u062a\u0648\u0644\u064a\u062f \u0627\u0644\u0631\u0648\u0627\u0628\u0637',
        pageSubtitle: '\u062a\u062d\u0648\u064a\u0644 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0623\u062d\u0631\u0641 \u0628\u064a\u0646 camelCase \u0648snake_case \u0648kebab-case \u0648Title Case \u0648\u0625\u0646\u0634\u0627\u0621 \u0631\u0648\u0627\u0628\u0637 URL \u0645\u062a\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b SEO \u062f\u0648\u0646 \u0623\u064a \u062a\u0633\u062c\u064a\u0644 \u0633\u062d\u0627\u0628\u064a.',
        lblInputText: '\u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062f\u062e\u0644',
        lblOutputResult: '\u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0645\u062d\u0648\u0644\u0629',
        btnPaste: '\u0644\u0635\u0642',
        btnSample: '\u0646\u0645\u0648\u0630\u062c',
        btnClear: '\u0645\u0633\u062d',
        btnSwap: '\u21c6 \u062a\u0628\u062f\u064a\u0644 \u0645\u0639 \u0627\u0644\u0645\u062f\u062e\u0644',
        btnDownload: '.txt',
        btnCopy: '\u0646\u0633\u062e \u0627\u0644\u0646\u062a\u064a\u062c\u0629',
        btnCopied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!',
        secEditorial: '\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0627\u0644\u062a\u062d\u0631\u064a\u0631 \u0648\u0627\u0644\u0643\u062a\u0627\u0628\u0629',
        secDeveloper: '\u062a\u0646\u0633\u064a\u0642\u0627\u062a \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0648\u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646',
        secSlugifier: '\u0645\u0648\u0644\u062f \u0631\u0648\u0627\u0628\u0637 URL \u0644\u0640 SEO',
        secCleaners: '\u0623\u062f\u0648\u0627\u062a \u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0633\u0631\u064a\u0639\u0629',
        lblSeparator: '\u0627\u0644\u0641\u0627\u0635\u0644:',
        lblPrefix: '\u0628\u0627\u062f\u0626\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a):',
        lblSuffix: '\u0644\u0627\u062d\u0642\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a):',
        chkSlugLower: '\u0623\u062d\u0631\u0641 \u0635\u063a\u064a\u0631\u0629',
        chkStripDiacritics: '\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062d\u0631\u0643\u0627\u062a (\u00e9 \u2192 e)',
        chkStopWords: '\u062d\u0630\u0641 \u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0631\u0628\u0637 (a, the, in...)',
        btnGenerateSlug: '\u062a\u0637\u0628\u064a\u0642 \u0631\u0627\u0628\u0637 URL',
        lblLiveSlugPreview: '\u0645\u0639\u0627\u064a\u0646\u0629 \u0644\u062d\u0638\u064a\u0629 \u0644\u0644\u0631\u0627\u0628\u0637:',
        btnCleanSpaces: '\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u0627\u0644\u0632\u0627\u0626\u062f\u0629',
        btnRemoveNewlines: '\u0625\u0632\u0627\u0644\u0629 \u0641\u0648\u0627\u0635\u0644 \u0627\u0644\u0623\u0633\u0637\u0631',
        btnStripHtml: '\u062d\u0630\u0641 \u0648\u0633\u0648\u0645 HTML',
        btnReverse: '\u0639\u0643\u0633 \u0627\u0644\u0646\u0635',
        guideHeading: '\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u062a\u0633\u0645\u064a\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0629 \u0648\u062a\u062d\u0633\u064a\u0646 \u0631\u0648\u0627\u0628\u0637 SEO',
        guideSub: '\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0627\u062a \u0644\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b.',
        cheatTitle: '\u062f\u0644\u064a\u0644 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0623\u062d\u0631\u0641 \u0644\u0644\u0645\u0637\u0648\u0631\u064a\u0646',
        thCase: '\u0646\u0645\u0637 \u0627\u0644\u062d\u0627\u0644\u0629',
        thExample: '\u0645\u062b\u0627\u0644',
        thUsage: '\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        guide1Title: '1. \u0623\u0647\u0645\u064a\u0629 \u0631\u0648\u0627\u0628\u0637 URL \u0644\u0640 SEO',
        guide1Desc: '\u062a\u0645\u0646\u062d \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0634\u0631\u0637\u0627\u062a \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b \u0633\u064a\u0627\u0642\u0627\u064b \u0641\u0648\u0631\u064a\u0627\u064b \u0639\u0646 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0648\u062a\u0631\u0641\u0639 \u0646\u0633\u0628\u0629 \u0627\u0644\u0646\u0642\u0631.',
        guide2Title: '2. \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062d\u0631\u0643\u0627\u062a \u0648\u062a\u0648\u062d\u064a\u062f \u0627\u0644\u062a\u0631\u0645\u064a\u0632',
        guide2Desc: '\u062a\u0633\u0628\u0628 \u0627\u0644\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0644\u0627\u062a\u064a\u0646\u064a\u0629 \u0645\u0634\u0627\u0643\u0644 \u0641\u064a \u062a\u0631\u0645\u064a\u0632 \u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646\u060c \u0648\u064a\u0642\u0648\u0645 \u0645\u062d\u0631\u0643\u0646\u0627 \u0628\u062a\u062d\u0648\u064a\u0644\u0647\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0625\u0644\u0649 \u0623\u062d\u0631\u0641 ASCII \u0628\u0633\u064a\u0637\u0629.',
        guide3Title: '3. \u062e\u0635\u0648\u0635\u064a\u0629 \u0645\u062d\u0644\u064a\u0629 100%',
        guide3Desc: '\u0643\u0627\u0641\u0629 \u0639\u0645\u0644\u064a\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0646\u0635\u0648\u0635 \u062a\u062a\u0645 \u062f\u0627\u062e\u0644 \u0630\u0627\u0643\u0631\u0629 \u0645\u062a\u0635\u0641\u062d\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u062f\u0648\u0646 \u0625\u0631\u0633\u0627\u0644 \u0623\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0623\u064a \u062e\u0627\u062f\u0645.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0647\u0644 \u064a\u062a\u0645 \u062d\u0641\u0638 \u0646\u0635\u0648\u0635\u064a \u0639\u0644\u0649 \u0623\u064a \u062e\u0627\u062f\u0645\u061f',
        faq1A: '\u0644\u0627 \u062a\u0645\u0627\u0645\u0627\u064b. \u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0627\u062a \u062a\u0639\u0645\u0644 \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u0641\u0642\u0637.',
        faq2Q: '\u0645\u0627 \u0647\u0648 \u0646\u0638\u0627\u0645 Title Case (AP / Chicago)\u061f',
        faq2A: '\u064a\u0628\u062f\u0623 \u0643\u0644 \u0643\u0644\u0645\u0629 \u0631\u0626\u064a\u0633\u064a\u0629 \u0628\u062d\u0631\u0641 \u0643\u0628\u064a\u0631 \u0645\u0639 \u0625\u0628\u0642\u0627\u0621 \u062d\u0631\u0648\u0641 \u0627\u0644\u062c\u0631 \u0648\u0627\u0644\u0631\u0628\u0637 \u0627\u0644\u0642\u0635\u064a\u0631\u0629 \u0628\u0623\u062d\u0631\u0641 \u0635\u063a\u064a\u0631\u0629.',
        faq3Q: '\u0643\u064a\u0641 \u0623\u0646\u0634\u0626 \u0631\u0627\u0628\u0637 URL \u0645\u062a\u0648\u0627\u0641\u0642\u0627\u064b \u0645\u0639 SEO\u061f',
        faq3A: '\u0627\u0644\u0635\u0642 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u060c \u062d\u062f\u062f \u0627\u0644\u0641\u0627\u0635\u0644 \u0627\u0644\u0645\u0641\u0636\u0644 (-) \u0648\u0641\u0639\u0651\u0644 \u062d\u0630\u0641 \u0627\u0644\u062d\u0631\u0643\u0627\u062a \u062b\u0645 \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \'تطبيق رابط URL\'.',
        faq4Q: '\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u062a\u0637\u0628\u064a\u0642 \u0639\u062f\u0629 \u062a\u062d\u0648\u064a\u0644\u0627\u062a \u0645\u062a\u062a\u0627\u0644\u064a\u0629\u061f',
        faq4A: '\u0646\u0639\u0645! \u0627\u0633\u062a\u062e\u062f\u0645 \u0632\u0631 \'\u062a\u0628\u062f\u064a\u0644 \u0645\u0639 \u0627\u0644\u0645\u062f\u062e\u0644\' \u0644\u0646\u0642\u0644 \u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0625\u0644\u0649 \u062d\u0642\u0644 \u0627\u0644\u0625\u062f\u062e\u0627\u0644 \u0648\u062a\u0637\u0628\u064a\u0642 \u062a\u062d\u0648\u064a\u0644 \u0622\u062e\u0631.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629. \u0643\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u062a\u062c\u0631\u064a \u0645\u062d\u0644\u064a\u0627\u064b.',
        toastCopied: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062d\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062d\u0627\u0641\u0638\u0629!',
        toastCleared: '\ud83d\uddd1\ufe0f \u062a\u0645 \u0645\u0633\u062d \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u062f\u062e\u0644.',
        toastSample: '\ud83d\udcd6 \u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a.',
        toastSwapped: '\u21c4 \u062a\u0645 \u0646\u0642\u0644 \u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0625\u0644\u0649 \u062d\u0642\u0644 \u0627\u0644\u0625\u062f\u062e\u0627\u0644!',
        toastDownloaded: '\ud83d\udce5 \u062c\u0627\u0631\u064d \u062a\u0646\u0632\u064a\u0644 converted.txt...',
        toastApplied: '\u2728 \u062a\u0645 \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062a\u062d\u0648\u064a\u0644!'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux outils',
        brandBadge: 'Outils Texte \u2022 100% C\u00f4t\u00e9 Client \u2022 Conversion de Casse & Slugs URL',
        pageSubtitle: 'Convertissez instantan\u00e9ment vos textes en camelCase, snake_case, PascalCase, kebab-case, Title Case et g\u00e9n\u00e9rez des slugs d\'URL optimis\u00e9s pour le SEO.',
        lblInputText: 'Texte Source',
        lblOutputResult: 'R\u00e9sultat Converti',
        btnPaste: 'Coller',
        btnSample: 'Exemple',
        btnClear: 'Effacer',
        btnSwap: '\u21c6 Inverser avec l\'entr\u00e9e',
        btnDownload: '.txt',
        btnCopy: 'Copier le R\u00e9sultat',
        btnCopied: 'Copi\u00e9 !',
        secEditorial: 'Styles R\u00e9dactionnels & Litt\u00e9raires',
        secDeveloper: 'Styles Code & D\u00e9veloppement',
        secSlugifier: 'G\u00e9n\u00e9rateur de Slugs URL SEO',
        secCleaners: 'Utilitaires de Nettoyage de Cha\u00eenes',
        lblSeparator: 'S\u00e9parateur :',
        lblPrefix: 'Pr\u00e9fixe (Optionnel) :',
        lblSuffix: 'Suffixe (Optionnel) :',
        chkSlugLower: 'Sortie en minuscules',
        chkStripDiacritics: 'Supprimer accents (\u00e9 \u2192 e)',
        chkStopWords: 'Filtrer mots vides (le, la, et...)',
        btnGenerateSlug: 'Appliquer le Slug URL',
        lblLiveSlugPreview: 'Aper\u00e7u direct du Slug :',
        btnCleanSpaces: 'Nettoyer espaces superflus',
        btnRemoveNewlines: 'Supprimer retours \u00e0 la ligne',
        btnStripHtml: 'Supprimer balises HTML',
        btnReverse: 'Inverser le texte',
        guideHeading: 'Conventions de Nommage & Optimisation des Slugs URL',
        guideSub: 'Bonnes pratiques pour le d\u00e9veloppement logiciel, les bases de donn\u00e9es et le SEO.',
        cheatTitle: 'Guide des Styles de Casse pour D\u00e9veloppeurs',
        thCase: 'Format de Casse',
        thExample: 'Exemple',
        thUsage: 'Cas d\'usage types',
        guide1Title: '1. Pourquoi les Slugs URL sont cruciaux pour le SEO',
        guide1Desc: 'Des URLs claires s\u00e9par\u00e9es par des tirets facilitent l\'indexation par les moteurs de recherche et renforcent le taux de clic.',
        guide2Title: '2. Normalisation et suppression des accents',
        guide2Desc: 'Les lettres accentu\u00e9es g\u00e9n\u00e8rent des encodages illisibles (%C3%A9). Notre moteur convertit proprement les diacritiques en caract\u00e8res ASCII.',
        guide3Title: '3. Confidentialit\u00e9 Absolue 100% C\u00f4t\u00e9 Client',
        guide3Desc: 'Vos codes sources et textes confidentiels ne quittent jamais votre navigateur. Aucune donn\u00e9e n\'est transmise \u00e0 des serveurs externes.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Mes textes sont-ils envoy\u00e9s \u00e0 un serveur ?',
        faq1A: 'Non. Toutes les transformations s\'ex\u00e9cutent localement dans votre navigateur.',
        faq2Q: 'Qu\'est-ce que le format Title Case ?',
        faq2A: 'Title Case met en majuscule les mots principaux tout en laissant les petits articles et pr\u00e9positions en minuscules.',
        faq3Q: 'Comment cr\u00e9er un slug SEO propre ?',
        faq3A: 'Collez votre titre, activez la suppression des accents et cliquez sur \'Appliquer le Slug URL\'.',
        faq4Q: 'Puis-je encha\u00eener plusieurs conversions ?',
        faq4A: 'Oui ! Cliquez sur \'Inverser avec l\'entr\u00e9e\' pour r\u00e9injecter le r\u00e9sultat converti et lui appliquer un nouveau style.',
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastCopied: '\u2705 R\u00e9sultat copi\u00e9 dans le presse-papiers !',
        toastCleared: '\ud83d\uddd1\ufe0f Texte source effac\u00e9.',
        toastSample: '\ud83d\udcd6 Texte d\'exemple charg\u00e9.',
        toastSwapped: '\u21c4 R\u00e9sultat r\u00e9inject\u00e9 en entr\u00e9e !',
        toastDownloaded: '\ud83d\udce5 T\u00e9l\u00e9chargement de converted.txt...',
        toastApplied: '\u2728 Transformation appliqu\u00e9e !'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli strumenti',
        brandBadge: 'Strumenti Testo \u2022 100% Lato Client \u2022 Convertitore di Maiuscole & Slug URL',
        pageSubtitle: 'Converti formati di testo tra camelCase, snake_case, PascalCase, kebab-case, Title Case e genera slug URL ottimizzati per la SEO.',
        lblInputText: 'Testo di Origine',
        lblOutputResult: 'Risultato Convertito',
        btnPaste: 'Incolla',
        btnSample: 'Esempio',
        btnClear: 'Cancella',
        btnSwap: '\u21c6 Inverti con input',
        btnDownload: '.txt',
        btnCopy: 'Copia Risultato',
        btnCopied: 'Copiato!',
        secEditorial: 'Stili Editoriali & Scrittura',
        secDeveloper: 'Stili per Programmatori & Codice',
        secSlugifier: 'Generatore Slug URL per SEO',
        secCleaners: 'Utilit\u00e0 di Pulizia Stringhe',
        lblSeparator: 'Separatore:',
        lblPrefix: 'Prefisso (Opzionale):',
        lblSuffix: 'Suffisso (Opzionale):',
        chkSlugLower: 'Output in minuscolo',
        chkStripDiacritics: 'Rimuovi accenti (\u00e9 \u2192 e)',
        chkStopWords: 'Filtra parole vuote (il, la, di...)',
        btnGenerateSlug: 'Applica Slug URL',
        lblLiveSlugPreview: 'Anteprima Slug in tempo reale:',
        btnCleanSpaces: 'Pulisci spazi extra',
        btnRemoveNewlines: 'Rimuovi interruzioni di riga',
        btnStripHtml: 'Rimuovi tag HTML',
        btnReverse: 'Inverti testo',
        guideHeading: 'Convenzioni di Denominazione & Ottimizzazione Slug URL',
        guideSub: 'Best practice per sviluppatori software, database e motori di ricerca.',
        cheatTitle: 'Guida agli Stili di Notazione per Sviluppatori',
        thCase: 'Stile Notazione',
        thExample: 'Esempio',
        thUsage: 'Casi d\'uso standard',
        guide1Title: '1. Perch\u00e9 gli Slug URL contano per la SEO',
        guide1Desc: 'URL chiari e separati da trattini consentono ai motori di ricerca di comprendere immediatamente il tema della pagina.',
        guide2Title: '2. Normalizzazione e rimozione degli accenti',
        guide2Desc: 'I caratteri accentati creano indirizzi poco leggibili (%C3%A9). Il nostro motore converte automaticamente i diacritici in ASCII.',
        guide3Title: '3. Privacy 100% Lato Client',
        guide3Desc: 'Tutti i tuoi testi e codici restano confinati nella memoria locale del tuo browser senza alcun invio a server esterni.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'I miei testi vengono caricati su un server?',
        faq1A: 'No. Tutte le conversioni avvengono sul tuo dispositivo in JavaScript.',
        faq2Q: 'Cos\'\u00e8 il Title Case?',
        faq2A: 'Title Case rende maiuscole le parole principali mantenendo minuscole preposizioni e articoli brevi.',
        faq3Q: 'Come genero uno slug URL valido?',
        faq3A: 'Incolla il titolo, scegli il separatore e clicca \'Applica Slug URL\'.',
        faq4Q: 'Posso concatenare pi\u00f9 trasformazioni?',
        faq4A: 'Certamente! Usa \'Inverti con input\' per riutilizzare l\'output come nuovo input.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastCopied: '\u2705 Risultato copiato negli appunti!',
        toastCleared: '\ud83d\uddd1\ufe0f Testo cancellato.',
        toastSample: '\ud83d\udcd6 Testo di esempio caricato.',
        toastSwapped: '\u21c4 Risultato trasferito in input!',
        toastDownloaded: '\ud83d\udce5 Download di converted.txt in corso...',
        toastApplied: '\u2728 Trasformazione applicata!'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const inputStats = document.getElementById('inputStats');
    const outputStats = document.getElementById('outputStats');
    const activePresetBadge = document.getElementById('activePresetBadge');

    const btnPaste = document.getElementById('btnPaste');
    const btnSample = document.getElementById('btnSample');
    const btnClear = document.getElementById('btnClear');
    const btnSwap = document.getElementById('btnSwap');
    const btnDownload = document.getElementById('btnDownload');
    const btnCopyResult = document.getElementById('btnCopyResult');
    const copyResultLabel = document.getElementById('copyResultLabel');

    const presetBtns = document.querySelectorAll('.preset-btn');

    // Slug controls
    const slugSeparator = document.getElementById('slugSeparator');
    const slugPrefix = document.getElementById('slugPrefix');
    const slugSuffix = document.getElementById('slugSuffix');
    const chkSlugLower = document.getElementById('chkSlugLower');
    const chkStripDiacritics = document.getElementById('chkStripDiacritics');
    const chkStopWords = document.getElementById('chkStopWords');
    const btnApplySlug = document.getElementById('btnApplySlug');
    const slugPreviewText = document.getElementById('slugPreviewText');

    // Cleaner buttons
    const btnCleanSpaces = document.getElementById('btnCleanSpaces');
    const btnRemoveNewlines = document.getElementById('btnRemoveNewlines');
    const btnStripHtml = document.getElementById('btnStripHtml');
    const btnReverse = document.getElementById('btnReverse');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    let currentLang = 'en';
    let activePreset = 'upper';

    function dict() { return I18N[currentLang] || I18N.en; }

    let toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2400;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    // Helper: Words tokenizer for developer cases
    function splitWords(str) {
      return (str || '')
        .replace(/(\p{Ll}|\p{N})(\p{Lu})/gu, '$1 $2')
        .replace(/(\p{Lu}+)(\p{Lu}\p{Ll})/gu, '$1 $2')
        .replace(/[^\p{L}\p{N}\s_-]/gu, ' ')
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean);
    }

    // Transformations Library
    const TRANSFORMATIONS = {
      upper: function(str) {
        return str.toUpperCase();
      },
      lower: function(str) {
        return str.toLowerCase();
      },
      title: function(str) {
        return str.split('\n').map(function(line) {
          const tokens = line.split(/(\s+)/);
          const nonSpace = tokens.filter(function(w) { return !/^\s+$/.test(w) && w.length > 0; });
          const first = nonSpace[0];
          const last = nonSpace[nonSpace.length - 1];

          return tokens.map(function(w) {
            if (/^\s+$/.test(w) || w.length === 0) return w;
            const lower = w.toLowerCase();
            if (w !== first && w !== last && MINOR_WORDS.has(lower)) {
              return lower;
            }
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
          }).join('');
        }).join('\n');
      },
      sentence: function(str) {
        return str.toLowerCase().replace(/(^\s*|[.!?؟]\s+)([a-z\u00E0-\u00FF\u0100-\u017F\u0600-\u06FF])/g, function(m, p1, p2) {
          return p1 + p2.toUpperCase();
        });
      },
      capitalized: function(str) {
        return str.toLowerCase().replace(/(?:^|\s|[(\[{/\\-])\S/g, function(c) {
          return c.toUpperCase();
        });
      },
      alternating: function(str) {
        let upper = false;
        return Array.from(str).map(function(c) {
          if (/[a-zA-Z\u00C0-\u017F]/.test(c)) {
            upper = !upper;
            return upper ? c.toUpperCase() : c.toLowerCase();
          }
          return c;
        }).join('');
      },
      camel: function(str) {
        const words = splitWords(str);
        return words.map(function(w, i) {
          return i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        }).join('');
      },
      pascal: function(str) {
        const words = splitWords(str);
        return words.map(function(w) {
          return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        }).join('');
      },
      snake: function(str) {
        return splitWords(str).map(function(w) { return w.toLowerCase(); }).join('_');
      },
      kebab: function(str) {
        return splitWords(str).map(function(w) { return w.toLowerCase(); }).join('-');
      },
      constant: function(str) {
        return splitWords(str).map(function(w) { return w.toUpperCase(); }).join('_');
      },
      dot: function(str) {
        return splitWords(str).map(function(w) { return w.toLowerCase(); }).join('.');
      },
      path: function(str) {
        return splitWords(str).map(function(w) { return w.toLowerCase(); }).join('/');
      }
    };

    // Slugifier Engine Function
    function generateSlug(str) {
      let text = str || '';
      if (chkStripDiacritics.checked) {
        text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u064B-\u065F\u0670]/g, '');
      }
      if (chkSlugLower.checked) {
        text = text.toLowerCase();
      }

      // Strip non-alphanumeric except spaces, underscores, hyphens (Unicode-aware)
      text = text.replace(/[^\p{L}\p{N}\s_-]/gu, ' ').trim();
      let tokens = text.split(/[\s_-]+/).filter(Boolean);

      if (chkStopWords.checked) {
        tokens = tokens.filter(function(t) { return !STOP_WORDS.has(t.toLowerCase()); });
      }

      const sep = slugSeparator.value || '-';
      let slug = tokens.join(sep);

      const prefix = slugPrefix.value.trim();
      const suffix = slugSuffix.value.trim();

      if (prefix) {
        slug = prefix.replace(/\/+$/, '') + '/' + slug.replace(/^\/+/, '');
      }
      if (suffix) {
        if (!slug.endsWith(suffix)) slug = slug + suffix;
      }
      return slug;
    }

    // Update Stats Display
    function getStats(text) {
      const lines = text ? text.split('\n').length : 0;
      const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
      const chars = text.length;
      return lines + ' lines \u2022 ' + words + ' words \u2022 ' + chars + ' chars';
    }

    function updateLive() {
      const val = inputText.value;
      inputStats.textContent = getStats(val);

      if (!val) {
        outputText.value = '';
        outputStats.textContent = '0 lines \u2022 0 words \u2022 0 chars';
        slugPreviewText.textContent = '...';
        return;
      }

      // Update slug preview
      slugPreviewText.textContent = generateSlug(val) || '...';

      // If active preset is a standard preset, transform output
      if (activePreset === 'slug') {
        outputText.value = generateSlug(val);
      } else if (TRANSFORMATIONS[activePreset]) {
        outputText.value = TRANSFORMATIONS[activePreset](val);
      }
      outputStats.textContent = getStats(outputText.value);
    }

    // Presets Click Handler
    presetBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        presetBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activePreset = btn.dataset.preset;
        activePresetBadge.textContent = btn.querySelector('.preset-name').textContent;
        updateLive();
        showToast(dict().toastApplied, 1500);
      });
    });

    // Slug Controls Event Listeners
    [slugSeparator, slugPrefix, slugSuffix, chkSlugLower, chkStripDiacritics, chkStopWords].forEach(function(el) {
      el.addEventListener('input', function() {
        if (activePreset === 'slug') {
          updateLive();
        } else {
          slugPreviewText.textContent = generateSlug(inputText.value) || '...';
        }
      });
      el.addEventListener('change', function() {
        if (activePreset === 'slug') {
          updateLive();
        } else {
          slugPreviewText.textContent = generateSlug(inputText.value) || '...';
        }
      });
    });

    btnApplySlug.addEventListener('click', function() {
      presetBtns.forEach(function(b) { b.classList.remove('active'); });
      activePreset = 'slug';
      activePresetBadge.textContent = 'SEO URL Slug';
      updateLive();
      showToast(dict().toastApplied, 1500);
    });

    // Cleanup Utility Actions
    btnCleanSpaces.addEventListener('click', function() {
      if (!inputText.value) return;
      inputText.value = inputText.value
        .replace(/[^\S\r\n]+/g, ' ')
        .replace(/^[^\S\r\n]+|[^\S\r\n]+$/gm, '')
        .trim();
      updateLive();
      showToast(dict().toastApplied);
    });

    btnRemoveNewlines.addEventListener('click', function() {
      if (!inputText.value) return;
      inputText.value = inputText.value.replace(/\r?\n+/g, ' ').trim();
      updateLive();
      showToast(dict().toastApplied);
    });

    btnStripHtml.addEventListener('click', function() {
      if (!inputText.value) return;
      inputText.value = inputText.value
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');
      updateLive();
      showToast(dict().toastApplied);
    });

    btnReverse.addEventListener('click', function() {
      if (!inputText.value) return;
      inputText.value = Array.from(inputText.value).reverse().join('');
      updateLive();
      showToast(dict().toastApplied);
    });

    // Paste Action
    btnPaste.addEventListener('click', function() {
      if (navigator.clipboard && navigator.clipboard.readText) {
        navigator.clipboard.readText().then(function(text) {
          if (text) {
            inputText.value = text;
            updateLive();
            showToast('Pasted from clipboard');
          }
        }).catch(function() {
          inputText.focus();
          showToast('Press Ctrl+V to paste');
        });
      } else {
        inputText.focus();
        showToast('Press Ctrl+V to paste');
      }
    });

    // Sample Text
    btnSample.addEventListener('click', function() {
      inputText.value = SAMPLE_TEXT;
      updateLive();
      showToast(dict().toastSample);
    });

    // Clear Action
    btnClear.addEventListener('click', function() {
      inputText.value = '';
      updateLive();
      inputText.focus();
      showToast(dict().toastCleared);
    });

    // Swap Action
    btnSwap.addEventListener('click', function() {
      if (!outputText.value) return;
      inputText.value = outputText.value;
      updateLive();
      showToast(dict().toastSwapped);
    });

    // Download Action
    btnDownload.addEventListener('click', function() {
      const val = outputText.value;
      if (!val) return;
      const blob = new Blob([val], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'converted.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 200);
      showToast(dict().toastDownloaded);
    });

    // Copy Result Action
    btnCopyResult.addEventListener('click', function() {
      const val = outputText.value;
      if (!val) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val).catch(function() {
          fallbackCopy(val);
        });
      } else {
        fallbackCopy(val);
      }

      btnCopyResult.classList.add('copied');
      copyResultLabel.textContent = dict().btnCopied;
      showToast(dict().toastCopied);
      setTimeout(function() {
        btnCopyResult.classList.remove('copied');
        copyResultLabel.textContent = dict().btnCopy;
      }, 2000);
    });

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    inputText.addEventListener('input', updateLive);

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

      updateLive();
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

    // Initialize with sample demonstration
    const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(savedLang);

    inputText.value = SAMPLE_TEXT;
    updateLive();

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
        "title": "Case Converter – Text Letter Case & URL Slugifier",
        "desc": "Transform text between uppercase, lowercase, camelCase, and clean URL slugs. String alterations process instantaneously in local memory without transmission."
    },
    "ar": {
        "title": "محول حالة الأحرف – تغيير حالة النص وصياغة الروابط",
        "desc": "حول نصوصك بين الحروف الكبيرة والصغيرة وصيغ camelCase وslugs للروابط بسرعة. تتم معالجة السلاسل النصية لحظياً على جهازك دون إرسالها خارج المتصفح."
    },
    "fr": {
        "title": "Convertisseur de Casse – Majuscules & Slugs URL",
        "desc": "Passez vos textes en majuscules, minuscules, camelCase et slugs d'URL optimisés. Les modifications de chaînes s'exécutent en local sans aucun stockage distant."
    },
    "it": {
        "title": "Convertitore Maiuscole e Minuscole – Slug URL e Testo",
        "desc": "Trasforma testo in maiuscolo, minuscolo, camelCase e genera slug URL per il web. La formattazione delle stringhe viene calcolata interamente nel browser."
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