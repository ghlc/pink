// 接收用户输入的用户名和密码，若用户名为"admin"，密码为"123456"，则提示用户登录成功！否则，让用户一直输入。

/*
let name = prompt('请输入用户名：');
let pwd = prompt('请输入密码：');

while (!(name === 'admin' && parseInt(pwd) === 123456)) {
  name = prompt('请重新输入用户名：');
  pwd = prompt('请重新输入密码：');
}

console.log('登录成功！' + '欢迎' + name);
*/

do {
  let name = prompt('请输入用户名：');
  let pwd = prompt('请输入密码：');

  if (!(name === 'admin' && parseInt(pwd) === 123456)) {
    continue;
  } else {
    break;
  }
} while (true)

console.log('登录成功！');
