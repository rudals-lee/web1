 function openDocumentFinder() {
            document.getElementById('documentFinder').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeDocumentFinder() {
            document.getElementById('documentFinder').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        function showCategory() {
            document.querySelectorAll('.finder-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('categoryList').style.display = 'flex';
            document.getElementById('documentList').style.display = 'none';
        }
        
        function showBusiness() {
            document.querySelectorAll('.finder-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            // 기업법무 탭 내용
        }
        
        function showLawsuit() {
            document.querySelectorAll('.finder-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            // 소송법무 탭 내용
        }
        
        function showConsult() {
            document.querySelectorAll('.finder-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            // 즐겨찾기 탭 내용
        }
        
        function showDocuments(category) {
            document.getElementById('categoryList').style.display = 'none';
            document.getElementById('documentList').style.display = 'flex';
        }
        
        // ESC 키로 모달 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDocumentFinder();
            }
        });
        
        // 모달 배경 클릭으로 닫기
        document.getElementById('documentFinder').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDocumentFinder();
            }
        });

         // 검색 기능
    document.querySelector('.search-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') alert('검색 기능 실행: ' + this.value);
    });
    document.querySelector('.search-btn').addEventListener('click', function() {
      const value = document.querySelector('.search-input').value;
      alert('문서목록 검색: ' + value);
    });

     // 팝업 보이기
        function showLoginPopup() {
            const popup = document.getElementById('loginPopup');
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // 팝업 숨기기
        function hideLoginPopup() {
            const popup = document.getElementById('loginPopup');
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // 오버레이 클릭시 팝업 닫기
        document.getElementById('loginPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                hideLoginPopup();
            }
        });

        // ESC 키로 팝업 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideLoginPopup();
            }
        });

        // 비밀번호 보기/숨기기
        function togglePassword() {
            const passwordInput = document.getElementById('passwordInput');
            const toggle = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggle.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggle.textContent = '👁';
            }
        }

        // 소셜 로그인
        function socialLogin(provider) {
            alert(`${provider} 로그인이 선택되었습니다.`);
            // 실제로는 각 소셜 로그인 API를 연동
        }

        // 로그인 폼 제출
        function handleLogin(event) {
            event.preventDefault();
            alert('로그인이 처리됩니다.');
            hideLoginPopup();
        }

        // 회원가입
        function handleSignup() {
            alert('회원가입 페이지로 이동합니다.');
        }

        // 페이지 로드시 애니메이션
        window.addEventListener('load', function() {
            document.querySelector('.header').style.animation = 'slideDown 0.8s ease';
            document.querySelector('.main-content').style.animation = 'fadeInUp 1s ease 0.3s both';
        });