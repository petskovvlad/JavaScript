/* eslint-disable radix */
const getParsedIntegers = (array) => {
  return array.map((elem) => Number.parseInt(elem));
};

const getParsedIntegersV2 = (array) => {
  return array.map((elem) => parseInt(elem));
};

const getParsedFloats = (array) => {
  return array.map((elem) => Number.parseFloat(elem));
};

const getParsedFloatsV2 = (array) => {
  return array.map((elem) => parseFloat(elem));
};
