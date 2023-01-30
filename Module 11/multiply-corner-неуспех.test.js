const multiply = require('./multiply-corner.js');

test('multiply 1 * 0 to equal 2', () => {
  expect(multiply(1, 0)).toBe(2);
});