function solution(n) {
    let three = "";
    let answer = 0;
    while(n > 0) {
        three += n%3;
        n = Math.floor(n/3);
    }
    for(let i=0; i<three.length; i++) {
        answer += three[i] * 3 ** (three.length - i -1);
    }
    return answer;
}