// 用户输入一个数，来判断是奇数还是偶数

let num = prompt('请输入数字：');

/*
if (num % 2 === 0) {
  alert(num + '是偶数');
} else {
  alert(num + '是奇数');
}*/

alert(num % 2 ===0 ? num + '是偶数' : num + '是奇数');