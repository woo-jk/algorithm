function solution(s) {
    var answer = '';
    let count = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === " ") {
            answer += " ";
            count = 0;
        } else {
            answer += count%2 ? s[i].toLowerCase() : s[i].toUpperCase();
            count++;
        }
    }

    return answer;
}