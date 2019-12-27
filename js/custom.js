//script
$(function(){
  var Swiper = new Swiper('.swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });
});
