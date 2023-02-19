const reverseArray = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }

  return array.slice(0).reverse();
};
