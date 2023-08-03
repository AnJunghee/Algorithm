function solution(arr) {
    let num = 0;
    let len = arr.length;
    
    while(Math.pow(2, num) < arr.length) num++;
    
    console.log((Math.pow(2, num) - arr.length)); // 출력 : 2

    for(let i = 0; i < (Math.pow(2, num) - len); i++) {
        arr.push(0);
    }
    
    return arr;
}