var navigationMobil = document.querySelector('.navigation__mobil');
var menu = document.querySelector('.navigation');
navigationMobil.addEventListener('click', function() {
  navigationMobil.classList.toggle ('navigation__mobil-active');
  menu.classList.toggle ('navigation-active');
})

$(document).ready(function(){
  $window = $(window);
$('div[data-type="background"]').each(function(){
   var $bgobj = $(this);
$(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
      var coords = '50%'+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
  }); 
});    
}); 