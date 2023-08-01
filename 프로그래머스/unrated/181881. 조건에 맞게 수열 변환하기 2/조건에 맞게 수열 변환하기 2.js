function solution(arr) {
    let idx = 0;
    while(true) {
        const changeArray = arr.map((v) => {
            if(v >= 50 && !(v % 2)) return v / 2;
            if(v <= 50 && v % 2) return v * 2 + 1;
            return v;
        });
        
        const nextArray = arr.every((v, i) => v === changeArray[i])
        if(nextArray) break;
        
        idx += 1;
        
        arr = changeArray;
    }
    return idx;
}