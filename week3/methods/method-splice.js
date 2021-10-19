/* eslint-disable no-console */
const arr = ['My', 'name', 'is', 'Caglar', 'Kaya', 'Full', 'Stack', 'Web', 'Developer'];

console.log(arr); // ['My', 'name', 'is', 'Caglar', 'Kaya', 'Full', 'Stack', 'Web', 'Developer']

arr.splice(5, 4); // mutated original array

console.log(arr); // [ 'My', 'name', 'is', 'Caglar', 'Kaya' ]

arr.splice(0, 3, 'I', 'am');

console.log(arr); // [ 'I', 'am', 'Caglar', 'Kaya' ]
