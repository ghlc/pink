// 打印一行五颗星星
let num = prompt('请输入星星的个数：');

let str = '';

for (let i = 1; i <= num; i++) {
  str += '★';
}

console.log(str);

console.log('------------------------');

// 打印n行n列星星
let rows = prompt('输入打印的行数：');
let cols = prompt('输入打印的列数：');

let star = '';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    star += '★';
  }

  star += '\n';
}

console.log(star);

console.log('--------------------------');

// 打印倒三角星
let stars = '';

for (let i = 1; i <= 10; i++) {
  for (let j = i; j <= 10; j++) {
    stars += '★';
  }

  stars += '\n';
}

console.log(stars);

// 打印正三角星
let star_star = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    star_star += '★';
  }

  star_star += '\n';
}

console.log(star_star);