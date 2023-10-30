function solution(N, stages) {
    // 각 스테이지 실패 인원
    const failedCount = new Map();
    
    for(let i = 1; i <= N; i++) {
        failedCount.set(i, 0);
        stages.forEach((v) => {
            if(v === i) {
                failedCount.set(i, failedCount.get(i) + 1);
            }
        });
    }

    // 각 스테이지의 실패율
    const failureRate = new Map();
    let len = stages.length;
    
    for(let i = 1; i <= N; i++) {
        failureRate.set(i, failedCount.get(i) / len);
        len -= failedCount.get(i);
    }

    return [...failureRate].sort((a, b) => b[1] - a[1]).map(([a, b]) => a);
}