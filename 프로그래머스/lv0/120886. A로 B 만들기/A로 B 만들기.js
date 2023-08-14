function solution(before, after) {
    before = [...before].sort();
    after = [...after].sort();
    
    return before.every((v, i) => v === after[i]) ? 1 : 0;
}