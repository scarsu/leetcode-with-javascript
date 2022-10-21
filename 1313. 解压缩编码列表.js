/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ret=[]
    for(let i=0;i<nums.length/2;i++){
        // ret=ret.concat(...new Array(nums[2*i]).fill(nums[2*i+1]))
        for(let j=0;j<nums[2*i];j++){
            ret.push(nums[2*i+1])
        }
    }
    return ret
};
