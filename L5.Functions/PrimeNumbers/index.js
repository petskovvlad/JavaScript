function getPrimes(num) {
  let result;
  next:
  for (let startNumber = 2; startNumber <= num; startNumber++) {
    for (let anotherNumber = 2; anotherNumber < startNumber; anotherNumber++) {
      if (startNumber % anotherNumber === 0) continue next;
    } else {
    result += String(startNumber);
  }
  return result;
}

console.log(getPrimes(5));
