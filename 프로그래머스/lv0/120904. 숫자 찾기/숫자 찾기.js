function solution(num, k) {
    const str = num.toString().indexOf(k) + 1;
    return str ? str : -1;
}