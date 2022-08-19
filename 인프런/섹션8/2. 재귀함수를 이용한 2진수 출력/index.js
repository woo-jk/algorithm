function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) {
      return;
    }
    answer += L % 2;
    DFS(parseInt(L / 2));
  }
  DFS(n);
  console.log(answer.split("").reverse().join(""));
}

solution(11);

// 답안
function solution(n){
  let answer="";
  function DFS(n){
       if(n===0) return;
       else{
           DFS(parseInt(n/2));
           answer+=String(n%2);
       }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
