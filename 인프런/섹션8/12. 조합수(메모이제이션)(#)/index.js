// factorial까지 내가 푼거
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function solution(n, r) {
  let answer;

  function DFS(n, r) {
    if (r === 0) {
      return 1;
    } else {
      return (
        factorial(n) / (factorial(n - r) * factorial(r)) + DFS(n - 1, r - 1)
      );
    }
  }
  answer = DFS(n - 1, r);
  return answer;
}

// 답안
function solution(n, r){         
  let answer=[];
  let dy= Array.from(Array(35), () => Array(35).fill(0));
  
  function DFS(n, r){
      if(dy[n][r]>0) return dy[n][r];
      if(n===r || r===0) return 1;
      else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
  }
  answer=DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
