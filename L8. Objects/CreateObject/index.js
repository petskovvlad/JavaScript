const transformToObject = (arr) => {
  const result = {};

  arr.forEach((el) => {
    result[el] = el;
  });

  return result;
};

// examples
console.log(transformToObject(["a", 17.1, "John Doe"])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
