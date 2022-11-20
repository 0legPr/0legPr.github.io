let body = document.querySelector('body');
// burger
let nav = document.querySelector('.header__nav');
let burger = document.querySelector('.header__burger');

function mob_nav() {
	nav.classList.toggle('active');
	burger.classList.toggle('active');
  body.classList.toggle('burger');
}
burger.onclick =  mob_nav;

// alert 
let alert_div = document.querySelector('.alert');
let header__wrapper = document.querySelector('.header__wrapper');
let alert_close = document.querySelector('.alert-close');

function alert_fun() {
	alert_div.classList.toggle('active');
	header__wrapper.classList.toggle('alert-active');
}

alert_close.onclick = alert_fun;

setTimeout(alert_fun, 5000);