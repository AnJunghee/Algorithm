function solution(my_string) {
    var answer = '';
    var low = my_string.toLowerCase().split("");
    return low.sort().join("");
}