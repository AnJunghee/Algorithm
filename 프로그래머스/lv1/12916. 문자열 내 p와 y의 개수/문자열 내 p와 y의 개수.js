function solution(s){
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
    
    if(p === null) p = "";
    if(y === null) y = "";
    if(p === null && y === null) return true;
    
    return p.length === y.length;
}