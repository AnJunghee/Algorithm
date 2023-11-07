const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const cnt = [1, 1, 2, 2, 2, 8];

console.log(input.map((v, i) => cnt[i] - v).join(' '));