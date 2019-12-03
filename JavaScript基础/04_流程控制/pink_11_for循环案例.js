// 1. 求1-100之间所有数的平均值

let sum = 0;
let average;

for (let i = 1; i <=100; i++) {
  sum += i;
}

average = sum / 100;
console.log('1-100之间所有数的平均值' + average);

// 2. 求1-100之间所有偶数和奇数的和

let even = 0;
let odd = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log('1-100之间所有偶数的和' + even);
console.log('1-100之间所有奇数的和' + odd);

// 3. 求1-100之间所有能被3整除的数字的和

let result = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    result += i;
  }
}

console.log('1-100之间所有能被3整除的数字的和' + result);
