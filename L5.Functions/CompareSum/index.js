/* eslint-disable no-plusplus */
function sum(from, to) {
  let sum = 0;
  for (let startNumber = from; startNumber <= to; startNumber++) {
    sum += startNumber;
  }
  return sum;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const result1 = sum(firstFrom, firstTo);
  const result2 = sum(secondFrom, secondTo);
  if (result1 > result2) {
    return true;
  }
  return false;
}

console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(5, 15, 3, 5));
console.log(compareSums(-2, 5, 5, 9));

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
