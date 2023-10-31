const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input);

solution(year);

function solution(year) {
    console.log(year-543);
}