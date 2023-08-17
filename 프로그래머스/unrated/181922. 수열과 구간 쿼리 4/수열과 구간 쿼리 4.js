function solution(arr, queries) {
    for (const [s, e, k] of queries){
        arr = arr.map((curr, i) => s <= i && i <= e && i % k === 0 ? curr + 1 : curr);
    }
    return arr;
}