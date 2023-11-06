const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const answer = Math.max(Number([...a].reverse().join('')),Number([...b].reverse().join('')));

console.log(answer);