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
          aboutBadge: "About VantorKit",
          aboutTitle: 'Empowering Productivity Through <span style="background:linear-gradient(135deg,#34d399 0%,#38bdf8 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Private Web Utilities</span>',
          aboutSubtitle: "We build fast, client-side digital tools that respect your time, bandwidth, and personal data privacy.",
          aboutSec1Title: "Our Mission: High-Speed Tools Without Privacy Compromises",
          stat1: "Production Tools",
          stat2: "Client-Side Processed",
          stat3: "Server File Uploads",
          stat4: "Global Languages",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
          aboutBadge: "عن فانتوركيت",
          aboutTitle: 'تمكين الإنتاجية من خلال <span style="background:linear-gradient(135deg,#34d399 0%,#38bdf8 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">أدوات ويب خاصة وآمنة</span>',
          aboutSubtitle: "نحن نبني أدوات رقمية سريعة تعمل داخل المتصفح تحترم وقتك وسرعة اتصالك وخصوصية بياناتك الشخصية.",
          aboutSec1Title: "مهمتنا: أدوات فائقة السرعة بدون التضحية بالخصوصية",
          stat1: "أداة إنتاجية جاهزة",
          stat2: "معالجة محلية بالكامل",
          stat3: "رفع ملفات إلى الخادم",
          stat4: "لغات عالمية",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
        },
        fr: {
          aboutBadge: "À propos de VantorKit",
          aboutTitle: 'La productivité grâce aux <span style="background:linear-gradient(135deg,#34d399 0%,#38bdf8 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Utilitaires Web Privés</span>',
          aboutSubtitle: "Des outils numériques rapides côté client qui respectent votre temps, votre bande passante et votre vie privée.",
          aboutSec1Title: "Notre Mission : Rapidité et Respect de la Confidentialité",
          stat1: "Outils de Production",
          stat2: "Traitement Côté Client",
          stat3: "Téléchargements Serveur",
          stat4: "Langues Supportées",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur."
        },
        it: {
          aboutBadge: "Informazioni su VantorKit",
          aboutTitle: 'Potenziare la produttività con <span style="background:linear-gradient(135deg,#34d399 0%,#38bdf8 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Utilità Web Private</span>',
          aboutSubtitle: "Sviluppiamo strumenti veloci lato client che rispettano il tuo tempo, la larghezza di banda e la privacy dei dati.",
          aboutSec1Title: "La Nostra Missione: Massima Velocità Senza Compromessi",
          stat1: "Strumenti Pronti",
          stat2: "Elaborazione Locale",
          stat3: "File Inviati al Server",
          stat4: "Lingue Supportate",
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