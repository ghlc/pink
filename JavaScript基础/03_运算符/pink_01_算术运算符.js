console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 2);
console.log(1 / 2);
console.log(4 % 2);
console.log(5 % 3);
console.log(3 % 5); // 3

// 浮点数 算术运算存在精度问题
console.log(0.1 + 0.2); /* 0.30000000000000004 */
console.log(0.07 * 100); /* 7.000000000000001 */

// 不要直接判断两个浮点数是否相等
let num = 0.1 + 0.2;
console.log(num === 0.3); /* false */

// 递增运算符
let num1 = 10;
console.log(num1++ + 10);
console.log(num1);
let num2 = 10;
console.log(++num2 + 10);

// 后置运算：先原值运算，后自加
// 前置运算：先自加，后运算
let e = 10;
let f= e++ + ++e;
console.log(f);

// 隐式转型
console.log("12" == 12);
// 值与数据类型全等
console.log("12" === 12);

// 短路运算（非布尔值）
// 逻辑与
console.log(123 && 456);
console.log("" && 1 + 1);
console.log(0 && "hello JS");
// 逻辑或
console.log(123 || 456);
console.log("" || 1 + 1);
console.log(0 || "hello JS");
