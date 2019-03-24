// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

let currentLargestPrimeFactor = 1;
let remaining = 600851475143;
const result = [];
const reducer = (accumulator, currentValue) => accumulator * currentValue;
let currentTracked = 600851475143;
let currentNum = 2;

while (result.reduce(reducer, 0) !== remaining) {
  if (isPrime(currentNum) && remaining % currentNum === 0) {
    result.push(currentNum);
  }
  currentNum++;
}

console.log(result);
