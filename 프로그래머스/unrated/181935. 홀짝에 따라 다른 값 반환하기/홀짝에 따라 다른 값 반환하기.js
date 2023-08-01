function solution(n) {
    let odd = 0;
    let even = 0;
    for(let i=0; i<=n; i++){
        i%2===0 ? even += Math.pow(i, 2) : odd += i;
    }
    return n%2 ? odd : even;
}