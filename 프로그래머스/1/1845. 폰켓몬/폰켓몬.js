function solution(nums) {
    const max = Math.floor(nums.length / 2); // 가져갈 수 있는 폰켓몬 최댓값
    const cnt = [...new Set(nums)].length; // 폰켓몬의 종류
    
    return max < cnt ? max : cnt;
}