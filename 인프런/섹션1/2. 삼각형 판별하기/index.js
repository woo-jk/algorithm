function solution(a, b, c) {
  let max;
  let other = 0;
  if (a > b) {
    max = a;
    other += b;
  } else {
    max = b;
    other += a;
  }

  if (max < c) {
    max = c;
    other += max;
  } else {
    other += c;
  }

  if (max > other) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(solution(40, 20, 0));
