function solution(my_string, m, c) {
    let answer = '';
    for(let i = 0; i < Math.ceil(my_string.length) / m; i++){
        answer += my_string.charAt(c + (m * i) - 1);    
    }
    return answer;
}