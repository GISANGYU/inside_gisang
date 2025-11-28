// --- 2. 달력 생성 로직 ---
const gridContainer = document.getElementById('memory-grid');
const startDate = new Date('2025-02-24');
const endDate = new Date('2025-08-31');
const dayDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
const emotions = ['yellow', 'blue', 'red', 'green', 'purple'];

for (let i = 0; i <= dayDiff; i++) {
  let currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + i);
  const dateString = currentDate.toISOString().split('T')[0];
  const memory = memoryData.find((m) => m.date === dateString);

  // 선반
  const shelf = document.createElement('div');
  shelf.className =
    'w-full h-32 relative flex flex-col justify-end items-center';

  const line = document.createElement('div');
  line.className = 'shelf-row';
  shelf.appendChild(line);

  const dateLabel = document.createElement('div');
  dateLabel.className =
    'text-[10px] text-gray-700 mb-1 absolute bottom-[-20px] font-mono';
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
    // const tooltip = document.createElement('div');
    // tooltip.className = 'tooltip';
    // tooltip.textContent = `${dateString}`;
    // marble.appendChild(tooltip);
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = memory.title; // 날짜(dateString) 제거하고 title만 대입
    marble.appendChild(tooltip);

    marble.onclick = () => openModal(memory);
  } else {
    // 비활성 구슬
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    marble.classList.add('inactive', randomEmotion);
  }

  shelf.appendChild(marble);
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

  // 설명(desc)은 이제 innerHTML로 넣습니다 (이미지/HTML 태그 지원)
  document.getElementById('modal-desc').innerHTML = data.desc;

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

  modalBackdrop.classList.remove('hidden');
  modalContent.classList.remove('modal-exit', 'modal-exit-active');
  modalContent.classList.add('modal-enter');
  setTimeout(() => modalContent.classList.add('modal-enter-active'), 10);
}

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
