function solution(arr) {
  let answer = 0;
  let endTime = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  for (let x of arr) {
    if (x[0] >= endTime) {
      endTime = x[1];
      answer++;
    }
  }
  return answer;
}

// 답안
function solution(meeting){
  let answer=0;
  meeting.sort((a, b)=>{
      if(a[1]===b[1]) return a[0]-b[0];
      else return a[1]-b[1];
  })
  let et=0;
  for(let x of meeting){
      if(x[0]>=et){
          answer++;
          et=x[1];
      }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
];
console.log(solution(arr));
