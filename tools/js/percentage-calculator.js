(function () {
      'use strict';

      // --- Translations Dictionary (EN, AR, FR, IT) ---
      const I18N = {
        en: {
          langLabel: "English",
          backLink: "← Back to Tools",
          brandBadge: "Math & Finance • Client-Side • Zero Latency",
          heroTitle: 'Percentage <span>Calculator</span>',
          heroSubtitle: "Fast, accurate, real-time percentage calculations with zero page reloads. Compute standard percentages, proportions, and rate changes instantly.",
          mod1Badge: "Module 1",
          mod1Title: "What is P% of X?",
          mod1LabelP: "Percentage (P)",
          mod1LabelX: "Base Value (X)",
          mod2Badge: "Module 2",
          mod2Title: "X is what percent of Y?",
          mod2LabelX: "Part Value (X)",
          mod2LabelY: "Total / Whole Value (Y)",
          mod3Badge: "Module 3",
          mod3Title: "Percentage Increase / Decrease",
          mod3LabelX: "Initial Value (X)",
          mod3LabelY: "Final Value (Y)",
          swapBtn: "Swap Values",
          calcResultLabel: "Calculated Result",
          calcProportionLabel: "Calculated Proportion",
          rateChangeLabel: "Rate of Change",
          copyBtn: "Copy",
          copied: "Copied!",
          toastCopied: "Copied to clipboard!",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally."
        },
        ar: {
          langLabel: "العربية",
          backLink: "← العودة إلى جميع الأدوات",
          brandBadge: "الرياضيات والمالية • معالجة محلية • استجابة فورية",
          heroTitle: 'حاسبة <span>النسبة المئوية</span>',
          heroSubtitle: "حسابات دقيقة وفورية للنسب المئوية بدون إعادة تحميل الصفحة. احسب النسب الأساسية والتغير النسبي والفروقات بلمح البصر.",
          mod1Badge: "الوحدة 1",
          mod1Title: "كم يساوي P% من X؟",
          mod1LabelP: "النسبة المئوية (P)",
          mod1LabelX: "القيمة الأساسية (X)",
          mod2Badge: "الوحدة 2",
          mod2Title: "ما هي نسبة X من Y؟",
          mod2LabelX: "القيمة الجزئية (X)",
          mod2LabelY: "القيمة الإجمالية (Y)",
          mod3Badge: "الوحدة 3",
          mod3Title: "نسبة الزيادة أو النقصان",
          mod3LabelX: "القيمة الأولية (X)",
          mod3LabelY: "القيمة النهائية (Y)",
          swapBtn: "تبديل القيم",
          calcResultLabel: "النتيجة المحسوبة",
          calcProportionLabel: "النسبة المحسوبة",
          rateChangeLabel: "معدل التغير",
          copyBtn: "نسخ",
          copied: "تم النسخ!",
          toastCopied: "تم النسخ إلى الحافظة!",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً على جهازك."
        },
        fr: {
          langLabel: "Français",
          backLink: "← Retour aux outils",
          brandBadge: "Maths & Finance • Côté Client • Zéro Latence",
          heroTitle: 'Calculateur de <span>Pourcentage</span>',
          heroSubtitle: "Calculs de pourcentage rapides et précis en temps réel sans rechargement. Calculez instantanément les pourcentages standards et variations.",
          mod1Badge: "Module 1",
          mod1Title: "Que vaut P% de X ?",
          mod1LabelP: "Pourcentage (P)",
          mod1LabelX: "Valeur de base (X)",
          mod2Badge: "Module 2",
          mod2Title: "X représente quel pourcentage de Y ?",
          mod2LabelX: "Valeur partielle (X)",
          mod2LabelY: "Valeur totale (Y)",
          mod3Badge: "Module 3",
          mod3Title: "Augmentation / Diminution en %",
          mod3LabelX: "Valeur initiale (X)",
          mod3LabelY: "Valeur finale (Y)",
          swapBtn: "Inverser les valeurs",
          calcResultLabel: "Résultat Calculé",
          calcProportionLabel: "Proportion Calculée",
          rateChangeLabel: "Taux de Variation",
          copyBtn: "Copier",
          copied: "Copié !",
          toastCopied: "Copié dans le presse-papiers !",
          footerText: "© 2026 VantorKit. Utilitaires web rapides, privés et gratuits. Tout le traitement est effectué localement."
        },
        it: {
          langLabel: "Italiano",
          backLink: "← Torna agli strumenti",
          brandBadge: "Matematica & Finanza • Lato Client • Zero Latenza",
          heroTitle: 'Calcolatore di <span>Percentuale</span>',
          heroSubtitle: "Calcoli percentuali rapidi e accurati in tempo reale senza ricaricare la pagina. Calcola istantaneamente percentuali standard e variazioni.",
          mod1Badge: "Modulo 1",
          mod1Title: "Quanto vale il P% di X?",
          mod1LabelP: "Percentuale (P)",
          mod1LabelX: "Valore di base (X)",
          mod2Badge: "Modulo 2",
          mod2Title: "X che percentuale è di Y?",
          mod2LabelX: "Valore parziale (X)",
          mod2LabelY: "Valore totale (Y)",
          mod3Badge: "Modulo 3",
          mod3Title: "Aumento / Diminuzione in %",
          mod3LabelX: "Valore iniziale (X)",
          mod3LabelY: "Valore finale (Y)",
          swapBtn: "Inverti valori",
          calcResultLabel: "Risultato Calcolato",
          calcProportionLabel: "Proporzione Calcolata",
          rateChangeLabel: "Tasso di Variazione",
          copyBtn: "Copia",
          copied: "Copiato!",
          toastCopied: "Copiato negli appunti!",
          footerText: "© 2026 VantorKit. Utilità web veloci, private e gratuite. Tutte le elaborazioni vengono eseguite localmente."
        }
      };

      // --- i18n Engine ---
      const htmlRoot = document.getElementById('htmlRoot');
      const langToggleBtn = document.getElementById('langToggleBtn');
      const langMenu = document.getElementById('langMenu');
      const currentLangLabel = document.getElementById('currentLangLabel');
      const langOptions = document.querySelectorAll('.lang-option');

      function setLanguage(lang) {
      window.setLanguage = setLanguage;
        if (!I18N[lang]) lang = 'en';
        localStorage.setItem('vantorkit_lang', lang);

        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        currentLangLabel.textContent = I18N[lang].langLabel;
        langOptions.forEach(opt => {
          if (opt.dataset.lang === lang) opt.classList.add('active');
          else opt.classList.remove('active');
        });

        const dict = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) {
            el.innerHTML = dict[key];
          }
        });

        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle && dict.heroTitle) heroTitle.innerHTML = dict.heroTitle;
      }

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

      langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          setLanguage(opt.dataset.lang);
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!document.getElementById('langDropdown').contains(e.target)) {
          langMenu.classList.remove('open');
          langToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // --- Number Formatting Utilities ---
      function formatNumber(num, maxDecimals = 4) {
        if (!Number.isFinite(num)) return '—';
        const factor = Math.pow(10, maxDecimals);
        const rounded = Math.round((num + Number.EPSILON) * factor) / factor;
        return new Intl.NumberFormat('en-US', {
          maximumFractionDigits: maxDecimals,
          useGrouping: true
        }).format(rounded);
      }

      function cleanRawNumber(num, maxDecimals = 4) {
        if (!Number.isFinite(num)) return '';
        const factor = Math.pow(10, maxDecimals);
        return (Math.round((num + Number.EPSILON) * factor) / factor).toString();
      }

      // --- Clipboard & Toast Utilities ---
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      let toastTimer = null;

      function showToast(message) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 2200);
      }

      function copyText(text, btnElement, label = 'Copied to clipboard!') {
        if (!text || text === '—') return;

        function indicateSuccess() {
          const originalHTML = btnElement.innerHTML;
          btnElement.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${(I18N[localStorage.getItem('vantorkit_lang') || 'en'] || I18N.en).copied}</span>
          `;
          btnElement.classList.add('copied');
          showToast(label);

          setTimeout(() => {
            btnElement.innerHTML = originalHTML;
            btnElement.classList.remove('copied');
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text)
            .then(indicateSuccess)
            .catch(() => fallbackCopy(text, indicateSuccess));
        } else {
          fallbackCopy(text, indicateSuccess);
        }
      }

      function fallbackCopy(text, callback) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          callback();
        } catch (err) {
          console.error('Clipboard copy failed:', err);
        }
        document.body.removeChild(textarea);
      }

      // --- Module 1: What is P% of X? ---
      const m1Percent = document.getElementById('m1Percent');
      const m1Base = document.getElementById('m1Base');
      const m1Result = document.getElementById('m1Result');
      const m1Formula = document.getElementById('m1Formula');
      const m1Sentence = document.getElementById('m1Sentence');
      const m1Copy = document.getElementById('m1Copy');
      const m1Reset = document.getElementById('m1Reset');

      let m1CurrentValue = '30';

      function calcModule1() {
        const pRaw = m1Percent.value.trim();
        const xRaw = m1Base.value.trim();

        if (pRaw === '' || xRaw === '') {
          m1Result.textContent = '—';
          m1Formula.textContent = 'Enter values above';
          m1Sentence.textContent = 'Enter both percentage (P) and base number (X) to compute.';
          m1Copy.setAttribute('aria-label', 'Nothing to copy');
          m1CurrentValue = '';
          return;
        }

        const P = parseFloat(pRaw);
        const X = parseFloat(xRaw);

        if (isNaN(P) || isNaN(X)) {
          m1Result.textContent = 'Invalid';
          m1Formula.textContent = 'Invalid numeric input';
          m1Sentence.textContent = 'Please enter valid numerical values.';
          m1CurrentValue = '';
          return;
        }

        const res = (P / 100) * X;
        const resFormatted = formatNumber(res, 4);
        m1CurrentValue = cleanRawNumber(res, 4);

        m1Result.textContent = resFormatted;
        m1Formula.textContent = `(${formatNumber(P, 4)} ÷ 100) × ${formatNumber(X, 4)} = ${resFormatted}`;
        m1Sentence.innerHTML = `${formatNumber(P, 4)}% of ${formatNumber(X, 4)} is <strong>${resFormatted}</strong>.`;
        m1Copy.setAttribute('aria-label', `Copy result ${resFormatted}`);
      }

      m1Percent.addEventListener('input', calcModule1);
      m1Base.addEventListener('input', calcModule1);

      m1Copy.addEventListener('click', () => {
        if (m1CurrentValue) {
          copyText(m1CurrentValue, m1Copy, `Copied ${m1CurrentValue} to clipboard`);
        }
      });

      m1Reset.addEventListener('click', () => {
        m1Percent.value = '';
        m1Base.value = '';
        calcModule1();
        m1Percent.focus();
      });

      // Preset chips for Module 1
      document.querySelectorAll('.preset-chip[data-target="m1Percent"]').forEach(chip => {
        chip.addEventListener('click', () => {
          m1Percent.value = chip.dataset.val;
          calcModule1();
        });
      });

      // --- Module 2: X is what percent of Y? ---
      const m2Part = document.getElementById('m2Part');
      const m2Total = document.getElementById('m2Total');
      const m2Result = document.getElementById('m2Result');
      const m2Formula = document.getElementById('m2Formula');
      const m2Sentence = document.getElementById('m2Sentence');
      const m2Copy = document.getElementById('m2Copy');
      const m2Reset = document.getElementById('m2Reset');

      let m2CurrentValue = '25%';

      function calcModule2() {
        const xRaw = m2Part.value.trim();
        const yRaw = m2Total.value.trim();

        if (xRaw === '' || yRaw === '') {
          m2Result.textContent = '—';
          m2Formula.textContent = 'Enter values above';
          m2Sentence.textContent = 'Enter part (X) and total (Y) to calculate percentage.';
          m2Copy.setAttribute('aria-label', 'Nothing to copy');
          m2CurrentValue = '';
          return;
        }

        const X = parseFloat(xRaw);
        const Y = parseFloat(yRaw);

        if (isNaN(X) || isNaN(Y)) {
          m2Result.textContent = 'Invalid';
          m2Formula.textContent = 'Invalid numeric input';
          m2Sentence.textContent = 'Please enter valid numerical values.';
          m2CurrentValue = '';
          return;
        }

        if (Y === 0) {
          m2Result.textContent = 'Undefined';
          m2Formula.textContent = 'Division by zero is undefined';
          m2Sentence.textContent = 'Denominator (Y) cannot be 0 in percentage calculation.';
          m2CurrentValue = '';
          return;
        }

        const pct = (X / Y) * 100;
        const pctFormatted = formatNumber(pct, 4) + '%';
        m2CurrentValue = pctFormatted;

        m2Result.textContent = pctFormatted;
        m2Formula.textContent = `(${formatNumber(X, 4)} ÷ ${formatNumber(Y, 4)}) × 100 = ${pctFormatted}`;
        m2Sentence.innerHTML = `${formatNumber(X, 4)} is <strong>${pctFormatted}</strong> of ${formatNumber(Y, 4)}.`;
        m2Copy.setAttribute('aria-label', `Copy result ${pctFormatted}`);
      }

      m2Part.addEventListener('input', calcModule2);
      m2Total.addEventListener('input', calcModule2);

      m2Copy.addEventListener('click', () => {
        if (m2CurrentValue) {
          copyText(m2CurrentValue, m2Copy, `Copied ${m2CurrentValue} to clipboard`);
        }
      });

      m2Reset.addEventListener('click', () => {
        m2Part.value = '';
        m2Total.value = '';
        calcModule2();
        m2Part.focus();
      });

      // --- Module 3: Percentage Increase / Decrease from X to Y ---
      const m3Initial = document.getElementById('m3Initial');
      const m3Final = document.getElementById('m3Final');
      const m3Result = document.getElementById('m3Result');
      const m3Formula = document.getElementById('m3Formula');
      const m3Sentence = document.getElementById('m3Sentence');
      const m3Badge = document.getElementById('m3Badge');
      const m3Copy = document.getElementById('m3Copy');
      const m3Reset = document.getElementById('m3Reset');
      const m3Swap = document.getElementById('m3Swap');

      let m3CurrentValue = '+25.00%';

      function calcModule3() {
        const xRaw = m3Initial.value.trim();
        const yRaw = m3Final.value.trim();

        if (xRaw === '' || yRaw === '') {
          m3Result.textContent = '—';
          m3Result.className = 'result-value';
          m3Formula.textContent = 'Enter values above';
          m3Sentence.textContent = 'Enter initial (X) and final (Y) numbers to see rate change.';
          m3Badge.className = 'change-badge neutral';
          m3Badge.innerHTML = '<span>No Data</span>';
          m3Copy.setAttribute('aria-label', 'Nothing to copy');
          m3CurrentValue = '';
          return;
        }

        const X = parseFloat(xRaw);
        const Y = parseFloat(yRaw);

        if (isNaN(X) || isNaN(Y)) {
          m3Result.textContent = 'Invalid';
          m3Result.className = 'result-value';
          m3Formula.textContent = 'Invalid numeric input';
          m3Sentence.textContent = 'Please enter valid numerical values.';
          m3CurrentValue = '';
          return;
        }

        if (X === 0) {
          if (Y === 0) {
            m3Result.textContent = '0.00%';
            m3Result.className = 'result-value';
            m3Badge.className = 'change-badge neutral';
            m3Badge.innerHTML = '<span>No Change</span>';
            m3Formula.textContent = 'No change from 0 to 0';
            m3Sentence.innerHTML = 'Value remained at 0.';
            m3CurrentValue = '0%';
          } else {
            m3Result.textContent = 'Undefined';
            m3Result.className = 'result-value';
            m3Badge.className = 'change-badge neutral';
            m3Badge.innerHTML = '<span>Undefined</span>';
            m3Formula.textContent = 'Cannot compute % change from 0 (division by 0)';
            m3Sentence.textContent = 'Percentage change from 0 is mathematically undefined.';
            m3CurrentValue = '';
          }
          return;
        }

        const diff = Y - X;
        const pctChange = (diff / Math.abs(X)) * 100;
        const diffFormatted = (diff >= 0 ? '+' : '') + formatNumber(diff, 4);

        if (pctChange > 0) {
          const formatted = '+' + formatNumber(pctChange, 2) + '%';
          m3CurrentValue = formatted;
          m3Result.textContent = formatted;
          m3Result.className = 'result-value text-success';
          m3Badge.className = 'change-badge increase';
          m3Badge.innerHTML = `
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            <span>+${formatNumber(pctChange, 2)}% Increase</span>
          `;
          m3Formula.textContent = `((${formatNumber(Y, 4)} - ${formatNumber(X, 4)}) ÷ |${formatNumber(X, 4)}|) × 100 = ${formatted}`;
          m3Sentence.innerHTML = `An increase of <strong>${formatted}</strong> (absolute difference of ${diffFormatted}).`;
        } else if (pctChange < 0) {
          const formatted = formatNumber(pctChange, 2) + '%';
          m3CurrentValue = formatted;
          m3Result.textContent = formatted;
          m3Result.className = 'result-value text-danger';
          m3Badge.className = 'change-badge decrease';
          m3Badge.innerHTML = `
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            <span>${formatNumber(Math.abs(pctChange), 2)}% Decrease</span>
          `;
          m3Formula.textContent = `((${formatNumber(Y, 4)} - ${formatNumber(X, 4)}) ÷ |${formatNumber(X, 4)}|) × 100 = ${formatted}`;
          m3Sentence.innerHTML = `A decrease of <strong>${formatNumber(Math.abs(pctChange), 2)}%</strong> (absolute difference of ${diffFormatted}).`;
        } else {
          m3CurrentValue = '0.00%';
          m3Result.textContent = '0.00%';
          m3Result.className = 'result-value';
          m3Badge.className = 'change-badge neutral';
          m3Badge.innerHTML = '<span>No Change</span>';
          m3Formula.textContent = `Both values are identical (${formatNumber(X, 4)})`;
          m3Sentence.innerHTML = `No change between ${formatNumber(X, 4)} and ${formatNumber(Y, 4)}.`;
        }

        m3Copy.setAttribute('aria-label', `Copy result ${m3CurrentValue}`);
      }

      m3Initial.addEventListener('input', calcModule3);
      m3Final.addEventListener('input', calcModule3);

      m3Copy.addEventListener('click', () => {
        if (m3CurrentValue) {
          copyText(m3CurrentValue, m3Copy, `Copied ${m3CurrentValue} to clipboard`);
        }
      });

      m3Reset.addEventListener('click', () => {
        m3Initial.value = '';
        m3Final.value = '';
        calcModule3();
        m3Initial.focus();
      });

      m3Swap.addEventListener('click', () => {
        const temp = m3Initial.value;
        m3Initial.value = m3Final.value;
        m3Final.value = temp;
        calcModule3();
      });

      // --- Initialize i18n & Calculations ---
      const initialLang = localStorage.getItem('vantorkit_lang') || 'en';
      setLanguage(initialLang);

      calcModule1();
      calcModule2();
      calcModule3();
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
        "title": "Percentage Calculator – Fast Percent & Change Math",
        "desc": "Compute percentage increases, proportion differences, and custom discounts with instant feedback. All math evaluates locally on your device."
    },
    "ar": {
        "title": "حاسبة النسبة المئوية – حساب النسب والزيادة بدقة",
        "desc": "احسب النسبة المئوية ومعدلات الزيادة والنقصان وتغير القيم في الوقت الفعلي مع معالجة محلية كاملة داخل متصفحك دون إرسال أي بيانات."
    },
    "fr": {
        "title": "Calculateur de Pourcentage – Calculs et Variations",
        "desc": "Calculez les pourcentages, augmentations et remises en temps réel. Traitement direct et confidentiel dans votre navigateur sans téléversement."
    },
    "it": {
        "title": "Calcolatore di Percentuale – Variazioni e Quote",
        "desc": "Calcola percentuali, aumenti e sconti all'istante sul tuo dispositivo. Tutte le operazioni matematiche avvengono localmente nel browser."
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