// 구현못함
function solution(arr) {
  let answer = "NO";
  let sumArr = [];
  function DFS(L, sum) {
    if (L === arr.length) {
      sumArr.push(sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// 답안
function solution(arr){
  let answer="NO", flag=0;
  let total=arr.reduce((a, b)=>a+b, 0);
  let n=arr.length;
  function DFS(L, sum){
      // flag가 1이면 더 이상 트리 생성 x
      if(flag) return;
      if(L===n){
          // 서로소가 맞는지 확인
          if((total-sum)===sum){
              answer="YES";
              flag=1;
          }
      }
      else{
          DFS(L+1, sum+arr[L]);
          DFS(L+1, sum);
      }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
