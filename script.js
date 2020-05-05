var navigationMobil = document.querySelector('.navigation__mobil');
var menu = document.querySelector('.navigation');
navigationMobil.addEventListener('click', function() {
  navigationMobil.classList.toggle ('navigation__mobil-active');
  menu.classList.toggle ('navigation-active');
})