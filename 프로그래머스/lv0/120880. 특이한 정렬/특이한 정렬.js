function solution(numlist, n) {
    let answer = [];
    const arr = numlist.map((v) => [Math.abs(v - n), v]);
    
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    arr.forEach(([_, v]) => answer.push(v));
    
    return answer;
}