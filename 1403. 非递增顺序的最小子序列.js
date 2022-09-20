/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    // 贪心
    nums.sort((a,b)=>b-a)
    const sum=nums.reduce((p,c)=>p+c,0)
    let curSum=0
    let ret=[]
    for(let i=0;i<nums.length;i++){
        curSum+=nums[i]
        ret.push(nums[i])
        if(curSum>sum/2){
            return ret
        }
    }
    return ret
};
