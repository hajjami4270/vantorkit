/**
 * VantorKit Blog Subsystem Logic
 * Zero Backend • Strict CSP Compliant • Client-Side Only
 */

(function () {
  'use strict';

  // --- Reading Progress Indicator ---
  function initReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', function () {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }, { passive: true });
  }

  // --- Code Copy Buttons ---
  function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.code-copy-btn');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const codeEl = targetId ? document.getElementById(targetId) : btn.closest('.code-box')?.querySelector('code');
        if (!codeEl) return;

        const textToCopy = codeEl.textContent || '';
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="color:#10b981;">Copied!</span>
          `;
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          // Fallback if clipboard API is unavailable
        });
      });
    });
  }

  // --- Language Switcher & Localization Logic ---
  const LANG_NAMES = { en: 'English', ar: 'العربية', fr: 'Français', it: 'Italiano' };
  const BACK_TO_TOOLS_LABELS = {
    en: '← All 32 Utilities',
    ar: '← كافة الأدوات (32)',
    fr: '← Tous les 32 outils',
    it: '← Tutte le 32 utilità'
  };

  function initLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const toggleBtn = document.getElementById('langToggleBtn');
    const menu = document.getElementById('langMenu');
    if (!dropdown || !toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    menu.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', function () {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          try {
            localStorage.setItem('vantorkit_lang', selectedLang);
          } catch (err) {}
          applyLang(selectedLang);
          dropdown.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function applyLang(lang) {
    if (!LANG_NAMES[lang]) lang = 'en';
    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    const label = document.getElementById('currentLangLabel');
    if (label) label.textContent = LANG_NAMES[lang];

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    const backToolsLink = document.querySelector('.nav-tools-link span');
    if (backToolsLink && BACK_TO_TOOLS_LABELS[lang]) {
      backToolsLink.textContent = BACK_TO_TOOLS_LABELS[lang];
    }
  }

  // --- Initial Setup on DOM Ready ---
  document.addEventListener('DOMContentLoaded', function () {
    initReadingProgress();
    initCodeCopy();
    initLangDropdown();

    // Check stored language
    let lang = 'en';
    try {
      const stored = localStorage.getItem('vantorkit_lang');
      if (stored && LANG_NAMES[stored]) lang = stored;
    } catch (e) {}
    applyLang(lang);
  });
})();
