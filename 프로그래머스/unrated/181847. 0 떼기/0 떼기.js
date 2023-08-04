function solution(n_str) {
    let n = [...n_str].findIndex((v) => v !== "0");
    
    return n_str.slice(n);
}