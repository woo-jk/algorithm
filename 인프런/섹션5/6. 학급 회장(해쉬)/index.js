function solution(s) {
  let answer;
  let map = new Map();
  map.set("A", 0);
  map.set("B", 0);
  map.set("C", 0);
  map.set("D", 0);
  map.set("E", 0);
  for (let i of s) {
    map.set(i, map.get(i) + 1);
  }
  answer = [...map].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return answer;
}

// 답안
function solution(s){  
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
