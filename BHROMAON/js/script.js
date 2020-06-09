$(document).ready(function () {
   $('.menu__burger').click(function (event) {
      $('.menu__burger,.nav__menu').toggleClass('active');
      $('nav__menu').toggleClass('lock');
   });
});
