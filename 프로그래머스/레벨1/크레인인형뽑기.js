function solution(board, moves) {
    let answer = 0;
    let stack = [];
    for(let i=0; i<moves.length; i++) {
        let picked = 0;
        for(let j=0; j<board.length; j++) {
            if(board[j][moves[i]-1] !== 0) {
                picked = board[j][moves[i]-1];
                board[j][moves[i]-1] = 0;
                break;
            }
        }
        if(picked !== 0) {
            if(stack[stack.length-1] === picked) {
                stack.pop();
                answer+=2;
            } else {
                stack.push(picked);
            }
        }
    }
    return answer;
}