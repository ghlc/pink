// 将数组['red','green','blue','pink','purple']的内容反过来存放

let newArr = [];
let arr = ['red','green','blue','pink','purple'];

/*
for (let i = 0; i < arr.length; i++) {
    newArr[arr.length - i - 1] = arr[i];
}
*/

for (let i = arr.length - 1; i >= 0; i--) {
  newArr[newArr.length] = arr[i];
}
console.log(newArr);