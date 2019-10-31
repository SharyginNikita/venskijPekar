"use strict";

import 'materialize-css';
import Swiper from "swiper/js/swiper.min.js";

let swiperProduct = new Swiper(".product-swiper", {
    wrapperClass: "product-swiper__wrapper",
    slideClass: "product-swiper__slide",
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".product-swiper__next",
        prevEl: ".product-swiper__prev"
    },
    pagination: {
        el: ".product-swiper__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "product-swiper__bullet",
        bulletActiveClass: "product-swiper__bullet_active"
    }
});

let swiperNews = new Swiper(".news-swiper", {
    wrapperClass: "news-swiper__wrapper",
    slideClass: "news-swiper__slide",
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".news-swiper__next",
        prevEl: ".news-swiper__prev"
    },
    pagination: {
        el: ".news-swiper__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "news-swiper__bullet",
        bulletActiveClass: "news-swiper__bullet_active"
    }
});

let cardNews = document.body.querySelectorAll('.card-article');

cardNews.forEach(card => {
    card.addEventListener('click', event => {
        card.querySelector('.card-article__reveal').classList.toggle('card-article__reveal_active');
    })
});

/*
import Module from '../widgets/module/index.js'; 
import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

