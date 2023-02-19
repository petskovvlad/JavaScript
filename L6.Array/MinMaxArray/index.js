/* function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumMinMax = 0;
  let maxNumber;
  let minNumber;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    } else if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }

  sumMinMax = maxNumber + minNumber;
  const result = sumMinMax > 1000;

  return result;
}

console.log(checker[(1, 5, 9, 15)]);
*/

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumMinMax = 0;
  const maxNumber = Math.max.apply(null, arr);
  const minNumber = Math.min.apply(null, arr);

  sumMinMax = maxNumber + minNumber;
  const result = sumMinMax > 1000;

  return result;
}

console.log(checker([1, 5, 9, 1000]));
