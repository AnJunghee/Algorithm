function solution(strings, n) {
    const sortedArr = strings.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
    return sortedArr.sort((a, b) => {
        if(a[n].charCodeAt() - b[n].charCodeAt() === 0) {
            return a.localeCompare(b);
        };
    });
}