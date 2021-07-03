/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unneeded-ternary */
export default function isValidNum(number) {
  number = number.toString().replace(/\D/g, '');
  let nCheck = 0;
  let bEven = false;
  for (let n = number.length - 1; n >= 0; n--) {
    let nDigit = parseInt(number.charAt(n), 10);
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}
