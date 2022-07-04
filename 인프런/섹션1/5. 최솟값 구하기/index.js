function solution(str) {
  let arr = str.split(" ");
  let min = parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    min = min < parseInt(arr[i]) ? min : parseInt(arr[i]);
  }
  return min;
}

console.log(solution("5 3 7 11 2 15 17"));
