function solution(n, lost, reserve) {
    var answer = 0;
    lost.sort((a, b)=>a-b);
    reserve.sort((a, b)=>a-b);
    for(let i=0; i<reserve.length; i++) {
        if(lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(i, 1);
            i--;
        } else if(lost.includes(reserve[i]-1)) {
            lost.splice(lost.indexOf(reserve[i]-1), 1);
            reserve.splice(i, 1);
            i--;
        } else if(lost.includes(reserve[i]+1) && !reserve.includes(reserve[i]+1)) {
            lost.splice(lost.indexOf(reserve[i]+1), 1);
            reserve.splice(i, 1);
            i--;
        }
    }
    console.log(reserve);
    console.log(lost);
    answer = n - lost.length;
    return answer;
}