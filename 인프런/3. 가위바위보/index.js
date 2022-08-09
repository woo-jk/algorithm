function solution(a, b){         
  let arr=[];
  for(let i=0; i<a.length; i++) {
    if(a[i]===b[i]){
      arr.push("D");
    } else if(a[i]===1 && b[i]===3){
      arr.push("A");
    } else if(a[i]===2 && b[i]===1){
      arr.push("A");
    } else if(a[i]===3 && b[i]===2){
      arr.push("A");
    } else {
      arr.push("B");
    }
  }
  let answer = arr.join(" ");
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));