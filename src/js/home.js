"use strict";

import Swiper from "swiper/js/swiper.min.js";

let swiperMain = new Swiper(".home-swiper", {
  wrapperClass: "home-swiper__wrapper",
  slideClass: "home-swiper__slide",
  slidesPerView: 1,
  grabCursor: true,
  autoplay: {
    delay: 3000
  },
  loop: true,
  navigation: {
    nextEl: ".home-swiper__next",
    prevEl: ".home-swiper__prev"
  },
  pagination: {
    el: ".home-swiper__pagination",
    dynamicBullets: true,
    type: "bullets",
    clickable: true,
    bulletClass: "home-swiper__bullet",
    bulletActiveClass: "home-swiper__bullet_active"
},
});

let swiperStoks = new Swiper(".home-stoks", {
  wrapperClass: "home-stoks__wrapper",
  slideClass: "home-stoks__card",
  slidesPerView: 1.3,
  spaceBetween: 20,
  grabCursor: true,
  speed: 200,
  // autoplay: {
  //     delay: 3000
  // },
  //loop: true,
  spaceBetween: 20,
  centeredSlidesBounds: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".home-stoks__next",
    prevEl: ".home-stoks__prev"
  },
  pagination: {
    el: ".home-stoks__pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "home-stoks__bullet",
    bulletActiveClass: "home-stoks__bullet_active"
  },
  breakpoints: {
    956: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      centeredSlidesBounds: false,
      centeredSlides: false,
      speed: 200
    }
  }
});
