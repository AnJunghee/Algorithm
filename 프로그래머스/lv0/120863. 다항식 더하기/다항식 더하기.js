function solution(polynomial) {
    // 항만 담긴 배열 생성
    const arr = polynomial.split(" + ");
    const x = [], n = [];
    
    // 동류항끼리 나누기
    arr.forEach((v) => v.includes("x") ? x.push(v) : n.push(v));
        
    // x 숫자 연산
    const nOp = x.filter((v) => v.match(/\dx/g)).map((v) => v.substr(0, v.length - 1));
    const sum1 = nOp.reduce((a, c) => a + Number(c), 0);
    
    // x 연산
    const sum2 = x.length - nOp.length;
    
    // 상수항 연산
    const sum3 = n.reduce((a, c) => a + Number(c), 0);
    
    // 출력
    if (polynomial === "x") {
        return "x";
    } else if(sum3 === 0) {
        return (sum1 + sum2) + "x"
    } else {
        if(x.length === 0) return sum3 + "";
        else if((sum1 + sum2) === 1) return "x" + " + " + sum3;
        else return (sum1 + sum2) + "x" + " + " + sum3;
    }
}