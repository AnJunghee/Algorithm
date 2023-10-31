const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const [A, B] = input;

solution(A, B);

function solution(A, B) {
    console.log(Number(A) * Number(B));
}