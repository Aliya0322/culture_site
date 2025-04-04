document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
