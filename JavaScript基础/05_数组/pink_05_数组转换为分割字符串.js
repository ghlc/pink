// 将数组['red','green','blue','pink']转换为字符串，并且用|或其他符号分割
// 输出：'red|green|blue|pink|'

let arr = ['red', 'green', 'blue', 'pink', 'purple'];
let spl = '|';
let str = '';
for (let i = 0; i < arr.length; i++) {
  str += arr[i] + spl;
}
  console.log(str);
