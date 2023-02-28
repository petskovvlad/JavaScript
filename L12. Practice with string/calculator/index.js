/* eslint-disable default-case */
const calc = (expression) => {
  const imprArray = expression.split(" ");
  let result;
  switch (imprArray[1]) {
    case "+":
      result = Number(imprArray[0]) + Number(imprArray[2]);
      break;
    case "-":
      result = Number(imprArray[0]) - Number(imprArray[2]);
      break;
    case "*":
      result = Number(imprArray[0]) * Number(imprArray[2]);
      break;
    case "/":
      result = Number(imprArray[0]) / Number(imprArray[2]);
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc("9 / 3"));
