function solution(strArr) {
    let strCount = new Array(strArr.length).fill(0);
    
    strArr.forEach((v, i) => strCount[v.length] += 1);
    
    return Math.max(...strCount);
}