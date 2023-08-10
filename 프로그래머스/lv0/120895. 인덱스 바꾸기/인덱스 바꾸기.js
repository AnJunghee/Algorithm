function solution(my_string, num1, num2) {
    let arr = [...my_string];
    const [a, b] = [arr[num1], arr[num2]]; 
    
    arr[num1] = b;
    arr[num2] = a;
                    
    return arr.join('');
}