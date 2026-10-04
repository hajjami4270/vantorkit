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
          privSubtitle: "VantorKit is built around an uncompromising zero-server data collection architecture. Your files, calculations, and inputs remain 100% on your device.",
          privUpdated: "Last Updated: September 26, 2026 • Effective Date: September 26, 2026",
          privZeroTitle: "100% Client-Side Architecture Guarantee",
          privZeroDesc: "When you use VantorKit utilities—including PDF mergers, image converters, formatters, and calculators—all computing execution occurs locally within your web browser using HTML5 Canvas, the Web Crypto API, and WebAssembly. No documents, photos, text contents, or calculation parameters are ever transmitted to or stored on our servers.",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
          privBadge: "الخصوصية وحماية البيانات",
          privTitle: 'سياسة <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">الخصوصية</span>',
          privSubtitle: "تم بناء فانتوركيت حول معمارية صارمة لا تجمع أي بيانات على الخوادم. ملفاتك وحساباتك ومدخلاتك تبقى بنسبة 100% على جهازك الشخصي.",
          privUpdated: "آخر تحديث: 26 سبتمبر 2026 • تاريخ السريان: 26 سبتمبر 2026",
          privZeroTitle: "ضمان المعالجة المحلية 100% في المتصفح",
          privZeroDesc: "عند استخدام أي من أدوات فانتوركيت—بما فيها دمج ملفات PDF ومحولات الصور والآلات الحاسبة—تتم المعالجة بالكامل داخل متصفحك المحلي دون إرسال أي ملفات أو نصوص إلى خوادمنا إطلاقاً.",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
        },
        fr: {
          privBadge: "Confidentialité & Protection des données",
          privTitle: 'Politique de <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Confidentialité</span>',
          privSubtitle: "VantorKit repose sur une architecture sans collecte de données sur serveur. Vos fichiers et calculs restent à 100% sur votre appareil.",
          privUpdated: "Dernière mise à jour : 26 septembre 2026",
          privZeroTitle: "Garantie 100% Client-Side",
          privZeroDesc: "Toutes les opérations s'exécutent directement dans votre navigateur via HTML5 et WebAssembly. Aucun fichier n'est transmis à nos serveurs.",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur."
        },
        it: {
          privBadge: "Privacy e Protezione Dati",
          privTitle: 'Informativa sulla <span style="background:linear-gradient(135deg,#60a5fa 0%,#c084fc 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Privacy</span>',
          privSubtitle: "VantorKit è sviluppato con un'architettura client-side che non raccoglie dati sui server. I tuoi file e calcoli rimangono al 100% sul tuo dispositivo.",
          privUpdated: "Ultimo aggiornamento: 26 settembre 2026",
          privZeroTitle: "Garanzia di Elaborazione Locale al 100%",
          privZeroDesc: "Tutti gli strumenti elaborano i dati localmente nel browser. Nessun file o testo viene mai trasmesso o salvato sui nostri server.",
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

        // Apply translations
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