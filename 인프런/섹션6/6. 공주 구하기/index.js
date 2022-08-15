function solution(n, k) {
  let answer;
  let p = k - 1;
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i);
  }

  queue.splice(p, 1);
  while (queue.length > 1) {
    p = (p + k - 1) % queue.length;
    queue.splice(p, 1);
  }

  answer = queue[0] + 1;
  return answer;
}

// 답안
function solution(n, k){
  let answer;
  let queue=Array.from({length:n}, (v, i)=>i+1); 
  while(queue.length){
      for(let i=1; i<k; i++) queue.push(queue.shift());
      queue.shift();
      if(queue.length===1) answer=queue.shift();
  }  
  return answer;
}

console.log(solution(8, 3));
