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

if (clientWidth >= 556) {
    initSwipers();
}

let cardNews = document.body.querySelectorAll(".card-article");

cardNews.forEach(card => {
    let cardToggler = card.querySelector(".card-article__wrapper-top")
    let cardReveal = card.querySelector(".card-article__reveal");
    cardToggler.addEventListener("click", event => {
        cardReveal.classList.add(
            "card-article__reveal_active"
        );
    });

    cardReveal.addEventListener("click", event => {
        cardReveal.classList.remove(
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

class Menu {
    constructor(selector) {
        let body = document.body;
        let menu = document.querySelector(selector);

        this.body = body;
        this.menu = menu;

        this.init();
    }

    init() {
        let menuLevelZero = document.querySelectorAll(
            ".catalog-categories__item"
        );
        menuLevelZero.forEach(elem => {
            let item = elem.getElementsByTagName("ul")[0];
            let elemLink = elem.querySelector(".catalog-categories__link");
            let link = elemLink.getAttribute("href");

            elem.addEventListener("click", event => {
                if (item) {
                    item.classList.toggle("catalog-categories_active");

                    event.preventDefault();

                    item.addEventListener("click", event => {
                        event.stopPropagation();
                    });

                    let elemUl = elem.getElementsByTagName("ul")[0];

                    if (
                        elemUl.style.maxHeight == 0 ||
                        elemUl.style.maxHeight == "0px"
                    ) {
                        elemUl.style.maxHeight = elemUl.scrollHeight + "px";

                        setTimeout(
                            () => (elemUl.style.maxHeight = "none"),
                            300
                        );
                    } else {
                        elemUl.style.maxHeight = elem.scrollHeight + "px";

                        setTimeout(() => (elemUl.style.maxHeight = 0), 100);
                    }
                }
            });
        });
    }

    toggle() {
        this.body.style.overflow =
            this.body.style.overflow === "" ? "hidden" : "";
        this.menu.classList.toggle(`${this.menu.classList[0]}_active`);
    }
}

let menu = new Menu(".catalog-categories");

let header = document.body.querySelector('.header');
let headerHeight = header.clientHeight;
let scrollPrev = 0;


window.addEventListener('scroll', event => {
	let scrolled = window.pageYOffset;

	if (scrolled > 100 && scrolled > scrollPrev) {
        console.log(scrolled, scrollPrev);
		header.classList.add('header_scroll');
	} else {
		header.classList.remove('header_scroll');
	}
	scrollPrev = scrolled;
});

/*
import Module from '../widgets/module/index.js'; 
import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/
