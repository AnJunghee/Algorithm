let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

croatia.forEach((v) => input = input.split(v).join('C'));

console.log(input.length);