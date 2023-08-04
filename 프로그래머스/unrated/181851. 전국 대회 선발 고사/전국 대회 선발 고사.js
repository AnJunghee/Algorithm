function solution(rank, attendance) {
    let a = 0, b = 0, c = 0;
    const newRank = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b).slice(0, 3);
    
    rank.forEach((v, i) => {
        if (v === newRank[0]) a = i;
        if (v === newRank[1]) b = i;
        if (v === newRank[2]) c = i;
    });
    
    return 10000 * a + 100 * b + c;
}