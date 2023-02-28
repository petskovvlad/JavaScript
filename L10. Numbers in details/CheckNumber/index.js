const getFiniteNumbers = (array) => {
  return array.filter((elem) => Number.isFinite(elem));
};

const getFiniteNumbersV2 = (array) => {
  return array.filter((elem) => isFinite(elem));
};

const getNaN = (array) => {
  return array.filter((elem) => Number.isNaN(elem));
};

const getNaNV2 = (array) => {
  return array.filter((elem) => isNaN(elem));
};

const getIntegers = (array) => {
  return array.filter((elem) => Number.isInteger(elem));
};
