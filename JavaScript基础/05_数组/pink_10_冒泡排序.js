let arr = [1, 5, 3, 2, 4];

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  // console.log(i);
}

console.log(arr);