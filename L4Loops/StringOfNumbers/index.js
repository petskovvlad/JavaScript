const n = 10;
let sum = 1;

for (let startNumber = 2; startNumber <= n; startNumber += 1) {
  sum += String(startNumber);
}
console.log(sum);
