function solution(name, yearning, photo) {
    const point = new Map();
    
    // 각 이름과 점수 키-값으로 저장
    for(let i = 0; i < name.length; i++) {
        point.set(name[i], yearning[i]);
    }
    
    // photo 배열 순회하며 계산
    const arr = photo.map((v) => {
        return v.map((v) => {
            return point.get(v) == null ? 0 : point.get(v); 
        });
    });
    
    return arr.map((v) => v.reduce((acc, curr) => acc += curr));
}