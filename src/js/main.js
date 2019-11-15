"use strict";

import "materialize-css";
import Swiper from "swiper/js/swiper.min.js";
import Counter from './counter';

let counters = document.querySelectorAll('.counter');

counters.forEach(elem => {
  new Counter(elem);
})


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
  let cardToggler = card.querySelector(".card-article__wrapper-top");
  let cardReveal = card.querySelector(".card-article__reveal");
  cardToggler.addEventListener("click", event => {
    cardReveal.classList.add("card-article__reveal_active");
  });

  cardReveal.addEventListener("click", event => {
    cardReveal.classList.remove("card-article__reveal_active");
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

    if (this.menu) {
      this.init();
    }
  }

  init() {
    let menuLevelZero = document.querySelectorAll(
      `.${this.menu.classList[0]}__item`
    );

    menuLevelZero.forEach(elem => {
      let item = elem.getElementsByTagName("ul")[0];
      let elemLink = elem.querySelector(`.${this.menu.classList[0]}__link`);
      let link = elemLink.getAttribute("href");

      elem.addEventListener("click", event => {
        if (item) {
          item.classList.toggle(`.${this.menu.classList[0]}_active`);

          event.preventDefault();

          item.addEventListener("click", event => {
            event.stopPropagation();
          });

          let elemUl = elem.getElementsByTagName("ul")[0];

          if (elemUl.style.maxHeight == 0 || elemUl.style.maxHeight == "0px") {
            elemUl.style.maxHeight = elemUl.scrollHeight + "px";

            setTimeout(() => (elemUl.style.maxHeight = "none"), 300);
          } else {
            elemUl.style.maxHeight = elem.scrollHeight + "px";

            setTimeout(() => (elemUl.style.maxHeight = 0), 100);
          }
        }
      });
    });
  }

  toggle() {
    this.body.style.overflow = this.body.style.overflow === "" ? "hidden" : "";
    this.menu.classList.toggle(`${this.menu.classList[0]}_active`);
  }
}

//let menu = new Menu(".menu");
let filter = new Menu(".catalog-categories");

function initMenu() {
  let clientWidth = document.body.clientWidth;

  if (clientWidth <= 1060) {
    let menu = new Menu(".header-nav");
    // setTimeout(
    //     () => (document.body.querySelector('.header-category').style.display = 'flex'),
    //     500
    // );
    let burger = document.querySelector(".header-toolbar__burger");

    burger.addEventListener("click", event => {
      menu.toggle();

      burger.classList.toggle("header-toolbar__burger_active");
    });
  }
}

//initMenu();

class HeaderSticky {
  constructor(selector) {
    this.header = document.body.querySelector(selector);
    this.headerHeight = this.header.clientHeight;
    this.scrollPrev = 0;

    this.init();
  }

  init() {
    window.addEventListener("scroll", event => {
      let scrolled = window.pageYOffset;

      if (scrolled > this.headerHeight && scrolled > this.scrollPrev) {
        this.header.classList.add("header_scroll");
      } else {
        this.header.classList.remove("header_scroll");
      }
      this.scrollPrev = scrolled;
    });
  }
}

let headerSticky = new HeaderSticky(".header");

class SearchMobile {
  constructor(selector) {
    this.body = document.body;
    this.main = this.body.querySelector('.main');
    this.search = this.body.querySelector(selector);
    this.searchInput = this.search.querySelector(
      ".header-toolbar__search-input"
    );
    this.searchIcon = this.search.querySelector(".header-toolbar__link-icon");
    this.headerWrapper = this.body.querySelector(
      ".header-toolbar__wrapper"
    );
    this.burger = this.body.querySelector(".header-toolbar__burger");

    this.init();
  }

  init() {
      this.searchIcon.addEventListener("click", event => {
      this.search.classList.toggle(`${this.search.classList[1]}_active`);
      this.searchInput.classList.toggle(`${this.searchInput.classList[0]}_active`);
      this.burger.classList.toggle(`${this.burger.classList[0]}_search-active`);
      this.body.style.overflow = this.body.style.overflow === "" ? "hidden" : "";
      this.main.classList.toggle(`${this.main.classList[0]}_overlay`);
      this.search.addEventListener("transitionend", event => {
        this.searchInput.focus();
      });
    });

    this.main.addEventListener("click", event => {
      if(this.main.classList.contains(`${this.main.classList[0]}_overlay`)) {
        this.search.addEventListener("transitionend", event => {
          this.searchInput.blur();
        });
      this.search.classList.toggle(`${this.search.classList[1]}_active`);
      this.searchInput.classList.toggle(`${this.searchInput.classList[0]}_active`);
      this.burger.classList.toggle(`${this.burger.classList[0]}_search-active`);
      this.body.style.overflow = this.body.style.overflow === "" ? "hidden" : "";
      this.main.classList.toggle(`${this.main.classList[0]}_overlay`);
      
      }
    })
  }
}

let searchMobile = new SearchMobile(".header-toolbar__link_search");

/*
import Module from '../widgets/module/index.js'; 
import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/
