// 1. 打印人的一生，从1岁到100岁

let i = 1;

while (i <= 100) {
  console.log('今年'+i+'岁');
  i++;
}

// 2. 计算 1 ~ 100 之间所有整数的和

let sum = 0;
let num = 1;

while (num <= 100) {
  sum += num;
  num++;
}

console.log(sum);

// 3. 弹出一个提示框，你爱我吗？ 如果输入我爱你就提示结束，否则，一直询问。

let msg = prompt('你爱我吗？');

while (msg !== '我爱你') {
  msg = prompt('你还爱我吗？');
}

console.log(msg + '！');