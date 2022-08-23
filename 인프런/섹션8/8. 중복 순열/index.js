function solution(n, m) {
  let answer = [];
  let ch = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L >= m) {
      let temp = "";
      for (let i = 0; i < m; i++) {
        temp += ch[i] + 1 + " ";
      }
      answer.push(temp.trim());
      console.log(temp.trim());
    } else {
      for (let i = 0; i < n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer.length;
}

// 답안
function solution(n, m){
  let answer=[];
  let tmp=Array.from({length:m}, ()=>0);
  function DFS(L){
      if(L===m){
          answer.push(tmp.slice());
      }
      else{
          for(let i=1; i<=n; i++){
              tmp[L]=i;
              DFS(L+1);
          }
      }   
  }
  
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
