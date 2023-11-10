function solution(s) {
    const str = s.toLowerCase().split(' ');
    
    return str.map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
}