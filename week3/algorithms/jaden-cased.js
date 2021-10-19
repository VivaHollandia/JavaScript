/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const originalString = "How can mirrors be real if our eyes aren't real";
console.log(`Not Jaden-Cased: ${originalString}`);

function convertToJadenCase(str) {
  str = str.toLowerCase();
  const arrayWords = str.split(' ');
  const newArrayWords = [];
  for (let word of arrayWords) {
    word = word.charAt(0).toUpperCase() + word.substr(1);
    newArrayWords.push(word);
  }
  const result = newArrayWords.join(' ');
  return result;
}

console.log(`Jaden-Cased: ${convertToJadenCase(originalString)}`);
