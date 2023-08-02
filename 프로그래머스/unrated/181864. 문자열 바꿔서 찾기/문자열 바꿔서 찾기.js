function solution(myString, pat) {
    return [...myString].map((v) => v === "A" ? v = "B" : "A").join('').includes(pat) ? 1 : 0; 
}