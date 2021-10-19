function frankenSplice(arr1, arr2, n) {
  const copyArray2 = arr2.slice();
  copyArray2.splice(n, 0, ...arr1);
  return copyArray2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
