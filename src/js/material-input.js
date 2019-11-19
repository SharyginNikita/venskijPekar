"use strict";

import Imask from "imask";
import datepicker from "js-datepicker";

/**
 * Simple class fo creating
 * materialize inputs and textareas
 *
 * @class MaterialInput
 */
class MaterialInput {
    /**
     *Creates an instance of MaterialInput.
     * @param {*} element
     * @param {*} options
     * @memberof MaterialInput
     */
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.mask = undefined;
        this.date = undefined;
        this.addEvents(element);

        if (this.value) {
            this.updateValue(this.value);
        }

        if (options.phone) {
            this.addPhoneMask();
        }

        if (options.date) {
            this.addDatePicker();
        }

        if (options.textarea) {
            this.value = element.querySelector("textarea").value;
            this.addAutoResize();
        } else {
            this.value = element.querySelector("input").value;
            this.updateValue(this.value);
        }
    }

    addEvents(el) {
        el.addEventListener("input", event =>
            this.updateValue(event.target.value)
        );
    }

    addPhoneMask() {
        let input = this.element.querySelector("input");
        this.mask = Imask(input, {
            mask: "+{7}(000)000-00-00",
            // lazy: false,
            // placeholderChar: "*"
        });
    }

    addDatePicker() {
        let input = this.element.querySelector("input");
        this.date = datepicker(input, {
            formatter: (input, date, instance) => {
                input.value = date.toLocaleString('ru', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  });
              },
            customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
            customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            overlayButton: 'Перейти',
  overlayPlaceholder: 'Введите год (4 цифры)',
            onSelect: (instance, date) => {
                this.updateValue(date);
            }
        });
    }

    addAutoResize() {
        let textarea = this.element.querySelector("textarea");
        textarea.addEventListener("input", event => this.autoResize(textarea));
        window.addEventListener("resize", event => this.autoResize(textarea));
    }

    autoResize(element) {
        let outerHeight = parseInt(window.getComputedStyle(element).height, 10);

        let diff = outerHeight - element.clientHeight;
        element.style.height = "auto";
        element.style.height = element.scrollHeight + diff + "px";
    }

    updateValue(value) {
        console.log(value);
        if (value) {
            
            this.element.classList.add(this.options.activeClass);
        } else {
            this.element.classList.remove(this.options.activeClass);
        }
    }
}

export default MaterialInput;
