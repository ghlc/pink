// 将数组[2, 6, 1, 77, 0, 52, 0, 25, 7]中大于等于10的元素选出来，放入新数组

let newArr = [];
let arr = [2, 6, 1, 77, 0, 52, 0, 25, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr[newArr.length] = arr[i];
  }
}

console.log(newArr);