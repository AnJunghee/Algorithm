const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [h, m] = input;

solution(h, m);

function solution(h, m) {
    if((m-45) < 0) {
        if(h == 0) {
            console.log(23, 60 - Math.abs(m-45));
        }
        else {
            console.log(h-1, 60 - Math.abs(m-45));
        }
    } else {
        console.log(h, m-45);
    }
}