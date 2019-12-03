// 参与加法运算的布尔值，true 当 1 看，false 当 0 看
let flag = true;

let un_flag = false;

console.log(flag + 1);

console.log(un_flag + 1);

// 如果一个变量声明未赋值，默认值 undefined 未定义类型
let unknown;

console.log(unknown);

// undefined 和数字相加,最后的结果是 NaN
let variable = undefined;

console.log(variable + 'pink');

console.log(variable + 1);  // NaN

console.log(variable + true);  // NaN

// null 空值
let empty = null;

console.log(empty + 'pink');

console.log(empty + 1);  // 1

console.log(empty + false);  // 0