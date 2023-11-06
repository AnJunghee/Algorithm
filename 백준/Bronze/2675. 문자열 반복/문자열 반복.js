const [_, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.map((v) => v.trim().split(" "));

let str = '';
for([a, b] of arr) {
    [...b].forEach((v) => str += v.repeat(Number(a)));
    console.log(str);
    str = '';
}