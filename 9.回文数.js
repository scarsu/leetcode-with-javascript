/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (58.50%)
 * Likes:    1303
 * Dislikes: 0
 * Total Accepted:    490.1K
 * Total Submissions: 837.9K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 方法一 语法糖
  // return x.toString() === x.toString().split('').reverse().join('')

  // 方法二 数学解法
  if(x>=0 && x<10) return true // 边界 个数是回文数
  if(x<0 || x%10===0) return false // 边界 负数 个位是0的数 非回文
  let reverted = 0
  while(x>reverted){
    reverted = reverted*10 + x%10
    x=Math.floor(x/10)
  }
  return x===reverted || Math.floor(reverted/10) === x

};
// @lc code=end

