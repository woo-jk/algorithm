function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length - k; i++) {
    sum = arr.slice(i, i + k).reduce((a, b) => a + b);
    console.log(sum);
    answer = Math.max(answer, sum);
  }
  return answer;
}

// 답안
function solution(k, arr){
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;
  for(let i=k; i<arr.length; i++){
      sum+=(arr[i]-arr[i-k]);
      answer=Math.max(answer, sum);
  }                    
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
