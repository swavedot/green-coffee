// 검색창 제어
// 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function(){
  searchInputEl.focus()
});
// 검색창 요소 내부 input요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});
// 검색창 요소 내부 input요소에 포커스가 해제되면 실행
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
});

// 페이지 스크롤에 따른 요소 제어

// 스크롤에 영향을 받는 요소 검색
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 주기 
// 스크롤이 지나치게 자주 발생 하는 것을 조절(throttle)
window.addEventListener('scroll', _.throttle(function(){
  // 페이지 스크롤 위치가 500px이 넘으면,
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    }); 
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:0
    });
  } else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300));

// 버튼 클릭시 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function(fadeEl, index){
  // 각 요소들을 순서대로(delay) 보여지게 함.
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  }); //gsap.to(요소, 지속시간, 옵션)
});

// 슬라이드 구현
//              요소(선택자)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',  //수직 슬라이드
  autoplay: true, //자동재생
  loop: true, //반복재생
});
// promotion 
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기 
  loop: true,
  autoplay: {
    delay: 5000 //기본값은 3000(3초)
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true, //사용자가 페이지 번호 요소를 눌릴수 있는 지...
  },
  navigation : {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

// awards swipper

new Swiper('.awards .swiper', {
  // Optional parameters
  autoplay: true, 
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, //한번에 보여지는 슬라이드 개수


  // Navogatiom arrows
  navigation : {
    prevEl: '.awards .awards-prev',
    nextEl: '.awards .awards-next',
  },
});

// Reward
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  }else {
    //보험 처리
    promotionEl.classList.remove('hide');
  }
});

// floating 

// 범위를 가지는 랜덤 함수(소수점 2자리 까지)
function random(min, max){
  //.toFixed()를 통해서 반복되는 '문자데이터'를,
  //.parseFloat()통해서 수서점을 가지는 '숫자 데이터'로 변환
  return parseFloat(Math.random() * (max-min)+(min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 어떤 애니메이션이 될건지 옵션);
  gsap.to(selector, random(1.5, 2.5),//애니메이션 동작 시간
   {
    delay: random(0, delay), //얼마나 애니메이션을 시작할 것인지 지연 시간을 설정
    y: size,
    repeat:-1,  // 몇번 반복하는지 설정 : -1은 무한 반복
    yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
    ease: "power1.inOut", //  Easing 함수 적용
  });
};
floatingObject('.floating1', 5, 15 );
floatingObject('.floating2', 5, 10 );
floatingObject('.floating3', 5, 15 );

// 요소가 화면에 보여짐 여부에 따른 요소 관리
// 관리할 요소들을 검색
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({ //감시할 장면(scene)을 추가
      triggerElement: spyEl, //보여짐 여부를 감사할 요소를 지정
      triggerHook: .8, // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl,'show') // 요소가 화면에 보이면 show클래스를 추가 
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당(필수요건)
});

// 현재 날짜 정의
const thisYear = document.querySelector('.this-year');
// textContent :글자의 내용들을 알아내는 용도로 사용
thisYear.textContent = new Date().getFullYear(); //2025

