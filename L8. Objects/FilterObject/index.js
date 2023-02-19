/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const getAdults = (obj) => {
  const resultObject = {};
  for (let j in obj) {
    if (obj[j] >= 18) {
      resultObject[j] = obj[j];
    }
  }
  return resultObject;
};

// examples
console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
