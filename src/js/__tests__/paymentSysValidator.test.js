import toGetPaymentSystem from '../paymentSysValidator';

test.each([
  ['visa', '4929348827706170', 'visa'],
  ['mastercard', '5555555555554444', 'mastercard'],
  ['american-express', '371449635398431', 'american-express'],
  ['discover', '6011235596645859', 'discover'],
  ['diners', '30082661266322', 'diners'],
  ['mir', '2202200975987809', 'mir'],
])(('it should be %s'), (_, input, expected) => {
  expect(toGetPaymentSystem(input)).toBe(expected);
});
