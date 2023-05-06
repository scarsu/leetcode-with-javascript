/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const max=Math.max(...nums)
    return (max+max+k-1)*k/2
};
