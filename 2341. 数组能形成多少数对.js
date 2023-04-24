/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums.sort((a,b)=>a-b)
    const n=nums.length
    const ret=[0,n]
    for(let i=0;i<n-1;i++){
        if(nums[i+1]===nums[i]){
            ret[0]++
            ret[1]-=2
            i+=1
        }
    }
    return ret
};
