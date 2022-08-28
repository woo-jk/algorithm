function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  function DFS(x, y) {
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
        arr[nx][ny] = 0;
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        answer++;
        arr[i][j] = 0;
        DFS(i, j);
      }
    }
  }
  return answer;
}

function solution(board){  
  let answer=0;
  let n=board.length;
  let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
  let dy=[0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y){
     board[x][y]=0;
     for(let k=0; k<8; k++){
         let nx=x+dx[k];
         let ny=y+dy[k];
         if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
             DFS(nx, ny);
         }
     } 
  }
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(board[i][j]===1){
              board[i][j]=0;
              answer++;
              DFS(i, j);
          }
      }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));
