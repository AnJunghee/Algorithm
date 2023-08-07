function solution(arr) {  
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            answer.push(arr[i][j] === arr[j][i]);
        }
    }
    
    return answer.every(Boolean) ? 1 : 0;
}