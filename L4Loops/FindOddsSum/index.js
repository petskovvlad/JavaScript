const start = 0;
const end = 1000;
let sum = 0;

for (let number = start; number <= end; number += 1) {
  if (number % 2 !== 0) {
    sum += number;
    console.log("Found");
  }
}

if (sum * 5 > 5000) {
  console.log("Bigger");
} else if (sum * 5 <= 5000) {
  console.log("Smaller or equal");
}