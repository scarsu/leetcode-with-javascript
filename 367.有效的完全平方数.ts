/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.94%)
 * Likes:    278
 * Dislikes: 0
 * Total Accepted:    96.6K
 * Total Submissions: 216.4K
 * Testcase Example:  '16'
 *
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 14
 * 输出：false
 * 
 * 
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
function isPerfectSquare(num: number): boolean {
  // 1.**运算符
  // return num**0.5%1===0

  // 2.二分查找
  // num<=4时 直接处理
  // num>4时 二分查找上限是num/2 下限是3
  if(num===1 || num===4) return true
  if(num<4) return false
  let left=3
  let right=num/2|0
  while(left<=right){
      const mid=(left+right)/2|0
      const square=mid*mid
      if(square>num){
          right=mid-1
      }else if(square<num){
          left=mid+1
      }else{
          return true
      }
  }
  return false
};
// @lc code=end

