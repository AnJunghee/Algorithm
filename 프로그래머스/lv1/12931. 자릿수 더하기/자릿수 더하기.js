function solution(n) {
    let arr = n.toString().split('');
    return arr.reduce((acc, curr) => acc + Number(curr), 0);
}