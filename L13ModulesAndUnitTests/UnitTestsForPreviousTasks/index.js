/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
export const reverseArray = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }

  return array.slice(0).reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  let clientIndex;
  let balance;
  let result;

  balance = balances[clients.indexOf(client)];

  if (amount > balance) {
    result = -1;
  } else if (balance > 0) {
    result = balance - amount;
    balances[clientIndex] = result;
  }

  return result;
};

export const getAdults = (obj) => {
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
