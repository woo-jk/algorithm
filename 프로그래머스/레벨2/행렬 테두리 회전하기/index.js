function solution(rows, columns, queries) {
    let answer = [];
    let temp = 1;
    let board = Array.from({length: rows}, ()=>Array.from({length: columns}, ()=>temp++));
    for(let q=0; q<queries.length; q++) {
        let [x1, y1, x2, y2] = [queries[q][0]-1, queries[q][1]-1, queries[q][2]-1, queries[q][3]-1];
        let current = [x1, y1];
        let moveX = x2-x1;
        let moveY = y2-y1;
        let value = board[current[0]][current[1]];
        let min = Number.MAX_SAFE_INTEGER;
        for(let i=0; i<moveY; i++) {
            let t = board[current[0]][current[1]];
            board[current[0]][current[1]] = value;
            value = t;
            current[1]++;
            min = Math.min(value, min);
        }
        for(let i=0; i<moveX; i++) {
            let t = board[current[0]][current[1]];
            board[current[0]][current[1]] = value;
            value = t;
            current[0]++;
            min = Math.min(value, min);
        }
        for(let i=0; i<moveY; i++) {
            let t = board[current[0]][current[1]];
            board[current[0]][current[1]] = value;
            value = t;
            current[1]--;
            min = Math.min(value, min);
        }
        for(let i=0; i<=moveX; i++) {
            let t = board[current[0]][current[1]];
            board[current[0]][current[1]] = value;
            value = t;
            current[0]--;
            min = Math.min(value, min);
        }
        answer.push(min);
    }
    return answer;
}
