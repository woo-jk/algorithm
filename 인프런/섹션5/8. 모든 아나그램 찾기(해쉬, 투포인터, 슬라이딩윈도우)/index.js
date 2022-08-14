// 문자열 개수가 아닌 문자열들을 대신 출력 
function solution(s1, s2) {
  let answer = [];
  let hash = new Map();
  let isAnagram = true;
  for (let x of s2) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
  }

  for (let i = 0; i <= s1.length - s2.length; i++) {
    let strSlice = s1.slice(i, i + s2.length);
    let hashCopy = new Map(hash);
    for (let x of strSlice) {
      if (!hashCopy.has(x) || hashCopy.get(x) === 0) {
        isAnagram = false;
      } else {
        hashCopy.set(x, hashCopy.get(x) - 1);
      }
    }

    if (isAnagram) {
      answer.push(strSlice);
    } else {
      isAnagram = true;
    }
  }
  return answer;
}

// 답안
function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}

let str1 = "bacaAacba";
let str2 = "abc";
console.log(solution(str1, str2));
