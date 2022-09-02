function solution(n, arr1, arr2) {
    var answer = Array.from({length : n}, ()=>"");
    let map1 = arr1.map(v => "0".repeat(n-v.toString(2).length) + v.toString(2));
    let map2 = arr2.map(v => "0".repeat(n-v.toString(2).length) + v.toString(2));
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(map1[i][j] === "1" || map2[i][j] === "1") answer[i] += "#";
            else answer[i] += " ";
        }
    }

    return answer;
}