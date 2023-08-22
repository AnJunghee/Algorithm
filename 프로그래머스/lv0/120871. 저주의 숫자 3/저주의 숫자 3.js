function solution(n) {
    let count = 1;
    
    for(let i = 1; i <= n; i++) {
        while (count % 3 === 0 || count.toString().includes("3")) {
            count++;
        }
        count++;
    }
    
    return count - 1; // 마지막에 한 번 더 증가시키므로 1을 빼줌
}