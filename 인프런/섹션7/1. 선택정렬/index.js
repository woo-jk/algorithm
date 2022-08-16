function solution(arr) {
  let answer = arr;
  let min;
  let selectedIndex;
  for (let i = 0; i < arr.length; i++) {
    selectedIndex = i;
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        selectedIndex = j;
      }
    }
    if (selectedIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[selectedIndex];
      arr[selectedIndex] = temp;
    }
  }
  return answer;
}

// 답안
function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length; i++){
      let idx=i;
      for(let j=i+1; j<arr.length; j++){
          if(arr[j]<arr[idx]) idx=j;
      }
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
  } 
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
