function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let endTime = arr[i][1];
    let people = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] < endTime) {
        people++;
      }
    }
    answer = Math.max(answer, people);
  }
  return answer;
}

// 답안
function solution(times){
  let answer=Number.MIN_SAFE_INTEGER;
  let T_line=[];
  for(let x of times){
      T_line.push([x[0], 's']);
      T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b)=>{
      if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
      else return a[0]-b[0];
  });
  let cnt=0;
  for(let x of T_line){
      if(x[1]==='s') cnt++;
      else cnt--;
      answer=Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
  [3, 13],
  [16, 19],
  [17, 23],
  [15, 19]
];
console.log(solution(arr));