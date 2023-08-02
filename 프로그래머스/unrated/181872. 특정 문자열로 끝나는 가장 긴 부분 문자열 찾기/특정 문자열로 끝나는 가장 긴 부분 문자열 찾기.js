function solution(myString, pat) {
    const strIdx = myString.lastIndexOf(pat);
    return myString.slice(0, strIdx + pat.length);
}