function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  for (let x of arr) {
    if (answer.includes(x)) {
      answer.unshift(answer.splice(answer.indexOf(x), 1)[0]);
    } else {
      answer.unshift(x);
      answer.pop();
    }
  }
  return answer;
}

// 답안
function solution(size, arr){
  let answer=Array.from({length:size}, ()=>0);
  arr.forEach(x => {
      let pos=-1;
      for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
      if(pos===-1){
          for(let i=size-1; i>=1; i--){
              answer[i]=answer[i-1];
          }
      }
      else{
          for(let i=pos; i>=1; i--){
              answer[i]=answer[i-1];
          }
      } 
      answer[0]=x;  
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
