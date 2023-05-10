/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    // O(n)
    nums.sort((a,b)=>a-b)
    const set=new Set()
    let i=0,j=nums.length-1
    while(i<j){
        set.add(nums[i]+nums[j])
        i++
        j--
    }
    return set.size
};
