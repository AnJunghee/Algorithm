function solution(keyinput, board) {
    let horizontal = 0, vertical = 0;
    const max = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
    for(const el of keyinput) {
        // 가로가 max보다 커지면 중단
        if(Math.abs(horizontal) > max[0]) break;

        if(el === "left") {
            if (horizontal > -max[0]) horizontal--;
        } else if(el === "right") {
            if (horizontal < max[0]) horizontal++;
        }
        
        // 세로가 max보다 커지면 중단
        if(Math.abs(vertical) > max[1]) break;

        if(el === "up") {
            if(vertical < max[1]) vertical++; 
        } else if(el === "down") {
            if(vertical > -max[1]) vertical--;
        }
    }
    
    return [horizontal, vertical];
}