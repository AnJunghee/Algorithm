function solution(arr) {
    let stk = [];
    
    for(let i = 0; i < arr.length; i++) {
        let len = stk.length;
        
        if(len === 0) {
            stk.push(arr[i]);
        } else if(stk[len - 1] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
    }
    
    return stk.length ? stk : [-1];
}