function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === "+") {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let value = op1 + op2;
      stack.push(value);
    } else if (x === "-") {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let value = op1 - op2;
      stack.push(value);
    } else if (x === "*") {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let value = op1 * op2;
      stack.push(value);
    } else if (x === "/") {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let value = op1 / op2;
      stack.push(value);
    } else {
      stack.push(Number(x));
    }
  }
  answer = stack.pop();
  return answer;
}

function solution(s){  
  let answer;
  let stack=[];
  for(let x of s){
      if(!isNaN(x)) stack.push(Number(x));
      else{
          let rt=stack.pop();
          let lt=stack.pop();
          if(x==='+') stack.push(lt+rt);
          else if(x==='-') stack.push(lt-rt);
          else if(x==='*') stack.push(lt*rt);
          else if(x==='/') stack.push(lt/rt);
      }
  }
  answer=stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
