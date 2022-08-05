function solution(s) {
  let answer="";
  for(let i of s){
    answer += i.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
