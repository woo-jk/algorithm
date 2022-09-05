function solution(queue1, queue2) {
    let count = 0;
    let sum1 = queue1.reduce((a, b)=> a+b, 0);
    let sum2 = queue2.reduce((a, b)=> a+b, 0);
    let targetSum = (sum1 + sum2)/2;
    let maxLength = queue1.length * 3;
    
    while(count <= maxLength) {
        if(sum1 < sum2) {
            let p = queue2.shift();
            queue1.push(p);
            sum1 += p;
            sum2 -= p;
        } else if(sum1 > sum2) {
            let p = queue1.shift();
            queue2.push(p);
            sum1 -= p;
            sum2 += p;
        } else {
            return count;
        }
        count++;
    }
    return -1;
}