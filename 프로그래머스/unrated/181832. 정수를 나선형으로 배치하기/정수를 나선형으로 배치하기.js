function solution(n) {
    let arr = Array.from({ length : n }, () => Array(n).fill(0)) // n x n 이차원 배열 생성
    let row = 0, col = 0; // 행, 열 0부터 시작
    let number = 1; // 삽입할 숫자
    
    for(let i = n; i > 0; i -= 2) {
        //오른쪽으로
        for(let j = 0; j < i; j++) {
            arr[row][col] = number;
            col++;
            number++;
        }
        col--;
        row++;

        //아래로
        for(let j = 0; j < i - 1; j++) {
            arr[row][col] = number;
            row++;
            number++;
        }
        col--;
        row--;

        //왼쪽으로
        for(let j = 0; j < i - 1; j++) {
            arr[row][col] = number;
            col--;
            number++;
        }
        col++;
        row--;

        //위로
        for(let j = 0; j < i - 2; j++) {
            arr[row][col] = number;
            row--;
            number++;
        }
        col++;
        row++;
    }
    
    return arr;
}