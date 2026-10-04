/* ==========================================================================
       VantorKit Discount & Sales Tax Calculation Engine
       100% Client-Side with Multi-Language Support
       ========================================================================== */

    const TRANSLATIONS = {
      en: {
        backLink: "← Back to Tools",
        badgePill: "Client-Side • Privacy-First • No Logs",
        toolTitle: "Discount & Sales Tax Calculator",
        toolSubtitle: "Calculate final price savings, stacked promo codes, and sales tax or VAT with live interactive breakdowns and reverse original price estimation.",
        tabStandard: "Standard Calculator",
        tabReverse: "Reverse Calculator (Work Backwards)",
        panelInputTitle: "Pricing & Discounts",
        lblOrigPrice: "Original Sticker Price",
        subOrigPrice: "Before discounts",
        lblPrimaryDiscount: "Primary Discount",
        lblStackedTitle: "Stacked Extra Discount (VIP / Promo)",
        lblExtraRate: "Additional Discount Rate",
        subStackedCompound: "Compounded after 1st discount",
        lblTaxRate: "Sales Tax / VAT Rate",
        subTaxApplied: "Applied to discounted subtotal",
        lblFinalPrice: "Final Amount to Pay",
        lblTotalSavings: "Total Savings",
        lblTaxAmount: "Estimated Tax",
        lblVisualBreakdown: "Price Share Breakdown",
        legSavings: "Discount:",
        legSubtotal: "Subtotal:",
        legTax: "Tax:",
        lblReceiptTitle: "Itemized Checkout Receipt",
        recOrigPrice: "Original Sticker Price:",
        recPrimaryDisc: "Primary Discount:",
        recStackedDisc: "Stacked VIP Discount:",
        recSubtotal: "Discounted Subtotal:",
        recTax: "Sales Tax:",
        recTotal: "Total Amount Due:",
        btnCopyReceipt: "Copy Receipt",
        btnPrintReceipt: "Print / PDF",
        revPanelTitle: "Reverse Discount Solver",
        revHelpText: "Know how much you paid at checkout and the discount percentage? Enter your receipt numbers below to uncover the original sticker price.",
        revLblFinalPaid: "Final Total Amount Paid",
        revLblDiscount: "Known Discount Rate (%)",
        revLblTax: "Known Sales Tax Rate (%)",
        revLblOriginalSticker: "Original Sticker Price Was",
        revSubPreTaxSavings: "Direct price reduction",
        revMathTitle: "Mathematical Derivation",
        revFormula1: "Pre-Tax Subtotal = Paid / (1 + Tax)",
        revFormula2: "Original Price = Subtotal / (1 - Discount)",
        revNetBenefit: "Total Financial Benefit:",
        guideHeading: "Smart Shopping: Understanding Discounts & Sales Taxes",
        guideSubheading: "Master the financial formulas behind retail sales, multi-coupon stacking, and reverse pricing calculations.",
        g1Title: "The Truth About Stacked Discounts",
        g1Desc: "Shoppers often assume that stacking a 20% sale with an extra 20% coupon equals 40% off. In retail point-of-sale systems, discounts are compounded: the second discount applies to the remaining balance. A $100 item drops to $80, and 20% of $80 is $16, resulting in a $64 final price (36% net discount, not 40%).",
        g2Title: "Sales Tax vs. VAT Rules",
        g2Desc: "US sales taxes are added at checkout on the discounted subtotal. In contrast, European and Middle Eastern VAT (typically 15%–20%) is legally included in the shelf display price. Our calculator gives you full visibility into both pre-tax value and the exact tax dollars incurred.",
        g3Title: "100% Confidential In-Browser",
        g3Desc: "Your budgets, purchase amounts, and pricing analyses remain strictly private. Calculations run 100% on your device inside your browser's local JavaScript runtime. No prices or receipts are ever transmitted to any server or logged in cookies.",
        faq1Q: "How do I calculate a percentage discount manually?",
        faq1A: "To calculate a discount, multiply the original price by the discount percentage divided by 100 (Savings = Price × Rate / 100), then subtract that savings from the original price. For example, 30% off $80 is: $80 × 0.30 = $24 savings, leaving a $56 price.",
        faq2Q: "Why is tax calculated after discount instead of before?",
        faq2A: "Most state and local tax authorities require sales tax to be levied solely on the gross receipt of the sale (the amount the consumer actually tenders). Store-sponsored discounts lower the taxable basis, saving you money on both the product and the tax.",
        faq3Q: "How do I find the original price if I only have the receipt?",
        faq3A: "Use our Reverse Calculator mode! First, divide the final total by (1 + tax rate) to isolate the subtotal. Then divide the subtotal by (1 - discount rate). If you paid $90 after a 10% discount with 0% tax, the original price was $90 / 0.90 = $100.",
        faq4Q: "Can I use this for international currencies?",
        faq4A: "Yes! Select your preferred currency ($ USD, € EUR, £ GBP, د.إ AED, ¥ JPY, ₹ INR, CAD, AUD) from the currency dropdown at the top of the pricing card. The math applies universally across all fiat currencies.",
        toastCopied: "Receipt summary copied to clipboard!",
        toastReverseCopied: "Reverse calculation copied to clipboard!"
      },
      ar: {
        backLink: "← العودة إلى الأدوات",
        badgePill: "على جهازك 100% • خصوصية تامة • دون خوادم",
        toolTitle: "حاسبة الخصم وضريبة المبيعات",
        toolSubtitle: "احسب التوفير النهائي والخصومات الإضافية المتراكمة وضريبة المبيعات أو القيمة المضافة فورياً مع خيار الحساب العكسي للسعر الأصلي.",
        tabStandard: "الحاسبة القياسية",
        tabReverse: "الحساب العكسي (من الإجمالي للسعر الأصلي)",
        panelInputTitle: "الأسعار والخصومات",
        lblOrigPrice: "السعر الأصلي للمنتج",
        subOrigPrice: "قبل تطبيق أي خصم",
        lblPrimaryDiscount: "الخصم الأساسي",
        lblStackedTitle: "خصم إضافي متراكم (كود ترويجي / VIP)",
        lblExtraRate: "نسبة الخصم الإضافي",
        subStackedCompound: "يُحسب تراكمياً بعد الخصم الأول",
        lblTaxRate: "نسبة الضريبة / القيمة المضافة",
        subTaxApplied: "تُطبق على المبلغ بعد الخصم",
        lblFinalPrice: "المبلغ النهائي للدفع",
        lblTotalSavings: "إجمالي التوفير",
        lblTaxAmount: "الضريبة التقديرية",
        lblVisualBreakdown: "توزيع عناصر السعر",
        legSavings: "الخصم:",
        legSubtotal: "قبل الضريبة:",
        legTax: "الضريبة:",
        lblReceiptTitle: "فاتورة الحساب المفصلة",
        recOrigPrice: "السعر الأصلي:",
        recPrimaryDisc: "الخصم الأساسي:",
        recStackedDisc: "الخصم الإضافي:",
        recSubtotal: "المجموع بعد الخصم:",
        recTax: "ضريبة المبيعات:",
        recTotal: "المبلغ الإجمالي المستحق:",
        btnCopyReceipt: "نسخ الفاتورة",
        btnPrintReceipt: "طباعة / PDF",
        revPanelTitle: "الحساب العكسي للسعر الأصلي",
        revHelpText: "هل تعرف ما دفعته عند الدفع مع نسبة الخصم؟ أدخل بيانات الفاتورة لمعرفة السعر الأصلي للمنتج قبل الخصم.",
        revLblFinalPaid: "إجمالي المبلغ المدفوع",
        revLblDiscount: "نسبة الخصم المعروفة (%)",
        revLblTax: "نسبة الضريبة المعروفة (%)",
        revLblOriginalSticker: "السعر الأصلي كان",
        revSubPreTaxSavings: "قيمة الخصم المباشر",
        revMathTitle: "المعادلة الرياضية العكسية",
        revFormula1: "المبلغ قبل الضريبة = المدفوع ÷ (1 + الضريبة)",
        revFormula2: "السعر الأصلي = المجموع ÷ (1 - الخصم)",
        revNetBenefit: "إجمالي الاستفادة المالية:",
        guideHeading: "التسوق الذكي: فهم الخصومات وضريبة المبيعات",
        guideSubheading: "تعرف على المعادلات المالية المطبقة في المتاجر وكيفية احتساب الخصومات المتراكمة والحساب العكسي.",
        g1Title: "حقيقة الخصومات المتراكمة",
        g1Desc: "يعتقد البعض أن خصم 20% مع كود إضافي 20% يعني 40%، ولكن المتاجر تطبق الخصم التراكمي المركب: 100 تصبح 80، ثم 20% من 80 هي 16، ليصبح السعر النهائي 64 (توفير 36% وليس 40%).",
        g2Title: "الضريبة المضافة مقابل ضريبة المبيعات",
        g2Desc: "في الولايات المتحدة تضاف الضريبة عند الدفع على المبلغ المخفض. بينما في العديد من الدول تكون ضريبة القيمة المضافة مشمولة في السعر المعلن. توفر الحاسبة تفصيلاً دقيقاً لكلا الحالتين.",
        g3Title: "سرية تامة 100% داخل المتصفح",
        g3Desc: "جميع الحسابات تجري محلياً على جهازك دون إرسال أي أرقام أو فواتير إلى خوادم خارجية حفاظاً على خصوصيتك المالية الكاملة.",
        faq1Q: "كيف أحسب نسبة الخصم يدوياً؟",
        faq1A: "اضرب السعر الأصلي بنسبة الخصم مقسومة على 100، ثم اطرح الناتج من السعر الأصلي (مثال: خصم 30% من 80 هو 80 × 0.30 = 24، السعر بعد الخصم 56).",
        faq2Q: "لماذا تُحسب الضريبة بعد الخصم؟",
        faq2A: "لأن القوانين الضريبية تفرض الضريبة على المبلغ الحقيقي الذي يدفعه المستهلك للبائع وليس السعر الافتراضي القديم.",
        faq3Q: "كيف أعرف السعر الأصلي من الفاتورة النهائية؟",
        faq3A: "استخدم وضع الحساب العكسي: اقسم المبلغ المدفوع على (1 + نسبة الضريبة) لعزل الضريبة، ثم اقسم الناتج على (1 - نسبة الخصم).",
        faq4Q: "هل تدعم الحاسبة العملات المختلفة؟",
        faq4A: "نعم، يمكنك اختيار عملتك المفضلة (الدولار، اليورو، الجنيه الإسترليني، الدرهم الإماراتي، الين، الروبية وغيرها) من القائمة المنسدلة.",
        toastCopied: "تم نسخ ملخص الفاتورة إلى الحافظة!",
        toastReverseCopied: "تم نسخ تفاصيل الحساب العكسي!"
      },
      fr: {
        backLink: "← Retour aux Outils",
        badgePill: "Côté Client • Confidentialité Totale • Zéro Log",
        toolTitle: "Calculateur de Remise & Taxe de Vente",
        toolSubtitle: "Calculez vos économies réelles, remises cumulées et taxes de vente ou TVA avec répartition visuelle interactive et calcul inversé.",
        tabStandard: "Calculateur Standard",
        tabReverse: "Calcul Inversé (Prix d'Origine)",
        panelInputTitle: "Prix & Remises",
        lblOrigPrice: "Prix Initial d'Origine",
        subOrigPrice: "Avant toute remise",
        lblPrimaryDiscount: "Remise Principale",
        lblStackedTitle: "Remise Supplémentaire Cumulée (VIP / Promo)",
        lblExtraRate: "Taux de Remise Additionnelle",
        subStackedCompound: "Calculé après la première remise",
        lblTaxRate: "Taux de Taxe / TVA",
        subTaxApplied: "Appliqué au sous-total remisé",
        lblFinalPrice: "Montant Final à Payer",
        lblTotalSavings: "Économies Totales",
        lblTaxAmount: "Taxe Estimée",
        lblVisualBreakdown: "Répartition des Coûts",
        legSavings: "Remise:",
        legSubtotal: "Sous-total:",
        legTax: "Taxe:",
        lblReceiptTitle: "Ticket de Caisse Détaillé",
        recOrigPrice: "Prix d'Origine:",
        recPrimaryDisc: "Remise Principale:",
        recStackedDisc: "Remise VIP Cumulée:",
        recSubtotal: "Sous-total Remisé:",
        recTax: "Taxe de Vente:",
        recTotal: "Total Dû:",
        btnCopyReceipt: "Copier le Ticket",
        btnPrintReceipt: "Imprimer / PDF",
        revPanelTitle: "Résolution Inverse du Prix d'Origine",
        revHelpText: "Vous connaissez le montant payé en caisse et le pourcentage de remise ? Entrez vos données pour retrouver le prix d'origine.",
        revLblFinalPaid: "Montant Total Payé",
        revLblDiscount: "Taux de Remise Connu (%)",
        revLblTax: "Taux de Taxe Connu (%)",
        revLblOriginalSticker: "Le Prix d'Origine Était",
        revSubPreTaxSavings: "Réduction directe",
        revMathTitle: "Démonstration Mathématique",
        revFormula1: "Sous-total Hors Taxe = Payé / (1 + Taxe)",
        revFormula2: "Prix Initial = Sous-total / (1 - Remise)",
        revNetBenefit: "Bénéfice Financier Global:",
        guideHeading: "Achat Malin : Comprendre Remises et Taxes",
        guideSubheading: "Maîtrisez les formules financières de la vente au détail et le calcul inversé des prix étiquettes.",
        g1Title: "La Réalité des Remises Cumulées",
        g1Desc: "Deux remises de 20% ne font pas 40%. La seconde s'applique sur le montant déjà réduit. Pour 100 €, le prix passe à 80 €, puis -20% sur 80 € donne 64 € (soit 36% d'économie réelle, pas 40%).",
        g2Title: "Taxe de Vente vs. TVA",
        g2Desc: "Aux États-Unis, la taxe s'ajoute en caisse sur le prix remisé. En Europe, la TVA est souvent incluse sur l'étiquette. Ce calculateur vous permet de visualiser les deux composantes en toute clarté.",
        g3Title: "Confidentialité 100% Locale",
        g3Desc: "Aucune information de prix ou de reçu ne quitte votre ordinateur. Tout le traitement s'exécute localement dans votre navigateur web sans aucun serveur externe.",
        faq1Q: "Comment calculer une remise en pourcentage manuellement ?",
        faq1A: "Multipliez le prix par le taux divisé par 100, puis soustrayez ce montant du prix initial (Exemple : 30% sur 80 € = 80 × 0,30 = 24 € d'économie, soit 56 €).",
        faq2Q: "Pourquoi la taxe s'applique-t-elle après la remise ?",
        faq2A: "Les lois fiscales taxent uniquement le montant réellement payé par le consommateur, vous faisant ainsi économiser à la fois sur le produit et sur la taxe.",
        faq3Q: "Comment retrouver le prix initial à partir du ticket ?",
        faq3A: "Divisez le total payé par (1 + taxe) pour obtenir le sous-total, puis divisez par (1 - remise).",
        faq4Q: "Puis-je changer de devise ?",
        faq4A: "Oui, sélectionnez la devise de votre choix ($, €, £, د.إ, ¥, ₹) dans le menu déroulant en haut de la carte.",
        toastCopied: "Ticket de caisse copié dans le presse-papier !",
        toastReverseCopied: "Calcul inversé copié dans le presse-papier !"
      },
      it: {
        backLink: "← Torna agli Strumenti",
        badgePill: "Lato Client • Massima Privacy • Zero Log",
        toolTitle: "Calcolatore Sconto & Tasse di Vendita",
        toolSubtitle: "Calcola il risparmio reale, sconti cumulativi e imposte di vendita o IVA con scomposizione visiva e calcolo inverso del prezzo originario.",
        tabStandard: "Calcolatore Standard",
        tabReverse: "Calcolo Inverso (Prezzo Iniziale)",
        panelInputTitle: "Prezzi & Sconti",
        lblOrigPrice: "Prezzo di Listino Originale",
        subOrigPrice: "Prima degli sconti",
        lblPrimaryDiscount: "Sconto Principale",
        lblStackedTitle: "Sconto Extra Cumulativo (VIP / Promo)",
        lblExtraRate: "Percentuale di Sconto Extra",
        subStackedCompound: "Applicato dopo il primo sconto",
        lblTaxRate: "Aliquota Fiscale / IVA",
        subTaxApplied: "Applicata al subtotale scontato",
        lblFinalPrice: "Prezzo Finale da Pagare",
        lblTotalSavings: "Risparmio Totale",
        lblTaxAmount: "Imposta Stimata",
        lblVisualBreakdown: "Scomposizione del Prezzo",
        legSavings: "Sconto:",
        legSubtotal: "Subtotale:",
        legTax: "Imposta:",
        lblReceiptTitle: "Scontrino Dettagliato",
        recOrigPrice: "Prezzo di Listino:",
        recPrimaryDisc: "Sconto Principale:",
        recStackedDisc: "Sconto VIP Cumulativo:",
        recSubtotal: "Subtotale Scontato:",
        recTax: "Tassa di Vendita:",
        recTotal: "Totale da Pagare:",
        btnCopyReceipt: "Copia Scontrino",
        btnPrintReceipt: "Stampa / PDF",
        revPanelTitle: "Calcolo Inverso del Prezzo Iniziale",
        revHelpText: "Sai quanto hai pagato alla cassa e la percentuale di sconto? Inserisci i dati per scoprire il prezzo originale di cartellino.",
        revLblFinalPaid: "Importo Finale Pagato",
        revLblDiscount: "Percentuale di Sconto Nota (%)",
        revLblTax: "Aliquota Fiscale Nota (%)",
        revLblOriginalSticker: "Il Prezzo Originale Era",
        revSubPreTaxSavings: "Riduzione diretta del prezzo",
        revMathTitle: "Derivazione Matematica",
        revFormula1: "Subtotale Imponibile = Pagato / (1 + Imposta)",
        revFormula2: "Prezzo Originale = Subtotale / (1 - Sconto)",
        revNetBenefit: "Vantaggio Finanziario Totale:",
        guideHeading: "Acquisti Intelligenti: Comprendere Sconti e Imposte",
        guideSubheading: "Padroneggia le formule finanziarie del commercio al dettaglio e il calcolo inverso dei prezzi.",
        g1Title: "La Verità sugli Sconti Cumulativi",
        g1Desc: "Due sconti del 20% non equivalgono al 40%. Il secondo si applica sul prezzo già ridotto: 100 € scende a 80 €, e il 20% di 80 € è 16 €, portando il prezzo a 64 € (sconto effettivo del 36%, non del 40%).",
        g2Title: "Tasse di Vendita vs. IVA",
        g2Desc: "Negli USA le imposte si applicano alla cassa sul totale scontato, mentre in Europa l'IVA è inclusa nel prezzo esposto. Questo strumento rende trasparenti entrambe le componenti.",
        g3Title: "Riservatezza 100% nel Browser",
        g3Desc: "I tuoi importi rimangono privati. Tutti i calcoli sono eseguiti localmente nel browser senza trasmissione di dati a server esterni.",
        faq1Q: "Come si calcola uno sconto percentuale manualmente?",
        faq1A: "Moltiplica il prezzo originale per la percentuale divisa per 100, quindi sottrai il risultato dal prezzo (Es: 30% di 80 € = 80 × 0,30 = 24 € di risparmio, prezzo finale 56 €).",
        faq2Q: "Perché le tasse si calcolano dopo lo sconto?",
        faq2A: "Le normative fiscali impongono l'applicazione dell'imposta sul corrispettivo effettivamente pagato, permettendo di risparmiare sia sul bene sia sull'imposta.",
        faq3Q: "Come si risale al prezzo iniziale dallo scontrino?",
        faq3A: "Dividi il totale pagato per (1 + aliquota fiscale) per isolare l'imponibile, poi dividi per (1 - percentuale sconto).",
        faq4Q: "Posso utilizzare valute diverse?",
        faq4A: "Sì, seleziona la valuta desiderata ($, €, £, د.إ, ¥, ₹) nel menu a tendina in alto.",
        toastCopied: "Riepilogo scontrino copiato negli appunti!",
        toastReverseCopied: "Calcolo inverso copiato negli appunti!"
      }
    };

    let currentLang = 'en';
    let currencySymbol = '$';
    let discountMode = 'percent'; // 'percent' or 'fixed'
    let isStackedActive = false;
    let currentTab = 'standard'; // 'standard' or 'reverse'

    function initLanguage() {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && TRANSLATIONS[stored]) {
        currentLang = stored;
      }
      applyLanguage(currentLang);

      const toggleBtn = document.getElementById('langToggleBtn');
      const menu = document.getElementById('langMenu');
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang && TRANSLATIONS[lang]) {
            currentLang = lang;
            localStorage.setItem('vantorkit_lang', lang);
            applyLanguage(lang);
            toggleBtn.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
            calculateStandard();
            calculateReverse();
          }
        });
      });
    }

    function applyLanguage(lang) {
      window.applyLanguage = applyLanguage;
      const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const html = document.getElementById('htmlRoot');
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
      });

      const langNames = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      document.getElementById('currentLangLabel').textContent = langNames[lang] || 'English';

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.innerHTML = t[key];
        }
      });
    }

    function showToast(message) {
      const toast = document.getElementById('toastBox');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }

    function formatCurrency(num) {
      const formatted = Math.abs(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (num < 0) {
        return `-${currencySymbol}${formatted}`;
      }
      return `${currencySymbol}${formatted}`;
    }

    /* ==========================================================================
       Calculation Logic: Standard Mode
       ========================================================================== */

    const inputOrigPrice = document.getElementById('inputOrigPrice');
    const inputDiscount = document.getElementById('inputDiscount');
    const sliderDiscount = document.getElementById('sliderDiscount');
    const inputExtraDiscount = document.getElementById('inputExtraDiscount');
    const inputTaxRate = document.getElementById('inputTaxRate');
    const sliderTax = document.getElementById('sliderTax');
    const currencySelect = document.getElementById('currencySelect');
    const stackedCheck = document.getElementById('stackedCheck');
    const stackedBox = document.getElementById('stackedBox');
    const stackedContent = document.getElementById('stackedContent');

    const dispFinalPrice = document.getElementById('dispFinalPrice');
    const dispFinalSummary = document.getElementById('dispFinalSummary');
    const badgeNetDiscount = document.getElementById('badgeNetDiscount');
    const dispTotalSavings = document.getElementById('dispTotalSavings');
    const dispSavingsPct = document.getElementById('dispSavingsPct');
    const dispTaxAmount = document.getElementById('dispTaxAmount');
    const dispPreTaxSubtotal = document.getElementById('dispPreTaxSubtotal');

    const barSavings = document.getElementById('barSavings');
    const barSubtotal = document.getElementById('barSubtotal');
    const barTax = document.getElementById('barTax');
    const legSavingsVal = document.getElementById('legSavingsVal');
    const legSubtotalVal = document.getElementById('legSubtotalVal');
    const legTaxVal = document.getElementById('legTaxVal');

    const recOrigVal = document.getElementById('recOrigVal');
    const recDiscLabel = document.getElementById('recDiscLabel');
    const recDiscVal = document.getElementById('recDiscVal');
    const recStackedRow = document.getElementById('recStackedRow');
    const recStackedLabel = document.getElementById('recStackedLabel');
    const recStackedVal = document.getElementById('recStackedVal');
    const recSubtotalVal = document.getElementById('recSubtotalVal');
    const recTaxLabel = document.getElementById('recTaxLabel');
    const recTaxVal = document.getElementById('recTaxVal');
    const recTotalVal = document.getElementById('recTotalVal');

    function calculateStandard() {
      const origPrice = Math.max(0, parseFloat(inputOrigPrice.value) || 0);
      const discountVal = Math.max(0, parseFloat(inputDiscount.value) || 0);
      const extraDiscountPct = Math.max(0, parseFloat(inputExtraDiscount.value) || 0);
      const taxRate = Math.max(0, parseFloat(inputTaxRate.value) || 0);

      let primaryDiscountAmount = 0;
      if (discountMode === 'percent') {
        primaryDiscountAmount = origPrice * (discountVal / 100);
      } else {
        primaryDiscountAmount = Math.min(discountVal, origPrice);
      }

      const priceAfterPrimary = Math.max(0, origPrice - primaryDiscountAmount);

      let stackedDiscountAmount = 0;
      if (isStackedActive && extraDiscountPct > 0) {
        stackedDiscountAmount = priceAfterPrimary * (extraDiscountPct / 100);
      }

      const discountedSubtotal = Math.max(0, priceAfterPrimary - stackedDiscountAmount);
      const totalSavings = primaryDiscountAmount + stackedDiscountAmount;
      const netSavingsPct = origPrice > 0 ? (totalSavings / origPrice) * 100 : 0;

      const taxAmount = discountedSubtotal * (taxRate / 100);
      const finalPrice = discountedSubtotal + taxAmount;

      // Update Hero Outputs
      dispFinalPrice.textContent = formatCurrency(finalPrice);
      badgeNetDiscount.textContent = `${netSavingsPct.toFixed(1)}% Net Off`;
      dispFinalSummary.textContent = `Includes ${formatCurrency(totalSavings)} total savings and ${formatCurrency(taxAmount)} estimated tax.`;

      // Update Metric Cards
      dispTotalSavings.textContent = formatCurrency(totalSavings);
      dispSavingsPct.textContent = `Saved ${netSavingsPct.toFixed(1)}% of sticker price`;
      dispTaxAmount.textContent = formatCurrency(taxAmount);
      dispPreTaxSubtotal.textContent = `Subtotal: ${formatCurrency(discountedSubtotal)}`;

      // Update Visual Stacked Bar
      const totalBarBasis = origPrice + taxAmount;
      if (totalBarBasis > 0) {
        const pctSavings = (totalSavings / totalBarBasis) * 100;
        const pctSubtotal = (discountedSubtotal / totalBarBasis) * 100;
        const pctTax = (taxAmount / totalBarBasis) * 100;

        barSavings.style.width = `${pctSavings.toFixed(1)}%`;
        barSubtotal.style.width = `${pctSubtotal.toFixed(1)}%`;
        barTax.style.width = `${pctTax.toFixed(1)}%`;

        legSavingsVal.textContent = `${formatCurrency(totalSavings)} (${pctSavings.toFixed(0)}%)`;
        legSubtotalVal.textContent = `${formatCurrency(discountedSubtotal)} (${pctSubtotal.toFixed(0)}%)`;
        legTaxVal.textContent = `${formatCurrency(taxAmount)} (${pctTax.toFixed(0)}%)`;
      } else {
        barSavings.style.width = '0%';
        barSubtotal.style.width = '100%';
        barTax.style.width = '0%';
      }

      // Update Receipt
      recOrigVal.textContent = formatCurrency(origPrice);
      if (discountMode === 'percent') {
        recDiscLabel.textContent = `Primary Discount (${discountVal}%):`;
      } else {
        recDiscLabel.textContent = `Primary Discount (${formatCurrency(discountVal)}):`;
      }
      recDiscVal.textContent = `-${formatCurrency(primaryDiscountAmount)}`;

      if (isStackedActive && extraDiscountPct > 0) {
        recStackedRow.style.display = 'flex';
        recStackedLabel.textContent = `Stacked VIP Discount (${extraDiscountPct}%):`;
        recStackedVal.textContent = `-${formatCurrency(stackedDiscountAmount)}`;
      } else {
        recStackedRow.style.display = 'none';
      }

      recSubtotalVal.textContent = formatCurrency(discountedSubtotal);
      recTaxLabel.textContent = `Sales Tax (${taxRate}%):`;
      recTaxVal.textContent = `+${formatCurrency(taxAmount)}`;
      recTotalVal.textContent = formatCurrency(finalPrice);
    }

    /* ==========================================================================
       Calculation Logic: Reverse Mode
       ========================================================================== */

    const revInputFinal = document.getElementById('revInputFinal');
    const revInputDiscount = document.getElementById('revInputDiscount');
    const revInputTax = document.getElementById('revInputTax');
    const revDispOrigPrice = document.getElementById('revDispOrigPrice');
    const revBadgeDiscount = document.getElementById('revBadgeDiscount');
    const revDispSummary = document.getElementById('revDispSummary');
    const revDispSavings = document.getElementById('revDispSavings');
    const revDispTax = document.getElementById('revDispTax');
    const revDispPreTaxSub = document.getElementById('revDispPreTaxSub');
    const revValFormula1 = document.getElementById('revValFormula1');
    const revValFormula2 = document.getElementById('revValFormula2');
    const revValNetBenefit = document.getElementById('revValNetBenefit');

    function calculateReverse() {
      const paid = Math.max(0, parseFloat(revInputFinal.value) || 0);
      const discountPct = Math.min(99.9, Math.max(0, parseFloat(revInputDiscount.value) || 0));
      const taxRate = Math.max(0, parseFloat(revInputTax.value) || 0);

      // 1. Remove tax to find pre-tax subtotal
      const subtotal = paid / (1 + (taxRate / 100));
      const taxPaid = paid - subtotal;

      // 2. Undo discount to find original price: subtotal = orig * (1 - disc/100)
      let origPrice = 0;
      if (discountPct < 100) {
        origPrice = subtotal / (1 - (discountPct / 100));
      }
      const savings = Math.max(0, origPrice - subtotal);

      revDispOrigPrice.textContent = formatCurrency(origPrice);
      revBadgeDiscount.textContent = `${discountPct}% Off`;
      revDispSummary.textContent = `You saved ${formatCurrency(savings)} on the original sticker price.`;

      revDispSavings.textContent = formatCurrency(savings);
      revDispTax.textContent = formatCurrency(taxPaid);
      revDispPreTaxSub.textContent = `Pre-tax subtotal: ${formatCurrency(subtotal)}`;

      revValFormula1.textContent = formatCurrency(subtotal);
      revValFormula2.textContent = formatCurrency(origPrice);
      revValNetBenefit.textContent = formatCurrency(savings);
    }

    /* ==========================================================================
       Event Listeners & UI Binding
       ========================================================================== */

    function setupEventListeners() {
      // Tab switcher
      const tabStandard = document.getElementById('tabStandard');
      const tabReverse = document.getElementById('tabReverse');
      const standardLayout = document.getElementById('standardLayout');
      const reverseLayout = document.getElementById('reverseLayout');

      tabStandard.addEventListener('click', () => {
        currentTab = 'standard';
        tabStandard.classList.add('active');
        tabReverse.classList.remove('active');
        standardLayout.style.display = 'grid';
        reverseLayout.classList.remove('active');
      });

      tabReverse.addEventListener('click', () => {
        currentTab = 'reverse';
        tabReverse.classList.add('active');
        tabStandard.classList.remove('active');
        standardLayout.style.display = 'none';
        reverseLayout.classList.add('active');
        calculateReverse();
      });

      // Currency Select
      currencySelect.addEventListener('change', (e) => {
        currencySymbol = e.target.value;
        document.getElementById('currPrefix1').textContent = currencySymbol;
        document.getElementById('currPrefixRev').textContent = currencySymbol;
        document.getElementById('segCurrSymbol').textContent = currencySymbol;
        if (discountMode === 'fixed') {
          document.getElementById('discountUnitPrefix').textContent = currencySymbol;
        }
        calculateStandard();
        calculateReverse();
      });

      // Original Price Input & Presets
      inputOrigPrice.addEventListener('input', calculateStandard);
      document.querySelectorAll('[data-orig]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-orig]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          inputOrigPrice.value = chip.getAttribute('data-orig');
          calculateStandard();
        });
      });

      // Discount Mode Toggle (% vs $)
      const btnDiscountPercent = document.getElementById('btnDiscountPercent');
      const btnDiscountFixed = document.getElementById('btnDiscountFixed');
      const discountUnitPrefix = document.getElementById('discountUnitPrefix');
      const discountRangeWrap = document.getElementById('discountRangeWrap');
      const discountChipsPercent = document.getElementById('discountChipsPercent');
      const discountChipsFixed = document.getElementById('discountChipsFixed');

      btnDiscountPercent.addEventListener('click', () => {
        discountMode = 'percent';
        btnDiscountPercent.classList.add('active');
        btnDiscountFixed.classList.remove('active');
        discountUnitPrefix.textContent = '%';
        discountRangeWrap.style.display = 'block';
        discountChipsPercent.style.display = 'flex';
        discountChipsFixed.style.display = 'none';
        inputDiscount.value = sliderDiscount.value || '20';
        calculateStandard();
      });

      btnDiscountFixed.addEventListener('click', () => {
        discountMode = 'fixed';
        btnDiscountFixed.classList.add('active');
        btnDiscountPercent.classList.remove('active');
        discountUnitPrefix.textContent = currencySymbol;
        discountRangeWrap.style.display = 'none';
        discountChipsPercent.style.display = 'none';
        discountChipsFixed.style.display = 'flex';
        inputDiscount.value = '20';
        calculateStandard();
      });

      // Discount Input & Slider
      inputDiscount.addEventListener('input', () => {
        if (discountMode === 'percent') {
          sliderDiscount.value = inputDiscount.value;
        }
        calculateStandard();
      });
      sliderDiscount.addEventListener('input', () => {
        inputDiscount.value = sliderDiscount.value;
        calculateStandard();
      });

      document.querySelectorAll('[data-disc]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-disc]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          inputDiscount.value = chip.getAttribute('data-disc');
          sliderDiscount.value = chip.getAttribute('data-disc');
          calculateStandard();
        });
      });

      document.querySelectorAll('[data-fixed]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-fixed]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          inputDiscount.value = chip.getAttribute('data-fixed');
          calculateStandard();
        });
      });

      // Stacked Discount Toggle
      stackedCheck.addEventListener('change', (e) => {
        isStackedActive = e.target.checked;
        stackedBox.classList.toggle('active', isStackedActive);
        stackedContent.classList.toggle('show', isStackedActive);
        calculateStandard();
      });

      inputExtraDiscount.addEventListener('input', calculateStandard);
      document.querySelectorAll('[data-extra]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-extra]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          inputExtraDiscount.value = chip.getAttribute('data-extra');
          calculateStandard();
        });
      });

      // Tax Rate Input & Slider & Presets
      inputTaxRate.addEventListener('input', () => {
        sliderTax.value = inputTaxRate.value;
        calculateStandard();
      });
      sliderTax.addEventListener('input', () => {
        inputTaxRate.value = sliderTax.value;
        calculateStandard();
      });
      document.querySelectorAll('[data-tax]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-tax]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          inputTaxRate.value = chip.getAttribute('data-tax');
          sliderTax.value = chip.getAttribute('data-tax');
          calculateStandard();
        });
      });

      // Reverse Mode Listeners
      revInputFinal.addEventListener('input', calculateReverse);
      revInputDiscount.addEventListener('input', calculateReverse);
      revInputTax.addEventListener('input', calculateReverse);

      document.querySelectorAll('[data-revpaid]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-revpaid]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          revInputFinal.value = chip.getAttribute('data-revpaid');
          calculateReverse();
        });
      });

      document.querySelectorAll('[data-revdisc]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-revdisc]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          revInputDiscount.value = chip.getAttribute('data-revdisc');
          calculateReverse();
        });
      });

      document.querySelectorAll('[data-revtax]').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('[data-revtax]').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          revInputTax.value = chip.getAttribute('data-revtax');
          calculateReverse();
        });
      });

      // Copy Receipt Button
      document.getElementById('btnCopyReceipt').addEventListener('click', () => {
        const origPrice = parseFloat(inputOrigPrice.value) || 0;
        const discountVal = parseFloat(inputDiscount.value) || 0;
        const taxRate = parseFloat(inputTaxRate.value) || 0;

        let txt = `=== VANTORKIT CHECKOUT RECEIPT ===\n`;
        txt += `Original Price:      ${recOrigVal.textContent}\n`;
        txt += `${recDiscLabel.textContent.padEnd(21)} ${recDiscVal.textContent}\n`;
        if (isStackedActive) {
          txt += `${recStackedLabel.textContent.padEnd(21)} ${recStackedVal.textContent}\n`;
        }
        txt += `Discounted Subtotal: ${recSubtotalVal.textContent}\n`;
        txt += `Sales Tax (${taxRate}%):     ${recTaxVal.textContent}\n`;
        txt += `-----------------------------------\n`;
        txt += `TOTAL AMOUNT DUE:    ${recTotalVal.textContent}\n`;
        txt += `TOTAL SAVINGS:       ${dispTotalSavings.textContent} (${badgeNetDiscount.textContent})\n`;
        txt += `===================================`;

        navigator.clipboard.writeText(txt).then(() => {
          showToast(TRANSLATIONS[currentLang]?.toastCopied || 'Receipt summary copied to clipboard!');
        }).catch(() => {
          showToast('Failed to copy to clipboard.');
        });
      });

      // Print Button
      document.getElementById('btnPrintReceipt').addEventListener('click', () => {
        window.print();
      });
    }

    // Initialize Tool
    document.addEventListener('DOMContentLoaded', () => {
      initLanguage();
      setupEventListeners();
      calculateStandard();
      calculateReverse();
    });

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
        "title": "Discount & Tax Calculator – Net Price & Savings",
        "desc": "Deduct promo discounts and stack regional sales tax or VAT to find your register total. Computations run client-side for rapid, private shopping math."
    },
    "ar": {
        "title": "حاسبة الخصم والضريبة – حساب السعر النهائي والتوفير",
        "desc": "احسب أسعار الشراء بعد التخفيضات وإضافة ضريبة القيمة المضافة أو المبيعات. تتم جميع العمليات الحسابية محلياً لتسوق ذكي وسريع دون جمع بياناتك."
    },
    "fr": {
        "title": "Calculateur Remise & Taxe – Prix Net et Économies",
        "desc": "Appliquez remises commerciales et taxes locales (TVA) pour connaître le total à payer. Les calculs s'exécutent localement pour un shopping discret."
    },
    "it": {
        "title": "Calcolatore Sconto e IVA – Prezzo Finale e Risparmio",
        "desc": "Applica coupon e imposte sul valore aggiunto per verificare l'importo effettivo alla cassa. Il calcolo si svolge sul tuo device senza invio dati."
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