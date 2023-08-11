function solution(my_string) {
    let mySet = new Set([...my_string]);
    return Array.from(mySet).join('');
}