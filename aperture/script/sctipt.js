$('.about-us-btn-popab').click(function (e) {
   e.preventDefault();
   $(this).parent().parent().toggleClass('active');
   $(this).prev().toggleClass('active');
});

// burger 
$('.header__burger').click(function () {
   $(this).toggleClass('active');
   $('.header__nav').toggleClass('active');
});

var controller = new ScrollMagic.Controller();

var bg = new ScrollMagic.Scene({triggerElement: ".trigger-main-bg", duration: 2000})
		.setTween(".hero__bg", {scale: 2}) 
      .setClassToggle(".hero > .meta", "active")
		.addTo(controller);

var hero_wrapper = new ScrollMagic.Scene({triggerElement: ".hero__wrapper", duration: 500})
		.setTween(".hero__wrapper", {scale: 0.9}) 
		.addTo(controller);

               
var about_us = new ScrollMagic.Scene({triggerElement: ".about-us"})
   .setTween(".about-us__wrapper", {scale: 1})
   .setClassToggle(".about-us-title, .about-us__wrapper", "active")
   .addTo(controller);

var photo_block = new ScrollMagic.Scene({triggerElement: ".photo-block-1"})
   .setClassToggle(".photo-block-1, .photo-block-1 > .meta", "active")
   .addTo(controller);

var photo_block_2 = new ScrollMagic.Scene({triggerElement: ".photo-block-2"})
   .setClassToggle(".photo-block-2, .photo-block-2 > .meta", "active")
   .addTo(controller);

var photo_block_3 = new ScrollMagic.Scene({triggerElement: ".photo-block-3"})
   .setClassToggle(".photo-block-3, .photo-block-3 > .meta", "active")
   .addTo(controller);

var photo_text_block = new ScrollMagic.Scene({triggerElement: ".photo-text-block"})
   .setClassToggle(".photo-text-block", "active")
   .addTo(controller);

var clients_title = new ScrollMagic.Scene({triggerElement: ".clients", duration: 150})
		.setTween(".block-title-clients", {scale: 1.1}) 
		.addTo(controller);

var clients = new ScrollMagic.Scene({triggerElement: ".clients"})
      .setClassToggle(".block-title, .clients__item", "active")
		.addTo(controller);

var help__title = new ScrollMagic.Scene({triggerElement: ".help", duration: 150})
		.setTween(".block-title-help", {scale: 1.1}) 
		.addTo(controller);
      

var help = new ScrollMagic.Scene({triggerElement: ".help"})
      .setClassToggle(".block-title-help", "active")
		.addTo(controller);

var footer = new ScrollMagic.Scene({triggerElement: ".footer"})
      .setClassToggle(".footer__wrapper", "active")
		.addTo(controller);