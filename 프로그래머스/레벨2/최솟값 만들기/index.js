function solution(A,B){
    let answer = 0;
    let n = A.length;
    A.sort((a, b) => a-b);
    B.sort((a, b) => b-a);
    for(let i=0; i<n; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}