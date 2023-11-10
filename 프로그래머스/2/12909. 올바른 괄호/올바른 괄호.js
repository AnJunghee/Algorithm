function solution(s){
    const temp = s.split('');
    const stack = [];
    
    if(temp[0] === ')') return false;
    
    for(let i = 0; i < s.length; i++) {
        temp[i] === '(' ? stack.push('(') : stack.pop();
    }
    
    return !stack.length;
}