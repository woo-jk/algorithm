function solution(arr) {
  let sum = 0;
  let min = 100;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return [sum, min];
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
