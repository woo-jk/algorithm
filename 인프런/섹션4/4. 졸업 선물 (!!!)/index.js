function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    let leftMoney = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;
    for (let j = 0; j < product.length; j++) {
      if (j !== i && leftMoney - (product[j][0] + product[j][1]) < 0) {
        break;
      }
      if (j !== i && leftMoney - (product[j][0] + product[j][1]) >= 0) {
        leftMoney -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3]
];
console.log(solution(28, arr));
