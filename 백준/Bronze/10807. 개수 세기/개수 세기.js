const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const n = input[0];
const arr = input[1].split(' ');
const v = input[2];
let count = 0;

arr.forEach((num) => num == v && count++);

console.log(count);
