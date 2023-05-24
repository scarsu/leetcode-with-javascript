/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    // O(n) O(1)
    for(let i=0;i<nums.length;i++){
        if(i%10===nums[i]) return i
    }
    return -1
};
