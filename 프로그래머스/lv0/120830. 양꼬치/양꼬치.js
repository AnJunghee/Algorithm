function solution(n, k) {
    var price1 = 12000 * n;
    var price2 = 2000 * k;
    var service = 0;
    for(var i=1; i<=n; i++){
        if(i%10==0){
            service+=1;
        }
    }
    return price1 + price2 - (service*2000);
}