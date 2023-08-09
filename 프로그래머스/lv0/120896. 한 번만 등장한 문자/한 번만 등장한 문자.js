function solution(s) {
    let answer = [];
    let count = new Array(s.length).fill(0);
    
    for(let i = 0; i < count.length; i++) {
        count[s.indexOf(s[i])]++;
    }
    
    count.forEach((cnt, i) => cnt === 1 && answer.push(s[i]));
    
    return answer.sort().join("");
}