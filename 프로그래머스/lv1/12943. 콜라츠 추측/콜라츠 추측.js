function solution(num) {
    let count = 1;
    
    if (num === 1) return 0;
    
    while(count <= 500) {
        num % 2 ? num = (num * 3) + 1 : num /= 2;
        if(num === 1) return count;
        count++;
    }
    return -1;
}