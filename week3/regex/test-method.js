// /regex/.test('string');

// 'string'.match(/regex/);

// test and match syntax opposite of each other

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i : ignorecase
let result = fccRegex.test(myString);

console.log(result); // true