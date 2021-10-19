// /regex/.test('string');

// 'string'.match(/regex/);

// test and match syntax opposite of each other

const twinkleStar = 'Twinkle, twinkle, little star';
const starRegex = /Twinkle/ig; // i: ignore case | g: repeat regex
const result = twinkleStar.match(starRegex); // Change this line

console.log(result);

const jennyStr = 'Jenny8675309';
const myRegex = /[a-z0-9]/ig;
const result2 = jennyStr.match(myRegex);

console.log(result2);
