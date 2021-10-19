/* eslint-disable no-console */
const arr = ['My', 'name', 'is', 'Caglar', 'Kaya', 'Full', 'Stack', 'Web', 'Developer'];

console.log(arr); // ['My', 'name', 'is', 'Caglar', 'Kaya', 'Full', 'Stack', 'Web', 'Developer']

arr.slice(5);

console.log(arr); // ['My', 'name', 'is', 'Caglar', 'Kaya', 'Full', 'Stack', 'Web', 'Developer']

const jobTitle = arr.slice(5);

console.log(jobTitle); // [ 'Full', 'Stack', 'Web', 'Developer' ]

const myName = arr.slice(3, 5);

console.log(myName); // [ 'Caglar', 'Kaya' ]
