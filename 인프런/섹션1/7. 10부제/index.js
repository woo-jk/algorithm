function solution(day, arr) {
  let count = 0;
  for (let x of arr) {
    let temp = x.toString().substring(1, 2);
    if (day.toString() === temp) {
      count++;
    }
  }
  return count;
}

let arr = [12, 20, 54, 30, 66, 91, 30];
console.log(solution(0, arr));
