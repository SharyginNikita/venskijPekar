"use strict";

import Swiper from "swiper/js/swiper.min";
// import lightGallery from "lightgallery.js";
// import {} from "lg-thumbnail.js";
// import {} from "lg-fullscreen.js";
// //import {} from "lg-zoom.js";
// import {} from "lg-pager.js";

import fancybox from '@fancyapps/fancybox';

$('[data-fancybox="images"]').fancybox({
    buttons : [ 
      //'slideShow',
      //'share',
      'zoom',
      'fullScreen',
      'close'
    ],
  });

let productGallery = new Swiper(".product-page-gallery__slides", {
    wrapperClass: "product-page-gallery__wrapper",
    slideClass: "product-page-gallery__slide",
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        prevEl: ".product-page-gallery__prev",
        nextEl: ".product-page-gallery__next",
        disabledClass: "product-page-gallery__nav_disabled"
    },
    pagination: {
      el: ".product-page-gallery__pagination",
      dynamicBullets: true,
      type: "bullets",
      clickable: true,
      bulletClass: "product-page-gallery__bullet",
      bulletActiveClass: "product-page-gallery__bullet_active"
  },
});

// const el = document.querySelector("#product-page-gallery__lightgallery");
// window.lightGallery(el, {
//     mode: "lg-slide-circular"
// });


