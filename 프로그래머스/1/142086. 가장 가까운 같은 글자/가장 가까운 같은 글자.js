function solution(s) {
    const answer = new Array(s.length).fill(-1);
    
    // 뒤에서부터 비교
    for(let i = s.length-1; i >= 0; i--) {
        // 자기랑 같은 글자가 나올때까지 반복
        for(let j = i-1; j >= 0; j--) {
            // 같은 글자가 나오면 push
            if(s[i] === s[j]) {
                answer[i] = i - j;
                // 가장 가까운 글자이므로 반복 중지
                break;
            };
        }
    }
    
    return answer;
}