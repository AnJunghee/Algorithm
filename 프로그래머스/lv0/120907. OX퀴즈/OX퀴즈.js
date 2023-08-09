function solution(quiz) {
    return quiz.map((v) => {
        const [x, op, y, _, z] = v.split(' ');
        
        if(op === "+") {
            return +x + +y === +z ? "O" : "X"
        } else {
            return +x - +y === +z ? "O" : "X"
        }
    });
}