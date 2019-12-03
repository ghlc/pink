let num = prompt('班级学生总人数：');

let sum = 0;
let average = 0;

for (let i = 1; i <= num; i++) {
  let score = prompt('请输入第'+ i +'个学生的成绩：');
  // 类型转换
  sum += parseFloat(score);
}

average = sum / num;

console.log('班级总成绩是' + sum);
console.log('班级平均分数是' + average);