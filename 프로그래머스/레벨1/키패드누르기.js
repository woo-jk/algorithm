function getDistance(n1, n2) {
    if(n1 === 0) n1 = 11;
    if(n2 === 0) n2 = 11;
    
    let distance = 0;
    let gap = Math.abs(n2 - n1);
    
    while(gap > 0) {
        if(gap >= 3) {
            gap -= 3;
            distance++;
        } else {
            gap--;
            distance++;
        }
    }
    return distance;
}

function solution(numbers, hand) {
    let answer = "";
    let leftPosition = 10;
    let rightPosition = 12;
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += "L";
            leftPosition = numbers[i];
        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += "R";
            rightPosition = numbers[i];
        } else {
            let leftDistance = getDistance(leftPosition, numbers[i]);
            let rightDistance = getDistance(rightPosition, numbers[i]);
            if(leftDistance < rightDistance) {
                answer += "L";
                leftPosition = numbers[i];
            } else if(leftDistance > rightDistance) {
                answer += "R";
                rightPosition = numbers[i];
            } else {
                if(hand === "left") {
                    answer += "L";
                    leftPosition = numbers[i];
                } else {
                    answer += "R";
                    rightPosition = numbers[i];
                }
            }
        }
    }
    return answer;
}