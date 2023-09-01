function solution(t, p) {
    return [...t].map((_, i) => t.substr(i, p.length)).filter((v) => v.length === p.length && +v <= +p).length;
}