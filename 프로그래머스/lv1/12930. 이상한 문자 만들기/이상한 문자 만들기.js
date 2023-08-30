function solution(s) {    
    return s.split(" ").map((v) => [...v].map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase()).join("")).join(" ");
}