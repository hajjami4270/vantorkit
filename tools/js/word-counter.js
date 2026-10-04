(function() {
    'use strict';

    // Multilingual stop words to filter out common grammar words from keyword density
    const STOP_WORDS = new Set([
      // English
      'the','be','to','of','and','a','in','that','have','i','it','for','not','on','with',
      'he','as','you','do','at','this','but','his','by','from','they','we','say','her',
      'she','or','an','will','my','one','all','would','there','their','what','so','up',
      'out','if','about','who','get','which','go','me','when','make','can','like','time',
      'no','just','him','know','take','people','into','year','your','good','some','could',
      'them','see','other','than','then','now','look','only','come','its','over','think',
      'also','back','after','use','two','how','our','work','first','well','way','even',
      'new','want','because','any','these','give','day','most','us','is','are','was',
      'were','been','has','had','more','very','much','such',
      // French
      'le','la','les','de','du','des','un','une','et','en','que','qui','dans','ce','pour',
      'pas','sur','se','plus','par','avec','tout','faire','son','autre','on','mais','nous',
      'comme','ou','si','leur','elle','deux','même','aussi','votre','notre','sont','est',
      // Italian
      'il','la','le','gli','uno','una','di','da','con','su','per','tra','fra','ma','che',
      'chi','cui','non','se','come','quando','dove','perché','io','tu','lui','lei','noi',
      'voi','loro','questo','quello','sono','era','stato','del','della','dei',
      // Arabic
      'في','من','على','إلى','عن','مع','هذا','هذه','تم','أن','إن','كان','كانت','هو','هي',
      'هم','هن','لا','ما','لم','لن','كل','بعد','قبل','غير','حيث','أو','ثم','حتى','قد',
      'بين','خلال','نحو','ذلك','تلك','عبر','عند','كما','فإن','التي','الذي','الذين'
    ]);

    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Text Tools \u2022 100% Client-Side \u2022 Real-Time Analytics',
        pageSubtitle: 'Count words, characters, sentences, paragraphs, and reading times in real-time. Transform case, clean excess whitespace, and inspect keyword density with zero cloud uploads.',
        statWords: 'Total Words',
        statChars: 'Characters',
        statSentences: 'Sentences',
        statParagraphs: 'Paragraphs',
        statReadingTime: 'Reading Time',
        statAvgWordLen: 'avg char/word',
        statReadingEase: 'Reading Ease: ',
        liveAnalysis: 'Live Analysis Active',
        btnPaste: 'Paste',
        btnCopy: 'Copy Text',
        btnCopied: 'Copied!',
        btnClear: 'Clear',
        btnClean: 'Clean Spaces',
        btnLoadSample: 'Load Sample Text',
        densityTitle: 'Top Keywords & Density',
        chkStopWords: 'Filter Stop Words',
        densityEmpty: 'Start typing or paste text to inspect top keyword frequencies.',
        limitsTitle: 'Social & SEO Limits',
        guideHeading: 'How Word Count & Reading Pace Work',
        guideSub: 'Professional benchmarks for writers, marketers, speechmakers, and content creators.',
        guide1Title: '1. Reading & Speaking Speeds',
        guide1Desc: 'Average adult silent reading pace sits at 200–250 words per minute. For spoken speeches, presentations, or video voiceovers, professional speakers maintain a measured cadence of 130–150 words per minute.',
        guide2Title: '2. Keyword Density Best Practice',
        guide2Desc: 'Search engine algorithms evaluate keyword relevance without favoring artificial stuffing. Aim for primary keyword densities between 1.0% and 2.5% to ensure strong topical authority while preserving natural readability.',
        guide3Title: '3. Zero Data Upload Guarantee',
        guide3Desc: 'Unlike remote cloud counters, every character typed in VantorKit stays in local memory. Confidential drafts, legal contracts, and unpublished manuscripts are never stored or transmitted to external servers.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Does this tool save or upload my text?',
        faq1A: 'No. All character analysis and keyword counts run purely in client-side JavaScript. Nothing is sent over the internet or logged to any database.',
        faq2Q: 'What counts as a word?',
        faq2A: "Any continuous string of alphanumeric characters separated by whitespace or punctuation is counted as a word. Hyphenated compound words like 'client-side' count as a single token.",
        faq3Q: 'How are sentences identified?',
        faq3A: 'Sentences are segmented by terminal punctuation marks (periods, exclamation points, question marks, and Arabic question marks) followed by whitespace or line breaks.',
        faq4Q: 'What does the Clean Spaces button do?',
        faq4A: 'Clean Spaces removes redundant multiple spaces, converts tabs to spaces, trims line-ending spaces, and collapses excessive empty blank lines into neat paragraph breaks.',
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastCopied: '\u2705 Text copied to clipboard!',
        toastCleared: '\u{1f5d1}\ufe0f Text cleared.',
        toastCleaned: '\u2728 Spaces and lines formatted!',
        toastSample: '\u{1f4d6} Sample article text loaded.'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2190 \u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0646\u0635\u0648\u0635 \u2022 \u0645\u0639\u0627\u0644\u062c\u0629 \u0645\u062d\u0644\u064a\u0629 100% \u2022 \u062a\u062d\u0644\u064a\u0644 \u0641\u0648\u0631\u064a',
        pageSubtitle: '\u0627\u062d\u0633\u0628 \u0639\u062f\u062f \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0648\u0627\u0644\u0623\u062d\u0631\u0641 \u0648\u0627\u0644\u062c\u0645\u0644 \u0648\u0627\u0644\u0641\u0642\u0631\u0627\u062a \u0648\u0648\u0642\u062a \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0645\u0628\u0627\u0634\u0631\u0629. \u062a\u062d\u0648\u064a\u0644 \u062d\u0627\u0644\u0629 \u0627\u0644\u0623\u062d\u0631\u0641 \u0648\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u062f\u0648\u0646 \u0631\u0641\u0639 \u0623\u064a \u0628\u064a\u0627\u0646\u0627\u062a.',
        statWords: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0643\u0644\u0645\u0627\u062a',
        statChars: '\u0627\u0644\u0623\u062d\u0631\u0641',
        statSentences: '\u0627\u0644\u062c\u0645\u0644',
        statParagraphs: '\u0627\u0644\u0641\u0642\u0631\u0627\u062a',
        statReadingTime: '\u0648\u0642\u062a \u0627\u0644\u0642\u0631\u0627\u0621\u0629',
        statAvgWordLen: '\u0645\u062a\u0648\u0633\u0637 \u062d\u0631\u0641/\u0643\u0644\u0645\u0629',
        statReadingEase: '\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629: ',
        liveAnalysis: '\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0646\u0634\u0637',
        btnPaste: '\u0644\u0635\u0642',
        btnCopy: '\u0646\u0633\u062e \u0627\u0644\u0646\u0635',
        btnCopied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!',
        btnClear: '\u0645\u0633\u062d',
        btnClean: '\u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a',
        btnLoadSample: '\u0646\u0635 \u062a\u062c\u0631\u064a\u0628\u064a',
        densityTitle: '\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0623\u0643\u062b\u0631 \u062a\u0643\u0631\u0627\u0631\u0627\u064b \u0648\u0627\u0644\u0643\u062b\u0627\u0641\u0629',
        chkStopWords: '\u062a\u062c\u0627\u0647\u0644 \u062d\u0631\u0648\u0641 \u0627\u0644\u0631\u0628\u0637',
        densityEmpty: '\u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0623\u0648 \u0627\u0644\u0644\u0635\u0642 \u0644\u0639\u0631\u0636 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0627\u062d\u064a\u0629.',
        limitsTitle: '\u062d\u062f\u0648\u062f \u0627\u0644\u0645\u0646\u0635\u0627\u062a \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062a',
        guideHeading: '\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u062d\u0633\u0627\u0628 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0648\u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629',
        guideSub: '\u0645\u0639\u0627\u064a\u064a\u0631 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629 \u0644\u0644\u0643\u062a\u0627\u0628 \u0648\u0627\u0644\u0645\u0633\u0648\u0642\u064a\u0646 \u0648\u0635\u0646\u0627\u0639 \u0627\u0644\u0645\u062d\u062a\u0648\u0649.',
        guide1Title: '1. \u0633\u0631\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0627\u0644\u0625\u0644\u0642\u0627\u0621',
        guide1Desc: '\u064a\u0628\u0644\u063a \u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0627\u0645\u062a\u0629 \u0644\u0644\u0628\u0627\u0644\u063a\u064a\u0646 200 \u0625\u0644\u0649 250 \u0643\u0644\u0645\u0629 \u0628\u0627\u0644\u062f\u0642\u064a\u0642\u0629\u060c \u0628\u064a\u0646\u0645\u0627 \u064a\u0628\u0644\u063a \u0645\u0639\u062f\u0644 \u0627\u0644\u0625\u0644\u0642\u0627\u0621 \u0648\u0627\u0644\u062e\u0637\u0627\u0628\u0629 130 \u0625\u0644\u0649 150 \u0643\u0644\u0645\u0629 \u0628\u0627\u0644\u062f\u0642\u064a\u0642\u0629.',
        guide2Title: '2. \u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0645\u0641\u062a\u0627\u062d\u064a\u0629 (SEO)',
        guide2Desc: '\u062a\u064f\u0641\u0636\u0644 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b \u0643\u062b\u0627\u0641\u0629 \u0628\u064a\u0646 1% \u0648 2.5% \u0644\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u062a\u062c\u0646\u0628 \u0627\u0644\u062d\u0634\u0648 \u063a\u064a\u0631 \u0627\u0644\u0637\u0628\u064a\u0639\u064a.',
        guide3Title: '3. \u062e\u0635\u0648\u0635\u064a\u0629 \u0645\u062d\u0644\u064a\u0629 \u0643\u0627\u0645\u0644\u0629',
        guide3Desc: '\u0639\u0644\u0649 \u0639\u0643\u0633 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0633\u062d\u0627\u0628\u064a\u0629\u060c \u064a\u0628\u0642\u0649 \u0646\u0635\u0643 \u062f\u0627\u062e\u0644 \u0630\u0627\u0643\u0631\u0629 \u0645\u062a\u0635\u0641\u062d\u0643 \u062f\u0648\u0646 \u0623\u0646 \u064a\u063a\u0627\u062f\u0631 \u062c\u0647\u0627\u0632\u0643 \u0625\u0637\u0644\u0627\u0642\u0627\u064b.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0647\u0644 \u064a\u062a\u0645 \u062d\u0641\u0638 \u0623\u0648 \u0631\u0641\u0639 \u0646\u0635\u064a \u0625\u0644\u0649 \u062e\u0648\u0627\u062f\u0645\u061f',
        faq1A: '\u0644\u0627. \u062a\u062a\u0645 \u062c\u0645\u064a\u0639 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0645\u062d\u0644\u064a\u0627\u064b 100% \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643.',
        faq2Q: '\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u064f\u0639\u062a\u0628\u0631 \u0643\u0644\u0645\u0629\u061f',
        faq2A: '\u0623\u064a \u062a\u062a\u0627\u0628\u0639 \u0645\u0646 \u0627\u0644\u0623\u062d\u0631\u0641 \u062a\u0641\u0635\u0644\u0647 \u0645\u0633\u0627\u0641\u0627\u062a \u0623\u0648 \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u0631\u0642\u064a\u0645 \u064a\u064f\u062d\u0633\u0628 \u0643\u0644\u0645\u0629 \u0648\u0627\u062d\u062f\u0629.',
        faq3Q: '\u0643\u064a\u0641 \u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u062c\u0645\u0644\u061f',
        faq3A: '\u064a\u062a\u0645 \u062a\u062d\u062f\u064a\u062f \u0627\u0644\u062c\u0645\u0644 \u0639\u0628\u0631 \u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u0648\u0642\u0641 \u0645\u062b\u0644 \u0627\u0644\u0646\u0642\u0637\u0629 \u0648\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0627\u0633\u062a\u0641\u0647\u0627\u0645 \u0648\u0627\u0644\u062a\u0639\u062c\u0628.',
        faq4Q: '\u0645\u0627\u0630\u0627 \u064a\u0641\u0639\u0644 \u0632\u0631 \u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a\u061f',
        faq4A: '\u064a\u0632\u064a\u0644 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u0627\u0644\u0645\u0632\u062f\u0648\u062c\u0629 \u0648\u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u0641\u064a \u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0633\u0637\u0648\u0631 \u0648\u064a\u062f\u0645\u062c \u0627\u0644\u0633\u0637\u0648\u0631 \u0627\u0644\u0641\u0627\u0631\u063a\u0629 \u0627\u0644\u0645\u062a\u062a\u0627\u0644\u064a\u0629.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629\u060c \u062e\u0627\u0635\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629.',
        toastCopied: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0627\u0644\u0646\u0635 \u0625\u0644\u0649 \u0627\u0644\u062d\u0627\u0641\u0638\u0629!',
        toastCleared: '\u{1f5d1}\ufe0f \u062a\u0645 \u0645\u0633\u062d \u0627\u0644\u0646\u0635.',
        toastCleaned: '\u2728 \u062a\u0645 \u062a\u0646\u0638\u064a\u0641 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062a \u0648\u0627\u0644\u0633\u0637\u0648\u0631!',
        toastSample: '\u{1f4d6} \u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a.'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux Outils',
        brandBadge: 'Outils Texte \u2022 100% C\u00f4t\u00e9 Client \u2022 Analyse en Direct',
        pageSubtitle: 'Comptez les mots, caract\u00e8res, phrases, paragraphes et temps de lecture en direct. Convertissez la casse et analysez la densit\u00e9 sans aucun upload.',
        statWords: 'Total Mots',
        statChars: 'Caract\u00e8res',
        statSentences: 'Phrases',
        statParagraphs: 'Paragraphes',
        statReadingTime: 'Temps de Lecture',
        statAvgWordLen: 'caract\u00e8res/mot en moyenne',
        statReadingEase: 'Lisibilit\u00e9: ',
        liveAnalysis: 'Analyse en Direct Active',
        btnPaste: 'Coller',
        btnCopy: 'Copier',
        btnCopied: 'Copi\u00e9 !',
        btnClear: 'Effacer',
        btnClean: 'Nettoyer espaces',
        btnLoadSample: 'Texte d\u2019exemple',
        densityTitle: 'Mots-Cl\u00e9s & Densit\u00e9',
        chkStopWords: 'Filtrer mots vides',
        densityEmpty: 'Saisissez du texte pour voir la fr\u00e9quence des mots-cl\u00e9s.',
        limitsTitle: 'Limites R\u00e9seaux & SEO',
        guideHeading: 'Comment Fonctionnent le D\u00e9compte et la Vitesse de Lecture',
        guideSub: 'Normes professionnelles pour r\u00e9dacteurs, orateurs et cr\u00e9ateurs.',
        guide1Title: '1. Vitesses de Lecture & Parole',
        guide1Desc: 'La lecture silencieuse tourne autour de 200 \u00e0 250 mots/minute. Pour une pr\u00e9sentation orale ou un podcast, le d\u00e9bit moyen se situe \u00e0 130–150 mots/minute.',
        guide2Title: '2. Bonnes Pratiques de Densit\u00e9 SEO',
        guide2Desc: 'Une densit\u00e9 de 1% \u00e0 2,5% pour les mots-cl\u00e9s principaux optimise la pertinence sans risque de p\u00e9nalit\u00e9 de bourrage de mots-cl\u00e9s.',
        guide3Title: '3. Confidentialit\u00e9 100% Locale',
        guide3Desc: 'Vos brouillons confidentiels, manuscrits et contrats ne quittent jamais votre machine. Tout est calcul\u00e9 en local.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Mon texte est-il enregistr\u00e9 sur un serveur ?',
        faq1A: "Non. Tout s'ex\u00e9cute en JavaScript dans votre navigateur, sans aucun stockage externe.",
        faq2Q: "Qu'est-ce qui est consid\u00e9r\u00e9 comme un mot ?",
        faq2A: "Toute s\u00e9quence de caract\u00e8res s\u00e9par\u00e9e par des espaces ou de la ponctuation est comptabilis\u00e9e comme un mot.",
        faq3Q: 'Comment les phrases sont-elles d\u00e9tect\u00e9es ?',
        faq3A: 'Par la ponctuation terminale (. ! ?) suivie d’un espace ou d’un saut de ligne.',
        faq4Q: 'Que fait le bouton Nettoyer ?',
        faq4A: 'Il supprime les espaces doubles, les tabulations superflues et r\u00e9duit les lignes vides excessives.',
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastCopied: '\u2705 Texte copi\u00e9 !',
        toastCleared: '\u{1f5d1}\ufe0f Texte effac\u00e9.',
        toastCleaned: '\u2728 Espaces et lignes nettoy\u00e9s !',
        toastSample: '\u{1f4d6} Texte d\u2019exemple charg\u00e9.'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli Strumenti',
        brandBadge: 'Strumenti Testo \u2022 100% Lato Client \u2022 Analisi in Tempo Reale',
        pageSubtitle: 'Conta parole, caratteri, frasi, paragrafi e tempi di lettura in tempo reale. Converti maiuscole/minuscole e controlla la densit\u00e0 delle parole chiave.',
        statWords: 'Totale Parole',
        statChars: 'Caratteri',
        statSentences: 'Frasi',
        statParagraphs: 'Paragrafi',
        statReadingTime: 'Tempo di Lettura',
        statAvgWordLen: 'media caratteri/parola',
        statReadingEase: 'Leggibilit\u00e0: ',
        liveAnalysis: 'Analisi in Tempo Reale Attiva',
        btnPaste: 'Incolla',
        btnCopy: 'Copia',
        btnCopied: 'Copiato!',
        btnClear: 'Cancella',
        btnClean: 'Pulisci spazi',
        btnLoadSample: 'Testo di esempio',
        densityTitle: 'Parole Chiave & Densit\u00e0',
        chkStopWords: 'Filtra stop words',
        densityEmpty: 'Inizia a digitare o incolla del testo per vedere le parole pi\u00f9 frequenti.',
        limitsTitle: 'Limiti Social & SEO',
        guideHeading: 'Come Funzionano il Conteggio Parole e il Ritmo di Lettura',
        guideSub: 'Riferimenti professionali per scrittori, copywriter e oratori.',
        guide1Title: '1. Velocit\u00e0 di Lettura & Discorso',
        guide1Desc: 'La lettura silenziosa media per un adulto \u00e8 di 200–250 parole al minuto. Per un discorso o podcast il ritmo scende a 130–150 parole al minuto.',
        guide2Title: '2. Densit\u00e0 Parole Chiave SEO',
        guide2Desc: 'Una densit\u00e0 dell’1%–2,5% per le parole chiave primarie garantisce rilevanza senza rischiare penalizzazioni per sovraottimizzazione.',
        guide3Title: '3. Massima Privacy Locale',
        guide3Desc: 'A differenza dei contatori cloud, nessun testo lascia mai il tuo browser. I tuoi documenti rimangono privati al 100%.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'Il mio testo viene salvato su un server?',
        faq1A: 'No. Tutta l’elaborazione avviene in locale nel tuo browser.',
        faq2Q: 'Cosa viene considerato una parola?',
        faq2A: 'Qualsiasi sequenza di caratteri alfanumerici separata da spazi o punteggiatura.',
        faq3Q: 'Come vengono identificate le frasi?',
        faq3A: 'Dalla punteggiatura finale (. ! ?) seguita da spazio o a capo.',
        faq4Q: 'Cosa fa il pulsante Pulisci Spazi?',
        faq4A: 'Rimuove spazi doppi, spazi a fine riga e collassa righe vuote superflue.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastCopied: '\u2705 Testo copiato negli appunti!',
        toastCleared: '\u{1f5d1}\ufe0f Testo cancellato.',
        toastCleaned: '\u2728 Spazi e righe ripuliti!',
        toastSample: '\u{1f4d6} Testo di esempio caricato.'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const textInput = document.getElementById('textInput');
    const btnPaste = document.getElementById('btnPaste');
    const btnCopyText = document.getElementById('btnCopyText');
    const copyTextLabel = document.getElementById('copyTextLabel');
    const btnClear = document.getElementById('btnClear');
    const btnUpper = document.getElementById('btnUpper');
    const btnLower = document.getElementById('btnLower');
    const btnTitleCase = document.getElementById('btnTitleCase');
    const btnSentenceCase = document.getElementById('btnSentenceCase');
    const btnCleanSpaces = document.getElementById('btnCleanSpaces');
    const btnLoadSample = document.getElementById('btnLoadSample');

    const statWords = document.getElementById('statWords');
    const statChars = document.getElementById('statChars');
    const statCharsNoSpaces = document.getElementById('statCharsNoSpaces');
    const statSentences = document.getElementById('statSentences');
    const statParagraphs = document.getElementById('statParagraphs');
    const statReadingTime = document.getElementById('statReadingTime');
    const statSpeakingTime = document.getElementById('statSpeakingTime');
    const statAvgWordLen = document.getElementById('statAvgWordLen');
    const statAvgWordsSentence = document.getElementById('statAvgWordsSentence');
    const statReadingEase = document.getElementById('statReadingEase');

    const chkFilterStopWords = document.getElementById('chkFilterStopWords');
    const densityList = document.getElementById('densityList');

    const limitX = document.getElementById('limitX');
    const fillX = document.getElementById('fillX');
    const limitTitle = document.getElementById('limitTitle');
    const fillTitle = document.getElementById('fillTitle');
    const limitMeta = document.getElementById('limitMeta');
    const fillMeta = document.getElementById('fillMeta');
    const limitInsta = document.getElementById('limitInsta');
    const fillInsta = document.getElementById('fillInsta');
    const limitLinkedIn = document.getElementById('limitLinkedIn');
    const fillLinkedIn = document.getElementById('fillLinkedIn');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    let currentLang = 'en';

    function dict() { return I18N[currentLang] || I18N.en; }

    let toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2500;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    function formatDuration(totalSeconds) {
      if (totalSeconds < 60) return totalSeconds + 's';
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return s > 0 ? (m + 'm ' + s + 's') : (m + 'm');
    }

    // Main text analysis function
    function updateMetrics() {
      const text = textInput.value || '';
      const chars = text.length;
      const charsNoSpaces = text.replace(/\s/g, '').length;

      // Words count (unicode-friendly, filtering out punctuation-only and symbol-only tokens)
      const trimmed = text.trim();
      const wordsArr = trimmed ? trimmed.split(/\s+/).filter(function(w) { return /[\p{L}\p{N}]/u.test(w); }) : [];
      const words = wordsArr.length;

      // Sentences: period, exclamation, question mark, or arabic question mark
      const sentencesArr = trimmed ? text.split(/[.!?؟]+(?:\s+|$)/).filter(function(s) { return s.trim().length > 0; }) : [];
      const sentences = sentencesArr.length;

      // Paragraphs: non-empty chunks separated by newlines
      const parasArr = text.split(/\n+/).filter(function(p) { return p.trim().length > 0; });
      const paragraphs = parasArr.length;

      // Reading (200 wpm) & Speaking (130 wpm)
      const readSec = Math.round((words / 200) * 60);
      const speakSec = Math.round((words / 130) * 60);

      // Average word length
      const avgWordLength = words > 0 ? (charsNoSpaces / words).toFixed(1) : '0.0';
      const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : '0.0';

      // Simple Flesch reading ease estimation
      let readingEaseStr = '—';
      if (words >= 15 && sentences >= 1) {
        // approximate syllables: count vowels in words
        let totalSyllables = 0;
        wordsArr.forEach(function(w) {
          const match = w.match(/[aeiouyàáâäèéêëìíîïòóôöùúûü]/gi);
          totalSyllables += match ? Math.max(1, match.length) : 1;
        });
        const asl = words / sentences;
        const asw = totalSyllables / words;
        const score = 206.835 - (1.015 * asl) - (84.6 * asw);
        if (score >= 80) readingEaseStr = 'Very Easy';
        else if (score >= 65) readingEaseStr = 'Easy';
        else if (score >= 50) readingEaseStr = 'Standard';
        else if (score >= 30) readingEaseStr = 'Difficult';
        else readingEaseStr = 'Very Academic';
      }

      // Render stats
      statWords.textContent = words.toLocaleString();
      statChars.textContent = chars.toLocaleString();
      statCharsNoSpaces.textContent = charsNoSpaces.toLocaleString() + ' without spaces';
      statSentences.textContent = sentences.toLocaleString();
      statParagraphs.textContent = paragraphs.toLocaleString();
      statReadingTime.textContent = formatDuration(readSec);
      statSpeakingTime.textContent = 'Speech: ' + formatDuration(speakSec) + ' (130 wpm)';
      statAvgWordLen.textContent = avgWordLength + ' avg char/word';
      statAvgWordsSentence.textContent = avgWordsPerSentence + ' words/sentence';
      statReadingEase.textContent = dict().statReadingEase + readingEaseStr;

      // Update Social / SEO constraints
      updateConstraint(chars, 280, limitX, fillX);
      updateConstraint(chars, 60, limitTitle, fillTitle);
      updateConstraint(chars, 160, limitMeta, fillMeta);
      updateConstraint(chars, 2200, limitInsta, fillInsta);
      updateConstraint(chars, 3000, limitLinkedIn, fillLinkedIn);

      // Update Keyword density
      updateKeywordDensity(wordsArr);
    }

    function updateConstraint(current, limit, labelEl, fillEl) {
      labelEl.textContent = current.toLocaleString() + ' / ' + limit.toLocaleString();
      const pct = Math.min(100, Math.round((current / limit) * 100));
      fillEl.style.width = pct + '%';

      if (current > limit) {
        labelEl.classList.add('over');
        fillEl.classList.add('over');
      } else {
        labelEl.classList.remove('over');
        fillEl.classList.remove('over');
      }
    }

    function updateKeywordDensity(wordsArr) {
      if (wordsArr.length === 0) {
        densityList.innerHTML = '<div class="density-empty">' + dict().densityEmpty + '</div>';
        return;
      }

      const filterStop = chkFilterStopWords.checked;
      const cleanTokens = wordsArr.map(function(w) {
        return w.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
      }).filter(function(w) {
        return w.length > 1;
      });

      const counts = {};
      let validCount = 0;

      cleanTokens.forEach(function(w) {
        if (filterStop && STOP_WORDS.has(w)) return;
        counts[w] = (counts[w] || 0) + 1;
        validCount++;
      });

      const sorted = Object.keys(counts).map(function(k) {
        return { word: k, count: counts[k] };
      }).sort(function(a, b) {
        return b.count - a.count;
      }).slice(0, 6);

      if (sorted.length === 0) {
        densityList.innerHTML = '<div class="density-empty">' + dict().densityEmpty + '</div>';
        return;
      }

      const maxCount = sorted[0].count;
      densityList.innerHTML = '';

      sorted.forEach(function(item, idx) {
        const percent = ((item.count / wordsArr.length) * 100).toFixed(1);
        const barWidth = Math.min(100, Math.round((item.count / maxCount) * 100));

        const row = document.createElement('div');
        row.className = 'density-item';
        row.innerHTML =
          '<div class="density-word-box">' +
            '<span class="density-badge">#' + (idx + 1) + '</span>' +
            '<span class="density-word-text" title="' + escapeHtml(item.word) + '">' + escapeHtml(item.word) + '</span>' +
          '</div>' +
          '<div class="density-bar-wrap">' +
            '<div class="density-bar-fill" style="width:' + barWidth + '%"></div>' +
          '</div>' +
          '<div class="density-stats">' + item.count + ' (' + percent + '%)</div>';
        densityList.appendChild(row);
      });
    }

    function escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Transformations
    btnUpper.addEventListener('click', function() {
      if (!textInput.value) return;
      textInput.value = textInput.value.toUpperCase();
      updateMetrics();
      showToast('Transformed to UPPERCASE');
    });

    btnLower.addEventListener('click', function() {
      if (!textInput.value) return;
      textInput.value = textInput.value.toLowerCase();
      updateMetrics();
      showToast('Transformed to lowercase');
    });

    btnTitleCase.addEventListener('click', function() {
      if (!textInput.value) return;
      textInput.value = textInput.value.toLowerCase().replace(/(?:^|\s|[(\[{/\\-])\S/g, function(c) {
        return c.toUpperCase();
      });
      updateMetrics();
      showToast('Transformed to Title Case');
    });

    btnSentenceCase.addEventListener('click', function() {
      if (!textInput.value) return;
      textInput.value = textInput.value.toLowerCase().replace(/(^\s*|[.!?؟]\s+)([a-z\u00E0-\u00FF\u0100-\u017F\u0600-\u06FF])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
      });
      updateMetrics();
      showToast('Transformed to Sentence case');
    });

    btnCleanSpaces.addEventListener('click', function() {
      if (!textInput.value) return;
      // Collapse multiple spaces or tabs into one, trim end of lines, collapse 3+ newlines to 2
      textInput.value = textInput.value
        .replace(/[^\S\r\n]+/g, ' ')
        .replace(/[^\S\r\n]+$/gm, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
      updateMetrics();
      showToast(dict().toastCleaned);
    });

    // Sample Text
    btnLoadSample.addEventListener('click', function() {
      textInput.value = "Content strategy and search engine optimization depend fundamentally on high-quality writing, balanced keyword density, and clear narrative structure.\n\nWhen readers land on your webpage, they expect immediate value without friction. Average adult reading speed sits at approximately 200 to 250 words per minute. If an article takes four minutes to read, it should deliver actionable insights within 800 words.\n\nDigital tools like VantorKit calculate character lengths, sentences, and speaking durations completely client-side in the browser. Zero bytes leave your machine, guaranteeing that sensitive product plans, legal agreements, and corporate announcements remain private.";
      updateMetrics();
      showToast(dict().toastSample);
    });

    // Clear
    btnClear.addEventListener('click', function() {
      textInput.value = '';
      updateMetrics();
      textInput.focus();
      showToast(dict().toastCleared);
    });

    // Copy Text
    btnCopyText.addEventListener('click', function() {
      if (!textInput.value) return;
      copyToClipboard(textInput.value);
      btnCopyText.classList.add('success-copy');
      copyTextLabel.textContent = dict().btnCopied;
      showToast(dict().toastCopied);
      setTimeout(function() {
        btnCopyText.classList.remove('success-copy');
        copyTextLabel.textContent = dict().btnCopy;
      }, 2000);
    });

    // Paste
    btnPaste.addEventListener('click', function() {
      if (navigator.clipboard && navigator.clipboard.readText) {
        navigator.clipboard.readText().then(function(text) {
          if (text) {
            textInput.value = text;
            updateMetrics();
            showToast('Pasted from clipboard');
          }
        }).catch(function() {
          textInput.focus();
          showToast('Please press Ctrl+V to paste');
        });
      } else {
        textInput.focus();
        showToast('Please press Ctrl+V to paste');
      }
    });

    function copyToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function() {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    }

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

    // Input event
    textInput.addEventListener('input', updateMetrics);
    chkFilterStopWords.addEventListener('change', updateMetrics);

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

      updateMetrics();
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

    // Initialize
    const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
    setLanguage(savedLang);
    updateMetrics();
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
        "title": "Word Counter – Character Count & Reading Time Stats",
        "desc": "Count words, characters, sentences, and estimated reading time as you type. Text frequency calculations run instantaneously in local memory with total secrecy."
    },
    "ar": {
        "title": "عداد الكلمات والحروف – زمن القراءة وإحصاء النص",
        "desc": "احسب عدد الكلمات والحروف والفقرات ومعدل وقت القراءة والإلقاء أثناء الكتابة مباشرة. تحسب المؤشرات النصية فورياً في متصفحك دون نقل المحتوى لأي خوادم."
    },
    "fr": {
        "title": "Compteur de Mots – Caractères & Temps de Lecture",
        "desc": "Mesurez le nombre de mots, caractères, phrases et temps de lecture pendant votre saisie. Les statistiques textuelles se calculent localement dans votre session."
    },
    "it": {
        "title": "Conteggio Parole – Caratteri e Tempo di Lettura",
        "desc": "Calcola all'istante numero di vocaboli, caratteri, frasi e tempi stimati di lettura. L'analisi frequenziale del testo opera in RAM sul tuo dispositivo."
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