function solution(arr1, arr2) {
    const arrayLength1 = arr1.length;
    const arrayLength2 = arr2.length;
    
    if (arrayLength1 === arrayLength2) {
        const sum1 = arr1.reduce((acc, curr) => acc + curr);
        const sum2 = arr2.reduce((acc, curr) => acc + curr);
        
        if (sum1 > sum2) return 1;
        else if (sum1 === sum2) return 0;
        else return -1;
        
      } else {
        if (arrayLength1 > arrayLength2) return 1;
        else if (arrayLength1 === arrayLength2) return 0;
        else return -1;
    }
}