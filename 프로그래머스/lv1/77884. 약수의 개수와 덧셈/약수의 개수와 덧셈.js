function solution(left, right) {
    const count = new Map();
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        count.set(i, 0);
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) count.set(i, count.get(i) + 1);
        }
        count.get(i) % 2 ? answer -= i : answer += i;
    }
    
    return answer;
}