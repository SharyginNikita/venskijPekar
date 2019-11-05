import Imask from "imask";

export default class Counter {
    constructor(selector) {
        this.counter = document.body.querySelector(selector);
        this.counterInput = this.counter.querySelector("input");
        this.counterOptions = this.counter.querySelector("ul");
        this.counterOptionsClass = this.counterOptions.className;
        this.counterOptionsItems = this.counterOptions.querySelectorAll("li");
        this.counterOptionArbitary = this.counterOptions.querySelector(
            `.${this.counterOptionsClass}-item_arbitary`
        );

        this.addOpenOptionEventHandler = this.addOpenOptionEvent.bind(this);

        this.init();
    }

    init() {
        let numberMask = IMask(this.counterInput, {
            mask: Number,
            min: 1,
            max: 1000,
            thousandsSeparator: " "
        });

        this.counterInput.value = "1";

        this.counter.addEventListener("click", this.addOpenOptionEventHandler);

        this.counterOptionsItems.forEach(item => {
            item.addEventListener(
                "click",
                (item.fn = event => {
                    this.setInputValue(event, item);
                })
            );
        });

        this.counterOptionArbitary.addEventListener("click", event => {
            this.counterInput.removeAttribute("readonly");
            this.counter.removeEventListener(
                "click",
                this.addOpenOptionEventHandler
            );
        });

        this.counterInput.addEventListener("blur", event => {
            let value = Number(this.counterInput.value);

            if (value <= 9) {
                this.counter.addEventListener(
                    "click",
                    this.addOpenOptionEventHandler
                );
                this.counterInput.setAttribute("readonly", true);
            }
        });
    }

    addOpenOptionEvent() {
        this.counterOptions.classList.add(`${this.counterOptionsClass}_active`);
    }

    setInputValue(event, item) {
        event.stopPropagation();

        let regExp = /[^\d]/g;
        this.counterInput.value = item.querySelector("span").innerText.replace(regExp, '');
        this.counterOptions.classList.remove(
            `${this.counterOptionsClass}_active`
        );
    }
}

let counter = new Counter(".counter");
