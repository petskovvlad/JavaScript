const countOccurrences = (text, findText) => {
  if (findText === "") {
    return null;
  }

  const result = text.split(findText).length - 1;
  return result;
};

const test = "mandarin, dasha, da, darit";
const test2 = "da";
console.log(countOccurrences(test, test2));
