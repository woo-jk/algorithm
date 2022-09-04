function solution(lottos, win_nums) {
    var answer = [];
    let matchCount = 0;
    let zeroCount = 0;
    for(let i of win_nums) {
        if(lottos.includes(i)) matchCount++;
    }
    for(let i of lottos) {
        if(i === 0) zeroCount++;
    }
    answer.push(matchCount+zeroCount === 0 ? 6 :  7-(matchCount+zeroCount));
    answer.push(matchCount === 0 ? 6 : 7-matchCount);
    return answer;
}