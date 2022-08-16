function solution(arr) {
  let answer = arr;
  for (let last = arr.length - 1; last >= 0; last--) {
    for (let i = 0; i < last; i++) {
      if (answer[i] > answer[i + 1]) {
        [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
      }
    }
  }
  return answer;
}

// 답안
function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
      for(let j=0; j<arr.length-i-1; j++){
          if(arr[j]>arr[j+1]){
              [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
          }
      }   
  } 
  return answer;
}


let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
