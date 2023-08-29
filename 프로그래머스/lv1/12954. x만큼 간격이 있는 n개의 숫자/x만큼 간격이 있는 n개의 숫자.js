function solution(x, n) {
    return Array.from({ length: n }, (v, i) => v = x * (i+1));
}