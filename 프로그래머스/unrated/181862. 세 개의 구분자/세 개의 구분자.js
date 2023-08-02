function solution(myStr) {
    let arr = myStr.split(/[abc]/).filter((v) => v);
    return arr.length ? arr : ["EMPTY"]
}