function solution(array, n) {
    array.push(n);  // n을 배열에 삽입
    array.sort((a, b) => a - b); // 오름차순 정렬
    
    const idx = array.indexOf(n); // n의 인덱스
    
    // 앞에 요소가 없을 경우
    if(array[idx-1] === undefined) return array[idx+1]
    // 뒤에 요소가 없을 경우
    else if(array[idx+1] === undefined) return array[idx-1]
    // 앞, 뒤 요소 둘 다 있을 경우
    else {
        const before = array[idx] - array[idx-1];
        const after = array[idx+1] - array[idx];
        
        // 더 가까운 요소 출력
        return before <= after ? array[idx-1] : array[idx+1];
    }
}