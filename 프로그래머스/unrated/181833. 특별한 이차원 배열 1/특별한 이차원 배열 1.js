function solution(n) {
    let arr = new Array(n).fill().map(() => new Array(n).fill(0));
    
    arr.forEach((v, i) => v[i] = 1);
    
    return arr;
}