function solution(m, arr) {
  let answer = 0;
  let lp = 0;
  let rp = 1;
  while (rp <= arr.length) {
    let sum = arr.slice(lp, rp).reduce((a, b) => a + b);
    if (sum <= m) {
      answer++;
    }
    if (lp === rp - 1) {
      rp++;
      lp = 0;
      continue;
    }
    lp++;
  }
  return answer;
}

function solution(m, arr){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      while(sum>m){
          sum-=arr[lt++];
      }
      answer+=(rt-lt+1);
  }               
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
