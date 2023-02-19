const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const arrCopy = arr.slice(0);

  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] % 2 === 0) {
      arrCopy[i] += delta;
    }
  }

  return arrCopy;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
