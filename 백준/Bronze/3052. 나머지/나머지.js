const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const arr = input.map((v) => v % 42);

console.log(new Set(arr).size);