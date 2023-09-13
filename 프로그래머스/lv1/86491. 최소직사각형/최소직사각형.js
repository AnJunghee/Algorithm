function solution(sizes) {
    const horizontal = [], vertical = [];
    
    sizes.forEach(([h, v]) => {
        if(h > v) {
            horizontal.push(h);
            vertical.push(v);
        } else {
            horizontal.push(v);
            vertical.push(h);
        }
    });
    
    horizontal.sort((a, b) => b - a);
    vertical.sort((a, b) => b - a);
    
    return horizontal[0] * vertical[0];
}