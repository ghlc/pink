// 1. parseInt(变量) 可以把字符型的变量转换为数字型 得到是整数

console.log(parseInt('3.14'));  // 3

console.log(parseInt('3.94'));  // 3

console.log(parseInt('120px'));  // 120

console.log(parseInt('rem120px'));  // NaN

// 2. parseFloat(变量) 可以把字符型的变量转换为数字型 得到小数（浮点数）

console.log(parseFloat('3.14'));  // 3.14

console.log(parseFloat('3.94'));  // 3.94

console.log(parseFloat('120px'));  // 120

console.log(parseFloat('rem120px'));  // NaN

// 3.利用 Number(变量)

console.log(Number('123'));

// 4.利用算术运算 - * / 隐式转换

console.log('12' - 0);

let num = '123' - '120';

console.log(num);

console.log(typeof num);

console.log('123' * 1);
