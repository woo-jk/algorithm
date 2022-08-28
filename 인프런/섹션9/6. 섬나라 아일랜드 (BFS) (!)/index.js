function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  let queue = [];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (arr[y][x] === 1) {
        answer++;
        queue.push([x, y]);

        while (queue.length) {
          let v = queue.shift();
          let cx = v[0];
          let cy = v[1];
          for (let i = 0; i < dx.length; i++) {
            let nx = cx + dx[i];
            let ny = cy + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] === 1) {
              arr[ny][nx] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

// 답안
function solution(board){  
  let answer=0;
  let n=board.length;
  let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
  let dy=[0, 1, 1, 1, 0, -1, -1, -1];
  let queue=[];
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(board[i][j]===1){
              board[i][j]=0;
              queue.push([i, j]);
              answer++;
              while(queue.length){
                  let x=queue.shift();
                  for(let k=0; k<8; k++){
                      let nx=x[0]+dx[k];
                      let ny=x[1]+dy[k];
                      if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
                          board[nx][ny]=0;
                          queue.push([nx, ny]);
                      }
                  }
              }
              
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
