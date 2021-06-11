/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (58.28%)
 * Likes:    927
 * Dislikes: 0
 * Total Accepted:    150.9K
 * Total Submissions: 245.6K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 * 
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11
 * 不是。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 12
 * 输出：3 
 * 解释：12 = 4 + 4 + 4
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  // 动态规划
  // dp[i]表示何为i的完全平方数的最少数量
  // 找状态转移关系：
  // 对于每个dp[i],遍历[1,根号i]之间的整数j
  // 对于每个j，都满足 dp[i-j^2]+1=dp[i]，找到使dp[i]最小的j
  // 初始状态dp[0]=0
  const dp=new Array(n+1).fill(0)
  dp[0]=0
  for(let i=1;i<n+1;i++){
    let min=Number.MAX_SAFE_INTEGER
    for(let j=1;j*j<=i;j++){
      min=Math.min(min,dp[i-j*j])
    }
    dp[i]=min+1
  }
  return dp[n]
}
// @lc code=end

