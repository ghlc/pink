// 用户依次输入2个值，最后弹出最大的那个值

let firstNum = prompt('请输入第一个数值：');

let secondNum = prompt('继续输入第二个数值：');

if (firstNum > secondNum) {
  alert(firstNum);
} else {
  alert(secondNum);
}

// alert(firstNum > secondNum ? firstNum : secondNum);