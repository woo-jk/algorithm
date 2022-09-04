function solution(N, stages) {
    var answer = [];
    
    let fail = Array.from({length: N+1}, ()=>0);
    let temp = Array.from({length: N}, (v, i)=>i+1);
    stages.sort((a, b)=>a-b);
    
    let challenger = stages.length;
    let current = stages[0];
    
    for(let i=0; i<stages.length; i++) {
        if(stages[i] !== current) {
            // 원래 코드에서는 몇개의 테스트 케이스가 실패했는데 아래 한줄을 추가해주니 실패가 사라짐
            // 아마도 분수처리 과정에서 문제가 있었는듯
            fail[current] /= challenger;
            challenger = stages.length - i;
            current = stages[i];
        }
        // 원래 코드 -> fail[current] += 1/challenger;
        if(stages[i] !== N+1) fail[current]++;
    }
    console.log(fail)
    answer = temp.sort((a, b)=>fail[b] - fail[a]);
    return answer;
}