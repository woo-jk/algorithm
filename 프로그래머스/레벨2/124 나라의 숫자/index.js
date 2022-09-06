function solution(n) {
    var answer = '';
    while(n !== 0) {
        n--;
        answer += (n%3).toString();
        n = Math.floor(n/3);
    }
    answer = answer.split("").reverse().map((v)=> (v === "2" ? "4" : (Number(v)+1)+"")).join("");
    return answer;
}