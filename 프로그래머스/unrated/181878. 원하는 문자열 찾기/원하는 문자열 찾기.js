function solution(myString, pat) {
    const str = myString.toUpperCase();
    const strPat = pat.toUpperCase()
    return str.includes(strPat) ? 1 : 0;
}