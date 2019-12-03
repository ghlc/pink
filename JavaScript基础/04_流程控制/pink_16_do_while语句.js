// 1. 打印人的一生，从1岁到100岁

let i = 1;

do {
  console.log('今年'+ i +'岁');
  i++;
} while (i <= 100)

// 2. 计算 1 ~ 100 之间所有整数的和

let sum = 0;
let num = 1;

do {
  sum += num;
  num++;
} while (num <= 100)

console.log(sum);

// 3. 弹出一个提示框，你爱我吗？ 如果输入我爱你，就提示结束，否则一直询问。

let msg;

do {
  msg = prompt('你爱我吗？');
} while (msg !== '我爱你')

console.log('@' + msg);