// 根据用户输入的数值（数字1到数字7），返回星期几

let num = prompt('请输入数值：');

switch (num) {
  case '1':
    alert('星期一');
    break;
  case '2':
    alert('星期二');
    break;
  case '3':
    alert('星期三');
    break;
  case '4':
    alert('星期四');
    break;
  case '5':
    alert('星期五');
    break;
  case '6':
    alert('星期六');
    break;
  case '7':
    alert('星期日');
    break;
  default:
    alert('请输入1~7间的数值');
}