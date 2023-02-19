/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
const withdraw = (clients, balances, client, amount) => {
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

// examples
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10)); // ==> -1 (balances array should be [1400, 87, -6])
