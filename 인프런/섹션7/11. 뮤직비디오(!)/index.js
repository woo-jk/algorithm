// 답안 보고 작성함
function count(arr, mid) {
  let count = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] > mid) {
      sum = arr[i];
      count++;
    } else {
      sum += arr[i];
    }
  }
  return count;
}
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

// 답안
function count(songs, capacity){
  let cnt=1, sum=0;
  for(let x of songs){
      if(sum+x > capacity){
          cnt++;
          sum=x;
      }
      else sum+=x;
  }
  return cnt;
}

function solution(m, songs){
  let answer;
  let lt=Math.max(...songs);
  let rt=songs.reduce((a, b)=>a+b, 0);
  while(lt<=rt){
      let mid=parseInt((lt+rt)/2);
      if(count(songs, mid)<=m){
          answer=mid;
          rt=mid-1;
      }
      else{
          lt=mid+1;
      }
  } 
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
