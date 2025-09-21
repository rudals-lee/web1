// jQuery 문서 준비 완료 시 실행되는 함수
$(function() {
  // 모바일 메뉴 토글 버튼 클릭 이벤트
  $(".mbmenu").click(function () {
    // 클릭할 때마다 active 클래스를 추가/제거하여 햄버거 메뉴 아이콘 상태 변경
    $(this).toggleClass("active");
    // 네비게이션 메뉴 열기/닫기 상태 토글
    $(".open_nav").toggleClass("active");
  });

  // 스크롤 이벤트 - aboutme 섹션 애니메이션 효과
  $(window).scroll(function () {
    // 현재 스크롤 위치 가져오기
    const scrollTop = $(window).scrollTop();
    // aboutme 섹션의 위치에서 400px 위 지점 계산 (미리 애니메이션 시작하기 위함)
    const aboutOffset = $(".aboutme").offset().top - 400;

    // 스크롤이 aboutme 섹션 근처에 도달하면
    if (scrollTop > aboutOffset) {
      // 애니메이션을 위한 'on' 클래스 추가
      $(".aboutme").addClass("on");
    }
  });

  // 스크롤 시 상단 이동 버튼 표시/숨김 처리
  $(window).scroll(function () {
    // 스크롤이 300px 이상 내려갔을 때
    if ($(this).scrollTop() > 300) {
      // 상단 이동 버튼을 페이드인으로 부드럽게 표시
      $(".top_btn > a").fadeIn();
    } else {
      // 300px 미만일 때는 페이드아웃으로 숨김
      $(".top_btn > a").fadeOut();
    }
  });

  // 스킬 탭 메뉴 클릭 이벤트
  $(".skill_list a").click(function (e) {
    // 링크의 기본 동작(페이지 이동) 방지
    e.preventDefault();
    // 모든 스킬 탭에서 active 클래스 제거
    $(".skill_list a").removeClass("active");
    // 클릭된 탭에 active 클래스 추가
    $(this).addClass("active");

    // 주석: 실제 탭 콘텐츠 전환을 위해서는 AJAX 호출이나 추가 로직이 필요함
  });
});

// 스킬 탭 기능 구현
$('.skill_tab').hide(); // 모든 스킬 탭 콘텐츠 숨김
$('.skill_tab').eq(0).show(); // 첫 번째 탭만 표시

// 스킬 리스트 클릭 이벤트 처리
$('.skill_list > ul > li').click(function () {
  // 클릭된 탭의 인덱스 번호 저장
  var i = $(this).index();

  // 모든 스킬 리스트에서 active 클래스 제거
  $('.skill_list > ul > li').find('a').removeClass('active'); 
  // 클릭된 항목에 active 클래스 추가
  $(this).find('a').addClass('active'); 

  // 모든 스킬 텍스트 콘텐츠에서 'on' 클래스 제거
  $('.skill_txtcon').removeClass('on')
  // 현재 클릭된 항목의 부모 요소 내 텍스트 콘텐츠에 'on' 클래스 추가
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  // 모든 스킬 탭 숨김
  $('.skill_tab').hide();
  // 선택된 인덱스에 해당하는 탭만 표시
  $('.skill_tab').eq(i).show();

  // 링크의 기본 동작 방지
  return false;
});

// DOM이 완전히 로드된 후 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
    // Swiper 슬라이더 초기화 및 설정
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto', // 슬라이드 개수 자동 조절
      spaceBetween: 30, // 슬라이드 간 간격 30px
      loop: true, // 무한 루프 활성화
      autoplay: { // 자동 재생 설정
        delay: 0, // 딜레이 없음 (연속 재생)
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
        loopedSlides: 1 // 루프에서 복제할 슬라이드 수
      },
      speed: 3000, // 슬라이드 전환 속도 3초
      navigation: { // 네비게이션 버튼 설정
        nextEl: ".swiper-button-next", // 다음 버튼 선택자
        prevEl: ".swiper-button-prev", // 이전 버튼 선택자
      },
    });
    
    // 스와이퍼에 마우스 호버 시 자동재생 일시정지/재시작
    $('.swiper').hover(function() {
        swiper.autoplay.stop(); // 마우스 올릴 때 자동재생 정지
    }, function(){
        swiper.autoplay.start(); // 마우스 벗어날 때 자동재생 재시작
    });

    // 스크롤 시 상단 이동 버튼 표시/숨김 (중복 코드)
    $(window).scroll(function(){
        t=$(window).scrollTop(); // 현재 스크롤 위치
        if(t>400) // 400px 이상 스크롤 시
            $('.top_btn>a').fadeIn(); // 버튼 표시
        else{
            $('.top_btn>a').fadeOut(); // 버튼 숨김
        }
    })
    
    // 페이지 로드 시 스크롤 이벤트 한 번 실행 (초기 상태 설정)
    $(window).trigger('scroll');
    
    // 상단 이동 버튼 클릭 시 페이지 최상단으로 스크롤
    $('.top_btn>a').click(function(e){
        e.preventDefault(); // 링크 기본 동작 방지
        $('body,html').animate({scrollTop:0}) // 부드럽게 맨 위로 스크롤
    })

// 스크롤 애니메이션 효과
    // aboutme 섹션의 상단 위치 저장
    let top1 = $('.aboutme').offset().top;

    // 스크롤 이벤트 리스너
    $(window).on('scroll', function () {
      let h = $(window).scrollTop();       // 현재 스크롤 위치
      let windowH = $(window).height();    // 브라우저 창의 높이

      // 요소가 화면에 보이기 시작하는 지점 계산 후 애니메이션 클래스 추가
      if (h > top1 - windowH) {
        $('.aboutme').addClass('on'); // 화면에 보이면 애니메이션 시작
      } else {
        $('.aboutme').removeClass('on');  // 화면 위로 다시 올라가면 애니메이션 제거
      }
    });

// 스킬 탭 기능 (중복 코드)
$('.skill_tab').hide(); // 모든 탭 콘텐츠 숨김
$('.skill_tab').eq(0).show(); // 첫 번째 탭만 표시

// 스킬 리스트 항목 클릭 이벤트 (중복 코드)
$('.skill_list > ul > li').click(function () {
  var i = $(this).index(); // 클릭된 항목의 인덱스

  // 모든 링크에서 active 클래스 제거 후 현재 항목에만 추가
  $('.skill_list > ul > li').find('a').removeClass('active'); 
  $(this).find('a').addClass('active'); 

  // 텍스트 콘텐츠 상태 업데이트
  $('.skill_txtcon').removeClass('on')
  $(this).parents('.skill_box').find('.skill_txtcon').addClass('on')

  // 해당 탭 콘텐츠 표시
  $('.skill_tab').hide();
  $('.skill_tab').eq(i).show();

  return false; // 기본 동작 방지
});

// 모바일 메뉴 토글 기능
$('.mbmenu').click(function(){
  // 햄버거 메뉴 버튼 상태 토글
  $('.mbmenu').toggleClass('active')
  // 네비게이션 메뉴 슬라이드 애니메이션과 함께 토글
  $('.open_nav').stop().toggleClass('active')
});

// 마지막 메뉴 항목 클릭 시 특별 처리
$('.subnav_menu li:last-child a').click(function(e){
  e.preventDefault(); // 기본 링크 이동 방지
  $('.open_nav').hide(); // 네비게이션 메뉴 즉시 숨김

  // 같은 페이지 내에서 수동으로 이동 처리
  const target = $(this).attr('href'); // 링크의 href 속성값 가져오기
  window.location.href = target; // 해당 URL로 이동
});
});

// 추가 DOM 로드 완료 이벤트 리스너
document.addEventListener("DOMContentLoaded", function () {
    // 모든 서브 네비게이션 메뉴 링크 요소들 선택
    const menuLinks = document.querySelectorAll(".subnav_menu li a");
    // 열린 네비게이션 요소 선택
    const openNav = document.querySelector(".open_nav");

    // 각 메뉴 링크에 클릭 이벤트 리스너 추가
    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        // 메뉴 클릭 시 네비게이션 메뉴 닫기
        openNav.classList.remove("active");
      });
    });
  });

  

  