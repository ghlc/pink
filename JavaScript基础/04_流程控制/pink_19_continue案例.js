// 求整数1~100的累加值，但要求跳过所有个位为3的数

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 10 === 3) {
    continue;
  }
  sum += i;
}

console.log(sum);