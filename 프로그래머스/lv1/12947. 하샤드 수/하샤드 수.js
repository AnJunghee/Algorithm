function solution(x) {
    const sum = [...x.toString()].reduce((acc, curr) => acc + Number(curr), 0);
    return x % sum === 0;
}