function solution(n) {
    var answer = 0;
    for(var i=0; i<n; i++){
        if(n%7==0){
            answer=n/7;   //1~7명은 1판
        }else{
            answer=n/7+1;
        }
        return parseInt(answer);
    }
}
// return Math.ceil(n / 7)