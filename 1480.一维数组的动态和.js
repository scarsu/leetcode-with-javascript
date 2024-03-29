/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 *
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/description/
 *
 * algorithms
 * Easy (85.35%)
 * Likes:    89
 * Dislikes: 0
 * Total Accepted:    105.6K
 * Total Submissions: 123.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 
 * 请返回 nums 的动态和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,6,10]
 * 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 * 
 * 示例 2：
 * 
 * 输入：nums = [1,1,1,1,1]
 * 输出：[1,2,3,4,5]
 * 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
 * 
 * 示例 3：
 * 
 * 输入：nums = [3,1,2,10,1]
 * 输出：[3,4,6,16,17]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const ret=new Array(nums.length)
  ret[0]=nums[0]
  for(let i=1;i<nums.length;i++){
      ret[i]=ret[i-1]+nums[i]
  }
  return ret
};
// @lc code=end

