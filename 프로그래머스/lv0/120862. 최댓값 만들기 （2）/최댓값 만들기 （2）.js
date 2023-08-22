function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const op1 = numbers[0] * numbers[1];
    const op2 = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    return op1 > op2 ? op1 : op2;
}