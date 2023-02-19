/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
  const newObject = {};
  for (const i in obj) {
    for (const j of props) {
      if (i === j) {
        newObject[i] = obj[i];
      }
    }
  }
  return newObject;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"])); // ==> { a: 1, c: 3 }
