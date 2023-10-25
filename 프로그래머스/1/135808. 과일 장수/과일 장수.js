function solution(k, m, score) {
    const box = [];
    
    score.sort((a, b) => b - a);
    
    for(let i = 0; i < score.length; i += m) {
        box.push(score.slice(i, i + m));
    }
    
    return score.length < m 
        ? 0 
        : box.filter((v) => v.length >= m)
            .map((v) => Math.min(...v) * m)
            .reduce((acc, curr) => acc += curr);
}