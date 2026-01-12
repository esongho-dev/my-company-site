// main.js - 네비게이션 스크롤 & 폼 제출
document.addEventListener('DOMContentLoaded', () => {
    // 부드러운 스크롤 (같은 페이지 섹션)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 모든 페이지에 공통 네비
    const navHTML = `
        <nav>
            <ul>
                <li><a href="index.html">홈화면</a></li>
                <li><a href="company.html">회사소개</a></li>
                <li><a href="business.html">사업분야</a></li>
                <li><a href="recruit-inquiry.html">채용문의</a></li>
                <li><a href="recruit-info.html">채용정보</a></li>
            </ul>
        </nav>
    `;
    document.querySelector('header').innerHTML = `<h1>(주)바른플러스</h1>${navHTML}`;

    // 폼 제출 (Formspree용)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const response = await fetch(form.action, { method: 'POST', body: formData });
            if (response.ok) {
                alert('문의가 전송되었습니다! 감사합니다.');
                form.reset();
            } else {
                alert('전송 오류. 다시 시도하세요.');
            }
        });
    });
});
