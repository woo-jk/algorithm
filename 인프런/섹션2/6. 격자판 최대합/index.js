function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let temp;
  // row
  for (let i = 0; i < 5; i++) {
    temp = 0;
    for (let j = 0; j < 5; j++) {
      temp += arr[i][j];
    }
    if (answer < temp) {
      answer = temp;
    }
  }

  // col
  for (let i = 0; i < 5; i++) {
    temp = 0;
    for (let j = 0; j < 5; j++) {
      temp += arr[j][i];
    }
    if (answer < temp) {
      answer = temp;
    }
  }

  // diagonal
  temp = 0;
  for (let i = 0; i < 5; i++) {
    temp += arr[i][i];
  }
  if (answer < temp) {
    answer = temp;
  }

  temp = 0;
  for (let i = 0; i < 5; i++) {
    temp += arr[4 - i][4 - i];
  }
  if (answer < temp) {
    answer = temp;
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));
