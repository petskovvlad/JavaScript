/* eslint-disable no-plusplus */
function findDivCount(a, b, n) {
  let result = 0;
  for (let startNum = a; startNum <= b; startNum++) {
    if (startNum % n === 0) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
}
