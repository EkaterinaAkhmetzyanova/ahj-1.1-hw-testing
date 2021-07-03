import isValidNum from '../numValidator';

test.each([
  ['true for valid num', '4929348827706170', true],
  ['false for invalid num', '5121849023100', false],
])(('it should be %s'), (_, input, expected) => {
  expect(isValidNum(input)).toBe(expected);
});
