const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(...[...alphabet].map((v) => input.indexOf(v)));
