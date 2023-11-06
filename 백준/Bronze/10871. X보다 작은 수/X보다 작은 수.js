const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr1 = input[0].split(' ');
const arr2 = input[1].split(' ');

console.log(...arr2.filter((v) => Number(v) < Number(arr1[1])));