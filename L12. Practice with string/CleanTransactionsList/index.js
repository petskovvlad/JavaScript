/* eslint-disable no-plusplus */
const cleanTransactionsList = (transactions) => {
  const formatted = [];

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    if (
      typeof transaction === "string" &&
      !isNaN(transaction.replace(/ /g, ""))
    ) {
      const amount = parseFloat(transaction.trim()).toFixed(2);
      formatted.push("$" + amount);
    } else if (typeof transaction === "number") {
      const amount = transaction.toFixed(2);
      formatted.push("$" + amount);
    }
  }

  return formatted;
};

const test = ["   1.9 ", "16.4", 17, "1 dollar "];

console.log(cleanTransactionsList(test));

/*
1. Фильтруем массив, отбрасывая элементы которые содержат буквы
2. Обрезаем пробелы у элемента в конце и начале
3. Добавляем к каждому элементу масива знак $ в начало
4. Возвращаем массив обратно
*/
