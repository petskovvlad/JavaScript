/* eslint-disable no-plusplus */
function getSum(startNumber, endNumber) {
  let sum = 0;
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
