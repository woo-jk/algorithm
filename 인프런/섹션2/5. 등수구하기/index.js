function solution(arr) {
  let answer = [];
  let temp = arr.slice();
  temp.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    answer.push(temp.indexOf(arr[i]) + 1);
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
