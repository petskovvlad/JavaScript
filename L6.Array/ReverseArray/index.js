/* eslint-disable prettier/prettier */
/*
function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const arrCopy = arr.slice(0);
    for (let i = arr.length - 1; i >= 0; i--) {
      arrCopy[i] = arr[i];
    }
    return arrCopy;
}

console.log(reverseArray([1, 5, 8, 10]));
*/

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrCopy = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrCopy[i] = arr[(arr.length - 1) - i];
  }
  return arrCopy;
}

console.log(reverseArray([1, 5, 8, 10]));
