function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  return [...new Set(array)];
}

console.log(removeDuplicates([1, 5, 7, 7, 10, 143, 143]));
