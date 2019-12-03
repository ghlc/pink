// 接收用户输入的姓名，来判断是否中奖，如果输入的是刘德华，则提示中了5块钱，否则提示没有中奖
let winner_name = prompt("请输入您的姓名：");

if (winner_name === "刘德华") {
  console.log("恭喜你！中了5块钱！")
} else {
  console.log("很遗憾未中奖！再接再厉噢！")
}