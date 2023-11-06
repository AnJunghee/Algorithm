const [[n, _], ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(" ").map(Number));
const arr = new Array(n).fill(0);

for(let [i, j, k] of input) {
    for(let idx = i-1; idx < j; idx++) {
        arr[idx] = k;
    }
}

console.log(...arr);