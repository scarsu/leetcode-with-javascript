/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    // 时间O(n) 空间O(n)
    const set=new Set()
    for(let i=0;i<nums.length-1;i++){
        const sum=nums[i]+nums[i+1]
        if(set.has(sum)){
            return true
        }else{
            set.add(sum)
        }
    }
    return false
};
