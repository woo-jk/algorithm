function gcd(a, b) {
    if(b === 0) return a;
    return gcd(b, a%b);
}
function solution(w, h) {
    let cutting = w + h - gcd(Math.max(w, h), Math.min(w, h));
    return w*h - cutting;
}