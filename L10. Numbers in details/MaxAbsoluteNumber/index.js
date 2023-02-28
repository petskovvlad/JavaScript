/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  if (arr.length < 1 || !Array.isArray(arr)) {
    return null;
  }

  return Math.max(...arr.map((elem) => Math.abs(elem)));
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
