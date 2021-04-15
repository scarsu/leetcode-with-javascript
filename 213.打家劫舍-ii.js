/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (39.79%)
 * Likes:    598
 * Dislikes: 0
 * Total Accepted:    104.8K
 * Total Submissions: 249.1K
 * Testcase Example:  '[2,3,2]'
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈
 * ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
// 相比于#198 打家劫舍I，区别是数组首尾相连
// 有1   则不能有n-1，即范围是[0,n-2]
// 有n-1 则不能有1，  即范围是[1,n-1]
// 将这两种情况分别以#198 的方式求出结果，较大的作为本题结果
var rob = function(nums) {
  const n=nums.length||0
  if(n===0) return 0
  if(n<=2) return Math.max(...nums)
  return Math.max(robRange(nums,0,n-2), robRange(nums,1,n-1))
};

const robRange = (nums, start, end)=>{
  const dp=[nums[start],Math.max(nums[start],nums[start+1])]
  for(let i=2;i<=end-start;i++){
    dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i+start])
  }
  return dp[end-start]
}
// @lc code=end

