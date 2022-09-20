/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    // 特征值一定>=1 <=nums.length
    nums.sort((a,b)=>b-a)
    for(let x=1;x<=nums.length;x++){
        if(nums[x-1]>=x && (x===nums.length || nums[x]<x)) return x
    }
    return -1
};
