function solution(num_list) {
    let count = 0;
    num_list.forEach((v) => {
        while(v !== 1) {
            v = v % 2 ? (v - 1) / 2 : v / 2;
            count++;
        }
    });
    return count;
}