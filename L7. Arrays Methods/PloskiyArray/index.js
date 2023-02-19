const flatArray = (arr) =>
  arr
    .slice(0)
    .flat()
    .sort((a, b) => a - b);

const arr = [1, 4, [145, 101, 20], 10, [11, 16]];

console.log(flatArray(arr));
