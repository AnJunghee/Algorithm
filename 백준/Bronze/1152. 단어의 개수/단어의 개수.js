const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

console.log(input.filter((v) => v).length);