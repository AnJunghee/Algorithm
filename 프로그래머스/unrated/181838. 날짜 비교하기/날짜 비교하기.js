function solution(date1, date2) {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);
    
    return newDate1 < newDate2 ? 1 : 0;
}