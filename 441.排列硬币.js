/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 *
 * https://leetcode-cn.com/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (41.79%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    63.8K
 * Total Submissions: 141.9K
 * Testcase Example:  '5'
 *
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 * 
 * 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 5
 * 输出：2
 * 解释：因为第三行不完整，所以返回 2 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 8
 * 输出：3
 * 解释：因为第四行不完整，所以返回 3 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  // k(k+1)/2=n 求k
  // k^2+k-2n=0
  // a=1 b=1 c=-2n
  // k=(-b+(b^2-4ac)**0.5)/2a=(-1+(1+8n)**0.5)/2
  // 向下取整
  return ((8*n+1)**0.5-1)/2|0
};
// @lc code=end

