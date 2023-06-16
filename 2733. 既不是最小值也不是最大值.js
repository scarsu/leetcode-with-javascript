/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    // O(n) O(1)
    // const min=Math.min(...nums)
    // const max=Math.max(...nums)
    // for(let num of nums){
    //     if(num!==min&&num!==max) return num
    // }
    // return -1

    // 贪心：由于每个数不同，所以前三个数中 至少存在一个符合的答案
    if(nums.length<3) return -1
    return [nums[0],nums[1],nums[2]].sort((a,b)=>a-b)[1]
};
