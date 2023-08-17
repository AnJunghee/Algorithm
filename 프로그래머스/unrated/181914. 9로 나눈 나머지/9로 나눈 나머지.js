function solution(number) {
    return [...number].reduce((acc, curr)=> Number(acc) + Number(curr)) % 9;
}