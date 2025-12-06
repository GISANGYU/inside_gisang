// 1. Desktop Background Hover Logic
const mainStage = document.getElementById('main-stage');
const wrappers = document.querySelectorAll('.char-wrapper');
// 이벤트 리스너 등록
wrappers.forEach((wrapper) => {
  wrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1024) {
      const themeName = wrapper.getAttribute('data-theme');
      removeThemeClasses();
      void mainStage.offsetWidth;
      mainStage.classList.add(themeName);
    }
  });
  // 마우스 리브 이벤트 등록
  wrapper.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1024) removeThemeClasses();
  });
});
// 테마 클래스 제거 함수
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
// 열기/닫기 함수
function openMenu() {
  mobileMenu.classList.add('open');
  mobileBackdrop.classList.add('open');
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileBackdrop.classList.remove('open');
}
// 이벤트 리스너 등록
menuToggle.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileBackdrop.addEventListener('click', (e) => {
  if (e.target === mobileBackdrop) closeMenu();
});
