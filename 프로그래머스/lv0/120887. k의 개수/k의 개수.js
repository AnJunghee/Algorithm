function solution(i, j, k) {
    let count = 0;
    
    for(i; i <= j; i++) {
        [...i.toString()].forEach((v) => v === k.toString() && count++);
    }
        
    return count;
}