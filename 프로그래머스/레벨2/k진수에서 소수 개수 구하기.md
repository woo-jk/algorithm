### 내가 작성한 코드

```jsx
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i === 0) return false;
    }
    return true;
}
function solution(n, k) {
    let answer = 0;
    let arr = n.toString(k).replace(/0+/g, "0").split("0");
    for(let i=0; i<arr.length; i++) {
        if(isPrime(Number(arr[i]))) answer++;
    }
    return answer;
}
```

- 문자열 문제
- 소수 판별 함수를 따로 만듦
- 0이 여러개면 1개로 만들고, 0을 기준으로 split해서 판별한다.