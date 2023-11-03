const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const total = input[0]; // 영수증 총 금액

let price = 0;

for(let i = 1; i <= input[1]; i++) {
  let prd = input[i+1].split(' ');
  price += prd[0] * prd[1];
}

console.log(price == total ? "Yes" : "No");