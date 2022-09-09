function solution(s) {
    let first = true;
    s = s.split("");
    for(let i=0; i<s.length; i++) {
        if(s[i] === " ") {
            first = true;
        } else if(first === true) {
            s[i] = s[i].toUpperCase();
            first = false;
        } else if(first === false) {
            s[i] = s[i].toLowerCase();
        }
    }
    return s.join("");
}