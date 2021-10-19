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

let index = 0;
const lengthMonths = months.length; // 12

do {
  console.log(months[index]);
  index++;
} while (index < lengthMonths);
