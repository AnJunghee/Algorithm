function solution(phone_number) {
    const num = phone_number.length - 4;
    return "*".repeat(num) + phone_number.slice(num);
}