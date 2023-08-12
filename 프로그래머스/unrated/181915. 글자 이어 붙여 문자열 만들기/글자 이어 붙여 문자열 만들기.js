function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(n => answer += my_string[n]);
    return answer;
}