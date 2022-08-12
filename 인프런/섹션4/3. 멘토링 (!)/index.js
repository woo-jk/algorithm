// 내가 쓴 답
// 짝의 수가 아닌 멘토 멘티 배열을 반환하도록 변경함(힘들었음)
function solution(test) {
  let answer = [];
  let studentNum = test[0].length;
  let M = test.length;

  for (let i = 1; i <= studentNum; i++) {
    let mentee = [...test[0]].sort((a, b) => a - b);
    mentee.splice(mentee.indexOf(i), 1);
    for (let j = 0; j < M; j++) {
      for (let k = 1; k <= studentNum; k++) {
        if (test[j].indexOf(i) > test[j].indexOf(k) && mentee.includes(k)) {
          mentee.splice(mentee.indexOf(k), 1);
        }
      }
    }
    while (mentee.length) {
      // console.log(mentee.shift());
      answer.push([i, mentee.shift()]);
    }
  }
  return answer;
}
// 답안
// 답안은 짝의 수만 반환
function solution(test){
  let answer=0;
  m=test.length;
  n=test[0].length;
  for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
          let cnt=0;
          for(let k=0; k<m; k++){
              let pi=pj=0;
              for(let s=0; s<n; s++){
                  if(test[k][s]===i) pi=s;
                  if(test[k][s]===j) pj=s;
              }
              if(pi<pj) cnt++;
          }
          if(cnt===m) answer++;
      }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
];
console.log(solution(arr));
