// 求数组[2, 6, 1, 7, 4]里元素的和以及平均值

let sum = 0;
let arr = [2, 6, 1, 7, 4];
let average = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

average = sum / arr.length;

console.log(sum, average);