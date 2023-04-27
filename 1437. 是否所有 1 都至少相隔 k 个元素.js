/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    // O(n) O(1)
    for(let i=0,lastI=-1;i<nums.length;i++){
        if(lastI===-1&&nums[i]===1){
            lastI=i
        }else if(nums[i]===1){
            if(i-lastI<k+1) return false
            lastI=i
        }
    }
    return true
};
