/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-assignment */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrCopy = arr.slice(0);

  // eslint-disable-next-line guard-for-in
  for (let i in arr) {
    arrCopy[i] = arrCopy[i] ** 2;
  }

  return arrCopy;
}

console.log(squareArray([1, 10, 9, 11]));
console.log(squareArray([10, 0, -4]));
console.log(squareArray([1]));

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
