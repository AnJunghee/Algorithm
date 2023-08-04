function solution(order) {
    return order.reduce((acc, curr) => {
        if(curr.includes("americano") || curr.includes("anything")) acc += 4500;
        else if(curr.includes("cafelatte")) acc += 5000;
        return acc;
    }, 0);
}