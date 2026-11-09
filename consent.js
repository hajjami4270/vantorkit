/**
 * VantorKit — Privacy-First Analytics Consent Manager
 * Loads Google Analytics 4 (G-S8MDMH082N) strictly after explicit user consent.
 * Before consent or after decline/revocation: zero requests to Google domains and zero analytics cookies.
 */
(function () {
  'use strict';

  var GA_MEASUREMENT_ID = 'G-S8MDMH082N';
  var STORAGE_KEY = 'vantorkit_analytics_consent';
  var GTAG_SCRIPT_ID = 'vk-gtag-script';

  // Default to disabled until explicit consent is verified
  window['ga-disable-' + GA_MEASUREMENT_ID] = true;

  var I18N = {
    en: {
      regionLabel: 'Privacy and analytics preferences',
      message: 'Your files and text never leave your browser. Allow optional anonymous analytics (Google Analytics) to help us improve VantorKit?',
      policyLink: 'Privacy Policy',
      accept: 'Accept',
      decline: 'Decline',
      settingsLink: 'Privacy settings'
    },
    ar: {
      regionLabel: 'تفضيلات الخصوصية والتحليلات',
      message: 'ملفاتك ونصوصك لا تغادر متصفحك أبداً. هل تسمح بتحليلات الاستخدام المجهولة الاختيارية (Google Analytics) للمساعدة في تحسين فانتوركيت؟',
      policyLink: 'سياسة الخصوصية',
      accept: 'قبول',
      decline: 'رفض',
      settingsLink: 'إعدادات الخصوصية'
    },
    fr: {
      regionLabel: 'Préférences de confidentialité et d’analyse',
      message: 'Vos fichiers et textes ne quittent jamais votre navigateur. Autoriser les analyses anonymes facultatives (Google Analytics) pour améliorer VantorKit ?',
      policyLink: 'Politique de confidentialité',
      accept: 'Accepter',
      decline: 'Refuser',
      settingsLink: 'Paramètres de confidentialité'
    },
    it: {
      regionLabel: 'Preferenze sulla privacy e statistiche',
      message: 'I tuoi file e testi non lasciano mai il tuo browser. Consentire statistiche anonime facoltative (Google Analytics) per migliorare VantorKit?',
      policyLink: 'Informativa sulla privacy',
      accept: 'Accetta',
      decline: 'Rifiuta',
      settingsLink: 'Impostazioni privacy'
    }
  };

  function getActiveLang() {
    var htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase().trim();
    if (I18N[htmlLang]) return htmlLang;
    try {
      var saved = (window.localStorage.getItem('vantorkit_lang') || '').toLowerCase().trim();
      if (I18N[saved]) return saved;
    } catch (e) {}
    return 'en';
  }

  function getStoredConsent() {
    try {
      var val = window.localStorage.getItem(STORAGE_KEY);
      if (val === 'accepted' || val === 'declined') {
        return val;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  function saveConsentChoice(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
      return true;
    } catch (e) {
      // Storage blocked: stay un-consented and ask each visit
      return false;
    }
  }

  function clearAnalyticsCookies() {
    try {
      var rawCookies = document.cookie ? document.cookie.split(';') : [];
      var cookieNames = ['_ga', '_ga_' + GA_MEASUREMENT_ID.replace(/^G-/, ''), '_gid', '_gat'];

      for (var i = 0; i < rawCookies.length; i++) {
        var part = rawCookies[i];
        var eqIdx = part.indexOf('=');
        var name = (eqIdx > -1 ? part.substring(0, eqIdx) : part).trim();
        if (
          name.indexOf('_ga') === 0 ||
          name.indexOf('_gid') === 0 ||
          name.indexOf('_gat') === 0
        ) {
          if (cookieNames.indexOf(name) === -1) {
            cookieNames.push(name);
          }
        }
      }

      var host = window.location.hostname || '';
      var domains = ['', host];
      if (host) {
        domains.push('.' + host);
        var segments = host.split('.');
        if (segments.length >= 2) {
          var baseDomain = segments.slice(-2).join('.');
          domains.push(baseDomain);
          domains.push('.' + baseDomain);
        }
      }

      var pathname = window.location.pathname || '/';
      var paths = ['/'];
      if (pathname !== '/') {
        paths.push(pathname);
      }

      var expireStr = 'Thu, 01 Jan 1970 00:00:00 GMT';
      for (var c = 0; c < cookieNames.length; c++) {
        var cName = cookieNames[c];
        for (var d = 0; d < domains.length; d++) {
          var dom = domains[d];
          var domAttr = dom ? '; domain=' + dom : '';
          for (var p = 0; p < paths.length; p++) {
            document.cookie =
              cName + '=; expires=' + expireStr + '; Max-Age=0; path=' + paths[p] + domAttr + '; SameSite=Lax';
          }
        }
      }
    } catch (e) {}
  }

  function disableAndPurgeGA4() {
    window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    if (typeof window.gtag === 'function') {
      window.gtag = function () {};
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.length = 0;
    }
    var existingScript = document.getElementById(GTAG_SCRIPT_ID);
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }
    clearAnalyticsCookies();
  }

  function enableAndLoadGA4() {
    if (document.documentElement.hasAttribute('data-vk-no-ga')) {
      return;
    }
    window['ga-disable-' + GA_MEASUREMENT_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

    if (!document.getElementById(GTAG_SCRIPT_ID)) {
      var s = document.createElement('script');
      s.id = GTAG_SCRIPT_ID;
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function injectStyles() {
    if (document.getElementById('vk-consent-styles')) return;
    var style = document.createElement('style');
    style.id = 'vk-consent-styles';
    style.textContent =
      '.vk-consent-banner{' +
      'position:fixed;bottom:0;left:0;right:0;z-index:950;' +
      'background:rgba(8, 9, 11, 0.95);' +
      'border-top:1px solid rgba(255, 255, 255, 0.1);' +
      'box-shadow:0 -8px 32px rgba(0, 0, 0, 0.65);' +
      'backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);' +
      'color:#F1F2F4;padding:0.65rem 1rem;' +
      'font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      '}' +
      'html[dir="rtl"] .vk-consent-banner{' +
      'font-family:"Cairo",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
      '}' +
      '.vk-consent-banner[hidden]{display:none !important;}' +
      '.vk-consent-inner{' +
      'max-width:1160px;margin:0 auto;' +
      'display:flex;align-items:center;justify-content:space-between;gap:0.85rem;flex-wrap:wrap;' +
      '}' +
      '.vk-consent-text{' +
      'font-size:0.8125rem;line-height:1.45;color:#A1A6AE;flex:1 1 320px;margin:0;' +
      '}' +
      '.vk-consent-policy-link{' +
      'color:#F1F2F4;text-decoration:underline;text-underline-offset:2px;font-weight:500;margin-inline-start:0.35rem;white-space:nowrap;' +
      '}' +
      '.vk-consent-policy-link:hover{color:#FFFFFF;}' +
      '.vk-consent-policy-link:focus-visible{' +
      'outline:2px solid #7C7FF2;outline-offset:2px;border-radius:4px;' +
      '}' +
      '.vk-consent-actions{' +
      'display:flex;align-items:center;gap:0.55rem;flex-shrink:0;' +
      '}' +
      '.vk-consent-btn{' +
      'appearance:none;-webkit-appearance:none;' +
      'border-radius:8px;padding:0.42rem 0.95rem;' +
      'min-width:92px;min-height:34px;' +
      'font-size:0.8125rem;line-height:1.2;' +
      'cursor:pointer;transition:background 0.16s ease,border-color 0.16s ease,color 0.16s ease,opacity 0.16s ease;' +
      'text-align:center;font-family:inherit;' +
      '}' +
      '#vkConsentAccept{' +
      'background:#F1F2F4;color:#08090B;font-weight:600;border:1px solid #F1F2F4;' +
      '}' +
      '#vkConsentAccept:hover{' +
      'opacity:0.92;' +
      '}' +
      '#vkConsentDecline{' +
      'background:rgba(255, 255, 255, 0.05);border:1px solid rgba(255, 255, 255, 0.1);color:#A1A6AE;font-weight:500;' +
      '}' +
      '#vkConsentDecline:hover{' +
      'background:rgba(255, 255, 255, 0.08);border-color:rgba(255, 255, 255, 0.16);color:#F1F2F4;' +
      '}' +
      '.vk-consent-btn:focus-visible{' +
      'outline:2px solid #7C7FF2;outline-offset:2px;' +
      '}' +
      '.vk-privacy-settings-link{' +
      'background:none;border:none;padding:0;margin:0;' +
      'color:var(--text-secondary,#A1A6AE);font-size:0.8125rem;font-weight:500;' +
      'cursor:pointer;font-family:inherit;text-decoration:none;transition:color 0.16s ease;' +
      '}' +
      '.vk-privacy-settings-link:hover{color:#F1F2F4 !important;}' +
      '.vk-privacy-settings-link:focus-visible{' +
      'outline:2px solid #7C7FF2;outline-offset:2px;border-radius:4px;' +
      '}' +
      'body.vk-consent-open{padding-bottom:4.75rem;}' +
      '@media (max-width:640px){' +
      '.vk-consent-banner{padding:0.55rem 0.75rem;}' +
      '.vk-consent-inner{gap:0.5rem;}' +
      '.vk-consent-text{font-size:0.75rem;line-height:1.38;flex:1 1 100%;}' +
      '.vk-consent-actions{width:100%;justify-content:flex-end;gap:0.5rem;}' +
      '.vk-consent-btn{flex:1 1 0;min-height:36px;padding:0.4rem 0.65rem;font-size:0.78rem;}' +
      'body.vk-consent-open{padding-bottom:5.75rem;}' +
      '}';
    (document.head || document.documentElement).appendChild(style);
  }

  var bannerEl = null;
  var msgSpanEl = null;
  var policyLinkEl = null;
  var acceptBtnEl = null;
  var declineBtnEl = null;
  var footerBtnEl = null;

  function updateTranslations() {
    var lang = getActiveLang();
    var t = I18N[lang] || I18N.en;
    var isRtl = lang === 'ar';

    if (bannerEl) {
      bannerEl.setAttribute('aria-label', t.regionLabel);
      bannerEl.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    }
    if (msgSpanEl) {
      msgSpanEl.textContent = t.message;
    }
    if (policyLinkEl) {
      policyLinkEl.textContent = t.policyLink;
    }
    if (acceptBtnEl) {
      acceptBtnEl.textContent = t.accept;
    }
    if (declineBtnEl) {
      declineBtnEl.textContent = t.decline;
    }
    var settingsLinks = document.querySelectorAll('.vk-privacy-settings-link');
    for (var i = 0; i < settingsLinks.length; i++) {
      settingsLinks[i].textContent = t.settingsLink;
    }
  }

  function showBanner(moveFocus) {
    if (!bannerEl) {
      createBannerDOM();
    }
    updateTranslations();
    bannerEl.hidden = false;
    if (document.body) {
      document.body.classList.add('vk-consent-open');
    }
    if (moveFocus && acceptBtnEl) {
      acceptBtnEl.focus();
    }
  }

  function hideBanner() {
    if (bannerEl) {
      bannerEl.hidden = true;
    }
    if (document.body) {
      document.body.classList.remove('vk-consent-open');
    }
  }

  function handleAccept() {
    var persisted = saveConsentChoice('accepted');
    hideBanner();
    if (persisted) {
      enableAndLoadGA4();
    } else {
      // Storage is blocked: stay un-consented per privacy policy
      disableAndPurgeGA4();
    }
  }

  function handleDecline() {
    saveConsentChoice('declined');
    disableAndPurgeGA4();
    hideBanner();
  }

  function createBannerDOM() {
    if (bannerEl) return;
    injectStyles();

    bannerEl = document.createElement('div');
    bannerEl.id = 'vkConsentBanner';
    bannerEl.className = 'vk-consent-banner';
    bannerEl.setAttribute('role', 'region');
    bannerEl.hidden = true;

    var inner = document.createElement('div');
    inner.className = 'vk-consent-inner';

    var p = document.createElement('p');
    p.className = 'vk-consent-text';

    msgSpanEl = document.createElement('span');
    msgSpanEl.id = 'vkConsentMessage';
    p.appendChild(msgSpanEl);

    policyLinkEl = document.createElement('a');
    policyLinkEl.id = 'vkConsentPolicyLink';
    policyLinkEl.className = 'vk-consent-policy-link';
    policyLinkEl.href = '/privacy.html';
    p.appendChild(policyLinkEl);

    var actions = document.createElement('div');
    actions.className = 'vk-consent-actions';

    acceptBtnEl = document.createElement('button');
    acceptBtnEl.type = 'button';
    acceptBtnEl.id = 'vkConsentAccept';
    acceptBtnEl.className = 'vk-consent-btn';
    acceptBtnEl.addEventListener('click', handleAccept);

    declineBtnEl = document.createElement('button');
    declineBtnEl.type = 'button';
    declineBtnEl.id = 'vkConsentDecline';
    declineBtnEl.className = 'vk-consent-btn';
    declineBtnEl.addEventListener('click', handleDecline);

    actions.appendChild(acceptBtnEl);
    actions.appendChild(declineBtnEl);

    inner.appendChild(p);
    inner.appendChild(actions);
    bannerEl.appendChild(inner);

    if (document.body) {
      document.body.appendChild(bannerEl);
    }
  }

  function ensureFooterSettingsLink() {
    injectStyles();
    var footerNav = document.querySelector('.footer-links');
    if (!footerNav) return;

    var existing = footerNav.querySelector('.vk-privacy-settings-link');
    if (existing) {
      footerBtnEl = existing;
    } else {
      footerBtnEl = document.createElement('button');
      footerBtnEl.type = 'button';
      footerBtnEl.id = 'vkPrivacySettingsBtn';
      footerBtnEl.className = 'footer-link vk-privacy-settings-link';

      // Insert right after Contact or Privacy Policy link, before external icon links
      var firstIconLink = footerNav.querySelector('.footer-github-link, .footer-x-link, .footer-fazier-link');
      if (firstIconLink) {
        footerNav.insertBefore(footerBtnEl, firstIconLink);
      } else {
        footerNav.appendChild(footerBtnEl);
      }
    }

    if (!footerBtnEl.hasAttribute('data-vk-bound')) {
      footerBtnEl.setAttribute('data-vk-bound', 'true');
      footerBtnEl.addEventListener('click', function (e) {
        e.preventDefault();
        // Reopening Privacy settings allows changing choice or revoking consent immediately
        if (getStoredConsent() === 'accepted') {
          // Immediately stop GA4 & clear _ga cookies on revoke/reopen, then let user choose again
          saveConsentChoice('declined');
          disableAndPurgeGA4();
        }
        showBanner(true);
      });
    }

    updateTranslations();
  }

  function observeLanguageChanges() {
    if (typeof MutationObserver === 'undefined') return;
    var observer = new MutationObserver(function () {
      updateTranslations();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir']
    });
  }

  function initConsent() {
    createBannerDOM();
    ensureFooterSettingsLink();
    observeLanguageChanges();

    var consent = getStoredConsent();
    if (consent === 'accepted') {
      enableAndLoadGA4();
      hideBanner();
    } else if (consent === 'declined') {
      disableAndPurgeGA4();
      hideBanner();
    } else {
      // No stored choice (first visit or storage blocked)
      disableAndPurgeGA4();
      showBanner(false);
    }
  }

  // Expose public helper for Privacy Policy page or manual revocation triggers
  window.VantorKitConsent = {
    openSettings: function () {
      if (getStoredConsent() === 'accepted') {
        saveConsentChoice('declined');
        disableAndPurgeGA4();
      }
      showBanner(true);
    },
    accept: handleAccept,
    decline: handleDecline,
    revoke: handleDecline,
    getStatus: getStoredConsent
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsent);
  } else {
    initConsent();
  }
})();

