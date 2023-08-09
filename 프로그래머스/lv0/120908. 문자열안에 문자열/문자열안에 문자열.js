function solution(str1, str2) {
    var str = str1.indexOf(str2);
    if(str>=0){ return 1; } else { return 2; }
    // return str1.includes(str2) ? 1 : 2;
}