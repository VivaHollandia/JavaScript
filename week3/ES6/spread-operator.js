const arr = [6, 89, 3, 45];

const maximus1 = Math.max(arr);
console.log(maximus1); // NaN

const maximus2 = Math.max(...arr);
console.log(maximus2); // 89

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);
