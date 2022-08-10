function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      answer = "NO";
    }
  }
  return answer;
}
//답안
function solution(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
