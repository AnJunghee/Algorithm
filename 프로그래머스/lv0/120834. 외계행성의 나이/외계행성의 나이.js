function solution(age) {
    const arr = age.toString().split("");
    const alphabet = "abcdefghij";
    return arr.map((v) => alphabet[v]).join("");
}