function solution(s) {
    const arr = s.split(" ");
    
    return arr.map((v) => [...v].map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase()).join("")).join(" ");
}