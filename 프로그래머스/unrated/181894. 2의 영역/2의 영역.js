function solution(arr) {
    let idx = [];
    arr.forEach((v, i) => {
        v === 2 && idx.push(i);
    });
    return !idx.length ? [-1] : arr.slice(idx[0], idx[idx.length-1] + 1);
}