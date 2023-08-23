function solution(rsp) {
    let answer = '';
    [...rsp].forEach((_, i) => {
        if(rsp[i]==2){ answer += "0"; }
        else if(rsp[i]==0){ answer += "5"; }
        else if(rsp[i]==5){ answer += "2"; }
    });
    return answer;
}