// 接受用户输入的年份，如果是闰年就弹出闰年，否则弹出是平年

let year = prompt("请输入年份：");

// 能够被4整除且不能被100整除的年份为闰年，或者能够被400整除的年份为闰年
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  console.log(year + "年是闰年");
} else {
  console.log(year + "年是平年");
}