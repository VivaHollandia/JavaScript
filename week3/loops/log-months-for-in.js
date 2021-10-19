/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Normally for ... in concept is ONLY for OBJECTS
// But I converted it for array with MONTHS[ELEMENT]
for (const element in months) { // element refer to index of months
  // eslint-disable-next-line no-console
  console.log(months[element]);
}
