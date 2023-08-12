function solution(n, k) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(i);
    }
    return answer.filter(v => v % k === 0);
}