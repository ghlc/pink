// 接收用户输入的分数，根据分数输出对应的等级字母A、B、C、D、E。
// 1. 90分（含）以上，输出：A
// 2. 80分（含）~ 90分（不含），输出：B
// 3. 70分（含）~ 80分（不含），输出：C
// 4. 60分（含）~ 70分（不含），输出：D
// 5. 60分（不含）以下，输出：E

// 按照从大到小判断的思路
// 弹出prompt输入框，让用户输入分数（score），把这个值取过来保存到变量中
// 使用多分支 if else if 语句来分别判断输出不同的值

let score = prompt('请输入你的分数：');

if (score >= 90) {
  alert('A');
} else if (score >= 80) {
  alert('B');
} else if (score >= 70) {
  alert('C');
} else if (score >= 60) {
  alert('D');
} else {
  alert('E');
}