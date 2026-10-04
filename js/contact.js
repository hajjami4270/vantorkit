(function() {
      // Handle contact form submission via mailto link
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const name = document.getElementById('senderName').value.trim();
          const email = document.getElementById('senderEmail').value.trim();
          const category = document.getElementById('inquiryType').value;
          const message = document.getElementById('senderMessage').value.trim();

          const subject = encodeURIComponent(`[VantorKit Support] ${category} from ${name}`);
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}\n\n---\nSent via VantorKit Contact Portal`);

          window.location.href = `mailto:contact@vantorkit.com?subject=${subject}&body=${body}`;
        });
      }

      // Language Switcher & RTL Sync
      const LANG_NAMES = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
      const BACK_LABELS = {
        en: '← Back to Tools',
        ar: 'الرجوع إلى الأدوات ←',
        fr: '← Retour aux outils',
        it: '← Torna agli strumenti'
      };

      const I18N_PAGE = {
        en: {
          contactBadge: "Support & Community",
          contactTitle: 'Get in <span>Touch</span>',
          contactSubtitle: "Have questions, feedback, or a tool suggestion? We are dedicated to providing fast, transparent support for all VantorKit users.",
          formTitle: "Send Us a Direct Message",
          formDesc: "Fill out this quick form to initiate an email inquiry directly to our engineering and support desk.",
          lblYourName: "Your Name",
          lblYourEmail: "Email Address",
          lblCategory: "Inquiry Category",
          lblMessage: "Message",
          btnSend: "Dispatch Inquiry",
          formNote: "This opens your default email client with your message securely pre-filled. We never log form entries on our servers.",
          slaText: "Our typical response turnaround is within <strong>24 to 48 business hours</strong>. All inquiries are reviewed directly by our core development team.",
          footerPriv: "Privacy Policy",
          footerTerms: "Terms of Service",
          footerAbout: "About Us",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Fast, Private & Free Web Utilities. All client processing is performed locally in your browser."
        },
        ar: {
          contactBadge: "الدعم والمجتمع",
          contactTitle: 'تواصل <span>معنا</span>',
          contactSubtitle: "هل لديك أسئلة، اقتراحات لأداة جديدة، أو ملاحظات؟ نحن حريصون على تقديم دعم سريع وشفاف لجميع مستخدمي فانتوركيت.",
          formTitle: "أرسل لنا رسالة مباشرة",
          formDesc: "املأ هذا النموذج السريع لإرسال استفسارك مباشرة إلى فريق الهندسة والدعم الفني.",
          lblYourName: "الاسم الكامل",
          lblYourEmail: "البريد الإلكتروني",
          lblCategory: "نوع الاستفسار",
          lblMessage: "نص الرسالة",
          btnSend: "إرسال الاستفسار",
          formNote: "سيتم فتح برنامج البريد الإلكتروني الافتراضي لديك مع تعبئة الرسالة مسبقاً. نحن لا نحفظ أي مدخلات على خوادمنا.",
          slaText: "يتم الرد عادة في غضون <strong>24 إلى 48 ساعة عمل</strong>. تتم مراجعة كافة الرسائل مباشرة من قبل فريق التطوير الأساسي.",
          footerPriv: "سياسة الخصوصية",
          footerTerms: "شروط الخدمة",
          footerAbout: "من نحن",
          footerContact: "اتصل بنا",
          footerText: "© 2026 فانتوركيت. أدوات ويب سريعة ومجانية تحترم الخصوصية. تتم جميع المعالجة محلياً في متصفحك."
        },
        fr: {
          contactBadge: "Support & Communauté",
          contactTitle: 'Contactez-<span>Nous</span>',
          contactSubtitle: "Des questions, des suggestions ou un retour d'expérience ? Notre équipe est à votre écoute pour un support rapide et transparent.",
          formTitle: "Envoyez-nous un Message Direct",
          formDesc: "Remplissez ce formulaire pour envoyer votre demande directement à notre équipe technique.",
          lblYourName: "Votre Nom",
          lblYourEmail: "Adresse E-mail",
          lblCategory: "Catégorie de la demande",
          lblMessage: "Message",
          btnSend: "Envoyer le Message",
          formNote: "Cela ouvre votre messagerie par défaut avec le message pré-rempli. Aucun formulaire n'est enregistré sur nos serveurs.",
          slaText: "Notre délai de réponse habituel est de <strong>24 à 48 heures ouvrées</strong>.",
          footerPriv: "Politique de confidentialité",
          footerTerms: "Conditions d'utilisation",
          footerAbout: "À propos",
          footerContact: "Contact",
          footerText: "© 2026 VantorKit. Utilitaires Web rapides, gratuits et privés. Tout le traitement est effectué localement dans votre navigateur."
        },
        it: {
          contactBadge: "Supporto e Community",
          contactTitle: 'Mettiti in <span>Contatto</span>',
          contactSubtitle: "Hai domande, suggerimenti o feedback? Siamo a tua disposizione per fornirti un supporto rapido e trasparente.",
          formTitle: "Inviaci un Messaggio Diretto",
          formDesc: "Compila questo modulo per inoltrare la tua richiesta direttamente al team di sviluppo.",
          lblYourName: "Il Tuo Nome",
          lblYourEmail: "Indirizzo Email",
          lblCategory: "Categoria",
          lblMessage: "Messaggio",
          btnSend: "Invia Richiesta",
          formNote: "Si aprirà il tuo client di posta predefinito con il messaggio precompilato. Nessun dato viene salvato sui server.",
          slaText: "Il tempo medio di risposta è di <strong>24-48 ore lavorative</strong>.",
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