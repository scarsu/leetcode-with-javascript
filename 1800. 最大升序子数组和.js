/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    // 遍历
    // let max=nums[0]
    // let sum=nums[0]
    // for(let i=1;i<nums.length;i++){
    //     if(nums[i]>nums[i-1]){
    //         sum+=nums[i]
    //         max=Math.max(max, sum)
    //     }else{
    //         max=Math.max(max, sum)
    //         sum=nums[i]
    //     }
    // }
    // return max

    // 动态规划
    // dp[i] = nums[i]>nums[i-1] ? dp[i-1]+nums[i] : Math.max(dp[i-1],nums[i])
    const dp=new Array(nums.length)
    dp[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            dp[i]=dp[i-1]+nums[i]
        }else{
            dp[i]=nums[i]
        }
    }
    return Math.max(...dp)
};
