function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => []);
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  for (let i = 0; i < arr.length; i++) {
    graph[arr[i][0]].push(arr[i][1]);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path.slice());
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          path.push(graph[v][i]);
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          path.pop();
          ch[graph[v][i]] = 0;
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}

// 답안
function solution(n, arr){  
  let answer=0;
  let graph=Array.from(Array(n+1), ()=>Array());
  let ch=Array.from({length:n+1}, ()=>0);
  let path=[]
  for(let [a, b] of arr){
      graph[a].push(b);
  }
  function DFS(v){
      if(v===n){
          answer++;
          console.log(path);
      }
      else{
          for(let nv of graph[v]){
              if(ch[nv]===0){
                  path.push(nv);
                  ch[nv]=1;
                  DFS(nv);
                  ch[nv]=0;
                  path.pop();
              }
          }
      }
  }
  ch[1]=1;
  path.push(1);
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5]
];
console.log(solution(5, arr));
