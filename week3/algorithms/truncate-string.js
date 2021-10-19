/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
function truncateString(str, num) {
  if (str.length > num) {
    str = `${str.substr(0, num)}...`;
    return str;
  }
  return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
