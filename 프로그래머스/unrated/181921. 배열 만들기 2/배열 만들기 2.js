function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++){
       if(!String(i).match(/[^50]+/)) answer.push(i);
    }
    return answer.length ? answer : [-1];
}