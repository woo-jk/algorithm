function solution(arr) {
  let answer = [];
  let prev = arr[0];
  answer.push(prev);
  for (let i of arr) {
    if (prev < i) {
      answer.push(i);
    }
    prev = i;
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12, 13, 11, 22, 21, 11, 1];
console.log(solution(arr));
