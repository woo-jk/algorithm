function solution(s) {
  let answer = "";
  let stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    }
    if (!stack.length) {
      answer += x;
    }
    if (x === ")") {
      stack.pop();
    }
  }
  return answer;
}
// 답안
function solution(s){  
  let answer;
  let stack=[];
  for(let x of s){
      if(x===')'){
          while(stack.pop()!=='(');
      }
      else stack.push(x);
  }
  answer=stack.join('');
  return answer;
}
let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(a));
