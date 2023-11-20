function solution(a, b) {
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const myDate = new Date();
    
    myDate.setYear(2016);
    myDate.setMonth(a-1);
    myDate.setDate(b);
    
    return day[myDate.getDay()];
}