const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i = 0; i < Number(n); i++) {
    const lastIdx = input[i].trim().length - 1;
    console.log(input[i][0]+input[i][lastIdx]);
}