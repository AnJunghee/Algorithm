const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

solution(...input);

function solution(n) {
    for(let i = 1; i <= 9; i++) {
      console.log(n, "*", i, "=", n * i);
    }
}