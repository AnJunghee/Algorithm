function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let answer = 0;
    for (let el of d) {
        budget -= el;
        if(budget < 0) break;
        answer++;
    }
    
    return answer;
}