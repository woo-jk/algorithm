function solution(s1, s2) {
  let answer;
  let hash1 = new Map();
  let hash2 = new Map();

  for (let x of s1) {
    if (hash1.has(x)) {
      hash1.set(x, hash1.get(x) + 1);
    } else {
      hash1.set(x, 1);
    }
  }
  for (let x of s2) {
    if (hash2.has(x)) {
      hash2.set(x, hash2.get(x) + 1);
    } else {
      hash2.set(x, 1);
    }
  }
  for (let x of hash1) {
    if (hash1.get(x[0]) !== hash2.get(x[0])) {
      answer = "NO";
      break;
    } else {
      answer = "YES";
    }
  }
  return answer;
}

// 답안
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let str1 = "AbaAeCe";
let str2 = "baeeACA";
console.log(solution(str1, str2));
