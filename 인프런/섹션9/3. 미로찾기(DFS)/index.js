function solution(arr) {
  let answer = 0;
  function DFS(x, y) {
    // console.log(x, y);
    //
    if (x >= 7 || y >= 7) return;
    if (x === 6 && y === 6) {
      answer++;
    } else {
      if (x + 1 <= 6 && arr[x + 1][y] === 0) {
        arr[x + 1][y] = 1;
        DFS(x + 1, y);
        arr[x + 1][y] = 0;
      }
      if (y + 1 <= 6 && arr[x][y + 1] === 0) {
        arr[x][y + 1] = 1;
        DFS(x, y + 1);
        arr[x][y + 1] = 0;
      }
      if (x - 1 >= 0 && arr[x - 1][y] === 0) {
        arr[x - 1][y] = 1;
        DFS(x - 1, y);
        arr[x - 1][y] = 0;
      }
      if (y - 1 >= 0 && arr[x][y - 1] === 0) {
        arr[x][y - 1] = 1;
        DFS(x, y - 1);
        arr[x][y - 1] = 0;
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}

// 답안
function solution(board){  
  let answer=0;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  function DFS(x, y){
      if(x===6 && y===6) answer++;
      else{
          for(let k=0; k<4; k++){
              let nx=x+dx[k];
              let ny=y+dy[k];
              if(nx>=0 && nx<=6 && ny>=0 && ny<=6 && board[nx][ny]===0){
                  board[nx][ny]=1;
                  DFS(nx, ny);
                  board[nx][ny]=0;
              }
          }
      }
  }
  board[0][0]=1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));
