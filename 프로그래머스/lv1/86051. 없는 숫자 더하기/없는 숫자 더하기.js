function solution(numbers) {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.forEach((v) => num.splice(num.indexOf(v), 1));
    return num.reduce((acc, curr) => acc + curr);
}