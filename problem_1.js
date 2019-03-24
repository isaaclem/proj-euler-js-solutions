// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let result = 0;

for (let n = 1; n < 1000; n++) {
  if (n % 3 === 0 || n % 5 === 0) {
    result += n;
  }
}

console.log(result);

//Enhanced solution:
//3+6+9+12+......+999 = 3*(1+2+3+4+...+333)
//5+10+15+...+995 = 5*(1+2+....+199)

// 1+2+3+...+p= p*(p+1) / 2
const target = 999;

const SumDivisibleBy = n => {
  let p = Math.floor(target / n);
  return (n * (p * (p + 1))) / 2;
};

console.log(SumDivisibleBy(3) + SumDivisibleBy(5) - SumDivisibleBy(15));
