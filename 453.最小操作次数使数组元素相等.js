/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 *
 * https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 * algorithms
 * Easy (55.44%)
 * Likes:    295
 * Dislikes: 0
 * Total Accepted:    33.6K
 * Total Submissions: 58K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：3
 * 解释：
 * 只需要3次操作（注意每次操作会增加两个元素的值）：
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,1,1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 答案保证符合 32-bit 整数
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // 1 3 6(max-min=5)
  // 6 8 6(max-min=2)
  // 8 8 8

  // 0 4 8 12(max-min=12)
  // 12 16 20 12(max-min=8)
  // 20 24 20 20(max-min=4)
  // 24 24 24 24
  
  // 规律
  // ret=sum(所有值-最小值)
  const min=Math.min(...nums)
  return nums.reduce((p,c)=>p+(c-min),0)
};
// @lc code=end

