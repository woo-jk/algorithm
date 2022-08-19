function solution(n) {
  function DFS(L) {
    if (L === 1) {
      console.log(1);
      return 1;
    } else {
      console.log(L);
      return DFS(L - 1);
    }
  }
  DFS(n);
}

// 답안
function solution(n){
  function DFS(L){
      if(L==0) return;
      else{
          DFS(L-1);
          console.log(L);   
      }
  }
  DFS(n);
}

solution(3);
