$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
