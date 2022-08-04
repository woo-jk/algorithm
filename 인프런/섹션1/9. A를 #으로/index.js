function solution(s) {
  let answer = "";
  answer = s.replaceAll("A", "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
