function solution(n) {
    var answer = 0;
    for(var i=1; i<=n; i++){
        if((i*6)%n==0){
            return i;
        }
    }
}