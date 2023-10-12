function solution(k, score) {
    const arr = [];
    const answer = [];
    
    for(let i = 0; i < score.length; i++) {
        arr.push(score[i]);
        let sortedArray = arr.sort((a, b) => b - a).slice(0, k);
        answer.push(sortedArray[sortedArray.length-1]);
    }
    
    return answer;
}