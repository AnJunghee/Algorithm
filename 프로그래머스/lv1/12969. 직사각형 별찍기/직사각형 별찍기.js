process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const dt = data.split(" ");
    const n = Number(dt[0]), m = Number(dt[1]);
    
    const a = '*'.repeat(n);
    for(let i = 0; i < m; i++) {
        console.log(a);
    }
});