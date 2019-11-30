"use strict";

import Swiper from "swiper/js/swiper.min";


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

let productGallery = new Swiper(".article-gallery__slides", {
    wrapperClass: "article-gallery__wrapper",
    slideClass: "article-gallery__slide",
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        prevEl: ".article-gallery__prev",
        nextEl: ".article-gallery__next",
        disabledClass: "article-gallery__nav_disabled"
    },
    pagination: {
      el: ".article-gallery__pagination",
      dynamicBullets: true,
      type: "bullets",
      clickable: true,
      bulletClass: "article-gallery__bullet",
      bulletActiveClass: "article-gallery__bullet_active"
  },
});


