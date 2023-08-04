function solution(picture, k) {
    let start = 0, end = k;
    let answer = new Array(picture.length * k);
    const arr = picture.map((v) => [...v].map((val) => val.repeat(k)).join(''));
    
    for(let i = 0; i < arr.length; i++) {
        answer.fill(arr[i], start, end);
        start += k;
        end += k;
    }
    
    return answer;
}