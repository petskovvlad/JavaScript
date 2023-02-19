function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  const newArray = array.sort(compareNumbers);
  return newArray;
}

console.log(sortAsc([100, 32, 99, 1, 6]));

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  function compareNumbers(a, b) {
    return b - a;
  }

  const descArray = array.sort(compareNumbers);
  return descArray;
}

console.log(sortDesc([100, 32, 99, 1, 6]));
