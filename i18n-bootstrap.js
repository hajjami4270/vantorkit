(function() {
  try {
    var s = localStorage.getItem('vantorkit_lang');
    if (s) {
      document.documentElement.setAttribute('lang', s);
      document.documentElement.setAttribute('dir', s === 'ar' ? 'rtl' : 'ltr');
    }
  } catch (e) {}
})();
