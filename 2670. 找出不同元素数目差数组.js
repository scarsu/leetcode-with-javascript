/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    // O(n)
    if(nums.length===1) return [1]

    const dp=new Array(nums.length)
    dp[0]=1
    for(let i=1;i<nums.length;i++){
        const sub=nums.slice(0,i)
        if(sub.indexOf(nums[i])>-1){
            dp[i]=dp[i-1]
        }else{
            dp[i]=dp[i-1]+1
        }
    }
    console.log(dp)

    const dpBack=new Array(nums.length)
    dpBack[nums.length-1]=0
    dpBack[nums.length-2]=1
    for(let i=nums.length-3;i>=0;i--){
        const sub=nums.slice(i+2,nums.length)
        if(sub.indexOf(nums[i+1])>-1){
            dpBack[i]=dpBack[i+1]
        }else{
            dpBack[i]=dpBack[i+1]+1
        }
    }
    console.log(dpBack)

    const ret=[]
    for(let i=0;i<nums.length;i++){
        ret[i]=dp[i]-dpBack[i]
    }
    return ret
};
