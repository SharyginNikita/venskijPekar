"use strict";

import "materialize-css";
import Swiper from "swiper/js/swiper.min.js";

let clientWidth = document.body.clientWidth;

function initSwipers() {
    let swiperProduct = new Swiper(".product-swiper__overlay", {
        wrapperClass: "product-swiper__wrapper",
        slideClass: "product-swiper__slide",
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
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
        },
        breakpoints: {
            956: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            }
        }
    });

    let swiperNews = new Swiper(".news-swiper__overlay", {
        wrapperClass: "news-swiper__wrapper",
        slideClass: "news-swiper__slide",
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
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
        },
        breakpoints: {
            956: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            }
        }
    });
}

if(clientWidth >= 556) {
    console.log(1);
    initSwipers();
}

let cardNews = document.body.querySelectorAll(".card-article");

cardNews.forEach(card => {
    card.addEventListener("click", event => {
        card.querySelector(".card-article__reveal").classList.toggle(
            "card-article__reveal_active"
        );
    });
});

document.querySelectorAll(".main__back").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();
        window.history.back();
    });
});
/*
import Module from '../widgets/module/index.js'; 
import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/
