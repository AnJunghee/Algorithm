function solution(myString) {
    
    return [...myString].map((v) => v.charCodeAt() < "l".charCodeAt() ? v = "l" : v ).join('');
}