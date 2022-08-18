// 답안과 똑같으므로 답안은 따로 첨부x
function count(stable, dist) {
  let cnt = 1;
  let p = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - p >= dist) {
      p = stable[i];
      cnt++;
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = stable[1] - stable[0];
  let rt = stable[stable.length - 1] - stable[0];

  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
