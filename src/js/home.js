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
        type: "bullets",
        clickable: true,
        bulletClass: "home-swiper__bullet",
        bulletActiveClass: "home-swiper__bullet_active"
    }
});
