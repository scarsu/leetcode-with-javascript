/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // 1 贪心
    nums.sort((a,b)=>a-b)
    const n=nums.length/2
    if(nums[n-1]===nums[0]) return nums[0]
    if(nums[n]===nums[2*n-1]) return nums[n]
    return nums[n]
    // 2 哈希表 一次遍历
};
