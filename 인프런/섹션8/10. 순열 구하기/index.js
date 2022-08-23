// 2중 for문이 있어서 아쉽다.
function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === m) {
      let temp = "";
      for (let i = 1; i <= m; i++) {
        for (let j = 0; j < n; j++) {
          if (ch[j] === i) {
            temp += arr[j] + " ";
          }
        }
      }
      answer.push(temp.trim());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = L + 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

// 답안
function solution(m, arr){         
  let answer=[];
  n=arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let tmp=Array.from({length:m}, ()=>0);;
  function DFS(L){
      if(L===m){
          answer.push(tmp.slice()); 
      }
      else{
          for(let i=0; i<n; i++){
              if(ch[i]===0){
                  ch[i]=1;
                  tmp[L]=arr[i];
                  DFS(L+1);
                  ch[i]=0;
              }
          }
      }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
