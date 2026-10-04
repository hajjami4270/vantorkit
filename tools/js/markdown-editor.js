(function() {
    'use strict';

    // Sample Markdown Showcase Guide
    const SAMPLE_MARKDOWN = `# Welcome to VantorKit Markdown Editor \u2728

A fast, private, and live **Markdown editor** with split-screen preview and clean HTML export.

---

## 1. Typography & Formatting

You can write **bold text**, *italic text*, and ~~strikethrough text~~ easily.
Inline code looks like this: \`const answer = 42;\`.

> "Simplicity is prerequisite for reliability."
> \u2014 Edsger W. Dijkstra

---

## 2. Interactive Task List

- [x] Create a client-side Markdown editor
- [x] Support GitHub Flavored Markdown (GFM)
- [x] Auto-save content to local storage
- [ ] Share this awesome tool with fellow developers

---

## 3. Formatted Tables

| Feature | Support | Performance |
| :--- | :---: | :--- |
| **GFM Tables** | \u2705 Full | Sub-millisecond |
| **Syntax Highlighting** | \u2705 Ready | 100% Client-Side |
| **Zero Server Logs** | \u2705 Guaranteed | Completely Private |

---

## 4. Code Blocks with Syntax

\`\`\`javascript
// Live client-side calculation
function calculateReadingTime(words) {
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}

console.log("Estimated read time: " + calculateReadingTime(450) + " mins");
\`\`\`

---

## 5. Quick Links & Images

Visit [VantorKit Utility Suite](https://vantorkit.com) for fast, free, and privacy-first online web tools!`;

    // Internationalization dictionary
    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Text Tools \u2022 100% Client-Side \u2022 Split-Screen Live Preview',
        pageSubtitle: 'Write, preview, and format GitHub-flavored Markdown in real-time. Export clean semantic HTML, download documents, and enjoy offline browser auto-save with zero cloud telemetry.',
        saveStatusSaved: 'Saved locally',
        saveStatusSaving: 'Saving...',
        statWords: 'words',
        statChars: 'chars',
        statRead: 'read',
        tabEditor: '\u270f\ufe0f Edit',
        tabPreview: '\ud83d\udc41\ufe0f Preview',
        tabSplit: '\u2bf1 Split',
        syncScroll: '\u26a1 Sync Scroll',
        btnSample: 'Sample Guide',
        btnClear: 'Clear',
        btnCopyHtml: 'Copy HTML',
        btnCopied: 'Copied!',
        btnDownHtml: '.html',
        btnDownMd: '.md',
        paneEditorTitle: 'Markdown Source',
        panePreviewTitle: 'Live HTML Preview',
        badgeGfm: 'GitHub Flavored',
        guideHeading: 'Mastering Markdown & Semantic HTML',
        guideSub: 'Why developers, technical writers, and content teams choose Markdown for publishing.',
        cheatTitle: 'Markdown Syntax Quick Reference',
        thElement: 'Element',
        thSyntax: 'Markdown Syntax',
        thOutput: 'HTML Equivalent / Output',
        guide1Title: '1. Universal Portability',
        guide1Desc: 'Markdown is plain text that never locks you into proprietary binary formats. It transfers seamlessly across GitHub, GitLab, Notion, Slack, Static Site Generators (Next.js, Astro, Hugo), and headless CMS platforms.',
        guide2Title: '2. SEO & Clean Semantics',
        guide2Desc: 'Converting Markdown produces clean, unpolluted HTML without bloated inline styles or unnecessary wrapper divs. Search engine bots easily index headings, lists, and tables, boosting organic crawlability and accessibility scores.',
        guide3Title: '3. Zero-Cloud Privacy Guarantee',
        guide3Desc: 'Your drafts, proprietary source code, and private technical specifications never leave your local browser sandbox. Auto-saving operates via browser localStorage, meaning 100% offline capability with zero remote telemetry.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Does this tool upload my Markdown or HTML to any server?',
        faq1A: 'Never. All parsing, rendering, and auto-saving execute strictly inside your local browser memory. No network requests are made with your content.',
        faq2Q: 'What happens if I refresh the page or close my tab?',
        faq2A: 'Your content is protected by real-time local auto-save. When you reopen or refresh the page, your exact Markdown draft is instantly recovered.',
        faq3Q: 'How do I export the preview as an HTML file?',
        faq3A: 'Click the \'.html\' download button in the toolbar. VantorKit wraps your content with a clean HTML5 template and triggers an immediate download directly to your disk.',
        faq4Q: 'Can I use Tab to indent code and lists?',
        faq4A: 'Yes! The editor intercepts the Tab key to insert 2 spaces instead of shifting browser focus, and Shift+Tab unindents your selection seamlessly.',
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastCopiedHtml: '\u2705 HTML code copied to clipboard!',
        toastCopiedCode: '\u2705 Code block copied!',
        toastCleared: '\ud83d\uddd1\ufe0f Editor content cleared.',
        toastSample: '\ud83d\udcd6 Markdown sample guide loaded.',
        toastDownloadHtml: '\ud83d\udce5 Downloading document.html...',
        toastDownloadMd: '\ud83d\udce5 Downloading document.md...',
        confirmClear: 'Are you sure you want to clear the editor? Your current draft will be erased.'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2192 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0646\u0635\u0648\u0635 \u2022 100% \u0645\u062d\u0644\u064a\u0627\u064b \u2022 \u0645\u0639\u0627\u064a\u0646\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u062c\u0646\u0628\u0627\u064b \u0625\u0644\u0649 \u062c\u0646\u0628',
        pageSubtitle: '\u0627\u0643\u062a\u0628 \u0648\u0639\u0627\u064a\u0646 \u0648\u0646\u0633\u0651\u0642 \u0646\u0635\u0648\u0635 Markdown \u0628\u0634\u0643\u0644 \u0644\u062d\u0638\u064a. \u062a\u0635\u062f\u064a\u0631 \u0641\u0648\u0631\u064a \u0644\u0643\u0648\u062f HTML \u0646\u0638\u064a\u0641\u060c \u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062a\u060c \u0648\u062d\u0641\u0638 \u062a\u0644\u0642\u0627\u0626\u064a \u062f\u0627\u062e\u0644 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0628\u062f\u0648\u0646 \u0623\u064a \u062a\u0633\u062c\u064a\u0644 \u0633\u062d\u0627\u0628\u064a.',
        saveStatusSaved: '\u0645\u062d\u0641\u0648\u0638 \u0645\u062d\u0644\u064a\u0627\u064b',
        saveStatusSaving: '\u062c\u0627\u0631\u064d \u0627\u0644\u062d\u0641\u0638...',
        statWords: '\u0643\u0644\u0645\u0629',
        statChars: '\u062d\u0631\u0641',
        statRead: '\u0642\u0631\u0627\u0621\u0629',
        tabEditor: '\u270f\ufe0f \u062a\u062d\u0631\u064a\u0631',
        tabPreview: '\ud83d\udc41\ufe0f \u0645\u0639\u0627\u064a\u0646\u0629',
        tabSplit: '\u2bf1 \u062a\u0642\u0633\u064a\u0645',
        syncScroll: '\u26a1 \u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u062a\u0645\u0631\u064a\u0631',
        btnSample: '\u062f\u0644\u064a\u0644 \u062a\u062c\u0631\u064a\u0628\u064a',
        btnClear: '\u0645\u0633\u062d',
        btnCopyHtml: '\u0646\u0633\u062e HTML',
        btnCopied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e!',
        btnDownHtml: '.html',
        btnDownMd: '.md',
        paneEditorTitle: '\u0645\u0635\u062f\u0631 Markdown',
        panePreviewTitle: '\u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629',
        badgeGfm: '\u0645\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 GitHub',
        guideHeading: '\u062f\u0644\u064a\u0644 \u0627\u062d\u062a\u0631\u0627\u0641 Markdown \u0648\u062a\u0631\u0645\u064a\u0632 HTML',
        guideSub: '\u0644\u0645\u0627\u0630\u0627 \u064a\u0641\u0636\u0651\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u0648\u0646 \u0648\u0627\u0644\u0643\u062a\u0651\u0627\u0628 \u0644\u063a\u0629 Markdown \u0644\u0644\u0646\u0634\u0631 \u0627\u0644\u0631\u0642\u0645\u064a.',
        cheatTitle: '\u062c\u062f\u0648\u0644 \u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0635\u064a\u063a Markdown',
        thElement: '\u0627\u0644\u0639\u0646\u0635\u0631',
        thSyntax: '\u0635\u064a\u063a\u0629 Markdown',
        thOutput: '\u0627\u0644\u0645\u0643\u0627\u0641\u0626 \u0641\u064a HTML',
        guide1Title: '1. \u0645\u0631\u0648\u0646\u0629 \u0648\u062a\u0648\u0627\u0641\u0642 \u0634\u0627\u0645\u0644',
        guide1Desc: '\u0645\u0644\u0641\u0627\u062a Markdown \u0647\u064a \u0646\u0635\u0648\u0635 \u0635\u0631\u0641\u0629 \u0644\u0627 \u062a\u0642\u064a\u0651\u062f\u0643 \u0628\u0623\u064a \u0628\u0631\u0646\u0627\u0645\u062c \u0645\u063a\u0644\u0642\u060c \u0648\u062a\u0639\u0645\u0644 \u0628\u0633\u0644\u0627\u0633\u0629 \u0639\u0644\u0649 GitHub \u0648Notion \u0648\u0645\u0648\u0644\u062f\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062b\u0627\u0628\u062a\u0629.',
        guide2Title: '2. \u062a\u062d\u0633\u064a\u0646 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b SEO',
        guide2Desc: '\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u064a\u0646\u062a\u062c \u0643\u0648\u062f HTML \u0646\u0638\u064a\u0641\u0627\u064b \u0648\u062f\u0644\u0627\u0644\u064a\u0627\u064b \u062f\u0648\u0646 \u062a\u0639\u0642\u064a\u062f\u0627\u062a \u0623\u0648 \u0623\u0646\u0645\u0627\u0637 \u0645\u0636\u0645\u0646\u0629 \u0632\u0627\u0626\u062f\u0629\u060c \u0645\u0645\u0627 \u064a\u0633\u0647\u0651\u0644 \u0641\u0647\u0631\u0633\u062a\u0647.',
        guide3Title: '3. \u062e\u0635\u0648\u0635\u064a\u0629 \u062a\u0627\u0645\u0629 100%',
        guide3Desc: '\u0645\u0633\u0648\u062f\u0627\u062a\u0643 \u0648\u0645\u0644\u0627\u062d\u0638\u0627\u062a\u0643 \u0627\u0644\u0633\u0631\u064a\u0629 \u0644\u0627 \u062a\u063a\u0627\u062f\u0631 \u0645\u062a\u0635\u0641\u062d\u0643 \u0623\u0628\u062f\u0627\u064b. \u064a\u062a\u0645 \u0627\u0644\u062d\u0641\u0638 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0641\u064a \u0627\u0644\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u0645\u062d\u0644\u064a.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0647\u0644 \u064a\u062a\u0645 \u0631\u0641\u0639 \u0627\u0644\u0646\u0635 \u0625\u0644\u0649 \u062e\u0648\u0627\u062f\u0645 \u062e\u0627\u0631\u062c\u064a\u0629\u061f',
        faq1A: '\u0643\u0644\u0627 \u062a\u0645\u0627\u0645\u0627\u064b. \u062c\u0645\u064a\u0639 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0648\u0627\u0644\u062d\u0641\u0638 \u062a\u062a\u0645 \u062f\u0627\u062e\u0644 \u0630\u0627\u0643\u0631\u0629 \u0645\u062a\u0635\u0641\u062d\u0643.',
        faq2Q: '\u0645\u0627\u0630\u0627 \u064a\u062d\u062f\u062b \u0625\u0630\u0627 \u0623\u063a\u0644\u0642\u062a \u0627\u0644\u0635\u0641\u062d\u0629 \u0628\u0627\u0644\u062e\u0637\u0623\u061f',
        faq2A: '\u064a\u062a\u0645 \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0645\u062d\u062a\u0648\u0627\u0643 \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0641\u0648\u0631 \u0625\u0639\u0627\u062f\u0629 \u0641\u062a\u062d \u0627\u0644\u0635\u0641\u062d\u0629 \u0628\u0641\u0636\u0644 \u0627\u0644\u062d\u0641\u0638 \u0627\u0644\u0645\u062d\u0644\u064a.',
        faq3Q: '\u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u062a\u0646\u0632\u064a\u0644 \u0645\u0644\u0641 HTML\u061f',
        faq3A: '\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 \'.html\' \u0641\u064a \u0634\u0631\u064a\u0637 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0644\u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0645\u0633\u062a\u0642\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u062c\u0647\u0627\u0632\u0643.',
        faq4Q: '\u0647\u0644 \u064a\u062f\u0639\u0645 \u0627\u0644\u0645\u062d\u0631\u0631 \u0632\u0631 Tab \u0644\u0644\u0625\u0632\u0627\u062d\u0629\u061f',
        faq4A: '\u0646\u0639\u0645! \u064a\u062a\u0645 \u0625\u062f\u0631\u0627\u062c \u0645\u0633\u0627\u0641\u062a\u064a\u0646 \u0639\u0646\u062f \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 Tab \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u062a\u0631\u0643\u064a\u0632.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629. \u0643\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u062a\u062c\u0631\u064a \u0645\u062d\u0644\u064a\u0627\u064b.',
        toastCopiedHtml: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0643\u0648\u062f HTML \u0625\u0644\u0649 \u0627\u0644\u062d\u0627\u0641\u0638\u0629!',
        toastCopiedCode: '\u2705 \u062a\u0645 \u0646\u0633\u062e \u0627\u0644\u0643\u0648\u062f!',
        toastCleared: '\ud83d\uddd1\ufe0f \u062a\u0645 \u0645\u0633\u062d \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u062d\u0631\u0631.',
        toastSample: '\ud83d\udcd6 \u062a\u0645 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u062f\u0644\u064a\u0644 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a.',
        toastDownloadHtml: '\ud83d\udce5 \u062c\u0627\u0631\u064d \u062a\u0646\u0632\u064a\u0644 document.html...',
        toastDownloadMd: '\ud83d\udce5 \u062c\u0627\u0631\u064d \u062a\u0646\u0632\u064a\u0644 document.md...',
        confirmClear: '\u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u0631\u063a\u0628\u062a\u0643 \u0641\u064a \u0645\u0633\u062d \u0627\u0644\u0645\u062d\u0631\u0631\u061f \u0633\u064a\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0645\u0633\u0648\u062f\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629.'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux outils',
        brandBadge: 'Outils Texte \u2022 100% C\u00f4t\u00e9 Client \u2022 Aper\u00e7u Direct C\u00f4te \u00e0 C\u00f4te',
        pageSubtitle: '\u00c9crivez, pr\u00e9visualisez et formatez en Markdown en temps r\u00e9el. Exportez du HTML s\u00e9mantique propre, t\u00e9l\u00e9chargez vos documents et profitez de la sauvegarde automatique locale sans aucune t\u00e9l\u00e9m\u00e9trie.',
        saveStatusSaved: 'Enregistr\u00e9 localement',
        saveStatusSaving: 'Enregistrement...',
        statWords: 'mots',
        statChars: 'caract\u00e8res',
        statRead: 'lecture',
        tabEditor: '\u270f\ufe0f \u00c9diteur',
        tabPreview: '\ud83d\udc41\ufe0f Aper\u00e7u',
        tabSplit: '\u2bf1 Partag\u00e9',
        syncScroll: '\u26a1 D\u00e9filement synchro',
        btnSample: 'Guide d\'exemple',
        btnClear: 'Effacer',
        btnCopyHtml: 'Copier HTML',
        btnCopied: 'Copi\u00e9 !',
        btnDownHtml: '.html',
        btnDownMd: '.md',
        paneEditorTitle: 'Source Markdown',
        panePreviewTitle: 'Aper\u00e7u HTML en direct',
        badgeGfm: 'GitHub Flavored',
        guideHeading: 'Ma\u00eetriser le Markdown et l\'HTML S\u00e9mantique',
        guideSub: 'Pourquoi les d\u00e9veloppeurs et r\u00e9dacteurs privil\u00e9gient le Markdown pour la publication.',
        cheatTitle: 'Aide-m\u00e9moire Syntaxe Markdown',
        thElement: '\u00c9l\u00e9ment',
        thSyntax: 'Syntaxe Markdown',
        thOutput: '\u00c9quivalent HTML / Rendu',
        guide1Title: '1. Portabilit\u00e9 Universelle',
        guide1Desc: 'Le Markdown est du texte brut sans d\u00e9pendance proprietary. Il s\'int\u00e8gre naturellement sur GitHub, GitLab, Notion, Slack et les g\u00e9n\u00e9rateurs de sites statiques.',
        guide2Title: '2. SEO & S\u00e9mantique Propre',
        guide2Desc: 'L\'export g\u00e9n\u00e8re un HTML propre sans balises superflues ni styles inline lourds, ce qui am\u00e9liore l\'indexation par les moteurs de recherche.',
        guide3Title: '3. Confidentialit\u00e9 C\u00f4t\u00e9 Client',
        guide3Desc: 'Vos brouillons et documents restent confin\u00e9s dans la m\u00e9moire locale de votre navigateur. Aucune donn\u00e9e n\'est transmise sur un serveur distant.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Mon texte est-il envoy\u00e9 \u00e0 un serveur ?',
        faq1A: 'Non. Tout le traitement et le stockage s\'ex\u00e9cutent 100% localement dans votre navigateur web.',
        faq2Q: 'Que se passe-t-il si je ferme l\'onglet ?',
        faq2A: 'La sauvegarde automatique prot\u00e8ge votre contenu dans le stockage local de votre navigateur. Votre texte r\u00e9appara\u00eet \u00e0 la r\u00e9ouverture.',
        faq3Q: 'Comment t\u00e9l\u00e9charger le fichier HTML ?',
        faq3A: 'Cliquez sur le bouton \'.html\' dans la barre d\'outils pour r\u00e9cup\u00e9rer un document HTML5 complet et stylis\u00e9.',
        faq4Q: 'Puis-je utiliser la touche Tabulation ?',
        faq4A: 'Oui ! La touche Tab ins\u00e8re 2 espaces sans changer le focus du navigateur.',
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastCopiedHtml: '\u2705 Code HTML copi\u00e9 dans le presse-papiers !',
        toastCopiedCode: '\u2705 Bloc de code copi\u00e9 !',
        toastCleared: '\ud83d\uddd1\ufe0f Contenu effac\u00e9.',
        toastSample: '\ud83d\udcd6 Guide d\'exemple Markdown charg\u00e9.',
        toastDownloadHtml: '\ud83d\udce5 T\u00e9l\u00e9chargement de document.html...',
        toastDownloadMd: '\ud83d\udce5 T\u00e9l\u00e9chargement de document.md...',
        confirmClear: '\u00cates-vous s\u00fbr de vouloir effacer l\'\u00e9diteur ? Votre brouillon actuel sera supprim\u00e9.'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli strumenti',
        brandBadge: 'Strumenti Testo \u2022 100% Lato Client \u2022 Anteprima Affiancata',
        pageSubtitle: 'Scrivi, visualizza in anteprima e formatta Markdown in tempo reale. Esporta codice HTML pulito, scarica documenti e usufruisci del salvataggio automatico locale senza telemetria.',
        saveStatusSaved: 'Salvato localmente',
        saveStatusSaving: 'Salvataggio...',
        statWords: 'parole',
        statChars: 'caratteri',
        statRead: 'lettura',
        tabEditor: '\u270f\ufe0f Modifica',
        tabPreview: '\ud83d\udc41\ufe0f Anteprima',
        tabSplit: '\u2bf1 Diviso',
        syncScroll: '\u26a1 Scorrimento sincrono',
        btnSample: 'Guida di esempio',
        btnClear: 'Cancella',
        btnCopyHtml: 'Copia HTML',
        btnCopied: 'Copiato!',
        btnDownHtml: '.html',
        btnDownMd: '.md',
        paneEditorTitle: 'Sorgente Markdown',
        panePreviewTitle: 'Anteprima HTML dal vivo',
        badgeGfm: 'GitHub Flavored',
        guideHeading: 'Padroneggiare Markdown e HTML Semantico',
        guideSub: 'Perch\u00e9 sviluppatori e creatori scelgono Markdown per la pubblicazione digitale.',
        cheatTitle: 'Guida Rapida Sintassi Markdown',
        thElement: 'Elemento',
        thSyntax: 'Sintassi Markdown',
        thOutput: 'Equivalente HTML / Risultato',
        guide1Title: '1. Portabilit\u00e0 Universale',
        guide1Desc: 'Markdown \u00e8 testo semplice senza formati proprietari. Funziona perfettamente su GitHub, Notion, static site generator e CMS headless.',
        guide2Title: '2. SEO e Semantica Pulita',
        guide2Desc: 'La conversione produce HTML essenziale e semantico, ideale per l\'indicizzazione ottimale da parte dei motori di ricerca.',
        guide3Title: '3. Privacy 100% Lato Client',
        guide3Desc: 'I tuoi testi e appunti non escono mai dal browser locale. Il salvataggio sfrutta il localStorage per la massima sicurezza.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'I miei testi vengono caricati su un server?',
        faq1A: 'No. Tutte le elaborazioni avvengono esclusivamente all\'interno del tuo browser.',
        faq2Q: 'Cosa succede se chiudo o ricarico la pagina?',
        faq2A: 'Il salvataggio automatico conserva i tuoi testi nel localStorage, ripristinandoli alla prossima apertura.',
        faq3Q: 'Come posso scaricare il file HTML?',
        faq3A: 'Fai clic sul pulsante \'.html\' nella barra degli strumenti per salvare un file HTML5 completo.',
        faq4Q: 'Posso usare il tasto Tab?',
        faq4A: 'S\u00ec! Premendo Tab vengono inseriti 2 spazi senza perdere il focus dell\'editor.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastCopiedHtml: '\u2705 Codice HTML copiato negli appunti!',
        toastCopiedCode: '\u2705 Blocco di codice copiato!',
        toastCleared: '\ud83d\uddd1\ufe0f Contenuto cancellato.',
        toastSample: '\ud83d\udcd6 Esempio Markdown caricato.',
        toastDownloadHtml: '\ud83d\udce5 Download di document.html in corso...',
        toastDownloadMd: '\ud83d\udce5 Download di document.md in corso...',
        confirmClear: 'Sei sicuro di voler cancellare l\'editor? La bozza attuale verr\u00e0 eliminata.'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const panesWrapper = document.getElementById('panesWrapper');
    const markdownTextarea = document.getElementById('markdownTextarea');
    const previewBody = document.getElementById('previewBody');
    const lineCountBadge = document.getElementById('lineCountBadge');

    const autoSaveBadge = document.getElementById('autoSaveBadge');
    const saveStatusText = document.getElementById('saveStatusText');
    const statWords = document.getElementById('statWords');
    const statChars = document.getElementById('statChars');
    const statReadTime = document.getElementById('statReadTime');

    const chkSyncScroll = document.getElementById('chkSyncScroll');
    const btnSample = document.getElementById('btnSample');
    const btnClear = document.getElementById('btnClear');
    const btnCopyHtml = document.getElementById('btnCopyHtml');
    const copyHtmlLabel = document.getElementById('copyHtmlLabel');
    const btnDownloadHtml = document.getElementById('btnDownloadHtml');
    const btnDownloadMd = document.getElementById('btnDownloadMd');

    // Formatting Toolbar Buttons
    const btnBold = document.getElementById('btnBold');
    const btnItalic = document.getElementById('btnItalic');
    const btnStrike = document.getElementById('btnStrike');
    const btnH1 = document.getElementById('btnH1');
    const btnH2 = document.getElementById('btnH2');
    const btnH3 = document.getElementById('btnH3');
    const btnUl = document.getElementById('btnUl');
    const btnOl = document.getElementById('btnOl');
    const btnTask = document.getElementById('btnTask');
    const btnCode = document.getElementById('btnCode');
    const btnQuote = document.getElementById('btnQuote');
    const btnLink = document.getElementById('btnLink');
    const btnTable = document.getElementById('btnTable');
    const btnHr = document.getElementById('btnHr');

    const mobileTabs = document.getElementById('mobileTabs');
    const tabBtns = mobileTabs.querySelectorAll('.tab-btn');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    let currentLang = 'en';
    function dict() { return I18N[currentLang] || I18N.en; }

    let toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2400;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    // Configure marked options
    if (typeof marked !== 'undefined') {
      try {
        if (typeof marked.use === 'function') {
          marked.use({
            gfm: true,
            breaks: true
          });
        } else if (typeof marked.setOptions === 'function') {
          marked.setOptions({
            gfm: true,
            breaks: true
          });
        }
      } catch (e) {
        console.warn('Marked options error:', e);
      }
    }

    // Markdown Parser Wrapper (with built-in fallback)
    function renderMarkdownToHtml(mdText) {
      if (typeof marked !== 'undefined' && typeof marked.parse === 'function') {
        try {
          return marked.parse(mdText);
        } catch (err) {
          console.error('marked parse failed, falling back:', err);
        }
      }
      return fallbackMarkdownParse(mdText);
    }

    // Lightweight regex-based fallback parser
    function fallbackMarkdownParse(md) {
      if (!md) return '';
      let html = md
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Headers
      html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
      html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
      html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

      // Blockquotes
      html = html.replace(/^\> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

      // Bold & Italic & Strike
      html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
      html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
      html = html.replace(/~~(.*?)~~/gim, '<del>$1</del>');

      // Code blocks
      html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
      html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

      // Links & HR
      html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      html = html.replace(/^---$/gim, '<hr>');

      // Paragraphs
      return html.split(/\n\n+/).map(function(block) {
        if (/^<h[1-6]|<blockquote|<pre|<hr/.test(block.trim())) return block;
        return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
      }).join('\n');
    }

    // Text formatting helper
    function insertMarkdownFormatting(prefix, suffix, defaultText, isBlock) {
      const textarea = markdownTextarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;
      const selected = val.substring(start, end);

      let textToInsert = selected || defaultText;
      let newText = '';
      let newStart = 0;
      let newEnd = 0;

      if (isBlock) {
        const needsLeadingNewline = start > 0 && val[start - 1] !== '\n';
        const needsTrailingNewline = end < val.length && val[end] !== '\n';
        const lead = needsLeadingNewline ? '\n\n' : '';
        const trail = needsTrailingNewline ? '\n\n' : '';

        newText = val.substring(0, start) + lead + prefix + textToInsert + suffix + trail + val.substring(end);
        newStart = start + lead.length + prefix.length;
        newEnd = newStart + textToInsert.length;
      } else {
        newText = val.substring(0, start) + prefix + textToInsert + suffix + val.substring(end);
        newStart = start + prefix.length;
        newEnd = newStart + textToInsert.length;
      }

      textarea.value = newText;
      textarea.focus();
      textarea.setSelectionRange(newStart, newEnd);
      handleEditorChange();
    }

    // Line Prefix Helper (Headings, Lists, Quotes)
    function toggleLinePrefix(prefix) {
      const textarea = markdownTextarea;
      const start = textarea.selectionStart;
      const val = textarea.value;

      // Find start of current line
      let lineStart = val.lastIndexOf('\n', start - 1);
      lineStart = lineStart === -1 ? 0 : lineStart + 1;

      // If line already starts with prefix, remove it
      if (val.substring(lineStart, lineStart + prefix.length) === prefix) {
        textarea.value = val.substring(0, lineStart) + val.substring(lineStart + prefix.length);
        textarea.setSelectionRange(Math.max(lineStart, start - prefix.length), Math.max(lineStart, start - prefix.length));
      } else {
        // Strip other heading prefixes if adding heading
        let slice = val.substring(lineStart);
        let cleaned = slice.replace(/^#{1,6}\s+/, '');
        let diff = slice.length - cleaned.length;
        textarea.value = val.substring(0, lineStart) + prefix + cleaned;
        textarea.setSelectionRange(start - diff + prefix.length, start - diff + prefix.length);
      }

      textarea.focus();
      handleEditorChange();
    }

    // Attach Code Copy buttons to rendered <pre> blocks
    function enhancePreviewCodeBlocks() {
      const preBlocks = previewBody.querySelectorAll('pre');
      preBlocks.forEach(function(pre) {
        if (pre.querySelector('.code-copy-btn')) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'code-copy-btn';
        btn.textContent = 'Copy';
        btn.setAttribute('aria-label', 'Copy code snippet');
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const codeText = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
          copyTextToClipboard(codeText);
          btn.textContent = 'Copied!';
          showToast(dict().toastCopiedCode, 1800);
          setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
        });
        pre.appendChild(btn);
      });
    }

    // Debounced Auto-Save & Metric Update
    let saveTimeout;
    function handleEditorChange() {
      const text = markdownTextarea.value;
      const html = renderMarkdownToHtml(text);
      previewBody.innerHTML = html;
      enhancePreviewCodeBlocks();

      // Update Metrics
      const wordsArr = text.trim() ? text.trim().split(/\s+/).filter(Boolean) : [];
      const words = wordsArr.length;
      const chars = text.length;
      const readSeconds = Math.round((words / 200) * 60);

      statWords.textContent = words.toLocaleString();
      statChars.textContent = chars.toLocaleString();
      statReadTime.textContent = readSeconds < 60 ? (readSeconds + 's') : (Math.floor(readSeconds / 60) + 'm ' + (readSeconds % 60) + 's');

      // Line count
      const lines = text ? text.split('\n').length : 1;
      lineCountBadge.textContent = lines + (lines === 1 ? ' line' : ' lines');

      // Auto-save indication
      saveStatusText.textContent = dict().saveStatusSaving;
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(function() {
        try {
          localStorage.setItem('vantorkit_md_content', text);
          saveStatusText.textContent = dict().saveStatusSaved;
        } catch (e) {
          console.warn('localStorage save failed:', e);
        }
      }, 350);
    }

    // Synchronized Scroll Logic
    let isSyncingEditor = false;
    let isSyncingPreview = false;

    function syncEditorToPreview() {
      if (!chkSyncScroll.checked || isSyncingEditor) return;
      isSyncingPreview = true;
      const editorScrollable = markdownTextarea.scrollHeight - markdownTextarea.clientHeight;
      if (editorScrollable > 0) {
        const ratio = markdownTextarea.scrollTop / editorScrollable;
        const previewScrollable = previewBody.scrollHeight - previewBody.clientHeight;
        previewBody.scrollTop = ratio * previewScrollable;
      }
      setTimeout(function() { isSyncingPreview = false; }, 60);
    }

    function syncPreviewToEditor() {
      if (!chkSyncScroll.checked || isSyncingPreview) return;
      isSyncingEditor = true;
      const previewScrollable = previewBody.scrollHeight - previewBody.clientHeight;
      if (previewScrollable > 0) {
        const ratio = previewBody.scrollTop / previewScrollable;
        const editorScrollable = markdownTextarea.scrollHeight - markdownTextarea.clientHeight;
        markdownTextarea.scrollTop = ratio * editorScrollable;
      }
      setTimeout(function() { isSyncingEditor = false; }, 60);
    }

    markdownTextarea.addEventListener('scroll', syncEditorToPreview);
    previewBody.addEventListener('scroll', syncPreviewToEditor);

    // Tab key interception (2-space indent)
    markdownTextarea.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const val = this.value;

        if (e.shiftKey) {
          // Unindent
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          if (val.substring(lineStart, lineStart + 2) === '  ') {
            this.value = val.substring(0, lineStart) + val.substring(lineStart + 2);
            this.setSelectionRange(Math.max(lineStart, start - 2), Math.max(lineStart, end - 2));
            handleEditorChange();
          }
        } else {
          // Indent with 2 spaces
          this.value = val.substring(0, start) + '  ' + val.substring(end);
          this.setSelectionRange(start + 2, start + 2);
          handleEditorChange();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        btnBold.click();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        btnItalic.click();
      }
    });

    markdownTextarea.addEventListener('input', handleEditorChange);

    // Toolbar button bindings
    btnBold.addEventListener('click', function() {
      insertMarkdownFormatting('**', '**', 'bold text', false);
    });
    btnItalic.addEventListener('click', function() {
      insertMarkdownFormatting('*', '*', 'italic text', false);
    });
    btnStrike.addEventListener('click', function() {
      insertMarkdownFormatting('~~', '~~', 'strikethrough text', false);
    });
    btnH1.addEventListener('click', function() {
      toggleLinePrefix('# ');
    });
    btnH2.addEventListener('click', function() {
      toggleLinePrefix('## ');
    });
    btnH3.addEventListener('click', function() {
      toggleLinePrefix('### ');
    });
    btnUl.addEventListener('click', function() {
      toggleLinePrefix('- ');
    });
    btnOl.addEventListener('click', function() {
      toggleLinePrefix('1. ');
    });
    btnTask.addEventListener('click', function() {
      toggleLinePrefix('- [ ] ');
    });
    btnQuote.addEventListener('click', function() {
      toggleLinePrefix('> ');
    });
    btnCode.addEventListener('click', function() {
      const sel = markdownTextarea.value.substring(markdownTextarea.selectionStart, markdownTextarea.selectionEnd);
      if (sel.includes('\n')) {
        insertMarkdownFormatting('```javascript\n', '\n```', sel, true);
      } else {
        insertMarkdownFormatting('`', '`', sel || 'code', false);
      }
    });
    btnLink.addEventListener('click', function() {
      const sel = markdownTextarea.value.substring(markdownTextarea.selectionStart, markdownTextarea.selectionEnd);
      insertMarkdownFormatting('[', '](https://example.com)', sel || 'Link title', false);
    });
    btnTable.addEventListener('click', function() {
      const tableTmpl =
`| Header 1 | Header 2 | Header 3 |
| :--- | :---: | ---: |
| Item 1 | Center | $10.00 |
| Item 2 | Center | $25.00 |`;
      insertMarkdownFormatting('', '', tableTmpl, true);
    });
    btnHr.addEventListener('click', function() {
      insertMarkdownFormatting('\n\n---\n\n', '', '', true);
    });

    // Sample Guide Button
    btnSample.addEventListener('click', function() {
      markdownTextarea.value = SAMPLE_MARKDOWN;
      handleEditorChange();
      showToast(dict().toastSample);
    });

    // Clear Button with Confirmation
    btnClear.addEventListener('click', function() {
      if (!markdownTextarea.value) return;
      if (window.confirm(dict().confirmClear)) {
        markdownTextarea.value = '';
        handleEditorChange();
        try { localStorage.removeItem('vantorkit_md_content'); } catch (e) {}
        markdownTextarea.focus();
        showToast(dict().toastCleared);
      }
    });

    // Copy Clean HTML Action
    btnCopyHtml.addEventListener('click', function() {
      const htmlOutput = previewBody.innerHTML;
      if (!htmlOutput.trim()) return;

      // Clean out any temporary copy buttons from output
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlOutput;
      tempDiv.querySelectorAll('.code-copy-btn').forEach(function(b) { b.remove(); });
      const cleanHtml = tempDiv.innerHTML.trim();

      copyTextToClipboard(cleanHtml);
      btnCopyHtml.classList.add('copied');
      copyHtmlLabel.textContent = dict().btnCopied;
      showToast(dict().toastCopiedHtml);
      setTimeout(function() {
        btnCopyHtml.classList.remove('copied');
        copyHtmlLabel.textContent = dict().btnCopyHtml;
      }, 2000);
    });

    // Download .html file
    btnDownloadHtml.addEventListener('click', function() {
      const text = markdownTextarea.value;
      if (!text.trim()) return;

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = previewBody.innerHTML;
      tempDiv.querySelectorAll('.code-copy-btn').forEach(function(b) { b.remove(); });
      const bodyContent = tempDiv.innerHTML;

      const fullHtmlDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exported Markdown Document — VantorKit</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.65;
      max-width: 820px;
      margin: 40px auto;
      padding: 0 24px;
      color: #1e293b;
      background: #ffffff;
    }
    h1, h2, h3, h4, h5, h6 { color: #0f172a; margin-top: 1.5em; margin-bottom: 0.5em; }
    h1 { font-size: 2.2em; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.3em; }
    h2 { font-size: 1.6em; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.2em; }
    a { color: #2563eb; text-decoration: underline; }
    blockquote { border-left: 4px solid #3b82f6; margin: 1.2em 0; padding: 0.6em 1.2em; background: #eff6ff; color: #334155; }
    code { font-family: Consolas, Monaco, monospace; background: #f1f5f9; padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.88em; }
    pre { background: #0f172a; color: #f8fafc; padding: 1.2em; border-radius: 8px; overflow-x: auto; }
    pre code { background: none; color: inherit; padding: 0; }
    table { width: 100%; border-collapse: collapse; margin: 1.5em 0; }
    th, td { border: 1px solid #cbd5e1; padding: 8px 14px; text-align: left; }
    th { background: #f8fafc; font-weight: 700; }
    tr:nth-child(even) { background: #f8fafc; }
    img { max-width: 100%; height: auto; border-radius: 6px; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
  </style>
</head>
<body>
${bodyContent}
  <script src="../sidebar.js" defer><\/script>
</body>
</html>`;

      downloadBlob(fullHtmlDoc, 'document.html', 'text/html;charset=utf-8');
      showToast(dict().toastDownloadHtml);
    });

    // Download .md file
    btnDownloadMd.addEventListener('click', function() {
      const text = markdownTextarea.value;
      if (!text.trim()) return;
      downloadBlob(text, 'document.md', 'text/markdown;charset=utf-8');
      showToast(dict().toastDownloadMd);
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

    // Mobile Segmented Tab Controls
    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        tabBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        panesWrapper.className = 'editor-panes-wrapper mode-' + mode;
      });
    });

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

      // Update dynamic labels
      saveStatusText.textContent = d.saveStatusSaved;
      handleEditorChange();
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

    // Initialize Content from localStorage or Load Sample
    const savedContent = localStorage.getItem('vantorkit_md_content');
    if (savedContent !== null && savedContent.length > 0) {
      markdownTextarea.value = savedContent;
    } else {
      markdownTextarea.value = SAMPLE_MARKDOWN;
    }

    const savedLang = localStorage.getItem('vantorkit_lang') || 'en';
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
        "title": "Markdown Live Editor – Split Screen HTML Preview",
        "desc": "Draft and format Markdown documents with real-time split-screen HTML preview and syntax highlighting. Documents compile in browser memory with zero tracking."
    },
    "ar": {
        "title": "محرر ماركداون مباشر – معاينة فورية لكود HTML",
        "desc": "حرر مستندات ماركداون مع معاينة فورية مقسمة الشاشة لكود HTML وتظليل برمجي سلس. تُبنى صفحاتك ومستنداتك داخل ذاكرة المتصفح دون تعقب أو تخزين خارجي."
    },
    "fr": {
        "title": "Éditeur Markdown en Direct – Aperçu HTML Écran Scindé",
        "desc": "Rédigez et visualisez vos documents Markdown en temps réel avec aperçu HTML scindé et coloration. Le rendu syntaxique reste confiné dans la mémoire du client."
    },
    "it": {
        "title": "Editor Markdown Live – Anteprima HTML a Schermo Diviso",
        "desc": "Scrivi testi in formato Markdown con anteprima HTML simultanea a doppio riquadro. L'elaborazione del markup avviene nella sandbox del tuo browser personale."
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