const [[n, m], ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((v) => v.split(" ").map(Number));
const arr = Array.from({ length: n }, (_, i) => i + 1);

for(let [i, j] of input) {
    let temp = arr.slice(i-1, j).reverse();
    arr.splice(i-1, temp.length, ...temp);
}

console.log(...arr);