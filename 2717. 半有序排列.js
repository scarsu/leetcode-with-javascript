/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    // O(n)
    const idx1=nums.indexOf(1)
    const idxn=nums.indexOf(nums.length)
    return nums.length-1-idxn+idx1-(idx1>idxn)
};
