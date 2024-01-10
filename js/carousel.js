let swiper = new Swiper(".questions__carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".carousel__button-next",
    prevEl: ".carousel__button-prev",
  },
  breakpoints: {
    574: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});