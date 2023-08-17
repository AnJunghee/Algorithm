function solution(my_string, queries) {
    let arr = my_string.split('');
    queries.forEach((query) => {
        let [s, e] = query;
        let reverse = arr.slice(s, e + 1).reverse();

        arr.splice(s, reverse.length, ...reverse);
    });
    return arr.join('');
}