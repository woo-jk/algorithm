function solution(nums) {
    var answer = 0;
    let book = new Map();
    for(let i=0; i<nums.length; i++) {
        book.set(nums[i], (book.get(nums[i]) || 0) + 1);
    }
    answer = Math.min(nums.length/2, book.size);
    return answer;
}