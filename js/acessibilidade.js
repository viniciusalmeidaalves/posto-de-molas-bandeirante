const accessibilityMenuToggle = document.getElementById('menu-toggle');
const accessibilityNavigation = document.getElementById('nav');

if (accessibilityMenuToggle && accessibilityNavigation) {
  accessibilityMenuToggle.addEventListener('click', () => {
      setTimeout(() => {
        accessibilityMenuToggle.setAttribute('aria-expanded', String(accessibilityNavigation.classList.contains('active')));
      }, 0);
  });

  accessibilityNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      accessibilityNavigation.classList.remove('active');
      accessibilityMenuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}