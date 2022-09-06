function solution(s) {
    let maxCut = s.length/2;
    let minSize = s.length;
    
    let current = "";
    
    for(let i=1; i<=s.length; i++) {
        let count = 1;
        let currentSize = s.length;
        
        for(let j=0; j<s.length; j+=i) {
            if(current !== s.substr(j, i)) {
                current = s.substr(j, i);
                count = 1;
            } else {
                if(count === 1) currentSize++;
                currentSize -= i;
                count++;
                if(count%10 === 0 && count.toString()[0] === "1") currentSize++;
            }
        }
        minSize = Math.min(minSize, currentSize);
    }
    return minSize;
}