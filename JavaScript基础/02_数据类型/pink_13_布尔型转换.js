// 代表空、否定的值（'', 0, NaN, null, undefined）会被转换为 false
// 其余值都会被转换为 true

console.log(Boolean(''));

console.log(Boolean(0));

console.log(Boolean(NaN));

console.log(Boolean(null));

console.log(Boolean(undefined));
