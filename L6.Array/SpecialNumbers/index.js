/* eslint-disable no-plusplus */
function getSpecialNumbers(from, to) {
  const specialNumbers = [];

  for (let number = from; number <= to; number++) {
    if (number % 3 === 0) {
      specialNumbers.push(number);
    }
  }
  return specialNumbers;
}

console.log(getSpecialNumbers(1, 10));
console.log(getSpecialNumbers(-10, 10));
console.log(getSpecialNumbers(1, 2));

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]
