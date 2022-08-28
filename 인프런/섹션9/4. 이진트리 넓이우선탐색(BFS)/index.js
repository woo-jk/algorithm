function solution() {
  let answer = "";
  let queue = [];
  let p = 1;
  queue.push(1);

  while (p < 7) {
    p = queue.shift();
    queue.push(p * 2);
    queue.push(p * 2 + 1);
    answer += p + " ";
  }
  return answer;
}

// 답안
function solution(){  
  let answer="";
  let queue=[];
  queue.push(1);
  while(queue.length){
      console.log(queue);
      let v=queue.shift();
      answer+=v+" ";
      for(let nv of [v*2, v*2+1]){ 
          if(nv>7) continue;
          queue.push(nv);
      }
  }
  return answer;
}


console.log(solution());
