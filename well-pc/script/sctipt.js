// burger 
$('.header__burger').click(function () {
   $(this).toggleClass('active');
   $('.header__nav').toggleClass('active');
});
// $('.about-us-btn-popab').click(function (e) {
//    e.preventDefault();
//    $(this).parent().parent().toggleClass('active');
//    $(this).prev().toggleClass('active');
//    if ( $(this).prev().hasClass('active') ) {
//       $(this).text('Close');
//    }else {
//       $(this).text('Read more');
//    }
// });


$('.popab-btn').click(function (e) {
   e.preventDefault();
  $('.popab').toggleClass('active');
  $('.popab__bg').click(function () {
   $('.popab').removeClass('active');
  });
});


var controller = new ScrollMagic.Controller();

var info = new ScrollMagic.Scene({triggerElement: ".hero"})
   .setClassToggle(".hero__wrapper", "active")
   .addTo(controller);

var info = new ScrollMagic.Scene({triggerElement: ".info"})
   .setClassToggle(".info__wrapper, .info__progress", "active")
   .addTo(controller);

var about_us = new ScrollMagic.Scene({triggerElement: ".about-us"})
   .setClassToggle(".about-us__wrapper", "active")
   .addTo(controller);

function item_show(item) {
   $(item).addClass('active');
   var nextItem = $(item).next();
   function item_1() {
      $(nextItem).addClass('active');
   }
   var Item2 =  $(nextItem).next();

   function item_2() {
      $(Item2).addClass('active');
   }
   var Item3 =  $(Item2).next();
   function item_3() {
      $(Item3).addClass('active');
   }

   setTimeout(item_1, 300);
   setTimeout(item_2, 600);
   setTimeout(item_3, 900);
}
function item_hide(item) {
   $(item).removeClass('active');
}

window.addEventListener('scroll', function() {
   if ( $('.progress').hasClass('active') ) {
      item_show('#progress_1');
   } else {
      item_hide('.progress__item');
   }

   if ( $('.benefits').hasClass('active') ) {
      item_show('#benefits_1');
   } else {
      item_hide('.benefits__item');
   }
   if ( $('.time-line').hasClass('active') ) {
      item_show('#time-line_1');
   } else {
      item_hide('.time-line__item');
   }
   if ( $('.teachers').hasClass('active') ) {
      item_show('#teachers_1');
   } else {
      item_hide('.teachers__item');
   }
 });




   
var progress = new ScrollMagic.Scene({triggerElement: ".progress"})
   .setClassToggle(".progress, .block-title", "active")
   .addTo(controller);

var benefits = new ScrollMagic.Scene({triggerElement: ".benefits"})
   .setClassToggle(".benefits", "active")
   .addTo(controller);

var clients = new ScrollMagic.Scene({triggerElement: ".clients"})
   .setClassToggle(".clients, .clients__wrapper, .block-title", "active")
   .addTo(controller);

var time_line = new ScrollMagic.Scene({triggerElement: ".time-line"})
   .setClassToggle(".time-line, .time-line__line", "active")
   .addTo(controller);

var teachers = new ScrollMagic.Scene({triggerElement: ".teachers"})
   .setClassToggle(".teachers", "active")
   .addTo(controller);

var subscribe = new ScrollMagic.Scene({triggerElement: ".subscribe"})
   .setClassToggle(".subscribe, .subscribe__form, .footer", "active")
   .addTo(controller);


