/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (39.34%)
 * Likes:    137
 * Dislikes: 0
 * Total Accepted:    27.6K
 * Total Submissions: 66K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 k n 
 * 所给数据范围 [-10,000，10,000]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if(k===1) return Math.max(...nums)
  // 滑动窗口
  let lastSum=0,maxSum=0
  for(let i=0;i<nums.length;i++){
    // 计算新窗口的值
    let newSum = lastSum+nums[i]
    if(i>=k){  // i===k开始 才需要滑动
      newSum-=nums[i-k]
    }
    if(i===k-1) maxSum = newSum // i===k-1开始计算最大值
    if(i>k-1) maxSum = Math.max(maxSum,newSum)
    lastSum=newSum
  }
  return maxSum/k
};
// @lc code=end

