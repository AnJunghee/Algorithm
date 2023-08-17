function solution(my_string) {
    var answer = new Array(52).fill(0);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    my_string.split("").map((n) => answer[alphabet.indexOf(n)] += 1)

    return answer;
}