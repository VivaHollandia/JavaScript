/* eslint-disable no-console */
const me = ['My', 'name', 'is', 'Caglar', 'Kaya'];
const dot = ['.'];
const work = ['Full', 'Stack', 'Web', 'Developer'];

const connect = [...me, ...dot, ...work];

// eslint-disable-next-line max-len
console.log(connect); // ['My', 'name', 'is', 'Caglar', 'Kaya', '.', 'Full', 'Stack', 'Web', 'Developer']
