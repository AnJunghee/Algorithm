function solution(myString) {
    let arr = myString.split('');
    return arr.map((v) => v === 'a' || v === 'A' ? v.toUpperCase() : v.toLowerCase()).join('')
}