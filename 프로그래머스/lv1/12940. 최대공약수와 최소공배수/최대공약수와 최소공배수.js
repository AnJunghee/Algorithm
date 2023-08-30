function solution(n, m) {
    let gcd = 0;
    
    // 최대공약수 구하기
    for(let i = 1; i <= Math.max(n, m); i++) {
        if(n % i === 0 && m % i === 0) gcd = i;
    }
    
    return [gcd, (n * m) / gcd];
}