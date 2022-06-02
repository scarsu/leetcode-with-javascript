/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 动态规划
  // dp[i] 以i结尾的 和最大的子数组
  // dp[i] = max(nums[i], dp[i-1]+nums[i])

  // 由于dp[i]只与dp[i-1]有关，所以可以只维护dp[i-1]，不需要维护dp数组
  let ret=nums[0]
  let lastDP=nums[0]
  for(let i=1;i<nums.length;i++){
      lastDP=Math.max(lastDP+nums[i], nums[i])
      if(lastDP>ret) ret=lastDP
  }
  return ret
};