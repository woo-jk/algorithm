function solution(sizes) {
    var answer = 0;
    let max = [0, 0];
    
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
        max[0] = Math.max(max[0], sizes[i][0]);
        max[1] = Math.max(max[1], sizes[i][1]);
    }
    
    answer = max[0] * max[1];
    return answer;
}