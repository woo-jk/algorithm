// 답안보고 베낌
function solution(n) {
  let answer = [];
  let templet = Array.from({ length: n + 1 }, () => false);

  function DFS(L) {
    if (L > n) {
      let str = "";
      for (let i = 0; i < templet.length; i++) {
        if (templet[i]) {
          str += i + 1;
        }
      }
      answer.push(str);
    } else {
      templet[L - 1] = true;
      DFS(L + 1);
      templet[L - 1] = false;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}


// 답안
function solution(n){
  let answer=[];
  let ch=Array.from({length:n+1}, ()=>0);
  function DFS(L){
      if(L===n+1){
          let tmp="";
          for(let i=1; i<=n; i++){
              if(ch[i]===1) tmp+=(i+" ");
          }
          if(tmp.length>0) answer.push(tmp.trim());
      }
      else{
          ch[L]=1;
          DFS(L+1);
          ch[L]=0;
          DFS(L+1);
      }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
