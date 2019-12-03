// 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的0去掉后，形成一个不包含0的新数组

let newArr = [];
let arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    newArr[newArr.length] = arr[i];
  }
}

console.log(newArr);