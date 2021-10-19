/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */

function findElement(arr, func) {
  for (const element of arr) {
    if (func(element)) {
      return element;
    }
  }
}

console.log(findElement([1, 4, 5, 8], (num) => num % 2 === 0));
