/* eslint-disable no-plusplus */
const includes = (arr, num) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      result = true;
    }
  }
  return result;
};

console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 4));
// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
