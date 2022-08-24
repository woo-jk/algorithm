function solution(n, k, arr, m) {
  let answer = 0;
  let result = [];
  let temp = Array.from({ length: k }, () => 0);
  function DFS(L, s) {
    if (L === k) {
      result.push(temp.slice());
    } else {
      for (let i = s; i < n; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  for (let i = 0; i < result.length; i++) {
    let sum = result[i].reduce((a, b) => a + b, 0);
    if (sum % m === 0) {
      answer++;
    }
  }
  return answer;
}

// 답안
function solution(n, k, arr, m){         
  let answer=0;
  function DFS(L, s, sum){
     if(L===k){
          if(sum%m===0) answer++;
     }
     else{
         for(let i=s; i<n; i++){
             DFS(L+1, i+1, sum+arr[i]);
         }
     }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
