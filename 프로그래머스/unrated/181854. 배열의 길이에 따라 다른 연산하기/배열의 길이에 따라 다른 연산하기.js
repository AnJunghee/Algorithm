function solution(arr, n) {
    const len = arr.length;
    const startIdx = len % 2 === 0 ? 1 : 0;

    for (let i = startIdx; i < len; i += 2) {
        arr[i] += n;
    }

    return arr;
}