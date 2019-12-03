// 求数组[2, 6, 1, 77, 52, 25, 7]中的最大值

let arr = [2, 6, 1, 77, 52, 25, 7, 90];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(max, min);
