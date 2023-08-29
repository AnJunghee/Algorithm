function solution(s){
    return s.split(/y/gi).length === s.split(/p/gi).length;
}