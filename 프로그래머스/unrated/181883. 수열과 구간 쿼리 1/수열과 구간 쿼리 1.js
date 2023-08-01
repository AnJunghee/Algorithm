function solution(arr, queries) {
    queries.forEach((query) => {
        const [s, e] = query;
        arr.forEach((_, i) => {
            if(s <= i && i <= e) {
                arr[i] += 1;
            }
        });
    });
    return arr;
}
