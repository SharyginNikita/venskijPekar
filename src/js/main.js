"use strict";

import M from "materialize-css";
import Swiper from "swiper/js/swiper.min.js";
import Counter from "./counter";

(function(window, document) {
    "use strict";

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== "function") {
        window.CustomEvent = function(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };

            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(
                event,
                params.bubbles,
                params.cancelable,
                params.detail
            );
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    function handleTouchEnd(e) {
        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(
            startEl.getAttribute("data-swipe-threshold") || "20",
            10
        ); // default 10px
        var swipeTimeout = parseInt(
            startEl.getAttribute("data-swipe-timeout") || "500",
            10
        ); // default 1000ms
        var timeDiff = Date.now() - timeDown;
        var eventType = "";

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = "swiped-left";
                } else {
                    eventType = "swiped-right";
                }
            }
        } else {
            if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (yDiff > 0) {
                    eventType = "swiped-up";
                } else {
                    eventType = "swiped-down";
                }
            }
        }

        if (eventType !== "") {
            // fire event on the element that started the swipe
            startEl.dispatchEvent(
                new CustomEvent(eventType, { bubbles: true, cancelable: true })
            );

            // if (console && console.log) console.log(eventType + ' fired on ' + startEl.tagName);
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    function handleTouchStart(e) {
        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute("data-swipe-ignore") === "true") return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    function handleTouchMove(e) {
        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }
})(window, document);

let counters = document.querySelectorAll(".counter");

counters.forEach(elem => {
    new Counter(elem);
});

let clientWidth = document.body.clientWidth;

function initSwipers() {
    let swiperProduct = new Swiper(".product-swiper__overlay", {
        wrapperClass: "product-swiper__wrapper",
        slideClass: "product-swiper__slide",
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
        grabCursor: true,
        //loop: true,
        navigation: {
            nextEl: ".product-swiper__next",
            prevEl: ".product-swiper__prev",
            disabledClass: "product-swiper__nav_disabled"
        },
        pagination: {
            el: ".product-swiper__pagination",
            dynamicBullets: true,
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
        //loop: true,
        navigation: {
            nextEl: ".news-swiper__next",
            prevEl: ".news-swiper__prev",
            disabledClass: "news-swiper__nav_disabled"
        },
        pagination: {
            el: ".news-swiper__pagination",
            dynamicBullets: true,
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
            let elemLink = elem.querySelector(
                `.${this.menu.classList[0]}__link`
            );
            let link = elemLink.getAttribute("href");

            elem.addEventListener("click", event => {
                if (item) {

                    setTimeout(
                        () => (item.classList.toggle(`${this.menu.classList[0]}_active`)),
                        50
                    );
                    

                    //event.preventDefault();

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

class MobileMenu {
    constructor(selector) {
        let body = document.body;
        this.nav = document.querySelector(selector);

        this.body = body;
        this.menu = this.nav.querySelector(".mobile-menu");

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
            let elemLink = elem.querySelector(
                `.${this.menu.classList[0]}__link`
            );
            let link = elemLink.getAttribute("href");

            if (item) {
                let divPlus = document.createElement("div");
                divPlus.className = "mobile-menu__item-plus";
                elem.append(divPlus);

                elem.addEventListener("click", event => {
                    event.stopPropagation();

                    elem.classList.toggle(`${elem.classList[0]}_active`);

                    let elemUl = elem.getElementsByTagName("ul")[0];

                    $(elemUl).slideToggle(200);
                });
            }
        });
    }

    toggle() {
        this.body.style.overflow =
            this.body.style.overflow === "" ? "hidden" : "";
        this.nav.style.opacity = 1;
        this.nav.classList.toggle(`${this.nav.classList[0]}_active`);
    }
}

let filter = new Menu(".catalog-categories");

function initMenu() {
    let clientWidth = document.body.clientWidth;

    if (clientWidth <= 1060) {
        let menu = new MobileMenu(".header-nav");
        let btnControl = document.body.querySelectorAll(
            ".header-toolbar__burger, .mobile-menu-closer"
        );
        let header = document.body.querySelector(".header__top");
        let main = document.body.querySelector(".main");
        let footer = document.body.querySelector(".footer");

        btnControl.forEach(item => {
            item.addEventListener("click", event => {
                menu.toggle();

                btnControl.forEach(item => {
                    item.classList.toggle(`${item.classList[0]}_active`);
                });

                setTimeout(() => {
                    header.classList.toggle("header__top_blur");
                    main.classList.toggle("main_blur");
                    footer.classList.toggle("footer_blur");
                }, 150);
            });
        });

        let nav = document.body.querySelector(".header-nav");

        nav.addEventListener("swiped-left", function(e) {
            menu.toggle();

            btnControl.forEach(item => {
                item.classList.toggle(`${item.classList[0]}_active`);
            });

            setTimeout(() => {
                header.classList.toggle("header__top_blur");
                main.classList.toggle("main_blur");
                footer.classList.toggle("footer_blur");
            }, 150);
        });
    }
}

initMenu();

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
        this.main = this.body.querySelector(".main");
        this.search = this.body.querySelector(selector);
        this.searchInput = this.search.querySelector(
            ".header-toolbar__search-input"
        );
        this.searchIcon = this.search.querySelector(
            ".header-toolbar__link-icon"
        );

        this.searchIconReset = this.search.querySelector(
            ".header-toolbar__link-search-reset"
        );
        this.headerWrapper = this.body.querySelector(
            ".header-toolbar__wrapper"
        );
        this.burger = this.body.querySelector(".header-toolbar__burger");

        this.init();
    }

    init() {
        [this.searchIcon, this.searchIconReset].forEach(btn => {
            btn.addEventListener("click", event => {
                this.search.classList.toggle(
                    `${this.search.classList[1]}_active`
                );
                this.searchInput.classList.toggle(
                    `${this.searchInput.classList[0]}_active`
                );

                if (this.searchInput.value !== "") {
                    this.searchInput.value = "";
                }
                this.searchIcon.classList.toggle(
                    `${this.searchIcon.classList[1]}_hidden`
                );
                this.searchIconReset.classList.toggle(
                    `${this.searchIconReset.classList[1]}_show`
                );
                this.burger.classList.toggle(
                    `${this.burger.classList[0]}_search-active`
                );
                this.body.style.overflow =
                    this.body.style.overflow === "" ? "hidden" : "";
                this.main.classList.toggle(`${this.main.classList[0]}_overlay`);
                this.search.addEventListener("transitionend", event => {
                    this.searchInput.focus();
                });
            });
        });

        this.main.addEventListener("click", event => {
            if (
                this.main.classList.contains(
                    `${this.main.classList[0]}_overlay`
                )
            ) {
                this.search.addEventListener("transitionend", event => {
                    this.searchInput.blur();
                });
                this.search.classList.toggle(
                    `${this.search.classList[1]}_active`
                );
                this.searchInput.classList.toggle(
                    `${this.searchInput.classList[0]}_active`
                );
                this.searchIcon.classList.toggle(
                    `${this.searchIcon.classList[1]}_hidden`
                );
                this.burger.classList.toggle(
                    `${this.burger.classList[0]}_search-active`
                );
                this.searchIconReset.classList.toggle(
                    `${this.searchIconReset.classList[1]}_show`
                );
                this.body.style.overflow =
                    this.body.style.overflow === "" ? "hidden" : "";
                this.main.classList.toggle(`${this.main.classList[0]}_overlay`);
            }
        });
    }
}

let searchMobile = new SearchMobile(".header-toolbar__link_search");

class LoginPopup {
    constructor() {
        //this.Sign;
        this.init();
    }

    init() {
        let logIn = { id: "modal-logIn" };
        let signUp = { id: "modal-signUp" };

        logIn.html = `
      
            <div class="modal-content">
                <div class="modal__close modal-close"><i class="material-icons-round md-close"></i></div>
                <h4 class="modal__title">Вход</h4>
                <div class="modal__inputs">
                    <div class="material-input material-input_required" id="modal-logIn__name"><input id="modal-logIn__name-input" type="text" required name="login"><label for="modal-logIn__name-input">Логин</label></div>
                    <div class="material-input material-input_required" id="modal-logIn__password"><input id="modal-logIn__password-input" type="password" required name="password"><label for="modal-logIn__password-input">Пароль</label></div>
                </div><button class="btn btn_auth">Вход</button>
                <div class="modal__text">У вас нет аккаунта?</div><button class="btn btn_auth btn_gray modal-close btn modal-trigger modal-btn__signUp" data-target="modal-signUp">Зарегистрироваться</button>
            </div>
    
        `;

        signUp.html = `
                <div class="modal-content">
                    <div class="modal__close modal-close"><i class="material-icons-round md-close"></i></div>
                    <h4 class="modal__title">Регистрация</h4>
                    <div class="modal__inputs">
                        <div class="material-input material-input_required" id="modal-signUp__name"><input id="modal-signUp__name-input" type="text" required name="login"><label for="modal-signUp__name-input">Фамииля, имя</label></div>
                        <div class="material-input material-input_required" id="modal-signUp__email"><input id="modal-signUp__email-input" type="email" required name="email"><label for="modal-signUp__email-input">E-mail</label></div>
                        <div class="material-input material-input_required" id="modal-signUp__password"><input id="modal-signUp__password-input" type="password" required name="password"><label for="modal-signUp__password-input">Пароль</label></div>
                        <div class="material-input material-input_required" id="modal-signUp__password-repeat"><input id="modal-signUp__password-repeat-input" type="password" required name="password"><label for="modal-signUp__password-repeat-input">Пароль</label></div>
                    </div><button class="btn btn_auth">Зарегистрироваться</button>
                    <div class="modal__text">У вас уже есть аккаунт?</div><button class="btn btn_auth btn_gray modal-close btn modal-trigger modal-btn__signUp" data-target="modal-logIn">Войти</button>
                </div>
        `;

        [logIn, signUp].forEach(modal => {
            let div = document.createElement("div");

            div.id = modal.id;
            div.className = "modal";
            div.innerHTML = modal.html;
            document.body.append(div);
        });

        document.addEventListener("DOMContentLoaded", function() {
            let logInModal = document.querySelector("#modal-logIn");
            let logIn = M.Modal.init(logInModal);

            let signUpLoginModal = document.querySelector("#modal-signUp");
            let signUp = M.Modal.init(signUpLoginModal);
        });
    }
}

let popup = new LoginPopup();

/*
import Module from '../widgets/module/index.js'; 
import your vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/
