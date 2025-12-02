// 1. Desktop Background Hover Logic
const mainStage = document.getElementById('main-stage');
const wrappers = document.querySelectorAll('.char-wrapper');

wrappers.forEach((wrapper) => {
  wrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1024) {
      const themeName = wrapper.getAttribute('data-theme');
      removeThemeClasses();
      void mainStage.offsetWidth;
      mainStage.classList.add(themeName);
    }
  });
  wrapper.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1024) removeThemeClasses();
  });
});

function removeThemeClasses() {
  mainStage.classList.remove(
    'theme-purple',
    'theme-blue',
    'theme-red',
    'theme-yellow',
    'theme-green'
  );
}

// 2. Mobile Menu Toggle Logic
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileClose = document.getElementById('mobile-menu-close');

function openMenu() {
  mobileMenu.classList.add('open');
  mobileBackdrop.classList.add('open');
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileBackdrop.classList.remove('open');
}

menuToggle.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileBackdrop.addEventListener('click', (e) => {
  if (e.target === mobileBackdrop) closeMenu();
});
