// 用户在弹出框里面输入一个水果，如果有就弹出该水果的价格，如果没有该水果就弹出“没有此水果”。

// 弹出 prompt 输入框，让用户输入水果名称，把这个值取过来保存到变量中。
// 将这个变量作为 switch 括号里面的表达式。
// case 后面的值写几个不同的水果名称，注意一定要加引号，因为必须是全等匹配。
// 弹出不同价格即可。同样注意每个 case 之后加上 break ，以便退出 switch 语句。
// 将 default 设置为没有此水果。

let fruit = prompt('请输入水果名：');

switch (fruit) {
  case '苹果':
    alert('苹果价格¥27.80');
    break;
  case '香蕉':
    alert('香蕉价格¥29.90');
    break;
  case '橘子':
    alert('橘子价格¥36.80');
    break;
  case '梨':
    alert('梨价格¥14.90');
    break;
  default:
    alert('没有此水果');
}