/* eslint-disable no-restricted-syntax */

function mutation(arr) {
  const arr1 = arr[0].toLowerCase().split('');
  const arr2 = arr[1].toLowerCase().split('');
  let result = true;
  for (const item of arr2) {
    if (arr1.indexOf(item) === -1) {
      result = false;
    }
  }
  return result;
}

console.log(mutation(["hello", "hey"]));
