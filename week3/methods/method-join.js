/* eslint-disable no-console */
const arr = ['H', 'e', 'l', 'l', 'o'];

console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]

arr.join('');

console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ] original array didn't change

const newString1 = arr.join(); // returns string

console.log(newString1); // H,e,l,l,o

const newString2 = arr.join('');

console.log(newString2); // Hello
