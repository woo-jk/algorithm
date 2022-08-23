function solution(n) {
  let answer;

  function DFS(L) {
    if (L === n) {
      return L;
    } else {
      return (answer = L * DFS(L + 1));
    }
  }
  DFS(1);
  return answer;
}

// 답안
function solution(n){         
  let answer;
  function DFS(n){
      if(n===1) return 1;
      else return n*DFS(n-1); 
  }
  answer=DFS(n);
  return answer;
}

console.log(solution(5));
