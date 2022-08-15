function solution(s) {
  let answer = 0;
  let stack = [];
  let prev = "";
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (prev === "(" && x === ")") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
    prev = x;
  }
  return answer;
}

// 답안
function solution(s){
  let answer=0;
  let stack=[];
  for(let i=0; i<s.length; i++){
      if(s[i]==='(') stack.push('(');
      else{
          stack.pop(); 
          if(s[i-1]==='(') answer+=stack.length;
          else answer++;
          //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
      }
  }                          
  return answer;
}

let str = "(((()(()()))(())()))(()())";
console.log(solution(str));
