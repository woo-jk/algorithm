function solution(s){
    let stack = [];
    s.split("").forEach((v)=>(v==="(" ? stack.push(v) : stack.pop()));
    return !stack.length && s[0] !== ")";
}