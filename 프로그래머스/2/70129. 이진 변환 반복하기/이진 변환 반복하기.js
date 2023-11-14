function solution(s) {
    let temp = s;
    let cnt = 1;
    let zero = 0;
    
    while(true) {
        let len = temp.replaceAll(0, '').length;
        zero += temp.length - len;
        temp = len.toString(2);
        
        if(temp === '1') break;
        
        cnt++;
    }
    
    return [cnt, zero]
}