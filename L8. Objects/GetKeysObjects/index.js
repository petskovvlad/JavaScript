/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

/*
function getKeys(obj) {
    let result;
    for ( let i in obj) {
    result = console.log(obj[i]);
    }
    return result;
  }
  */
const user = {
  name: "Tom",
  age: 17,
};

function getKeys(obj) {
  let result;
  for (const i in obj) {
    result = console.log(i);
  }

  return result;
}

getKeys(user);
