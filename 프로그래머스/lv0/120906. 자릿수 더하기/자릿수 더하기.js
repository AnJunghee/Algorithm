function solution(n) {
    const arr = n.toString().split('');
    return arr.reduce((acc, curr) => +acc + +curr, 0);
}