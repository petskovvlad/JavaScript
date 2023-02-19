/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function withdraw(clients, balances, client, amount) {
  let clientIndex;
  let balance;
  let result;

  for (let name = 0; name < clients.length; name++) {
    clientIndex = clients.indexOf(client);
  }

  for (let number = 0; number < balances.length; number++) {
    balance = balances[clientIndex];
  }

  if (amount > balance) {
    result = -1;
  } else if (balance > 0) {
    result = balance - amount;
    balances[clientIndex] = result;
  }

  return result;
}

console.log(withdraw([1, 3, 4, 6], [15, 33, 50, 80], 4, 48));
