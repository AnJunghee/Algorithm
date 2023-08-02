function solution(arr) {
    let answer = [];
    
    arr.forEach((v, i) => {
        for(let j = 0; j < v; j++){
            answer.push(v);
        }
    });
    
    return answer
}