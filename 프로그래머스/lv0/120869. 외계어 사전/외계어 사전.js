function solution(spell, dic) {
    const arr = [];
    
    for(let i = 0; i < dic.length; i++) {
        const subArr = [];
        for(let j = 0; j < spell.length; j++) {
            subArr.push(dic[i].includes(spell[j]));
        }
        arr.push(subArr);
    }

    return arr.filter((v) => !v.includes(false)).length > 0 ? 1 : 2;
}