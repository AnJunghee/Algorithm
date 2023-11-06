const [[n, m], ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(" ").map(Number));
const arr = Array.from({length: n}, (_, i) => i + 1);

for(let [i, j] of input) {
    let temp = arr[i-1];
    arr[i-1] = arr[j-1];
    arr[j-1] = temp;

}

console.log(...arr);