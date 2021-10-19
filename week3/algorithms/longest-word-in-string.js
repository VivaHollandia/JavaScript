/* eslint-disable no-restricted-syntax */

function findLongestWordLength(str) {
  const arrayStr = str.split(' ');
  const arrayNum = [];
  for (const element of arrayStr) {
    arrayNum.push(element.length);
  }
  const max = Math.max(...arrayNum);
  return max;
}

console.log(`Length of longest word: ${findLongestWordLength('The quick brown fox jumped over the lazy dog')}`);
