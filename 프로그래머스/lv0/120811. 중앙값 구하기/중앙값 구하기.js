function solution(array) {
    array.sort(function(a, b) {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
    });
    return array[parseInt(array.length/2)];
}