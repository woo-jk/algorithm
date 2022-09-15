### 내가 작성한 코드

```jsx
function solution(n, t, m, p) {
    let answer = "";
    let str = "";
    for(let i=0; i<t*m; i++) {
        str += i.toString(n).toUpperCase();
    }
    for(let i=0; i<t; i++) {
        answer += str[p-1 + m*i]
    }
    return answer;
}
```

- toString()을 통해 진수 변환을 한 뒤 계속 이어붙여서 게임에 사용되는 전체 문자열을 만든다
- m과 p, t를 사용해서 튜브의 순서 문자열을 선택하고 answer에 이어 붙인다.