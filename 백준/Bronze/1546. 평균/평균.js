const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);
const average = arr.map((v) => v / max * 100).reduce((acc, curr) => acc += curr) / Number(input[0]);

console.log(average);