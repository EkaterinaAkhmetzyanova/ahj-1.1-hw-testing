/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
export default function toGetPaymentSystem(number) {
  let paymentSystem;
  if (number[0] === '4') {
    paymentSystem = 'visa';
  }
  if (number[0] === '3' && number[1] === '0' || number[1] === '6' || number[1] === '8') {
    paymentSystem = 'diners';
  }
  if (number[0] === '3' && number[1] === '4' || number[1] === '7') {
    paymentSystem = 'american-express';
  }
  if (number[0] === '5' && number[1] === '1' || number[1] === '2' || number[1] === '3' || number[1] === '4' || number[1] === '5') {
    paymentSystem = 'mastercard';
  }
  if (number[0] === '2') {
    paymentSystem = 'mir';
  }
  if (number[0] === '6' && number[1] === '0') {
    paymentSystem = 'discover';
  }
  return paymentSystem;
}
