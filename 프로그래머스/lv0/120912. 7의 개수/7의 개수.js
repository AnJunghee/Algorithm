function solution(array) {
    const arr = array.join('').match(/7/g);
    return arr != null ? arr.length : 0;
}