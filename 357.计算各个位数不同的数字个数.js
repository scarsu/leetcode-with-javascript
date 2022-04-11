/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (51.97%)
 * Likes:    237
 * Dislikes: 0
 * Total Accepted:    44.4K
 * Total Submissions: 77.1K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10^n^ 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 2
 * 输出：91
 * 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 0
 * 输出：1
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if(n===0) return 1
  if(n===1) return 10

  // 对于2<=n<=8

  // 首先统计n位长度的数字
  // 第一位有1-9九种选择
  // 第二位有除去第一位之后，再加上0这个选择，共9种选择
  // 同理，第三位有8种选择
  // ...直到第n位，有10-n+1种选择

  // 然后统计n-1位长度的数字
  // ...一直统计到只有1位的数字，即0-9十种选择

  // 即 10 + 9*9 + 9*9*8 + 9*9*8*7 + 9*9*8*7*6 + ... + 9*9*8*7*6*5*4*3*2*1
  
  let res=10
  let cur=9
  for(let i=0;i<n-1;i++){
      cur=cur*(9-i)
      res+=cur
  }
  return res
};
// @lc code=end

