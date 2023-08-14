function solution(array, n) {
    array.sort((a, b) => a - b);
    const arr = array.map((v) => Math.abs(v - n));
    const value = Math.min(...arr);
    const index = arr.indexOf(value);
    
    return array[index];
}