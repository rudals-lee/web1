// DOM이 완전히 로드된 후 실행되는 메인 함수
window.addEventListener('DOMContentLoaded', function () {
  
  // ========== 모바일 메뉴 토글 기능 ==========
  // 모바일 메뉴 버튼과 네비게이션 요소 선택
  const mbMenu = document.querySelector('.mbmenu');      // 햄버거 메뉴 버튼
  const openNav = document.querySelector('.open_nav');   // 모바일 네비게이션 메뉴

  // 모바일 메뉴 버튼 클릭 시 메뉴 열기/닫기
  mbMenu.addEventListener('click', function () {
    // 햄버거 버튼에 active 클래스 토글 (애니메이션 효과)
    mbMenu.classList.toggle('active');
    // 모바일 네비게이션에 active 클래스 토글 (메뉴 표시/숨김)
    openNav.classList.toggle('active');
  });

  // ========== 스크롤 애니메이션 기능 ==========
  // 스크롤 시 life 영역의 이미지들이 순차적으로 나타나는 효과
  window.addEventListener('scroll', function () {
    // life_area 내의 모든 li 요소들을 선택
    const lifeItems = document.querySelectorAll('.life_area li');
    
    // 각 요소들을 순회하면서 화면에 나타났는지 확인
    lifeItems.forEach(el => {
      // 요소의 상단 위치를 계산
      const rect = el.getBoundingClientRect().top;
      
      // 요소가 화면 하단에서 100px 위에 오면 애니메이션 시작
      if (rect < window.innerHeight - 100) {
        el.classList.add('on'); // 'on' 클래스 추가로 CSS 애니메이션 트리거
      }
    });
  });

  // ========== Swiper 슬라이더 초기화 ==========
  
  // 첫 번째 스와이퍼 (페이지네이션 포함)
  const swiper1 = new Swiper('.swiper1', {
    pagination: {
      el: '.swiper-pagination',  // 페이지네이션 요소 지정
      clickable: true,           // 페이지네이션 클릭 가능하게 설정
    },
  });

  // 두 번째 스와이퍼 (좌우 네비게이션 버튼 포함)
  const swiper2 = new Swiper('.swiper2', {
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },
    slidesPerView: 'auto',    // 슬라이드 개수 자동 계산
    spaceBetween: 30,         // 슬라이드 간 간격 30px
    loop: true,               // 무한 루프 설정
  });

  // ========== Top 버튼 기능 ==========
  // 페이지 상단으로 이동하는 버튼
  const topBtn = document.querySelector('.top_btn > a');
  
  // 스크롤 시 Top 버튼 표시/숨김 제어
  window.addEventListener('scroll', () => {
    // 스크롤이 300px 이상 내려가면 버튼 표시
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      // 300px 미만이면 버튼 숨김
      topBtn.style.display = 'none';
    }
  });

  // Top 버튼 클릭 시 페이지 상단으로 부드럽게 이동
  topBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 기본 링크 동작 방지
    // 부드러운 스크롤 효과로 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ========== 모바일 메뉴 자동 닫기 기능 ==========
// DOM 로드 완료 후 실행 (위의 함수와 별도로 작성됨)
document.addEventListener("DOMContentLoaded", function () {
  // 서브 네비게이션의 모든 메뉴 링크와 모바일 네비게이션 요소 선택
  const menuLinks = document.querySelectorAll(".subnav_menu li a");
  const openNav = document.querySelector(".open_nav");

  // 각 메뉴 링크에 클릭 이벤트 추가
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      // 메뉴 링크 클릭 시 모바일 네비게이션 자동으로 닫기
      // 사용자가 메뉴를 선택하면 메뉴가 자동으로 사라지게 함
      openNav.classList.remove("active");
    });
  });
});

/* 
=== 전체 기능 요약 ===
1. 모바일 햄버거 메뉴 토글 (열기/닫기)
2. 스크롤 시 life 영역 요소들의 애니메이션 효과
3. 두 개의 Swiper 슬라이더 초기화 및 설정
4. 스크롤 위치에 따른 Top 버튼 표시/숨김
5. Top 버튼 클릭 시 페이지 상단으로 부드러운 이동
6. 메뉴 링크 클릭 시 모바일 네비게이션 자동 닫기

이 코드는 모바일 반응형 웹사이트의 일반적인 UI/UX 기능들을 구현한 것으로 보입니다.
*/