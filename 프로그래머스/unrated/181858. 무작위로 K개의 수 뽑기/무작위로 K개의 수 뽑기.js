function solution(arr, k) {
    const uniqueArray = arr.filter((v, i, self) => self.indexOf(v) === i);
    
    for(let i = 0; i < k; i++) {
        uniqueArray.length < k ? uniqueArray.push(-1) : uniqueArray.splice(k);
    }
    
    return uniqueArray;
}