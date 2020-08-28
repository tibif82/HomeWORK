$('.blog__btn-menu').on('click', function () {
   $('.blog__nav .blog__list').slideToggle();
});

function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 45.494896, lng: -73.561081 },
      zoom: 17,

      disableDefaultUI: true,

   });

}
