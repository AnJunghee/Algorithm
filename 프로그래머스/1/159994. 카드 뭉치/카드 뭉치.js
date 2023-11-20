function solution(cards1, cards2, goal) {
    return goal.map((v) => {
        // 카드 배열 첫번째 요소 각각 비교
        if(cards1[0] === v) {
            cards1.shift();
            return;
        } else if(cards2[0] === v) {
            cards2.shift();
            return;
        } else {
            return "No";
        } 
    }).includes("No") ? "No" : "Yes";
}