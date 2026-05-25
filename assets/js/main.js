/* INLINE AD — page init */
(function () {
  const i18n = window.INLINEAD_I18N;
  const forms = window.INLINEAD_FORMS;

  document.getElementById('langToggle')?.addEventListener('click', () => i18n.toggleLang());

  const wa = document.querySelector('a.nav-cta');
  const num = window.INLINEAD && window.INLINEAD.whatsappNumber;
  if (wa && num) wa.href = `https://wa.me/${String(num).replace(/\D/g, '')}`;

  forms.wireForm('brandForm', 'brandThanks', 'brand');
  forms.wireForm('gymForm', 'gymThanks', 'gym');

  if (location.search.includes('intent=gym')) {
    setTimeout(() => document.getElementById('gym-form')?.scrollIntoView({ behavior: 'smooth' }), 300);
  }
  if (location.search.includes('intent=brand')) {
    setTimeout(() => document.getElementById('brand-form')?.scrollIntoView({ behavior: 'smooth' }), 300);
  }

  i18n.applyLang();
})();
