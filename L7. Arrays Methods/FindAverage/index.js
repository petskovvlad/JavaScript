const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, num) => acc + num) / arr.length;
};

console.log(arrAverage([1, 3, 5, 8, 9]));
