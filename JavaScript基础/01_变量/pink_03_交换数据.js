// 思路：创建一个空的临时变量，作为 2 个变量交换数据的中转站
let temp;

let apple1 = '青苹果';

let apple2 = '红苹果';

temp = apple1;

apple1 = apple2;

apple2 = temp;

console.log(apple1);

console.log(apple2);
