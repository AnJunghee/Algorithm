function solution(phone_number) {
    const num = phone_number.length - 4;
    return new Array(num).fill("*").join('') + phone_number.slice(num);
}