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
          termsBadge: "Legal Agreement",
          termsTitle: 'Terms of <span style="background:linear-gradient(135deg,#a855f7 0%,#60a5fa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Service</span>',
          termsSubtitle: "Please review the rules, acceptable use standards, and liability disclaimers that govern your use of the VantorKit utility platform.",
          termsUpdated: "Last Updated: September 26, 2026 • Effective Date: September 26, 2026",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
          termsBadge: "اتفاقية قانونية",
          termsTitle: 'شروط <span style="background:linear-gradient(135deg,#a855f7 0%,#60a5fa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">الخدمة</span>',
          termsSubtitle: "يرجى قراءة القواعد ومعايير الاستخدام المقبول وإخلاء المسؤولية القانونية التي تحكم استخدامك لمنصة فانتوركيت.",
          termsUpdated: "آخر تحديث: 26 سبتمبر 2026 • تاريخ السريان: 26 سبتمبر 2026",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
        },
        fr: {
          termsBadge: "Accord Juridique",
          termsTitle: 'Conditions d\'<span style="background:linear-gradient(135deg,#a855f7 0%,#60a5fa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Utilisation</span>',
          termsSubtitle: "Veuillez consulter les règles, conditions d'utilisation équitable et clauses de non-responsabilité régissant VantorKit.",
          termsUpdated: "Dernière mise à jour : 26 septembre 2026",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur."
        },
        it: {
          termsBadge: "Accordo Legale",
          termsTitle: 'Termini di <span style="background:linear-gradient(135deg,#a855f7 0%,#60a5fa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Servizio</span>',
          termsSubtitle: "Consulta le regole di utilizzo corretto, le esclusioni di responsabilità e le condizioni d'uso di VantorKit.",
          termsUpdated: "Ultimo aggiornamento: 26 settembre 2026",
          footerPriv: "Informativa sulla privacy",
          footerTerms: "Termini di servizio",
          footerAbout: "Chi siamo",
          footerContact: "Contatti",
          footerText: "© 2026 VantorKit. Utilità web veloci, gratuite e private. Tutta l'elaborazione viene eseguita localmente nel browser."
        }
      };

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