function repeatStringNumTimes(str, num) {
  let repeatedStr = '';
  if (num <= 0) {
    return repeatedStr;
  }
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes('abc', 3));
