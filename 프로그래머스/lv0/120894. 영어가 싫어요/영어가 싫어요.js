function solution(numbers) {
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i = 0; i < eng.length; i++) {
        numbers = numbers.replaceAll(eng[i], i);
    }
    
    return +numbers;
    
}