/* eslint-disable prefer-const */
/* eslint-disable no-mixed-operators */

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));
