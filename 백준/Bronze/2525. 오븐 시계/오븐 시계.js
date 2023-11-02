const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input;
const time = n.split(" ").map(Number);

solution(time, m);

function solution(time, m) {
    const hour = (time[1] + parseInt(m)) / 60;
    const min = (time[1] + parseInt(m)) % 60

    if (time[0] + hour >= 24) {
        console.log(Math.floor(time[0] + hour - 24), min);
    } else {
        console.log(Math.floor(time[0] + hour), min);
    }
}