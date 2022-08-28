function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);

  let queue = [];

  ch[s] = 1;
  queue.push(s);
  while (queue.length) {
    let v = queue.shift();
    if (v === e) {
      answer = dis[v];
    } else {
      for (let nv of [v + 1, v - 1, v + 5]) {
        if (ch[nv] === 0) {
          queue.push(nv);
          ch[nv] = 1;
          dis[nv] = dis[v] + 1;
        }
      }
    }
  }

  return answer;
}

// 답안
function solution(s, e){  
  let answer=0;
  let ch=Array.from({length:10001}, ()=>0);
  let dis=Array.from({length:10001}, ()=>0);
  let queue=[];
  queue.push(s);
  ch[s]=1;
  dis[s]=0;
  while(queue.length){
      let x=queue.shift();
      for(let nx of [x-1, x+1, x+5]){
          if(nx===e) return dis[x]+1;
          if(nx>0 && nx<=10000 && ch[nx]===0){
              ch[nx]=1;
              queue.push(nx);
              dis[nx]=dis[x]+1;
          }
      }
  }
  return answer;
}

console.log(solution(5, 14));
