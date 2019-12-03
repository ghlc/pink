// 1. 求1-100之间所有数的总和与平均值

let i = 0;
let sum = 0;
let average;

while (i < 100) {
  sum += ++i;
}

console.log(sum);

average = sum / i;
console.log(average);

console.log('----------------------')

let j = 0;
let summation = 0;
let averageValue;

do {
  j++;
  summation += j;
} while (j < 100)

console.log(summation);

averageValue = summation / j;
console.log(averageValue);

console.log('----------------------')
// 2. 求1-100之间所有偶数的和

let e = 1;
let _sum = 0;

while (e <= 100) {

  if (e % 2 === 0) {
    _sum += e;
  }

  e++;
}

console.log(_sum);

console.log('-----------------------')
// 3. 求100以内7的倍数的总和

let mul_7 = 1;
let sum_7 = 0;

do {
  if (mul_7 % 7 === 0)
    sum_7 += mul_7;
  mul_7++;
} while (mul_7 <= 100)

console.log(sum_7);