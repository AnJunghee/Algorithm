function solution(s, n) {
    const A = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const arr = [];
    
    [...s].forEach((v, i) => {
        if(v === " ") {
            arr.push(" ");
        } else {
            if(v.match(/[A-Z]/g)) {
                A[A.indexOf(v)+n] === undefined
                ? arr.push(A[(A.indexOf(v)+n)-26])
                : arr.push(A[A.indexOf(v)+n]);
            } else {
                a[a.indexOf(v)+n] === undefined
                ? arr.push(a[(a.indexOf(v)+n)-26])
                : arr.push(a[a.indexOf(v)+n]);
            }
        }
    });
    
    return arr.join("");
}