"use strict";

import Swiper from "swiper/js/swiper.min";
import lightGallery from "lightgallery.js";
import {} from "lg-thumbnail.js";
import {} from "lg-fullscreen.js";
import {} from "lg-zoom.js";
import {} from "lg-pager.js";

let productGallery = new Swiper(".product-page-gallery__slides", {
    wrapperClass: "product-page-gallery__wrapper",
    slideClass: "product-page-gallery__slide",
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        prevEl: ".product-page-gallery__prev",
        nextEl: ".product-page-gallery__next"
    }
});

const el = document.querySelector("#product-page-gallery__lightgallery");
window.lightGallery(el, {
    mode: "lg-slide-circular"
});

