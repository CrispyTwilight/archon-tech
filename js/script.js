var menu = document.querySelector('#menu-btn');
var navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('bx-x');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('bx-x');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

var counter = 2;
setInterval(function(){
   document.getElementById('radio' + counter).checked = true;
   counter++;
   if(counter > 6){
      counter = 1;
   }
}, 5000);

var submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', function() {
  alert('Form Submitted!');
});