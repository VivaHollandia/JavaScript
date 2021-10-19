/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

function bouncer(arr) {
  const newArray = [];
  for (const element of arr) {
    if (element) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(bouncer([7, 'ate', '', false, 9]));
