function solution(dartResult) {
    var answer = 0;
    let p = 0;
    let prev = 0;
    let point = 0;
    
    while(p < dartResult.length) {
        if(dartResult[p+1] === "0") {
            point = 10;
            p++;
        } else {
            point = parseInt(dartResult[p]);
        }
        
        if(dartResult[p+1] === "D") point = point * point;
        else if(dartResult[p+1] === "T") point = point * point * point;
        p++;
        
        if(dartResult[p+1] === "*") {
            answer += prev;
            point = point * 2;
            p++;
        }
        else if(dartResult[p+1] === "#") {
            point = point * (-1);
            p++;
        }
        
        console.log(point);
        
        answer += point;
        prev = point;
        p++;
    }
    return answer;
}