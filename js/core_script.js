// --- 1. 데이터 ---
const coreMemories = [
  {
    id: 1,
    date: '2007-03-17',
    title: '예술에 빠지게 된 순간',
    emotion: 'yellow',
    image: 'img/core_01.png',
    desc: `
       <b>아빠가 그려주던 태권브이 한 장 한 장</b>이, 내가 그림을 좋아하게 된 시작점이었다.<br><br>
       그림을 좋아하게 된 계기는 거창하지 않았다. 그냥 아빠랑 같이 그리던 로봇 그림이었다.<br>
       어릴 때 좋아하던 태권브이를 부탁하면, 아빠는 종이에 선 몇 번 쓱쓱 그어서 순식간에 멋있는 로봇을 완성했다.<br>
       그게 너무 신기해서 밤마다 “오늘도 한 장만 그려줘” 하며 찾아갔다.<br><br>
       처음엔 구경만 하다가 나도 따라 그려보기 시작했다. 당연히 잘 되진 않았지만,
       조금씩 모양이 나오는 걸 보는 게 재밌어서 계속 그렸다.<br><br>
       스스로 '나는 그림을 좋아한다'고 정의한 적은 없지만, 돌이켜보면 그때부터
       <b>그림은 내 일상 속 자연스러운 기본값</b>이 됐다.
     `,
  },
  {
    id: 2,
    date: '2020-07-13',
    title: '군대에서 단단해진 마음',
    emotion: 'red',
    image: 'img/core_02.jpg',
    desc: `
       <b>하기 싫어도 해야 하는 일들 속에서, 감정을 정리하는 법을 억지로 배운 시간</b>이었다.<br><br>
       군대는 솔직히 즐거운 시기는 아니었다. 하지만 '내가 좀 바뀌었구나'를 확실히 느끼게 해준 시기이기도 했다.<br><br>
       규칙은 많고 해야 하는 건 더 많았다. 답답한 일도 많았지만, 그걸 매번 터뜨릴 순 없으니까
       감정을 한 번 씹어 삼키고 상황부터 보는 습관이 생겼다.<br><br>
       그러다 보니 사람들 눈치도 좀 더 보이기 시작하고, 누가 예민한 상태인지,
       누가 분위기를 풀어줘야 하는지 자연스럽게 캐치하게 됐다.<br><br>
       군대에서 얻은 건 참을성이기도 하지만, 무엇보다도
       <b>감정을 바로 터뜨리지 않고 한 번 걸러내는 버릇</b>에 가까웠다.<br>
       지금 팀플이나 바쁜 상황에서도 멘탈이 쉽게 안 흔들리는 이유도,
       생각해보면 이때부터 만들어진 것 같다.
     `,
  },
  {
    id: 3,
    date: '2022-04-15',
    title: '직장에서 배운 사람의 온도',
    emotion: 'green',
    image: 'img/core_03.jpg',
    desc: `
       <b>기분 좋은 말도, 기분 나쁜 말도 전부 '사람'에게서 나온다는 걸 매일 체험한 시간</b>이었다.<br><br>
       미쏘에서 일할 때 정말 다양한 사람을 만났다.<br>
       어떤 손님은 나까지 기분 좋아지게 만들었고, 어떤 손님은 한마디에 체력이 쫙 빠졌다.<br><br>
       그래도 계산은 해야 하고, 응대는 해야 하고, 매장은 돌아가야 했다.<br>
       그래서 내 감정만 붙잡고 있을 수 없었다. ‘지금은 일하는 중이니까, 일단 상황부터 정리하자’ 모드가 자동으로 켜졌다.<br><br>
       마감하면서 동료와 나눴던 작은 농담 한마디에 피식 웃고,
       “그래도 오늘 잘 버텼다”라고 말하던 순간들이 아직도 기억난다.<br><br>
       덕분에 사람을 대하는 감각이 열렸다. 상대가 어떤 텐션인지, 농담을 해도 되는지,
       <b>그걸 눈치로 읽는 능력</b>이 이 경험에서 많이 생겼다.
     `,
  },
  {
    id: 4,
    date: '2024-03-02',
    title: '계원예대, 새로운 세계의 시작',
    emotion: 'yellow',
    image: 'img/core_04.jpg',
    desc: `
       <b>'그냥 좋아하던 것'을 진짜로 밀어붙여보기로 한 시점</b>이었다.<br><br>
       계원예대 입학 당시 느낌은 “아, 이제는 이걸로 진짜 승부 봐보자는 거구나”에 가까웠다.<br><br>
       예전엔 혼자 취미처럼 만들고 끄적이던 것들이, 여기서는 과제가 되고 프로젝트가 되고 팀플이 되었다.<br>
       밤새 작업하는 날도 많고, 가끔은 “왜 시작했지…?” 싶었지만,
       결과물을 완성한 순간엔 또 스스로 뿌듯해졌다.<br><br>
       계원에서의 시간은 아직 진행형이지만 확실한 건,
       이곳이 <b>‘인사이드 기상’이라는 세계관이 본격적으로 펼쳐진 무대</b>라는 점이다.
     `,
  },
  {
    id: 5,
    date: '2024-07-10',
    title: '코드가 처음 제대로 움직였던 날',
    emotion: 'purple',
    image: 'img/core_05.jpg',
    desc: `
       <b>머릿속에만 있던 아이디어가, 코드 몇 줄로 화면에서 실제로 움직이던 순간</b>이었다.<br><br>
       처음엔 그냥 과제라고 생각하며 코드를 만졌다.<br>
       HTML/CSS로 구조를 잡을 때와 달리,
       자바스크립트나 p5.js, Unity에서 <b>내가 짠 로직대로 화면이 반응하는 순간</b>은 완전히 달랐다.<br><br>
       버튼 하나로 값이 바뀌고, 조건문 하나로 보이고/안 보이고가 달라지는 그 감각이 묘하게 짜릿했다.<br><br>
       그날 이후 나는 ‘예쁘게 만드는 사람’보다는,
       <b>문제를 정의하고 해결하는 사람</b> 쪽에 더 가깝다는 걸 알게 됐다.<br><br>
       지금도 새로운 기능을 붙이고, 버그를 잡고, “이거 이렇게 하면 편하겠다” 싶으면 직접 구현하는 걸 좋아하는 이유가 이때부터 시작됐다.
     `,
  },
];

// --- 2. 변수 ---
let currentIndex = 0;
const track = document.getElementById('track');
const titleDisplay = document.getElementById('active-title');
let marbleElements = [];
let isAnimating = false;
const ANIMATION_DURATION = 600;

// --- 3. 초기화 (수정됨: 이미지를 직접 Style에 주입) ---
function initCarousel() {
  track.innerHTML = '';
  marbleElements = [];

  coreMemories.forEach((memory, index) => {
    const marble = document.createElement('div');
    marble.className = 'core-marble';

    // [핵심 수정] CSS 변수 대신 직접 background-image 설정
    // 이렇게 하면 경로 문제 없이 이미지가 무조건 나옵니다.
    marble.style.backgroundImage = `url('${memory.image}')`;
    // (CSS에 이미 설정되어 있지만 안전장치로 한번 더)
    marble.style.backgroundSize = 'cover';
    marble.style.backgroundPosition = 'center';

    // 클릭 이벤트
    marble.addEventListener('click', () => {
      if (isAnimating) return;

      const total = coreMemories.length;
      let diff = (index - currentIndex + total) % total;
      if (diff > total / 2) diff -= total;

      if (diff === 0) {
        openModal(memory);
      } else {
        moveCarousel(diff);
      }
    });

    track.appendChild(marble);
    marbleElements.push(marble);
  });

  updatePositions(); // 초기 위치 설정
}

// --- 4. 통합 이동 함수 ---
function moveCarousel(step) {
  if (isAnimating) return;
  isAnimating = true;

  const total = coreMemories.length;
  currentIndex = (currentIndex + step + total) % total;

  updatePositions();

  setTimeout(() => {
    isAnimating = false;
  }, ANIMATION_DURATION);
}

// --- 5. 위치 업데이트 ---
function updatePositions() {
  const total = coreMemories.length;

  marbleElements.forEach((marble, index) => {
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    // 클래스 리셋
    marble.className = 'core-marble';

    if (diff === 0) {
      marble.classList.add('pos-center');
      animateTitle(coreMemories[index].title);
    } else if (diff === 1) {
      marble.classList.add('pos-right-1');
    } else if (diff === 2) {
      marble.classList.add('pos-right-2');
    } else if (diff === -1) {
      marble.classList.add('pos-left-1');
    } else if (diff === -2) {
      marble.classList.add('pos-left-2');
    } else {
      marble.classList.add('pos-hidden');
    }
  });
}

// --- 6. 타이틀 애니메이션 ---
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

// --- 7. 이벤트 리스너 ---
document
  .getElementById('btn-prev-core')
  .addEventListener('click', () => moveCarousel(-1));
document
  .getElementById('btn-next-core')
  .addEventListener('click', () => moveCarousel(1));

document.addEventListener('keydown', (e) => {
  if (isAnimating) return;
  if (e.key === 'ArrowLeft') moveCarousel(-1);
  else if (e.key === 'ArrowRight') moveCarousel(1);
});

// --- 8. 모달 & 메뉴 ---
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');

function openModal(data) {
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-date').innerText = data.date;
  document.getElementById('modal-desc').innerHTML = data.desc;
  document.getElementById('modal-image').src = data.image;

  document.body.style.overflow = 'hidden';
  modalBackdrop.classList.remove('hidden');
  setTimeout(() => modalContent.classList.add('open'), 10);
}

function closeModal() {
  modalContent.classList.remove('open');
  document.body.style.overflow = '';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';

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
