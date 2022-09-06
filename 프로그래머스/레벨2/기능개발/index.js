function solution(progresses, speeds) {
    var answer = [];
    let n = progresses.length;
    let ch = Array.from({length: n}, () => 0);
    while(ch[n-1] !== 1) {
        let now = 0;
        
        for(let i=0; i<n; i++) {
            progresses[i] += speeds[i];
        }
        
        for(let i=0; i<n; i++) {
            if(ch[i] === 1) continue;
            if(progresses[i] >= 100) {
                ch[i] = 1;
                now++;
            } else {
                break;
            }
        }
        if(now > 0) answer.push(now);
    }
    return answer;
}