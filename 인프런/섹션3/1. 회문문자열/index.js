function solution(s) {
  let answer = "YES";
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) {
      answer = "NO";
    }
  }
  return answer;
}

//답
 function solution(s){
                let answer="YES";
                s=s.toLowerCase();
                let len=s.length;
                for(let i=0; i<Math.floor(len/2); i++){
                    if(s[i]!=s[len-i-1]) return "NO";
                }
                return answer;
            }

let str = "nooo";
console.log(solution(str));
