/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    if(nums.length===1) return [0]
    const n=nums.length
    // 前缀和
    const preSums=new Array(n).fill(0)
    preSums[0]=nums[0]
    for(i=1;i<n;i++){
        preSums[i]=preSums[i-1]+nums[i]
    }
    const ret=new Array(n).fill(0)
    for(let i=0;i<n;i++){
        const left=i>0?preSums[i-1]:0
        const right=i<n-1?preSums[n-1]-preSums[i]:0
        ret[i]+=Math.abs(left-right)
    }
    return ret
};
