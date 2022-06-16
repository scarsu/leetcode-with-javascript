/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  // 动态规划题，最重要的是找准dp[i的意义，借助每次状态转移需要的数据来定义
  // dp[i][0] 第i次预约不接，最长时间
  // dp[i][1] 第i次预约接，最长时间
  // dp[i][0]=max(dp[i-1][1], dp[i-1][0])
  // dp[i][1]=dp[i-1][0]+nums[i]
  if(nums.length<2) return nums[0]||0
  const n=nums.length
  const dp=new Array(n).fill(0).map(i=>[0,0])
  let ret=-1
  dp[0]=[0,nums[0]]
  for(let i=1;i<nums.length;i++){
      dp[i][0]=Math.max(dp[i-1][0], dp[i-1][1])
      dp[i][1]=dp[i-1][0]+nums[i]
      ret=Math.max(ret, dp[i][0],dp[i][1])
  }
  return ret
};