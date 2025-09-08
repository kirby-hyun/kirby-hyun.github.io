'use strict';

const modal = document.getElementById('welcomeModal');
const closeBtn = document.getElementById('closeModal');

// 페이지 로드 시 모달 표시
window.addEventListener('DOMContentLoaded', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // 모달 열 때 스크롤 잠금
});

// 닫기 버튼 클릭
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// 배경 클릭 시 닫기
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

