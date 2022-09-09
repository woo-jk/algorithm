function solution(s) {
    let zeroCount = 0;
    let count = 0;
    while(s.length > 1) {
        let temp = "";
        for(let x of s) {
            if(x === "0") {
                zeroCount++;
            } else {
                temp += x;
            }
        }
        s = temp.length.toString(2);
        count++;
    }
    return [count, zeroCount];
}