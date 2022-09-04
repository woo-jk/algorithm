function solution(answers) {
    let answer = [];
    let score = [0, 0, 0];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for(let i=0; i<answers.length; i++) {
        if(one[i%one.length] === answers[i]) score[0]++;
        if(two[i%two.length] === answers[i]) score[1]++;
        if(three[i%three.length] === answers[i]) score[2]++;
    }
    
    let max = Math.max(...score);
    for(let i=0; i<3; i++) {
        if(max === score[i]) answer.push(i+1);
    }
    return answer;
}