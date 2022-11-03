// var elBody = document.querySelector('body');
// var elMode = document.querySelector('.site-btn__mode__btn');

// elMode.addEventListener('click', function(){
//   elBody.classList.toggle('dark');
// });

// var elHtml = document.querySelector('html')
// var elMenu = document.querySelector('.menu__btn')
// var elExit = document.querySelector('.exit')

// elMenu.addEventListener('click', function(){
//   elHtml.classList.toggle('menu');
// });

// elExit.addEventListener('click', function(){
//   elHtml.classList.toggle('menu');
// });

var elBody = document.querySelector("body");

const theme = function () {
  elBody.classList.toggle("dark");
};

var elHtml = document.querySelector("html");
var elMenu = document.querySelector(".menu__btn");
var elExit = document.querySelector(".exit");

elMenu.addEventListener("click", function () {
  elHtml.classList.toggle("menu");
});

elExit.addEventListener("click", function () {
  elHtml.classList.toggle("menu");
});

