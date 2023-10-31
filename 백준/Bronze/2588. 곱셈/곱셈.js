const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

solution(input);

function solution(input) {
    const [hundred, ten, one] = input[1].toString().split('');
    console.log(input[0]*one);
    console.log(input[0]*ten);
    console.log(input[0]*hundred);
    console.log((input[0]*one) + (input[0]*ten*10) + (input[0]*hundred*100));
}