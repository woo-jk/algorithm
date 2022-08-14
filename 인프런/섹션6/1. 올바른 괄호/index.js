function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push("temp");
    } else {
      if ("temp" !== stack.pop()) {
        answer = "NO";
      }
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  return answer;
}

// 답안
function solution(s){
  let answer="YES";
  stack=[];
  for(let x of s){
      if(x==='(') stack.push(x);
      else{
          if(stack.length===0) return "NO";
          stack.pop(); 
      }
  }
  if(stack.length>0) return "NO";  
  return answer;
}

let a = "(()())";
console.log(solution(a));
