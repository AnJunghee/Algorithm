function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++){
        answer.push(numbers[i]*2);
    }
    return answer;
    //return numbers.map(i=>i*2);
    //return numbers.reduce((a, b) => [...a, b * 2], []);
}