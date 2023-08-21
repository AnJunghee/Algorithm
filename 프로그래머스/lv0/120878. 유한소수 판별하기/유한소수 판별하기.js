function solution(a, b) {
    // 최대공약수 구하기
    let gcd = 0;
    
    for(let i = 1; i <= a; i++) {
        if(a % i === 0 && b % i === 0) gcd = i;
    }
    
    // 기약분수 분모의 약수 구하기
    let factors = [];
    let bottom = b / gcd;
    
    for(let i = 2; i <= bottom; i++) {
        if(bottom % i === 0) factors.push(i);
    }
    
    // 소인수 구하기
    let primeFactors = factors.filter((v) => {
        if(v <= 1) return false; // 1과 음수는 소수가 아님
        
        for(let i = 2; i <= Math.sqrt(v); i++) {
            if(v % i === 0) return false; // 다른 수로 나누어떨어지면 소수가 아님
        }
        
        return true;
    });
    
    return primeFactors.filter((v) => v !== 2 && v !== 5).length === 0 ? 1 : 2;
}