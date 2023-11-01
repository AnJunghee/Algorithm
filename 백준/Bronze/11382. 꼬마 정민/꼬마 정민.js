const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [A, B, C] = input

solution(A, B, C);

function solution(A, B, C) {
    console.log(A+B+C);
}