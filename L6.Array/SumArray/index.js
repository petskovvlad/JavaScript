/* eslint-disable no-plusplus */
function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let number = 0; number < arr.length; number++) {
    sum += arr[number];
  }
  return sum;
}

console.log(getSum([1, 10, -10, 4]));
console.log(getSum([1]));
console.log(getSum([-8, 8]));
console.log(getSum(10, 12, 14));

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
