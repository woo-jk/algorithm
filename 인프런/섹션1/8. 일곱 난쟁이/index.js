function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = arr.slice();
      temp.splice(j, 1);
      temp.splice(i, 1);
      // console.log(i, j, temp);
      let sum = temp.reduce((a, b) => a + b, 0);
      if (sum === 100) {
        return temp;
      }
    }
  }
  return -1;
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
