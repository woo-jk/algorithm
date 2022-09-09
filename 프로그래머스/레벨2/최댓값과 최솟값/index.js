function solution(s) {
    s = s.split(" ").map((v)=>Number(v));
    return Math.min(...s) + " " + Math.max(...s);
}