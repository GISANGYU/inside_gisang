// --- 달력 생성 로직 ---
const gridContainer = document.getElementById('memory-grid');
const startDate = new Date('2025-02-24');
const endDate = new Date('2025-08-31');
// 날짜 차이 계산
const dayDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
// 감정 배열 (비활성 구슬에 랜덤 감정 부여용)
const emotions = ['yellow', 'blue', 'red', 'green', 'purple'];

for (let i = 0; i <= dayDiff; i++) {
  // 현재 날짜 계산
  let currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + i);
  // 날짜 문자열 (YYYY-MM-DD)
  const dateString = currentDate.toISOString().split('T')[0];
  // 해당 날짜의 데이터 찾기
  const memory = memoryData.find((m) => m.date === dateString);

  // 선반
  const shelf = document.createElement('div');
  // CSS 클래스 설정
  shelf.className =
    'w-full h-32 relative flex flex-col justify-end items-center';
  // 선반 줄
  const line = document.createElement('div');
  // CSS 클래스 설정
  line.className = 'shelf-row';
  // 선반 줄 추가
  shelf.appendChild(line);
  // 날짜 라벨
  const dateLabel = document.createElement('div');
  // CSS 클래스 설정
  dateLabel.className =
    'text-[10px] text-gray-700 mb-1 absolute bottom-[-20px] font-mono';
  // 날짜 텍스트 설정
  dateLabel.innerText = `${
    currentDate.getMonth() + 1
  }.${currentDate.getDate()}`;
  shelf.appendChild(dateLabel);

  // 구슬
  const marble = document.createElement('div');
  marble.className = 'marble group transition-all duration-500';

  if (memory) {
    // 활성 구슬
    marble.classList.add('active', memory.emotion);

    // 구슬 내부 이미지: 데이터에 저장된 대표 이미지(image) 사용
    const charImgUrl = `url('${memory.image}')`;
    marble.style.setProperty('--memory-image', charImgUrl);

    // 툴팁
    // 기존 주석코드는 날짜와 타이틀을 모두 표시했으나,
    // 디자인인 넘 별로라 날짜는 제거하고 타이틀만 표시하도록 수정
    // const tooltip = document.createElement('div');
    // tooltip.className = 'tooltip';
    // tooltip.textContent = `${dateString}`;
    // marble.appendChild(tooltip);
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = memory.title; // 날짜(dateString) 제거하고 title만 대입
    marble.appendChild(tooltip);
    // 클릭 이벤트 등록 활성 구슬일 때만 (모달 오픈)
    marble.onclick = () => openModal(memory);
  } else {
    // 비활성 구슬
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    marble.classList.add('inactive', randomEmotion);
  }
  // 구슬을 선반에 추가
  shelf.appendChild(marble);
  // 선반을 그리드 컨테이너에 추가
  gridContainer.appendChild(shelf);
}

// --- 모달 로직 ---
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');

function openModal(data) {
  // 현재 데이터의 인덱스 찾기
  const currentIndex = memoryData.indexOf(data);

  // 이전/다음 데이터 찾기
  const prevData = memoryData[currentIndex - 1];
  const nextData = memoryData[currentIndex + 1];

  // 데이터 채우기
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-date').innerText = data.date;

  // 설명(desc)은 innerHTML로 넣기 (이미지/HTML 태그)
  document.getElementById('modal-desc').innerHTML = data.desc;
  // 감정 배지
  const badge = document.getElementById('modal-emotion-badge');
  badge.innerText = `감정: ${getEmotionName(data.emotion)}`;
  badge.className = `inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 border ${getEmotionColorClass(
    data.emotion
  )}`;

  // 모달 상단 이미지: 감정 캐릭터 이미지 사용
  document.getElementById('modal-image').src = `${data.emotion}.png`;

  // 이전 버튼 설정
  const btnPrev = document.getElementById('btn-prev');
  if (prevData) {
    btnPrev.disabled = false;
    btnPrev.onclick = () => openModal(prevData);
  } else {
    btnPrev.disabled = true;
    btnPrev.onclick = null;
  }

  // 다음 버튼 설정
  const btnNext = document.getElementById('btn-next');
  if (nextData) {
    btnNext.disabled = false;
    btnNext.onclick = () => openModal(nextData);
  } else {
    btnNext.disabled = true;
    btnNext.onclick = null;
  }
  // 모달 열기 애니메이션
  modalBackdrop.classList.remove('hidden');
  modalContent.classList.remove('modal-exit', 'modal-exit-active');
  modalContent.classList.add('modal-enter');
  setTimeout(() => modalContent.classList.add('modal-enter-active'), 10);
}
// 모달 닫기 함수
function closeModal() {
  modalContent.classList.remove('modal-enter', 'modal-enter-active');
  modalContent.classList.add('modal-exit');
  setTimeout(() => modalContent.classList.add('modal-exit-active'), 10);
  setTimeout(() => {
    modalBackdrop.classList.add('hidden');
  }, 300);
}

modalBackdrop.addEventListener('click', (e) => {
  // 버튼 클릭 시 닫히지 않도록 예외 처리
  if (e.target === modalBackdrop) closeModal();
});
// 감정 이름 매핑 함수
function getEmotionName(emotion) {
  const map = {
    yellow: '기쁨/행복',
    blue: '슬픔/우울',
    red: '분노/열정',
    green: '까칠/피곤',
    purple: '소심/평온',
  };
  return map[emotion] || '알 수 없음';
}
// 감정 색상 클래스 매핑 함수
function getEmotionColorClass(emotion) {
  const map = {
    yellow: 'bg-yellow-900 text-yellow-200 border-yellow-500/30',
    blue: 'bg-blue-900 text-blue-200 border-blue-500/30',
    red: 'bg-red-900 text-red-200 border-red-500/30',
    green: 'bg-green-900 text-green-200 border-green-500/30',
    purple: 'bg-purple-900 text-purple-200 border-purple-500/30',
  };
  return map[emotion] || 'bg-gray-900 text-gray-200 border-gray-500';
}
