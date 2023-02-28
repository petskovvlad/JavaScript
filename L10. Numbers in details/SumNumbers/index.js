const getTotalPrice = (arr) =>
  "$" + Math.floor(arr.reduce((acc, elem) => acc + elem) * 100) / 100;
