const m = 10;
const n = 20;
let result = 1;

// eslint-disable-next-line no-sequences
for (let oddNumber = 10; oddNumber >= 10, oddNumber <= 20; oddNumber += 1) {
  if (oddNumber % 2 === 1) {
    result *= oddNumber;
  }
  console.log(result);
}
