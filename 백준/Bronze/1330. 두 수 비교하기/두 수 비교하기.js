const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [A, B] = input;

solution(A, B);

function solution(A, B) {
    if(A < B) console.log('<');
    else if(A > B) console.log('>');
    else if(A == B) console.log('==');
}