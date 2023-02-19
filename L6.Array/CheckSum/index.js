/* eslint-disable no-plusplus */
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const result = sum > 100;
  return result;
};

console.log(checkSum([10, 10, 10]));
console.log(checkSum([10, 99, 1]));
console.log(checkSum([-6, -3, 200]));

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
