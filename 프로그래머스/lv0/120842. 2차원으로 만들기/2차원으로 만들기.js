function solution(num_list, n) {
    const list = [...num_list];
    const arr = [];
    
    for(let i = 0; i < num_list.length; i += n) {
        arr.push(list.splice(0, n));
    }
    
    return arr;
}