const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let star = '';

for(let i = 0; i < input; i++) {
    star += '*'
    console.log(star);
}
