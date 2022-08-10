function solution(s, t) {
  let answer = [];
  let distance;
  for (let i = 0; i < s.length; i++) {
    distance = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === t && distance > Math.abs(j - i)) {
        distance = Math.abs(j - i);
      }
    }
    answer.push(distance);
  }
  return answer;
}
//답안
function solution(s, t){
  let answer=[];
  let p=1000;
  for(let x of s){
      if(x===t){
          p=0;
          answer.push(p);
      }
      else{
          p++;
          answer.push(p);
      }
  }
  p=1000;
  for(let i=s.length-1; i>=0; i--){
      if(s[i]===t) p=0;
      else{
          p++;
          answer[i]=Math.min(answer[i], p);
      }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
