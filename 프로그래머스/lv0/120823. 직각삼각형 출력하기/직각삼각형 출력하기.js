const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var num = Number(input[0]);
    var star = '';
    for(var i=0; i<num; i++){
        for(var j=0; j<=i; j++){
            star += "*";
        }
        star += "\n"
    }
    console.log(star)
});