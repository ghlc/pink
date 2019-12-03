// 1.更新变量
let my_name = '周杰伦';

console.log(my_name);

my_name = '迪丽热巴';

console.log(my_name);

// 2.声明多个变量
// let age = 33;
//
// let address = '中国';
//
// let pay = 3000;

let age = 30,
    address = '中国',
    pay = 3000;

// 3.声明变量的特殊情况
let sex;

// 3.1变量只声明不赋值，结果是未定义的
console.log(sex); // undefined

// 3.2直接使用不声明，不赋值的变量会报错
// Uncaught ReferenceError: tel is not defined
// console.log(tel);

// 3.3变量不声明直接赋值使用（转换成全局变量）
height = 174;

console.log(height);
