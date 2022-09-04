function solution(new_id) {
    let answer = new_id;
    
    // 1
    answer = answer.toLowerCase();
    
    // 2
    answer = answer.replace(/[^a-z0-9-_.]/g, "");
    
    // 3
    answer = answer.replace(/[.]+/g, ".");
    
    // 4
    answer = answer.replace(/^[.]|[.]$/, "");
    
    // 5
    answer = answer === "" ? "a" : answer; 
    
    // 6
    answer = answer.length > 15 ? answer.substring(0, 15).replace(/[.]$/, "") : answer;
    
    // 7
    answer = answer.length < 3 ? answer + answer[answer.length-1].repeat(3 - answer.length) : answer;
    
    return answer;
}