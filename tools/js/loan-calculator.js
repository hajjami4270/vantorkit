(function() {
    'use strict';

    // Internationalization dictionary
    const I18N = {
      en: {
        langLabel: 'English',
        backLink: '\u2190 Back to Tools',
        brandBadge: 'Math & Finance \u2022 100% Client-Side \u2022 Visual Amortization Schedule',
        pageSubtitle: 'Calculate fixed-rate mortgage payments, visualize principal vs interest ratios, simulate extra payments to pay off debt early, and export full amortization schedules with zero cloud logging.',
        lblMonthlyPayment: 'Monthly Payment',
        subPrincipalInterest: 'Principal & Interest per month',
        lblTotalInterest: 'Total Interest Paid',
        lblTotalCost: 'Total Loan Cost',
        lblEarlyPayoff: 'Payoff Timeline',
        subOnSchedule: 'Standard payoff schedule',
        titleLoanDetails: 'Loan Parameters',
        lblLoanAmount: 'Loan Amount',
        lblInterestRate: 'Annual Interest Rate',
        lblLoanTerm: 'Loan Term',
        unitYears: 'Years',
        unitMonths: 'Months',
        lblExtraPayment: 'Extra Monthly Payment (Optional)',
        subDirectToPrincipal: 'Applied directly to principal',
        titleCostBreakdown: 'Payment Breakdown',
        lblTotalLoanCost: 'Total Cost',
        legPrincipal: 'Principal:',
        legInterest: 'Interest:',
        titleAmortizationSchedule: 'Amortization Schedule',
        viewAnnual: 'Annual Summary',
        viewMonthly: 'Monthly Breakdown',
        btnExportCsv: 'Export CSV',
        btnPrint: 'Print',
        thPeriod: 'Year',
        thPayment: 'Payment',
        thPrincipal: 'Principal Paid',
        thInterest: 'Interest Paid',
        thTotalInterest: 'Total Interest',
        thBalance: 'Ending Balance',
        guideHeading: 'How Loan & Mortgage Amortization Works',
        guideSub: 'Essential insights into interest curves, loan structures, and strategies to become debt-free faster.',
        guide1Title: '1. The Front-Loaded Interest Curve',
        guide1Desc: 'In the initial years of any fixed-rate mortgage, the vast majority of each payment covers interest rather than principal. As your outstanding balance decreases over time, an increasingly larger portion goes toward building home equity.',
        guide2Title: '2. The Power of Extra Principal Payments',
        guide2Desc: 'Adding even $100 or $200 per month directly to your principal reduces the balance upon which future interest is calculated. This creates a compounding savings effect, trimming years off your loan and saving tens of thousands of dollars.',
        guide3Title: '3. Complete Client-Side Confidentiality',
        guide3Desc: 'Your loan balances, household debt calculations, and personal mortgage projections never leave your web browser. All amortization engines run entirely locally with zero cookies, cloud storage, or external database logs.',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'How is my monthly payment calculated?',
        faq1A: 'We apply the standard fixed-rate amortization formula based on your loan principal, monthly interest rate, and total payments count, providing accurate estimates of principal and interest.',
        faq2Q: 'What is the difference between 15-year and 30-year mortgages?',
        faq2A: 'A 15-year loan has higher monthly payments but amortizes twice as fast, resulting in significantly lower lifetime interest costs. A 30-year loan offers lower monthly payments but accrues much more total interest.',
        faq3Q: 'How do extra payments shorten my loan?',
        faq3A: '100% of any extra monthly payment goes directly toward paying down principal debt. Because interest is charged on the remaining balance, reducing principal faster accelerates the entire payoff schedule.',
        faq4Q: 'Can I download the amortization schedule for my records?',
        faq4A: 'Yes! Click the \'Export CSV\' button to save a spreadsheet file, or use \'Print\' to generate a clean, printer-friendly PDF copy of your annual or monthly schedule.',
        footerText: '\u00a9 2026 VantorKit. Fast, Private & Free Web Utilities. All processing is performed locally in your browser.',
        toastExported: '\ud83d\udce5 Amortization schedule exported to CSV!',
        toastCopied: '\u2705 Values copied to clipboard!'
      },
      ar: {
        langLabel: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
        backLink: '\u2192 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u062f\u0648\u0627\u062a',
        brandBadge: '\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u2022 100% \u0645\u062d\u0644\u064a\u0627\u064b \u2022 \u062c\u062f\u0648\u0644 \u0633\u062f\u0627\u062f \u0627\u0644\u0642\u0631\u0648\u0636',
        pageSubtitle: '\u0627\u062d\u0633\u0628 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u0634\u0647\u0631\u064a\u0629 \u0644\u0644\u0642\u0631\u0648\u0636 \u0648\u0627\u0644\u062a\u0645\u0648\u064a\u0644 \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u060c \u0648\u0639\u0627\u064a\u0646 \u062a\u0648\u0632\u064a\u0639 \u0623\u0635\u0644 \u0627\u0644\u0645\u0628\u0644\u063a \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0641\u0627\u0626\u062f\u0629\u060c \u0648\u0627\u0643\u062a\u0634\u0641 \u062a\u0648\u0641\u064a\u0631 \u0627\u0644\u062f\u0641\u0639\u0627\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u064a\u0629.',
        lblMonthlyPayment: '\u0627\u0644\u0642\u0633\u0637 \u0627\u0644\u0634\u0647\u0631\u064a',
        subPrincipalInterest: '\u0623\u0635\u0644 \u0627\u0644\u0642\u0631\u0636 \u0648\u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0634\u0647\u0631\u064a\u0627\u064b',
        lblTotalInterest: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0641\u0627\u0626\u062f\u0629',
        lblTotalCost: '\u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a\u0629',
        lblEarlyPayoff: '\u0627\u0644\u062e\u0637 \u0627\u0644\u0632\u0645\u0646\u064a \u0644\u0644\u0633\u062f\u0627\u062f',
        subOnSchedule: '\u062c\u062f\u0648\u0644 \u0627\u0644\u0633\u062f\u0627\u062f \u0627\u0644\u0642\u064a\u0627\u0633\u064a',
        titleLoanDetails: '\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0642\u0631\u0636',
        lblLoanAmount: '\u0645\u0628\u0644\u063a \u0627\u0644\u0642\u0631\u0636',
        lblInterestRate: '\u0646\u0633\u0628\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0633\u0646\u0648\u064a\u0629',
        lblLoanTerm: '\u0645\u062f\u0629 \u0627\u0644\u0642\u0631\u0636',
        unitYears: '\u0633\u0646\u0648\u0627\u062a',
        unitMonths: '\u0623\u0634\u0647\u0631',
        lblExtraPayment: '\u062f\u0641\u0639\u0629 \u0634\u0647\u0631\u064a\u0629 \u0625\u0636\u0627\u0641\u064a\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)',
        subDirectToPrincipal: '\u062a\u064f\u062e\u0635\u0645 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0623\u0635\u0644 \u0627\u0644\u0642\u0631\u0636',
        titleCostBreakdown: '\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629',
        lblTotalLoanCost: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062a\u0643\u0644\u0641\u0629',
        legPrincipal: '\u0623\u0635\u0644 \u0627\u0644\u0642\u0631\u0636:',
        legInterest: '\u0627\u0644\u0641\u0627\u0626\u062f\u0629:',
        titleAmortizationSchedule: '\u062c\u062f\u0648\u0644 \u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0642\u0631\u0636 (Amortization)',
        viewAnnual: '\u0645\u0644\u062e\u0635 \u0633\u0646\u0648\u064a',
        viewMonthly: '\u062a\u0641\u0635\u064a\u0644 \u0634\u0647\u0631\u064a',
        btnExportCsv: '\u062a\u0635\u062f\u064a\u0631 CSV',
        btnPrint: '\u0637\u0628\u0627\u0639\u0629',
        thPeriod: '\u0627\u0644\u0633\u0646\u0629',
        thPayment: '\u0627\u0644\u0642\u0633\u0637',
        thPrincipal: '\u0627\u0644\u0645\u062f\u0641\u0648\u0639 \u0645\u0646 \u0627\u0644\u0623\u0635\u0644',
        thInterest: '\u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0629',
        thTotalInterest: '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0641\u0627\u0626\u062f\u0629',
        thBalance: '\u0627\u0644\u0631\u0635\u064a\u062f \u0627\u0644\u0645\u062a\u0628\u0642\u064a',
        guideHeading: '\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u062c\u062f\u0648\u0644 \u0633\u062f\u0627\u062f \u0627\u0644\u0642\u0631\u0648\u0636\u061f',
        guideSub: '\u062f\u0644\u064a\u0644\u0643 \u0627\u0644\u0634\u0627\u0645\u0644 \u0644\u0641\u0647\u0645 \u0645\u0646\u062d\u0646\u0649 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0648\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0627\u062a \u0627\u0644\u0633\u062f\u0627\u062f \u0627\u0644\u0645\u0628\u0643\u0631.',
        guide1Title: '1. \u0645\u0646\u062d\u0646\u0649 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0645\u062a\u0642\u062f\u0645',
        guide1Desc: '\u0641\u064a \u0627\u0644\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u0627\u0644\u0642\u0631\u0636\u060c \u064a\u0630\u0647\u0628 \u0627\u0644\u062c\u0632\u0621 \u0627\u0644\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0642\u0633\u0637 \u0644\u062a\u063a\u0637\u064a\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0623\u0635\u0644 \u0627\u0644\u0645\u0628\u0644\u063a.',
        guide2Title: '2. \u0642\u0648\u0629 \u0627\u0644\u062f\u0641\u0639\u0627\u062a \u0627\u0644\u0625\u0636\u0627\u0641\u064a\u0629',
        guide2Desc: '\u062f\u0641\u0639 \u0645\u0628\u0644\u063a \u0625\u0636\u0627\u0641\u064a \u0634\u0647\u0631\u064a\u0627\u064b \u064a\u062e\u0641\u0651\u0636 \u0623\u0635\u0644 \u0627\u0644\u062f\u064a\u0646 \u0645\u0628\u0627\u0634\u0631\u0629\u060c \u0645\u0645\u0627 \u064a\u062e\u062a\u0635\u0631 \u0633\u0646\u0648\u0627\u062a \u0637\u0648\u064a\u0644\u0629 \u0645\u0646 \u0641\u062a\u0631\u0629 \u0627\u0644\u0633\u062f\u0627\u062f \u0648\u064a\u0648\u0641\u0631 \u0645\u0628\u0627\u0644\u063a \u0637\u0627\u0626\u0644\u0629.',
        guide3Title: '3. \u062e\u0635\u0648\u0635\u064a\u0629 \u0645\u0627\u0644\u064a\u0629 \u0645\u062d\u0644\u064a\u0629 100%',
        guide3Desc: '\u0644\u0627 \u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0642\u0631\u0648\u0636\u0643 \u0623\u0648 \u062f\u062e\u0644\u0643 \u0625\u0644\u0649 \u0623\u064a \u062e\u0627\u062f\u0645 \u062e\u0627\u0631\u062c\u064a. \u062a\u062c\u0631\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a \u062f\u0627\u062e\u0644 \u0645\u062a\u0635\u0641\u062d\u0643 \u0641\u0642\u0637.',
        faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
        faq1Q: '\u0643\u064a\u0641 \u064a\u062d\u0633\u0628 \u0627\u0644\u0642\u0633\u0637 \u0627\u0644\u0634\u0647\u0631\u064a\u061f',
        faq1A: '\u0646\u0637\u0628\u0642 \u0645\u0639\u0627\u062f\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0645\u0635\u0631\u0641\u064a\u0629 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629 \u062f\u0648\u0644\u064a\u0627\u064b \u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u062b\u0627\u0628\u062a\u0629.',
        faq2Q: '\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u0642\u0631\u0636 15 \u0633\u0646\u0629 \u064830 \u0633\u0646\u0629\u061f',
        faq2A: '\u0642\u0631\u0636 15 \u0633\u0646\u0629 \u064a\u062a\u0637\u0644\u0628 \u0642\u0633\u0637\u0627\u064b \u0634\u0647\u0631\u064a\u0627\u064b \u0623\u0639\u0644\u0649\u060c \u0644\u0643\u0646\u0647 \u064a\u0648\u0641\u0631 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0646\u0635\u0641 \u062a\u0643\u0644\u0641\u0629 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a\u0629.',
        faq3Q: '\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u062a\u062d\u0645\u064a\u0644 \u062c\u062f\u0648\u0644 \u0627\u0644\u0633\u062f\u0627\u062f\u061f',
        faq3A: '\u0646\u0639\u0645! \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \'\u062a\u0635\u062f\u064a\u0631 CSV\' \u0644\u062d\u0641\u0638 \u0627\u0644\u062c\u062f\u0648\u0644 \u0641\u064a \u0645\u0644\u0641 \u0625\u0643\u0633\u0644\u060c \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0645 \u0632\u0631 \'\u0637\u0628\u0627\u0639\u0629\' \u0644\u062d\u0641\u0638\u0647 \u0643\u0645\u0644\u0641 PDF.',
        footerText: '\u00a9 2026 VantorKit. \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0633\u0631\u064a\u0639\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u062c\u0627\u0646\u064a\u0629.',
        toastExported: '\ud83d\udce5 \u062a\u0645 \u062a\u0635\u062f\u064a\u0631 \u062c\u062f\u0648\u0644 \u0627\u0644\u0633\u062f\u0627\u062f \u0625\u0644\u0649 CSV!'
      },
      fr: {
        langLabel: 'Fran\u00e7ais',
        backLink: '\u2190 Retour aux outils',
        brandBadge: 'Math & Finance \u2022 100% C\u00f4t\u00e9 Client \u2022 Tableau d\'Amortissement',
        pageSubtitle: 'Calculez vos mensualit\u00e9s d\'emprunt immobilier, visualisez la r\u00e9partition capital/int\u00e9r\u00eats, simulez les remboursements anticip\u00e9s et exportez votre \u00e9ch\u00e9ancier en CSV.',
        lblMonthlyPayment: 'Mensualit\u00e9 Estim\u00e9e',
        subPrincipalInterest: 'Capital & Int\u00e9r\u00eats par mois',
        lblTotalInterest: 'Total Int\u00e9r\u00eats Pay\u00e9s',
        lblTotalCost: 'Co\u00fbt Total du Pr\u00eat',
        lblEarlyPayoff: 'Dur\u00e9e de Remboursement',
        subOnSchedule: '\u00c9ch\u00e9ance standard',
        titleLoanDetails: 'Param\u00e8tres du Pr\u00eat',
        lblLoanAmount: 'Montant Emprunt\u00e9',
        lblInterestRate: 'Taux d\'Int\u00e9r\u00eat Annuel',
        lblLoanTerm: 'Dur\u00e9e du Pr\u00eat',
        unitYears: 'Ann\u00e9es',
        unitMonths: 'Mois',
        lblExtraPayment: 'Mensualit\u00e9 Suppl\u00e9mentaire (Optionnel)',
        subDirectToPrincipal: 'D\u00e9duite directement du capital',
        titleCostBreakdown: 'R\u00e9partition du Co\u00fbt',
        lblTotalLoanCost: 'Co\u00fbt Global',
        legPrincipal: 'Capital :',
        legInterest: 'Int\u00e9r\u00eats :',
        titleAmortizationSchedule: 'Tableau d\'Amortissement',
        viewAnnual: 'R\u00e9sum\u00e9 Annuel',
        viewMonthly: 'D\u00e9tail Mensuel',
        btnExportCsv: 'Exporter CSV',
        btnPrint: 'Imprimer',
        thPeriod: 'Ann\u00e9e',
        thPayment: 'Paiement',
        thPrincipal: 'Capital Rembours\u00e9',
        thInterest: 'Int\u00e9r\u00eat Pay\u00e9',
        thTotalInterest: 'Total Int\u00e9r\u00eats',
        thBalance: 'Capital Restant D\u00fb',
        guideHeading: 'Comprendre l\'Amortissement d\'un Emprunt Immobilier',
        guideSub: 'D\u00e9couvrez comment les int\u00e9r\u00eats d\u00e9gressifs et les remboursements anticip\u00e9s r\u00e9duisent vos dettes.',
        guide1Title: '1. La Courbe d\'Int\u00e9r\u00eats D\u00e9gressive',
        guide1Desc: 'Au d\u00e9but d\'un cr\u00e9dit \u00e0 taux fixe, la majeure partie de chaque mensualit\u00e9 r\u00e8gle les int\u00e9r\u00eats. Au fil du temps, la part remboursant le capital augmente r\u00e9guli\u00e8rement.',
        guide2Title: '2. L\'Impact des Remboursements Suppl\u00e9mentaires',
        guide2Desc: 'Chaque euro vers\u00e9 en compl\u00e9ment r\u00e9duit directement le capital restant d\u00fb, \u00e9vitant les int\u00e9r\u00eats futurs et raccourcissant la dur\u00e9e totale du cr\u00e9dit.',
        guide3Title: '3. Confidentialit\u00e9 Financi\u00e8re 100% Locale',
        guide3Desc: 'Vos montants d\'emprunt et calculs budg\u00e9taires restent strictement confin\u00e9s dans la m\u00e9moire de votre navigateur sans aucune transmission distante.',
        faqTitle: 'Foire Aux Questions',
        faq1Q: 'Comment est calcul\u00e9e la mensualit\u00e9 ?',
        faq1A: 'Nous appliquons la formule d\'amortissement bancaire standard \u00e0 mensualit\u00e9 constante.',
        faq2Q: 'Quelle diff\u00e9rence entre 15 ans et 30 ans ?',
        faq2A: 'Un pr\u00eat sur 15 ans demande des mensualit\u00e9s plus \u00e9lev\u00e9es mais divise par deux le co\u00fbt total des int\u00e9r\u00eats pay\u00e9s.',
        faq3Q: 'Puis-je exporter mon tableau d\'amortissement ?',
        faq3A: 'Oui ! Cliquez sur \'Exporter CSV\' pour obtenir un fichier tableur, ou \'Imprimer\' pour g\u00e9n\u00e9rer un document PDF propre.',
        footerText: '\u00a9 2026 VantorKit. Utilitaires web rapides, priv\u00e9s et gratuits.',
        toastExported: '\ud83d\udce5 Tableau d\'amortissement export\u00e9 en CSV !'
      },
      it: {
        langLabel: 'Italiano',
        backLink: '\u2190 Torna agli strumenti',
        brandBadge: 'Matematica & Finanza \u2022 100% Lato Client \u2022 Piano di Ammortamento',
        pageSubtitle: 'Calcola le rate del mutuo o prestito, visualizza la suddivisione tra quota capitale e interessi, scopri il risparmio dei pagamenti extra ed esporta il piano in CSV.',
        lblMonthlyPayment: 'Rata Mensile Stimata',
        subPrincipalInterest: 'Quota Capitale & Interessi al mese',
        lblTotalInterest: 'Totale Interessi Pagati',
        lblTotalCost: 'Costo Totale del Prestito',
        lblEarlyPayoff: 'Tempi di Estinzione',
        subOnSchedule: 'Piano di rimborso standard',
        titleLoanDetails: 'Parametri del Prestito',
        lblLoanAmount: 'Importo del Prestito',
        lblInterestRate: 'Tasso di Interesse Annuo',
        lblLoanTerm: 'Durata del Prestito',
        unitYears: 'Anni',
        unitMonths: 'Mesi',
        lblExtraPayment: 'Rata Extra Mensile (Opzionale)',
        subDirectToPrincipal: 'Applicata direttamente al capitale',
        titleCostBreakdown: 'Ripartizione dei Costi',
        lblTotalLoanCost: 'Costo Complessivo',
        legPrincipal: 'Capitale:',
        legInterest: 'Interessi:',
        titleAmortizationSchedule: 'Piano di Ammortamento',
        viewAnnual: 'Riepilogo Annuale',
        viewMonthly: 'Dettaglio Mensile',
        btnExportCsv: 'Esporta CSV',
        btnPrint: 'Stampa',
        thPeriod: 'Anno',
        thPayment: 'Rata',
        thPrincipal: 'Quota Capitale',
        thInterest: 'Quota Interessi',
        thTotalInterest: 'Totale Interessi',
        thBalance: 'Debito Residuo',
        guideHeading: 'Come Funziona l\'Ammortamento di Mutui e Prestiti',
        guideSub: 'Comprendi la curva degli interessi e come estinguere il debito prima del previsto.',
        guide1Title: '1. Ammortamento alla Francese',
        guide1Desc: 'Nei primi anni la maggior parte della rata \u00e8 composta da interessi. Con il passare del tempo la quota capitale aumenta costantemente.',
        guide2Title: '2. Il Vantaggio dei Pagamenti Anticipati',
        guide2Desc: 'Ogni pagamento extra riduce istantaneamente il capitale residuo, abbattendo gli interessi futuri e anticipando l\'estinzione del mutuo di anni.',
        guide3Title: '3. Riservatezza Finanziaria Assoluta',
        guide3Desc: 'I tuoi conteggi finanziari rimangono esclusivamente nel tuo browser senza alcuna trasmissione a server esterni.',
        faqTitle: 'Domande Frequenti',
        faq1Q: 'Come viene calcolata la rata del prestito?',
        faq1A: 'Applichiamo la classica formula matematica di ammortamento a rata costante (alla francese).',
        faq2Q: 'Posso scaricare il piano di ammortamento?',
        faq2A: 'Certamente! Fai clic su \'Esporta CSV\' per salvare il foglio di calcolo o usa \'Stampa\' per creare un PDF.',
        faq3Q: 'Cosa succede se verso pagamenti extra?',
        faq3A: 'I versamenti extra abbattono il debito residuo, riducendo sia gli interessi totali sia la durata del finanziamento.',
        footerText: '\u00a9 2026 VantorKit. Utilit\u00e0 web veloci, private e gratuite.',
        toastExported: '\ud83d\udce5 Piano di ammortamento esportato in CSV!'
      }
    };

    // DOM Elements
    const htmlRoot = document.getElementById('htmlRoot');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langMenu = document.getElementById('langMenu');
    const currentLangLabel = document.getElementById('currentLangLabel');
    const langOptions = document.querySelectorAll('.lang-option');

    const inputAmount = document.getElementById('inputAmount');
    const lblAmountFormatted = document.getElementById('lblAmountFormatted');
    const inputRate = document.getElementById('inputRate');
    const rangeRate = document.getElementById('rangeRate');
    const lblRateFormatted = document.getElementById('lblRateFormatted');
    const inputTerm = document.getElementById('inputTerm');
    const termSuffix = document.getElementById('termSuffix');
    const termUnitControl = document.getElementById('termUnitControl');
    const inputExtraPayment = document.getElementById('inputExtraPayment');

    const dispMonthlyPayment = document.getElementById('dispMonthlyPayment');
    const dispMonthlySub = document.getElementById('dispMonthlySub');
    const dispTotalInterest = document.getElementById('dispTotalInterest');
    const dispInterestPct = document.getElementById('dispInterestPct');
    const dispTotalCost = document.getElementById('dispTotalCost');
    const dispPayoffTime = document.getElementById('dispPayoffTime');
    const dispSavingsSub = document.getElementById('dispSavingsSub');

    const donutPrincipal = document.getElementById('donutPrincipal');
    const donutInterest = document.getElementById('donutInterest');
    const chartCenterCost = document.getElementById('chartCenterCost');
    const legendPrincipalVal = document.getElementById('legendPrincipalVal');
    const legendInterestVal = document.getElementById('legendInterestVal');
    const savingsCallout = document.getElementById('savingsCallout');
    const savingsTitle = document.getElementById('savingsTitle');
    const savingsDesc = document.getElementById('savingsDesc');
    const savingsTotal = document.getElementById('savingsTotal');

    const scheduleViewControl = document.getElementById('scheduleViewControl');
    const scheduleTableBody = document.getElementById('scheduleTableBody');
    const thPeriod = document.getElementById('thPeriod');
    const btnExportCsv = document.getElementById('btnExportCsv');
    const btnPrint = document.getElementById('btnPrint');

    const toastEl = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    let currentLang = 'en';
    let termUnit = 'years'; // 'years' or 'months'
    let scheduleView = 'annual'; // 'annual' or 'monthly'
    let cachedSchedule = null;

    function dict() { return I18N[currentLang] || I18N.en; }

    let toastTimer;
    function showToast(msg, dur) {
      dur = dur || 2400;
      toastMsg.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toastEl.classList.remove('show'); }, dur);
    }

    function formatCurrency(val) {
      return '$' + Number(val || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function formatCompactCurrency(val) {
      return '$' + Math.round(Number(val || 0)).toLocaleString();
    }

    // Core Financial Amortization Calculation
    function calculateLoan(principal, annualRate, totalMonths, extraMonthly) {
      principal = Math.max(1, principal);
      annualRate = Math.max(0, annualRate);
      totalMonths = Math.max(1, totalMonths);
      extraMonthly = Math.max(0, extraMonthly || 0);

      const r = (annualRate / 100) / 12;

      // Base monthly payment calculation
      const baseMonthly = r === 0 
        ? (principal / totalMonths) 
        : (principal * (r * Math.pow(1 + r, totalMonths))) / (Math.pow(1 + r, totalMonths) - 1);

      // Baseline without extra payment (for savings delta comparison)
      let baseInterest = 0;
      let bBalance = principal;
      for (let m = 1; m <= totalMonths && bBalance > 0.001; m++) {
        const int = bBalance * r;
        let princ = baseMonthly - int;
        if (princ > bBalance) princ = bBalance;
        bBalance -= princ;
        baseInterest += int;
      }

      // Actual schedule simulation (with extra payments)
      let balance = principal;
      let totalInterest = 0;
      let totalPrincipal = 0;
      const monthlySchedule = [];

      for (let m = 1; m <= (totalMonths * 2) && balance > 0.001; m++) {
        const interest = balance * r;
        let payment = baseMonthly + extraMonthly;
        let princ = payment - interest;

        if (princ > balance) {
          princ = balance;
          payment = princ + interest;
        }

        balance -= princ;
        totalInterest += interest;
        totalPrincipal += princ;

        monthlySchedule.push({
          month: m,
          payment: payment,
          principal: princ,
          interest: interest,
          totalInterestToDate: totalInterest,
          balance: Math.max(0, balance)
        });

        if (balance <= 0.001) break;
      }

      const totalPayments = monthlySchedule.length;
      const totalCost = principal + totalInterest;
      const interestSaved = Math.max(0, baseInterest - totalInterest);
      const monthsSaved = Math.max(0, totalMonths - totalPayments);

      return {
        baseMonthly,
        totalMonthlyWithExtra: baseMonthly + extraMonthly,
        totalPayments,
        totalInterest,
        totalCost,
        interestSaved,
        monthsSaved,
        monthlySchedule
      };
    }

    // Build Annual Summary from Monthly Schedule
    function buildAnnualSchedule(monthlySchedule) {
      const annual = [];
      let curYear = 1;
      let yearPayment = 0;
      let yearPrincipal = 0;
      let yearInterest = 0;
      let lastBal = 0;
      let cumInterest = 0;

      monthlySchedule.forEach(function(item, idx) {
        yearPayment += item.payment;
        yearPrincipal += item.principal;
        yearInterest += item.interest;
        lastBal = item.balance;
        cumInterest = item.totalInterestToDate;

        if ((idx + 1) % 12 === 0 || idx === monthlySchedule.length - 1) {
          annual.push({
            year: curYear++,
            payment: yearPayment,
            principal: yearPrincipal,
            interest: yearInterest,
            totalInterest: cumInterest,
            balance: lastBal
          });
          yearPayment = 0;
          yearPrincipal = 0;
          yearInterest = 0;
        }
      });
      return annual;
    }

    // Update SVG Donut Chart with smooth dash calculation
    function updateDonutChart(principal, totalInterest, totalCost) {
      const circumference = 2 * Math.PI * 70; // ~439.82
      chartCenterCost.textContent = formatCompactCurrency(totalCost);

      if (totalCost <= 0) {
        donutPrincipal.setAttribute('stroke-dasharray', `0 ${circumference}`);
        donutInterest.setAttribute('stroke-dasharray', `0 ${circumference}`);
        return;
      }

      const pPct = principal / totalCost;
      const iPct = totalInterest / totalCost;

      const pDash = pPct * circumference;
      const iDash = iPct * circumference;

      // Principal starts at top (offset 0)
      donutPrincipal.setAttribute('stroke-dasharray', `${pDash} ${circumference}`);
      donutPrincipal.setAttribute('stroke-dashoffset', '0');

      // Interest starts right where principal ends
      donutInterest.setAttribute('stroke-dasharray', `${iDash} ${circumference}`);
      donutInterest.setAttribute('stroke-dashoffset', `${-pDash}`);

      legendPrincipalVal.textContent = `${formatCompactCurrency(principal)} (${(pPct * 100).toFixed(1)}%)`;
      legendInterestVal.textContent = `${formatCompactCurrency(totalInterest)} (${(iPct * 100).toFixed(1)}%)`;
    }

    // Render Table
    function renderTable(calcResult) {
      scheduleTableBody.innerHTML = '';

      if (scheduleView === 'annual') {
        thPeriod.textContent = dict().thPeriod || 'Year';
        const annualData = buildAnnualSchedule(calcResult.monthlySchedule);

        annualData.forEach(function(row) {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>Year ${row.year}</strong></td>
            <td>${formatCurrency(row.payment)}</td>
            <td class="cell-principal">+${formatCurrency(row.principal)}</td>
            <td class="cell-interest">-${formatCurrency(row.interest)}</td>
            <td>${formatCurrency(row.totalInterest)}</td>
            <td><strong>${formatCurrency(row.balance)}</strong></td>
          `;
          scheduleTableBody.appendChild(tr);
        });
      } else {
        thPeriod.textContent = 'Month';
        calcResult.monthlySchedule.forEach(function(row) {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>#${row.month}</td>
            <td>${formatCurrency(row.payment)}</td>
            <td class="cell-principal">+${formatCurrency(row.principal)}</td>
            <td class="cell-interest">-${formatCurrency(row.interest)}</td>
            <td>${formatCurrency(row.totalInterestToDate)}</td>
            <td><strong>${formatCurrency(row.balance)}</strong></td>
          `;
          scheduleTableBody.appendChild(tr);
        });
      }
    }

    // Main Recalculate Controller
    function recalculate() {
      const principal = parseFloat(inputAmount.value) || 0;
      const rate = parseFloat(inputRate.value) || 0;
      const termVal = parseFloat(inputTerm.value) || 1;
      const extraPayment = parseFloat(inputExtraPayment.value) || 0;

      const totalMonths = termUnit === 'years' ? Math.round(termVal * 12) : Math.round(termVal);

      // Label syncs
      lblAmountFormatted.textContent = formatCompactCurrency(principal);
      lblRateFormatted.textContent = rate.toFixed(2) + '%';
      rangeRate.value = rate;

      const res = calculateLoan(principal, rate, totalMonths, extraPayment);
      cachedSchedule = res;

      // Dashboard cards
      dispMonthlyPayment.textContent = formatCurrency(res.baseMonthly);
      if (extraPayment > 0) {
        dispMonthlySub.textContent = `Includes $${extraPayment.toFixed(0)} extra ($${res.totalMonthlyWithExtra.toFixed(2)} total)`;
      } else {
        dispMonthlySub.textContent = dict().subPrincipalInterest;
      }

      dispTotalInterest.textContent = formatCompactCurrency(res.totalInterest);
      const intPct = res.totalCost > 0 ? ((res.totalInterest / res.totalCost) * 100).toFixed(1) : 0;
      dispInterestPct.textContent = `${intPct}% of total loan cost`;

      dispTotalCost.textContent = formatCompactCurrency(res.totalCost);

      // Payoff timeline
      const yearsPayoff = Math.floor(res.totalPayments / 12);
      const monthsRemainder = res.totalPayments % 12;
      dispPayoffTime.textContent = monthsRemainder > 0 ? `${yearsPayoff}y ${monthsRemainder}m` : `${yearsPayoff} Years`;

      if (extraPayment > 0 && res.monthsSaved > 0) {
        const yrsSaved = Math.floor(res.monthsSaved / 12);
        const mosSaved = res.monthsSaved % 12;
        const timeStr = yrsSaved > 0 ? `${yrsSaved}y ${mosSaved}m` : `${mosSaved} mos`;
        dispSavingsSub.textContent = `Pay off ${timeStr} earlier!`;
        savingsCallout.style.display = 'flex';
        savingsTitle.textContent = `Accelerated Payoff Benefit (${timeStr} saved):`;
        savingsDesc.textContent = "You will save " + formatCompactCurrency(res.interestSaved) + " in interest charges";
        savingsTotal.textContent = `${formatCompactCurrency(res.interestSaved)} Saved`;
      } else {
        dispSavingsSub.textContent = dict().subOnSchedule;
        savingsCallout.style.display = 'none';
      }

      // Chart & Schedule Table
      updateDonutChart(principal, res.totalInterest, res.totalCost);
      renderTable(res);
    }

    // CSV Export Handler
    btnExportCsv.addEventListener('click', function() {
      if (!cachedSchedule || !cachedSchedule.monthlySchedule.length) return;

      const headers = ['"Payment #"', '"Payment Amount"', '"Principal Paid"', '"Interest Paid"', '"Total Interest Paid"', '"Remaining Balance"'];
      const rows = cachedSchedule.monthlySchedule.map(function(r) {
        return [
          r.month,
          r.payment.toFixed(2),
          r.principal.toFixed(2),
          r.interest.toFixed(2),
          r.totalInterestToDate.toFixed(2),
          r.balance.toFixed(2)
        ].join(',');
      });

      const csvContent = headers.join(',') + '\n' + rows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'loan-amortization-schedule.csv';
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 200);
      showToast(dict().toastExported);
    });

    // Print Handler
    btnPrint.addEventListener('click', function() {
      window.print();
    });

    // Preset Buttons Listeners
    document.querySelectorAll('.btn-preset[data-val]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        inputAmount.value = btn.dataset.val;
        recalculate();
      });
    });

    document.querySelectorAll('.btn-preset[data-rate]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        inputRate.value = btn.dataset.rate;
        recalculate();
      });
    });

    document.querySelectorAll('.btn-preset[data-term]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (termUnit === 'months') {
          inputTerm.value = parseInt(btn.dataset.term, 10) * 12;
        } else {
          inputTerm.value = btn.dataset.term;
        }
        recalculate();
      });
    });

    document.querySelectorAll('.btn-preset[data-extra]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        inputExtraPayment.value = btn.dataset.extra;
        recalculate();
      });
    });

    // Term Unit (Years vs Months) Toggle
    termUnitControl.querySelectorAll('.segmented-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        termUnitControl.querySelectorAll('.segmented-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const prevUnit = termUnit;
        termUnit = btn.dataset.unit;
        const curVal = parseFloat(inputTerm.value) || 30;

        if (prevUnit === 'years' && termUnit === 'months') {
          inputTerm.value = Math.round(curVal * 12);
          termSuffix.textContent = 'Mos';
        } else if (prevUnit === 'months' && termUnit === 'years') {
          inputTerm.value = Math.max(1, Math.round(curVal / 12));
          termSuffix.textContent = 'Yrs';
        }
        recalculate();
      });
    });

    // Schedule View (Annual vs Monthly) Toggle
    scheduleViewControl.querySelectorAll('.segmented-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        scheduleViewControl.querySelectorAll('.segmented-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        scheduleView = btn.dataset.view;
        if (cachedSchedule) renderTable(cachedSchedule);
      });
    });

    // Input events
    inputAmount.addEventListener('input', recalculate);
    inputRate.addEventListener('input', recalculate);
    rangeRate.addEventListener('input', function() {
      inputRate.value = this.value;
      recalculate();
    });
    inputTerm.addEventListener('input', recalculate);
    inputExtraPayment.addEventListener('input', recalculate);

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

      recalculate();
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
    recalculate();

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
        "title": "Loan & Mortgage Calculator – Track Payoff Schedules",
        "desc": "Estimate monthly principal and interest fees with early payoff strategies. Detailed amortization schedules calculate securely inside your browser."
    },
    "ar": {
        "title": "حاسبة القروض والتمويل العقاري – جدول سداد الأقساط",
        "desc": "احسب أقساط القروض العقارية والشخصية وحجم الفوائد وخيارات السداد المبكر. يتم احتساب جدول الاستهلاك بالكامل داخل متصفحك مع حفظ سرية أرقامك."
    },
    "fr": {
        "title": "Calculateur de Prêt & Crédit – Tableaux d'Amortissement",
        "desc": "Estimez vos mensualités d'emprunt et vos gains en remboursement anticipé. L'échéancier se génère instantanément sans transfert de données."
    },
    "it": {
        "title": "Calcolatore Mutui e Prestiti – Piano di Ammortamento",
        "desc": "Calcola rate mensili, quota capitale e risparmi sui rimborsi anticipati. I piani di ammortamento si generano offline nella memoria del browser."
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