const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const idx = Number(input[1]);

console.log(input[0][idx-1]);