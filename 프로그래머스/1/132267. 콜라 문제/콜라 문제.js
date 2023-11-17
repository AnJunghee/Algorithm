function solution(a, b, n) {
    let total = n; // 남은 병
    let bottle = 0; // 갖다주는 병
    let service = 0; // 받은 콜라
    let cnt = 0; // 받은 콜라 카운트
    
    while(total >= a) {
        // 최대로 갖다줄 수 있는 병의 개수
        bottle = total - total % a;
        // 빈 병 갖다줌
        total -= bottle;
        // 서비스 받음
        service += Math.floor(bottle/a) * b;
        // 서비스 추가
        total += service;
        // 카운트
        cnt += service;
        // 서비스 초기화
        service = 0;
    }
    
    return cnt;
}