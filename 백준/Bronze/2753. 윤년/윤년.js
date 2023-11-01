const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

solution(input);

function solution(n) {
    console.log(n % 4 == 0 && (n % 100 != 0 || n % 400 == 0) ? 1 : 0);
}