function solution(answers) {
    const count = [0, 0, 0];
    
    const num1 = [1, 2, 3, 4, 5];
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const idx = [0, 0, 0];
    
    answers.forEach((v) => {
        console.log(idx);
        if(idx[0] >= 5) idx[0] = 0;
        if(idx[1] >= 8) idx[1] = 0;
        if(idx[2] >= 10) idx[2] = 0;
        
        if(num1[idx[0]] === v) count[0]++;
        if(num2[idx[1]] === v) count[1]++;
        if(num3[idx[2]] === v) count[2]++;
        
        idx[0]++;
        idx[1]++;
        idx[2]++;
    });
    
    const maxCount = Math.max(...count);
    const num = [];

    for (let i = 0; i < count.length; i++) {
        if (count[i] === maxCount) {
            num.push(i + 1);
        }
    }
    
    return num;
}