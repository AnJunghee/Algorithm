function solution(my_string, n) {
    const arr = my_string.split("");
    return arr.map((v) => v.repeat(n)).join("");
}