function solution(s) {
  let answer = "";
  for (let i of s) {
    if (i.length > answer.length) {
      answer = i;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
