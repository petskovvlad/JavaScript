/* eslint-disable no-plusplus */
function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const newArray = [...new Set(array)];
  let result = 0;
  for (let i = 0; i < newArray.length; i++) {
    result++;
  }

  return result;
}
