/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

function largestOfFour(arr) {
  const resultArray = [];
  for (const element of arr) {
    resultArray.push(Math.max(...element));
  }
  return resultArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
