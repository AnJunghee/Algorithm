const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const [A, B] = input;
const a = parseInt(A);
const b = parseInt(B);

solution(a, b);

function solution(a, n) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
}