function solution(arr, query) {
    query.forEach((v, i) => {
        i % 2 === 0 ? arr.splice(query[i] + 1) : arr.splice(0, query[i])
    });
    return arr;
}