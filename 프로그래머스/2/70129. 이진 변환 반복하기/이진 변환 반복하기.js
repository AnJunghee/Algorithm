function solution(s) {
    let temp = s;
    let [cnt, zero] = [0, 0];
    
    while(temp !== '1') {
        let len = temp.replaceAll(0, '').length;
        zero += temp.length - len;
        temp = len.toString(2);
        cnt++;
    }
    
    return [cnt, zero]
}