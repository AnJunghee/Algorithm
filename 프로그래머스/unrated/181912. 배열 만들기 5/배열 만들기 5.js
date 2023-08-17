function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((str) => {
        answer.push(Number(str.substring(s, s + l)));
    });
    return answer.filter((num) => num > k);
}