function solution(s) {
    let answer = '';
    answer = s.replaceAll(/zero/g, 0);
    answer = answer.replaceAll(/one/g, 1);
    answer = answer.replaceAll(/two/g, 2);
    answer = answer.replaceAll(/three/g, 3);
    answer = answer.replaceAll(/four/g, 4);
    answer = answer.replaceAll(/five/g, 5);
    answer = answer.replaceAll(/six/g, 6);
    answer = answer.replaceAll(/seven/g, 7);
    answer = answer.replaceAll(/eight/g, 8);
    answer = answer.replaceAll(/nine/g, 9);
    
    return Number(answer);
}