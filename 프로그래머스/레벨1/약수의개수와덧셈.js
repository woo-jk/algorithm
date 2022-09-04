function solution(left, right) {
    var answer = 0;
    for(let num=left; num<=right; num++) {
        let count = 0;
        for(let i=1; i<=num; i++) {
            if(num%i === 0) count++;
        }
        answer += count%2===0 ? num : num*(-1);
    }
    return answer;
}