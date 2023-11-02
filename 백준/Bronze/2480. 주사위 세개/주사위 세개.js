const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [a, b, c] = input;

solution(a, b, c);

function solution(a, b, c) {
    let prize = 0;
  
    if (a == b && a == c) {
      prize = 10000 + a * 1000;
    } else if (a == b || a === c) {
      prize = 1000 + a * 100;
    } else if (b == c) {
      prize = 1000 + b * 100;
    } else {
      prize = Math.max(a, b, c) * 100;
    }
  
    console.log(prize);
  }