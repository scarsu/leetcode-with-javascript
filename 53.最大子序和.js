/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (55.19%)
 * Likes:    3768
 * Dislikes: 0
 * Total Accepted:    680.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^5 
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  // 动态规划
  // dp[i]是“以i为结尾的”和最大的子数组
  // 递推式：
  // 已知dp[i-1]，对于dp[i]来说 只有两种情况
  // 一是nums[i]加入上一段子数组 取值是dp[i]=dp[i-1]+nums[i]
  // 二是nums[i]单独成为一段 取值是dp[i]=nums[i]
  // 在这两种情况取最大值
  // 因此递推式：dp[i]=max(dp[i-1]+nums[i],nums[i])

  // 最终的结果 取dp数组中的最大值

  // dp[i]只与dp[i-1]有关，所以只需要维护上一次的值和最大值，不需要维护dp数组
  let preDp=0,maxDp=nums[0]
  nums.forEach(num=>{
      preDp=Math.max(preDp+num,num)
      maxDp=Math.max(maxDp,preDp)
  })
  return maxDp
};
// @lc code=end

