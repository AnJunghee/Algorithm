function solution(numbers) {
    const set = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    numbers.forEach((v) => set.delete(v));
    return [...set].reduce((acc, curr) => acc + curr);
}