let num = 10; // num 数字型

let PI = 3.14;  // PI 数字型

// 1.八进制 0 ~ 7 程序里数字前面加 0 表示八进制
let num1 = 0o10;

// 010 八进制转换为10进制为 8
console.log(num1);

let num2 = 0o12;

console.log(num2);

// 2.十六进制 0 ~ 9 a ~ f 数字前面加 0x 表示十六进制
let num3 = 0x9;

console.log(num3);

let num4 = 0xa;

console.log(num4);

// 数字型的最大值
console.log(Number.MAX_VALUE);

// 数字型的最小值
console.log(Number.MIN_VALUE);

// 无穷大
console.log(Number.MAX_VALUE * 2);  // Infinity

// 无穷小
console.log(-Number.MAX_VALUE * 2);  // -Infinity

// 非数字
console.log('pink' - 10);  // NaN