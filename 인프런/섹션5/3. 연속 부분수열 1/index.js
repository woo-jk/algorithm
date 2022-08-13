function solution(m, arr) {
  let answer = 0;
  let p = 0;
  for (let i = 1; i <= arr.length; i++) {
    let sum = arr.slice(p, i).reduce((a, b) => a + b, 0);
    if (sum === m) {
      answer++;
    }
    if (sum > m) {
      i--;
      p++;
    }
  }
  return answer;
}

// 답안
function solution(m, arr){
  let answer=0, lt=0, sum=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      if(sum===m) answer++;
      while(sum>=m){
          sum-=arr[lt++];
          if(sum===m) answer++;       
      }
  }        
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
