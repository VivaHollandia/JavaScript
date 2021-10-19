/* eslint-disable no-console */
/* eslint-disable no-plusplus */

function factorialize(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialize(5));
