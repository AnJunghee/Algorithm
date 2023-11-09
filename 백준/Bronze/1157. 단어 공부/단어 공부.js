const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('').map((v) => v.toUpperCase()).sort();

let cnt = 0;
let cntArray = new Array(input.length).fill(0); //횟수가 담긴 배열

// 카운트
for(let i = 1; i <= input.length; i++) {
    input[i-1] == input[i] ? cnt++ : cnt = 0;
    cntArray[i-1] = cnt;
}

// 중복체크
const a = input[cntArray.indexOf(Math.max(...cntArray))];
const b = input[cntArray.lastIndexOf(Math.max(...cntArray))];

console.log(a == b ? a : "?");