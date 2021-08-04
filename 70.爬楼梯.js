/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.30%)
 * Likes:    1780
 * Dislikes: 0
 * Total Accepted:    512.6K
 * Total Submissions: 975.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 状态转移方程
  // f(n)=f(n-1)+f(n-2)
  // 到达第n个台阶的方法来自于 到达n-1阶和n-2阶的方法之和
  const dp=new Array(n).fill(0)
  dp[0]=1
  dp[1]=2
  for(let i=2;i<n;i++){
      dp[i]=dp[i-1]+dp[i-2]
  }
  return dp[n-1]
};
// @lc code=end

