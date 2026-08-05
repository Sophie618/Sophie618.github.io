(() => {
  const tools = document.querySelector('.blog-tools');
  if (!tools) return;
  const key = 'blog-reading-theme';
  const buttons = [...tools.querySelectorAll('[data-reading-theme]')];
  const apply = (theme) => {
    if (theme) document.body.dataset.readingTheme = theme;
    else delete document.body.dataset.readingTheme;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.readingTheme === theme)));
  };
  apply(localStorage.getItem(key));
  buttons.forEach((button) => button.addEventListener('click', () => {
    const next = document.body.dataset.readingTheme === button.dataset.readingTheme ? '' : button.dataset.readingTheme;
    if (next) localStorage.setItem(key, next); else localStorage.removeItem(key);
    apply(next);
  }));
})();
