function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++) {
        let code = s.charCodeAt(i);
        if(code === 32) {
            answer += " ";
            continue;
        }
        if(code >= 65 && code <= 90) {
            if(code + n > 90) {
                code = code - 26 + n;
            } else {
                code += n;
            }
        } else {
            if(code + n > 122) {
                code = code - 26 + n;
            } else {
                code += n;
            }
        }
        answer += String.fromCharCode(code);
    }
    return answer;
}