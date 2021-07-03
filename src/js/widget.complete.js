/* eslint-disable no-alert */
import isValidNum from './numValidator';
import toGetPaymentSystem from './paymentSysValidator';
import toChooseIcon from './toChooseIcon';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.inputEl = '';
  }

  static get markup() {
    return `
    <h1 class="title">Check your credit card number:</h1>
    <div class="cards">
        <div class="cards-icon" id="visa"><img src="./src/img/visa.png" alt="visa"></div>
        <div class="cards-icon" id="mastercard"><img src="./src/img/mastercard.png" alt="mastercard"></div>
        <div class="cards-icon" id="american-express"><img src="./src/img/american-express.png" alt="american-express"></div>
        <div class="cards-icon" id="discover"><img src="./src/img/discover.png" alt="discover"></div>
        <div class="cards-icon" id="diners"><img src="./src/img/diners.png" alt="diners"></div>
        <div class="cards-icon" id="mir"><img src="./src/img/mir.png" alt="mir"></div>
    </div>
    <form data-widget="card-num-form-widget">
        <div class="form-control">
            <input id="card-num-input" data-id="card-num-input" type="text">
        </div>
        <button data-id="card-num-submit">Click to validate</button>
    </form>
    `;
  }

  static get inputSelector() {
    return '[data-id=card-num-input]';
  }

  static get submitSelector() {
    return '[data-id=card-num-submit]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    this.inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
    this.inputEl.addEventListener('keyup', (evt) => this.onKeyUp(evt));
  }

  onKeyUp(evt) {
    evt.preventDefault();
    this.inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (evt.key.match(/^\d/)) {
      // this.inputEl.value += evt.key;
      if (isValidNum(this.inputEl.value)) {
        const paymentSystem = toGetPaymentSystem(this.inputEl.value);
        toChooseIcon(paymentSystem);
      }
      // console.log(this.inputEl.value);
    }
    // if (evt.code === 8) {
    //   const paymentSystem = toGetPaymentSystem(this.inputEl.value);
    //   if (paymentSystem === undefined) {

    //   }
    // }
  }

  onSubmit(evt) {
    // add event listeners here
    evt.preventDefault();
    this.inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (isValidNum(this.inputEl.value)) {
      this.inputEl.classList.add('valid');
      alert('Valid');
    } else {
      this.inputEl.classList.add('invalid');
      alert('Invalid!');
    }
  }
}
