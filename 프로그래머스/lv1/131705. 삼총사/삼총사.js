function solution(number) {
    let answer = 0;
    for(let x = 0; x < number.length; x++) {
        for(let y = x+1; y <= number.length; y++) {
            for(let z = y+1; z <= number.length; z++) {
                let sum = number[x] + number[y] + number[z];
                if (sum === 0) answer++;
                sum = 0;
            }
        }
    }
    return answer;
}