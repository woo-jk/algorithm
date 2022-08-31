function solution(survey, choices) {
    var answer = '';
    let board = new Map([['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]]);
    let category = ['RT', 'CF', 'JM', 'AN'];
    
    for(let i=0; i<survey.length; i++) {
        if(choices[i] > 4) {
            let score = choices[i] - 4;
            board.set(survey[i][1], board.get(survey[i][1])+score);
        } else if(choices[i] < 4) {
            let score = 4 - choices[i];
            board.set(survey[i][0], board.get(survey[i][0])+score);
        }
    }
    
    for(let i=0; i<category.length; i++) {
        if(board.get(category[i][0]) < board.get(category[i][1])) {
            answer += category[i][1];
        } else {
            answer += category[i][0];
        }
    }
    return answer;
}