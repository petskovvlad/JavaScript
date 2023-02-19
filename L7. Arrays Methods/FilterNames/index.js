/* eslint-disable prettier/prettier */
const filterNames = (arr, text) => {
    return arr.filter(elem => {
      return elem.toLowerCase().indexOf(text) > -1 && elem.length > 5;
    });
  };

console.log(filterNames(["John", "Oliviya", "Oleksandr"], "ya"));