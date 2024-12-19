const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  spaceBetween:30,
  loop: true,
  mousewheel: false,
  keyboard: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const backgroundImage = document.querySelector('.background-image');
const swiperSlides = document.querySelectorAll('.swiper-slide img');

let currentIndex = 0;

swiper.on('slideChange', function () {
  currentIndex = swiper.realIndex;
  backgroundImage.style.backgroundImage = `url(${swiperSlides[currentIndex].src})`;
});

swiper.on('init', function () {
  backgroundImage.style.backgroundImage = `url(${swiperSlides[0].src})`;
});









