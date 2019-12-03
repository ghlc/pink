// 1. 现存有 100 块钱
// 2. 如果存钱，就用输入钱数加上先存的钱数，之后弹出显示余额提示框
// 3. 如果取钱，就减去取的钱数，之后弹出显示余额提示框
// 4. 如果显示余额，就输出余额
// 5. 如果退出，弹出退出信息提示框

let money = 100;

ATM: while (true) {
  let cash;
  let num = prompt('请输入您要的操作：\n 1.存钱\n 2.取钱\n 3.显示余额\n 4.退出');
  num = parseInt(num);

  switch (num) {
    case 1:
      cash = prompt('请输入您要存入的金额：');
      if (cash == null || cash == '') {
        alert('请输入正确金额···');
      } else {
        money += parseInt(cash);
        alert('你的账户余额是'+ money +'元');
      }
      break;
    case 2:
      cash = prompt('请输入您要取出的金额：');
      if (cash == null || cash == '') {
        alert('请输入正确金额~~~');
      } else {
        if (cash >= money) {
          alert('账户余额不足！！！')
        } else {
          money -= parseInt(cash);
          alert('你的账户余额是'+ money +'元');
        }
      }
      break;
    case 3:
      alert('你的账户余额是'+ money +'元');
      break;
    case 4:
      alert('您已退出系统，很高兴为您服务！')
      break ATM;
    default:
      alert('请输入正确选项（1.存钱、2.取钱、3.显示余额、4.退出）')
  }
}

console.log('money' + money);