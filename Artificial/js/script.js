let body = document.querySelector('body');
// burger
let nav = document.querySelector('.header__nav-wrapper');
let burger = document.querySelector('.header__burger');

function mob_nav() {
	nav.classList.toggle('active');
	burger.classList.toggle('active');
  body.classList.toggle('burger');
}
burger.onclick =  mob_nav;

var swiper = new Swiper(".slider__box", {
   slidesPerView: 5,
   spaceBetween: 30,
   pagination: {
     el: ".slider__nav",
     clickable: true,
   },
});

// media swiper 
let screenW = window.innerWidth;
if ( screenW < 1200 ) {
  swiper = new Swiper(".slider__box", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".slider__nav",
      clickable: true,
    },
 });
}
if ( screenW < 900 ) {
  swiper = new Swiper(".slider__box", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".slider__nav",
      clickable: true,
    },
 });
}
if ( screenW < 500) {
  swiper = new Swiper(".slider__box", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".slider__nav",
      clickable: true,
    },
 });
}

// popab 
let SignPopab = document.querySelector('.sign-popab');
let SignPopabClose = document.querySelector('.sign-popab_close');
let SignPopabBg = document.querySelector('.sign-popab_bg');
let SignPopab_Btn = document.querySelector('.sign-popab_btn');

function SignPopabF() {
  SignPopab.classList.toggle('active');
}
SignPopab_Btn.onclick = SignPopabF;
SignPopabClose.onclick = SignPopabF;
SignPopabBg.onclick = SignPopabF;

// apply popab
let ApplyPopab = document.querySelector('.apply-popab');
let ApplyPopabClose = document.querySelector('.apply-popab_close');
let ApplyPopabBg = document.querySelector('.apply-popab_bg');
let ApplyPopab_Btn = document.querySelector('.apply-popab_btn');

function ApplyPopabF() {
  ApplyPopab.classList.toggle('active');
}
ApplyPopab_Btn.onclick = ApplyPopabF;
ApplyPopabClose.onclick = ApplyPopabF;
ApplyPopabBg.onclick = ApplyPopabF;

// footer accardeon
let accardeonTitle = document.querySelectorAll('.footer-nav-title');

accardeonTitle.forEach(function (item) {
	item.addEventListener('click', () => {
    item.classList.toggle('active');
    let content = item.nextElementSibling;
    if ( content.style.maxHeight ) {
      document.querySelectorAll('.footer-nav-content').forEach((el) => el.style.maxHeight = null);
    } else {
      document.querySelectorAll('.footer-nav-content').forEach((el) => el.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + 'px';
    }
	});
});