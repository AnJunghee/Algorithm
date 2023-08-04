function solution(a, b) {
    const calc = {
        case1 : (a ** 2) + (b ** 2),
        case2 : 2 * (a + b),
        case3 : Math.abs(a - b)
    };

    return (a % 2) && (b % 2) ? calc.case1 : (a % 2) || (b % 2) ? calc.case2 : calc.case3; 
}