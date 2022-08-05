function solution(s) {
  let answer = "";
  let index;
  if (s.length % 2 === 1) {
    index = Math.floor(s.length / 2);
    answer = s.charAt(index);
  } else {
    index = Math.floor(s.length / 2);
    answer = s.charAt(index - 1) + s.charAt(index);
  }
  return answer;
}

let str = "gosd";
console.log(solution(str));
