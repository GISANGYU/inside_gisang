// --- 1. 데이터 ---
const coreMemories = [
  {
    id: 1,
    date: '2025-02-27',
    title: '나의 첫 대학교 입학식',
    emotion: 'yellow',
    image: 'img/img_01.jpg',
    desc: `26살, 늦었다면 늦은 나이.<br>하지만 내 인생에서 가장 빛나는 도전이 시작된 날이다.<br>걱정보다는 설렘이 앞섰던 순간.`,
  },
  {
    id: 2,
    date: '2025-03-15',
    title: '첫 과제 발표의 날',
    emotion: 'red',
    image: 'img/img_02.jpg',
    desc: `밤을 새워 준비한 PPT.<br>교수님의 칭찬 한마디에 모든 피로가 녹아내렸다.`,
  },
  {
    id: 3,
    date: '2025-05-05',
    title: '동기들과의 첫 여행',
    emotion: 'green',
    image: 'img/img_03.jpg',
    desc: `강릉 바다 앞에서의 불꽃놀이.<br>서로 다른 삶을 살아온 우리가 꿈 하나로 모여 밤새 이야기를 나눴다.`,
  },
  {
    id: 4,
    date: '2025-06-20',
    title: '종강, 그리고 A+',
    emotion: 'yellow',
    image: 'img/img_01.jpg',
    desc: `한 학기 동안의 노력이 성적표에 찍히던 순간.<br>할 수 있다는 자신감이 생겼다.`,
  },
  {
    id: 5,
    date: '2025-08-30',
    title: '여름방학 프로젝트 완성',
    emotion: 'purple',
    image: 'img/img_02.jpg',
    desc: `혼자 힘으로 기획부터 개발까지.<br>내 코드가 살아 움직이는 걸 볼 때의 전율은 최고였다.`,
  },
];

// --- 2. 변수 ---
let currentIndex = 0;
const track = document.getElementById('track');
const titleDisplay = document.getElementById('active-title');
let marbleElements = [];
let isAnimating = false;
const ANIMATION_DURATION = 700;

// --- 3. 초기화 ---
function initCarousel() {
  track.innerHTML = '';
  marbleElements = [];

  coreMemories.forEach((memory, index) => {
    const marble = document.createElement('div');
    marble.className = 'core-marble';
    marble.style.setProperty('--memory-image', `url('${memory.image}')`);

    // 클릭 이벤트
    marble.addEventListener('click', () => {
      if (isAnimating) return;

      if (index === currentIndex) {
        // 현재 활성 구슬 클릭 -> 바로 모달
        openModal(memory);
      } else {
        // 비활성 구슬 클릭 -> 이동 후 모달
        const total = coreMemories.length;
        let diff = (index - currentIndex + total) % total;
        if (diff > total / 2) diff -= total;

        if (diff === 1) {
          moveNext();
        } else if (diff === -1) {
          movePrev();
        } else {
          currentIndex = index;
          updateClasses();
          lockButtons();
        }

        setTimeout(() => {
          openModal(memory);
        }, 500);
      }
    });

    track.appendChild(marble);
    marbleElements.push(marble);
  });

  updateClasses();
}

// --- 4. 타이틀 애니메이션 ---
function animateTitle(text) {
  titleDisplay.innerHTML = '';
  const letters = text.split('');
  letters.forEach((letter, i) => {
    const span = document.createElement('span');
    if (letter === ' ') {
      span.className = 'title-space';
      span.innerHTML = '&nbsp;';
    } else {
      span.innerText = letter;
      span.className = 'title-letter';
      setTimeout(() => {
        span.classList.add('active');
      }, i * 50);
    }
    titleDisplay.appendChild(span);
  });
}

// --- 5. 클래스 업데이트 ---
function updateClasses() {
  const total = coreMemories.length;

  marbleElements.forEach((marble, index) => {
    const isTeleporting = marble.classList.contains('teleport');
    marble.className = 'core-marble' + (isTeleporting ? ' teleport' : '');

    let diff = (index - currentIndex + total) % total;
    if (diff === total - 1) diff = -1;

    if (diff === 0) {
      marble.classList.add('pos-active');
      animateTitle(coreMemories[index].title);
    } else if (diff === 1) {
      marble.classList.add('pos-1');
    } else if (diff === 2) {
      marble.classList.add('pos-2');
    } else if (diff === 3) {
      marble.classList.add('pos-3');
    } else if (diff === -1) {
      marble.classList.add('pos-hidden-left');
    } else {
      marble.classList.add('pos-hidden-right');
    }
  });
}

// --- 6. 버튼 잠금 ---
function lockButtons() {
  isAnimating = true;
  document.getElementById('btn-prev-core').disabled = true;
  document.getElementById('btn-next-core').disabled = true;
  setTimeout(() => {
    isAnimating = false;
    document.getElementById('btn-prev-core').disabled = false;
    document.getElementById('btn-next-core').disabled = false;
  }, ANIMATION_DURATION);
}

// --- 7. 이동 함수 ---
function moveNext() {
  if (isAnimating) return;
  lockButtons();

  const total = coreMemories.length;
  const leftItemIndex = (currentIndex - 1 + total) % total;
  const leftItem = marbleElements[leftItemIndex];

  leftItem.classList.add('teleport');
  leftItem.classList.remove('pos-hidden-left');
  leftItem.classList.add('pos-hidden-right');
  void leftItem.offsetWidth;

  currentIndex = (currentIndex + 1) % total;

  leftItem.classList.remove('teleport');
  updateClasses();
}

function movePrev() {
  if (isAnimating) return;
  lockButtons();

  const total = coreMemories.length;
  const newIndex = (currentIndex - 1 + total) % total;
  const targetIndex = (newIndex - 1 + total) % total;
  const targetItem = marbleElements[targetIndex];

  targetItem.classList.add('teleport');
  targetItem.classList.remove('pos-hidden-right');
  targetItem.classList.remove('pos-3');
  targetItem.classList.add('pos-hidden-left');
  void targetItem.offsetWidth;

  currentIndex = newIndex;

  targetItem.classList.remove('teleport');
  updateClasses();
}

// --- 8. 이벤트 리스너 ---
document.getElementById('btn-prev-core').addEventListener('click', movePrev);
document.getElementById('btn-next-core').addEventListener('click', moveNext);
document.addEventListener('keydown', (e) => {
  if (isAnimating) return;
  if (e.key === 'ArrowLeft') movePrev();
  else if (e.key === 'ArrowRight') moveNext();
});

// --- 9. 모달 & 메뉴 ---
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
function openModal(data) {
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-date').innerText = data.date;
  document.getElementById('modal-desc').innerHTML = data.desc;
  document.getElementById('modal-image').src = data.image;

  // 🔥 [핵심] 모달 열릴 때 스크롤 막기
  document.body.style.overflow = 'hidden';

  modalBackdrop.classList.remove('hidden');
  setTimeout(() => modalContent.classList.add('open'), 10);
}
function closeModal() {
  modalContent.classList.remove('open');

  // 🔥 [핵심] 모달 닫힐 때 스크롤 다시 허용 (CSS로 스크롤바는 숨겨져 있음)
  document.body.style.overflow = '';
  document.body.style.overflowX = 'hidden'; // 가로는 막고
  document.body.style.overflowY = 'auto'; // 세로는 풀기

  setTimeout(() => modalBackdrop.classList.add('hidden'), 300);
}
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenuPanel = document.getElementById('mobile-menu');
const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileClose = document.getElementById('mobile-menu-close');
function toggleMenu(show) {
  if (show) {
    mobileMenuPanel.classList.add('open');
    mobileBackdrop.classList.add('open');
  } else {
    mobileMenuPanel.classList.remove('open');
    mobileBackdrop.classList.remove('open');
  }
}
menuToggle.addEventListener('click', () => toggleMenu(true));
mobileClose.addEventListener('click', () => toggleMenu(false));
mobileBackdrop.addEventListener('click', (e) => {
  if (e.target === mobileBackdrop) toggleMenu(false);
});

// --- 실행 ---
initCarousel();
