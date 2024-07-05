function solution(n) {
    const bitCount = [...n.toString(2)].filter((v) => v === '1').length // 2진수로 변환했을 때 1의 개수
    
    let num = n + 1;
    while(true) {
        const currentBitCount = [...num.toString(2)].filter((v) => v === '1').length;
        
        if(bitCount === currentBitCount) {
            return parseInt(num);
            break;
        }
        num++; 
    }
}