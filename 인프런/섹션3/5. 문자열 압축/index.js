function solution(s) {
  let answer = "";
  let count = 1;
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (temp !== s[i]) {
      if (count !== 1) {
        answer += count;
      }
      temp = s[i];
      answer += s[i];
      count = 1;
    } else {
      count++;
    }
  }
  return answer;
}

//답안
function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
