function solution(lines) {
    let arr = [];
    
    lines.forEach(([x, y]) => {
        for(let i = x; i < y; i++) {
            arr.push(i.toString() + (i+1).toString());
        }
    });
    
    const filteredArray = arr.filter((v) => arr.indexOf(v) !== arr.lastIndexOf(v));
    return [...new Set(filteredArray)].length;
}