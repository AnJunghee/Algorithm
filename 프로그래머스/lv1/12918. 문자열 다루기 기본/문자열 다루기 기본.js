function solution(s) {
    return (s.length === 4 || s.length === 6) && s.replaceAll(/[0-9]/g, '').length === 0;
}