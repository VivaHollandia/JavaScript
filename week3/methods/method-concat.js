/* eslint-disable no-console */
const arr1 = ['My', 'name', 'is'];
const arr2 = ['Caglar', 'Kaya'];

arr1.concat(arr2); // didn't mutate original array

console.log(arr1); // [ 'My', 'name', 'is' ]

const fullSentence = arr1.concat(arr2);

console.log(fullSentence); // [ 'My', 'name', 'is', 'Caglar', 'Kaya' ]
