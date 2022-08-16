function solution(arr) {
  let answer;
  let neg = [];
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  answer = neg.concat(pos);
  return answer;
}


//답안
function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
      for(let j=0; j<arr.length-i-1; j++){
          if(arr[j]>0 && arr[j+1]<0){
              [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
          }
      }   
  } 
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
