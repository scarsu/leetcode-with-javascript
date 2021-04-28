/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Medium (34.19%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    58.7K
 * Total Submissions: 154.2K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 * 
 * 
 * 示例 2：
 * 
 * 输入：c = 3
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：c = 4
 * 输出：true
 * 
 * 
 * 示例 4：
 * 
 * 输入：c = 2
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 输入：c = 1
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= c <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
// 暴力
// var judgeSquareSum = function(c) {
//   const max = Math.floor(Math.sqrt(c/2))
//   for(let i=0;i<=max;i++){
//     if(Math.sqrt(c-i*i)%1===0) return true
//   }
//   return false
// };

// 双指针
var judgeSquareSum = function(c) {
  let b=Math.floor(Math.sqrt(c))
  let a=0
  while(a<=b){
    let cur=a*a+b*b
    if(cur===c){
      return true
    }else if(cur>c){
      b--
    }else if(cur<c){
      a++
    }
  }
  return false
};
// @lc code=end

