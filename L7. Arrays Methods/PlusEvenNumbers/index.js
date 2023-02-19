const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const callback = (elem) => {
    if (elem % 2 === 0) {
      return elem + delta;
    }
    return elem;
  };

  return arr.map(callback);
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
