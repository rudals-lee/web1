$(function () {
  // 메인 탭 버튼 클릭 이벤트 - 스무스 스크롤 기능
  $(".main_tab button").click(function (e) {
    e.preventDefault(); // 기본 동작 방지
    var tg = $(this); // 클릭된 버튼
    var i = tg.index(); // 클릭된 버튼의 인덱스

    // 해당 인덱스의 섹션 위치 계산
    var section = $("section .item").eq(i);
    var tt = section.offset().top; // 섹션의 상단 위치
    
    // 모든 탭에서 'on' 클래스 제거 후, 클릭된 탭에만 추가
    $(".main_tab button").removeClass("on");
    $(this).addClass("on");
    
    // 해당 섹션으로 부드럽게 스크롤 (600ms 애니메이션)
    $("html,body").stop().animate({ scrollTop: tt }, 600);
  });

  // 맨 위로 가기 버튼 (top_btn) 기능
  $(window).scroll(function () {
    t = $(window).scrollTop(); // 현재 스크롤 위치
    
    // 스크롤이 400px 이상이면 버튼 표시, 미만이면 숨김
    if (t > 400) {
      $(".top_btn>a").fadeIn();
    } else {
      $(".top_btn>a").fadeOut();
    }
  });
  
  // 페이지 로드 시 스크롤 이벤트 한 번 실행
  $(window).trigger("scroll");
  
  // 맨 위로 가기 버튼 클릭 이벤트
  $(".top_btn>a").click(function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 }); // 페이지 최상단으로 스크롤
  });

  // 콘텐츠 디자인 섹션 - 이미지 갤러리 기능
  $(".content_design .content_img_area").hide(); // 모든 이미지 영역 숨김
  $(".content_design .content_img_area").eq(0).show(); // 첫 번째 이미지만 표시
  
  // 텍스트 리스트 클릭 시 해당 이미지 표시
  $(".content_txt>ul>li").click(function () {
    var i = $(this).index(); // 클릭된 리스트 아이템의 인덱스
    $(".content_img_area").hide(); // 모든 이미지 영역 숨김
    $(".content_img_area").eq(i).show(); // 해당 인덱스의 이미지만 표시
    return false; // 이벤트 전파 방지
  });

  // 모바일 메뉴 토글 기능
  $(".mbmenu").click(function () {
    $(".mbmenu").toggleClass("active"); // 메뉴 버튼 상태 토글
    $(".open_nav").stop().toggleClass("active"); // 네비게이션 메뉴 토글
  });

  // 팝업 열기 기능
  $(".content_img_area>.pop_list>li").click(function (e) {
    e.preventDefault();
    
    // 클릭된 아이템의 인덱스로 해당 팝업 표시
    let i = $(this).index(".pop_list>li");
    $(".popup").eq(i).show();
  });
  
  // 팝업 닫기 기능
  $(".close").click(function (e) {
    e.preventDefault();
    $(".popup").hide(); // 모든 팝업 숨김
  });
});

// 모바일 메뉴 기능 (중복 코드 - 위의 코드와 동일한 기능)
$('.mbmenu').click(function(){
  $('.mbmenu').toggleClass('active'); // 메뉴 버튼 활성화 토글
  $('.open_nav').stop().toggleClass('active'); // 네비게이션 메뉴 토글
});

// 서브 네비게이션 마지막 메뉴 아이템 특별 처리
$('.subnav_menu li:last-child a').click(function(e){
  e.preventDefault(); // 기본 링크 이동 방지
  $('.open_nav').hide(); // 네비게이션 메뉴 숨김

  // 수동으로 페이지 이동 (같은 페이지 내 이동일 경우)
  const target = $(this).attr('href'); // 링크의 href 속성 값
  window.location.href = target; // 해당 URL로 이동
});

// 바닐라 JavaScript를 사용한 메뉴 링크 처리
document.addEventListener("DOMContentLoaded", function () {
  // 모든 서브 네비게이션 메뉴 링크 선택
  const menuLinks = document.querySelectorAll(".subnav_menu li a");
  const openNav = document.querySelector(".open_nav");

  // 각 메뉴 링크에 클릭 이벤트 추가
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      // 메뉴 클릭 시 네비게이션 메뉴 닫기
      openNav.classList.remove("active");
    });
  });
});

$(function () {
            // Swiper for Coding Projects
            const codingSwiper = new Swiper('.coding-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true, // 무한 루프
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }
            });

            // Main tab functionality
            $(".main_tab button").click(function (e) {
                e.preventDefault();
                var tg = $(this);
                var i = tg.index();
                var section = $("section .item").eq(i);
                var tt = section.offset().top;
                $(".main_tab button").removeClass("on");
                $(this).addClass("on");
                $("html,body").stop().animate({ scrollTop: tt }, 600);
            });

            // Top button
            $(window).scroll(function () {
                t = $(window).scrollTop();
                if (t > 400) $(".top_btn>a").fadeIn();
                else {
                    $(".top_btn>a").fadeOut();
                }
            });
            $(window).trigger("scroll");
            $(".top_btn>a").click(function (e) {
                e.preventDefault();
                $("body,html").animate({ scrollTop: 0 });
            });

            // Content design tabs
            $(".content_design .content_img_area").hide();
            $(".content_design .content_img_area").eq(0).show();

            $(".content_txt>ul>li").click(function () {
                var i = $(this).index();
                $(".content_img_area").hide();
                $(".content_img_area").eq(i).show();
                return false;
            });

            // Mobile menu
            $(".mbmenu").click(function () {
                $(".mbmenu").toggleClass("active");
                $(".open_nav").stop().toggleClass("active");
            });

            // Popup functionality
            $(".content_img_area>.pop_list>li").click(function (e) {
                e.preventDefault();
                let i = $(this).index(".pop_list>li");
                $(".popup").eq(i).show();
            });
            $(".close").click(function (e) {
                e.preventDefault();
                $(".popup").hide();
            });
        });

          document.addEventListener("DOMContentLoaded", function () {
    // 모든 메뉴 링크에 이벤트 부여
    const menuLinks = document.querySelectorAll(".subnav_menu li a");
    const openNav = document.querySelector(".open_nav");

    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        openNav.classList.remove("active");
      });
    });
  });