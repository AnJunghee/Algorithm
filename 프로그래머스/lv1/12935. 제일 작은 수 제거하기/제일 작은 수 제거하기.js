function solution(arr) {
    const filteredArray = arr.filter((v) => v !== Math.min(...arr));
    return filteredArray.length ? filteredArray : [-1];
}