function swap(numbers) {
  const [start, ...rest] = numbers;

  return [...rest, start];
}

console.log(swap([1, 10, 9, 11]));

function swapManual(numbers) {
  const newArray = numbers.slice(0);
  const firstElement = numbers[0];
  newArray.push(firstElement);
  newArray.shift();

  return newArray;
}

console.log(swapManual([1, 10, 9, 11]));

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
