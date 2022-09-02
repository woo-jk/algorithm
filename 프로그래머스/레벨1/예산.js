// DFS로 접근하려 했으나 시간이 너무 오래걸려 실패
// function solution(d, budget) {
//     var answer = 0;
//     let n = d.length;
//     let ch = Array.from({length: n}, () => 0);
//     function DFS(L) {
//         if(L === n) {
//             let sum = 0;
//             let count = 0;
//             for(let i=0; i<n; i++) {
//                 if(ch[i] === 1) {
//                     sum += d[i];
//                     count++;
//                 }
//             }
//             if(sum === budget) answer = Math.max(answer, count);
//         } else {
//             ch[L] = 1;
//             DFS(L+1);
//             ch[L] = 0;
//             DFS(L+1);
//         }
//     }
//     DFS(0);
//     return answer;
// }

function solution(d, budget) {
    let sum = 0;
    let count = 0;
    d.sort((a, b) => a-b);
    for(let i=0; i<d.length; i++) {
        sum += d[i];
        if(sum > budget) break;
        count++;
    }
    
    return count;
}