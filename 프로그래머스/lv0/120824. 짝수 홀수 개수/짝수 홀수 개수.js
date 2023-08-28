function solution(num_list) {
    let even = 0, odd = 0;
    num_list.forEach((v) => v % 2 === 0 ? even++ : odd++);
    return [even, odd];
}