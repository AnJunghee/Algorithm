function solution(n, arr1, arr2) {
    const newArr1 = arr1.map((v) => v.toString(2));
    const newArr2 = arr2.map((v) => v.toString(2));

    newArr1.forEach((v, i) => {
        for(let idx = v.length; idx < n; idx++) {
            newArr1[i] = '0' + newArr1[i];
        }
    });
    
    newArr2.forEach((v, i) => {
        for(let idx = v.length; idx < n; idx++) {
            newArr2[i] = '0' + newArr2[i];
        }
    });
    
    const newArr = newArr1.map((v, i) => {
        return [...v].map((el, j) => {
            return Number(el) + Number(newArr2[i][j]);
        }).join('');
    });
    
    return newArr.map((v) => [...v].map((el) => el === '0' ?  ' ' : '#').join(''));
}